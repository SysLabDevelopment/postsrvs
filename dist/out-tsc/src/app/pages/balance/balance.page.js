import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { CourierService } from '../../services/courier.service';
import { AuthService } from '../../services/auth.service';
import { StateService } from '../../services/state.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MapService } from '../../services/map.service';
import { SettingsService } from '../../services/settings.service';
import { SysService } from '../../services/sys.service';
let BalancePage = class BalancePage {
    constructor(courier, auth, router, state$, alert, camera, AP, map, settings, sys) {
        this.courier = courier;
        this.auth = auth;
        this.router = router;
        this.state$ = state$;
        this.alert = alert;
        this.camera = camera;
        this.AP = AP;
        this.map = map;
        this.settings = settings;
        this.sys = sys;
        this.info = null;
        this.pageInit = false;
        this.out_process = false;
        this.out_counter = 0;
        this.loader = true;
        this.local_stop$ = new Subject();
        this.confirmWindow = false;
        this.commentText = null;
        this.commentError = false;
        this.cashCheck = false;
        this.cashCheckData = null;
        this.openBtn = false;
        this.review_w = false;
        this.failsOrder = false;
        this.failsOrderNotFull = false;
        this.failOrdersCount = 0;
        this.fo_comment = ""; //комментарий к частичной сдаче заказов
        this.schedule = Boolean(this.settings.rules.schedule);
        this.isShowSchedule = false;
        this.isGoToWork = false;
        this.isStopWork = false;
        this.workDates = [];
        this.nonWorkDates = [];
        this.notWorkRules = {};
        this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
        if (this.info == null) {
            this.loader = true;
        }
        else {
            this.loader = true;
        }
        this.state$.map_state.next('init');
        let self = this;
        self.updateInfo();
        self.initCashout();
        if (!this.state$.balance_check) {
            this.state$.interval_30.pipe(takeUntil(this.state$.stop$)).subscribe(() => {
                self.updateInfo();
                self.initCashout();
            });
        }
        this.initCashout();
    }
    ngOnInit() {
        this.schedule = Boolean(this.settings.rules.schedule);
        this.courier.getBalance(this.auth.userId, 1).subscribe((data) => {
            this.courier.ordersInfo = data.res_more;
            this.courier.count_orders(data.res_more);
            this.courier.ordersShortData.next(data.res_more);
            this.state$.orders.next(data.res_more);
            let auto = this.settings.rules.typeRoute;
            if (auto !== 'standart') {
                this.map.pointsRender(data.res_more);
            }
        });
    }
    ngOnDestroy() {
        this.local_stop$.next();
    }
    updateInfo() {
        var self = this;
        this.auth.checkAuth().subscribe((data) => {
            if (data.success = 'true') {
                self.getInfo(data.sync_id);
            }
        });
    }
    getInfo(sync_id) {
        var self = this;
        this.courier.getBalance(sync_id).subscribe((data) => {
            self.info = data;
            self.pageInit = true;
            self.loader = false;
            this.state$.filial = data.filial;
        });
    }
    p_btn() {
        setTimeout(() => {
            this.out_counter = 0;
            this.out_process = false;
            console.log('outprocess_die');
        }, 1000);
        if (this.out_process) {
            this.out_counter++;
            if (this.out_counter == 2) {
                this.logout();
            }
        }
        else {
            console.log('outprocess_false');
            this.out_process = true;
        }
    }
    logout() {
        localStorage.clear();
        const url = 'orders';
        const data = { 'action': 'logout' };
        let self = this;
        this.auth.sendPost(url, data).subscribe((data) => {
            if (data.success == 'true') {
                self.auth.logout();
            }
        });
    }
    cashOut() {
        console.log('sys::cashOut()');
        console.log('sys::cashOut() info != null', this.info != null);
        console.log('sys::cashOut() !cashCheck', !this.cashCheck);
        this.confirmWindow = !this.confirmWindow;
        console.log('sys::cashOut() confirmWindow', this.confirmWindow);
        console.log('sys::cashOut() !openBtn && !failsOrder', !this.openBtn && !this.failsOrder);
    }
    sendCash(photo) {
        this.loader = true;
        const url = 'orders';
        let data = { 'action': 'cashout', 'sum': this.info.sumNal, 'image': photo };
        if (this.commentText != '' && this.commentText) {
            data['isFull'] = '0';
            data['comment'] = this.commentText;
        }
        else {
            data['isFull'] = '1';
        }
        if (this.failsOrderNotFull) {
            data['ordersCount'] = this.failOrdersCount;
            data['ordersComment'] = this.fo_comment;
        }
        console.log('o_c', data['ordersCount']);
        console.log('ocm', data['ordersComment']);
        var self = this;
        this.auth.sendPost(url, data).subscribe((resp) => {
            console.log('CASHOUT_RESPONSE', resp);
            if (resp.success == 'true') {
                self.cashoutResult(true);
            }
            else {
                self.cashoutResult(false);
            }
        });
    }
    checkCash() {
        var url = 'orders';
        var data = { 'action': 'checkCashout' };
        return this.auth.sendPost(url, data);
    }
    initCashout() {
        var self = this;
        this.checkCash().subscribe((data) => {
            if (data.success == 'true') {
                self.cashCheck = true;
                self.cashCheckData = data;
            }
            else {
                self.cashCheck = false;
            }
        });
    }
    getPhoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var self = this;
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log('image_str', base64Image);
            self.sendCash(base64Image);
        });
    }
    cashoutResult(result) {
        return __awaiter(this, void 0, void 0, function* () {
            if (result) {
                const alert = yield this.alert.create({
                    header: 'Сдача',
                    message: 'Средства успешно сданы',
                    buttons: ['OK']
                });
                yield alert.present();
                this.confirmWindow = false;
                this.loader = false;
            }
            else {
                const alert2 = yield this.alert.create({
                    header: 'Ошибка',
                    message: 'Ошибка сдачи средств',
                    buttons: ['OK']
                });
                yield alert2.present();
                this.confirmWindow = false;
                this.loader = false;
            }
        });
    }
    answer(isFull) {
        console.log('sys:: answer');
        if (!isFull && (!this.commentText || this.commentText == '')) {
            this.commentError = true;
            return false;
        }
        this.failOrders();
    }
    //спрашивает, сколько заказов не сдано
    failOrders() {
        console.log('sys:: failOrders');
        if (this.info.ordersFail == 0) {
            this.openBtn = true;
            return false;
        }
        else {
            this.failsOrder = true;
        }
    }
    fo_answer(flag) {
        if (!this.failsOrderNotFull) {
            if (flag) {
                this.failsOrderNotFull = false;
                this.openBtn = true;
            }
            else {
                this.failsOrderNotFull = true;
            }
        }
        else {
            if (flag) {
                this.failsOrderNotFull = false;
            }
            else {
                if (this.failOrdersCount == 0 || this.fo_comment == "" || !this.fo_comment) {
                    this.commentError = true;
                }
                else {
                    this.openBtn = true;
                }
            }
        }
    }
    commentInput() {
        this.commentError = false;
    }
    //отзыв о приложении
    writeReview() {
        this.review_w = !this.review_w;
    }
    sendReview(text) {
        this.loader = true;
        let url = 'orders';
        let data = {
            'action': 'writeReview',
            'text': text
        };
        let self = this;
        this.auth.sendPost(url, data).subscribe((resp) => {
            if (resp.success == 'true') {
                self.auth.showError(7);
            }
            else {
                self.auth.showError(8);
            }
            self.review_w = false;
            self.loader = false;
        });
    }
    navToSettings() {
        this.router.navigate(['settings']);
    }
    check_to_work() {
    }
    showSchedule() {
        this.isShowSchedule = true;
    }
    goToWork() {
        this.sys.goToWork(this.workDates).subscribe((data) => {
            console.log('sys:: gotoWork resp', data);
            if (data.success) {
                this.sys.presentToast('Рабочие часы записаны', 'success');
                this.isGoToWork = false;
            }
        });
    }
    showWorkScheduler() {
        this.isGoToWork = true;
    }
    stopWork() {
        this.sys.stopWork(this.nonWorkDates).subscribe((data) => {
            console.log('sys:: stopWork resp', data);
            if (data.success) {
                this.sys.presentToast('Нерабочие дни записаны', 'success');
                this.isStopWork = false;
            }
        });
    }
    addWorkDate(workDate) {
        workDate = workDate.el.value.replace('T', ' ').substr('', 19);
        this.workDates.push(workDate);
    }
    showStopWorkScheduler() {
        this.isStopWork = true;
        this.sys.getNotWorkRules().subscribe((data) => {
            this.notWorkRules = data;
        });
    }
    addNonWorkDate(date) {
        let dateObj = {
            date: date.value.substr('', 10),
            reason: 0
        };
        this.nonWorkDates.push(dateObj);
    }
};
BalancePage = __decorate([
    Component({
        selector: 'app-balance',
        templateUrl: './balance.page.html',
        styleUrls: ['./balance.page.scss'],
        animations: [
            trigger('openClose', [
                // ...
                state('open', style({
                    display: 'flex',
                })),
                state('closed', style({
                    display: 'none',
                })),
                transition('open => closed', [
                    animate('0.5s')
                ]),
                transition('closed => open', [
                    animate('0.5s')
                ]),
            ]),
            trigger('openBtn', [
                // ...
                state('open', style({
                    display: 'flex',
                })),
                state('closed', style({
                    display: 'none',
                })),
                transition('open => closed', [
                    animate('0.5s')
                ]),
                transition('closed => open', [
                    animate('0.5s')
                ]),
            ]),
            trigger('closeConfirm', [
                // ...
                state('open', style({
                    display: 'grid',
                })),
                state('closed', style({
                    display: 'none',
                })),
                transition('open => closed', [
                    animate('0.5s')
                ]),
                transition('closed => open', [
                    animate('0.5s')
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [CourierService,
        AuthService,
        Router,
        StateService,
        AlertController,
        Camera,
        AndroidPermissions,
        MapService,
        SettingsService,
        SysService])
], BalancePage);
export { BalancePage };
//# sourceMappingURL=balance.page.js.map