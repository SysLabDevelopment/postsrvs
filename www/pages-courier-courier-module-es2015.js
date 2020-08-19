(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-courier-courier-module"],{

/***/ "./src/app/pages/courier/courier.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/courier/courier.module.ts ***!
  \*************************************************/
/*! exports provided: CourierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierPageModule", function() { return CourierPageModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/ru */ "./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icons/icons.module */ "./src/app/icons/icons.module.ts");
/* harmony import */ var _courier_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courier.page */ "./src/app/pages/courier/courier.page.ts");












Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3___default.a, 'ru');
const routes = [
    {
        path: '',
        component: _courier_page__WEBPACK_IMPORTED_MODULE_9__["CourierPage"]
    }
];
class CourierPageModule {
}
CourierPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CourierPageModule });
CourierPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CourierPageModule_Factory(t) { return new (t || CourierPageModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], useFactory: () => 'ru' }
    ], imports: [[
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CourierPageModule, { declarations: [_courier_page__WEBPACK_IMPORTED_MODULE_9__["CourierPage"]], imports: [_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CourierPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [
                    _icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
                ],
                declarations: [_courier_page__WEBPACK_IMPORTED_MODULE_9__["CourierPage"]],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], useFactory: () => 'ru' }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/courier/courier.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/courier/courier.page.ts ***!
  \***********************************************/
/*! exports provided: CourierPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierPage", function() { return CourierPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/sys/map.service */ "./src/app/services/sys/map.service.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/help/help.component */ "./src/app/components/help/help.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_courier_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/courier.service */ "./src/app/services/courier.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_sys_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/sys.service */ "./src/app/services/sys.service.ts");
/* harmony import */ var _services_sys_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/sys/data.service */ "./src/app/services/sys/data.service.ts");
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-feather */ "./node_modules/angular-feather/fesm2015/angular-feather.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/fesm2015/scrolling.js");



































