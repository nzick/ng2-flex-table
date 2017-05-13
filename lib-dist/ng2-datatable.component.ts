import { Component, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-datatable',
  template: `<div class="ng2-datatable"><table class="ng2-datatable__component"><thead class="ng2-datatable__header"><tr><th *ngFor="let head of headerData" [class.sorted]="order === head"><div class="ng2-datatable__header__content" (click)="reverse = !reverse; order = head"><span class="ng2-datatable__header__content__headline">{{ head }} </span><i class="icon" *ngIf="head === order"><svg *ngIf="reverse" version="1.1" x="0px" y="0px" viewBox="0 0 240.835 240.835" style="enable-background:new 0 0 240.835 240.835" xml:space="preserve" width="10px" height="10px"><path fill="#fff" d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155   c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155   L129.007,57.819z"/></svg> <svg *ngIf="!reverse" version="1.1" x="0px" y="0px" viewBox="0 0 240.811 240.811" style="enable-background:new 0 0 240.811 240.811" xml:space="preserve" width="10px" height="10px"><path fill="#fff" id="Expand_More" d="M220.088,57.667l-99.671,99.695L20.746,57.655c-4.752-4.752-12.439-4.752-17.191,0   c-4.74,4.752-4.74,12.451,0,17.203l108.261,108.297l0,0l0,0c4.74,4.752,12.439,4.752,17.179,0L237.256,74.859   c4.74-4.752,4.74-12.463,0-17.215C232.528,52.915,224.828,52.915,220.088,57.667z"/></svg></i></div><div class="inner-addon right-addon"><i class="icon" (click)="filter[head] = ''"><svg width="17" height="13" viewBox="0 0 36 36" version="1.1"><path fill="#b5b5b5" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path><path fill="#b5b5b5" d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path></svg> </i><input class="ng2-datatable__header__content__input" [(ngModel)]="filter[head]"></div></th></tr></thead><tbody class="ng2-datatable__body"><tr *ngFor="let d of tabledata | filterBy: filter | orderBy: order : reverse "><td *ngFor="let column of headerData " (dblclick)="editValue($event, d, column)" [class.sorted]="order === column"><input class="table__input" value="{{ d[column] || '' }}" disabled="disabled"></td></tr></tbody></table></div>`,
   styles: [`.ng2-datatable{background-color:#fff;table-layout:fixed;border-collapse:collapse}.ng2-datatable table{border-collapse:collapse;border-spacing:0}.ng2-datatable td,.ng2-datatable th{text-align:left;padding:.5em .75em;border-bottom-color:rgba(39,73,87,.05)}.ng2-datatable td{border:1px solid #dbdbdb;border-width:0 0 1px}.ng2-datatable tr:hover{background-color:#fafafa}.ng2-datatable td:nth-child(n),.ng2-datatable th:nth-child(n){width:150px}.ng2-datatable td:nth-last-child(1),.ng2-datatable th:nth-last-child(1){width:150px}.ng2-datatable th:nth-child(1){border-top-left-radius:10px}.ng2-datatable th:nth-last-child(1){border-top-right-radius:10px}.ng2-datatable__header{height:10rem}.ng2-datatable__header .sorted{background-color:#1b4657}.ng2-datatable__header th{text-transform:uppercase;cursor:pointer;background-color:#114357;border:0}.ng2-datatable__header tr:nth-child(1):hover{background-color:#fff}.ng2-datatable__header tr{display:block;position:relative}.ng2-datatable__header .block{display:none}.ng2-datatable__header__content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff}.ng2-datatable__header__content__input{display:block}.ng2-datatable__header__content__input:focus{background-color:#d67323!important}.ng2-datatable__header__content .icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ng2-datatable__body{display:block;overflow:auto;width:100%;height:500px}.ng2-datatable__body .sorted{background-color:#fafafa}.ng2-datatable span.column-resizer{display:block;position:absolute;top:0;right:0;margin:0;width:8px;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.ng2-datatable input{border:0;font-size:12px;padding:3px;display:block;border-radius:3px;color:#fff;-webkit-transition:all .2s ease;transition:all .2s ease;background-color:#274957;width:100%;outline:0}.ng2-datatable input:disabled{border:0;background-color:transparent;color:#333}.ng2-datatable input[value]:not([value=""]){background-color:#d67323}.ng2-datatable .inner-addon{position:relative}.ng2-datatable .inner-addon i{visibility:hidden;opacity:0;-webkit-transition:visibility 0s,all .2s ease;transition:visibility 0s,all .2s ease}.ng2-datatable .inner-addon:hover i{visibility:visible;opacity:.6}.ng2-datatable .inner-addon .icon{position:absolute;cursor:pointer;color:#b5b5b5}.ng2-datatable .left-addon .icon{left:0}.ng2-datatable .right-addon .icon{right:0}`],
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
