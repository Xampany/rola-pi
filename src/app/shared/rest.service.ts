import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(
    private client: HttpClient,
    @Inject('BASE_URL') private readonly BASE: string
  ) {}

  readColors(): Observable<string[]> {
    const url = `${this.BASE}/colors`;
    const colors$ = this.client.get<string[]>(url);
    return colors$;
  }

  updateColor(index: number, color: string): Observable<string> {
    const url = `${this.BASE}/colors/${index}`;
    const body = { color };
    const color$ = this.client.put(url, body, {
      responseType: 'text'
    });
    return color$;
  }
}
