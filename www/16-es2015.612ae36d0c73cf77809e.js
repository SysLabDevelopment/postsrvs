(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"862v":function(t,e,i){"use strict";i.r(e),i.d(e,"MapPageModule",(function(){return Y}));var s=i("SVse"),n=i("s7LF"),r=i("iInd"),a=i("sZkV"),o=i("tBOM"),l=i("mrSG"),h=i("zBdl"),d=i("oXA7"),c=i("SIQg"),u=i("dLTe"),p=i("bk9D"),g=i("8Y7J");let m=(()=>{class t{constructor(){console.log("sys:: content: ",this.content)}ngOnInit(){document.querySelector("#content").innerHTML=this.content,document.querySelector("ion-slides").options={navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g.Cb({type:t,selectors:[["app-order"]],inputs:{content:"content"},decls:1,vars:0,consts:[["id","content"]],template:function(t,e){1&t&&g.Jb(0,"div",0)},styles:[".order-id[_ngcontent-%COMP%]{font-weight:700;font-size:14px;line-height:16px;text-align:center;color:#2b637e}.prop[_ngcontent-%COMP%]{color:#717171}.prop[_ngcontent-%COMP%], .val[_ngcontent-%COMP%]{font-size:13px;line-height:15px}.val[_ngcontent-%COMP%]{color:#333;font-weight:700;text-align:center}.slide[_ngcontent-%COMP%]{padding:10px;width:100%}"],changeDetection:0}),t})();var b=i("lGQG"),f=i("Ja+p"),A=i("ndxW"),S=i("X5X/"),x=i("24R0"),z=i("6nr9"),v=i("tudd"),_=i("D279"),y=i("xgBC"),C=i("bx2D"),P=i("Jlqm"),O=i("EPzc");class E{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new w(t,this.dueTime,this.scheduler))}}class w extends C.a{constructor(t,e,i){super(t),this.dueTime=e,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(k,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function k(t){t.debouncedNext()}const M=["gutterEls"];function D(t,e){if(1&t){const t=g.Mb();g.Lb(0,"div",2,3),g.Sb("mousedown",(function(e){g.jc(t);const i=g.Ub().index;return g.Ub().startDragging(e,2*i+1,i+1)}))("touchstart",(function(e){g.jc(t);const i=g.Ub().index;return g.Ub().startDragging(e,2*i+1,i+1)}))("mouseup",(function(e){g.jc(t);const i=g.Ub().index;return g.Ub().clickGutter(e,i+1)}))("touchend",(function(e){g.jc(t);const i=g.Ub().index;return g.Ub().clickGutter(e,i+1)})),g.Jb(2,"div",4),g.Kb()}if(2&t){const t=g.Ub().index,e=g.Ub();g.nc("flex-basis",e.gutterSize,"px")("order",2*t+1)}}function R(t,e){1&t&&g.oc(0,D,3,4,"div",1),2&t&&g.bc("ngIf",!1===e.last)}const I=["*"];function T(t){return void 0!==t.changedTouches&&t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:void 0!==t.clientX&&void 0!==t.clientY?{x:t.clientX,y:t.clientY}:null}function L(t,e){const i=t.nativeElement.getBoundingClientRect();return"horizontal"===e?i.width:i.height}function G(t){return"boolean"==typeof t?t:"false"!==t}function N(t,e){return null==t?e:(t=Number(t),!isNaN(t)&&t>=0?t:e)}function B(t,e){if("percent"===t){const t=e.reduce((t,e)=>null!==e?t+e:t,0);return e.every(t=>null!==t)&&t>99.9&&t<100.1}if("pixel"===t)return 1===e.filter(t=>null===t).length}function j(t){return null===t.size?null:!0===t.component.lockSize?t.size:null===t.component.minSize?null:t.component.minSize>t.size?t.size:t.component.minSize}function F(t){return null===t.size?null:!0===t.component.lockSize?t.size:null===t.component.maxSize?null:t.component.maxSize<t.size?t.size:t.component.maxSize}function U(t,e,i,s){return e.reduce((e,i)=>{const n=function(t,e,i,s){return 0===i?{areaSnapshot:e,pixelAbsorb:0,percentAfterAbsorption:e.sizePercentAtStart,pixelRemain:0}:0===e.sizePixelAtStart&&i<0?{areaSnapshot:e,pixelAbsorb:0,percentAfterAbsorption:0,pixelRemain:i}:"percent"===t?function(t,e,i){const s=(t.sizePixelAtStart+e)/i*100;if(e>0){if(null!==t.area.maxSize&&s>t.area.maxSize){const s=t.area.maxSize/100*i;return{areaSnapshot:t,pixelAbsorb:s,percentAfterAbsorption:t.area.maxSize,pixelRemain:t.sizePixelAtStart+e-s}}return{areaSnapshot:t,pixelAbsorb:e,percentAfterAbsorption:s>100?100:s,pixelRemain:0}}if(e<0){if(null!==t.area.minSize&&s<t.area.minSize){const s=t.area.minSize/100*i;return{areaSnapshot:t,pixelAbsorb:s,percentAfterAbsorption:t.area.minSize,pixelRemain:t.sizePixelAtStart+e-s}}return s<0?{areaSnapshot:t,pixelAbsorb:-t.sizePixelAtStart,percentAfterAbsorption:0,pixelRemain:e+t.sizePixelAtStart}:{areaSnapshot:t,pixelAbsorb:e,percentAfterAbsorption:s,pixelRemain:0}}}(e,i,s):"pixel"===t?function(t,e,i){const s=t.sizePixelAtStart+e;return e>0?null!==t.area.maxSize&&s>t.area.maxSize?{areaSnapshot:t,pixelAbsorb:t.area.maxSize-t.sizePixelAtStart,percentAfterAbsorption:-1,pixelRemain:s-t.area.maxSize}:{areaSnapshot:t,pixelAbsorb:e,percentAfterAbsorption:-1,pixelRemain:0}:e<0?null!==t.area.minSize&&s<t.area.minSize?{areaSnapshot:t,pixelAbsorb:t.area.minSize+e-s,percentAfterAbsorption:-1,pixelRemain:s-t.area.minSize}:s<0?{areaSnapshot:t,pixelAbsorb:-t.sizePixelAtStart,percentAfterAbsorption:-1,pixelRemain:e+t.sizePixelAtStart}:{areaSnapshot:t,pixelAbsorb:e,percentAfterAbsorption:-1,pixelRemain:0}:void 0}(e,i):void 0}(t,i,e.remain,s);return e.list.push(n),e.remain=n.pixelRemain,e},{remain:i,list:[]})}function V(t,e){"percent"===t?e.areaSnapshot.area.size=e.percentAfterAbsorption:"pixel"===t&&null!==e.areaSnapshot.area.size&&(e.areaSnapshot.area.size=e.areaSnapshot.sizePixelAtStart+e.pixelAbsorb)}let K=(()=>{class t{constructor(t,e,i,s){this.ngZone=t,this.elRef=e,this.cdRef=i,this.renderer=s,this._direction="horizontal",this._unit="percent",this._gutterSize=11,this._gutterStep=1,this._restrictMove=!1,this._useTransition=!1,this._disabled=!1,this._dir="ltr",this._gutterDblClickDuration=0,this.dragStart=new g.n(!1),this.dragEnd=new g.n(!1),this.gutterClick=new g.n(!1),this.gutterDblClick=new g.n(!1),this.dragProgressSubject=new d.a,this.dragProgress$=this.dragProgressSubject.asObservable(),this.isDragging=!1,this.isWaitingClear=!1,this.dragListeners=[],this.snapshot=null,this.startPoint=null,this.endPoint=null,this.displayedAreas=[],this.hidedAreas=[],this._clickTimeout=null,this.direction=this._direction}set direction(t){this._direction="vertical"===t?"vertical":"horizontal",this.renderer.addClass(this.elRef.nativeElement,"as-"+this._direction),this.renderer.removeClass(this.elRef.nativeElement,"as-"+("vertical"===this._direction?"horizontal":"vertical")),this.build(!1,!1)}get direction(){return this._direction}set unit(t){this._unit="pixel"===t?"pixel":"percent",this.renderer.addClass(this.elRef.nativeElement,"as-"+this._unit),this.renderer.removeClass(this.elRef.nativeElement,"as-"+("pixel"===this._unit?"percent":"pixel")),this.build(!1,!0)}get unit(){return this._unit}set gutterSize(t){this._gutterSize=N(t,11),this.build(!1,!1)}get gutterSize(){return this._gutterSize}set gutterStep(t){this._gutterStep=N(t,1)}get gutterStep(){return this._gutterStep}set restrictMove(t){this._restrictMove=G(t)}get restrictMove(){return this._restrictMove}set useTransition(t){this._useTransition=G(t),this._useTransition?this.renderer.addClass(this.elRef.nativeElement,"as-transition"):this.renderer.removeClass(this.elRef.nativeElement,"as-transition")}get useTransition(){return this._useTransition}set disabled(t){this._disabled=G(t),this._disabled?this.renderer.addClass(this.elRef.nativeElement,"as-disabled"):this.renderer.removeClass(this.elRef.nativeElement,"as-disabled")}get disabled(){return this._disabled}set dir(t){this._dir="rtl"===t?"rtl":"ltr",this.renderer.setAttribute(this.elRef.nativeElement,"dir",this._dir)}get dir(){return this._dir}set gutterDblClickDuration(t){this._gutterDblClickDuration=N(t,0)}get gutterDblClickDuration(){return this._gutterDblClickDuration}get transitionEnd(){return new c.a(t=>this.transitionEndSubscriber=t).pipe(function(t,e=P.a){return i=>Object(O.a)(i,new E(t,e))}(20))}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>this.renderer.addClass(this.elRef.nativeElement,"as-init"))})}getNbGutters(){return 0===this.displayedAreas.length?0:this.displayedAreas.length-1}addArea(t){const e={component:t,order:0,size:0,minSize:null,maxSize:null};!0===t.visible?(this.displayedAreas.push(e),this.build(!0,!0)):this.hidedAreas.push(e)}removeArea(t){if(this.displayedAreas.some(e=>e.component===t)){const e=this.displayedAreas.find(e=>e.component===t);this.displayedAreas.splice(this.displayedAreas.indexOf(e),1),this.build(!0,!0)}else if(this.hidedAreas.some(e=>e.component===t)){const e=this.hidedAreas.find(e=>e.component===t);this.hidedAreas.splice(this.hidedAreas.indexOf(e),1)}}updateArea(t,e,i){!0===t.visible&&this.build(e,i)}showArea(t){const e=this.hidedAreas.find(e=>e.component===t);if(void 0===e)return;const i=this.hidedAreas.splice(this.hidedAreas.indexOf(e),1);this.displayedAreas.push(...i),this.build(!0,!0)}hideArea(t){const e=this.displayedAreas.find(e=>e.component===t);if(void 0===e)return;const i=this.displayedAreas.splice(this.displayedAreas.indexOf(e),1);i.forEach(t=>{t.order=0,t.size=0}),this.hidedAreas.push(...i),this.build(!0,!0)}getVisibleAreaSizes(){return this.displayedAreas.map(t=>null===t.size?"*":t.size)}setVisibleAreaSizes(t){if(t.length!==this.displayedAreas.length)return!1;const e=t.map(t=>N(t,null));return!1!==B(this.unit,e)&&(this.displayedAreas.forEach((t,i)=>t.component._size=e[i]),this.build(!1,!0),!0)}build(t,e){if(this.stopDragging(),!0===t&&(this.displayedAreas.every(t=>null!==t.component.order)&&this.displayedAreas.sort((t,e)=>t.component.order-e.component.order),this.displayedAreas.forEach((t,e)=>{t.order=2*e,t.component.setStyleOrder(t.order)})),!0===e){const t=B(this.unit,this.displayedAreas.map(t=>t.component.size));switch(this.unit){case"percent":{const e=100/this.displayedAreas.length;this.displayedAreas.forEach(i=>{i.size=t?i.component.size:e,i.minSize=j(i),i.maxSize=F(i)});break}case"pixel":if(t)this.displayedAreas.forEach(t=>{t.size=t.component.size,t.minSize=j(t),t.maxSize=F(t)});else{const t=this.displayedAreas.filter(t=>null===t.component.size);if(0===t.length&&this.displayedAreas.length>0)this.displayedAreas.forEach((t,e)=>{t.size=0===e?null:t.component.size,t.minSize=0===e?null:j(t),t.maxSize=0===e?null:F(t)});else if(t.length>1){let t=!1;this.displayedAreas.forEach(e=>{null===e.component.size?!1===t?(e.size=null,e.minSize=null,e.maxSize=null,t=!0):(e.size=100,e.minSize=null,e.maxSize=null):(e.size=e.component.size,e.minSize=j(e),e.maxSize=F(e))})}}}}this.refreshStyleSizes(),this.cdRef.markForCheck()}refreshStyleSizes(){if("percent"===this.unit)if(1===this.displayedAreas.length)this.displayedAreas[0].component.setStyleFlex(0,0,"100%",!1,!1);else{const t=this.getNbGutters()*this.gutterSize;this.displayedAreas.forEach(e=>{e.component.setStyleFlex(0,0,`calc( ${e.size}% - ${e.size/100*t}px )`,null!==e.minSize&&e.minSize===e.size,null!==e.maxSize&&e.maxSize===e.size)})}else"pixel"===this.unit&&this.displayedAreas.forEach(t=>{null===t.size?t.component.setStyleFlex(1,1,1===this.displayedAreas.length?"100%":"auto",!1,!1):1===this.displayedAreas.length?t.component.setStyleFlex(0,0,"100%",!1,!1):t.component.setStyleFlex(0,0,t.size+"px",null!==t.minSize&&t.minSize===t.size,null!==t.maxSize&&t.maxSize===t.size)})}clickGutter(t,e){const i=T(t);this.startPoint&&this.startPoint.x===i.x&&this.startPoint.y===i.y&&(null!==this._clickTimeout?(window.clearTimeout(this._clickTimeout),this._clickTimeout=null,this.notify("dblclick",e),this.stopDragging()):this._clickTimeout=window.setTimeout(()=>{this._clickTimeout=null,this.notify("click",e),this.stopDragging()},this.gutterDblClickDuration))}startDragging(t,e,i){t.preventDefault(),t.stopPropagation(),this.startPoint=T(t),null!==this.startPoint&&!0!==this.disabled&&!0!==this.isWaitingClear&&(this.snapshot={gutterNum:i,lastSteppedOffset:0,allAreasSizePixel:L(this.elRef,this.direction)-this.getNbGutters()*this.gutterSize,allInvolvedAreasSizePercent:100,areasBeforeGutter:[],areasAfterGutter:[]},this.displayedAreas.forEach(t=>{const i={area:t,sizePixelAtStart:L(t.component.elRef,this.direction),sizePercentAtStart:"percent"===this.unit?t.size:-1};t.order<e?!0===this.restrictMove?this.snapshot.areasBeforeGutter=[i]:this.snapshot.areasBeforeGutter.unshift(i):t.order>e&&(!0===this.restrictMove?0===this.snapshot.areasAfterGutter.length&&(this.snapshot.areasAfterGutter=[i]):this.snapshot.areasAfterGutter.push(i))}),this.snapshot.allInvolvedAreasSizePercent=[...this.snapshot.areasBeforeGutter,...this.snapshot.areasAfterGutter].reduce((t,e)=>t+e.sizePercentAtStart,0),0!==this.snapshot.areasBeforeGutter.length&&0!==this.snapshot.areasAfterGutter.length&&(this.dragListeners.push(this.renderer.listen("document","mouseup",this.stopDragging.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchend",this.stopDragging.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchcancel",this.stopDragging.bind(this))),this.ngZone.runOutsideAngular(()=>{this.dragListeners.push(this.renderer.listen("document","mousemove",this.dragEvent.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchmove",this.dragEvent.bind(this)))}),this.displayedAreas.forEach(t=>t.component.lockEvents()),this.isDragging=!0,this.renderer.addClass(this.elRef.nativeElement,"as-dragging"),this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum-1].nativeElement,"as-dragged"),this.notify("start",this.snapshot.gutterNum)))}dragEvent(t){if(t.preventDefault(),t.stopPropagation(),null!==this._clickTimeout&&(window.clearTimeout(this._clickTimeout),this._clickTimeout=null),!1===this.isDragging)return;if(this.endPoint=T(t),null===this.endPoint)return;let e="horizontal"===this.direction?this.startPoint.x-this.endPoint.x:this.startPoint.y-this.endPoint.y;"rtl"===this.dir&&(e=-e);const i=Math.round(e/this.gutterStep)*this.gutterStep;if(i===this.snapshot.lastSteppedOffset)return;this.snapshot.lastSteppedOffset=i;let s=U(this.unit,this.snapshot.areasBeforeGutter,-i,this.snapshot.allAreasSizePixel),n=U(this.unit,this.snapshot.areasAfterGutter,i,this.snapshot.allAreasSizePixel);if(0!==s.remain&&0!==n.remain?Math.abs(s.remain)===Math.abs(n.remain)||(Math.abs(s.remain)>Math.abs(n.remain)?n=U(this.unit,this.snapshot.areasAfterGutter,i+s.remain,this.snapshot.allAreasSizePixel):s=U(this.unit,this.snapshot.areasBeforeGutter,-(i-n.remain),this.snapshot.allAreasSizePixel)):0!==s.remain?n=U(this.unit,this.snapshot.areasAfterGutter,i+s.remain,this.snapshot.allAreasSizePixel):0!==n.remain&&(s=U(this.unit,this.snapshot.areasBeforeGutter,-(i-n.remain),this.snapshot.allAreasSizePixel)),"percent"===this.unit){const t=[...s.list,...n.list],e=t.find(t=>0!==t.percentAfterAbsorption&&t.percentAfterAbsorption!==t.areaSnapshot.area.minSize&&t.percentAfterAbsorption!==t.areaSnapshot.area.maxSize);e&&(e.percentAfterAbsorption=this.snapshot.allInvolvedAreasSizePercent-t.filter(t=>t!==e).reduce((t,e)=>t+e.percentAfterAbsorption,0))}s.list.forEach(t=>V(this.unit,t)),n.list.forEach(t=>V(this.unit,t)),this.refreshStyleSizes(),this.notify("progress",this.snapshot.gutterNum)}stopDragging(t){if(t&&(t.preventDefault(),t.stopPropagation()),!1!==this.isDragging){for(this.displayedAreas.forEach(t=>t.component.unlockEvents());this.dragListeners.length>0;){const t=this.dragListeners.pop();t&&t()}this.isDragging=!1,!this.endPoint||this.startPoint.x===this.endPoint.x&&this.startPoint.y===this.endPoint.y||this.notify("end",this.snapshot.gutterNum),this.renderer.removeClass(this.elRef.nativeElement,"as-dragging"),this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum-1].nativeElement,"as-dragged"),this.snapshot=null,this.isWaitingClear=!0,this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.startPoint=null,this.endPoint=null,this.isWaitingClear=!1})})}}notify(t,e){const i=this.getVisibleAreaSizes();"start"===t?this.dragStart.emit({gutterNum:e,sizes:i}):"end"===t?this.dragEnd.emit({gutterNum:e,sizes:i}):"click"===t?this.gutterClick.emit({gutterNum:e,sizes:i}):"dblclick"===t?this.gutterDblClick.emit({gutterNum:e,sizes:i}):"transitionEnd"===t?this.transitionEndSubscriber&&this.ngZone.run(()=>this.transitionEndSubscriber.next(i)):"progress"===t&&this.dragProgressSubject.next({gutterNum:e,sizes:i})}ngOnDestroy(){this.stopDragging()}}return t.\u0275fac=function(e){return new(e||t)(g.Ib(g.z),g.Ib(g.l),g.Ib(g.h),g.Ib(g.D))},t.\u0275cmp=g.Cb({type:t,selectors:[["as-split"]],viewQuery:function(t,e){var i;1&t&&g.tc(M,!0),2&t&&g.hc(i=g.Tb())&&(e.gutterEls=i)},inputs:{direction:"direction",unit:"unit",gutterSize:"gutterSize",gutterStep:"gutterStep",restrictMove:"restrictMove",useTransition:"useTransition",disabled:"disabled",dir:"dir",gutterDblClickDuration:"gutterDblClickDuration"},outputs:{dragStart:"dragStart",dragEnd:"dragEnd",gutterClick:"gutterClick",gutterDblClick:"gutterDblClick",transitionEnd:"transitionEnd"},exportAs:["asSplit"],ngContentSelectors:I,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],["class","as-split-gutter",3,"flex-basis","order","mousedown","touchstart","mouseup","touchend",4,"ngIf"],[1,"as-split-gutter",3,"mousedown","touchstart","mouseup","touchend"],["gutterEls",""],[1,"as-split-gutter-icon"]],template:function(t,e){1&t&&(g.ac(),g.Zb(0),g.oc(1,R,1,1,"ng-template",0)),2&t&&(g.yb(1),g.bc("ngForOf",e.displayedAreas))},directives:[s.k,s.l],styles:['[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:col-resize;height:100%}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:row-resize;width:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url("")}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area, .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%]{transition:flex-basis .3s}'],changeDetection:0}),t})(),$=(()=>{class t{constructor(t,e,i,s){this.ngZone=t,this.elRef=e,this.renderer=i,this.split=s,this._order=null,this._size=null,this._minSize=null,this._maxSize=null,this._lockSize=!1,this._visible=!0,this.lockListeners=[],this.renderer.addClass(this.elRef.nativeElement,"as-split-area")}set order(t){this._order=N(t,null),this.split.updateArea(this,!0,!1)}get order(){return this._order}set size(t){this._size=N(t,null),this.split.updateArea(this,!1,!0)}get size(){return this._size}set minSize(t){this._minSize=N(t,null),this.split.updateArea(this,!1,!0)}get minSize(){return this._minSize}set maxSize(t){this._maxSize=N(t,null),this.split.updateArea(this,!1,!0)}get maxSize(){return this._maxSize}set lockSize(t){this._lockSize=G(t),this.split.updateArea(this,!1,!0)}get lockSize(){return this._lockSize}set visible(t){this._visible=G(t),this._visible?(this.split.showArea(this),this.renderer.removeClass(this.elRef.nativeElement,"as-hidden")):(this.split.hideArea(this),this.renderer.addClass(this.elRef.nativeElement,"as-hidden"))}get visible(){return this._visible}ngOnInit(){this.split.addArea(this),this.ngZone.runOutsideAngular(()=>{this.transitionListener=this.renderer.listen(this.elRef.nativeElement,"transitionend",t=>{"flex-basis"===t.propertyName&&this.split.notify("transitionEnd",-1)})})}setStyleOrder(t){this.renderer.setStyle(this.elRef.nativeElement,"order",t)}setStyleFlex(t,e,i,s,n){this.renderer.setStyle(this.elRef.nativeElement,"flex-grow",t),this.renderer.setStyle(this.elRef.nativeElement,"flex-shrink",e),this.renderer.setStyle(this.elRef.nativeElement,"flex-basis",i),!0===s?this.renderer.addClass(this.elRef.nativeElement,"as-min"):this.renderer.removeClass(this.elRef.nativeElement,"as-min"),!0===n?this.renderer.addClass(this.elRef.nativeElement,"as-max"):this.renderer.removeClass(this.elRef.nativeElement,"as-max")}lockEvents(){this.ngZone.runOutsideAngular(()=>{this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement,"selectstart",t=>!1)),this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement,"dragstart",t=>!1))})}unlockEvents(){for(;this.lockListeners.length>0;){const t=this.lockListeners.pop();t&&t()}}ngOnDestroy(){this.unlockEvents(),this.transitionListener&&this.transitionListener(),this.split.removeArea(this)}}return t.\u0275fac=function(e){return new(e||t)(g.Ib(g.z),g.Ib(g.l),g.Ib(g.D),g.Ib(K))},t.\u0275dir=g.Db({type:t,selectors:[["as-split-area"],["","as-split-area",""]],inputs:{order:"order",size:"size",minSize:"minSize",maxSize:"maxSize",lockSize:"lockSize",visible:"visible"},exportAs:["asSplitArea"]}),t})(),J=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}static forChild(){return{ngModule:t,providers:[]}}}return t.\u0275mod=g.Gb({type:t}),t.\u0275inj=g.Fb({factory:function(e){return new(e||t)},imports:[[s.c]]}),t})();const Z=[{path:"",component:(()=>{class t{constructor(t,e,i,s,n,r,a,o,l,h,c,u){this.state$=t,this.platform=e,this.settings=i,this.courier=s,this.sys=n,this.sysMap=r,this.auth=a,this.nav=o,this.navCtrl=l,this.popoverController=h,this.data=c,this.storage=u,this.userId=localStorage.user,this.isMapPreparing=!1,this.out_process=!1,this.out_counter=0,this.local_stop$=new d.a,this.existsGeos=[],this.sliderOptions={navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},this.renderer=null,this.origin={lat:55.755826,lng:37.6173},this.routeToOrder=!1,this.currentOrder=""}ngOnInit(){console.log("sys:: map init"),this.settings.state.pipe(Object(u.a)(t=>"hasRules"==t)).subscribe(()=>{this.getOrdersId().pipe(Object(u.a)(t=>t.length>0)).subscribe(t=>{this.getOrders(t).subscribe(t=>{this.orders=t.orders,this.settings.rules.appMode.toLowerCase().includes("auto")&&(this.orders.length=1),console.log("sys:: \u0437\u0430\u043a\u0430\u0437\u044b",this.orders),this.orders&&this.data.orders.next(this.orders),this.drawData(this.settings.rules.autoStartRoute)})})}),this.state$.g_state.subscribe(t=>{"login"==t&&this.initContent()}),this.sysMap.infoUpdated.subscribe(t=>{let e;t&&("showRouteToOrder"==t.label?(this.routeToOrder=!0,this.currentOrder=String(t.order.client_id),e=t):"localChanges"==t.label&&(e=t)),this.map.clear().then(()=>{this.drawData(this.settings.rules.autoStartRoute,e)})})}ngOnDestroy(){this.sysMap.detachMap()}ngAfterViewInit(){console.log("sys:: map view init"),this.loadMap(),this.platform.ready().then(()=>{this.initContent(),h.e.getMyLocation().then(t=>{this.coords={lt:t.latLng.lat,lg:t.latLng.lng}})}),this.state$.interval_1ss.pipe(Object(p.a)(this.local_stop$)).subscribe(()=>{let t=localStorage.getItem("needOrder");t&&this.sysMap.orderDetails(t)})}ngOnChanges(){this.drawData(this.settings.rules.autoStartRoute)}loadMap(){return Object(l.a)(this,void 0,void 0,(function*(){let t={preferences:{building:!1,clickableIcons:!0},controls:{myLocation:!0,myLocationButton:!0,zoom:!0,compass:!1,indoorPicker:!0},camera:{target:this.origin,zoom:10},gestures:{zoom:!0}};this.map=yield this.sysMap.attachMap("map",t),this.sys.checkAuth().subscribe(t=>{"false"==t.success?this.logout():this.auth.initLogin(t.sync_id)}),this.drawData(this.settings.rules.autoStartRoute),this.map.on(h.d.POI_CLICK).subscribe(t=>{console.log(t)}),h.e.getMyLocation().then(t=>{this.myLocation=t,this.map.setCameraTarget(this.myLocation.latLng||{lat:55,lng:37}),this.map.setCameraZoom(8)})}))}getOrders(t){return this.sys.getOrders(t)}getOrdersId(){return new c.a(t=>{"standart"==this.settings.rules.typeRoute?this.orders&&t.next(this.orders.filter(t=>1==t.status_id).map(t=>t.id)):this.sysMap.getWay(this.coords).subscribe(e=>{t.next(e.orders.map(t=>t.id))})})}markeredOrders(t){let e=[];return null==t||t.forEach(t=>{let i=this.createInfoContent(t);this.existsGeos.push([Number(t.lt),Number(t.lg)]),e.push({position:{lat:parseFloat(t.lt),lng:parseFloat(t.lg)},name:t.id,info:i})}),e}drawData(t="0",e=null){void 0!==this.map&&this.map.clear().then(()=>{this.routeToOrder&&"showRouteTooOrder"==e.label?(this.requestDirection(e.order.lt,e.order.lg),this.addCluster(this.markeredOrders([e.order]))):(this.routeToOrder=!1,"0"==t&&this.storage.get("orders").then(t=>{null!==t&&(this.orders=t.filter(t=>1==t.status_id),this.addCluster(this.markeredOrders(this.orders)))}))})}p_btn(){setTimeout(()=>{this.out_counter=0,this.out_process=!1,console.log("outprocess_die")},1e3),this.out_process?(this.out_counter++,2==this.out_counter&&this.logout()):(console.log("outprocess_false"),this.out_process=!0)}logout(){this.map.clear(),localStorage.clear(),this.storage.clear().then(()=>{console.log("sys:: \u0421\u0442\u043e\u0440\u043e\u0436 \u043e\u0447\u0438\u0449\u0435\u043d"),this.storage.keys().then(t=>console.log("\u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0441\u0442\u043e\u0440\u0430\u0436\u0435: ",t))}),this.data.ordersMap.clear();let t=this;this.auth.sendPost("orders",{action:"logout"}).subscribe(e=>{"true"==e.success&&t.auth.logout()})}initContent(){this.sys.checkAuth().subscribe(t=>{void 0!==t.sync_id&&(this.settings.getSettings(t.sync_id),this.auth.setUser(t.sync_id),this.courier.getBalance(t.sync_id,1).subscribe(t=>{this.courier.ordersInfo=t.res_more,this.courier.count_orders(t.res_more),this.orders=t.res_more,this.state$.orders.next(t.res_more),this.getOrdersId().pipe(Object(u.a)(t=>t.length>0)).subscribe(t=>{this.getOrders(t).subscribe(t=>{this.storage.get("orders").then(t=>{null==t?this.data.getApiData():this.data.orders.next(t)}),this.orders=t.orders,this.settings.rules.appMode.toLowerCase().includes("auto")&&(this.orders.length=1),console.log("sys:: \u0437\u0430\u043a\u0430\u0437\u044b",this.orders),this.drawData(this.settings.rules.autoStartRoute)})})}))})}addCluster(t){let e=this.map.addMarkerClusterSync({maxZoomLevel:14,markers:t,boundsDraw:!1,icons:[{min:2,url:"./assets/markercluster/pipka.png",label:{color:"black",bold:!0,fontSize:16},anchor:{x:16,y:16}}]});console.log("sys:: MarkerCluster added: ",e),e.on(h.d.MARKER_CLICK).subscribe(t=>Object(l.a)(this,void 0,void 0,(function*(){let e=t[1];(yield this.popover(h.d.MARKER_CLICK,e.get("info"))).present()})))}createInfoContent(t){let e=this.orders.filter(e=>e.lt==t.lt&&e.lg==t.lg),i="",s=localStorage.getItem(String(t.id))?localStorage.getItem(String(t.id)):"",n=e.length>1?"<div class=\"swiper-button-prev\" onClick='this.parentElement.parentElement.parentElement.slidePrev()'></div>\n<div class=\"swiper-button-next\" onClick='this.parentElement.parentElement.parentElement.slideNext()'></div>":"";e.forEach(t=>{var e,r;i+=`\n      <ion-slide class='slide'>\n      <div style='width: 100%;text-align: start;margin: 0 30px;'>\n<span class='order-id'>${t.client_id}</span>\n<hr style="background: #D6CFCF;"/>\n<span class='prop'>\u0414\u0430\u0442\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: c</span>  <span class='val'>${(null===(e=t.datetime_from)||void 0===e?void 0:e.slice(11,16))||""}</span> <span class='prop'>\u0414\u043e:</span> <span class='val'> ${t.datetime_to?null===(r=t.datetime_to)||void 0===r?void 0:r.slice(11,16):""} </span>\n<br/><span class='prop'>\u0418\u043c\u044f:</span>  <span class='val'>${t.client_fio}</span>\n<br/><span class='prop'>\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f:</span><span class='val'> ${t.client_name}</span>\n<br/>\n<button onClick='localStorage.setItem("needOrder",${t.id})' style='margin-top: 10px; width: 100%;;padding:10px;background: #2E627E;\nborder-radius: 4px; color:white;font-weight: 500;\nfont-size: 12px;\nline-height: 14px;'>\u0414\u0435\u0442\u0430\u043b\u0438</button>${s}\n</div>\n${n}\n</ion-slide>\n     `});let r=document.createElement("div");r.innerHTML="\n<style>\n  .order-id{\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 16px;\n    text-align: center;\n    color: #2B637E;\n  }\n  .prop{\n    color:#717171;\n    font-size: 13px;\n    line-height: 15px;\n  }\n  .val{\n    color: #333333;\n    font-weight: bold;\n    font-size: 13px;\n    line-height: 15px;\n    text-align: center;\n  }\n\n  .slide{\n    padding: 10px;\n    width: 100%;\n  }\n</style>\n";let a=document.createElement("ion-slides");if(a.innerHTML=""+i,a.options={navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},e.length>1){let t=document.createElement("div");t.setAttribute("style","text-align:center;"),t.innerText=e.length+" \u0437\u0430\u043a\u0430\u0437\u043e\u0432",r.appendChild(t)}return r.appendChild(a),r}popover(t,e){return Object(l.a)(this,void 0,void 0,(function*(){return e=e.innerHTML,yield this.popoverController.create({component:m,event:t,translucent:!0,componentProps:{content:e},cssClass:"popover"})}))}requestDirection(t,e){this.destination={lat:t,lng:e},h.a.route({origin:this.origin,destination:this.destination,travelMode:"DRIVING"}).then(t=>{if(console.log(JSON.stringify(t,null,2)),this.bounds=t.routes[0].bounds,this.renderer){let e=h.c.getPlugin().geometry.encoding.decodePath(t.routes[0].overview_polyline);this.map.addPolyline({points:e,color:"#4a4a4a",width:4,geodesic:!1}),this.map.addMarkerSync({position:this.destination}),this.renderer.setDirections(t)}else this.renderer=this.map.addDirectionsRendererSync({directions:t,panel:"guide",polylineOptions:{points:[this.origin,this.destination]},markerOptions:{visible:!1}}),this.renderer.on(h.d.DIRECTIONS_CHANGED).subscribe(this.onDirectionChanged.bind(this))})}onDirectionChanged(){let t=this.renderer.getDirections();this.origin=t.routes[0].legs[0].start_location,this.destination=t.routes[0].legs[0].end_location,this.bounds=t.routes[0].bounds}onSplitterDragEnd(){this.map.animateCamera({target:this.bounds,duration:500})}}return t.\u0275fac=function(e){return new(e||t)(g.Ib(A.a),g.Ib(a.I),g.Ib(z.a),g.Ib(x.a),g.Ib(v.a),g.Ib(_.a),g.Ib(b.a),g.Ib(f.a),g.Ib(a.H),g.Ib(a.J),g.Ib(S.a),g.Ib(y.b))},t.\u0275cmp=g.Cb({type:t,selectors:[["app-map"]],features:[g.wb],decls:13,vars:0,consts:[[3,"click"],["id","container"],["unit","percent","direction","vertical",1,"work_pane",3,"dragEnd"],["size","80","minSize","30"],["area1","asSplitArea"],["id","map",2,"height","85vh","width","100%"],["size","20","minSize","10"],["area2","asSplitArea"],["id","guide"]],template:function(t,e){1&t&&(g.Lb(0,"ion-header"),g.Lb(1,"ion-toolbar"),g.Lb(2,"ion-title",0),g.Sb("click",(function(){return e.p_btn()})),g.pc(3,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442"),g.Kb(),g.Kb(),g.Kb(),g.Lb(4,"ion-content"),g.Lb(5,"div",1),g.Lb(6,"as-split",2),g.Sb("dragEnd",(function(){return e.onSplitterDragEnd()})),g.Lb(7,"as-split-area",3,4),g.Jb(9,"div",5),g.Kb(),g.Lb(10,"as-split-area",6,7),g.Jb(12,"div",8),g.Kb(),g.Kb(),g.Kb(),g.Kb())},directives:[a.k,a.D,a.B,a.i,K,$],styles:["ion-popover[_ngcontent-%COMP%]{--width:max-content}.popover[_ngcontent-%COMP%]   .popover-content[_ngcontent-%COMP%]{--width:90vw;--min-width:max-content}#guide[_ngcontent-%COMP%], #map[_ngcontent-%COMP%]{width:100%;height:100%;border:1px solid #fff}.one-order-chip[_ngcontent-%COMP%]{--background:#2b637e;--color:#fff}#map[_ngcontent-%COMP%]{text-align:center}"]}),t})()}];let Y=(()=>{class t{}return t.\u0275mod=g.Gb({type:t}),t.\u0275inj=g.Fb({factory:function(e){return new(e||t)},providers:[o.b],imports:[[J.forRoot(),s.c,n.b,a.E,r.i.forChild(Z)]]}),t})()}}]);