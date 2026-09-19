import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { ContactInput, ContactResult } from './contacto.model';

@Injectable({ providedIn: 'root' })
export class ContactoService {
  private readonly http = inject(HttpClient);

  enviar(data: ContactInput): Observable<ContactResult> {
    return this.http.post<ContactResult>('/api/contacto', data).pipe(
      catchError(() => of<ContactResult>({ ok: false, error: 'No pudimos enviar el mensaje. Intente nuevamente.' })),
    );
  }
}
