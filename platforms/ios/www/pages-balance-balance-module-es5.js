(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"], {
    /***/
    "./src/app/components/balance/review/review.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/balance/review/review.component.ts ***!
      \***************************************************************/

    /*! exports provided: ReviewComponent */

    /***/
    function srcAppComponentsBalanceReviewReviewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewComponent", function () {
        return ReviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-feather */
      "./node_modules/angular-feather/fesm2015/angular-feather.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      var ReviewComponent = /*#__PURE__*/function () {
        function ReviewComponent() {
          _classCallCheck(this, ReviewComponent);

          this.close_E = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.send_E = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.r_text = null;
        }

        _createClass(ReviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.close_E.emit();
          }
        }, {
          key: "send",
          value: function send() {
            this.send_E.emit(this.r_text);
          }
        }]);

        return ReviewComponent;
      }();

      ReviewComponent.ɵfac = function ReviewComponent_Factory(t) {
        return new (t || ReviewComponent)();
      };

      ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReviewComponent,
        selectors: [["app-review"]],
        outputs: {
          close_E: "close_E",
          send_E: "send_E"
        },
        decls: 14,
        vars: 1,
        consts: [[1, "rw-shirm"], [1, "rw-window"], [1, "rw-title"], [3, "click"], ["name", "x-square"], [1, "rw-body"], [1, "rw-text"], [1, "rw-text-title"], ["cols", "30", "rows", "5", 3, "ngModel", "ngModelChange"], [1, "rw-btns"], [1, "btn-ok", 3, "click"]],
        template: function ReviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041E\u0442\u0437\u044B\u0432 \u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_Template_i_click_4_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i-feather", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReviewComponent_Template_textarea_ngModelChange_10_listener($event) {
              return ctx.r_text = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_Template_div_click_12_listener() {
              return ctx.send();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.r_text);
          }
        },
        directives: [angular_feather__WEBPACK_IMPORTED_MODULE_1__["FeatherComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: [".rw-shirm[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.rw-window[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 26% 74%;\n  background: #fff;\n  height: 268px;\n  width: 92%;\n}\n\n.rw-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 17px;\n  text-transform: uppercase;\n  font-family: Roboto;\n  background: #2b637e;\n  color: #ffffff;\n  position: relative;\n}\n\n.rw-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn-ok[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 60%;\n  background: #2b637e;\n  color: #fff;\n  border-radius: 3px;\n  font-size: 19px;\n  margin: 7px 0 0 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ni[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 2px;\n  font-size: 21px;\n}\n\n.rw-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 75% 15%;\n}\n\n.rw-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.rw-text-title[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYWxhbmNlL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUdBO0VBQ0ksYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7QUFBZDs7QUFHQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQXRCOztBQUdBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFBdkI7O0FBR0E7RUFDSSxZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFBdkI7O0FBT0E7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlO0FBSm5COztBQU9BO0VBQ0ksYUFBYTtFQUNiLDJCQUEyQjtBQUovQjs7QUFPQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUoxQjs7QUFPQTtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7QUFKdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JhbGFuY2UvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ydy1zaGlybXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5ydy13aW5kb3d7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI2JSA3NCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDI2OHB4O1xuICAgIHdpZHRoOiA5MiU7XG59XG5cbi5ydy10aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBiYWNrZ3JvdW5kOiAjMmI2MzdlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJ3LWJ0bnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnRuLW9re1xuICAgIGhlaWdodDogMzhweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJhY2tncm91bmQ6ICMyYjYzN2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBtYXJnaW46IDdweCAwIDAgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG4tbm90e1xuXG59XG5cbml7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzcHg7XG4gICAgdG9wOiAycHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4ucnctYm9keXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzUlIDE1JTtcbn1cblxuLnJ3LXRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ydy10ZXh0LXRpdGxle1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-review',
            templateUrl: './review.component.html',
            styleUrls: ['./review.component.scss']
          }]
        }], function () {
          return [];
        }, {
          close_E: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          send_E: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/balance/balance.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/balance/balance.module.ts ***!
      \*************************************************/

    /*! exports provided: BalancePageModule */

    /***/
    function srcAppPagesBalanceBalanceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalancePageModule", function () {
        return BalancePageModule;
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


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _components_balance_review_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/balance/review/review.component */
      "./src/app/components/balance/review/review.component.ts");
      /* harmony import */


      var _balance_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./balance.page */
      "./src/app/pages/balance/balance.page.ts");
      /* harmony import */


      var _icons_icons_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../icons/icons.module */
      "./src/app/icons/icons.module.ts");

      var routes = [{
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_7__["BalancePage"]
      }];

      var BalancePageModule = function BalancePageModule() {
        _classCallCheck(this, BalancePageModule);
      };

      BalancePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BalancePageModule
      });
      BalancePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BalancePageModule_Factory(t) {
          return new (t || BalancePageModule)();
        },
        imports: [[_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BalancePageModule, {
          declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_7__["BalancePage"], _components_balance_review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"]],
          imports: [_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalancePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_7__["BalancePage"], _components_balance_review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/balance/balance.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/balance/balance.page.ts ***!
      \***********************************************/

    /*! exports provided: BalancePage */

    /***/
    function srcAppPagesBalanceBalancePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BalancePage", function () {
        return BalancePage;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/ngx/index.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/ngx/index.js");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "./node_modules/@ionic-native/firebase-x/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_courier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/courier.service */
      "./src/app/services/courier.service.ts");
      /* harmony import */


      var _services_settings_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/settings.service */
      "./src/app/services/settings.service.ts");
      /* harmony import */


      var _services_state_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/state.service */
      "./src/app/services/state.service.ts");
      /* harmony import */


      var _services_sys_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/sys.service */
      "./src/app/services/sys.service.ts");
      /* harmony import */


      var _services_sys_map_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../services/sys/map.service */
      "./src/app/services/sys/map.service.ts");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angular-feather */
      "./node_modules/angular-feather/fesm2015/angular-feather.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _components_balance_review_review_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../components/balance/review/review.component */
      "./src/app/components/balance/review/review.component.ts");

      function BalancePage_div_10_button_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_10_button_49_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r7.cashOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0421\u0434\u0430\u0442\u044C \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BalancePage_div_10_div_50_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.cashCheckData.comment, " ");
        }
      }

      function BalancePage_div_10_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0421\u0440\u0435\u0434\u0441\u0442\u0432 \u0441\u0434\u0430\u043D\u043E:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BalancePage_div_10_div_50_div_10_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.cashCheckData.sum, "\u0440.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.cashCheckData.comment != null && ctx_r5.cashCheckData.comment != "");
        }
      }

      function BalancePage_div_10_button_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_10_button_53_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r10.showSchedule();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BalancePage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0418\u043C\u044F \u043A\u0443\u0440\u044C\u0435\u0440\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E \u043F\u043E \u043A\u0430\u0440\u0442\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u0417\u0430\u043A\u0430\u0437\u043E\u0432 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u0417\u0430\u043A\u0430\u0437\u043E\u0432 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u0417\u0430\u043A\u0430\u0437\u043E\u0432 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "ion-img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, BalancePage_div_10_button_49_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, BalancePage_div_10_div_50_Template, 11, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_10_Template_button_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.writeReview();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\u041E\u0442\u0437\u044B\u0432 \u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, BalancePage_div_10_button_53_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.info.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.info.sumAll, "\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.info.sumCard, "\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.info.sumNal, "\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.info.ordersAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.info.ordersDone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.info.ordersSomeDone);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.info.ordersInWork);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.info.ordersFail);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "data:image/jpg;base64," + ctx_r0.info.qr);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.info != null && !ctx_r0.cashCheck);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.cashCheck);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.settings.rules.schedule);
        }
      }

      function BalancePage_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-spinner", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BalancePage_div_12_div_1_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BalancePage_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_12_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r18.cashOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i-feather", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0412\u044B \u0441\u0434\u0430\u0435\u0442\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u0440. \u0412\u0435\u0440\u043D\u043E?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "textarea", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function BalancePage_div_12_div_1_Template_textarea_input_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r20.commentInput();
          })("ngModelChange", function BalancePage_div_12_div_1_Template_textarea_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r21.commentText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BalancePage_div_12_div_1_span_12_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_12_div_1_Template_div_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r22.answer(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0414\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_12_div_1_Template_div_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r23.answer(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u041D\u0435\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.info.sumNal);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r14.commentText);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.commentError);
        }
      }

      function BalancePage_div_12_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0412\u044B \u0441\u0434\u0430\u0435\u0442\u0435 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0437\u0430\u043A\u0430\u0437\u043E\u0432, \u0432\u0435\u0440\u043D\u043E?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r24.info.ordersFail);
        }
      }

      function BalancePage_div_12_div_2_div_4_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0438 \u043A\u043E\u043B-\u0432\u043E \u0437\u0430\u043A\u0430\u0437\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BalancePage_div_12_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0432\u044B \u0441\u0434\u0430\u0435\u0442\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function BalancePage_div_12_div_2_div_4_Template_input_input_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r31.commentInput();
          })("ngModelChange", function BalancePage_div_12_div_2_div_4_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r33.failOrdersCount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "textarea", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function BalancePage_div_12_div_2_div_4_Template_textarea_input_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r34.commentInput();
          })("ngModelChange", function BalancePage_div_12_div_2_div_4_Template_textarea_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r35.fo_comment = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BalancePage_div_12_div_2_div_4_span_7_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r25.failOrdersCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r25.fo_comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r25.commentError);
        }
      }

      function BalancePage_div_12_div_2_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0414\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BalancePage_div_12_div_2_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041D\u0430\u0437\u0430\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BalancePage_div_12_div_2_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041D\u0435\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BalancePage_div_12_div_2_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0421\u0434\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "not": a0
        };
      };

      function BalancePage_div_12_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_12_div_2_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r36.cashOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i-feather", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BalancePage_div_12_div_2_div_3_Template, 7, 1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BalancePage_div_12_div_2_div_4_Template, 8, 3, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_12_div_2_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r38.fo_answer(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BalancePage_div_12_div_2_span_7_Template, 2, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BalancePage_div_12_div_2_span_8_Template, 2, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_12_div_2_Template_div_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r39.fo_answer(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BalancePage_div_12_div_2_span_10_Template, 2, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BalancePage_div_12_div_2_span_11_Template, 2, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r15.failsOrderNotFull);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.failsOrderNotFull);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r15.failsOrderNotFull);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.failsOrderNotFull);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, !ctx_r15.failsOrderNotFull));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r15.failsOrderNotFull);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.failsOrderNotFull);
        }
      }

      function BalancePage_div_12_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_div_12_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r40.getPhoto();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043B\u043E\u043C\u0431\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BalancePage_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BalancePage_div_12_div_1_Template, 18, 3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BalancePage_div_12_div_2_Template, 12, 9, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BalancePage_div_12_div_3_Template, 2, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.openBtn && !ctx_r2.failsOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.failsOrder && !ctx_r2.openBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.openBtn);
        }
      }

      function BalancePage_app_review_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-review", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close_E", function BalancePage_app_review_13_Template_app_review_close_E_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r42.writeReview();
          })("send_E", function BalancePage_app_review_13_Template_app_review_send_E_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r44.sendReview($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var BalancePage = /*#__PURE__*/function () {
        function BalancePage(courier, auth, router, state$, alert, camera, AP, settings, sys, sysMap, firebase) {
          _classCallCheck(this, BalancePage);

          this.courier = courier;
          this.auth = auth;
          this.router = router;
          this.state$ = state$;
          this.alert = alert;
          this.camera = camera;
          this.AP = AP;
          this.settings = settings;
          this.sys = sys;
          this.sysMap = sysMap;
          this.firebase = firebase;
          this.info = null;
          this.pageInit = false;
          this.loader = true;
          this.local_stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.confirmWindow = false;
          this.commentText = null;
          this.commentError = false;
          this.cashCheck = false;
          this.cashCheckData = null;
          this.openBtn = false;
          this.review_w = false;
          this.failsOrder = false;
          this.failsOrderNotFull = false;
          this.failOrdersCount = 0;
          this.fo_comment = ""; //комментарий к частичной сдаче заказов

          this.schedule = Boolean(this.settings.rules.schedule);
          this.isShowSchedule = false;
          this.isGoToWork = false;
          this.isStopWork = false;
          this.nonWorkDates = [];
          this.notWorkRules = {};
          this.AP.requestPermission(this.AP.PERMISSION.ACCESS_FINE_LOCATION);

          if (this.info == null) {
            this.loader = true;
          } else {
            this.loader = true;
          }

          this.state$.map_state.next('init');
          var self = this;
          self.updateInfo();
          self.initCashout();

          if (!this.state$.balance_check) {
            this.state$.interval_30.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.state$.stop$)).subscribe(function () {
              self.updateInfo();
              self.initCashout();
            });
          }

          this.initCashout();
        }

        _createClass(BalancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.schedule = Boolean(this.settings.rules.schedule);
            this.courier.getBalance(Number(this.auth.userId), 1).subscribe(function (data) {
              _this.firebase.setUserProperty('courier', data.name);

              _this.courier.ordersInfo = data.res_more;

              _this.courier.count_orders(data.res_more);

              _this.courier.ordersShortData.next(data.res_more);

              _this.state$.orders.next(data.res_more);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.local_stop$.next(null);
          }
        }, {
          key: "updateInfo",
          value: function updateInfo() {
            var self = this;
            this.auth.checkAuth().subscribe(function (data) {
              if (data.success = 'true') {
                self.getInfo(data.sync_id);
              }
            });
          }
        }, {
          key: "getInfo",
          value: function getInfo(sync_id) {
            var _this2 = this;

            var self = this;
            this.courier.getBalance(sync_id).subscribe(function (data) {
              self.info = data;
              self.pageInit = true;
              self.loader = false;
              _this2.state$.filial = data.filial;
            });
          }
        }, {
          key: "cashOut",
          value: function cashOut() {
            console.log('sys::cashOut()');
            console.log('sys::cashOut() info != null', this.info != null);
            console.log('sys::cashOut() !cashCheck', !this.cashCheck);
            this.confirmWindow = !this.confirmWindow;
            console.log('sys::cashOut() confirmWindow', this.confirmWindow);
            console.log('sys::cashOut() !openBtn && !failsOrder', !this.openBtn && !this.failsOrder);
          }
        }, {
          key: "sendCash",
          value: function sendCash(photo) {
            this.loader = true;
            var url = 'orders';
            var data = {
              'action': 'cashout',
              'sum': this.info.sumNal,
              'image': photo,
              'isFull': '',
              'ordersCount': 0,
              'comment': '',
              'ordersComment': ''
            };

            if (this.commentText != '' && this.commentText) {
              data['isFull'] = '0';
              data['comment'] = this.commentText;
            } else {
              data['isFull'] = '1';
            }

            if (this.failsOrderNotFull) {
              data['ordersCount'] = this.failOrdersCount;
              data['ordersComment'] = this.fo_comment;
            }

            console.log('o_c', data['ordersCount']);
            console.log('ocm', data['ordersComment']);
            var self = this;
            this.auth.sendPost(url, data).subscribe(function (resp) {
              console.log('CASHOUT_RESPONSE', resp);

              if (resp.success == 'true') {
                self.cashoutResult(true);
              } else {
                self.cashoutResult(false);
              }
            });
          }
        }, {
          key: "checkCash",
          value: function checkCash() {
            var url = 'orders';
            var data = {
              'action': 'checkCashout'
            };
            return this.auth.sendPost(url, data);
          }
        }, {
          key: "initCashout",
          value: function initCashout() {
            var self = this;
            this.checkCash().subscribe(function (data) {
              if (data.success == 'true') {
                self.cashCheck = true;
                self.cashCheckData = data;
              } else {
                self.cashCheck = false;
              }
            });
          }
        }, {
          key: "getPhoto",
          value: function getPhoto() {
            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            var self = this;
            this.camera.getPicture(options).then(function (imageData) {
              var base64Image = 'data:image/jpeg;base64,' + imageData;
              console.log('image_str', base64Image);
              self.sendCash(base64Image);
            });
          }
        }, {
          key: "cashoutResult",
          value: function cashoutResult(result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, alert2;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!result) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 3;
                      return this.alert.create({
                        header: 'Сдача',
                        message: 'Средства успешно сданы',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                      this.confirmWindow = false;
                      this.loader = false;
                      _context.next = 17;
                      break;

                    case 10:
                      _context.next = 12;
                      return this.alert.create({
                        header: 'Ошибка',
                        message: 'Ошибка сдачи средств',
                        buttons: ['OK']
                      });

                    case 12:
                      alert2 = _context.sent;
                      _context.next = 15;
                      return alert2.present();

                    case 15:
                      this.confirmWindow = false;
                      this.loader = false;

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "answer",
          value: function answer(isFull) {
            console.log('sys:: answer');

            if (!isFull && (!this.commentText || this.commentText == '')) {
              this.commentError = true;
              return false;
            }

            this.failOrders();
          } //спрашивает, сколько заказов не сдано

        }, {
          key: "failOrders",
          value: function failOrders() {
            console.log('sys:: failOrders');

            if (this.info.ordersFail == 0) {
              this.openBtn = true;
              return false;
            } else {
              this.failsOrder = true;
            }
          }
        }, {
          key: "fo_answer",
          value: function fo_answer(flag) {
            if (!this.failsOrderNotFull) {
              if (flag) {
                this.failsOrderNotFull = false;
                this.openBtn = true;
              } else {
                this.failsOrderNotFull = true;
              }
            } else {
              if (flag) {
                this.failsOrderNotFull = false;
              } else {
                if (this.failOrdersCount == 0 || this.fo_comment == "" || !this.fo_comment) {
                  this.commentError = true;
                } else {
                  this.openBtn = true;
                }
              }
            }
          }
        }, {
          key: "commentInput",
          value: function commentInput() {
            this.commentError = false;
          } //отзыв о приложении

        }, {
          key: "writeReview",
          value: function writeReview() {
            this.review_w = !this.review_w;
          }
        }, {
          key: "sendReview",
          value: function sendReview(text) {
            this.loader = true;
            var url = 'orders';
            var data = {
              'action': 'writeReview',
              'text': text
            };
            var self = this;
            this.auth.sendPost(url, data).subscribe(function (resp) {
              if (resp.success == 'true') {
                self.auth.showError(7);
              } else {
                self.auth.showError(8);
              }

              self.review_w = false;
              self.loader = false;
            });
          }
        }, {
          key: "showSchedule",
          value: function showSchedule() {
            this.router.navigate(['schedule']);
          }
        }, {
          key: "navToMap",
          value: function navToMap() {
            this.router.navigate(['map']);
          }
        }, {
          key: "navToSettings",
          value: function navToSettings() {
            this.sysMap.navigate(['version']);
          }
        }]);

        return BalancePage;
      }();

      BalancePage.ɵfac = function BalancePage_Factory(t) {
        return new (t || BalancePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_courier_service__WEBPACK_IMPORTED_MODULE_11__["CourierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_13__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_12__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_14__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sys_map_service__WEBPACK_IMPORTED_MODULE_15__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseX"]));
      };

      BalancePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: BalancePage,
        selectors: [["app-balance"]],
        decls: 14,
        vars: 5,
        consts: [["slot", "start"], [3, "click"], ["name", "settings"], ["size", "small", "color", "dark"], ["class", "o-body", 4, "ngIf"], ["class", "shirm", 4, "ngIf"], ["class", "confirm-shirm", 4, "ngIf"], [3, "close_E", "send_E", 4, "ngIf"], [1, "o-body"], ["itemSize", "auto", 2, "height", "100%"], [1, "b-row"], [1, "b-item", "b-title"], [1, "b-item"], [3, "src"], [1, "lg-b-wrp"], ["class", "logout-btn", 3, "click", 4, "ngIf"], ["class", "check-labl", 4, "ngIf"], [1, "logout-btn", "review_btn", 3, "click"], ["class", "logout-btn review_btn", 3, "click", 4, "ngIf"], [1, "logout-btn", 3, "click"], [1, "check-labl"], [1, "cl-body"], [1, "cl-row"], [1, "cl-r__title"], [1, "cl-r_text"], [1, "cl-row", "comment"], ["class", "cl-r_text", 4, "ngIf"], [1, "shirm"], ["name", "lines-small"], [1, "confirm-shirm"], ["class", "confirm", 4, "ngIf"], ["class", "confirm of-confirm", 4, "ngIf"], ["class", "photo-btn", 3, "click", 4, "ngIf"], [1, "confirm"], [1, "close-btn", 3, "click"], ["name", "x-circle"], [1, "cf-qwe"], [1, "cf-num"], [1, "cf-comment"], [1, "cf-comment-title"], ["cols", "30", "rows", "3", 1, "sc-comment", 3, "ngModel", "input", "ngModelChange"], ["class", "comment-er", 4, "ngIf"], [1, "cf-btns"], [1, "cf-btn", "ok", 3, "click"], [1, "cf-btn", "not", 3, "click"], [1, "comment-er"], [1, "confirm", "of-confirm"], ["name", "x-octagon"], ["class", "cf-qwe of-qwe", 4, "ngIf"], ["class", "cf-comment of-comment", 4, "ngIf"], [1, "cf-btns", "of-btns"], [1, "cf-btn", "of-btn", "ok", 3, "click"], [4, "ngIf"], [1, "cf-btn", "of-btn", 3, "ngClass", "click"], [1, "cf-qwe", "of-qwe"], [1, "cf-comment", "of-comment"], [1, "cf-comment-title", "of-title"], ["type", "number", 1, "sc-comment", "of-number", 3, "ngModel", "input", "ngModelChange"], [1, "photo-btn", 3, "click"], [3, "close_E", "send_E"]],
        template: function BalancePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BalancePage_Template_ion_button_click_3_listener() {
              return ctx.navToSettings();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i-feather", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BalancePage_div_10_Template, 54, 13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BalancePage_div_11_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BalancePage_div_12_Template, 4, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BalancePage_app_review_13_Template, 1, 0, "app-review", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.state$.filial);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.info);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.info != null && !ctx.cashCheck && ctx.confirmWindow);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.review_w);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], angular_feather__WEBPACK_IMPORTED_MODULE_16__["FeatherComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["CdkFixedSizeVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NumberValueAccessor"], _components_balance_review_review_component__WEBPACK_IMPORTED_MODULE_20__["ReviewComponent"]],
        styles: [".o-title[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 24px;\n  font-family: Roboto;\n  box-shadow: 0 0 6px 1px #c7c7c7;\n  margin: 0 0 5px 0;\n  background: #2b637e;\n  color: #ffffff;\n  position: relative;\n}\n\n.cn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  left: 0px;\n  right: 0px;\n  background: rgba(192, 26, 26, 0.472);\n  min-height: 30px;\n  color: #d21212;\n  font-size: 15px;\n  z-index: 99;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.o-body[_ngcontent-%COMP%] {\n  color: #3c3c3c;\n  overflow: hidden;\n  right: 0;\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.b-row[_ngcontent-%COMP%] {\n  margin: 2% 4px 7px 4px;\n  box-shadow: 0 0 1px 1px #c7c7c7;\n  border-radius: 3px;\n  padding: 10px 0;\n  overflow: hidden;\n  padding: 10px 10px 10px 25px;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 50px auto;\n  background-color: #e5eeeb;\n}\n\n.b-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1em;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.b-title[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  color: #487187;\n  text-transform: uppercase;\n}\n\n.lg-b-wrp[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 80%;\n  background: #2b637e;\n  color: #fff;\n  border-radius: 3px;\n  font-size: 19px;\n  margin: 7px 0 0 0;\n}\n\n.shirm[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  left: 0px;\n  right: 0px;\n  bottom: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: RGBA(0, 0, 0, 0.1);\n  z-index: 999999;\n}\n\n.shirm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  font-size: 43px;\n  color: #2b637e;\n}\n\n.confirm-shirm[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.confirm[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 243px;\n  display: grid;\n  grid-template-rows: 68px auto 60px;\n  border-radius: 3px;\n  position: relative;\n}\n\n.cf-title[_ngcontent-%COMP%], .cf-qwe[_ngcontent-%COMP%], .cf-comment[_ngcontent-%COMP%], .cf-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cf-btn[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0.5px 0.5px #bbb;\n  height: 36px;\n  width: 85px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3px;\n  margin: 0 10px;\n}\n\n.cf-comment[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  flex-direction: column;\n}\n\n.sc-comment[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0px 0;\n}\n\n.cf-qwe[_ngcontent-%COMP%] {\n  font-size: 21px;\n  align-items: flex-end;\n}\n\n.cf-btns[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.not[_ngcontent-%COMP%] {\n  background: #f95a5a;\n  color: #fff;\n}\n\n.cf-num[_ngcontent-%COMP%] {\n  color: #2b637e;\n  font-weight: bold;\n  margin: 0 3px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 3px;\n  font-size: 20px;\n}\n\n.comment-er[_ngcontent-%COMP%] {\n  color: #d22e2e;\n  font-size: 12px;\n}\n\n.cl-r__title[_ngcontent-%COMP%] {\n  color: #2b637e;\n  margin: 0 7px 0 0;\n  font-size: 18px;\n}\n\n.cl-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.check-labl[_ngcontent-%COMP%] {\n  align-items: center;\n  box-shadow: 0 0 0.5px 0.5px #b7b7b7;\n  padding: 8px 8px;\n  display: flex;\n  justify-content: flex-start;\n  width: 81%;\n  height: 100%;\n}\n\n.cl-body[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n}\n\n.cl-row[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 4px 0 0 0px;\n}\n\n.photo-btn[_ngcontent-%COMP%] {\n  display: flex;\n  height: 62px;\n  width: 80%;\n  background: #319bce;\n  color: #fff;\n  border-radius: 3px;\n  font-size: 19px;\n  justify-content: center;\n  align-items: center;\n}\n\n.review_btn[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.of-comment[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.of-number[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n  height: 40px;\n  margin: 3px 0;\n}\n\n.of-confirm[_ngcontent-%COMP%] {\n  width: 90%;\n  height: unset;\n  display: flex;\n  flex-direction: column;\n}\n\n.of-btns[_ngcontent-%COMP%], .of-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.of-btns[_ngcontent-%COMP%] {\n  margin: 15px auto;\n}\n\n.of-qwe[_ngcontent-%COMP%] {\n  font-size: 21px;\n  display: inline;\n  margin: 24px 0;\n  text-align: center;\n}\n\n.of-title[_ngcontent-%COMP%] {\n  margin: 22px 0 6px 0;\n  font-size: 17px;\n}\n\n.cogs[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 6%;\n  top: 34%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFsYW5jZS9iYWxhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7RUFDSSxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3Qix5QkFBd0M7QUFDNUM7O0FBRUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLDJCQUEyQjtFQUMzQixjQUE0QjtFQUM1Qix5QkFBeUI7QUFDN0I7O0FBR0E7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQXZCOztBQUdBO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQXJCOztBQUdBO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtBQUFuQjs7QUFHQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7QUFBbEI7O0FBR0E7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUFsQzs7QUFHQTtFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQXRCOztBQUlBOzs7O0VBSUksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFEdkI7O0FBS0E7RUFDSSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztBQUZsQjs7QUFLQTtFQUNJLFVBQVU7RUFDVixjQUFjO0VBQ2Qsc0JBQXNCO0FBRjFCOztBQUtBO0VBQ0ksVUFBVTtFQUNWLGFBQWE7QUFGakI7O0FBS0E7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0FBRnpCOztBQUtBO0VBQ0ksVUFBVTtFQUNWLGNBQWM7QUFGbEI7O0FBTUE7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVztBQUhmOztBQU1BO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0FBSGpCOztBQU1BO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsZUFBZTtBQUhuQjs7QUFNQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0FBSG5COztBQU1BO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBSG5COztBQU1BO0VBQ0ksYUFBYTtBQUhqQjs7QUFNQTtFQUNJLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLFlBQVk7QUFIaEI7O0FBTUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFIMUI7O0FBTUE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0FBSHZCOztBQU1BO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFIdkI7O0FBTUE7RUFDSSxlQUFlO0FBSG5COztBQU1BO0VBQ0ksV0FBVztBQUhmOztBQU1BO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUhqQjs7QUFNQTtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtBQUgxQjs7QUFNQTs7RUFFSSxXQUFXO0FBSGY7O0FBTUE7RUFDSSxpQkFBaUI7QUFIckI7O0FBTUE7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFIdEI7O0FBTUE7RUFDSSxvQkFBb0I7RUFDcEIsZUFBZTtBQUhuQjs7QUFNQTtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtBQUhaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFsYW5jZS9iYWxhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAxcHggI2M3YzdjNztcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjMmI2MzdlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNuIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTkyLCAyNiwgMjYsIDAuNDcyKTtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjZDIxMjEyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vLWJvZHkge1xuICAgIGNvbG9yOiAjM2MzYzNjO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmItcm93IHtcbiAgICBtYXJnaW46IDIlIDRweCA3cHggNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjN2M3Yzc7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDI1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIzOCwgMjM1LCAxKTtcbn1cblxuLmItaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmItdGl0bGUge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBjb2xvcjogcmdiYSg3MiwgMTEzLCAxMzUsIDEpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbn1cblxuLmxnLWItd3JwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ291dC1idG4ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJhY2tncm91bmQ6ICMyYjYzN2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBtYXJnaW46IDdweCAwIDAgMDtcbn1cblxuLnNoaXJtIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogUkdCQSgwLCAwLCAwLCAwLjEpO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLnNoaXJtIGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiA0M3B4O1xuICAgIGNvbG9yOiAjMmI2MzdlO1xufVxuXG4uY29uZmlybS1zaGlybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uY29uZmlybSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDI0M3B4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2OHB4IGF1dG8gNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi5jZi10aXRsZSxcbi5jZi1xd2UsXG4uY2YtY29tbWVudCxcbi5jZi1idG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmNmLWJ0biB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwLjVweCAwLjVweCAjYmJiO1xuICAgIGhlaWdodDogMzZweDtcbiAgICB3aWR0aDogODVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uY2YtY29tbWVudCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2MtY29tbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDBweCAwO1xufVxuXG4uY2YtcXdlIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uY2YtYnRucyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcblxufVxuXG4ubm90IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjk1YTVhO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY2YtbnVtIHtcbiAgICBjb2xvcjogIzJiNjM3ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgM3B4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDNweDtcbiAgICB0b3A6IDNweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb21tZW50LWVyIHtcbiAgICBjb2xvcjogI2QyMmUyZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jbC1yX190aXRsZSB7XG4gICAgY29sb3I6ICMyYjYzN2U7XG4gICAgbWFyZ2luOiAwIDdweCAwIDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2wtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2hlY2stbGFibCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cHggMC41cHggI2I3YjdiNztcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNsLXJvdyAuY29tbWVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogNHB4IDAgMCAwcHg7XG59XG5cbi5waG90by1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA2MnB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZDogIzMxOWJjZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZXZpZXdfYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5vZi1jb21tZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm9mLW51bWJlciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDNweCAwO1xufVxuXG4ub2YtY29uZmlybSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm9mLWJ0bnMsXG4ub2YtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm9mLWJ0bnMge1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xufVxuXG4ub2YtcXdlIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbjogMjRweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9mLXRpdGxlIHtcbiAgICBtYXJnaW46IDIycHggMCA2cHggMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5jb2dzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNiU7XG4gICAgdG9wOiAzNCU7XG59Il19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            display: 'flex'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openBtn', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            display: 'flex'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('closeConfirm', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            display: 'grid'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BalancePage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-balance',
            templateUrl: './balance.page.html',
            styleUrls: ['./balance.page.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [// ...
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              display: 'flex'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              display: 'none'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openBtn', [// ...
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              display: 'flex'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              display: 'none'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('closeConfirm', [// ...
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              display: 'grid'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              display: 'none'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')])])]
          }]
        }], function () {
          return [{
            type: _services_courier_service__WEBPACK_IMPORTED_MODULE_11__["CourierService"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _services_state_service__WEBPACK_IMPORTED_MODULE_13__["StateService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
          }, {
            type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
          }, {
            type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"]
          }, {
            type: _services_settings_service__WEBPACK_IMPORTED_MODULE_12__["SettingsService"]
          }, {
            type: _services_sys_service__WEBPACK_IMPORTED_MODULE_14__["SysService"]
          }, {
            type: _services_sys_map_service__WEBPACK_IMPORTED_MODULE_15__["MapService"]
          }, {
            type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseX"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-balance-balance-module-es5.js.map