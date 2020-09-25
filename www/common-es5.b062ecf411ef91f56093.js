!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return s}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},s=function(){r.selectionEnd()},c=function(t){r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},D279:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("mrSG"),i=n("IheW"),o=n("ElRG"),s=n("gTw3"),u=n("tBOM"),l=n("XNiG"),f=n("fXoL"),d=n("sZkV"),h=n("iInd"),p=function(){var t=function(){function t(e,n,r,i,o,s){a(this,t),this.http=e,this.geo=n,this.device=r,this.platform=i,this.router=o,this.viewCtrl=s,this.infoUpdated=new l.a}return c(t,[{key:"getWay",value:function(t){var e={action:"getWay",lt:null==t?void 0:t.lt,lg:null==t?void 0:t.lg,auto:0,mode:"auto",uuid:this.device.uuid},n={headers:new i.e({"Content-type":"application/json"})};return this.http.post("http://mobile.postsrvs.ru:8080/https://mobile.postsrvs.ru/mobile/orders",e,n)}},{key:"attachMap",value:function(t,e){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=e||{},!this.map){n.next=15;break}return n.next=4,new Promise((function(e){var n=setInterval((function(){document.querySelectorAll("#"+t).length>0&&(clearInterval(n),e())}),100)}));case 4:return n.next=6,this.map.setDiv(t);case 6:return n.next=8,new Promise((function(t){setTimeout(t,100)}));case 8:if(n.t0=e,!n.t0){n.next=13;break}return e.mapType=e.mapType||u.e.NORMAL,n.next=13,this.map.setOptions(e);case 13:n.next=19;break;case 15:return n.next=17,this.platform.ready();case 17:return n.next=19,this._loadMap(t,e);case 19:return n.abrupt("return",Promise.resolve(this.map));case 20:case"end":return n.stop()}}),n,this)})))}},{key:"_loadMap",value:function(t,e){var n=this;return u.a.setEnv({API_KEY_FOR_BROWSER_RELEASE:"AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164",API_KEY_FOR_BROWSER_DEBUG:"AIzaSyDSWxDW_twugay-5q2T3aEuER8Lph5d164"}),this.map=u.b.create(t,e),new Promise((function(t){n.map.one(u.c.MAP_READY).then((function(){t()}))}))}},{key:"detachMap",value:function(){this.map&&(this.map.setDiv(),this.map.off(),this.map.setOptions({camera:{target:{lat:0,lng:0},zoom:1,bearing:0,tilt:0,padding:0},gestures:{scroll:!0,tilt:!0,rotate:!0,zoom:!0},controls:{compass:!0,indoorPicker:!0,myLocationButton:!0,myLocation:!0,zoom:!0,mapToolbar:!0},preferences:{zoom:null,building:!0,clickableIcons:!1,restriction:null}}),this.map.clear())}},{key:"orderDetails",value:function(t){console.log("sys:: \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0437\u0430\u043a\u0430\u0437\u0430 ",t),this.router.navigate(["/order",t]),localStorage.removeItem("needOrder"),this.viewCtrl.dismiss()}},{key:"navigate",value:function(t){this.router.navigate(t)}},{key:"showRoute",value:function(t){this.infoUpdated.next({label:"showRouteToOrder",order:t}),this.router.navigate(["map"])}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Pb(i.b),f.Pb(s.a),f.Pb(o.a),f.Pb(d.K),f.Pb(h.g),f.Pb(d.L))},t.\u0275prov=f.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(){var t=o(regeneratorRuntime.mark((function t(e,n,r,i,o){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return a.classList.add(t)})),o&&Object.assign(a,o),n.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),i=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"U/uv":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("sxy2"),i=n("ItpF"),o=n("2c9M"),a=function(t,e){var n,a,s=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(u(),c(o,i)):u()}},c=function(t,e){n=t,a||(a=n);var i=n;Object(r.g)((function(){return i.classList.add("ion-activated")})),e()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;Object(r.g)((function(){return e.classList.remove("ion-activated")})),t&&a!==n&&n.click(),n=void 0}};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return s(t.currentX,t.currentY,o.a)},onMove:function(t){return s(t.currentX,t.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),a=void 0}})}},"X5X/":function(t,n,r){"use strict";r.d(n,"a",(function(){return h}));var i=r("2Vo4"),o=r("lGQG"),s=r("24R0"),u=r("tudd"),l=r("ndxW"),f=r("fXoL"),d=r("xgBC"),h=function(){var t=function(){function t(e,n,r,o,s){var c=this;a(this,t),this.storage=e,this.courier=n,this.auth=r,this.sys=o,this.state$=s,this.orders=new i.a([]),e.ready().then((function(t){c.storage.get("orders").then((function(t){c.ordersMap=c.getOrdersMap(t),null==t&&c.getApiData(),c.orders.next(t),console.log("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438\u0437 \u0441\u0442\u043e\u0440\u0430\u0436\u0430",t),c.getInitialData(),c.orders.subscribe((function(t){console.trace("sys:: \u041f\u0440\u0438\u0448\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u044b \u0432 \u0441\u0442\u0440\u0438\u043c data.orders"),c.saveOrders(t).then((function(){console.log("sys:: \u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d \u0432 \u0441\u0442\u043e\u0440\u043e\u0436: ",t)}))}))}))})),this.state$.g_state.subscribe((function(t){"unLogin"==t&&c.ordersMap.clear()}))}return c(t,[{key:"getInitialData",value:function(){var t=this;this.storage.ready().then((function(){t.storage.keys().then((function(t){return console.log("\u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0441\u0442\u043e\u0440\u0430\u0436\u0435: ",t)})),t.storage.get("orders").then((function(t){console.log("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438\u0437 \u0441\u0442\u043e\u0440\u0430\u0436\u0430",t)})).catch((function(t){console.log(t)}))}))}},{key:"getApiData",value:function(){var t=this;return this.courier.getBalance(Number(this.auth.userId),1).subscribe((function(e){t.sys.getOrders(e.res_more.map((function(t){return t.id.toString()}))).subscribe((function(e){t.saveOrders(e.orders).then((function(){t.storage.get("orders").then((function(e){t.orders.next(e)}))}))}))}))}},{key:"getOrders",value:function(t){var e=this;this.sys.getOrders(t).subscribe((function(t){e.orders.next(t.orders),e.saveOrders(t.orders)}))}},{key:"saveOrders",value:function(t){var n=this,r=this.getOrdersMap(t),i=new Map([].concat(e(this.ordersMap),e(r)));return this.ordersMap.forEach((function(t,e){r.has(e)||(n.ordersMap.delete(e),console.log("sys:: \u0417\u0430\u043a\u0430\u0437 ".concat(e," \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 \u0441\u0442\u043e\u0440\u043e\u0436\u0430")))})),this.storage.set("orders",Array.from(i.values()))}},{key:"getOrdersMap",value:function(t){var e=new Map;return t&&t.forEach((function(t){e.set(Number(t.id),t)})),e}},{key:"rewriteOrders",value:function(t){this.ordersMap=this.getOrdersMap(t),this.orders.next(t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Pb(d.b),f.Pb(s.a),f.Pb(o.a),f.Pb(u.a),f.Pb(l.a))},t.\u0275prov=f.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},sPtc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c}));var r=function(t,e){return null!==e.closest(t)},i=function(t,e){return"string"==typeof t&&t.length>0?Object.assign((i=!0,(r="ion-color-"+t)in(n={"ion-color":!0})?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n),e):e;var n,r,i},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=o(regeneratorRuntime.mark((function t(e,n,r,i){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||s.test(e)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),o.push(e,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}()},selK:function(e,n,r){"use strict";r.d(n,"a",(function(){return d}));var i=r("fXoL"),o=r("sZkV"),s=r("iInd"),u=r("SVse"),l=["myCanvas"];function f(t,e){1&t&&(i.Lb(0,"div",7),i.pc(1,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044c"),i.Kb())}var d=function(){var t=function(){function t(e,n,r,i,o){a(this,t),this.platform=e,this.router=n,this.renderer=r,this.location=i,this.modal=o,this.isClear=!0,this.error_mes=!1,this.currentColour="#000000",this.brushSize=10,this.save_process=!1}return c(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){this.canvasElement=this.canvas.nativeElement,h(this.renderer,this.canvasElement,"width",this.platform.width()+""),h(this.renderer,this.canvasElement,"height",this.platform.height()+"")}},{key:"handleStart",value:function(t){this.lastX=t.touches[0].pageX,this.lastY=t.touches[0].pageY}},{key:"clearCanvas",value:function(){this.isClear=!0,this.canvasElement.getContext("2d").clearRect(0,0,this.canvasElement.width,this.canvasElement.height)}},{key:"handleMove",value:function(t){this.isClear=!1,this.error_mes=!1;var e=this.canvasElement.getContext("2d"),n=t.touches[0].pageX,r=t.touches[0].pageY;e.beginPath(),e.lineJoin="round",e.moveTo(this.lastX,this.lastY),e.lineTo(n,r),e.closePath(),e.strokeStyle=this.currentColour,e.lineWidth=this.brushSize,e.stroke(),this.lastX=n,this.lastY=r}},{key:"saveImage",value:function(){if(this.isClear)return this.error_mes=!0,!1;var t=this.canvasElement.toDataURL();t=t.split(",")[1],localStorage.setItem("drawImg",t),this.back("ok")}},{key:"back",value:function(t){this.modal.dismiss("cancel"==t?void 0:t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Ib(o.K),i.Ib(s.g),i.Ib(i.D),i.Ib(u.h),i.Ib(o.H))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-draw"]],viewQuery:function(t,e){var n;1&t&&i.mc(l,!0),2&t&&i.hc(n=i.Tb())&&(e.canvas=n.first)},decls:15,vars:1,consts:[[3,"touchstart","touchmove"],["myCanvas",""],["class","error",4,"ngIf"],[1,"btns"],[1,"save-btn",3,"click"],[1,"save-btn","clear-btn",3,"click"],[1,"save-btn","back",3,"click"],[1,"error"]],template:function(t,e){1&t&&(i.Lb(0,"ion-header"),i.Lb(1,"ion-toolbar"),i.Lb(2,"ion-title"),i.pc(3,"\u041f\u043e\u0434\u043f\u0438\u0441\u044c"),i.Kb(),i.Kb(),i.Kb(),i.Lb(4,"ion-content"),i.Lb(5,"canvas",0,1),i.Sb("touchstart",(function(t){return e.handleStart(t)}))("touchmove",(function(t){return e.handleMove(t)})),i.Kb(),i.oc(7,f,2,0,"div",2),i.Lb(8,"div",3),i.Lb(9,"button",4),i.Sb("click",(function(){return e.saveImage()})),i.pc(10,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),i.Kb(),i.Lb(11,"button",5),i.Sb("click",(function(){return e.clearCanvas()})),i.pc(12,"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"),i.Kb(),i.Lb(13,"button",6),i.Sb("click",(function(){return e.back("cancel")})),i.pc(14,"\u041d\u0430\u0437\u0430\u0434"),i.Kb(),i.Kb(),i.Kb()),2&t&&(i.yb(7),i.bc("ngIf",e.error_mes))},directives:[o.l,o.E,o.C,o.j,u.l],styles:["canvas[_ngcontent-%COMP%]{display:block;border:1px solid #bbb2b2;height:75%;width:100%}#wrp[_ngcontent-%COMP%]{height:100%;overflow:hidden}.btns[_ngcontent-%COMP%]{position:absolute;margin:0 auto;bottom:10px;left:0;right:0;height:100px;display:flex;justify-content:center;align-items:center;z-index:9999999}.save-btn[_ngcontent-%COMP%]{height:50px;width:300px;background:#474fc8;color:#fff;width:30%;margin:0 4px}.clear-btn[_ngcontent-%COMP%], .save-btn[_ngcontent-%COMP%]{outline:none}.mi-table[_ngcontent-%COMP%]{display:grid;grid-template-rows:40px auto;border:1px solid #e4e4e4}.m-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:120px 180px 180px 120px 100px 100px 100px 100px 150px 150px;min-height:40px}.m-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.scroll-row[_ngcontent-%COMP%]{box-shadow:-2px 0 .5px .5px #e4e4e4}.m-row-h[_ngcontent-%COMP%]{border-bottom:1px solid #e4e4e4}.m-col[_ngcontent-%COMP%]{border-left:1px solid #e4e4e4}.m-col[_ngcontent-%COMP%]:first-child{border-left:none}.ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.error[_ngcontent-%COMP%]{color:red;width:100%;text-align:center}"]}),t}();function h(e,n,r,i){var o=t(function(t){if(":"===t[0]){var e=t.match(/^:([^:]+):(.+)$/);return[e[1],e[2]]}return["",t]}(r),2),a=o[0],s=o[1];null!=i?e.setAttribute(n,s,i,a):e.removeAttribute(n,s,a)}}}])}();