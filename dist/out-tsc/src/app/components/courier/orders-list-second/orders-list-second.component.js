import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OTTabPipePipe } from '../../../pipes/o-t-tab-pipe.pipe';
var OrdersListSecondComponent = /** @class */ (function () {
    function OrdersListSecondComponent() {
        this.orderSelected_E = new EventEmitter();
    }
    OrdersListSecondComponent.prototype.selectOrder = function (id) {
        this.orderSelected_E.emit(id);
    };
    OrdersListSecondComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrdersListSecondComponent.prototype, "orders_c", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrdersListSecondComponent.prototype, "selectedTab", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrdersListSecondComponent.prototype, "orderSelected_E", void 0);
    OrdersListSecondComponent = tslib_1.__decorate([
        Component({
            selector: 'app-orders-list-second',
            templateUrl: './orders-list-second.component.html',
            styleUrls: ['./orders-list-second.component.scss'],
            providers: [OTTabPipePipe]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OrdersListSecondComponent);
    return OrdersListSecondComponent;
}());
export { OrdersListSecondComponent };
//# sourceMappingURL=orders-list-second.component.js.map