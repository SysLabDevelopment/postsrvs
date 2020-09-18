(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"],{

/***/ "./node_modules/angular-split/fesm2015/angular-split.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular-split/fesm2015/angular-split.js ***!
  \**************************************************************/
/*! exports provided: AngularSplitModule, SplitAreaDirective, SplitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSplitModule", function() { return AngularSplitModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitAreaDirective", function() { return SplitAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitComponent", function() { return SplitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} event
 * @return {?}
 */



const _c0 = ["gutterEls"];
function SplitComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SplitComponent_ng_template_1_div_0_Template_div_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.startDragging($event, index_r1 * 2 + 1, index_r1 + 1); })("touchstart", function SplitComponent_ng_template_1_div_0_Template_div_touchstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.startDragging($event, index_r1 * 2 + 1, index_r1 + 1); })("mouseup", function SplitComponent_ng_template_1_div_0_Template_div_mouseup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.clickGutter($event, index_r1 + 1); })("touchend", function SplitComponent_ng_template_1_div_0_Template_div_touchend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.clickGutter($event, index_r1 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-basis", ctx_r3.gutterSize, "px")("order", index_r1 * 2 + 1);
} }
function SplitComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SplitComponent_ng_template_1_div_0_Template, 3, 4, "div", 1);
} if (rf & 2) {
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r2 === false);
} }
const _c1 = ["*"];
function getPointFromEvent(event) {
    // TouchEvent
    if (((/** @type {?} */ (event))).changedTouches !== undefined && ((/** @type {?} */ (event))).changedTouches.length > 0) {
        return {
            x: ((/** @type {?} */ (event))).changedTouches[0].clientX,
            y: ((/** @type {?} */ (event))).changedTouches[0].clientY,
        };
    }
    // MouseEvent
    else if (((/** @type {?} */ (event))).clientX !== undefined && ((/** @type {?} */ (event))).clientY !== undefined) {
        return {
            x: ((/** @type {?} */ (event))).clientX,
            y: ((/** @type {?} */ (event))).clientY,
        };
    }
    return null;
}
/**
 * @param {?} elRef
 * @param {?} direction
 * @return {?}
 */
function getElementPixelSize(elRef, direction) {
    /** @type {?} */
    const rect = ((/** @type {?} */ (elRef.nativeElement))).getBoundingClientRect();
    return direction === 'horizontal' ? rect.width : rect.height;
}
/**
 * @param {?} v
 * @return {?}
 */
function getInputBoolean(v) {
    return typeof v === 'boolean' ? v : v === 'false' ? false : true;
}
/**
 * @template T
 * @param {?} v
 * @param {?} defaultValue
 * @return {?}
 */
function getInputPositiveNumber(v, defaultValue) {
    if (v === null || v === undefined)
        return defaultValue;
    v = Number(v);
    return !isNaN(v) && v >= 0 ? v : defaultValue;
}
/**
 * @param {?} unit
 * @param {?} sizes
 * @return {?}
 */
function isUserSizesValid(unit, sizes) {
    // All sizes have to be not null and total should be 100
    if (unit === 'percent') {
        /** @type {?} */
        const total = sizes.reduce((/**
         * @param {?} total
         * @param {?} s
         * @return {?}
         */
        (total, s) => (s !== null ? total + s : total)), 0);
        return sizes.every((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s !== null)) && total > 99.9 && total < 100.1;
    }
    // A size at null is mandatory but only one.
    if (unit === 'pixel') {
        return sizes.filter((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s === null)).length === 1;
    }
}
/**
 * @param {?} a
 * @return {?}
 */
function getAreaMinSize(a) {
    if (a.size === null) {
        return null;
    }
    if (a.component.lockSize === true) {
        return a.size;
    }
    if (a.component.minSize === null) {
        return null;
    }
    if (a.component.minSize > a.size) {
        return a.size;
    }
    return a.component.minSize;
}
/**
 * @param {?} a
 * @return {?}
 */
function getAreaMaxSize(a) {
    if (a.size === null) {
        return null;
    }
    if (a.component.lockSize === true) {
        return a.size;
    }
    if (a.component.maxSize === null) {
        return null;
    }
    if (a.component.maxSize < a.size) {
        return a.size;
    }
    return a.component.maxSize;
}
/**
 * @param {?} unit
 * @param {?} sideAreas
 * @param {?} pixels
 * @param {?} allAreasSizePixel
 * @return {?}
 */
function getGutterSideAbsorptionCapacity(unit, sideAreas, pixels, allAreasSizePixel) {
    return sideAreas.reduce((/**
     * @param {?} acc
     * @param {?} area
     * @return {?}
     */
    (acc, area) => {
        /** @type {?} */
        const res = getAreaAbsorptionCapacity(unit, area, acc.remain, allAreasSizePixel);
        acc.list.push(res);
        acc.remain = res.pixelRemain;
        return acc;
    }), { remain: pixels, list: [] });
}
/**
 * @param {?} unit
 * @param {?} areaSnapshot
 * @param {?} pixels
 * @param {?} allAreasSizePixel
 * @return {?}
 */
function getAreaAbsorptionCapacity(unit, areaSnapshot, pixels, allAreasSizePixel) {
    // No pain no gain
    if (pixels === 0) {
        return {
            areaSnapshot,
            pixelAbsorb: 0,
            percentAfterAbsorption: areaSnapshot.sizePercentAtStart,
            pixelRemain: 0,
        };
    }
    // Area start at zero and need to be reduced, not possible
    if (areaSnapshot.sizePixelAtStart === 0 && pixels < 0) {
        return {
            areaSnapshot,
            pixelAbsorb: 0,
            percentAfterAbsorption: 0,
            pixelRemain: pixels,
        };
    }
    if (unit === 'percent') {
        return getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel);
    }
    if (unit === 'pixel') {
        return getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, allAreasSizePixel);
    }
}
/**
 * @param {?} areaSnapshot
 * @param {?} pixels
 * @param {?} allAreasSizePixel
 * @return {?}
 */
function getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel) {
    /** @type {?} */
    const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
    /** @type {?} */
    const tempPercentSize = (tempPixelSize / allAreasSizePixel) * 100
    // ENLARGE AREA
    ;
    // ENLARGE AREA
    if (pixels > 0) {
        // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
        if (areaSnapshot.area.maxSize !== null && tempPercentSize > areaSnapshot.area.maxSize) {
            // Use area.area.maxSize as newPercentSize and return calculate pixels remaining
            /** @type {?} */
            const maxSizePixel = (areaSnapshot.area.maxSize / 100) * allAreasSizePixel;
            return {
                areaSnapshot,
                pixelAbsorb: maxSizePixel,
                percentAfterAbsorption: areaSnapshot.area.maxSize,
                pixelRemain: areaSnapshot.sizePixelAtStart + pixels - maxSizePixel,
            };
        }
        return {
            areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: tempPercentSize > 100 ? 100 : tempPercentSize,
            pixelRemain: 0,
        };
    }
    // REDUCE AREA
    else if (pixels < 0) {
        // If minSize & newSize smaller than it > absorb to min and return remaining pixels
        if (areaSnapshot.area.minSize !== null && tempPercentSize < areaSnapshot.area.minSize) {
            // Use area.area.minSize as newPercentSize and return calculate pixels remaining
            /** @type {?} */
            const minSizePixel = (areaSnapshot.area.minSize / 100) * allAreasSizePixel;
            return {
                areaSnapshot,
                pixelAbsorb: minSizePixel,
                percentAfterAbsorption: areaSnapshot.area.minSize,
                pixelRemain: areaSnapshot.sizePixelAtStart + pixels - minSizePixel,
            };
        }
        // If reduced under zero > return remaining pixels
        else if (tempPercentSize < 0) {
            // Use 0 as newPercentSize and return calculate pixels remaining
            return {
                areaSnapshot,
                pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: 0,
                pixelRemain: pixels + areaSnapshot.sizePixelAtStart,
            };
        }
        return {
            areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: tempPercentSize,
            pixelRemain: 0,
        };
    }
}
/**
 * @param {?} areaSnapshot
 * @param {?} pixels
 * @param {?} containerSizePixel
 * @return {?}
 */
function getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, containerSizePixel) {
    /** @type {?} */
    const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels
    // ENLARGE AREA
    ;
    // ENLARGE AREA
    if (pixels > 0) {
        // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
        if (areaSnapshot.area.maxSize !== null && tempPixelSize > areaSnapshot.area.maxSize) {
            return {
                areaSnapshot,
                pixelAbsorb: areaSnapshot.area.maxSize - areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: -1,
                pixelRemain: tempPixelSize - areaSnapshot.area.maxSize,
            };
        }
        return {
            areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: -1,
            pixelRemain: 0,
        };
    }
    // REDUCE AREA
    else if (pixels < 0) {
        // If minSize & newSize smaller than it > absorb to min and return remaining pixels
        if (areaSnapshot.area.minSize !== null && tempPixelSize < areaSnapshot.area.minSize) {
            return {
                areaSnapshot,
                pixelAbsorb: areaSnapshot.area.minSize + pixels - tempPixelSize,
                percentAfterAbsorption: -1,
                pixelRemain: tempPixelSize - areaSnapshot.area.minSize,
            };
        }
        // If reduced under zero > return remaining pixels
        else if (tempPixelSize < 0) {
            return {
                areaSnapshot,
                pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: -1,
                pixelRemain: pixels + areaSnapshot.sizePixelAtStart,
            };
        }
        return {
            areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: -1,
            pixelRemain: 0,
        };
    }
}
/**
 * @param {?} unit
 * @param {?} item
 * @return {?}
 */
