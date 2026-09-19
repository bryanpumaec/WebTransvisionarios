import { Servicio, SiteConfig } from './site.model';

/**
 * Contenido provisional inferido del meta-description original.
 * Reemplaza estos valores por los reales de "@/lib/site" cuando los compartas.
 */
export const SITE: SiteConfig = {
  nombre: 'Transvisionarios S.A.',
  tagline: 'Transporte pesado y logística internacional',
  telefono: '+593 99 999 9999',
  email: 'contacto@transvisionarios.com',
  direccion: 'Quito, Ecuador',
};

export const SERVICIOS: Servicio[] = [
  {
    slug: 'transporte-pesado',
    titulo: 'Transporte pesado',
    resumen:
      'Carga pesada y sobredimensionada con flota propia, cobertura terrestre internacional y monitoreo satelital.',
  },
  {
    slug: 'logistica-internacional',
    titulo: 'Logística internacional',
    resumen:
      'Planificación de rutas, consolidación de carga y coordinación puerta a puerta con trazabilidad de punta a punta.',
  },
  {
    slug: 'aduanas-y-transitos',
    titulo: 'Aduanas y tránsitos',
    resumen:
      'Gestión aduanera, documentación de tránsito y cumplimiento normativo en cada paso de frontera.',
  },
];
