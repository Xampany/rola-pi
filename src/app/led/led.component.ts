import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {
  index = 0;
  color = '#ffccbb';

  constructor() {}

  ngOnInit() {}
}
