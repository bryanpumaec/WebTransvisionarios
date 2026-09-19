import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LucideCompass, LucideHandshake, LucideTarget } from '@lucide/angular';

import { SeoService } from '../../core/seo/seo.service';
import { SITE } from '../../core/site/site.data';

type BloqueIcon = 'target' | 'compass' | 'handshake';

interface Bloque {
  icon: BloqueIcon;
  titulo: string;
  texto: string;
}

interface Estadistica {
  k: string;
  v: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [LucideCompass, LucideHandshake, LucideTarget],
  templateUrl: './nosotros.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nosotros {
  private readonly seo = inject(SeoService);

  protected readonly site = SITE;

  protected readonly bloques: Bloque[] = [
    {
      icon: 'target',
      titulo: 'Misión',
      texto:
        'Entregar cada carga completa, a tiempo y con la documentación en regla, cuidando el costo total de la operación de nuestros clientes.',
    },
    {
      icon: 'compass',
      titulo: 'Cobertura',
      texto:
        'Rutas nacionales y corredores internacionales terrestres, con coordinación en pasos de frontera y puertos.',
    },
    {
      icon: 'handshake',
      titulo: 'Cómo trabajamos',
      texto:
        'Un asesor asignado por cuenta, reportes de estado y comunicación directa con el conductor y el agente de aduana.',
    },
  ];

  protected readonly estadisticas: Estadistica[] = [
    { k: '+15', v: 'años moviendo carga pesada' },
    { k: '24/7', v: 'monitoreo satelital de la flota' },
    { k: '100%', v: 'cargas con seguro y custodia' },
  ];

  constructor() {
    this.seo.set({
      title: `Nosotros | ${this.site.nombre}`,
      description:
        'Somos una compañía de transporte pesado internacional de carga: flota propia, gestión aduanera y cobertura regional.',
      ogTitle: `Nosotros | ${this.site.nombre}`,
      ogDescription: 'Transporte pesado internacional con flota propia y gestión aduanera integral.',
    });
  }
}
