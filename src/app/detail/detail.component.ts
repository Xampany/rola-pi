import { Component, OnInit } from '@angular/core';
import { Led } from '../model/led';
import { LedService } from '../shared/led.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  led: Led;

  constructor(private service: LedService, private route: ActivatedRoute) {}

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('index');

    this.service
      .getLeds()
      .pipe(map(leds => leds[index]))
      .subscribe({
        next: led => (this.led = led)
      });
  }
}
