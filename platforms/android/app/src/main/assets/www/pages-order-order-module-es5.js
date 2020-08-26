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
      "./node_modules/@angular/core/fesm2015/core.js");
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
      "./node_modules/@angular/core/fesm2015/core.js");
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


      var angular_feather__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! angular-feather */
      "./node_modules/angular-feather/fesm2015/angular-feather.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      function OrderPage_div_7_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0417\u0430\u0431\u043E\u0440 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_div_16_ion_item_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.order.Cname, " ");
        }
      }

      function OrderPage_div_7_div_3_div_16_ion_item_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0410\u0434\u0440\u0435\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r16.order.Cadress, " ");
        }
      }

      function OrderPage_div_7_div_3_div_16_ion_item_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r17.order.Cphone, " ");
        }
      }

      function OrderPage_div_7_div_3_div_16_ion_item_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r18.order.Cphone_s, " ");
        }
      }

      function OrderPage_div_7_div_3_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_16_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r19.tapBlock();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-card", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, OrderPage_div_7_div_3_div_16_ion_item_6_Template, 5, 1, "ion-item", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OrderPage_div_7_div_3_div_16_ion_item_7_Template, 5, 1, "ion-item", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, OrderPage_div_7_div_3_div_16_ion_item_8_Template, 5, 1, "ion-item", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OrderPage_div_7_div_3_div_16_ion_item_9_Template, 5, 1, "ion-item", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@openClose", ctx_r4.openCompany ? "open" : "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.order.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.order.Cname);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.order.Cadress);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.order.Cphone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.order.Cphone_s);
        }
      }

      function OrderPage_div_7_div_3_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041E\u0442\u0434\u0435\u043B");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.podrazd);
        }
      }

      function OrderPage_div_7_div_3_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0418\u043C\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_button_76_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_button_76_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r21.voiceLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "st_fail": a0,
          "st_done": a1
        };
      };

      function OrderPage_div_7_div_3_div_77_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var good_r24 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r23.g_quants[good_r24.Code]["amount"] == 0, ctx_r23.order.status_id == 6 && ctx_r23.g_quants[good_r24.Code]["amount"] > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](good_r24.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r23.g_quants[good_r24.Code]["amount"], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", good_r24.Price, "\u0440.");
        }
      }

      function OrderPage_div_7_div_3_div_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u0437\u0430\u043A\u0430\u0437\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u041A\u043E\u043B-\u0432\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0426\u0435\u043D\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OrderPage_div_7_div_3_div_77_div_12_Template, 8, 7, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0418\u0442\u043E\u0433\u043E: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.goods);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r9.order.rur, "\u0440.");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "status_active": a0
        };
      };

      function OrderPage_div_7_div_3_div_78_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);

            var status_r35 = ctx.$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r36.selectStatus(status_r35.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r35 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r25.selectedStatus == status_r35.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", status_r35.status, " ");
        }
      }

      function OrderPage_div_7_div_3_div_78_div_3_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_3_div_12_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41);

            var good_r39 = ctx.$implicit;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r40.changeQuant(good_r39.Code, "minus");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i-feather", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_3_div_12_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41);

            var good_r39 = ctx.$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r42.changeQuant(good_r39.Code, "plus");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i-feather", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var good_r39 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r38.g_quants[good_r39.Code]["amount"] == 0, ctx_r38.order.status_id == 6 && ctx_r38.g_quants[good_r39.Code]["amount"] > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](good_r39.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r38.g_quants[good_r39.Code]["amount"], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", good_r39.Price, "\u0440.");
        }
      }

      function OrderPage_div_7_div_3_div_78_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u0437\u0430\u043A\u0430\u0437\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u041A\u043E\u043B-\u0432\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0426\u0435\u043D\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OrderPage_div_7_div_3_div_78_div_3_div_12_Template, 12, 7, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0418\u0442\u043E\u0433\u043E: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r26.goods);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r26.order.rur, "\u0440.");
        }
      }

      function OrderPage_div_7_div_3_div_78_ion_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_ion_button_4_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r43.scanReturned();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u043E\u0437\u0432\u0440\u0430\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_div_78_div_6_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_6_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var reason_r46 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r47.selectReason(reason_r46.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reason_r46 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r45.selectedReason == reason_r46.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", reason_r46.reason, " ");
        }
      }

      function OrderPage_div_7_div_3_div_78_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_div_7_div_3_div_78_div_6_div_3_Template, 2, 4, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r28.reasons);
        }
      }

      function OrderPage_div_7_div_3_div_78_div_7_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 108);
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r49.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function OrderPage_div_7_div_3_div_78_div_7_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_7_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r51.drawBtn(true);
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

      function OrderPage_div_7_div_3_div_78_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_7_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r53.drawBtn(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0414\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_7_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r55.drawBtn(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u041D\u0435\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OrderPage_div_7_div_3_div_78_div_7_img_9_Template, 1, 1, "img", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OrderPage_div_7_div_3_div_78_div_7_button_10_Template, 2, 0, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r29.drawNeedle));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, !ctx_r29.drawNeedle));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r29.imageToShow && ctx_r29.drawNeedle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r29.drawNeedle);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "payment_active": a0
        };
      };

      function OrderPage_div_7_div_3_div_78_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041E\u043F\u043B\u0430\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_8_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r56.selectPayment("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_8_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r58.selectPayment("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u041A\u0430\u0440\u0442\u043E\u0439 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, ctx_r30.selectedPayment == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c3, ctx_r30.selectedPayment == 2));
        }
      }

      function OrderPage_div_7_div_3_div_78_div_9_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_div_78_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email \u043A\u043B\u0438\u0435\u043D\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_div_7_div_3_div_78_div_9_div_1_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r63.email_input = $event;
          })("input", function OrderPage_div_7_div_3_div_78_div_9_div_1_Template_input_input_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r65.emailChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_div_7_div_3_div_78_div_9_div_1_span_4_Template, 2, 0, "span", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r59.email_input);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r59.email_error);
        }
      }

      function OrderPage_div_7_div_3_div_78_div_9_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043A\u043B\u0438\u0435\u043D\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_div_78_div_9_input_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_div_7_div_3_div_78_div_9_input_4_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r66.phone_input = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r61.phone_input);
        }
      }

      function OrderPage_div_7_div_3_div_78_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderPage_div_7_div_3_div_78_div_9_div_1_Template, 5, 2, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_div_7_div_3_div_78_div_9_div_3_Template, 2, 0, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_div_7_div_3_div_78_div_9_input_4_Template, 1, 1, "input", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_div_9_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r68.enterPhone();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041F\u0440\u043E\u0447\u0435\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r31.show_email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r31.showPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r31.showPhone);
        }
      }

      function OrderPage_div_7_div_3_div_78_details_10_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "textarea", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_div_7_div_3_div_78_details_10_div_3_Template_textarea_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r73);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r72.commentText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r70.commentText);
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "st_fail": a0
        };
      };

      function OrderPage_div_7_div_3_div_78_details_10_div_4_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var good_r75 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c4, good_r75.kol_vo == 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](good_r75.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", good_r75.kol_vo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", good_r75.Price, "\u0440.");
        }
      }

      function OrderPage_div_7_div_3_div_78_details_10_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u0437\u0430\u043A\u0430\u0437\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041A\u043E\u043B-\u0432\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0426\u0435\u043D\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OrderPage_div_7_div_3_div_78_details_10_div_4_div_11_Template, 8, 6, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r71.goods);
        }
      }

      function OrderPage_div_7_div_3_div_78_details_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_div_7_div_3_div_78_details_10_div_3_Template, 4, 1, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_div_7_div_3_div_78_details_10_div_4_Template, 12, 1, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r32.selectedStatus == 5 || ctx_r32.selectedStatus == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r32.selectedStatus == 5);
        }
      }

      function OrderPage_div_7_div_3_div_78_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "MM/DD/YYYY");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-datetime", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_div_7_div_3_div_78_div_11_Template_ion_datetime_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r76.new_plan_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("min", ctx_r33.today.toISOString());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r33.tomorrow.toISOString());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r33.new_plan_date);
        }
      }

      function OrderPage_div_7_div_3_div_78_button_13_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_div_78_button_13_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 138);

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

      function OrderPage_div_7_div_3_div_78_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_78_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r80.doneOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderPage_div_7_div_3_div_78_button_13_span_1_Template, 2, 0, "span", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OrderPage_div_7_div_3_div_78_button_13_span_2_Template, 2, 0, "span", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c5, ctx_r34.selectedStatus == 5 || ctx_r34.selectedStatus == 6, ctx_r34.selectedStatus == 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r34.selectedStatus == 5 || ctx_r34.selectedStatus == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r34.selectedStatus == 4);
        }
      }

      function OrderPage_div_7_div_3_div_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OrderPage_div_7_div_3_div_78_div_2_Template, 2, 4, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_div_7_div_3_div_78_div_3_Template, 17, 2, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_div_7_div_3_div_78_ion_button_4_Template, 2, 0, "ion-button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, OrderPage_div_7_div_3_div_78_div_6_Template, 4, 1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OrderPage_div_7_div_3_div_78_div_7_Template, 11, 8, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, OrderPage_div_7_div_3_div_78_div_8_Template, 8, 6, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OrderPage_div_7_div_3_div_78_div_9_Template, 7, 3, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OrderPage_div_7_div_3_div_78_details_10_Template, 5, 2, "details", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OrderPage_div_7_div_3_div_78_div_11_Template, 5, 3, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OrderPage_div_7_div_3_div_78_button_13_Template, 3, 6, "button", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.statuses);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.selectedStatus == 6 || ctx_r10.order.status_id == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.selectedStatus == 6 || ctx_r10.order.status_id == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.selectedStatus == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.selectedStatus == 5 || ctx_r10.selectedStatus == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.selectedStatus == 5 || ctx_r10.selectedStatus == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.pay_access && (ctx_r10.selectedStatus == 5 || ctx_r10.selectedStatus == 6));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.selectedStatus && ctx_r10.selectedStatus !== 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.selectedReason == 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.selectedStatus);
        }
      }

      function OrderPage_div_7_div_3_div_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-spinner", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0417\u0430\u043A\u0430\u0437 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D,");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0438\u0434\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0447\u0435\u043A\u0430, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0437\u0430\u043A\u0430\u0437\u0443 \u043F\u043E\u0437\u0436\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432, \u0435\u0441\u043B\u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0447\u0435\u043A \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_div_80_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_div_80_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r84);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r83.showCheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0447\u0435\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_div_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "qrcode", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OrderPage_div_7_div_3_div_80_button_2_Template, 2, 0, "button", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("qrdata", ctx_r12.barcode)("size", 256)("level", "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.barcode_flag);
        }
      }

      function OrderPage_div_7_div_3_ion_button_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_ion_button_84_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r86);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r85.intentStart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u0430\u0432\u0438\u0433\u0430\u0442\u043E\u0440\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_7_div_3_ion_button_85_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_ion_button_85_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r88);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r87.onMap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c6 = function _c6(a0, a1, a2) {
        return {
          st_process: a0,
          st_done: a1,
          st_fail: a2
        };
      };

      var _c7 = function _c7(a0, a1, a2, a3, a4) {
        return {
          "status_done": a0,
          "status_wait": a1,
          "status_fail": a2,
          "status_none": a3,
          "cl-status-voice": a4
        };
      };

      function OrderPage_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0421\u0442\u0430\u0442\u0443\u0441:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0410\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0410\u0434\u0440\u0435\u0441 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, OrderPage_div_7_div_3_div_16_Template, 10, 6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, OrderPage_div_7_div_3_div_17_Template, 5, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0421\u0443\u043C\u043C\u0430 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0430:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, OrderPage_div_7_div_3_div_27_Template, 3, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, OrderPage_div_7_div_3_div_30_Template, 3, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_Template_div_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r90);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r89.phoneClick("init");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i-feather", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u0412\u0440\u0435\u043C\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u041F\u043E\u0441\u043B\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u0414\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E / \u0412\u0435\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "\u0420\u043E\u0431\u043E\u0442 \u043F\u0440\u043E\u0437\u0432\u043E\u043D:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, OrderPage_div_7_div_3_button_76_Template, 2, 0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, OrderPage_div_7_div_3_div_77_Template, 17, 2, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, OrderPage_div_7_div_3_div_78_Template, 14, 10, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, OrderPage_div_7_div_3_div_79_Template, 7, 0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, OrderPage_div_7_div_3_div_80_Template, 3, 4, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_Template_button_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r90);

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r91.navBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " \u041A \u0441\u043F\u0438\u0441\u043A\u0443 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, OrderPage_div_7_div_3_ion_button_84_Template, 2, 0, "ion-button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, OrderPage_div_7_div_3_ion_button_85_Template, 2, 0, "ion-button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "ion-textarea", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_div_7_div_3_Template_ion_textarea_ngModelChange_87_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r90);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r92.note = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "ion-button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_7_div_3_Template_ion_button_click_88_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r90);

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r93.saveNote();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i-feather", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](28, _c6, ctx_r3.status_id == 1, ctx_r3.status_id == 5 || ctx_r3.status_id == 6, ctx_r3.status_id == 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.getStatus());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.order.company_address);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.order.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.podrazd);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.order.rur, "\u0440.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.order.client_fio);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.order.client_fio);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.order.client_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.order.client_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.timeFrom);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.timeTo);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.amount, "\u0448\u0442. / ", ctx_r3.mass, "\u043A\u0433.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.vlog);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.poruch);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](32, _c7, ctx_r3.client_status_id == 1, ctx_r3.client_status_id == 2, ctx_r3.client_status_id == 3, ctx_r3.client_status_id == 8, ctx_r3.client_status_id == 4));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.client_status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.client_status_dt);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.client_status_id == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.order.status_id == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r3.hide_status || ctx_r3.status_id == 5 || ctx_r3.status_id == 6));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.hide_status && !ctx_r3.barcode_flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.barcode_flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.coords);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.coords);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.note);
        }
      }

      function OrderPage_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OrderPage_div_7_span_2_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_div_7_div_3_Template, 90, 38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.order.SMACode);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.pageInit);
        }
      }

      function OrderPage_div_8_ion_list_3_ion_item_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-radio", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var phone_r98 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", phone_r98);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](phone_r98);
        }
      }

      function OrderPage_div_8_ion_list_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-radio-group", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderPage_div_8_ion_list_3_Template_ion_radio_group_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r99.selectedPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_div_8_ion_list_3_ion_item_5_Template, 4, 2, "ion-item", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r94.selectedPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r94.orderPhones);
        }
      }

      function OrderPage_div_8_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_8_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r102);

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r101.phoneClick("phone");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_8_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_8_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r103.phoneClick("operator");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 ip-\u0448\u043B\u044E\u0437 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function OrderPage_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i-feather", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_div_8_Template_i_feather_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r106);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r105.phoneClick("init");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OrderPage_div_8_ion_list_3_Template, 6, 2, "ion-list", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_div_8_button_4_Template, 2, 0, "button", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_div_8_button_5_Template, 2, 0, "button", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.orderPhones.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.settings.rules.phoneMode == "robotPhone" || ctx_r1.settings.rules.phoneMode == "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.settings.rules.phoneMode == "robotPhone" || ctx_r1.settings.rules.phoneMode == "robot");
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
              _this.clientId = _this.order.client_id;
              _this.client_status = _this.order.client_status;
              _this.client_status_dt = _this.order.client_status_dt;
              _this.client_status_id = _this.order.client_status_id;
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
                  this.courier.changeStatus(this.selectedStatus, this.order.id, undefined, this.selectedReason, null, null, new_plan_date.toLocaleDateString()).subscribe(function (data) {
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

                  _this3.courier.changeStatus(_this3.selectedStatus, _this3.order.id, text, undefined, undefined, _this3.selectedPayment, '', _this3.checkBase64Image, recognizedData).subscribe(function (data) {
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
                  _this3.courier.changeStatus(_this3.selectedStatus, _this3.order.id, undefined, undefined, _this3.g_quants, _this3.selectedPayment, '', _this3.checkBase64Image, recognizedData).subscribe(function (data) {
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
            var browser = this.iab.create(this.order.r_url);
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
          key: "onMap",
          value: function onMap() {
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
                if (order.id.toString() == _this6.order.id) {
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
        decls: 9,
        vars: 3,
        consts: [["slot", "start"], ["class", "o-wrp", 4, "ngIf"], ["class", "call-window", 4, "ngIf"], [1, "o-wrp"], [1, "o-balance"], ["class", "shopTake", 4, "ngIf"], ["class", "o-body", 4, "ngIf"], [1, "shopTake"], [1, "o-body"], [1, "status-row", "o-row", 3, "ngClass"], [1, "sr-title", "o-t"], [1, "sr-status"], [1, "adress-row", "o-row"], [1, "ar-title", "o-t"], [1, "ar-adress"], ["class", "o-row poruch-row podrazd", 3, "click", 4, "ngIf"], ["class", "o-row poruch-row podrazd", 4, "ngIf"], [1, "sum-row", "o-row"], [1, "sum-title", "o-t"], [1, "sum-body"], [1, "contacts-row", "o-row"], [1, "cr-title", "o-t"], [1, "cr-row"], ["class", "cr-name-title", 4, "ngIf"], [1, "cr-name"], [1, "cr-phone-title"], [1, "cr-phone", 3, "click"], ["name", "phone-call"], [1, "time-row", "o-row"], [1, "tr-title", "o-t"], [1, "tr-row"], [1, "tr-from-title"], [1, "cr-from"], [1, "tr-to-title"], [1, "tr-to"], [1, "o-row", "amount-row"], [1, "a-title", "o-t"], [1, "ap", "sum-body"], [1, "o-row", "vlog-row"], [1, "vp-title", "o-t"], [1, "vp", "message-body"], [1, "o-row", "poruch-row"], [1, "pp", "message-body"], [1, "state-row", "o-row"], [1, "state-title", "o-t"], ["src", "../../../assets/bender.png", "alt", "\u0420\u043E\u0431\u043E\u0442", 1, "robot-icon"], [1, "st-status-text"], [1, "st_state", 3, "ngClass"], [1, "st_dt"], ["class", "sc-submit voice-comment", 3, "click", 4, "ngIf"], ["class", "sc-goods-block", 4, "ngIf"], ["class", "sc-row o-row", 4, "ngIf"], ["class", "code-loader", 4, "ngIf"], ["class", "sc-s-wrp", 4, "ngIf"], [1, "sc-s-wrp"], [1, "sc-submit", "show-check", "to-list", 3, "click"], [3, "click", 4, "ngIf"], ["placeholder", "\u0412\u0430\u0448\u0430 \u0437\u0430\u043C\u0435\u0442\u043A\u0430 \u043E \u0437\u0430\u043A\u0430\u0437\u0435", 3, "ngModel", "ngModelChange"], [3, "click"], ["name", "save"], [1, "o-row", "poruch-row", "podrazd", 3, "click"], [1, "pp", "office-body"], ["id", "company-card"], ["class", "ion-activated", 4, "ngIf"], [1, "ion-activated"], [1, "o-row", "poruch-row", "podrazd"], [1, "cr-name-title"], [1, "sc-submit", "voice-comment", 3, "click"], [1, "sc-goods-block"], [1, "goods-row", "o-row"], [1, "gr-title", "o-t"], [1, "gr-goods-list"], [1, "gr-head"], [1, "gr-col"], [4, "ngFor", "ngForOf"], [1, "gr-item", 3, "ngClass"], [1, "gr-col", "gr-name"], [1, "gr-col", "gr-quant"], [1, "gr-col", "gr-price"], [1, "sc-row", "o-row"], [1, "sc-statuses"], ["class", "sc-status", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["expand", "block", "fill", "solid", "shape", "round", 3, "click", 4, "ngIf"], [1, "sc-reasons"], ["class", "sc-resons-block", 4, "ngIf"], ["class", "draw", 4, "ngIf"], ["class", "sc-payment", 4, "ngIf"], ["class", "sc-payment-block o-row", 4, "ngIf"], [4, "ngIf"], ["class", "dt-picker", 4, "ngIf"], ["class", "sc-submit", 3, "ngClass", "click", 4, "ngIf"], [1, "sc-status", 3, "ngClass", "click"], [1, "m-btn", 3, "click"], ["name", "minus-circle"], [1, "p-btn", 3, "click"], ["name", "plus-circle"], ["expand", "block", "fill", "solid", "shape", "round", 3, "click"], [1, "sc-resons-block"], [1, "sc-r-title"], ["class", "sc-reason", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "sc-reason", 3, "ngClass", "click"], [1, "draw"], [1, "asc-row"], [1, "title"], [1, "draw-btns"], [1, "drawBtn", 3, "ngClass", "click"], ["alt", "\u041F\u043E\u0434\u043F\u0438\u0441\u044C", "style", "height: 200px;", 3, "src", 4, "ngIf"], ["class", "drawBtn changeDraw", 3, "click", 4, "ngIf"], ["alt", "\u041F\u043E\u0434\u043F\u0438\u0441\u044C", 2, "height", "200px", 3, "src"], [1, "drawBtn", "changeDraw", 3, "click"], [1, "sc-payment"], [1, "sc-payment__title"], [1, "dc-payment__wrp"], [1, "sc-payment-item", 3, "ngClass", "click"], [1, "sc-payment-block", "o-row"], ["class", "pb-email", 4, "ngIf"], [1, "pb-phone"], ["class", "pb-phone__title", 4, "ngIf"], ["type", "tel", "class", "pb-phone__input", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "show-phone", 3, "click"], [1, "pb-email"], [1, "pb-email__title"], ["type", "email", 1, "pb-email__input", 3, "ngModel", "ngModelChange", "input"], ["class", "email-error", 4, "ngIf"], [1, "email-error"], [1, "pb-phone__title"], ["type", "tel", 1, "pb-phone__input", 3, "ngModel", "ngModelChange"], ["class", "sc-comment-block", 4, "ngIf"], ["class", "goods-row o-row", 4, "ngIf"], [1, "sc-comment-block"], ["cols", "30", "rows", "3", 1, "sc-comment", 3, "ngModel", "ngModelChange"], [1, "dt-picker"], ["position", "floating"], ["displayFormat", "DD/MM/YYYY", 3, "min", "value", "ngModel", "ngModelChange"], [1, "sc-submit", 3, "ngClass", "click"], ["class", "l_btn_del", 4, "ngIf"], ["class", "l_btn_u_del", 4, "ngIf"], [1, "l_btn_del"], [1, "l_btn_u_del"], [1, "code-loader"], [1, "sh-icons"], ["name", "circles"], [1, "await-check"], [1, "qr", 3, "qrdata", "size", "level"], ["class", "sc-submit show-check", 3, "click", 4, "ngIf"], [1, "sc-submit", "show-check", 3, "click"], [1, "call-window"], [1, "cw-body"], ["name", "x-square", "size", "large", 3, "click"], ["class", "cw_phone", 3, "click", 4, "ngIf"], ["class", "cw_operator", 3, "click", 4, "ngIf"], ["name", "selectedPhone", 3, "ngModel", "ngModelChange"], [3, "value"], [1, "cw_phone", 3, "click"], [1, "cw_operator", 3, "click"]],
        template: function OrderPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OrderPage_div_7_Template, 4, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, OrderPage_div_8_Template, 6, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.clientId);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.order);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.callWindow);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], angular_feather__WEBPACK_IMPORTED_MODULE_23__["FeatherComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["DefaultValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["RadioValueAccessor"]],
        styles: [".o-body[_ngcontent-%COMP%] {\n  color: #3c3c3c;\n  height: 100%;\n  margin-bottom: 30px;\n}\n\n.o-row[_ngcontent-%COMP%] {\n  margin: 2% 10px 0 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 25px auto;\n}\n\n.o-t[_ngcontent-%COMP%] {\n  font-weight: bold;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n}\n\n.sr-status[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n}\n\n.ar-adress[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n}\n\n.gr-goods-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-template-rows: repeat(auto-fill, 20px);\n}\n\n.goods-row[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.gr-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n}\n\n.gr-head[_ngcontent-%COMP%]   .gr-col[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n\n.gr-head[_ngcontent-%COMP%]   .gr-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.gr-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n}\n\n.gr-quant[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gr-price[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.status-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.sc-row[_ngcontent-%COMP%] {\n  display: block;\n  box-shadow: 0 0 1px 1px #ff0000;\n  background: #e8f5ff;\n}\n\n.sc-status[_ngcontent-%COMP%] {\n  width: 71%;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  margin: 4px 0;\n  border-radius: 2px;\n  background: #fff;\n}\n\n.sc-statuses[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 5px 5px;\n}\n\n.sc-r-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 7px;\n  text-align: center;\n}\n\n.sc-reason[_ngcontent-%COMP%] {\n  width: 96%;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  margin: 4px 0;\n  border-radius: 2px;\n  background: #fff;\n}\n\n.sc-comment-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.sc-submit[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 60%;\n  margin: 25px 0px 2px 0;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.sc-s-wrp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0px;\n}\n\n.sc-payment[_ngcontent-%COMP%] {\n  margin: 5% 10px 0 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 0px 10px 10px 10px;\n  display: grid;\n  background: #fff;\n}\n\n.sc-payment__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.dc-payment__wrp[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n}\n\n.sc-payment-item[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.payment_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.state-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.state-row[_ngcontent-%COMP%] {\n  margin: 2% 10px 0 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 0px 0px 10px 5px;\n  display: grid;\n  grid-template-columns: 54% 46%;\n  grid-template-rows: 67px auto;\n}\n\n.robot-icon[_ngcontent-%COMP%] {\n  height: 50px;\n  position: absolute;\n  left: -12px;\n}\n\n.st_state[_ngcontent-%COMP%] {\n  padding: 2px 0 8px 0;\n}\n\n.st_dt[_ngcontent-%COMP%] {\n  padding: 2px 0 8px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.order-n[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 0 0px 0 60px;\n}\n\n.status_done[_ngcontent-%COMP%] {\n  color: #33b150;\n}\n\n.status_wait[_ngcontent-%COMP%] {\n  color: #d8d510;\n}\n\n.status_fail[_ngcontent-%COMP%] {\n  color: #d21212;\n}\n\n.st_process[_ngcontent-%COMP%] {\n  background: #fffdc7;\n}\n\n.st_done[_ngcontent-%COMP%] {\n  background: #33b150;\n  color: #fff;\n}\n\n.st_fail[_ngcontent-%COMP%] {\n  background: #d21212;\n  color: #fff;\n}\n\n.status_none[_ngcontent-%COMP%] {\n  color: #71777d;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  margin: 0 auto;\n}\n\n.sum-body[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n  font-size: 23px;\n  font-weight: bold;\n  margin: 5px 0;\n  color: #2b637e;\n}\n\n.sc-payment-block[_ngcontent-%COMP%] {\n  margin: 5% 10px 0px 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 10px 10px 20px 10px;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  background: #fff;\n  gap: 10px;\n}\n\n.sc-payment-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 2px;\n  height: 33px;\n  outline: none;\n  border: none;\n  background: no-repeat;\n}\n\n.pb-email[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pb-phone[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.pb-email__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.pb-phone__title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.status_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.qr[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n\n.message-body[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.office-body[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  text-align: center;\n}\n\n.show-phone[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 60%;\n  margin: 9px auto;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.sh-icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  font-size: 41px;\n  color: #2b637e;\n}\n\n.email-error[_ngcontent-%COMP%] {\n  color: #ff5252;\n  margin: 3px 0 0px 0;\n}\n\n.to-list[_ngcontent-%COMP%] {\n  margin: 14px 0 0 0;\n  background: #2b637e;\n  color: #fff;\n}\n\n.cr-phone[_ngcontent-%COMP%] {\n  padding: 10px 4px;\n  color: #2b637e;\n  width: 157px;\n  margin: 6px 0px 0 0;\n  box-shadow: 0px 0px 0.5px 0.5px #2b637e;\n  font-size: 14px;\n  border-radius: 3px;\n}\n\n.cr-phone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 0 0 7px;\n}\n\n.cl-status-voice[_ngcontent-%COMP%] {\n  color: #552086;\n}\n\n.voice-comment[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  margin: 0 auto;\n}\n\n.c_t_del[_ngcontent-%COMP%] {\n  background: #80f759;\n  color: #2379a2;\n  height: 50px;\n  font-size: 22px;\n  width: 94%;\n  text-transform: uppercase;\n  box-shadow: 0 0 1px 1px #80f759;\n}\n\n.c_t_u_del[_ngcontent-%COMP%] {\n  background: #f55656;\n  color: #fff;\n  height: 50px;\n  font-size: 22px;\n  width: 94%;\n  text-transform: uppercase;\n  box-shadow: 0 0 1px 1px #f55656;\n}\n\n.call-window[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.cw-body[_ngcontent-%COMP%] {\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 5px;\n  position: relative;\n}\n\n.cw-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  height: 44px;\n  width: 80%;\n  box-shadow: 0px 0px 0.5px 0.5px #7cd5ff;\n  border-radius: 3px;\n  margin: 5px 0;\n  text-transform: uppercase;\n}\n\n.far[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  font-size: 19px;\n}\n\n.draw[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 5% 10px 0px 10px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 10px 10px 20px 10px;\n  background: #fff;\n}\n\n.changeDraw[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px #2b637e;\n  height: 38px;\n  width: 75%;\n  margin: 9px auto;\n  border-radius: 3px;\n  font-size: 18px;\n  outline: none;\n  background: #fff;\n}\n\n.asc-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.draw-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n}\n\n.drawBtn[_ngcontent-%COMP%] {\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px auto;\n  width: 72%;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  height: 33px;\n  background: #fff;\n}\n\n.draw_btn_active[_ngcontent-%COMP%] {\n  background: #2b637e;\n  color: #fff;\n}\n\n.await-check[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5vw;\n  text-align: center;\n}\n\ndetails[_ngcontent-%COMP%] {\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  padding: .5em .5em 0;\n  margin-top: 5px;\n  background: white;\n}\n\nsummary[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: -.5em -.5em 0;\n  padding: .5em;\n}\n\ndetails[open][_ngcontent-%COMP%] {\n  padding: .5em;\n}\n\ndetails[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #aaa;\n  margin-bottom: .5em;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #2b637e;\n  color: white;\n  text-align: center;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 0px;\n}\n\n.sc-goods-block[_ngcontent-%COMP%]   .goods-row[_ngcontent-%COMP%]   .gr-item[_ngcontent-%COMP%] {\n  grid-template-columns: 40% 30% 30%;\n}\n\n#company-card[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n#company-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQ2pDOztBQUVBO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLDJDQUEyQztBQUMvQzs7QUFFQTtFQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLGFBQWE7RUFDYixrQ0FBa0M7QUFDdEM7O0FBSEE7RUFLUSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBRXhCOztBQVJBO0VBU1ksZ0JBQWdCO0FBRzVCOztBQUVBO0VBQ0ksYUFBYTtFQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtFQUNJLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtFQUNJLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7QUFDZjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUNqQzs7QUFFQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNmOztBQUVBO0VBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0VBQ0ksb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ0ksY0FBYztBQUNsQjs7QUFFQTtFQUNJLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSxjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7QUFDZjs7QUFFQTtFQUNJLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztBQUNsQjs7QUFFQTtFQUNJLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ2I7O0FBWkE7RUFjUSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtBQUU3Qjs7QUFFQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7QUFDZjs7QUFFQTtFQUNJLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksY0FBYztFQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztBQUNmOztBQUVBO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3RCOztBQVJBO0VBVVEsZUFBZTtFQUNmLGlCQUFpQjtBQUV6Qjs7QUFFQTtFQUNJLGNBQXVCO0FBQzNCOztBQUVBO0VBQ0ksb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsK0JBQStCO0FBQ25DOztBQUVBO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsK0JBQStCO0FBQ25DOztBQUVBO0VBQ0ksZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3RCOztBQVRBO0VBV1EsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0FBRWpDOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsZUFBZTtBQUNuQjs7QUFFQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDSSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBRVEsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUExQjs7QUFJQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixZQUFZO0FBRGhCOztBQUlBO0VBQ0ksYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBRHBCOztBQUlBO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7QUFEZjs7QUFJQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBRHRCOztBQUlBO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtBQURyQjs7QUFJQTtFQUNJLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsYUFBYTtBQURqQjs7QUFJQTtFQUNJLGFBQWE7QUFEakI7O0FBQUE7RUFJUSw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQTNCOztBQUlBO0VBQ0kscUJBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBRHRCOztBQUlBO0VBRVEsWUFBWTtFQUNaLFdBQVc7QUFGbkI7O0FBREE7RUFNWSxrQ0FBa0M7QUFEOUM7O0FBTUE7RUFDSSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBSHRCOztBQUNBO0VBS1EsaUJBQWlCO0FBRnpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm8tYm9keSB7XG4gICAgY29sb3I6ICMzYzNjM2M7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5vLXJvdyB7XG4gICAgbWFyZ2luOiAyJSAxMHB4IDAgMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IGF1dG87XG59XG5cbi5vLXQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zci1zdGF0dXMge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hci1hZHJlc3Mge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nci1nb29kcy1saXN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDIwcHgpO1xufVxuXG4uZ29vZHMtcm93IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZ3ItaGVhZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSAyNSUgMjUlO1xuXG4gICAgLmdyLWNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZ3ItaXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSAyNSUgMjUlO1xufVxuXG4uZ3ItcXVhbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nci1wcmljZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdHVzLXJvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2Mtcm93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjZmYwMDAwO1xuICAgIGJhY2tncm91bmQ6ICNlOGY1ZmY7XG59XG5cbi5zYy1zdGF0dXMge1xuICAgIHdpZHRoOiA3MSU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zYy1zdGF0dXNlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHggNXB4O1xufVxuXG4uc2Mtci10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjLXJlYXNvbiB7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjN2M3Yzc7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnNjLWNvbW1lbnQtYmxvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNjLXN1Ym1pdCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzJiNjM3ZTtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDI1cHggMHB4IDJweCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uc2Mtcy13cnAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnNjLXBheW1lbnQge1xuICAgIG1hcmdpbjogNSUgMTBweCAwIDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uc2MtcGF5bWVudF9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRjLXBheW1lbnRfX3dycCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogOXB4IGF1dG87XG4gICAgd2lkdGg6IDcyJTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG5cbi5zYy1wYXltZW50LWl0ZW0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnBheW1lbnRfYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmI2MzdlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc3RhdGUtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0YXRlLXJvdyB7XG4gICAgbWFyZ2luOiAyJSAxMHB4IDAgMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggNXB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1NCUgNDYlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjdweCBhdXRvO1xufVxuXG4ucm9ib3QtaWNvbiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTJweDtcbn1cblxuLnN0X3N0YXRlIHtcbiAgICBwYWRkaW5nOiAycHggMCA4cHggMDtcbn1cblxuLnN0X2R0IHtcbiAgICBwYWRkaW5nOiAycHggMCA4cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmRlci1uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMHB4IDAgNjBweDtcbn1cblxuLnN0YXR1c19kb25lIHtcbiAgICBjb2xvcjogIzMzYjE1MDtcbn1cblxuLnN0YXR1c193YWl0IHtcbiAgICBjb2xvcjogI2Q4ZDUxMDtcbn1cblxuLnN0YXR1c19mYWlsIHtcbiAgICBjb2xvcjogI2QyMTIxMjtcbn1cblxuLnN0X3Byb2Nlc3Mge1xuICAgIGJhY2tncm91bmQ6ICNmZmZkYzc7XG59XG5cbi5zdF9kb25lIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzNiMTUwO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc3RfZmFpbCB7XG4gICAgYmFja2dyb3VuZDogI2QyMTIxMjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnN0YXR1c19ub25lIHtcbiAgICBjb2xvcjogIzcxNzc3ZDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdW0tYm9keSB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBjb2xvcjogIzJiNjM3ZTtcbn1cblxuLnNjLXBheW1lbnQtYmxvY2sge1xuICAgIG1hcmdpbjogNSUgMTBweCAwcHggMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGdhcDogMTBweDtcblxuICAgIGlucHV0IHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xuICAgIH1cbn1cblxuLnBiLWVtYWlsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBiLXBob25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBiLWVtYWlsX190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGItcGhvbmVfX3RpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0dXNfYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmI2MzdlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ucXIge1xuICAgIG1hcmdpbjogMTZweCAwO1xufVxuXG4ubWVzc2FnZS1ib2R5IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG5cbi5vZmZpY2UtYm9keSB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNob3ctcGhvbmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICMyYjYzN2U7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiA5cHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnNoLWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDQxcHg7XG4gICAgY29sb3I6ICMyYjYzN2U7XG59XG5cbi5lbWFpbC1lcnJvciB7XG4gICAgY29sb3I6ICNmZjUyNTI7XG4gICAgbWFyZ2luOiAzcHggMCAwcHggMDtcbn1cblxuLnRvLWxpc3Qge1xuICAgIG1hcmdpbjogMTRweCAwIDAgMDtcbiAgICBiYWNrZ3JvdW5kOiAjMmI2MzdlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY3ItcGhvbmUge1xuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xuICAgIGNvbG9yOiAjMmI2MzdlO1xuICAgIHdpZHRoOiAxNTdweDtcbiAgICBtYXJnaW46IDZweCAwcHggMCAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMC41cHggMC41cHggIzJiNjM3ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCA3cHg7XG4gICAgfVxufVxuXG4uY2wtc3RhdHVzLXZvaWNlIHtcbiAgICBjb2xvcjogcmdiKDg1LCAzMiwgMTM0KTtcbn1cblxuLnZvaWNlLWNvbW1lbnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNfdF9kZWwge1xuICAgIGJhY2tncm91bmQ6ICM4MGY3NTk7XG4gICAgY29sb3I6ICMyMzc5YTI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB3aWR0aDogOTQlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzgwZjc1OTtcbn1cblxuLmNfdF91X2RlbCB7XG4gICAgYmFja2dyb3VuZDogI2Y1NTY1NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHdpZHRoOiA5NCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjZjU1NjU2O1xufVxuXG4uY2FsbC13aW5kb3cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmN3LWJvZHkge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDAuNXB4IDAuNXB4ICM3Y2Q1ZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG5cbi5mYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmRyYXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNSUgMTBweCAwcHggMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jaGFuZ2VEcmF3IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjMmI2MzdlO1xuICAgIGhlaWdodDogMzhweDtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogOXB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5hc2Mtcm93IHtcbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmRyYXctYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogOXB4IGF1dG87XG4gICAgd2lkdGg6IDcyJTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzdjN2M3O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG5cbi5kcmF3QnRuIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDlweCBhdXRvO1xuICAgIHdpZHRoOiA3MiU7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2M3YzdjNztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kcmF3X2J0bl9hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMyYjYzN2U7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5hd2FpdC1jaGVjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGV0YWlscyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogLjVlbSAuNWVtIDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5zdW1tYXJ5IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IC0uNWVtIC0uNWVtIDA7XG4gICAgcGFkZGluZzogLjVlbTtcbn1cblxuZGV0YWlsc1tvcGVuXSB7XG4gICAgcGFkZGluZzogLjVlbTtcblxuICAgIHN1bW1hcnkge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyYjYzN2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjLWdvb2RzLWJsb2NrIHtcbiAgICAuZ29vZHMtcm93IHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW46IDBweDtcblxuICAgICAgICAuZ3ItaXRlbSB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAzMCUgMzAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jY29tcGFueS1jYXJkIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG5cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn0iXX0= */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '264px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '70px'
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
              height: '70px'
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