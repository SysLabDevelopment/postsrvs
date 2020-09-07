(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-order-module"], {
    /***/
    "./src/app/pages/order/order.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/order/order.module.ts ***!
      \*********************************************/

    /*! exports provided: OrderPageModule */

    /***/
    function srcAppPagesOrderOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPageModule", function () {
        return OrderPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _order_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order.page */
      "./src/app/pages/order/order.page.ts");
      /* harmony import */


      var _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../icons/icons.module */
      "./src/app/icons/icons.module.ts");

      var routes = [{
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_5__["OrderPage"]
      }];

      var OrderPageModule = function OrderPageModule() {
        _classCallCheck(this, OrderPageModule);
      };

      OrderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderPageModule
      });
      OrderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderPageModule_Factory(t) {
          return new (t || OrderPageModule)();
        },
        imports: [[_icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderPageModule, {
          declarations: [_order_page__WEBPACK_IMPORTED_MODULE_5__["OrderPage"]],
          imports: [_icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_order_page__WEBPACK_IMPORTED_MODULE_5__["OrderPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/order/order.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/order/order.page.ts ***!
      \*******************************************/

    /*! exports provided: OrderPage */

    /***/
    function srcAppPagesOrderOrderPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPage", function () {
        return OrderPage;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/fesm2015/animations.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/ngx/index.js");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/ngx/index.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
      /* harmony import */


      var ionic_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ionic-cache */
      "./node_modules/ionic-cache/dist/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_courier_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/courier.service */
      "./src/app/services/courier.service.ts");
      /* harmony import */


      var _services_settings_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/settings.service */
      "./src/app/services/settings.service.ts");
      /* harmony import */


      var _services_state_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/state.service */
      "./src/app/services/state.service.ts");
      /* harmony import */


      var _services_sys_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/sys.service */
      "./src/app/services/sys.service.ts");
      /* harmony import */


      var _services_sys_map_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../services/sys/map.service */
      "./src/app/services/sys/map.service.ts");
      /* harmony import */


      var _services_sys_order_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../services/sys/order.service */
      "./src/app/services/sys/order.service.ts");
      /* harmony import */


      var _services_sys_data_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./../../services/sys/data.service */
      "./src/app/services/sys/data.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! angular-feather */
      "./node_modules/angular-feather/fesm2015/angular-feather.js");

      function OrderPage_ion_title_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.order.client_id);
        }
      }

      function OrderPage_ion_content_5_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.order.rur.toLocaleString("ru"), " \u0440. ");
        }
      }

      function OrderPage_ion_content_5_ion_item_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.order.Cname, " ");
        }
      }

      function OrderPage_ion_content_5_ion_item_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0410\u0434\u0440\u0435\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.order.Cadress, " ");
        }
      }

      function OrderPage_ion_content_5_ion_item_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.order.Cphone, " ");
        }
      }

      function OrderPage_ion_content_5_ion_item_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.order.Cphone_s, " ");
        }
      }

      function OrderPage_ion_content_5_div_91_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_91_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r17.selectStatus(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u041D\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_91_Template_ion_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r19.selectStatus(6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0427\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_91_Template_ion_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r20.selectStatus(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "st_fail": a0,
          "st_done": a1
        };
      };

      function OrderPage_ion_content_5_div_92_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_13_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var good_r23 = ctx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r24.changeQuant(good_r23.Code, "minus");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i-feather", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_13_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var good_r23 = ctx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r26.changeQuant(good_r23.Code, "plus");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i-feather", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var good_r23 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r21.g_quants[good_r23.Code]["amount"] == 0, ctx_r21.order.status_id == 6 && ctx_r21.g_quants[good_r23.Code]["amount"] > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](good_r23.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r21.g_quants[good_r23.Code]["amount"], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", good_r23.Price, "\u0440.");
        }
      }

      function OrderPage_ion_content_5_div_92_ion_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_ion_button_18_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r27.scanReturned();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u0437\u0430\u043A\u0430\u0437\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u041A\u043E\u043B-\u0432\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0426\u0435\u043D\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OrderPage_ion_content_5_div_92_div_13_Template, 12, 7, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0418\u0442\u043E\u0433\u043E: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, OrderPage_ion_content_5_div_92_ion_button_18_Template, 2, 0, "ion-button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.goods);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r8.order.rur, "\u0440.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.selectedStatus == 6 || ctx_r8.order.status_id == 6);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "status_active": a0
        };
      };

      function OrderPage_ion_content_5_div_94_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_94_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);

            var reason_r30 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r31.selectReason(reason_r30.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reason_r30 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r29.selectedReason == reason_r30.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", reason_r30.reason, " ");
        }
      }

      function OrderPage_ion_content_5_div_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_94_div_3_Template, 2, 4, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.reasons);
        }
      }

      function OrderPage_ion_content_5_div_95_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 67);
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r33.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function OrderPage_ion_content_5_div_95_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_95_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r35.drawBtn(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "draw_btn_active": a0
        };
      };

      function OrderPage_ion_content_5_div_95_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_95_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r37.drawBtn(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0414\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_95_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r39.drawBtn(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u041D\u0435\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OrderPage_ion_content_5_div_95_img_9_Template, 1, 1, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OrderPage_ion_content_5_div_95_button_10_Template, 2, 0, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r10.drawNeedle));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, !ctx_r10.drawNeedle));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.imageToShow && ctx_r10.drawNeedle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.drawNeedle);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "payment_active": a0
        };
      };

      function OrderPage_ion_content_5_div_96_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041E\u043F\u043B\u0430\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_96_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r40.selectPayment("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_96_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r42.selectPayment("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u041A\u0430\u0440\u0442\u043E\u0439 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, ctx_r11.selectedPayment == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c3, ctx_r11.selectedPayment == 2));
        }
      }

      function OrderPage_ion_content_5_div_97_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_97_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email \u043A\u043B\u0438\u0435\u043D\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_97_div_1_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r47.email_input = $event;
          })("input", function OrderPage_ion_content_5_div_97_div_1_Template_input_input_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r49.emailChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_97_div_1_span_4_Template, 2, 0, "span", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r43.email_input);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r43.email_error);
        }
      }

      function OrderPage_ion_content_5_div_97_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043A\u043B\u0438\u0435\u043D\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_97_input_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_97_input_4_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r50.phone_input = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r45.phone_input);
        }
      }

      function OrderPage_ion_content_5_div_97_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderPage_ion_content_5_div_97_div_1_Template, 5, 2, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_97_div_3_Template, 2, 0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_97_input_4_Template, 1, 1, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_97_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r52.enterPhone();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041F\u0440\u043E\u0447\u0435\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.show_email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.showPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.showPhone);
        }
      }

      function OrderPage_ion_content_5_details_98_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "textarea", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_details_98_div_3_Template_textarea_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r56.commentText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r54.commentText);
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "st_fail": a0
        };
      };

      function OrderPage_ion_content_5_details_98_div_4_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var good_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c4, good_r59.kol_vo == 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](good_r59.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", good_r59.kol_vo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", good_r59.Price, "\u0440.");
        }
      }

      function OrderPage_ion_content_5_details_98_div_4_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OrderPage_ion_content_5_details_98_div_4_div_11_Template, 8, 6, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r55.goods);
        }
      }

      function OrderPage_ion_content_5_details_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_details_98_div_3_Template, 4, 1, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_details_98_div_4_Template, 12, 1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.selectedStatus == 5 || ctx_r13.selectedStatus == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.selectedStatus == 5);
        }
      }

      function OrderPage_ion_content_5_div_99_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "MM/DD/YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-datetime", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_99_Template_ion_datetime_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r60.new_plan_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("min", ctx_r14.today.toISOString());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r14.tomorrow.toISOString());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r14.new_plan_date);
        }
      }

      function OrderPage_ion_content_5_button_101_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_button_101_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c5 = function _c5(a0, a1) {
        return {
          "c_t_del": a0,
          "c_t_u_del": a1
        };
      };

      function OrderPage_ion_content_5_button_101_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_button_101_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r64.doneOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderPage_ion_content_5_button_101_span_1_Template, 2, 0, "span", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OrderPage_ion_content_5_button_101_span_2_Template, 2, 0, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c5, ctx_r15.selectedStatus == 5 || ctx_r15.selectedStatus == 6, ctx_r15.selectedStatus == 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.selectedStatus == 5 || ctx_r15.selectedStatus == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.selectedStatus == 4);
        }
      }

      function OrderPage_ion_content_5_div_102_ion_list_3_ion_item_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-radio", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var phone_r70 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", phone_r70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](phone_r70);
        }
      }

      function OrderPage_ion_content_5_div_102_ion_list_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-radio-group", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_102_ion_list_3_Template_ion_radio_group_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r71.selectedPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_div_102_ion_list_3_ion_item_5_Template, 4, 2, "ion-item", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r66.selectedPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r66.orderPhones);
        }
      }

      function OrderPage_ion_content_5_div_102_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_102_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r73.phoneClick("phone");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_102_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_102_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r75.phoneClick("operator");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 ip-\u0448\u043B\u044E\u0437 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_102_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i-feather", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_102_Template_i_feather_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r77.phoneClick("init");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_102_ion_list_3_Template, 6, 2, "ion-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_102_button_4_Template, 2, 0, "button", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_div_102_button_5_Template, 2, 0, "button", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.orderPhones.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.settings.rules.phoneMode == "robotPhone" || ctx_r16.settings.rules.phoneMode == "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.settings.rules.phoneMode == "robotPhone" || ctx_r16.settings.rules.phoneMode == "robot");
        }
      }

      var _c6 = function _c6(a0, a1, a2, a3, a4) {
        return {
          "status_done": a0,
          "status_wait": a1,
          "status_fail": a2,
          "status_none": a3,
          "cl-status-voice": a4
        };
      };

      var _c7 = function _c7(a0) {
        return {
          turned: a0
        };
      };

      function OrderPage_ion_content_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, OrderPage_ion_content_5_div_53_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E / \u0412\u0435\u0441 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r79.phoneClick("init");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "ion-item", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " \u0421\u0442\u0430\u0442\u0443\u0441: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "ion-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, OrderPage_ion_content_5_ion_item_76_Template, 5, 1, "ion-item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, OrderPage_ion_content_5_ion_item_77_Template, 5, 1, "ion-item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, OrderPage_ion_content_5_ion_item_78_Template, 5, 1, "ion-item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, OrderPage_ion_content_5_ion_item_79_Template, 5, 1, "ion-item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_div_click_80_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r81.tapBlock();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "ion-item", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "ion-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_Template_ion_input_ngModelChange_83_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r82.note = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "ion-button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_84_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r83.saveNote();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "ion-button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_87_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r84.intentStart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u0430\u0432\u0438\u0433\u0430\u0442\u043E\u0440\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "ion-button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r85.showRoute(ctx_r85.order);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, OrderPage_ion_content_5_div_91_Template, 10, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, OrderPage_ion_content_5_div_92_Template, 19, 3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, OrderPage_ion_content_5_div_94_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](95, OrderPage_ion_content_5_div_95_Template, 11, 8, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, OrderPage_ion_content_5_div_96_Template, 8, 6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, OrderPage_ion_content_5_div_97_Template, 7, 3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, OrderPage_ion_content_5_details_98_Template, 5, 2, "details", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](99, OrderPage_ion_content_5_div_99_Template, 5, 3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](101, OrderPage_ion_content_5_button_101_Template, 3, 6, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](102, OrderPage_ion_content_5_div_102_Template, 6, 3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.order.company_address);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.order.client_address);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.order.client_id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 33, ctx_r1.order.datetime_to, "d.MM.yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](31, 36, ctx_r1.order.datetime_from, "H:mm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 39, ctx_r1.order.datetime_to, "H:mm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.order.client_fio, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.order.client_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](42, _c6, ctx_r1.order.client_status_id == 1, ctx_r1.order.client_status_id == 2, ctx_r1.order.client_status_id == 3, ctx_r1.order.client_status_id == 8, ctx_r1.order.client_status_id == 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.order.client_status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.order.rur);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](48, _c7, ctx_r1.openCompany == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.note);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.hide_status || ctx_r1.status_id == 5 || ctx_r1.status_id == 6));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedStatus == 6 || ctx_r1.order.status_id == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedStatus == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedStatus == 5 || ctx_r1.selectedStatus == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedStatus == 5 || ctx_r1.selectedStatus == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.pay_access && (ctx_r1.selectedStatus == 5 || ctx_r1.selectedStatus == 6));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedStatus && ctx_r1.selectedStatus !== 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedReason == 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.callWindow);
        }
      }

      var OrderPage = /*#__PURE__*/function () {
        function OrderPage(router, route, courier, state$, auth, http, iab, CL, sys, settings, sysMap, data, storage, cache, network, orderService, bs, device) {
          _classCallCheck(this, OrderPage);

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
          this.statuses = [{
            id: 4,
            status: "Не доставлено"
          }, {
            id: 5,
            status: "Доставлено"
          }, {
            id: 6,
            status: "Частично доставлено"
          }];
          this.reasons = [{
            id: 1,
            reason: "Не удалось Дозвониться!"
          }, {
            id: 2,
            reason: "Отказ, при созвоне с клиентом"
          }, {
            id: 3,
            reason: "Отказ от доставки без объяснения причины"
          }, {
            id: 4,
            reason: "Ошибка оформления ИМ"
          }, {
            id: 5,
            reason: "Получатель передумал"
          }, {
            id: 6,
            reason: "Товар не подошел/не понравился"
          }, {
            id: 7,
            reason: "Финансовые трудности у получателя"
          }, {
            id: 8,
            reason: "Перенос даты доставки получателем."
          }, {
            id: 10,
            reason: "Не успел"
          }, {
            id: 11,
            reason: "Переехали/нев.Адрес"
          }];
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

        _createClass(OrderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.courier.initStatuses();
            this.tomorrow.setDate(this.tomorrow.getDate() + 1);
            this.note = localStorage.getItem(this.orderId);
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var img = localStorage.getItem("drawImg");

            if (img) {
              this.imageToShow = "data:image/jpg;base64," + img;
            }
          }
        }, {
          key: "sendPost",
          value: function sendPost(url, data) {
            data = JSON.stringify(data);
            return this.http.post(url, data);
          }
        }, {
          key: "drawBtn",
          value: function drawBtn(need) {
            this.drawNeedle = need;

            if (need) {
              this.router.navigate(["draw"]);
            } else {
              localStorage.removeItem("drawImg");
            }
          }
        }, {
          key: "parsePhone",
          value: function parsePhone(phone) {
            var phones = [];
            phone = phone.replace(/\D+/g, "");

            while (phone.length > 7) {
              phone = this.normalizePhoneNumber(phone);
              phones.push(phone.slice("", 11));
              phone = phone.slice(11);
            }

            return phones;
          }
        }, {
          key: "normalizePhoneNumber",
          value: function normalizePhoneNumber(phone) {
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
        }, {
          key: "phoneClick",
          value: function phoneClick(action) {
            this.orderPhones = this.parsePhone(this.phone);
            var courierPhone = this.parsePhone(this.order.courier_phone)[0];

            if (this.orderPhones.length == 1) {
              this.selectedPhone = this.orderPhones[0];
            }

            switch (action) {
              case "init":
                this.callWindow = !this.callWindow;
                break;

              case "phone":
                this.CL.callNumber(this.selectedPhone, false).then(function () {});
                this.callWindow = false;
                break;

              case "operator":
                if (this.network.type == 'none') {
                  this.phoneClick('phone');
                  return false;
                }

                if (this.selectedPhone && courierPhone) {
                  var url = "orders";
                  var data = {
                    action: "send_phone",
                    client_number: this.selectedPhone,
                    cur_number: courierPhone
                  };
                  this.auth.sendPost(url, data).subscribe(function (resp) {
                    console.log("call_subs", resp);
                  });
                  this.auth.showError(9);
                  this.callWindow = false;
                }

                break;
            }
          }
        }, {
          key: "initOrder",
          value: function initOrder() {
            var _this = this;

            this.storage.get('orders').then(function (orders) {
              console.log('Список заказов из стоража', orders);
            });
            this.storage.get('orders').then(function (orders) {
              _this.order = orders === null || orders === void 0 ? void 0 : orders.filter(function (order) {
                return order.id.toString() == _this.orderId;
              })[0];
              _this.goods = _this.order.goods;
              _this.address = _this.order.client_address;
              _this.timeFrom = _this.order.datetime_from;
              _this.timeTo = _this.order.datetime_to;
              _this.phone = _this.order.client_phone;
              _this.status = _this.order.status_text;
              _this.status_id = Number(_this.order.status_id);
              _this.client_status = _this.order.client_status;
              _this.client_status_dt = _this.order.client_status_dt;
              _this.vlog = _this.order.vlog;
              _this.poruch = _this.order.poruch;
              _this.mass = _this.order.mass, _this.amount = _this.order.amount;
              _this.podrazd = _this.order.Podrazd;
              _this.coords = [_this.order.lt, _this.order.lg];

              _this.setQuants();

              _this.ifPaid();

              _this.getBalnce();

              _this.getPayData();

              _this.initClientInfo();
            });
          }
        }, {
          key: "getClientState",
          value: function getClientState() {
            var states = this.state$.client_states.getValue();
            var state_id = this.order.client_state;

            for (var i = 0; i < states.length; i++) {
              if (states[i].id == state_id) {
                return states[i].state;
              }
            }

            return "";
          } //Заполняет массив с ценой товаров и их количеством(для частички)

        }, {
          key: "setQuants",
          value: function setQuants() {
            var goods = this.order.goods;

            for (var i = 0; i < goods.length; i++) {
              var good = goods[i];
              var code = good.Code;
              var count = good.final_kol_vo ? good.final_kol_vo : good.kol_vo;
              var quant = {
                amount: good.kol_vo,
                price: good.Price
              };
              this.g_quants[code] = quant;
            }
          }
        }, {
          key: "changeQuant",
          value: function changeQuant(code, action) {
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
              } else {
                this.g_quants[code]["amount"] = n_q;
              }
            } else if (action == "minus") {
              var n_q = q - 1;

              if (n_q < 0) {
                return false;
              } else {
                this.g_quants[code]["amount"] = n_q;
              }
            } else if (action == 'delete') {
              this.g_quants[code]["amount"] = 0;
            }

            this.getSum();
          }
        }, {
          key: "parseOrder",
          value: function parseOrder(orders) {
            if (this.state$.orders.getValue() == null) {
              this.courier.getOrders();
            }

            for (var i = 0; i < orders.length; i++) {
              if (orders[i].id == this.orderId) {
                return orders[i];
              }
            }
          }
        }, {
          key: "navBack",
          value: function navBack() {
            localStorage.removeItem("drawImg");
            this.router.navigate(["/courier"]);
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            return this.courier.getStatus(this.order);
          }
        }, {
          key: "getBalnce",
          value: function getBalnce() {}
        }, {
          key: "changeStatus",
          value: function changeStatus() {
            if (!this.changeWindow) {
              this.changeWindow = true;
            }
          }
        }, {
          key: "close_window",
          value: function close_window() {
            this.changeWindow = false;
          }
        }, {
          key: "selectStatus",
          value: function selectStatus(id) {
            this.selectedStatus = id;

            if (id == 4 || id == 5) {
              this.setQuants();
              this.getSum();
            }

            if (id == 4) {
              this.drawNeedle = false;
            }
          }
        }, {
          key: "selectReason",
          value: function selectReason(id) {
            this.selectedReason = id;
          }
        }, {
          key: "sendPayCall",
          value: function sendPayCall() {
            var _this2 = this;

            var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.order;
            var newStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.selectedStatus;

            if (this.network.type == 'none') {
              //Если оффлайн
              this.cache.getItem('syncRequests').then(function (syncRequests) {
                order = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                  phone_input: _this2.phone_input
                }, {
                  email_input: _this2.email_input
                }), {
                  quants: _this2.g_quants
                }), order), {
                  selectedPayment: _this2.selectedPayment
                }), {
                  selectedReason: _this2.selectedReason
                }), {
                  new_plan_date: _this2.new_plan_date
                }), {
                  commentText: _this2.commentText
                }), {
                  check: _this2.checkBase64Image
                });
                syncRequests && syncRequests.push({
                  order: order,
                  newStatus: newStatus
                });

                _this2.cache.saveItem('syncRequests', syncRequests, 'delayedCalls').then(function () {
                  console.log("sys:: \u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043D\u0430 ".concat(newStatus, " \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 ").concat(order.client_id));

                  _this2.localModifyOrders(newStatus);

                  _this2.router.navigate(['courier']);
                });
              });
            } else {
              //Если онлайн
              this.localModifyOrders(newStatus);
              order = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                phone_input: this.phone_input
              }, {
                email_input: this.email_input
              }), {
                quants: this.g_quants
              }), order), {
                selectedPayment: this.selectedPayment
              }), {
                selectedReason: this.selectedReason
              }), {
                new_plan_date: this.new_plan_date
              }), {
                commentText: this.commentText
              }), {
                check: this.checkBase64Image
              });
              this.orderService.sendDelayedCall(order, newStatus);
              this.router.navigate(['courier']);
            }
          }
        }, {
          key: "submitChange",
          value: function submitChange() {
            var _this3 = this;

            var self = this;
            this.storage.get('orders').then(function (orders) {
              orders === null || orders === void 0 ? void 0 : orders.map(function (order) {
                if (order.id.toString() == _this3.order.id) {
                  order.status_id = _this3.selectedStatus;

                  _this3.data.saveOrders(orders);

                  _this3.data.orders.next(orders);
                }
              });
            });
            var noSkip = true;

            switch (this.selectedStatus) {
              case 4:
                if (this.selectedReason != null) {
                  var new_plan_date = new Date(this.new_plan_date);
                  this.courier.changeStatus(this.selectedStatus, String(this.order.id), undefined, this.selectedReason, null, null, new_plan_date.toLocaleDateString()).subscribe(function (data) {
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

                this.sys.doOCR(this.checkBase64Image, noSkip).then(function (recognizedData) {
                  var text = _this3.commentText ? _this3.commentText : "";

                  _this3.courier.changeStatus(_this3.selectedStatus, String(_this3.order.id), text, undefined, undefined, _this3.selectedPayment, '', _this3.checkBase64Image, recognizedData).subscribe(function (data) {
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

                this.sys.doOCR(this.checkBase64Image, noSkip).then(function (recognizedData) {
                  _this3.courier.changeStatus(_this3.selectedStatus, String(_this3.order.id), undefined, undefined, _this3.g_quants, _this3.selectedPayment, '', _this3.checkBase64Image, recognizedData).subscribe(function (data) {
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
                    } else {
                      _this3.sys.presentToast("Нет товаров в заказе", "danger", "Частичная доставка невозможна");
                    }

                    localStorage.removeItem("drawImg");
                  });
                });
                break;
            }
          }
        }, {
          key: "getSum",
          value: function getSum() {
            if (this.order) {
              var price = 0;
              var quants = this.g_quants;

              for (var code in quants) {
                price += quants[code]["price"] * quants[code]["amount"];
              }

              this.order.rur = price;
            }
          } //подсчитывает сумму заказа

        }, {
          key: "getPrice",
          value: function getPrice(order) {
            if (order) {
              var price = 0;

              for (var i = 0; i < order.goods.length; i++) {
                var good = order.goods[i];
                price += Number(good.Price) * Number(good.kol_vo);
              }

              return price;
            }
          }
        }, {
          key: "selectPayment",
          value: function selectPayment(item) {
            this.selectedPayment = item;
          }
        }, {
          key: "sendPay",
          value: function sendPay() {
            var goods = this.order.goods;
            var quants = this.g_quants;
            var callback_url = this.sys.proxy + "https://mobile.postsrvs.ru/mobile/pay_callback.php";
            var products = [];

            for (var code in quants) {
              if (quants[code]["amount"] > 0) {
                for (var i = 0; i < goods.length; i++) {
                  if (goods[i]["Code"] == code) {
                    var good_name = goods[i]["Name"];
                    var good_amount = quants[code]["amount"];
                    var good_price = Math.round(quants[code]["price"] * 100) / 100;
                    var pos = {
                      name: good_name,
                      price: good_price,
                      quantity: good_amount
                    };
                    products.push(pos);
                  }
                }
              }
            }

            var purchase = {
              products: products
            };
            console.log("goods_description\n", purchase);
            var self = this;

            if (this.pay_access) {
              var api_key = this.pay_access_data["api_key"];
              var login = this.pay_access_data["login"];
              var cashier = this.pay_access_data["cashier_name"];
              var phone;
              var order_data = {
                apikey: String(this.pay_access_data.api_key),
                login: String(this.pay_access_data.phone),
                cashier_name: String(this.pay_access_data.name) + String(this.pay_access_data.phone),
                purchase: purchase,
                callback_url: callback_url,
                mode: "email",
                customer_email: this.email_input,
                customer_phone: this.phone_input
              };

              if (self.selectedPayment == "2") {
                order_data["card_amount"] = "#";
              } else {
                order_data["cash_amount"] = "#";
              }

              if (this.phone_input != "") {
                order_data["customer_phone"] = this.phone_input;
              }

              self.send_api_data(order_data);
            }
          } //Получаем api key & login

        }, {
          key: "getPayData",
          value: function getPayData() {
            var url = "pay_order";
            var data = {
              action: "getData",
              orderId: this.clientId
            };
            var self = this;

            if (navigator.onLine) {
              this.auth.sendPost(url, data).subscribe(function (res) {
                console.log("GET_PAY_DATA", res);

                if (res.success == "true") {
                  self.pay_access = true;
                  self.pay_access_data = res;
                } else {
                  self.pay_access = false;
                }
              });
            } else {
              self.pay_access = false;
            }
          }
        }, {
          key: "send_api_data",
          value: function send_api_data(api_data) {
            var _this4 = this;

            var url = "pay_order";
            var self = this;
            this.order.rur = 0;
            api_data.purchase.products.forEach(function (product) {
              _this4.order.rur += product.price * product.quantity;
            });
            var data = {
              action: "sendPay",
              orderData: api_data,
              orderId: this.order.id
            };

            if (navigator.onLine) {
              this.auth.sendPost(url, data).subscribe(function (res) {
                self.submitChange();
                self.checkPayment();
                self.hide_status = true;
              });
            } else {
              var requests = [];
              this.cache.getItem('requests').then(function (req) {
                if (req !== undefined) {
                  requests = req;
                }

                requests.push({
                  url: url,
                  data: data
                });

                _this4.cache.saveItem('requests', requests);

                self.submitChange();
                self.checkPayment();
                self.hide_status = true;
              });
            }
          }
        }, {
          key: "showCheck",
          value: function showCheck() {
            var browser = this.iab.create(this.barcode_url, "_blank");
          }
        }, {
          key: "voiceLink",
          value: function voiceLink() {
            var browser = this.iab.create(String(this.order.r_url));
          }
        }, {
          key: "checkPayment",
          value: function checkPayment() {
            var self = this;
            this.state$.interval_1ss.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.$codeStop)).subscribe(function () {
              self.ifPaid();
              console.log("paid_iter");
            });
          }
        }, {
          key: "ifPaid",
          value: function ifPaid() {
            var url = "pay_order";
            var data = {
              action: "checkPaid",
              orderId: this.order.id
            };
            var self = this;
            this.auth.sendPost(url, data).subscribe(function (data) {
              if (data.success == "true" && data.barcode != null) {
                self.barcode_flag = true;
                self.barcode_url = data.barcode_url;
                self.barcode = data.barcode;
                self.$codeStop.next();
                self.hide_status = true;
              }
            });
          }
        }, {
          key: "enterPhone",
          value: function enterPhone() {
            if (this.showPhone) {
              this.showPhone = false;
              this.show_email = false;
            } else {
              this.showPhone = true;
              this.show_email = true;
            }
          }
        }, {
          key: "emailChange",
          value: function emailChange() {
            if (this.email_error) {
              this.email_error = false;
            }
          }
        }, {
          key: "initClientInfo",
          value: function initClientInfo() {
            var mail_exp = /(?:([\s.,]{1}))([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/gm;
            var infoStr = this.phone;
            var mail = mail_exp.exec(infoStr);

            if (mail != null) {
              this.email_input = mail[0];
            } else {
              this.show_email = true;
            }
          }
        }, {
          key: "intentStart",
          value: function intentStart() {
            this.state$.intentStart(this.coords);
          }
        }, {
          key: "showRoute",
          value: function showRoute() {
            this.sysMap.showRoute(this.order);
          }
        }, {
          key: "doneOrder",
          value: function doneOrder() {
            var _this5 = this;

            var drawedImg = localStorage.drawImg;

            if (this.drawNeedle && !drawedImg) {
              this.drawBtn(this.drawNeedle);
            } else {
              if (this.selectedPayment == '2') {
                this.sys.checkPhoto().then(function (imageData) {
                  _this5.checkBase64Image = 'data:image/jpeg;base64,' + imageData;

                  _this5.sendPayCall();
                });
              } else {
                this.sendPayCall();
              }
            }
          }
        }, {
          key: "saveNote",
          value: function saveNote() {
            localStorage.setItem(this.orderId, this.note);
            this.sysMap.infoUpdated.next();
          }
        }, {
          key: "tapBlock",
          value: function tapBlock() {
            this.openCompany = !this.openCompany;
          }
        }, {
          key: "localModifyOrders",
          value: function localModifyOrders(newStatus) {
            var _this6 = this;

            var meta = {
              label: 'localChanges'
            };
            this.storage.get('orders').then(function (orders) {
              orders === null || orders === void 0 ? void 0 : orders.map(function (order) {
                if (order.id.toString() == _this6.order.id.toString()) {
                  order.status_id = newStatus;

                  _this6.data.saveOrders(orders).then(function () {
                    return _this6.sysMap.infoUpdated.next(meta);
                  });

                  _this6.data.orders.next(orders);
                }
              });
            });
          }
        }, {
          key: "scanReturned",
          value: function scanReturned() {
            var _this7 = this;

            this.bs.scan().then(function (data) {
              var url = _this7.sys.proxy + 'https://mobile.postsrvs.ru/mobile/orders';
              var data1 = {
                "orderId": _this7.orderId,
                "box_barcode": data.text,
                "action": "get_box",
                "uuid": _this7.device.uuid
              };

              _this7.http.post(url, data1).subscribe(function (res) {
                console.log("sys:: \u043E\u0442\u0432\u0435\u0442 \u0441\u043A\u0430\u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430: ".concat(res));

                _this7.changeQuant(res[0], 'delete');
              });
            });
          }
        }]);

        return OrderPage;
      }();

      OrderPage.ɵfac = function OrderPage_Factory(t) {
        return new (t || OrderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_courier_service__WEBPACK_IMPORTED_MODULE_14__["CourierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_16__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_17__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_15__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_map_service__WEBPACK_IMPORTED_MODULE_18__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_order_service__WEBPACK_IMPORTED_MODULE_19__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"]));
      };

      OrderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: OrderPage,
        selectors: [["app-order"]],
        decls: 6,
        vars: 2,
        consts: [["slot", "start"], [4, "ngIf"], [1, "flex"], ["src", "../../../assets/a-b.svg"], [1, "addresses"], [1, "client-id"], [1, "datetime"], [1, "time"], [1, "flex", "main-info"], [1, "bold"], [1, "st_state", 3, "ngClass"], ["class", "primary-color bold", 4, "ngIf"], [1, "primary-color", "bold"], ["id", "call", "expand", "full", "fill", "solid", 3, "click"], [1, "yellow"], ["id", "company-card"], ["class", "ion-activated", 4, "ngIf"], [1, "actions-button", 3, "click"], ["src", "../../../assets/actions-arrows.svg", 3, "ngClass"], ["id", "note-item"], ["placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0443 \u043F\u043E \u0437\u0430\u043A\u0430\u0437\u0443", 3, "ngModel", "ngModelChange"], [3, "click"], ["slot", "icon-only", "name", "save"], ["id", "navigate-buttons"], ["expand", "block", "fill", "solid", "shape", "round", 1, "action", 3, "click"], ["id", "done-buttons", 4, "ngIf"], ["class", "sc-row o-row", 4, "ngIf"], ["class", "draw", 4, "ngIf"], ["class", "sc-payment", 4, "ngIf"], ["class", "sc-payment-block o-row", 4, "ngIf"], ["class", "dt-picker", 4, "ngIf"], [1, "sc-s-wrp"], ["class", "sc-submit", 3, "ngClass", "click", 4, "ngIf"], ["id", "call-window", 4, "ngIf"], [1, "ion-activated"], ["id", "done-buttons"], ["expand", "full", "fill", "solid", "shape", "round", "id", "light-purple-button", 1, "action", 3, "click"], ["slot", "start", "name", "close"], ["expand", "full", "fill", "solid", "shape", "round", "id", "light-blue-button", 1, "action", 3, "click"], ["slot", "start", "src", "../../../assets/pie-chart.svg"], ["expand", "full", "fill", "solid", "shape", "round", "id", "light-green-button", 1, "action", 3, "click"], ["slot", "start", "name", "checkmark-done"], [1, "sc-row", "o-row"], [1, "sc-goods-block"], [1, "goods-row", "o-row"], [1, "gr-title", "o-t"], [1, "gr-goods-list"], [1, "gr-head"], [1, "gr-col"], [4, "ngFor", "ngForOf"], ["expand", "block", "fill", "solid", "shape", "round", 3, "click", 4, "ngIf"], [1, "gr-item", 3, "ngClass"], [1, "gr-col", "gr-quant"], ["name", "minus-circle"], ["name", "plus-circle"], [1, "gr-col", "gr-price"], ["expand", "block", "fill", "solid", "shape", "round", 3, "click"], [1, "sc-r-title"], ["class", "sc-reason", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "sc-reason", 3, "ngClass", "click"], [1, "draw"], [1, "asc-row"], [1, "title"], [1, "draw-btns"], [1, "drawBtn", 3, "ngClass", "click"], ["alt", "\u041F\u043E\u0434\u043F\u0438\u0441\u044C", "style", "height: 200px;", 3, "src", 4, "ngIf"], ["class", "drawBtn changeDraw", 3, "click", 4, "ngIf"], ["alt", "\u041F\u043E\u0434\u043F\u0438\u0441\u044C", 2, "height", "200px", 3, "src"], [1, "drawBtn", "changeDraw", 3, "click"], [1, "sc-payment"], [1, "sc-payment__title"], [1, "dc-payment__wrp"], [1, "sc-payment-item", 3, "ngClass", "click"], [1, "sc-payment-block", "o-row"], ["class", "pb-email", 4, "ngIf"], [1, "pb-phone"], ["class", "pb-phone__title", 4, "ngIf"], ["type", "tel", "class", "pb-phone__input", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "show-phone", 3, "click"], [1, "pb-email"], [1, "pb-email__title"], ["type", "email", 1, "pb-email__input", 3, "ngModel", "ngModelChange", "input"], ["class", "email-error", 4, "ngIf"], [1, "email-error"], [1, "pb-phone__title"], ["type", "tel", 1, "pb-phone__input", 3, "ngModel", "ngModelChange"], ["class", "sc-comment-block", 4, "ngIf"], ["class", "goods-row o-row", 4, "ngIf"], [1, "sc-comment-block"], ["cols", "30", "rows", "3", 1, "sc-comment", 3, "ngModel", "ngModelChange"], [1, "gr-col", "gr-name"], [1, "dt-picker"], ["position", "floating"], ["displayFormat", "DD/MM/YYYY", 3, "min", "value", "ngModel", "ngModelChange"], [1, "sc-submit", 3, "ngClass", "click"], ["class", "l_btn_del", 4, "ngIf"], ["class", "l_btn_u_del", 4, "ngIf"], [1, "l_btn_del"], [1, "l_btn_u_del"], ["id", "call-window"], [1, "cw-body"], ["name", "x-square", "size", "large", 3, "click"], [3, "click", 4, "ngIf"], ["name", "selectedPhone", 3, "ngModel", "ngModelChange"], [3, "value"]],
        template: function OrderPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_title_4_Template, 2, 1, "ion-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_Template, 103, 50, "ion-content", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.order);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.order);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonBackButtonDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], angular_feather__WEBPACK_IMPORTED_MODULE_24__["FeatherComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["RadioValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  bottom: 40px;\n  top: 0;\n  --padding-bottom: 50px;\n}\n\nion-content[_ngcontent-%COMP%]   #done-buttons[_ngcontent-%COMP%] {\n  padding: 15px;\n  box-shadow: 0px -2px 3px rgba(117, 117, 117, 0.1);\n}\n\nion-content[_ngcontent-%COMP%]   #done-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  line-height: 19px !important;\n  margin-right: 0;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-color: #d6cfcf;\n  --border-width: 1px;\n  --border-radius: 2px;\n  --padding-start: 0;\n  margin: 5px 15px 0px 15px;\n  --inner-border-width: 0;\n  --inner-padding-bottom: 8px;\n  --inner-padding-start: 8px;\n  --inner-padding-top: 8px;\n  --inner-padding-end: 8px;\n  font-size: 14px;\n  line-height: 21px;\n  color: #585454;\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .addresses[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  font-size: 14px;\n  line-height: 16px;\n  color: #585454;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .addresses[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-weight: bold;\n  color: #333333;\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14px;\n  line-height: 16px;\n  color: #585454;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: bold;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%] {\n  --background: #fffed7;\n  font-size: 14px;\n  color: #585454;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333333;\n}\n\nion-content[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333333;\n}\n\nion-content[_ngcontent-%COMP%]   .status_done[_ngcontent-%COMP%] {\n  color: #33b150;\n}\n\nion-content[_ngcontent-%COMP%]   .status_wait[_ngcontent-%COMP%] {\n  color: #d8d510;\n}\n\nion-content[_ngcontent-%COMP%]   .status_fail[_ngcontent-%COMP%] {\n  color: #d21212;\n}\n\nion-content[_ngcontent-%COMP%]   .status_none[_ngcontent-%COMP%] {\n  color: #71777d;\n}\n\nion-content[_ngcontent-%COMP%]   .cl-status-voice[_ngcontent-%COMP%] {\n  color: #552086;\n}\n\nion-content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%] {\n  flex-flow: wrap;\n  justify-content: space-between;\n}\n\nion-content[_ngcontent-%COMP%]   .brand-color[_ngcontent-%COMP%] {\n  color: #2b637e !important;\n}\n\nion-content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  margin-bottom: 23px;\n}\n\nion-content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(even) {\n  text-align: right;\n}\n\nion-content[_ngcontent-%COMP%]   #call[_ngcontent-%COMP%] {\n  --background: #2b637e;\n  margin-bottom: 0;\n  margin-top: 15px;\n  text-transform: none;\n  font-weight: bold;\n  height: 42px;\n}\n\nion-content[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  --background: #fffed7;\n}\n\nion-content[_ngcontent-%COMP%]   #company-card[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\nion-content[_ngcontent-%COMP%]   #company-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nion-content[_ngcontent-%COMP%]   #call-window[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.6);\n}\n\nion-content[_ngcontent-%COMP%]   #call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%] {\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 5px;\n  position: relative;\n}\n\nion-content[_ngcontent-%COMP%]   #call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  height: 44px;\n  width: 80%;\n  box-shadow: 0px 0px 0.5px 0.5px #7cd5ff;\n  border-radius: 3px;\n  margin: 5px 0;\n  text-transform: uppercase;\n}\n\n#note-item[_ngcontent-%COMP%] {\n  --inner-padding-bottom: 0 !important;\n  --inner-padding-top: 0 !important;\n  --inner-padding-end: 0 !important;\n}\n\n#note-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #2b637e;\n  width: 48px;\n  height: 100%;\n  margin: 0;\n}\n\n#navigate-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 15px;\n}\n\n#navigate-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #f6fdff;\n  --border-color: #bbd9e8;\n  --border-radius: 2px;\n  --color: #2b637e;\n  margin: 0;\n  text-transform: none;\n  font-weight: bold;\n  --border-width: 1px;\n  --border-style: solid;\n  font-size: 14px;\n}\n\n.sc-row[_ngcontent-%COMP%] {\n  display: block;\n  box-shadow: 0 0 1px 1px #ff0000;\n  background: #e8f5ff;\n}\n\n.o-row[_ngcontent-%COMP%] {\n  margin: 2% 10px 0 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 10px;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 25px auto;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 0px;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%]   .gr-item[_ngcontent-%COMP%] {\n  grid-template-columns: 40% 30% 30%;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 0px;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%]   .gr-item[_ngcontent-%COMP%] {\n  grid-template-columns: 40% 30% 30%;\n}\n\n.goods-row[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.o-t[_ngcontent-%COMP%] {\n  font-weight: bold;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n}\n\n.gr-goods-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-template-rows: repeat(auto-fill, 20px);\n}\n\n.gr-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n}\n\n.gr-head[_ngcontent-%COMP%]   .gr-col[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n\n.gr-head[_ngcontent-%COMP%]   .gr-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.gr-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n}\n\n.st_fail[_ngcontent-%COMP%] {\n  background: #d21212;\n  color: #fff;\n}\n\n.st_done[_ngcontent-%COMP%] {\n  background: #33b150;\n  color: #fff;\n}\n\n.gr-quant[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gr-price[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sc-r-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 7px;\n  text-align: center;\n}\n\n.sc-reason[_ngcontent-%COMP%] {\n  width: 96%;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  margin: 4px;\n  border-radius: 2px;\n  background: #fff;\n}\n\n.status_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.draw[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 5% 10px 0px 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 10px 10px 20px 10px;\n  background: #fff;\n}\n\n.changeDraw[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 75%;\n  margin: 9px auto;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.asc-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.draw-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n}\n\n.drawBtn[_ngcontent-%COMP%] {\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n  background: #fff;\n}\n\n.draw_btn_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.sc-payment[_ngcontent-%COMP%] {\n  margin: 5% 10px 0 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 0px 10px 10px 10px;\n  display: grid;\n  background: #fff;\n}\n\n.sc-payment__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.dc-payment__wrp[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n}\n\n.sc-payment-item[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.payment_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.sc-payment-block[_ngcontent-%COMP%] {\n  margin: 5% 10px 0px 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 10px 10px 20px 10px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  background: #fff;\n  gap: 10px;\n}\n\n.sc-payment-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 2px;\n  height: 33px;\n  outline: none;\n  border: none;\n  background: no-repeat;\n}\n\n.pb-email[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pb-phone[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pb-email__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.pb-phone__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.show-phone[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 60%;\n  margin: 9px auto;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.sc-comment-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.sc-submit[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 60%;\n  margin: 25px 0px 2px 0;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.sc-s-wrp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0px;\n}\n\n.c_t_del[_ngcontent-%COMP%] {\n  background: #80f759;\n  color: #2379a2;\n  height: 50px;\n  font-size: 22px;\n  width: 94%;\n  text-transform: uppercase;\n  box-shadow: 0 0 1px 1px #80f759;\n}\n\n.c_t_u_del[_ngcontent-%COMP%] {\n  background: #f55656;\n  color: #fff;\n  height: 50px;\n  font-size: 22px;\n  width: 94%;\n  text-transform: uppercase;\n  box-shadow: 0 0 1px 1px #f55656;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLE1BQU07RUFDTixzQkFBaUI7QUFDbkI7O0FBSkE7RUFNSSxhQUFhO0VBQ2IsaURBQWlEO0FBRXJEOztBQVRBO0VBVU0sMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixlQUFlO0FBR3JCOztBQWZBO0VBaUJJLHVCQUFlO0VBQ2YsbUJBQWU7RUFDZixvQkFBZ0I7RUFDaEIsa0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix1QkFBcUI7RUFDckIsMkJBQXVCO0VBQ3ZCLDBCQUFzQjtFQUN0Qix3QkFBb0I7RUFDcEIsd0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtBQUV6Qjs7QUFoQ0E7RUFpQ00sU0FBUztFQUNULHFCQUFxQjtBQUczQjs7QUFyQ0E7RUFxQ00scUJBQXFCO0FBSTNCOztBQXpDQTtFQXdDTSxhQUFhO0FBS25COztBQTdDQTtFQTJDUSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBTXRCOztBQXBEQTtFQWlEVSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7QUFPL0I7O0FBM0RBO0VBMERNLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFLcEI7O0FBbEVBO0VBZ0VRLGNBQWM7RUFDZCxpQkFBaUI7QUFNekI7O0FBdkVBO0VBc0VJLHFCQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQWM7QUFLbEI7O0FBN0VBO0VBMkVNLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQU1mOztBQW5GQTtFQWdGUSxpQkFBaUI7QUFPekI7O0FBdkZBO0VBb0ZVLGlCQUFpQjtFQUNqQixjQUFjO0FBT3hCOztBQTVGQTtFQTJGSSxpQkFBaUI7RUFDakIsY0FBYztBQUtsQjs7QUFqR0E7RUErRkksY0FBYztBQU1sQjs7QUFyR0E7RUFtR0ksY0FBYztBQU1sQjs7QUF6R0E7RUF1R0ksY0FBYztBQU1sQjs7QUE3R0E7RUEwR0ksY0FBYztBQU9sQjs7QUFqSEE7RUE2R0ksY0FBdUI7QUFRM0I7O0FBckhBO0VBZ0hJLGVBQWU7RUFDZiw4QkFBOEI7QUFTbEM7O0FBMUhBO0VBcUhJLHlCQUF5QjtBQVM3Qjs7QUE5SEE7RUF3SEksbUJBQW1CO0FBVXZCOztBQWxJQTtFQTJISSxpQkFBaUI7QUFXckI7O0FBdElBO0VBOEhJLHFCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFZaEI7O0FBL0lBO0VBc0lJLHFCQUFhO0FBYWpCOztBQW5KQTtFQXlJSSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBY3RCOztBQXhKQTtFQTZJTSxpQkFBaUI7QUFldkI7O0FBNUpBO0VBa0pJLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsOEJBQThCO0FBY2xDOztBQXhLQTtFQTZKTSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBZXhCOztBQW5MQTtFQXVLUSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDVix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7QUFnQmpDOztBQVZBO0VBQ0Usb0NBQXVCO0VBQ3ZCLGlDQUFvQjtFQUNwQixpQ0FBb0I7QUFhdEI7O0FBaEJBO0VBTUkscUJBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7QUFjYjs7QUFWQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtBQWFkOztBQWhCQTtFQUtJLHFCQUFhO0VBQ2IsdUJBQWU7RUFDZixvQkFBZ0I7RUFDaEIsZ0JBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBZTtFQUNmLHFCQUFlO0VBQ2YsZUFBZTtBQWVuQjs7QUFWQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBYXJCOztBQVhBO0VBQ0Usc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBYy9COztBQVpBO0VBRUksWUFBWTtFQUNaLFdBQVc7QUFjZjs7QUFqQkE7RUFNTSxrQ0FBa0M7QUFleEM7O0FBWEE7RUFFSSxZQUFZO0VBQ1osV0FBVztBQWFmOztBQWhCQTtFQU1NLGtDQUFrQztBQWN4Qzs7QUFWQTtFQUNFLGdCQUFnQjtBQWFsQjs7QUFYQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQWNwQjs7QUFaQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLDJDQUEyQztBQWU3Qzs7QUFiQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7QUFnQnBDOztBQWxCQTtFQUtJLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFpQnBCOztBQXZCQTtFQVNNLGdCQUFnQjtBQWtCdEI7O0FBZEE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBaUJwQzs7QUFmQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBa0JiOztBQWhCQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBbUJiOztBQWpCQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQW9CckI7O0FBbEJBO0VBQ0Usa0JBQWtCO0FBcUJwQjs7QUFuQkE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQXNCcEI7O0FBcEJBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUF1QmxCOztBQXJCQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBd0JiOztBQXRCQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUF5QmxCOztBQXRCQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUF5QmxCOztBQXZCQTtFQUVJLGlCQUFpQjtFQUNqQixrQkFBa0I7QUF5QnRCOztBQXJCQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixZQUFZO0FBd0JkOztBQXJCQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQXdCbEI7O0FBckJBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUF3QmI7O0FBdEJBO0VBQ0Usc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsZ0JBQWdCO0FBeUJsQjs7QUF0QkE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBeUJwQjs7QUF0QkE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtBQXlCZDs7QUF0QkE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQXlCZDs7QUF0QkE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQXlCYjs7QUF2QkE7RUFDRSx3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsU0FBUztBQTBCWDs7QUFyQ0E7RUFjSSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtBQTJCekI7O0FBeEJBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBMkJ4Qjs7QUF4QkE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUEyQnhCOztBQXhCQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUEyQnBCOztBQXhCQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUEyQnBCOztBQXpCQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUE0QmxCOztBQTFCQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBNkJ6Qjs7QUExQkE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0FBNkJsQjs7QUEzQkE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQThCZDs7QUE1QkE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUErQmpDOztBQTVCQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLCtCQUErQjtBQStCakMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci9vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGJvdHRvbTogNDBweDtcbiAgdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiA1MHB4O1xuXG4gICNkb25lLWJ1dHRvbnMge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggM3B4IHJnYmEoMTE3LCAxMTcsIDExNywgMC4xKTtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICBsaW5lLWhlaWdodDogMTlweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1jb2xvcjogI2Q2Y2ZjZjtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBtYXJnaW46IDVweCAxNXB4IDBweCAxNXB4O1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiA4cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBjb2xvcjogIzU4NTQ1NDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIH1cbiAgICAuZmxleCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAuYWRkcmVzc2VzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBjb2xvcjogIzU4NTQ1NDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNsaWVudC1pZCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBjb2xvcjogIzU4NTQ1NDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0uZGF0ZXRpbWUge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmVkNztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1ODU0NTQ7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbjogMDtcblxuICAgICAgLnRpbWUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cbiAgLnN0YXR1c19kb25lIHtcbiAgICBjb2xvcjogIzMzYjE1MDtcbiAgfVxuXG4gIC5zdGF0dXNfd2FpdCB7XG4gICAgY29sb3I6ICNkOGQ1MTA7XG4gIH1cblxuICAuc3RhdHVzX2ZhaWwge1xuICAgIGNvbG9yOiAjZDIxMjEyO1xuICB9XG4gIC5zdGF0dXNfbm9uZSB7XG4gICAgY29sb3I6ICM3MTc3N2Q7XG4gIH1cbiAgLmNsLXN0YXR1cy12b2ljZSB7XG4gICAgY29sb3I6IHJnYig4NSwgMzIsIDEzNCk7XG4gIH1cbiAgLm1haW4taW5mbyB7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5icmFuZC1jb2xvciB7XG4gICAgY29sb3I6ICMyYjYzN2UgIWltcG9ydGFudDtcbiAgfVxuICAubWFpbi1pbmZvID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgfVxuICAubWFpbi1pbmZvID4gZGl2Om50aC1jaGlsZChldmVuKSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgI2NhbGwge1xuICAgIC0tYmFja2dyb3VuZDogIzJiNjM3ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICB9XG4gIC55ZWxsb3cge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmVkNztcbiAgfVxuICAjY29tcGFueS1jYXJkIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cblxuICAjY2FsbC13aW5kb3cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcblxuICAgIC5jdy1ib2R5IHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwLjVweCAwLjVweCAjN2NkNWZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiNub3RlLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuXG4gIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzJiNjM3ZTtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbiNuYXZpZ2F0ZS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDE1cHg7XG4gIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI2Y2ZmRmZjtcbiAgICAtLWJvcmRlci1jb2xvcjogI2JiZDllODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtLWNvbG9yOiAjMmI2MzdlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLy8v0JvQtdCz0LDRgdC4IVxuLnNjLXJvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjZmYwMDAwO1xuICBiYWNrZ3JvdW5kOiAjZThmNWZmO1xufVxuLm8tcm93IHtcbiAgbWFyZ2luOiAyJSAxMHB4IDAgMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjVweCBhdXRvO1xufVxuLnNjLWdvb2RzLWJsb2NrIHtcbiAgLmdvb2RzLXJvdyB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgLmdyLWl0ZW0ge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgMzAlIDMwJTtcbiAgICB9XG4gIH1cbn1cbi5zYy1nb29kcy1ibG9jayB7XG4gIC5nb29kcy1yb3cge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDBweDtcblxuICAgIC5nci1pdGVtIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDMwJSAzMCU7XG4gICAgfVxuICB9XG59XG4uZ29vZHMtcm93IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5vLXQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyLWdvb2RzLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDIwcHgpO1xufVxuLmdyLWhlYWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSAyNSUgMjUlO1xuXG4gIC5nci1jb2wge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG4gIH1cbn1cbi5nci1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgMjUlIDI1JTtcbn1cbi5zdF9mYWlsIHtcbiAgYmFja2dyb3VuZDogI2QyMTIxMjtcbiAgY29sb3I6ICNmZmY7XG59XG4uc3RfZG9uZSB7XG4gIGJhY2tncm91bmQ6ICMzM2IxNTA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmdyLXF1YW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nci1wcmljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zYy1yLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNjLXJlYXNvbiB7XG4gIHdpZHRoOiA5NiU7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjN2M3Yzc7XG4gIG1hcmdpbjogNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc3RhdHVzX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyYjYzN2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRyYXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1JSAxMHB4IDBweCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNoYW5nZURyYXcge1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjMmI2MzdlO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogOXB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmFzYy1yb3cge1xuICAudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uZHJhdy1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogOXB4IGF1dG87XG4gIHdpZHRoOiA3MiU7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjN2M3Yzc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG4uZHJhd0J0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDlweCBhdXRvO1xuICB3aWR0aDogNzIlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRyYXdfYnRuX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyYjYzN2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNjLXBheW1lbnQge1xuICBtYXJnaW46IDUlIDEwcHggMCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnNjLXBheW1lbnRfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRjLXBheW1lbnRfX3dycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDlweCBhdXRvO1xuICB3aWR0aDogNzIlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMzNweDtcbn1cblxuLnNjLXBheW1lbnQtaXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYXltZW50X2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyYjYzN2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNjLXBheW1lbnQtYmxvY2sge1xuICBtYXJnaW46IDUlIDEwcHggMHB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjN2M3Yzc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZ2FwOiAxMHB4O1xuXG4gIGlucHV0IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xuICB9XG59XG4ucGItZW1haWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBiLXBob25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wYi1lbWFpbF9fdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGItcGhvbmVfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaG93LXBob25lIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzJiNjM3ZTtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDlweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zYy1jb21tZW50LWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zYy1zdWJtaXQge1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjMmI2MzdlO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMjVweCAwcHggMnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNjLXMtd3JwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jX3RfZGVsIHtcbiAgYmFja2dyb3VuZDogIzgwZjc1OTtcbiAgY29sb3I6ICMyMzc5YTI7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB3aWR0aDogOTQlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjODBmNzU5O1xufVxuXG4uY190X3VfZGVsIHtcbiAgYmFja2dyb3VuZDogI2Y1NTY1NjtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB3aWR0aDogOTQlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjZjU1NjU2O1xufVxuIl19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '264px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '50px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OrderPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: "app-order",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [// ...
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              height: '264px'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              height: '50px'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')])])],
            templateUrl: "./order.page.html",
            styleUrls: ["./order.page.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _services_courier_service__WEBPACK_IMPORTED_MODULE_14__["CourierService"]
          }, {
            type: _services_state_service__WEBPACK_IMPORTED_MODULE_16__["StateService"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
          }, {
            type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]
          }, {
            type: _services_sys_service__WEBPACK_IMPORTED_MODULE_17__["SysService"]
          }, {
            type: _services_settings_service__WEBPACK_IMPORTED_MODULE_15__["SettingsService"]
          }, {
            type: _services_sys_map_service__WEBPACK_IMPORTED_MODULE_18__["MapService"]
          }, {
            type: _services_sys_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"]
          }, {
            type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
          }, {
            type: ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"]
          }, {
            type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]
          }, {
            type: _services_sys_order_service__WEBPACK_IMPORTED_MODULE_19__["OrderService"]
          }, {
            type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]
          }, {
            type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-order-order-module-es5.js.map