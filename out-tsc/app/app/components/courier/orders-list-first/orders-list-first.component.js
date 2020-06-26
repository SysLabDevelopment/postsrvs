import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, EventEmitter, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { moveItemInArray, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CourierService } from '../../../services/courier.service';
import { AuthService } from '../../../services/auth.service';
import { SysService } from '../../../services/sys.service';
import { SettingsService } from '../../../services/settings.service';
import { map } from 'rxjs/operators';
import { StateService } from '../../../services/state.service';
let OrdersListFirstComponent = class OrdersListFirstComponent {
    constructor(courier, auth, sys, settings, state) {
        this.courier = courier;
        this.auth = auth;
        this.sys = sys;
        this.settings = settings;
        this.state = state;
        this.ordersChange_E = new EventEmitter();
        this.orderSelected_E = new EventEmitter();
        this.slicer = this.howSlice();
        this.isSkeleton = true;
        this.searchString = '';
        this.ord = this.state.orders.asObservable();
        this.prepareOrdersList();
    }
    ngOnChanges() {
    }
    ngOnInit() {
        this.orders_c.subscribe((data) => {
            this.orders = data;
        });
        console.log('sys:: исходный список заказов', this.orders);
    }
    ngAfterViewChecked() {
        let self = this;
        this.Drop_L.autoScrollDisabled = false;
        this.DragItems.changes.subscribe((r) => {
            self.DragItems.forEach(DragItem => {
                DragItem.dragStartDelay = {
                    touch: 500,
                    mouse: 100
                };
            });
        });
    }
    ngAfterViewInit() {
    }
    selectOrder(id) {
        this.orderSelected_E.emit(id);
    }
    drop(event) {
        moveItemInArray(this.orders, event.previousIndex, event.currentIndex);
        this.state.orders.next(this.orders);
        console.log('sys:: массив заказов после перетаскивания: ', this.orders);
    }
    howSlice() {
        return (this.settings.rules.typeRoute === 'standart' ? 0 : 1);
    }
    prepareOrdersList() {
        this.orders_c = this.ord.pipe(map(orders => orders && orders.filter(order => Number(order.status_id) == 1).filter(order => order.client_address.toLowerCase().includes(this.searchString.toLowerCase()) || order.client_fio.toLowerCase().includes(this.searchString.toLowerCase()) ||
            order.client_id.toLowerCase().includes(this.searchString.toLowerCase())).slice(this.slicer)));
    }
    onSearchChange(event) {
        this.prepareOrdersList();
    }
    ngOnDestroy() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrdersListFirstComponent.prototype, "confirm_cond", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrdersListFirstComponent.prototype, "selectedTab", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], OrdersListFirstComponent.prototype, "ordersChange_E", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], OrdersListFirstComponent.prototype, "orderSelected_E", void 0);
__decorate([
    ViewChildren(CdkDrag),
    __metadata("design:type", QueryList)
], OrdersListFirstComponent.prototype, "DragItems", void 0);
__decorate([
    ViewChild(CdkDropList, { static: false }),
    __metadata("design:type", CdkDropList)
], OrdersListFirstComponent.prototype, "Drop_L", void 0);
OrdersListFirstComponent = __decorate([
    Component({
        selector: 'app-orders-list-first',
        templateUrl: './orders-list-first.component.html',
        styleUrls: ['./orders-list-first.component.scss'],
        providers: []
    }),
    __metadata("design:paramtypes", [CourierService,
        AuthService,
        SysService,
        SettingsService,
        StateService])
], OrdersListFirstComponent);
export { OrdersListFirstComponent };
//# sourceMappingURL=orders-list-first.component.js.map