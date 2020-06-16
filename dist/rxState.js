/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rx-state"] = factory();
	else
		root["rx-state"] = factory();
})(global, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/*! namespace exports */
/*! export Immer [provided] [unused] [could be renamed] */
/*! export applyPatches [provided] [unused] [could be renamed] */
/*! export castDraft [provided] [unused] [could be renamed] */
/*! export castImmutable [provided] [unused] [could be renamed] */
/*! export createDraft [provided] [unused] [could be renamed] */
/*! export default [provided] [used] [could be renamed] */
/*! export enableAllPlugins [provided] [unused] [could be renamed] */
/*! export enableES5 [provided] [unused] [could be renamed] */
/*! export enableMapSet [provided] [unused] [could be renamed] */
/*! export enablePatches [provided] [unused] [could be renamed] */
/*! export finishDraft [provided] [unused] [could be renamed] */
/*! export immerable [provided] [unused] [could be renamed] */
/*! export isDraft [provided] [unused] [could be renamed] */
/*! export isDraftable [provided] [unused] [could be renamed] */
/*! export nothing [provided] [unused] [could be renamed] */
/*! export original [provided] [unused] [could be renamed] */
/*! export produce [provided] [unused] [could be renamed] */
/*! export produceWithPatches [provided] [unused] [could be renamed] */
/*! export setAutoFreeze [provided] [unused] [could be renamed] */
/*! export setUseProxies [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */\nfunction n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(true){var i=L[n],o=i?\"function\"==typeof i?i.apply(null,r):i:\"unknown error nr: \"+n;throw Error(\"[Immer] \"+o)}throw Error(\"[Immer] minified error nr: \"+n+(r.length?\" \"+r.join(\",\"):\"\")+\". Find the full error at: https://bit.ly/3cXEKWf\")}function t(n){return!!n&&!!n[G]}function r(n){return!!n&&(function(n){if(!n||\"object\"!=typeof n)return!1;var t=Object.getPrototypeOf(n);return!t||t===Object.prototype}(n)||Array.isArray(n)||!!n[B]||!!n.constructor[B]||c(n)||s(n))}function e(n){if(n&&n[G])return n[G].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Q)(n).forEach((function(r){return t(r,n[r],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[G];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:c(n)?2:s(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function c(n){return U&&n instanceof Map}function s(n){return W&&n instanceof Set}function v(n){return n.o||n.t}function p(t,r){if(void 0===r&&(r=!1),Array.isArray(t))return t.slice();var e=Object.create(Object.getPrototypeOf(t));return i(t,(function(i){if(i!==G){var o=Object.getOwnPropertyDescriptor(t,i),u=o.value;o.get&&(r||n(1),u=o.get.call(t)),o.enumerable?e[i]=u:Object.defineProperty(e,i,{value:u,writable:!0,configurable:!0})}})),e}function d(n,e){t(n)||h(n)||!r(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=l),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0))}function l(){n(2)}function h(n){return null==n||\"object\"!=typeof n||Object.isFrozen(n)}function y(t){var r=V[t];return r||n( true?18:undefined,t),r}function b(n,t){V[n]=t}function m(){return false||K||n(0),K}function _(n,t){t&&(y(\"Patches\"),n.u=[],n.s=[],n.v=t)}function j(n){O(n),n.p.forEach(w),n.p=null}function O(n){n===K&&(K=n.l)}function g(n){return K={p:[],l:K,h:n,m:!0,_:0}}function w(n){var t=n[G];0===t.i||1===t.i?t.j():t.O=!0}function S(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||y(\"ES5\").S(e,t,o),o?(i[G].P&&(j(e),n(4)),r(t)&&(t=P(e,t),e.l||A(e,t)),e.u&&y(\"Patches\").M(i[G],t,e.u,e.s)):t=P(e,i,[]),j(e),e.u&&e.v(e.u,e.s),t!==q?t:void 0}function P(n,t,r){if(h(t))return t;var e=t[G];if(!e)return i(t,(function(i,o){return M(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return A(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=p(e.k,!0):e.o;i(o,(function(t,i){return M(n,e,o,t,i,r)})),A(n,o,!1),r&&n.u&&y(\"Patches\").R(e,r,n.u,n.s)}return e.o}function M(e,i,c,s,v,p){if( true&&v===c&&n(5),t(v)){var d=P(e,v,p&&i&&3!==i.i&&!u(i.D,s)?p.concat(s):void 0);if(h=s,y=d,2===(b=o(l=c))?l.set(h,y):3===b?(l.delete(h),l.add(y)):l[h]=y,!t(d))return;e.m=!1}var l,h,y,b;if((!i||!f(v,a(i.t,s)))&&r(v)){if(!e.h.N&&e._<1)return;P(e,v),i&&i.A.l||A(e,v)}}function A(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r)}function x(n,t){var r=n[G],e=Reflect.getOwnPropertyDescriptor(r?v(r):n,t);return e&&e.value}function z(n){if(!n.P){if(n.P=!0,0===n.i||1===n.i){var t=n.o=p(n.t);i(n.p,(function(n,r){t[n]=r})),n.p=void 0}n.l&&z(n.l)}}function I(n){n.o||(n.o=p(n.t))}function E(n,t,r){var e=c(t)?y(\"MapSet\").T(t,r):s(t)?y(\"MapSet\").F(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:m(),P:!1,I:!1,D:{},l:t,t:n,k:null,p:{},o:null,j:null,C:!1},i=e,o=Y;r&&(i=[e],o=Z);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):y(\"ES5\").J(t,r);return(r?r.A:m()).p.push(e),e}function k(n,t){n.g?z(t):y(\"ES5\").K(t)}function R(){function e(n,t){var r=n[G];if(r&&!r.$){r.$=!0;var e=n[t];return r.$=!1,e}return n[t]}function o(n){n.P||(n.P=!0,n.l&&o(n.l))}function a(n){n.o||(n.o=c(n.t))}function c(n){var t=n&&n[G];if(t){t.$=!0;var r=p(t.k,!0);return t.$=!1,r}return p(n)}function s(n){for(var t=n.length-1;t>=0;t--){var r=n[t][G];if(!r.P)switch(r.i){case 5:l(r)&&o(r);break;case 4:d(r)&&o(r)}}}function d(n){for(var t=n.t,r=n.k,e=Object.keys(r),i=e.length-1;i>=0;i--){var o=e[i],a=t[o];if(void 0===a&&!u(t,o))return!0;var c=r[o],s=c&&c[G];if(s?s.t!==a:!f(c,a))return!0}return e.length!==Object.keys(t).length}function l(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function h(t){t.O&&n(3,JSON.stringify(v(t)))}var y={};b(\"ES5\",{J:function(n,t){var u=Array.isArray(n),s=c(n);i(s,(function(t){!function(n,t,i){var u=y[t];u?u.enumerable=i:y[t]=u={enumerable:i,get:function(){return function(n,t){h(n);var i=e(v(n),t);return n.$?i:i===e(n.t,t)&&r(i)?(a(n),n.o[t]=E(n.A.h,i,n)):i}(this[G],t)},set:function(n){!function(n,t,r){if(h(n),n.D[t]=!0,!n.P){if(f(r,e(v(n),t)))return;o(n),a(n)}n.o[t]=r}(this[G],t,n)}},Object.defineProperty(n,t,u)}(s,t,u||function(n,t){var r=Object.getOwnPropertyDescriptor(n,t);return!(!r||!r.enumerable)}(n,t))}));var p={i:u?5:4,A:t?t.A:m(),P:!1,$:!1,I:!1,D:{},l:t,t:n,k:s,o:null,O:!1,C:!1};return Object.defineProperty(s,G,{value:p,writable:!0}),s},K:o,S:function(n,r,e){n.p.forEach((function(n){n[G].$=!0})),e?t(r)&&r[G].A===n&&s(n.p):(n.u&&function n(t){if(t&&\"object\"==typeof t){var r=t[G];if(r){var e=r.t,a=r.k,f=r.D,c=r.i;if(4===c)i(a,(function(t){t!==G&&(void 0!==e[t]||u(e,t)?f[t]||n(a[t]):(f[t]=!0,o(r)))})),i(e,(function(n){void 0!==a[n]||u(a,n)||(f[n]=!1,o(r))}));else if(5===c){if(l(r)&&(o(r),f.length=!0),a.length<e.length)for(var s=a.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<a.length;v++)f[v]=!0;for(var p=Math.min(a.length,e.length),d=0;d<p;d++)void 0===f[d]&&n(a[d])}}}}(n.p[0]),s(n.p))}})}function D(){function r(n){if(!n||\"object\"!=typeof n)return n;if(Array.isArray(n))return n.map(r);if(c(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],r(n[1])]})));if(s(n))return new Set(Array.from(n).map(r));var t=Object.create(Object.getPrototypeOf(n));for(var e in n)t[e]=r(n[e]);return t}function e(n){return t(n)?r(n):n}var f=\"add\";b(\"Patches\",{U:function(t,e){return e.forEach((function(e){for(var i=e.path,u=e.op,c=t,s=0;s<i.length-1;s++)\"object\"!=typeof(c=a(c,i[s]))&&n(15,i.join(\"/\"));var v=o(c),p=r(e.value),d=i[i.length-1];switch(u){case\"replace\":switch(v){case 2:return c.set(d,p);case 3:n(16);default:return c[d]=p}case f:switch(v){case 1:return c.splice(d,0,p);case 2:return c.set(d,p);case 3:return c.add(p);default:return c[d]=p}case\"remove\":switch(v){case 1:return c.splice(d,1);case 2:return c.delete(d);case 3:return c.delete(e.value);default:return delete c[d]}default:n(17,u)}})),t},R:function(n,t,r,o){switch(n.i){case 0:case 4:case 2:return function(n,t,r,o){var c=n.t,s=n.o;i(n.D,(function(n,i){var v=a(c,n),p=a(s,n),d=i?u(c,n)?\"replace\":f:\"remove\";if(v!==p||\"replace\"!==d){var l=t.concat(n);r.push(\"remove\"===d?{op:d,path:l}:{op:d,path:l,value:p}),o.push(d===f?{op:\"remove\",path:l}:\"remove\"===d?{op:f,path:l,value:e(v)}:{op:\"replace\",path:l,value:e(v)})}}))}(n,t,r,o);case 5:case 1:return function(n,t,r,i){var o=n.t,u=n.D,a=n.o;if(a.length<o.length){var c=[a,o];o=c[0],a=c[1];var s=[i,r];r=s[0],i=s[1]}for(var v=a.length-o.length,p=0;o[p]===a[p]&&p<o.length;)++p;for(var d=o.length;d>p&&o[d-1]===a[d+v-1];)--d;for(var l=p;l<d;++l)if(u[l]&&a[l]!==o[l]){var h=t.concat([l]);r.push({op:\"replace\",path:h,value:e(a[l])}),i.push({op:\"replace\",path:h,value:e(o[l])})}for(var y=r.length,b=d+v-1;b>=d;--b){var m=t.concat([b]);r[y+b-d]={op:f,path:m,value:e(a[b])},i.push({op:\"remove\",path:m})}}(n,t,r,o);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:\"remove\",path:i,value:n}),e.unshift({op:f,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:f,path:o,value:n}),e.unshift({op:\"remove\",path:o,value:n})}u++}))}(n,t,r,o)}},M:function(n,t,r,e){r.push({op:\"replace\",path:[],value:t}),e.push({op:\"replace\",path:[],value:n.t})}})}function N(){function t(n,t){function r(){this.constructor=n}u(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function i(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=E(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function o(t){t.O&&n(3,JSON.stringify(v(t)))}var u=function(n,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},a=function(){function n(n,t){return this[G]={i:2,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}t(n,Map);var i=n.prototype;return Object.defineProperty(i,\"size\",{get:function(){return v(this[G]).size}}),i.has=function(n){return v(this[G]).has(n)},i.set=function(n,t){var r=this[G];return o(r),v(r).get(n)!==t&&(e(r),k(r.A.h,r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},i.delete=function(n){if(!this.has(n))return!1;var t=this[G];return o(t),e(t),k(t.A.h,t),t.D.set(n,!1),t.o.delete(n),!0},i.clear=function(){var n=this[G];return o(n),e(n),k(n.A.h,n),n.D=new Map,n.o.clear()},i.forEach=function(n,t){var r=this;v(this[G]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},i.get=function(n){var t=this[G];o(t);var i=v(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var u=E(t.A.h,i,t);return e(t),t.o.set(n,u),u},i.keys=function(){return v(this[G]).keys()},i.values=function(){var n,t=this,r=this.keys();return(n={})[H]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},i.entries=function(){var n,t=this,r=this.keys();return(n={})[H]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},i[H]=function(){return this.entries()},n}(),f=function(){function n(n,t){return this[G]={i:3,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,\"size\",{get:function(){return v(this[G]).size}}),r.has=function(n){var t=this[G];return o(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[G];return o(t),this.has(n)||(i(t),k(t.A.h,t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[G];return o(t),i(t),k(t.A.h,t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[G];return o(n),i(n),k(n.A.h,n),n.o.clear()},r.values=function(){var n=this[G];return o(n),i(n),n.o.values()},r.entries=function(){var n=this[G];return o(n),i(n),n.o.entries()},r.keys=function(){return this.values()},r[H]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();b(\"MapSet\",{T:function(n,t){return new a(n,t)},F:function(n,t){return new f(n,t)}})}function T(){R(),N(),D()}function F(n){return n}function C(n){return n}var J,K,$=\"undefined\"!=typeof Symbol&&\"symbol\"==typeof Symbol(\"x\"),U=\"undefined\"!=typeof Map,W=\"undefined\"!=typeof Set,X=\"undefined\"!=typeof Proxy&&void 0!==Proxy.revocable&&\"undefined\"!=typeof Reflect,q=$?Symbol(\"immer-nothing\"):((J={})[\"immer-nothing\"]=!0,J),B=$?Symbol(\"immer-draftable\"):\"__$immer_draftable\",G=$?Symbol(\"immer-state\"):\"__$immer_state\",H=\"undefined\"!=typeof Symbol&&Symbol.iterator||\"@@iterator\",L={0:\"Illegal state\",1:\"Immer drafts cannot have computed properties\",2:\"This object has been frozen and should not be mutated\",3:function(n){return\"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? \"+n},4:\"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.\",5:\"Immer forbids circular references\",6:\"The first or second argument to `produce` must be a function\",7:\"The third argument to `produce` must be a function or undefined\",8:\"First argument to `createDraft` must be a plain object, an array, or an immerable object\",9:\"First argument to `finishDraft` must be a draft returned by `createDraft`\",10:\"The given draft is already finalized\",11:\"Object.defineProperty() cannot be used on an Immer draft\",12:\"Object.setPrototypeOf() cannot be used on an Immer draft\",13:\"Immer only supports deleting array indices\",14:\"Immer only supports setting array indices and the 'length' property\",15:function(n){return\"Cannot apply patch, path doesn't resolve: \"+n},16:'Sets cannot have \"replace\" patches.',17:function(n){return\"Unsupported patch operation: \"+n},18:function(n){return\"The plugin for '\"+n+\"' has not been loaded into Immer. To enable the plugin, import and call `enable\"+n+\"()` when initializing your application.\"},19:function(n){return\"plugin not loaded: \"+n},20:\"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available\"},Q=\"undefined\"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,V={},Y={get:function(n,t){if(t===G)return n;var e=n.p;if(!n.P&&u(e,t))return e[t];var i=v(n)[t];if(n.I||!r(i))return i;if(n.P){if(i!==x(n.t,t))return i;e=n.o}return e[t]=E(n.A.h,i,n)},has:function(n,t){return t in v(n)},ownKeys:function(n){return Reflect.ownKeys(v(n))},set:function(n,t,r){if(!n.P){var e=x(n.t,t);if(r?f(e,r)||r===n.p[t]:f(e,r)&&t in n.t)return!0;I(n),z(n)}return n.D[t]=!0,n.o[t]=r,!0},deleteProperty:function(n,t){return void 0!==x(n.t,t)||t in n.t?(n.D[t]=!1,I(n),z(n)):n.D[t]&&delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=v(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e&&(e.writable=!0,e.configurable=1!==n.i||\"length\"!==t),e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},Z={};i(Y,(function(n,t){Z[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Z.deleteProperty=function(t,r){return true&&isNaN(parseInt(r))&&n(13),Y.deleteProperty.call(this,t[0],r)},Z.set=function(t,r,e){return true&&\"length\"!==r&&isNaN(parseInt(r))&&n(14),Y.set.call(this,t[0],r,e,t[0])};var nn=function(){function e(n){this.g=X,this.N=\"production\"!==\"development\",\"boolean\"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),\"boolean\"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(t,e,i){if(\"function\"==typeof t&&\"function\"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return(r=e).call.apply(r,[t,n].concat(i))}))}}var a;if(\"function\"!=typeof e&&n(6),void 0!==i&&\"function\"!=typeof i&&n(7),r(t)){var f=g(this),c=E(this,t,void 0),s=!0;try{a=e(c),s=!1}finally{s?j(f):O(f)}return\"undefined\"!=typeof Promise&&a instanceof Promise?a.then((function(n){return _(f,i),S(n,f)}),(function(n){throw j(f),n})):(_(f,i),S(a,f))}if((a=e(t))!==q)return void 0===a&&(a=t),this.N&&d(a,!0),a},i.produceWithPatches=function(n,t){var r,e,i=this;return\"function\"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t})),r,e]},i.createDraft=function(t){r(t)||n(8);var e=g(this),i=E(this,t,void 0);return i[G].C=!0,O(e),i},i.finishDraft=function(t,r){var e=t&&t[G]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return _(i,r),S(void 0,i)},i.setAutoFreeze=function(n){this.N=n},i.setUseProxies=function(t){X||n(20),this.g=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&\"replace\"===i.op){n=i.value;break}}var o=y(\"Patches\").U;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),tn=new nn,rn=tn.produce,en=tn.produceWithPatches.bind(tn),on=tn.setAutoFreeze.bind(tn),un=tn.setUseProxies.bind(tn),an=tn.applyPatches.bind(tn),fn=tn.createDraft.bind(tn),cn=tn.finishDraft.bind(tn);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rn);\n//# sourceMappingURL=immer.esm.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/immer/dist/immer.esm.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/InnerSubscriber.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export InnerSubscriber [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InnerSubscriber\": () => /* binding */ InnerSubscriber\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */\n\n\nvar InnerSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(InnerSubscriber, _super);\n    function InnerSubscriber(parent, outerValue, outerIndex) {\n        var _this = _super.call(this) || this;\n        _this.parent = parent;\n        _this.outerValue = outerValue;\n        _this.outerIndex = outerIndex;\n        _this.index = 0;\n        return _this;\n    }\n    InnerSubscriber.prototype._next = function (value) {\n        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);\n    };\n    InnerSubscriber.prototype._error = function (error) {\n        this.parent.notifyError(error, this);\n        this.unsubscribe();\n    };\n    InnerSubscriber.prototype._complete = function () {\n        this.parent.notifyComplete(this);\n        this.unsubscribe();\n    };\n    return InnerSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));\n\n//# sourceMappingURL=InnerSubscriber.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/InnerSubscriber.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Notification.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Notification.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export Notification [provided] [used] [could be renamed] */
/*! export NotificationKind [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Notification\": () => /* binding */ Notification\n/* harmony export */ });\n/* unused harmony export NotificationKind */\n/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/empty */ \"./node_modules/rxjs/_esm5/internal/observable/empty.js\");\n/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/of */ \"./node_modules/rxjs/_esm5/internal/observable/of.js\");\n/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/throwError */ \"./node_modules/rxjs/_esm5/internal/observable/throwError.js\");\n/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */\n\n\n\nvar NotificationKind;\n/*@__PURE__*/ (function (NotificationKind) {\n    NotificationKind[\"NEXT\"] = \"N\";\n    NotificationKind[\"ERROR\"] = \"E\";\n    NotificationKind[\"COMPLETE\"] = \"C\";\n})(NotificationKind || (NotificationKind = {}));\nvar Notification = /*@__PURE__*/ (function () {\n    function Notification(kind, value, error) {\n        this.kind = kind;\n        this.value = value;\n        this.error = error;\n        this.hasValue = kind === 'N';\n    }\n    Notification.prototype.observe = function (observer) {\n        switch (this.kind) {\n            case 'N':\n                return observer.next && observer.next(this.value);\n            case 'E':\n                return observer.error && observer.error(this.error);\n            case 'C':\n                return observer.complete && observer.complete();\n        }\n    };\n    Notification.prototype.do = function (next, error, complete) {\n        var kind = this.kind;\n        switch (kind) {\n            case 'N':\n                return next && next(this.value);\n            case 'E':\n                return error && error(this.error);\n            case 'C':\n                return complete && complete();\n        }\n    };\n    Notification.prototype.accept = function (nextOrObserver, error, complete) {\n        if (nextOrObserver && typeof nextOrObserver.next === 'function') {\n            return this.observe(nextOrObserver);\n        }\n        else {\n            return this.do(nextOrObserver, error, complete);\n        }\n    };\n    Notification.prototype.toObservable = function () {\n        var kind = this.kind;\n        switch (kind) {\n            case 'N':\n                return (0,_observable_of__WEBPACK_IMPORTED_MODULE_0__.of)(this.value);\n            case 'E':\n                return (0,_observable_throwError__WEBPACK_IMPORTED_MODULE_1__.throwError)(this.error);\n            case 'C':\n                return (0,_observable_empty__WEBPACK_IMPORTED_MODULE_2__.empty)();\n        }\n        throw new Error('unexpected notification kind value');\n    };\n    Notification.createNext = function (value) {\n        if (typeof value !== 'undefined') {\n            return new Notification('N', value);\n        }\n        return Notification.undefinedValueNotification;\n    };\n    Notification.createError = function (err) {\n        return new Notification('E', undefined, err);\n    };\n    Notification.createComplete = function () {\n        return Notification.completeNotification;\n    };\n    Notification.completeNotification = new Notification('C');\n    Notification.undefinedValueNotification = new Notification('N', undefined);\n    return Notification;\n}());\n\n//# sourceMappingURL=Notification.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/Notification.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observable.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observable.js ***!
  \********************************************************/
