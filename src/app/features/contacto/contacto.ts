import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { LucideClock, LucideMail, LucideMapPin, LucidePhone } from '@lucide/angular';

import { ContactoService } from '../../core/contacto/contacto.service';
import { ContactInput, SERVICIO_OPTIONS } from '../../core/contacto/contacto.model';
import { SeoService } from '../../core/seo/seo.service';
import { SITE } from '../../core/site/site.data';

type FormControlName = 'nombre' | 'empresa' | 'email' | 'telefono' | 'servicio' | 'comentario';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, Toast, LucideClock, LucideMail, LucideMapPin, LucidePhone],
  templateUrl: './contacto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacto {
  private readonly fb = inject(FormBuilder);
  private readonly contactoService = inject(ContactoService);
  private readonly messageService = inject(MessageService);
  private readonly seo = inject(SeoService);

  protected readonly site = SITE;
  protected readonly servicioOptions = SERVICIO_OPTIONS;
  protected readonly sending = signal(false);
  protected readonly fieldClass =
    'w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring';

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.maxLength(100)]],
    empresa: ['', [Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
    telefono: ['', [Validators.required, Validators.maxLength(30)]],
    servicio: ['logisticos', [Validators.required]],
    comentario: ['', [Validators.required, Validators.maxLength(1500)]],
  });

  constructor() {
    this.seo.set({
      title: 'Contacto y cotizaciones | Transvisionarios S.A.',
      description:
        'Déjenos sus datos y su requerimiento de transporte, aduanas o tránsitos. Un asesor de Transvisionarios le responde con una propuesta.',
      ogTitle: 'Contacto | Transvisionarios S.A.',
      ogDescription: 'Solicite una cotización de transporte pesado internacional de carga.',
    });
  }

  protected errorFor(name: FormControlName): string | null {
    const control = this.form.controls[name];
    if (!control.touched || control.valid) {
      return null;
    }
    if (control.hasError('required')) {
      return 'Este campo es obligatorio.';
    }
    if (control.hasError('email')) {
      return 'Ingrese un correo válido.';
    }
    if (control.hasError('maxlength')) {
      return `Máximo ${control.getError('maxlength').requiredLength} caracteres.`;
    }
    return null;
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    const data = this.form.getRawValue() as ContactInput;

    this.contactoService.enviar(data).subscribe((res) => {
      this.sending.set(false);
      if (res.ok) {
        this.messageService.add({
          severity: 'success',
          summary: 'Mensaje enviado',
          detail: 'Le responderemos a la brevedad.',
        });
        this.form.reset({ servicio: 'logisticos' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'No se pudo enviar', detail: res.error });
      }
    });
  }
}
