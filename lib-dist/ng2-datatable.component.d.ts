import { OnInit } from '@angular/core';
export declare class TableComponent implements OnInit {
    tabledata: Array<any>;
    onValueChanged: Function;
    headerData: string[];
    isEditing: EventTarget;
    reverse: true;
    order: string;
    editedValue: string;
    filter: Object;
    constructor();
    ngOnInit(): void;
    getUniqueKeys(obj: any): string[];
    editValue(e: MouseEvent, obj: any, property: string): void;
}
