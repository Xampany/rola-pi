import { Component, OnInit, OnDestroy } from '@angular/core';
import { Led } from '../model/led';
import { LedService } from '../shared/led.service';
import { delay, tap, switchMapTo, take } from 'rxjs/operators';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css']
})
export class LedListComponent implements OnInit, OnDestroy {
  leds: Led[];

  private sub: Subscription;

  constructor(private service: LedService) {}

  ngOnInit() {
    const timer$ = timer(2000, 10000);

    const leds$ = this.service.getLeds().pipe(tap(res => console.log(res)));

    this.sub = timer$
      .pipe(
        take(2),
        switchMapTo(leds$)
      )
      .subscribe({
        next: res => (this.leds = res),
        complete: () => console.log('done')
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  updateLed(index: number) {
    this.service.setLed(index).subscribe({
      next: led => {
        this.leds[index] = led;
      }
    });
  }
}
