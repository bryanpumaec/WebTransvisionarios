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
    loadComponent: () => import('./shared/coming-soon/coming-soon').then((m) => m.ComingSoon),
    title: 'Nosotros | Transvisionarios S.A.',
  },
  {
    path: 'contacto',
    loadComponent: () => import('./shared/coming-soon/coming-soon').then((m) => m.ComingSoon),
    title: 'Contacto | Transvisionarios S.A.',
  },
  { path: '**', redirectTo: '' },
];
