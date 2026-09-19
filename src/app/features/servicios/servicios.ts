import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight, LucideCheck } from '@lucide/angular';

import { SeoService } from '../../core/seo/seo.service';
import { SERVICIOS } from '../../core/site/site.data';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink, LucideArrowRight, LucideCheck],
  templateUrl: './servicios.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Servicios {
  private readonly seo = inject(SeoService);

  protected readonly servicios = SERVICIOS;

  constructor() {
    this.seo.set({
      title: 'Servicios logísticos, aduaneros y tránsitos | Transvisionarios',
      description:
        'Transporte y logística de carga pesada, gestión aduanera de importación y exportación, y tránsitos internacionales con custodia.',
      ogTitle: 'Servicios | Transvisionarios S.A.',
      ogDescription: 'Logística, aduanas y tránsitos para carga pesada internacional.',
    });
  }

  protected pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