const _c0 = ["sInput"];
function CourierPage_ion_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourierPage_ion_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_ion_button_11_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.submitOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i-feather", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourierPage_ion_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_ion_button_12_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.endWork(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i-feather", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourierPage_div_29_ion_item_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("c ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, order_r12.datetime_from, "H:mm", "ru"), " ");
} }
function CourierPage_div_29_ion_item_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0434\u043E ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, order_r12.datetime_to, "H:mm", "ru"), "");
} }
function CourierPage_div_29_ion_item_3_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_29_ion_item_3_div_15_Template_ion_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const order_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r18.showRoute(order_r12); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u0417\u0430\u043C\u0435\u0442\u043A\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_29_ion_item_3_div_15_Template_ion_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const order_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r21.showRoute(order_r12); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u041C\u0430\u0440\u0448\u0440\u0443\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { overdue: a0 }; };
const _c2 = function (a0) { return { turned: a0 }; };
function CourierPage_div_29_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_29_ion_item_3_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const order_r12 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r23.selectOrder(order_r12.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CourierPage_div_29_ion_item_3_span_9_Template, 3, 5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CourierPage_div_29_ion_item_3_span_10_Template, 3, 5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CourierPage_div_29_ion_item_3_div_15_Template, 10, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_29_ion_item_3_Template_div_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const order_r12 = ctx.$implicit; order_r12.show = !order_r12.show; return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c1, order_r12.overdue == "1" || order_r12.required == true))("cdkDragStartDelay", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@openClose", order_r12.show ? "open" : "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", order_r12.client_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", order_r12.company, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r12.datetime_from);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r12.datetime_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r12.client_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r12.client_fio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r12.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c2, order_r12.show == true));
} }
function CourierPage_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-searchbar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function CourierPage_div_29_Template_ion_searchbar_ionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.onSearchChange($event); })("ngModelChange", function CourierPage_div_29_Template_ion_searchbar_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.searchString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function CourierPage_div_29_Template_cdk_virtual_scroll_viewport_cdkDropListDropped_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CourierPage_div_29_ion_item_3_Template, 19, 15, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("debounce", 250)("ngModel", ctx_r3.searchString);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, ctx_r3.orders_c));
} }
function CourierPage_div_30_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_30_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r33.startRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041D\u0430\u0447\u0430\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourierPage_div_30_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_30_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r35.stopRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourierPage_div_30_button_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CourierPage_div_30_button_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0420\u0443\u0447\u043D\u043E\u0439 \u0440\u0435\u0436\u0438\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { "manual_btn": a0 }; };
function CourierPage_div_30_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_30_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r39.manualRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CourierPage_div_30_button_3_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CourierPage_div_30_button_3_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c3, ctx_r32.state$.manual_route));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r32.state$.manual_route);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r32.state$.manual_route);
} }
function CourierPage_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CourierPage_div_30_button_1_Template, 2, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CourierPage_div_30_button_2_Template, 2, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CourierPage_div_30_button_3_Template, 3, 5, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.btn_go && !ctx_r4.state$.manual_route && ctx_r4.auth.routingModeAuto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.btn_go && !ctx_r4.state$.manual_route);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.auth.getMode() == "auto" || ctx_r4.auth.getMode() == "auto_wo");
} }
function CourierPage_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u041F\u0440\u043E\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u0448\u0442\u0440\u0438\u0445\u043A\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CourierPage_div_31_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.scanInputChange(); })("ngModelChange", function CourierPage_div_31_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r44.scanInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r5.scanInput);
} }
function CourierPage_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { "m_wrp": a0 }; };
const _c5 = function () { return []; };
class CourierPage {
    constructor(courier, router, state$, auth, bs, vbr, settings, sys, data, popoverController, map) {
        this.courier = courier;
        this.router = router;
        this.state$ = state$;
        this.auth = auth;
        this.bs = bs;
        this.vbr = vbr;
        this.settings = settings;
        this.sys = sys;
        this.data = data;
        this.popoverController = popoverController;
        this.map = map;
        this.orders = null;
        this.statuses = null;
        this.selectedTab = 1;
        this.ordersInit = false;
        this.loader = false;
        this.local_stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.localcheck = false;
        this.g_done = 0;
        this.g_process = 0;
        this.g_fail = 0;
        this.lvl_ind = { width: '0%' };
        this.btn_go = false;
        this.notification = null;
        this.dragStarted = false;
        this.subBtnCond = true;
        this.scanView = false;
        this.scan_process = false;
        this.find_order = false;
        this.isWorkEnded = false;
        this.searchString = '';
        this.slicer = this.howSlice();
        let self = this;
        this.initContent();
        if (this.state$.position.getValue() != null) {
            this.startRoute(false);
        }
        this.state$.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.local_stop$)).subscribe((state) => {
            const a = state;
            if (state == 'orders_init') {
                self.initContent();
            }
        });
        this.initConditions();
        this.ord = this.data.orders.asObservable();
        this.prepareOrdersList();
    }
    initConditions() {
        let app_mode = this.auth.getMode();
        switch (app_mode) {
            case 'fullAuto':
                if (!this.state$.confirmed)
                    this.subBtnCond = true;
                ;
                break;
            case 'auto':
                this.subBtnCond = false;
                break;
            case 'fullHand':
                if (!this.state$.confirmed)
                    this.subBtnCond = true;
                break;
            case 'hand':
                this.subBtnCond = false;
                break;
        }
    }
    ngAfterViewChecked() {
        this.Drop_L.autoScrollDisabled = false;
        this.DragItems.changes.subscribe((r) => {
            this.DragItems.forEach(DragItem => {
                DragItem.dragStartDelay = {
                    touch: 500,
                    mouse: 100
                };
            });
        });
    }
    ngOnInit() {
        this.settings.checkout = !!(this.settings.rules.storeCheckMode - 0);
        if (!this.settings.checkout) {
            this.auth.checkState = 'checkedOut';
        }
        else {
            this.auth.checkState = 'checked' + localStorage.check;
        }
        if (this.settings.rules.appMode == 'hand') {
            this.state$.manual_route = true;
        }
        this.data.orders.subscribe((orders) => {
            this.courier.count_orders(orders);
        });
    }
    scanInputStart() {
        let self = this;
        this.scanView = !this.scanView;
        this.loader = true;
        if (this.auth.getScanMode() == 'scan') {
            self.courier.findOrder(this.scanInput).subscribe((res) => {
                self.scanInput = null;
                if (res.success == 'true') {
                    self.courier.sumbitOrder(res.order_id).subscribe((re_s) => {
                        console.log('courier_page sbo resp', re_s);
                        if (re_s) {
                            self.submitOrder();
                        }
                        else {
                            self.scanView = false;
                        }
                        self.loader = false;
                    });
                }
                else {
                    self.auth.showError(2);
                    self.loader = false;
                    self.scanView = false;
                }
                self.state$.confirmed = true;
                self.orders.forEach(order => {
                    if (order.confirm == '0') {
                        self.state$.confirmed = false;
                    }
                });
            });
        }
        else {
            self.loader = false;
        }
        this.scan_process = false;
    }
    scanInputChange() {
        console.log('inputData', this.scanInput);
        let self = this;
        if (this.scan_process)
            return false;
        this.scan_process = true;
        if (this.find_order) {
            setTimeout(function () {
                self.scanSearch();
            }, 1500);
        }
        else {
            setTimeout(function () {
                self.scanInputStart();
            }, 1500);
        }
    }
    submitOrder() {
        var self = this;
        console.log('SUBMIT_ORDER_CALL');
        if (this.auth.getScanMode() == 'scan') {
            this.scanView = !this.scanView;
            setTimeout(function () {
                self.sInput.nativeElement.focus();
            }, 500);
            return false;
        }
        this.bs.scan().then((data) => {
            console.log('SCAN_RETURN_DATA', data);
            if (data.text != "") {
                self.loader = true;
                self.courier.findOrder(data.text).subscribe((res) => {
                    if (res.success == 'true') {
                        self.courier.sumbitOrder(res.order_id).subscribe((re_s) => {
                            if (re_s) {
                                self.submitOrder();
                            }
                            self.loader = false;
                        });
                    }
                    else {
                        self.auth.showError(2);
                        self.loader = false;
                    }
                    self.state$.confirmed = true;
                    self.orders.forEach(order => {
                        if (order.confirm == '0') {
                            self.state$.confirmed = false;
                        }
                    });
                });
            }
            else {
                self.loader = false;
            }
        });
    }
    ordersListChanged(orders) {
        this.orders = orders;
        let way = new Array();
        orders.forEach(order => {
            if (Number(order.status_id) == 1) {
                way.push(order.id);
            }
        });
        this.state$.old_way = way;
    }
    ngOnDestroy() {
        this.local_stop$.next();
        this.state$.orders_page_check = false;
    }
    manualRoute() {
        if (this.state$.manual_route) {
            this.courier.changeRouteMode('auto');
        }
        else {
            this.courier.changeRouteMode('fullHand');
        }
        this.vbr.vibrate(300);
    }
    initContent() {
        var self = this;
        this.state$.orders.subscribe(() => {
            this.orders = this.state$.orders_data;
            console.log('sys::initСontent orders', this.orders);
            this.statuses = [{ "id": 4, "status": "Не доставлено" }, { "id": 5, "status": "Доставлено" }, { "id": 6, "status": "Частично доставлено" }];
            this.ordersInit = true;
            self.count_orders();
        });
    }
    getStatus(order) {
        return this.courier.getStatus(order);
    }
    selectOrder(id) {
        this.router.navigate(['/order', id]);
    }
    tabSelect(tab) {
        this.selectedTab = tab;
    }
    customTrackBy(index, obj) {
        return index;
    }
    getCondition(status) {
        switch (this.selectedTab) {
            case 1:
                if (status == 1)
                    return true;
                break;
            case 2:
                if (status == 5 || status == 6)
                    return true;
                break;
            case 3:
                if (status == 4)
                    return true;
                break;
        }
        return false;
    }
    count_orders(orders = this.courier.ordersInfo) {
        let g_done = 0;
        let g_process = 0;
        let g_fail = 0;
        for (let i = 0; i < orders.length; i++) {
            switch (String(orders[i].status_id)) {
                case '4':
                    g_fail++;
                    break;
                case '5':
                    g_done++;
                    break;
                case '6':
                    g_done++;
                    break;
                case '1':
                    g_process++;
                    break;
            }
        }
        this.g_done = g_done;
        this.g_process = g_process;
        this.g_fail = g_fail;
    }
    startRoute(start = true, stop = false) {
        let self = this;
        this.auth.checkAuth().subscribe((data) => {
            if (data.success == 'true') {
                self.sendStartRoute(data.sync_id, start, stop);
            }
        });
    }
    stopRoute() {
        this.startRoute(false, true);
    }
    sendStartRoute(cid, start, stop) {
        const url = "geo/route_start.php";
        let data = {
            'cid': cid,
            'lt': this.state$.position.getValue().lt,
            'lg': this.state$.position.getValue().lg
        };
        if (start) {
            data['start'] = '1';
        }
        if (stop) {
            data['stop'] = '1';
        }
        let self = this;
        this.auth.sendPost(url, data).subscribe((data) => {
            if (data.success == true) {
                self.btn_go = true;
                if (data.result == 'stop') {
                    self.btn_go = false;
                }
            }
        });
    }
    scanSearch() {
        let self = this;
        this.scanView = !this.scanView;
        this.loader = true;
        if (this.auth.getScanMode() == 'scan') {
            self.courier.findOrder(this.scanInput).subscribe((res) => {
                self.scanInput = null;
                if (res.success == 'true') {
                    self.selectOrder(res.order_id);
                }
                else {
                    self.auth.showError(2);
                }
                self.loader = false;
                self.scanView = false;
            });
        }
        else {
            self.loader = false;
        }
        this.scan_process = false;
        this.find_order = false;
    }
    findOrder() {
        let self = this;
        if (this.auth.getScanMode() == 'scan') {
            this.scanView = !this.scanView;
            this.find_order = true;
            setTimeout(function () {
                self.sInput.nativeElement.focus();
            }, 500);
            return false;
        }
        this.bs.scan().then((data) => {
            self.courier.findOrder(data.text).subscribe((res) => {
                if (res.success == 'true') {
                    self.selectOrder(res.order_id);
                }
                else {
                    self.auth.showError(2);
                }
            });
        });
    }
    //Завершение рабочего дня курьера
    endWork() {
        this.courier.endWork().subscribe((data) => {
            if (data.success) {
                this.isWorkEnded = true;
                this.sys.presentToast('Рабочий день завершен', 'success');
            }
        }, error => {
            this.sys.presentToast('Ошибка: ' + error.message, 'danger');
        });
    }
    doRefresh(event) {
        this.data.getApiData().add(event.target.complete());
    }
    segmentChanged(event) {
        let ids = [Number(event.target.value)];
        if (event.target.value == '4') {
            ids.push(5);
        }
        this.prepareOrdersList(ids);
    }
    onSearchChange(event) {
    }
    prepareOrdersList(ids = [1]) {
        this.orders_c = this.ord.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(orders => orders && orders.filter(order => ids.includes(Number(order.status_id)))
            .filter(order => order.client_address.toLowerCase().includes(this.searchString.toLowerCase()) || order.client_fio.toLowerCase().includes(this.searchString.toLowerCase()) ||
            order.client_id.toLowerCase().includes(this.searchString.toLowerCase()))
            .slice(this.slicer)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((orders) => { orders.forEach((order) => { order.show = false; }); this.orders = orders; return orders; }));
    }
    howSlice() {
        return (this.settings.rules.typeRoute === 'standart' ? 0 : 1);
    }
    popoverHelp(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"],
                event: ev,
                translucent: true,
                cssClass: 'help'
            });
            return popover;
        });
    }
    showHelp(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let popover = yield this.popoverHelp(ev);
            popover.present();
        });
    }
    showRoute(order) {
        this.map.showRoute(order);
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.orders, event.previousIndex, event.currentIndex);
        this.data.orders.next(this.orders);
        console.log('sys:: массив заказов после перетаскивания: ', this.orders);
    }
    popoverNote(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"],
                event: ev,
                translucent: true,
                cssClass: 'help'
            });
            return popover;
        });
    }
    note(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let popover = yield this.popoverNote(ev);
            popover.present();
        });
    }
}
CourierPage.ɵfac = function CourierPage_Factory(t) { return new (t || CourierPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_courier_service__WEBPACK_IMPORTED_MODULE_13__["CourierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_15__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__["Vibration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_14__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_16__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sys_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_10__["MapService"])); };
CourierPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CourierPage, selectors: [["app-courier"]], viewQuery: function CourierPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonReorderGroup"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.reorderGroup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.Drop_L = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.DragItems = _t);
    } }, decls: 33, vars: 12, consts: [[1, "toolbar"], ["slot", "start"], [3, "click"], ["name", "search", "slot", "start"], [4, "ngIf"], ["size", "small", "color", "dark"], ["slot", "primary"], [3, "click", 4, "ngIf"], ["slot", "icon-only", "name", "help-circle-outline"], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "pullingText", "\u041F\u043E\u0442\u044F\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C", "refreshingSpinner", "bubbles", "refreshingText", "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435..."], [1, "c-wrp", 3, "ngClass"], ["value", "1", 2, "height", "45px", 3, "ionChange"], ["value", "1"], ["value", "4"], ["value", "6"], ["class", "c-body", 4, "ngIf"], ["class", "start-route", 4, "ngIf"], ["class", "scanWindow", 4, "ngIf"], ["class", "shirm", 4, "ngIf"], ["name", "box"], ["name", "check-square"], [1, "c-body"], ["placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u043C", "inputmode", "text", "animated", "", 3, "debounce", "ngModel", "ionChange", "ngModelChange"], ["cdkDropList", "", "itemSize", "50", 2, "height", "100%", "width", "100%", "min-height", "50vh", 3, "cdkDropListDropped"], ["cdkDrag", "", 3, "ngClass", "cdkDragStartDelay", "click", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "ngClass", "cdkDragStartDelay", "click"], [1, "title"], [1, "client-id"], [1, "addr"], [1, "name"], ["class", "actions", 4, "ngIf"], ["name", "ellipsis-vertical", "slot", "start"], [1, "actions-button", 3, "click"], ["src", "../../../assets/actions-arrows.svg", 3, "ngClass"], [1, "actions"], ["fill", "solid", "size", "default", 3, "click"], ["slot", "start", "src", "../../../assets/mdi-light_note-plus.svg"], ["slot", "start", "name", "location-outline"], ["fill", "solid", "size", "default"], ["slot", "start", "name", "call-outline"], [1, "start-route"], ["class", "satrt-r-btn", 3, "click", 4, "ngIf"], ["class", "satrt-r-btn sr-stop", 3, "click", 4, "ngIf"], ["class", "satrt-r-btn find-o-btn", 3, "ngClass", "click", 4, "ngIf"], [1, "satrt-r-btn", 3, "click"], [1, "satrt-r-btn", "sr-stop", 3, "click"], [1, "satrt-r-btn", "find-o-btn", 3, "ngClass", "click"], [1, "scanWindow"], [1, "sw-wrp"], [1, "sw-title"], ["autofocus", "", 1, "ionInp", 3, "ngModel", "change", "ngModelChange"], ["sInput", ""], [1, "shirm"], ["name", "lines-small"]], template: function CourierPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_Template_ion_button_click_3_listener() { return ctx.findOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i-feather", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CourierPage_ion_button_5_Template, 3, 0, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CourierPage_ion_button_11_Template, 2, 0, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CourierPage_ion_button_12_Template, 2, 0, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_Template_ion_button_click_13_listener($event) { return ctx.showHelp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-refresher", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionRefresh", function CourierPage_Template_ion_refresher_ionRefresh_16_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ion-refresher-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-segment", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function CourierPage_Template_ion_segment_ionChange_19_listener($event) { return ctx.segmentChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-segment-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-segment-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-segment-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u041D\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, CourierPage_div_29_Template, 5, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CourierPage_div_30_Template, 4, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CourierPage_div_31_Template, 6, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CourierPage_div_32_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auth.getGuessMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.state$.filial);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.subBtnCond);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.courier.sortOrders == null ? null : ctx.courier.sortOrders.g_process) == 0 && !ctx.isWorkEnded);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c4, ctx.auth.getMode() == "fullHand" || ctx.auth.getMode() == "hand"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ordersInit && !ctx.auth.getGuessMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ordersInit && ctx.state$.orders_data != _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c5) && ctx.state$.orders_data !== null && ctx.auth.checkState == "checkedOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scanView);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], angular_feather__WEBPACK_IMPORTED_MODULE_18__["FeatherComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkFixedSizeVirtualScroll"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["DefaultValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]], styles: ["ion-chip[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.headbar-right-buttons[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  z-index: 999999;\n  top: 0;\n  display: flex;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --min-height: 30px;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nion-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nion-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\nion-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.fether[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\nion-segment[_ngcontent-%COMP%] {\n  height: 45 px;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --background: #e5f0f4;\n  --border-style: solid;\n  --border-width: 0.5px;\n  --color: #585454;\n  --color-checked: #2b637e;\n  --indicator-height: 0;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  --box-shadow: 0 0 01px black;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --border-color: #d6cfcf;\n  --border-width: 1px;\n  --border-radius: 2px;\n  --padding-start: 0;\n  margin: 0 2px 5px 2px;\n}\n\nion-item[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%] {\n  margin: 8px 2px 5px 2px;\n}\n\nion-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 14px;\n}\n\nion-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%] {\n  color: #2b637e;\n}\n\nion-item[_ngcontent-%COMP%]   .addr[_ngcontent-%COMP%] {\n  color: #585454;\n  font-size: 13px;\n  white-space: pre-wrap;\n  padding: 5px 0;\n}\n\nion-item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #333333;\n  font-size: 13px;\n  font-weight: bold;\n}\n\nion-item[_ngcontent-%COMP%]   .actions-button[_ngcontent-%COMP%] {\n  background: #4ba7c5;\n  box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.05);\n  border-radius: 10px 0px 2px;\n  position: absolute;\n  right: 0;\n  bottom: 0%;\n  width: 25px;\n  height: 35px;\n  text-align: center;\n}\n\nion-item[_ngcontent-%COMP%]   .actions-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin: 50% 0;\n  width: 12px;\n  height: 12px;\n}\n\nion-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n\nion-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #2b637e;\n  --border-radius: 4px;\n  font-size: 12px;\n  text-transform: none;\n  --padding-bottom: 10px;\n  --padding-top: 10px;\n  --padding-start: 7px;\n  --padding-end: 7px;\n}\n\nion-item[_ngcontent-%COMP%]:nth-child(odd) {\n  --background: #f6fdff;\n}\n\nion-reorder[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nion-item.overdue[_ngcontent-%COMP%] {\n  --border-color: red;\n  --inner-border-width: 0;\n}\n\nion-item.overdue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.turned[_ngcontent-%COMP%] {\n  transform: rotate(0.5turn);\n}\n\n.c-wrp[_ngcontent-%COMP%], .c-body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cmllci9jb3VyaWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsZUFBZTtFQUNmLE1BQU07RUFDTixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBYTtBQUVmOztBQUNBO0VBQ0UsZUFBZTtBQUVqQjs7QUFBQTtFQUNFLGVBQWU7QUFHakI7O0FBSkE7RUFHSSxZQUFZO0FBS2hCOztBQVJBO0VBS00sZUFBZTtBQU9yQjs7QUFIQTtFQUNFLFlBQVk7QUFNZDs7QUFKQTtFQUNFLGFBQWE7QUFPZjs7QUFSQTtFQU1JLHFCQUFhO0VBQ2IscUJBQWU7RUFDZixxQkFBZTtFQUNmLGdCQUFRO0VBQ1Isd0JBQWdCO0VBQ2hCLHFCQUFtQjtBQU12Qjs7QUFqQkE7RUFJTSxvQkFBb0I7QUFpQjFCOztBQVBBO0VBQ0UsNEJBQWE7QUFVZjs7QUFSQTtFQUNFLHVCQUFlO0VBQ2YsbUJBQWU7RUFDZixvQkFBZ0I7RUFDaEIsa0JBQWdCO0VBQ2hCLHFCQUFxQjtBQVd2Qjs7QUFoQkE7RUFPSSx1QkFBdUI7QUFhM0I7O0FBcEJBO0VBVUksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsZUFBZTtBQWNuQjs7QUEzQkE7RUFlTSxjQUFjO0FBZ0JwQjs7QUEvQkE7RUFtQkksY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0FBYztBQWdCbEI7O0FBdENBO0VBeUJJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBaUJyQjs7QUE1Q0E7RUE4QkksbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3QywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFrQnRCOztBQXhEQTtFQXdDTSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFvQmxCOztBQTlEQTtFQThDSSxrQkFBa0I7RUFDbEIsU0FBUztBQW9CYjs7QUFuRUE7RUFpRE0scUJBQWE7RUFDYixvQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixzQkFBaUI7RUFDakIsbUJBQWM7RUFDZCxvQkFBZ0I7RUFDaEIsa0JBQWM7QUFzQnBCOztBQWxCQTtFQUNFLHFCQUFhO0FBcUJmOztBQW5CQTtFQUNFLFNBQVM7QUFzQlg7O0FBcEJBO0VBQ0UsbUJBQWU7RUFDZix1QkFBcUI7QUF1QnZCOztBQXpCQTtFQUtNLFVBQVU7QUF3QmhCOztBQXBCQTtFQUNFLDBCQUEwQjtBQXVCNUI7O0FBckJBO0VBQ0UsWUFBWTtBQXdCZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXJpZXIvY291cmllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2hpcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5oZWFkYmFyLXJpZ2h0LWJ1dHRvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi10b29sYmFyIHtcbiAgLS1taW4taGVpZ2h0OiAzMHB4O1xufVxuXG4udG9vbGJhciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1oZWFkZXIgKiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gIH1cbn1cbi5mZXRoZXIge1xuICBoZWlnaHQ6IDE2cHg7XG59XG5pb24tc2VnbWVudCB7XG4gIGhlaWdodDogNDUgcHg7XG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgICAtLWJhY2tncm91bmQ6ICNlNWYwZjQ7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwLjVweDtcbiAgICAtLWNvbG9yOiAjNTg1NDU0O1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzJiNjM3ZTtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDA7XG4gIH1cbn1cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJveC1zaGFkb3c6IDAgMCAwMXB4IGJsYWNrO1xufVxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2Q2Y2ZjZjtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luOiAwIDJweCA1cHggMnB4O1xuICBpb24tcmVvcmRlciB7XG4gICAgbWFyZ2luOiA4cHggMnB4IDVweCAycHg7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLmNsaWVudC1pZCB7XG4gICAgICBjb2xvcjogIzJiNjM3ZTtcbiAgICB9XG4gIH1cbiAgLmFkZHIge1xuICAgIGNvbG9yOiAjNTg1NDU0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cbiAgLm5hbWUge1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYWN0aW9ucy1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICM0YmE3YzU7XG4gICAgYm94LXNoYWRvdzogLTFweCAtMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwJTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbjogNTAlIDA7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICB9XG4gIH1cbiAgLmFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6ICMyYjYzN2U7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDdweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDdweDtcbiAgICB9XG4gIH1cbn1cbmlvbi1pdGVtOm50aC1jaGlsZChvZGQpIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjZmZGZmO1xufVxuaW9uLXJlb3JkZXIge1xuICBtYXJnaW46IDA7XG59XG5pb24taXRlbS5vdmVyZHVlIHtcbiAgLS1ib3JkZXItY29sb3I6IHJlZDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gIC50aXRsZSB7XG4gICAgLmNsaWVudC1pZCB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxufVxuLnR1cm5lZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDAuNXR1cm4pO1xufVxuLmMtd3JwLCAuYy1ib2R5e1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                // ...
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: '125px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: '80px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CourierPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-courier',
                templateUrl: './courier.page.html',
                styleUrls: ['./courier.page.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                        // ...
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '125px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '80px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                        ]),
                    ])
                ]
            }]
    }], function () { return [{ type: _services_courier_service__WEBPACK_IMPORTED_MODULE_13__["CourierService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_state_service__WEBPACK_IMPORTED_MODULE_15__["StateService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] }, { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] }, { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__["Vibration"] }, { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_14__["SettingsService"] }, { type: _services_sys_service__WEBPACK_IMPORTED_MODULE_16__["SysService"] }, { type: _services_sys_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] }, { type: src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_10__["MapService"] }]; }, { reorderGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonReorderGroup"]]
        }], sInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['sInput']
        }], Drop_L: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], { static: false }]
        }], DragItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-courier-courier-module-es2015.js.map