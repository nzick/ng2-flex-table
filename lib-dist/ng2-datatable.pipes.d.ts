import { PipeTransform } from '@angular/core';
export declare class FilterPipe implements PipeTransform {
    transform(array: any[], filter: any): any;
    private resolveType(filter);
}
export declare class OrderPipe implements PipeTransform {
    transform(value: any[], expression: any, reverse?: boolean): any;
    private sortObject(v, e);
}
