export interface Servicio {
  slug: string;
  titulo: string;
  resumen: string;
  detalle: string[];
  beneficio: string;
}

export interface SiteConfig {
  nombre: string;
  tagline: string;
  telefono: string;
  email: string;
  direccion: string;
  horario: string;
}
