!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("immer"),require("rxjs"),require("rxjs/operators")):"function"==typeof define&&define.amd?define(["immer","rxjs","rxjs/operators"],r):"object"==typeof exports?exports["simple-observable-state"]=r(require("immer"),require("rxjs"),require("rxjs/operators")):e["simple-observable-state"]=r(e.immer,e.rxjs,e["rxjs/operators"])}(window,(function(e,r,t){return(()=>{"use strict";var n={365:(e,r,t)=>{t.r(r),t.d(r,{rxState:()=>d,dispatch:()=>y});var n=t(435),o=t(214),i=t(584),a=t.n(i);var u=new n.Subject,s=u.asObservable().pipe((function(e){return e.pipe((0,o.filter)((function(e){return"function"==typeof e||!!(null==e?void 0:e.type)})))}),(function(e){return e.pipe((0,o.tap)((function(e){"function"==typeof e&&e()})),(0,o.filter)((function(e){return"function"!=typeof e})))}),(0,o.share)()),p={};var f={},c=(0,n.of)({type:"__INIT_STATE__"});function d(e,r,t){if(void 0===r&&(r=function(e,r){return e}),void 0===t&&(t=f),"string"!=typeof e)throw"rxState:create:error: state name must be string";if("function"!=typeof r)throw"rxState:create:error: reducer must be function";if(p[e])return p[e].state$;var i,u=(0,n.concat)(c,s).pipe(function(e,r){if(!e)throw"operators:stateReducer: initial state is required";if(!r||"function"!=typeof r)throw"operators:stateReducer: reducer argument must be a function";return function(t){return t.pipe((0,o.scan)((function(e,t){return a()(r)(e,t)}),e),(0,o.distinctUntilChanged)(),(0,o.shareReplay)(1))}}(t,r),(0,o.shareReplay)(1)),d=((i=u).path=l.bind(i),i);return p[e]={state$:d,reducer:r,initialState:t},d}function l(e){if("string"!=typeof e&&!Array.isArray(e)&&e)throw"state$.path:error: path must be a string or an array of strings";var r=Array.isArray(e)?e:e.split(".");return this.pipe(o.pluck.apply(void 0,r),(0,o.distinctUntilChanged)())}var y=u.next.bind(u)},584:r=>{r.exports=e},435:e=>{e.exports=r},214:e=>{e.exports=t}},o={};function i(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return n[e](r,r.exports,i),r.exports}return i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(365)})()}));