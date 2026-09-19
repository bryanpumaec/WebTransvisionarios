export type ServicioInteres = 'logisticos' | 'aduaneros' | 'transitos' | 'otro';

export interface ContactInput {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicio: ServicioInteres;
  comentario: string;
}

export interface ServicioOption {
  value: ServicioInteres;
  label: string;
}

export const SERVICIO_OPTIONS: ServicioOption[] = [
  { value: 'logisticos', label: 'Servicios logísticos' },
  { value: 'aduaneros', label: 'Servicios aduaneros' },
  { value: 'transitos', label: 'Tránsitos' },
  { value: 'otro', label: 'Otro / no estoy seguro' },
];

export type ContactResult = { ok: true } | { ok: false; error: string };
