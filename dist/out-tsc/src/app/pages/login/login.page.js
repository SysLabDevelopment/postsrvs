import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { StateService } from '../../services/state.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
var LoginPage = /** @class */ (function () {
    function LoginPage(auth, router, alert, plt, http, state$, AP) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.alert = alert;
        this.plt = plt;
        this.http = http;
        this.state$ = state$;
        this.AP = AP;
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
        var self = this;
        this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
        //проверяет авторизован ли пользователь на сервере
        this.plt.ready().then(function () {
            _this.auth.checkAuth().subscribe(function (data) {
                console.log('check_auth_data', data);
                if (data.success == 'true') {
                    self.router.navigate(['balance']);
                    self.auth.initLogin();
                }
                else {
                    self.disLogin = false;
                }
            });
        });
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.scanAuth = function () {
        var self = this;
        this.auth.scanData().then(function (data) {
            console.log('data', data);
            var id = data.text.slice(0, -4);
            console.log('cid', id);
            localStorage.setItem('cId', id);
            var a_data = { 'action': 'auth',
                'barcode': data.text,
            };
            console.log('request_auth_data', a_data);
            self.auth.login(a_data).subscribe(function (data) {
                console.log('authResponse', data);
                if (data.success == "true") {
                    self.router.navigate(['balance']);
                    self.auth.initLogin();
                }
                else {
                    self.auth.showError(1);
                }
            });
        });
    };
    LoginPage.prototype.phoneAuth = function () {
        if (!this.auth_step) {
            this.pl_window = !this.pl_window;
        }
    };
    LoginPage.prototype.enterPhone = function () {
        console.log('PHONE_DATA,', this.phone, this.phone.length);
        if (this.phone && this.phone.length > 9) {
            this.loader = true;
            this.sendPhone();
        }
        else {
            this.error_phone = true;
        }
    };
    LoginPage.prototype.changePhone = function () {
        this.error_phone = false;
    };
    LoginPage.prototype.sendPhone = function () {
        var _this = this;
        var url = "https://mok.flexcore.ru/client/registerP/";
        var data = "action=registerP&phone=8" + this.phone + "&type=courier";
        var self = this;
        this.sendPost(url, data).subscribe(function (res) {
            console.log('sendPhone', res);
            _this.state$.unsetNotification('internet');
            if (res.success == 'true') {
                self.authStep();
            }
            else {
                _this.showLoginError(4);
            }
        }, function (err) {
            console.log('auth_error', err);
            _this.showLoginError(3);
            _this.state$.setNotification('internet', 'Проверьте интернет соединение!');
        });
        this.startTimer();
    };
    LoginPage.prototype.sendPost = function (url, data) {
        console.log('send_data', data);
        var httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post(url, data, httpOptions);
    };
    LoginPage.prototype.authStep = function () {
        this.auth_step = true;
        this.loader = false;
    };
    LoginPage.prototype.enterCode = function () {
        var url = "https://mok.flexcore.ru/courier/authP/";
        var data = "action=authP&phone=8" + this.phone + "&code=" + this.code + "&type=courier";
        var self = this;
        this.sendPost(url, data).subscribe(function (res) {
            console.log('sendCode', res);
            if (res.success == 'true') {
                self.login(res.user);
            }
            else {
                self.error_phone = true;
            }
        });
    };
    LoginPage.prototype.login = function (courier) {
        var base = "33dbcda2db5311e39760309e88d17f08," + courier;
        localStorage.setItem('cId', courier);
        var self = this;
        var a_data = { 'action': 'auth',
            'barcode': base,
        };
        this.auth.login(a_data).subscribe(function (data) {
            console.log('authResponse', data);
            if (data.success == "true") {
                self.router.navigate(['balance']);
                self.auth.initLogin();
            }
            else {
                self.auth.showError(1);
            }
        });
    };
    LoginPage.prototype.showLoginError = function (err_n) {
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
    };
    LoginPage.prototype.startTimer = function () {
        if (this.resend_dis) {
            return false;
        }
        this.resend_dis = true;
        this.dis_timer = 30;
        var self = this;
        this.state$.interval_1ss.pipe(takeUntil(this.$stopTimer)).subscribe(function () {
            self.dis_timer--;
            if (self.dis_timer == 0) {
                self.dis_timer = null;
                self.$stopTimer.next();
                self.resend_dis = false;
            }
        });
    };
    LoginPage.prototype.reEnterPhone = function () {
        if (this.resend_dis) {
            return false;
        }
        this.sendPhone();
    };
    LoginPage.prototype.changeCode = function () { };
    LoginPage = tslib_1.__decorate([
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
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Router,
            AlertController,
            Platform,
            HttpClient,
            StateService,
            AndroidPermissions])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map