import * as tslib_1 from "tslib";
import { Component, ViewChild, EventEmitter, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { OTTabPipePipe } from '../../../pipes/o-t-tab-pipe.pipe';
import { moveItemInArray, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
var OrdersListFirstComponent = /** @class */ (function () {
    function OrdersListFirstComponent() {
        this.ordersChange_E = new EventEmitter();
        this.orderSelected_E = new EventEmitter();
    }
    OrdersListFirstComponent.prototype.selectOrder = function (id) {
        this.orderSelected_E.emit(id);
    };
    OrdersListFirstComponent.prototype.drop = function (event) {
        moveItemInArray(this.orders_c, event.previousIndex, event.currentIndex);
        this.ordersChange_E.emit(this.orders_c);
    };
    OrdersListFirstComponent.prototype.ngOnInit = function () {
    };
    OrdersListFirstComponent.prototype.ngAfterViewChecked = function () {
        var self = this;
        this.Drop_L.autoScrollDisabled = false;
        this.DragItems.changes.subscribe(function (r) {
            self.DragItems.forEach(function (DragItem) {
                DragItem.dragStartDelay = 500;
            });
        });
    };
    OrdersListFirstComponent.prototype.ngAfterViewInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrdersListFirstComponent.prototype, "orders_c", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrdersListFirstComponent.prototype, "selectedTab", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrdersListFirstComponent.prototype, "ordersChange_E", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrdersListFirstComponent.prototype, "orderSelected_E", void 0);
    tslib_1.__decorate([
        ViewChildren(CdkDrag),
        tslib_1.__metadata("design:type", QueryList)
    ], OrdersListFirstComponent.prototype, "DragItems", void 0);
    tslib_1.__decorate([
        ViewChild(CdkDropList, { static: false }),
        tslib_1.__metadata("design:type", CdkDropList)
    ], OrdersListFirstComponent.prototype, "Drop_L", void 0);
    OrdersListFirstComponent = tslib_1.__decorate([
        Component({
            selector: 'app-orders-list-first',
            templateUrl: './orders-list-first.component.html',
            styleUrls: ['./orders-list-first.component.scss'],
            providers: [OTTabPipePipe]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OrdersListFirstComponent);
    return OrdersListFirstComponent;
}());
export { OrdersListFirstComponent };
//# sourceMappingURL=orders-list-first.component.js.map