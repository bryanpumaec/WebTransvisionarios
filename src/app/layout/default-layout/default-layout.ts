import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SiteFooter } from '../site-footer/site-footer';
import { SiteHeader } from '../site-header/site-header';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  templateUrl: './default-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayout {}