/*! namespace exports */
/*! export Observable [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => /* binding */ Observable\n/* harmony export */ });\n/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/canReportError */ \"./node_modules/rxjs/_esm5/internal/util/canReportError.js\");\n/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/toSubscriber */ \"./node_modules/rxjs/_esm5/internal/util/toSubscriber.js\");\n/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/observable */ \"./node_modules/rxjs/_esm5/internal/symbol/observable.js\");\n/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/pipe */ \"./node_modules/rxjs/_esm5/internal/util/pipe.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./node_modules/rxjs/_esm5/internal/config.js\");\n/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */\n\n\n\n\n\nvar Observable = /*@__PURE__*/ (function () {\n    function Observable(subscribe) {\n        this._isScalar = false;\n        if (subscribe) {\n            this._subscribe = subscribe;\n        }\n    }\n    Observable.prototype.lift = function (operator) {\n        var observable = new Observable();\n        observable.source = this;\n        observable.operator = operator;\n        return observable;\n    };\n    Observable.prototype.subscribe = function (observerOrNext, error, complete) {\n        var operator = this.operator;\n        var sink = (0,_util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__.toSubscriber)(observerOrNext, error, complete);\n        if (operator) {\n            sink.add(operator.call(sink, this.source));\n        }\n        else {\n            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?\n                this._subscribe(sink) :\n                this._trySubscribe(sink));\n        }\n        if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {\n            if (sink.syncErrorThrowable) {\n                sink.syncErrorThrowable = false;\n                if (sink.syncErrorThrown) {\n                    throw sink.syncErrorValue;\n                }\n            }\n        }\n        return sink;\n    };\n    Observable.prototype._trySubscribe = function (sink) {\n        try {\n            return this._subscribe(sink);\n        }\n        catch (err) {\n            if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {\n                sink.syncErrorThrown = true;\n                sink.syncErrorValue = err;\n            }\n            if ((0,_util_canReportError__WEBPACK_IMPORTED_MODULE_2__.canReportError)(sink)) {\n                sink.error(err);\n            }\n            else {\n                console.warn(err);\n            }\n        }\n    };\n    Observable.prototype.forEach = function (next, promiseCtor) {\n        var _this = this;\n        promiseCtor = getPromiseCtor(promiseCtor);\n        return new promiseCtor(function (resolve, reject) {\n            var subscription;\n            subscription = _this.subscribe(function (value) {\n                try {\n                    next(value);\n                }\n                catch (err) {\n                    reject(err);\n                    if (subscription) {\n                        subscription.unsubscribe();\n                    }\n                }\n            }, reject, resolve);\n        });\n    };\n    Observable.prototype._subscribe = function (subscriber) {\n        var source = this.source;\n        return source && source.subscribe(subscriber);\n    };\n    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_3__.observable] = function () {\n        return this;\n    };\n    Observable.prototype.pipe = function () {\n        var operations = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            operations[_i] = arguments[_i];\n        }\n        if (operations.length === 0) {\n            return this;\n        }\n        return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_4__.pipeFromArray)(operations)(this);\n    };\n    Observable.prototype.toPromise = function (promiseCtor) {\n        var _this = this;\n        promiseCtor = getPromiseCtor(promiseCtor);\n        return new promiseCtor(function (resolve, reject) {\n            var value;\n            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });\n        });\n    };\n    Observable.create = function (subscribe) {\n        return new Observable(subscribe);\n    };\n    return Observable;\n}());\n\nfunction getPromiseCtor(promiseCtor) {\n    if (!promiseCtor) {\n        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_1__.config.Promise || Promise;\n    }\n    if (!promiseCtor) {\n        throw new Error('no Promise impl found');\n    }\n    return promiseCtor;\n}\n//# sourceMappingURL=Observable.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/Observable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observer.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observer.js ***!
  \******************************************************/
