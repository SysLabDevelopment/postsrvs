import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { MapService } from '../services/map.service';
import { SettingsService } from './settings.service';
import { SysService } from '../services/sys.service';
let CourierService = class CourierService {
    constructor(http, router, plt, state$, auth, bs, map, settings, sys) {
        this.http = http;
        this.router = router;
        this.plt = plt;
        this.state$ = state$;
        this.auth = auth;
        this.bs = bs;
        this.map = map;
        this.settings = settings;
        this.sys = sys;
        this.ordersShortData = new Subject();
        this.checkedOnWork = true;
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
        //при выходе из приложения возвращаем начальное состояние
        var self = this;
        this.state$.interval_1ss.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
            let old_val = self.state$.load_lvl.getValue();
            self.state$.load_lvl.next(old_val + 1.7);
        });
        var self = this;
        this.state$.stop$.subscribe(() => {
            self.logout();
        });
        //обновляем заказы по запросу
        this.state$.updateWayInfo.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
            self.updateOrders();
        });
        this.state$.g_state.subscribe((state) => {
            if (state == 'login') {
                self.initOrders();
                self.updateOrders();
            }
        });
        var check_state$ = this.state$.init_params_state.subscribe((state) => {
            if (state == 'init_geo_done') {
                self.initOrders();
            }
        });
        this.state$.status_changed.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
            self.state$.state.next('init');
        });
    }
    /**
     * Меняем на серере режим маршрута
     */
    changeRouteMode(mode) {
        if (this.state$.way.getValue() !== null) {
            let url = 'orders';
            const routeId = this.state$.way.getValue()[0].route;
            let data = { 'action': 'changeRouteMode', 'routeId': this.state$.way.getValue()[0].route };
            if (mode == 'auto' || mode == 'fullHand') {
                data['mode'] = mode;
            }
            else {
                this.auth.showError(5);
                return false;
            }
            let self = this;
            this.auth.sendPost(url, data).subscribe((resp) => {
                if (resp.success == 'true') {
                    self.state$.manual_route = resp.mode == 'fullHand' ? true : false;
                    self.state$.updateWayInfo.next();
                }
                else {
                    self.auth.showError(5);
                }
            });
        }
    }
    updateOrders() {
        this.state$.state.next('init');
    }
    ngOnDestroy() {
    }
    ngOnInit() {
    }
    //Собираем необходимую инфу по заказам
    initOrders() {
        var self = this;
        //проверяем наличие координат перед запуском
        if (this.state$.position.getValue() == null) {
            return false;
        }
        //Запускаем инициализацию
        //Костыль для мгновенного отображения листина в обход ожидания статусов по апи
        this.initStatuses();
        if (!this.state$.courier_init) {
            this.state$.state.pipe(takeUntil(this.state$.stop$)).subscribe((state) => {
                console.log('sys:: state', JSON.stringify(state));
                switch (state) {
                    case 'init':
                        if (this.auth.getDefaultRouteBuilding() == '1') {
                            console.log('sys:: дефолтное построение маршрута ', this.auth.getDefaultRouteBuilding());
                            self.getWay();
                        }
                        else {
                            self.state$.state.next('way_init');
                        }
                        break;
                    case 'way_init':
                        self.getOrders().subscribe((data) => {
                            console.log('sys:: Данные о заказах', data);
                            if ((data.success == 'true') && (data.reason !== 'нет заказов')) {
                                self.state$.orders.next(data.orders);
                                self.state$.orders_data = data.orders;
                                if (this.auth.getDefaultRouteBuilding() !== '1' && !this.map.oneOrder) {
                                    self.map.pointsRender();
                                }
                                else {
                                    this.map.initPoints();
                                }
                                self.state$.state.next('orders_init');
                                this.state$.confirmed = true;
                                data.orders.forEach(order => {
                                    if (order.confirm == '0') {
                                        self.state$.confirmed = false;
                                    }
                                });
                            }
                            else if (data.reason == 'empty' || data.reason == 'нет заказов') {
                                console.log('Массив данных о заказах пуст');
                                let rmpt = [];
                                self.state$.orders.next(rmpt);
                                self.state$.orders_data = rmpt;
                                self.state$.state.next('orders_init');
                                this.state$.confirmed = true;
                            }
                        }, (error) => {
                            console.error('sys:: Ошибка получения данных о заказах!');
                        });
                        break;
                }
            });
            this.state$.courier_init = true;
        }
        this.state$.state.next('init');
        this.checkWay();
    }
    //следит за изменениями заказов
    checkWay() {
        var self = this;
        if (!this.state$.check_state) {
            this.state$.interval_1m.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
                self.state$.load_lvl.next(0);
                self.state$.state.next('init');
            });
            this.state$.check_state = true;
        }
    }
    /*Запрос списка заказов курьера
      В зависимости от режима либо запоминаем данные в сервисе,
      либо сравниваем с маршрутом созданным курьером(manualWay)
    */
    getWay() {
        console.log('sys::getWay()');
        let routingMode = this.auth.getRoutingMode();
        let mode;
        if (routingMode !== 'standart') {
            mode = '1';
        }
        else {
            mode = '0';
        }
        let url = 'orders';
        let data = {
            'action': 'getWay',
            'lt': this.state$.position.getValue().lt,
            'lg': this.state$.position.getValue().lg,
            'auto': mode
        };
        let app_mode = this.auth.getMode();
        if ((app_mode == 'fullHand' || app_mode == 'hand') || this.state$.manual_route) {
            data['mode'] = "manual";
        }
        else {
            data['mode'] = "auto";
        }
        let resp = new Subject();
        let self = this;
        this.auth.sendPost(url, data).subscribe((orders) => {
            if (orders.success == 'true') {
                self.state$.manual_route = orders.mode == "manual" ? true : false;
                self.state$.way.next(orders.orders);
                self.state$.state.next('way_init');
            }
            else if (orders.reason == 'empty') {
                self.state$.manual_route = false;
                let emt = [];
                self.state$.way.next(emt);
                self.state$.state.next('way_init');
            }
        });
    }
    getOrders() {
        const url = "orders";
        let ids = [];
        let way = this.ordersInfo;
        this.ordersShortData.subscribe((data) => {
            way = data;
        });
        if (way !== undefined) {
            for (let i = 0; i < way.length; i++) {
                ids.push(way[i].id);
            }
        }
        else {
            ids = [];
        }
        let routingAuto = this.auth.getRoutingMode();
        let auto;
        if (routingAuto !== 'standart') {
            auto = '1';
        }
        else {
            auto = '0';
        }
        let data = {
            'action': 'getOrders',
            'orders_id': ids
        };
        return this.auth.sendPost(url, data);
    }
    //Запрос основных данных курьера
    //@sync_id - ид курьера
    //@more - флаг необходимости доп данных (краткая инфа о заказах для листинга)
    //@CL - код филлиала
    getBalance(sync_id, more = 0) {
        let CL = this.settings.get('cl');
        let url = this.sys.proxy + "https://terminal.vestovoy.ru/info/stat.php?cid=" + sync_id + '&more=' + more + '&CL=' + CL;
        return this.http.get(url);
    }
    getStatus(order) {
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
    }
    changeStatus(status = '', id = '', comment = '', reason = '', goods = '', payment = '') {
        var url = 'orders';
        var draw = localStorage.getItem('drawImg');
        var data = {
            'action': 'changedStatus',
            'status': status,
            'id': id,
            'comment': comment,
            'reason': reason,
            'goods': goods,
            'payment': payment
        };
        if (draw)
            data['sign'] = draw;
        return this.auth.sendPost(url, data);
    }
    logout() {
    }
    /**
     * Ищет заказ в милевском(через 4 круга ада)
     * Возвращает adress_code
     * проверяем, если заказ есть в списке заказов курьера - возыращаем его
     * если нет - false
     * @param code //штрих-код
     */
    findOrder(code) {
        const url = 'orders';
        let data = {
            'action': 'findOrder',
            'code': code
        };
        let resp = new Subject();
        let orders = this.state$.orders_data;
        this.auth.sendPost(url, data).subscribe((od) => {
            if (od.success == 'true') {
                let n_f = true;
                let orderId = od.order_id;
                for (var i = 0; i < orders.length; i++) {
                    if (orders[i].id == orderId) {
                        n_f = false;
                    }
                }
                if (n_f) {
                    resp.next(false);
                }
                else {
                    resp.next(od);
                }
            }
            else {
                resp.next(od);
            }
        });
        return resp;
    }
    sumbitOrder(orderId) {
        let url = 'orders';
        let data = {
            'action': 'submitOrder',
            'orderId': orderId
        };
        console.log('submit_order_data', data);
        let self = this;
        let ret = new Subject();
        this.auth.sendPost(url, data).subscribe((resp) => {
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
    }
    check_to_work() {
        let url = this.sys.proxy + 'https://postsrvs.ru/admin/ajax/check_to_work.php';
        let data = {
            cId: this.auth.getUserId(),
            token: "l;sdfjkhglsoapl[",
        };
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        });
        this.http.post(url, data, { headers: headers }).subscribe((data) => {
            if (data.success == true) {
                let checkedDate = new Date();
                localStorage.setItem('checkedDate', checkedDate.toLocaleDateString());
                this.checkedOnWork = true;
            }
        });
    }
    count_orders(orders) {
        let g_done = 0;
        let g_process = 0;
        let g_fail = 0;
        let all = orders.length;
        for (let i = 0; i < orders.length; i++) {
            switch (String(orders[i].status_id)) {
                case '4':
                    g_fail++;
                    break;
                case '5':
                    g_done++;
                    break;
                case '6':
                    g_done++;
                    break;
                case '1':
                    g_process++;
                    break;
            }
        }
        this.sortOrders = {
            g_done: g_done,
            g_process: g_process,
            g_fail: g_fail,
            all: all
        };
    }
    initStatuses() {
        const statuses = [{ "id": 4, "status": "Не доставлено" }, { "id": 5, "status": "Доставлено" }, { "id": 6, "status": "Частично доставлено" }];
        this.state$.statuses.next(statuses);
        this.state$.s_state.next('status_init');
    }
    //Завершение рабочего дня курьера
    endWork() {
        const url = this.sys.proxy + 'https://postsrvs.ru/admin/ajax/end_work.php';
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        });
        let data = {
            "token": "l;sdfjkhglsoapl[",
            "cId": this.auth.getUserId()
        };
        return this.http.post(url, data, { headers: headers });
    }
};
CourierService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient,
        Router,
        Platform,
        StateService,
        AuthService,
        BarcodeScanner,
        MapService,
        SettingsService,
        SysService])
], CourierService);
export { CourierService };
//# sourceMappingURL=courier.service.js.map