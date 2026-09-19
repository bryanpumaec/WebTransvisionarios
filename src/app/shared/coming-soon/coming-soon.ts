import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="mx-auto max-w-3xl px-4 py-28 text-center">
      <h1 class="font-display text-3xl font-bold uppercase text-primary md:text-4xl">{{ titulo() }}</h1>
      <p class="mt-4 text-muted-foreground">Esta página está en construcción como parte de la migración a Angular.</p>
      <a routerLink="/" class="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground">
        Volver al inicio
      </a>
    </section>
  `,
})
export class ComingSoon {
  readonly titulo = input('Próximamente');
}
