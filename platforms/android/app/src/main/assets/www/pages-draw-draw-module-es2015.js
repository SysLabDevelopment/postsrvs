(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-draw-draw-module"],{

/***/ "./src/app/pages/draw/draw.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/draw/draw.module.ts ***!
  \*******************************************/
/*! exports provided: DrawPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawPageModule", function() { return DrawPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _draw_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draw.page */ "./src/app/pages/draw/draw.page.ts");








const routes = [
    {
        path: '',
        component: _draw_page__WEBPACK_IMPORTED_MODULE_5__["DrawPage"]
    }
];
class DrawPageModule {
}
DrawPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DrawPageModule });
DrawPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DrawPageModule_Factory(t) { return new (t || DrawPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DrawPageModule, { declarations: [_draw_page__WEBPACK_IMPORTED_MODULE_5__["DrawPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_draw_page__WEBPACK_IMPORTED_MODULE_5__["DrawPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/draw/draw.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/draw/draw.page.ts ***!
  \*****************************************/
/*! exports provided: DrawPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawPage", function() { return DrawPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








const _c0 = ["myCanvas"];
function DrawPage_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DrawPage {
    constructor(platform, router, renderer, location) {
        this.platform = platform;
        this.router = router;
        this.renderer = renderer;
        this.location = location;
        this.isClear = true;
        this.error_mes = false;
        this.currentColour = '#000000';
        this.brushSize = 10;
        this.save_process = false;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.canvasElement = this.canvas.nativeElement;
        __ngRendererSetElementAttributeHelper(this.renderer, this.canvasElement, 'width', this.platform.width() + '');
        __ngRendererSetElementAttributeHelper(this.renderer, this.canvasElement, 'height', this.platform.height() + '');
    }
    handleStart(ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    }
    clearCanvas() {
        this.isClear = true;
        let ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    handleMove(ev) {
        this.isClear = false;
        this.error_mes = false;
        let ctx = this.canvasElement.getContext('2d');
        let currentX = ev.touches[0].pageX;
        let currentY = ev.touches[0].pageY;
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = this.brushSize;
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    }
    saveImage() {
        if (this.isClear) {
            this.error_mes = true;
            return false;
        }
        console.log('save_image_call');
        var code = this.canvasElement.toDataURL();
        code = code.split(',')[1];
        localStorage.setItem('drawImg', code);
        this.back();
    }
    back() {
        this.location.back();
    }
}
DrawPage.ɵfac = function DrawPage_Factory(t) { return new (t || DrawPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
DrawPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawPage, selectors: [["app-draw"]], viewQuery: function DrawPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 15, vars: 1, consts: [[3, "touchstart", "touchmove"], ["myCanvas", ""], ["class", "error", 4, "ngIf"], [1, "btns"], [1, "save-btn", 3, "click"], [1, "save-btn", "clear-btn", 3, "click"], [1, "save-btn", "back", 3, "click"], [1, "error"]], template: function DrawPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u043E\u0434\u043F\u0438\u0441\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function DrawPage_Template_canvas_touchstart_5_listener($event) { return ctx.handleStart($event); })("touchmove", function DrawPage_Template_canvas_touchmove_5_listener($event) { return ctx.handleMove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DrawPage_div_7_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawPage_Template_button_click_9_listener() { return ctx.saveImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawPage_Template_button_click_11_listener() { return ctx.clearCanvas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawPage_Template_button_click_13_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error_mes);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["canvas[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid #bbb2b2;\n  height: 75%;\n  width: 100%;\n}\n\n#wrp[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n\n.btns[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0 auto;\n  bottom: 10px;\n  left: 0px;\n  right: 0px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999999;\n}\n\n.save-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 300px;\n  background: #474fc8;\n  color: #fff;\n  outline: none;\n  width: 30%;\n  margin: 0 4px;\n}\n\n.clear-btn[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.mi-table[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 40px auto;\n  border: 1px solid #e4e4e4;\n}\n\n.m-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 180px 180px 120px 100px 100px 100px 100px 150px 150px;\n  min-height: 40px;\n}\n\n.m-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.scroll-row[_ngcontent-%COMP%] {\n  box-shadow: -2px 0 0.5px 0.5px #e4e4e4;\n}\n\n.m-row-h[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e4e4e4;\n}\n\n.m-col[_ngcontent-%COMP%] {\n  border-left: 1px solid #e4e4e4;\n}\n\n.m-col[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n}\n\n.ion-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHJhdy9kcmF3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWM7RUFDZCx5QkFBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7QUFBZjs7QUFHQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7QUFBcEI7O0FBR0E7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFBcEI7O0FBR0E7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUViLFVBQVU7RUFDVixhQUFhO0FBRGpCOztBQUlBO0VBQ0ksYUFBWTtBQURoQjs7QUFJQTtFQUNJLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBRDdCOztBQUlBO0VBQ0ksYUFBYTtFQUNiLGtGQUFrRjtFQUNsRixnQkFBZ0I7QUFEcEI7O0FBSUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUR2Qjs7QUFJQTtFQUNJLHNDQUNKO0FBRkE7O0FBSUE7RUFDSSxnQ0FBZ0M7QUFEcEM7O0FBSUE7RUFDSSw4QkFBOEI7QUFEbEM7O0FBSUE7RUFDSSxpQkFBaUI7QUFEckI7O0FBSUE7RUFDSSxhQUFhO0VBQ2IsOEJBQThCO0FBRGxDOztBQUlBO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFEdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kcmF3L2RyYXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYW52YXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODcsIDE3OCwgMTc4KTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3dycHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ0bnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xufVxuXG4uc2F2ZS1idG57XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDc0ZmM4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDAgNHB4O1xufVxuXG4uY2xlYXItYnRue1xuICAgIG91dGxpbmU6bm9uZTtcbn1cblxuLm1pLXRhYmxle1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbn1cblxuLm0tcm93e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAxODBweCAxODBweCAxMjBweCAxMDBweCAxMDBweCAxMDBweCAxMDBweCAxNTBweCAxNTBweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4ubS1jb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2Nyb2xsLXJvd3tcbiAgICBib3gtc2hhZG93OiAtMnB4IDAgMC41cHggMC41cHggI2U0ZTRlNFxufVxuXG4ubS1yb3ctaHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbn1cblxuLm0tY29se1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U0ZTRlNDtcbn1cblxuLm0tY29sOmZpcnN0LWNoaWxke1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uaW9uLXRvb2xiYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5lcnJvcntcbiAgICBjb2xvcjogcmVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-draw',
                templateUrl: './draw.page.html',
                styleUrls: ['./draw.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myCanvas', { static: true }]
        }] }); })();
function __ngRendererSplitNamespaceHelper(name) {
    if (name[0] === ":") {
        const match = name.match(/^:([^:]+):(.+)$/);
        return [match[1], match[2]];
    }
    return ["", name];
}
function __ngRendererSetElementAttributeHelper(renderer, element, namespaceAndName, value) {
    const [namespace, name] = __ngRendererSplitNamespaceHelper(namespaceAndName);
    if (value != null) {
        renderer.setAttribute(element, name, value, namespace);
    }
    else {
        renderer.removeAttribute(element, name, namespace);
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-draw-draw-module-es2015.js.map