/*! namespace exports */
/*! export empty [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"empty\": () => /* binding */ empty\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./node_modules/rxjs/_esm5/internal/config.js\");\n/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ \"./node_modules/rxjs/_esm5/internal/util/hostReportError.js\");\n/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */\n\n\nvar empty = {\n    closed: true,\n    next: function (value) { },\n    error: function (err) {\n        if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {\n            throw err;\n        }\n        else {\n            (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__.hostReportError)(err);\n        }\n    },\n    complete: function () { }\n};\n//# sourceMappingURL=Observer.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/Observer.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/OuterSubscriber.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export OuterSubscriber [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OuterSubscriber\": () => /* binding */ OuterSubscriber\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */\n\n\nvar OuterSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(OuterSubscriber, _super);\n    function OuterSubscriber() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {\n        this.destination.next(innerValue);\n    };\n    OuterSubscriber.prototype.notifyError = function (error, innerSub) {\n        this.destination.error(error);\n    };\n    OuterSubscriber.prototype.notifyComplete = function (innerSub) {\n        this.destination.complete();\n    };\n    return OuterSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));\n\n//# sourceMappingURL=OuterSubscriber.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/OuterSubscriber.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/ReplaySubject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/ReplaySubject.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export ReplaySubject [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReplaySubject\": () => /* binding */ ReplaySubject\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subject */ \"./node_modules/rxjs/_esm5/internal/Subject.js\");\n/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheduler/queue */ \"./node_modules/rxjs/_esm5/internal/scheduler/queue.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/observeOn */ \"./node_modules/rxjs/_esm5/internal/operators/observeOn.js\");\n/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ \"./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js\");\n/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubjectSubscription */ \"./node_modules/rxjs/_esm5/internal/SubjectSubscription.js\");\n/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */\n\n\n\n\n\n\n\nvar ReplaySubject = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(ReplaySubject, _super);\n    function ReplaySubject(bufferSize, windowTime, scheduler) {\n        if (bufferSize === void 0) {\n            bufferSize = Number.POSITIVE_INFINITY;\n        }\n        if (windowTime === void 0) {\n            windowTime = Number.POSITIVE_INFINITY;\n        }\n        var _this = _super.call(this) || this;\n        _this.scheduler = scheduler;\n        _this._events = [];\n        _this._infiniteTimeWindow = false;\n        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;\n        _this._windowTime = windowTime < 1 ? 1 : windowTime;\n        if (windowTime === Number.POSITIVE_INFINITY) {\n            _this._infiniteTimeWindow = true;\n            _this.next = _this.nextInfiniteTimeWindow;\n        }\n        else {\n            _this.next = _this.nextTimeWindow;\n        }\n        return _this;\n    }\n    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {\n        var _events = this._events;\n        _events.push(value);\n        if (_events.length > this._bufferSize) {\n            _events.shift();\n        }\n        _super.prototype.next.call(this, value);\n    };\n    ReplaySubject.prototype.nextTimeWindow = function (value) {\n        this._events.push(new ReplayEvent(this._getNow(), value));\n        this._trimBufferThenGetEvents();\n        _super.prototype.next.call(this, value);\n    };\n    ReplaySubject.prototype._subscribe = function (subscriber) {\n        var _infiniteTimeWindow = this._infiniteTimeWindow;\n        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();\n        var scheduler = this.scheduler;\n        var len = _events.length;\n        var subscription;\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();\n        }\n        else if (this.isStopped || this.hasError) {\n            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;\n        }\n        else {\n            this.observers.push(subscriber);\n            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__.SubjectSubscription(this, subscriber);\n        }\n        if (scheduler) {\n            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__.ObserveOnSubscriber(subscriber, scheduler));\n        }\n        if (_infiniteTimeWindow) {\n            for (var i = 0; i < len && !subscriber.closed; i++) {\n                subscriber.next(_events[i]);\n            }\n        }\n        else {\n            for (var i = 0; i < len && !subscriber.closed; i++) {\n                subscriber.next(_events[i].value);\n            }\n        }\n        if (this.hasError) {\n            subscriber.error(this.thrownError);\n        }\n        else if (this.isStopped) {\n            subscriber.complete();\n        }\n        return subscription;\n    };\n    ReplaySubject.prototype._getNow = function () {\n        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__.queue).now();\n    };\n    ReplaySubject.prototype._trimBufferThenGetEvents = function () {\n        var now = this._getNow();\n        var _bufferSize = this._bufferSize;\n        var _windowTime = this._windowTime;\n        var _events = this._events;\n        var eventsCount = _events.length;\n        var spliceCount = 0;\n        while (spliceCount < eventsCount) {\n            if ((now - _events[spliceCount].time) < _windowTime) {\n                break;\n            }\n            spliceCount++;\n        }\n        if (eventsCount > _bufferSize) {\n            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);\n        }\n        if (spliceCount > 0) {\n            _events.splice(0, spliceCount);\n        }\n        return _events;\n    };\n    return ReplaySubject;\n}(_Subject__WEBPACK_IMPORTED_MODULE_6__.Subject));\n\nvar ReplayEvent = /*@__PURE__*/ (function () {\n    function ReplayEvent(time, value) {\n        this.time = time;\n        this.value = value;\n    }\n    return ReplayEvent;\n}());\n//# sourceMappingURL=ReplaySubject.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/ReplaySubject.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Scheduler.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Scheduler.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export Scheduler [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scheduler\": () => /* binding */ Scheduler\n/* harmony export */ });\nvar Scheduler = /*@__PURE__*/ (function () {\n    function Scheduler(SchedulerAction, now) {\n        if (now === void 0) {\n            now = Scheduler.now;\n        }\n        this.SchedulerAction = SchedulerAction;\n        this.now = now;\n    }\n    Scheduler.prototype.schedule = function (work, delay, state) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        return new this.SchedulerAction(this, work).schedule(state, delay);\n    };\n    Scheduler.now = function () { return Date.now(); };\n    return Scheduler;\n}());\n\n//# sourceMappingURL=Scheduler.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/Scheduler.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subject.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export AnonymousSubject [provided] [unused] [could be renamed] */
/*! export Subject [provided] [used] [could be renamed] */
/*! export SubjectSubscriber [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubjectSubscriber\": () => /* binding */ SubjectSubscriber,\n/* harmony export */   \"Subject\": () => /* binding */ Subject\n/* harmony export */ });\n/* unused harmony export AnonymousSubject */\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ \"./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js\");\n/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ \"./node_modules/rxjs/_esm5/internal/SubjectSubscription.js\");\n/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ \"./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js\");\n/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */\n\n\n\n\n\n\n\nvar SubjectSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(SubjectSubscriber, _super);\n    function SubjectSubscriber(destination) {\n        var _this = _super.call(this, destination) || this;\n        _this.destination = destination;\n        return _this;\n    }\n    return SubjectSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));\n\nvar Subject = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(Subject, _super);\n    function Subject() {\n        var _this = _super.call(this) || this;\n        _this.observers = [];\n        _this.closed = false;\n        _this.isStopped = false;\n        _this.hasError = false;\n        _this.thrownError = null;\n        return _this;\n    }\n    Subject.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__.rxSubscriber] = function () {\n        return new SubjectSubscriber(this);\n    };\n    Subject.prototype.lift = function (operator) {\n        var subject = new AnonymousSubject(this, this);\n        subject.operator = operator;\n        return subject;\n    };\n    Subject.prototype.next = function (value) {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        if (!this.isStopped) {\n            var observers = this.observers;\n            var len = observers.length;\n            var copy = observers.slice();\n            for (var i = 0; i < len; i++) {\n                copy[i].next(value);\n            }\n        }\n    };\n    Subject.prototype.error = function (err) {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        this.hasError = true;\n        this.thrownError = err;\n        this.isStopped = true;\n        var observers = this.observers;\n        var len = observers.length;\n        var copy = observers.slice();\n        for (var i = 0; i < len; i++) {\n            copy[i].error(err);\n        }\n        this.observers.length = 0;\n    };\n    Subject.prototype.complete = function () {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        this.isStopped = true;\n        var observers = this.observers;\n        var len = observers.length;\n        var copy = observers.slice();\n        for (var i = 0; i < len; i++) {\n            copy[i].complete();\n        }\n        this.observers.length = 0;\n    };\n    Subject.prototype.unsubscribe = function () {\n        this.isStopped = true;\n        this.closed = true;\n        this.observers = null;\n    };\n    Subject.prototype._trySubscribe = function (subscriber) {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        else {\n            return _super.prototype._trySubscribe.call(this, subscriber);\n        }\n    };\n    Subject.prototype._subscribe = function (subscriber) {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        else if (this.hasError) {\n            subscriber.error(this.thrownError);\n            return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;\n        }\n        else if (this.isStopped) {\n            subscriber.complete();\n            return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;\n        }\n        else {\n            this.observers.push(subscriber);\n            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__.SubjectSubscription(this, subscriber);\n        }\n    };\n    Subject.prototype.asObservable = function () {\n        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_6__.Observable();\n        observable.source = this;\n        return observable;\n    };\n    Subject.create = function (destination, source) {\n        return new AnonymousSubject(destination, source);\n    };\n    return Subject;\n}(_Observable__WEBPACK_IMPORTED_MODULE_6__.Observable));\n\nvar AnonymousSubject = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(AnonymousSubject, _super);\n    function AnonymousSubject(destination, source) {\n        var _this = _super.call(this) || this;\n        _this.destination = destination;\n        _this.source = source;\n        return _this;\n    }\n    AnonymousSubject.prototype.next = function (value) {\n        var destination = this.destination;\n        if (destination && destination.next) {\n            destination.next(value);\n        }\n    };\n    AnonymousSubject.prototype.error = function (err) {\n        var destination = this.destination;\n        if (destination && destination.error) {\n            this.destination.error(err);\n        }\n    };\n    AnonymousSubject.prototype.complete = function () {\n        var destination = this.destination;\n        if (destination && destination.complete) {\n            this.destination.complete();\n        }\n    };\n    AnonymousSubject.prototype._subscribe = function (subscriber) {\n        var source = this.source;\n        if (source) {\n            return this.source.subscribe(subscriber);\n        }\n        else {\n            return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;\n        }\n    };\n    return AnonymousSubject;\n}(Subject));\n\n//# sourceMappingURL=Subject.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/Subject.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export SubjectSubscription [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubjectSubscription\": () => /* binding */ SubjectSubscription\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */\n\n\nvar SubjectSubscription = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(SubjectSubscription, _super);\n    function SubjectSubscription(subject, subscriber) {\n        var _this = _super.call(this) || this;\n        _this.subject = subject;\n        _this.subscriber = subscriber;\n        _this.closed = false;\n        return _this;\n    }\n    SubjectSubscription.prototype.unsubscribe = function () {\n        if (this.closed) {\n            return;\n        }\n        this.closed = true;\n        var subject = this.subject;\n        var observers = subject.observers;\n        this.subject = null;\n        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {\n            return;\n        }\n        var subscriberIndex = observers.indexOf(this.subscriber);\n        if (subscriberIndex !== -1) {\n            observers.splice(subscriberIndex, 1);\n        }\n    };\n    return SubjectSubscription;\n}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription));\n\n//# sourceMappingURL=SubjectSubscription.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/SubjectSubscription.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscriber.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscriber.js ***!
  \********************************************************/
/*! namespace exports */
/*! export SafeSubscriber [provided] [unused] [could be renamed] */
/*! export Subscriber [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Subscriber\": () => /* binding */ Subscriber\n/* harmony export */ });\n/* unused harmony export SafeSubscriber */\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/isFunction */ \"./node_modules/rxjs/_esm5/internal/util/isFunction.js\");\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ \"./node_modules/rxjs/_esm5/internal/Observer.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ \"./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./node_modules/rxjs/_esm5/internal/config.js\");\n/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/hostReportError */ \"./node_modules/rxjs/_esm5/internal/util/hostReportError.js\");\n/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */\n\n\n\n\n\n\n\nvar Subscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(Subscriber, _super);\n    function Subscriber(destinationOrNext, error, complete) {\n        var _this = _super.call(this) || this;\n        _this.syncErrorValue = null;\n        _this.syncErrorThrown = false;\n        _this.syncErrorThrowable = false;\n        _this.isStopped = false;\n        switch (arguments.length) {\n            case 0:\n                _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;\n                break;\n            case 1:\n                if (!destinationOrNext) {\n                    _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;\n                    break;\n                }\n                if (typeof destinationOrNext === 'object') {\n                    if (destinationOrNext instanceof Subscriber) {\n                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;\n                        _this.destination = destinationOrNext;\n                        destinationOrNext.add(_this);\n                    }\n                    else {\n                        _this.syncErrorThrowable = true;\n                        _this.destination = new SafeSubscriber(_this, destinationOrNext);\n                    }\n                    break;\n                }\n            default:\n                _this.syncErrorThrowable = true;\n                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);\n                break;\n        }\n        return _this;\n    }\n    Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__.rxSubscriber] = function () { return this; };\n    Subscriber.create = function (next, error, complete) {\n        var subscriber = new Subscriber(next, error, complete);\n        subscriber.syncErrorThrowable = false;\n        return subscriber;\n    };\n    Subscriber.prototype.next = function (value) {\n        if (!this.isStopped) {\n            this._next(value);\n        }\n    };\n    Subscriber.prototype.error = function (err) {\n        if (!this.isStopped) {\n            this.isStopped = true;\n            this._error(err);\n        }\n    };\n    Subscriber.prototype.complete = function () {\n        if (!this.isStopped) {\n            this.isStopped = true;\n            this._complete();\n        }\n    };\n    Subscriber.prototype.unsubscribe = function () {\n        if (this.closed) {\n            return;\n        }\n        this.isStopped = true;\n        _super.prototype.unsubscribe.call(this);\n    };\n    Subscriber.prototype._next = function (value) {\n        this.destination.next(value);\n    };\n    Subscriber.prototype._error = function (err) {\n        this.destination.error(err);\n        this.unsubscribe();\n    };\n    Subscriber.prototype._complete = function () {\n        this.destination.complete();\n        this.unsubscribe();\n    };\n    Subscriber.prototype._unsubscribeAndRecycle = function () {\n        var _parentOrParents = this._parentOrParents;\n        this._parentOrParents = null;\n        this.unsubscribe();\n        this.closed = false;\n        this.isStopped = false;\n        this._parentOrParents = _parentOrParents;\n        return this;\n    };\n    return Subscriber;\n}(_Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription));\n\nvar SafeSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(SafeSubscriber, _super);\n    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {\n        var _this = _super.call(this) || this;\n        _this._parentSubscriber = _parentSubscriber;\n        var next;\n        var context = _this;\n        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__.isFunction)(observerOrNext)) {\n            next = observerOrNext;\n        }\n        else if (observerOrNext) {\n            next = observerOrNext.next;\n            error = observerOrNext.error;\n            complete = observerOrNext.complete;\n            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__.empty) {\n                context = Object.create(observerOrNext);\n                if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__.isFunction)(context.unsubscribe)) {\n                    _this.add(context.unsubscribe.bind(context));\n                }\n                context.unsubscribe = _this.unsubscribe.bind(_this);\n            }\n        }\n        _this._context = context;\n        _this._next = next;\n        _this._error = error;\n        _this._complete = complete;\n        return _this;\n    }\n    SafeSubscriber.prototype.next = function (value) {\n        if (!this.isStopped && this._next) {\n            var _parentSubscriber = this._parentSubscriber;\n            if (!_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {\n                this.__tryOrUnsub(this._next, value);\n            }\n            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {\n                this.unsubscribe();\n            }\n        }\n    };\n    SafeSubscriber.prototype.error = function (err) {\n        if (!this.isStopped) {\n            var _parentSubscriber = this._parentSubscriber;\n            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling;\n            if (this._error) {\n                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {\n                    this.__tryOrUnsub(this._error, err);\n                    this.unsubscribe();\n                }\n                else {\n                    this.__tryOrSetError(_parentSubscriber, this._error, err);\n                    this.unsubscribe();\n                }\n            }\n            else if (!_parentSubscriber.syncErrorThrowable) {\n                this.unsubscribe();\n                if (useDeprecatedSynchronousErrorHandling) {\n                    throw err;\n                }\n                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);\n            }\n            else {\n                if (useDeprecatedSynchronousErrorHandling) {\n                    _parentSubscriber.syncErrorValue = err;\n                    _parentSubscriber.syncErrorThrown = true;\n                }\n                else {\n                    (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);\n                }\n                this.unsubscribe();\n            }\n        }\n    };\n    SafeSubscriber.prototype.complete = function () {\n        var _this = this;\n        if (!this.isStopped) {\n            var _parentSubscriber = this._parentSubscriber;\n            if (this._complete) {\n                var wrappedComplete = function () { return _this._complete.call(_this._context); };\n                if (!_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {\n                    this.__tryOrUnsub(wrappedComplete);\n                    this.unsubscribe();\n                }\n                else {\n                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);\n                    this.unsubscribe();\n                }\n            }\n            else {\n                this.unsubscribe();\n            }\n        }\n    };\n    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {\n        try {\n            fn.call(this._context, value);\n        }\n        catch (err) {\n            this.unsubscribe();\n            if (_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling) {\n                throw err;\n            }\n            else {\n                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);\n            }\n        }\n    };\n    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {\n        if (!_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling) {\n            throw new Error('bad call');\n        }\n        try {\n            fn.call(this._context, value);\n        }\n        catch (err) {\n            if (_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling) {\n                parent.syncErrorValue = err;\n                parent.syncErrorThrown = true;\n                return true;\n            }\n            else {\n                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);\n                return true;\n            }\n        }\n        return false;\n    };\n    SafeSubscriber.prototype._unsubscribe = function () {\n        var _parentSubscriber = this._parentSubscriber;\n        this._context = null;\n        this._parentSubscriber = null;\n        _parentSubscriber.unsubscribe();\n    };\n    return SafeSubscriber;\n}(Subscriber));\n\n//# sourceMappingURL=Subscriber.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/Subscriber.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscription.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscription.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export Subscription [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Subscription\": () => /* binding */ Subscription\n/* harmony export */ });\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isArray */ \"./node_modules/rxjs/_esm5/internal/util/isArray.js\");\n/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isObject */ \"./node_modules/rxjs/_esm5/internal/util/isObject.js\");\n/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ \"./node_modules/rxjs/_esm5/internal/util/isFunction.js\");\n/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ \"./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js\");\n/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */\n\n\n\n\nvar Subscription = /*@__PURE__*/ (function () {\n    function Subscription(unsubscribe) {\n        this.closed = false;\n        this._parentOrParents = null;\n        this._subscriptions = null;\n        if (unsubscribe) {\n            this._unsubscribe = unsubscribe;\n        }\n    }\n    Subscription.prototype.unsubscribe = function () {\n        var errors;\n        if (this.closed) {\n            return;\n        }\n        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;\n        this.closed = true;\n        this._parentOrParents = null;\n        this._subscriptions = null;\n        if (_parentOrParents instanceof Subscription) {\n            _parentOrParents.remove(this);\n        }\n        else if (_parentOrParents !== null) {\n            for (var index = 0; index < _parentOrParents.length; ++index) {\n                var parent_1 = _parentOrParents[index];\n                parent_1.remove(this);\n            }\n        }\n        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(_unsubscribe)) {\n            try {\n                _unsubscribe.call(this);\n            }\n            catch (e) {\n                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];\n            }\n        }\n        if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(_subscriptions)) {\n            var index = -1;\n            var len = _subscriptions.length;\n            while (++index < len) {\n                var sub = _subscriptions[index];\n                if ((0,_util_isObject__WEBPACK_IMPORTED_MODULE_3__.isObject)(sub)) {\n                    try {\n                        sub.unsubscribe();\n                    }\n                    catch (e) {\n                        errors = errors || [];\n                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {\n                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));\n                        }\n                        else {\n                            errors.push(e);\n                        }\n                    }\n                }\n            }\n        }\n        if (errors) {\n            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);\n        }\n    };\n    Subscription.prototype.add = function (teardown) {\n        var subscription = teardown;\n        if (!teardown) {\n            return Subscription.EMPTY;\n        }\n        switch (typeof teardown) {\n            case 'function':\n                subscription = new Subscription(teardown);\n            case 'object':\n                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {\n                    return subscription;\n                }\n                else if (this.closed) {\n                    subscription.unsubscribe();\n                    return subscription;\n                }\n                else if (!(subscription instanceof Subscription)) {\n                    var tmp = subscription;\n                    subscription = new Subscription();\n                    subscription._subscriptions = [tmp];\n                }\n                break;\n            default: {\n                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');\n            }\n        }\n        var _parentOrParents = subscription._parentOrParents;\n        if (_parentOrParents === null) {\n            subscription._parentOrParents = this;\n        }\n        else if (_parentOrParents instanceof Subscription) {\n            if (_parentOrParents === this) {\n                return subscription;\n            }\n            subscription._parentOrParents = [_parentOrParents, this];\n        }\n        else if (_parentOrParents.indexOf(this) === -1) {\n            _parentOrParents.push(this);\n        }\n        else {\n            return subscription;\n        }\n        var subscriptions = this._subscriptions;\n        if (subscriptions === null) {\n            this._subscriptions = [subscription];\n        }\n        else {\n            subscriptions.push(subscription);\n        }\n        return subscription;\n    };\n    Subscription.prototype.remove = function (subscription) {\n        var subscriptions = this._subscriptions;\n        if (subscriptions) {\n            var subscriptionIndex = subscriptions.indexOf(subscription);\n            if (subscriptionIndex !== -1) {\n                subscriptions.splice(subscriptionIndex, 1);\n            }\n        }\n    };\n    Subscription.EMPTY = (function (empty) {\n        empty.closed = true;\n        return empty;\n    }(new Subscription()));\n    return Subscription;\n}());\n\nfunction flattenUnsubscriptionErrors(errors) {\n    return errors.reduce(function (errs, err) { return errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) ? err.errors : err); }, []);\n}\n//# sourceMappingURL=Subscription.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/Subscription.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/config.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/config.js ***!
  \****************************************************/
