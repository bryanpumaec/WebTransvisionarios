export type ServiceInterest = 'logisticos' | 'aduaneros' | 'transitos' | 'other';

export interface ContactInput {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: ServiceInterest;
  comment: string;
}

export interface ServiceOption {
  value: ServiceInterest;
  label: string;
}

export const SERVICE_OPTIONS: ServiceOption[] = [
  { value: 'logisticos', label: 'Servicios logísticos' },
  { value: 'aduaneros', label: 'Servicios aduaneros' },
  { value: 'transitos', label: 'Tránsitos' },
  { value: 'other', label: 'Otro / no estoy seguro' },
];

export type ContactResult = { ok: true } | { ok: false; error: string };
