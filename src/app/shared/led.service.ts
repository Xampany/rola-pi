import { Injectable } from '@angular/core';
import { Led } from '../model/led';
import { Observable, of } from 'rxjs';
import { RestService } from './rest.service';
import { map } from 'rxjs/operators';
import * as tinycolor from 'tinycolor2';

@Injectable({
  providedIn: 'root'
})
export class LedService {
  constructor(private rest: RestService) {}

  /**
   * Gibt die Liste der Leds (auf dem Raspberry Pi?) zurück
   */
  getLeds(): Observable<Led[]> {
    const colors$ = this.rest.readColors();
    const leds$ = colors$.pipe(map(colors => this.parseColors(colors)));
    return leds$;
  }

  setLed(
    index: number,
    color = tinycolor.random().toString()
  ): Observable<Led> {
    const color$ = this.rest.updateColor(index, color);
    return color$.pipe(
      map(result => {
        return {
          index,
          color: result
        };
      })
    );
  }

  /**
   *
   * @param colors Die Liste der Farbstrings
   */
  private parseColors(colors: string[]): Led[] {
    return colors.map((color, index) => {
      return {
        index,
        color
      };
    });
  }
}
