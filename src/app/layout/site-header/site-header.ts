import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideMenu } from '@lucide/angular';

import { SITE } from '../../core/site/site.data';

interface NavLink {
  to: string;
  label: string;
}

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideMenu],
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly site = SITE;
  protected readonly open = signal(false);

  protected readonly links: NavLink[] = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
  ];

  protected toggle(): void {
    this.open.update((v) => !v);
  }

  protected close(): void {
    this.open.set(false);
  }
}
