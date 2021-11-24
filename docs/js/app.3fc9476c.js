(function(e){function t(t){for(var n,u,i=t[0],c=t[1],o=t[2],d=0,p=[];d<i.length;d++)u=i[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,o||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],n=!0,i=1;i<l.length;i++){var c=l[i];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=l[0]))}return e}var n={},r={app:0},a=[];function u(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,u),l.l=!0,l.exports}u.m=e,u.c=n,u.d=function(e,t,l){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(u.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(l,n,function(t){return e[t]}.bind(null,n));return l},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue3-number-spinner/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var s=c;a.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"33f1":function(e,t,l){"use strict";l("4c4f")},"4c4f":function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);l("e260"),l("e6cf"),l("cca6"),l("a79d");var n=l("7a23"),r=Object(n["e"])("h2",null,"Vue 3 Number Spinner Example",-1),a=Object(n["e"])("p",null,[Object(n["f"])(" Change the values of the number spinners through mousedrag and arrow keys. Press "),Object(n["e"])("i",null,"Alt"),Object(n["f"])(" for smaller steps, "),Object(n["e"])("i",null,"Alt+Shift"),Object(n["f"])(" for larger steps. Click without dragging to edit. ")],-1),u=Object(n["e"])("hr",null,null,-1),i={class:"row"},c={class:"explanation"},o=Object(n["f"])("Default: no range limits, step = 1"),s=Object(n["e"])("br",null,null,-1),d={class:"right"},p=Object(n["e"])("hr",null,null,-1),f={class:"row"},v={class:"explanation"},b=Object(n["f"])(" Range: 0 - 360, vertical = true (dragging and arrow keys up/down will also change the value), circular = true "),m=Object(n["e"])("br",null,null,-1),g={class:"right"},O=Object(n["e"])("hr",null,null,-1),j={class:"row"},h={class:"explanation"},y=Object(n["f"])(" step = 0.01, decimals = 2, precision = 0.001"),w=Object(n["e"])("br",null,null,-1),V={class:"right"},S=Object(n["e"])("hr",null,null,-1),k={class:"row"},x={class:"explanation"},F=Object(n["f"])(" Individual styling using props."),M=Object(n["e"])("br",null,null,-1),E={class:"right"},N=Object(n["e"])("hr",null,null,-1),C={class:"row"},H={class:"explanation"},T=Object(n["f"])(" Individual styling using custom class."),P=Object(n["e"])("br",null,null,-1),A={class:"right"},D=Object(n["e"])("hr",null,null,-1),U={class:"row"},B={class:"explanation"},X=Object(n["f"])(" Test correct updating of the value if changed from outside."),Y=Object(n["e"])("br",null,null,-1),_=Object(n["e"])("br",null,null,-1),I={class:"right small-margin"},L=Object(n["e"])("hr",null,null,-1),R={class:"row"},z={class:"explanation"},q=Object(n["f"])(" Giving some of the props by options object."),J=Object(n["e"])("br",null,null,-1),$=Object(n["f"])(" {`{ min: -5.5, max: 5.5, step: 1, keyStep: 1, keyStepFast: 2, decimals: 1, speed: 0.04 }`}"),G=Object(n["e"])("br",null,null,-1),K={class:"right"},Q=Object(n["e"])("hr",null,null,-1),W={class:"row"},Z={class:"explanation"},ee=Object(n["f"])(" Using callbacks to format and parse the displayed value as a currency."),te=Object(n["e"])("br",null,null,-1),le={class:"right"},ne=Object(n["e"])("hr",null,null,-1),re={class:"row"},ae={class:"explanation"},ue=Object(n["f"])(" Using callbacks to format and parse the displayed value as time of day."),ie=Object(n["e"])("br",null,null,-1),ce={class:"right"},oe=Object(n["e"])("hr",null,null,-1);function se(e,t,l,se,de,pe){var fe=Object(n["q"])("number-spinner");return Object(n["m"])(),Object(n["d"])("main",null,[r,a,u,Object(n["e"])("div",i,[Object(n["e"])("div",c,[o,s,Object(n["f"])("Current value is "+Object(n["r"])(e.value1),1)]),Object(n["e"])("div",d,[Object(n["g"])(fe,{modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value1=t})},null,8,["modelValue"])])]),p,Object(n["e"])("div",f,[Object(n["e"])("div",v,[b,m,Object(n["f"])(" Current value is "+Object(n["r"])(e.value2),1)]),Object(n["e"])("div",g,[Object(n["g"])(fe,{modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.value2=t}),min:0,max:360,vertical:!0,circular:!0},null,8,["modelValue"])])]),O,Object(n["e"])("div",j,[Object(n["e"])("div",h,[y,w,Object(n["f"])(" Current value is "+Object(n["r"])(e.value3),1)]),Object(n["e"])("div",V,[Object(n["g"])(fe,{modelValue:e.value3,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.value3=t}),min:-5,max:5,step:.01,decimals:2,precision:.001},null,8,["modelValue","step","precision"])])]),S,Object(n["e"])("div",k,[Object(n["e"])("div",x,[F,M,Object(n["f"])(" Current value is "+Object(n["r"])(e.value4),1)]),Object(n["e"])("div",E,[Object(n["g"])(fe,{modelValue:e.value4,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.value4=t}),step:10,mainStyle:"color:#aaa; width:80px; border-radius:20px",focusStyle:"color:#06f",draggingStyle:"border-color:#f00",editingStyle:"color:#00f; background-color:#06f4",fastStyle:"color:#f00",slowStyle:"color:#0c0",cursor:"pointer"},null,8,["modelValue"])])]),N,Object(n["e"])("div",C,[Object(n["e"])("div",H,[T,P,Object(n["f"])(" Current value is "+Object(n["r"])(e.value5),1)]),Object(n["e"])("div",A,[Object(n["g"])(fe,{modelValue:e.value5,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.value5=t}),min:0,max:1,step:.001,decimals:3,class:"number-spinner-custom"},null,8,["modelValue","step"])])]),D,Object(n["e"])("div",U,[Object(n["e"])("div",B,[X,Y,Object(n["f"])(" Current value is "+Object(n["r"])(e.value7),1),_]),Object(n["e"])("div",null,[Object(n["e"])("button",{onClick:t[5]||(t[5]=function(){e.value7--})}," – ")]),Object(n["e"])("div",I,[Object(n["g"])(fe,{modelValue:e.value7,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.value7=t}),min:0,max:12,circular:!0},null,8,["modelValue"])]),Object(n["e"])("div",null,[Object(n["e"])("button",{onClick:t[7]||(t[7]=function(){e.value7++})}," + ")])]),L,Object(n["e"])("div",R,[Object(n["e"])("div",z,[q,J,$,G,Object(n["f"])(" Current value is "+Object(n["r"])(e.value8),1)]),Object(n["e"])("div",K,[Object(n["g"])(fe,{modelValue:e.value8,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.value8=t}),options:e.options},null,8,["modelValue","options"])])]),Q,Object(n["e"])("div",W,[Object(n["e"])("div",Z,[ee,te,Object(n["f"])("Current value is "+Object(n["r"])(e.value9),1)]),Object(n["e"])("div",le,[Object(n["g"])(fe,{modelValue:e.value9,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.value9=t}),format:se.addDollar,parse:se.removeDollar},null,8,["modelValue","format","parse"])])]),ne,Object(n["e"])("div",re,[Object(n["e"])("div",ae,[ue,ie,Object(n["f"])("Current value is "+Object(n["r"])(e.value10),1)]),Object(n["e"])("div",ce,[Object(n["g"])(fe,{modelValue:e.value10,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.value10=t}),min:0,max:1440,keyStep:15,keyStepSlow:1,keyStepFast:60,circular:!0,format:se.formatMinutesToTime,parse:se.parseTimeToMinutes},null,8,["modelValue","format","parse"])])]),oe])}var de=l("5530"),pe=(l("498a"),l("ac1f"),l("5319"),l("4d90"),l("0d03"),l("d3b7"),l("25f0"),l("1276"),l("e25e"),["value"]),fe=["value"];function ve(e,t,l,r,a,u){return Object(n["m"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("input",{ref:"dragElement",type:"text",style:Object(n["j"])(e.style),class:Object(n["i"])({drag:!0,dragging:e.dragging,focus:e.dragFocussed,inactive:e.editing}),value:e.visibleValue,readonly:"",contenteditable:"false",onMousedown:t[0]||(t[0]=Object(n["v"])((function(){return r.dragstartHandler&&r.dragstartHandler.apply(r,arguments)}),["stop"])),onTouchstart:t[1]||(t[1]=Object(n["v"])((function(){return e.touchstartHandler&&e.touchstartHandler.apply(e,arguments)}),["stop","prevent"])),onFocus:t[2]||(t[2]=function(){return r.dragFocusHandler&&r.dragFocusHandler.apply(r,arguments)}),onBlur:t[3]||(t[3]=function(){return r.dragBlurHandler&&r.dragBlurHandler.apply(r,arguments)})},null,46,pe),Object(n["e"])("input",{ref:"editElement",type:"text",style:Object(n["j"])(e.style),class:Object(n["i"])({edit:!0,editing:e.editing,focus:e.editFocussed,inactive:!e.editing}),value:e.visibleValue,onFocus:t[4]||(t[4]=function(){return r.editFocusHandler&&r.editFocusHandler.apply(r,arguments)}),onBlur:t[5]||(t[5]=function(){return r.editBlurHandler&&r.editBlurHandler.apply(r,arguments)}),onInput:t[6]||(t[6]=function(){return r.inputHandler&&r.inputHandler.apply(r,arguments)})},null,46,fe)],64)}var be=l("1da1"),me=(l("c1c3"),l("7e9e"),l("4ade"),l("c0e6"),l("32ec"),l("6991"),l("657c"),l("241c4"),l("f542"),l("6440"),function(){});function ge(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];var r=t[0],a=t[1],u=t[2],i=t[3];if(!r)return me;var c=me,o=Object(n["u"])((function(){return Object(n["t"])(r)}),(function(e){c(),e&&(e.addEventListener(a,u,i),c=function(){e.removeEventListener(a,u,i),c=me})}),{immediate:!0,flush:"post"}),s=function(){o(),c()};return Object(n["k"])(s),s}var Oe={name:"NumberSpinner",props:{modelValue:{type:Number,default:0},min:{type:Number,default:-1e12},max:{type:Number,default:1e12},step:{type:Number,default:1},precision:{type:Number,default:1},speed:{type:Number,default:1},keyStepSlow:{type:Number,default:1},keyStep:{type:Number,default:10},keyStepFast:{type:Number,default:100},decimals:{type:Number,default:0},format:{type:Function,default:void 0},parse:{type:Function,default:void 0},horizontal:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},mainStyle:{type:String},fastStyle:{type:String},slowStyle:{type:String},focusStyle:{type:String},draggingStyle:{type:String},editingStyle:{type:String},class:{type:String},cursor:{type:String},options:{type:Object}},emits:["consoleLog","focus","blur","dragstart","dragend","editstart","editend","update:modelValue"],setup:function(e,t){var l=t.emit,r=Object(n["p"])({preciseValue:void 0,visibleValue:void 0,isTouchDevice:!1,editElement:null,dragElement:null,dragFocussed:!1,editFocussed:!1,focussed:!1,dragging:!1,wasActiveOnClick:void 0,hasMoved:void 0,clickX:void 0,clickY:void 0,stepFactor:1,altPressed:!1,ctrlPressed:!1,shiftPressed:!1,editing:!1,htmlNode:null,htmlNodeOriginalCursor:null,defaultCursor:Object(n["b"])((function(){return e.horizontal?e.vertical?"move":"ew-resize":"ns-resize"})),style:Object(n["b"])((function(){var t,l,n=null!==(t=e.mainStyle)&&void 0!==t?t:"";return n+=r.editing&&e.editingStyle?";"+e.editingStyle:"",n+=r.editing?"":";cursor:"+(null!==(l=e.cursor)&&void 0!==l?l:r.defaultCursor),n}))});Object(n["l"])((function(){r.htmlNode=document.querySelector("html"),r.htmlNodeOriginalCursor=r.htmlNode.style.cursor})),s(e.modelValue);var a=Object(n["s"])(r),u=a.htmlNode,i=a.dragging;function c(t){var l=e.min,n=e.max;if(e.circular){var r=n-l;if(0===r)return l;var a=t<l?Math.ceil((l-t)/r):0;t=(t-l+r*a)%r+l}else t=Math.min(Math.max(t,l),n);return t}function o(t){var l,n=e.min,r=(e.max,e.step),a=e.precision;t=Math.round((parseFloat(t)-n)/a)*a+n;var u=a<1?Math.ceil(-Math.log10(a)):0;return l=r.toString().split(".")[1],l&&(u=Math.max(u,l.length)),l=n.toString().split(".")[1],l&&(u=Math.max(u,l.length)),parseFloat(t.toFixed(u))}function s(t){var n=e.min,a=(e.max,e.step),u=(e.precision,e.format),i=e.decimals;r.preciseValue=parseFloat(t),r.preciseValue=c(r.preciseValue),r.visibleValue=Math.round((r.preciseValue-n)/a)*a+n,r.visibleValue=u?u(r.visibleValue):r.visibleValue.toFixed(i);var s=o(r.preciseValue);l("update:modelValue",parseFloat(s))}function d(){return p.apply(this,arguments)}function p(){return p=Object(be["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["h"])();case 2:document.activeElement==r.dragElement||document.activeElement==r.editElement?r.focussed||(r.focussed=!0,l("focus")):r.focussed&&(r.focussed=!1,l("blur"));case 3:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return v=Object(be["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.editing=!0,e.next=3,Object(n["h"])();case 3:r.editElement.focus(),r.editElement.select(),l("editstart");case 6:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function b(){r.editing&&(r.editing=!1,l("editend"))}function m(t){var l,n=e.step,a=e.speed;r.preciseValue=null!==(l=r.preciseValue)&&void 0!==l?l:parseFloat(r.visibleValue),r.preciseValue+=t*n*a,s(r.preciseValue)}function g(e){var t;r.preciseValue=null!==(t=r.preciseValue)&&void 0!==t?t:parseFloat(r.visibleValue),r.preciseValue+=e,s(r.preciseValue)}function O(t){r.wasActiveOnClick=document.activeElement===r.dragElement,r.dragging=!0,r.dragElement.focus(),r.hasMoved=!1,r.clickX=r.isTouchDevice?t.touches[0].clientX:t.clientX,r.clickY=r.isTouchDevice?t.touches[0].clientY:t.clientY,r.dragging=!0,s(e.modelValue)}function j(t){var n=e.horizontal,a=e.vertical,u=r.isTouchDevice?t.touches[0].clientX:t.clientX,i=r.isTouchDevice?t.touches[0].clientY:t.clientY,c=n?+(u-r.clickX):0,o=a?-(i-r.clickY):0,s=Math.abs(c)>Math.abs(o)?c:o;0==s||r.hasMoved||(r.hasMoved=!0,l("dragstart")),m(s*r.stepFactor),r.clickX=u,r.clickY=i}function h(e){r.dragging&&r.hasMoved&&l("dragend"),r.dragging=!1,r.wasActiveOnClick&&!r.hasMoved&&f()}function y(e){r.dragFocussed=!0,d()}function w(e){r.dragFocussed=!1,d()}function V(e){r.editFocussed=!0,d()}function S(e){r.editFocussed=!1,d(),b()}function k(e){e.target!==r.dragElement&&e.target!==r.editElement||l("consoleLog",e.type),"Enter"==e.key&&e.preventDefault(),"Shift"==e.key&&(r.shiftPressed=!0),"Alt"==e.key&&(r.altPressed=!0)}function x(t){if(t.target!==r.dragElement&&t.target!==r.editElement||l("consoleLog",t.type),"Shift"==t.key&&(r.shiftPressed=!1),"Alt"==t.key&&(r.altPressed=!1),r.dragFocussed&&!r.editing){var n=e.keyStep;r.stepFactor<1&&(n=e.keyStepSlow),r.stepFactor>1&&(n=e.keyStepFast),"ArrowUp"!=t.key&&"ArrowRight"!=t.key||g(n),"ArrowDown"!=t.key&&"ArrowLeft"!=t.key||g(-n),"Enter"==t.key&&f()}else r.editFocussed&&r.editing&&("Enter"!=t.key&&"Escape"!=t.key||b())}function F(e){var t=parseFloat(r.editElement.value);if(!isNaN(t)){r.preciseValue=t,r.preciseValue=c(r.preciseValue);var n=o(r.preciseValue);l("update:modelValue",parseFloat(n))}}Object(n["u"])([u,i],(function(){var t;r.htmlNode&&(r.dragging?r.htmlNode.style.cursor=null!==(t=e.cursor)&&void 0!==t?t:r.defaultCursor:r.htmlNode.style.cursor=r.htmlNodeOriginalCursor)}));var M=function(e){var t=r.dragging?j:void 0;if(void 0!==t)return t(e)},E=function(e){var t=r.dragging?h:S;if(void 0!==t)return t(e)};return ge(window,"keydown",k),ge(window,"keyup",x),ge(window,"mousemove",M),ge(window,"touchmove",M),ge(window,"mouseup",E),ge(window,"touchend",E),Object(de["a"])(Object(de["a"])({},Object(n["s"])(r)),{},{dragFocusHandler:y,dragBlurHandler:w,dragstartHandler:O,editFocusHandler:V,editBlurHandler:S,keydownHandler:k,keyupHandler:x,inputHandler:F})}},je=(l("e9fe"),l("6b0d")),he=l.n(je);const ye=he()(Oe,[["render",ve],["__scopeId","data-v-47b1833a"]]);var we=ye,Ve={name:"App",components:{NumberSpinner:we},setup:function(){var e=Object(n["p"])({value1:100,value2:500,value3:3.28,value4:.5,value5:.5,value6:50,value6input:50,value6change:50,value6editmode:!1,value6lastkey:"",value7:0,value8:-2.5,options:{min:-5.5,max:5.5,step:1,keyStep:1,keyStepFast:2,decimals:1,speed:.04},value9:100,value10:720});function t(e){return"$ "+e}function l(e){return e.replace("$","").trim()}function r(e){var t=Math.floor(e/60);return e%=60,t.toString().padStart(2,"0")+":"+e.toString().padStart(2,"0")}function a(e){var t=e.split(":"),l=parseInt(t[0]);l=Math.min(Math.max(l,0),23);var n=t[1]?parseInt(t[1]):0;return n=Math.min(Math.max(n,0),59),60*l+n}return Object(de["a"])(Object(de["a"])({},Object(n["s"])(e)),{},{addDollar:t,removeDollar:l,formatMinutesToTime:r,parseTimeToMinutes:a})}};l("33f1");const Se=he()(Ve,[["render",se]]);var ke=Se;Object(n["c"])(ke).mount("#app")},cdd1:function(e,t,l){},e9fe:function(e,t,l){"use strict";l("cdd1")}});
//# sourceMappingURL=app.3fc9476c.js.map