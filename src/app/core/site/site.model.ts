export interface Service {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  benefit: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
}
