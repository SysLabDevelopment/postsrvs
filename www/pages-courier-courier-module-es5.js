(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-courier-courier-module"], {
    /***/
    "./src/app/pages/courier/courier.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/courier/courier.module.ts ***!
      \*************************************************/

    /*! exports provided: CourierPageModule */

    /***/
    function srcAppPagesCourierCourierModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourierPageModule", function () {
        return CourierPageModule;
      });
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/locales/ru */
      "./node_modules/@angular/common/locales/ru.js");
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _icons_icons_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../icons/icons.module */
      "./src/app/icons/icons.module.ts");
      /* harmony import */


      var _courier_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./courier.page */
      "./src/app/pages/courier/courier.page.ts");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3___default.a, 'ru');
      var routes = [{
        path: '',
        component: _courier_page__WEBPACK_IMPORTED_MODULE_9__["CourierPage"]
      }];

      var CourierPageModule = function CourierPageModule() {
        _classCallCheck(this, CourierPageModule);
      };

      CourierPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: CourierPageModule
      });
      CourierPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function CourierPageModule_Factory(t) {
          return new (t || CourierPageModule)();
        },
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"],
          useFactory: function useFactory() {
            return 'ru';
          }
        }],
        imports: [[_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CourierPageModule, {
          declarations: [_courier_page__WEBPACK_IMPORTED_MODULE_9__["CourierPage"]],
          imports: [_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CourierPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            declarations: [_courier_page__WEBPACK_IMPORTED_MODULE_9__["CourierPage"]],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"],
              useFactory: function useFactory() {
                return 'ru';
              }
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/courier/courier.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/courier/courier.page.ts ***!
      \***********************************************/

    /*! exports provided: CourierPage */

    /***/
    function srcAppPagesCourierCourierPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourierPage", function () {
        return CourierPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/fesm2015/animations.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/fesm2015/drag-drop.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/ngx/index.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/ngx/index.js");
      /* harmony import */


      var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/vibration/ngx */
      "./node_modules/@ionic-native/vibration/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/sys/map.service */
      "./src/app/services/sys/map.service.ts");
      /* harmony import */


      var src_app_services_sys_order_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/sys/order.service */
      "./src/app/services/sys/order.service.ts");
      /* harmony import */


      var _components_help_help_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../components/help/help.component */
      "./src/app/components/help/help.component.ts");
      /* harmony import */


      var _components_note_note_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../components/note/note.component */
      "./src/app/components/note/note.component.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_courier_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/courier.service */
      "./src/app/services/courier.service.ts");
      /* harmony import */


      var _services_settings_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../services/settings.service */
      "./src/app/services/settings.service.ts");
      /* harmony import */


      var _services_state_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../services/state.service */
      "./src/app/services/state.service.ts");
      /* harmony import */


      var _services_sys_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../services/sys.service */
      "./src/app/services/sys.service.ts");
      /* harmony import */


      var _services_sys_data_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../services/sys/data.service */
      "./src/app/services/sys/data.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! angular-feather */
      "./node_modules/angular-feather/fesm2015/angular-feather.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");

      var _c0 = ["sInput"];

      function CourierPage_ion_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "G");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_ion_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_ion_button_13_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r13.submitOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i-feather", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_ion_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_ion_button_14_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r15.endWork();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i-feather", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_ion_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_ion_button_19_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r17.getScanData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u041F\u0440\u0438\u0435\u043C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_div_30_ion_item_3_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("c ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, order_r20.datetime_from, "H:mm", "ru"), " ");
        }
      }

      function CourierPage_div_30_ion_item_3_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0434\u043E ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, order_r20.datetime_to, "H:mm", "ru"), "");
        }
      }

      function CourierPage_div_30_ion_item_3_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_30_ion_item_3_div_15_Template_ion_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);

            var order_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            ctx_r26.note($event, order_r20.id);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u0417\u0430\u043C\u0435\u0442\u043A\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_30_ion_item_3_div_15_Template_ion_button_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);

            var order_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            ctx_r29.showRoute(order_r20);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-icon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u041C\u0430\u0440\u0448\u0440\u0443\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_30_ion_item_3_div_15_Template_ion_button_click_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);

            var order_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            ctx_r31.phoneClick("init", order_r20);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ion-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          overdue: a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          turned: a0
        };
      };

      function CourierPage_div_30_ion_item_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_30_ion_item_3_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var order_r20 = ctx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r33.selectOrder(order_r20.id);
          })("longPress", function CourierPage_div_30_ion_item_3_Template_ion_item_longPress_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r35.vibr();
          })("hold", function CourierPage_div_30_ion_item_3_Template_ion_item_hold_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r36.vibr();
          })("cdkDragStarted", function CourierPage_div_30_ion_item_3_Template_ion_item_cdkDragStarted_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r37.vibr();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CourierPage_div_30_ion_item_3_span_9_Template, 3, 5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CourierPage_div_30_ion_item_3_span_10_Template, 3, 5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CourierPage_div_30_ion_item_3_div_15_Template, 10, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ion-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_30_ion_item_3_Template_div_click_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var order_r20 = ctx.$implicit;
            order_r20.show = !order_r20.show;
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r20 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, (order_r20.overdue == "1" || order_r20.required == true) && order_r20.status_id == 1))("cdkDragStartDelay", 500)("cdkDragDisabled", ctx_r19.noDrag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@openClose", order_r20.show ? "open" : "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", order_r20.client_id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", order_r20.company, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r20.datetime_from);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r20.datetime_to);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r20.client_fio);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r20.client_address);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r20.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c2, order_r20.show == true));
        }
      }

      function CourierPage_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-searchbar", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function CourierPage_div_30_Template_ion_searchbar_ionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r39.onSearchChange($event);
          })("ngModelChange", function CourierPage_div_30_Template_ion_searchbar_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r41.searchString = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function CourierPage_div_30_Template_cdk_virtual_scroll_viewport_cdkDropListDropped_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r42.drop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CourierPage_div_30_ion_item_3_Template, 19, 16, "ion-item", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("debounce", 250)("ngModel", ctx_r4.searchString);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, ctx_r4.orders_c));
        }
      }

      function CourierPage_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.courier.sortOrders == null ? null : ctx_r5.courier.sortOrders.g_process, " ");
        }
      }

      function CourierPage_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u041D\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.courier.sortOrders.g_fail);
        }
      }

      function CourierPage_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.courier.sortOrders.g_done, " ");
        }
      }

      function CourierPage_div_40_ion_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_40_ion_button_1_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r45.auth.check("In");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041F\u0440\u0438\u0435\u0445\u0430\u043B \u043D\u0430 \u0441\u043A\u043B\u0430\u0434 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_div_40_ion_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_40_ion_button_2_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r47.auth.check("Out");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u0423\u0435\u0445\u0430\u043B \u0441\u043E \u0441\u043A\u043B\u0430\u0434\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CourierPage_div_40_ion_button_1_Template, 2, 0, "ion-button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CourierPage_div_40_ion_button_2_Template, 2, 0, "ion-button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.auth.checkState == "checkedundefined");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.auth.checkState == "checkedIn");
        }
      }

      function CourierPage_div_41_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_41_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r52.startRoute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041D\u0430\u0447\u0430\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_div_41_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_41_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r54.stopRoute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_div_41_button_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_div_41_button_3_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0420\u0443\u0447\u043D\u043E\u0439 \u0440\u0435\u0436\u0438\u043C");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "manual_btn": a0
        };
      };

      function CourierPage_div_41_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_41_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r58.manualRoute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CourierPage_div_41_button_3_span_1_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CourierPage_div_41_button_3_span_2_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c3, ctx_r51.state$.manual_route));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r51.state$.manual_route);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r51.state$.manual_route);
        }
      }

      function CourierPage_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CourierPage_div_41_button_1_Template, 2, 0, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CourierPage_div_41_button_2_Template, 2, 0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CourierPage_div_41_button_3_Template, 3, 5, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r9.btn_go && !ctx_r9.state$.manual_route && ctx_r9.auth.routingModeAuto);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.btn_go && !ctx_r9.state$.manual_route);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.auth.getMode() == "auto" || ctx_r9.auth.getMode() == "auto_wo");
        }
      }

      function CourierPage_div_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u041F\u0440\u043E\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u0448\u0442\u0440\u0438\u0445\u043A\u043E\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 65, 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CourierPage_div_42_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r61.scanInputChange();
          })("ngModelChange", function CourierPage_div_42_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r63.scanInput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r10.scanInput);
        }
      }

      function CourierPage_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_div_44_ion_list_3_ion_item_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-radio", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var phone_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", phone_r68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](phone_r68);
        }
      }

      function CourierPage_div_44_ion_list_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-radio-group", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CourierPage_div_44_ion_list_3_Template_ion_radio_group_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r69.selectedPhone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CourierPage_div_44_ion_list_3_ion_item_5_Template, 4, 2, "ion-item", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r64.selectedPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r64.orderPhones);
        }
      }

      function CourierPage_div_44_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_44_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r71.phoneClick("phone", ctx_r71.order);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0441\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_div_44_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_44_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r73.phoneClick("operator", ctx_r73.order);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 ip-\u0448\u043B\u044E\u0437 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CourierPage_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "i-feather", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_div_44_Template_i_feather_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r76);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r75.callWindow = !ctx_r75.callWindow;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CourierPage_div_44_ion_list_3_Template, 6, 2, "ion-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CourierPage_div_44_button_4_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CourierPage_div_44_button_5_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.orderPhones.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.settings.rules.phoneMode == "robotPhone" || ctx_r12.settings.rules.phoneMode == "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.settings.rules.phoneMode == "robotPhone" || ctx_r12.settings.rules.phoneMode == "robot");
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "m_wrp": a0
        };
      };

      var _c5 = function _c5() {
        return [];
      };

      var CourierPage = /*#__PURE__*/function () {
        function CourierPage(courier, router, state$, auth, bs, vbr, settings, sys, data, popoverController, map, orderService, CL, network, http) {
          _classCallCheck(this, CourierPage);

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
          this.orderService = orderService;
          this.CL = CL;
          this.network = network;
          this.http = http;
          this.orders = null;
          this.statuses = null;
          this.selectedTab = 1;
          this.ordersInit = false;
          this.loader = false;
          this.local_stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
          this.localcheck = false;
          this.g_done = 0;
          this.g_process = 0;
          this.g_fail = 0;
          this.lvl_ind = {
            width: '0%'
          };
          this.btn_go = false;
          this.subBtnCond = true;
          this.scanView = false;
          this.scan_process = false;
          this.find_order = false;
          this.isWorkEnded = false;
          this.searchString = '';
          this.slicer = this.howSlice();
          this.callWindow = false;
          this.noDrag = false;
          this.segment = [1];
          var self = this;
          this.initContent();

          if (this.state$.position.getValue() != null) {
            this.startRoute(false);
          }

          this.state$.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.local_stop$)).subscribe(function (state) {
            var a = state;

            if (state == 'orders_init') {
              self.initContent();
            }
          });
          this.initConditions();
          this.ord = this.data.orders.asObservable();
          this.prepareOrdersList();
        }

        _createClass(CourierPage, [{
          key: "initConditions",
          value: function initConditions() {
            var app_mode = this.auth.getMode();

            switch (app_mode) {
              case 'fullAuto':
                if (!this.state$.confirmed) {
                  this.subBtnCond = true;
                }

                break;

              case 'auto':
                this.subBtnCond = false;
                break;

              case 'fullHand':
                if (!this.state$.confirmed) {
                  this.subBtnCond = true;
                }

                break;

              case 'hand':
                this.subBtnCond = false;
                break;
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this = this;

            this.Drop_L.autoScrollDisabled = false;
            this.DragItems.changes.subscribe(function (r) {
              _this.DragItems.forEach(function (DragItem) {
                DragItem.dragStartDelay = {
                  touch: 500,
                  mouse: 100
                };
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.settings.checkout = !!(this.settings.rules.storeCheckMode - 0);

            if (!this.settings.checkout) {
              this.auth.checkState = 'checkedOut';
            } else {
              this.auth.checkState = 'checked' + localStorage.check;
            }

            if (this.settings.rules.appMode == 'hand') {
              this.state$.manual_route = true;
            }

            if (this.settings.rules.appMode.toLowerCase().includes('auto')) {
              this.noDrag = true;
            }

            this.data.orders.subscribe(function (orders) {
              _this2.courier.count_orders(orders);
            });
          }
        }, {
          key: "scanInputStart",
          value: function scanInputStart() {
            var self = this;
            this.scanView = !this.scanView;
            this.loader = true;

            if (this.auth.getScanMode() == 'scan') {
              self.courier.findOrder(this.scanInput).subscribe(function (res) {
                self.scanInput = null;

                if (res.success == 'true') {
                  self.courier.sumbitOrder(res.order_id).subscribe(function (re_s) {
                    console.log('courier_page sbo resp', re_s);

                    if (re_s) {
                      self.submitOrder();
                    } else {
                      self.scanView = false;
                    }

                    self.loader = false;
                  });
                } else {
                  self.auth.showError(2);
                  self.loader = false;
                  self.scanView = false;
                }

                self.state$.confirmed = true;
                self.orders.forEach(function (order) {
                  if (order.confirm == '0') {
                    self.state$.confirmed = false;
                  }
                });
              });
            } else {
              self.loader = false;
            }

            this.scan_process = false;
          }
        }, {
          key: "scanInputChange",
          value: function scanInputChange() {
            console.log('inputData', this.scanInput);
            var self = this;

            if (this.scan_process) {
              return false;
            }

            this.scan_process = true;

            if (this.find_order) {
              setTimeout(function () {
                self.scanSearch();
              }, 1500);
            } else {
              setTimeout(function () {
                self.scanInputStart();
              }, 1500);
            }
          }
        }, {
          key: "submitOrder",
          value: function submitOrder() {
            var self = this;
            console.log('SUBMIT_ORDER_CALL');

            if (this.auth.getScanMode() == 'scan') {
              this.scanView = !this.scanView;
              setTimeout(function () {
                self.sInput.nativeElement.focus();
              }, 500);
              return false;
            }

            this.bs.scan().then(function (data) {
              if (data.text != '') {
                self.loader = true;
                self.courier.findOrder(data.text).subscribe(function (res) {
                  if (res.success == 'true') {
                    self.courier.sumbitOrder(res.order_id).subscribe(function (re_s) {
                      if (re_s) {
                        self.submitOrder();
                      }

                      self.loader = false;
                    });
                  } else {
                    self.auth.showError(2);
                    self.loader = false;
                  }

                  self.state$.confirmed = true;
                  self.orders.forEach(function (order) {
                    if (order.confirm == '0') {
                      self.state$.confirmed = false;
                    }
                  });
                });
              } else {
                self.loader = false;
              }
            });
          }
        }, {
          key: "ordersListChanged",
          value: function ordersListChanged(orders) {
            this.orders = orders;
            var way = new Array();
            orders.forEach(function (order) {
              if (Number(order.status_id) == 1) {
                way.push(order.id);
              }
            });
            this.state$.old_way = way;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.local_stop$.next(null);
            this.state$.orders_page_check = false;
          }
        }, {
          key: "manualRoute",
          value: function manualRoute() {
            if (this.state$.manual_route) {
              this.courier.changeRouteMode('auto');
            } else {
              this.courier.changeRouteMode('fullHand');
            }

            this.vbr.vibrate(300);
          }
        }, {
          key: "initContent",
          value: function initContent() {
            var _this3 = this;

            var self = this;
            this.state$.orders.subscribe(function () {
              _this3.orders = _this3.state$.orders_data;
              console.log('sys::initСontent orders', _this3.orders);
              _this3.statuses = [{
                id: 4,
                status: 'Не доставлено'
              }, {
                id: 5,
                status: 'Доставлено'
              }, {
                id: 6,
                status: 'Частично доставлено'
              }];
              _this3.ordersInit = true;
              self.count_orders();
            });
          }
        }, {
          key: "getStatus",
          value: function getStatus(order) {
            return this.courier.getStatus(order);
          }
        }, {
          key: "selectOrder",
          value: function selectOrder(id) {
            this.router.navigate(['/order', id]);
          }
        }, {
          key: "tabSelect",
          value: function tabSelect(tab) {
            this.selectedTab = tab;
          }
        }, {
          key: "customTrackBy",
          value: function customTrackBy(index, obj) {
            return index;
          }
        }, {
          key: "getCondition",
          value: function getCondition(status) {
            switch (this.selectedTab) {
              case 1:
                if (status == 1) {
                  return true;
                }

                break;

              case 2:
                if (status == 5 || status == 6) {
                  return true;
                }

                break;

              case 3:
                if (status == 4) {
                  return true;
                }

                break;
            }

            return false;
          }
        }, {
          key: "count_orders",
          value: function count_orders() {
            var orders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.courier.ordersInfo;
            var g_done = 0;
            var g_process = 0;
            var g_fail = 0;

            for (var i = 0; i < orders.length; i++) {
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
        }, {
          key: "startRoute",
          value: function startRoute() {
            var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var self = this;
            this.auth.checkAuth().subscribe(function (data) {
              if (data.success == 'true') {
                self.sendStartRoute(data.sync_id, start, stop);
              }
            });
          }
        }, {
          key: "stopRoute",
          value: function stopRoute() {
            this.startRoute(false, true);
          }
        }, {
          key: "sendStartRoute",
          value: function sendStartRoute(cid, start, stop) {
            var url = 'geo/route_start.php';
            var data = {
              cid: cid,
              lt: this.state$.position.getValue().lt,
              lg: this.state$.position.getValue().lg,
              start: '',
              stop: ''
            };

            if (start) {
              data.start = '1';
            }

            if (stop) {
              data.stop = '1';
            }

            var self = this;
            this.auth.sendPost(url, data).subscribe(function (data) {
              if (data.success == true) {
                self.btn_go = true;

                if (data.result == 'stop') {
                  self.btn_go = false;
                }
              }
            });
          }
        }, {
          key: "scanSearch",
          value: function scanSearch() {
            var self = this;
            this.scanView = !this.scanView;
            this.loader = true;

            if (this.auth.getScanMode() == 'scan') {
              self.courier.findOrder(this.scanInput).subscribe(function (res) {
                self.scanInput = null;

                if (res.success == 'true') {
                  self.selectOrder(res.order_id);
                } else {
                  self.auth.showError(2);
                }

                self.loader = false;
                self.scanView = false;
              });
            } else {
              self.loader = false;
            }

            this.scan_process = false;
            this.find_order = false;
          }
        }, {
          key: "findOrder",
          value: function findOrder() {
            var self = this;

            if (this.auth.getScanMode() == 'scan') {
              this.scanView = !this.scanView;
              this.find_order = true;
              setTimeout(function () {
                self.sInput.nativeElement.focus();
              }, 500);
              return false;
            }

            this.bs.scan().then(function (data) {
              self.courier.findOrder(data.text).subscribe(function (res) {
                if (res.success == 'true') {
                  self.selectOrder(res.order_id);
                } else {
                  self.auth.showError(2);
                }
              });
            });
          } // Завершение рабочего дня курьера

        }, {
          key: "endWork",
          value: function endWork() {
            var _this4 = this;

            this.courier.endWork().subscribe(function (data) {
              if (data.success) {
                _this4.isWorkEnded = true;

                _this4.sys.presentToast('Рабочий день завершен', 'success');
              }
            }, function (error) {
              _this4.sys.presentToast('Ошибка: ' + error.message, 'danger');
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh() {
            this.data.getApiData();
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {
            var ids = [Number(event.target.value)];

            if (event.target.value == '5') {
              ids.push(6);
            }

            this.segment = ids;
            this.prepareOrdersList(ids);
          }
        }, {
          key: "onSearchChange",
          value: function onSearchChange(event) {
            this.searchString = event.target.value;
            this.prepareOrdersList(this.segment);
          }
        }, {
          key: "prepareOrdersList",
          value: function prepareOrdersList() {
            var _this5 = this;

            var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.segment;
            this.orders_c = this.ord.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (orders) {
              return orders && orders.filter(function (order) {
                return ids.includes(Number(order.status_id));
              }).filter(function (order) {
                return order.client_address.toLowerCase().includes(_this5.searchString.toLowerCase()) || order.client_fio.toLowerCase().includes(_this5.searchString.toLowerCase()) || order.client_id.toLowerCase().includes(_this5.searchString.toLowerCase());
              }).slice(_this5.slicer);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (orders) {
              orders.forEach(function (order) {
                order.show = false;
              });
              _this5.orders = orders;
              return orders;
            }));
          }
        }, {
          key: "howSlice",
          value: function howSlice() {
            return this.settings.rules.typeRoute === 'standart' ? 0 : 1;
          }
        }, {
          key: "popoverHelp",
          value: function popoverHelp(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_14__["HelpComponent"],
                        event: ev,
                        translucent: true,
                        cssClass: 'help'
                      });

                    case 2:
                      popover = _context.sent;
                      return _context.abrupt("return", popover);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showHelp",
          value: function showHelp(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.popoverHelp(ev);

                    case 2:
                      popover = _context2.sent;
                      popover.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "showRoute",
          value: function showRoute(order) {
            this.map.showRoute(order);
          }
        }, {
          key: "drop",
          value: function drop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.orders, event.previousIndex, event.currentIndex);
            this.data.rewriteOrders(this.orders);
            console.log('sys:: массив заказов после перетаскивания: ', this.orders);
          }
        }, {
          key: "popoverNote",
          value: function popoverNote(ev, orderId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var popover;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.popoverController.create({
                        component: _components_note_note_component__WEBPACK_IMPORTED_MODULE_15__["NoteComponent"],
                        event: ev,
                        translucent: true,
                        cssClass: 'help',
                        componentProps: {
                          orderId: orderId
                        }
                      });

                    case 2:
                      popover = _context3.sent;
                      return _context3.abrupt("return", popover);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "note",
          value: function note(ev, orderId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverNote(ev, orderId);

                    case 2:
                      popover = _context4.sent;
                      popover.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // Звонок получателю заказа

        }, {
          key: "phoneClick",
          value: function phoneClick(action, order) {
            this.order = order;
            this.orderPhones = this.parsePhone(order.client_phone);
            var courierPhone = this.parsePhone(order.courier_phone)[0];

            if (this.orderPhones.length == 1) {
              this.selectedPhone = this.orderPhones[0];
            }

            switch (action) {
              case 'init':
                this.callWindow = !this.callWindow;
                break;

              case 'phone':
                this.CL.callNumber(this.selectedPhone, false).then(function () {});
                this.callWindow = false;
                this.order = undefined;
                break;

              case 'operator':
                if (this.network.type == 'none') {
                  this.phoneClick('phone', order);
                  return false;
                }

                if (this.selectedPhone && courierPhone) {
                  var url = 'orders';
                  var data = {
                    action: 'send_phone',
                    client_number: this.selectedPhone,
                    cur_number: courierPhone
                  };
                  this.auth.sendPost(url, data).subscribe(function (resp) {
                    console.log('call_subs', resp);
                  });
                  this.auth.showError(9);
                  this.callWindow = false;
                }

                this.order = undefined;
                break;
            }
          } // Парсинг номера телефона из строки с лишним мусором

        }, {
          key: "parsePhone",
          value: function parsePhone(phone) {
            var phones = [];
            phone = phone.replace(/\D+/g, '');

            while (phone.length > 7) {
              phone = this.normalizePhoneNumber(phone);
              phones.push(phone.slice(null, 11));
              phone = phone.slice(11);
            }

            return phones;
          } // Жонглирование '8' / '+7'

        }, {
          key: "normalizePhoneNumber",
          value: function normalizePhoneNumber(phone) {
            if (phone[0] !== '8' && phone[0] !== '7' && phone.length !== 11) {
              phone = '8' + phone;
            }

            if (phone.length == 7 || phone.length == 10) {
              phone = '8' + phone;
            }

            if (phone[0] !== '8' && phone.length == 11) {
              phone = '8' + phone.slice(1);
            }

            return phone;
          }
        }, {
          key: "vibr",
          value: function vibr($event) {
            this.vbr.vibrate(10);
            console.log('sys:: *Вибирация*');
          }
        }, {
          key: "getScanData",
          value: function getScanData() {
            var _this6 = this;

            this.bs.scan().then(function (data) {
              console.log("sys:: \u0434\u0430\u043D\u043D\u044B\u0435 \u0448\u0442\u0440\u0438\u0445\u043A\u043E\u0434\u0430: ".concat(data.text));
              var url = _this6.sys.proxy + 'https://mobile.postsrvs.ru/getScanPVZ.php';
              var reqData = {
                type: "scanOrder",
                uuid: _this6.auth.getUuid(),
                courieriId: _this6.auth.getUserId(),
                clientId: data.text
              };

              _this6.http.post(url, reqData).subscribe(function (resp) {
                var color = 'success';

                if (!resp.success) {
                  color = 'danger';
                }

                _this6.sys.presentToast(resp.dateTime, 'success', resp.message);
              });
            });
          }
        }]);

        return CourierPage;
      }();

      CourierPage.ɵfac = function CourierPage_Factory(t) {
        return new (t || CourierPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_courier_service__WEBPACK_IMPORTED_MODULE_17__["CourierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_19__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_8__["Vibration"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_18__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_20__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sys_data_service__WEBPACK_IMPORTED_MODULE_21__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_12__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_sys_order_service__WEBPACK_IMPORTED_MODULE_13__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"]));
      };

      CourierPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CourierPage,
        selectors: [["app-courier"]],
        viewQuery: function CourierPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.Drop_L = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.DragItems = _t);
          }
        },
        decls: 45,
        vars: 19,
        consts: [[1, "toolbar"], ["slot", "start"], [3, "click"], ["name", "search", "slot", "start"], [4, "ngIf"], ["size", "small", "color", "dark"], ["slot", "primary"], ["slot", "icon-only", "name", "refresh-circle-sharp"], [3, "click", 4, "ngIf"], ["slot", "icon-only", "name", "help-circle-outline"], [1, "c-wrp", 3, "ngClass"], ["fill", "solid", "size", "default", "class", "light-blue-button", 3, "click", 4, "ngIf"], ["value", "1", 3, "ionChange"], ["value", "1"], ["value", "5"], ["value", "4"], ["class", "c-body", 4, "ngIf"], [1, "ion-padding", "sub-footer"], [1, "orders-lable", "ion-justify-content-between", "ion-wrap"], [1, "ion-margin-vertical"], ["class", "ion-margin", 4, "ngIf"], ["class", "checking", 4, "ngIf"], ["class", "start-route", 4, "ngIf"], ["class", "scanWindow", 4, "ngIf"], ["class", "shirm", 4, "ngIf"], ["class", "call-window", 4, "ngIf"], ["name", "box"], ["name", "check-square"], ["fill", "solid", "size", "default", 1, "light-blue-button", 3, "click"], ["slot", "start", "name", "barcode-sharp", "size", "large"], [1, "c-body"], ["placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u043C", "inputmode", "text", "animated", "", 3, "debounce", "ngModel", "ionChange", "ngModelChange"], ["cdkDropList", "", "itemSize", "50", 2, "height", "100%", "width", "100%", "min-height", "50vh", 3, "cdkDropListDropped"], ["appLongPress", "", "cdkDrag", "", 3, "ngClass", "cdkDragStartDelay", "cdkDragDisabled", "click", "longPress", "hold", "cdkDragStarted", 4, "ngFor", "ngForOf"], ["appLongPress", "", "cdkDrag", "", 3, "ngClass", "cdkDragStartDelay", "cdkDragDisabled", "click", "longPress", "hold", "cdkDragStarted"], [1, "title"], [1, "client-id"], [1, "name"], [1, "addr"], ["class", "actions", 4, "ngIf"], ["name", "ellipsis-vertical", "slot", "start", 1, "points"], [1, "actions-button", 3, "click"], ["src", "../../../assets/actions-arrows.svg", 3, "ngClass"], [1, "actions"], ["fill", "solid", "size", "default", "id", "light-blue-button", 3, "click"], ["slot", "start", "name", "document"], ["fill", "solid", "size", "default", "id", "light-purple-button", 3, "click"], ["slot", "start", "name", "location-outline"], ["fill", "solid", "size", "default", "id", "light-green-button", 3, "click"], ["slot", "start", "name", "call-outline"], [1, "ion-margin"], [2, "color", "red"], [1, "checking"], ["expand", "full", "fill", "solid", 3, "click", 4, "ngIf"], ["expand", "full", "fill", "solid", 3, "click"], [1, "start-route"], ["class", "satrt-r-btn", 3, "click", 4, "ngIf"], ["class", "satrt-r-btn sr-stop", 3, "click", 4, "ngIf"], ["class", "satrt-r-btn find-o-btn", 3, "ngClass", "click", 4, "ngIf"], [1, "satrt-r-btn", 3, "click"], [1, "satrt-r-btn", "sr-stop", 3, "click"], [1, "satrt-r-btn", "find-o-btn", 3, "ngClass", "click"], [1, "scanWindow"], [1, "sw-wrp"], [1, "sw-title"], ["autofocus", "", 1, "ionInp", 3, "ngModel", "change", "ngModelChange"], ["sInput", ""], [1, "shirm"], ["name", "lines-small"], [1, "call-window"], [1, "cw-body"], ["name", "x-square", "size", "large", 3, "click"], ["name", "selectedPhone", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "value"]],
        template: function CourierPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_Template_ion_button_click_3_listener() {
              return ctx.findOrder();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_Template_ion_button_click_11_listener() {
              return ctx.doRefresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ion-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CourierPage_ion_button_13_Template, 2, 0, "ion-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CourierPage_ion_button_14_Template, 2, 0, "ion-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourierPage_Template_ion_button_click_15_listener($event) {
              return ctx.showHelp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CourierPage_ion_button_19_Template, 3, 0, "ion-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-segment", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function CourierPage_Template_ion_segment_ionChange_20_listener($event) {
              return ctx.segmentChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-segment-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-segment-button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-segment-button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\u041D\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CourierPage_div_30_Template, 5, 5, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\u0412\u0441\u0435\u0433\u043E:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, CourierPage_div_37_Template, 4, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, CourierPage_div_38_Template, 5, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, CourierPage_div_39_Template, 4, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, CourierPage_div_40_Template, 3, 2, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, CourierPage_div_41_Template, 4, 3, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, CourierPage_div_42_Template, 6, 1, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, CourierPage_div_43_Template, 2, 0, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CourierPage_div_44_Template, 6, 3, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auth.getGuessMode());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.state$.filial);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.subBtnCond);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.courier.sortOrders == null ? null : ctx.courier.sortOrders.g_process) == 0 && !ctx.isWorkEnded);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c4, ctx.auth.getMode() == "fullHand" || ctx.auth.getMode() == "hand"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.settings.rules.scanPVZ == "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ordersInit && !ctx.auth.getGuessMode());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.courier.sortOrders.all, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.courier.sortOrders.g_process != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.courier.sortOrders.g_fail != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.courier.sortOrders.g_done != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auth.checkState !== "checkedOut");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ordersInit && ctx.state$.orders_data != _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c5) && ctx.state$.orders_data !== null && ctx.auth.checkState == "checkedOut");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scanView);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.callWindow);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], angular_feather__WEBPACK_IMPORTED_MODULE_23__["FeatherComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgModel"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["CdkFixedSizeVirtualScroll"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["DefaultValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["RadioValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_24__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"]],
        styles: ["ion-chip[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.headbar-right-buttons[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  z-index: 999999;\n  top: 0;\n  display: flex;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --min-height: 30px;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nion-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nion-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\nion-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.fether[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --background: #e5f0f4;\n  --border-style: solid;\n  --border-width: 0.5px;\n  --color: #585454;\n  --color-checked: #2b637e;\n  --indicator-height: 0;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  border-bottom: white;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  --box-shadow: 0 0 01px black;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --border-color: #d6cfcf;\n  --border-width: 1px;\n  --border-radius: 2px;\n  --padding-start: 0;\n  margin: 0 2px 5px 2px;\n  --inner-border-width: 0;\n}\n\nion-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 14px;\n}\n\nion-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%] {\n  color: #2b637e;\n}\n\nion-item[_ngcontent-%COMP%]   .addr[_ngcontent-%COMP%] {\n  color: #585454;\n  font-size: 13px;\n  white-space: pre-wrap;\n  padding: 5px 0;\n}\n\nion-item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #333333;\n  font-size: 13px;\n  font-weight: bold;\n}\n\nion-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\nion-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #2b637e;\n  --border-radius: 2px;\n  font-size: 12px;\n  text-transform: none;\n  --padding-bottom: 7px;\n  --padding-top: 7px;\n  --padding-start: 7px;\n  --padding-end: 7px;\n  font-family: Roboto;\n  --box-shadow: none;\n  margin-right: 13px;\n  margin-left: 0;\n}\n\nion-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\nion-item[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nion-item[_ngcontent-%COMP%]:nth-child(odd) {\n  --background: #f6fdff;\n}\n\nion-reorder[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nion-item.overdue[_ngcontent-%COMP%] {\n  --border-color: red;\n  --inner-border-width: 0;\n}\n\nion-item.overdue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.c-wrp[_ngcontent-%COMP%], .c-body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.call-window[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%] {\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 5px;\n  position: relative;\n}\n\n.call-window[_ngcontent-%COMP%]   .cw-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  height: 44px;\n  width: 80%;\n  box-shadow: 0px 0px 0.5px 0.5px #7cd5ff;\n  border-radius: 3px;\n  margin: 5px 0;\n  text-transform: uppercase;\n}\n\n.c-wrp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 40px);\n}\n\n.c-wrp[_ngcontent-%COMP%]   .c-body[_ngcontent-%COMP%] {\n  overflow: scroll;\n}\n\n.c-wrp[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%] {\n  box-shadow: 0px -2px 3px rgba(117, 117, 117, 0.1);\n}\n\n.c-wrp[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .orders-lable[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  display: flex;\n}\n\n.c-wrp[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .orders-lable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  flex: 1 1 30%;\n}\n\n.c-wrp[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .orders-lable[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #585454;\n}\n\n.c-wrp[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .checking[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: var(--corporate);\n  border-radius: 2px;\n}\n\n.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  min-height: 85vh;\n}\n\n.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cmllci9jb3VyaWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsZUFBZTtFQUNmLE1BQU07RUFDTixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBYTtBQUVmOztBQUNBO0VBQ0UsZUFBZTtBQUVqQjs7QUFBQTtFQUNFLGVBQWU7QUFHakI7O0FBSkE7RUFHSSxZQUFZO0FBS2hCOztBQVJBO0VBS00sZUFBZTtBQU9yQjs7QUFIQTtFQUNFLFlBQVk7QUFNZDs7QUFKQTtFQUtJLHFCQUFhO0VBQ2IscUJBQWU7RUFDZixxQkFBZTtFQUNmLGdCQUFRO0VBQ1Isd0JBQWdCO0VBQ2hCLHFCQUFtQjtBQUd2Qjs7QUFiQTtFQUdNLG9CQUFvQjtBQWMxQjs7QUFqQkE7RUFhSSxvQkFBb0I7QUFReEI7O0FBTEE7RUFDRSw0QkFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFRcEI7O0FBTkE7RUFDRSx1QkFBZTtFQUNmLG1CQUFlO0VBQ2Ysb0JBQWdCO0VBQ2hCLGtCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsdUJBQXFCO0FBU3ZCOztBQWZBO0VBU0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsZUFBZTtBQVVuQjs7QUF0QkE7RUFlTSxjQUFjO0FBV3BCOztBQTFCQTtFQW9CSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBVWxCOztBQWpDQTtFQTJCSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQVVyQjs7QUF2Q0E7RUFpQ0ksU0FBUztBQVViOztBQTNDQTtFQW1DTSxxQkFBYTtFQUNiLG9CQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFpQjtFQUNqQixrQkFBYztFQUNkLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBWXBCOztBQTFEQTtFQWdEUSxjQUFjO0FBY3RCOztBQTlEQTtFQXNESSxrQkFBa0I7QUFZdEI7O0FBVEE7RUFDRSxxQkFBYTtBQVlmOztBQVZBO0VBQ0UsU0FBUztBQWFYOztBQVhBO0VBQ0UsbUJBQWU7RUFDZix1QkFBcUI7QUFjdkI7O0FBaEJBO0VBS00sVUFBVTtBQWVoQjs7QUFYQTs7RUFFRSxZQUFZO0FBY2Q7O0FBWEE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQWNoQzs7QUF2QkE7RUFXSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBZ0J0Qjs7QUFsQ0E7RUFxQk0sZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0FBaUIvQjs7QUFiQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0FBZ0IzQjs7QUFuQkE7RUFLSSxnQkFBZ0I7QUFrQnBCOztBQXZCQTtFQVNJLGlEQUFpRDtBQWtCckQ7O0FBM0JBO0VBV00sbUJBQW1CO0VBQ25CLGFBQWE7QUFvQm5COztBQWhDQTtFQWNRLG1CQUFtQjtFQUNuQixhQUFhO0FBc0JyQjs7QUFyQ0E7RUFrQlEsY0FBYztBQXVCdEI7O0FBekNBO0VBdUJRLDhCQUFhO0VBQ2Isa0JBQWtCO0FBc0IxQjs7QUFqQkE7RUFFSSxnQkFBZ0I7QUFtQnBCOztBQXJCQTtFQUlNLFlBQVk7QUFxQmxCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY291cmllci9jb3VyaWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jaGlwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhlYWRiYXItcmlnaHQtYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW9uLXRvb2xiYXIge1xuICAtLW1pbi1oZWlnaHQ6IDMwcHg7XG59XG5cbi50b29sYmFyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWhlYWRlciAqIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBpb24tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgfVxufVxuLmZldGhlciB7XG4gIGhlaWdodDogMTZweDtcbn1cbmlvbi1zZWdtZW50IHtcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIC0tYmFja2dyb3VuZDogI2U1ZjBmNDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAuNXB4O1xuICAgIC0tY29sb3I6ICM1ODU0NTQ7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMmI2MzdlO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMDtcbiAgfVxuICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGU7XG4gIH1cbn1cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJveC1zaGFkb3c6IDAgMCAwMXB4IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2Q2Y2ZjZjtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luOiAwIDJweCA1cHggMnB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIC5jbGllbnQtaWQge1xuICAgICAgY29sb3I6ICMyYjYzN2U7XG4gICAgfVxuICB9XG5cbiAgLmFkZHIge1xuICAgIGNvbG9yOiAjNTg1NDU0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cblxuICAubmFtZSB7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmFjdGlvbnMge1xuICAgIGJvdHRvbTogMDtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzJiNjM3ZTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgICAtLXBhZGRpbmctdG9wOiA3cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDdweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDdweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBvaW50cyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5pb24taXRlbTpudGgtY2hpbGQob2RkKSB7XG4gIC0tYmFja2dyb3VuZDogI2Y2ZmRmZjtcbn1cbmlvbi1yZW9yZGVyIHtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWl0ZW0ub3ZlcmR1ZSB7XG4gIC0tYm9yZGVyLWNvbG9yOiByZWQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAudGl0bGUge1xuICAgIC5jbGllbnQtaWQge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cbn1cbi5jLXdycCxcbi5jLWJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYWxsLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAuY3ctYm9keSB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDAuNXB4IDAuNXB4ICM3Y2Q1ZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gIH1cbn1cbi5jLXdycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gIC5jLWJvZHkge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cblxuICAuc3ViLWZvb3RlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggM3B4IHJnYmEoMTE3LCAxMTcsIDExNywgMC4xKTtcbiAgICAub3JkZXJzLWxhYmxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgJiA+IGRpdiB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZsZXg6IDEgMSAzMCU7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICM1ODU0NTQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5jaGVja2luZyB7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb3Jwb3JhdGUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uaW9zIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDg1dmg7XG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: 'auto'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: 'max-content'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CourierPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'app-courier',
            templateUrl: './courier.page.html',
            styleUrls: ['./courier.page.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [// ...
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              height: 'auto'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              height: 'max-content'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')])])]
          }]
        }], function () {
          return [{
            type: _services_courier_service__WEBPACK_IMPORTED_MODULE_17__["CourierService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_state_service__WEBPACK_IMPORTED_MODULE_19__["StateService"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]
          }, {
            type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"]
          }, {
            type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_8__["Vibration"]
          }, {
            type: _services_settings_service__WEBPACK_IMPORTED_MODULE_18__["SettingsService"]
          }, {
            type: _services_sys_service__WEBPACK_IMPORTED_MODULE_20__["SysService"]
          }, {
            type: _services_sys_data_service__WEBPACK_IMPORTED_MODULE_21__["DataService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"]
          }, {
            type: src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_12__["MapService"]
          }, {
            type: src_app_services_sys_order_service__WEBPACK_IMPORTED_MODULE_13__["OrderService"]
          }, {
            type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]
          }, {
            type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"]
          }];
        }, {
          sInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['sInput']
          }],
          Drop_L: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], {
              "static": false
            }]
          }],
          DragItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-courier-courier-module-es5.js.map