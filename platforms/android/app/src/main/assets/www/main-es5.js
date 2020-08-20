(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "./src/app/guards/auth.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'map',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'balance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-balance-balance-module */
          "pages-balance-balance-module").then(__webpack_require__.bind(null,
          /*! ./pages/balance/balance.module */
          "./src/app/pages/balance/balance.module.ts")).then(function (m) {
            return m.BalancePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'courier',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-courier-courier-module */
          [__webpack_require__.e("default~pages-courier-courier-module~pages-test-test-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-courier-courier-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/courier/courier.module */
          "./src/app/pages/courier/courier.module.ts")).then(function (m) {
            return m.CourierPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'order/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-order-order-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-order-order-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/order/order.module */
          "./src/app/pages/order/order.module.ts")).then(function (m) {
            return m.OrderPageModule;
          });
        },
        pathMatch: 'full'
      }, {
        path: 'map',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-map-map-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-map-map-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/map/map.module */
          "./src/app/pages/map/map.module.ts")).then(function (m) {
            return m.MapPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'schedule',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-schedule-schedule-module */
          "pages-schedule-schedule-module").then(__webpack_require__.bind(null,
          /*! ./pages/schedule/schedule.module */
          "./src/app/pages/schedule/schedule.module.ts")).then(function (m) {
            return m.SchedulePageModule;
          });
        }
      }, {
        path: 'settings',
        redirectTo: 'about'
      }, {
        path: 'draw',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-draw-draw-module */
          "pages-draw-draw-module").then(__webpack_require__.bind(null,
          /*! ./pages/draw/draw.module */
          "./src/app/pages/draw/draw.module.ts")).then(function (m) {
            return m.DrawPageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-about-about-module */
          "pages-about-about-module").then(__webpack_require__.bind(null,
          /*! ./pages/about/about.module */
          "./src/app/pages/about/about.module.ts")).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }, {
        path: 'test',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-test-test-module */
          [__webpack_require__.e("default~pages-courier-courier-module~pages-test-test-module"), __webpack_require__.e("pages-test-test-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/test/test.module */
          "./src/app/pages/test/test.module.ts")).then(function (m) {
            return m.TestPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/nav.service */
      "./src/app/services/nav.service.ts");
      /* harmony import */


      var _services_courier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/courier.service */
      "./src/app/services/courier.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/settings.service */
      "./src/app/services/settings.service.ts");
      /* harmony import */


      var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/google-maps */
      "./node_modules/@ionic-native/google-maps/index.js");
      /* harmony import */


      var ionic_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ionic-cache */
      "./node_modules/ionic-cache/dist/index.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/ngx/index.js");
      /* harmony import */


      var _services_sys_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/sys/order.service */
      "./src/app/services/sys/order.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angular-feather */
      "./node_modules/angular-feather/fesm2015/angular-feather.js");

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      function AppComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.navTo(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_div_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.navTo(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i-feather", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.nav == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.nav == 3));
        }
      }

      function AppComponent_div_3_ion_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_ion_button_1_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.navTo(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0430\u0437\u0430\u0434 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_3_ion_button_1_Template, 2, 0, "ion-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nav !== 2);
        }
      }

      function AppComponent_ion_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ion_button_4_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.courier.check_to_work();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0415\u0434\u0443 \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, nav_s, router, courier, auth, settings, cache, network, order) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.nav_s = nav_s;
          this.router = router;
          this.courier = courier;
          this.auth = auth;
          this.settings = settings;
          this.network = network;
          this.order = order;
          this.nav = 2;
          this.initializeApp();
          console.log(this.platform.platforms());
          cache.setDefaultTTL(60 * 60 * 24);
          cache.itemExists('syncRequests').then(function (exist) {
            if (!exist) {
              cache.saveItem('syncRequests', []);
            }

            _this.network.onConnect().subscribe(function () {
              console.warn('network connected!');
              cache.getItem('syncRequests').then(function (syncRequests) {
                syncRequests && syncRequests.forEach(function (syncRequest) {
                  _this.order.sendDelayedCall(syncRequest.order, syncRequest.status);
                });
                cache.clearGroup('delayedCalls');
              });
            });

            _this.network.onDisconnect().subscribe(function () {
              console.warn('sys:: disconnected');
            });
          });
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();

              if (_this2.settings.rules.typeRoute == "standart") {
                _this2.routingModeAuto = false;
              }

              _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_9__["Environment"].setEnv({
                // api key for server
                API_KEY_FOR_BROWSER_RELEASE: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164",
                // api key for local development
                API_KEY_FOR_BROWSER_DEBUG: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164"
              });
            });
            var self = this;
            this.nav_s.tabNav.subscribe(function (data) {
              self.nav = data;
            });
          }
        }, {
          key: "navTo",
          value: function navTo(index) {
            switch (index) {
              case 1:
                this.router.navigate(["balance"]);
                break;

              case 2:
                this.router.navigate(["map"]);
                break;

              case 3:
                this.router.navigate(["courier"]);
                break;

              case 0:
                this.router.navigate(["login"]);
                break;
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_courier_service__WEBPACK_IMPORTED_MODULE_6__["CourierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sys_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 3,
        consts: [["id", "content1"], ["id", "bottom-menu", 4, "ngIf"], ["class", "check_to_work", "expand", "block", "fill", "clear", "shape", "round", 3, "click", 4, "ngIf"], ["id", "bottom-menu"], [1, "bm-item", 3, "ngClass", "click"], ["name", "user"], ["name", "list"], ["color", "light", "expand", "block", "fill", "clear", "shape", "round", 3, "click", 4, "ngIf"], ["color", "light", "expand", "block", "fill", "clear", "shape", "round", 3, "click"], ["expand", "block", "fill", "clear", "shape", "round", 1, "check_to_work", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 5, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ion_button_4_Template, 2, 0, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nav == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.nav == 2) && !(ctx.nav == 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.courier.checkedOnWork);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], angular_feather__WEBPACK_IMPORTED_MODULE_14__["FeatherComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "app.component.html"
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }, {
            type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
          }, {
            type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
          }, {
            type: _services_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_courier_service__WEBPACK_IMPORTED_MODULE_6__["CourierService"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"]
          }, {
            type: ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"]
          }, {
            type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"]
          }, {
            type: _services_sys_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/locales/ru */
      "./node_modules/@angular/common/locales/ru.js");
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/ngx/index.js");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/ngx/index.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/ngx/index.js");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/ngx/index.js");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "./node_modules/@ionic-native/diagnostic/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/ngx/index.js");
      /* harmony import */


      var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/google-maps */
      "./node_modules/@ionic-native/google-maps/index.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/ngx/index.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/ngx/index.js");
      /* harmony import */


      var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/vibration/ngx */
      "./node_modules/@ionic-native/vibration/ngx/index.js");
      /* harmony import */


      var _ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/web-intent/ngx */
      "./node_modules/@ionic-native/web-intent/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
      /* harmony import */


      var ionic_cache__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ionic-cache */
      "./node_modules/ionic-cache/dist/index.js");
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ngx-mask */
      "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components_balance_cashout_fail_o_cashout_fail_o_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/balance/cashout-fail-o/cashout-fail-o.component */
      "./src/app/components/balance/cashout-fail-o/cashout-fail-o.component.ts");
      /* harmony import */


      var _components_balance_cashout_w_cashout_w_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/balance/cashout-w/cashout-w.component */
      "./src/app/components/balance/cashout-w/cashout-w.component.ts");
      /* harmony import */


      var _components_help_help_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/help/help.component */
      "./src/app/components/help/help.component.ts");
      /* harmony import */


      var _components_note_note_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/note/note.component */
      "./src/app/components/note/note.component.ts");
      /* harmony import */


      var _icons_icons_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./icons/icons.module */
      "./src/app/icons/icons.module.ts");
      /* harmony import */


      var _interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./interceptors/http.interceptor */
      "./src/app/interceptors/http.interceptor.ts");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3___default.a, "ru");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_20__["StatusBar"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__["BarcodeScanner"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_19__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["Geolocation"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"], _ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_22__["WebIntent"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_21__["Vibration"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__["InAppBrowser"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_14__["Diagnostic"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__["CallNumber"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_16__["GoogleMaps"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_18__["Network"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_34__["HttpErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"],
          useFactory: function useFactory() {
            return "ru";
          }
        }],
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_33__["IconsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_26__["NgxMaskModule"].forRoot(), _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_24__["IonicStorageModule"].forRoot(), ionic_cache__WEBPACK_IMPORTED_MODULE_25__["CacheModule"].forRoot({
          keyPrefix: 'offlineData'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"], _components_balance_cashout_fail_o_cashout_fail_o_component__WEBPACK_IMPORTED_MODULE_29__["CashoutFailOComponent"], _components_balance_cashout_w_cashout_w_component__WEBPACK_IMPORTED_MODULE_30__["CashoutWComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_31__["HelpComponent"], _components_note_note_component__WEBPACK_IMPORTED_MODULE_32__["NoteComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_33__["IconsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_26__["NgxMaskModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_24__["IonicStorageModule"], ionic_cache__WEBPACK_IMPORTED_MODULE_25__["CacheModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"], _components_balance_cashout_fail_o_cashout_fail_o_component__WEBPACK_IMPORTED_MODULE_29__["CashoutFailOComponent"], _components_balance_cashout_w_cashout_w_component__WEBPACK_IMPORTED_MODULE_30__["CashoutWComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_31__["HelpComponent"], _components_note_note_component__WEBPACK_IMPORTED_MODULE_32__["NoteComponent"]],
            entryComponents: [],
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_33__["IconsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_26__["NgxMaskModule"].forRoot(), _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_24__["IonicStorageModule"].forRoot(), ionic_cache__WEBPACK_IMPORTED_MODULE_25__["CacheModule"].forRoot({
              keyPrefix: 'offlineData'
            })],
            providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_20__["StatusBar"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_10__["BarcodeScanner"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_19__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["Geolocation"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"], _ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_22__["WebIntent"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_21__["Vibration"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__["InAppBrowser"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_14__["Diagnostic"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__["CallNumber"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_16__["GoogleMaps"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_18__["Network"], {
              provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"],
              useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicRouteStrategy"]
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_34__["HttpErrorInterceptor"],
              multi: true
            }, {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"],
              useFactory: function useFactory() {
                return "ru";
              }
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/balance/cashout-fail-o/cashout-fail-o.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/balance/cashout-fail-o/cashout-fail-o.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CashoutFailOComponent */

    /***/
    function srcAppComponentsBalanceCashoutFailOCashoutFailOComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutFailOComponent", function () {
        return CashoutFailOComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var CashoutFailOComponent = /*#__PURE__*/function () {
        function CashoutFailOComponent() {
          _classCallCheck(this, CashoutFailOComponent);
        }

        _createClass(CashoutFailOComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CashoutFailOComponent;
      }();

      CashoutFailOComponent.ɵfac = function CashoutFailOComponent_Factory(t) {
        return new (t || CashoutFailOComponent)();
      };

      CashoutFailOComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CashoutFailOComponent,
        selectors: [["app-cashout-fail-o"]],
        decls: 2,
        vars: 0,
        template: function CashoutFailOComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cashout-fail-o works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFsYW5jZS9jYXNob3V0LWZhaWwtby9jYXNob3V0LWZhaWwtby5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashoutFailOComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cashout-fail-o',
            templateUrl: './cashout-fail-o.component.html',
            styleUrls: ['./cashout-fail-o.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/balance/cashout-w/cashout-w.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/balance/cashout-w/cashout-w.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CashoutWComponent */

    /***/
    function srcAppComponentsBalanceCashoutWCashoutWComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutWComponent", function () {
        return CashoutWComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var CashoutWComponent = /*#__PURE__*/function () {
        function CashoutWComponent() {
          _classCallCheck(this, CashoutWComponent);
        }

        _createClass(CashoutWComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CashoutWComponent;
      }();

      CashoutWComponent.ɵfac = function CashoutWComponent_Factory(t) {
        return new (t || CashoutWComponent)();
      };

      CashoutWComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CashoutWComponent,
        selectors: [["app-cashout-w"]],
        decls: 2,
        vars: 0,
        template: function CashoutWComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cashout-w works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFsYW5jZS9jYXNob3V0LXcvY2FzaG91dC13LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashoutWComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cashout-w',
            templateUrl: './cashout-w.component.html',
            styleUrls: ['./cashout-w.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/help/help.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/help/help.component.ts ***!
      \***************************************************/

    /*! exports provided: HelpComponent */

    /***/
    function srcAppComponentsHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
        return HelpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

      var HelpComponent = /*#__PURE__*/function () {
        function HelpComponent() {
          _classCallCheck(this, HelpComponent);
        }

        _createClass(HelpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HelpComponent;
      }();

      HelpComponent.ɵfac = function HelpComponent_Factory(t) {
        return new (t || HelpComponent)();
      };

      HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelpComponent,
        selectors: [["app-help"]],
        decls: 16,
        vars: 0,
        consts: [[1, "body"], [1, "title"], ["lines", "none"], ["name", "ellipsis-vertical", "slot", "start"], ["src", "../../../assets/show-actions-helper.svg", "slot", "start"], ["name", "search", "slot", "start"]],
        template: function HelpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u043E\u043C\u043E\u0449\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0414\u043B\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0437\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437 \u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u043F.\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0437\u0430\u043A\u0430\u0437\u0430 \u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u0434\u0432\u0430\u0436\u0434\u044B \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0433\u043E\u043B\u0443\u0431\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0427\u0442\u043E\u0431\u044B \u043D\u0430\u0439\u0442\u0438 \u0437\u0430\u043A\u0430\u0437 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443,\u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0438\u043B\u0438 \u0430\u0434\u0440\u0435\u0441\u0443, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0443\u0436\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432 \u043F\u043E\u0438\u0441\u043A\u0435 \u043F\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u043C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
        styles: [".body[_ngcontent-%COMP%] {\n  padding: 8px 10px 10px 13px;\n}\n\n.body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #2b637e;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.body[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n}\n\n.body[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin: 0 5px 0 0;\n  font-size: 3em;\n}\n\n.body[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRkE7RUFHSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUdyQjs7QUFSQTtFQVFJLGtCQUFnQjtBQUlwQjs7QUFaQTtFQVVNLGlCQUFpQjtFQUNqQixjQUFjO0FBTXBCOztBQWpCQTtFQWNNLGVBQWU7RUFDZixtQkFBbUI7QUFPekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgcGFkZGluZzogOHB4IDEwcHggMTBweCAxM3B4O1xuICAudGl0bGUge1xuICAgIGNvbG9yOiAjMmI2MzdlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xuICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-help',
            templateUrl: './help.component.html',
            styleUrls: ['./help.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/note/note.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/note/note.component.ts ***!
      \***************************************************/

    /*! exports provided: NoteComponent */

    /***/
    function srcAppComponentsNoteNoteComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoteComponent", function () {
        return NoteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/sys/map.service */
      "./src/app/services/sys/map.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-feather */
      "./node_modules/angular-feather/fesm2015/angular-feather.js");

      var NoteComponent = /*#__PURE__*/function () {
        function NoteComponent(sysMap, viewCtrl) {
          _classCallCheck(this, NoteComponent);

          this.sysMap = sysMap;
          this.viewCtrl = viewCtrl;
        }

        _createClass(NoteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.note = localStorage.getItem(this.orderId);
          }
        }, {
          key: "saveNote",
          value: function saveNote() {
            localStorage.setItem(this.orderId, this.note);
            this.sysMap.infoUpdated.next();
            this.viewCtrl.dismiss();
          }
        }]);

        return NoteComponent;
      }();

      NoteComponent.ɵfac = function NoteComponent_Factory(t) {
        return new (t || NoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]));
      };

      NoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NoteComponent,
        selectors: [["app-note"]],
        inputs: {
          orderId: "orderId"
        },
        decls: 4,
        vars: 1,
        consts: [["placeholder", "\u0412\u0430\u0448\u0430 \u0437\u0430\u043C\u0435\u0442\u043A\u0430 \u043E \u0437\u0430\u043A\u0430\u0437\u0435", 3, "ngModel", "ngModelChange"], [3, "click"], ["name", "save"]],
        template: function NoteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-textarea", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NoteComponent_Template_ion_textarea_ngModelChange_1_listener($event) {
              return ctx.note = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteComponent_Template_ion_button_click_2_listener() {
              return ctx.saveNote();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i-feather", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9ub3RlLmNvbXBvbmVudC5jc3MifQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-note',
            templateUrl: './note.component.html',
            styleUrls: ['./note.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: src_app_services_sys_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]
          }];
        }, {
          orderId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/guards/auth.guard.ts":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/nav.service */
      "./src/app/services/nav.service.ts");
      /* harmony import */


      var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/state.service */
      "./src/app/services/state.service.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(nav_s, state) {
          _classCallCheck(this, AuthGuard);

          this.nav_s = nav_s;
          this.state = state;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var url = next.routeConfig.path;

            switch (url) {
              case 'courier':
                this.nav_s.tabNav.next(3);
                break;

              case 'map':
                this.nav_s.tabNav.next(2);
                break;

              case 'balance':
                this.nav_s.tabNav.next(1);
                break;

              case 'login':
                this.nav_s.tabNav.next(0);
                var authState = this.state.g_state.getValue();
                console.log('sys:: состояние аутентификации: ', authState);
                break;

              default:
                break;
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]
          }, {
            type: _services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/icons/icons.module.ts":
    /*!***************************************!*\
      !*** ./src/app/icons/icons.module.ts ***!
      \***************************************/

    /*! exports provided: IconsModule */

    /***/
    function srcAppIconsIconsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconsModule", function () {
        return IconsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-feather */
      "./node_modules/angular-feather/fesm2015/angular-feather.js");
      /* harmony import */


      var angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-feather/icons */
      "./node_modules/angular-feather/fesm2015/angular-feather-icons.js");

      var icons = {
        PhoneCall: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["PhoneCall"],
        MinusCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["MinusCircle"],
        PlusCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircle"],
        Save: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Save"],
        XSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["XSquare"],
        User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["User"],
        List: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["List"],
        Settings: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Settings"],
        XCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["XCircle"],
        XOctagon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["XOctagon"],
        CheckSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["CheckSquare"],
        Search: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Search"],
        Box: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Box"],
        Loader: angular_feather_icons__WEBPACK_IMPORTED_MODULE_2__["Loader"]
      };

      var IconsModule = function IconsModule() {
        _classCallCheck(this, IconsModule);
      };

      IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: IconsModule
      });
      IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function IconsModule_Factory(t) {
          return new (t || IconsModule)();
        },
        imports: [[angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"].pick(icons)], angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, {
          imports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]],
          exports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"].pick(icons)],
            exports: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/interceptors/http.interceptor.ts":
    /*!**************************************************!*\
      !*** ./src/app/interceptors/http.interceptor.ts ***!
      \**************************************************/

    /*! exports provided: HttpErrorInterceptor */

    /***/
    function srcAppInterceptorsHttpInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function () {
        return HttpErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_sys_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/sys.service */
      "./src/app/services/sys.service.ts");
      /* harmony import */


      var ionic_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ionic-cache */
      "./node_modules/ionic-cache/dist/index.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/ngx/index.js");

      var HttpErrorInterceptor = /*#__PURE__*/function () {
        function HttpErrorInterceptor(sys, cache, network) {
          _classCallCheck(this, HttpErrorInterceptor);

          this.sys = sys;
          this.cache = cache;
          this.network = network;
          this.isOnline = true;
        }

        _createClass(HttpErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _a;

            var url = request.url;
            var cacheKey = url + ((_a = request.body) === null || _a === void 0 ? void 0 : _a.action);
            var req = next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {}, function (error) {
              if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {// this.sys.presentToast('Ошибка сети (или сервера)', 'warning');
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (response) {
              return !(response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]);
            }));
            return this.completedResponse(cacheKey, req);
          }
        }, {
          key: "completedResponse",
          value: function completedResponse(cacheKey, req) {
            var response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

            if (this.network.type !== 'none') {
              this.cache.removeItem(cacheKey).then(function () {
                response.next();
              });
            }

            return this.cache.loadFromObservable(cacheKey, req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
              console.log("sys:: returned response: ", resp.body);
            }));
          }
        }]);

        return HttpErrorInterceptor;
      }();

      HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) {
        return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_4__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_cache__WEBPACK_IMPORTED_MODULE_5__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]));
      };

      HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpErrorInterceptor,
        factory: HttpErrorInterceptor.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_sys_service__WEBPACK_IMPORTED_MODULE_4__["SysService"]
          }, {
            type: ionic_cache__WEBPACK_IMPORTED_MODULE_5__["CacheService"]
          }, {
            type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./state.service */
      "./src/app/services/state.service.ts");
      /* harmony import */


      var _settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./settings.service */
      "./src/app/services/settings.service.ts");
      /* harmony import */


      var _services_sys_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/sys.service */
      "./src/app/services/sys.service.ts");
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/nav.service */
      "./src/app/services/nav.service.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(bScan, http, device, plt, router, state$, alert, settings, sys, nav_s) {
          _classCallCheck(this, AuthService);

          this.bScan = bScan;
          this.http = http;
          this.device = device;
          this.plt = plt;
          this.router = router;
          this.state$ = state$;
          this.alert = alert;
          this.settings = settings;
          this.sys = sys;
          this.nav_s = nav_s;
          this.user = false;
          this.auth_state = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('not_login');
          this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // останаливает все подписки;

          this.checkState = undefined; //Состояние чекнутости на складе

          this.version = undefined; // версия приложения

          this.isDebug = false; //Нужна в случае хардкодной отладки нативных функций

          this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
          };

          if (!this.getMode()) {
            this.setMode('hand');
          }

          if (!this.getScanMode()) {
            this.setScanMode('camera');
          }

          this.routingModeAuto = this.getRoutingMode() == 'standart' ? false : true;
        }

        _createClass(AuthService, [{
          key: "checkAuth",
          value: function checkAuth() {
            var url = 'orders';
            var data = {
              'action': 'checkAuth',
              'appVersion': this.version || ''
            };
            return this.sendPost(url, data);
          }
        }, {
          key: "setMode",
          value: function setMode(mode) {
            localStorage.setItem('mode', mode);
          }
        }, {
          key: "getMode",
          value: function getMode() {
            return this.settings.rules.appMode;
          }
        }, {
          key: "setScanMode",
          value: function setScanMode(mode) {
            localStorage.setItem('scan_mode', mode);
          } //меняет способ сканирования

        }, {
          key: "getScanMode",
          value: function getScanMode() {
            return this.settings.rules.scanMode;
          }
        }, {
          key: "sendPost",
          value: function sendPost(url, data) {
            var _this3 = this;

            var host = this.sys.proxy + "https://mobile.postsrvs.ru/mobile/";
            url = host + url;
            data['uuid'] = this.isDebug ? '6b356755575fce31' : this.getUuid();
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-type': 'application/json'
              })
            };
            var self = this;
            var resp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.plt.ready().then(function () {
              self.http.post(url, data, httpOptions).subscribe(function (data) {
                _this3.state$.unsetNotification('internet');

                if (data) {
                  console.log('sys:: data == true, data.success', data.success);

                  if (data.success == 'false' && data.reason == "not_auth") {
                    self.logout();
                  } else {
                    resp.next(data);
                  }
                } else {
                  resp.next(data);
                }
              }, function (err) {
                if (err.error instanceof Error) {
                  _this3.state$.setNotification('internet', 'Ошибка ответа сервера! Обратитесь к разработчикам.');
                }
              });
            });
            return resp;
          }
        }, {
          key: "getUuid",
          value: function getUuid() {
            // return 'c446ca560c6e0383';
            return this.device.uuid;
          }
        }, {
          key: "setUser",
          value: function setUser(id) {
            localStorage.setItem('user', id);
            this.user = true;
            this.userId = id;
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            return localStorage.getItem('user');
          }
        }, {
          key: "scanData",
          value: function scanData() {
            return this.bScan.scan();
          }
        }, {
          key: "login",
          value: function login(code) {
            return this.sendPost('auth', code);
          }
        }, {
          key: "initLogin",
          value: function initLogin() {
            this.state$.g_state.next('login');
            this.state$.map_state.next('init');
          }
        }, {
          key: "logout",
          value: function logout() {
            this.state$.logout();
            this.router.navigate(['login']);
            this.nav_s.tabNav.next(0);
            this.state$.g_state.next('unLogin');
          }
        }, {
          key: "showError",
          value: function showError(err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, alert2, alert3, alert4, alert5, alert6, alert7, alert8, alert9, alert10;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = err;
                      _context.next = _context.t0 === 1 ? 3 : _context.t0 === 2 ? 9 : _context.t0 === 3 ? 15 : _context.t0 === 4 ? 21 : _context.t0 === 5 ? 27 : _context.t0 === 6 ? 33 : _context.t0 === 7 ? 39 : _context.t0 === 8 ? 45 : _context.t0 === 9 ? 51 : _context.t0 === 10 ? 57 : 63;
                      break;

                    case 3:
                      _context.next = 5;
                      return this.alert.create({
                        header: 'Ошибка',
                        message: 'Ошибка авторизации, повторите попытку позже.',
                        buttons: ['OK']
                      });

                    case 5:
                      alert = _context.sent;
                      _context.next = 8;
                      return alert.present();

                    case 8:
                      return _context.abrupt("break", 63);

                    case 9:
                      _context.next = 11;
                      return this.alert.create({
                        header: 'Ошибка',
                        message: 'Заказ не найден.',
                        buttons: ['OK']
                      });

                    case 11:
                      alert2 = _context.sent;
                      _context.next = 14;
                      return alert2.present();

                    case 14:
                      return _context.abrupt("break", 63);

                    case 15:
                      _context.next = 17;
                      return this.alert.create({
                        header: 'Ошибка',
                        message: 'Ошибка отправки запроса, повторите попытку позже.',
                        buttons: ['OK']
                      });

                    case 17:
                      alert3 = _context.sent;
                      _context.next = 20;
                      return alert3.present();

                    case 20:
                      return _context.abrupt("break", 63);

                    case 21:
                      _context.next = 23;
                      return this.alert.create({
                        header: 'Ошибка',
                        message: 'Телефон не зарегистрирован.',
                        buttons: ['OK']
                      });

                    case 23:
                      alert4 = _context.sent;
                      _context.next = 26;
                      return alert4.present();

                    case 26:
                      return _context.abrupt("break", 63);

                    case 27:
                      _context.next = 29;
                      return this.alert.create({
                        header: 'Ошибка',
                        message: 'Не удалось сменить режим маршрута.',
                        buttons: ['OK']
                      });

                    case 29:
                      alert5 = _context.sent;
                      _context.next = 32;
                      return alert5.present();

                    case 32:
                      return _context.abrupt("break", 63);

                    case 33:
                      _context.next = 35;
                      return this.alert.create({
                        header: 'Ошибка',
                        message: 'Не удалось подтвердить заказ.',
                        buttons: ['OK']
                      });

                    case 35:
                      alert6 = _context.sent;
                      _context.next = 38;
                      return alert6.present();

                    case 38:
                      return _context.abrupt("break", 63);

                    case 39:
                      _context.next = 41;
                      return this.alert.create({
                        header: 'Спасибо!',
                        message: 'Отзыв успешно отправлен.',
                        buttons: ['OK']
                      });

                    case 41:
                      alert7 = _context.sent;
                      _context.next = 44;
                      return alert7.present();

                    case 44:
                      return _context.abrupt("break", 63);

                    case 45:
                      _context.next = 47;
                      return this.alert.create({
                        header: 'Ошибка',
                        message: 'Не удалось отправить отзыв.',
                        buttons: ['OK']
                      });

                    case 47:
                      alert8 = _context.sent;
                      _context.next = 50;
                      return alert8.present();

                    case 50:
                      return _context.abrupt("break", 63);

                    case 51:
                      _context.next = 53;
                      return this.alert.create({
                        header: 'Звонок клиенту',
                        message: 'Запрос обрабатывается, вам сейчас позвонят.',
                        buttons: ['OK']
                      });

                    case 53:
                      alert9 = _context.sent;
                      _context.next = 56;
                      return alert9.present();

                    case 56:
                      return _context.abrupt("break", 63);

                    case 57:
                      _context.next = 59;
                      return this.alert.create({
                        header: 'Настройки сохранены!',
                        buttons: ['OK']
                      });

                    case 59:
                      alert10 = _context.sent;
                      _context.next = 62;
                      return alert10.present();

                    case 62:
                      return _context.abrupt("break", 63);

                    case 63:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setGuessMode",
          value: function setGuessMode(guessMode) {
            this.settings.rules.gess = guessMode;
          }
        }, {
          key: "getGuessMode",
          value: function getGuessMode() {
            return Boolean(Number(this.settings.rules.gess));
          } //Сохранение режима построения маршрута по умолчанию

        }, {
          key: "setDefaultRouteBuilding",
          value: function setDefaultRouteBuilding(defaultRouteBuilding) {
            defaultRouteBuilding && localStorage.setItem('defaultRouteBuilding', defaultRouteBuilding);
          }
        }, {
          key: "getDefaultRouteBuilding",
          value: function getDefaultRouteBuilding() {
            return this.settings.rules.autoStartRoute;
          }
        }, {
          key: "setRoutingMode",
          value: function setRoutingMode(auto) {
            auto && localStorage.setItem('auto', auto + '');
          }
        }, {
          key: "getRoutingMode",
          value: function getRoutingMode() {
            return this.settings.rules.typeRoute;
          }
        }, {
          key: "check",
          value: function check(mode) {
            var _this4 = this;

            this.bScan.scan().then(function (scanData) {
              console.log('sys:: auth.check() данные qr-кода: ', scanData);
              var url = _this4.sys.proxy + 'https://mobile.postsrvs.ru/admin/ajax/wh.php';
              var data = {
                'cId': _this4.getUserId(),
                'token': "l;sdfjkhglsoapl[",
                'qr': scanData.text,
                'mode': 'check' + mode
              };
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json'
              });

              _this4.http.post(url, data, {
                headers: headers
              }).subscribe(function (data) {
                if (data.success == true) {
                  _this4.checkState = 'checked' + mode;
                  localStorage.check = mode;
                }
              });
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_10__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_11__["NavService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
          }, {
            type: _settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]
          }, {
            type: _services_sys_service__WEBPACK_IMPORTED_MODULE_10__["SysService"]
          }, {
            type: _services_nav_service__WEBPACK_IMPORTED_MODULE_11__["NavService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/courier.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/courier.service.ts ***!
      \*********************************************/

    /*! exports provided: CourierService */

    /***/
    function srcAppServicesCourierServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourierService", function () {
        return CourierService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/state.service */
      "./src/app/services/state.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./settings.service */
      "./src/app/services/settings.service.ts");
      /* harmony import */


      var _services_sys_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/sys.service */
      "./src/app/services/sys.service.ts");
      /* harmony import */


      var ionic_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ionic-cache */
      "./node_modules/ionic-cache/dist/index.js");

      var CourierService = /*#__PURE__*/function () {
        function CourierService(http, router, plt, state$, auth, settings, sys, cache) {
          _classCallCheck(this, CourierService);

          this.http = http;
          this.router = router;
          this.plt = plt;
          this.state$ = state$;
          this.auth = auth;
          this.settings = settings;
          this.sys = sys;
          this.cache = cache;
          this.ordersInfo = [];
          this.ordersShortData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.checkedOnWork = true;
          this.sortOrders = {
            "g_done": 0,
            "g_process": 0,
            "g_fail": 0,
            "all": 0
          }; //при выходе из приложения возвращаем начальное состояние

          var self = this;
          this.state$.interval_1ss.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.state$.stop$)).subscribe(function () {
            var old_val = self.state$.load_lvl.getValue();
            self.state$.load_lvl.next(old_val + 1.7);
          });
          var self = this;
          this.state$.stop$.subscribe(function () {
            self.logout();
          }); //обновляем заказы по запросу

          this.state$.updateWayInfo.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.state$.stop$)).subscribe(function () {
            self.updateOrders();
          });
          this.state$.g_state.subscribe(function (state) {
            if (state == 'login') {
              self.initOrders();
              self.updateOrders();
            }
          });
          this.state$.init_params_state.subscribe(function (state) {
            if (state == 'init_geo_done') {
              self.initOrders();
            }
          });
          this.state$.status_changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.state$.stop$)).subscribe(function () {
            self.state$.state.next('init');
          });
        }
        /**
         * Меняем на серере режим маршрута
         */


        _createClass(CourierService, [{
          key: "changeRouteMode",
          value: function changeRouteMode(mode) {
            if (this.state$.way.getValue() !== null) {
              var url = 'orders';
              var routeId = this.state$.way.getValue()[0].route;
              var data = {
                'action': 'changeRouteMode',
                'routeId': this.state$.way.getValue()[0].route
              };

              if (mode == 'auto' || mode == 'fullHand') {
                data['mode'] = mode;
              } else {
                this.auth.showError(5);
                return false;
              }

              var self = this;
              this.auth.sendPost(url, data).subscribe(function (resp) {
                if (resp.success == 'true') {
                  self.state$.manual_route = resp.mode == 'fullHand' ? true : false;
                  self.state$.updateWayInfo.next();
                } else {
                  self.auth.showError(5);
                }
              });
            }
          }
        }, {
          key: "updateOrders",
          value: function updateOrders() {
            this.state$.state.next('init');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {} //Собираем необходимую инфу по заказам

        }, {
          key: "initOrders",
          value: function initOrders() {
            var _this5 = this;

            var self = this; //проверяем наличие координат перед запуском

            if (this.state$.position.getValue() == null) {
              return false;
            } //Запускаем инициализацию
            //Костыль для мгновенного отображения листина в обход ожидания статусов по апи


            this.initStatuses();

            if (!this.state$.courier_init) {
              this.state$.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.state$.stop$)).subscribe(function (state) {
                console.log('sys:: state', JSON.stringify(state));

                switch (state) {
                  case 'init':
                    if (_this5.auth.getDefaultRouteBuilding() == '1') {
                      console.log('sys:: дефолтное построение маршрута ', _this5.auth.getDefaultRouteBuilding());
                      self.getWay();
                    } else {
                      self.state$.state.next('way_init');
                    }

                    break;

                  case 'way_init':
                    self.getOrders().subscribe(function (data) {
                      console.log('sys:: Данные о заказах', data);

                      if (data.success == 'true' && data.reason !== 'нет заказов') {
                        self.state$.orders.next(data.orders);
                        self.state$.orders_data = data.orders;
                        self.state$.state.next('orders_init');
                        _this5.state$.confirmed = true;
                        data.orders.forEach(function (order) {
                          if (order.confirm == '0') {
                            self.state$.confirmed = false;
                          }
                        });
                      } else if (data.reason == 'empty' || data.reason == 'нет заказов') {
                        console.log('Массив данных о заказах пуст');
                        var rmpt = [];
                        self.state$.orders.next(rmpt);
                        self.state$.orders_data = rmpt;
                        self.state$.state.next('orders_init');
                        _this5.state$.confirmed = true;
                      }
                    }, function (error) {
                      console.error('sys:: Ошибка получения данных о заказах!');
                    });
                    break;
                }
              });
              this.state$.courier_init = true;
            }

            this.state$.state.next('init');
            this.checkWay();
          } //следит за изменениями заказов

        }, {
          key: "checkWay",
          value: function checkWay() {
            var self = this;

            if (!this.state$.check_state) {
              this.state$.interval_3.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.state$.stop$)).subscribe(function () {
                self.state$.load_lvl.next(0);
                self.state$.state.next('init');
              });
              this.state$.check_state = true;
            }
          }
          /*Запрос списка заказов курьера
            В зависимости от режима либо запоминаем данные в сервисе,
            либо сравниваем с маршрутом созданным курьером(manualWay)
          */

        }, {
          key: "getWay",
          value: function getWay() {
            console.log('sys::getWay()');
            var routingMode = this.auth.getRoutingMode();
            var mode;

            if (routingMode !== 'standart') {
              mode = '1';
            } else {
              mode = '0';
            }

            var url = 'orders';
            var data = {
              'action': 'getWay',
              'lt': this.state$.position.getValue().lt,
              'lg': this.state$.position.getValue().lg,
              'auto': mode
            };
            var app_mode = this.auth.getMode();

            if (app_mode == 'fullHand' || app_mode == 'hand' || this.state$.manual_route) {
              data['mode'] = "manual";
            } else {
              data['mode'] = "auto";
            }

            var resp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            var self = this;
            this.auth.sendPost(url, data).subscribe(function (orders) {
              if (orders.success == 'true') {
                self.state$.manual_route = orders.mode == "manual" ? true : false;
                self.state$.way.next(orders.orders);
                self.state$.state.next('way_init');
              } else if (orders.reason == 'empty') {
                self.state$.manual_route = false;
                var emt = [];
                self.state$.way.next(emt);
                self.state$.state.next('way_init');
              }
            });
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var url = "orders";
            var ids = [];
            var way = this.ordersInfo;
            this.ordersShortData.subscribe(function (data) {
              way = data;
            });

            if (way !== undefined) {
              for (var i = 0; i < way.length; i++) {
                ids.push(way[i].id);
              }
            } else {
              ids = [];
            }

            var routingAuto = this.auth.getRoutingMode();
            var auto;

            if (routingAuto !== 'standart') {
              auto = '1';
            } else {
              auto = '0';
            }

            var data = {
              'action': 'getOrders',
              'orders_id': ids
            };
            return this.auth.sendPost(url, data);
          } //Запрос основных данных курьера
          //@sync_id - ид курьера
          //@more - флаг необходимости доп данных (краткая инфа о заказах для листинга)
          //@CL - код филлиала

        }, {
          key: "getBalance",
          value: function getBalance(sync_id) {
            var more = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var CL = this.settings.get('cl');
            var url = this.sys.proxy + "https://terminal.vestovoy.ru/info/stat.php?cid=" + sync_id + '&more=' + more + '&CL=' + CL;
            return this.http.get(url);
          }
        }, {
          key: "getStatus",
          value: function getStatus(order) {
            if (order.status_id == 1) {
              return 'Доставляется';
            } else {
              var statuses = this.state$.statuses.getValue();

              for (var i = 0; i < statuses.length; i++) {
                var status = statuses[i];

                if (status.id == order.status_id) {
                  return status.status;
                }
              }
            }
          }
        }, {
          key: "changeStatus",
          value: function changeStatus() {
            var _this6 = this;

            var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var comment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var reason = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var goods = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var payment = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
            var new_plan_date = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
            var check = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
            var recognizedCheckData = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
            var url = 'orders';
            var draw = localStorage.getItem('drawImg');
            var data = {
              'action': 'changedStatus',
              'status': status,
              'id': id,
              'comment': comment,
              'reason': reason,
              'goods': goods,
              'payment': payment,
              'new_plam_date': new_plan_date,
              'check': check,
              'recognizedCheckData': recognizedCheckData
            };
            if (draw) data['sign'] = draw;

            if (navigator.onLine) {
              return this.auth.sendPost(url, data);
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

                _this6.cache.saveItem('requests', requests);
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])([{
                success: 'true'
              }]);
            }
          }
        }, {
          key: "logout",
          value: function logout() {}
          /**
           * Ищет заказ в милевском(через 4 круга ада)
           * Возвращает adress_code
           * проверяем, если заказ есть в списке заказов курьера - возыращаем его
           * если нет - false
           * @param code //штрих-код
           */

        }, {
          key: "findOrder",
          value: function findOrder(code) {
            var url = 'orders';
            var data = {
              'action': 'findOrder',
              'code': code
            };
            var resp = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            var orders = this.state$.orders_data;
            this.auth.sendPost(url, data).subscribe(function (od) {
              if (od.success == 'true') {
                var n_f = true;
                var orderId = od.order_id;

                for (var i = 0; i < orders.length; i++) {
                  if (orders[i].id == orderId) {
                    n_f = false;
                  }
                }

                if (n_f) {
                  resp.next(false);
                } else {
                  resp.next(od);
                }
              } else {
                resp.next(od);
              }
            });
            return resp;
          }
        }, {
          key: "sumbitOrder",
          value: function sumbitOrder(orderId) {
            var url = 'orders';
            var data = {
              'action': 'submitOrder',
              'orderId': orderId
            };
            console.log('submit_order_data', data);
            var self = this;
            var ret = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.auth.sendPost(url, data).subscribe(function (resp) {
              console.log('submit_order_response', resp);

              if (resp.success == 'true') {
                self.state$.updateWayInfo.next();
                ret.next(true);
              } else {
                self.auth.showError(6);
                ret.next(false);
              }
            });
            return ret;
          }
        }, {
          key: "check_to_work",
          value: function check_to_work() {
            var _this7 = this;

            var url = this.sys.proxy + 'https://mobile.postsrvs.ru/admin/ajax/check_to_work.php';
            var data = {
              cId: this.auth.getUserId(),
              token: "l;sdfjkhglsoapl["
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*',
              'Content-type': 'application/json'
            });
            this.http.post(url, data, {
              headers: headers
            }).subscribe(function (data) {
              if (data.success == true) {
                var checkedDate = new Date();
                localStorage.setItem('checkedDate', checkedDate.toLocaleDateString());
                _this7.checkedOnWork = true;
              }
            });
          }
        }, {
          key: "count_orders",
          value: function count_orders(orders) {
            var g_done = 0;
            var g_process = 0;
            var g_fail = 0;
            var all = orders.length;

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

            this.sortOrders = {
              g_done: g_done,
              g_process: g_process,
              g_fail: g_fail,
              all: all
            };
          }
        }, {
          key: "initStatuses",
          value: function initStatuses() {
            var statuses = [{
              "id": 4,
              "status": "Не доставлено"
            }, {
              "id": 5,
              "status": "Доставлено"
            }, {
              "id": 6,
              "status": "Частично доставлено"
            }];
            this.state$.statuses.next(statuses);
            this.state$.s_state.next('status_init');
          } //Завершение рабочего дня курьера

        }, {
          key: "endWork",
          value: function endWork() {
            var url = this.sys.proxy + 'https://mobile.postsrvs.ru/admin/ajax/end_work.php';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*',
              'Content-type': 'application/json'
            });
            var data = {
              "token": "l;sdfjkhglsoapl[",
              "cId": this.auth.getUserId()
            };
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }]);

        return CourierService;
      }();

      CourierService.ɵfac = function CourierService_Factory(t) {
        return new (t || CourierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_9__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"]));
      };

      CourierService.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CourierService
      });
      CourierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CourierService,
        factory: CourierService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourierService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }, {
            type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"]
          }, {
            type: _services_sys_service__WEBPACK_IMPORTED_MODULE_9__["SysService"]
          }, {
            type: ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/nav.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/nav.service.ts ***!
      \*****************************************/

    /*! exports provided: NavService */

    /***/
    function srcAppServicesNavServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavService", function () {
        return NavService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var NavService = function NavService() {
        _classCallCheck(this, NavService);

        this.tabNav = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
      };

      NavService.ɵfac = function NavService_Factory(t) {
        return new (t || NavService)();
      };

      NavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavService,
        factory: NavService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/settings.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/settings.service.ts ***!
      \**********************************************/

    /*! exports provided: SettingsService */

    /***/
    function srcAppServicesSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
        return SettingsService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _services_sys_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/sys.service */
      "./src/app/services/sys.service.ts"); //Отдельный сервис для лучших реализаций функционала
      //Если есть выбор велосипедов для решения задаи в этом приложении - выбирай велосипеды из этого комплекта


      var SettingsService = /*#__PURE__*/function () {
        function SettingsService(http, sys) {
          _classCallCheck(this, SettingsService);

          this.http = http;
          this.sys = sys;
          this.val = localStorage;
          this.rules = {
            appMode: "",
            scanMode: "",
            autoStartRoute: "",
            typeRoute: "",
            storeCheckMode: "",
            gess: undefined,
            schedule: undefined,
            phoneMode: ''
          };
          this.state = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        } //Записывает настройку в локалстораж


        _createClass(SettingsService, [{
          key: "set",
          value: function set(setting, value) {
            setting && localStorage.removeItem(setting);

            if (setting !== '') {
              localStorage.setItem(setting, value);
            }
          }
        }, {
          key: "get",
          value: function get(setting) {
            var value = localStorage.getItem(setting);

            if (value == null) {
              value = '';
            }

            return value;
          } //Получение настроек с сервака
          //@cid - id курьера

        }, {
          key: "getSettings",
          value: function getSettings(cid) {
            var _this8 = this;

            var self = this;
            var data = {
              cid: cid
            };
            var mapSettings = {
              'appMode': 'activeMode',
              'scanMode': 'scanMode',
              'autoStartRoute': 'defaultRouteBuilding',
              'typeRoute': 'routingModeAuto',
              'storeCheckMode': 'checkout'
            };
            var url = this.sys.proxy + 'https://mobile.postsrvs.ru/mobile/getRules.php';
            this.http.post(url, data).subscribe(function (data) {
              if (data.success == true) {
                _this8.rules = data.rules;

                _this8.state.next('hasRules');

                if (data.rules.typeRoute == 'standart') {
                  _this8.routingModeAuto = false;
                }
              }
            });
          }
        }]);

        return SettingsService;
      }();

      SettingsService.ɵfac = function SettingsService_Factory(t) {
        return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_3__["SysService"]));
      };

      SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: SettingsService,
        factory: SettingsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _services_sys_service__WEBPACK_IMPORTED_MODULE_3__["SysService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/state.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/state.service.ts ***!
      \*******************************************/

    /*! exports provided: StateService */

    /***/
    function srcAppServicesStateServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateService", function () {
        return StateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/web-intent/ngx */
      "./node_modules/@ionic-native/web-intent/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _sys_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sys.service */
      "./src/app/services/sys.service.ts");

      var StateService = /*#__PURE__*/function () {
        function StateService(wi, http, sys) {
          _classCallCheck(this, StateService);

          this.wi = wi;
          this.http = http;
          this.sys = sys; // переменные состояний
          //GLOBAL

          this.login_state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('not_login');
          this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // останаливает все подписки;

          /* Режим работы с маршрутом
              auto    - маршрут с бека
              manual  - курьер рисует сам
          */

          this.manual_route = false;
          this.old_way = null;
          this.confirmed = false;
          this.scan_mode = false; //INTERVALS

          this.interval_1ss = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
          this.interval_1s = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(2000);
          this.interval_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(3000);
          this.interval_3m = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(3000);
          this.interval_3 = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(4000);
          this.interval_2s = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(15000);
          this.interval_30 = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(30000);
          this.interval_1m = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(60000); //MAP

          this.position = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.points = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.map_state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.route_state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('not_init');
          this.change_state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('not_init');
          this.map_event = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.point_check = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('not_init');
          this.geo_check = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('not_init');
          this.init_params_state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('not_init');
          this.init_map_state = false;
          this.check_changes_state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('not_init');
          this.linkPoints = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('not_init');
          this.link_init = false;
          this.map_state_watch = false;
          this.disLink = true; //COURIER

          this.orders = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.statuses = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.way = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.o_status = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.s_state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.$stop = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.check_state = false;
          this.g_state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('unLogin');
          this.courier_init = false;
          this.orders_page_check = false;
          this.status_changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.sc_flag = false;
          this.page_orders_check = false;
          this.client_states = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null); //STATUS-BAR

          this.load_lvl = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
          this.c_update_content_f = false; //BALANCE

          this.balance_check = false; // BROADCAST
          //обновляем все данные с сервера

          this.updateWayInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // DATA

          this.orders_data = null;
          this.statuses_data = null; //NOTIFICATIONS

          this.notifications = [];
          this.notificationStr = null;
          this.filial = '';
          var self = this;
          /* Подписываемся на все сабжекты поставляющие данные и запоминаем в переменных
              для отрисовки на страницах (дабы убрать подписки со страниц)
          */

          this.orders.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.stop$)).subscribe(function (od) {
            if (od != null) {
              self.orders_data = od;
            }
          });
          this.statuses.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.stop$)).subscribe(function (st) {
            if (st != null) {
              self.statuses_data = st;
            }
          });
        }

        _createClass(StateService, [{
          key: "orderCoordinates",
          value: function orderCoordinates() {
            return this.coords;
          }
        }, {
          key: "setNotification",
          value: function setNotification(tag, mes) {
            this.notifications[tag] = mes;
            this.setNotificationStr();
          }
        }, {
          key: "unsetNotification",
          value: function unsetNotification(tag) {
            delete this.notifications[tag];
            this.setNotificationStr();
          }
        }, {
          key: "getNotification",
          value: function getNotification(tag) {
            return this.notifications[tag];
          }
        }, {
          key: "setNotificationStr",
          value: function setNotificationStr() {
            var n_s = "";

            for (var tag in this.notifications) {
              n_s += this.notifications[tag];
            }

            this.notificationStr = n_s;
          } //при выходе возвращаем приложение в иходное состояние

        }, {
          key: "logout",
          value: function logout() {
            this.stop$.next(); // map

            this.position.next(null);
            this.points.next(null);
            this.l_route = null;
            this.l_map = null;
            this.duration = null;
            this.map_state.next(null);
            this.route_state.next('not_init');
            this.change_state.next('not_init');
            this.map_event.next('not_init');
            this.point_check.next('not_init');
            this.geo_check.next('not_init');
            this.init_params_state.next('not_init');
            this.check_changes_state.next('not_init');
            this.linkPoints.next('not_init');
            this.link_init = false;
            this.map_state_watch = false;
            this.init_map_state = false; //courier

            this.orders.next(null);
            this.orders_data = null;
            this.statuses.next(null);
            this.way.next(null);
            this.o_status.next(null);
            this.state.next(null);
            this.s_state.next(null);
            this.check_state = false;
            this.courier_init = false;
            this.orders_page_check = false;
            this.sc_flag = false;
            this.page_orders_check = false;
            this.balance_check = false;
            this.c_update_content_f = false;
            this.load_lvl.next(0);
            this.old_way = null;
          } //Открыть маршрут в навигаторе

        }, {
          key: "intentStart",
          value: function intentStart(coordinates) {
            var _this9 = this;

            console.log('sys:: coordinates', coordinates);
            var options = {
              action: this.wi.ACTION_VIEW,
              url: 'yandexnavi://build_route_on_map?lat_to=' + coordinates[0] + '&lon_to=' + coordinates[1] + '&client=241',
              "package": 'ru.yandex.yandexnavi'
            };
            this.sys.getYandexnaviSignature(coordinates[0], coordinates[1]).subscribe(function (resp) {
              var signature = resp.signature;
              options.url += "&signature=".concat(signature);

              _this9.wi.startActivity(options).then(function (data) {
                console.log('sys:: yandexnavi запущен', data);
              });
            });
          } //adress - строка с адресом

        }, {
          key: "getCoordinates",
          value: function getCoordinates(adress) {
            return this.http.get('https://geocode-maps.yandex.ru/1.x/?apikey=4949ca72-35d9-48b0-892d-72d307850c87&format=json&geocode=' + adress);
          }
        }]);

        return StateService;
      }();

      StateService.ɵfac = function StateService_Factory(t) {
        return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_3__["WebIntent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sys_service__WEBPACK_IMPORTED_MODULE_5__["SysService"]));
      };

      StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StateService,
        factory: StateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ionic_native_web_intent_ngx__WEBPACK_IMPORTED_MODULE_3__["WebIntent"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _sys_service__WEBPACK_IMPORTED_MODULE_5__["SysService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/sys.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/sys.service.ts ***!
      \*****************************************/

    /*! exports provided: SysService */

    /***/
    function srcAppServicesSysServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SysService", function () {
        return SysService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/ngx/index.js");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // Здравый код, растущий рядом с какахами


      var SysService = /*#__PURE__*/function () {
        function SysService(http, device, toastController, camera) {
          _classCallCheck(this, SysService);

          this.http = http;
          this.device = device;
          this.toastController = toastController;
          this.camera = camera;
          this.proxy = 'http://mobile.postsrvs.ru:8080/';
        } //Распознавание текста


        _createClass(SysService, [{
          key: "doOCR",
          value: function doOCR(base64Image) {
            var noSkip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", '');

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          } //Получение списка заказов по idшникам

        }, {
          key: "getOrders",
          value: function getOrders(ids) {
            var url = this.proxy + "https://mobile.postsrvs.ru/mobile/orders";
            var data = {
              'uuid': this.device.uuid,
              'action': 'getOrders',
              'orders_id': ids
            };

            if (localStorage.debug == 'true') {
              data['uuid'] = '6b356755575fce31';
            }

            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-type': 'application/json'
              })
            };
            return this.http.post(url, data, httpOptions);
          } //Тост

        }, {
          key: "presentToast",
          value: function presentToast(message, color) {
            var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        header: header,
                        message: message,
                        duration: 3000,
                        color: color,
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "goToWork",
          value: function goToWork(dates) {
            var url = this.proxy + "https://mobile.postsrvs.ru/sheduleData.php";
            var data = {
              "type": "goToWork",
              "dates": dates,
              "courieriId": localStorage.user,
              "uuid": this.device.uuid
            };
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-type': 'application/json'
              })
            };
            return this.http.post(url, data, httpOptions);
          }
        }, {
          key: "getNotWorkRules",
          value: function getNotWorkRules() {
            var url = this.proxy + "https://mobile.postsrvs.ru/sheduleData.php";
            var data = {
              "type": "rules",
              "courieriId": localStorage.user,
              "uuid": this.device.uuid
            };
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-type': 'application/json'
              })
            };
            return this.http.post(url, data, httpOptions);
          } //Отправка данных о нерабочих днях и причинах

        }, {
          key: "stopWork",
          value: function stopWork(dates) {
            var url = this.proxy + "https://mobile.postsrvs.ru/sheduleData.php";
            var data = {
              "type": "stopWork",
              "dates": dates,
              "courieriId": localStorage.user,
              "uuid": this.device.uuid
            };
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-type': 'application/json'
              })
            };
            return this.http.post(url, data, httpOptions);
          } //Возвращает сигнатуру, кодированную ключем яндекс.навигатора
          //@lat - широта
          //@lon - долгота

        }, {
          key: "getYandexnaviSignature",
          value: function getYandexnaviSignature(lat, lon) {
            var url = "".concat(this.proxy, "https://areg-p.flexcore.ru/admin/accessKeySignature/index.php?LAT=").concat(lat, "&LON=").concat(lon);
            return this.http.get(url);
          } //Проверка на авторизованность
          //@appVersion - версия приложения

        }, {
          key: "checkAuth",
          value: function checkAuth() {
            var appVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var url = "".concat(this.proxy, "https://mobile.postsrvs.ru/mobile/orders");
            var data = {
              "action": "checkAuth",
              "uuid": this.device.uuid,
              'appVersion': appVersion
            };

            if (localStorage.debug == 'true') {
              data['uuid'] = '6b356755575fce31';
            }

            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-type': 'application/json'
              })
            };
            return this.http.post(url, data, httpOptions);
          }
        }, {
          key: "checkPhoto",
          value: function checkPhoto() {
            var options = {
              quality: 25,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            return this.camera.getPicture(options);
          }
        }]);

        return SysService;
      }();

      SysService.ɵfac = function SysService_Factory(t) {
        return new (t || SysService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]));
      };

      SysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: SysService,
        factory: SysService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SysService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
          }, {
            type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/sys/map.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/sys/map.service.ts ***!
      \*********************************************/

    /*! exports provided: MapService */

    /***/
    function srcAppServicesSysMapServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapService", function () {
        return MapService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
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


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/ngx/index.js");
      /* harmony import */


      var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/google-maps/ngx */
      "./node_modules/@ionic-native/google-maps/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var MapService = /*#__PURE__*/function () {
        function MapService(http, geo, device, platform, router) {
          _classCallCheck(this, MapService);

          this.http = http;
          this.geo = geo;
          this.device = device;
          this.platform = platform;
          this.router = router;
          this.infoUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(MapService, [{
          key: "getWay",
          value: function getWay(coords) {
            var url = "http://mobile.postsrvs.ru:8080/https://mobile.postsrvs.ru/mobile/orders";
            var data = {
              action: "getWay",
              lt: coords === null || coords === void 0 ? void 0 : coords.lt,
              lg: coords === null || coords === void 0 ? void 0 : coords.lg,
              auto: 0,
              mode: "auto",
              uuid: this.device.uuid
            };
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-type": "application/json"
              })
            };
            return this.http.post(url, data, httpOptions);
          }
        }, {
          key: "attachMap",
          value: function attachMap(divId, options) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      options = options || {};

                      if (!this.map) {
                        _context4.next = 14;
                        break;
                      }

                      _context4.next = 4;
                      return new Promise(function (resolve) {
                        var instance = setInterval(function () {
                          if (document.querySelectorAll("#" + divId).length > 0) {
                            clearInterval(instance);
                            resolve();
                          }
                        }, 100);
                      });

                    case 4:
                      _context4.next = 6;
                      return this.map.setDiv(divId);

                    case 6:
                      _context4.next = 8;
                      return new Promise(function (resolve) {
                        setTimeout(resolve, 100);
                      });

                    case 8:
                      if (!options) {
                        _context4.next = 12;
                        break;
                      }

                      options.mapType = options.mapType;
                      _context4.next = 12;
                      return this.map.setOptions(options);

                    case 12:
                      _context4.next = 18;
                      break;

                    case 14:
                      _context4.next = 16;
                      return this.platform.ready();

                    case 16:
                      _context4.next = 18;
                      return this._loadMap(divId, options);

                    case 18:
                      return _context4.abrupt("return", Promise.resolve(this.map));

                    case 19:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "_loadMap",
          value: function _loadMap(divId, options) {
            var _this10 = this;

            _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__["Environment"].setEnv({
              API_KEY_FOR_BROWSER_RELEASE: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164",
              API_KEY_FOR_BROWSER_DEBUG: "AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164"
            });

            var mapOptions = options || {};
            this.map = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"].create(divId, options);
            return new Promise(function (resolve) {
              _this10.map.one(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsEvent"].MAP_READY).then(function () {
                resolve();
              });
            });
          }
        }, {
          key: "detachMap",
          value: function detachMap() {
            if (!this.map) return;
            this.map.setDiv();
            this.map.off();
            this.map.setOptions({
              camera: {
                target: {
                  lat: 0,
                  lng: 0
                },
                zoom: 1,
                bearing: 0,
                tilt: 0,
                padding: 0
              },
              gestures: {
                scroll: true,
                tilt: true,
                rotate: true,
                zoom: true
              },
              controls: {
                compass: true,
                indoorPicker: true,
                myLocationButton: true,
                myLocation: true,
                zoom: true,
                mapToolbar: true
              },
              preferences: {
                zoom: null,
                building: true,
                clickableIcons: false,
                restriction: null
              }
            });
            this.map.clear();
          }
        }, {
          key: "orderDetails",
          value: function orderDetails(orderId) {
            console.log("sys:: переход на страницу заказа ", orderId);
            this.router.navigate(["/order", orderId]);
            localStorage.removeItem("needOrder");
          }
        }, {
          key: "navigate",
          value: function navigate(page) {
            this.router.navigate(page);
          }
        }, {
          key: "showRoute",
          value: function showRoute(order) {
            var meta = {
              label: 'showRouteToOrder',
              order: order
            };
            this.infoUpdated.next(meta);
            this.router.navigate(['map']);
          }
        }]);

        return MapService;
      }();

      MapService.ɵfac = function MapService_Factory(t) {
        return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MapService,
        factory: MapService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MapService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
          }, {
            type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/sys/order.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/sys/order.service.ts ***!
      \***********************************************/

    /*! exports provided: OrderService */

    /***/
    function srcAppServicesSysOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _courier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../courier.service */
      "./src/app/services/courier.service.ts");
      /* harmony import */


      var _sys_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../sys.service */
      "./src/app/services/sys.service.ts");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(auth, storage, sys, courier) {
          _classCallCheck(this, OrderService);

          this.auth = auth;
          this.storage = storage;
          this.sys = sys;
          this.courier = courier;
        }

        _createClass(OrderService, [{
          key: "sendDelayedCall",
          value: function sendDelayedCall(order, status) {
            var _this11 = this;

            order.status_id = status;
            var self = this;
            this.getPayData(order.client_id).subscribe(function (res) {
              console.log("GET_PAY_DATA", res);

              if (res.success == "true") {
                self.pay_access_data = res;

                if (status == 5 || status == 6) {
                  _this11.sendPay(order);
                } else {
                  _this11.submitChange(order, status);
                }
              }
            });
          }
        }, {
          key: "sendPay",
          value: function sendPay(order) {
            var callback_url = this.sys.proxy + "https://mobile.postsrvs.ru/mobile/pay_callback.php";
            var products = [];

            for (var code in order.quants) {
              if (order.quants[code]["amount"] > 0) {
                for (var i = 0; i < order.goods.length; i++) {
                  if (order.goods[i]["Code"] == code) {
                    var good_name = order.goods[i]["Name"];
                    var good_amount = order.quants[code]["amount"];
                    var good_price = Math.round(order.quants[code]["price"] * 100) / 100;
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
            var order_data = {
              apikey: String(this.pay_access_data.api_key),
              login: String(this.pay_access_data.phone),
              cashier_name: String(this.pay_access_data.name) + String(this.pay_access_data.phone),
              purchase: purchase,
              callback_url: callback_url,
              mode: "email",
              customer_email: order.email_input,
              customer_phone: order.phone_input
            };

            if (order.selectedPayment == "2") {
              order_data["card_amount"] = "#";
            } else {
              order_data["cash_amount"] = "#";
            }

            if (order.phone_input != "") {
              order_data["customer_phone"] = order.phone_input;
            }

            this.send_api_data(order_data, order);
          }
        }, {
          key: "submitChange",
          value: function submitChange(order, status) {
            var _this12 = this;

            var self = this;
            var noSkip = true;

            switch (status) {
              case 4:
                if (order.selectedReason != null) {
                  var new_plan_date = new Date(order.new_plan_date);
                  this.courier.changeStatus(String(status), String(order.id), undefined, order.selectedReason, null, null, new_plan_date.toLocaleDateString()).subscribe(function (data) {
                    localStorage.removeItem("drawImg");
                  });
                }

                break;

              case 5:
                if (order.selectedPayment !== '2') {
                  noSkip = false;
                }

                this.sys.doOCR(order.check, noSkip).then(function (recognizedData) {
                  var text = order.commentText ? order.commentText : "";

                  _this12.courier.changeStatus(String(status), String(order.id), text, undefined, undefined, order.selectedPayment, '', order.check, recognizedData).subscribe(function (data) {
                    localStorage.removeItem("drawImg");
                  });
                });
                break;

              case 6:
                if (order.selectedPayment !== '2') {
                  noSkip = false;
                }

                this.sys.doOCR(order.check, noSkip).then(function (recognizedData) {
                  _this12.courier.changeStatus(String(status), String(order.id), undefined, undefined, order.quants, order.selectedPayment, '', order.check, recognizedData).subscribe(function (data) {
                    localStorage.removeItem("drawImg");
                  });
                });
                break;
            }
          }
        }, {
          key: "getPayData",
          value: function getPayData(client_id) {
            var url = "pay_order";
            var data = {
              action: "getData",
              orderId: client_id
            };
            return this.auth.sendPost(url, data);
          }
        }, {
          key: "initClientInfo",
          value: function initClientInfo(phone) {
            var mail_exp = /(?:([\s.,]{1}))([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/gm;
            var infoStr = phone;
            var mail = mail_exp.exec(infoStr);

            if (mail != null) {
              return mail[0];
            } else {
              return null;
            }
          }
        }, {
          key: "send_api_data",
          value: function send_api_data(api_data, order) {
            var url = "pay_order";
            var self = this;
            order.rur = 0;
            api_data.purchase.products.forEach(function (product) {
              order.rur += product.price * product.quantity;
            });
            var data = {
              action: "sendPay",
              orderData: api_data,
              orderId: order.id
            };
            this.auth.sendPost(url, data).subscribe(function (res) {
              self.submitChange(order, order.status_id);
            });
          }
        }]);

        return OrderService;
      }();

      OrderService.ɵfac = function OrderService_Factory(t) {
        return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sys_service__WEBPACK_IMPORTED_MODULE_4__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_courier_service__WEBPACK_IMPORTED_MODULE_3__["CourierService"]));
      };

      OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OrderService,
        factory: OrderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]
          }, {
            type: _sys_service__WEBPACK_IMPORTED_MODULE_4__["SysService"]
          }, {
            type: _courier_service__WEBPACK_IMPORTED_MODULE_3__["CourierService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        wiredPath: ''
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
          useValue: 'ru'
        }]
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/timkovik/Documents/Repositories/postsrvs/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map