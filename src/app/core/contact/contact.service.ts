import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, serverTimestamp } from '@angular/fire/firestore';
import { Observable, catchError, from, map, of, tap } from 'rxjs';

import { ContactInput, ContactRequest, ContactResult } from './contact.model';

// Scoped to the /contacto route's providers (see contact.routes.ts), not root:
// it depends on Firestore, which only exists in that route's environment injector.
@Injectable()
export class ContactService {
  private readonly firestore = inject(Firestore);

  send(data: ContactInput): Observable<ContactResult> {
    const request: ContactRequest = { ...data, createdAt: serverTimestamp() };
    const requests = collection(this.firestore, 'contact_requests');

    console.debug('[ContactService] enviando a contact_requests', data);

    return from(addDoc(requests, request)).pipe(
      tap((doc) => console.debug('[ContactService] documento creado', doc.id)),
      map(() => ({ ok: true }) as ContactResult),
      catchError((error: unknown) => {
        console.error('[ContactService] fallo al escribir en Firestore', error);
        return of<ContactResult>({ ok: false, error: 'No pudimos enviar el mensaje. Intente nuevamente.' });
      }),
    );
  }
}
