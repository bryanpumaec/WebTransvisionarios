import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { Button } from 'primeng/button';
import { Message } from 'primeng/message';
import { FloatLabel } from 'primeng/floatlabel';
import { LucideClock, LucideMail, LucideMapPin, LucidePhone } from '@lucide/angular';

import { ContactService } from '../../core/contact/contact.service';
import { ContactInput, SERVICE_OPTIONS } from '../../core/contact/contact.model';
import { SeoService } from '../../core/seo/seo.service';
import { SITE } from '../../core/site/site.data';

type FormControlName = 'name' | 'company' | 'email' | 'phone' | 'service' | 'comment';

// Solo dígitos, con un "+" opcional al inicio para códigos de país (ej. +593999999999).
// Sin "+", el número debe tener exactamente 10 dígitos (celular/fijo local).
const PHONE_PATTERN = /^(\+[0-9]{8,15}|[0-9]{10})$/;
// Letras (incluye acentos/ñ), espacios, apóstrofes y guiones.
const NAME_PATTERN = /^[A-Za-zÀ-ÿ'-]+(?:\s[A-Za-zÀ-ÿ'-]+)*$/;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    Toast,
    InputText,
    Textarea,
    Select,
    Button,
    Message,
    FloatLabel,
    LucideClock,
    LucideMail,
    LucideMapPin,
    LucidePhone,
  ],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly messageService = inject(MessageService);
  private readonly seo = inject(SeoService);

  protected readonly site = SITE;
  protected readonly serviceOptions = SERVICE_OPTIONS;
  protected readonly sending = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern(NAME_PATTERN)]],
    company: ['', [Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
    phone: ['', [Validators.required, Validators.pattern(PHONE_PATTERN)]],
    service: ['logisticos', [Validators.required]],
    comment: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1500)]],
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
    if (control.hasError('minlength')) {
      return `Mínimo ${control.getError('minlength').requiredLength} caracteres.`;
    }
    if (control.hasError('maxlength')) {
      return `Máximo ${control.getError('maxlength').requiredLength} caracteres.`;
    }
    if (control.hasError('pattern')) {
      if (name === 'phone') {
        return 'Use solo números y, si aplica, el + del código de país (ej. +593999999999).';
      }
      if (name === 'name') {
        return 'Ingrese solo letras y espacios.';
      }
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

    this.contactService.send(data).subscribe((res) => {
      this.sending.set(false);
      if (res.ok) {
        this.messageService.add({
          severity: 'success',
          summary: 'Mensaje enviado',
          detail: 'Le responderemos a la brevedad.',
        });
        this.form.reset({ service: 'logisticos' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'No se pudo enviar', detail: res.error });
      }
    });
  }
}
