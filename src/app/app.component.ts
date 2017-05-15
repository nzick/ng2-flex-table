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

  tableEvents(value: Event): void {
    if (value) {
      console.log(value);
    }
  }
}