/*! namespace exports */
/*! export config [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => /* binding */ config\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar _enable_super_gross_mode_that_will_cause_bad_things = false;\nvar config = {\n    Promise: undefined,\n    set useDeprecatedSynchronousErrorHandling(value) {\n        if (value) {\n            var error = /*@__PURE__*/ new Error();\n            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \\n' + error.stack);\n        }\n        else if (_enable_super_gross_mode_that_will_cause_bad_things) {\n            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');\n        }\n        _enable_super_gross_mode_that_will_cause_bad_things = value;\n    },\n    get useDeprecatedSynchronousErrorHandling() {\n        return _enable_super_gross_mode_that_will_cause_bad_things;\n    },\n};\n//# sourceMappingURL=config.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/config.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js ***!
  \******************************************************************************/
/*! namespace exports */
/*! export ConnectableObservable [provided] [unused] [could be renamed] */
/*! export connectableObservableDescriptor [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectableObservableDescriptor\": () => /* binding */ connectableObservableDescriptor\n/* harmony export */ });\n/* unused harmony export ConnectableObservable */\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subject */ \"./node_modules/rxjs/_esm5/internal/Subject.js\");\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/refCount */ \"./node_modules/rxjs/_esm5/internal/operators/refCount.js\");\n/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */\n\n\n\n\n\n\nvar ConnectableObservable = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(ConnectableObservable, _super);\n    function ConnectableObservable(source, subjectFactory) {\n        var _this = _super.call(this) || this;\n        _this.source = source;\n        _this.subjectFactory = subjectFactory;\n        _this._refCount = 0;\n        _this._isComplete = false;\n        return _this;\n    }\n    ConnectableObservable.prototype._subscribe = function (subscriber) {\n        return this.getSubject().subscribe(subscriber);\n    };\n    ConnectableObservable.prototype.getSubject = function () {\n        var subject = this._subject;\n        if (!subject || subject.isStopped) {\n            this._subject = this.subjectFactory();\n        }\n        return this._subject;\n    };\n    ConnectableObservable.prototype.connect = function () {\n        var connection = this._connection;\n        if (!connection) {\n            this._isComplete = false;\n            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();\n            connection.add(this.source\n                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));\n            if (connection.closed) {\n                this._connection = null;\n                connection = _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;\n            }\n        }\n        return connection;\n    };\n    ConnectableObservable.prototype.refCount = function () {\n        return (0,_operators_refCount__WEBPACK_IMPORTED_MODULE_2__.refCount)()(this);\n    };\n    return ConnectableObservable;\n}(_Observable__WEBPACK_IMPORTED_MODULE_3__.Observable));\n\nvar connectableObservableDescriptor = /*@__PURE__*/ (function () {\n    var connectableProto = ConnectableObservable.prototype;\n    return {\n        operator: { value: null },\n        _refCount: { value: 0, writable: true },\n        _subject: { value: null, writable: true },\n        _connection: { value: null, writable: true },\n        _subscribe: { value: connectableProto._subscribe },\n        _isComplete: { value: connectableProto._isComplete, writable: true },\n        getSubject: { value: connectableProto.getSubject },\n        connect: { value: connectableProto.connect },\n        refCount: { value: connectableProto.refCount }\n    };\n})();\nvar ConnectableSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(ConnectableSubscriber, _super);\n    function ConnectableSubscriber(destination, connectable) {\n        var _this = _super.call(this, destination) || this;\n        _this.connectable = connectable;\n        return _this;\n    }\n    ConnectableSubscriber.prototype._error = function (err) {\n        this._unsubscribe();\n        _super.prototype._error.call(this, err);\n    };\n    ConnectableSubscriber.prototype._complete = function () {\n        this.connectable._isComplete = true;\n        this._unsubscribe();\n        _super.prototype._complete.call(this);\n    };\n    ConnectableSubscriber.prototype._unsubscribe = function () {\n        var connectable = this.connectable;\n        if (connectable) {\n            this.connectable = null;\n            var connection = connectable._connection;\n            connectable._refCount = 0;\n            connectable._subject = null;\n            connectable._connection = null;\n            if (connection) {\n                connection.unsubscribe();\n            }\n        }\n    };\n    return ConnectableSubscriber;\n}(_Subject__WEBPACK_IMPORTED_MODULE_4__.SubjectSubscriber));\nvar RefCountOperator = /*@__PURE__*/ ((/* unused pure expression or super */ null && (function () {\n    function RefCountOperator(connectable) {\n        this.connectable = connectable;\n    }\n    RefCountOperator.prototype.call = function (subscriber, source) {\n        var connectable = this.connectable;\n        connectable._refCount++;\n        var refCounter = new RefCountSubscriber(subscriber, connectable);\n        var subscription = source.subscribe(refCounter);\n        if (!refCounter.closed) {\n            refCounter.connection = connectable.connect();\n        }\n        return subscription;\n    };\n    return RefCountOperator;\n}())));\nvar RefCountSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(RefCountSubscriber, _super);\n    function RefCountSubscriber(destination, connectable) {\n        var _this = _super.call(this, destination) || this;\n        _this.connectable = connectable;\n        return _this;\n    }\n    RefCountSubscriber.prototype._unsubscribe = function () {\n        var connectable = this.connectable;\n        if (!connectable) {\n            this.connection = null;\n            return;\n        }\n        this.connectable = null;\n        var refCount = connectable._refCount;\n        if (refCount <= 0) {\n            this.connection = null;\n            return;\n        }\n        connectable._refCount = refCount - 1;\n        if (refCount > 1) {\n            this.connection = null;\n            return;\n        }\n        var connection = this.connection;\n        var sharedConnection = connectable._connection;\n        this.connection = null;\n        if (sharedConnection && (!connection || sharedConnection === connection)) {\n            sharedConnection.unsubscribe();\n        }\n    };\n    return RefCountSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_5__.Subscriber));\n//# sourceMappingURL=ConnectableObservable.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/concat.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/concat.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export concat [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => /* binding */ concat\n/* harmony export */ });\n/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./of */ \"./node_modules/rxjs/_esm5/internal/observable/of.js\");\n/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators/concatAll */ \"./node_modules/rxjs/_esm5/internal/operators/concatAll.js\");\n/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */\n\n\nfunction concat() {\n    var observables = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        observables[_i] = arguments[_i];\n    }\n    return (0,_operators_concatAll__WEBPACK_IMPORTED_MODULE_0__.concatAll)()(_of__WEBPACK_IMPORTED_MODULE_1__.of.apply(void 0, observables));\n}\n//# sourceMappingURL=concat.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/observable/concat.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/empty.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/empty.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export EMPTY [provided] [unused] [could be renamed] */
/*! export empty [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"empty\": () => /* binding */ empty\n/* harmony export */ });\n/* unused harmony export EMPTY */\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */\n\nvar EMPTY = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) { return subscriber.complete(); });\nfunction empty(scheduler) {\n    return scheduler ? emptyScheduled(scheduler) : EMPTY;\n}\nfunction emptyScheduled(scheduler) {\n    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });\n}\n//# sourceMappingURL=empty.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/observable/empty.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/from.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/from.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export from [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"from\": () => /* binding */ from\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ \"./node_modules/rxjs/_esm5/internal/util/subscribeTo.js\");\n/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduled */ \"./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js\");\n/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */\n\n\n\nfunction from(input, scheduler) {\n    if (!scheduler) {\n        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {\n            return input;\n        }\n        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable((0,_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__.subscribeTo)(input));\n    }\n    else {\n        return (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__.scheduled)(input, scheduler);\n    }\n}\n//# sourceMappingURL=from.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/observable/from.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromArray.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export fromArray [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fromArray\": () => /* binding */ fromArray\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToArray */ \"./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js\");\n/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ \"./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js\");\n/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */\n\n\n\nfunction fromArray(input, scheduler) {\n    if (!scheduler) {\n        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable((0,_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__.subscribeToArray)(input));\n    }\n    else {\n        return (0,_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__.scheduleArray)(input, scheduler);\n    }\n}\n//# sourceMappingURL=fromArray.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/observable/fromArray.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/of.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/of.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export of [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"of\": () => /* binding */ of\n/* harmony export */ });\n/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ \"./node_modules/rxjs/_esm5/internal/util/isScheduler.js\");\n/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromArray */ \"./node_modules/rxjs/_esm5/internal/observable/fromArray.js\");\n/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduled/scheduleArray */ \"./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js\");\n/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */\n\n\n\nfunction of() {\n    var args = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        args[_i] = arguments[_i];\n    }\n    var scheduler = args[args.length - 1];\n    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__.isScheduler)(scheduler)) {\n        args.pop();\n        return (0,_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_1__.scheduleArray)(args, scheduler);\n    }\n    else {\n        return (0,_fromArray__WEBPACK_IMPORTED_MODULE_2__.fromArray)(args);\n    }\n}\n//# sourceMappingURL=of.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/observable/of.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/throwError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/throwError.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export throwError [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throwError\": () => /* binding */ throwError\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */\n\nfunction throwError(error, scheduler) {\n    if (!scheduler) {\n        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) { return subscriber.error(error); });\n    }\n    else {\n        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });\n    }\n}\nfunction dispatch(_a) {\n    var error = _a.error, subscriber = _a.subscriber;\n    subscriber.error(error);\n}\n//# sourceMappingURL=throwError.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/observable/throwError.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/concatAll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/concatAll.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export concatAll [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concatAll\": () => /* binding */ concatAll\n/* harmony export */ });\n/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ \"./node_modules/rxjs/_esm5/internal/operators/mergeAll.js\");\n/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */\n\nfunction concatAll() {\n    return (0,_mergeAll__WEBPACK_IMPORTED_MODULE_0__.mergeAll)(1);\n}\n//# sourceMappingURL=concatAll.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/concatAll.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js ***!
  \****************************************************************************/
