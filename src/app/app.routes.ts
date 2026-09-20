import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Transvisionarios S.A. | Transporte pesado y logística internacional',
  },
  {
    path: 'servicios',
    loadComponent: () => import('./features/services/services').then((m) => m.Services),
    title: 'Servicios logísticos, aduaneros y tránsitos | Transvisionarios',
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    title: 'Nosotros | Transvisionarios S.A.',
  },
  {
    path: 'contacto',
    loadChildren: () => import('./features/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
