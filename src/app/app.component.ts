import { Component } from '@angular/core';
import { TableData } from './table-test-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  data;

  constructor() {
    this.data = TableData;
  }

  valChanged(value: EventTarget): void {
    if (value) {
      console.log(value);
    }
  }
}