/*! namespace exports */
/*! export distinctUntilChanged [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"distinctUntilChanged\": () => /* binding */ distinctUntilChanged\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */\n\n\nfunction distinctUntilChanged(compare, keySelector) {\n    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };\n}\nvar DistinctUntilChangedOperator = /*@__PURE__*/ (function () {\n    function DistinctUntilChangedOperator(compare, keySelector) {\n        this.compare = compare;\n        this.keySelector = keySelector;\n    }\n    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {\n        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));\n    };\n    return DistinctUntilChangedOperator;\n}());\nvar DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(DistinctUntilChangedSubscriber, _super);\n    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {\n        var _this = _super.call(this, destination) || this;\n        _this.keySelector = keySelector;\n        _this.hasKey = false;\n        if (typeof compare === 'function') {\n            _this.compare = compare;\n        }\n        return _this;\n    }\n    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {\n        return x === y;\n    };\n    DistinctUntilChangedSubscriber.prototype._next = function (value) {\n        var key;\n        try {\n            var keySelector = this.keySelector;\n            key = keySelector ? keySelector(value) : value;\n        }\n        catch (err) {\n            return this.destination.error(err);\n        }\n        var result = false;\n        if (this.hasKey) {\n            try {\n                var compare = this.compare;\n                result = compare(this.key, key);\n            }\n            catch (err) {\n                return this.destination.error(err);\n            }\n        }\n        else {\n            this.hasKey = true;\n        }\n        if (!result) {\n            this.key = key;\n            this.destination.next(value);\n        }\n    };\n    return DistinctUntilChangedSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));\n//# sourceMappingURL=distinctUntilChanged.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/filter.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export filter [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filter\": () => /* binding */ filter\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */\n\n\nfunction filter(predicate, thisArg) {\n    return function filterOperatorFunction(source) {\n        return source.lift(new FilterOperator(predicate, thisArg));\n    };\n}\nvar FilterOperator = /*@__PURE__*/ (function () {\n    function FilterOperator(predicate, thisArg) {\n        this.predicate = predicate;\n        this.thisArg = thisArg;\n    }\n    FilterOperator.prototype.call = function (subscriber, source) {\n        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));\n    };\n    return FilterOperator;\n}());\nvar FilterSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(FilterSubscriber, _super);\n    function FilterSubscriber(destination, predicate, thisArg) {\n        var _this = _super.call(this, destination) || this;\n        _this.predicate = predicate;\n        _this.thisArg = thisArg;\n        _this.count = 0;\n        return _this;\n    }\n    FilterSubscriber.prototype._next = function (value) {\n        var result;\n        try {\n            result = this.predicate.call(this.thisArg, value, this.count++);\n        }\n        catch (err) {\n            this.destination.error(err);\n            return;\n        }\n        if (result) {\n            this.destination.next(value);\n        }\n    };\n    return FilterSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));\n//# sourceMappingURL=filter.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/filter.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/map.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export MapOperator [provided] [unused] [could be renamed] */
/*! export map [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => /* binding */ map\n/* harmony export */ });\n/* unused harmony export MapOperator */\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */\n\n\nfunction map(project, thisArg) {\n    return function mapOperation(source) {\n        if (typeof project !== 'function') {\n            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');\n        }\n        return source.lift(new MapOperator(project, thisArg));\n    };\n}\nvar MapOperator = /*@__PURE__*/ (function () {\n    function MapOperator(project, thisArg) {\n        this.project = project;\n        this.thisArg = thisArg;\n    }\n    MapOperator.prototype.call = function (subscriber, source) {\n        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));\n    };\n    return MapOperator;\n}());\n\nvar MapSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(MapSubscriber, _super);\n    function MapSubscriber(destination, project, thisArg) {\n        var _this = _super.call(this, destination) || this;\n        _this.project = project;\n        _this.count = 0;\n        _this.thisArg = thisArg || _this;\n        return _this;\n    }\n    MapSubscriber.prototype._next = function (value) {\n        var result;\n        try {\n            result = this.project.call(this.thisArg, value, this.count++);\n        }\n        catch (err) {\n            this.destination.error(err);\n            return;\n        }\n        this.destination.next(result);\n    };\n    return MapSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));\n//# sourceMappingURL=map.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/map.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeAll.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export mergeAll [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeAll\": () => /* binding */ mergeAll\n/* harmony export */ });\n/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ \"./node_modules/rxjs/_esm5/internal/operators/mergeMap.js\");\n/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ \"./node_modules/rxjs/_esm5/internal/util/identity.js\");\n/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */\n\n\nfunction mergeAll(concurrent) {\n    if (concurrent === void 0) {\n        concurrent = Number.POSITIVE_INFINITY;\n    }\n    return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(_util_identity__WEBPACK_IMPORTED_MODULE_1__.identity, concurrent);\n}\n//# sourceMappingURL=mergeAll.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/mergeAll.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeMap.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeMap.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export MergeMapOperator [provided] [unused] [could be renamed] */
/*! export MergeMapSubscriber [provided] [unused] [could be renamed] */
/*! export mergeMap [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeMap\": () => /* binding */ mergeMap\n/* harmony export */ });\n/* unused harmony exports MergeMapOperator, MergeMapSubscriber */\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ \"./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js\");\n/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../OuterSubscriber */ \"./node_modules/rxjs/_esm5/internal/OuterSubscriber.js\");\n/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InnerSubscriber */ \"./node_modules/rxjs/_esm5/internal/InnerSubscriber.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./node_modules/rxjs/_esm5/internal/operators/map.js\");\n/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/from */ \"./node_modules/rxjs/_esm5/internal/observable/from.js\");\n/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */\n\n\n\n\n\n\nfunction mergeMap(project, resultSelector, concurrent) {\n    if (concurrent === void 0) {\n        concurrent = Number.POSITIVE_INFINITY;\n    }\n    if (typeof resultSelector === 'function') {\n        return function (source) { return source.pipe(mergeMap(function (a, i) { return (0,_observable_from__WEBPACK_IMPORTED_MODULE_0__.from)(project(a, i)).pipe((0,_map__WEBPACK_IMPORTED_MODULE_1__.map)(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };\n    }\n    else if (typeof resultSelector === 'number') {\n        concurrent = resultSelector;\n    }\n    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };\n}\nvar MergeMapOperator = /*@__PURE__*/ (function () {\n    function MergeMapOperator(project, concurrent) {\n        if (concurrent === void 0) {\n            concurrent = Number.POSITIVE_INFINITY;\n        }\n        this.project = project;\n        this.concurrent = concurrent;\n    }\n    MergeMapOperator.prototype.call = function (observer, source) {\n        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));\n    };\n    return MergeMapOperator;\n}());\n\nvar MergeMapSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_2__.__extends(MergeMapSubscriber, _super);\n    function MergeMapSubscriber(destination, project, concurrent) {\n        if (concurrent === void 0) {\n            concurrent = Number.POSITIVE_INFINITY;\n        }\n        var _this = _super.call(this, destination) || this;\n        _this.project = project;\n        _this.concurrent = concurrent;\n        _this.hasCompleted = false;\n        _this.buffer = [];\n        _this.active = 0;\n        _this.index = 0;\n        return _this;\n    }\n    MergeMapSubscriber.prototype._next = function (value) {\n        if (this.active < this.concurrent) {\n            this._tryNext(value);\n        }\n        else {\n            this.buffer.push(value);\n        }\n    };\n    MergeMapSubscriber.prototype._tryNext = function (value) {\n        var result;\n        var index = this.index++;\n        try {\n            result = this.project(value, index);\n        }\n        catch (err) {\n            this.destination.error(err);\n            return;\n        }\n        this.active++;\n        this._innerSub(result, value, index);\n    };\n    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {\n        var innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__.InnerSubscriber(this, value, index);\n        var destination = this.destination;\n        destination.add(innerSubscriber);\n        var innerSubscription = (0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__.subscribeToResult)(this, ish, undefined, undefined, innerSubscriber);\n        if (innerSubscription !== innerSubscriber) {\n            destination.add(innerSubscription);\n        }\n    };\n    MergeMapSubscriber.prototype._complete = function () {\n        this.hasCompleted = true;\n        if (this.active === 0 && this.buffer.length === 0) {\n            this.destination.complete();\n        }\n        this.unsubscribe();\n    };\n    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {\n        this.destination.next(innerValue);\n    };\n    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {\n        var buffer = this.buffer;\n        this.remove(innerSub);\n        this.active--;\n        if (buffer.length > 0) {\n            this._next(buffer.shift());\n        }\n        else if (this.active === 0 && this.hasCompleted) {\n            this.destination.complete();\n        }\n    };\n    return MergeMapSubscriber;\n}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_5__.OuterSubscriber));\n\n//# sourceMappingURL=mergeMap.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/mergeMap.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/multicast.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/multicast.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export MulticastOperator [provided] [unused] [could be renamed] */
/*! export multicast [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"multicast\": () => /* binding */ multicast\n/* harmony export */ });\n/* unused harmony export MulticastOperator */\n/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/ConnectableObservable */ \"./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js\");\n/** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */\n\nfunction multicast(subjectOrSubjectFactory, selector) {\n    return function multicastOperatorFunction(source) {\n        var subjectFactory;\n        if (typeof subjectOrSubjectFactory === 'function') {\n            subjectFactory = subjectOrSubjectFactory;\n        }\n        else {\n            subjectFactory = function subjectFactory() {\n                return subjectOrSubjectFactory;\n            };\n        }\n        if (typeof selector === 'function') {\n            return source.lift(new MulticastOperator(subjectFactory, selector));\n        }\n        var connectable = Object.create(source, _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__.connectableObservableDescriptor);\n        connectable.source = source;\n        connectable.subjectFactory = subjectFactory;\n        return connectable;\n    };\n}\nvar MulticastOperator = /*@__PURE__*/ (function () {\n    function MulticastOperator(subjectFactory, selector) {\n        this.subjectFactory = subjectFactory;\n        this.selector = selector;\n    }\n    MulticastOperator.prototype.call = function (subscriber, source) {\n        var selector = this.selector;\n        var subject = this.subjectFactory();\n        var subscription = selector(subject).subscribe(subscriber);\n        subscription.add(source.subscribe(subject));\n        return subscription;\n    };\n    return MulticastOperator;\n}());\n\n//# sourceMappingURL=multicast.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/multicast.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/observeOn.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/observeOn.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export ObserveOnMessage [provided] [unused] [could be renamed] */
/*! export ObserveOnOperator [provided] [unused] [could be renamed] */
/*! export ObserveOnSubscriber [provided] [used] [could be renamed] */
/*! export observeOn [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ObserveOnSubscriber\": () => /* binding */ ObserveOnSubscriber\n/* harmony export */ });\n/* unused harmony exports observeOn, ObserveOnOperator, ObserveOnMessage */\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notification */ \"./node_modules/rxjs/_esm5/internal/Notification.js\");\n/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */\n\n\n\nfunction observeOn(scheduler, delay) {\n    if (delay === void 0) {\n        delay = 0;\n    }\n    return function observeOnOperatorFunction(source) {\n        return source.lift(new ObserveOnOperator(scheduler, delay));\n    };\n}\nvar ObserveOnOperator = /*@__PURE__*/ ((/* unused pure expression or super */ null && (function () {\n    function ObserveOnOperator(scheduler, delay) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        this.scheduler = scheduler;\n        this.delay = delay;\n    }\n    ObserveOnOperator.prototype.call = function (subscriber, source) {\n        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));\n    };\n    return ObserveOnOperator;\n}())));\n\nvar ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(ObserveOnSubscriber, _super);\n    function ObserveOnSubscriber(destination, scheduler, delay) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        var _this = _super.call(this, destination) || this;\n        _this.scheduler = scheduler;\n        _this.delay = delay;\n        return _this;\n    }\n    ObserveOnSubscriber.dispatch = function (arg) {\n        var notification = arg.notification, destination = arg.destination;\n        notification.observe(destination);\n        this.unsubscribe();\n    };\n    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {\n        var destination = this.destination;\n        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));\n    };\n    ObserveOnSubscriber.prototype._next = function (value) {\n        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createNext(value));\n    };\n    ObserveOnSubscriber.prototype._error = function (err) {\n        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createError(err));\n        this.unsubscribe();\n    };\n    ObserveOnSubscriber.prototype._complete = function () {\n        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createComplete());\n        this.unsubscribe();\n    };\n    return ObserveOnSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber));\n\nvar ObserveOnMessage = /*@__PURE__*/ (function () {\n    function ObserveOnMessage(notification, destination) {\n        this.notification = notification;\n        this.destination = destination;\n    }\n    return ObserveOnMessage;\n}());\n\n//# sourceMappingURL=observeOn.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/observeOn.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/pluck.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/pluck.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export pluck [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pluck\": () => /* binding */ pluck\n/* harmony export */ });\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./node_modules/rxjs/_esm5/internal/operators/map.js\");\n/** PURE_IMPORTS_START _map PURE_IMPORTS_END */\n\nfunction pluck() {\n    var properties = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        properties[_i] = arguments[_i];\n    }\n    var length = properties.length;\n    if (length === 0) {\n        throw new Error('list of properties cannot be empty.');\n    }\n    return function (source) { return (0,_map__WEBPACK_IMPORTED_MODULE_0__.map)(plucker(properties, length))(source); };\n}\nfunction plucker(props, length) {\n    var mapper = function (x) {\n        var currentProp = x;\n        for (var i = 0; i < length; i++) {\n            var p = currentProp[props[i]];\n            if (typeof p !== 'undefined') {\n                currentProp = p;\n            }\n            else {\n                return undefined;\n            }\n        }\n        return currentProp;\n    };\n    return mapper;\n}\n//# sourceMappingURL=pluck.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/pluck.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/refCount.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/refCount.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export refCount [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refCount\": () => /* binding */ refCount\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */\n\n\nfunction refCount() {\n    return function refCountOperatorFunction(source) {\n        return source.lift(new RefCountOperator(source));\n    };\n}\nvar RefCountOperator = /*@__PURE__*/ (function () {\n    function RefCountOperator(connectable) {\n        this.connectable = connectable;\n    }\n    RefCountOperator.prototype.call = function (subscriber, source) {\n        var connectable = this.connectable;\n        connectable._refCount++;\n        var refCounter = new RefCountSubscriber(subscriber, connectable);\n        var subscription = source.subscribe(refCounter);\n        if (!refCounter.closed) {\n            refCounter.connection = connectable.connect();\n        }\n        return subscription;\n    };\n    return RefCountOperator;\n}());\nvar RefCountSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(RefCountSubscriber, _super);\n    function RefCountSubscriber(destination, connectable) {\n        var _this = _super.call(this, destination) || this;\n        _this.connectable = connectable;\n        return _this;\n    }\n    RefCountSubscriber.prototype._unsubscribe = function () {\n        var connectable = this.connectable;\n        if (!connectable) {\n            this.connection = null;\n            return;\n        }\n        this.connectable = null;\n        var refCount = connectable._refCount;\n        if (refCount <= 0) {\n            this.connection = null;\n            return;\n        }\n        connectable._refCount = refCount - 1;\n        if (refCount > 1) {\n            this.connection = null;\n            return;\n        }\n        var connection = this.connection;\n        var sharedConnection = connectable._connection;\n        this.connection = null;\n        if (sharedConnection && (!connection || sharedConnection === connection)) {\n            sharedConnection.unsubscribe();\n        }\n    };\n    return RefCountSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));\n//# sourceMappingURL=refCount.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/refCount.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/scan.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/scan.js ***!
  \************************************************************/