function updateAreaSize(unit, item) {
    if (unit === 'percent') {
        item.areaSnapshot.area.size = item.percentAfterAbsorption;
    }
    else if (unit === 'pixel') {
        // Update size except for the wildcard size area
        if (item.areaSnapshot.area.size !== null) {
            item.areaSnapshot.area.size = item.areaSnapshot.sizePixelAtStart + item.pixelAbsorb;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * angular-split
 *
 *
 *  PERCENT MODE ([unit]="'percent'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |       20                 30                 20                 15                 15      | <-- [size]="x"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |calc(20% - 8px)    calc(30% - 12px)   calc(20% - 8px)    calc(15% - 6px)    calc(15% - 6px)| <-- CSS flex-basis property (with flex-grow&shrink at 0)
 * |     152px              228px              152px              114px              114px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *  flex-basis = calc( { area.size }% - { area.size/100 * nbGutter*gutterSize }px );
 *
 *
 *  PIXEL MODE ([unit]="'pixel'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |      100                250                 *                 150                100      | <-- [size]="y"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |   0 0 100px          0 0 250px           1 1 auto          0 0 150px          0 0 100px   | <-- CSS flex property (flex-grow/flex-shrink/flex-basis)
 * |     100px              250px              200px              150px              100px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *
 */
class SplitComponent {
    /**
     * @param {?} ngZone
     * @param {?} elRef
     * @param {?} cdRef
     * @param {?} renderer
     */
    constructor(ngZone, elRef, cdRef, renderer) {
        this.ngZone = ngZone;
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this._direction = 'horizontal';
        ////
        this._unit = 'percent';
        ////
        this._gutterSize = 11;
        ////
        this._gutterStep = 1;
        ////
        this._restrictMove = false;
        ////
        this._useTransition = false;
        ////
        this._disabled = false;
        ////
        this._dir = 'ltr';
        ////
        this._gutterDblClickDuration = 0;
        ////
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.gutterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.gutterDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.dragProgressSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dragProgress$ = this.dragProgressSubject.asObservable();
        ////
        this.isDragging = false;
        this.isWaitingClear = false;
        this.dragListeners = [];
        this.snapshot = null;
        this.startPoint = null;
        this.endPoint = null;
        this.displayedAreas = [];
        this.hidedAreas = [];
        this._clickTimeout = null;
        // To force adding default class, could be override by user @Input() or not
        this.direction = this._direction;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set direction(v) {
        this._direction = v === 'vertical' ? 'vertical' : 'horizontal';
        this.renderer.addClass(this.elRef.nativeElement, `as-${this._direction}`);
        this.renderer.removeClass(this.elRef.nativeElement, `as-${this._direction === 'vertical' ? 'horizontal' : 'vertical'}`);
        this.build(false, false);
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._direction;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set unit(v) {
        this._unit = v === 'pixel' ? 'pixel' : 'percent';
        this.renderer.addClass(this.elRef.nativeElement, `as-${this._unit}`);
        this.renderer.removeClass(this.elRef.nativeElement, `as-${this._unit === 'pixel' ? 'percent' : 'pixel'}`);
        this.build(false, true);
    }
    /**
     * @return {?}
     */
    get unit() {
        return this._unit;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set gutterSize(v) {
        this._gutterSize = getInputPositiveNumber(v, 11);
        this.build(false, false);
    }
    /**
     * @return {?}
     */
    get gutterSize() {
        return this._gutterSize;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set gutterStep(v) {
        this._gutterStep = getInputPositiveNumber(v, 1);
    }
    /**
     * @return {?}
     */
    get gutterStep() {
        return this._gutterStep;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set restrictMove(v) {
        this._restrictMove = getInputBoolean(v);
    }
    /**
     * @return {?}
     */
    get restrictMove() {
        return this._restrictMove;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set useTransition(v) {
        this._useTransition = getInputBoolean(v);
        if (this._useTransition)
            this.renderer.addClass(this.elRef.nativeElement, 'as-transition');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-transition');
    }
    /**
     * @return {?}
     */
    get useTransition() {
        return this._useTransition;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set disabled(v) {
        this._disabled = getInputBoolean(v);
        if (this._disabled)
            this.renderer.addClass(this.elRef.nativeElement, 'as-disabled');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-disabled');
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set dir(v) {
        this._dir = v === 'rtl' ? 'rtl' : 'ltr';
        this.renderer.setAttribute(this.elRef.nativeElement, 'dir', this._dir);
    }
    /**
     * @return {?}
     */
    get dir() {
        return this._dir;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set gutterDblClickDuration(v) {
        this._gutterDblClickDuration = getInputPositiveNumber(v, 0);
    }
    /**
     * @return {?}
     */
    get gutterDblClickDuration() {
        return this._gutterDblClickDuration;
    }
    /**
     * @return {?}
     */
    get transitionEnd() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} subscriber
         * @return {?}
         */
        (subscriber) => (this.transitionEndSubscriber = subscriber))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(20));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            // To avoid transition at first rendering
            setTimeout((/**
             * @return {?}
             */
            () => this.renderer.addClass(this.elRef.nativeElement, 'as-init')));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getNbGutters() {
        return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    addArea(component) {
        /** @type {?} */
        const newArea = {
            component,
            order: 0,
            size: 0,
            minSize: null,
            maxSize: null,
        };
        if (component.visible === true) {
            this.displayedAreas.push(newArea);
            this.build(true, true);
        }
        else {
            this.hidedAreas.push(newArea);
        }
    }
    /**
     * @param {?} component
     * @return {?}
     */
    removeArea(component) {
        if (this.displayedAreas.some((/**
         * @param {?} a
         * @return {?}
         */
        (a) => a.component === component))) {
            /** @type {?} */
            const area = this.displayedAreas.find((/**
             * @param {?} a
             * @return {?}
             */
            (a) => a.component === component));
            this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
            this.build(true, true);
        }
        else if (this.hidedAreas.some((/**
         * @param {?} a
         * @return {?}
         */
        (a) => a.component === component))) {
            /** @type {?} */
            const area = this.hidedAreas.find((/**
             * @param {?} a
             * @return {?}
             */
            (a) => a.component === component));
            this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
        }
    }
    /**
     * @param {?} component
     * @param {?} resetOrders
     * @param {?} resetSizes
     * @return {?}
     */
    updateArea(component, resetOrders, resetSizes) {
        if (component.visible === true) {
            this.build(resetOrders, resetSizes);
        }
    }
    /**
     * @param {?} component
     * @return {?}
     */
    showArea(component) {
        /** @type {?} */
        const area = this.hidedAreas.find((/**
         * @param {?} a
         * @return {?}
         */
        (a) => a.component === component));
        if (area === undefined) {
            return;
        }
        /** @type {?} */
        const areas = this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
        this.displayedAreas.push(...areas);
        this.build(true, true);
    }
    /**
     * @param {?} comp
     * @return {?}
     */
    hideArea(comp) {
        /** @type {?} */
        const area = this.displayedAreas.find((/**
         * @param {?} a
         * @return {?}
         */
        (a) => a.component === comp));
        if (area === undefined) {
            return;
        }
        /** @type {?} */
        const areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
        areas.forEach((/**
         * @param {?} area
         * @return {?}
         */
        (area) => {
            area.order = 0;
            area.size = 0;
        }));
        this.hidedAreas.push(...areas);
        this.build(true, true);
    }
    /**
     * @return {?}
     */
    getVisibleAreaSizes() {
        return this.displayedAreas.map((/**
         * @param {?} a
         * @return {?}
         */
        (a) => (a.size === null ? '*' : a.size)));
    }
    /**
     * @param {?} sizes
     * @return {?}
     */
    setVisibleAreaSizes(sizes) {
        if (sizes.length !== this.displayedAreas.length) {
            return false;
        }
        /** @type {?} */
        const formatedSizes = sizes.map((/**
         * @param {?} s
         * @return {?}
         */
        (s) => getInputPositiveNumber(s, null)));
        /** @type {?} */
        const isValid = isUserSizesValid(this.unit, formatedSizes);
        if (isValid === false) {
            return false;
        }
        // @ts-ignore
        this.displayedAreas.forEach((/**
         * @param {?} area
         * @param {?} i
         * @return {?}
         */
        (area, i) => (area.component._size = formatedSizes[i])));
        this.build(false, true);
        return true;
    }
    /**
     * @private
     * @param {?} resetOrders
     * @param {?} resetSizes
     * @return {?}
     */
    build(resetOrders, resetSizes) {
        this.stopDragging();
        // ¤ AREAS ORDER
        if (resetOrders === true) {
            // If user provided 'order' for each area, use it to sort them.
            if (this.displayedAreas.every((/**
             * @param {?} a
             * @return {?}
             */
            (a) => a.component.order !== null))) {
                this.displayedAreas.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => (/** @type {?} */ (a.component.order)) - (/** @type {?} */ (b.component.order))));
            }
            // Then set real order with multiples of 2, numbers between will be used by gutters.
            this.displayedAreas.forEach((/**
             * @param {?} area
             * @param {?} i
             * @return {?}
             */
            (area, i) => {
                area.order = i * 2;
                area.component.setStyleOrder(area.order);
            }));
        }
        // ¤ AREAS SIZE
        if (resetSizes === true) {
            /** @type {?} */
            const useUserSizes = isUserSizesValid(this.unit, this.displayedAreas.map((/**
             * @param {?} a
             * @return {?}
             */
            (a) => a.component.size)));
            switch (this.unit) {
                case 'percent': {
                    /** @type {?} */
                    const defaultSize = 100 / this.displayedAreas.length;
                    this.displayedAreas.forEach((/**
                     * @param {?} area
                     * @return {?}
                     */
                    (area) => {
                        area.size = useUserSizes ? (/** @type {?} */ (area.component.size)) : defaultSize;
                        area.minSize = getAreaMinSize(area);
                        area.maxSize = getAreaMaxSize(area);
                    }));
                    break;
                }
                case 'pixel': {
                    if (useUserSizes) {
                        this.displayedAreas.forEach((/**
                         * @param {?} area
                         * @return {?}
                         */
                        (area) => {
                            area.size = area.component.size;
                            area.minSize = getAreaMinSize(area);
                            area.maxSize = getAreaMaxSize(area);
                        }));
                    }
                    else {
                        /** @type {?} */
                        const wildcardSizeAreas = this.displayedAreas.filter((/**
                         * @param {?} a
                         * @return {?}
                         */
                        (a) => a.component.size === null))
                        // No wildcard area > Need to select one arbitrarily > first
                        ;
                        // No wildcard area > Need to select one arbitrarily > first
                        if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
                            this.displayedAreas.forEach((/**
                             * @param {?} area
                             * @param {?} i
                             * @return {?}
                             */
                            (area, i) => {
                                area.size = i === 0 ? null : area.component.size;
                                area.minSize = i === 0 ? null : getAreaMinSize(area);
                                area.maxSize = i === 0 ? null : getAreaMaxSize(area);
                            }));
                        }
                        // More than one wildcard area > Need to keep only one arbitrarly > first
                        else if (wildcardSizeAreas.length > 1) {
                            /** @type {?} */
                            let alreadyGotOne = false;
                            this.displayedAreas.forEach((/**
                             * @param {?} area
                             * @return {?}
                             */
                            (area) => {
                                if (area.component.size === null) {
                                    if (alreadyGotOne === false) {
                                        area.size = null;
                                        area.minSize = null;
                                        area.maxSize = null;
                                        alreadyGotOne = true;
                                    }
                                    else {
                                        area.size = 100;
                                        area.minSize = null;
                                        area.maxSize = null;
                                    }
                                }
                                else {
                                    area.size = area.component.size;
                                    area.minSize = getAreaMinSize(area);
                                    area.maxSize = getAreaMaxSize(area);
                                }
                            }));
                        }
                    }
                    break;
                }
            }
        }
        this.refreshStyleSizes();
        this.cdRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    refreshStyleSizes() {
        ///////////////////////////////////////////
        // PERCENT MODE
        if (this.unit === 'percent') {
            // Only one area > flex-basis 100%
            if (this.displayedAreas.length === 1) {
                this.displayedAreas[0].component.setStyleFlex(0, 0, `100%`, false, false);
            }
            // Multiple areas > use each percent basis
            else {
                /** @type {?} */
                const sumGutterSize = this.getNbGutters() * this.gutterSize;
                this.displayedAreas.forEach((/**
                 * @param {?} area
                 * @return {?}
                 */
                (area) => {
                    area.component.setStyleFlex(0, 0, `calc( ${area.size}% - ${((/** @type {?} */ (area.size)) / 100) * sumGutterSize}px )`, area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                }));
            }
        }
        ///////////////////////////////////////////
        // PIXEL MODE
        else if (this.unit === 'pixel') {
            this.displayedAreas.forEach((/**
             * @param {?} area
             * @return {?}
             */
            (area) => {
                // Area with wildcard size
                if (area.size === null) {
                    if (this.displayedAreas.length === 1) {
                        area.component.setStyleFlex(1, 1, `100%`, false, false);
                    }
                    else {
                        area.component.setStyleFlex(1, 1, `auto`, false, false);
                    }
                }
                // Area with pixel size
                else {
                    // Only one area > flex-basis 100%
                    if (this.displayedAreas.length === 1) {
                        area.component.setStyleFlex(0, 0, `100%`, false, false);
                    }
                    // Multiple areas > use each pixel basis
                    else {
                        area.component.setStyleFlex(0, 0, `${area.size}px`, area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                    }
                }
            }));
        }
    }
    /**
     * @param {?} event
     * @param {?} gutterNum
     * @return {?}
     */
    clickGutter(event, gutterNum) {
        /** @type {?} */
        const tempPoint = getPointFromEvent(event)
        // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick
        ;
        // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick
        if (this.startPoint && this.startPoint.x === tempPoint.x && this.startPoint.y === tempPoint.y) {
            // If timeout in progress and new click > clearTimeout & dblClickEvent
            if (this._clickTimeout !== null) {
                window.clearTimeout(this._clickTimeout);
                this._clickTimeout = null;
                this.notify('dblclick', gutterNum);
                this.stopDragging();
            }
            // Else start timeout to call clickEvent at end
            else {
                this._clickTimeout = window.setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._clickTimeout = null;
                    this.notify('click', gutterNum);
                    this.stopDragging();
                }), this.gutterDblClickDuration);
            }
        }
    }
    /**
     * @param {?} event
     * @param {?} gutterOrder
     * @param {?} gutterNum
     * @return {?}
     */
    startDragging(event, gutterOrder, gutterNum) {
        event.preventDefault();
        event.stopPropagation();
        this.startPoint = getPointFromEvent(event);
        if (this.startPoint === null || this.disabled === true || this.isWaitingClear === true) {
            return;
        }
        this.snapshot = {
            gutterNum,
            lastSteppedOffset: 0,
            allAreasSizePixel: getElementPixelSize(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
            allInvolvedAreasSizePercent: 100,
            areasBeforeGutter: [],
            areasAfterGutter: [],
        };
        this.displayedAreas.forEach((/**
         * @param {?} area
         * @return {?}
         */
        (area) => {
            /** @type {?} */
            const areaSnapshot = {
                area,
                sizePixelAtStart: getElementPixelSize(area.component.elRef, this.direction),
                sizePercentAtStart: this.unit === 'percent' ? area.size : -1,
            };
            if (area.order < gutterOrder) {
                if (this.restrictMove === true) {
                    this.snapshot.areasBeforeGutter = [areaSnapshot];
                }
                else {
                    this.snapshot.areasBeforeGutter.unshift(areaSnapshot);
                }
            }
            else if (area.order > gutterOrder) {
                if (this.restrictMove === true) {
                    if (this.snapshot.areasAfterGutter.length === 0)
                        this.snapshot.areasAfterGutter = [areaSnapshot];
                }
                else {
                    this.snapshot.areasAfterGutter.push(areaSnapshot);
                }
            }
        }));
        this.snapshot.allInvolvedAreasSizePercent = [
            ...this.snapshot.areasBeforeGutter,
            ...this.snapshot.areasAfterGutter,
        ].reduce((/**
         * @param {?} t
         * @param {?} a
         * @return {?}
         */
        (t, a) => t + a.sizePercentAtStart), 0);
        if (this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length === 0) {
            return;
        }
        this.dragListeners.push(this.renderer.listen('document', 'mouseup', this.stopDragging.bind(this)));
        this.dragListeners.push(this.renderer.listen('document', 'touchend', this.stopDragging.bind(this)));
        this.dragListeners.push(this.renderer.listen('document', 'touchcancel', this.stopDragging.bind(this)));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.dragListeners.push(this.renderer.listen('document', 'mousemove', this.dragEvent.bind(this)));
            this.dragListeners.push(this.renderer.listen('document', 'touchmove', this.dragEvent.bind(this)));
        }));
        this.displayedAreas.forEach((/**
         * @param {?} area
         * @return {?}
         */
        (area) => area.component.lockEvents()));
        this.isDragging = true;
        this.renderer.addClass(this.elRef.nativeElement, 'as-dragging');
        this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
        this.notify('start', this.snapshot.gutterNum);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    dragEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this._clickTimeout !== null) {
            window.clearTimeout(this._clickTimeout);
            this._clickTimeout = null;
        }
        if (this.isDragging === false) {
            return;
        }
        this.endPoint = getPointFromEvent(event);
        if (this.endPoint === null) {
            return;
        }
        // Calculate steppedOffset
        /** @type {?} */
        let offset = this.direction === 'horizontal' ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y;
        if (this.dir === 'rtl') {
            offset = -offset;
        }
        /** @type {?} */
        const steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;
        if (steppedOffset === this.snapshot.lastSteppedOffset) {
            return;
        }
        this.snapshot.lastSteppedOffset = steppedOffset;
        // Need to know if each gutter side areas could reacts to steppedOffset
        /** @type {?} */
        let areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -steppedOffset, this.snapshot.allAreasSizePixel);
        /** @type {?} */
        let areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset, this.snapshot.allAreasSizePixel)
        // Each gutter side areas can't absorb all offset
        ;
        // Each gutter side areas can't absorb all offset
        if (areasBefore.remain !== 0 && areasAfter.remain !== 0) {
            if (Math.abs(areasBefore.remain) === Math.abs(areasAfter.remain)) {
            }
            else if (Math.abs(areasBefore.remain) > Math.abs(areasAfter.remain)) {
                areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
            }
            else {
                areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
            }
        }
        // Areas before gutter can't absorbs all offset > need to recalculate sizes for areas after gutter.
        else if (areasBefore.remain !== 0) {
            areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
        }
        // Areas after gutter can't absorbs all offset > need to recalculate sizes for areas before gutter.
        else if (areasAfter.remain !== 0) {
            areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
        }
        if (this.unit === 'percent') {
            // Hack because of browser messing up with sizes using calc(X% - Ypx) -> el.getBoundingClientRect()
            // If not there, playing with gutters makes total going down to 99.99875% then 99.99286%, 99.98986%,..
            /** @type {?} */
            const all = [...areasBefore.list, ...areasAfter.list];
            /** @type {?} */
            const areaToReset = all.find((/**
             * @param {?} a
             * @return {?}
             */
            (a) => a.percentAfterAbsorption !== 0 &&
                a.percentAfterAbsorption !== a.areaSnapshot.area.minSize &&
                a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize));
            if (areaToReset) {
                areaToReset.percentAfterAbsorption =
                    this.snapshot.allInvolvedAreasSizePercent -
                        all.filter((/**
                         * @param {?} a
                         * @return {?}
                         */
                        (a) => a !== areaToReset)).reduce((/**
                         * @param {?} total
                         * @param {?} a
                         * @return {?}
                         */
                        (total, a) => total + a.percentAfterAbsorption), 0);
            }
        }
        // Now we know areas could absorb steppedOffset, time to really update sizes
        areasBefore.list.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => updateAreaSize(this.unit, item)));
        areasAfter.list.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => updateAreaSize(this.unit, item)));
        this.refreshStyleSizes();
        this.notify('progress', this.snapshot.gutterNum);
    }
    /**
     * @private
     * @param {?=} event
     * @return {?}
     */
    stopDragging(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (this.isDragging === false) {
            return;
        }
        this.displayedAreas.forEach((/**
         * @param {?} area
         * @return {?}
         */
        (area) => area.component.unlockEvents()));
        while (this.dragListeners.length > 0) {
            /** @type {?} */
            const fct = this.dragListeners.pop();
            if (fct)
                fct();
        }
        // Warning: Have to be before "notify('end')"
        // because "notify('end')"" can be linked to "[size]='x'" > "build()" > "stopDragging()"
        this.isDragging = false;
        // If moved from starting point, notify end
        if (this.endPoint && (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y)) {
            this.notify('end', this.snapshot.gutterNum);
        }
        this.renderer.removeClass(this.elRef.nativeElement, 'as-dragging');
        this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
        this.snapshot = null;
        this.isWaitingClear = true;
        // Needed to let (click)="clickGutter(...)" event run and verify if mouse moved or not
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.startPoint = null;
                this.endPoint = null;
                this.isWaitingClear = false;
            }));
        }));
    }
    /**
     * @param {?} type
     * @param {?} gutterNum
     * @return {?}
     */
    notify(type, gutterNum) {
        /** @type {?} */
        const sizes = this.getVisibleAreaSizes();
        if (type === 'start') {
            this.dragStart.emit({ gutterNum, sizes });
        }
        else if (type === 'end') {
            this.dragEnd.emit({ gutterNum, sizes });
        }
        else if (type === 'click') {
            this.gutterClick.emit({ gutterNum, sizes });
        }
        else if (type === 'dblclick') {
            this.gutterDblClick.emit({ gutterNum, sizes });
        }
        else if (type === 'transitionEnd') {
            if (this.transitionEndSubscriber) {
                this.ngZone.run((/**
                 * @return {?}
                 */
                () => this.transitionEndSubscriber.next(sizes)));
            }
        }
        else if (type === 'progress') {
            // Stay outside zone to allow users do what they want about change detection mechanism.
            this.dragProgressSubject.next({ gutterNum, sizes });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stopDragging();
    }
}
SplitComponent.ɵfac = function SplitComponent_Factory(t) { return new (t || SplitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
SplitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplitComponent, selectors: [["as-split"]], viewQuery: function SplitComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gutterEls = _t);
    } }, inputs: { direction: "direction", unit: "unit", gutterSize: "gutterSize", gutterStep: "gutterStep", restrictMove: "restrictMove", useTransition: "useTransition", disabled: "disabled", dir: "dir", gutterDblClickDuration: "gutterDblClickDuration" }, outputs: { dragStart: "dragStart", dragEnd: "dragEnd", gutterClick: "gutterClick", gutterDblClick: "gutterDblClick", transitionEnd: "transitionEnd" }, exportAs: ["asSplit"], ngContentSelectors: _c1, decls: 2, vars: 1, consts: [["ngFor", "", 3, "ngForOf"], ["class", "as-split-gutter", 3, "flex-basis", "order", "mousedown", "touchstart", "mouseup", "touchend", 4, "ngIf"], [1, "as-split-gutter", 3, "mousedown", "touchstart", "mouseup", "touchend"], ["gutterEls", ""], [1, "as-split-gutter-icon"]], template: function SplitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SplitComponent_ng_template_1_Template, 1, 1, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedAreas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:col-resize;height:100%}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:row-resize;width:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(\"\")}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area, .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%]{transition:flex-basis .3s}"], changeDetection: 0 });
