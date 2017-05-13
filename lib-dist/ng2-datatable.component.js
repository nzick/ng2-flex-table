import { Component, Input } from '@angular/core';
export var TableComponent = (function () {
    function TableComponent() {
        this.tabledata = [];
        this.filter = {};
    }
    TableComponent.prototype.ngOnInit = function () {
        this.headerData = this.getUniqueKeys(this.tabledata);
        this.order = this.headerData[0];
    };
    TableComponent.prototype.getUniqueKeys = function (obj) {
        return obj.reduce(function (acc, curr) {
            Object.keys(curr).forEach(function (key) {
                if (acc.indexOf(key) === -1) {
                    acc.push(key);
                }
            });
            return acc;
        }, []);
    };
    TableComponent.prototype.editValue = function (e, obj, property) {
        if (!this.isEditing || this.isEditing === e.target) {
            if (this.isEditing && this.editedValue !== e.target['value']) {
                obj[property] = this.isEditing['value'];
                this.onValueChanged(obj);
            }
            e.target['disabled'] = !e.target['disabled'];
            this.editedValue = !e.target['disabled'] ? e.target['value'] : undefined;
            this.isEditing = !e.target['disabled'] ? e.target : undefined;
        }
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-table',
                    template: "",
                },] },
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        'tabledata': [{ type: Input },],
        'onValueChanged': [{ type: Input },],
    };
    return TableComponent;
}());
//# sourceMappingURL=ng2-datatable.component.js.map