/*! namespace exports */
/*! export scan [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scan\": () => /* binding */ scan\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */\n\n\nfunction scan(accumulator, seed) {\n    var hasSeed = false;\n    if (arguments.length >= 2) {\n        hasSeed = true;\n    }\n    return function scanOperatorFunction(source) {\n        return source.lift(new ScanOperator(accumulator, seed, hasSeed));\n    };\n}\nvar ScanOperator = /*@__PURE__*/ (function () {\n    function ScanOperator(accumulator, seed, hasSeed) {\n        if (hasSeed === void 0) {\n            hasSeed = false;\n        }\n        this.accumulator = accumulator;\n        this.seed = seed;\n        this.hasSeed = hasSeed;\n    }\n    ScanOperator.prototype.call = function (subscriber, source) {\n        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));\n    };\n    return ScanOperator;\n}());\nvar ScanSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(ScanSubscriber, _super);\n    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {\n        var _this = _super.call(this, destination) || this;\n        _this.accumulator = accumulator;\n        _this._seed = _seed;\n        _this.hasSeed = hasSeed;\n        _this.index = 0;\n        return _this;\n    }\n    Object.defineProperty(ScanSubscriber.prototype, \"seed\", {\n        get: function () {\n            return this._seed;\n        },\n        set: function (value) {\n            this.hasSeed = true;\n            this._seed = value;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    ScanSubscriber.prototype._next = function (value) {\n        if (!this.hasSeed) {\n            this.seed = value;\n            this.destination.next(value);\n        }\n        else {\n            return this._tryNext(value);\n        }\n    };\n    ScanSubscriber.prototype._tryNext = function (value) {\n        var index = this.index++;\n        var result;\n        try {\n            result = this.accumulator(this.seed, value, index);\n        }\n        catch (err) {\n            this.destination.error(err);\n        }\n        this.seed = result;\n        this.destination.next(result);\n    };\n    return ScanSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));\n//# sourceMappingURL=scan.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/scan.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/share.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/share.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export share [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"share\": () => /* binding */ share\n/* harmony export */ });\n/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multicast */ \"./node_modules/rxjs/_esm5/internal/operators/multicast.js\");\n/* harmony import */ var _refCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refCount */ \"./node_modules/rxjs/_esm5/internal/operators/refCount.js\");\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ \"./node_modules/rxjs/_esm5/internal/Subject.js\");\n/** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */\n\n\n\nfunction shareSubjectFactory() {\n    return new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();\n}\nfunction share() {\n    return function (source) { return (0,_refCount__WEBPACK_IMPORTED_MODULE_1__.refCount)()((0,_multicast__WEBPACK_IMPORTED_MODULE_2__.multicast)(shareSubjectFactory)(source)); };\n}\n//# sourceMappingURL=share.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/share.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/shareReplay.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/shareReplay.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export shareReplay [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shareReplay\": () => /* binding */ shareReplay\n/* harmony export */ });\n/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ReplaySubject */ \"./node_modules/rxjs/_esm5/internal/ReplaySubject.js\");\n/** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */\n\nfunction shareReplay(configOrBufferSize, windowTime, scheduler) {\n    var config;\n    if (configOrBufferSize && typeof configOrBufferSize === 'object') {\n        config = configOrBufferSize;\n    }\n    else {\n        config = {\n            bufferSize: configOrBufferSize,\n            windowTime: windowTime,\n            refCount: false,\n            scheduler: scheduler\n        };\n    }\n    return function (source) { return source.lift(shareReplayOperator(config)); };\n}\nfunction shareReplayOperator(_a) {\n    var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;\n    var subject;\n    var refCount = 0;\n    var subscription;\n    var hasError = false;\n    var isComplete = false;\n    return function shareReplayOperation(source) {\n        refCount++;\n        if (!subject || hasError) {\n            hasError = false;\n            subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(bufferSize, windowTime, scheduler);\n            subscription = source.subscribe({\n                next: function (value) { subject.next(value); },\n                error: function (err) {\n                    hasError = true;\n                    subject.error(err);\n                },\n                complete: function () {\n                    isComplete = true;\n                    subscription = undefined;\n                    subject.complete();\n                },\n            });\n        }\n        var innerSub = subject.subscribe(this);\n        this.add(function () {\n            refCount--;\n            innerSub.unsubscribe();\n            if (subscription && !isComplete && useRefCount && refCount === 0) {\n                subscription.unsubscribe();\n                subscription = undefined;\n                subject = undefined;\n            }\n        });\n    };\n}\n//# sourceMappingURL=shareReplay.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/shareReplay.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/tap.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/tap.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export tap [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tap\": () => /* binding */ tap\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ \"./node_modules/rxjs/_esm5/internal/util/noop.js\");\n/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ \"./node_modules/rxjs/_esm5/internal/util/isFunction.js\");\n/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */\n\n\n\n\nfunction tap(nextOrObserver, error, complete) {\n    return function tapOperatorFunction(source) {\n        return source.lift(new DoOperator(nextOrObserver, error, complete));\n    };\n}\nvar DoOperator = /*@__PURE__*/ (function () {\n    function DoOperator(nextOrObserver, error, complete) {\n        this.nextOrObserver = nextOrObserver;\n        this.error = error;\n        this.complete = complete;\n    }\n    DoOperator.prototype.call = function (subscriber, source) {\n        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));\n    };\n    return DoOperator;\n}());\nvar TapSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(TapSubscriber, _super);\n    function TapSubscriber(destination, observerOrNext, error, complete) {\n        var _this = _super.call(this, destination) || this;\n        _this._tapNext = _util_noop__WEBPACK_IMPORTED_MODULE_1__.noop;\n        _this._tapError = _util_noop__WEBPACK_IMPORTED_MODULE_1__.noop;\n        _this._tapComplete = _util_noop__WEBPACK_IMPORTED_MODULE_1__.noop;\n        _this._tapError = error || _util_noop__WEBPACK_IMPORTED_MODULE_1__.noop;\n        _this._tapComplete = complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__.noop;\n        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(observerOrNext)) {\n            _this._context = _this;\n            _this._tapNext = observerOrNext;\n        }\n        else if (observerOrNext) {\n            _this._context = observerOrNext;\n            _this._tapNext = observerOrNext.next || _util_noop__WEBPACK_IMPORTED_MODULE_1__.noop;\n            _this._tapError = observerOrNext.error || _util_noop__WEBPACK_IMPORTED_MODULE_1__.noop;\n            _this._tapComplete = observerOrNext.complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__.noop;\n        }\n        return _this;\n    }\n    TapSubscriber.prototype._next = function (value) {\n        try {\n            this._tapNext.call(this._context, value);\n        }\n        catch (err) {\n            this.destination.error(err);\n            return;\n        }\n        this.destination.next(value);\n    };\n    TapSubscriber.prototype._error = function (err) {\n        try {\n            this._tapError.call(this._context, err);\n        }\n        catch (err) {\n            this.destination.error(err);\n            return;\n        }\n        this.destination.error(err);\n    };\n    TapSubscriber.prototype._complete = function () {\n        try {\n            this._tapComplete.call(this._context);\n        }\n        catch (err) {\n            this.destination.error(err);\n            return;\n        }\n        return this.destination.complete();\n    };\n    return TapSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__.Subscriber));\n//# sourceMappingURL=tap.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/operators/tap.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export scheduleArray [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scheduleArray\": () => /* binding */ scheduleArray\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */\n\n\nfunction scheduleArray(input, scheduler) {\n    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {\n        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();\n        var i = 0;\n        sub.add(scheduler.schedule(function () {\n            if (i === input.length) {\n                subscriber.complete();\n                return;\n            }\n            subscriber.next(input[i++]);\n            if (!subscriber.closed) {\n                sub.add(this.schedule());\n            }\n        }));\n        return sub;\n    });\n}\n//# sourceMappingURL=scheduleArray.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export scheduleIterable [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scheduleIterable\": () => /* binding */ scheduleIterable\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ \"./node_modules/rxjs/_esm5/internal/symbol/iterator.js\");\n/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */\n\n\n\nfunction scheduleIterable(input, scheduler) {\n    if (!input) {\n        throw new Error('Iterable cannot be null');\n    }\n    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {\n        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();\n        var iterator;\n        sub.add(function () {\n            if (iterator && typeof iterator.return === 'function') {\n                iterator.return();\n            }\n        });\n        sub.add(scheduler.schedule(function () {\n            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__.iterator]();\n            sub.add(scheduler.schedule(function () {\n                if (subscriber.closed) {\n                    return;\n                }\n                var value;\n                var done;\n                try {\n                    var result = iterator.next();\n                    value = result.value;\n                    done = result.done;\n                }\n                catch (err) {\n                    subscriber.error(err);\n                    return;\n                }\n                if (done) {\n                    subscriber.complete();\n                }\n                else {\n                    subscriber.next(value);\n                    this.schedule();\n                }\n            }));\n        }));\n        return sub;\n    });\n}\n//# sourceMappingURL=scheduleIterable.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export scheduleObservable [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scheduleObservable\": () => /* binding */ scheduleObservable\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ \"./node_modules/rxjs/_esm5/internal/symbol/observable.js\");\n/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */\n\n\n\nfunction scheduleObservable(input, scheduler) {\n    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {\n        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();\n        sub.add(scheduler.schedule(function () {\n            var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]();\n            sub.add(observable.subscribe({\n                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },\n                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },\n                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },\n            }));\n        }));\n        return sub;\n    });\n}\n//# sourceMappingURL=scheduleObservable.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export schedulePromise [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"schedulePromise\": () => /* binding */ schedulePromise\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */\n\n\nfunction schedulePromise(input, scheduler) {\n    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {\n        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();\n        sub.add(scheduler.schedule(function () {\n            return input.then(function (value) {\n                sub.add(scheduler.schedule(function () {\n                    subscriber.next(value);\n                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));\n                }));\n            }, function (err) {\n                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));\n            });\n        }));\n        return sub;\n    });\n}\n//# sourceMappingURL=schedulePromise.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export scheduled [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scheduled\": () => /* binding */ scheduled\n/* harmony export */ });\n/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduleObservable */ \"./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js\");\n/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedulePromise */ \"./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js\");\n/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheduleArray */ \"./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js\");\n/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduleIterable */ \"./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js\");\n/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isInteropObservable */ \"./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js\");\n/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isPromise */ \"./node_modules/rxjs/_esm5/internal/util/isPromise.js\");\n/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isArrayLike */ \"./node_modules/rxjs/_esm5/internal/util/isArrayLike.js\");\n/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isIterable */ \"./node_modules/rxjs/_esm5/internal/util/isIterable.js\");\n/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */\n\n\n\n\n\n\n\n\nfunction scheduled(input, scheduler) {\n    if (input != null) {\n        if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(input)) {\n            return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(input, scheduler);\n        }\n        else if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_2__.isPromise)(input)) {\n            return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_3__.schedulePromise)(input, scheduler);\n        }\n        else if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_4__.isArrayLike)(input)) {\n            return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_5__.scheduleArray)(input, scheduler);\n        }\n        else if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_6__.isIterable)(input) || typeof input === 'string') {\n            return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleIterable)(input, scheduler);\n        }\n    }\n    throw new TypeError((input !== null && typeof input || input) + ' is not observable');\n}\n//# sourceMappingURL=scheduled.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/Action.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/Action.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export Action [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Action\": () => /* binding */ Action\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */\n\n\nvar Action = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(Action, _super);\n    function Action(scheduler, work) {\n        return _super.call(this) || this;\n    }\n    Action.prototype.schedule = function (state, delay) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        return this;\n    };\n    return Action;\n}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription));\n\n//# sourceMappingURL=Action.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduler/Action.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export AsyncAction [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AsyncAction\": () => /* binding */ AsyncAction\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ \"./node_modules/rxjs/_esm5/internal/scheduler/Action.js\");\n/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */\n\n\nvar AsyncAction = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(AsyncAction, _super);\n    function AsyncAction(scheduler, work) {\n        var _this = _super.call(this, scheduler, work) || this;\n        _this.scheduler = scheduler;\n        _this.work = work;\n        _this.pending = false;\n        return _this;\n    }\n    AsyncAction.prototype.schedule = function (state, delay) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        if (this.closed) {\n            return this;\n        }\n        this.state = state;\n        var id = this.id;\n        var scheduler = this.scheduler;\n        if (id != null) {\n            this.id = this.recycleAsyncId(scheduler, id, delay);\n        }\n        this.pending = true;\n        this.delay = delay;\n        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);\n        return this;\n    };\n    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        return setInterval(scheduler.flush.bind(scheduler, this), delay);\n    };\n    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        if (delay !== null && this.delay === delay && this.pending === false) {\n            return id;\n        }\n        clearInterval(id);\n        return undefined;\n    };\n    AsyncAction.prototype.execute = function (state, delay) {\n        if (this.closed) {\n            return new Error('executing a cancelled action');\n        }\n        this.pending = false;\n        var error = this._execute(state, delay);\n        if (error) {\n            return error;\n        }\n        else if (this.pending === false && this.id != null) {\n            this.id = this.recycleAsyncId(this.scheduler, this.id, null);\n        }\n    };\n    AsyncAction.prototype._execute = function (state, delay) {\n        var errored = false;\n        var errorValue = undefined;\n        try {\n            this.work(state);\n        }\n        catch (e) {\n            errored = true;\n            errorValue = !!e && e || new Error(e);\n        }\n        if (errored) {\n            this.unsubscribe();\n            return errorValue;\n        }\n    };\n    AsyncAction.prototype._unsubscribe = function () {\n        var id = this.id;\n        var scheduler = this.scheduler;\n        var actions = scheduler.actions;\n        var index = actions.indexOf(this);\n        this.work = null;\n        this.state = null;\n        this.pending = false;\n        this.scheduler = null;\n        if (index !== -1) {\n            actions.splice(index, 1);\n        }\n        if (id != null) {\n            this.id = this.recycleAsyncId(scheduler, id, null);\n        }\n        this.delay = null;\n    };\n    return AsyncAction;\n}(_Action__WEBPACK_IMPORTED_MODULE_1__.Action));\n\n//# sourceMappingURL=AsyncAction.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export AsyncScheduler [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AsyncScheduler\": () => /* binding */ AsyncScheduler\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scheduler */ \"./node_modules/rxjs/_esm5/internal/Scheduler.js\");\n/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */\n\n\nvar AsyncScheduler = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(AsyncScheduler, _super);\n    function AsyncScheduler(SchedulerAction, now) {\n        if (now === void 0) {\n            now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__.Scheduler.now;\n        }\n        var _this = _super.call(this, SchedulerAction, function () {\n            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {\n                return AsyncScheduler.delegate.now();\n            }\n            else {\n                return now();\n            }\n        }) || this;\n        _this.actions = [];\n        _this.active = false;\n        _this.scheduled = undefined;\n        return _this;\n    }\n    AsyncScheduler.prototype.schedule = function (work, delay, state) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {\n            return AsyncScheduler.delegate.schedule(work, delay, state);\n        }\n        else {\n            return _super.prototype.schedule.call(this, work, delay, state);\n        }\n    };\n    AsyncScheduler.prototype.flush = function (action) {\n        var actions = this.actions;\n        if (this.active) {\n            actions.push(action);\n            return;\n        }\n        var error;\n        this.active = true;\n        do {\n            if (error = action.execute(action.state, action.delay)) {\n                break;\n            }\n        } while (action = actions.shift());\n        this.active = false;\n        if (error) {\n            while (action = actions.shift()) {\n                action.unsubscribe();\n            }\n            throw error;\n        }\n    };\n    return AsyncScheduler;\n}(_Scheduler__WEBPACK_IMPORTED_MODULE_1__.Scheduler));\n\n//# sourceMappingURL=AsyncScheduler.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export QueueAction [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QueueAction\": () => /* binding */ QueueAction\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ \"./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js\");\n/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */\n\n\nvar QueueAction = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(QueueAction, _super);\n    function QueueAction(scheduler, work) {\n        var _this = _super.call(this, scheduler, work) || this;\n        _this.scheduler = scheduler;\n        _this.work = work;\n        return _this;\n    }\n    QueueAction.prototype.schedule = function (state, delay) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        if (delay > 0) {\n            return _super.prototype.schedule.call(this, state, delay);\n        }\n        this.delay = delay;\n        this.state = state;\n        this.scheduler.flush(this);\n        return this;\n    };\n    QueueAction.prototype.execute = function (state, delay) {\n        return (delay > 0 || this.closed) ?\n            _super.prototype.execute.call(this, state, delay) :\n            this._execute(state, delay);\n    };\n    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {\n        if (delay === void 0) {\n            delay = 0;\n        }\n        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {\n            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);\n        }\n        return scheduler.flush(this);\n    };\n    return QueueAction;\n}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction));\n\n//# sourceMappingURL=QueueAction.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export QueueScheduler [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QueueScheduler\": () => /* binding */ QueueScheduler\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ \"./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js\");\n/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */\n\n\nvar QueueScheduler = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(QueueScheduler, _super);\n    function QueueScheduler() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    return QueueScheduler;\n}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__.AsyncScheduler));\n\n//# sourceMappingURL=QueueScheduler.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/queue.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export queue [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queue\": () => /* binding */ queue\n/* harmony export */ });\n/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueAction */ \"./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js\");\n/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueScheduler */ \"./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js\");\n/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */\n\n\nvar queue = /*@__PURE__*/ new _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__.QueueScheduler(_QueueAction__WEBPACK_IMPORTED_MODULE_1__.QueueAction);\n//# sourceMappingURL=queue.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/scheduler/queue.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/iterator.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export $$iterator [provided] [unused] [could be renamed] */
/*! export getSymbolIterator [provided] [unused] [could be renamed] */
/*! export iterator [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"iterator\": () => /* binding */ iterator\n/* harmony export */ });\n/* unused harmony exports getSymbolIterator, $$iterator */\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction getSymbolIterator() {\n    if (typeof Symbol !== 'function' || !Symbol.iterator) {\n        return '@@iterator';\n    }\n    return Symbol.iterator;\n}\nvar iterator = /*@__PURE__*/ getSymbolIterator();\nvar $$iterator = (/* unused pure expression or super */ null && (iterator));\n//# sourceMappingURL=iterator.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/observable.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export observable [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"observable\": () => /* binding */ observable\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();\n//# sourceMappingURL=observable.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/symbol/observable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export $$rxSubscriber [provided] [unused] [could be renamed] */
/*! export rxSubscriber [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rxSubscriber\": () => /* binding */ rxSubscriber\n/* harmony export */ });\n/* unused harmony export $$rxSubscriber */\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar rxSubscriber = /*@__PURE__*/ (function () {\n    return typeof Symbol === 'function'\n        ? /*@__PURE__*/ Symbol('rxSubscriber')\n        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();\n})();\nvar $$rxSubscriber = (/* unused pure expression or super */ null && (rxSubscriber));\n//# sourceMappingURL=rxSubscriber.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export ObjectUnsubscribedError [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ObjectUnsubscribedError\": () => /* binding */ ObjectUnsubscribedError\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {\n    function ObjectUnsubscribedErrorImpl() {\n        Error.call(this);\n        this.message = 'object unsubscribed';\n        this.name = 'ObjectUnsubscribedError';\n        return this;\n    }\n    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);\n    return ObjectUnsubscribedErrorImpl;\n})();\nvar ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;\n//# sourceMappingURL=ObjectUnsubscribedError.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export UnsubscriptionError [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnsubscriptionError\": () => /* binding */ UnsubscriptionError\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {\n    function UnsubscriptionErrorImpl(errors) {\n        Error.call(this);\n        this.message = errors ?\n            errors.length + \" errors occurred during unsubscription:\\n\" + errors.map(function (err, i) { return i + 1 + \") \" + err.toString(); }).join('\\n  ') : '';\n        this.name = 'UnsubscriptionError';\n        this.errors = errors;\n        return this;\n    }\n    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);\n    return UnsubscriptionErrorImpl;\n})();\nvar UnsubscriptionError = UnsubscriptionErrorImpl;\n//# sourceMappingURL=UnsubscriptionError.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/canReportError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/canReportError.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export canReportError [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canReportError\": () => /* binding */ canReportError\n/* harmony export */ });\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */\n\nfunction canReportError(observer) {\n    while (observer) {\n        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;\n        if (closed_1 || isStopped) {\n            return false;\n        }\n        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {\n            observer = destination;\n        }\n        else {\n            observer = null;\n        }\n    }\n    return true;\n}\n//# sourceMappingURL=canReportError.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/canReportError.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/hostReportError.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export hostReportError [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hostReportError\": () => /* binding */ hostReportError\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction hostReportError(err) {\n    setTimeout(function () { throw err; }, 0);\n}\n//# sourceMappingURL=hostReportError.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/hostReportError.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/identity.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/identity.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export identity [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"identity\": () => /* binding */ identity\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction identity(x) {\n    return x;\n}\n//# sourceMappingURL=identity.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/identity.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArray.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export isArray [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isArray\": () => /* binding */ isArray\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();\n//# sourceMappingURL=isArray.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/isArray.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArrayLike.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export isArrayLike [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isArrayLike\": () => /* binding */ isArrayLike\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });\n//# sourceMappingURL=isArrayLike.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isFunction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isFunction.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export isFunction [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isFunction\": () => /* binding */ isFunction\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction isFunction(x) {\n    return typeof x === 'function';\n}\n//# sourceMappingURL=isFunction.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/isFunction.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export isInteropObservable [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isInteropObservable\": () => /* binding */ isInteropObservable\n/* harmony export */ });\n/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ \"./node_modules/rxjs/_esm5/internal/symbol/observable.js\");\n/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */\n\nfunction isInteropObservable(input) {\n    return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__.observable] === 'function';\n}\n//# sourceMappingURL=isInteropObservable.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isIterable.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isIterable.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export isIterable [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isIterable\": () => /* binding */ isIterable\n/* harmony export */ });\n/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ \"./node_modules/rxjs/_esm5/internal/symbol/iterator.js\");\n/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */\n\nfunction isIterable(input) {\n    return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__.iterator] === 'function';\n}\n//# sourceMappingURL=isIterable.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/isIterable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObject.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export isObject [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isObject\": () => /* binding */ isObject\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction isObject(x) {\n    return x !== null && typeof x === 'object';\n}\n//# sourceMappingURL=isObject.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/isObject.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isPromise.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isPromise.js ***!
  \************************************************************/
