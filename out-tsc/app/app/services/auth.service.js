import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StateService } from './state.service';
import { AlertController } from '@ionic/angular';
import { SettingsService } from './settings.service';
import { SysService } from '../services/sys.service';
let AuthService = class AuthService {
    constructor(bScan, http, device, plt, router, state$, alert, settings, sys) {
        this.bScan = bScan;
        this.http = http;
        this.device = device;
        this.plt = plt;
        this.router = router;
        this.state$ = state$;
        this.alert = alert;
        this.settings = settings;
        this.sys = sys;
        this.user = false;
        this.auth_state = new BehaviorSubject('not_login');
        this.stop$ = new Subject(); // останаливает все подписки;
        this.checkState = undefined; //Состояние чекнутости на складе
        this.version = undefined; // версия приложения
        this.isDebug = false; //Нужна в случае хардкодной отладки нативных функций
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
        if (!this.getMode()) {
            this.setMode('hand');
        }
        if (!this.getScanMode()) {
            this.setScanMode('camera');
        }
        this.routingModeAuto = (this.getRoutingMode() == 'standart' ? false : true);
    }
    checkAuth() {
        var url = 'orders';
        var data = {
            'action': 'checkAuth',
            'appVersion': this.version
        };
        return this.sendPost(url, data);
    }
    setMode(mode) {
        localStorage.setItem('mode', mode);
    }
    getMode() {
        return this.settings.rules.appMode;
    }
    setScanMode(mode) {
        localStorage.setItem('scan_mode', mode);
    }
    //меняет способ сканирования
    getScanMode() {
        return this.settings.rules.scanMode;
    }
    sendPost(url, data) {
        let host = this.sys.proxy + "https://postsrvs.ru/mobile/";
        if (url == 'orders' || url == 'auth') {
            host = this.sys.proxy + "https://mobile.postsrvs.ru/mobile/";
        }
        url = host + url;
        data['uuid'] = (this.isDebug ? '6b356755575fce31' : this.getUuid());
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        };
        let self = this;
        let resp = new Subject();
        this.plt.ready().then(() => {
            self.http.post(url, data, httpOptions).subscribe((data) => {
                this.state$.unsetNotification('internet');
                if (data) {
                    console.log('sys:: data == true, data.success', data.success);
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
            }, (err) => {
                if (err.error instanceof Error) {
                    this.state$.setNotification('internet', 'Ошибка ответа сервера! Обратитесь к разработчикам.');
                }
            });
        });
        return resp;
    }
    getUuid() {
        // return 'c446ca560c6e0383';
        return this.device.uuid;
    }
    setUser(id) {
        localStorage.setItem('user', id);
        this.user = true;
        this.userId = id;
    }
    getUserId() {
        return localStorage.getItem('user');
    }
    scanData() {
        return this.bScan.scan();
    }
    login(code) {
        return this.sendPost('auth', code);
    }
    initLogin() {
        this.state$.g_state.next('login');
        this.state$.map_state.next('init');
    }
    logout() {
        this.state$.logout();
        this.router.navigate(['login']);
        this.state$.g_state.next('unLogin');
    }
    showError(err) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (err) {
                case 1:
                    const alert = yield this.alert.create({
                        header: 'Ошибка',
                        message: 'Ошибка авторизации, повторите попытку позже.',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    break;
                case 2:
                    const alert2 = yield this.alert.create({
                        header: 'Ошибка',
                        message: 'Заказ не найден.',
                        buttons: ['OK']
                    });
                    yield alert2.present();
                    break;
                case 3:
                    const alert3 = yield this.alert.create({
                        header: 'Ошибка',
                        message: 'Ошибка отправки запроса, повторите попытку позже.',
                        buttons: ['OK']
                    });
                    yield alert3.present();
                    break;
                case 4:
                    const alert4 = yield this.alert.create({
                        header: 'Ошибка',
                        message: 'Телефон не зарегистрирован.',
                        buttons: ['OK']
                    });
                    yield alert4.present();
                    break;
                case 5:
                    const alert5 = yield this.alert.create({
                        header: 'Ошибка',
                        message: 'Не удалось сменить режим маршрута.',
                        buttons: ['OK']
                    });
                    yield alert5.present();
                    break;
                case 6:
                    const alert6 = yield this.alert.create({
                        header: 'Ошибка',
                        message: 'Не удалось подтвердить заказ.',
                        buttons: ['OK']
                    });
                    yield alert6.present();
                    break;
                case 7:
                    const alert7 = yield this.alert.create({
                        header: 'Спасибо!',
                        message: 'Отзыв успешно отправлен.',
                        buttons: ['OK']
                    });
                    yield alert7.present();
                    break;
                case 8:
                    const alert8 = yield this.alert.create({
                        header: 'Ошибка',
                        message: 'Не удалось отправить отзыв.',
                        buttons: ['OK']
                    });
                    yield alert8.present();
                    break;
                case 9:
                    const alert9 = yield this.alert.create({
                        header: 'Звонок клиенту',
                        message: 'Запрос обрабатывается, вам сейчас позвонят.',
                        buttons: ['OK']
                    });
                    yield alert9.present();
                    break;
                case 10:
                    const alert10 = yield this.alert.create({
                        header: 'Настройки сохранены!',
                        buttons: ['OK']
                    });
                    yield alert10.present();
                    break;
            }
        });
    }
    setGuessMode(guessMode) {
        this.settings.rules.gess = guessMode;
    }
    getGuessMode() {
        return Boolean(Number(this.settings.rules.gess));
    }
    //Сохранение режима построения маршрута по умолчанию
    setDefaultRouteBuilding(defaultRouteBuilding) {
        defaultRouteBuilding && localStorage.setItem('defaultRouteBuilding', defaultRouteBuilding);
    }
    getDefaultRouteBuilding() {
        return this.settings.rules.autoStartRoute;
    }
    setRoutingMode(auto) {
        auto && localStorage.setItem('auto', auto + '');
    }
    getRoutingMode() {
        return this.settings.rules.typeRoute;
    }
    check(mode) {
        this.bScan.scan().then((scanData) => {
            console.log('sys:: auth.check() данные qr-кода: ', scanData);
            let url = this.sys.proxy + 'https://postsrvs.ru/admin/ajax/wh.php';
            let data = {
                'cId': this.getUserId(),
                'token': "l;sdfjkhglsoapl[",
                'qr': scanData.text,
                'mode': 'check' + mode
            };
            const headers = new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json'
            });
            this.http.post(url, data, { headers: headers }).subscribe((data) => {
                if (data.success == true) {
                    this.checkState = 'checked' + mode;
                    localStorage.check = mode;
                }
            });
        });
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [BarcodeScanner,
        HttpClient,
        Device,
        Platform,
        Router,
        StateService,
        AlertController,
        SettingsService,
        SysService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map