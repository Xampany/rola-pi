import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly BASE =
    'https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api';

  constructor(private client: HttpClient) {}

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