/*! namespace exports */
/*! export isPromise [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isPromise\": () => /* binding */ isPromise\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction isPromise(value) {\n    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';\n}\n//# sourceMappingURL=isPromise.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/isPromise.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isScheduler.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export isScheduler [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isScheduler\": () => /* binding */ isScheduler\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction isScheduler(value) {\n    return value && typeof value.schedule === 'function';\n}\n//# sourceMappingURL=isScheduler.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/isScheduler.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/noop.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/noop.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export noop [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"noop\": () => /* binding */ noop\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction noop() { }\n//# sourceMappingURL=noop.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/noop.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/pipe.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/pipe.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export pipe [provided] [unused] [could be renamed] */
/*! export pipeFromArray [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pipeFromArray\": () => /* binding */ pipeFromArray\n/* harmony export */ });\n/* unused harmony export pipe */\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ \"./node_modules/rxjs/_esm5/internal/util/identity.js\");\n/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */\n\nfunction pipe() {\n    var fns = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        fns[_i] = arguments[_i];\n    }\n    return pipeFromArray(fns);\n}\nfunction pipeFromArray(fns) {\n    if (fns.length === 0) {\n        return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;\n    }\n    if (fns.length === 1) {\n        return fns[0];\n    }\n    return function piped(input) {\n        return fns.reduce(function (prev, fn) { return fn(prev); }, input);\n    };\n}\n//# sourceMappingURL=pipe.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/pipe.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeTo.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export subscribeTo [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subscribeTo\": () => /* binding */ subscribeTo\n/* harmony export */ });\n/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeToArray */ \"./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js\");\n/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribeToPromise */ \"./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js\");\n/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribeToIterable */ \"./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js\");\n/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeToObservable */ \"./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js\");\n/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/rxjs/_esm5/internal/util/isArrayLike.js\");\n/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isPromise */ \"./node_modules/rxjs/_esm5/internal/util/isPromise.js\");\n/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isObject */ \"./node_modules/rxjs/_esm5/internal/util/isObject.js\");\n/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../symbol/iterator */ \"./node_modules/rxjs/_esm5/internal/symbol/iterator.js\");\n/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ \"./node_modules/rxjs/_esm5/internal/symbol/observable.js\");\n/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */\n\n\n\n\n\n\n\n\n\nvar subscribeTo = function (result) {\n    if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__.observable] === 'function') {\n        return (0,_subscribeToObservable__WEBPACK_IMPORTED_MODULE_1__.subscribeToObservable)(result);\n    }\n    else if ((0,_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(result)) {\n        return (0,_subscribeToArray__WEBPACK_IMPORTED_MODULE_3__.subscribeToArray)(result);\n    }\n    else if ((0,_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(result)) {\n        return (0,_subscribeToPromise__WEBPACK_IMPORTED_MODULE_5__.subscribeToPromise)(result);\n    }\n    else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__.iterator] === 'function') {\n        return (0,_subscribeToIterable__WEBPACK_IMPORTED_MODULE_7__.subscribeToIterable)(result);\n    }\n    else {\n        var value = (0,_isObject__WEBPACK_IMPORTED_MODULE_8__.isObject)(result) ? 'an invalid object' : \"'\" + result + \"'\";\n        var msg = \"You provided \" + value + \" where a stream was expected.\"\n            + ' You can provide an Observable, Promise, Array, or Iterable.';\n        throw new TypeError(msg);\n    }\n};\n//# sourceMappingURL=subscribeTo.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/subscribeTo.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export subscribeToArray [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subscribeToArray\": () => /* binding */ subscribeToArray\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar subscribeToArray = function (array) {\n    return function (subscriber) {\n        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {\n            subscriber.next(array[i]);\n        }\n        subscriber.complete();\n    };\n};\n//# sourceMappingURL=subscribeToArray.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export subscribeToIterable [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subscribeToIterable\": () => /* binding */ subscribeToIterable\n/* harmony export */ });\n/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ \"./node_modules/rxjs/_esm5/internal/symbol/iterator.js\");\n/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */\n\nvar subscribeToIterable = function (iterable) {\n    return function (subscriber) {\n        var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__.iterator]();\n        do {\n            var item = iterator.next();\n            if (item.done) {\n                subscriber.complete();\n                break;\n            }\n            subscriber.next(item.value);\n            if (subscriber.closed) {\n                break;\n            }\n        } while (true);\n        if (typeof iterator.return === 'function') {\n            subscriber.add(function () {\n                if (iterator.return) {\n                    iterator.return();\n                }\n            });\n        }\n        return subscriber;\n    };\n};\n//# sourceMappingURL=subscribeToIterable.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export subscribeToObservable [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subscribeToObservable\": () => /* binding */ subscribeToObservable\n/* harmony export */ });\n/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ \"./node_modules/rxjs/_esm5/internal/symbol/observable.js\");\n/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */\n\nvar subscribeToObservable = function (obj) {\n    return function (subscriber) {\n        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__.observable]();\n        if (typeof obs.subscribe !== 'function') {\n            throw new TypeError('Provided object does not correctly implement Symbol.observable');\n        }\n        else {\n            return obs.subscribe(subscriber);\n        }\n    };\n};\n//# sourceMappingURL=subscribeToObservable.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export subscribeToPromise [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subscribeToPromise\": () => /* binding */ subscribeToPromise\n/* harmony export */ });\n/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostReportError */ \"./node_modules/rxjs/_esm5/internal/util/hostReportError.js\");\n/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */\n\nvar subscribeToPromise = function (promise) {\n    return function (subscriber) {\n        promise.then(function (value) {\n            if (!subscriber.closed) {\n                subscriber.next(value);\n                subscriber.complete();\n            }\n        }, function (err) { return subscriber.error(err); })\n            .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__.hostReportError);\n        return subscriber;\n    };\n};\n//# sourceMappingURL=subscribeToPromise.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export subscribeToResult [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subscribeToResult\": () => /* binding */ subscribeToResult\n/* harmony export */ });\n/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InnerSubscriber */ \"./node_modules/rxjs/_esm5/internal/InnerSubscriber.js\");\n/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeTo */ \"./node_modules/rxjs/_esm5/internal/util/subscribeTo.js\");\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */\n\n\n\nfunction subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {\n    if (innerSubscriber === void 0) {\n        innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__.InnerSubscriber(outerSubscriber, outerValue, outerIndex);\n    }\n    if (innerSubscriber.closed) {\n        return undefined;\n    }\n    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable) {\n        return result.subscribe(innerSubscriber);\n    }\n    return (0,_subscribeTo__WEBPACK_IMPORTED_MODULE_2__.subscribeTo)(result)(innerSubscriber);\n}\n//# sourceMappingURL=subscribeToResult.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export toSubscriber [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toSubscriber\": () => /* binding */ toSubscriber\n/* harmony export */ });\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ \"./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js\");\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ \"./node_modules/rxjs/_esm5/internal/Observer.js\");\n/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */\n\n\n\nfunction toSubscriber(nextOrObserver, error, complete) {\n    if (nextOrObserver) {\n        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {\n            return nextOrObserver;\n        }\n        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]) {\n            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]();\n        }\n    }\n    if (!nextOrObserver && !error && !complete) {\n        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(_Observer__WEBPACK_IMPORTED_MODULE_2__.empty);\n    }\n    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(nextOrObserver, error, complete);\n}\n//# sourceMappingURL=toSubscriber.js.map\n\n\n//# sourceURL=webpack://rx-state/./node_modules/rxjs/_esm5/internal/util/toSubscriber.js?");

