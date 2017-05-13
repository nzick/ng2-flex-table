import { Pipe } from '@angular/core';
export var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (array, filter) {
        return array && Object.keys(filter).length !== 0 ? array.filter(this.resolveType(filter)) : array;
    };
    FilterPipe.prototype.resolveType = function (filter) {
        var _this = this;
        switch (typeof filter) {
            case 'boolean': return function (value) { return Boolean(value) === filter; };
            case 'string': return function (value) { return !filter || (value ? ('' + value).toLowerCase().indexOf(filter.toLowerCase()) !== -1 : false); };
            case 'object': return function (value) {
                for (var key in filter) {
                    if (filter.hasOwnProperty(key) &&
                        !value.hasOwnProperty(key) && !Object.getOwnPropertyDescriptor(Object.getPrototypeOf(value), key) ||
                        !_this.resolveType(filter[key])(typeof value[key] === 'function' ? value() : value[key])) {
                        return false;
                    }
                }
                return true;
            };
            default: return function (value) { return !filter || filter === value; };
        }
    };
    FilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'filterBy',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    FilterPipe.ctorParameters = function () { return []; };
    return FilterPipe;
}());
export var OrderPipe = (function () {
    function OrderPipe() {
    }
    OrderPipe.prototype.transform = function (value, expression, reverse) {
        return reverse && value ? this.sortObject(value, expression).reverse() : this.sortObject(value, expression);
    };
    OrderPipe.prototype.sortObject = function (v, e) {
        return v.sort(function (a, b) { return a[e] > b[e] ? 1 : -1; });
    };
    OrderPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'orderBy'
                },] },
    ];
    /** @nocollapse */
    OrderPipe.ctorParameters = function () { return []; };
    return OrderPipe;
}());
//# sourceMappingURL=ng2-datatable.pipes.js.map