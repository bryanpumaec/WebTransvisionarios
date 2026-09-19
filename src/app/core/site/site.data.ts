import { Servicio, SiteConfig } from './site.model';

/**
 * Contenido provisional inferido del meta-description y componentes originales.
 * Reemplaza estos valores por los reales de "@/lib/site" cuando los compartas.
 */
export const SITE: SiteConfig = {
  nombre: 'Transvisionarios S.A.',
  tagline: 'Transporte pesado y logística internacional',
  telefono: '+593 99 999 9999',
  email: 'contacto@transvisionarios.com',
  direccion: 'Quito, Ecuador',
  horario: 'Lunes a viernes, 08:00 a 18:00',
};

export const SERVICIOS: Servicio[] = [
  {
    slug: 'logisticos',
    titulo: 'Servicios logísticos',
    resumen:
      'Planificación de rutas, consolidación de carga y coordinación puerta a puerta con trazabilidad de punta a punta.',
    detalle: [
      'Transporte de carga pesada y sobredimensionada',
      'Consolidación y desconsolidación de carga',
      'Seguimiento satelital en tiempo real',
      'Custodia y precintos de seguridad',
    ],
    beneficio: 'Un solo responsable para toda la cadena, sin intermediarios que diluyan la trazabilidad.',
  },
  {
    slug: 'aduaneros',
    titulo: 'Servicios aduaneros',
    resumen: 'Gestión aduanera de importación y exportación con cumplimiento normativo en cada frontera.',
    detalle: [
      'Trámites de importación y exportación',
      'Clasificación arancelaria y documentación',
      'Representación ante autoridades aduaneras',
      'Gestión de permisos y licencias especiales',
    ],
    beneficio: 'Reducimos tiempos de nacionalización evitando contratiempos documentales.',
  },
  {
    slug: 'transitos',
    titulo: 'Tránsitos',
    resumen: 'Tránsitos internacionales con custodia y control de plazos en cada paso de frontera.',
    detalle: [
      'Tránsitos aduaneros internacionales (TIM, DTA, etc.)',
      'Custodia armada y monitoreo 24/7',
      'Gestión de garantías y pólizas de tránsito',
      'Cumplimiento de plazos legales de tránsito',
    ],
    beneficio: 'Control total del tránsito desde el origen hasta el punto de entrega.',
  },
];
