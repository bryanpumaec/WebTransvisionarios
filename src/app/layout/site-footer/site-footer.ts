import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideMail, LucideMapPin, LucidePhone } from '@lucide/angular';

import { SITE } from '../../core/site/site.data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, LucideMail, LucideMapPin, LucidePhone],
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();
}
