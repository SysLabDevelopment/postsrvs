(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a}));const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{r.selection()},i=()=>{r.selectionStart()},o=()=>{r.selectionChanged()},a=()=>{r.selectionEnd()},c=t=>{r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",s=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,s=t*r-t+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));const r=async(t,e,n,r,s)=>{if(t)return t.attachViewToDom(e,n,s,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>i.classList.add(t)),s&&Object.assign(i,s),e.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"U/uv":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("sxy2"),s=n("ItpF"),i=n("2c9M");const o=(t,e)=>{let n,o;const a=(t,r,s)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,r);i&&e(i)?i!==n&&(l(),c(i,s)):l()},c=(t,e)=>{n=t,o||(o=n);const s=n;Object(r.g)(()=>s.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(r.g)(()=>e.classList.remove("ion-activated")),t&&o!==n&&n.click(),n=void 0};return Object(s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,i.a),onMove:t=>a(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),Object(i.e)(),o=void 0}})}},"X5X/":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("2Vo4"),s=n("lGQG"),i=n("24R0"),o=n("tudd"),a=n("ndxW"),c=n("8Y7J"),l=n("xgBC");let u=(()=>{class t{constructor(t,e,n,s,i){this.storage=t,this.courier=e,this.auth=n,this.sys=s,this.state$=i,this.orders=new r.a([]),t.ready().then(t=>{this.storage.get("orders").then(t=>{this.ordersMap=this.getOrdersMap(t),null==t&&this.getApiData(),this.orders.next(t),console.log("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438\u0437 \u0441\u0442\u043e\u0440\u0430\u0436\u0430",t),this.getInitialData(),this.orders.subscribe(t=>{console.trace("sys:: \u041f\u0440\u0438\u0448\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u044b \u0432 \u0441\u0442\u0440\u0438\u043c data.orders"),this.saveOrders(t).then(()=>{console.log("sys:: \u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d \u0432 \u0441\u0442\u043e\u0440\u043e\u0436: ",t)})})})}),this.state$.g_state.subscribe(t=>{"unLogin"==t&&this.ordersMap.clear()})}getInitialData(){this.storage.ready().then(()=>{this.storage.keys().then(t=>console.log("\u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0441\u0442\u043e\u0440\u0430\u0436\u0435: ",t)),this.storage.get("orders").then(t=>{console.log("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438\u0437 \u0441\u0442\u043e\u0440\u0430\u0436\u0430",t)}).catch(t=>{console.log(t)})})}getApiData(){return this.courier.getBalance(Number(this.auth.userId),1).subscribe(t=>{this.sys.getOrders(t.res_more.map(t=>t.id.toString())).subscribe(t=>{this.saveOrders(t.orders).then(()=>{this.storage.get("orders").then(t=>{this.orders.next(t)})})})})}getOrders(t){this.sys.getOrders(t).subscribe(t=>{this.orders.next(t.orders),this.saveOrders(t.orders)})}saveOrders(t){let e=this.getOrdersMap(t),n=new Map([...this.ordersMap,...e]);return this.ordersMap.forEach((t,n)=>{e.has(n)||(this.ordersMap.delete(n),console.log(`sys:: \u0417\u0430\u043a\u0430\u0437 ${n} \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 \u0441\u0442\u043e\u0440\u043e\u0436\u0430`))}),this.storage.set("orders",Array.from(n.values()))}getOrdersMap(t){let e=new Map;return t&&t.forEach(t=>{e.set(Number(t.id),t)}),e}rewriteOrders(t){this.ordersMap=this.getOrdersMap(t),this.orders.next(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(l.b),c.Pb(i.a),c.Pb(s.a),c.Pb(o.a),c.Pb(a.a))},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},sPtc:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));const r=(t,e)=>null!==e.closest(t),s=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,n,r)}return!1}},selK:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("8Y7J"),s=n("sZkV"),i=n("iInd"),o=n("SVse");const a=["myCanvas"];function c(t,e){1&t&&(r.Lb(0,"div",7),r.pc(1,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044c"),r.Kb())}let l=(()=>{class t{constructor(t,e,n,r,s){this.platform=t,this.router=e,this.renderer=n,this.location=r,this.modal=s,this.isClear=!0,this.error_mes=!1,this.currentColour="#000000",this.brushSize=10,this.save_process=!1}ngOnInit(){}ngAfterViewInit(){this.canvasElement=this.canvas.nativeElement,u(this.renderer,this.canvasElement,"width",this.platform.width()+""),u(this.renderer,this.canvasElement,"height",this.platform.height()+"")}handleStart(t){this.lastX=t.touches[0].pageX,this.lastY=t.touches[0].pageY}clearCanvas(){this.isClear=!0,this.canvasElement.getContext("2d").clearRect(0,0,this.canvasElement.width,this.canvasElement.height)}handleMove(t){this.isClear=!1,this.error_mes=!1;let e=this.canvasElement.getContext("2d"),n=t.touches[0].pageX,r=t.touches[0].pageY;e.beginPath(),e.lineJoin="round",e.moveTo(this.lastX,this.lastY),e.lineTo(n,r),e.closePath(),e.strokeStyle=this.currentColour,e.lineWidth=this.brushSize,e.stroke(),this.lastX=n,this.lastY=r}saveImage(){if(this.isClear)return this.error_mes=!0,!1;var t=this.canvasElement.toDataURL();t=t.split(",")[1],localStorage.setItem("drawImg",t),this.back("ok")}back(t){this.modal.dismiss("cancel"==t?void 0:t)}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(s.I),r.Ib(i.g),r.Ib(r.D),r.Ib(o.h),r.Ib(s.G))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-draw"]],viewQuery:function(t,e){var n;1&t&&r.mc(a,!0),2&t&&r.hc(n=r.Tb())&&(e.canvas=n.first)},decls:15,vars:1,consts:[[3,"touchstart","touchmove"],["myCanvas",""],["class","error",4,"ngIf"],[1,"btns"],[1,"save-btn",3,"click"],[1,"save-btn","clear-btn",3,"click"],[1,"save-btn","back",3,"click"],[1,"error"]],template:function(t,e){1&t&&(r.Lb(0,"ion-header"),r.Lb(1,"ion-toolbar"),r.Lb(2,"ion-title"),r.pc(3,"\u041f\u043e\u0434\u043f\u0438\u0441\u044c"),r.Kb(),r.Kb(),r.Kb(),r.Lb(4,"ion-content"),r.Lb(5,"canvas",0,1),r.Sb("touchstart",(function(t){return e.handleStart(t)}))("touchmove",(function(t){return e.handleMove(t)})),r.Kb(),r.oc(7,c,2,0,"div",2),r.Lb(8,"div",3),r.Lb(9,"button",4),r.Sb("click",(function(){return e.saveImage()})),r.pc(10,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),r.Kb(),r.Lb(11,"button",5),r.Sb("click",(function(){return e.clearCanvas()})),r.pc(12,"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"),r.Kb(),r.Lb(13,"button",6),r.Sb("click",(function(){return e.back("cancel")})),r.pc(14,"\u041d\u0430\u0437\u0430\u0434"),r.Kb(),r.Kb(),r.Kb()),2&t&&(r.yb(7),r.bc("ngIf",e.error_mes))},directives:[s.k,s.D,s.B,s.i,o.l],styles:["canvas[_ngcontent-%COMP%]{display:block;border:1px solid #bbb2b2;height:75%;width:100%}#wrp[_ngcontent-%COMP%]{height:100%;overflow:hidden}.btns[_ngcontent-%COMP%]{position:absolute;margin:0 auto;bottom:10px;left:0;right:0;height:100px;display:flex;justify-content:center;align-items:center;z-index:9999999}.save-btn[_ngcontent-%COMP%]{height:50px;width:300px;background:#474fc8;color:#fff;width:30%;margin:0 4px}.clear-btn[_ngcontent-%COMP%], .save-btn[_ngcontent-%COMP%]{outline:none}.mi-table[_ngcontent-%COMP%]{display:grid;grid-template-rows:40px auto;border:1px solid #e4e4e4}.m-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:120px 180px 180px 120px 100px 100px 100px 100px 150px 150px;min-height:40px}.m-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.scroll-row[_ngcontent-%COMP%]{box-shadow:-2px 0 .5px .5px #e4e4e4}.m-row-h[_ngcontent-%COMP%]{border-bottom:1px solid #e4e4e4}.m-col[_ngcontent-%COMP%]{border-left:1px solid #e4e4e4}.m-col[_ngcontent-%COMP%]:first-child{border-left:none}.ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.error[_ngcontent-%COMP%]{color:red;width:100%;text-align:center}"]}),t})();function u(t,e,n,r){const[s,i]=function(t){if(":"===t[0]){const e=t.match(/^:([^:]+):(.+)$/);return[e[1],e[2]]}return["",t]}(n);null!=r?t.setAttribute(e,i,r,s):t.removeAttribute(e,i,s)}}}]);