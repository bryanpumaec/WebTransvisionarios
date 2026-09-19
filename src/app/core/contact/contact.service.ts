import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { ContactInput, ContactResult } from './contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(data: ContactInput): Observable<ContactResult> {
    return this.http.post<ContactResult>('/api/contact', data).pipe(
      catchError(() => of<ContactResult>({ ok: false, error: 'No pudimos enviar el mensaje. Intente nuevamente.' })),
    );
  }
}
