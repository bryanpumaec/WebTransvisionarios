import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Transvisionarios S.A. | Transporte pesado y logística internacional',
  },
  {
    path: 'servicios',
    loadComponent: () => import('./features/servicios/servicios').then((m) => m.Servicios),
    title: 'Servicios logísticos, aduaneros y tránsitos | Transvisionarios',
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/nosotros/nosotros').then((m) => m.Nosotros),
    title: 'Nosotros | Transvisionarios S.A.',
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contacto/contacto').then((m) => m.Contacto),
    title: 'Contacto y cotizaciones | Transvisionarios S.A.',
  },
  { path: '**', redirectTo: '' },
];
