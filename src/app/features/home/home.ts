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
import { SERVICIOS, SITE } from '../../core/site/site.data';

type DiferencialIcon = 'truck' | 'globe2' | 'shield-check' | 'timer';

interface Diferencial {
  icon: DiferencialIcon;
  titulo: string;
  texto: string;
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
  protected readonly servicios = SERVICIOS;

  protected readonly diferenciales: Diferencial[] = [
    { icon: 'truck', titulo: 'Flota propia', texto: 'Unidades para carga pesada y sobredimensionada.' },
    {
      icon: 'globe2',
      titulo: 'Cobertura regional',
      texto: 'Rutas terrestres internacionales y pasos de frontera.',
    },
    {
      icon: 'shield-check',
      titulo: 'Carga asegurada',
      texto: 'Custodia, precintos y monitoreo satelital 24/7.',
    },
    {
      icon: 'timer',
      titulo: 'Cumplimiento',
      texto: 'Plazos aduaneros y de tránsito siempre controlados.',
    },
  ];

  constructor() {
    this.seo.set({
      title: `${this.site.nombre} | Transporte pesado y logística internacional`,
      description:
        'Transporte pesado internacional de carga, servicios logísticos, aduaneros y tránsitos. Cotiza con Transvisionarios S.A.',
      ogTitle: `${this.site.nombre} | Transporte y logística internacional`,
      ogDescription: 'Logística, aduanas y tránsitos para carga pesada internacional.',
    });
  }
}
