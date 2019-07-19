import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class RestStubService {
  constructor() {}

  readColors(): Observable<string[]> {
    return of([
      'cyan',
      'magenta',
      'yellow',
      'black',
      'red',
      'green',
      'blue',
      'white'
    ]);
  }

  updateColor(index: number, color: string): Observable<string> {
    return of('goldenrod');
  }
}
