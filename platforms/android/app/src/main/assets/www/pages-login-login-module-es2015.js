(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/icons.module */ "./src/app/icons/icons.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");











const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
class LoginPageModule {
}
LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); }, imports: [[
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]], imports: [_icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sys/map.service */ "./src/app/services/sys/map.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_courier_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/courier.service */ "./src/app/services/courier.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_sys_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/sys.service */ "./src/app/services/sys.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/fesm2015/angular-feather.js");





























function LoginPage_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginPage_div_9_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i-feather", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginPage_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LoginPage_div_9_span_4_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginPage_div_9_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.phone = $event; })("input", function LoginPage_div_9_Template_input_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.changePhone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPage_div_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.enterPhone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LoginPage_div_9_div_8_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.error_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showMaskTyped", true)("ngModel", ctx_r0.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loader);
} }
function LoginPage_div_10_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginPage_div_10_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i-feather", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "btn-resend": a0 }; };
function LoginPage_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LoginPage_div_10_span_4_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginPage_div_10_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.code = $event; })("input", function LoginPage_div_10_Template_input_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.changePhone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPage_div_10_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.enterCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPage_div_10_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.reEnterPhone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginPage_div_10_div_10_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.error_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showMaskTyped", true)("ngModel", ctx_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx_r1.resend_dis));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E ", ctx_r1.dis_timer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loader);
} }
const _c1 = function (a0) { return { "btn-open": a0 }; };
class LoginPage {
    constructor(auth, router, alert, plt, http, state$, AP, courier, settings, sys, sysMap) {
        this.auth = auth;
        this.router = router;
        this.alert = alert;
        this.plt = plt;
        this.http = http;
        this.state$ = state$;
        this.AP = AP;
        this.courier = courier;
        this.settings = settings;
        this.sys = sys;
        this.sysMap = sysMap;
        this.pl_window = false;
        this.error_phone = false;
        this.phone = '';
        this.loader = false;
        this.auth_step = false;
        this.code = null;
        this.resend_dis = false;
        this.dis_timer = null;
        this.$stopTimer = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        let self = this;
        //проверяет авторизован ли пользователь на сервере
        this.plt.ready().then((readySource) => {
            console.log('sys:: платформа готова:', readySource);
            if (readySource == 'android') {
                this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);
            }
            this.auth.version = AppVersion.version;
            this.auth.checkAuth().subscribe((data) => {
                if (data.success == 'true') {
                    this.auth.setUser(data.sync_id);
                    this.settings.getSettings(data.sync_id);
                    self.router.navigate(['map']);
                    self.auth.initLogin();
                }
                else {
                }
            });
        });
    }
    ngOnInit() {
        if (localStorage.debug == 'true') {
            this.auth.isDebug = true;
        }
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
                    self.auth.initLogin();
                    this.auth.setUser(data.sync_id);
                    this.settings.getSettings(data.sync_id);
                    self.router.navigate(['map']);
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
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
                self.router.navigate(['map']);
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
        this.state$.interval_1ss.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.$stopTimer)).subscribe(() => {
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
}
LoginPage.ɵfac = function LoginPage_Factory(t) { return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_12__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_courier_service__WEBPACK_IMPORTED_MODULE_10__["CourierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_13__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"])); };
LoginPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginPage, selectors: [["app-login"]], decls: 11, vars: 7, consts: [[1, "lg-wrp"], [1, "lg-btn"], [1, "lg-login", 3, "click"], [1, "lg-login", "login-phone", 3, "ngClass"], [1, "btn-wrp"], [1, "btn-title", 3, "click"], ["class", "btn-body phone-b", 4, "ngIf"], ["class", "btn-body code-b", 4, "ngIf"], [1, "btn-body", "phone-b"], [1, "bi-title"], [1, "bi-inp"], ["class", "error-phone", 4, "ngIf"], ["type", "tel", "prefix", "+7 ", "mask", "(000) 000 00 00", 1, "phone-inp", 3, "showMaskTyped", "ngModel", "ngModelChange", "input"], [1, "enter-phone", 3, "click"], ["class", "sh-icons", 4, "ngIf"], [1, "error-phone"], [1, "sh-icons"], ["name", "loader"], [1, "btn-body", "code-b"], ["type", "tel", "mask", "00-00", 1, "phone-inp", 3, "showMaskTyped", "ngModel", "ngModelChange", "input"], [1, "enter-phone", 3, "ngClass", "click"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPage_Template_button_click_3_listener() { return ctx.scanAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u0412\u043E\u0439\u0442\u0438 \u043F\u043E QR-\u043A\u043E\u0434\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPage_Template_div_click_7_listener() { return ctx.phoneAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0412\u043E\u0439\u0442\u0438 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LoginPage_div_9_Template, 9, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginPage_div_10_Template, 11, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@openClose1", ctx.auth_step ? "closed" : "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, ctx.pl_window))("@openClose", ctx.pl_window ? "open" : "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.auth_step);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.auth_step);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ngx_mask__WEBPACK_IMPORTED_MODULE_15__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], angular_feather__WEBPACK_IMPORTED_MODULE_17__["FeatherComponent"]], styles: [".lg-wrp[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lg-btn[_ngcontent-%COMP%] {\n  min-height: 22%;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.lg-login[_ngcontent-%COMP%] {\n  outline: none;\n  height: 50px;\n  width: 100%;\n  background: no-repeat;\n  box-shadow: 0 0 1px 1px #bdbdbd;\n  border-radius: 3px;\n  color: #4a4a4a;\n  font-size: 19px;\n  margin: 5px 0;\n}\n\n.login-phone[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 0;\n}\n\n.btn-title[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #4a4a4a;\n  font-size: 19px;\n}\n\n.btn-wrp[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 50px auto;\n}\n\n.btn-title[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n}\n\n.error-phone[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #c50000;\n}\n\n.phone-inp[_ngcontent-%COMP%] {\n  margin: 6px 0 0 0;\n  height: 45px;\n  border-radius: 3px;\n  border: none;\n  box-shadow: 0 0 1px 1px #bdbdbd;\n  border-radius: 3px;\n  text-align: center;\n}\n\n.btn-open[_ngcontent-%COMP%]   .btn-title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bdbdbd;\n}\n\n.enter-phone[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  height: 45px;\n  border-radius: 3px;\n  border: none;\n  background: none;\n  box-shadow: 0 0 1px 1px #bdbdbd;\n  border-radius: 3px;\n  text-align: center;\n  font-size: 20px;\n  width: 100%;\n  color: #2b637e;\n  outline: none;\n}\n\n.bi-inp[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 12px 0 0 0;\n}\n\n.sh-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.1);\n  font-size: 35px;\n  color: #2b637e;\n}\n\n.btn-resend[_ngcontent-%COMP%] {\n  color: #8d999e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUVaOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0FBRWpCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7QUFFL0I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUVwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBRWhCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBRXBCOztBQUNBO0VBQ0UsZ0NBQWdDO0FBRWxDOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0FBRWY7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGNBQWM7QUFFaEI7O0FBQ0E7RUFDRSxjQUFjO0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxnLXdycCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxnLWJ0biB7XG4gIG1pbi1oZWlnaHQ6IDIyJTtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZy1sb2dpbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2JkYmRiZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBtYXJnaW46IDVweCAwO1xufVxuLmxvZ2luLXBob25lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ0bi10aXRsZSB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5idG4td3JwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0bztcbn1cblxuLmJ0bi10aXRsZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnRuLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXJyb3ItcGhvbmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjYzUwMDAwO1xufVxuXG4ucGhvbmUtaW5wIHtcbiAgbWFyZ2luOiA2cHggMCAwIDA7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNiZGJkYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLW9wZW4gLmJ0bi10aXRsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xufVxuXG4uZW50ZXItcGhvbmUge1xuICBtYXJnaW46IDhweCAwIDAgMDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2JkYmRiZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMmI2MzdlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYmktaW5wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEycHggMCAwIDA7XG59XG5cbi5zaC1pY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjMmI2MzdlO1xufVxuXG4uYnRuLXJlc2VuZCB7XG4gIGNvbG9yOiAjOGQ5OTllO1xufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
                // ...
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    height: '264px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    height: '50px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose1', [
                // ...
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    height: '50px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    height: '0px',
                    display: 'none'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.page.html',
                styleUrls: ['./login.page.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
                        // ...
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            height: '264px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            height: '50px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                        ]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose1', [
                        // ...
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            height: '50px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            height: '0px',
                            display: 'none'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                        ]),
                    ])
                ]
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_state_service__WEBPACK_IMPORTED_MODULE_12__["StateService"] }, { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"] }, { type: _services_courier_service__WEBPACK_IMPORTED_MODULE_10__["CourierService"] }, { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"] }, { type: _services_sys_service__WEBPACK_IMPORTED_MODULE_13__["SysService"] }, { type: src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map