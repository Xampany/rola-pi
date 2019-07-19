import { Component, OnInit } from '@angular/core';
import { Led } from '../model/led';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {
  color = 'red';

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      colorCtrl: new FormControl(
        {
          value: this.color,
          disabled: false
        },
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(3)],
          asyncValidators: []
        }
      )
    });
  }

  updateColor(value: Readonly<Pick<Led, 'color'>>) {
    console.log(value);
  }
}
