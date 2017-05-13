import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './ng2-datatable.component';
import { FilterPipe, OrderPipe } from './ng2-datatable.pipes';
export var DataTableModule = (function () {
    function DataTableModule() {
    }
    DataTableModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    DataTableModule.ctorParameters = function () { return []; };
    return DataTableModule;
}());
//# sourceMappingURL=ng2-datatable.module.js.map