import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableComponent } from './ng2-flex-table.component';
import { FilterPipe, OrderPipe } from './ng2-flex-table.pipes';

@NgModule({
  declarations: [
    TableComponent,
    FilterPipe, 
    OrderPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    FormsModule
  ]
})
export class DataTableModule { }
