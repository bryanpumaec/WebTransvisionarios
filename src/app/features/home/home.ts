import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideArrowRight,
  LucideGlobe2,
  LucideShieldCheck,
  LucideTimer,
  LucideTruck,
} from '@lucide/angular';

import { SeoService } from '../../core/seo/seo.service';
import { SERVICES, SITE } from '../../core/site/site.data';

type DifferentiatorIcon = 'truck' | 'globe2' | 'shield-check' | 'timer';

interface Differentiator {
  icon: DifferentiatorIcon;
  title: string;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LucideArrowRight, LucideGlobe2, LucideShieldCheck, LucideTimer, LucideTruck],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly seo = inject(SeoService);

  protected readonly site = SITE;
  protected readonly services = SERVICES;

  protected readonly differentiators: Differentiator[] = [
    { icon: 'truck', title: 'Flota propia', text: 'Unidades para carga pesada y sobredimensionada.' },
    {
      icon: 'globe2',
      title: 'Cobertura regional',
      text: 'Rutas terrestres internacionales y pasos de frontera.',
    },
    {
      icon: 'shield-check',
      title: 'Carga asegurada',
      text: 'Custodia, precintos y monitoreo satelital 24/7.',
    },
    {
      icon: 'timer',
      title: 'Cumplimiento',
      text: 'Plazos aduaneros y de tránsito siempre controlados.',
    },
  ];

  constructor() {
    this.seo.set({
      title: `${this.site.name} | Transporte pesado y logística internacional`,
      description:
        'Transporte pesado internacional de carga, servicios logísticos, aduaneros y tránsitos. Cotiza con Transvisionarios S.A.',
      ogTitle: `${this.site.name} | Transporte y logística internacional`,
      ogDescription: 'Logística, aduanas y tránsitos para carga pesada internacional.',
    });
  }
}
