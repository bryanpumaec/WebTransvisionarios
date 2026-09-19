import { Service, SiteConfig } from './site.model';

/**
 * Contenido provisional inferido del meta-description y componentes originales.
 * Reemplaza estos valores por los reales de "@/lib/site" cuando los compartas.
 */
export const SITE: SiteConfig = {
  name: 'Transvisionarios S.A.',
  tagline: 'Transporte pesado y logística internacional',
  phone: '+593 99 999 9999',
  email: 'contacto@transvisionarios.com',
  address: 'Quito, Ecuador',
  hours: 'Lunes a viernes, 08:00 a 18:00',
};

export const SERVICES: Service[] = [
  {
    slug: 'logisticos',
    title: 'Servicios logísticos',
    summary:
      'Planificación de rutas, consolidación de carga y coordinación puerta a puerta con trazabilidad de punta a punta.',
    details: [
      'Transporte de carga pesada y sobredimensionada',
      'Consolidación y desconsolidación de carga',
      'Seguimiento satelital en tiempo real',
      'Custodia y precintos de seguridad',
    ],
    benefit: 'Un solo responsable para toda la cadena, sin intermediarios que diluyan la trazabilidad.',
  },
  {
    slug: 'aduaneros',
    title: 'Servicios aduaneros',
    summary: 'Gestión aduanera de importación y exportación con cumplimiento normativo en cada frontera.',
    details: [
      'Trámites de importación y exportación',
      'Clasificación arancelaria y documentación',
      'Representación ante autoridades aduaneras',
      'Gestión de permisos y licencias especiales',
    ],
    benefit: 'Reducimos tiempos de nacionalización evitando contratiempos documentales.',
  },
  {
    slug: 'transitos',
    title: 'Tránsitos',
    summary: 'Tránsitos internacionales con custodia y control de plazos en cada paso de frontera.',
    details: [
      'Tránsitos aduaneros internacionales (TIM, DTA, etc.)',
      'Custodia armada y monitoreo 24/7',
      'Gestión de garantías y pólizas de tránsito',
      'Cumplimiento de plazos legales de tránsito',
    ],
    benefit: 'Control total del tránsito desde el origen hasta el punto de entrega.',
  },
];
