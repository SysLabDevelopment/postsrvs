import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourierService } from '../../../services/courier.service';
import { AuthService } from '../../../services/auth.service';
import { SettingsService } from '../../../services/settings.service';
import { StateService } from '../../../services/state.service';
let OrdersListSecondComponent = class OrdersListSecondComponent {
    constructor(courier, auth, settings, state) {
        this.courier = courier;
        this.auth = auth;
        this.settings = settings;
        this.state = state;
        this.orderSelected_E = new EventEmitter();
        this.tabs = {
            1: 1,
            2: 5 || 6,
            3: 4
        };
        this.searchString = '';
    }
    selectOrder(id) {
        this.orderSelected_E.emit(id);
    }
    ngOnChanges() {
        this.tabFilterOrders();
    }
    ngOnInit() {
        this.state.orders.asObservable().subscribe((orders) => {
            this.orders = orders;
        });
        this.orders;
        console.log('sys:: исходный массив заказов в компоненте: ', this.orders);
    }
    tabFilterOrders(tab = this.selectedTab) {
        var _a, _b, _c, _d;
        if (tab == 2) {
            this.orders_c = (_a = this.orders) === null || _a === void 0 ? void 0 : _a.filter(order => order.status_id == 5 || order.status_id == 6);
        }
        else {
            this.orders_c = (_b = this.orders) === null || _b === void 0 ? void 0 : _b.filter(order => order.status_id == this.tabs[tab]);
        }
        if (this.settings.rules.typeRoute !== 'standart' && tab == 1) {
            (_c = this.orders_c) === null || _c === void 0 ? void 0 : _c.splice(1);
        }
        this.orders_c = (_d = this.orders_c) === null || _d === void 0 ? void 0 : _d.filter(order => order.client_address.toLowerCase().includes(this.searchString.toLowerCase()) || order.client_fio.toLowerCase().includes(this.searchString.toLowerCase()) ||
            order.client_id.toLowerCase().includes(this.searchString.toLowerCase()));
    }
    onSearchChange(event) {
        let substring = event.target.value;
        this.tabFilterOrders();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrdersListSecondComponent.prototype, "orders", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrdersListSecondComponent.prototype, "selectedTab", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrdersListSecondComponent.prototype, "confirm_cond", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], OrdersListSecondComponent.prototype, "orderSelected_E", void 0);
OrdersListSecondComponent = __decorate([
    Component({
        selector: 'app-orders-list-second',
        templateUrl: './orders-list-second.component.html',
        styleUrls: ['./orders-list-second.component.scss'],
        providers: []
    }),
    __metadata("design:paramtypes", [CourierService,
        AuthService,
        SettingsService,
        StateService])
], OrdersListSecondComponent);
export { OrdersListSecondComponent };
//# sourceMappingURL=orders-list-second.component.js.map