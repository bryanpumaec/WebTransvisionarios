import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FirebaseApp } from '@angular/fire/app';
import { Messaging, getMessaging, getToken, isSupported, onMessage } from '@angular/fire/messaging';

/**
 * Firebase Cloud Messaging (notificaciones push) solo puede inicializarse en
 * el navegador: depende de Service Worker / Notification API, que no existen
 * en Node. Por eso NO se registra como provider en app.config.ts (eso rompería
 * el prerender/SSR) — en su lugar, este servicio crea la instancia de forma
 * perezosa, solo cuando algo la pide desde código que ya sabe que corre en
 * el navegador (p. ej. un botón "Activar notificaciones").
 */
@Injectable({ providedIn: 'root' })
export class MessagingService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly app = inject(FirebaseApp);
  private messaging: Messaging | null = null;

  private async ensureMessaging(): Promise<Messaging | null> {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }
    if (this.messaging) {
      return this.messaging;
    }
    if (!(await isSupported())) {
      return null;
    }
    this.messaging = getMessaging(this.app);
    return this.messaging;
  }

  /**
   * Pide permiso de notificaciones al usuario y, si lo concede, devuelve el
   * token FCM del dispositivo (o null si no hay soporte/permiso).
   * @param vapidKey clave pública VAPID del proyecto (Firebase Console →
   * Project Settings → Cloud Messaging → Web configuration).
   */
  async requestPermissionAndGetToken(vapidKey: string): Promise<string | null> {
    const messaging = await this.ensureMessaging();
    if (!messaging) {
      return null;
    }
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      return null;
    }
    return getToken(messaging, { vapidKey });
  }

  /** Escucha mensajes recibidos mientras la app está en primer plano. */
  async listenForMessages(callback: Parameters<typeof onMessage>[1]): Promise<void> {
    const messaging = await this.ensureMessaging();
    if (messaging) {
      onMessage(messaging, callback);
    }
  }
}
