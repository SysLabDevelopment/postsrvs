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

      function OrderPage_ion_content_5_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " \u0418\u043C\u044F: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ion-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 8, ctx_r1.order.datetime_to, "DD.MM.YYYY"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](31, 11, ctx_r1.order.datetime_to, "HH:MM"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 14, ctx_r1.order.datetime_to, "HH:MM"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.order.client_fio, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.order.client_name, " ");
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
        consts: [["slot", "start"], [4, "ngIf"], [1, "flex"], ["src", "../../../assets/a-b.svg"], [1, "addresses"], [1, "client-id"], [1, "datetime"], [1, "time"], [1, "bold"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderPage_ion_content_5_Template, 52, 17, "ion-content", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.order);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.order);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonBackButtonDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_21__["IonButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]],
        styles: ["ion-item[_ngcontent-%COMP%] {\n  --border-color: #d6cfcf;\n  --border-width: 1px;\n  --border-radius: 2px;\n  --padding-start: 0;\n  margin: 5px 15px 0px 15px;\n  --inner-border-width: 0;\n  --inner-padding-bottom: 8px;\n  --inner-padding-start: 8px;\n  --inner-padding-top: 8px;\n  --inner-padding-end: 8px;\n  font-size: 14px;\n  line-height: 21px;\n  color: #585454;\n}\n\nion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .addresses[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  font-size: 14px;\n  line-height: 16px;\n  color: #585454;\n}\n\nion-item[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .addresses[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-weight: bold;\n  color: #333333;\n  white-space: pre-wrap;\n}\n\nion-item[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14px;\n  line-height: 16px;\n  color: #585454;\n}\n\nion-item[_ngcontent-%COMP%]   .client-id[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: bold;\n}\n\nion-item.datetime[_ngcontent-%COMP%] {\n  --background: #fffed7;\n  font-size: 14px;\n  color: #585454;\n}\n\nion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n}\n\nion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\nion-item.datetime[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333333;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQWU7RUFDZixtQkFBZTtFQUNmLG9CQUFnQjtFQUNoQixrQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHVCQUFxQjtFQUNyQiwyQkFBdUI7RUFDdkIsMEJBQXNCO0VBQ3RCLHdCQUFvQjtFQUNwQix3QkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQWRBO0VBZUksU0FBUztBQUdiOztBQWxCQTtFQWtCSSxhQUFhO0FBSWpCOztBQXRCQTtFQXFCTSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBS3BCOztBQTdCQTtFQTJCUSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7QUFNN0I7O0FBcENBO0VBb0NJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFJbEI7O0FBM0NBO0VBMENNLGNBQWM7RUFDZCxpQkFBaUI7QUFLdkI7O0FBREE7RUFDRSxxQkFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBSWhCOztBQVBBO0VBTUksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBS2I7O0FBYkE7RUFXTSxpQkFBaUI7QUFNdkI7O0FBakJBO0VBZVEsaUJBQWlCO0VBQ2pCLGNBQWM7QUFNdEI7O0FBREE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUloQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6ICNkNmNmY2Y7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbjogNXB4IDE1cHggMHB4IDE1cHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgY29sb3I6ICM1ODU0NTQ7XG4gIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmFkZHJlc3NlcyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIGNvbG9yOiAjNTg1NDU0O1xuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2xpZW50LWlkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogIzU4NTQ1NDtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cbmlvbi1pdGVtLmRhdGV0aW1lIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZWQ3O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTg1NDU0O1xuXG4gIGlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgLnRpbWUge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIHAge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuIl19 */"],
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