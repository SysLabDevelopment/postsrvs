(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-order-module"],{

/***/ "./src/app/pages/order/order.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.module.ts ***!
  \*********************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order.page */ "./src/app/pages/order/order.page.ts");
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/icons.module */ "./src/app/icons/icons.module.ts");









const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_5__["OrderPage"]
    }
];
class OrderPageModule {
}
OrderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrderPageModule });
OrderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrderPageModule_Factory(t) { return new (t || OrderPageModule)(); }, imports: [[
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderPageModule, { declarations: [_order_page__WEBPACK_IMPORTED_MODULE_5__["OrderPage"]], imports: [_icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_order_page__WEBPACK_IMPORTED_MODULE_5__["OrderPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/order/order.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/order/order.page.ts ***!
  \*******************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var ionic_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-cache */ "./node_modules/ionic-cache/dist/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_courier_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/courier.service */ "./src/app/services/courier.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_sys_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/sys.service */ "./src/app/services/sys.service.ts");
/* harmony import */ var _services_sys_map_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/sys/map.service */ "./src/app/services/sys/map.service.ts");
/* harmony import */ var _services_sys_order_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/sys/order.service */ "./src/app/services/sys/order.service.ts");
/* harmony import */ var _services_sys_data_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../services/sys/data.service */ "./src/app/services/sys/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/fesm2015/angular-feather.js");











































function OrderPage_ion_title_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.order.client_id);
} }
function OrderPage_ion_content_5_ion_item_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.order.Cname, " ");
} }
function OrderPage_ion_content_5_ion_item_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0410\u0434\u0440\u0435\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.order.Cadress, " ");
} }
function OrderPage_ion_content_5_ion_item_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.order.Cphone, " ");
} }
function OrderPage_ion_content_5_ion_item_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.order.Cphone_s, " ");
} }
const _c0 = function (a0, a1) { return { "st_fail": a0, "st_done": a1 }; };
function OrderPage_ion_content_5_div_92_div_11_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_11_div_12_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const good_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r19.changeQuant(good_r18.Code, "minus"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i-feather", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_11_div_12_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const good_r18 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r21.changeQuant(good_r18.Code, "plus"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i-feather", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const good_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r17.g_quants[good_r18.Code]["amount"] == 0, ctx_r17.order.status_id == 6 && ctx_r17.g_quants[good_r18.Code]["amount"] > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](good_r18.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r17.g_quants[good_r18.Code]["amount"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", good_r18.Price, "\u0440.");
} }
function OrderPage_ion_content_5_div_92_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u0437\u0430\u043A\u0430\u0437\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u041A\u043E\u043B-\u0432\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0426\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OrderPage_ion_content_5_div_92_div_11_div_12_Template, 12, 7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0418\u0442\u043E\u0433\u043E: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.goods);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r8.order.rur, "\u0440.");
} }
function OrderPage_ion_content_5_div_92_ion_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_ion_button_12_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r22.scanReturned(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "status_active": a0 }; };
function OrderPage_ion_content_5_div_92_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_14_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const reason_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r26.selectReason(reason_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reason_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r24.selectedReason == reason_r25.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", reason_r25.reason, " ");
} }
function OrderPage_ion_content_5_div_92_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_92_div_14_div_3_Template, 2, 4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.reasons);
} }
function OrderPage_ion_content_5_div_92_div_15_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 66);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r28.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function OrderPage_ion_content_5_div_92_div_15_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_15_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r30.drawBtn(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "draw_btn_active": a0 }; };
function OrderPage_ion_content_5_div_92_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_15_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r32.drawBtn(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_15_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r34.drawBtn(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OrderPage_ion_content_5_div_92_div_15_img_9_Template, 1, 1, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OrderPage_ion_content_5_div_92_div_15_button_10_Template, 2, 0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r11.drawNeedle));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, !ctx_r11.drawNeedle));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.imageToShow && ctx_r11.drawNeedle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.drawNeedle);
} }
const _c3 = function (a0) { return { "payment_active": a0 }; };
function OrderPage_ion_content_5_div_92_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041E\u043F\u043B\u0430\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_16_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r35.selectPayment("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_16_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r37.selectPayment("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u041A\u0430\u0440\u0442\u043E\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, ctx_r12.selectedPayment == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c3, ctx_r12.selectedPayment == 2));
} }
function OrderPage_ion_content_5_div_92_div_17_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrderPage_ion_content_5_div_92_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_92_div_17_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r42.email_input = $event; })("input", function OrderPage_ion_content_5_div_92_div_17_div_1_Template_input_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r44.emailChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_92_div_17_div_1_span_4_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r38.email_input);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r38.email_error);
} }
function OrderPage_ion_content_5_div_92_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043A\u043B\u0438\u0435\u043D\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrderPage_ion_content_5_div_92_div_17_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_92_div_17_input_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r45.phone_input = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r40.phone_input);
} }
function OrderPage_ion_content_5_div_92_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderPage_ion_content_5_div_92_div_17_div_1_Template, 5, 2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_92_div_17_div_3_Template, 2, 0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_92_div_17_input_4_Template, 1, 1, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_17_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r47.enterPhone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041F\u0440\u043E\u0447\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.show_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.showPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.showPhone);
} }
function OrderPage_ion_content_5_div_92_details_18_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "textarea", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_92_details_18_div_3_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r51.commentText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r49.commentText);
} }
const _c4 = function (a0) { return { "st_fail": a0 }; };
function OrderPage_ion_content_5_div_92_details_18_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const good_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c4, good_r54.kol_vo == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](good_r54.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", good_r54.kol_vo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", good_r54.Price, "\u0440.");
} }
function OrderPage_ion_content_5_div_92_details_18_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u0437\u0430\u043A\u0430\u0437\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041A\u043E\u043B-\u0432\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0426\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OrderPage_ion_content_5_div_92_details_18_div_4_div_11_Template, 8, 6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r50.goods);
} }
function OrderPage_ion_content_5_div_92_details_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_92_details_18_div_3_Template, 4, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_92_details_18_div_4_Template, 12, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.selectedStatus == 5 || ctx_r14.selectedStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.selectedStatus == 5);
} }
function OrderPage_ion_content_5_div_92_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "MM/DD/YYYY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-datetime", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_92_div_19_Template_ion_datetime_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r55.new_plan_date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("min", ctx_r15.today.toISOString());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r15.tomorrow.toISOString());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r15.new_plan_date);
} }
function OrderPage_ion_content_5_div_92_button_21_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrderPage_ion_content_5_div_92_button_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c5 = function (a0, a1) { return { "c_t_del": a0, "c_t_u_del": a1 }; };
function OrderPage_ion_content_5_div_92_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r59.doneOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderPage_ion_content_5_div_92_button_21_span_1_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OrderPage_ion_content_5_div_92_button_21_span_2_Template, 2, 0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c5, ctx_r16.selectedStatus == 5 || ctx_r16.selectedStatus == 6, ctx_r16.selectedStatus == 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.selectedStatus == 5 || ctx_r16.selectedStatus == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.selectedStatus == 4);
} }
function OrderPage_ion_content_5_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r61.selectStatus(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u041D\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r63.selectStatus(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0427\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_Template_ion_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r64.selectStatus(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OrderPage_ion_content_5_div_92_div_11_Template, 17, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OrderPage_ion_content_5_div_92_ion_button_12_Template, 2, 0, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, OrderPage_ion_content_5_div_92_div_14_Template, 4, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, OrderPage_ion_content_5_div_92_div_15_Template, 11, 8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, OrderPage_ion_content_5_div_92_div_16_Template, 8, 6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, OrderPage_ion_content_5_div_92_div_17_Template, 7, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, OrderPage_ion_content_5_div_92_details_18_Template, 5, 2, "details", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, OrderPage_ion_content_5_div_92_div_19_Template, 5, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, OrderPage_ion_content_5_div_92_button_21_Template, 3, 6, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedStatus == 6 || ctx_r6.order.status_id == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedStatus == 6 || ctx_r6.order.status_id == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedStatus == 5 || ctx_r6.selectedStatus == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedStatus == 5 || ctx_r6.selectedStatus == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.pay_access && (ctx_r6.selectedStatus == 5 || ctx_r6.selectedStatus == 6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedStatus && ctx_r6.selectedStatus !== 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedReason == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedStatus);
} }
function OrderPage_ion_content_5_div_93_ion_list_3_ion_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-radio", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", phone_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](phone_r69);
} }
function OrderPage_ion_content_5_div_93_ion_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-radio-group", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_93_ion_list_3_Template_ion_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r70.selectedPhone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_div_93_ion_list_3_ion_item_5_Template, 4, 2, "ion-item", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r65.selectedPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r65.orderPhones);
} }
function OrderPage_ion_content_5_div_93_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_93_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r72.phoneClick("phone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrderPage_ion_content_5_div_93_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_93_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r74.phoneClick("operator"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 ip-\u0448\u043B\u044E\u0437 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OrderPage_ion_content_5_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i-feather", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_93_Template_i_feather_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r76.phoneClick("init"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_93_ion_list_3_Template, 6, 2, "ion-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_93_button_4_Template, 2, 0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_div_93_button_5_Template, 2, 0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.orderPhones.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.settings.rules.phoneMode == "robotPhone" || ctx_r7.settings.rules.phoneMode == "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.settings.rules.phoneMode == "robotPhone" || ctx_r7.settings.rules.phoneMode == "robot");
} }
const _c6 = function (a0, a1, a2, a3, a4) { return { "status_done": a0, "status_wait": a1, "status_fail": a2, "status_none": a3, "cl-status-voice": a4 }; };
const _c7 = function (a0) { return { turned: a0 }; };
function OrderPage_ion_content_5_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u0410\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u0410\u0434\u0440\u0435\u0441 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u0428\u0438\u0444\u0440: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u0414\u0430\u0442\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u0412\u0440\u0435\u043C\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " \u041F\u043E\u0441\u043B\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " \u0414\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " \u0418\u043C\u044F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " \u0420\u043E\u0431\u043E\u0442 \u043F\u0440\u043E\u0437\u0432\u043E\u043D: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " \u0421\u0443\u043C\u043C\u0430 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E / \u0412\u0435\u0441 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r78.phoneClick("init"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " \u0421\u0442\u0430\u0442\u0443\u0441: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "ion-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, OrderPage_ion_content_5_ion_item_77_Template, 5, 1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, OrderPage_ion_content_5_ion_item_78_Template, 5, 1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, OrderPage_ion_content_5_ion_item_79_Template, 5, 1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, OrderPage_ion_content_5_ion_item_80_Template, 5, 1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_div_click_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r80.tapBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_Template_ion_input_ngModelChange_84_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r81.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r82.saveNote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_88_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r83.intentStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u0430\u0432\u0438\u0433\u0430\u0442\u043E\u0440\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r84.showRoute(ctx_r84.order); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, OrderPage_ion_content_5_div_92_Template, 22, 9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, OrderPage_ion_content_5_div_93_Template, 6, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.order.company_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.order.client_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.order.client_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 25, ctx_r1.order.datetime_to, "DD.MM.YYYY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](31, 28, ctx_r1.order.datetime_to, "HH:MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 31, ctx_r1.order.datetime_to, "HH:MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.order.client_fio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.order.client_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](34, _c6, ctx_r1.order.client_status_id == 1, ctx_r1.order.client_status_id == 2, ctx_r1.order.client_status_id == 3, ctx_r1.order.client_status_id == 8, ctx_r1.order.client_status_id == 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.order.client_status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.order.rur.toLocaleString("ru"), " \u0440. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.order.amount, " \u0448\u0442. / ", ctx_r1.order.mass, " \u043A\u0433");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.getStatus(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.order.poruch, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@openClose", ctx_r1.openCompany ? "open" : "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.order.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.order.Cname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.order.Cadress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.order.Cphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.order.Cphone_s);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](40, _c7, ctx_r1.openCompany == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.hide_status || ctx_r1.status_id == 5 || ctx_r1.status_id == 6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.callWindow);
} }
class OrderPage {
    constructor(router, route, courier, state$, auth, http, iab, CL, sys, settings, sysMap, data, storage, cache, network, orderService, bs, device) {
        this.router = router;
        this.route = route;
        this.courier = courier;
        this.state$ = state$;
        this.auth = auth;
        this.http = http;
        this.iab = iab;
        this.CL = CL;
        this.sys = sys;
        this.settings = settings;
        this.sysMap = sysMap;
        this.data = data;
        this.storage = storage;
        this.cache = cache;
        this.network = network;
        this.orderService = orderService;
        this.bs = bs;
        this.device = device;
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
        this.statuses = [
            { id: 4, status: "Не доставлено" },
            { id: 5, status: "Доставлено" },
            { id: 6, status: "Частично доставлено" },
        ];
        this.reasons = [
            { id: 1, reason: "Не удалось Дозвониться!" },
            { id: 2, reason: "Отказ, при созвоне с клиентом" },
            { id: 3, reason: "Отказ от доставки без объяснения причины" },
            { id: 4, reason: "Ошибка оформления ИМ" },
            { id: 5, reason: "Получатель передумал" },
            { id: 6, reason: "Товар не подошел/не понравился" },
            { id: 7, reason: "Финансовые трудности у получателя" },
            { id: 8, reason: "Перенос даты доставки получателем." },
            { id: 10, reason: "Не успел" },
            { id: 11, reason: "Переехали/нев.Адрес" },
        ];
        this.commentText = null;
        this.g_quants = {};
        this.changeWindow = false;
        this.selectedPayment = "1";
        this.client_status = "";
        this.client_status_dt = "";
        this.client_status_id = "";
        this.order_sum = null;
        this.vlog = null;
        this.poruch = null;
        this.mass = null;
        this.amount = null;
        this.email_input = "";
        this.phone_input = "";
        this.barcode_flag = false;
        this.barcode_url = null;
        this.barcode = null;
        this.selectedReason = null;
        this.selectedStatus = null;
        this.hide_status = false;
        this.$codeStop = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
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
        this.openCompany = false;
        this.orderId = this.route.snapshot.paramMap.get("id");
        this.initOrder();
        var img = localStorage.getItem("drawImg");
        if (img) {
            this.imageToShow = "data:image/jpg;base64," + img;
        }
    }
    ngOnInit() {
        this.courier.initStatuses();
        this.tomorrow.setDate(this.tomorrow.getDate() + 1);
        this.note = localStorage.getItem(this.orderId);
    }
    ngAfterViewChecked() {
        var img = localStorage.getItem("drawImg");
        if (img) {
            this.imageToShow = "data:image/jpg;base64," + img;
        }
    }
    sendPost(url, data) {
        data = JSON.stringify(data);
        return this.http.post(url, data);
    }
    drawBtn(need) {
        this.drawNeedle = need;
        if (need) {
            this.router.navigate(["draw"]);
        }
        else {
            localStorage.removeItem("drawImg");
        }
    }
    parsePhone(phone) {
        let phones = [];
        phone = phone.replace(/\D+/g, "");
        while (phone.length > 7) {
            phone = this.normalizePhoneNumber(phone);
            phones.push(phone.slice("", 11));
            phone = phone.slice(11);
        }
        return phones;
    }
    normalizePhoneNumber(phone) {
        if (phone[0] !== "8" && phone[0] !== "7" && phone.length !== 11) {
            phone = "8" + phone;
        }
        if (phone.length == 7 || phone.length == 10) {
            phone = "8" + phone;
        }
        if (phone[0] !== "8" && phone.length == 11) {
            phone = "8" + phone.slice(1);
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
            case "init":
                this.callWindow = !this.callWindow;
                break;
            case "phone":
                this.CL.callNumber(this.selectedPhone, false).then(() => { });
                this.callWindow = false;
                break;
            case "operator":
                if (this.network.type == 'none') {
                    this.phoneClick('phone');
                    return false;
                }
                if (this.selectedPhone && courierPhone) {
                    let url = "orders";
                    let data = {
                        action: "send_phone",
                        client_number: this.selectedPhone,
                        cur_number: courierPhone,
                    };
                    this.auth.sendPost(url, data).subscribe((resp) => {
                        console.log("call_subs", resp);
                    });
                    this.auth.showError(9);
                    this.callWindow = false;
                }
                break;
        }
    }
    initOrder() {
        this.storage.get('orders').then((orders) => {
            console.log('Список заказов из стоража', orders);
        });
        this.storage.get('orders').then((orders) => {
            this.order = orders === null || orders === void 0 ? void 0 : orders.filter((order) => { return order.id.toString() == this.orderId; })[0];
            this.goods = this.order.goods;
            this.address = this.order.client_address;
            this.timeFrom = this.order.datetime_from;
            this.timeTo = this.order.datetime_to;
            this.phone = this.order.client_phone;
            this.status = this.order.status_text;
            this.status_id = Number(this.order.status_id);
            this.client_status = this.order.client_status;
            this.client_status_dt = this.order.client_status_dt;
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
        return "";
    }
    //Заполняет массив с ценой товаров и их количеством(для частички)
    setQuants() {
        var goods = this.order.goods;
        for (var i = 0; i < goods.length; i++) {
            let good = goods[i];
            let code = good.Code;
            let count = good.final_kol_vo ? good.final_kol_vo : good.kol_vo;
            let quant = { amount: good.kol_vo, price: good.Price };
            this.g_quants[code] = quant;
        }
    }
    changeQuant(code, action) {
        var q = this.g_quants[code]["amount"];
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
                this.g_quants[code]["amount"] = n_q;
            }
        }
        else if (action == "minus") {
            var n_q = q - 1;
            if (n_q < 0) {
                return false;
            }
            else {
                this.g_quants[code]["amount"] = n_q;
            }
        }
        else if (action == 'delete') {
            this.g_quants[code]["amount"] = 0;
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
        localStorage.removeItem("drawImg");
        this.router.navigate(["/courier"]);
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
        this.selectedReason = id;
    }
    sendPayCall(order = this.order, newStatus = this.selectedStatus) {
        if (this.network.type == 'none') {
            //Если оффлайн
            this.cache.getItem('syncRequests').then((syncRequests) => {
                order = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ phone_input: this.phone_input }, { email_input: this.email_input }), { quants: this.g_quants }), order), { selectedPayment: this.selectedPayment }), { selectedReason: this.selectedReason }), { new_plan_date: this.new_plan_date }), { commentText: this.commentText }), { check: this.checkBase64Image });
                syncRequests && syncRequests.push({ order, newStatus });
                this.cache.saveItem('syncRequests', syncRequests, 'delayedCalls').then(() => {
                    console.log(`sys:: Отложено изменение статуса на ${newStatus} для заказа ${order.client_id}`);
                    this.localModifyOrders(newStatus);
                    this.router.navigate(['courier']);
                });
            });
        }
        else {
            //Если онлайн
            this.localModifyOrders(newStatus);
            order = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ phone_input: this.phone_input }, { email_input: this.email_input }), { quants: this.g_quants }), order), { selectedPayment: this.selectedPayment }), { selectedReason: this.selectedReason }), { new_plan_date: this.new_plan_date }), { commentText: this.commentText }), { check: this.checkBase64Image });
            this.orderService.sendDelayedCall(order, newStatus);
            this.router.navigate(['courier']);
        }
    }
    submitChange() {
        let self = this;
        this.storage.get('orders').then((orders) => {
            orders === null || orders === void 0 ? void 0 : orders.map((order) => {
                if (order.id.toString() == this.order.id) {
                    order.status_id = this.selectedStatus;
                    this.data.saveOrders(orders);
                    this.data.orders.next(orders);
                }
            });
        });
        let noSkip = true;
        switch (this.selectedStatus) {
            case 4:
                if (this.selectedReason != null) {
                    let new_plan_date = new Date(this.new_plan_date);
                    this.courier
                        .changeStatus(this.selectedStatus, String(this.order.id), undefined, this.selectedReason, null, null, new_plan_date.toLocaleDateString())
                        .subscribe((data) => {
                        if (data.success == "true") {
                            self.changeWindow = false;
                            self.state$.state.next("init");
                            self.selectedPayment = "1";
                            self.selectedReason = null;
                            self.selectedStatus = null;
                            self.router.navigate(["courier"]);
                            self.state$.updateWayInfo.next("0");
                        }
                        localStorage.removeItem("drawImg");
                    });
                }
                break;
            case 5:
                if (this.selectedPayment !== '2') {
                    noSkip = false;
                }
                this.sys.doOCR(this.checkBase64Image, noSkip).then((recognizedData) => {
                    let text = this.commentText ? this.commentText : "";
                    this.courier
                        .changeStatus(this.selectedStatus, String(this.order.id), text, undefined, undefined, this.selectedPayment, '', this.checkBase64Image, recognizedData)
                        .subscribe((data) => {
                        if (data.success == "true") {
                            self.changeWindow = false;
                            self.state$.state.next("init");
                            self.selectedPayment = "1";
                            self.selectedReason = null;
                            self.selectedStatus = null;
                            if (!self.pay_access) {
                                self.router.navigate(["courier"]);
                            }
                            self.initOrder();
                            self.state$.updateWayInfo.next("0");
                        }
                        localStorage.removeItem("drawImg");
                    });
                });
                break;
            case 6:
                if (this.selectedPayment !== '2') {
                    noSkip = false;
                }
                this.sys.doOCR(this.checkBase64Image, noSkip).then((recognizedData) => {
                    this.courier
                        .changeStatus(this.selectedStatus, String(this.order.id), undefined, undefined, this.g_quants, this.selectedPayment, '', this.checkBase64Image, recognizedData)
                        .subscribe((data) => {
                        if ((data === null || data === void 0 ? void 0 : data.success) == "true") {
                            self.changeWindow = false;
                            self.state$.state.next("init");
                            self.selectedPayment = "1";
                            self.selectedReason = null;
                            self.selectedStatus = null;
                            if (!self.pay_access) {
                                self.router.navigate(["courier"]);
                            }
                            self.initOrder();
                            self.state$.updateWayInfo.next("0");
                        }
                        else {
                            this.sys.presentToast("Нет товаров в заказе", "danger", "Частичная доставка невозможна");
                        }
                        localStorage.removeItem("drawImg");
                    });
                });
                break;
        }
    }
    getSum() {
        if (this.order) {
            let price = 0;
            let quants = this.g_quants;
            for (let code in quants) {
                price += quants[code]["price"] * quants[code]["amount"];
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
        let goods = this.order.goods;
        let quants = this.g_quants;
        let callback_url = this.sys.proxy + "https://mobile.postsrvs.ru/mobile/pay_callback.php";
        let products = [];
        for (let code in quants) {
            if (quants[code]["amount"] > 0) {
                for (let i = 0; i < goods.length; i++) {
                    if (goods[i]["Code"] == code) {
                        let good_name = goods[i]["Name"];
                        let good_amount = quants[code]["amount"];
                        let good_price = Math.round(quants[code]["price"] * 100) / 100;
                        let pos = {
                            name: good_name,
                            price: good_price,
                            quantity: good_amount,
                        };
                        products.push(pos);
                    }
                }
            }
        }
        var purchase = { products: products };
        console.log("goods_description\n", purchase);
        var self = this;
        if (this.pay_access) {
            let api_key = this.pay_access_data["api_key"];
            let login = this.pay_access_data["login"];
            let cashier = this.pay_access_data["cashier_name"];
            let phone;
            let order_data = {
                apikey: String(this.pay_access_data.api_key),
                login: String(this.pay_access_data.phone),
                cashier_name: String(this.pay_access_data.name) +
                    String(this.pay_access_data.phone),
                purchase: purchase,
                callback_url: callback_url,
                mode: "email",
                customer_email: this.email_input,
                customer_phone: this.phone_input,
            };
            if (self.selectedPayment == "2") {
                order_data["card_amount"] = "#";
            }
            else {
                order_data["cash_amount"] = "#";
            }
            if (this.phone_input != "") {
                order_data["customer_phone"] = this.phone_input;
            }
            self.send_api_data(order_data);
        }
    }
    //Получаем api key & login
    getPayData() {
        let url = "pay_order";
        let data = { action: "getData", orderId: this.clientId };
        let self = this;
        if (navigator.onLine) {
            this.auth.sendPost(url, data).subscribe((res) => {
                console.log("GET_PAY_DATA", res);
                if (res.success == "true") {
                    self.pay_access = true;
                    self.pay_access_data = res;
                }
                else {
                    self.pay_access = false;
                }
            });
        }
        else {
            self.pay_access = false;
        }
    }
    send_api_data(api_data) {
        let url = "pay_order";
        let self = this;
        this.order.rur = 0;
        api_data.purchase.products.forEach((product) => {
            this.order.rur += product.price * product.quantity;
        });
        var data = {
            action: "sendPay",
            orderData: api_data,
            orderId: this.order.id,
        };
        if (navigator.onLine) {
            this.auth.sendPost(url, data).subscribe((res) => {
                self.submitChange();
                self.checkPayment();
                self.hide_status = true;
            });
        }
        else {
            let requests = [];
            this.cache.getItem('requests').then((req) => {
                if (req !== undefined) {
                    requests = req;
                }
                requests.push({ url: url, data: data });
                this.cache.saveItem('requests', requests);
                self.submitChange();
                self.checkPayment();
                self.hide_status = true;
            });
        }
    }
    showCheck() {
        const browser = this.iab.create(this.barcode_url, "_blank");
    }
    voiceLink() {
        const browser = this.iab.create(String(this.order.r_url));
    }
    checkPayment() {
        var self = this;
        this.state$.interval_1ss.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.$codeStop)).subscribe(() => {
            self.ifPaid();
            console.log("paid_iter");
        });
    }
    ifPaid() {
        var url = "pay_order";
        var data = { action: "checkPaid", orderId: this.order.id };
        var self = this;
        this.auth.sendPost(url, data).subscribe((data) => {
            if (data.success == "true" && data.barcode != null) {
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
    showRoute() {
        this.sysMap.showRoute(this.order);
    }
    doneOrder() {
        let drawedImg = localStorage.drawImg;
        if (this.drawNeedle && !drawedImg) {
            this.drawBtn(this.drawNeedle);
        }
        else {
            if (this.selectedPayment == '2') {
                this.sys.checkPhoto().then((imageData) => {
                    this.checkBase64Image = 'data:image/jpeg;base64,' + imageData;
                    this.sendPayCall();
                });
            }
            else {
                this.sendPayCall();
            }
        }
    }
    saveNote() {
        localStorage.setItem(this.orderId, this.note);
        this.sysMap.infoUpdated.next();
    }
    tapBlock() {
        this.openCompany = !this.openCompany;
    }
    localModifyOrders(newStatus) {
        let meta = {
            label: 'localChanges'
        };
        this.storage.get('orders').then((orders) => {
            orders === null || orders === void 0 ? void 0 : orders.map((order) => {
                if (order.id.toString() == this.order.id.toString()) {
                    order.status_id = newStatus;
                    this.data.saveOrders(orders).then(() => this.sysMap.infoUpdated.next(meta));
                    this.data.orders.next(orders);
                }
            });
        });
    }
    scanReturned() {
        this.bs.scan().then((data) => {
            const url = this.sys.proxy + 'https://mobile.postsrvs.ru/mobile/orders';
            let data1 = {
                "orderId": this.orderId,
                "box_barcode": data.text,
                "action": "get_box",
                "uuid": this.device.uuid
            };
            this.http.post(url, data1).subscribe(res => {
                console.log(`sys:: ответ скана возврата: ${res}`);
                this.changeQuant(res[0], 'delete');
            });
        });
    }
}
OrderPage.ɵfac = function OrderPage_Factory(t) { return new (t || OrderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_courier_service__WEBPACK_IMPORTED_MODULE_14__["CourierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_16__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_17__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_15__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_map_service__WEBPACK_IMPORTED_MODULE_18__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_order_service__WEBPACK_IMPORTED_MODULE_19__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"])); };
OrderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrderPage, selectors: [["app-order"]], decls: 6, vars: 2, consts: [["slot", "start"], [4, "ngIf"], [1, "flex"], ["src", "../../../assets/a-b.svg"], [1, "addresses"], [1, "client-id"], [1, "datetime"], [1, "time"], [1, "flex", "main-info"], [1, "bold"], [1, "st_state", 3, "ngClass"], [1, "primary-color", "bold"], ["id", "call", "expand", "full", "fill", "solid", 3, "click"], [1, "yellow"], ["id", "company-card"], ["class", "ion-activated", 4, "ngIf"], [1, "actions-button", 3, "click"], ["src", "../../../assets/actions-arrows.svg", 3, "ngClass"], ["id", "note-item"], ["placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0443 \u043F\u043E \u0437\u0430\u043A\u0430\u0437\u0443", 3, "ngModel", "ngModelChange"], [3, "click"], ["slot", "icon-only", "name", "save"], ["id", "navigate-buttons"], ["expand", "block", "fill", "solid", "shape", "round", 1, "action", 3, "click"], ["id", "done-buttons", 4, "ngIf"], ["class", "call-window", 4, "ngIf"], [1, "ion-activated"], ["id", "done-buttons"], ["expand", "full", "fill", "solid", "shape", "round", "id", "light-purple-button", 1, "action", 3, "click"], ["slot", "start", "name", "close"], ["expand", "full", "fill", "solid", "shape", "round", "id", "light-blue-button", 1, "action", 3, "click"], ["slot", "start", "src", "../../../assets/pie-chart.svg"], ["expand", "full", "fill", "solid", "shape", "round", "id", "light-green-button", 1, "action", 3, "click"], ["slot", "start", "name", "checkmark-done"], [1, "sc-row", "o-row"], ["class", "sc-goods-block", 4, "ngIf"], ["expand", "block", "fill", "solid", "shape", "round", 3, "click", 4, "ngIf"], ["class", "draw", 4, "ngIf"], ["class", "sc-payment", 4, "ngIf"], ["class", "sc-payment-block o-row", 4, "ngIf"], ["class", "dt-picker", 4, "ngIf"], [1, "sc-s-wrp"], ["class", "sc-submit", 3, "ngClass", "click", 4, "ngIf"], [1, "sc-goods-block"], [1, "goods-row", "o-row"], [1, "gr-title", "o-t"], [1, "gr-goods-list"], [1, "gr-head"], [1, "gr-col"], [4, "ngFor", "ngForOf"], [1, "gr-item", 3, "ngClass"], [1, "gr-col", "gr-quant"], ["name", "minus-circle"], ["name", "plus-circle"], [1, "gr-col", "gr-price"], ["expand", "block", "fill", "solid", "shape", "round", 3, "click"], [1, "sc-r-title"], ["class", "sc-reason", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "sc-reason", 3, "ngClass", "click"], [1, "draw"], [1, "asc-row"], [1, "title"], [1, "draw-btns"], [1, "drawBtn", 3, "ngClass", "click"], ["alt", "\u041F\u043E\u0434\u043F\u0438\u0441\u044C", "style", "height: 200px;", 3, "src", 4, "ngIf"], ["class", "drawBtn changeDraw", 3, "click", 4, "ngIf"], ["alt", "\u041F\u043E\u0434\u043F\u0438\u0441\u044C", 2, "height", "200px", 3, "src"], [1, "drawBtn", "changeDraw", 3, "click"], [1, "sc-payment"], [1, "sc-payment__title"], [1, "dc-payment__wrp"], [1, "sc-payment-item", 3, "ngClass", "click"], [1, "sc-payment-block", "o-row"], ["class", "pb-email", 4, "ngIf"], [1, "pb-phone"], ["class", "pb-phone__title", 4, "ngIf"], ["type", "tel", "class", "pb-phone__input", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "show-phone", 3, "click"], [1, "pb-email"], [1, "pb-email__title"], ["type", "email", 1, "pb-email__input", 3, "ngModel", "ngModelChange", "input"], ["class", "email-error", 4, "ngIf"], [1, "email-error"], [1, "pb-phone__title"], ["type", "tel", 1, "pb-phone__input", 3, "ngModel", "ngModelChange"], ["class", "sc-comment-block", 4, "ngIf"], ["class", "goods-row o-row", 4, "ngIf"], [1, "sc-comment-block"], ["cols", "30", "rows", "3", 1, "sc-comment", 3, "ngModel", "ngModelChange"], [1, "gr-col", "gr-name"], [1, "dt-picker"], ["position", "floating"], ["displayFormat", "DD/MM/YYYY", 3, "min", "value", "ngModel", "ngModelChange"], [1, "sc-submit", 3, "ngClass", "click"], ["class", "l_btn_del", 4, "ngIf"], ["class", "l_btn_u_del", 4, "ngIf"], [1, "l_btn_del"], [1, "l_btn_u_del"], [1, "call-window"], [1, "cw-body"], ["name", "x-square", "size", "large", 3, "click"], [3, "click", 4, "ngIf"], ["name", "selectedPhone", 3, "ngModel", "ngModelChange"], [3, "value"]], template: function OrderPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_title_4_Template, 2, 1, "ion-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_Template, 94, 42, "ion-content", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.order);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonBackButtonDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], angular_feather__WEBPACK_IMPORTED_MODULE_24__["FeatherComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["RadioValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  bottom: 40px;\n  top: 0;\n  --padding-bottom: 50px;\n}\n\nion-content[_ngcontent-%COMP%]   #done-buttons[_ngcontent-%COMP%] {\n  padding: 15px;\n  box-shadow: 0px -2px 3px rgba(117, 117, 117, 0.1);\n}\n\nion-content[_ngcontent-%COMP%]   #done-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  line-height: 19px !important;\n  margin-right: 0;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-color: #d6cfcf;\n  --border-width: 1px;\n  --border-radius: 2px;\n  --padding-start: 0;\n  margin: 5px 15px 0px 15px;\n  --inner-border-width: 0;\n  --inner-padding-bottom: 8px;\n  --inner-padding-start: 8px;\n  --inner-padding-top: 8px;\n  --inner-padding-end: 8px;\n  font-size: 14px;\n  line-height: 21px;\n  color: #585454;\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .addresses[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  font-size: 14px;\n  line-height: 16px;\n  color: #585454;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .addresses[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-weight: bold;\n  color: #333333;\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14px;\n  line-height: 16px;\n  color: #585454;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: bold;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%] {\n  --background: #fffed7;\n  font-size: 14px;\n  color: #585454;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333333;\n}\n\nion-content[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333333;\n}\n\nion-content[_ngcontent-%COMP%]   .status_done[_ngcontent-%COMP%] {\n  color: #33b150;\n}\n\nion-content[_ngcontent-%COMP%]   .status_wait[_ngcontent-%COMP%] {\n  color: #d8d510;\n}\n\nion-content[_ngcontent-%COMP%]   .status_fail[_ngcontent-%COMP%] {\n  color: #d21212;\n}\n\nion-content[_ngcontent-%COMP%]   .status_none[_ngcontent-%COMP%] {\n  color: #71777d;\n}\n\nion-content[_ngcontent-%COMP%]   .cl-status-voice[_ngcontent-%COMP%] {\n  color: #552086;\n}\n\nion-content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%] {\n  flex-flow: wrap;\n  justify-content: space-between;\n}\n\nion-content[_ngcontent-%COMP%]   .brand-color[_ngcontent-%COMP%] {\n  color: #2b637e !important;\n}\n\nion-content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  margin-bottom: 23px;\n}\n\nion-content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(even) {\n  text-align: right;\n}\n\nion-content[_ngcontent-%COMP%]   #call[_ngcontent-%COMP%] {\n  --background: #2b637e;\n  margin-bottom: 0;\n  margin-top: 15px;\n  text-transform: none;\n  font-weight: bold;\n  height: 42px;\n}\n\nion-content[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  --background: #fffed7;\n}\n\nion-content[_ngcontent-%COMP%]   #company-card[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\nion-content[_ngcontent-%COMP%]   #company-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n#note-item[_ngcontent-%COMP%] {\n  --inner-padding-bottom: 0 !important;\n  --inner-padding-top: 0 !important;\n  --inner-padding-end: 0 !important;\n}\n\n#note-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #2b637e;\n  width: 48px;\n  height: 100%;\n  margin: 0;\n}\n\n#navigate-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 15px;\n}\n\n#navigate-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #f6fdff;\n  --border-color: #bbd9e8;\n  --border-radius: 2px;\n  --color: #2b637e;\n  margin: 0;\n  text-transform: none;\n  font-weight: bold;\n  --border-width: 1px;\n  --border-style: solid;\n  font-size: 14px;\n}\n\n#navigate-buttons[_ngcontent-%COMP%]   .call-window[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n#navigate-buttons[_ngcontent-%COMP%]   .call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%] {\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 5px;\n  position: relative;\n}\n\n#navigate-buttons[_ngcontent-%COMP%]   .call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  height: 44px;\n  width: 80%;\n  box-shadow: 0px 0px 0.5px 0.5px #7cd5ff;\n  border-radius: 3px;\n  margin: 5px 0;\n  text-transform: uppercase;\n}\n\n.sc-row[_ngcontent-%COMP%] {\n  display: block;\n  box-shadow: 0 0 1px 1px #ff0000;\n  background: #e8f5ff;\n}\n\n.o-row[_ngcontent-%COMP%] {\n  margin: 2% 10px 0 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 25px auto;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 0px;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%]   .gr-item[_ngcontent-%COMP%] {\n  grid-template-columns: 40% 30% 30%;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 0px;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%]   .gr-item[_ngcontent-%COMP%] {\n  grid-template-columns: 40% 30% 30%;\n}\n\n.goods-row[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.o-t[_ngcontent-%COMP%] {\n  font-weight: bold;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n}\n\n.gr-goods-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-template-rows: repeat(auto-fill, 20px);\n}\n\n.gr-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n}\n\n.gr-head[_ngcontent-%COMP%]   .gr-col[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n\n.gr-head[_ngcontent-%COMP%]   .gr-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.gr-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n}\n\n.st_fail[_ngcontent-%COMP%] {\n  background: #d21212;\n  color: #fff;\n}\n\n.st_done[_ngcontent-%COMP%] {\n  background: #33b150;\n  color: #fff;\n}\n\n.gr-quant[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gr-price[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sc-r-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 7px;\n  text-align: center;\n}\n\n.sc-reason[_ngcontent-%COMP%] {\n  width: 96%;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  margin: 4px 0;\n  border-radius: 2px;\n  background: #fff;\n}\n\n.status_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.draw[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 5% 10px 0px 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 10px 10px 20px 10px;\n  background: #fff;\n}\n\n.changeDraw[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 75%;\n  margin: 9px auto;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.asc-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.draw-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n}\n\n.drawBtn[_ngcontent-%COMP%] {\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n  background: #fff;\n}\n\n.draw_btn_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.sc-payment[_ngcontent-%COMP%] {\n  margin: 5% 10px 0 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 0px 10px 10px 10px;\n  display: grid;\n  background: #fff;\n}\n\n.sc-payment__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.dc-payment__wrp[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n}\n\n.sc-payment-item[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.payment_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.sc-payment-block[_ngcontent-%COMP%] {\n  margin: 5% 10px 0px 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 10px 10px 20px 10px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  background: #fff;\n  gap: 10px;\n}\n\n.sc-payment-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 2px;\n  height: 33px;\n  outline: none;\n  border: none;\n  background: no-repeat;\n}\n\n.pb-email[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pb-phone[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pb-email__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.pb-phone__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.show-phone[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 60%;\n  margin: 9px auto;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.sc-comment-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.sc-submit[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 60%;\n  margin: 25px 0px 2px 0;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.sc-s-wrp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0px;\n}\n\n.c_t_del[_ngcontent-%COMP%] {\n  background: #80f759;\n  color: #2379a2;\n  height: 50px;\n  font-size: 22px;\n  width: 94%;\n  text-transform: uppercase;\n  box-shadow: 0 0 1px 1px #80f759;\n}\n\n.c_t_u_del[_ngcontent-%COMP%] {\n  background: #f55656;\n  color: #fff;\n  height: 50px;\n  font-size: 22px;\n  width: 94%;\n  text-transform: uppercase;\n  box-shadow: 0 0 1px 1px #f55656;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLE1BQU07RUFDTixzQkFBaUI7QUFDbkI7O0FBSkE7RUFNSSxhQUFhO0VBQ2IsaURBQWlEO0FBRXJEOztBQVRBO0VBVU0sMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixlQUFlO0FBR3JCOztBQWZBO0VBaUJJLHVCQUFlO0VBQ2YsbUJBQWU7RUFDZixvQkFBZ0I7RUFDaEIsa0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix1QkFBcUI7RUFDckIsMkJBQXVCO0VBQ3ZCLDBCQUFzQjtFQUN0Qix3QkFBb0I7RUFDcEIsd0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtBQUV6Qjs7QUFoQ0E7RUFpQ00sU0FBUztFQUNULHFCQUFxQjtBQUczQjs7QUFyQ0E7RUFxQ00scUJBQXFCO0FBSTNCOztBQXpDQTtFQXdDTSxhQUFhO0FBS25COztBQTdDQTtFQTJDUSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBTXRCOztBQXBEQTtFQWlEVSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7QUFPL0I7O0FBM0RBO0VBMERNLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFLcEI7O0FBbEVBO0VBZ0VRLGNBQWM7RUFDZCxpQkFBaUI7QUFNekI7O0FBdkVBO0VBc0VJLHFCQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQWM7QUFLbEI7O0FBN0VBO0VBMkVNLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQU1mOztBQW5GQTtFQWdGUSxpQkFBaUI7QUFPekI7O0FBdkZBO0VBb0ZVLGlCQUFpQjtFQUNqQixjQUFjO0FBT3hCOztBQTVGQTtFQTJGSSxpQkFBaUI7RUFDakIsY0FBYztBQUtsQjs7QUFqR0E7RUErRkksY0FBYztBQU1sQjs7QUFyR0E7RUFtR0ksY0FBYztBQU1sQjs7QUF6R0E7RUF1R0ksY0FBYztBQU1sQjs7QUE3R0E7RUEwR0ksY0FBYztBQU9sQjs7QUFqSEE7RUE2R0ksY0FBdUI7QUFRM0I7O0FBckhBO0VBZ0hJLGVBQWU7RUFDZiw4QkFBOEI7QUFTbEM7O0FBMUhBO0VBcUhJLHlCQUF5QjtBQVM3Qjs7QUE5SEE7RUF3SEksbUJBQW1CO0FBVXZCOztBQWxJQTtFQTJISSxpQkFBaUI7QUFXckI7O0FBdElBO0VBOEhJLHFCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFZaEI7O0FBL0lBO0VBc0lJLHFCQUFhO0FBYWpCOztBQW5KQTtFQXlJSSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBY3RCOztBQXhKQTtFQTZJTSxpQkFBaUI7QUFldkI7O0FBVkE7RUFDRSxvQ0FBdUI7RUFDdkIsaUNBQW9CO0VBQ3BCLGlDQUFvQjtBQWF0Qjs7QUFoQkE7RUFNSSxxQkFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztBQWNiOztBQVZBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0FBYWQ7O0FBaEJBO0VBS0kscUJBQWE7RUFDYix1QkFBZTtFQUNmLG9CQUFnQjtFQUNoQixnQkFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFlO0VBQ2YscUJBQWU7RUFDZixlQUFlO0FBZW5COztBQTdCQTtFQWtCSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQWVsQzs7QUF6Q0E7RUE2Qk0sVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQWdCeEI7O0FBcERBO0VBdUNRLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtFQUNWLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtBQWlCakM7O0FBVkE7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG1CQUFtQjtBQWFyQjs7QUFYQTtFQUNFLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFjL0I7O0FBWkE7RUFFSSxZQUFZO0VBQ1osV0FBVztBQWNmOztBQWpCQTtFQU1NLGtDQUFrQztBQWV4Qzs7QUFYQTtFQUVJLFlBQVk7RUFDWixXQUFXO0FBYWY7O0FBaEJBO0VBTU0sa0NBQWtDO0FBY3hDOztBQVZBO0VBQ0UsZ0JBQWdCO0FBYWxCOztBQVhBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBY3BCOztBQVpBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMkNBQTJDO0FBZTdDOztBQWJBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQWdCcEM7O0FBbEJBO0VBS0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQWlCcEI7O0FBdkJBO0VBU00sZ0JBQWdCO0FBa0J0Qjs7QUFkQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7QUFpQnBDOztBQWZBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFrQmI7O0FBaEJBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFtQmI7O0FBakJBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBb0JyQjs7QUFsQkE7RUFDRSxrQkFBa0I7QUFxQnBCOztBQW5CQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBc0JwQjs7QUFwQkE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQXVCbEI7O0FBckJBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUF3QmI7O0FBdEJBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQXlCbEI7O0FBdEJBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtBQXlCbEI7O0FBdkJBO0VBRUksaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQXlCdEI7O0FBckJBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUF3QmQ7O0FBckJBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBd0JsQjs7QUFyQkE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQXdCYjs7QUF0QkE7RUFDRSxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixnQkFBZ0I7QUF5QmxCOztBQXRCQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUF5QnBCOztBQXRCQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixZQUFZO0FBeUJkOztBQXRCQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBeUJkOztBQXRCQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBeUJiOztBQXZCQTtFQUNFLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixTQUFTO0FBMEJYOztBQXJDQTtFQWNJLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0FBMkJ6Qjs7QUF4QkE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUEyQnhCOztBQXhCQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQTJCeEI7O0FBeEJBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQTJCcEI7O0FBeEJBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQTJCcEI7O0FBekJBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtBQTRCbEI7O0FBMUJBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUE2QnpCOztBQTFCQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUE2QmxCOztBQTNCQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBOEJkOztBQTVCQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLCtCQUErQjtBQStCakM7O0FBNUJBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsK0JBQStCO0FBK0JqQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgYm90dG9tOiA0MHB4O1xuICB0b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDUwcHg7XG5cbiAgI2RvbmUtYnV0dG9ucyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCAzcHggcmdiYSgxMTcsIDExNywgMTE3LCAwLjEpO1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDZjZmNmO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIG1hcmdpbjogNXB4IDE1cHggMHB4IDE1cHg7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDhweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGNvbG9yOiAjNTg1NDU0O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgfVxuICAgIC5mbGV4IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5hZGRyZXNzZXMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjNTg1NDU0O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2xpZW50LWlkIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIGNvbG9yOiAjNTg1NDU0O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24taXRlbS5kYXRldGltZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZWQ3O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU4NTQ1NDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAudGltZSB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgfVxuICAuc3RhdHVzX2RvbmUge1xuICAgIGNvbG9yOiAjMzNiMTUwO1xuICB9XG5cbiAgLnN0YXR1c193YWl0IHtcbiAgICBjb2xvcjogI2Q4ZDUxMDtcbiAgfVxuXG4gIC5zdGF0dXNfZmFpbCB7XG4gICAgY29sb3I6ICNkMjEyMTI7XG4gIH1cbiAgLnN0YXR1c19ub25lIHtcbiAgICBjb2xvcjogIzcxNzc3ZDtcbiAgfVxuICAuY2wtc3RhdHVzLXZvaWNlIHtcbiAgICBjb2xvcjogcmdiKDg1LCAzMiwgMTM0KTtcbiAgfVxuICAubWFpbi1pbmZvIHtcbiAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmJyYW5kLWNvbG9yIHtcbiAgICBjb2xvcjogIzJiNjM3ZSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYWluLWluZm8gPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICB9XG4gIC5tYWluLWluZm8gPiBkaXY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAjY2FsbCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmI2MzdlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gIH1cbiAgLnllbGxvdyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZWQ3O1xuICB9XG4gICNjb21wYW55LWNhcmQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG4jbm90ZS1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcblxuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyYjYzN2U7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4jbmF2aWdhdGUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxNXB4O1xuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNmZkZmY7XG4gICAgLS1ib3JkZXItY29sb3I6ICNiYmQ5ZTg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLS1jb2xvcjogIzJiNjM3ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmNhbGwtd2luZG93IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG5cbiAgICAuY3ctYm9keSB7XG4gICAgICB3aWR0aDogODUlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMC41cHggMC41cHggIzdjZDVmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLy/Qm9C10LPQsNGB0LghXG4uc2Mtcm93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNmZjAwMDA7XG4gIGJhY2tncm91bmQ6ICNlOGY1ZmY7XG59XG4uby1yb3cge1xuICBtYXJnaW46IDIlIDEwcHggMCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IGF1dG87XG59XG4uc2MtZ29vZHMtYmxvY2sge1xuICAuZ29vZHMtcm93IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICAuZ3ItaXRlbSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAzMCUgMzAlO1xuICAgIH1cbiAgfVxufVxuLnNjLWdvb2RzLWJsb2NrIHtcbiAgLmdvb2RzLXJvdyB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgLmdyLWl0ZW0ge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgMzAlIDMwJTtcbiAgICB9XG4gIH1cbn1cbi5nb29kcy1yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm8tdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3ItZ29vZHMtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMjBweCk7XG59XG4uZ3ItaGVhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDI1JSAyNSU7XG5cbiAgLmdyLWNvbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbiAgfVxufVxuLmdyLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSAyNSUgMjUlO1xufVxuLnN0X2ZhaWwge1xuICBiYWNrZ3JvdW5kOiAjZDIxMjEyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zdF9kb25lIHtcbiAgYmFja2dyb3VuZDogIzMzYjE1MDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZ3ItcXVhbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdyLXByaWNlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNjLXItdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2MtcmVhc29uIHtcbiAgd2lkdGg6IDk2JTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgbWFyZ2luOiA0cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnN0YXR1c19hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMmI2MzdlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5kcmF3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNSUgMTBweCAwcHggMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jaGFuZ2VEcmF3IHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzJiNjM3ZTtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDlweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5hc2Mtcm93IHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLmRyYXctYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDlweCBhdXRvO1xuICB3aWR0aDogNzIlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMzNweDtcbn1cblxuLmRyYXdCdG4ge1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA5cHggYXV0bztcbiAgd2lkdGg6IDcyJTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kcmF3X2J0bl9hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMmI2MzdlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zYy1wYXltZW50IHtcbiAgbWFyZ2luOiA1JSAxMHB4IDAgMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zYy1wYXltZW50X190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kYy1wYXltZW50X193cnAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA5cHggYXV0bztcbiAgd2lkdGg6IDcyJTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG59XG5cbi5zYy1wYXltZW50LWl0ZW0ge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGF5bWVudF9hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMmI2MzdlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zYy1wYXltZW50LWJsb2NrIHtcbiAgbWFyZ2luOiA1JSAxMHB4IDBweCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGdhcDogMTBweDtcblxuICBpbnB1dCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcbiAgfVxufVxuLnBiLWVtYWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wYi1waG9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucGItZW1haWxfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBiLXBob25lX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2hvdy1waG9uZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICMyYjYzN2U7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiA5cHggYXV0bztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2MtY29tbWVudC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2Mtc3VibWl0IHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzJiNjM3ZTtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDI1cHggMHB4IDJweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zYy1zLXdycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uY190X2RlbCB7XG4gIGJhY2tncm91bmQ6ICM4MGY3NTk7XG4gIGNvbG9yOiAjMjM3OWEyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgd2lkdGg6IDk0JTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzgwZjc1OTtcbn1cblxuLmNfdF91X2RlbCB7XG4gIGJhY2tncm91bmQ6ICNmNTU2NTY7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgd2lkdGg6IDk0JTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2Y1NTY1Njtcbn1cbiJdfQ== */"], data: { animation: [
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
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OrderPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "app-order",
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
                    ])
                ],
                templateUrl: "./order.page.html",
                styleUrls: ["./order.page.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_courier_service__WEBPACK_IMPORTED_MODULE_14__["CourierService"] }, { type: _services_state_service__WEBPACK_IMPORTED_MODULE_16__["StateService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }, { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] }, { type: _services_sys_service__WEBPACK_IMPORTED_MODULE_17__["SysService"] }, { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_15__["SettingsService"] }, { type: _services_sys_map_service__WEBPACK_IMPORTED_MODULE_18__["MapService"] }, { type: _services_sys_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"] }, { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }, { type: ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"] }, { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] }, { type: _services_sys_order_service__WEBPACK_IMPORTED_MODULE_19__["OrderService"] }, { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] }, { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-order-order-module-es2015.js.map