/***/ }),

/***/ "./src/create-rx-state.ts":
/*!********************************!*\
  !*** ./src/create-rx-state.ts ***!
  \********************************/
/*! namespace exports */
/*! export createRxState [provided] [used] [could be renamed] */
/*! export toObservableState [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRxState\": () => /* binding */ createRxState\n/* harmony export */ });\n/* unused harmony export toObservableState */\n/* harmony import */ var _observables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observables */ \"./src/observables.ts\");\n/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operators */ \"./src/operators.ts\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/internal/observable/of.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/internal/observable/concat.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/internal/operators/shareReplay.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/internal/operators/pluck.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js\");\n/* harmony import */ var _manage_rx_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-rx-state */ \"./src/manage-rx-state.ts\");\n\n\n\n\n\n// used when createRxState is called without initialState\nvar DEFAULT_STATE = {};\n/**\n * An observable emitting the hard coded ACTION that is used to initialise a state upon calling rxState.create()\n */\nvar INIT_STATE_ACTION$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ type: '__INIT_STATE__' });\n/**\n * Creates a new OBSERVABLE identified by <name>, that reduces the <initialState> and subsequently generated states by passing it through the <reducer> function, every time an action is dispatched via rxState.dispatch.\n * @param name the name of the created rxState\n * @param reducer the reducer function responsible for creating the next state given an incoming state and action.\n * NOTE: It is worth noting that technically the reducer does not necessarily have to return the new state.\n * That is because the reducer is run against an immer draft object inside a produce call.\n * @param initialState the initial state, Must have at least one property. TODO? consider if that rule is useful or detrimental.\n */\nfunction createRxState(name, reducer, initialState) {\n    if (reducer === void 0) { reducer = function (state, action) { return state; }; }\n    if (initialState === void 0) { initialState = DEFAULT_STATE; }\n    // guards\n    if (typeof name !== 'string')\n        throw 'rxState:create:error: state name must be string';\n    if (typeof reducer != 'function')\n        throw 'rxState:create:error: reducer must be function';\n    // if it exists, returns the observable state registered with the provided name\n    if (_manage_rx_state__WEBPACK_IMPORTED_MODULE_2__.STATE_REGISTRY[name]) {\n        return _manage_rx_state__WEBPACK_IMPORTED_MODULE_2__.STATE_REGISTRY[name].state$;\n    }\n    // create an observable emitting reduced state from provided params\n    var _reducedState$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.concat)(INIT_STATE_ACTION$, _observables__WEBPACK_IMPORTED_MODULE_0__.ACTION_OBSERVABLE)\n        .pipe(\n    // reduce state with provided reducer given emitted action\n    (0,_operators__WEBPACK_IMPORTED_MODULE_1__.stateReducer)(initialState, reducer), \n    // ensures late subscribtions get the last emitted state immediately on subscribe\n    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1));\n    var state$ = toObservableState(_reducedState$);\n    _manage_rx_state__WEBPACK_IMPORTED_MODULE_2__.STATE_REGISTRY[name] = {\n        state$: state$,\n        reducer: reducer,\n        initialState: initialState\n    };\n    return state$;\n}\n/**\n *\n * @param obs the source observable to which we will append the path method\n */\nfunction toObservableState(obs) {\n    obs['path'] = _path.bind(obs);\n    return obs;\n}\n/**\n *\n * @param path string or array of strings describing the path to the desired value inside this rxState\n * ie: state$.path('path.to.value') or state$.path(['path', 'to', 'value'])\n */\nfunction _path(path) {\n    if (typeof path !== 'string' &&\n        !Array.isArray(path) &&\n        !!path)\n        throw 'state$.path:error: path must be a string or an array of strings';\n    var _path = Array.isArray(path)\n        ? path\n        : path.split('.');\n    return this.pipe(\n    // similar to lodash pluck\n    rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pluck.apply(void 0, _path), \n    // only changed state is emitted \n    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)());\n}\n\n\n//# sourceURL=webpack://rx-state/./src/create-rx-state.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! export dispatch [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export rxState [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rxState\": () => /* reexport safe */ _create_rx_state__WEBPACK_IMPORTED_MODULE_1__.createRxState,\n/* harmony export */   \"dispatch\": () => /* binding */ dispatch\n/* harmony export */ });\n/* harmony import */ var _observables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observables */ \"./src/observables.ts\");\n/* harmony import */ var _create_rx_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-rx-state */ \"./src/create-rx-state.ts\");\n\n// create a state observable if it does not already exists\n\n// dispatch and action\nvar dispatch = _observables__WEBPACK_IMPORTED_MODULE_0__.ACTION_SUBJECT.next.bind(_observables__WEBPACK_IMPORTED_MODULE_0__.ACTION_SUBJECT);\n\n\n//# sourceURL=webpack://rx-state/./src/index.ts?");

/***/ }),

/***/ "./src/manage-rx-state.ts":
/*!********************************!*\
  !*** ./src/manage-rx-state.ts ***!
  \********************************/
/*! namespace exports */
/*! export STATE_REGISTRY [provided] [used] [could be renamed] */
/*! export clearRegistry [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STATE_REGISTRY\": () => /* binding */ STATE_REGISTRY\n/* harmony export */ });\n/* unused harmony export clearRegistry */\n/**\n * STATE_REGISTRY stores created states, keyed by their state name\n */\nvar STATE_REGISTRY = {};\n/**\n * teardown state : delete all properties in that state. After teardownState, the state is always equal to an empty object = {}\n * This probably should not be used as it may throw errors in subsequent actions if the provided reducer does not account for missing properties.\n * to remove the state entirely use removeState\n * @param name : the name of the state to teardown\n */\n// export function teardownState(name: string):ObservableState<{}>{\n//     return {} as ObservableState<{}>\n// }\n/**\n * remove state : removes the state entirely from the registry of created states.\n * If you want to keep the state registered but empty use teardownState\n * @param name : the name of the state to remove\n */\n// export function removeState(name: string):void{}\n/**\n * resets the state to its initial state\n * @param name the name of the state to reset to its initial state\n */\n// export function resetState(name: string): ObservableState<any>{\n//     return {} as ObservableState<any>\n// }\nfunction clearRegistry() {\n    for (var key in STATE_REGISTRY) {\n        delete STATE_REGISTRY[key];\n    }\n}\n\n\n//# sourceURL=webpack://rx-state/./src/manage-rx-state.ts?");

/***/ }),

/***/ "./src/observables.ts":
/*!****************************!*\
  !*** ./src/observables.ts ***!
  \****************************/
/*! namespace exports */
/*! export ACTION_OBSERVABLE [provided] [used] [could be renamed] */
/*! export ACTION_SUBJECT [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTION_SUBJECT\": () => /* binding */ ACTION_SUBJECT,\n/* harmony export */   \"ACTION_OBSERVABLE\": () => /* binding */ ACTION_OBSERVABLE\n/* harmony export */ });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/internal/Subject.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/internal/operators/share.js\");\n/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operators */ \"./src/operators.ts\");\n\n\n\n/**\n * the SUBJECT used to dispatch actions :\n * rxState.dispatch is internally a call to ACTION_SUBJECT.next\n */\nvar ACTION_SUBJECT = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();\nvar ACTION_OBSERVABLE = ACTION_SUBJECT\n    .asObservable()\n    .pipe(_operators__WEBPACK_IMPORTED_MODULE_0__.validateAction, _operators__WEBPACK_IMPORTED_MODULE_0__.sideEffect, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.share)());\n\n\n//# sourceURL=webpack://rx-state/./src/observables.ts?");

/***/ }),

/***/ "./src/operators.ts":
/*!**************************!*\
  !*** ./src/operators.ts ***!
  \**************************/
/*! namespace exports */
/*! export sideEffect [provided] [used] [could be renamed] */
/*! export stateReducer [provided] [used] [could be renamed] */
/*! export validateAction [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateAction\": () => /* binding */ validateAction,\n/* harmony export */   \"stateReducer\": () => /* binding */ stateReducer,\n/* harmony export */   \"sideEffect\": () => /* binding */ sideEffect\n/* harmony export */ });\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/internal/operators/filter.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/internal/operators/scan.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/internal/operators/shareReplay.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/internal/operators/tap.js\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.js\");\n\n\n/**\n * validate incoming actions, only SideEffect and Action are emitted downstream\n * @param action$ : source Observable provided within the pipe operator\n */\nvar validateAction = function (action$) {\n    return action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (action) { return typeof action === 'function' || !!(action === null || action === void 0 ? void 0 : action.type); }));\n};\n/**\n * reduce the state given incoming actions.\n * @param initialState : the initial object state\n * @param reducer : the ReducerFunction, wrapped in immer.produce, the reducer generates the next immutable state\n */\nfunction stateReducer(initialState, reducer) {\n    if (!initialState)\n        throw 'operators:stateReducer: initial state is required';\n    if (!reducer || typeof reducer != 'function')\n        throw 'operators:stateReducer: reducer argument must be a function';\n    return function (action$) {\n        return action$\n            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.scan)(\n        // reduce state using immer to return the next Immutable state\n        function (state, action) { return (0,immer__WEBPACK_IMPORTED_MODULE_2__.default)(reducer)(state, action); }, \n        // with initial state\n        initialState), \n        // only changed state is emitted \n        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), \n        // ensures late subscribtions get the last emitted state immediately on subscribe\n        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));\n    };\n}\n/**\n * runs incomming SideEffects from source Observable of actions. Only Action are emitted downstream.\n * @param action$ : source Observable emitting a stream of Action & SideEffect\n */\nvar sideEffect = function (action$) {\n    var actionOnly$ = action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(function (action) {\n        typeof action === 'function' && action();\n    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (action) { return typeof action !== 'function'; }));\n    return actionOnly$;\n};\n\n\n//# sourceURL=webpack://rx-state/./src/operators.ts?");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! namespace exports */
/*! export __assign [provided] [unused] [could be renamed] */
/*! export __asyncDelegator [provided] [unused] [could be renamed] */
/*! export __asyncGenerator [provided] [unused] [could be renamed] */
/*! export __asyncValues [provided] [unused] [could be renamed] */
/*! export __await [provided] [unused] [could be renamed] */
/*! export __awaiter [provided] [unused] [could be renamed] */
/*! export __classPrivateFieldGet [provided] [unused] [could be renamed] */
/*! export __classPrivateFieldSet [provided] [unused] [could be renamed] */
/*! export __createBinding [provided] [unused] [could be renamed] */
/*! export __decorate [provided] [unused] [could be renamed] */
/*! export __exportStar [provided] [unused] [could be renamed] */
/*! export __extends [provided] [used] [could be renamed] */
/*! export __generator [provided] [unused] [could be renamed] */
/*! export __importDefault [provided] [unused] [could be renamed] */
/*! export __importStar [provided] [unused] [could be renamed] */
/*! export __makeTemplateObject [provided] [unused] [could be renamed] */
/*! export __metadata [provided] [unused] [could be renamed] */
/*! export __param [provided] [unused] [could be renamed] */
/*! export __read [provided] [unused] [could be renamed] */
/*! export __rest [provided] [unused] [could be renamed] */
/*! export __spread [provided] [unused] [could be renamed] */
/*! export __spreadArrays [provided] [unused] [could be renamed] */
/*! export __values [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__extends\": () => /* binding */ __extends\n/* harmony export */ });\n/* unused harmony exports __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __createBinding(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, privateMap) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to get private field on non-instance\");\r\n    }\r\n    return privateMap.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to set private field on non-instance\");\r\n    }\r\n    privateMap.set(receiver, value);\r\n    return value;\r\n}\r\n\n\n//# sourceURL=webpack://rx-state/./node_modules/tslib/tslib.es6.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});