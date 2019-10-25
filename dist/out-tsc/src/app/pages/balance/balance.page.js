import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { CourierService } from '../../services/courier.service';
import { AuthService } from '../../services/auth.service';
import { MapService } from '../../services/map.service';
import { StateService } from '../../services/state.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
var BalancePage = /** @class */ (function () {
    function BalancePage(courier, auth, router, map, state$, alert, camera, AP, fs) {
        this.courier = courier;
        this.auth = auth;
        this.router = router;
        this.map = map;
        this.state$ = state$;
        this.alert = alert;
        this.camera = camera;
        this.AP = AP;
        this.fs = fs;
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
        this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
        if (this.info == null) {
            this.loader = true;
        }
        else {
            this.loader = true;
        }
        this.state$.map_state.next('init');
        var self = this;
        self.updateInfo();
        self.initCashout();
        if (!this.state$.balance_check) {
            this.state$.interval_2s.pipe(takeUntil(this.state$.stop$)).subscribe(function () {
                self.updateInfo();
                self.initCashout();
            });
        }
        this.initCashout();
        this.setFs();
    }
    BalancePage.prototype.ngOnInit = function () { };
    BalancePage.prototype.ngOnDestroy = function () {
        this.local_stop$.next();
    };
    BalancePage.prototype.setFs = function () {
        var self = this;
        this.fs.isImmersiveModeSupported()
            .then(function () { console.log('fs_support'); self.fs.immersiveMode(); })
            .catch(function (error) { return console.log(error); });
    };
    BalancePage.prototype.updateInfo = function () {
        var self = this;
        this.auth.checkAuth().subscribe(function (data) {
            console.log('update_info_data', data);
            if (data.success = 'true') {
                self.getInfo(data.sync_id);
            }
        });
    };
    BalancePage.prototype.getInfo = function (sync_id) {
        var self = this;
        this.courier.getBalance(sync_id).subscribe(function (data) {
            console.log('balance_data', data);
            self.info = data;
            self.pageInit = true;
            self.loader = false;
        });
    };
    BalancePage.prototype.p_btn = function () {
        var _this = this;
        setTimeout(function () {
            _this.out_counter = 0;
            _this.out_process = false;
            console.log('outprocess_die');
        }, 1000);
        if (this.out_process) {
            this.out_counter++;
            console.log('outprocess_true', this.out_counter);
            if (this.out_counter == 2) {
                this.logout();
            }
        }
        else {
            console.log('outprocess_false');
            this.out_process = true;
        }
    };
    BalancePage.prototype.logout = function () {
        var url = 'orders';
        var data = { 'action': 'logout' };
        var self = this;
        this.auth.sendPost(url, data).subscribe(function (data) {
            if (data.success == 'true') {
                self.auth.logout();
            }
        });
    };
    BalancePage.prototype.cashOut = function () {
        this.confirmWindow = !this.confirmWindow;
    };
    BalancePage.prototype.sendCash = function (photo) {
        this.loader = true;
        var url = 'orders';
        var data = { 'action': 'cashout', 'sum': this.info.sumNal, 'image': photo };
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
        this.auth.sendPost(url, data).subscribe(function (resp) {
            console.log('CASHOUT_RESPONSE', resp);
            if (resp.success == 'true') {
                self.cashoutResult(true);
            }
            else {
                self.cashoutResult(false);
            }
        });
    };
    BalancePage.prototype.checkCash = function () {
        var url = 'orders';
        var data = { 'action': 'checkCashout' };
        return this.auth.sendPost(url, data);
    };
    BalancePage.prototype.initCashout = function () {
        var self = this;
        this.checkCash().subscribe(function (data) {
            if (data.success == 'true') {
                self.cashCheck = true;
                self.cashCheckData = data;
            }
            else {
                self.cashCheck = false;
            }
        });
    };
    BalancePage.prototype.getPhoto = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var self = this;
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log('image_str', base64Image);
            self.sendCash(base64Image);
        });
    };
    BalancePage.prototype.cashoutResult = function (result) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert_1, alert2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alert.create({
                                header: 'Сдача',
                                message: 'Средства успешно сданы',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        this.confirmWindow = false;
                        this.loader = false;
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alert.create({
                            header: 'Ошибка',
                            message: 'Ошибка сдачи средств',
                            buttons: ['OK']
                        })];
                    case 4:
                        alert2 = _a.sent();
                        return [4 /*yield*/, alert2.present()];
                    case 5:
                        _a.sent();
                        this.confirmWindow = false;
                        this.loader = false;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BalancePage.prototype.answer = function (isFull) {
        if (!isFull && (!this.commentText || this.commentText == '')) {
            this.commentError = true;
            return false;
        }
        this.failOrders();
    };
    //спрашивает, сколько заказов не сдано
    BalancePage.prototype.failOrders = function () {
        if (this.info.ordersFail == 0) {
            this.openBtn = true;
            return false;
        }
        else {
            this.failsOrder = true;
        }
    };
    BalancePage.prototype.fo_answer = function (flag) {
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
    };
    BalancePage.prototype.commentInput = function () {
        this.commentError = false;
    };
    //отзыв о приложении
    BalancePage.prototype.writeReview = function () {
        this.review_w = !this.review_w;
    };
    BalancePage.prototype.sendReview = function (text) {
        this.loader = true;
        var url = 'orders';
        var data = {
            'action': 'writeReview',
            'text': text
        };
        var self = this;
        this.auth.sendPost(url, data).subscribe(function (resp) {
            if (resp.success == 'true') {
                self.auth.showError(7);
            }
            else {
                self.auth.showError(8);
            }
            self.review_w = false;
            self.loader = false;
        });
    };
    BalancePage = tslib_1.__decorate([
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
        tslib_1.__metadata("design:paramtypes", [CourierService,
            AuthService,
            Router,
            MapService,
            StateService,
            AlertController,
            Camera,
            AndroidPermissions,
            AndroidFullScreen])
    ], BalancePage);
    return BalancePage;
}());
export { BalancePage };
//# sourceMappingURL=balance.page.js.map