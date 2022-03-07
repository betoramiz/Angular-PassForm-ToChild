import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  form: FormGroup;

  get addressForm() {
    return this.form.get('address') as FormGroup;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['Alberto'],
      address: this.fb.group({
        street: ['calle 6'],
      }),
    });
  }
}
