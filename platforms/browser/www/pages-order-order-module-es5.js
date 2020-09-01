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

      function OrderPage_ion_content_5_ion_item_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.order.Cname, " ");
        }
      }

      function OrderPage_ion_content_5_ion_item_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0410\u0434\u0440\u0435\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.order.Cadress, " ");
        }
      }

      function OrderPage_ion_content_5_ion_item_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.order.Cphone, " ");
        }
      }

      function OrderPage_ion_content_5_ion_item_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.order.Cphone_s, " ");
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "st_fail": a0,
          "st_done": a1
        };
      };

      function OrderPage_ion_content_5_div_92_div_10_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_div_13_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

            var good_r18 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r19.changeQuant(good_r18.Code, "minus");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i-feather", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_div_13_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

            var good_r18 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r21.changeQuant(good_r18.Code, "plus");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i-feather", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var good_r18 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r9.g_quants[good_r18.Code]["amount"] == 0, ctx_r9.order.status_id == 6 && ctx_r9.g_quants[good_r18.Code]["amount"] > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](good_r18.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.g_quants[good_r18.Code]["amount"], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", good_r18.Price, "\u0440.");
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_ion_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_ion_button_18_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r22.scanReturned();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "status_active": a0
        };
      };

      function OrderPage_ion_content_5_div_92_div_10_div_20_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_div_20_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);

            var reason_r25 = ctx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r26.selectReason(reason_r25.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reason_r25 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r24.selectedReason == reason_r25.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", reason_r25.reason, " ");
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_92_div_10_div_20_div_3_Template, 2, 4, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.reasons);
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_div_21_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 66);
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r28.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_div_21_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_div_21_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r30.drawBtn(true);
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

      function OrderPage_ion_content_5_div_92_div_10_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_div_21_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r32.drawBtn(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0414\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_div_21_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r34.drawBtn(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u041D\u0435\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OrderPage_ion_content_5_div_92_div_10_div_21_img_9_Template, 1, 1, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OrderPage_ion_content_5_div_92_div_10_div_21_button_10_Template, 2, 0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r12.drawNeedle));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, !ctx_r12.drawNeedle));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.imageToShow && ctx_r12.drawNeedle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.drawNeedle);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "payment_active": a0
        };
      };

      function OrderPage_ion_content_5_div_92_div_10_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041E\u043F\u043B\u0430\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_div_22_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r35.selectPayment("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_div_22_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r37.selectPayment("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u041A\u0430\u0440\u0442\u043E\u0439 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, ctx_r13.selectedPayment == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c3, ctx_r13.selectedPayment == 2));
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_div_23_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email \u043A\u043B\u0438\u0435\u043D\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_92_div_10_div_23_div_1_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r42.email_input = $event;
          })("input", function OrderPage_ion_content_5_div_92_div_10_div_23_div_1_Template_input_input_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r44.emailChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_92_div_10_div_23_div_1_span_4_Template, 2, 0, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r38.email_input);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r38.email_error);
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_div_23_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043A\u043B\u0438\u0435\u043D\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_div_23_input_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_92_div_10_div_23_input_4_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r45.phone_input = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r40.phone_input);
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderPage_ion_content_5_div_92_div_10_div_23_div_1_Template, 5, 2, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_92_div_10_div_23_div_3_Template, 2, 0, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_92_div_10_div_23_input_4_Template, 1, 1, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_div_23_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r47.enterPhone();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041F\u0440\u043E\u0447\u0435\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.show_email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.showPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.showPhone);
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_details_24_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "textarea", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_92_div_10_details_24_div_3_Template_textarea_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r51.commentText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r49.commentText);
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "st_fail": a0
        };
      };

      function OrderPage_ion_content_5_div_92_div_10_details_24_div_4_div_11_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var good_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c4, good_r54.kol_vo == 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](good_r54.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", good_r54.kol_vo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", good_r54.Price, "\u0440.");
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_details_24_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u0437\u0430\u043A\u0430\u0437\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041A\u043E\u043B-\u0432\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0426\u0435\u043D\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OrderPage_ion_content_5_div_92_div_10_details_24_div_4_div_11_Template, 8, 6, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r50.goods);
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_details_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_92_div_10_details_24_div_3_Template, 4, 1, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_92_div_10_details_24_div_4_Template, 12, 1, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.selectedStatus == 5 || ctx_r15.selectedStatus == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.selectedStatus == 5);
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "MM/DD/YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-datetime", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_92_div_10_div_25_Template_ion_datetime_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r55.new_plan_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("min", ctx_r16.today.toISOString());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r16.tomorrow.toISOString());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r16.new_plan_date);
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_button_27_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_button_27_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 97);

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

      function OrderPage_ion_content_5_div_92_div_10_button_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_div_10_button_27_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r59.doneOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderPage_ion_content_5_div_92_div_10_button_27_span_1_Template, 2, 0, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OrderPage_ion_content_5_div_92_div_10_button_27_span_2_Template, 2, 0, "span", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c5, ctx_r17.selectedStatus == 5 || ctx_r17.selectedStatus == 6, ctx_r17.selectedStatus == 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.selectedStatus == 5 || ctx_r17.selectedStatus == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.selectedStatus == 4);
        }
      }

      function OrderPage_ion_content_5_div_92_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u0437\u0430\u043A\u0430\u0437\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u041A\u043E\u043B-\u0432\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0426\u0435\u043D\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OrderPage_ion_content_5_div_92_div_10_div_13_Template, 12, 7, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0418\u0442\u043E\u0433\u043E: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, OrderPage_ion_content_5_div_92_div_10_ion_button_18_Template, 2, 0, "ion-button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, OrderPage_ion_content_5_div_92_div_10_div_20_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, OrderPage_ion_content_5_div_92_div_10_div_21_Template, 11, 8, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, OrderPage_ion_content_5_div_92_div_10_div_22_Template, 8, 6, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, OrderPage_ion_content_5_div_92_div_10_div_23_Template, 7, 3, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, OrderPage_ion_content_5_div_92_div_10_details_24_Template, 5, 2, "details", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, OrderPage_ion_content_5_div_92_div_10_div_25_Template, 5, 3, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, OrderPage_ion_content_5_div_92_div_10_button_27_Template, 3, 6, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.goods);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r8.order.rur, "\u0440.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.selectedStatus == 6 || ctx_r8.order.status_id == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.selectedStatus == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.selectedStatus == 5 || ctx_r8.selectedStatus == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.selectedStatus == 5 || ctx_r8.selectedStatus == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.pay_access && (ctx_r8.selectedStatus == 5 || ctx_r8.selectedStatus == 6));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.selectedStatus && ctx_r8.selectedStatus !== 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.selectedReason == 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.selectedStatus);
        }
      }

      function OrderPage_ion_content_5_div_92_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r61.selectStatus(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u041D\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_Template_ion_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r63.selectStatus(6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0427\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_92_Template_ion_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r64.selectStatus(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OrderPage_ion_content_5_div_92_div_10_Template, 28, 10, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedStatus == 6 || ctx_r6.order.status_id == 6);
        }
      }

      function OrderPage_ion_content_5_div_93_ion_list_3_ion_item_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-radio", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var phone_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", phone_r69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](phone_r69);
        }
      }

      function OrderPage_ion_content_5_div_93_ion_list_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-radio-group", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_div_93_ion_list_3_Template_ion_radio_group_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r71);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r70.selectedPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_div_93_ion_list_3_ion_item_5_Template, 4, 2, "ion-item", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r65.selectedPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r65.orderPhones);
        }
      }

      function OrderPage_ion_content_5_div_93_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_93_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r73);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r72.phoneClick("phone");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_93_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_93_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r74.phoneClick("operator");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 ip-\u0448\u043B\u044E\u0437 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_ion_content_5_div_93_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i-feather", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_div_93_Template_i_feather_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r76.phoneClick("init");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_ion_content_5_div_93_ion_list_3_Template, 6, 2, "ion-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_ion_content_5_div_93_button_4_Template, 2, 0, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_div_93_button_5_Template, 2, 0, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.orderPhones.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.settings.rules.phoneMode == "robotPhone" || ctx_r7.settings.rules.phoneMode == "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.settings.rules.phoneMode == "robotPhone" || ctx_r7.settings.rules.phoneMode == "robot");
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
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r78.phoneClick("init");
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_div_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r80.tapBlock();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "ion-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "ion-item", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "ion-input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_ion_content_5_Template_ion_input_ngModelChange_84_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r81.note = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "ion-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_85_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r82.saveNote();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "ion-button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_88_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r83.intentStart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u0430\u0432\u0438\u0433\u0430\u0442\u043E\u0440\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "ion-button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_content_5_Template_ion_button_click_90_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r84.showRoute(ctx_r84.order);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, OrderPage_ion_content_5_div_92_Template, 11, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, OrderPage_ion_content_5_div_93_Template, 6, 3, "div", 25);

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
        consts: [["slot", "start"], [4, "ngIf"], [1, "flex"], ["src", "../../../assets/a-b.svg"], [1, "addresses"], [1, "client-id"], [1, "datetime"], [1, "time"], [1, "flex", "main-info"], [1, "bold"], [1, "st_state", 3, "ngClass"], [1, "primary-color", "bold"], ["id", "call", "expand", "full", "fill", "solid", 3, "click"], [1, "yellow"], ["id", "company-card"], ["class", "ion-activated", 4, "ngIf"], [1, "actions-button", 3, "click"], ["src", "../../../assets/actions-arrows.svg", 3, "ngClass"], ["id", "note-item"], ["placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0443 \u043F\u043E \u0437\u0430\u043A\u0430\u0437\u0443", 3, "ngModel", "ngModelChange"], [3, "click"], ["slot", "icon-only", "name", "save"], ["id", "navigate-buttons"], ["expand", "block", "fill", "solid", "shape", "round", 1, "action", 3, "click"], ["id", "done-buttons", 4, "ngIf"], ["class", "call-window", 4, "ngIf"], [1, "ion-activated"], ["id", "done-buttons"], ["expand", "full", "fill", "solid", "shape", "round", "id", "light-purple-button", 1, "action", 3, "click"], ["slot", "start", "name", "close"], ["expand", "full", "fill", "solid", "shape", "round", "id", "light-blue-button", 1, "action", 3, "click"], ["slot", "start", "src", "../../../assets/pie-chart.svg"], ["expand", "full", "fill", "solid", "shape", "round", "id", "light-green-button", 1, "action", 3, "click"], ["slot", "start", "name", "checkmark-done"], ["class", "sc-row o-row", 4, "ngIf"], [1, "sc-row", "o-row"], [1, "sc-goods-block"], [1, "goods-row", "o-row"], [1, "gr-title", "o-t"], [1, "gr-goods-list"], [1, "gr-head"], [1, "gr-col"], [4, "ngFor", "ngForOf"], ["expand", "block", "fill", "solid", "shape", "round", 3, "click", 4, "ngIf"], ["class", "draw", 4, "ngIf"], ["class", "sc-payment", 4, "ngIf"], ["class", "sc-payment-block o-row", 4, "ngIf"], ["class", "dt-picker", 4, "ngIf"], [1, "sc-s-wrp"], ["class", "sc-submit", 3, "ngClass", "click", 4, "ngIf"], [1, "gr-item", 3, "ngClass"], [1, "gr-col", "gr-quant"], ["name", "minus-circle"], ["name", "plus-circle"], [1, "gr-col", "gr-price"], ["expand", "block", "fill", "solid", "shape", "round", 3, "click"], [1, "sc-r-title"], ["class", "sc-reason", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "sc-reason", 3, "ngClass", "click"], [1, "draw"], [1, "asc-row"], [1, "title"], [1, "draw-btns"], [1, "drawBtn", 3, "ngClass", "click"], ["alt", "\u041F\u043E\u0434\u043F\u0438\u0441\u044C", "style", "height: 200px;", 3, "src", 4, "ngIf"], ["class", "drawBtn changeDraw", 3, "click", 4, "ngIf"], ["alt", "\u041F\u043E\u0434\u043F\u0438\u0441\u044C", 2, "height", "200px", 3, "src"], [1, "drawBtn", "changeDraw", 3, "click"], [1, "sc-payment"], [1, "sc-payment__title"], [1, "dc-payment__wrp"], [1, "sc-payment-item", 3, "ngClass", "click"], [1, "sc-payment-block", "o-row"], ["class", "pb-email", 4, "ngIf"], [1, "pb-phone"], ["class", "pb-phone__title", 4, "ngIf"], ["type", "tel", "class", "pb-phone__input", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "show-phone", 3, "click"], [1, "pb-email"], [1, "pb-email__title"], ["type", "email", 1, "pb-email__input", 3, "ngModel", "ngModelChange", "input"], ["class", "email-error", 4, "ngIf"], [1, "email-error"], [1, "pb-phone__title"], ["type", "tel", 1, "pb-phone__input", 3, "ngModel", "ngModelChange"], ["class", "sc-comment-block", 4, "ngIf"], ["class", "goods-row o-row", 4, "ngIf"], [1, "sc-comment-block"], ["cols", "30", "rows", "3", 1, "sc-comment", 3, "ngModel", "ngModelChange"], [1, "gr-col", "gr-name"], [1, "dt-picker"], ["position", "floating"], ["displayFormat", "DD/MM/YYYY", 3, "min", "value", "ngModel", "ngModelChange"], [1, "sc-submit", 3, "ngClass", "click"], ["class", "l_btn_del", 4, "ngIf"], ["class", "l_btn_u_del", 4, "ngIf"], [1, "l_btn_del"], [1, "l_btn_u_del"], [1, "call-window"], [1, "cw-body"], ["name", "x-square", "size", "large", 3, "click"], [3, "click", 4, "ngIf"], ["name", "selectedPhone", 3, "ngModel", "ngModelChange"], [3, "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_Template, 94, 42, "ion-content", 1);
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
        styles: ["ion-content[_ngcontent-%COMP%] {\n  bottom: 40px;\n  top: 0;\n  --padding-bottom: 50px;\n}\n\nion-content[_ngcontent-%COMP%]   #done-buttons[_ngcontent-%COMP%] {\n  padding: 15px;\n  box-shadow: 0px -2px 3px rgba(117, 117, 117, 0.1);\n}\n\nion-content[_ngcontent-%COMP%]   #done-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  line-height: 19px !important;\n  margin-right: 0;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-color: #d6cfcf;\n  --border-width: 1px;\n  --border-radius: 2px;\n  --padding-start: 0;\n  margin: 5px 15px 0px 15px;\n  --inner-border-width: 0;\n  --inner-padding-bottom: 8px;\n  --inner-padding-start: 8px;\n  --inner-padding-top: 8px;\n  --inner-padding-end: 8px;\n  font-size: 14px;\n  line-height: 21px;\n  color: #585454;\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .addresses[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  font-size: 14px;\n  line-height: 16px;\n  color: #585454;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .addresses[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-weight: bold;\n  color: #333333;\n  white-space: pre-wrap;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14px;\n  line-height: 16px;\n  color: #585454;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: bold;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%] {\n  --background: #fffed7;\n  font-size: 14px;\n  color: #585454;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\nion-content[_ngcontent-%COMP%]   ion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333333;\n}\n\nion-content[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333333;\n}\n\nion-content[_ngcontent-%COMP%]   .status_done[_ngcontent-%COMP%] {\n  color: #33b150;\n}\n\nion-content[_ngcontent-%COMP%]   .status_wait[_ngcontent-%COMP%] {\n  color: #d8d510;\n}\n\nion-content[_ngcontent-%COMP%]   .status_fail[_ngcontent-%COMP%] {\n  color: #d21212;\n}\n\nion-content[_ngcontent-%COMP%]   .status_none[_ngcontent-%COMP%] {\n  color: #71777d;\n}\n\nion-content[_ngcontent-%COMP%]   .cl-status-voice[_ngcontent-%COMP%] {\n  color: #552086;\n}\n\nion-content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%] {\n  flex-flow: wrap;\n  justify-content: space-between;\n}\n\nion-content[_ngcontent-%COMP%]   .brand-color[_ngcontent-%COMP%] {\n  color: #2b637e !important;\n}\n\nion-content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  margin-bottom: 23px;\n}\n\nion-content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(even) {\n  text-align: right;\n}\n\nion-content[_ngcontent-%COMP%]   #call[_ngcontent-%COMP%] {\n  --background: #2b637e;\n  margin-bottom: 0;\n  margin-top: 15px;\n  text-transform: none;\n  font-weight: bold;\n  height: 42px;\n}\n\nion-content[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  --background: #fffed7;\n}\n\nion-content[_ngcontent-%COMP%]   #company-card[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\nion-content[_ngcontent-%COMP%]   #company-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n#note-item[_ngcontent-%COMP%] {\n  --inner-padding-bottom: 0 !important;\n  --inner-padding-top: 0 !important;\n  --inner-padding-end: 0 !important;\n}\n\n#note-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #2b637e;\n  width: 48px;\n  height: 100%;\n  margin: 0;\n}\n\n#navigate-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 15px;\n}\n\n#navigate-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #f6fdff;\n  --border-color: #bbd9e8;\n  --border-radius: 2px;\n  --color: #2b637e;\n  margin: 0;\n  text-transform: none;\n  font-weight: bold;\n  --border-width: 1px;\n  --border-style: solid;\n  font-size: 14px;\n}\n\n#navigate-buttons[_ngcontent-%COMP%]   .call-window[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n#navigate-buttons[_ngcontent-%COMP%]   .call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%] {\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 5px;\n  position: relative;\n}\n\n#navigate-buttons[_ngcontent-%COMP%]   .call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  height: 44px;\n  width: 80%;\n  box-shadow: 0px 0px 0.5px 0.5px #7cd5ff;\n  border-radius: 3px;\n  margin: 5px 0;\n  text-transform: uppercase;\n}\n\n.sc-row[_ngcontent-%COMP%] {\n  display: block;\n  box-shadow: 0 0 1px 1px #ff0000;\n  background: #e8f5ff;\n}\n\n.o-row[_ngcontent-%COMP%] {\n  margin: 2% 10px 0 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 10px;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 25px auto;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 0px;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%]   .gr-item[_ngcontent-%COMP%] {\n  grid-template-columns: 40% 30% 30%;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 0px;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%]   .gr-item[_ngcontent-%COMP%] {\n  grid-template-columns: 40% 30% 30%;\n}\n\n.goods-row[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.o-t[_ngcontent-%COMP%] {\n  font-weight: bold;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n}\n\n.gr-goods-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-template-rows: repeat(auto-fill, 20px);\n}\n\n.gr-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n}\n\n.gr-head[_ngcontent-%COMP%]   .gr-col[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n\n.gr-head[_ngcontent-%COMP%]   .gr-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.gr-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n}\n\n.st_fail[_ngcontent-%COMP%] {\n  background: #d21212;\n  color: #fff;\n}\n\n.st_done[_ngcontent-%COMP%] {\n  background: #33b150;\n  color: #fff;\n}\n\n.gr-quant[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gr-price[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sc-r-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 7px;\n  text-align: center;\n}\n\n.sc-reason[_ngcontent-%COMP%] {\n  width: 96%;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  margin: 4px 0;\n  border-radius: 2px;\n  background: #fff;\n}\n\n.status_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.draw[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 5% 10px 0px 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 10px 10px 20px 10px;\n  background: #fff;\n}\n\n.changeDraw[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 75%;\n  margin: 9px auto;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.asc-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.draw-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n}\n\n.drawBtn[_ngcontent-%COMP%] {\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n  background: #fff;\n}\n\n.draw_btn_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.sc-payment[_ngcontent-%COMP%] {\n  margin: 5% 10px 0 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 0px 10px 10px 10px;\n  display: grid;\n  background: #fff;\n}\n\n.sc-payment__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.dc-payment__wrp[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n}\n\n.sc-payment-item[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.payment_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.sc-payment-block[_ngcontent-%COMP%] {\n  margin: 5% 10px 0px 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 10px 10px 20px 10px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  background: #fff;\n  gap: 10px;\n}\n\n.sc-payment-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 2px;\n  height: 33px;\n  outline: none;\n  border: none;\n  background: no-repeat;\n}\n\n.pb-email[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pb-phone[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pb-email__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.pb-phone__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.show-phone[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 60%;\n  margin: 9px auto;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.sc-comment-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.sc-submit[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 60%;\n  margin: 25px 0px 2px 0;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.sc-s-wrp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0px;\n}\n\n.c_t_del[_ngcontent-%COMP%] {\n  background: #80f759;\n  color: #2379a2;\n  height: 50px;\n  font-size: 22px;\n  width: 94%;\n  text-transform: uppercase;\n  box-shadow: 0 0 1px 1px #80f759;\n}\n\n.c_t_u_del[_ngcontent-%COMP%] {\n  background: #f55656;\n  color: #fff;\n  height: 50px;\n  font-size: 22px;\n  width: 94%;\n  text-transform: uppercase;\n  box-shadow: 0 0 1px 1px #f55656;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLE1BQU07RUFDTixzQkFBaUI7QUFDbkI7O0FBSkE7RUFNSSxhQUFhO0VBQ2IsaURBQWlEO0FBRXJEOztBQVRBO0VBVU0sMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixlQUFlO0FBR3JCOztBQWZBO0VBaUJJLHVCQUFlO0VBQ2YsbUJBQWU7RUFDZixvQkFBZ0I7RUFDaEIsa0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix1QkFBcUI7RUFDckIsMkJBQXVCO0VBQ3ZCLDBCQUFzQjtFQUN0Qix3QkFBb0I7RUFDcEIsd0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtBQUV6Qjs7QUFoQ0E7RUFpQ00sU0FBUztFQUNULHFCQUFxQjtBQUczQjs7QUFyQ0E7RUFxQ00scUJBQXFCO0FBSTNCOztBQXpDQTtFQXdDTSxhQUFhO0FBS25COztBQTdDQTtFQTJDUSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBTXRCOztBQXBEQTtFQWlEVSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7QUFPL0I7O0FBM0RBO0VBMERNLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFLcEI7O0FBbEVBO0VBZ0VRLGNBQWM7RUFDZCxpQkFBaUI7QUFNekI7O0FBdkVBO0VBc0VJLHFCQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQWM7QUFLbEI7O0FBN0VBO0VBMkVNLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQU1mOztBQW5GQTtFQWdGUSxpQkFBaUI7QUFPekI7O0FBdkZBO0VBb0ZVLGlCQUFpQjtFQUNqQixjQUFjO0FBT3hCOztBQTVGQTtFQTJGSSxpQkFBaUI7RUFDakIsY0FBYztBQUtsQjs7QUFqR0E7RUErRkksY0FBYztBQU1sQjs7QUFyR0E7RUFtR0ksY0FBYztBQU1sQjs7QUF6R0E7RUF1R0ksY0FBYztBQU1sQjs7QUE3R0E7RUEwR0ksY0FBYztBQU9sQjs7QUFqSEE7RUE2R0ksY0FBdUI7QUFRM0I7O0FBckhBO0VBZ0hJLGVBQWU7RUFDZiw4QkFBOEI7QUFTbEM7O0FBMUhBO0VBcUhJLHlCQUF5QjtBQVM3Qjs7QUE5SEE7RUF3SEksbUJBQW1CO0FBVXZCOztBQWxJQTtFQTJISSxpQkFBaUI7QUFXckI7O0FBdElBO0VBOEhJLHFCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFZaEI7O0FBL0lBO0VBc0lJLHFCQUFhO0FBYWpCOztBQW5KQTtFQXlJSSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBY3RCOztBQXhKQTtFQTZJTSxpQkFBaUI7QUFldkI7O0FBVkE7RUFDRSxvQ0FBdUI7RUFDdkIsaUNBQW9CO0VBQ3BCLGlDQUFvQjtBQWF0Qjs7QUFoQkE7RUFNSSxxQkFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztBQWNiOztBQVZBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0FBYWQ7O0FBaEJBO0VBS0kscUJBQWE7RUFDYix1QkFBZTtFQUNmLG9CQUFnQjtFQUNoQixnQkFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFlO0VBQ2YscUJBQWU7RUFDZixlQUFlO0FBZW5COztBQTdCQTtFQWtCSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQWVsQzs7QUF6Q0E7RUE2Qk0sVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQWdCeEI7O0FBcERBO0VBdUNRLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtFQUNWLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtBQWlCakM7O0FBVkE7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG1CQUFtQjtBQWFyQjs7QUFYQTtFQUNFLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtBQWMvQjs7QUFaQTtFQUVJLFlBQVk7RUFDWixXQUFXO0FBY2Y7O0FBakJBO0VBTU0sa0NBQWtDO0FBZXhDOztBQVhBO0VBRUksWUFBWTtFQUNaLFdBQVc7QUFhZjs7QUFoQkE7RUFNTSxrQ0FBa0M7QUFjeEM7O0FBVkE7RUFDRSxnQkFBZ0I7QUFhbEI7O0FBWEE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFjcEI7O0FBWkE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFlN0M7O0FBYkE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBZ0JwQzs7QUFsQkE7RUFLSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBaUJwQjs7QUF2QkE7RUFTTSxnQkFBZ0I7QUFrQnRCOztBQWRBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQWlCcEM7O0FBZkE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQWtCYjs7QUFoQkE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQW1CYjs7QUFqQkE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFvQnJCOztBQWxCQTtFQUNFLGtCQUFrQjtBQXFCcEI7O0FBbkJBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFzQnBCOztBQXBCQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBdUJsQjs7QUFyQkE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQXdCYjs7QUF0QkE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBeUJsQjs7QUF0QkE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0FBeUJsQjs7QUF2QkE7RUFFSSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBeUJ0Qjs7QUFyQkE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtBQXdCZDs7QUFyQkE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7QUF3QmxCOztBQXJCQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBd0JiOztBQXRCQTtFQUNFLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGdCQUFnQjtBQXlCbEI7O0FBdEJBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQXlCcEI7O0FBdEJBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUF5QmQ7O0FBdEJBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUF5QmQ7O0FBdEJBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUF5QmI7O0FBdkJBO0VBQ0Usd0JBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUEwQlg7O0FBckNBO0VBY0ksK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7QUEyQnpCOztBQXhCQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQTJCeEI7O0FBeEJBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBMkJ4Qjs7QUF4QkE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBMkJwQjs7QUF4QkE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBMkJwQjs7QUF6QkE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0FBNEJsQjs7QUExQkE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQTZCekI7O0FBMUJBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtBQTZCbEI7O0FBM0JBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUE4QmQ7O0FBNUJBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsK0JBQStCO0FBK0JqQzs7QUE1QkE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUErQmpDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBib3R0b206IDQwcHg7XG4gIHRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNTBweDtcblxuICAjZG9uZS1idXR0b25zIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAtMnB4IDNweCByZ2JhKDExNywgMTE3LCAxMTcsIDAuMSk7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgbGluZS1oZWlnaHQ6IDE5cHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkNmNmY2Y7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgbWFyZ2luOiA1cHggMTVweCAwcHggMTVweDtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogOHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgY29sb3I6ICM1ODU0NTQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICB9XG4gICAgLmZsZXgge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgLmFkZHJlc3NlcyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgY29sb3I6ICM1ODU0NTQ7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jbGllbnQtaWQge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgY29sb3I6ICM1ODU0NTQ7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLmRhdGV0aW1lIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZlZDc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNTg1NDU0O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIC50aW1lIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICB9XG4gIC5zdGF0dXNfZG9uZSB7XG4gICAgY29sb3I6ICMzM2IxNTA7XG4gIH1cblxuICAuc3RhdHVzX3dhaXQge1xuICAgIGNvbG9yOiAjZDhkNTEwO1xuICB9XG5cbiAgLnN0YXR1c19mYWlsIHtcbiAgICBjb2xvcjogI2QyMTIxMjtcbiAgfVxuICAuc3RhdHVzX25vbmUge1xuICAgIGNvbG9yOiAjNzE3NzdkO1xuICB9XG4gIC5jbC1zdGF0dXMtdm9pY2Uge1xuICAgIGNvbG9yOiByZ2IoODUsIDMyLCAxMzQpO1xuICB9XG4gIC5tYWluLWluZm8ge1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuYnJhbmQtY29sb3Ige1xuICAgIGNvbG9yOiAjMmI2MzdlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1haW4taW5mbyA+IGRpdjpudGgtY2hpbGQoMSkge1xuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gIH1cbiAgLm1haW4taW5mbyA+IGRpdjpudGgtY2hpbGQoZXZlbikge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gICNjYWxsIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyYjYzN2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogNDJweDtcbiAgfVxuICAueWVsbG93IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZlZDc7XG4gIH1cbiAgI2NvbXBhbnktY2FyZCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuXG4gICAgaDMge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbiNub3RlLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuXG4gIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzJiNjM3ZTtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbiNuYXZpZ2F0ZS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDE1cHg7XG4gIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI2Y2ZmRmZjtcbiAgICAtLWJvcmRlci1jb2xvcjogI2JiZDllODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtLWNvbG9yOiAjMmI2MzdlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuY2FsbC13aW5kb3cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcblxuICAgIC5jdy1ib2R5IHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwLjVweCAwLjVweCAjN2NkNWZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vL9Cb0LXQs9Cw0YHQuCFcbi5zYy1yb3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2ZmMDAwMDtcbiAgYmFja2dyb3VuZDogI2U4ZjVmZjtcbn1cbi5vLXJvdyB7XG4gIG1hcmdpbjogMiUgMTBweCAwIDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjN2M3Yzc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHggYXV0bztcbn1cbi5zYy1nb29kcy1ibG9jayB7XG4gIC5nb29kcy1yb3cge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDBweDtcblxuICAgIC5nci1pdGVtIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDMwJSAzMCU7XG4gICAgfVxuICB9XG59XG4uc2MtZ29vZHMtYmxvY2sge1xuICAuZ29vZHMtcm93IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG5cbiAgICAuZ3ItaXRlbSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAzMCUgMzAlO1xuICAgIH1cbiAgfVxufVxuLmdvb2RzLXJvdyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uby10IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5nci1nb29kcy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCAyMHB4KTtcbn1cbi5nci1oZWFkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgMjUlIDI1JTtcblxuICAuZ3ItY29sIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuICB9XG59XG4uZ3ItaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDI1JSAyNSU7XG59XG4uc3RfZmFpbCB7XG4gIGJhY2tncm91bmQ6ICNkMjEyMTI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnN0X2RvbmUge1xuICBiYWNrZ3JvdW5kOiAjMzNiMTUwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5nci1xdWFudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZ3ItcHJpY2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2Mtci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zYy1yZWFzb24ge1xuICB3aWR0aDogOTYlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBtYXJnaW46IDRweCAwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc3RhdHVzX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyYjYzN2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRyYXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1JSAxMHB4IDBweCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNoYW5nZURyYXcge1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjMmI2MzdlO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogOXB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmFzYy1yb3cge1xuICAudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uZHJhdy1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogOXB4IGF1dG87XG4gIHdpZHRoOiA3MiU7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjN2M3Yzc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG4uZHJhd0J0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDlweCBhdXRvO1xuICB3aWR0aDogNzIlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRyYXdfYnRuX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyYjYzN2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNjLXBheW1lbnQge1xuICBtYXJnaW46IDUlIDEwcHggMCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnNjLXBheW1lbnRfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRjLXBheW1lbnRfX3dycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDlweCBhdXRvO1xuICB3aWR0aDogNzIlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMzNweDtcbn1cblxuLnNjLXBheW1lbnQtaXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYXltZW50X2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyYjYzN2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNjLXBheW1lbnQtYmxvY2sge1xuICBtYXJnaW46IDUlIDEwcHggMHB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjN2M3Yzc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZ2FwOiAxMHB4O1xuXG4gIGlucHV0IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xuICB9XG59XG4ucGItZW1haWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBiLXBob25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wYi1lbWFpbF9fdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGItcGhvbmVfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaG93LXBob25lIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzJiNjM3ZTtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDlweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zYy1jb21tZW50LWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zYy1zdWJtaXQge1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjMmI2MzdlO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMjVweCAwcHggMnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNjLXMtd3JwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jX3RfZGVsIHtcbiAgYmFja2dyb3VuZDogIzgwZjc1OTtcbiAgY29sb3I6ICMyMzc5YTI7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB3aWR0aDogOTQlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjODBmNzU5O1xufVxuXG4uY190X3VfZGVsIHtcbiAgYmFja2dyb3VuZDogI2Y1NTY1NjtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB3aWR0aDogOTQlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjZjU1NjU2O1xufVxuIl19 */"],
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