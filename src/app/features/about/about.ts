import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LucideCompass, LucideHandshake, LucideTarget } from '@lucide/angular';

import { SeoService } from '../../core/seo/seo.service';
import { SITE } from '../../core/site/site.data';

type BlockIcon = 'target' | 'compass' | 'handshake';

interface Block {
  icon: BlockIcon;
  title: string;
  text: string;
}

interface Statistic {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideCompass, LucideHandshake, LucideTarget],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  private readonly seo = inject(SeoService);

  protected readonly site = SITE;

  protected readonly blocks: Block[] = [
    {
      icon: 'target',
      title: 'Misión',
      text: 'Entregar cada carga completa, a tiempo y con la documentación en regla, cuidando el costo total de la operación de nuestros clientes.',
    },
    {
      icon: 'compass',
      title: 'Cobertura',
      text: 'Rutas nacionales y corredores internacionales terrestres, con coordinación en pasos de frontera y puertos.',
    },
    {
      icon: 'handshake',
      title: 'Cómo trabajamos',
      text: 'Un asesor asignado por cuenta, reportes de estado y comunicación directa con el conductor y el agente de aduana.',
    },
  ];

  protected readonly statistics: Statistic[] = [
    { value: '+15', label: 'años moviendo carga pesada' },
    { value: '24/7', label: 'monitoreo satelital de la flota' },
    { value: '100%', label: 'cargas con seguro y custodia' },
  ];

  constructor() {
    this.seo.set({
      title: `Nosotros | ${this.site.name}`,
      description:
        'Somos una compañía de transporte pesado internacional de carga: flota propia, gestión aduanera y cobertura regional.',
      ogTitle: `Nosotros | ${this.site.name}`,
      ogDescription: 'Transporte pesado internacional con flota propia y gestión aduanera integral.',
    });
  }
}
