import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { StateService } from '../../services/state.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { CourierService } from '../../services/courier.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SettingsService } from '../../services/settings.service';
import { SysService } from '../../services/sys.service';
let LoginPage = class LoginPage {
    constructor(auth, router, alert, plt, http, state$, AP, courier, appVersion, settings, sys) {
        this.auth = auth;
        this.router = router;
        this.alert = alert;
        this.plt = plt;
        this.http = http;
        this.state$ = state$;
        this.AP = AP;
        this.courier = courier;
        this.appVersion = appVersion;
        this.settings = settings;
        this.sys = sys;
        this.disLogin = true;
        this.pl_window = false;
        this.error_phone = false;
        this.phone = '';
        this.loader = false;
        this.auth_step = false;
        this.code = null;
        this.resend_dis = false;
        this.dis_timer = null;
        this.$stopTimer = new Subject();
        let self = this;
        //проверяет авторизован ли пользователь на сервере
        this.plt.ready().then((readySource) => {
            console.log('sys:: платформа готова:', readySource);
            if (readySource == 'android') {
                this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
            }
            self.appVersion.getVersionNumber().then((resp) => {
                this.auth.version = resp;
                this.auth.checkAuth().subscribe((data) => {
                    if (data.success == 'true') {
                        this.auth.setUser(data.sync_id);
                        this.settings.getSettings(data.sync_id);
                        self.router.navigate(['balance']);
                        self.auth.initLogin();
                    }
                    else {
                        self.disLogin = false;
                    }
                });
            });
        });
    }
    ngOnInit() {
        this.isCheckedToWork().subscribe((data) => {
            if (data.checked) {
                this.courier.checkedOnWork = true;
            }
        });
        if (!this.auth.getUserId()) {
            this.courier.checkedOnWork = true;
        }
        if (localStorage.debug == 'true') {
            this.auth.isDebug = true;
        }
    }
    isCheckedToWork() {
        const url = this.sys.proxy + 'https://mobile.postsrvs.ru/admin/ajax/is_checked_to_work.php';
        let data = {
            "token": "l;sdfjkhglsoapl[",
            "cId": localStorage.userId
        };
        const headers = {
            'Content-type': 'application/json'
        };
        return this.http.post(url, data, { headers: headers });
    }
    scanAuth() {
        let self = this;
        this.auth.scanData().then((data) => {
            let id = data.text.slice(0, -4);
            localStorage.setItem('cId', id);
            let a_data = {
                'action': 'auth',
                'barcode': data.text,
            };
            self.auth.login(a_data).subscribe((data) => {
                if (data.success == "true") {
                    this.auth.setUser(data.sync_id);
                    this.settings.getSettings(data.sync_id);
                    self.router.navigate(['balance']);
                    self.auth.initLogin();
                }
                else {
                    self.auth.showError(1);
                }
            });
        });
    }
    phoneAuth() {
        if (!this.auth_step) {
            this.pl_window = !this.pl_window;
        }
    }
    enterPhone() {
        if (this.phone && this.phone.length > 9) {
            this.loader = true;
            this.sendPhone();
        }
        else {
            this.error_phone = true;
        }
    }
    changePhone() {
        this.error_phone = false;
    }
    sendPhone() {
        const url = this.sys.proxy + "https://mok.flexcore.ru/client/registerP/";
        const data = "action=registerP&phone=8" + this.phone + "&type=courier";
        var self = this;
        this.sendPost(url, data).subscribe((res) => {
            this.state$.unsetNotification('internet');
            if (res.success == 'true') {
                self.authStep();
            }
            else {
                this.showLoginError(4);
            }
        }, (err) => {
            this.showLoginError(3);
        });
        this.startTimer();
    }
    sendPost(url, data) {
        console.log('send_data', data);
        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Headers': '*'
            })
        };
        return this.http.post(url, data, httpOptions);
    }
    authStep() {
        this.auth_step = true;
        this.loader = false;
    }
    enterCode() {
        const url = this.sys.proxy + "https://mok.flexcore.ru/courier/authP/";
        var data = "action=authP&phone=8" + this.phone + "&code=" + this.code + "&type=courier";
        var self = this;
        this.sendPost(url, data).subscribe((res) => {
            console.log('sendCode', res);
            if (res.success == 'true') {
                self.login(res.user);
            }
            else {
                self.error_phone = true;
            }
        });
    }
    login(courier) {
        let base = "33dbcda2db5311e39760309e88d17f08," + courier;
        localStorage.setItem('cId', courier);
        var self = this;
        let a_data = {
            'action': 'auth',
            'barcode': base,
        };
        this.auth.login(a_data).subscribe((data) => {
            if (data.success == "true") {
                this.auth.setUser(data.sync_id);
                this.settings.getSettings(data.sync_id);
                self.router.navigate(['balance']);
                self.auth.initLogin();
            }
            else {
                self.auth.showError(1);
            }
        });
    }
    showLoginError(err_n) {
        switch (err_n) {
            case 3:
                this.loader = false;
                this.phone = null;
                this.pl_window = false;
                this.auth.showError(err_n);
                break;
            case 4:
                this.loader = false;
                this.phone = null;
                this.pl_window = false;
                this.auth.showError(err_n);
                break;
        }
    }
    startTimer() {
        if (this.resend_dis) {
            return false;
        }
        this.resend_dis = true;
        this.dis_timer = 30;
        var self = this;
        this.state$.interval_1ss.pipe(takeUntil(this.$stopTimer)).subscribe(() => {
            self.dis_timer--;
            if (self.dis_timer == 0) {
                self.dis_timer = null;
                self.$stopTimer.next();
                self.resend_dis = false;
            }
        });
    }
    reEnterPhone() {
        if (this.resend_dis) {
            return false;
        }
        this.sendPhone();
    }
    changeCode() { }
};
LoginPage = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
        animations: [
            trigger('openClose', [
                // ...
                state('open', style({
                    height: '264px',
                })),
                state('closed', style({
                    height: '50px',
                })),
                transition('open => closed', [
                    animate('0.5s')
                ]),
                transition('closed => open', [
                    animate('0.5s')
                ]),
            ]),
            trigger('openClose1', [
                // ...
                state('open', style({
                    height: '50px',
                })),
                state('closed', style({
                    height: '0px',
                    display: 'none'
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
    __metadata("design:paramtypes", [AuthService,
        Router,
        AlertController,
        Platform,
        HttpClient,
        StateService,
        AndroidPermissions,
        CourierService,
        AppVersion,
        SettingsService,
        SysService])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map