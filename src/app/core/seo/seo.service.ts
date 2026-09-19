import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  set(data: SeoMeta): void {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:title', content: data.ogTitle ?? data.title });
    this.meta.updateTag({
      property: 'og:description',
      content: data.ogDescription ?? data.description,
    });
  }
}
