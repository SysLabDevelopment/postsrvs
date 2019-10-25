import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
var CourierService = /** @class */ (function () {
    function CourierService(http, router, plt, state$, auth, bs) {
        this.http = http;
        this.router = router;
        this.plt = plt;
        this.state$ = state$;
        this.auth = auth;
        this.bs = bs;
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
        //при выходе из приложения возвращаем начальное состояние
        var self = this;
        this.state$.interval_1ss.pipe(takeUntil(this.state$.stop$)).subscribe(function () {
            var old_val = self.state$.load_lvl.getValue();
            self.state$.load_lvl.next(old_val + 1.7);
        });
        var self = this;
        this.state$.stop$.subscribe(function () {
            self.logout();
        });
        //обновляем заказы по запросу 
        this.state$.updateWayInfo.pipe(takeUntil(this.state$.stop$)).subscribe(function () {
            self.updateOrders();
        });
        this.state$.g_state.subscribe(function (state) {
            if (state == 'login') {
                self.initOrders();
                self.updateOrders();
            }
        });
        var check_state$ = this.state$.init_params_state.subscribe(function (state) {
            if (state == 'init_geo_done') {
                self.initOrders();
            }
        });
        this.state$.status_changed.pipe(takeUntil(this.state$.stop$)).subscribe(function () {
            self.state$.state.next('init');
        });
    }
    /**
     * Меняем на серере режим маршрута
     */
    CourierService.prototype.changeRouteMode = function (mode) {
        var url = 'orders';
        var data = { 'action': 'changeRouteMode', 'routeId': this.state$.way.getValue()[0].route };
        if (mode == 'auto' || mode == 'manual') {
            data['mode'] = mode;
        }
        else {
            this.auth.showError(5);
            return false;
        }
        var self = this;
        this.auth.sendPost(url, data).subscribe(function (resp) {
            if (resp.success == 'true') {
                self.state$.manual_route = resp.mode == 'manual' ? true : false;
                self.state$.updateWayInfo.next();
            }
            else {
                self.auth.showError(5);
            }
        });
    };
    CourierService.prototype.updateOrders = function () {
        this.state$.state.next('init');
    };
    CourierService.prototype.ngOnDestroy = function () {
    };
    CourierService.prototype.ngOnInit = function () {
    };
    //Собираем необходимую инфу по заказам 
    CourierService.prototype.initOrders = function () {
        var _this = this;
        var self = this;
        //проверяем наличие координат перед запуском
        if (this.state$.position.getValue() == null) {
            return false;
        }
        //Запускаем инициализацию
        this.getReasons().subscribe(function (data) {
            if (data.success = 'true') {
                self.state$.reasons = data.reasons;
            }
        });
        this.getStatuses().subscribe(function (data) {
            if (data.success == 'true') {
                self.state$.statuses.next(data.statuses);
                self.state$.s_state.next('status_init');
            }
        });
        if (!this.state$.courier_init) {
            this.state$.state.pipe(takeUntil(this.state$.stop$)).subscribe(function (state) {
                switch (state) {
                    case 'init':
                        self.getWay();
                        break;
                    case 'way_init':
                        self.getOrders().subscribe(function (data) {
                            if (data.success == 'true') {
                                self.state$.orders.next(data.orders);
                                self.state$.orders_data = data.orders;
                                self.state$.state.next('orders_init');
                                _this.state$.confirmed = true;
                                data.orders.forEach(function (order) {
                                    if (order.confirm == '0') {
                                        self.state$.confirmed = false;
                                    }
                                });
                            }
                            else if (data.reason = 'empty') {
                                var rmpt = [];
                                self.state$.orders.next(rmpt);
                                self.state$.orders_data = rmpt;
                                self.state$.state.next('orders_init');
                                _this.state$.confirmed = true;
                            }
                        });
                        break;
                }
            });
            this.state$.courier_init = true;
        }
        this.state$.state.next('init');
        this.checkWay();
    };
    //следит за изменениями заказов
    CourierService.prototype.checkWay = function () {
        var self = this;
        if (!this.state$.check_state) {
            this.state$.interval_1m.pipe(takeUntil(this.state$.stop$)).subscribe(function () {
                self.state$.load_lvl.next(0);
                self.state$.state.next('init');
            });
            this.state$.check_state = true;
        }
    };
    /*Запрос списка заказов курьера
      В зависимости от режима либо запоминаем данные в сервисе,
      либо сравниваем с маршрутом созданным курьером(manualWay)
    */
    CourierService.prototype.getWay = function () {
        var url = 'orders';
        var data = {
            'action': 'getWay',
            'lt': this.state$.position.getValue().lt,
            'lg': this.state$.position.getValue().lg
        };
        data['mode'] = this.state$.manual_route ? "manual" : "auto";
        if (this.state$.manual_route) {
            data['old_way'] = this.state$.old_way;
        }
        var resp = new Subject();
        var self = this;
        this.auth.sendPost(url, data).subscribe(function (orders) {
            if (orders.success == 'true') {
                self.state$.manual_route = orders.mode == "manual" ? true : false;
                self.state$.way.next(orders.orders);
                self.state$.state.next('way_init');
            }
            else if (orders.reason == 'empty') {
                self.state$.manual_route = false;
                var emt = [];
                self.state$.way.next(emt);
                self.state$.state.next('way_init');
            }
        });
    };
    CourierService.prototype.getOrders = function () {
        var url = "orders";
        var ids = [];
        var way = this.state$.way.getValue();
        for (var i = 0; i < way.length; i++) {
            ids.push(way[i].id);
        }
        var data = {
            'action': 'getOrders',
            'orders_id': ids
        };
        return this.auth.sendPost(url, data);
    };
    CourierService.prototype.getStatuses = function () {
        var url = "orders";
        var data = { 'action': 'getStatuses' };
        return this.auth.sendPost(url, data);
    };
    CourierService.prototype.getBalance = function (sync_id) {
        var id = localStorage.getItem('cId');
        var url = "https://terminal.vestovoy.ru/info/stat.php?cid=" + sync_id;
        return this.http.get(url);
    };
    CourierService.prototype.getReasons = function () {
        var url = "orders";
        var data = { 'action': 'getReasons' };
        return this.auth.sendPost(url, data);
    };
    CourierService.prototype.getStatus = function (order) {
        if (order.status_id == 1) {
            return 'Доставляется';
        }
        else {
            var statuses = this.state$.statuses.getValue();
            for (var i = 0; i < statuses.length; i++) {
                var status = statuses[i];
                if (status.id == order.status_id) {
                    return status.status;
                }
            }
        }
    };
    CourierService.prototype.changeStatus = function (status, id, comment, reason, goods, payment) {
        if (status === void 0) { status = ''; }
        if (id === void 0) { id = ''; }
        if (comment === void 0) { comment = ''; }
        if (reason === void 0) { reason = ''; }
        if (goods === void 0) { goods = ''; }
        if (payment === void 0) { payment = ''; }
        var url = 'orders';
        var data = {
            'action': 'changedStatus',
            'status': status,
            'id': id,
            'comment': comment,
            'reason': reason,
            'goods': goods,
            'payment': payment
        };
        return this.auth.sendPost(url, data);
    };
    CourierService.prototype.logout = function () {
    };
    //отправляет запрос на оплату
    CourierService.prototype.sendPay = function (order, isDone, quants) {
        if (isDone === void 0) { isDone = true; }
        if (quants === void 0) { quants = null; }
        if (isDone) {
        }
    };
    CourierService.prototype.findOrder = function (code) {
        var self = this;
        var url = 'orders';
        var data = { 'action': 'findOrder',
            'code': code };
        return this.auth.sendPost(url, data);
    };
    CourierService.prototype.sumbitOrder = function (orderId) {
        var url = 'orders';
        var data = {
            'action': 'submitOrder',
            'orderId': orderId
        };
        console.log('submit_order_data', data);
        var self = this;
        var ret = new Subject();
        this.auth.sendPost(url, data).subscribe(function (resp) {
            console.log('submit_order_response', resp);
            if (resp.success == 'true') {
                self.state$.updateWayInfo.next();
                ret.next(true);
            }
            else {
                self.auth.showError(6);
                ret.next(false);
            }
        });
        return ret;
    };
    CourierService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            Router,
            Platform,
            StateService,
            AuthService,
            BarcodeScanner])
    ], CourierService);
    return CourierService;
}());
export { CourierService };
//# sourceMappingURL=courier.service.js.map