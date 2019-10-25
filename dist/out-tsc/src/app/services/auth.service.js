import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StateService } from './state.service';
import { MapService } from './map.service';
import { AlertController } from '@ionic/angular';
var AuthService = /** @class */ (function () {
    function AuthService(bScan, http, device, plt, router, state$, map, alert) {
        this.bScan = bScan;
        this.http = http;
        this.device = device;
        this.plt = plt;
        this.router = router;
        this.state$ = state$;
        this.map = map;
        this.alert = alert;
        this.user = false;
        this.auth_state = new BehaviorSubject('not_login');
        this.stop$ = new Subject(); // останаливает все подписки;
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
    }
    AuthService.prototype.ngOnInit = function () {
    };
    AuthService.prototype.checkAuth = function () {
        var url = 'orders';
        var data = {
            'action': 'checkAuth',
        };
        return this.sendPost(url, data);
    };
    AuthService.prototype.sendPost = function (url, data) {
        var _this = this;
        var host = "https://postsrvs.ru/mobile/";
        url = host + url;
        data['uuid'] = this.getUuid();
        data = JSON.stringify(data);
        var httpOptions = { headers: new HttpHeaders({}) };
        console.log('AUTH.SendPOst() data', data);
        var self = this;
        var resp = new Subject();
        this.plt.ready().then(function () {
            self.http.post(url, data, httpOptions).subscribe(function (data) {
                console.log('AUTH.SendPOst() RESPONSE', data);
                _this.state$.unsetNotification('internet');
                if (data) {
                    if (data.success == 'false' && data.reason == "not_auth") {
                        self.logout();
                    }
                    else {
                        resp.next(data);
                    }
                }
                else {
                    resp.next(data);
                }
            }, function (err) {
                console.error('An error occurred:', err);
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    _this.state$.setNotification('internet', 'Проверьте интернет соединение!');
                }
            });
        });
        return resp;
    };
    AuthService.prototype.getUuid = function () {
        //return '4191a54e85f2d5f6';
        return this.device.uuid;
    };
    AuthService.prototype.setUser = function (id) {
        localStorage.setItem('user', id);
        this.user = true;
    };
    AuthService.prototype.getUserId = function () {
        return localStorage.getItem('user');
    };
    AuthService.prototype.scanData = function () {
        return this.bScan.scan();
    };
    AuthService.prototype.login = function (code) {
        return this.sendPost('auth', code);
    };
    AuthService.prototype.initLogin = function () {
        this.state$.g_state.next('login');
        this.state$.map_state.next('init');
    };
    AuthService.prototype.logout = function () {
        this.state$.logout();
        this.router.navigate(['login']);
        this.state$.g_state.next('unLogin');
    };
    AuthService.prototype.showError = function (err) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, alert_1, alert2, alert3, alert4, alert5, alert6, alert7, alert8, alert9;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = err;
                        switch (_a) {
                            case 1: return [3 /*break*/, 1];
                            case 2: return [3 /*break*/, 4];
                            case 3: return [3 /*break*/, 7];
                            case 4: return [3 /*break*/, 10];
                            case 5: return [3 /*break*/, 13];
                            case 6: return [3 /*break*/, 16];
                            case 7: return [3 /*break*/, 19];
                            case 8: return [3 /*break*/, 22];
                            case 9: return [3 /*break*/, 25];
                        }
                        return [3 /*break*/, 28];
                    case 1: return [4 /*yield*/, this.alert.create({
                            header: 'Ошибка',
                            message: 'Ошибка авторизации, повторите попытку позже.',
                            buttons: ['OK']
                        })];
                    case 2:
                        alert_1 = _b.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 4: return [4 /*yield*/, this.alert.create({
                            header: 'Ошибка',
                            message: 'Заказ не найден.',
                            buttons: ['OK']
                        })];
                    case 5:
                        alert2 = _b.sent();
                        return [4 /*yield*/, alert2.present()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 7: return [4 /*yield*/, this.alert.create({
                            header: 'Ошибка',
                            message: 'Ошибка отправки запроса, повторите попытку позже.',
                            buttons: ['OK']
                        })];
                    case 8:
                        alert3 = _b.sent();
                        return [4 /*yield*/, alert3.present()];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 10: return [4 /*yield*/, this.alert.create({
                            header: 'Ошибка',
                            message: 'Телефон не зарегистрирован.',
                            buttons: ['OK']
                        })];
                    case 11:
                        alert4 = _b.sent();
                        return [4 /*yield*/, alert4.present()];
                    case 12:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 13: return [4 /*yield*/, this.alert.create({
                            header: 'Ошибка',
                            message: 'Не удалось сменить режим маршрута.',
                            buttons: ['OK']
                        })];
                    case 14:
                        alert5 = _b.sent();
                        return [4 /*yield*/, alert5.present()];
                    case 15:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 16: return [4 /*yield*/, this.alert.create({
                            header: 'Ошибка',
                            message: 'Не удалось подтвердить заказ.',
                            buttons: ['OK']
                        })];
                    case 17:
                        alert6 = _b.sent();
                        return [4 /*yield*/, alert6.present()];
                    case 18:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 19: return [4 /*yield*/, this.alert.create({
                            header: 'Спасибо!',
                            message: 'Отзыв успешно отправлен.',
                            buttons: ['OK']
                        })];
                    case 20:
                        alert7 = _b.sent();
                        return [4 /*yield*/, alert7.present()];
                    case 21:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 22: return [4 /*yield*/, this.alert.create({
                            header: 'Ошибка',
                            message: 'Не удалось отправить отзыв.',
                            buttons: ['OK']
                        })];
                    case 23:
                        alert8 = _b.sent();
                        return [4 /*yield*/, alert8.present()];
                    case 24:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 25: return [4 /*yield*/, this.alert.create({
                            header: 'Звонок клиенту',
                            message: 'Запрос обрабатывается, вам сейчас позвонят.',
                            buttons: ['OK']
                        })];
                    case 26:
                        alert9 = _b.sent();
                        return [4 /*yield*/, alert9.present()];
                    case 27:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 28: return [2 /*return*/];
                }
            });
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [BarcodeScanner,
            HttpClient,
            Device,
            Platform,
            Router,
            StateService,
            MapService,
            AlertController])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map