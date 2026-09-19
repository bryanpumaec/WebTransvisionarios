import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DefaultLayout } from './layout/default-layout/default-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
