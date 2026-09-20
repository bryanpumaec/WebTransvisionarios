import { Routes } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { FIREBASE_CONFIG } from '../../core/firebase/firebase.config';
import { ContactService } from '../../core/contact/contact.service';

// Firebase/Firestore solo se necesita en /contacto: al vivir en este archivo
// (cargado vía loadChildren), sus providers viajan en el chunk lazy de esta
// ruta en vez de en el bundle inicial de toda la app. ContactService viaja
// aquí también (no es providedIn:'root') para que resuelva Firestore desde
// este mismo injector.
export const CONTACT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./contact').then((m) => m.Contact),
    providers: [
      provideFirebaseApp(() => initializeApp(FIREBASE_CONFIG)),
      provideFirestore(() => getFirestore()),
      ContactService,
    ],
    title: 'Contacto y cotizaciones | Transvisionarios S.A.',
  },
];
