import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourierService } from '../../services/courier.service';
import { StateService } from '../../services/state.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
var OrderPage = /** @class */ (function () {
    function OrderPage(router, route, courier, state$, auth, plt, http, iab, CL) {
        this.router = router;
        this.route = route;
        this.courier = courier;
        this.state$ = state$;
        this.auth = auth;
        this.plt = plt;
        this.http = http;
        this.iab = iab;
        this.CL = CL;
        this.orderId = null;
        this.clientId = null;
        this.status_id = null;
        this.status = null;
        this.goods = null;
        this.address = null;
        this.order = null;
        this.name = null;
        this.timeFrom = null;
        this.timeTo = null;
        this.phone = null;
        this.pageInit = true;
        this.statuses = null;
        this.reasons = null;
        this.commentText = null;
        this.g_quants = {};
        this.changeWindow = false;
        this.selectedPayment = '1';
        this.client_status = '';
        this.client_status_dt = '';
        this.client_status_id = '';
        this.order_sum = null;
        this.vlog = null;
        this.poruch = null;
        this.mass = null;
        this.amount = null;
        this.email_input = '';
        this.phone_input = '';
        this.barcode_flag = false;
        this.barcode_url = null;
        this.barcode = null;
        this.selectedReason = null;
        this.selectedStatus = null;
        this.hide_status = false;
        this.$codeStop = new Subject();
        this.showPhone = false;
        this.podrazd = null;
        this.email_error = false;
        this.pay_access = false;
        this.pay_access_data = null;
        this.show_info = false;
        this.show_email = false;
        this.callWindow = false;
        this.orderId = this.route.snapshot.paramMap.get('id');
        this.initOrder();
    }
    OrderPage.prototype.ngOnInit = function () {
    };
    OrderPage.prototype.sendPost = function (url, data) {
        console.log('SEND_POST_CALL');
        console.log('REQUEST_DATA', data);
        data = JSON.stringify(data);
        return this.http.post(url, data);
    };
    OrderPage.prototype.parsePhone = function (phone) {
        var regex = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
        var str = String(phone);
        var result = regex.exec(str);
        var tel = result[0];
        if (tel != null) {
            if (tel[0] == '+') {
                tel = '8' + tel.slice(2);
            }
            return tel;
        }
        return false;
    };
    OrderPage.prototype.phoneClick = function (action) {
        console.log('phoneClick', action);
        var orderPhone = this.parsePhone(this.phone);
        var courierPhone = this.parsePhone(this.order.courier_phone);
        switch (action) {
            case 'init':
                this.callWindow = !this.callWindow;
                break;
            case 'phone':
                this.CL.callNumber(String(orderPhone), true).then(function () { });
                this.callWindow = false;
                break;
            case 'operator':
                if (orderPhone && courierPhone) {
                    var url = 'orders';
                    var data = {
                        'action': 'send_phone',
                        'client_number': orderPhone,
                        'cur_number': courierPhone
                    };
                    this.auth.sendPost(url, data).subscribe(function (resp) {
                        console.log('call_subs', resp);
                    });
                    this.auth.showError(9);
                    this.callWindow = false;
                }
                break;
        }
    };
    OrderPage.prototype.initOrder = function () {
        this.order = this.parseOrder(this.state$.orders.getValue());
        this.goods = this.order.goods;
        this.address = this.order.client_address;
        this.name = this.order.client_name;
        this.timeFrom = this.order.datetime_from;
        this.timeTo = this.order.datetime_to;
        this.phone = this.order.client_phone;
        this.status = this.order.status_text;
        this.status_id = this.order.status_id;
        this.clientId = this.order.client_id;
        this.client_status = this.order.client_status;
        this.client_status_dt = this.order.client_status_dt;
        this.client_status_id = this.order.client_status_id;
        this.vlog = this.order.vlog;
        this.poruch = this.order.poruch;
        this.mass = this.order.mass,
            this.amount = this.order.amount;
        this.podrazd = this.order.Podrazd;
        this.statuses = this.state$.statuses_data;
        this.reasons = this.state$.reasons;
        this.setQuants();
        this.getSum();
        this.ifPaid();
        this.getBalnce();
        this.getPayData();
        this.initClientInfo();
    };
    OrderPage.prototype.getClientState = function () {
        var states = this.state$.client_states.getValue();
        var state_id = this.order.client_state;
        for (var i = 0; i < states.length; i++) {
            if (states[i].id == state_id) {
                return states[i].state;
            }
        }
        return '';
    };
    //Заполняет массив с ценой товаров и их количеством(для частички)
    OrderPage.prototype.setQuants = function () {
        var goods = this.order.goods;
        for (var i = 0; i < goods.length; i++) {
            var good = goods[i];
            var code = good.Code;
            var quant = { 'amount': good.kol_vo, 'price': good.Price };
            this.g_quants[code] = quant;
        }
        console.log('set_quants', this.g_quants);
    };
    OrderPage.prototype.changeQuant = function (code, action) {
        var q = this.g_quants[code]['amount'];
        var good = null;
        for (var i = 0; i < this.order.goods.length; i++) {
            if (this.order.goods[i].Code == code) {
                good = this.order.goods[i];
            }
        }
        if (action == "plus") {
            var n_q = q + 1;
            if (n_q > good.kol_vo) {
                return false;
            }
            else {
                this.g_quants[code]['amount'] = n_q;
            }
        }
        else if (action == "minus") {
            var n_q = q - 1;
            if (n_q < 0) {
                return false;
            }
            else {
                this.g_quants[code]['amount'] = n_q;
            }
        }
        this.getSum();
    };
    OrderPage.prototype.parseOrder = function (orders) {
        for (var i = 0; i < orders.length; i++) {
            if (orders[i].id == this.orderId) {
                return orders[i];
            }
        }
    };
    OrderPage.prototype.navBack = function () {
        this.router.navigate(['/courier']);
    };
    OrderPage.prototype.getStatus = function () {
        return this.courier.getStatus(this.order);
    };
    OrderPage.prototype.getBalnce = function () {
    };
    OrderPage.prototype.changeStatus = function () {
        if (!this.changeWindow) {
            this.changeWindow = true;
        }
        // var url = 'orders';
        // var data = {'action' : 'changedStatus' , 'sync_id' : '1111', 'status' : '1' , 'comment' : 'сделал, начальник'};
        // this.courier.sendPost(url, data).subscribe((data:any) => {
        //   console.log('change_data', data);
        // });
    };
    OrderPage.prototype.close_window = function () {
        this.changeWindow = false;
    };
    OrderPage.prototype.selectStatus = function (id) {
        console.log('select_status', id);
        this.selectedStatus = id;
        if (id == 4 || id == 5) {
            this.setQuants();
            this.getSum();
        }
    };
    OrderPage.prototype.selectReason = function (id) {
        console.log('select_reason', id);
        this.selectedReason = id;
    };
    OrderPage.prototype.sendPayCall = function () {
        if ((this.selectedStatus == 5 || this.selectedStatus == 6) && this.pay_access) {
            this.sendPay();
        }
        else {
            this.submitChange();
        }
    };
    OrderPage.prototype.submitChange = function () {
        console.log('submit_call');
        var self = this;
        switch (this.selectedStatus) {
            case 4:
                if (this.selectedReason != null) {
                    this.courier.changeStatus(this.selectedStatus, this.order.id, undefined, this.selectedReason).subscribe(function (data) {
                        if (data.success == 'true') {
                            self.changeWindow = false;
                            self.state$.state.next('init');
                            self.selectedPayment = '1';
                            self.selectedReason = null;
                            self.selectedStatus = null;
                            self.router.navigate(['courier']);
                            self.state$.updateWayInfo.next('0');
                        }
                    });
                }
                break;
            case 5:
                var text = this.commentText ? this.commentText : '';
                this.courier.changeStatus(this.selectedStatus, this.order.id, text, undefined, undefined, this.selectedPayment).subscribe(function (data) {
                    if (data.success == 'true') {
                        self.changeWindow = false;
                        self.state$.state.next('init');
                        self.selectedPayment = '1';
                        self.selectedReason = null;
                        self.selectedStatus = null;
                        if (!self.pay_access) {
                            self.router.navigate(['courier']);
                        }
                        self.initOrder();
                        self.state$.updateWayInfo.next('0');
                    }
                });
                break;
            case 6:
                this.courier.changeStatus(this.selectedStatus, this.order.id, undefined, undefined, this.g_quants, this.selectedPayment).subscribe(function (data) {
                    if (data.success == 'true') {
                        self.changeWindow = false;
                        self.state$.state.next('init');
                        self.selectedPayment = '1';
                        self.selectedReason = null;
                        self.selectedStatus = null;
                        if (!self.pay_access) {
                            self.router.navigate(['courier']);
                        }
                        self.initOrder();
                        self.state$.updateWayInfo.next('0');
                    }
                });
                break;
        }
    };
    OrderPage.prototype.getSum = function () {
        if (this.order) {
            var price = 0;
            var quants = this.g_quants;
            for (var code in quants) {
                price += quants[code]['price'] * quants[code]['amount'];
            }
            this.order_sum = price;
            console.log('changet_price');
        }
    };
    //подсчитывает сумму заказа
    OrderPage.prototype.getPrice = function (order) {
        console.log('get_price_order', order);
        if (order) {
            var price = 0;
            for (var i = 0; i < order.goods.length; i++) {
                var good = order.goods[i];
                price += Number(good.Price) * Number(good.kol_vo);
            }
            console.log('get_price_return', price);
            return price;
        }
    };
    OrderPage.prototype.selectPayment = function (item) {
        this.selectedPayment = item;
    };
    OrderPage.prototype.sendPay = function () {
        if (this.email_input == null || this.email_input == "") {
            this.email_error = true;
            return false;
        }
        var order = this.order;
        var goods = this.order.goods;
        var quants = this.g_quants;
        var amount = Math.round(this.order_sum * 100) / 100;
        var callback_url = 'https://postsrvs.ru/mobile/pay_callback.php';
        var description = '';
        var products = [];
        for (var code in quants) {
            if (quants[code]['amount'] > 0) {
                for (var i = 0; i < goods.length; i++) {
                    if (goods[i]['Code'] == code) {
                        var good_name = goods[i]['Name'];
                        var good_amount = quants[code]['amount'];
                        var good_price = Math.round(quants[code]['price'] * 100) / 100;
                        var pos = { 'name': good_name, 'price': good_price, 'quantity': good_amount };
                        products.push(pos);
                    }
                }
            }
        }
        var purchase = { 'products': products };
        console.log('goods_description\n', purchase);
        var self = this;
        if (this.pay_access) {
            var api_key = this.pay_access_data['api_key'];
            var login = this.pay_access_data['login'];
            var cashier = this.pay_access_data['cashier_name'];
            var phone = void 0;
            var order_data = {
                'apikey': String(this.pay_access_data.api_key),
                'login': String(this.pay_access_data.phone),
                'cashier_name': String(this.pay_access_data.name) + String(this.pay_access_data.phone),
                'purchase': purchase,
                'callback_url': callback_url,
                'mode': 'email',
                'customer_email': this.email_input,
                'customer_phone': this.phone_input
            };
            if (self.selectedPayment == '2') {
                order_data['card_amount'] = '#';
            }
            else {
                order_data['cash_amount'] = '#';
            }
            if (this.phone_input != '') {
                order_data['customer_phone'] = this.phone_input;
            }
            self.send_api_data(order_data);
        }
    };
    //Получаем api key & login
    OrderPage.prototype.getPayData = function () {
        var url = 'pay_order';
        var data = { 'action': 'getData', 'orderId': this.clientId };
        var self = this;
        this.auth.sendPost(url, data).subscribe(function (res) {
            console.log('GET_PAY_DATA', res);
            if (res.success == 'true') {
                self.pay_access = true;
                self.pay_access_data = res;
            }
            else {
                self.pay_access = false;
            }
        });
    };
    OrderPage.prototype.barcodeCheck = function () {
    };
    OrderPage.prototype.send_api_data = function (api_data) {
        var url = 'pay_order';
        var self = this;
        var data = { 'action': 'sendPay', 'orderData': api_data, 'orderId': this.order.id };
        this.auth.sendPost(url, data).subscribe(function (res) {
            console.log('serv_response', res);
            self.submitChange();
            self.checkPayment();
            self.hide_status = true;
        });
    };
    OrderPage.prototype.showCheck = function () {
        var browser = this.iab.create(this.barcode_url);
    };
    OrderPage.prototype.voiceLink = function () {
        var browser = this.iab.create(this.order.r_url);
    };
    OrderPage.prototype.checkPayment = function () {
        var self = this;
        this.state$.interval_1ss.pipe(takeUntil(this.$codeStop)).subscribe(function () {
            self.ifPaid();
            console.log('paid_iter');
        });
    };
    OrderPage.prototype.ifPaid = function () {
        var url = 'pay_order';
        var data = { 'action': 'checkPaid', 'orderId': this.order.id };
        var self = this;
        this.auth.sendPost(url, data).subscribe(function (data) {
            if (data.success == 'true' && data.barcode != null) {
                self.barcode_flag = true;
                self.barcode_url = data.barcode_url;
                self.barcode = data.barcode;
                self.$codeStop.next();
                self.hide_status = true;
            }
        });
    };
    OrderPage.prototype.enterPhone = function () {
        if (this.showPhone) {
            this.showPhone = false;
            this.show_email = false;
        }
        else {
            this.showPhone = true;
            this.show_email = true;
        }
    };
    OrderPage.prototype.emailChange = function () {
        if (this.email_error) {
            this.email_error = false;
        }
    };
    OrderPage.prototype.initClientInfo = function () {
        var mail_exp = /(?:([\s.,]{1}))([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/gm;
        var infoStr = this.phone;
        var mail = mail_exp.exec(infoStr);
        if (mail != null) {
            this.email_input = mail[0];
        }
        else {
            this.show_email = true;
        }
    };
    OrderPage = tslib_1.__decorate([
        Component({
            selector: 'app-order',
            animations: [
                trigger('openClose', [
                    // ...
                    state('open', style({
                        display: 'block',
                    })),
                    state('closed', style({
                        display: 'none',
                    })),
                    transition('open => closed', [
                        animate('1s')
                    ]),
                    transition('closed => open', [
                        animate('0.5s')
                    ]),
                ]),
            ],
            templateUrl: './order.page.html',
            styleUrls: ['./order.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            CourierService,
            StateService,
            AuthService,
            Platform,
            HttpClient,
            InAppBrowser,
            CallNumber])
    ], OrderPage);
    return OrderPage;
}());
export { OrderPage };
//# sourceMappingURL=order.page.js.map