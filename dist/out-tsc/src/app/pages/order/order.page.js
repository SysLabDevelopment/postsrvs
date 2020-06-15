import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourierService } from '../../services/courier.service';
import { StateService } from '../../services/state.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { trigger, state, style, animate, transition
// ...
 } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MapService } from '../../services/map.service';
import { SysService } from '../../services/sys.service';
import { SettingsService } from '../../services/settings.service';
let OrderPage = class OrderPage {
    constructor(map, router, route, courier, state$, auth, plt, http, iab, CL, sys, settings) {
        this.map = map;
        this.router = router;
        this.route = route;
        this.courier = courier;
        this.state$ = state$;
        this.auth = auth;
        this.plt = plt;
        this.http = http;
        this.iab = iab;
        this.CL = CL;
        this.sys = sys;
        this.settings = settings;
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
        this.statuses = [{ "id": 4, "status": "Не доставлено" }, { "id": 5, "status": "Доставлено" }, { "id": 6, "status": "Частично доставлено" }];
        this.reasons = [{ "id": 1, "reason": "Не удалось Дозвониться!" }, { "id": 2, "reason": "Отказ, при созвоне с клиентом" }, { "id": 3, "reason": "Отказ от доставки без объяснения причины" }, { "id": 4, "reason": "Ошибка оформления ИМ" }, { "id": 5, "reason": "Получатель передумал" }, { "id": 6, "reason": "Товар не подошел/не понравился" }, { "id": 7, "reason": "Финансовые трудности у получателя" }, { "id": 8, "reason": "Перенос даты доставки получателем." }, { "id": 10, "reason": "Не успел" }, { "id": 11, "reason": "Переехали/нев.Адрес" }];
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
        this.drawimage = false;
        this.drawNeedle = true;
        this.imageToShow = null;
        this.orderPhones = [];
        this.today = new Date();
        this.tomorrow = new Date();
        this.orderId = this.route.snapshot.paramMap.get('id');
        this.initOrder();
        var img = localStorage.getItem('drawImg');
        if (img) {
            this.imageToShow = 'data:image/jpg;base64,' + img;
        }
    }
    ;
    ngOnInit() {
        this.courier.initStatuses();
        this.tomorrow.setDate(this.tomorrow.getDate() + 1);
        this.note = localStorage.getItem(this.orderId);
    }
    ngAfterViewChecked() {
        var img = localStorage.getItem('drawImg');
        if (img) {
            this.imageToShow = 'data:image/jpg;base64,' + img;
        }
    }
    sendPost(url, data) {
        data = JSON.stringify(data);
        return this.http.post(url, data);
    }
    drawBtn(need) {
        this.drawNeedle = need;
        if (need) {
            this.router.navigate(['draw']);
        }
        else {
            localStorage.removeItem('drawImg');
        }
    }
    parsePhone(phone) {
        let phones = [];
        phone = phone.replace(/\D+/g, '');
        while (phone.length > 7) {
            phone = this.normalizePhoneNumber(phone);
            phones.push(phone.slice('', 11));
            phone = phone.slice(11);
        }
        return phones;
    }
    normalizePhoneNumber(phone) {
        if (phone[0] !== '8' && phone.length !== 11) {
            phone = '8' + phone;
        }
        if (phone.length == 7 || phone.length == 10) {
            phone = '8' + phone;
        }
        if (phone[0] !== '8' && phone.length == 11) {
            phone = '8' + phone.slice(1);
        }
        return phone;
    }
    phoneClick(action) {
        this.orderPhones = this.parsePhone(this.phone);
        let courierPhone = this.parsePhone(this.order.courier_phone)[0];
        if (this.orderPhones.length == 1) {
            this.selectedPhone = this.orderPhones[0];
        }
        switch (action) {
            case 'init':
                this.callWindow = !this.callWindow;
                break;
            case 'phone':
                this.CL.callNumber(this.selectedPhone, false).then(() => { });
                this.callWindow = false;
                break;
            case 'operator':
                if (this.selectedPhone && courierPhone) {
                    let url = 'orders';
                    let data = {
                        action: 'send_phone',
                        client_number: this.selectedPhone,
                        cur_number: courierPhone
                    };
                    this.auth.sendPost(url, data).subscribe(resp => {
                        console.log('call_subs', resp);
                    });
                    this.auth.showError(9);
                    this.callWindow = false;
                }
                break;
        }
    }
    initOrder() {
        this.sys.getOrders([this.orderId]).subscribe((data) => {
            this.order = data.orders[0];
            this.goods = this.order.goods;
            this.address = this.order.client_address;
            this.timeFrom = this.order.datetime_from;
            this.timeTo = this.order.datetime_to;
            this.phone = this.order.client_phone;
            this.status = this.order.status_text;
            this.status_id = Number(this.order.status_id);
            this.clientId = this.order.client_id;
            this.client_status = this.order.client_status;
            this.client_status_dt = this.order.client_status_dt;
            this.client_status_id = this.order.client_status_id;
            this.vlog = this.order.vlog;
            this.poruch = this.order.poruch;
            (this.mass = this.order.mass), (this.amount = this.order.amount);
            this.podrazd = this.order.Podrazd;
            this.coords = [this.order.lt, this.order.lg];
            this.setQuants();
            this.ifPaid();
            this.getBalnce();
            this.getPayData();
            this.initClientInfo();
        });
    }
    getClientState() {
        var states = this.state$.client_states.getValue();
        var state_id = this.order.client_state;
        for (let i = 0; i < states.length; i++) {
            if (states[i].id == state_id) {
                return states[i].state;
            }
        }
        return '';
    }
    //Заполняет массив с ценой товаров и их количеством(для частички)
    setQuants() {
        var goods = this.order.goods;
        for (var i = 0; i < goods.length; i++) {
            let good = goods[i];
            let code = good.Code;
            let count = (good.final_kol_vo ? good.final_kol_vo : good.kol_vo);
            let quant = { amount: good.kol_vo, price: good.Price };
            this.g_quants[code] = quant;
        }
    }
    changeQuant(code, action) {
        var q = this.g_quants[code]['amount'];
        var good = null;
        for (var i = 0; i < this.order.goods.length; i++) {
            if (this.order.goods[i].Code == code) {
                good = this.order.goods[i];
            }
        }
        if (action == 'plus') {
            var n_q = q + 1;
            if (n_q > good.kol_vo) {
                return false;
            }
            else {
                this.g_quants[code]['amount'] = n_q;
            }
        }
        else if (action == 'minus') {
            var n_q = q - 1;
            if (n_q < 0) {
                return false;
            }
            else {
                this.g_quants[code]['amount'] = n_q;
            }
        }
        this.getSum();
    }
    parseOrder(orders) {
        if (this.state$.orders.getValue() == null) {
            this.courier.getOrders();
        }
        for (var i = 0; i < orders.length; i++) {
            if (orders[i].id == this.orderId) {
                return orders[i];
            }
        }
    }
    navBack() {
        localStorage.removeItem('drawImg');
        this.router.navigate(['/courier']);
    }
    getStatus() {
        return this.courier.getStatus(this.order);
    }
    getBalnce() { }
    changeStatus() {
        if (!this.changeWindow) {
            this.changeWindow = true;
        }
    }
    close_window() {
        this.changeWindow = false;
    }
    selectStatus(id) {
        this.selectedStatus = id;
        if (id == 4 || id == 5) {
            this.setQuants();
            this.getSum();
        }
        if (id == 4) {
            this.drawNeedle = false;
        }
    }
    selectReason(id) {
        console.log('select_reason', id);
        this.selectedReason = id;
    }
    sendPayCall() {
        if ((this.selectedStatus == 5 || this.selectedStatus == 6) &&
            this.pay_access) {
            this.sendPay();
        }
        else {
            this.submitChange();
        }
    }
    submitChange() {
        let self = this;
        switch (this.selectedStatus) {
            case 4:
                if (this.selectedReason != null) {
                    this.courier
                        .changeStatus(this.selectedStatus, this.order.id, undefined, this.selectedReason)
                        .subscribe((data) => {
                        if (data.success == 'true') {
                            self.changeWindow = false;
                            self.state$.state.next('init');
                            self.selectedPayment = '1';
                            self.selectedReason = null;
                            self.selectedStatus = null;
                            self.router.navigate(['courier']);
                            self.state$.updateWayInfo.next('0');
                        }
                        localStorage.removeItem('drawImg');
                    });
                }
                break;
            case 5:
                var text = this.commentText ? this.commentText : '';
                this.courier
                    .changeStatus(this.selectedStatus, this.order.id, text, undefined, undefined, this.selectedPayment)
                    .subscribe((data) => {
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
                    localStorage.removeItem('drawImg');
                });
                break;
            case 6:
                this.courier
                    .changeStatus(this.selectedStatus, this.order.id, undefined, undefined, this.g_quants, this.selectedPayment)
                    .subscribe((data) => {
                    if ((data === null || data === void 0 ? void 0 : data.success) == 'true') {
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
                    else {
                        this.sys.presentToast('Нет товаров в заказе', 'danger', 'Частичная доставка невозможна');
                    }
                    localStorage.removeItem('drawImg');
                });
                break;
        }
    }
    getSum() {
        if (this.order) {
            let price = 0;
            let quants = this.g_quants;
            for (let code in quants) {
                price += quants[code]['price'] * quants[code]['amount'];
            }
            this.order.rur = price;
        }
    }
    //подсчитывает сумму заказа
    getPrice(order) {
        if (order) {
            let price = 0;
            for (let i = 0; i < order.goods.length; i++) {
                let good = order.goods[i];
                price += Number(good.Price) * Number(good.kol_vo);
            }
            return price;
        }
    }
    selectPayment(item) {
        this.selectedPayment = item;
    }
    sendPay() {
        let order = this.order;
        let goods = this.order.goods;
        let quants = this.g_quants;
        let amount = Math.round(this.order_sum * 100) / 100;
        let callback_url = this.sys.proxy + 'https://postsrvs.ru/mobile/pay_callback.php';
        let description = '';
        let products = [];
        for (let code in quants) {
            if (quants[code]['amount'] > 0) {
                for (let i = 0; i < goods.length; i++) {
                    if (goods[i]['Code'] == code) {
                        let good_name = goods[i]['Name'];
                        let good_amount = quants[code]['amount'];
                        let good_price = Math.round(quants[code]['price'] * 100) / 100;
                        let pos = {
                            name: good_name,
                            price: good_price,
                            quantity: good_amount
                        };
                        products.push(pos);
                    }
                }
            }
        }
        var purchase = { products: products };
        console.log('goods_description\n', purchase);
        var self = this;
        if (this.pay_access) {
            let api_key = this.pay_access_data['api_key'];
            let login = this.pay_access_data['login'];
            let cashier = this.pay_access_data['cashier_name'];
            let phone;
            let order_data = {
                apikey: String(this.pay_access_data.api_key),
                login: String(this.pay_access_data.phone),
                cashier_name: String(this.pay_access_data.name) +
                    String(this.pay_access_data.phone),
                purchase: purchase,
                callback_url: callback_url,
                mode: 'email',
                customer_email: this.email_input,
                customer_phone: this.phone_input
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
    }
    //Получаем api key & login
    getPayData() {
        var url = 'pay_order';
        var data = { action: 'getData', orderId: this.clientId };
        var self = this;
        this.auth.sendPost(url, data).subscribe((res) => {
            console.log('GET_PAY_DATA', res);
            if (res.success == 'true') {
                self.pay_access = true;
                self.pay_access_data = res;
            }
            else {
                self.pay_access = false;
            }
        });
    }
    send_api_data(api_data) {
        var url = 'pay_order';
        var self = this;
        this.order.rur = 0;
        api_data.purchase.products.forEach((product) => {
            this.order.rur += product.price * product.quantity;
        });
        var data = {
            action: 'sendPay',
            orderData: api_data,
            orderId: this.order.id
        };
        this.auth.sendPost(url, data).subscribe((res) => {
            self.submitChange();
            self.checkPayment();
            self.hide_status = true;
        });
    }
    showCheck() {
        const browser = this.iab.create(this.barcode_url, '_blank');
    }
    voiceLink() {
        const browser = this.iab.create(this.order.r_url);
    }
    checkPayment() {
        var self = this;
        this.state$.interval_1ss.pipe(takeUntil(this.$codeStop)).subscribe(() => {
            self.ifPaid();
            console.log('paid_iter');
        });
    }
    ifPaid() {
        var url = 'pay_order';
        var data = { action: 'checkPaid', orderId: this.order.id };
        var self = this;
        this.auth.sendPost(url, data).subscribe(data => {
            if (data.success == 'true' && data.barcode != null) {
                self.barcode_flag = true;
                self.barcode_url = data.barcode_url;
                self.barcode = data.barcode;
                self.$codeStop.next();
                self.hide_status = true;
            }
        });
    }
    enterPhone() {
        if (this.showPhone) {
            this.showPhone = false;
            this.show_email = false;
        }
        else {
            this.showPhone = true;
            this.show_email = true;
        }
    }
    emailChange() {
        if (this.email_error) {
            this.email_error = false;
        }
    }
    initClientInfo() {
        let mail_exp = /(?:([\s.,]{1}))([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/gm;
        let infoStr = this.phone;
        let mail = mail_exp.exec(infoStr);
        if (mail != null) {
            this.email_input = mail[0];
        }
        else {
            this.show_email = true;
        }
    }
    intentStart() {
        this.state$.intentStart(this.coords);
    }
    onMap() {
        this.state$.coords = this.coords;
        this.map.oneOrder = true;
        this.router.navigate(['map/order']);
    }
    pickedUpOrder() {
    }
    doneOrder() {
        let drawedImg = localStorage.drawImg;
        if (this.drawNeedle && !drawedImg) {
            this.drawBtn(this.drawNeedle);
        }
        else {
            this.sendPayCall();
        }
    }
    saveNote() {
        localStorage.setItem(this.orderId, this.note);
    }
};
OrderPage = __decorate([
    Component({
        selector: 'app-order',
        animations: [
            trigger('openClose', [
                // ...
                state('open', style({
                    display: 'block'
                })),
                state('closed', style({
                    display: 'none'
                })),
                transition('open => closed', [animate('1s')]),
                transition('closed => open', [animate('0.5s')])
            ])
        ],
        templateUrl: './order.page.html',
        styleUrls: ['./order.page.scss']
    }),
    __metadata("design:paramtypes", [MapService,
        Router,
        ActivatedRoute,
        CourierService,
        StateService,
        AuthService,
        Platform,
        HttpClient,
        InAppBrowser,
        CallNumber,
        SysService,
        SettingsService])
], OrderPage);
export { OrderPage };
//# sourceMappingURL=order.page.js.map