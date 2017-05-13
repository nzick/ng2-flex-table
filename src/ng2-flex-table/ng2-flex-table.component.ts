import { Component, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-flex-table',
  templateUrl: 'ng2-flex-table.component.html',
   styleUrls: ['./ng2-flex-table.component.sass'],
})

export class TableComponent implements OnInit {
  @Input() tabledata: Array<any> = [];
  @Input() onValueChanged: Function;

  headerData: string[];
  isEditing: EventTarget;
  reverse: true;
  order: string;
  editedValue: string;
  filter: Object = {};

  constructor() {}

  ngOnInit(): void {
    this.headerData = this.getUniqueKeys(this.tabledata);
    this.order = this.headerData[0];
  }

  getUniqueKeys(obj: any): string[] {
    return obj.reduce((acc, curr) => {
      Object.keys(curr).forEach(key => {
          if (acc.indexOf(key) === -1) {
            acc.push(key);
          }
        });
      return acc;
    }, []);
  }

  editValue(e: MouseEvent, obj: any, property: string): void {
    if (!this.isEditing || this.isEditing === e.target) {
      if (this.isEditing && this.editedValue !== e.target['value']) {
        obj[property] = this.isEditing['value'];
        this.onValueChanged(obj);
      }
      e.target['disabled'] = !e.target['disabled'];
      this.editedValue = !e.target['disabled'] ? e.target['value'] : undefined;
      this.isEditing = !e.target['disabled'] ? e.target : undefined;
    }
  }
}