/** @nocollapse */
SplitComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
SplitComponent.propDecorators = {
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    unit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gutterSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gutterStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    restrictMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useTransition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gutterDblClickDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    gutterClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    gutterDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    transitionEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    gutterEls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: ['gutterEls',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'as-split',
                exportAs: 'asSplit',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: ` <ng-content></ng-content>
    <ng-template ngFor [ngForOf]="displayedAreas" let-index="index" let-last="last">
      <div
        *ngIf="last === false"
        #gutterEls
        class="as-split-gutter"
        [style.flex-basis.px]="gutterSize"
        [style.order]="index * 2 + 1"
        (mousedown)="startDragging($event, index * 2 + 1, index + 1)"
        (touchstart)="startDragging($event, index * 2 + 1, index + 1)"
        (mouseup)="clickGutter($event, index + 1)"
        (touchend)="clickGutter($event, index + 1)"
      >
        <div class="as-split-gutter-icon"></div>
      </div>
    </ng-template>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
                styles: [":host{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}:host>.as-split-gutter{flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}:host>.as-split-gutter>.as-split-gutter-icon{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}:host ::ng-deep>.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}:host ::ng-deep>.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}:host.as-horizontal{flex-direction:row}:host.as-horizontal>.as-split-gutter{flex-direction:row;cursor:col-resize;height:100%}:host.as-horizontal>.as-split-gutter>.as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}:host.as-horizontal ::ng-deep>.as-split-area{height:100%}:host.as-vertical{flex-direction:column}:host.as-vertical>.as-split-gutter{flex-direction:column;cursor:row-resize;width:100%}:host.as-vertical>.as-split-gutter .as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}:host.as-vertical ::ng-deep>.as-split-area{width:100%}:host.as-vertical ::ng-deep>.as-split-area.as-hidden{max-width:0}:host.as-disabled>.as-split-gutter{cursor:default}:host.as-disabled>.as-split-gutter .as-split-gutter-icon{background-image:url(\"\")}:host.as-transition.as-init:not(.as-dragging) ::ng-deep>.as-split-area,:host.as-transition.as-init:not(.as-dragging)>.as-split-gutter{transition:flex-basis .3s}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gutterClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gutterDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gutterStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], restrictMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], useTransition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gutterDblClickDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transitionEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gutterEls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['gutterEls']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SplitAreaDirective {
    /**
     * @param {?} ngZone
     * @param {?} elRef
     * @param {?} renderer
     * @param {?} split
     */
    constructor(ngZone, elRef, renderer, split) {
        this.ngZone = ngZone;
        this.elRef = elRef;
        this.renderer = renderer;
        this.split = split;
        this._order = null;
        ////
        this._size = null;
        ////
        this._minSize = null;
        ////
        this._maxSize = null;
        ////
        this._lockSize = false;
        ////
        this._visible = true;
        this.lockListeners = [];
        this.renderer.addClass(this.elRef.nativeElement, 'as-split-area');
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set order(v) {
        this._order = getInputPositiveNumber(v, null);
        this.split.updateArea(this, true, false);
    }
    /**
     * @return {?}
     */
    get order() {
        return this._order;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set size(v) {
        this._size = getInputPositiveNumber(v, null);
        this.split.updateArea(this, false, true);
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set minSize(v) {
        this._minSize = getInputPositiveNumber(v, null);
        this.split.updateArea(this, false, true);
    }
    /**
     * @return {?}
     */
    get minSize() {
        return this._minSize;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set maxSize(v) {
        this._maxSize = getInputPositiveNumber(v, null);
        this.split.updateArea(this, false, true);
    }
    /**
     * @return {?}
     */
    get maxSize() {
        return this._maxSize;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set lockSize(v) {
        this._lockSize = getInputBoolean(v);
        this.split.updateArea(this, false, true);
    }
    /**
     * @return {?}
     */
    get lockSize() {
        return this._lockSize;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set visible(v) {
        this._visible = getInputBoolean(v);
        if (this._visible) {
            this.split.showArea(this);
            this.renderer.removeClass(this.elRef.nativeElement, 'as-hidden');
        }
        else {
            this.split.hideArea(this);
            this.renderer.addClass(this.elRef.nativeElement, 'as-hidden');
        }
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.split.addArea(this);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.transitionListener = this.renderer.listen(this.elRef.nativeElement, 'transitionend', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Limit only flex-basis transition to trigger the event
                if (event.propertyName === 'flex-basis') {
                    this.split.notify('transitionEnd', -1);
                }
            }));
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setStyleOrder(value) {
        this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
    }
    /**
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @param {?} isMin
     * @param {?} isMax
     * @return {?}
     */
    setStyleFlex(grow, shrink, basis, isMin, isMax) {
        // Need 3 separated properties to work on IE11 (https://github.com/angular/flex-layout/issues/323)
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-grow', grow);
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-shrink', shrink);
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', basis);
        if (isMin === true)
            this.renderer.addClass(this.elRef.nativeElement, 'as-min');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-min');
        if (isMax === true)
            this.renderer.addClass(this.elRef.nativeElement, 'as-max');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-max');
    }
    /**
     * @return {?}
     */
    lockEvents() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, 'selectstart', (/**
             * @param {?} e
             * @return {?}
             */
            (e) => false)));
            this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, 'dragstart', (/**
             * @param {?} e
             * @return {?}
             */
            (e) => false)));
        }));
    }
    /**
     * @return {?}
     */
    unlockEvents() {
        while (this.lockListeners.length > 0) {
            /** @type {?} */
            const fct = this.lockListeners.pop();
            if (fct)
                fct();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unlockEvents();
        if (this.transitionListener) {
            this.transitionListener();
        }
        this.split.removeArea(this);
    }
}
SplitAreaDirective.ɵfac = function SplitAreaDirective_Factory(t) { return new (t || SplitAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SplitComponent)); };
SplitAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SplitAreaDirective, selectors: [["as-split-area"], ["", "as-split-area", ""]], inputs: { order: "order", size: "size", minSize: "minSize", maxSize: "maxSize", lockSize: "lockSize", visible: "visible" }, exportAs: ["asSplitArea"] });
/** @nocollapse */
SplitAreaDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: SplitComponent }
];
SplitAreaDirective.propDecorators = {
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lockSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'as-split-area, [as-split-area]',
                exportAs: 'asSplitArea'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: SplitComponent }]; }, { order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lockSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularSplitModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AngularSplitModule,
            providers: [],
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: AngularSplitModule,
            providers: [],
        };
    }
}
AngularSplitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularSplitModule });
AngularSplitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularSplitModule_Factory(t) { return new (t || AngularSplitModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularSplitModule, { declarations: function () { return [SplitComponent, SplitAreaDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [SplitComponent, SplitAreaDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularSplitModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [SplitComponent, SplitAreaDirective],
                exports: [SplitComponent, SplitAreaDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-split.js.map

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class OrderComponent {
    constructor() {
        console.log('sys:: content: ', this.content);
    }
    ngOnInit() {
        document.querySelector('#content').innerHTML = this.content;
        let options = {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        };
        let slides = document.querySelector('ion-slides');
        slides.options = options;
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], inputs: { content: "content" }, decls: 1, vars: 0, consts: [["id", "content"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".order-id[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #2b637e;\n}\n.prop[_ngcontent-%COMP%] {\n  color: #717171;\n  font-size: 13px;\n  line-height: 15px;\n}\n.val[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 15px;\n  text-align: center;\n}\n.slide[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWlkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYjYzN2U7XG59XG4ucHJvcCB7XG4gIGNvbG9yOiAjNzE3MTcxO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuLnZhbCB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order',
                templateUrl: './order.component.html',
                styleUrls: ['./order.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/pages/map/map.page.ts");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm2015/angular-split.js");











const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
class MapPageModule {
}
MapPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapPageModule });
MapPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapPageModule_Factory(t) { return new (t || MapPageModule)(); }, providers: [_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMaps"]], imports: [[
            angular_split__WEBPACK_IMPORTED_MODULE_7__["AngularSplitModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapPageModule, { declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]], imports: [angular_split__WEBPACK_IMPORTED_MODULE_7__["AngularSplitModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    angular_split__WEBPACK_IMPORTED_MODULE_7__["AngularSplitModule"].forRoot(),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                providers: [_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMaps"]],
                declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]],
                bootstrap: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/map/map.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps/ngx */ "./node_modules/@ionic-native/google-maps/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/services/nav.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_sys_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/sys/data.service */ "./src/app/services/sys/data.service.ts");
/* harmony import */ var _services_courier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../services/courier.service */ "./src/app/services/courier.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_sys_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../services/sys.service */ "./src/app/services/sys.service.ts");
/* harmony import */ var _services_sys_map_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../services/sys/map.service */ "./src/app/services/sys/map.service.ts");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm2015/angular-split.js");




























class MapPage {
    constructor(state$, platform, settings, courier, sys, sysMap, auth, nav, navCtrl, popoverController, data, storage) {
        this.state$ = state$;
        this.platform = platform;
        this.settings = settings;
        this.courier = courier;
        this.sys = sys;
        this.sysMap = sysMap;
        this.auth = auth;
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
        this.data = data;
        this.storage = storage;
        this.userId = localStorage.user;
        this.isMapPreparing = false;
        this.out_process = false;
        this.out_counter = 0;
        this.local_stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.existsGeos = [];
        this.sliderOptions = {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        };
        this.renderer = null;
        this.origin = {
            lat: 55.755826,
            lng: 37.6173,
        };
        this.routeToOrder = false;
        this.currentOrder = '';
    }
    ngOnInit() {
        console.log("sys:: map init");
        this.settings.state
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((state) => state == "hasRules"))
            .subscribe(() => {
            this.getOrdersId()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((ids) => ids.length > 0))
                .subscribe((ids) => {
                this.getOrders(ids).subscribe((res) => {
                    this.orders = res.orders;
                    if (this.settings.rules.appMode.toLowerCase().includes("auto")) {
                        this.orders.length = 1;
                    }
                    console.log("sys:: заказы", this.orders);
                    this.orders && this.data.orders.next(this.orders);
                    this.drawData(this.settings.rules.autoStartRoute);
                });
            });
        });
        this.state$.g_state.subscribe((state) => {
            if (state == "login") {
                this.initContent();
            }
        });
        this.sysMap.infoUpdated.subscribe((data) => {
            let customData;
            if (data) {
                if (data.label == 'showRouteToOrder') {
                    this.routeToOrder = true;
                    this.currentOrder = String(data.order.client_id);
                    customData = data;
                }
                else if (data.label == 'localChanges') {
                    customData = data;
                }
            }
            this.map.clear().then(() => {
                this.drawData(this.settings.rules.autoStartRoute, customData);
            });
        });
    }
    ngOnDestroy() {
        this.sysMap.detachMap();
    }
    ngAfterViewInit() {
        console.log("sys:: map view init");
        this.loadMap();
        this.platform.ready().then(() => {
            this.initContent();
            _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["LocationService"].getMyLocation().then((myLocation) => {
                this.coords = { lt: myLocation.latLng.lat, lg: myLocation.latLng.lng };
            });
        });
        this.state$.interval_1ss.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.local_stop$)).subscribe(() => {
            let orderId = localStorage.getItem("needOrder");
            if (orderId) {
                this.sysMap.orderDetails(orderId);
            }
        });
    }
    ngOnChanges() {
        this.drawData(this.settings.rules.autoStartRoute);
    }
    loadMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                preferences: {
                    building: false,
                    clickableIcons: true,
                },
                controls: {
                    myLocation: true,
                    myLocationButton: true,
                    zoom: true,
                    compass: false,
                    indoorPicker: true,
                },
                camera: {
                    target: this.origin,
                    zoom: 10,
                },
                gestures: {
                    zoom: true,
                },
            };
            this.map = yield this.sysMap.attachMap("map", options);
            this.sys.checkAuth().subscribe((res) => {
                if (res.success == "false") {
                    this.logout();
                }
                else {
                    this.auth.initLogin(res.sync_id);
                }
            });
            this.drawData(this.settings.rules.autoStartRoute);
            this.map.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].POI_CLICK).subscribe((params) => {
                console.log(params);
            });
            _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["LocationService"].getMyLocation().then((myLocation) => {
                this.myLocation = myLocation;
                const coordinates = this.myLocation.latLng || { lat: 55, lng: 37 };
                this.map.setCameraTarget(coordinates);
                this.map.setCameraZoom(8);
            });
        });
    }
    //Запрос Данных о заказах с учетом настроек
    getOrders(ids) {
        return this.sys.getOrders(ids);
    }
    getOrdersId() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((ids) => {
            if (this.settings.rules.typeRoute == "standart") {
                this.orders && ids.next(this.orders.filter(order => order.status_id == 1).map((order) => order.id));
            }
            else {
                this.sysMap.getWay(this.coords).subscribe((resp) => {
                    ids.next(resp.orders.map((order) => order.id));
                });
            }
        });
    }
    //Подготовка массива заказов к отрисовке в виду не рабочести markerCluster
    markeredOrders(orders) {
        let markeredOrders = [];
        orders === null || orders === void 0 ? void 0 : orders.forEach((order) => {
            let info = this.createInfoContent(order);
            this.existsGeos.push([Number(order.lt), Number(order.lg)]);
            markeredOrders.push({
                "position": {
                    "lat": parseFloat(order.lt),
                    "lng": parseFloat(order.lg),
                },
                "name": order.id,
                "info": info
            });
        });
        return markeredOrders;
    }
    drawData(autoStartRoute = "0", customData = null, drawOrders) {
        if (this.map !== undefined) {
            this.map.clear().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.routeToOrder && customData.label == 'showRouteTooOrder') {
                    this.requestDirection(customData.order.lt, customData.order.lg);
                    this.addCluster(this.markeredOrders([customData.order]));
                }
                else {
                    this.routeToOrder = false;
                    if (autoStartRoute == "0") {
                        if (!drawOrders)
                            drawOrders = yield this.storage.get('orders');
                        this.orders = drawOrders.filter((order) => { return order.status_id == 1; });
                        this.addCluster(this.markeredOrders(this.orders));
                    }
                }
            }));
        }
    }
    p_btn() {
        setTimeout(() => {
            this.out_counter = 0;
            this.out_process = false;
            console.log("outprocess_die");
        }, 1000);
        if (this.out_process) {
            this.out_counter++;
            if (this.out_counter == 2) {
                this.logout();
            }
        }
        else {
            console.log("outprocess_false");
            this.out_process = true;
        }
    }
    logout() {
        this.map.clear();
        localStorage.clear();
        this.storage.clear().then(() => {
            console.log('sys:: Сторож очищен');
            this.storage.keys().then((keys) => console.log('записи в стораже: ', keys));
        });
        this.data.ordersMap.clear();
        const url = "orders";
        const data = { action: "logout" };
        let self = this;
        this.auth.sendPost(url, data).subscribe((data) => {
            if (data.success == "true") {
                self.auth.logout();
            }
        });
    }
    initContent() {
        this.sys.checkAuth().subscribe((res) => {
            if (res.sync_id !== undefined) {
                this.settings.getSettings(res.sync_id);
                this.auth.setUser(res.sync_id);
                this.courier.getBalance(res.sync_id, 1).subscribe((data) => {
                    this.courier.ordersInfo = data.res_more;
                    this.courier.count_orders(data.res_more);
                    this.orders = data.res_more;
                    this.state$.orders.next(data.res_more);
                    this.getOrdersId()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((ids) => ids.length > 0))
                        .subscribe((ids) => {
                        this.getOrders(ids).subscribe((res) => {
                            this.storage.get('orders').then((orders) => {
                                if (orders == null) {
                                    this.data.orders.next(res.orders);
                                }
                                else {
                                    this.data.orders.next(orders);
                                }
                            });
                            this.orders = res.orders;
                            if (this.settings.rules.appMode.toLowerCase().includes("auto")) {
                                this.orders.length = 1;
                            }
                            console.log("sys:: заказы", this.orders);
                            this.drawData(this.settings.rules.autoStartRoute, null, res.orders);
                        });
                    });
                });
            }
        });
    }
    addCluster(markeredOrders) {
        const options = {
            maxZoomLevel: 14,
            markers: markeredOrders,
            boundsDraw: false,
            icons: [
                {
                    min: 2,
                    url: "./assets/markercluster/pipka.png",
                    label: {
                        color: "black",
                        bold: true,
                        fontSize: 16,
                    },
                    anchor: { x: 16, y: 16 },
                },
            ],
        };
        let markerCluster = this.map.addMarkerClusterSync(options);
        console.log(`sys:: MarkerCluster added: `, markerCluster);
        markerCluster.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let marker = params[1];
            let popover = yield this.popover(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK, marker.get('info'));
            popover.present();
        }));
    }
    createInfoContent(order) {
        let sameGeoOrders = this.orders.filter((iOrder) => iOrder.lt == order.lt && iOrder.lg == order.lg);
        let tabsContent = "";
        let note = localStorage.getItem(String(order.id))
            ? localStorage.getItem(String(order.id))
            : "";
        let arrows = sameGeoOrders.length > 1
            ? `<div class="swiper-button-prev" onClick='this.parentElement.parentElement.parentElement.slidePrev()'></div>
<div class="swiper-button-next" onClick='this.parentElement.parentElement.parentElement.slideNext()'></div>`
            : "";
        sameGeoOrders.forEach((order) => {
            var _a, _b;
            tabsContent += `
      <ion-slide class='slide'>
      <div style='width: 100%;text-align: start;margin: 0 30px;'>
<span class='order-id'>${order.client_id}</span>
<hr style="background: #D6CFCF;"/>
<span class='prop'>Дата доставки: c</span>  <span class='val'>${((_a = order.datetime_from) === null || _a === void 0 ? void 0 : _a.slice(11, 16)) || ""}</span> <span class='prop'>До:</span> <span class='val'> ${order.datetime_to ? (_b = order.datetime_to) === null || _b === void 0 ? void 0 : _b.slice(11, 16) : ""} </span>
<br/><span class='prop'>Имя:</span>  <span class='val'>${order.client_fio}</span>
<br/><span class='prop'>Компания:</span><span class='val'> ${order.client_name}</span>
<br/>
<button onClick='localStorage.setItem("needOrder",${order.id})' style='margin-top: 10px; width: 100%;;padding:10px;background: #2E627E;
border-radius: 4px; color:white;font-weight: 500;
font-size: 12px;
line-height: 14px;'>Детали</button>${note}
</div>
${arrows}
</ion-slide>
     `;
        });
        let frame = document.createElement("div");
        frame.innerHTML = `
<style>
  .order-id{
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #2B637E;
  }
  .prop{
    color:#717171;
    font-size: 13px;
    line-height: 15px;
  }
  .val{
    color: #333333;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
  }

  .slide{
    padding: 10px;
    width: 100%;
  }
</style>
`;
        let options = {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        };
        let slides = document.createElement("ion-slides");
        slides.innerHTML = `${tabsContent}`;
        slides.options = options;
        if (sameGeoOrders.length > 1) {
            let div = document.createElement("div");
            div.setAttribute("style", "text-align:center;");
            div.innerText = `${sameGeoOrders.length} заказов`;
            frame.appendChild(div);
        }
        frame.appendChild(slides);
        return frame;
    }
    popover(ev, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            content = content.innerHTML;
            const popover = yield this.popoverController.create({
                component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"],
                event: ev,
                translucent: true,
                componentProps: {
                    'content': content
                },
                cssClass: 'popover'
            });
            return popover;
        });
    }
    requestDirection(lat, lng) {
        this.destination = { lat, lng };
        _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["DirectionsService"].route({
            'origin': this.origin,
            'destination': this.destination,
            'travelMode': "DRIVING"
        }).then((result) => {
            console.log(JSON.stringify(result, null, 2));
            this.bounds = result.routes[0].bounds;
            if (!this.renderer) {
                this.renderer = this.map.addDirectionsRendererSync({
                    'directions': result,
                    'panel': 'guide',
                    'polylineOptions': {
                        'points': [
                            this.origin,
                            this.destination
                        ]
                    },
                    'markerOptions': {
                        visible: false
                    }
                });
                this.renderer.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].DIRECTIONS_CHANGED).subscribe(this.onDirectionChanged.bind(this));
            }
            else {
                let decodedPoints = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].getPlugin().geometry.encoding.decodePath(result.routes[0].overview_polyline);
                this.map.addPolyline({
                    points: decodedPoints,
                    'color': '#4a4a4a',
                    width: 4,
                    geodesic: false
                });
                this.map.addMarkerSync({ position: this.destination });
                this.renderer.setDirections(result);
            }
        });
    }
    onDirectionChanged() {
        let directions = this.renderer.getDirections();
        this.origin = directions.routes[0].legs[0].start_location;
        this.destination = directions.routes[0].legs[0].end_location;
        this.bounds = directions.routes[0].bounds;
    }
    onSplitterDragEnd() {
        this.map.animateCamera({
            'target': this.bounds,
            'duration': 500
        });
    }
}
MapPage.ɵfac = function MapPage_Factory(t) { return new (t || MapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_10__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_13__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_courier_service__WEBPACK_IMPORTED_MODULE_12__["CourierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sys_service__WEBPACK_IMPORTED_MODULE_14__["SysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sys_map_service__WEBPACK_IMPORTED_MODULE_15__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_9__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sys_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"])); };
MapPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapPage, selectors: [["app-map"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 0, consts: [[3, "click"], ["id", "container"], ["unit", "percent", "direction", "vertical", 1, "work_pane", 3, "dragEnd"], ["size", "80", "minSize", "30"], ["area1", "asSplitArea"], ["id", "map", 2, "height", "85vh", "width", "100%"], ["size", "20", "minSize", "10"], ["area2", "asSplitArea"], ["id", "guide"]], template: function MapPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapPage_Template_ion_title_click_2_listener() { return ctx.p_btn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "as-split", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnd", function MapPage_Template_as_split_dragEnd_6_listener() { return ctx.onSplitterDragEnd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "as-split-area", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "as-split-area", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], angular_split__WEBPACK_IMPORTED_MODULE_16__["SplitComponent"], angular_split__WEBPACK_IMPORTED_MODULE_16__["SplitAreaDirective"]], styles: ["ion-popover[_ngcontent-%COMP%] {\n  --width: max-content;\n}\n\n.popover[_ngcontent-%COMP%]   .popover-content[_ngcontent-%COMP%] {\n  --width: 90vw;\n  --min-width: max-content;\n}\n\n#map[_ngcontent-%COMP%], #guide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid white;\n}\n\n.one-order-chip[_ngcontent-%COMP%] {\n  --background:#2b637e;\n  --color:white;\n}\n\n#map[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBUTtBQUNWOztBQUNBO0VBQ0UsYUFBUTtFQUNSLHdCQUFZO0FBRWQ7O0FBQUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFHekI7O0FBREE7RUFDRSxvQkFBYTtFQUNiLGFBQVE7QUFJVjs7QUFGQTtFQUNFLGtCQUFrQjtBQUtwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXBvcG92ZXIge1xuICAtLXdpZHRoOiBtYXgtY29udGVudDtcbn1cbi5wb3BvdmVyIC5wb3BvdmVyLWNvbnRlbnQge1xuICAtLXdpZHRoOiA5MHZ3O1xuICAtLW1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4jbWFwLFxuI2d1aWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4ub25lLW9yZGVyLWNoaXB7XG4gIC0tYmFja2dyb3VuZDojMmI2MzdlO1xuICAtLWNvbG9yOndoaXRlO1xufVxuI21hcHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-map",
                templateUrl: "./map.page.html",
                styleUrls: ["./map.page.scss"],
            }]
    }], function () { return [{ type: _services_state_service__WEBPACK_IMPORTED_MODULE_10__["StateService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }, { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_13__["SettingsService"] }, { type: _services_courier_service__WEBPACK_IMPORTED_MODULE_12__["CourierService"] }, { type: _services_sys_service__WEBPACK_IMPORTED_MODULE_14__["SysService"] }, { type: _services_sys_map_service__WEBPACK_IMPORTED_MODULE_15__["MapService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_9__["NavService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }, { type: _services_sys_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"] }, { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-map-map-module-es2015.js.map