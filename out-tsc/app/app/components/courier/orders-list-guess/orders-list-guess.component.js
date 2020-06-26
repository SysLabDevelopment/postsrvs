import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SysService } from '../../../services/sys.service';
let OrdersListGuessComponent = class OrdersListGuessComponent {
    constructor(http, sys) {
        this.http = http;
        this.sys = sys;
        this.headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    }
    ngOnInit() {
        this.getGessOrders(1);
    }
    segmentChanged(event) {
        let shopId = event.detail.value;
        console.log(shopId);
        this.getGessOrders(shopId);
    }
    //Получение заказов для режима Gess
    getGessOrders(shopId) {
        const url = this.sys.proxy + 'https://pdata.flexcore.ru/data/';
        let data = 'tok=#def@wfF1&shopId=' + shopId;
        this.http.post(url, data, { headers: this.headers }).subscribe((response) => {
            if (response.success) {
                console.log('sys:: guess resp ', response);
            }
        });
    }
};
OrdersListGuessComponent = __decorate([
    Component({
        selector: 'app-orders-list-guess',
        templateUrl: './orders-list-guess.component.html',
        styleUrls: ['./orders-list-guess.component.css'],
    }),
    __metadata("design:paramtypes", [HttpClient,
        SysService])
], OrdersListGuessComponent);
export { OrdersListGuessComponent };
//# sourceMappingURL=orders-list-guess.component.js.map