(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function U_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F_={exports:{}},ic={},O_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wa=Symbol.for("react.element"),A1=Symbol.for("react.portal"),C1=Symbol.for("react.fragment"),b1=Symbol.for("react.strict_mode"),R1=Symbol.for("react.profiler"),P1=Symbol.for("react.provider"),D1=Symbol.for("react.context"),L1=Symbol.for("react.forward_ref"),I1=Symbol.for("react.suspense"),N1=Symbol.for("react.memo"),U1=Symbol.for("react.lazy"),l0=Symbol.iterator;function F1(t){return t===null||typeof t!="object"?null:(t=l0&&t[l0]||t["@@iterator"],typeof t=="function"?t:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B_=Object.assign,V_={};function wo(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||k_}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z_(){}z_.prototype=wo.prototype;function fp(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||k_}var dp=fp.prototype=new z_;dp.constructor=fp;B_(dp,wo.prototype);dp.isPureReactComponent=!0;var u0=Array.isArray,H_=Object.prototype.hasOwnProperty,hp={current:null},G_={key:!0,ref:!0,__self:!0,__source:!0};function W_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H_.call(e,i)&&!G_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wa,type:t,key:s,ref:o,props:r,_owner:hp.current}}function O1(t,e){return{$$typeof:Wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wa}function k1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var c0=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k1(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wa:case A1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Lc(o,0):i,u0(r)?(n="",t!=null&&(n=t.replace(c0,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&(pp(r)&&(r=O1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(c0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",u0(t))for(var a=0;a<t.length;a++){s=t[a];var u=i+Lc(s,a);o+=Zl(s,e,n,u,r)}else if(u=F1(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=i+Lc(s,a++),o+=Zl(s,e,n,u,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sl(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},Ql={transition:null},V1={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Ql,ReactCurrentOwner:hp};function j_(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:sl,forEach:function(t,e,n){sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sl(t,function(){e++}),e},toArray:function(t){return sl(t,function(e){return e})||[]},only:function(t){if(!pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=wo;We.Fragment=C1;We.Profiler=R1;We.PureComponent=fp;We.StrictMode=b1;We.Suspense=I1;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1;We.act=j_;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=B_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)H_.call(e,u)&&!G_.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Wa,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:D1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P1,_context:t},t.Consumer=t};We.createElement=W_;We.createFactory=function(t){var e=W_.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:L1,render:t}};We.isValidElement=pp;We.lazy=function(t){return{$$typeof:U1,_payload:{_status:-1,_result:t},_init:B1}};We.memo=function(t,e){return{$$typeof:N1,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Ql.transition;Ql.transition={};try{t()}finally{Ql.transition=e}};We.unstable_act=j_;We.useCallback=function(t,e){return vn.current.useCallback(t,e)};We.useContext=function(t){return vn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};We.useEffect=function(t,e){return vn.current.useEffect(t,e)};We.useId=function(){return vn.current.useId()};We.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return vn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};We.useRef=function(t){return vn.current.useRef(t)};We.useState=function(t){return vn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return vn.current.useTransition()};We.version="18.3.1";O_.exports=We;var F=O_.exports;const X_=U_(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=F,H1=Symbol.for("react.element"),G1=Symbol.for("react.fragment"),W1=Object.prototype.hasOwnProperty,j1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X1={key:!0,ref:!0,__self:!0,__source:!0};function q_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)W1.call(e,i)&&!X1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:H1,type:t,key:s,ref:o,props:r,_owner:j1.current}}ic.Fragment=G1;ic.jsx=q_;ic.jsxs=q_;F_.exports=ic;var N=F_.exports,td={},Y_={exports:{}},kn={},$_={exports:{}},K_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,O){var V=P.length;P.push(O);e:for(;0<V;){var q=V-1>>>1,te=P[q];if(0<r(te,O))P[q]=O,P[V]=te,V=q;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var O=P[0],V=P.pop();if(V!==O){P[0]=V;e:for(var q=0,te=P.length,re=te>>>1;q<re;){var ue=2*(q+1)-1,xe=P[ue],K=ue+1,J=P[K];if(0>r(xe,V))K<te&&0>r(J,xe)?(P[q]=J,P[K]=V,q=K):(P[q]=xe,P[ue]=V,q=ue);else if(K<te&&0>r(J,V))P[q]=J,P[K]=V,q=K;else break e}}return O}function r(P,O){var V=P.sortIndex-O.sortIndex;return V!==0?V:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],f=1,d=null,h=3,g=!1,x=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,l=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=P)i(c),O.sortIndex=O.expirationTime,e(u,O);else break;O=n(c)}}function E(P){if(M=!1,m(P),!x)if(n(u)!==null)x=!0,H(w);else{var O=n(c);O!==null&&B(E,O.startTime-P)}}function w(P,O){x=!1,M&&(M=!1,l(v),v=-1),g=!0;var V=h;try{for(m(O),d=n(u);d!==null&&(!(d.expirationTime>O)||P&&!T());){var q=d.callback;if(typeof q=="function"){d.callback=null,h=d.priorityLevel;var te=q(d.expirationTime<=O);O=t.unstable_now(),typeof te=="function"?d.callback=te:d===n(u)&&i(u),m(O)}else i(u);d=n(u)}if(d!==null)var re=!0;else{var ue=n(c);ue!==null&&B(E,ue.startTime-O),re=!1}return re}finally{d=null,h=V,g=!1}}var C=!1,b=null,v=-1,_=5,S=-1;function T(){return!(t.unstable_now()-S<_)}function I(){if(b!==null){var P=t.unstable_now();S=P;var O=!0;try{O=b(!0,P)}finally{O?L():(C=!1,b=null)}}else C=!1}var L;if(typeof p=="function")L=function(){p(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,k=U.port2;U.port1.onmessage=I,L=function(){k.postMessage(null)}}else L=function(){y(I,0)};function H(P){b=P,C||(C=!0,L())}function B(P,O){v=y(function(){P(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,H(w))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var V=h;h=O;try{return P()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=h;h=P;try{return O()}finally{h=V}},t.unstable_scheduleCallback=function(P,O,V){var q=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?q+V:q):V=q,P){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=V+te,P={id:f++,callback:O,priorityLevel:P,startTime:V,expirationTime:te,sortIndex:-1},V>q?(P.sortIndex=V,e(c,P),n(u)===null&&P===n(c)&&(M?(l(v),v=-1):M=!0,B(E,V-q))):(P.sortIndex=te,e(u,P),x||g||(x=!0,H(w))),P},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(P){var O=h;return function(){var V=h;h=O;try{return P.apply(this,arguments)}finally{h=V}}}})(K_);$_.exports=K_;var q1=$_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1=F,On=q1;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z_=new Set,_a={};function gs(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(_a[t]=e,t=0;t<e.length;t++)Z_.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,$1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f0={},d0={};function K1(t){return nd.call(d0,t)?!0:nd.call(f0,t)?!1:$1.test(t)?d0[t]=!0:(f0[t]=!0,!1)}function Z1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q1(t,e,n,i){if(e===null||typeof e>"u"||Z1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new _n(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new _n(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new _n(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new _n(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new _n(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new _n(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new _n(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new _n(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new _n(t,5,!1,t.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mp,gp);Qt[e]=new _n(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mp,gp);Qt[e]=new _n(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mp,gp);Qt[e]=new _n(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new _n(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new _n(t,1,!1,t.toLowerCase(),null,!0,!0)});function vp(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q1(e,n,r,i)&&(n=null),i||r===null?K1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),_p=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),Q_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),rd=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),xp=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),ey=Symbol.for("react.offscreen"),h0=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=h0&&t[h0]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Ic;function Zo(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Nc=!1;function Uc(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var u=`
`+r[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function J1(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=Uc(t.type,!1),t;case 11:return t=Uc(t.type.render,!1),t;case 1:return t=Uc(t.type,!0),t;default:return""}}function od(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case Fs:return"Portal";case id:return"Profiler";case _p:return"StrictMode";case rd:return"Suspense";case sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J_:return(t.displayName||"Context")+".Consumer";case Q_:return(t._context.displayName||"Context")+".Provider";case yp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xp:return e=t.displayName||null,e!==null?e:od(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return od(t(e))}catch{}}return null}function eE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(e);case 8:return e===_p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ty(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tE(t){var e=ty(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=tE(t))}function ny(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ty(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function p0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iy(t,e){e=e.checked,e!=null&&vp(t,"checked",e,!1)}function ld(t,e){iy(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&ud(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function m0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ud(t,e,n){(e!=="number"||Mu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function to(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function g0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Qo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function ry(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function v0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ll,oy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nE=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){nE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function ay(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function ly(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ay(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iE=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dd(t,e){if(e){if(iE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=null;function Sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var md=null,no=null,io=null;function _0(t){if(t=qa(t)){if(typeof md!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=lc(e),md(t.stateNode,t.type,e))}}function uy(t){no?io?io.push(t):io=[t]:no=t}function cy(){if(no){var t=no,e=io;if(io=no=null,_0(t),e)for(t=0;t<e.length;t++)_0(e[t])}}function fy(t,e){return t(e)}function dy(){}var Fc=!1;function hy(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return fy(t,e,n)}finally{Fc=!1,(no!==null||io!==null)&&(dy(),cy())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var i=lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var gd=!1;if($i)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){gd=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{gd=!1}function rE(t,e,n,i,r,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var sa=!1,Eu=null,Tu=!1,vd=null,sE={onError:function(t){sa=!0,Eu=t}};function oE(t,e,n,i,r,s,o,a,u){sa=!1,Eu=null,rE.apply(sE,arguments)}function aE(t,e,n,i,r,s,o,a,u){if(oE.apply(this,arguments),sa){if(sa){var c=Eu;sa=!1,Eu=null}else throw Error(oe(198));Tu||(Tu=!0,vd=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function py(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y0(t){if(vs(t)!==t)throw Error(oe(188))}function lE(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return y0(r),t;if(s===i)return y0(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function my(t){return t=lE(t),t!==null?gy(t):null}function gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gy(t);if(e!==null)return e;t=t.sibling}return null}var vy=On.unstable_scheduleCallback,x0=On.unstable_cancelCallback,uE=On.unstable_shouldYield,cE=On.unstable_requestPaint,Pt=On.unstable_now,fE=On.unstable_getCurrentPriorityLevel,Mp=On.unstable_ImmediatePriority,_y=On.unstable_UserBlockingPriority,wu=On.unstable_NormalPriority,dE=On.unstable_LowPriority,yy=On.unstable_IdlePriority,rc=null,Ei=null;function hE(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(rc,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:gE,pE=Math.log,mE=Math.LN2;function gE(t){return t>>>=0,t===0?32:31-(pE(t)/mE|0)|0}var ul=64,cl=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Au(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Jo(a):(s&=o,s!==0&&(i=Jo(s)))}else o=n&~r,o!==0?i=Jo(o):s!==0&&(i=Jo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function vE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _E(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,u=r[o];u===-1?(!(a&n)||a&i)&&(r[o]=vE(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xy(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function yE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function Sy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var My,Tp,Ey,Ty,wy,yd=!1,fl=[],xr=null,Sr=null,Mr=null,Sa=new Map,Ma=new Map,hr=[],xE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function S0(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qa(e),e!==null&&Tp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function SE(t,e,n,i,r){switch(e){case"focusin":return xr=Oo(xr,t,e,n,i,r),!0;case"dragenter":return Sr=Oo(Sr,t,e,n,i,r),!0;case"mouseover":return Mr=Oo(Mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Sa.set(s,Oo(Sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ma.set(s,Oo(Ma.get(s)||null,t,e,n,i,r)),!0}return!1}function Ay(t){var e=es(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=py(n),e!==null){t.blockedOn=e,wy(t.priority,function(){Ey(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);pd=i,n.target.dispatchEvent(i),pd=null}else return e=qa(n),e!==null&&Tp(e),t.blockedOn=n,!1;e.shift()}return!0}function M0(t,e,n){Jl(t)&&n.delete(e)}function ME(){yd=!1,xr!==null&&Jl(xr)&&(xr=null),Sr!==null&&Jl(Sr)&&(Sr=null),Mr!==null&&Jl(Mr)&&(Mr=null),Sa.forEach(M0),Ma.forEach(M0)}function ko(t,e){t.blockedOn===e&&(t.blockedOn=null,yd||(yd=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,ME)))}function Ea(t){function e(r){return ko(r,t)}if(0<fl.length){ko(fl[0],t);for(var n=1;n<fl.length;n++){var i=fl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(xr!==null&&ko(xr,t),Sr!==null&&ko(Sr,t),Mr!==null&&ko(Mr,t),Sa.forEach(e),Ma.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)Ay(n),n.blockedOn===null&&hr.shift()}var ro=nr.ReactCurrentBatchConfig,Cu=!0;function EE(t,e,n,i){var r=ot,s=ro.transition;ro.transition=null;try{ot=1,wp(t,e,n,i)}finally{ot=r,ro.transition=s}}function TE(t,e,n,i){var r=ot,s=ro.transition;ro.transition=null;try{ot=4,wp(t,e,n,i)}finally{ot=r,ro.transition=s}}function wp(t,e,n,i){if(Cu){var r=xd(t,e,n,i);if(r===null)qc(t,e,i,bu,n),S0(t,i);else if(SE(r,t,e,n,i))i.stopPropagation();else if(S0(t,i),e&4&&-1<xE.indexOf(t)){for(;r!==null;){var s=qa(r);if(s!==null&&My(s),s=xd(t,e,n,i),s===null&&qc(t,e,i,bu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var bu=null;function xd(t,e,n,i){if(bu=null,t=Sp(i),t=es(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=py(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bu=t,null}function Cy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fE()){case Mp:return 1;case _y:return 4;case wu:case dE:return 16;case yy:return 536870912;default:return 16}default:return 16}}var gr=null,Ap=null,eu=null;function by(){if(eu)return eu;var t,e=Ap,n=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return eu=r.slice(t,1<i?1-i:void 0)}function tu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function E0(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:E0,this.isPropagationStopped=E0,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cp=Bn(Ao),Xa=Mt({},Ao,{view:0,detail:0}),wE=Bn(Xa),kc,Bc,Bo,sc=Mt({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(kc=t.screenX-Bo.screenX,Bc=t.screenY-Bo.screenY):Bc=kc=0,Bo=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),T0=Bn(sc),AE=Mt({},sc,{dataTransfer:0}),CE=Bn(AE),bE=Mt({},Xa,{relatedTarget:0}),Vc=Bn(bE),RE=Mt({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),PE=Bn(RE),DE=Mt({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LE=Bn(DE),IE=Mt({},Ao,{data:0}),w0=Bn(IE),NE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FE[t])?!!e[t]:!1}function bp(){return OE}var kE=Mt({},Xa,{key:function(t){if(t.key){var e=NE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bp,charCode:function(t){return t.type==="keypress"?tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BE=Bn(kE),VE=Mt({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),A0=Bn(VE),zE=Mt({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bp}),HE=Bn(zE),GE=Mt({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),WE=Bn(GE),jE=Mt({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XE=Bn(jE),qE=[9,13,27,32],Rp=$i&&"CompositionEvent"in window,oa=null;$i&&"documentMode"in document&&(oa=document.documentMode);var YE=$i&&"TextEvent"in window&&!oa,Ry=$i&&(!Rp||oa&&8<oa&&11>=oa),C0=" ",b0=!1;function Py(t,e){switch(t){case"keyup":return qE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function $E(t,e){switch(t){case"compositionend":return Dy(e);case"keypress":return e.which!==32?null:(b0=!0,C0);case"textInput":return t=e.data,t===C0&&b0?null:t;default:return null}}function KE(t,e){if(ks)return t==="compositionend"||!Rp&&Py(t,e)?(t=by(),eu=Ap=gr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ry&&e.locale!=="ko"?null:e.data;default:return null}}var ZE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZE[t.type]:e==="textarea"}function Ly(t,e,n,i){uy(i),e=Ru(e,"onChange"),0<e.length&&(n=new Cp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,Ta=null;function QE(t){Gy(t,0)}function oc(t){var e=zs(t);if(ny(e))return t}function JE(t,e){if(t==="change")return e}var Iy=!1;if($i){var zc;if($i){var Hc="oninput"in document;if(!Hc){var P0=document.createElement("div");P0.setAttribute("oninput","return;"),Hc=typeof P0.oninput=="function"}zc=Hc}else zc=!1;Iy=zc&&(!document.documentMode||9<document.documentMode)}function D0(){aa&&(aa.detachEvent("onpropertychange",Ny),Ta=aa=null)}function Ny(t){if(t.propertyName==="value"&&oc(Ta)){var e=[];Ly(e,Ta,t,Sp(t)),hy(QE,e)}}function eT(t,e,n){t==="focusin"?(D0(),aa=e,Ta=n,aa.attachEvent("onpropertychange",Ny)):t==="focusout"&&D0()}function tT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Ta)}function nT(t,e){if(t==="click")return oc(e)}function iT(t,e){if(t==="input"||t==="change")return oc(e)}function rT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:rT;function wa(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nd.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function L0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function I0(t,e){var n=L0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=L0(n)}}function Uy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fy(){for(var t=window,e=Mu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Mu(t.document)}return e}function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sT(t){var e=Fy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uy(n.ownerDocument.documentElement,n)){if(i!==null&&Pp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=I0(n,s);var o=I0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oT=$i&&"documentMode"in document&&11>=document.documentMode,Bs=null,Sd=null,la=null,Md=!1;function N0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Md||Bs==null||Bs!==Mu(i)||(i=Bs,"selectionStart"in i&&Pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&wa(la,i)||(la=i,i=Ru(Sd,"onSelect"),0<i.length&&(e=new Cp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Bs)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Gc={},Oy={};$i&&(Oy=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function ac(t){if(Gc[t])return Gc[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Oy)return Gc[t]=e[n];return t}var ky=ac("animationend"),By=ac("animationiteration"),Vy=ac("animationstart"),zy=ac("transitionend"),Hy=new Map,U0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){Hy.set(t,e),gs(e,[t])}for(var Wc=0;Wc<U0.length;Wc++){var jc=U0[Wc],aT=jc.toLowerCase(),lT=jc[0].toUpperCase()+jc.slice(1);Ir(aT,"on"+lT)}Ir(ky,"onAnimationEnd");Ir(By,"onAnimationIteration");Ir(Vy,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(zy,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function F0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,aE(i,e,void 0,t),t.currentTarget=null}function Gy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&r.isPropagationStopped())break e;F0(r,a,c),s=u}else for(o=0;o<i.length;o++){if(a=i[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&r.isPropagationStopped())break e;F0(r,a,c),s=u}}}if(Tu)throw t=vd,Tu=!1,vd=null,t}function mt(t,e){var n=e[Cd];n===void 0&&(n=e[Cd]=new Set);var i=t+"__bubble";n.has(i)||(Wy(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),Wy(n,t,i,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[pl]){t[pl]=!0,Z_.forEach(function(n){n!=="selectionchange"&&(uT.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,Xc("selectionchange",!1,e))}}function Wy(t,e,n,i){switch(Cy(e)){case 1:var r=EE;break;case 4:r=TE;break;default:r=wp}n=r.bind(null,e,n,t),r=void 0,!gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(u=o.tag,u===5||u===6){i=s=o;continue e}a=a.parentNode}}i=i.return}hy(function(){var c=s,f=Sp(n),d=[];e:{var h=Hy.get(t);if(h!==void 0){var g=Cp,x=t;switch(t){case"keypress":if(tu(n)===0)break e;case"keydown":case"keyup":g=BE;break;case"focusin":x="focus",g=Vc;break;case"focusout":x="blur",g=Vc;break;case"beforeblur":case"afterblur":g=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=T0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=CE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=HE;break;case ky:case By:case Vy:g=PE;break;case zy:g=WE;break;case"scroll":g=wE;break;case"wheel":g=XE;break;case"copy":case"cut":case"paste":g=LE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=A0}var M=(e&4)!==0,y=!M&&t==="scroll",l=M?h!==null?h+"Capture":null:h;M=[];for(var p=c,m;p!==null;){m=p;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,l!==null&&(E=xa(p,l),E!=null&&M.push(Ca(p,E,m)))),y)break;p=p.return}0<M.length&&(h=new g(h,x,null,n,f),d.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==pd&&(x=n.relatedTarget||n.fromElement)&&(es(x)||x[Ki]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?es(x):null,x!==null&&(y=vs(x),x!==y||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(M=T0,E="onMouseLeave",l="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(M=A0,E="onPointerLeave",l="onPointerEnter",p="pointer"),y=g==null?h:zs(g),m=x==null?h:zs(x),h=new M(E,p+"leave",g,n,f),h.target=y,h.relatedTarget=m,E=null,es(f)===c&&(M=new M(l,p+"enter",x,n,f),M.target=m,M.relatedTarget=y,E=M),y=E,g&&x)t:{for(M=g,l=x,p=0,m=M;m;m=ys(m))p++;for(m=0,E=l;E;E=ys(E))m++;for(;0<p-m;)M=ys(M),p--;for(;0<m-p;)l=ys(l),m--;for(;p--;){if(M===l||l!==null&&M===l.alternate)break t;M=ys(M),l=ys(l)}M=null}else M=null;g!==null&&O0(d,h,g,M,!1),x!==null&&y!==null&&O0(d,y,x,M,!0)}}e:{if(h=c?zs(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var w=JE;else if(R0(h))if(Iy)w=iT;else{w=tT;var C=eT}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=nT);if(w&&(w=w(t,c))){Ly(d,w,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ud(h,"number",h.value)}switch(C=c?zs(c):window,t){case"focusin":(R0(C)||C.contentEditable==="true")&&(Bs=C,Sd=c,la=null);break;case"focusout":la=Sd=Bs=null;break;case"mousedown":Md=!0;break;case"contextmenu":case"mouseup":case"dragend":Md=!1,N0(d,n,f);break;case"selectionchange":if(oT)break;case"keydown":case"keyup":N0(d,n,f)}var b;if(Rp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ks?Py(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Ry&&n.locale!=="ko"&&(ks||v!=="onCompositionStart"?v==="onCompositionEnd"&&ks&&(b=by()):(gr=f,Ap="value"in gr?gr.value:gr.textContent,ks=!0)),C=Ru(c,v),0<C.length&&(v=new w0(v,t,null,n,f),d.push({event:v,listeners:C}),b?v.data=b:(b=Dy(n),b!==null&&(v.data=b)))),(b=YE?$E(t,n):KE(t,n))&&(c=Ru(c,"onBeforeInput"),0<c.length&&(f=new w0("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=b))}Gy(d,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ru(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xa(t,n),s!=null&&i.unshift(Ca(t,s,r)),s=xa(t,e),s!=null&&i.push(Ca(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function O0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===i)break;a.tag===5&&c!==null&&(a=c,r?(u=xa(n,s),u!=null&&o.unshift(Ca(n,u,a))):r||(u=xa(n,s),u!=null&&o.push(Ca(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function k0(t){return(typeof t=="string"?t:""+t).replace(cT,`
`).replace(fT,"")}function ml(t,e,n){if(e=k0(e),k0(t)!==e&&n)throw Error(oe(425))}function Pu(){}var Ed=null,Td=null;function wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,dT=typeof clearTimeout=="function"?clearTimeout:void 0,B0=typeof Promise=="function"?Promise:void 0,hT=typeof queueMicrotask=="function"?queueMicrotask:typeof B0<"u"?function(t){return B0.resolve(null).then(t).catch(pT)}:Ad;function pT(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ea(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function V0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Co=Math.random().toString(36).slice(2),xi="__reactFiber$"+Co,ba="__reactProps$"+Co,Ki="__reactContainer$"+Co,Cd="__reactEvents$"+Co,mT="__reactListeners$"+Co,gT="__reactHandles$"+Co;function es(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=V0(t);t!==null;){if(n=t[xi])return n;t=V0(t)}return e}t=n,n=t.parentNode}return null}function qa(t){return t=t[xi]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function lc(t){return t[ba]||null}var bd=[],Hs=-1;function Nr(t){return{current:t}}function vt(t){0>Hs||(t.current=bd[Hs],bd[Hs]=null,Hs--)}function ht(t,e){Hs++,bd[Hs]=t.current,t.current=e}var Rr={},ln=Nr(Rr),Tn=Nr(!1),cs=Rr;function fo(t,e){var n=t.type.contextTypes;if(!n)return Rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function wn(t){return t=t.childContextTypes,t!=null}function Du(){vt(Tn),vt(ln)}function z0(t,e,n){if(ln.current!==Rr)throw Error(oe(168));ht(ln,e),ht(Tn,n)}function jy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,eE(t)||"Unknown",r));return Mt({},n,i)}function Lu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,cs=ln.current,ht(ln,t),ht(Tn,Tn.current),!0}function H0(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=jy(t,e,cs),i.__reactInternalMemoizedMergedChildContext=t,vt(Tn),vt(ln),ht(ln,t)):vt(Tn),ht(Tn,n)}var zi=null,uc=!1,$c=!1;function Xy(t){zi===null?zi=[t]:zi.push(t)}function vT(t){uc=!0,Xy(t)}function Ur(){if(!$c&&zi!==null){$c=!0;var t=0,e=ot;try{var n=zi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,uc=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),vy(Mp,Ur),r}finally{ot=e,$c=!1}}return null}var Gs=[],Ws=0,Iu=null,Nu=0,Wn=[],jn=0,fs=null,Gi=1,Wi="";function qr(t,e){Gs[Ws++]=Nu,Gs[Ws++]=Iu,Iu=t,Nu=e}function qy(t,e,n){Wn[jn++]=Gi,Wn[jn++]=Wi,Wn[jn++]=fs,fs=t;var i=Gi;t=Wi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-ci(e)+r|n<<r|i,Wi=s+t}else Gi=1<<s|n<<r|i,Wi=t}function Dp(t){t.return!==null&&(qr(t,1),qy(t,1,0))}function Lp(t){for(;t===Iu;)Iu=Gs[--Ws],Gs[Ws]=null,Nu=Gs[--Ws],Gs[Ws]=null;for(;t===fs;)fs=Wn[--jn],Wn[jn]=null,Wi=Wn[--jn],Wn[jn]=null,Gi=Wn[--jn],Wn[jn]=null}var Fn=null,Un=null,_t=!1,ai=null;function Yy(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function G0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,Un=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:Gi,overflow:Wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,Un=null,!0):!1;default:return!1}}function Rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(_t){var e=Un;if(e){var n=e;if(!G0(t,e)){if(Rd(t))throw Error(oe(418));e=Er(n.nextSibling);var i=Fn;e&&G0(t,e)?Yy(i,n):(t.flags=t.flags&-4097|2,_t=!1,Fn=t)}}else{if(Rd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,_t=!1,Fn=t}}}function W0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function gl(t){if(t!==Fn)return!1;if(!_t)return W0(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wd(t.type,t.memoizedProps)),e&&(e=Un)){if(Rd(t))throw $y(),Error(oe(418));for(;e;)Yy(t,e),e=Er(e.nextSibling)}if(W0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=Fn?Er(t.stateNode.nextSibling):null;return!0}function $y(){for(var t=Un;t;)t=Er(t.nextSibling)}function ho(){Un=Fn=null,_t=!1}function Ip(t){ai===null?ai=[t]:ai.push(t)}var _T=nr.ReactCurrentBatchConfig;function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function j0(t){var e=t._init;return e(t._payload)}function Ky(t){function e(l,p){if(t){var m=l.deletions;m===null?(l.deletions=[p],l.flags|=16):m.push(p)}}function n(l,p){if(!t)return null;for(;p!==null;)e(l,p),p=p.sibling;return null}function i(l,p){for(l=new Map;p!==null;)p.key!==null?l.set(p.key,p):l.set(p.index,p),p=p.sibling;return l}function r(l,p){return l=Cr(l,p),l.index=0,l.sibling=null,l}function s(l,p,m){return l.index=m,t?(m=l.alternate,m!==null?(m=m.index,m<p?(l.flags|=2,p):m):(l.flags|=2,p)):(l.flags|=1048576,p)}function o(l){return t&&l.alternate===null&&(l.flags|=2),l}function a(l,p,m,E){return p===null||p.tag!==6?(p=nf(m,l.mode,E),p.return=l,p):(p=r(p,m),p.return=l,p)}function u(l,p,m,E){var w=m.type;return w===Os?f(l,p,m.props.children,E,m.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===fr&&j0(w)===p.type)?(E=r(p,m.props),E.ref=Vo(l,p,m),E.return=l,E):(E=lu(m.type,m.key,m.props,null,l.mode,E),E.ref=Vo(l,p,m),E.return=l,E)}function c(l,p,m,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=rf(m,l.mode,E),p.return=l,p):(p=r(p,m.children||[]),p.return=l,p)}function f(l,p,m,E,w){return p===null||p.tag!==7?(p=ls(m,l.mode,E,w),p.return=l,p):(p=r(p,m),p.return=l,p)}function d(l,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=nf(""+p,l.mode,m),p.return=l,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ol:return m=lu(p.type,p.key,p.props,null,l.mode,m),m.ref=Vo(l,null,p),m.return=l,m;case Fs:return p=rf(p,l.mode,m),p.return=l,p;case fr:var E=p._init;return d(l,E(p._payload),m)}if(Qo(p)||Uo(p))return p=ls(p,l.mode,m,null),p.return=l,p;vl(l,p)}return null}function h(l,p,m,E){var w=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:a(l,p,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ol:return m.key===w?u(l,p,m,E):null;case Fs:return m.key===w?c(l,p,m,E):null;case fr:return w=m._init,h(l,p,w(m._payload),E)}if(Qo(m)||Uo(m))return w!==null?null:f(l,p,m,E,null);vl(l,m)}return null}function g(l,p,m,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return l=l.get(m)||null,a(p,l,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ol:return l=l.get(E.key===null?m:E.key)||null,u(p,l,E,w);case Fs:return l=l.get(E.key===null?m:E.key)||null,c(p,l,E,w);case fr:var C=E._init;return g(l,p,m,C(E._payload),w)}if(Qo(E)||Uo(E))return l=l.get(m)||null,f(p,l,E,w,null);vl(p,E)}return null}function x(l,p,m,E){for(var w=null,C=null,b=p,v=p=0,_=null;b!==null&&v<m.length;v++){b.index>v?(_=b,b=null):_=b.sibling;var S=h(l,b,m[v],E);if(S===null){b===null&&(b=_);break}t&&b&&S.alternate===null&&e(l,b),p=s(S,p,v),C===null?w=S:C.sibling=S,C=S,b=_}if(v===m.length)return n(l,b),_t&&qr(l,v),w;if(b===null){for(;v<m.length;v++)b=d(l,m[v],E),b!==null&&(p=s(b,p,v),C===null?w=b:C.sibling=b,C=b);return _t&&qr(l,v),w}for(b=i(l,b);v<m.length;v++)_=g(b,l,v,m[v],E),_!==null&&(t&&_.alternate!==null&&b.delete(_.key===null?v:_.key),p=s(_,p,v),C===null?w=_:C.sibling=_,C=_);return t&&b.forEach(function(T){return e(l,T)}),_t&&qr(l,v),w}function M(l,p,m,E){var w=Uo(m);if(typeof w!="function")throw Error(oe(150));if(m=w.call(m),m==null)throw Error(oe(151));for(var C=w=null,b=p,v=p=0,_=null,S=m.next();b!==null&&!S.done;v++,S=m.next()){b.index>v?(_=b,b=null):_=b.sibling;var T=h(l,b,S.value,E);if(T===null){b===null&&(b=_);break}t&&b&&T.alternate===null&&e(l,b),p=s(T,p,v),C===null?w=T:C.sibling=T,C=T,b=_}if(S.done)return n(l,b),_t&&qr(l,v),w;if(b===null){for(;!S.done;v++,S=m.next())S=d(l,S.value,E),S!==null&&(p=s(S,p,v),C===null?w=S:C.sibling=S,C=S);return _t&&qr(l,v),w}for(b=i(l,b);!S.done;v++,S=m.next())S=g(b,l,v,S.value,E),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?v:S.key),p=s(S,p,v),C===null?w=S:C.sibling=S,C=S);return t&&b.forEach(function(I){return e(l,I)}),_t&&qr(l,v),w}function y(l,p,m,E){if(typeof m=="object"&&m!==null&&m.type===Os&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ol:e:{for(var w=m.key,C=p;C!==null;){if(C.key===w){if(w=m.type,w===Os){if(C.tag===7){n(l,C.sibling),p=r(C,m.props.children),p.return=l,l=p;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===fr&&j0(w)===C.type){n(l,C.sibling),p=r(C,m.props),p.ref=Vo(l,C,m),p.return=l,l=p;break e}n(l,C);break}else e(l,C);C=C.sibling}m.type===Os?(p=ls(m.props.children,l.mode,E,m.key),p.return=l,l=p):(E=lu(m.type,m.key,m.props,null,l.mode,E),E.ref=Vo(l,p,m),E.return=l,l=E)}return o(l);case Fs:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(l,p.sibling),p=r(p,m.children||[]),p.return=l,l=p;break e}else{n(l,p);break}else e(l,p);p=p.sibling}p=rf(m,l.mode,E),p.return=l,l=p}return o(l);case fr:return C=m._init,y(l,p,C(m._payload),E)}if(Qo(m))return x(l,p,m,E);if(Uo(m))return M(l,p,m,E);vl(l,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(l,p.sibling),p=r(p,m),p.return=l,l=p):(n(l,p),p=nf(m,l.mode,E),p.return=l,l=p),o(l)):n(l,p)}return y}var po=Ky(!0),Zy=Ky(!1),Uu=Nr(null),Fu=null,js=null,Np=null;function Up(){Np=js=Fu=null}function Fp(t){var e=Uu.current;vt(Uu),t._currentValue=e}function Dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function so(t,e){Fu=t,Np=js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function Zn(t){var e=t._currentValue;if(Np!==t)if(t={context:t,memoizedValue:e,next:null},js===null){if(Fu===null)throw Error(oe(308));js=t,Fu.dependencies={lanes:0,firstContext:t}}else js=js.next=t;return e}var ts=null;function Op(t){ts===null?ts=[t]:ts.push(t)}function Qy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Op(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zi(t,i)}function Zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Op(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(t,n)}function nu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ep(t,n)}}function X0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ou(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(s!==null){var d=r.baseState;o=0,f=c=u=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,M=a;switch(h=e,g=n,M.tag){case 1:if(x=M.payload,typeof x=="function"){d=x.call(g,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,h=typeof x=="function"?x.call(g,d,h):x,h==null)break e;d=Mt({},d,h);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,u=d):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(u=d),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=d}}function q0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ya={},Ti=Nr(Ya),Ra=Nr(Ya),Pa=Nr(Ya);function ns(t){if(t===Ya)throw Error(oe(174));return t}function Bp(t,e){switch(ht(Pa,e),ht(Ra,t),ht(Ti,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fd(e,t)}vt(Ti),ht(Ti,e)}function mo(){vt(Ti),vt(Ra),vt(Pa)}function ex(t){ns(Pa.current);var e=ns(Ti.current),n=fd(e,t.type);e!==n&&(ht(Ra,t),ht(Ti,n))}function Vp(t){Ra.current===t&&(vt(Ti),vt(Ra))}var yt=Nr(0);function ku(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function zp(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var iu=nr.ReactCurrentDispatcher,Zc=nr.ReactCurrentBatchConfig,ds=0,St=null,Bt=null,jt=null,Bu=!1,ua=!1,Da=0,yT=0;function Jt(){throw Error(oe(321))}function Hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Gp(t,e,n,i,r,s){if(ds=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,iu.current=t===null||t.memoizedState===null?ET:TT,t=n(i,r),ua){s=0;do{if(ua=!1,Da=0,25<=s)throw Error(oe(301));s+=1,jt=Bt=null,e.updateQueue=null,iu.current=wT,t=n(i,r)}while(ua)}if(iu.current=Vu,e=Bt!==null&&Bt.next!==null,ds=0,jt=Bt=St=null,Bu=!1,e)throw Error(oe(300));return t}function Wp(){var t=Da!==0;return Da=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?St.memoizedState=jt=t:jt=jt.next=t,jt}function Qn(){if(Bt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=jt===null?St.memoizedState:jt.next;if(e!==null)jt=e,Bt=t;else{if(t===null)throw Error(oe(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},jt===null?St.memoizedState=jt=t:jt=jt.next=t}return jt}function La(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=Qn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,u=null,c=s;do{var f=c.lane;if((ds&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=d,o=i):u=u.next=d,St.lanes|=f,hs|=f}c=c.next}while(c!==null&&c!==s);u===null?o=i:u.next=a,hi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=u,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,hs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=Qn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function tx(){}function nx(t,e){var n=St,i=Qn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,jp(sx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Ia(9,rx.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(oe(349));ds&30||ix(n,e,r)}return r}function ix(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rx(t,e,n,i){e.value=n,e.getSnapshot=i,ox(e)&&ax(t)}function sx(t,e,n){return n(function(){ox(e)&&ax(t)})}function ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function ax(t){var e=Zi(t,1);e!==null&&fi(e,t,1,-1)}function Y0(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=MT.bind(null,St,t),[e.memoizedState,t]}function Ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lx(){return Qn().memoizedState}function ru(t,e,n,i){var r=vi();St.flags|=t,r.memoizedState=Ia(1|e,n,void 0,i===void 0?null:i)}function cc(t,e,n,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&Hp(i,o.deps)){r.memoizedState=Ia(e,n,s,i);return}}St.flags|=t,r.memoizedState=Ia(1|e,n,s,i)}function $0(t,e){return ru(8390656,8,t,e)}function jp(t,e){return cc(2048,8,t,e)}function ux(t,e){return cc(4,2,t,e)}function cx(t,e){return cc(4,4,t,e)}function fx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dx(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,fx.bind(null,e,t),n)}function Xp(){}function hx(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function px(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mx(t,e,n){return ds&21?(hi(n,e)||(n=xy(),St.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function xT(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{ot=n,Zc.transition=i}}function gx(){return Qn().memoizedState}function ST(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vx(t))_x(e,n);else if(n=Qy(t,e,n,i),n!==null){var r=mn();fi(n,t,i,r),yx(n,e,i)}}function MT(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vx(t))_x(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var u=e.interleaved;u===null?(r.next=r,Op(e)):(r.next=u.next,u.next=r),e.interleaved=r;return}}catch{}finally{}n=Qy(t,e,r,i),n!==null&&(r=mn(),fi(n,t,i,r),yx(n,e,i))}}function vx(t){var e=t.alternate;return t===St||e!==null&&e===St}function _x(t,e){ua=Bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ep(t,n)}}var Vu={readContext:Zn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},ET={readContext:Zn,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:Zn,useEffect:$0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ru(4194308,4,fx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ru(4194308,4,t,e)},useInsertionEffect:function(t,e){return ru(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ST.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:Y0,useDebugValue:Xp,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=Y0(!1),e=t[0];return t=xT.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=vi();if(_t){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Xt===null)throw Error(oe(349));ds&30||ix(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$0(sx.bind(null,i,s,t),[t]),i.flags|=2048,Ia(9,rx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=Xt.identifierPrefix;if(_t){var n=Wi,i=Gi;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TT={readContext:Zn,useCallback:hx,useContext:Zn,useEffect:jp,useImperativeHandle:dx,useInsertionEffect:ux,useLayoutEffect:cx,useMemo:px,useReducer:Qc,useRef:lx,useState:function(){return Qc(La)},useDebugValue:Xp,useDeferredValue:function(t){var e=Qn();return mx(e,Bt.memoizedState,t)},useTransition:function(){var t=Qc(La)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1},wT={readContext:Zn,useCallback:hx,useContext:Zn,useEffect:jp,useImperativeHandle:dx,useInsertionEffect:ux,useLayoutEffect:cx,useMemo:px,useReducer:Jc,useRef:lx,useState:function(){return Jc(La)},useDebugValue:Xp,useDeferredValue:function(t){var e=Qn();return Bt===null?e.memoizedState=t:mx(e,Bt.memoizedState,t)},useTransition:function(){var t=Jc(La)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1};function si(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fc={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Ar(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(fi(e,t,r,i),nu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Ar(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(fi(e,t,r,i),nu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=Ar(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Tr(t,r,i),e!==null&&(fi(e,t,i,n),nu(e,t,i))}};function K0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,i)||!wa(r,s):!0}function xx(t,e,n){var i=!1,r=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=wn(e)?cs:ln.current,i=e.contextTypes,s=(i=i!=null)?fo(t,r):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Z0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function Id(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=wn(e)?cs:ln.current,r.context=fo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fc.enqueueReplaceState(r,r.state,null),Ou(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",i=e;do n+=J1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AT=typeof WeakMap=="function"?WeakMap:Map;function Sx(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hu||(Hu=!0,Wd=i),Nd(t,e)},n}function Mx(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nd(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Q0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new AT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=VT.bind(null,t,e,n),e.then(t,t))}function J0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var CT=nr.ReactCurrentOwner,En=!1;function fn(t,e,n,i){e.child=t===null?Zy(e,null,n,i):po(e,t.child,n,i)}function tg(t,e,n,i,r){n=n.render;var s=e.ref;return so(e,r),i=Gp(t,e,n,i,s,r),n=Wp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(_t&&n&&Dp(e),e.flags|=1,fn(t,e,i,r),e.child)}function ng(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!em(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ex(t,e,s,i,r)):(t=lu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,i)&&t.ref===e.ref)return Qi(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ex(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wa(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,Qi(t,e,r)}return Ud(t,e,n,i,r)}function Tx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(qs,In),In|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(qs,In),In|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(qs,In),In|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(qs,In),In|=i;return fn(t,e,r,n),e.child}function wx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ud(t,e,n,i,r){var s=wn(n)?cs:ln.current;return s=fo(e,s),so(e,r),n=Gp(t,e,n,i,s,r),i=Wp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(_t&&i&&Dp(e),e.flags|=1,fn(t,e,n,r),e.child)}function ig(t,e,n,i,r){if(wn(n)){var s=!0;Lu(e)}else s=!1;if(so(e,r),e.stateNode===null)su(t,e),xx(e,n,i),Id(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=wn(n)?cs:ln.current,c=fo(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||u!==c)&&Z0(e,o,i,c),dr=!1;var h=e.memoizedState;o.state=h,Ou(e,i,o,r),u=e.memoizedState,a!==i||h!==u||Tn.current||dr?(typeof f=="function"&&(Ld(e,n,f,i),u=e.memoizedState),(a=dr||K0(e,n,a,i,h,u,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),o.props=i,o.state=u,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:si(e.type,a),o.props=c,d=e.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zn(u):(u=wn(n)?cs:ln.current,u=fo(e,u));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==u)&&Z0(e,o,i,u),dr=!1,h=e.memoizedState,o.state=h,Ou(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||Tn.current||dr?(typeof g=="function"&&(Ld(e,n,g,i),x=e.memoizedState),(c=dr||K0(e,n,c,i,h,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=u,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Fd(t,e,n,i,s,r)}function Fd(t,e,n,i,r,s){wx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&H0(e,n,!1),Qi(t,e,s);i=e.stateNode,CT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&H0(e,n,!0),e.child}function Ax(t){var e=t.stateNode;e.pendingContext?z0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&z0(t,e.context,!1),Bp(t,e.containerInfo)}function rg(t,e,n,i,r){return ho(),Ip(r),e.flags|=256,fn(t,e,n,i),e.child}var Od={dehydrated:null,treeContext:null,retryLane:0};function kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cx(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(yt,r&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pc(o,i,0,null),t=ls(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kd(n),e.memoizedState=Od,t):qp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var u={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=Cr(r,u),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Od,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qp(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,i){return i!==null&&Ip(i),po(e,t.child,null,n),t=qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ef(Error(oe(422))),_l(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pc({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=kd(o),e.memoizedState=Od,s);if(!(e.mode&1))return _l(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=ef(s,i,void 0),_l(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(t,r),fi(i,t,r,-1))}return Jp(),i=ef(Error(oe(421))),_l(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=Er(r.nextSibling),Fn=e,_t=!0,ai=null,t!==null&&(Wn[jn++]=Gi,Wn[jn++]=Wi,Wn[jn++]=fs,Gi=t.id,Wi=t.overflow,fs=e),e=qp(e,i.children),e.flags|=4096,e)}function sg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Dd(t.return,e,n)}function tf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,n,e);else if(t.tag===19)sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ku(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ku(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tf(e,!0,n,null,s);break;case"together":tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function su(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RT(t,e,n){switch(e.tag){case 3:Ax(e),ho();break;case 5:ex(e);break;case 1:wn(e.type)&&Lu(e);break;case 4:Bp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Uu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?Cx(t,e,n):(ht(yt,yt.current&1),t=Qi(t,e,n),t!==null?t.sibling:null);ht(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Tx(t,e,n)}return Qi(t,e,n)}var Rx,Bd,Px,Dx;Rx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bd=function(){};Px=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ns(Ti.current);var s=null;switch(n){case"input":r=ad(t,r),i=ad(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=cd(t,r),i=cd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pu)}dd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_a.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var u=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_a.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&mt("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dx=function(t,e,n,i){n!==i&&(e.flags|=4)};function zo(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function PT(t,e,n){var i=e.pendingProps;switch(Lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return wn(e.type)&&Du(),en(e),null;case 3:return i=e.stateNode,mo(),vt(Tn),vt(ln),zp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(qd(ai),ai=null))),Bd(t,e),en(e),null;case 5:Vp(e);var r=ns(Pa.current);if(n=e.type,t!==null&&e.stateNode!=null)Px(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return en(e),null}if(t=ns(Ti.current),gl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<ea.length;r++)mt(ea[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":p0(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":g0(i,s),mt("invalid",i)}dd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ml(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ml(i.textContent,a,t),r=["children",""+a]):_a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":al(i),m0(i,s,!0);break;case"textarea":al(i),v0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[ba]=i,Rx(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ea.length;r++)mt(ea[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":p0(t,i),r=ad(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":g0(t,i),r=cd(t,i),mt("invalid",t);break;default:r=i}dd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?ly(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&oy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ya(t,u):typeof u=="number"&&ya(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?u!=null&&s==="onScroll"&&mt("scroll",t):u!=null&&vp(t,s,u,o))}switch(n){case"input":al(t),m0(t,i,!1);break;case"textarea":al(t),v0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?to(t,!!i.multiple,s,!1):i.defaultValue!=null&&to(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Pu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)Dx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=ns(Pa.current),ns(Ti.current),gl(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:ml(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ml(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return en(e),null;case 13:if(vt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Un!==null&&e.mode&1&&!(e.flags&128))$y(),ho(),e.flags|=98560,s=!1;else if(s=gl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[xi]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ai!==null&&(qd(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Vt===0&&(Vt=3):Jp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return mo(),Bd(t,e),t===null&&Aa(e.stateNode.containerInfo),en(e),null;case 10:return Fp(e.type._context),en(e),null;case 17:return wn(e.type)&&Du(),en(e),null;case 19:if(vt(yt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)zo(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ku(t),o!==null){for(e.flags|=128,zo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>vo&&(e.flags|=128,i=!0,zo(s,!1),e.lanes=4194304)}else{if(!i)if(t=ku(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return en(e),null}else 2*Pt()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,i=!0,zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=yt.current,ht(yt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Qp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function DT(t,e){switch(Lp(e),e.tag){case 1:return wn(e.type)&&Du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),vt(Tn),vt(ln),zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vp(e),null;case 13:if(vt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(yt),null;case 4:return mo(),null;case 10:return Fp(e.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var yl=!1,rn=!1,LT=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function Vd(t,e,n){try{n()}catch(i){At(t,e,i)}}var og=!1;function IT(t,e){if(Ed=Cu,t=Fy(),Pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(u=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(u=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:t,selectionRange:n},Cu=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var M=x.memoizedProps,y=x.memoizedState,l=e.stateNode,p=l.getSnapshotBeforeUpdate(e.elementType===e.type?M:si(e.type,M),y);l.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(E){At(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return x=og,og=!1,x}function ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vd(e,n,s)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lx(t){var e=t.alternate;e!==null&&(t.alternate=null,Lx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[ba],delete e[Cd],delete e[mT],delete e[gT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ix(t){return t.tag===5||t.tag===3||t.tag===4}function ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ix(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pu));else if(i!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}function Gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}var Yt=null,oi=!1;function ir(t,e,n){for(n=n.child;n!==null;)Nx(t,e,n),n=n.sibling}function Nx(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(rc,n)}catch{}switch(n.tag){case 5:rn||Xs(n,e);case 6:var i=Yt,r=oi;Yt=null,ir(t,e,n),Yt=i,oi=r,Yt!==null&&(oi?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(oi?(t=Yt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Ea(t)):Yc(Yt,n.stateNode));break;case 4:i=Yt,r=oi,Yt=n.stateNode.containerInfo,oi=!0,ir(t,e,n),Yt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vd(n,e,o),r=r.next}while(r!==i)}ir(t,e,n);break;case 1:if(!rn&&(Xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,ir(t,e,n),rn=i):ir(t,e,n);break;default:ir(t,e,n)}}function lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LT),e.forEach(function(i){var r=HT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,oi=!1;break e;case 3:Yt=a.stateNode.containerInfo,oi=!0;break e;case 4:Yt=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if(Yt===null)throw Error(oe(160));Nx(s,o,r),Yt=null,oi=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ux(e,t),e=e.sibling}function Ux(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),mi(t),i&4){try{ca(3,t,t.return),dc(3,t)}catch(M){At(t,t.return,M)}try{ca(5,t,t.return)}catch(M){At(t,t.return,M)}}break;case 1:Jn(e,t),mi(t),i&512&&n!==null&&Xs(n,n.return);break;case 5:if(Jn(e,t),mi(t),i&512&&n!==null&&Xs(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(M){At(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iy(r,s),hd(a,o);var c=hd(a,s);for(o=0;o<u.length;o+=2){var f=u[o],d=u[o+1];f==="style"?ly(r,d):f==="dangerouslySetInnerHTML"?oy(r,d):f==="children"?ya(r,d):vp(r,f,d,c)}switch(a){case"input":ld(r,s);break;case"textarea":ry(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?to(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?to(r,!!s.multiple,s.defaultValue,!0):to(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(M){At(t,t.return,M)}}break;case 6:if(Jn(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){At(t,t.return,M)}}break;case 3:if(Jn(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(e.containerInfo)}catch(M){At(t,t.return,M)}break;case 4:Jn(e,t),mi(t);break;case 13:Jn(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kp=Pt())),i&4&&lg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||f,Jn(e,t),rn=c):Jn(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Me=t,f=t.child;f!==null;){for(d=Me=f;Me!==null;){switch(h=Me,g=h.child,h.tag){case 0:case 11:case 14:case 15:ca(4,h,h.return);break;case 1:Xs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(M){At(i,n,M)}}break;case 5:Xs(h,h.return);break;case 22:if(h.memoizedState!==null){cg(d);continue}}g!==null?(g.return=h,Me=g):cg(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ay("display",o))}catch(M){At(t,t.return,M)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){At(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jn(e,t),mi(t),i&4&&lg(t);break;case 21:break;default:Jn(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ix(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=ag(t);Gd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ag(t);Hd(t,a,o);break;default:throw Error(oe(161))}}catch(u){At(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NT(t,e,n){Me=t,Fx(t)}function Fx(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yl;if(!o){var a=r.alternate,u=a!==null&&a.memoizedState!==null||rn;a=yl;var c=rn;if(yl=o,(rn=u)&&!c)for(Me=r;Me!==null;)o=Me,u=o.child,o.tag===22&&o.memoizedState!==null?fg(r):u!==null?(u.return=o,Me=u):fg(r);for(;s!==null;)Me=s,Fx(s),s=s.sibling;Me=r,yl=a,rn=c}ug(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):ug(t)}}function ug(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&q0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}q0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ea(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}rn||e.flags&512&&zd(e)}catch(h){At(e,e.return,h)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function cg(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function fg(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(u){At(e,n,u)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(u){At(e,r,u)}}var s=e.return;try{zd(e)}catch(u){At(e,s,u)}break;case 5:var o=e.return;try{zd(e)}catch(u){At(e,o,u)}}}catch(u){At(e,e.return,u)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var UT=Math.ceil,zu=nr.ReactCurrentDispatcher,Yp=nr.ReactCurrentOwner,$n=nr.ReactCurrentBatchConfig,$e=0,Xt=null,Ot=null,Zt=0,In=0,qs=Nr(0),Vt=0,Na=null,hs=0,hc=0,$p=0,fa=null,Mn=null,Kp=0,vo=1/0,Vi=null,Hu=!1,Wd=null,wr=null,xl=!1,vr=null,Gu=0,da=0,jd=null,ou=-1,au=0;function mn(){return $e&6?Pt():ou!==-1?ou:ou=Pt()}function Ar(t){return t.mode&1?$e&2&&Zt!==0?Zt&-Zt:_T.transition!==null?(au===0&&(au=xy()),au):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Cy(t.type)),t):1}function fi(t,e,n,i){if(50<da)throw da=0,jd=null,Error(oe(185));ja(t,n,i),(!($e&2)||t!==Xt)&&(t===Xt&&(!($e&2)&&(hc|=n),Vt===4&&pr(t,Zt)),An(t,i),n===1&&$e===0&&!(e.mode&1)&&(vo=Pt()+500,uc&&Ur()))}function An(t,e){var n=t.callbackNode;_E(t,e);var i=Au(t,t===Xt?Zt:0);if(i===0)n!==null&&x0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&x0(n),e===1)t.tag===0?vT(dg.bind(null,t)):Xy(dg.bind(null,t)),hT(function(){!($e&6)&&Ur()}),n=null;else{switch(Sy(i)){case 1:n=Mp;break;case 4:n=_y;break;case 16:n=wu;break;case 536870912:n=yy;break;default:n=wu}n=Wx(n,Ox.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ox(t,e){if(ou=-1,au=0,$e&6)throw Error(oe(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var i=Au(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Wu(t,i);else{e=i;var r=$e;$e|=2;var s=Bx();(Xt!==t||Zt!==e)&&(Vi=null,vo=Pt()+500,as(t,e));do try{kT();break}catch(a){kx(t,a)}while(!0);Up(),zu.current=s,$e=r,Ot!==null?e=0:(Xt=null,Zt=0,e=Vt)}if(e!==0){if(e===2&&(r=_d(t),r!==0&&(i=r,e=Xd(t,r))),e===1)throw n=Na,as(t,0),pr(t,i),An(t,Pt()),n;if(e===6)pr(t,i);else{if(r=t.current.alternate,!(i&30)&&!FT(r)&&(e=Wu(t,i),e===2&&(s=_d(t),s!==0&&(i=s,e=Xd(t,s))),e===1))throw n=Na,as(t,0),pr(t,i),An(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Yr(t,Mn,Vi);break;case 3:if(pr(t,i),(i&130023424)===i&&(e=Kp+500-Pt(),10<e)){if(Au(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ad(Yr.bind(null,t,Mn,Vi),e);break}Yr(t,Mn,Vi);break;case 4:if(pr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*UT(i/1960))-i,10<i){t.timeoutHandle=Ad(Yr.bind(null,t,Mn,Vi),i);break}Yr(t,Mn,Vi);break;case 5:Yr(t,Mn,Vi);break;default:throw Error(oe(329))}}}return An(t,Pt()),t.callbackNode===n?Ox.bind(null,t):null}function Xd(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=Wu(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&qd(e)),t}function qd(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function FT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~$p,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function dg(t){if($e&6)throw Error(oe(327));oo();var e=Au(t,0);if(!(e&1))return An(t,Pt()),null;var n=Wu(t,e);if(t.tag!==0&&n===2){var i=_d(t);i!==0&&(e=i,n=Xd(t,i))}if(n===1)throw n=Na,as(t,0),pr(t,e),An(t,Pt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,Mn,Vi),An(t,Pt()),null}function Zp(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(vo=Pt()+500,uc&&Ur())}}function ps(t){vr!==null&&vr.tag===0&&!($e&6)&&oo();var e=$e;$e|=1;var n=$n.transition,i=ot;try{if($n.transition=null,ot=1,t)return t()}finally{ot=i,$n.transition=n,$e=e,!($e&6)&&Ur()}}function Qp(){In=qs.current,vt(qs)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dT(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Lp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Du();break;case 3:mo(),vt(Tn),vt(ln),zp();break;case 5:Vp(i);break;case 4:mo();break;case 13:vt(yt);break;case 19:vt(yt);break;case 10:Fp(i.type._context);break;case 22:case 23:Qp()}n=n.return}if(Xt=t,Ot=t=Cr(t.current,null),Zt=In=e,Vt=0,Na=null,$p=hc=hs=0,Mn=fa=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ts=null}return t}function kx(t,e){do{var n=Ot;try{if(Up(),iu.current=Vu,Bu){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Bu=!1}if(ds=0,jt=Bt=St=null,ua=!1,Da=0,Yp.current=null,n===null||n.return===null){Vt=1,Na=e,Ot=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Zt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=J0(o);if(g!==null){g.flags&=-257,eg(g,o,a,s,e),g.mode&1&&Q0(s,c,e),e=g,u=c;var x=e.updateQueue;if(x===null){var M=new Set;M.add(u),e.updateQueue=M}else x.add(u);break e}else{if(!(e&1)){Q0(s,c,e),Jp();break e}u=Error(oe(426))}}else if(_t&&a.mode&1){var y=J0(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),eg(y,o,a,s,e),Ip(go(u,a));break e}}s=u=go(u,a),Vt!==4&&(Vt=2),fa===null?fa=[s]:fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var l=Sx(s,u,e);X0(s,l);break e;case 1:a=u;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(wr===null||!wr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Mx(s,a,e);X0(s,E);break e}}s=s.return}while(s!==null)}zx(n)}catch(w){e=w,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function Bx(){var t=zu.current;return zu.current=Vu,t===null?Vu:t}function Jp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Xt===null||!(hs&268435455)&&!(hc&268435455)||pr(Xt,Zt)}function Wu(t,e){var n=$e;$e|=2;var i=Bx();(Xt!==t||Zt!==e)&&(Vi=null,as(t,e));do try{OT();break}catch(r){kx(t,r)}while(!0);if(Up(),$e=n,zu.current=i,Ot!==null)throw Error(oe(261));return Xt=null,Zt=0,Vt}function OT(){for(;Ot!==null;)Vx(Ot)}function kT(){for(;Ot!==null&&!uE();)Vx(Ot)}function Vx(t){var e=Gx(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?zx(t):Ot=e,Yp.current=null}function zx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DT(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ot=null;return}}else if(n=PT(n,e,In),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Vt===0&&(Vt=5)}function Yr(t,e,n){var i=ot,r=$n.transition;try{$n.transition=null,ot=1,BT(t,e,n,i)}finally{$n.transition=r,ot=i}return null}function BT(t,e,n,i){do oo();while(vr!==null);if($e&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yE(t,s),t===Xt&&(Ot=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xl||(xl=!0,Wx(wu,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=ot;ot=1;var a=$e;$e|=4,Yp.current=null,IT(t,n),Ux(n,t),sT(Td),Cu=!!Ed,Td=Ed=null,t.current=n,NT(n),cE(),$e=a,ot=o,$n.transition=s}else t.current=n;if(xl&&(xl=!1,vr=t,Gu=r),s=t.pendingLanes,s===0&&(wr=null),hE(n.stateNode),An(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hu)throw Hu=!1,t=Wd,Wd=null,t;return Gu&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===jd?da++:(da=0,jd=t):da=0,Ur(),null}function oo(){if(vr!==null){var t=Sy(Gu),e=$n.transition,n=ot;try{if($n.transition=null,ot=16>t?16:t,vr===null)var i=!1;else{if(t=vr,vr=null,Gu=0,$e&6)throw Error(oe(331));var r=$e;for($e|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Me=c;Me!==null;){var f=Me;switch(f.tag){case 0:case 11:case 15:ca(8,f,s)}var d=f.child;if(d!==null)d.return=f,Me=d;else for(;Me!==null;){f=Me;var h=f.sibling,g=f.return;if(Lx(f),f===c){Me=null;break}if(h!==null){h.return=g,Me=h;break}Me=g}}}var x=s.alternate;if(x!==null){var M=x.child;if(M!==null){x.child=null;do{var y=M.sibling;M.sibling=null,M=y}while(M!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var l=s.sibling;if(l!==null){l.return=s.return,Me=l;break e}Me=s.return}}var p=t.current;for(Me=p;Me!==null;){o=Me;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,Me=m;else e:for(o=p;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dc(9,a)}}catch(w){At(a,a.return,w)}if(a===o){Me=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Me=E;break e}Me=a.return}}if($e=r,Ur(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(rc,t)}catch{}i=!0}return i}finally{ot=n,$n.transition=e}}return!1}function hg(t,e,n){e=go(n,e),e=Sx(t,e,1),t=Tr(t,e,1),e=mn(),t!==null&&(ja(t,1,e),An(t,e))}function At(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=go(n,t),t=Mx(e,t,1),e=Tr(e,t,1),t=mn(),e!==null&&(ja(e,1,t),An(e,t));break}}e=e.return}}function VT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Vt===4||Vt===3&&(Zt&130023424)===Zt&&500>Pt()-Kp?as(t,0):$p|=n),An(t,e)}function Hx(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=mn();t=Zi(t,e),t!==null&&(ja(t,e,n),An(t,n))}function zT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hx(t,n)}function HT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Hx(t,n)}var Gx;Gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,RT(t,e,n);En=!!(t.flags&131072)}else En=!1,_t&&e.flags&1048576&&qy(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;su(t,e),t=e.pendingProps;var r=fo(e,ln.current);so(e,n),r=Gp(null,e,i,t,r,n);var s=Wp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,Lu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kp(e),r.updater=fc,e.stateNode=r,r._reactInternals=e,Id(e,i,t,n),e=Fd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Dp(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(su(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=WT(i),t=si(i,t),r){case 0:e=Ud(null,e,i,t,n);break e;case 1:e=ig(null,e,i,t,n);break e;case 11:e=tg(null,e,i,t,n);break e;case 14:e=ng(null,e,i,si(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Ud(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),ig(t,e,i,r,n);case 3:e:{if(Ax(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jy(t,e),Ou(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=go(Error(oe(423)),e),e=rg(t,e,i,n,r);break e}else if(i!==r){r=go(Error(oe(424)),e),e=rg(t,e,i,n,r);break e}else for(Un=Er(e.stateNode.containerInfo.firstChild),Fn=e,_t=!0,ai=null,n=Zy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),i===r){e=Qi(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return ex(e),t===null&&Pd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,wd(i,r)?o=null:s!==null&&wd(i,s)&&(e.flags|=32),wx(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return Cx(t,e,n);case 4:return Bp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=po(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),tg(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Uu,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!Tn.current){e=Qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===i){if(s.tag===1){u=Xi(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Dd(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,so(e,n),r=Zn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),ng(t,e,i,r,n);case 15:return Ex(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),su(t,e),e.tag=1,wn(i)?(t=!0,Lu(e)):t=!1,so(e,n),xx(e,i,r),Id(e,i,r,n),Fd(null,e,i,!0,t,n);case 19:return bx(t,e,n);case 22:return Tx(t,e,n)}throw Error(oe(156,e.tag))};function Wx(t,e){return vy(t,e)}function GT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new GT(t,e,n,i)}function em(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WT(t){if(typeof t=="function")return em(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yp)return 11;if(t===xp)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")em(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return ls(n.children,r,s,e);case _p:o=8,r|=8;break;case id:return t=qn(12,n,e,r|2),t.elementType=id,t.lanes=s,t;case rd:return t=qn(13,n,e,r),t.elementType=rd,t.lanes=s,t;case sd:return t=qn(19,n,e,r),t.elementType=sd,t.lanes=s,t;case ey:return pc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q_:o=10;break e;case J_:o=9;break e;case yp:o=11;break e;case xp:o=14;break e;case fr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ls(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function pc(t,e,n,i){return t=qn(22,t,i,e),t.elementType=ey,t.lanes=n,t.stateNode={isHidden:!1},t}function nf(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function rf(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tm(t,e,n,i,r,s,o,a,u){return t=new jT(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kp(s),t}function XT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jx(t){if(!t)return Rr;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(wn(n))return jy(t,n,e)}return e}function Xx(t,e,n,i,r,s,o,a,u){return t=tm(n,i,!0,t,r,s,o,a,u),t.context=jx(null),n=t.current,i=mn(),r=Ar(n),s=Xi(i,r),s.callback=e??null,Tr(n,s,r),t.current.lanes=r,ja(t,r,i),An(t,i),t}function mc(t,e,n,i){var r=e.current,s=mn(),o=Ar(r);return n=jx(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Tr(r,e,o),t!==null&&(fi(t,r,o,s),nu(t,r,o)),o}function ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nm(t,e){pg(t,e),(t=t.alternate)&&pg(t,e)}function qT(){return null}var qx=typeof reportError=="function"?reportError:function(t){console.error(t)};function im(t){this._internalRoot=t}gc.prototype.render=im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));mc(t,e,null,null)};gc.prototype.unmount=im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ps(function(){mc(null,t,null,null)}),e[Ki]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ty();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&Ay(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mg(){}function YT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ju(o);s.call(c)}}var o=Xx(e,i,t,0,null,!1,!1,"",mg);return t._reactRootContainer=o,t[Ki]=o.current,Aa(t.nodeType===8?t.parentNode:t),ps(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ju(u);a.call(c)}}var u=tm(t,0,!1,null,null,!1,!1,"",mg);return t._reactRootContainer=u,t[Ki]=u.current,Aa(t.nodeType===8?t.parentNode:t),ps(function(){mc(e,u,n,i)}),u}function _c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var u=ju(o);a.call(u)}}mc(e,o,t,r)}else o=YT(n,e,t,r,i);return ju(o)}My=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(Ep(e,n|1),An(e,Pt()),!($e&6)&&(vo=Pt()+500,Ur()))}break;case 13:ps(function(){var i=Zi(t,1);if(i!==null){var r=mn();fi(i,t,1,r)}}),nm(t,1)}};Tp=function(t){if(t.tag===13){var e=Zi(t,134217728);if(e!==null){var n=mn();fi(e,t,134217728,n)}nm(t,134217728)}};Ey=function(t){if(t.tag===13){var e=Ar(t),n=Zi(t,e);if(n!==null){var i=mn();fi(n,t,e,i)}nm(t,e)}};Ty=function(){return ot};wy=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};md=function(t,e,n){switch(e){case"input":if(ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=lc(i);if(!r)throw Error(oe(90));ny(i),ld(i,r)}}}break;case"textarea":ry(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};fy=Zp;dy=ps;var $T={usingClientEntryPoint:!1,Events:[qa,zs,lc,uy,cy,Zp]},Ho={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KT={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=my(t),t===null?null:t.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||qT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{rc=Sl.inject(KT),Ei=Sl}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$T;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(oe(200));return XT(t,e,null,n)};kn.createRoot=function(t,e){if(!rm(t))throw Error(oe(299));var n=!1,i="",r=qx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tm(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,Aa(t.nodeType===8?t.parentNode:t),new im(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=my(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return ps(t)};kn.hydrate=function(t,e,n){if(!vc(e))throw Error(oe(200));return _c(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!rm(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=qx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xx(e,null,t,1,n??null,r,!1,s,o),t[Ki]=e.current,Aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gc(e)};kn.render=function(t,e,n){if(!vc(e))throw Error(oe(200));return _c(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!vc(t))throw Error(oe(40));return t._reactRootContainer?(ps(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};kn.unstable_batchedUpdates=Zp;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return _c(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function Yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yx)}catch(t){console.error(t)}}Yx(),Y_.exports=kn;var ZT=Y_.exports,gg=ZT;td.createRoot=gg.createRoot,td.hydrateRoot=gg.hydrateRoot;const sm=F.createContext({});function om(t){const e=F.useRef(null);return e.current===null&&(e.current=t()),e.current}const $x=typeof window<"u",Kx=$x?F.useLayoutEffect:F.useEffect,yc=F.createContext(null);function am(t,e){t.indexOf(e)===-1&&t.push(e)}function Xu(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ri=(t,e,n)=>n>e?e:n<t?t:n;let lm=()=>{};const Ji={},Zx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Qx(t){return typeof t=="object"&&t!==null}const Jx=t=>/^0[^.\s]+$/u.test(t);function um(t){let e;return()=>(e===void 0&&(e=t()),e)}const Kn=t=>t,QT=(t,e)=>n=>e(t(n)),$a=(...t)=>t.reduce(QT),Ua=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class cm{constructor(){this.subscriptions=[]}add(e){return am(this.subscriptions,e),()=>Xu(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const di=t=>t*1e3,Yn=t=>t/1e3;function eS(t,e){return e?t*(1e3/e):0}const tS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,JT=1e-7,ew=12;function tw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=tS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>JT&&++a<ew);return o}function Ka(t,e,n,i){if(t===e&&n===i)return Kn;const r=s=>tw(s,0,1,t,n);return s=>s===0||s===1?s:tS(r(s),e,i)}const nS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,iS=t=>e=>1-t(1-e),rS=Ka(.33,1.53,.69,.99),fm=iS(rS),sS=nS(fm),oS=t=>(t*=2)<1?.5*fm(t):.5*(2-Math.pow(2,-10*(t-1))),dm=t=>1-Math.sin(Math.acos(t)),aS=iS(dm),lS=nS(dm),nw=Ka(.42,0,1,1),iw=Ka(0,0,.58,1),uS=Ka(.42,0,.58,1),rw=t=>Array.isArray(t)&&typeof t[0]!="number",cS=t=>Array.isArray(t)&&typeof t[0]=="number",sw={linear:Kn,easeIn:nw,easeInOut:uS,easeOut:iw,circIn:dm,circInOut:lS,circOut:aS,backIn:fm,backInOut:sS,backOut:rS,anticipate:oS},ow=t=>typeof t=="string",vg=t=>{if(cS(t)){lm(t.length===4);const[e,n,i,r]=t;return Ka(e,n,i,r)}else if(ow(t))return sw[t];return t},Ml=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function aw(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function u(f){o.has(f)&&(c.schedule(f),t()),f(a)}const c={schedule:(f,d=!1,h=!1)=>{const x=h&&r?n:i;return d&&o.add(f),x.has(f)||x.add(f),f},cancel:f=>{i.delete(f),o.delete(f)},process:f=>{if(a=f,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(u),n.clear(),r=!1,s&&(s=!1,c.process(f))}};return c}const lw=40;function fS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ml.reduce((m,E)=>(m[E]=aw(s),m),{}),{setup:a,read:u,resolveKeyframes:c,preUpdate:f,update:d,preRender:h,render:g,postRender:x}=o,M=()=>{const m=Ji.useManualTiming?r.timestamp:performance.now();n=!1,Ji.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(m-r.timestamp,lw),1)),r.timestamp=m,r.isProcessing=!0,a.process(r),u.process(r),c.process(r),f.process(r),d.process(r),h.process(r),g.process(r),x.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(M))},y=()=>{n=!0,i=!0,r.isProcessing||t(M)};return{schedule:Ml.reduce((m,E)=>{const w=o[E];return m[E]=(C,b=!1,v=!1)=>(n||y(),w.schedule(C,b,v)),m},{}),cancel:m=>{for(let E=0;E<Ml.length;E++)o[Ml[E]].cancel(m)},state:r,steps:o}}const{schedule:pt,cancel:Pr,state:$t,steps:sf}=fS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Kn,!0);let uu;function uw(){uu=void 0}const hn={now:()=>(uu===void 0&&hn.set($t.isProcessing||Ji.useManualTiming?$t.timestamp:performance.now()),uu),set:t=>{uu=t,queueMicrotask(uw)}},dS=t=>e=>typeof e=="string"&&e.startsWith(t),hS=dS("--"),cw=dS("var(--"),hm=t=>cw(t)?fw.test(t.split("/*")[0].trim()):!1,fw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function _g(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const bo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Fa={...bo,transform:t=>Ri(0,1,t)},El={...bo,default:1},ha=t=>Math.round(t*1e5)/1e5,pm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function dw(t){return t==null}const hw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,mm=(t,e)=>n=>!!(typeof n=="string"&&hw.test(n)&&n.startsWith(t)||e&&!dw(n)&&Object.prototype.hasOwnProperty.call(n,e)),pS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(pm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},pw=t=>Ri(0,255,t),of={...bo,transform:t=>Math.round(pw(t))},is={test:mm("rgb","red"),parse:pS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+of.transform(t)+", "+of.transform(e)+", "+of.transform(n)+", "+ha(Fa.transform(i))+")"};function mw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Yd={test:mm("#"),parse:mw,transform:is.transform},Za=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),cr=Za("deg"),wi=Za("%"),Ee=Za("px"),gw=Za("vh"),vw=Za("vw"),yg={...wi,parse:t=>wi.parse(t)/100,transform:t=>wi.transform(t*100)},Ys={test:mm("hsl","hue"),parse:pS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+wi.transform(ha(e))+", "+wi.transform(ha(n))+", "+ha(Fa.transform(i))+")"},Ft={test:t=>is.test(t)||Yd.test(t)||Ys.test(t),parse:t=>is.test(t)?is.parse(t):Ys.test(t)?Ys.parse(t):Yd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?is.transform(t):Ys.transform(t),getAnimatableNone:t=>{const e=Ft.parse(t);return e.alpha=0,Ft.transform(e)}},_w=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function yw(t){return isNaN(t)&&typeof t=="string"&&(t.match(pm)?.length||0)+(t.match(_w)?.length||0)>0}const mS="number",gS="color",xw="var",Sw="var(",xg="${}",Mw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Oa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(Mw,u=>(Ft.test(u)?(i.color.push(s),r.push(gS),n.push(Ft.parse(u))):u.startsWith(Sw)?(i.var.push(s),r.push(xw),n.push(u)):(i.number.push(s),r.push(mS),n.push(parseFloat(u))),++s,xg)).split(xg);return{values:n,split:a,indexes:i,types:r}}function vS(t){return Oa(t).values}function _S(t){const{split:e,types:n}=Oa(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===mS?s+=ha(r[o]):a===gS?s+=Ft.transform(r[o]):s+=r[o]}return s}}const Ew=t=>typeof t=="number"?0:Ft.test(t)?Ft.getAnimatableNone(t):t;function Tw(t){const e=vS(t);return _S(t)(e.map(Ew))}const Dr={test:yw,parse:vS,createTransformer:_S,getAnimatableNone:Tw};function af(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ww({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,u=2*n-a;r=af(u,a,t+1/3),s=af(u,a,t),o=af(u,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function qu(t,e){return n=>n>0?e:t}const xt=(t,e,n)=>t+(e-t)*n,lf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},Aw=[Yd,is,Ys],Cw=t=>Aw.find(e=>e.test(t));function Sg(t){const e=Cw(t);if(!e)return!1;let n=e.parse(t);return e===Ys&&(n=ww(n)),n}const Mg=(t,e)=>{const n=Sg(t),i=Sg(e);if(!n||!i)return qu(t,e);const r={...n};return s=>(r.red=lf(n.red,i.red,s),r.green=lf(n.green,i.green,s),r.blue=lf(n.blue,i.blue,s),r.alpha=xt(n.alpha,i.alpha,s),is.transform(r))},$d=new Set(["none","hidden"]);function bw(t,e){return $d.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function Rw(t,e){return n=>xt(t,e,n)}function gm(t){return typeof t=="number"?Rw:typeof t=="string"?hm(t)?qu:Ft.test(t)?Mg:Lw:Array.isArray(t)?yS:typeof t=="object"?Ft.test(t)?Mg:Pw:qu}function yS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>gm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function Pw(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=gm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function Dw(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const Lw=(t,e)=>{const n=Dr.createTransformer(e),i=Oa(t),r=Oa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?$d.has(t)&&!r.values.length||$d.has(e)&&!i.values.length?bw(t,e):$a(yS(Dw(i,r),r.values),n):qu(t,e)};function xS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?xt(t,e,n):gm(t)(t,e)}const Iw=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>pt.update(e,n),stop:()=>Pr(e),now:()=>$t.isProcessing?$t.timestamp:hn.now()}},SS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Yu=2e4;function vm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Yu;)e+=n,i=t.next(e);return e>=Yu?1/0:e}function Nw(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(vm(i),Yu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Yn(r)}}const Uw=5;function MS(t,e,n){const i=Math.max(e-Uw,0);return eS(n-t(i),e-i)}const wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},uf=.001;function Fw({duration:t=wt.duration,bounce:e=wt.bounce,velocity:n=wt.velocity,mass:i=wt.mass}){let r,s,o=1-e;o=Ri(wt.minDamping,wt.maxDamping,o),t=Ri(wt.minDuration,wt.maxDuration,Yn(t)),o<1?(r=c=>{const f=c*o,d=f*t,h=f-n,g=Kd(c,o),x=Math.exp(-d);return uf-h/g*x},s=c=>{const d=c*o*t,h=d*n+n,g=Math.pow(o,2)*Math.pow(c,2)*t,x=Math.exp(-d),M=Kd(Math.pow(c,2),o);return(-r(c)+uf>0?-1:1)*((h-g)*x)/M}):(r=c=>{const f=Math.exp(-c*t),d=(c-n)*t+1;return-uf+f*d},s=c=>{const f=Math.exp(-c*t),d=(n-c)*(t*t);return f*d});const a=5/t,u=kw(r,s,a);if(t=di(t),isNaN(u))return{stiffness:wt.stiffness,damping:wt.damping,duration:t};{const c=Math.pow(u,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const Ow=12;function kw(t,e,n){let i=n;for(let r=1;r<Ow;r++)i=i-t(i)/e(i);return i}function Kd(t,e){return t*Math.sqrt(1-e*e)}const Bw=["duration","bounce"],Vw=["stiffness","damping","mass"];function Eg(t,e){return e.some(n=>t[n]!==void 0)}function zw(t){let e={velocity:wt.velocity,stiffness:wt.stiffness,damping:wt.damping,mass:wt.mass,isResolvedFromDuration:!1,...t};if(!Eg(t,Vw)&&Eg(t,Bw))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ri(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:wt.mass,stiffness:r,damping:s}}else{const n=Fw(t);e={...e,...n,mass:wt.mass},e.isResolvedFromDuration=!0}return e}function $u(t=wt.visualDuration,e=wt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:u,damping:c,mass:f,duration:d,velocity:h,isResolvedFromDuration:g}=zw({...n,velocity:-Yn(n.velocity||0)}),x=h||0,M=c/(2*Math.sqrt(u*f)),y=o-s,l=Yn(Math.sqrt(u/f)),p=Math.abs(y)<5;i||(i=p?wt.restSpeed.granular:wt.restSpeed.default),r||(r=p?wt.restDelta.granular:wt.restDelta.default);let m;if(M<1){const w=Kd(l,M);m=C=>{const b=Math.exp(-M*l*C);return o-b*((x+M*l*y)/w*Math.sin(w*C)+y*Math.cos(w*C))}}else if(M===1)m=w=>o-Math.exp(-l*w)*(y+(x+l*y)*w);else{const w=l*Math.sqrt(M*M-1);m=C=>{const b=Math.exp(-M*l*C),v=Math.min(w*C,300);return o-b*((x+M*l*y)*Math.sinh(v)+w*y*Math.cosh(v))/w}}const E={calculatedDuration:g&&d||null,next:w=>{const C=m(w);if(g)a.done=w>=d;else{let b=w===0?x:0;M<1&&(b=w===0?di(x):MS(m,w,C));const v=Math.abs(b)<=i,_=Math.abs(o-C)<=r;a.done=v&&_}return a.value=a.done?o:C,a},toString:()=>{const w=Math.min(vm(E),Yu),C=SS(b=>E.next(w*b).value,w,30);return w+"ms "+C},toTransition:()=>{}};return E}$u.applyToOptions=t=>{const e=Nw(t,100,$u);return t.ease=e.ease,t.duration=di(e.duration),t.type="keyframes",t};function Zd({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:u,restDelta:c=.5,restSpeed:f}){const d=t[0],h={done:!1,value:d},g=v=>a!==void 0&&v<a||u!==void 0&&v>u,x=v=>a===void 0?u:u===void 0||Math.abs(a-v)<Math.abs(u-v)?a:u;let M=n*e;const y=d+M,l=o===void 0?y:o(y);l!==y&&(M=l-d);const p=v=>-M*Math.exp(-v/i),m=v=>l+p(v),E=v=>{const _=p(v),S=m(v);h.done=Math.abs(_)<=c,h.value=h.done?l:S};let w,C;const b=v=>{g(h.value)&&(w=v,C=$u({keyframes:[h.value,x(h.value)],velocity:MS(m,v,h.value),damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return b(0),{calculatedDuration:null,next:v=>{let _=!1;return!C&&w===void 0&&(_=!0,E(v),b(v)),w!==void 0&&v>=w?C.next(v-w):(!_&&E(v),h)}}}function Hw(t,e,n){const i=[],r=n||Ji.mix||xS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const u=Array.isArray(e)?e[o]||Kn:e;a=$a(u,a)}i.push(a)}return i}function Gw(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(lm(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=Hw(e,i,r),u=a.length,c=f=>{if(o&&f<t[0])return e[0];let d=0;if(u>1)for(;d<t.length-2&&!(f<t[d+1]);d++);const h=Ua(t[d],t[d+1],f);return a[d](h)};return n?f=>c(Ri(t[0],t[s-1],f)):c}function Ww(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ua(0,e,i);t.push(xt(n,1,r))}}function jw(t){const e=[0];return Ww(e,t.length-1),e}function Xw(t,e){return t.map(n=>n*e)}function qw(t,e){return t.map(()=>e||uS).splice(0,t.length-1)}function pa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=rw(i)?i.map(vg):vg(i),s={done:!1,value:e[0]},o=Xw(n&&n.length===e.length?n:jw(e),t),a=Gw(o,e,{ease:Array.isArray(r)?r:qw(e,r)});return{calculatedDuration:t,next:u=>(s.value=a(u),s.done=u>=t,s)}}const Yw=t=>t!==null;function _m(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(Yw),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const $w={decay:Zd,inertia:Zd,tween:pa,keyframes:pa,spring:$u};function ES(t){typeof t.type=="string"&&(t.type=$w[t.type])}class ym{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const Kw=t=>t/100;class xm extends ym{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==hn.now()&&this.tick(hn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;ES(e);const{type:n=pa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const u=n||pa;u!==pa&&typeof a[0]!="number"&&(this.mixKeyframes=$a(Kw,xS(a[0],a[1])),a=[0,100]);const c=u({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=u({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=vm(c));const{calculatedDuration:f}=c;this.calculatedDuration=f,this.resolvedDuration=f+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:u}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:f,repeat:d,repeatType:h,repeatDelay:g,type:x,onUpdate:M,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const l=this.currentTime-c*(this.playbackSpeed>=0?1:-1),p=this.playbackSpeed>=0?l<0:l>r;this.currentTime=Math.max(l,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let m=this.currentTime,E=i;if(d){const v=Math.min(this.currentTime,r)/a;let _=Math.floor(v),S=v%1;!S&&v>=1&&(S=1),S===1&&_--,_=Math.min(_,d+1),!!(_%2)&&(h==="reverse"?(S=1-S,g&&(S-=g/a)):h==="mirror"&&(E=o)),m=Ri(0,1,S)*a}const w=p?{done:!1,value:f[0]}:E.next(m);s&&(w.value=s(w.value));let{done:C}=w;!p&&u!==null&&(C=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return b&&x!==Zd&&(w.value=_m(f,this.options,y,this.speed)),M&&M(w.value),b&&this.finish(),w}then(e,n){return this.finished.then(e,n)}get duration(){return Yn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Yn(e)}get time(){return Yn(this.currentTime)}set time(e){e=di(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(hn.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Yn(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Iw,startTime:n}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),this.options.onPlay?.();const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(hn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function Zw(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const rs=t=>t*180/Math.PI,Qd=t=>{const e=rs(Math.atan2(t[1],t[0]));return Jd(e)},Qw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Qd,rotateZ:Qd,skewX:t=>rs(Math.atan(t[1])),skewY:t=>rs(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Jd=t=>(t=t%360,t<0&&(t+=360),t),Tg=Qd,wg=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Ag=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Jw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:wg,scaleY:Ag,scale:t=>(wg(t)+Ag(t))/2,rotateX:t=>Jd(rs(Math.atan2(t[6],t[5]))),rotateY:t=>Jd(rs(Math.atan2(-t[2],t[0]))),rotateZ:Tg,rotate:Tg,skewX:t=>rs(Math.atan(t[4])),skewY:t=>rs(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function eh(t){return t.includes("scale")?1:0}function th(t,e){if(!t||t==="none")return eh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=Jw,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=Qw,r=a}if(!r)return eh(e);const s=i[e],o=r[1].split(",").map(tA);return typeof s=="function"?s(o):o[s]}const eA=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return th(n,e)};function tA(t){return parseFloat(t.trim())}const Ro=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Po=new Set(Ro),Cg=t=>t===bo||t===Ee,nA=new Set(["x","y","z"]),iA=Ro.filter(t=>!nA.has(t));function rA(t){const e=[];return iA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const _r={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>th(e,"x"),y:(t,{transform:e})=>th(e,"y")};_r.translateX=_r.x;_r.translateY=_r.y;const us=new Set;let nh=!1,ih=!1,rh=!1;function TS(){if(ih){const t=Array.from(us).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=rA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{i.getValue(s)?.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}ih=!1,nh=!1,us.forEach(t=>t.complete(rh)),us.clear()}function wS(){us.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ih=!0)})}function sA(){rh=!0,wS(),TS(),rh=!1}class Sm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(us.add(this),nh||(nh=!0,pt.read(wS),pt.resolveKeyframes(TS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r?.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}Zw(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),us.delete(this)}cancel(){this.state==="scheduled"&&(us.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const oA=t=>t.startsWith("--");function aA(t,e,n){oA(e)?t.style.setProperty(e,n):t.style[e]=n}const lA=um(()=>window.ScrollTimeline!==void 0),uA={};function cA(t,e){const n=um(t);return()=>uA[e]??n()}const AS=cA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ta=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,bg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ta([0,.65,.55,1]),circOut:ta([.55,0,1,.45]),backIn:ta([.31,.01,.66,-.59]),backOut:ta([.33,1.53,.69,.99])};function CS(t,e){if(t)return typeof t=="function"?AS()?SS(t,e):"ease-out":cS(t)?ta(t):Array.isArray(t)?t.map(n=>CS(n,e)||bg.easeOut):bg[t]}function fA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:u}={},c=void 0){const f={[e]:n};u&&(f.offset=u);const d=CS(a,r);Array.isArray(d)&&(f.easing=d);const h={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),t.animate(f,h)}function bS(t){return typeof t=="function"&&"applyToOptions"in t}function dA({type:t,...e}){return bS(t)&&AS()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class RS extends ym{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:u}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,lm(typeof e.type!="string");const c=dA(e);this.animation=fA(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const f=_m(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(f):aA(n,i,f),this.animation.cancel()}u?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Yn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Yn(e)}get time(){return Yn(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=di(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&lA()?(this.animation.timeline=e,Kn):n(this)}}const PS={anticipate:oS,backInOut:sS,circInOut:lS};function hA(t){return t in PS}function pA(t){typeof t.ease=="string"&&hA(t.ease)&&(t.ease=PS[t.ease])}const cf=10;class mA extends RS{constructor(e){pA(e),ES(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new xm({...o,autoplay:!1}),u=Math.max(cf,hn.now()-this.startTime),c=Ri(0,cf,u-cf);n.setWithVelocity(a.sample(Math.max(0,u-c)).value,a.sample(u).value,c),a.stop()}}const Rg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Dr.test(t)||t==="0")&&!t.startsWith("url("));function gA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function vA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Rg(r,e),a=Rg(s,e);return!o||!a?!1:gA(t)||(n==="spring"||bS(n))&&i}function sh(t){t.duration=0,t.type="keyframes"}const _A=new Set(["opacity","clipPath","filter","transform"]),yA=um(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function xA(t){const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o}=t;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=e.owner.getProps();return yA()&&n&&_A.has(n)&&(n!=="transform"||!c)&&!u&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const SA=40;class MA extends ym{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:u,motionValue:c,element:f,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=hn.now();const h={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:u,motionValue:c,element:f,...d},g=f?.KeyframeResolver||Sm;this.keyframeResolver=new g(a,(x,M,y)=>this.onKeyframesResolved(x,M,h,!y),u,c,f),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:u,isHandoff:c,onUpdate:f}=i;this.resolvedAt=hn.now(),vA(e,s,o,a)||((Ji.instantAnimations||!u)&&f?.(_m(e,i,n)),e[0]=e[e.length-1],sh(i),i.repeat=0);const h={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>SA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},g=!c&&xA(h),x=h.motionValue?.owner?.current,M=g?new mA({...h,element:x}):new xm(h);M.finished.then(()=>{this.notifyFinished()}).catch(Kn),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),sA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function DS(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,f)=>c.sortNodePosition(f)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const EA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TA(t){const e=EA.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function LS(t,e,n=1){const[i,r]=TA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Zx(o)?parseFloat(o):o}return hm(r)?LS(r,e,n+1):r}const wA={type:"spring",stiffness:500,damping:25,restSpeed:10},AA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),CA={type:"keyframes",duration:.8},bA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},RA=(t,{keyframes:e})=>e.length>2?CA:Po.has(t)?t.startsWith("scale")?AA(e[1]):wA:bA,PA=t=>t!==null;function DA(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(PA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return r[s]}function IS(t,e){if(t?.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Mm(t,e){const n=t?.[e]??t?.default??t;return n!==t?IS(n,t):n}function LA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:u,elapsed:c,...f}){return!!Object.keys(f).length}const Em=(t,e,n,i={},r,s)=>o=>{const a=Mm(i,t)||{},u=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-di(u);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};LA(a)||Object.assign(f,RA(t,f)),f.duration&&(f.duration=di(f.duration)),f.repeatDelay&&(f.repeatDelay=di(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let d=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(sh(f),f.delay===0&&(d=!0)),(Ji.instantAnimations||Ji.skipAnimations||r?.shouldSkipAnimations)&&(d=!0,sh(f),f.delay=0),f.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const h=DA(f.keyframes,a);if(h!==void 0){pt.update(()=>{f.onUpdate(h),f.onComplete()});return}}return a.isSync?new xm(f):new MA(f)};function Pg(t){const e=[{},{}];return t?.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Tm(t,e,n,i){if(typeof e=="function"){const[r,s]=Pg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Pg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function ao(t,e,n){const i=t.getProps();return Tm(i,e,n!==void 0?n:i.custom,t)}const NS=new Set(["width","height","top","left","right","bottom",...Ro]),Dg=30,IA=t=>!isNaN(parseFloat(t));class NA{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const r=hn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=hn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=IA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new cm);const i=this.events[e].add(n);return e==="change"?()=>{i(),pt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=hn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Dg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Dg);return eS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function _o(t,e){return new NA(t,e)}const oh=t=>Array.isArray(t);function UA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,_o(n))}function FA(t){return oh(t)?t[t.length-1]||0:t}function OA(t,e){const n=ao(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=FA(s[o]);UA(t,o,a)}}const sn=t=>!!(t&&t.getVelocity);function kA(t){return!!(sn(t)&&t.add)}function ah(t,e){const n=t.getValue("willChange");if(kA(n))return n.add(e);if(!n&&Ji.WillChange){const i=new Ji.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function wm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const BA="framerAppearId",US="data-"+wm(BA);function FS(t){return t.props[US]}function VA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function OS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const u=t.getDefaultTransition();s=s?IS(s,u):u;const c=s?.reduceMotion;i&&(s=i);const f=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const h in a){const g=t.getValue(h,t.latestValues[h]??null),x=a[h];if(x===void 0||d&&VA(d,h))continue;const M={delay:n,...Mm(s||{},h)},y=g.get();if(y!==void 0&&!g.isAnimating&&!Array.isArray(x)&&x===y&&!M.velocity)continue;let l=!1;if(window.MotionHandoffAnimation){const E=FS(t);if(E){const w=window.MotionHandoffAnimation(E,h,pt);w!==null&&(M.startTime=w,l=!0)}}ah(t,h);const p=c??t.shouldReduceMotion;g.start(Em(h,g,x,p&&NS.has(h)?{type:!1}:M,t,l));const m=g.animation;m&&f.push(m)}if(o){const h=()=>pt.update(()=>{o&&OA(t,o)});f.length?Promise.all(f).then(h):h()}return f}function lh(t,e,n={}){const i=ao(t,e,n.type==="exit"?t.presenceContext?.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(OS(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=r;return zA(t,e,u,c,f,d,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[u,c]=a==="beforeChildren"?[s,o]:[o,s];return u().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function zA(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const u of t.variantChildren)u.notify("AnimationStart",e),a.push(lh(u,e,{...o,delay:n+(typeof i=="function"?0:i)+DS(t.variantChildren,u,i,r,s)}).then(()=>u.notify("AnimationComplete",e)));return Promise.all(a)}function HA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>lh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=lh(t,e,n);else{const r=typeof e=="function"?ao(t,e,n.custom):e;i=Promise.all(OS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const GA={test:t=>t==="auto",parse:t=>t},kS=t=>e=>e.test(t),BS=[bo,Ee,wi,cr,vw,gw,GA],Lg=t=>BS.find(kS(t));function WA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Jx(t):!0}const jA=new Set(["brightness","contrast","saturate","opacity"]);function XA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(pm)||[];if(!i)return t;const r=n.replace(i,"");let s=jA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const qA=/\b([a-z-]*)\(.*?\)/gu,uh={...Dr,getAnimatableNone:t=>{const e=t.match(qA);return e?e.map(XA).join(" "):t}},Ig={...bo,transform:Math.round},YA={rotate:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:El,scaleX:El,scaleY:El,scaleZ:El,skew:cr,skewX:cr,skewY:cr,distance:Ee,translateX:Ee,translateY:Ee,translateZ:Ee,x:Ee,y:Ee,z:Ee,perspective:Ee,transformPerspective:Ee,opacity:Fa,originX:yg,originY:yg,originZ:Ee},Am={borderWidth:Ee,borderTopWidth:Ee,borderRightWidth:Ee,borderBottomWidth:Ee,borderLeftWidth:Ee,borderRadius:Ee,borderTopLeftRadius:Ee,borderTopRightRadius:Ee,borderBottomRightRadius:Ee,borderBottomLeftRadius:Ee,width:Ee,maxWidth:Ee,height:Ee,maxHeight:Ee,top:Ee,right:Ee,bottom:Ee,left:Ee,inset:Ee,insetBlock:Ee,insetBlockStart:Ee,insetBlockEnd:Ee,insetInline:Ee,insetInlineStart:Ee,insetInlineEnd:Ee,padding:Ee,paddingTop:Ee,paddingRight:Ee,paddingBottom:Ee,paddingLeft:Ee,paddingBlock:Ee,paddingBlockStart:Ee,paddingBlockEnd:Ee,paddingInline:Ee,paddingInlineStart:Ee,paddingInlineEnd:Ee,margin:Ee,marginTop:Ee,marginRight:Ee,marginBottom:Ee,marginLeft:Ee,marginBlock:Ee,marginBlockStart:Ee,marginBlockEnd:Ee,marginInline:Ee,marginInlineStart:Ee,marginInlineEnd:Ee,fontSize:Ee,backgroundPositionX:Ee,backgroundPositionY:Ee,...YA,zIndex:Ig,fillOpacity:Fa,strokeOpacity:Fa,numOctaves:Ig},$A={...Am,color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,filter:uh,WebkitFilter:uh},VS=t=>$A[t];function zS(t,e){let n=VS(t);return n!==uh&&(n=Dr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const KA=new Set(["auto","none","0"]);function ZA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!KA.has(s)&&Oa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=zS(n,r)}class QA extends Sm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let d=e[f];if(typeof d=="string"&&(d=d.trim(),hm(d))){const h=LS(d,n.current);h!==void 0&&(e[f]=h),f===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!NS.has(i)||e.length!==2)return;const[r,s]=e,o=Lg(r),a=Lg(s),u=_g(r),c=_g(s);if(u!==c&&_r[i]){this.needsMeasurement=!0;return}if(o!==a)if(Cg(o)&&Cg(a))for(let f=0;f<e.length;f++){const d=e[f];typeof d=="string"&&(e[f]=parseFloat(d))}else _r[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||WA(e[r]))&&i.push(r);i.length&&ZA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_r[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=_r[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([a,u])=>{e.getValue(a).set(u)}),this.resolveNoneKeyframes()}}const JA=new Set(["opacity","clipPath","filter","transform"]);function HS(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=n?.[t]??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const GS=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function ch(t){return Qx(t)&&"offsetHeight"in t}const{schedule:Cm}=fS(queueMicrotask,!1),ri={x:!1,y:!1};function WS(){return ri.x||ri.y}function eC(t){return t==="x"||t==="y"?ri[t]?null:(ri[t]=!0,()=>{ri[t]=!1}):ri.x||ri.y?null:(ri.x=ri.y=!0,()=>{ri.x=ri.y=!1})}function jS(t,e){const n=HS(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function tC(t){return!(t.pointerType==="touch"||WS())}function nC(t,e,n={}){const[i,r,s]=jS(t,n);return i.forEach(o=>{let a=!1,u=!1,c;const f=()=>{o.removeEventListener("pointerleave",x)},d=y=>{c&&(c(y),c=void 0),f()},h=y=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),u&&(u=!1,d(y))},g=()=>{a=!0,window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",h,r)},x=y=>{if(y.pointerType!=="touch"){if(a){u=!0;return}d(y)}},M=y=>{if(!tC(y))return;u=!1;const l=e(o,y);typeof l=="function"&&(c=l,o.addEventListener("pointerleave",x,r))};o.addEventListener("pointerenter",M,r),o.addEventListener("pointerdown",g,r)}),s}const XS=(t,e)=>e?t===e?!0:XS(t,e.parentElement):!1,bm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,iC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function rC(t){return iC.has(t.tagName)||t.isContentEditable===!0}const sC=new Set(["INPUT","SELECT","TEXTAREA"]);function oC(t){return sC.has(t.tagName)||t.isContentEditable===!0}const cu=new WeakSet;function Ng(t){return e=>{e.key==="Enter"&&t(e)}}function ff(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const aC=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Ng(()=>{if(cu.has(n))return;ff(n,"down");const r=Ng(()=>{ff(n,"up")}),s=()=>ff(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Ug(t){return bm(t)&&!WS()}const Fg=new WeakSet;function lC(t,e,n={}){const[i,r,s]=jS(t,n),o=a=>{const u=a.currentTarget;if(!Ug(a)||Fg.has(a))return;cu.add(u),n.stopPropagation&&Fg.add(a);const c=e(u,a),f=(g,x)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),cu.has(u)&&cu.delete(u),Ug(g)&&typeof c=="function"&&c(g,{success:x})},d=g=>{f(g,u===window||u===document||n.useGlobalTarget||XS(u,g.target))},h=g=>{f(g,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),ch(a)&&(a.addEventListener("focus",c=>aC(c,r)),!rC(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Rm(t){return Qx(t)&&"ownerSVGElement"in t}const fu=new WeakMap;let du;const qS=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Rm(i)&&"getBBox"in i?i.getBBox()[e]:i[n],uC=qS("inline","width","offsetWidth"),cC=qS("block","height","offsetHeight");function fC({target:t,borderBoxSize:e}){fu.get(t)?.forEach(n=>{n(t,{get width(){return uC(t,e)},get height(){return cC(t,e)}})})}function dC(t){t.forEach(fC)}function hC(){typeof ResizeObserver>"u"||(du=new ResizeObserver(dC))}function pC(t,e){du||hC();const n=HS(t);return n.forEach(i=>{let r=fu.get(i);r||(r=new Set,fu.set(i,r)),r.add(e),du?.observe(i)}),()=>{n.forEach(i=>{const r=fu.get(i);r?.delete(e),r?.size||du?.unobserve(i)})}}const hu=new Set;let $s;function mC(){$s=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};hu.forEach(e=>e(t))},window.addEventListener("resize",$s)}function gC(t){return hu.add(t),$s||mC(),()=>{hu.delete(t),!hu.size&&typeof $s=="function"&&(window.removeEventListener("resize",$s),$s=void 0)}}function Og(t,e){return typeof t=="function"?gC(t):pC(t,e)}function vC(t){return Rm(t)&&t.tagName==="svg"}const _C=[...BS,Ft,Dr],yC=t=>_C.find(kS(t)),kg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ks=()=>({x:kg(),y:kg()}),Bg=()=>({min:0,max:0}),kt=()=>({x:Bg(),y:Bg()}),xC=new WeakMap;function xc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ka(t){return typeof t=="string"||Array.isArray(t)}const Pm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dm=["initial",...Pm];function Sc(t){return xc(t.animate)||Dm.some(e=>ka(t[e]))}function YS(t){return!!(Sc(t)||t.variants)}function SC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(sn(r))t.addValue(i,r);else if(sn(s))t.addValue(i,_o(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,_o(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const fh={current:null},$S={current:!1},MC=typeof window<"u";function EC(){if($S.current=!0,!!MC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>fh.current=t.matches;t.addEventListener("change",e),e()}else fh.current=!1}const Vg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ku={};function KS(t){Ku=t}function TC(){return Ku}class wC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Sm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=hn.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,pt.render(this.render,!1,!0))};const{latestValues:c,renderState:f}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=u,this.blockInitialAnimation=!!o,this.isControllingVariants=Sc(n),this.isVariantNode=YS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in h){const x=h[g];c[g]!==void 0&&sn(x)&&x.set(c[g])}}mount(e){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=e,xC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:($S.current||EC(),this.shouldReduceMotion=fh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Pr(this.notifyUpdate),Pr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&JA.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:u,ease:c,duration:f}=n.accelerate,d=new RS({element:this.current,name:e,keyframes:a,times:u,ease:c,duration:di(f)}),h=o(d);this.valueSubscriptions.set(e,()=>{h(),d.cancel()});return}const i=Po.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&pt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ku){const n=Ku[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):kt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Vg.length;i++){const r=Vg[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=SC(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=_o(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Zx(i)||Jx(i))?i=parseFloat(i):!yC(i)&&Dr.test(n)&&(i=zS(e,n)),this.setBaseTarget(e,sn(i)?i.get():i)),sn(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const s=Tm(this.props,n,this.presenceContext?.custom);s&&(i=s[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!sn(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new cm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Cm.render(this.render)}}class ZS extends wC{constructor(){super(...arguments),this.KeyframeResolver=QA}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;sn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Fr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function QS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function AC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function CC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function df(t){return t===void 0||t===1}function dh({scale:t,scaleX:e,scaleY:n}){return!df(t)||!df(e)||!df(n)}function $r(t){return dh(t)||JS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function JS(t){return zg(t.x)||zg(t.y)}function zg(t){return t&&t!=="0%"}function Zu(t,e,n){const i=t-n,r=e*i;return n+r}function Hg(t,e,n,i,r){return r!==void 0&&(t=Zu(t,r,i)),Zu(t,n,i)+e}function hh(t,e=0,n=1,i,r){t.min=Hg(t.min,e,n,i,r),t.max=Hg(t.max,e,n,i,r)}function eM(t,{x:e,y:n}){hh(t.x,e.translate,e.scale,e.originPoint),hh(t.y,n.translate,n.scale,n.originPoint)}const Gg=.999999999999,Wg=1.0000000000001;function bC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Qs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,eM(t,o)),i&&$r(s.latestValues)&&Qs(t,s.latestValues))}e.x<Wg&&e.x>Gg&&(e.x=1),e.y<Wg&&e.y>Gg&&(e.y=1)}function Zs(t,e){t.min=t.min+e,t.max=t.max+e}function jg(t,e,n,i,r=.5){const s=xt(t.min,t.max,r);hh(t,e,n,s,i)}function Qs(t,e){jg(t.x,e.x,e.scaleX,e.scale,e.originX),jg(t.y,e.y,e.scaleY,e.scale,e.originY)}function tM(t,e){return QS(CC(t.getBoundingClientRect(),e))}function RC(t,e,n){const i=tM(t,n),{scroll:r}=e;return r&&(Zs(i.x,r.offset.x),Zs(i.y,r.offset.y)),i}const PC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},DC=Ro.length;function LC(t,e,n){let i="",r=!0;for(let s=0;s<DC;s++){const o=Ro[s],a=t[o];if(a===void 0)continue;let u=!0;if(typeof a=="number")u=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);u=o.startsWith("scale")?c===1:c===0}if(!u||n){const c=GS(a,Am[o]);if(!u){r=!1;const f=PC[o]||o;i+=`${f}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Lm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const u in e){const c=e[u];if(Po.has(u)){o=!0;continue}else if(hS(u)){r[u]=c;continue}else{const f=GS(c,Am[u]);u.startsWith("origin")?(a=!0,s[u]=f):i[u]=f}}if(e.transform||(o||n?i.transform=LC(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:u="50%",originY:c="50%",originZ:f=0}=s;i.transformOrigin=`${u} ${c} ${f}`}}function nM(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r?.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function Xg(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Go={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ee.test(t))t=parseFloat(t);else return t;const n=Xg(t,e.target.x),i=Xg(t,e.target.y);return`${n}% ${i}%`}},IC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Dr.parse(t);if(r.length>5)return i;const s=Dr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,u=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=u;const c=xt(a,u,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},ph={borderRadius:{...Go,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Go,borderTopRightRadius:Go,borderBottomLeftRadius:Go,borderBottomRightRadius:Go,boxShadow:IC};function iM(t,{layout:e,layoutId:n}){return Po.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!ph[t]||t==="opacity")}function Im(t,e,n){const i=t.style,r=e?.style,s={};if(!i)return s;for(const o in i)(sn(i[o])||r&&sn(r[o])||iM(o,t)||n?.getValue(o)?.liveStyle!==void 0)&&(s[o]=i[o]);return s}function NC(t){return window.getComputedStyle(t)}class UC extends ZS{constructor(){super(...arguments),this.type="html",this.renderInstance=nM}readValueFromInstance(e,n){if(Po.has(n))return this.projection?.isProjecting?eh(n):eA(e,n);{const i=NC(e),r=(hS(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return tM(e,n)}build(e,n,i){Lm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Im(e,n,i)}}const FC={offset:"stroke-dashoffset",array:"stroke-dasharray"},OC={offset:"strokeDashoffset",array:"strokeDasharray"};function kC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?FC:OC;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const BC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function rM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},u,c,f){if(Lm(t,a,c),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:h}=t;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=f?.transformBox??"fill-box",delete d.transformBox);for(const g of BC)d[g]!==void 0&&(h[g]=d[g],delete d[g]);e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&kC(d,r,s,o,!1)}const sM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),oM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function VC(t,e,n,i){nM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(sM.has(r)?r:wm(r),e.attrs[r])}function aM(t,e,n){const i=Im(t,e,n);for(const r in t)if(sn(t[r])||sn(e[r])){const s=Ro.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class zC extends ZS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=kt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Po.has(n)){const i=VS(n);return i&&i.default||0}return n=sM.has(n)?n:wm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return aM(e,n,i)}build(e,n,i){rM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){VC(e,n,i,r)}mount(e){this.isSVGTag=oM(e.tagName),super.mount(e)}}const HC=Dm.length;function lM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?lM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<HC;n++){const i=Dm[n],r=t.props[i];(ka(r)||r===!1)&&(e[i]=r)}return e}function uM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const GC=[...Pm].reverse(),WC=Pm.length;function jC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>HA(t,n,i)))}function XC(t){let e=jC(t),n=qg(),i=!0;const r=u=>(c,f)=>{const d=ao(t,f,u==="exit"?t.presenceContext?.custom:void 0);if(d){const{transition:h,transitionEnd:g,...x}=d;c={...c,...x,...g}}return c};function s(u){e=u(t)}function o(u){const{props:c}=t,f=lM(t.parent)||{},d=[],h=new Set;let g={},x=1/0;for(let y=0;y<WC;y++){const l=GC[y],p=n[l],m=c[l]!==void 0?c[l]:f[l],E=ka(m),w=l===u?p.isActive:null;w===!1&&(x=y);let C=m===f[l]&&m!==c[l]&&E;if(C&&i&&t.manuallyAnimateOnMount&&(C=!1),p.protectedKeys={...g},!p.isActive&&w===null||!m&&!p.prevProp||xc(m)||typeof m=="boolean")continue;if(l==="exit"&&p.isActive&&w!==!0){p.prevResolvedValues&&(g={...g,...p.prevResolvedValues});continue}const b=qC(p.prevProp,m);let v=b||l===u&&p.isActive&&!C&&E||y>x&&E,_=!1;const S=Array.isArray(m)?m:[m];let T=S.reduce(r(l),{});w===!1&&(T={});const{prevResolvedValues:I={}}=p,L={...I,...T},U=B=>{v=!0,h.has(B)&&(_=!0,h.delete(B)),p.needsAnimating[B]=!0;const P=t.getValue(B);P&&(P.liveStyle=!1)};for(const B in L){const P=T[B],O=I[B];if(g.hasOwnProperty(B))continue;let V=!1;oh(P)&&oh(O)?V=!uM(P,O):V=P!==O,V?P!=null?U(B):h.add(B):P!==void 0&&h.has(B)?U(B):p.protectedKeys[B]=!0}p.prevProp=m,p.prevResolvedValues=T,p.isActive&&(g={...g,...T}),i&&t.blockInitialAnimation&&(v=!1);const k=C&&b;v&&(!k||_)&&d.push(...S.map(B=>{const P={type:l};if(typeof B=="string"&&i&&!k&&t.manuallyAnimateOnMount&&t.parent){const{parent:O}=t,V=ao(O,B);if(O.enteringChildren&&V){const{delayChildren:q}=V.transition||{};P.delay=DS(O.enteringChildren,t,q)}}return{animation:B,options:P}}))}if(h.size){const y={};if(typeof c.initial!="boolean"){const l=ao(t,Array.isArray(c.initial)?c.initial[0]:c.initial);l&&l.transition&&(y.transition=l.transition)}h.forEach(l=>{const p=t.getBaseTarget(l),m=t.getValue(l);m&&(m.liveStyle=!0),y[l]=p??null}),d.push({animation:y})}let M=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(M=!1),i=!1,M?e(d):Promise.resolve()}function a(u,c){if(n[u].isActive===c)return Promise.resolve();t.variantChildren?.forEach(d=>d.animationState?.setActive(u,c)),n[u].isActive=c;const f=o(u);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=qg()}}}function qC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!uM(e,t):!1}function Br(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function qg(){return{animate:Br(!0),whileInView:Br(),whileHover:Br(),whileTap:Br(),whileDrag:Br(),whileFocus:Br(),exit:Br()}}function Yg(t,e){t.min=e.min,t.max=e.max}function ei(t,e){Yg(t.x,e.x),Yg(t.y,e.y)}function $g(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const cM=1e-4,YC=1-cM,$C=1+cM,fM=.01,KC=0-fM,ZC=0+fM;function pn(t){return t.max-t.min}function QC(t,e,n){return Math.abs(t-e)<=n}function Kg(t,e,n,i=.5){t.origin=i,t.originPoint=xt(e.min,e.max,t.origin),t.scale=pn(n)/pn(e),t.translate=xt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=YC&&t.scale<=$C||isNaN(t.scale))&&(t.scale=1),(t.translate>=KC&&t.translate<=ZC||isNaN(t.translate))&&(t.translate=0)}function ma(t,e,n,i){Kg(t.x,e.x,n.x,i?i.originX:void 0),Kg(t.y,e.y,n.y,i?i.originY:void 0)}function Zg(t,e,n){t.min=n.min+e.min,t.max=t.min+pn(e)}function JC(t,e,n){Zg(t.x,e.x,n.x),Zg(t.y,e.y,n.y)}function Qg(t,e,n){t.min=e.min-n.min,t.max=t.min+pn(e)}function Qu(t,e,n){Qg(t.x,e.x,n.x),Qg(t.y,e.y,n.y)}function Jg(t,e,n,i,r){return t-=e,t=Zu(t,1/n,i),r!==void 0&&(t=Zu(t,1/r,i)),t}function eb(t,e=0,n=1,i=.5,r,s=t,o=t){if(wi.test(e)&&(e=parseFloat(e),e=xt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=xt(s.min,s.max,i);t===s&&(a-=e),t.min=Jg(t.min,e,n,a,r),t.max=Jg(t.max,e,n,a,r)}function ev(t,e,[n,i,r],s,o){eb(t,e[n],e[i],e[r],e.scale,s,o)}const tb=["x","scaleX","originX"],nb=["y","scaleY","originY"];function tv(t,e,n,i){ev(t.x,e,tb,n?n.x:void 0,i?i.x:void 0),ev(t.y,e,nb,n?n.y:void 0,i?i.y:void 0)}function nv(t){return t.translate===0&&t.scale===1}function dM(t){return nv(t.x)&&nv(t.y)}function iv(t,e){return t.min===e.min&&t.max===e.max}function ib(t,e){return iv(t.x,e.x)&&iv(t.y,e.y)}function rv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function hM(t,e){return rv(t.x,e.x)&&rv(t.y,e.y)}function sv(t){return pn(t.x)/pn(t.y)}function ov(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function _i(t){return[t("x"),t("y")]}function rb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=n?.z||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:f,rotateX:d,rotateY:h,skewX:g,skewY:x}=n;c&&(i=`perspective(${c}px) ${i}`),f&&(i+=`rotate(${f}deg) `),d&&(i+=`rotateX(${d}deg) `),h&&(i+=`rotateY(${h}deg) `),g&&(i+=`skewX(${g}deg) `),x&&(i+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,u=t.y.scale*e.y;return(a!==1||u!==1)&&(i+=`scale(${a}, ${u})`),i||"none"}const pM=["TopLeft","TopRight","BottomLeft","BottomRight"],sb=pM.length,av=t=>typeof t=="string"?parseFloat(t):t,lv=t=>typeof t=="number"||Ee.test(t);function ob(t,e,n,i,r,s){r?(t.opacity=xt(0,n.opacity??1,ab(i)),t.opacityExit=xt(e.opacity??1,0,lb(i))):s&&(t.opacity=xt(e.opacity??1,n.opacity??1,i));for(let o=0;o<sb;o++){const a=`border${pM[o]}Radius`;let u=uv(e,a),c=uv(n,a);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||lv(u)===lv(c)?(t[a]=Math.max(xt(av(u),av(c),i),0),(wi.test(c)||wi.test(u))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=xt(e.rotate||0,n.rotate||0,i))}function uv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const ab=mM(0,.5,aS),lb=mM(.5,.95,Kn);function mM(t,e,n){return i=>i<t?0:i>e?1:n(Ua(t,e,i))}function ub(t,e,n){const i=sn(t)?t:_o(t);return i.start(Em("",i,e,n)),i.animation}function Ba(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const cb=(t,e)=>t.depth-e.depth;class fb{constructor(){this.children=[],this.isDirty=!1}add(e){am(this.children,e),this.isDirty=!0}remove(e){Xu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(cb),this.isDirty=!1,this.children.forEach(e)}}function db(t,e){const n=hn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Pr(i),t(s-e))};return pt.setup(i,!0),()=>Pr(i)}function pu(t){return sn(t)?t.get():t}class hb{constructor(){this.members=[]}add(e){am(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;r&&r.isConnected===!1&&i.isPresent!==!1&&!i.snapshot&&Xu(this.members,i)}e.scheduleRender()}remove(e){if(Xu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r],o=s.instance;if(s.isPresent!==!1&&(!o||o.isConnected!==!1)){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender();const r=i.options.layoutDependency,s=e.options.layoutDependency;if(!(r!==void 0&&s!==void 0&&r===s)){const u=i.instance;u&&u.isConnected===!1&&!i.snapshot||(e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0))}const{crossfade:a}=e.options;a===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const mu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},hf=["","X","Y","Z"],pb=1e3;let mb=0;function pf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function gM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=FS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",pt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&gM(i)}function vM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e?.()){this.id=mb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(_b),this.nodes.forEach(Mb),this.nodes.forEach(Eb),this.nodes.forEach(yb)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new fb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new cm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const u=this.eventHandlers.get(o);u&&u.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Rm(o)&&!vC(o),this.instance=o;const{layoutId:a,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(u||a)&&(this.isLayoutDirty=!0),t){let f,d=0;const h=()=>this.root.updateBlockedByResize=!1;pt.read(()=>{d=window.innerWidth}),t(o,()=>{const g=window.innerWidth;g!==d&&(d=g,this.root.updateBlockedByResize=!0,f&&f(),f=db(h,250),mu.hasAnimatedSinceResize&&(mu.hasAnimatedSinceResize=!1,this.nodes.forEach(dv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||bb,{onLayoutAnimationStart:M,onLayoutAnimationComplete:y}=c.getProps(),l=!this.targetLayout||!hM(this.targetLayout,g),p=!d&&h;if(this.options.layoutRoot||this.resumeFrom||p||d&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const m={...Mm(x,"layout"),onPlay:M,onComplete:y};(c.shouldReduceMotion||this.options.layoutRoot)&&(m.delay=0,m.type=!1),this.startAnimation(m),this.setAnimationOrigin(f,p)}else d||dv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Tb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:u}=this.options;if(a===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(fv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Sb),this.nodes.forEach(gb),this.nodes.forEach(vb)):this.nodes.forEach(fv),this.clearAllSnapshots();const a=hn.now();$t.delta=Ri(0,1e3/60,a-$t.timestamp),$t.timestamp=a,$t.isProcessing=!0,sf.update.process($t),sf.preRender.process($t),sf.render.process($t),$t.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Cm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xb),this.sharedNodes.forEach(wb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,pt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){pt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!pn(this.snapshot.measuredBox.x)&&!pn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=kt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const u=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:u,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:u}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!dM(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||$r(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let u=this.removeElementScroll(a);return o&&(u=this.removeTransform(u)),Rb(u),{animationId:this.root.animationId,measuredBox:a,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return kt();const a=o.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Pb))){const{scroll:c}=this.root;c&&(Zs(a.x,c.offset.x),Zs(a.y,c.offset.y))}return a}removeElementScroll(o){const a=kt();if(ei(a,o),this.scroll?.wasRoot)return a;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:d}=c;c!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&ei(a,o),Zs(a.x,f.offset.x),Zs(a.y,f.offset.y))}return a}applyTransform(o,a=!1){const u=kt();ei(u,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Qs(u,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),$r(f.latestValues)&&Qs(u,f.latestValues)}return $r(this.latestValues)&&Qs(u,this.latestValues),u}removeTransform(o){const a=kt();ei(a,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!$r(c.latestValues))continue;dh(c.latestValues)&&c.updateSnapshot();const f=kt(),d=c.measurePageBox();ei(f,d),tv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,f)}return $r(this.latestValues)&&tv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$t.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==a;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!this.layout||!(f||d))return;this.resolvedRelativeTargetAt=$t.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=kt(),this.targetWithTransforms=kt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),JC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ei(this.target,this.layout.layoutBox),eM(this.target,this.targetDelta)):ei(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||dh(this.parent.latestValues)||JS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,u){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=kt(),this.relativeTargetOrigin=kt(),Qu(this.relativeTargetOrigin,a,u),ei(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const o=this.getLead(),a=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(u=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===$t.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;ei(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;bC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=kt());const{target:g}=o;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($g(this.prevProjectionDelta.x,this.projectionDelta.x),$g(this.prevProjectionDelta.y,this.projectionDelta.y)),ma(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!ov(this.projectionDelta.x,this.prevProjectionDelta.x)||!ov(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.visualElement?.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ks(),this.projectionDelta=Ks(),this.projectionDeltaWithTransform=Ks()}setAnimationOrigin(o,a=!1){const u=this.snapshot,c=u?u.latestValues:{},f={...this.latestValues},d=Ks();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=kt(),g=u?u.source:void 0,x=this.layout?this.layout.source:void 0,M=g!==x,y=this.getStack(),l=!y||y.members.length<=1,p=!!(M&&!l&&this.options.crossfade===!0&&!this.path.some(Cb));this.animationProgress=0;let m;this.mixTargetDelta=E=>{const w=E/1e3;hv(d.x,o.x,w),hv(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qu(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Ab(this.relativeTarget,this.relativeTargetOrigin,h,w),m&&ib(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=kt()),ei(m,this.relativeTarget)),M&&(this.animationValues=f,ob(f,c,this.latestValues,w,p,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Pr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=pt.update(()=>{mu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=_o(0)),this.currentAnimation=ub(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:u,layout:c,latestValues:f}=o;if(!(!a||!u||!c)){if(this!==o&&this.layout&&c&&_M(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||kt();const d=pn(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+d;const h=pn(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+h}ei(a,u),Qs(a,f),ma(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new hb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){const{layoutId:o}=this.options;return o?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:o}=this.options;return o?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:u}=o;if((u.z||u.rotate||u.rotateX||u.rotateY||u.rotateZ||u.skewX||u.skewY)&&(a=!0),!a)return;const c={};u.z&&pf("z",o,c,this.animationValues);for(let f=0;f<hf.length;f++)pf(`rotate${hf[f]}`,o,c,this.animationValues),pf(`skew${hf[f]}`,o,c,this.animationValues);o.render();for(const f in c)o.setStaticValue(f,c[f]),this.animationValues&&(this.animationValues[f]=c[f]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const u=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=pu(a?.pointerEvents)||"",o.transform=u?u(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=pu(a?.pointerEvents)||""),this.hasProjected&&!$r(this.latestValues)&&(o.transform=u?u({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=rb(this.projectionDeltaWithTransform,this.treeScale,f);u&&(d=u(f,d)),o.transform=d;const{x:h,y:g}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${g.origin*100}% 0`,c.animationValues?o.opacity=c===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=c===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in ph){if(f[x]===void 0)continue;const{correct:M,applyTo:y,isCSSVariable:l}=ph[x],p=d==="none"?f[x]:M(f[x],c);if(y){const m=y.length;for(let E=0;E<m;E++)o[y[E]]=p}else l?this.options.visualElement.renderState.vars[x]=p:o[x]=p}this.options.layoutId&&(o.pointerEvents=c===this?pu(a?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>o.currentAnimation?.stop()),this.root.nodes.forEach(cv),this.root.sharedNodes.clear()}}}function gb(t){t.updateLayout()}function vb(t){const e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=t.layout,{animationType:r}=t.options,s=e.source!==t.layout.source;r==="size"?_i(f=>{const d=s?e.measuredBox[f]:e.layoutBox[f],h=pn(d);d.min=n[f].min,d.max=d.min+h}):_M(r,e.layoutBox,n)&&_i(f=>{const d=s?e.measuredBox[f]:e.layoutBox[f],h=pn(n[f]);d.max=d.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+h)});const o=Ks();ma(o,n,e.layoutBox);const a=Ks();s?ma(a,t.applyTransform(i,!0),e.measuredBox):ma(a,n,e.layoutBox);const u=!dM(o);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:h}=f;if(d&&h){const g=kt();Qu(g,e.layoutBox,d.layoutBox);const x=kt();Qu(x,n,h.layoutBox),hM(g,x)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:e,delta:a,layoutDelta:o,hasLayoutChanged:u,hasRelativeLayoutChanged:c})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function _b(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function yb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function xb(t){t.clearSnapshot()}function cv(t){t.clearMeasurements()}function fv(t){t.isLayoutDirty=!1}function Sb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function dv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Mb(t){t.resolveTargetDelta()}function Eb(t){t.calcProjection()}function Tb(t){t.resetSkewAndRotation()}function wb(t){t.removeLeadSnapshot()}function hv(t,e,n){t.translate=xt(e.translate,0,n),t.scale=xt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function pv(t,e,n,i){t.min=xt(e.min,n.min,i),t.max=xt(e.max,n.max,i)}function Ab(t,e,n,i){pv(t.x,e.x,n.x,i),pv(t.y,e.y,n.y,i)}function Cb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const bb={duration:.45,ease:[.4,0,.1,1]},mv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),gv=mv("applewebkit/")&&!mv("chrome/")?Math.round:Kn;function vv(t){t.min=gv(t.min),t.max=gv(t.max)}function Rb(t){vv(t.x),vv(t.y)}function _M(t,e,n){return t==="position"||t==="preserve-aspect"&&!QC(sv(e),sv(n),.2)}function Pb(t){return t!==t.root&&t.scroll?.wasRoot}const Db=vM({attachResizeListener:(t,e)=>Ba(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),mf={current:void 0},yM=vM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!mf.current){const t=new Db({});t.mount(window),t.setOptions({layoutScroll:!0}),mf.current=t}return mf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Nm=F.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function _v(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Lb(...t){return e=>{let n=!1;const i=t.map(r=>{const s=_v(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():_v(t[r],null)}}}}function Ib(...t){return F.useCallback(Lb(...t),t)}class Nb extends F.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=ch(i)&&i.offsetWidth||0,s=ch(i)&&i.offsetHeight||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=r-o.width-o.left,o.bottom=s-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Ub({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){const o=F.useId(),a=F.useRef(null),u=F.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=F.useContext(Nm),f=t.props?.ref??t?.ref,d=Ib(a,f);return F.useInsertionEffect(()=>{const{width:h,height:g,top:x,left:M,right:y,bottom:l}=u.current;if(e||s===!1||!a.current||!h||!g)return;const p=n==="left"?`left: ${M}`:`right: ${y}`,m=i==="bottom"?`bottom: ${l}`:`top: ${x}`;a.current.dataset.motionPopId=o;const E=document.createElement("style");c&&(E.nonce=c);const w=r??document.head;return w.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${g}px !important;
            ${p}px !important;
            ${m}px !important;
          }
        `),()=>{w.contains(E)&&w.removeChild(E)}},[e]),N.jsx(Nb,{isPresent:e,childRef:a,sizeRef:u,pop:s,children:s===!1?t:F.cloneElement(t,{ref:d})})}const Fb=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:u,root:c})=>{const f=om(Ob),d=F.useId();let h=!0,g=F.useMemo(()=>(h=!1,{id:d,initial:e,isPresent:n,custom:r,onExitComplete:x=>{f.set(x,!0);for(const M of f.values())if(!M)return;i&&i()},register:x=>(f.set(x,!1),()=>f.delete(x))}),[n,f,i]);return s&&h&&(g={...g}),F.useMemo(()=>{f.forEach((x,M)=>f.set(M,!1))},[n]),F.useEffect(()=>{!n&&!f.size&&i&&i()},[n]),t=N.jsx(Ub,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:u,root:c,children:t}),N.jsx(yc.Provider,{value:g,children:t})};function Ob(){return new Map}function xM(t=!0){const e=F.useContext(yc);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=F.useId();F.useEffect(()=>{if(t)return r(s)},[t]);const o=F.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Tl=t=>t.key||"";function yv(t){const e=[];return F.Children.forEach(t,n=>{F.isValidElement(n)&&e.push(n)}),e}const kb=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:u="top",root:c})=>{const[f,d]=xM(o),h=F.useMemo(()=>yv(t),[t]),g=o&&!f?[]:h.map(Tl),x=F.useRef(!0),M=F.useRef(h),y=om(()=>new Map),l=F.useRef(new Set),[p,m]=F.useState(h),[E,w]=F.useState(h);Kx(()=>{x.current=!1,M.current=h;for(let v=0;v<E.length;v++){const _=Tl(E[v]);g.includes(_)?(y.delete(_),l.current.delete(_)):y.get(_)!==!0&&y.set(_,!1)}},[E,g.length,g.join("-")]);const C=[];if(h!==p){let v=[...h];for(let _=0;_<E.length;_++){const S=E[_],T=Tl(S);g.includes(T)||(v.splice(_,0,S),C.push(S))}return s==="wait"&&C.length&&(v=C),w(yv(v)),m(h),null}const{forceRender:b}=F.useContext(sm);return N.jsx(N.Fragment,{children:E.map(v=>{const _=Tl(v),S=o&&!f?!1:h===E||g.includes(_),T=()=>{if(l.current.has(_))return;if(l.current.add(_),y.has(_))y.set(_,!0);else return;let I=!0;y.forEach(L=>{L||(I=!1)}),I&&(b?.(),w(M.current),o&&d?.(),i&&i())};return N.jsx(Fb,{isPresent:S,initial:!x.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:S?void 0:T,anchorX:a,anchorY:u,children:v},_)})})},SM=F.createContext({strict:!1}),xv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Sv=!1;function Bb(){if(Sv)return;const t={};for(const e in xv)t[e]={isEnabled:n=>xv[e].some(i=>!!n[i])};KS(t),Sv=!0}function MM(){return Bb(),TC()}function Vb(t){const e=MM();for(const n in t)e[n]={...e[n],...t[n]};KS(e)}const zb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ju(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||zb.has(t)}let EM=t=>!Ju(t);function Hb(t){typeof t=="function"&&(EM=e=>e.startsWith("on")?!Ju(e):t(e))}try{Hb(require("@emotion/is-prop-valid").default)}catch{}function Gb(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(EM(r)||n===!0&&Ju(r)||!e&&!Ju(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Mc=F.createContext({});function Wb(t,e){if(Sc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ka(n)?n:void 0,animate:ka(i)?i:void 0}}return t.inherit!==!1?e:{}}function jb(t){const{initial:e,animate:n}=Wb(t,F.useContext(Mc));return F.useMemo(()=>({initial:e,animate:n}),[Mv(e),Mv(n)])}function Mv(t){return Array.isArray(t)?t.join(" "):t}const Um=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function TM(t,e,n){for(const i in e)!sn(e[i])&&!iM(i,n)&&(t[i]=e[i])}function Xb({transformTemplate:t},e){return F.useMemo(()=>{const n=Um();return Lm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function qb(t,e){const n=t.style||{},i={};return TM(i,n,t),Object.assign(i,Xb(t,e)),i}function Yb(t,e){const n={},i=qb(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const wM=()=>({...Um(),attrs:{}});function $b(t,e,n,i){const r=F.useMemo(()=>{const s=wM();return rM(s,e,oM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};TM(s,t.style,t),r.style={...s,...r.style}}return r}const Kb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fm(t){return typeof t!="string"||t.includes("-")?!1:!!(Kb.indexOf(t)>-1||/[A-Z]/u.test(t))}function Zb(t,e,n,{latestValues:i},r,s=!1,o){const u=(o??Fm(t)?$b:Yb)(e,i,r,t),c=Gb(e,typeof t=="string",s),f=t!==F.Fragment?{...c,...u,ref:n}:{},{children:d}=e,h=F.useMemo(()=>sn(d)?d.get():d,[d]);return F.createElement(t,{...f,children:h})}function Qb({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:Jb(n,i,r,t),renderState:e()}}function Jb(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=pu(s[h]);let{initial:o,animate:a}=t;const u=Sc(t),c=YS(t);e&&c&&!u&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const d=f?a:o;if(d&&typeof d!="boolean"&&!xc(d)){const h=Array.isArray(d)?d:[d];for(let g=0;g<h.length;g++){const x=Tm(t,h[g]);if(x){const{transitionEnd:M,transition:y,...l}=x;for(const p in l){let m=l[p];if(Array.isArray(m)){const E=f?m.length-1:0;m=m[E]}m!==null&&(r[p]=m)}for(const p in M)r[p]=M[p]}}}return r}const AM=t=>(e,n)=>{const i=F.useContext(Mc),r=F.useContext(yc),s=()=>Qb(t,e,i,r);return n?s():om(s)},e2=AM({scrapeMotionValuesFromProps:Im,createRenderState:Um}),t2=AM({scrapeMotionValuesFromProps:aM,createRenderState:wM}),n2=Symbol.for("motionComponentSymbol");function i2(t,e,n){const i=F.useRef(n);F.useInsertionEffect(()=>{i.current=n});const r=F.useRef(null);return F.useCallback(s=>{s&&t.onMount?.(s),e&&(s?e.mount(s):e.unmount());const o=i.current;if(typeof o=="function")if(s){const a=o(s);typeof a=="function"&&(r.current=a)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s)},[e])}const CM=F.createContext({});function Us(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function r2(t,e,n,i,r,s){const{visualElement:o}=F.useContext(Mc),a=F.useContext(SM),u=F.useContext(yc),c=F.useContext(Nm),f=c.reducedMotion,d=c.skipAnimations,h=F.useRef(null),g=F.useRef(!1);i=i||a.renderer,!h.current&&i&&(h.current=i(t,{visualState:e,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:f,skipAnimations:d,isSVG:s}),g.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const x=h.current,M=F.useContext(CM);x&&!x.projection&&r&&(x.type==="html"||x.type==="svg")&&s2(h.current,n,r,M);const y=F.useRef(!1);F.useInsertionEffect(()=>{x&&y.current&&x.update(n,u)});const l=n[US],p=F.useRef(!!l&&!window.MotionHandoffIsComplete?.(l)&&window.MotionHasOptimisedAnimation?.(l));return Kx(()=>{g.current=!0,x&&(y.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),p.current&&x.animationState&&x.animationState.animateChanges())}),F.useEffect(()=>{x&&(!p.current&&x.animationState&&x.animationState.animateChanges(),p.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(l)}),p.current=!1),x.enteringChildren=void 0)}),x}function s2(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:u,layoutRoot:c,layoutCrossfade:f}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:bM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Us(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:f,layoutScroll:u,layoutRoot:c})}function bM(t){if(t)return t.options.allowProjection!==!1?t.projection:bM(t.parent)}function gf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&Vb(i);const s=n?n==="svg":Fm(t),o=s?t2:e2;function a(c,f){let d;const h={...F.useContext(Nm),...c,layoutId:o2(c)},{isStatic:g}=h,x=jb(c),M=o(c,g);if(!g&&$x){a2();const y=l2(h);d=y.MeasureLayout,x.visualElement=r2(t,M,h,r,y.ProjectionNode,s)}return N.jsxs(Mc.Provider,{value:x,children:[d&&x.visualElement?N.jsx(d,{visualElement:x.visualElement,...h}):null,Zb(t,c,i2(M,x.visualElement,f),M,g,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const u=F.forwardRef(a);return u[n2]=t,u}function o2({layoutId:t}){const e=F.useContext(sm).id;return e&&t!==void 0?e+"-"+t:t}function a2(t,e){F.useContext(SM).strict}function l2(t){const e=MM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n?.isEnabled(t)||i?.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function u2(t,e){if(typeof Proxy>"u")return gf;const n=new Map,i=(s,o)=>gf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,gf(o,void 0,t,e)),n.get(o))})}const c2=(t,e)=>e.isSVG??Fm(t)?new zC(e):new UC(e,{allowProjection:t!==F.Fragment});class f2 extends Fr{constructor(e){super(e),e.animationState||(e.animationState=XC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();xc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let d2=0;class h2 extends Fr{constructor(){super(...arguments),this.id=d2++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const p2={animation:{Feature:f2},exit:{Feature:h2}};function Qa(t){return{point:{x:t.pageX,y:t.pageY}}}const m2=t=>e=>bm(e)&&t(e,Qa(e));function ga(t,e,n,i){return Ba(t,e,m2(n),i)}const RM=({current:t})=>t?t.ownerDocument.defaultView:null,Ev=(t,e)=>Math.abs(t-e);function g2(t,e){const n=Ev(t.x,e.x),i=Ev(t.y,e.y);return Math.sqrt(n**2+i**2)}const Tv=new Set(["auto","scroll"]);class PM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=g=>{this.handleScroll(g.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=_f(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,M=g2(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!M)return;const{point:y}=g,{timestamp:l}=$t;this.history.push({...y,timestamp:l});const{onStart:p,onMove:m}=this.handlers;x||(p&&p(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,g)},this.handlePointerMove=(g,x)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=vf(x,this.transformPagePoint),pt.update(this.updatePoint,!0)},this.handlePointerUp=(g,x)=>{this.end();const{onEnd:M,onSessionEnd:y,resumeAnimation:l}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&l&&l(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=_f(g.type==="pointercancel"?this.lastMoveEventInfo:vf(x,this.transformPagePoint),this.history);this.startEvent&&M&&M(g,p),y&&y(g,p)},!bm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const u=Qa(e),c=vf(u,this.transformPagePoint),{point:f}=c,{timestamp:d}=$t;this.history=[{...f,timestamp:d}];const{onSessionStart:h}=n;h&&h(e,_f(c,this.history)),this.removeListeners=$a(ga(this.contextWindow,"pointermove",this.handlePointerMove),ga(this.contextWindow,"pointerup",this.handlePointerUp),ga(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(Tv.has(i.overflowX)||Tv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),pt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Pr(this.updatePoint)}}function vf(t,e){return e?{point:e(t.point)}:t}function wv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function _f({point:t},e){return{point:t,delta:wv(t,DM(e)),offset:wv(t,v2(e)),velocity:_2(e,.1)}}function v2(t){return t[0]}function DM(t){return t[t.length-1]}function _2(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=DM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>di(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>di(e)*2&&(i=t[1]);const s=Yn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function y2(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?xt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?xt(n,t,i.max):Math.min(t,n)),t}function Av(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function x2(t,{top:e,left:n,bottom:i,right:r}){return{x:Av(t.x,n,r),y:Av(t.y,e,i)}}function Cv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function S2(t,e){return{x:Cv(t.x,e.x),y:Cv(t.y,e.y)}}function M2(t,e){let n=.5;const i=pn(t),r=pn(e);return r>i?n=Ua(e.min,e.max-i,t.min):i>r&&(n=Ua(t.min,t.max-r,e.min)),Ri(0,1,n)}function E2(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const mh=.35;function T2(t=mh){return t===!1?t=0:t===!0&&(t=mh),{x:bv(t,"left","right"),y:bv(t,"top","bottom")}}function bv(t,e,n){return{min:Rv(t,e),max:Rv(t,n)}}function Rv(t,e){return typeof t=="number"?t:t[e]||0}const w2=new WeakMap;class A2{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=kt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{n&&this.snapToCursor(Qa(d).point),this.stopAnimation()},o=(d,h)=>{const{drag:g,dragPropagation:x,onDragStart:M}=this.getProps();if(g&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=eC(g),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_i(l=>{let p=this.getAxisMotionValue(l).get()||0;if(wi.test(p)){const{projection:m}=this.visualElement;if(m&&m.layout){const E=m.layout.layoutBox[l];E&&(p=pn(E)*(parseFloat(p)/100))}}this.originPoint[l]=p}),M&&pt.update(()=>M(d,h),!1,!0),ah(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h;const{dragPropagation:g,dragDirectionLock:x,onDirectionLock:M,onDrag:y}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:l}=h;if(x&&this.currentDirection===null){this.currentDirection=b2(l),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",h.point,l),this.updateAxis("y",h.point,l),this.visualElement.render(),y&&pt.update(()=>y(d,h),!1,!0)},u=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h,this.stop(d,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new PM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:u,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:i,contextWindow:RM(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&pt.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!wl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=y2(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Us(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=x2(i.layoutBox,e):this.constraints=!1,this.elastic=T2(n),r!==this.constraints&&!Us(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&_i(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=E2(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Us(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=RC(i,r.root,this.visualElement.getTransformPagePoint());let o=S2(r.layout.layoutBox,s);if(n){const a=n(AC(o));this.hasMutatedConstraints=!!a,a&&(o=QS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),u=this.constraints||{},c=_i(f=>{if(!wl(f,n,this.currentDirection))return;let d=u&&u[f]||{};o&&(d={min:0,max:0});const h=r?200:1e6,g=r?40:1e7,x={type:"inertia",velocity:i?e[f]:0,bounceStiffness:h,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(f,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return ah(this.visualElement,e),i.start(Em(e,i,0,n,this.visualElement,!1))}stopAnimation(){_i(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){_i(n=>{const{drag:i}=this.getProps();if(!wl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],u=s.get()||0;s.set(e[n]-xt(o,a,.5)+u)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Us(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};_i(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const u=a.get();r[o]=M2({min:u,max:u},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),_i(o=>{if(!wl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];a.set(xt(u,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;w2.set(this.visualElement,this);const e=this.visualElement.current,n=ga(e,"pointerdown",c=>{const{drag:f,dragListener:d=!0}=this.getProps(),h=c.target,g=h!==e&&oC(h);f&&d&&!g&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Us(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=C2(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),pt.read(r);const a=Ba(window,"resize",()=>this.scalePositionWithinConstraints()),u=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f})=>{this.isDragging&&f&&(_i(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),u&&u(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=mh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Pv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function C2(t,e,n){const i=Og(t,Pv(n)),r=Og(e,Pv(n));return()=>{i(),r()}}function wl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function b2(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class R2 extends Fr{constructor(e){super(e),this.removeGroupControls=Kn,this.removeListeners=Kn,this.controls=new A2(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Kn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const yf=t=>(e,n)=>{t&&pt.update(()=>t(e,n),!1,!0)};class P2 extends Fr{constructor(){super(...arguments),this.removePointerDownListener=Kn}onPointerDown(e){this.session=new PM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:RM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:yf(e),onStart:yf(n),onMove:yf(i),onEnd:(s,o)=>{delete this.session,r&&pt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=ga(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let xf=!1;class D2 extends F.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),xf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),mu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),xf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||pt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Cm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;xf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function LM(t){const[e,n]=xM(),i=F.useContext(sm);return N.jsx(D2,{...t,layoutGroup:i,switchLayoutGroup:F.useContext(CM),isPresent:e,safeToRemove:n})}const L2={pan:{Feature:P2},drag:{Feature:R2,ProjectionNode:yM,MeasureLayout:LM}};function Dv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&pt.postRender(()=>s(e,Qa(e)))}class I2 extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=nC(e,(n,i)=>(Dv(this.node,i,"Start"),r=>Dv(this.node,r,"End"))))}unmount(){}}class N2 extends Fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$a(Ba(this.node.current,"focus",()=>this.onFocus()),Ba(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Lv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&pt.postRender(()=>s(e,Qa(e)))}class U2 extends Fr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=lC(e,(r,s)=>(Lv(this.node,s,"Start"),(o,{success:a})=>Lv(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:i?.tap===!1})}unmount(){}}const gh=new WeakMap,Sf=new WeakMap,F2=t=>{const e=gh.get(t.target);e&&e(t)},O2=t=>{t.forEach(F2)};function k2({root:t,...e}){const n=t||document;Sf.has(n)||Sf.set(n,{});const i=Sf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(O2,{root:t,...e})),i[r]}function B2(t,e,n){const i=k2(e);return gh.set(t,n),i.observe(t),()=>{gh.delete(t),i.unobserve(t)}}const V2={some:0,all:1};class z2 extends Fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:V2[r]},a=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),h=c?f:d;h&&h(u)};return B2(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(H2(e,n))&&this.startObserver()}unmount(){}}function H2({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const G2={inView:{Feature:z2},tap:{Feature:U2},focus:{Feature:N2},hover:{Feature:I2}},W2={layout:{ProjectionNode:yM,MeasureLayout:LM}},j2={...p2,...G2,...L2,...W2},Al=u2(j2,c2),Cl="",Iv={BASE_URL:Cl,CHAT:`${Cl}/api/chat`,CHAT_STREAM:`${Cl}/api/chat/stream`,HEALTH:`${Cl}/api/health`},bl={MAX_TOKENS:150,TEMPERATURE:.7},dn={MOUTH_SMOOTH:.15,BLINK_MIN_MS:2e3,BLINK_MAX_MS:6e3,BLINK_DURATION_MS:150},et={SIZE:320,DISPLAY_SIZE:280};let X2=0;const q2=()=>`${Date.now()}-${++X2}`,Y2={},Nv=t=>{let e;const n=new Set,i=(f,d)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const g=e;e=d??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(x=>x(e,g))}},r=()=>e,u={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(Y2?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,u);return u},$2=t=>t?Nv(t):Nv;var IM={exports:{}},NM={},UM={exports:{}},FM={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=F;function K2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Z2=typeof Object.is=="function"?Object.is:K2,Q2=yo.useState,J2=yo.useEffect,eR=yo.useLayoutEffect,tR=yo.useDebugValue;function nR(t,e){var n=e(),i=Q2({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return eR(function(){r.value=n,r.getSnapshot=e,Mf(r)&&s({inst:r})},[t,n,e]),J2(function(){return Mf(r)&&s({inst:r}),t(function(){Mf(r)&&s({inst:r})})},[t]),tR(n),n}function Mf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Z2(t,n)}catch{return!0}}function iR(t,e){return e()}var rR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?iR:nR;FM.useSyncExternalStore=yo.useSyncExternalStore!==void 0?yo.useSyncExternalStore:rR;UM.exports=FM;var sR=UM.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=F,oR=sR;function aR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var lR=typeof Object.is=="function"?Object.is:aR,uR=oR.useSyncExternalStore,cR=Ec.useRef,fR=Ec.useEffect,dR=Ec.useMemo,hR=Ec.useDebugValue;NM.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=cR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=dR(function(){function u(g){if(!c){if(c=!0,f=g,g=i(g),r!==void 0&&o.hasValue){var x=o.value;if(r(x,g))return d=x}return d=g}if(x=d,lR(f,g))return x;var M=i(g);return r!==void 0&&r(x,M)?(f=g,x):(f=g,d=M)}var c=!1,f,d,h=n===void 0?null:n;return[function(){return u(e())},h===null?void 0:function(){return u(h())}]},[e,n,i,r]);var a=uR(t,s[0],s[1]);return fR(function(){o.hasValue=!0,o.value=a},[a]),hR(a),a};IM.exports=NM;var pR=IM.exports;const mR=U_(pR),OM={},{useDebugValue:gR}=X_,{useSyncExternalStoreWithSelector:vR}=mR;let Uv=!1;const _R=t=>t;function yR(t,e=_R,n){(OM?"production":void 0)!=="production"&&n&&!Uv&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Uv=!0);const i=vR(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return gR(i),i}const Fv=t=>{(OM?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?$2(t):t,n=(i,r)=>yR(e,i,r);return Object.assign(n,e),n},xR=t=>t?Fv(t):Fv,Ut=xR(t=>({status:"ready",messages:[],interimText:"",avatarType:"gif",setStatus:e=>t({status:e}),setInterimText:e=>t({interimText:e}),addMessage:(e,n)=>t(i=>({messages:[...i.messages,{id:q2(),role:e,content:n,timestamp:Date.now()}]})),clearMessages:()=>t({messages:[]}),setAvatarType:e=>t({avatarType:e})}));function gt(t,e,n){return t+(e-t)*n}function Om(t,e,n){return t<e?e:t>n?n:t}const Pn={base:"#E8C4A0",light:"#F5DCC0",shadow:"#C9956B",deep:"#A07050",blush:"rgba(210, 120, 120, 0.18)"},Vr={base:"#2C1810",mid:"#3D2418",highlight:"#5A3A28",light:"#7A5A48"},Ni={sclera:"#F8F4F0",scleraShadow:"#E0D8D0",iris:"#5B8A6E",irisRim:"#3A5A40",irisInner:"#8AB89A",pupil:"#1A1A1A",lashColor:"#1A1008"},xs={upper:"#C07070",lower:"#D08080",line:"#905050",inner:"#3A1818",teeth:"#F0EDE8"};function SR({canvasRef:t,isSpeaking:e}){const n=F.useRef(0),i=F.useRef(0),r=F.useRef(0),s=F.useRef(0),o=F.useRef({x:0,y:0}),a=F.useRef({x:0,y:0}),u=F.useRef(0),c=F.useRef(0),f=F.useRef(0),d=F.useRef(0),h=F.useRef(!1),g=F.useRef(0),x=F.useRef({width:1,roundness:0,jawDrop:0});F.useEffect(()=>{h.current=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g.current=performance.now()},[]);const M=F.useCallback((v,_,S,T)=>{const I=T*.34,L=T*.42,U=S+L*.15;v.save(),v.fillStyle="rgba(0,0,0,0.08)",v.beginPath(),v.ellipse(_+2,S+6,I+2,L+2,0,0,Math.PI*2),v.fill(),v.restore(),v.save();const k=v.createRadialGradient(_-I*.25,S-L*.3,I*.1,_,S,L*1.1);k.addColorStop(0,Pn.light),k.addColorStop(.4,Pn.base),k.addColorStop(.85,Pn.shadow),k.addColorStop(1,Pn.deep),v.fillStyle=k,v.beginPath(),v.moveTo(_-I*.85,S-L*.5),v.quadraticCurveTo(_-I*.9,S-L*.85,_,S-L*.88),v.quadraticCurveTo(_+I*.9,S-L*.85,_+I*.85,S-L*.5),v.quadraticCurveTo(_+I*1.02,S-L*.15,_+I*.95,S+L*.05),v.quadraticCurveTo(_+I*.82,S+L*.45,_+I*.35,U+L*.35),v.quadraticCurveTo(_,U+L*.48,_-I*.35,U+L*.35),v.quadraticCurveTo(_-I*.82,S+L*.45,_-I*.95,S+L*.05),v.quadraticCurveTo(_-I*1.02,S-L*.15,_-I*.85,S-L*.5),v.closePath(),v.fill(),v.fillStyle=Pn.blush,v.beginPath(),v.ellipse(_-I*.55,S+L*.08,I*.22,L*.12,-.15,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(_+I*.55,S+L*.08,I*.22,L*.12,.15,0,Math.PI*2),v.fill();const H=v.createRadialGradient(_-2,S-L*.05,1,_,S+L*.05,I*.15);H.addColorStop(0,"rgba(255,255,255,0.12)"),H.addColorStop(1,"transparent"),v.fillStyle=H,v.fillRect(_-I*.2,S-L*.2,I*.4,L*.35),v.restore()},[]),y=F.useCallback((v,_,S,T,I)=>{const L=I*.035,U=I*.065;v.save(),v.fillStyle=Pn.shadow,v.beginPath(),v.ellipse(_+T*L*.3,S,L,U,T*.15,0,Math.PI*2),v.fill(),v.fillStyle=Pn.deep,v.beginPath(),v.ellipse(_+T*L*.1,S-U*.05,L*.5,U*.6,T*.15,0,Math.PI*2),v.fill(),v.restore()},[]),l=F.useCallback((v,_,S,T,I,L,U,k)=>{const H=T*.058,B=T*.038,P=B*(1-L);if(v.save(),v.fillStyle="rgba(120,80,60,0.12)",v.beginPath(),v.ellipse(_,S-B*.15,H*1.25,B*1.3,0,0,Math.PI*2),v.fill(),v.fillStyle=Ni.sclera,v.beginPath(),v.ellipse(_,S,H,Math.max(P,1),0,0,Math.PI*2),v.fill(),P>2){const O=v.createLinearGradient(_,S-P,_,S);O.addColorStop(0,Ni.scleraShadow),O.addColorStop(1,"transparent"),v.fillStyle=O,v.beginPath(),v.ellipse(_,S,H,P,0,0,Math.PI*2),v.fill()}if(P>3){const O=T*.022,V=O*.45,q=_+U*T*.008,te=S+k*T*.005,re=v.createRadialGradient(q-1,te-1,V*.5,q,te,O);re.addColorStop(0,Ni.irisInner),re.addColorStop(.5,Ni.iris),re.addColorStop(1,Ni.irisRim),v.fillStyle=re,v.beginPath(),v.arc(q,te,O,0,Math.PI*2),v.fill(),v.save(),v.globalAlpha=.15,v.strokeStyle=Ni.irisRim,v.lineWidth=.5;for(let ue=0;ue<Math.PI*2;ue+=Math.PI/12)v.beginPath(),v.moveTo(q+Math.cos(ue)*V,te+Math.sin(ue)*V),v.lineTo(q+Math.cos(ue)*O*.9,te+Math.sin(ue)*O*.9),v.stroke();v.restore(),v.fillStyle=Ni.pupil,v.beginPath(),v.arc(q,te,V,0,Math.PI*2),v.fill(),v.fillStyle="rgba(255,255,255,0.85)",v.beginPath(),v.arc(q-O*.3,te-O*.35,O*.22,0,Math.PI*2),v.fill(),v.fillStyle="rgba(255,255,255,0.4)",v.beginPath(),v.arc(q+O*.25,te+O*.2,O*.1,0,Math.PI*2),v.fill()}if(v.fillStyle=Pn.base,v.beginPath(),v.ellipse(_,S-P*.3,H*1.08,B*1.1,0,Math.PI,Math.PI*2),v.ellipse(_,S,H*1.08,Math.max(P,1),0,Math.PI*2,Math.PI),v.fill(),v.strokeStyle="rgba(120,80,60,0.2)",v.lineWidth=1,v.beginPath(),v.ellipse(_,S-B*.8,H*1.1,B*.5,0,Math.PI*.85,Math.PI*.15,!0),v.stroke(),v.strokeStyle=Ni.lashColor,v.lineWidth=1.8,v.beginPath(),v.ellipse(_,S,H*1.02,Math.max(P*1.02,1),0,Math.PI,Math.PI*2),v.stroke(),P>2){v.strokeStyle=Ni.lashColor,v.lineWidth=1;const O=7;for(let V=0;V<O;V++){const q=Math.PI+Math.PI*(V+.5)/O,te=_+Math.cos(q)*H*1.02,re=S+Math.sin(q)*Math.max(P*1.02,1),ue=T*.012*(1-Math.abs(V-O/2)/O*.6),xe=q-Math.PI*.1*I;v.beginPath(),v.moveTo(te,re),v.lineTo(te+Math.cos(xe)*ue,re+Math.sin(xe)*ue),v.stroke()}}v.strokeStyle="rgba(26,16,8,0.3)",v.lineWidth=.8,v.beginPath(),v.ellipse(_,S,H*.95,Math.max(P*.95,1),0,0,Math.PI),v.stroke(),v.restore()},[]),p=F.useCallback((v,_,S,T,I)=>{const L=T*.065,U=T*.008;v.save(),v.strokeStyle=Vr.base,v.lineWidth=1.2,v.lineCap="round";const k=18;for(let H=0;H<k;H++){const B=H/k,P=_-L*.5+B*L,O=S-Math.sin(B*Math.PI)*U*3*1,V=-.3+B*.6,q=T*.008+Math.sin(B*Math.PI)*T*.004;v.globalAlpha=.5+Math.sin(B*Math.PI)*.4,v.beginPath(),v.moveTo(P,O),v.lineTo(P+Math.cos(V)*q*I*.5,O+Math.sin(V)*q),v.stroke()}v.restore()},[]),m=F.useCallback((v,_,S,T)=>{v.save(),v.strokeStyle="rgba(160,112,80,0.2)",v.lineWidth=1.5,v.beginPath(),v.moveTo(_-T*.012,S-T*.06),v.quadraticCurveTo(_-T*.018,S,_-T*.025,S+T*.02),v.stroke();const I=v.createRadialGradient(_,S+T*.015,T*.005,_,S+T*.015,T*.025);I.addColorStop(0,"rgba(255,255,255,0.08)"),I.addColorStop(1,"transparent"),v.fillStyle=I,v.beginPath(),v.arc(_,S+T*.015,T*.025,0,Math.PI*2),v.fill(),v.fillStyle="rgba(140,90,60,0.25)",v.beginPath(),v.ellipse(_-T*.018,S+T*.028,T*.012,T*.007,-.3,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(_+T*.018,S+T*.028,T*.012,T*.007,.3,0,Math.PI*2),v.fill(),v.strokeStyle="rgba(160,112,80,0.18)",v.lineWidth=1,v.beginPath(),v.moveTo(_-T*.025,S+T*.025),v.quadraticCurveTo(_,S+T*.035,_+T*.025,S+T*.025),v.stroke(),v.restore()},[]),E=F.useCallback((v,_,S,T,I,L)=>{v.save();const U=T*.065*L.width,k=I*T*.055*(.5+L.jawDrop*.5),H=L.roundness,B=U*(1-H*.35);if(k>2){v.fillStyle=xs.upper,v.beginPath(),v.moveTo(_-B,S),v.quadraticCurveTo(_-B*.5,S-k*.15,_-B*.15,S-k*.08),v.quadraticCurveTo(_,S-k*.2,_+B*.15,S-k*.08),v.quadraticCurveTo(_+B*.5,S-k*.15,_+B,S),v.quadraticCurveTo(_+B*.6,S+k*.9,_,S+k),v.quadraticCurveTo(_-B*.6,S+k*.9,_-B,S),v.closePath(),v.fill();const P=B*.82,O=k*.75;if(v.fillStyle=xs.inner,v.beginPath(),v.ellipse(_,S+O*.35,P,O*.5,0,0,Math.PI*2),v.fill(),k>4){v.fillStyle=xs.teeth;const V=P*.85,q=Math.min(k*.25,T*.012),te=_-V,re=S+1,ue=V*2,xe=1;v.beginPath(),v.moveTo(te+xe,re),v.lineTo(te+ue-xe,re),v.arcTo(te+ue,re,te+ue,re+xe,xe),v.lineTo(te+ue,re+q-xe),v.arcTo(te+ue,re+q,te+ue-xe,re+q,xe),v.lineTo(te+xe,re+q),v.arcTo(te,re+q,te,re+q-xe,xe),v.lineTo(te,re+xe),v.arcTo(te,re,te+xe,re,xe),v.closePath(),v.fill(),v.strokeStyle="rgba(200,195,185,0.3)",v.lineWidth=.5;const K=6;for(let J=1;J<K;J++){const ge=_-V+V*2*J/K;v.beginPath(),v.moveTo(ge,S+1),v.lineTo(ge,S+1+q),v.stroke()}}k>T*.025&&(v.fillStyle="#B06060",v.beginPath(),v.ellipse(_,S+k*.55,P*.5,k*.2,0,0,Math.PI),v.fill()),v.fillStyle="rgba(255,255,255,0.08)",v.beginPath(),v.ellipse(_,S-k*.05,B*.4,k*.08,0,Math.PI,Math.PI*2),v.fill(),v.fillStyle="rgba(255,255,255,0.06)",v.beginPath(),v.ellipse(_,S+k*.7,B*.35,k*.12,0,0,Math.PI),v.fill()}else v.strokeStyle=xs.line,v.lineWidth=1.5,v.beginPath(),v.moveTo(_-U,S+1),v.quadraticCurveTo(_-U*.4,S-1,_-U*.12,S+1),v.quadraticCurveTo(_,S-2,_+U*.12,S+1),v.quadraticCurveTo(_+U*.4,S-1,_+U,S+1),v.stroke(),v.fillStyle=xs.upper,v.globalAlpha=.4,v.beginPath(),v.moveTo(_-U,S+1),v.quadraticCurveTo(_-U*.4,S-3,_,S-3.5),v.quadraticCurveTo(_+U*.4,S-3,_+U,S+1),v.quadraticCurveTo(_+U*.4,S-1,_+U*.12,S+1),v.quadraticCurveTo(_,S-2,_-U*.12,S+1),v.quadraticCurveTo(_-U*.4,S-1,_-U,S+1),v.fill(),v.globalAlpha=1,v.fillStyle=xs.lower,v.globalAlpha=.3,v.beginPath(),v.moveTo(_-U*.85,S+2),v.quadraticCurveTo(_,S+T*.018,_+U*.85,S+2),v.quadraticCurveTo(_,S+1,_-U*.85,S+2),v.fill(),v.globalAlpha=1,v.fillStyle="rgba(255,255,255,0.1)",v.beginPath(),v.ellipse(_,S+T*.008,U*.3,T*.004,0,0,Math.PI*2),v.fill();v.restore()},[]),w=F.useCallback((v,_,S,T)=>{v.save();const I=T*.34,L=T*.42;v.fillStyle=Vr.base,v.beginPath(),v.ellipse(_,S-L*.35,I*1.15,L*.7,0,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(_-I*.95,S+L*.05,I*.2,L*.45,.15,0,Math.PI*2),v.fill(),v.beginPath(),v.ellipse(_+I*.95,S+L*.05,I*.2,L*.45,-.15,0,Math.PI*2),v.fill();const U=v.createLinearGradient(_-I,S-L,_+I,S-L*.3);U.addColorStop(0,Vr.mid),U.addColorStop(.4,Vr.highlight),U.addColorStop(.7,Vr.mid),U.addColorStop(1,Vr.base),v.fillStyle=U,v.beginPath(),v.moveTo(_-I*.95,S-L*.4),v.quadraticCurveTo(_-I*1.05,S-L*.95,_-I*.3,S-L*.92),v.quadraticCurveTo(_,S-L*1.05,_+I*.3,S-L*.92),v.quadraticCurveTo(_+I*1.05,S-L*.95,_+I*.95,S-L*.4),v.quadraticCurveTo(_+I*1.1,S-L*.2,_+I*1,S-L*.05),v.lineTo(_+I*.88,S-L*.15),v.quadraticCurveTo(_+I*.7,S-L*.75,_,S-L*.72),v.quadraticCurveTo(_-I*.7,S-L*.75,_-I*.88,S-L*.15),v.lineTo(_-I*1,S-L*.05),v.quadraticCurveTo(_-I*1.1,S-L*.2,_-I*.95,S-L*.4),v.closePath(),v.fill(),v.strokeStyle=Vr.light,v.lineWidth=1,v.globalAlpha=.2;for(let k=0;k<12;k++){const H=_-I*.6+I*1.2*k/12,B=S-L*.85+Math.sin(k*1.3)*L*.08;v.beginPath(),v.moveTo(H,B),v.quadraticCurveTo(H+Math.sin(k*.7)*I*.1,B+L*.2,H+Math.sin(k*.5)*I*.15,B+L*.4),v.stroke()}v.globalAlpha=1,v.restore()},[]),C=F.useCallback((v,_,S,T)=>{v.save();const I=T*.1,L=S+T*.22,U=S+T*.38;v.fillStyle=Pn.shadow,v.beginPath(),v.moveTo(_-I,L),v.lineTo(_-I*1.3,U),v.lineTo(_+I*1.3,U),v.lineTo(_+I,L),v.closePath(),v.fill();const k=v.createLinearGradient(_-I,L,_+I,L);k.addColorStop(0,Pn.shadow),k.addColorStop(.3,Pn.base),k.addColorStop(.7,Pn.base),k.addColorStop(1,Pn.shadow),v.fillStyle=k,v.beginPath(),v.moveTo(_-I*.9,L),v.lineTo(_-I*1.15,U),v.lineTo(_+I*1.15,U),v.lineTo(_+I*.9,L),v.closePath(),v.fill(),v.fillStyle="#3A3A50",v.beginPath(),v.moveTo(_-I*1.15,U),v.quadraticCurveTo(_-T*.35,U+T*.02,_-T*.45,U+T*.12),v.lineTo(_+T*.45,U+T*.12),v.quadraticCurveTo(_+T*.35,U+T*.02,_+I*1.15,U),v.closePath(),v.fill(),v.restore()},[]),b=F.useCallback(v=>{const _=et.SIZE,S=_/2,T=_/2-_*.02,I=c.current*_*.003,L=f.current*_*.003;v.clearRect(0,0,_,_);const U=v.createRadialGradient(S,T,_*.1,S,T,_*.55);U.addColorStop(0,"#1a2035"),U.addColorStop(1,"#0c1018"),v.fillStyle=U,v.fillRect(0,0,_,_);const k=v.createRadialGradient(S,T,_*.25,S,T,_*.55);k.addColorStop(0,"transparent"),k.addColorStop(1,"rgba(0,0,0,0.4)"),v.fillStyle=k,v.fillRect(0,0,_,_),v.save(),v.translate(I,L),C(v,S,T,_),y(v,S-_*.33,T-_*.01,-1,_),y(v,S+_*.33,T-_*.01,1,_),M(v,S,T,_);const H=T-_*.055,B=_*.095,P=i.current,O=o.current.x,V=o.current.y;l(v,S-B,H,_,-1,P,O,V),l(v,S+B,H,_,1,P,O,V),p(v,S-B,H-_*.048,_,-1),p(v,S+B,H-_*.048,_,1),m(v,S,T+_*.02,_),E(v,S,T+_*.12,_,n.current,x.current),w(v,S,T,_),e&&(v.shadowColor="rgba(6,182,212,0.25)",v.shadowBlur=25,v.strokeStyle="rgba(6,182,212,0.15)",v.lineWidth=2,v.beginPath(),v.ellipse(S,T,_*.38,_*.44,0,0,Math.PI*2),v.stroke(),v.shadowBlur=0),v.restore()},[e,M,y,l,p,m,E,w,C]);F.useEffect(()=>{const v=t.current;if(!v)return;const _=v.getContext("2d");if(!_)return;v.width=et.SIZE,v.height=et.SIZE;let S=!0;const T=()=>{if(!S)return;const I=performance.now(),L=(I-g.current)/1e3;if(e){const U=Math.abs(Math.sin(L*7.3))*.3,k=Math.abs(Math.sin(L*11.7))*.25,H=Math.abs(Math.sin(L*4.8))*.2,B=Math.abs(Math.sin(L*16.1))*.15,P=Math.max(0,Math.sin(L*2.3))*.1,O=Om(U+k+H+B+P,0,1);n.current=gt(n.current,O,.3);const V=L*3.7,q=Math.floor(V)%5,te=V-Math.floor(V),re=[{width:1,roundness:0,jawDrop:.8},{width:.7,roundness:.8,jawDrop:.6},{width:1.2,roundness:0,jawDrop:.4},{width:.8,roundness:.5,jawDrop:.9},{width:1,roundness:.2,jawDrop:.5}],ue=re[q],xe=re[(q+1)%re.length];x.current={width:gt(ue.width,xe.width,te),roundness:gt(ue.roundness,xe.roundness,te),jawDrop:gt(ue.jawDrop,xe.jawDrop,te)}}else n.current=gt(n.current,0,dn.MOUTH_SMOOTH),x.current={width:gt(x.current.width,1,.1),roundness:gt(x.current.roundness,0,.1),jawDrop:gt(x.current.jawDrop,0,.1)};I>s.current&&r.current===0&&(r.current=1,setTimeout(()=>{r.current=0},dn.BLINK_DURATION_MS),s.current=I+dn.BLINK_MIN_MS+Math.random()*(dn.BLINK_MAX_MS-dn.BLINK_MIN_MS)),i.current=gt(i.current,r.current,.45),I>u.current&&(a.current={x:(Math.random()-.5)*2,y:(Math.random()-.5)*1.5},u.current=I+1500+Math.random()*3e3),o.current={x:gt(o.current.x,a.current.x,.04),y:gt(o.current.y,a.current.y,.04)},c.current=Math.sin(L*.4)*.8+Math.sin(L*.7)*.4,f.current=Math.sin(L*.8)*.6,h.current&&(n.current=e?.4:0),b(_),d.current=requestAnimationFrame(T)};return d.current=requestAnimationFrame(T),()=>{S=!1,cancelAnimationFrame(d.current)}},[t,e,b])}function MR({isSpeaking:t}){const e=F.useRef(null);return SR({canvasRef:e,isSpeaking:t}),N.jsx("canvas",{ref:e,width:et.SIZE,height:et.SIZE,className:"relative z-10 rounded-2xl shadow-2xl",style:{width:et.DISPLAY_SIZE,height:et.DISPLAY_SIZE,borderRadius:"1rem",imageRendering:"auto"}})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const km="182",ER=0,Ov=1,TR=2,gu=1,wR=2,na=3,Lr=0,Cn=1,Hi=2,qi=0,lo=1,kv=2,Bv=3,Vv=4,AR=5,Zr=100,CR=101,bR=102,RR=103,PR=104,DR=200,LR=201,IR=202,NR=203,vh=204,_h=205,UR=206,FR=207,OR=208,kR=209,BR=210,VR=211,zR=212,HR=213,GR=214,yh=0,xh=1,Sh=2,xo=3,Mh=4,Eh=5,Th=6,wh=7,Bm=0,WR=1,jR=2,Ai=0,kM=1,BM=2,VM=3,zM=4,HM=5,GM=6,WM=7,jM=300,ms=301,So=302,Ah=303,Ch=304,Tc=306,bh=1e3,ji=1001,Rh=1002,Kt=1003,XR=1004,Rl=1005,on=1006,Ef=1007,ss=1008,Nn=1009,XM=1010,qM=1011,Va=1012,Vm=1013,Pi=1014,Si=1015,er=1016,zm=1017,Hm=1018,za=1020,YM=35902,$M=35899,KM=1021,ZM=1022,ui=1023,tr=1026,os=1027,QM=1028,Gm=1029,Mo=1030,Wm=1031,jm=1033,vu=33776,_u=33777,yu=33778,xu=33779,Ph=35840,Dh=35841,Lh=35842,Ih=35843,Nh=36196,Uh=37492,Fh=37496,Oh=37488,kh=37489,Bh=37490,Vh=37491,zh=37808,Hh=37809,Gh=37810,Wh=37811,jh=37812,Xh=37813,qh=37814,Yh=37815,$h=37816,Kh=37817,Zh=37818,Qh=37819,Jh=37820,ep=37821,tp=36492,np=36494,ip=36495,rp=36283,sp=36284,op=36285,ap=36286,qR=3200,JM=0,YR=1,mr="",Gn="srgb",Eo="srgb-linear",ec="linear",st="srgb",Ss=7680,zv=519,$R=512,KR=513,ZR=514,Xm=515,QR=516,JR=517,qm=518,eP=519,Hv=35044,Gv="300 es",Mi=2e3,tc=2001;function e1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tP(){const t=nc("canvas");return t.style.display="block",t}const Wv={};function jv(...t){const e="THREE."+t.shift();console.log(e,...t)}function ke(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Je(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ha(...t){const e=t.join(" ");e in Wv||(Wv[e]=!0,ke(...t))}function nP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Do{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tf=Math.PI/180,lp=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function iP(t,e){return(t%e+e)%e}function wf(t,e,n){return(1-n)*t+n*e}function Wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class el{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let u=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],h=s[o+0],g=s[o+1],x=s[o+2],M=s[o+3];if(a<=0){e[n+0]=u,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a>=1){e[n+0]=h,e[n+1]=g,e[n+2]=x,e[n+3]=M;return}if(d!==M||u!==h||c!==g||f!==x){let y=u*h+c*g+f*x+d*M;y<0&&(h=-h,g=-g,x=-x,M=-M,y=-y);let l=1-a;if(y<.9995){const p=Math.acos(y),m=Math.sin(p);l=Math.sin(l*p)/m,a=Math.sin(a*p)/m,u=u*l+h*a,c=c*l+g*a,f=f*l+x*a,d=d*l+M*a}else{u=u*l+h*a,c=c*l+g*a,f=f*l+x*a,d=d*l+M*a;const p=1/Math.sqrt(u*u+c*c+f*f+d*d);u*=p,c*=p,f*=p,d*=p}}e[n]=u,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],u=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+f*d+u*g-c*h,e[n+1]=u*x+f*h+c*d-a*g,e[n+2]=c*x+f*g+a*h-u*d,e[n+3]=f*x-a*d-u*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=u(i/2),g=u(r/2),x=u(s/2);switch(o){case"XYZ":this._x=h*f*d+c*g*x,this._y=c*g*d-h*f*x,this._z=c*f*x+h*g*d,this._w=c*f*d-h*g*x;break;case"YXZ":this._x=h*f*d+c*g*x,this._y=c*g*d-h*f*x,this._z=c*f*x-h*g*d,this._w=c*f*d+h*g*x;break;case"ZXY":this._x=h*f*d-c*g*x,this._y=c*g*d+h*f*x,this._z=c*f*x+h*g*d,this._w=c*f*d-h*g*x;break;case"ZYX":this._x=h*f*d-c*g*x,this._y=c*g*d+h*f*x,this._z=c*f*x-h*g*d,this._w=c*f*d+h*g*x;break;case"YZX":this._x=h*f*d+c*g*x,this._y=c*g*d+h*f*x,this._z=c*f*x-h*g*d,this._w=c*f*d-h*g*x;break;case"XZY":this._x=h*f*d-c*g*x,this._y=c*g*d-h*f*x,this._z=c*f*x+h*g*d,this._w=c*f*d+h*g*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],u=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(f-u)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,u=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*u,this._y=r*f+o*u+s*a-i*c,this._z=s*f+o*c+i*u-r*a,this._w=o*f-i*a-r*u-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let u=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);u=Math.sin(u*c)/f,n=Math.sin(n*c)/f,this._x=this._x*u+i*n,this._y=this._y*u+r*n,this._z=this._z*u+s*n,this._w=this._w*u+o*n,this._onChangeCallback()}else this._x=this._x*u+i*n,this._y=this._y*u+r*n,this._z=this._z*u+s*n,this._w=this._w*u+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,u=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+u*c+o*d-a*f,this.y=i+u*f+a*c-s*d,this.z=r+u*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,u=n.z;return this.x=r*u-s*a,this.y=s*o-i*u,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Af.copy(this).projectOnVector(e),this.sub(Af)}reflect(e){return this.sub(Af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Af=new Y,Xv=new el;class Be{constructor(e,n,i,r,s,o,a,u,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,u,c)}set(e,n,i,r,s,o,a,u,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=u,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],u=i[6],c=i[1],f=i[4],d=i[7],h=i[2],g=i[5],x=i[8],M=r[0],y=r[3],l=r[6],p=r[1],m=r[4],E=r[7],w=r[2],C=r[5],b=r[8];return s[0]=o*M+a*p+u*w,s[3]=o*y+a*m+u*C,s[6]=o*l+a*E+u*b,s[1]=c*M+f*p+d*w,s[4]=c*y+f*m+d*C,s[7]=c*l+f*E+d*b,s[2]=h*M+g*p+x*w,s[5]=h*y+g*m+x*C,s[8]=h*l+g*E+x*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*u+r*s*c-r*o*u}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*u-f*s,g=c*s-o*u,x=n*d+i*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=d*M,e[1]=(r*c-f*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(f*n-r*u)*M,e[5]=(r*s-a*n)*M,e[6]=g*M,e[7]=(i*u-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const u=Math.cos(s),c=Math.sin(s);return this.set(i*u,i*c,-i*(u*o+c*a)+o+e,-r*c,r*u,-r*(-c*o+u*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cf.makeScale(e,n)),this}rotate(e){return this.premultiply(Cf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cf=new Be,qv=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rP(){const t={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=uo(r.r),r.g=uo(r.g),r.b=uo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?ec:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ha("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ha("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Eo]:{primaries:e,whitePoint:i,transfer:ec,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const Ye=rP();function Yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class sP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=nc("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yi(n[i]/255)*255):n[i]=Yi(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oP=0;class Ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oP++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bf(r[o].image)):s.push(bf(r[o]))}else s=bf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let aP=0;const Rf=new Y;class gn extends Do{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=ji,r=ji,s=on,o=ss,a=ui,u=Nn,c=gn.DEFAULT_ANISOTROPY,f=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aP++}),this.uuid=Ja(),this.name="",this.source=new Ym(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rf).x}get height(){return this.source.getSize(Rf).y}get depth(){return this.source.getSize(Rf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bh:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bh:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=jM;gn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const u=e.elements,c=u[0],f=u[4],d=u[8],h=u[1],g=u[5],x=u[9],M=u[2],y=u[6],l=u[10];if(Math.abs(f-h)<.01&&Math.abs(d-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+M)<.1&&Math.abs(x+y)<.1&&Math.abs(c+g+l-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,E=(g+1)/2,w=(l+1)/2,C=(f+h)/4,b=(d+M)/4,v=(x+y)/4;return m>E&&m>w?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=C/i,s=b/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=v/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=v/s),this.set(i,r,s,n),this}let p=Math.sqrt((y-x)*(y-x)+(d-M)*(d-M)+(h-f)*(h-f));return Math.abs(p)<.001&&(p=1),this.x=(y-x)/p,this.y=(d-M)/p,this.z=(h-f)/p,this.w=Math.acos((c+g+l-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lP extends Do{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new gn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ym(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends lP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class t1 extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uP extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pl.copy(i.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Dl.subVectors(this.max,jo),Es.subVectors(e.a,jo),Ts.subVectors(e.b,jo),ws.subVectors(e.c,jo),rr.subVectors(Ts,Es),sr.subVectors(ws,Ts),zr.subVectors(Es,ws);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-zr.z,zr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,zr.z,0,-zr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-zr.y,zr.x,0];return!Pf(n,Es,Ts,ws,Dl)||(n=[1,0,0,0,1,0,0,0,1],!Pf(n,Es,Ts,ws,Dl))?!1:(Ll.crossVectors(rr,sr),n=[Ll.x,Ll.y,Ll.z],Pf(n,Es,Ts,ws,Dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ti=new Y,Pl=new tl,Es=new Y,Ts=new Y,ws=new Y,rr=new Y,sr=new Y,zr=new Y,jo=new Y,Dl=new Y,Ll=new Y,Hr=new Y;function Pf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Hr.fromArray(t,s);const a=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),u=e.dot(Hr),c=n.dot(Hr),f=i.dot(Hr);if(Math.max(-Math.max(u,c,f),Math.min(u,c,f))>a)return!1}return!0}const cP=new tl,Xo=new Y,Df=new Y;class $m{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Xo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Df)),this.expandByPoint(Xo.copy(e.center).sub(Df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fi=new Y,Lf=new Y,Il=new Y,or=new Y,If=new Y,Nl=new Y,Nf=new Y;class fP{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Lf.copy(e).add(n).multiplyScalar(.5),Il.copy(n).sub(e).normalize(),or.copy(this.origin).sub(Lf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Il),a=or.dot(this.direction),u=-or.dot(Il),c=or.lengthSq(),f=Math.abs(1-o*o);let d,h,g,x;if(f>0)if(d=o*u-a,h=o*a-u,x=s*f,d>=0)if(h>=-x)if(h<=x){const M=1/f;d*=M,h*=M,g=d*(d+o*h+2*a)+h*(o*d+h+2*u)+c}else h=s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*u)+c;else h=-s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*u)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-u),s),g=-d*d+h*(h+2*u)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-u),s),g=h*(h+2*u)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-u),s),g=-d*d+h*(h+2*u)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Lf).addScaledVector(Il,h),g}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,u=i+o;return u<0?null:a<0?this.at(u,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,u;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,u=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,u=(e.min.z-h.z)*d),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,r,s){If.subVectors(n,e),Nl.subVectors(i,e),Nf.crossVectors(If,Nl);let o=this.direction.dot(Nf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);const u=a*this.direction.dot(Nl.crossVectors(or,Nl));if(u<0)return null;const c=a*this.direction.dot(If.cross(or));if(c<0||u+c>o)return null;const f=-a*or.dot(Nf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,o,a,u,c,f,d,h,g,x,M,y){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,u,c,f,d,h,g,x,M,y)}set(e,n,i,r,s,o,a,u,c,f,d,h,g,x,M,y){const l=this.elements;return l[0]=e,l[4]=n,l[8]=i,l[12]=r,l[1]=s,l[5]=o,l[9]=a,l[13]=u,l[2]=c,l[6]=f,l[10]=d,l[14]=h,l[3]=g,l[7]=x,l[11]=M,l[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),u=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*d,x=a*f,M=a*d;n[0]=u*f,n[4]=-u*d,n[8]=c,n[1]=g+x*c,n[5]=h-M*c,n[9]=-a*u,n[2]=M-h*c,n[6]=x+g*c,n[10]=o*u}else if(e.order==="YXZ"){const h=u*f,g=u*d,x=c*f,M=c*d;n[0]=h+M*a,n[4]=x*a-g,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=g*a-x,n[6]=M+h*a,n[10]=o*u}else if(e.order==="ZXY"){const h=u*f,g=u*d,x=c*f,M=c*d;n[0]=h-M*a,n[4]=-o*d,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*f,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*u}else if(e.order==="ZYX"){const h=o*f,g=o*d,x=a*f,M=a*d;n[0]=u*f,n[4]=x*c-g,n[8]=h*c+M,n[1]=u*d,n[5]=M*c+h,n[9]=g*c-x,n[2]=-c,n[6]=a*u,n[10]=o*u}else if(e.order==="YZX"){const h=o*u,g=o*c,x=a*u,M=a*c;n[0]=u*f,n[4]=M-h*d,n[8]=x*d+g,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*d+x,n[10]=h-M*d}else if(e.order==="XZY"){const h=o*u,g=o*c,x=a*u,M=a*c;n[0]=u*f,n[4]=-d,n[8]=c*f,n[1]=h*d+M,n[5]=o*f,n[9]=g*d-x,n[2]=x*d-g,n[6]=a*f,n[10]=M*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dP,e,hP)}lookAt(e,n,i){const r=this.elements;return Dn.subVectors(e,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),ar.crossVectors(i,Dn),ar.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),ar.crossVectors(i,Dn)),ar.normalize(),Ul.crossVectors(Dn,ar),r[0]=ar.x,r[4]=Ul.x,r[8]=Dn.x,r[1]=ar.y,r[5]=Ul.y,r[9]=Dn.y,r[2]=ar.z,r[6]=Ul.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],u=i[8],c=i[12],f=i[1],d=i[5],h=i[9],g=i[13],x=i[2],M=i[6],y=i[10],l=i[14],p=i[3],m=i[7],E=i[11],w=i[15],C=r[0],b=r[4],v=r[8],_=r[12],S=r[1],T=r[5],I=r[9],L=r[13],U=r[2],k=r[6],H=r[10],B=r[14],P=r[3],O=r[7],V=r[11],q=r[15];return s[0]=o*C+a*S+u*U+c*P,s[4]=o*b+a*T+u*k+c*O,s[8]=o*v+a*I+u*H+c*V,s[12]=o*_+a*L+u*B+c*q,s[1]=f*C+d*S+h*U+g*P,s[5]=f*b+d*T+h*k+g*O,s[9]=f*v+d*I+h*H+g*V,s[13]=f*_+d*L+h*B+g*q,s[2]=x*C+M*S+y*U+l*P,s[6]=x*b+M*T+y*k+l*O,s[10]=x*v+M*I+y*H+l*V,s[14]=x*_+M*L+y*B+l*q,s[3]=p*C+m*S+E*U+w*P,s[7]=p*b+m*T+E*k+w*O,s[11]=p*v+m*I+E*H+w*V,s[15]=p*_+m*L+E*B+w*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],u=e[9],c=e[13],f=e[2],d=e[6],h=e[10],g=e[14],x=e[3],M=e[7],y=e[11],l=e[15],p=u*g-c*h,m=a*g-c*d,E=a*h-u*d,w=o*g-c*f,C=o*h-u*f,b=o*d-a*f;return n*(M*p-y*m+l*E)-i*(x*p-y*w+l*C)+r*(x*m-M*w+l*b)-s*(x*E-M*C+y*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],f=e[8],d=e[9],h=e[10],g=e[11],x=e[12],M=e[13],y=e[14],l=e[15],p=d*y*c-M*h*c+M*u*g-a*y*g-d*u*l+a*h*l,m=x*h*c-f*y*c-x*u*g+o*y*g+f*u*l-o*h*l,E=f*M*c-x*d*c+x*a*g-o*M*g-f*a*l+o*d*l,w=x*d*u-f*M*u-x*a*h+o*M*h+f*a*y-o*d*y,C=n*p+i*m+r*E+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=p*b,e[1]=(M*h*s-d*y*s-M*r*g+i*y*g+d*r*l-i*h*l)*b,e[2]=(a*y*s-M*u*s+M*r*c-i*y*c-a*r*l+i*u*l)*b,e[3]=(d*u*s-a*h*s-d*r*c+i*h*c+a*r*g-i*u*g)*b,e[4]=m*b,e[5]=(f*y*s-x*h*s+x*r*g-n*y*g-f*r*l+n*h*l)*b,e[6]=(x*u*s-o*y*s-x*r*c+n*y*c+o*r*l-n*u*l)*b,e[7]=(o*h*s-f*u*s+f*r*c-n*h*c-o*r*g+n*u*g)*b,e[8]=E*b,e[9]=(x*d*s-f*M*s-x*i*g+n*M*g+f*i*l-n*d*l)*b,e[10]=(o*M*s-x*a*s+x*i*c-n*M*c-o*i*l+n*a*l)*b,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*g-n*a*g)*b,e[12]=w*b,e[13]=(f*M*r-x*d*r+x*i*h-n*M*h-f*i*y+n*d*y)*b,e[14]=(x*a*r-o*M*r-x*i*u+n*M*u+o*i*y-n*a*y)*b,e[15]=(o*d*r-f*a*r+f*i*u-n*d*u-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,u=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*u,c*u+r*a,0,c*a+r*u,f*a+i,f*u-r*o,0,c*u-r*a,f*u+r*o,s*u*u+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,u=n._w,c=s+s,f=o+o,d=a+a,h=s*c,g=s*f,x=s*d,M=o*f,y=o*d,l=a*d,p=u*c,m=u*f,E=u*d,w=i.x,C=i.y,b=i.z;return r[0]=(1-(M+l))*w,r[1]=(g+E)*w,r[2]=(x-m)*w,r[3]=0,r[4]=(g-E)*C,r[5]=(1-(h+l))*C,r[6]=(y+p)*C,r[7]=0,r[8]=(x+m)*b,r[9]=(y-p)*b,r[10]=(1-(h+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),ni.copy(this);const c=1/s,f=1/o,d=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=f,ni.elements[5]*=f,ni.elements[6]*=f,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,n.setFromRotationMatrix(ni),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi,u=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),g=(i+r)/(i-r);let x,M;if(u)x=s/(o-s),M=o*s/(o-s);else if(a===Mi)x=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===tc)x=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi,u=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),g=-(i+r)/(i-r);let x,M;if(u)x=1/(o-s),M=o/(o-s);else if(a===Mi)x=-2/(o-s),M=-(o+s)/(o-s);else if(a===tc)x=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const As=new Y,ni=new bt,dP=new Y(0,0,0),hP=new Y(1,1,1),ar=new Y,Ul=new Y,Dn=new Y,$v=new bt,Kv=new el;class Di{constructor(e=0,n=0,i=0,r=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],u=r[1],c=r[5],f=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $v.makeRotationFromQuaternion(e),this.setFromRotationMatrix($v,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kv.setFromEuler(this),this.setFromQuaternion(Kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class n1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pP=0;const Zv=new Y,Cs=new el,Oi=new bt,Fl=new Y,qo=new Y,mP=new Y,gP=new el,Qv=new Y(1,0,0),Jv=new Y(0,1,0),e_=new Y(0,0,1),t_={type:"added"},vP={type:"removed"},bs={type:"childadded",child:null},Uf={type:"childremoved",child:null};class an extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pP++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new Y,n=new Di,i=new el,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Be}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Qv,e)}rotateY(e){return this.rotateOnAxis(Jv,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,n){return Zv.copy(e).applyQuaternion(this.quaternion),this.position.add(Zv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qv,e)}translateY(e){return this.translateOnAxis(Jv,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fl.copy(e):Fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(qo,Fl,this.up):Oi.lookAt(Fl,qo,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),Cs.setFromRotationMatrix(Oi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t_),bs.child=e,this.dispatchEvent(bs),bs.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vP),Uf.child=e,this.dispatchEvent(Uf),Uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t_),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,mP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,gP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,f=u.length;c<f;c++){const d=u[c];s(e.shapes,d)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(s(e.materials,this.material[u]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(e.animations,u))}}if(n){const a=o(e.geometries),u=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new Y(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new Y,ki=new Y,Ff=new Y,Bi=new Y,Rs=new Y,Ps=new Y,n_=new Y,Of=new Y,kf=new Y,Bf=new Y,Vf=new Ct,zf=new Ct,Hf=new Ct;class li{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ii.subVectors(e,n),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ii.subVectors(r,n),ki.subVectors(i,n),Ff.subVectors(e,n);const o=ii.dot(ii),a=ii.dot(ki),u=ii.dot(Ff),c=ki.dot(ki),f=ki.dot(Ff),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,g=(c*u-a*f)*h,x=(o*f-a*u)*h;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,u){return this.getBarycoord(e,n,i,r,Bi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Bi.x),u.addScaledVector(o,Bi.y),u.addScaledVector(a,Bi.z),u)}static getInterpolatedAttribute(e,n,i,r,s,o){return Vf.setScalar(0),zf.setScalar(0),Hf.setScalar(0),Vf.fromBufferAttribute(e,n),zf.fromBufferAttribute(e,i),Hf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vf,s.x),o.addScaledVector(zf,s.y),o.addScaledVector(Hf,s.z),o}static isFrontFacing(e,n,i,r){return ii.subVectors(i,n),ki.subVectors(e,n),ii.cross(ki).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ii.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Rs.subVectors(r,i),Ps.subVectors(s,i),Of.subVectors(e,i);const u=Rs.dot(Of),c=Ps.dot(Of);if(u<=0&&c<=0)return n.copy(i);kf.subVectors(e,r);const f=Rs.dot(kf),d=Ps.dot(kf);if(f>=0&&d<=f)return n.copy(r);const h=u*d-f*c;if(h<=0&&u>=0&&f<=0)return o=u/(u-f),n.copy(i).addScaledVector(Rs,o);Bf.subVectors(e,s);const g=Rs.dot(Bf),x=Ps.dot(Bf);if(x>=0&&g<=x)return n.copy(s);const M=g*c-u*x;if(M<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Ps,a);const y=f*x-g*d;if(y<=0&&d-f>=0&&g-x>=0)return n_.subVectors(s,r),a=(d-f)/(d-f+(g-x)),n.copy(r).addScaledVector(n_,a);const l=1/(y+M+h);return o=M*l,a=h*l,n.copy(i).addScaledVector(Rs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Gf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=iP(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Gf(o,s,e+1/3),this.g=Gf(o,s,e),this.b=Gf(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=i1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Ye.workingToColorSpace(nn.copy(this),e),Math.round(je(nn.r*255,0,255))*65536+Math.round(je(nn.g*255,0,255))*256+Math.round(je(nn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let u,c;const f=(a+o)/2;if(a===o)u=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:u=(r-s)/d+(r<s?6:0);break;case r:u=(s-i)/d+2;break;case s:u=(i-r)/d+4;break}u/=6}return e.h=u,e.s=c,e.l=f,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Gn){Ye.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(Ol);const i=wf(lr.h,Ol.h,n),r=wf(lr.s,Ol.s,n),s=wf(lr.l,Ol.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Xe;Xe.NAMES=i1;let _P=0;class nl extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_P++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=lo,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=_h,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vh&&(i.blendSrc=this.blendSrc),this.blendDst!==_h&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Js extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new Y,kl=new Ke;let yP=0;class bi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hv,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)kl.fromBufferAttribute(this,n),kl.applyMatrix3(e),this.setXY(n,kl.x,kl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hv&&(e.usage=this.usage),e}}class r1 extends bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s1 extends bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dt extends bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let xP=0;const Hn=new bt,Wf=new an,Ds=new Y,Ln=new tl,Yo=new tl,Wt=new Y;class Vn extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xP++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e1(e)?s1:r1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Wf.lookAt(e),Wf.updateMatrix(),this.applyMatrix4(Wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $m);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Ln.min,Yo.min),Ln.expandByPoint(Wt),Wt.addVectors(Ln.max,Yo.max),Ln.expandByPoint(Wt)):(Ln.expandByPoint(Yo.min),Ln.expandByPoint(Yo.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],u=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Wt.fromBufferAttribute(a,c),u&&(Ds.fromBufferAttribute(e,c),Wt.add(Ds)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],u=[];for(let v=0;v<i.count;v++)a[v]=new Y,u[v]=new Y;const c=new Y,f=new Y,d=new Y,h=new Ke,g=new Ke,x=new Ke,M=new Y,y=new Y;function l(v,_,S){c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,_),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,v),g.fromBufferAttribute(s,_),x.fromBufferAttribute(s,S),f.sub(c),d.sub(c),g.sub(h),x.sub(h);const T=1/(g.x*x.y-x.x*g.y);isFinite(T)&&(M.copy(f).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(T),y.copy(d).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(T),a[v].add(M),a[_].add(M),a[S].add(M),u[v].add(y),u[_].add(y),u[S].add(y))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let v=0,_=p.length;v<_;++v){const S=p[v],T=S.start,I=S.count;for(let L=T,U=T+I;L<U;L+=3)l(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const m=new Y,E=new Y,w=new Y,C=new Y;function b(v){w.fromBufferAttribute(r,v),C.copy(w);const _=a[v];m.copy(_),m.sub(w.multiplyScalar(w.dot(_))).normalize(),E.crossVectors(C,_);const T=E.dot(u[v])<0?-1:1;o.setXYZW(v,m.x,m.y,m.z,T)}for(let v=0,_=p.length;v<_;++v){const S=p[v],T=S.start,I=S.count;for(let L=T,U=T+I;L<U;L+=3)b(e.getX(L+0)),b(e.getX(L+1)),b(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,u=new Y,c=new Y,f=new Y,d=new Y;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),M=e.getX(h+1),y=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,y),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),u.fromBufferAttribute(i,M),c.fromBufferAttribute(i,y),a.add(f),u.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,u){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(u.length*f);let g=0,x=0;for(let M=0,y=u.length;M<y;M++){a.isInterleavedBufferAttribute?g=u[M]*a.data.stride+a.offset:g=u[M]*f;for(let l=0;l<f;l++)h[x++]=c[g++]}return new bi(h,f,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const u=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],g=e(h,i);u.push(g)}n.morphAttributes[a]=u}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],f=[];for(let d=0,h=c.length;d<h;d++){const g=c[d];f.push(g.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,g=d.length;h<g;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new bt,Gr=new fP,Bl=new $m,r_=new Y,Vl=new Y,zl=new Y,Hl=new Y,jf=new Y,Gl=new Y,s_=new Y,Wl=new Y;class Rt extends an{constructor(e=new Vn,n=new Js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gl.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const f=a[u],d=s[u];f!==0&&(jf.fromBufferAttribute(d,e),o?Gl.addScaledVector(jf,f):Gl.addScaledVector(jf.sub(n),f))}n.add(Gl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!(Bl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Bl,r_)===null||Gr.origin.distanceToSquared(r_)>(e.far-e.near)**2))&&(i_.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(i_),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,u=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=h.length;x<M;x++){const y=h[x],l=o[y.materialIndex],p=Math.max(y.start,g.start),m=Math.min(a.count,Math.min(y.start+y.count,g.start+g.count));for(let E=p,w=m;E<w;E+=3){const C=a.getX(E),b=a.getX(E+1),v=a.getX(E+2);r=jl(this,l,e,i,c,f,d,C,b,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(a.count,g.start+g.count);for(let y=x,l=M;y<l;y+=3){const p=a.getX(y),m=a.getX(y+1),E=a.getX(y+2);r=jl(this,o,e,i,c,f,d,p,m,E),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let x=0,M=h.length;x<M;x++){const y=h[x],l=o[y.materialIndex],p=Math.max(y.start,g.start),m=Math.min(u.count,Math.min(y.start+y.count,g.start+g.count));for(let E=p,w=m;E<w;E+=3){const C=E,b=E+1,v=E+2;r=jl(this,l,e,i,c,f,d,C,b,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let y=x,l=M;y<l;y+=3){const p=y,m=y+1,E=y+2;r=jl(this,o,e,i,c,f,d,p,m,E),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}}}function SP(t,e,n,i,r,s,o,a){let u;if(e.side===Cn?u=i.intersectTriangle(o,s,r,!0,a):u=i.intersectTriangle(r,s,o,e.side===Lr,a),u===null)return null;Wl.copy(a),Wl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Wl);return c<n.near||c>n.far?null:{distance:c,point:Wl.clone(),object:t}}function jl(t,e,n,i,r,s,o,a,u,c){t.getVertexPosition(a,Vl),t.getVertexPosition(u,zl),t.getVertexPosition(c,Hl);const f=SP(t,e,n,i,Vl,zl,Hl,s_);if(f){const d=new Y;li.getBarycoord(s_,Vl,zl,Hl,d),r&&(f.uv=li.getInterpolatedAttribute(r,a,u,c,d,new Ke)),s&&(f.uv1=li.getInterpolatedAttribute(s,a,u,c,d,new Ke)),o&&(f.normal=li.getInterpolatedAttribute(o,a,u,c,d,new Y),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:u,c,normal:new Y,materialIndex:0};li.getNormal(Vl,zl,Hl,h.normal),f.face=h,f.barycoord=d}return f}class Lo extends Vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],c=[],f=[],d=[];let h=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(d,2));function x(M,y,l,p,m,E,w,C,b,v,_){const S=E/b,T=w/v,I=E/2,L=w/2,U=C/2,k=b+1,H=v+1;let B=0,P=0;const O=new Y;for(let V=0;V<H;V++){const q=V*T-L;for(let te=0;te<k;te++){const re=te*S-I;O[M]=re*p,O[y]=q*m,O[l]=U,c.push(O.x,O.y,O.z),O[M]=0,O[y]=0,O[l]=C>0?1:-1,f.push(O.x,O.y,O.z),d.push(te/b),d.push(1-V/v),B+=1}}for(let V=0;V<v;V++)for(let q=0;q<b;q++){const te=h+q+k*V,re=h+q+k*(V+1),ue=h+(q+1)+k*(V+1),xe=h+(q+1)+k*V;u.push(te,re,xe),u.push(re,ue,xe),P+=6}a.addGroup(g,P,_),g+=P,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=To(t[n]);for(const r in i)e[r]=i[r]}return e}function MP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function o1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const EP={clone:To,merge:cn};var TP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TP,this.fragmentShader=wP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=MP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class a1 extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new Y,o_=new Ke,a_=new Ke;class Xn extends a1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lp*2*Math.atan(Math.tan(Tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,o_,a_),n.subVectors(a_,o_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/u,n-=o.offsetY*i/c,r*=o.width/u,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Is=1;class AP extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(Ls,Is,e,n);r.layers=this.layers,this.add(r);const s=new Xn(Ls,Is,e,n);s.layers=this.layers,this.add(s);const o=new Xn(Ls,Is,e,n);o.layers=this.layers,this.add(o);const a=new Xn(Ls,Is,e,n);a.layers=this.layers,this.add(a);const u=new Xn(Ls,Is,e,n);u.layers=this.layers,this.add(u);const c=new Xn(Ls,Is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,u]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,u,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,u),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class l1 extends gn{constructor(e=[],n=ms,i,r,s,o,a,u,c,f){super(e,n,i,r,s,o,a,u,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u1 extends Ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new l1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Lo(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:qi});s.uniforms.tEquirect.value=n;const o=new Rt(r,s),a=n.minFilter;return n.minFilter===ss&&(n.minFilter=on),new AP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class eo extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CP={type:"move"};class Xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const y=n.getJointPose(M,i),l=this._getHandJoint(c,M);y!==null&&(l.matrix.fromArray(y.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=y.radius),l.visible=y!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),g=.02,x=.005;c.inputState.pinching&&h>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CP)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new eo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class bP extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class RP extends gn{constructor(e=null,n=1,i=1,r,s,o,a,u,c=Kt,f=Kt,d,h){super(null,o,a,u,c,f,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qf=new Y,PP=new Y,DP=new Be;class Kr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qf.subVectors(i,n).cross(PP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||DP.getNormalMatrix(e),r=this.coplanarPoint(qf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new $m,LP=new Ke(.5,.5),Xl=new Y;class Km{constructor(e=new Kr,n=new Kr,i=new Kr,r=new Kr,s=new Kr,o=new Kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],u=s[2],c=s[3],f=s[4],d=s[5],h=s[6],g=s[7],x=s[8],M=s[9],y=s[10],l=s[11],p=s[12],m=s[13],E=s[14],w=s[15];if(r[0].setComponents(c-o,g-f,l-x,w-p).normalize(),r[1].setComponents(c+o,g+f,l+x,w+p).normalize(),r[2].setComponents(c+a,g+d,l+M,w+m).normalize(),r[3].setComponents(c-a,g-d,l-M,w-m).normalize(),i)r[4].setComponents(u,h,y,E).normalize(),r[5].setComponents(c-u,g-h,l-y,w-E).normalize();else if(r[4].setComponents(c-u,g-h,l-y,w-E).normalize(),n===Mi)r[5].setComponents(c+u,g+h,l+y,w+E).normalize();else if(n===tc)r[5].setComponents(u,h,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const n=LP.distanceTo(e.center);return Wr.radius=.7071067811865476+n,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xl.x=r.normal.x>0?e.max.x:e.min.x,Xl.y=r.normal.y>0?e.max.y:e.min.y,Xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ga extends gn{constructor(e,n,i=Pi,r,s,o,a=Kt,u=Kt,c,f=tr,d=1){if(f!==tr&&f!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,o,a,u,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ym(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class IP extends Ga{constructor(e,n=Pi,i=ms,r,s,o=Kt,a=Kt,u,c=tr){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,u,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class c1 extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class va extends Vn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],u=[],c=new Y,f=new Ke;o.push(0,0,0),a.push(0,0,1),u.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const g=i+d/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,u.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wc extends Vn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:u};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],g=[];let x=0;const M=[],y=i/2;let l=0;p(),o===!1&&(e>0&&m(!0),n>0&&m(!1)),this.setIndex(f),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(g,2));function p(){const E=new Y,w=new Y;let C=0;const b=(n-e)/i;for(let v=0;v<=s;v++){const _=[],S=v/s,T=S*(n-e)+e;for(let I=0;I<=r;I++){const L=I/r,U=L*u+a,k=Math.sin(U),H=Math.cos(U);w.x=T*k,w.y=-S*i+y,w.z=T*H,d.push(w.x,w.y,w.z),E.set(k,b,H).normalize(),h.push(E.x,E.y,E.z),g.push(L,1-S),_.push(x++)}M.push(_)}for(let v=0;v<r;v++)for(let _=0;_<s;_++){const S=M[_][v],T=M[_+1][v],I=M[_+1][v+1],L=M[_][v+1];(e>0||_!==0)&&(f.push(S,T,L),C+=3),(n>0||_!==s-1)&&(f.push(T,I,L),C+=3)}c.addGroup(l,C,0),l+=C}function m(E){const w=x,C=new Ke,b=new Y;let v=0;const _=E===!0?e:n,S=E===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,y*S,0),h.push(0,S,0),g.push(.5,.5),x++;const T=x;for(let I=0;I<=r;I++){const U=I/r*u+a,k=Math.cos(U),H=Math.sin(U);b.x=_*H,b.y=y*S,b.z=_*k,d.push(b.x,b.y,b.z),h.push(0,S,0),C.x=k*.5+.5,C.y=H*.5*S+.5,g.push(C.x,C.y),x++}for(let I=0;I<r;I++){const L=w+I,U=T+I;E===!0?f.push(U,U+1,L):f.push(U+1,U,L),v+=3}c.addGroup(l,v,E===!0?1:2),l+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zm extends wc{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Zm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends Vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),u=Math.floor(r),c=a+1,f=u+1,d=e/a,h=n/u,g=[],x=[],M=[],y=[];for(let l=0;l<f;l++){const p=l*h-o;for(let m=0;m<c;m++){const E=m*d-s;x.push(E,-p,0),M.push(0,0,1),y.push(m/a),y.push(1-l/u)}}for(let l=0;l<u;l++)for(let p=0;p<a;p++){const m=p+c*l,E=p+c*(l+1),w=p+1+c*(l+1),C=p+1+c*l;g.push(m,E,C),g.push(E,w,C)}this.setIndex(g),this.setAttribute("position",new Dt(x,3)),this.setAttribute("normal",new Dt(M,3)),this.setAttribute("uv",new Dt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qr extends Vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const u=Math.min(o+a,Math.PI);let c=0;const f=[],d=new Y,h=new Y,g=[],x=[],M=[],y=[];for(let l=0;l<=i;l++){const p=[],m=l/i;let E=0;l===0&&o===0?E=.5/n:l===i&&u===Math.PI&&(E=-.5/n);for(let w=0;w<=n;w++){const C=w/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+m*a),d.y=e*Math.cos(o+m*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+m*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),y.push(C+E,1-m),p.push(c++)}f.push(p)}for(let l=0;l<i;l++)for(let p=0;p<n;p++){const m=f[l][p+1],E=f[l][p],w=f[l+1][p],C=f[l+1][p+1];(l!==0||o>0)&&g.push(m,E,C),(l!==i-1||u<Math.PI)&&g.push(E,w,C)}this.setIndex(g),this.setAttribute("position",new Dt(x,3)),this.setAttribute("normal",new Dt(M,3)),this.setAttribute("uv",new Dt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qm extends Vn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],u=[],c=[],f=new Y,d=new Y,h=new Y;for(let g=0;g<=i;g++)for(let x=0;x<=r;x++){const M=x/r*s,y=g/i*Math.PI*2;d.x=(e+n*Math.cos(y))*Math.cos(M),d.y=(e+n*Math.cos(y))*Math.sin(M),d.z=n*Math.sin(y),a.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),h.subVectors(d,f).normalize(),u.push(h.x,h.y,h.z),c.push(x/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let x=1;x<=r;x++){const M=(r+1)*g+x-1,y=(r+1)*(g-1)+x-1,l=(r+1)*(g-1)+x,p=(r+1)*g+x;o.push(M,y,p),o.push(y,l,p)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class NP extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ql extends nl{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=JM,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class UP extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FP extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class f1 extends an{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Yf=new bt,l_=new Y,u_=new Y;class OP{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Km,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;l_.setFromMatrixPosition(e.matrixWorld),n.position.copy(l_),u_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(u_),n.updateMatrixWorld(),Yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jm extends a1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,u=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,u=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class kP extends OP{constructor(){super(new Jm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BP extends f1{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new kP}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class VP extends f1{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class zP extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function c_(t,e,n,i){const r=HP(i);switch(n){case KM:return t*e;case QM:return t*e/r.components*r.byteLength;case Gm:return t*e/r.components*r.byteLength;case Mo:return t*e*2/r.components*r.byteLength;case Wm:return t*e*2/r.components*r.byteLength;case ZM:return t*e*3/r.components*r.byteLength;case ui:return t*e*4/r.components*r.byteLength;case jm:return t*e*4/r.components*r.byteLength;case vu:case _u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yu:case xu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Ih:return Math.max(t,16)*Math.max(e,8)/4;case Ph:case Lh:return Math.max(t,8)*Math.max(e,8)/2;case Nh:case Uh:case Oh:case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fh:case Bh:case Vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ep:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tp:case np:case ip:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rp:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case op:case ap:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function HP(t){switch(t){case Nn:case XM:return{byteLength:1,components:1};case Va:case qM:case er:return{byteLength:2,components:1};case zm:case Hm:return{byteLength:2,components:4};case Pi:case Vm:case Si:return{byteLength:4,components:1};case YM:case $M:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:km}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=km);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function d1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function GP(t){const e=new WeakMap;function n(a,u){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(u,h),t.bufferData(u,c,f),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,u,c){const f=u.array,d=u.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((g,x)=>g.start-x.start);let h=0;for(let g=1;g<d.length;g++){const x=d[h],M=d[g];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,d[h]=M)}d.length=h+1;for(let g=0,x=d.length;g<x;g++){const M=d[g];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);u&&(t.deleteBuffer(u.buffer),e.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,u));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,u),c.version=a.version}}return{get:r,remove:s,update:o}}var WP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$P=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,JP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,h3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x3="gl_FragColor = linearToOutputTexel( gl_FragColor );",S3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,E3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,T3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,F3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,O3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_D=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ED=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,AD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ID=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ND=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$D=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,JD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_L=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ML=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:WP,alphahash_pars_fragment:jP,alphamap_fragment:XP,alphamap_pars_fragment:qP,alphatest_fragment:YP,alphatest_pars_fragment:$P,aomap_fragment:KP,aomap_pars_fragment:ZP,batching_pars_vertex:QP,batching_vertex:JP,begin_vertex:e3,beginnormal_vertex:t3,bsdfs:n3,iridescence_fragment:i3,bumpmap_pars_fragment:r3,clipping_planes_fragment:s3,clipping_planes_pars_fragment:o3,clipping_planes_pars_vertex:a3,clipping_planes_vertex:l3,color_fragment:u3,color_pars_fragment:c3,color_pars_vertex:f3,color_vertex:d3,common:h3,cube_uv_reflection_fragment:p3,defaultnormal_vertex:m3,displacementmap_pars_vertex:g3,displacementmap_vertex:v3,emissivemap_fragment:_3,emissivemap_pars_fragment:y3,colorspace_fragment:x3,colorspace_pars_fragment:S3,envmap_fragment:M3,envmap_common_pars_fragment:E3,envmap_pars_fragment:T3,envmap_pars_vertex:w3,envmap_physical_pars_fragment:F3,envmap_vertex:A3,fog_vertex:C3,fog_pars_vertex:b3,fog_fragment:R3,fog_pars_fragment:P3,gradientmap_pars_fragment:D3,lightmap_pars_fragment:L3,lights_lambert_fragment:I3,lights_lambert_pars_fragment:N3,lights_pars_begin:U3,lights_toon_fragment:O3,lights_toon_pars_fragment:k3,lights_phong_fragment:B3,lights_phong_pars_fragment:V3,lights_physical_fragment:z3,lights_physical_pars_fragment:H3,lights_fragment_begin:G3,lights_fragment_maps:W3,lights_fragment_end:j3,logdepthbuf_fragment:X3,logdepthbuf_pars_fragment:q3,logdepthbuf_pars_vertex:Y3,logdepthbuf_vertex:$3,map_fragment:K3,map_pars_fragment:Z3,map_particle_fragment:Q3,map_particle_pars_fragment:J3,metalnessmap_fragment:eD,metalnessmap_pars_fragment:tD,morphinstance_vertex:nD,morphcolor_vertex:iD,morphnormal_vertex:rD,morphtarget_pars_vertex:sD,morphtarget_vertex:oD,normal_fragment_begin:aD,normal_fragment_maps:lD,normal_pars_fragment:uD,normal_pars_vertex:cD,normal_vertex:fD,normalmap_pars_fragment:dD,clearcoat_normal_fragment_begin:hD,clearcoat_normal_fragment_maps:pD,clearcoat_pars_fragment:mD,iridescence_pars_fragment:gD,opaque_fragment:vD,packing:_D,premultiplied_alpha_fragment:yD,project_vertex:xD,dithering_fragment:SD,dithering_pars_fragment:MD,roughnessmap_fragment:ED,roughnessmap_pars_fragment:TD,shadowmap_pars_fragment:wD,shadowmap_pars_vertex:AD,shadowmap_vertex:CD,shadowmask_pars_fragment:bD,skinbase_vertex:RD,skinning_pars_vertex:PD,skinning_vertex:DD,skinnormal_vertex:LD,specularmap_fragment:ID,specularmap_pars_fragment:ND,tonemapping_fragment:UD,tonemapping_pars_fragment:FD,transmission_fragment:OD,transmission_pars_fragment:kD,uv_pars_fragment:BD,uv_pars_vertex:VD,uv_vertex:zD,worldpos_vertex:HD,background_vert:GD,background_frag:WD,backgroundCube_vert:jD,backgroundCube_frag:XD,cube_vert:qD,cube_frag:YD,depth_vert:$D,depth_frag:KD,distance_vert:ZD,distance_frag:QD,equirect_vert:JD,equirect_frag:eL,linedashed_vert:tL,linedashed_frag:nL,meshbasic_vert:iL,meshbasic_frag:rL,meshlambert_vert:sL,meshlambert_frag:oL,meshmatcap_vert:aL,meshmatcap_frag:lL,meshnormal_vert:uL,meshnormal_frag:cL,meshphong_vert:fL,meshphong_frag:dL,meshphysical_vert:hL,meshphysical_frag:pL,meshtoon_vert:mL,meshtoon_frag:gL,points_vert:vL,points_frag:_L,shadow_vert:yL,shadow_frag:xL,sprite_vert:SL,sprite_frag:ML},me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},yi={basic:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:cn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:cn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:cn([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:cn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:cn([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:cn([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:cn([me.common,me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:cn([me.lights,me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};yi.physical={uniforms:cn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Yl={r:0,b:0,g:0},jr=new Di,EL=new bt;function TL(t,e,n,i,r,s,o){const a=new Xe(0);let u=s===!0?0:1,c,f,d=null,h=0,g=null;function x(m){let E=m.isScene===!0?m.background:null;return E&&E.isTexture&&(E=(m.backgroundBlurriness>0?n:e).get(E)),E}function M(m){let E=!1;const w=x(m);w===null?l(a,u):w&&w.isColor&&(l(w,1),E=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,E){const w=x(E);w&&(w.isCubeTexture||w.mapping===Tc)?(f===void 0&&(f=new Rt(new Lo(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:To(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),jr.copy(E.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),f.material.uniforms.envMap.value=w,f.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(EL.makeRotationFromEuler(jr)),f.material.toneMapped=Ye.getTransfer(w.colorSpace)!==st,(d!==w||h!==w.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,d=w,h=w.version,g=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Rt(new Ac(2,2),new Li({name:"BackgroundMaterial",uniforms:To(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function l(m,E){m.getRGB(Yl,o1(t)),i.buffers.color.setClear(Yl.r,Yl.g,Yl.b,E,o)}function p(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,E=1){a.set(m),u=E,l(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(m){u=m,l(a,u)},render:M,addToRenderList:y,dispose:p}}function wL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,T,I,L,U){let k=!1;const H=d(L,I,T);s!==H&&(s=H,c(s.object)),k=g(S,L,I,U),k&&x(S,L,I,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,E(S,T,I,L),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function u(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function d(S,T,I){const L=I.wireframe===!0;let U=i[S.id];U===void 0&&(U={},i[S.id]=U);let k=U[T.id];k===void 0&&(k={},U[T.id]=k);let H=k[L];return H===void 0&&(H=h(u()),k[L]=H),H}function h(S){const T=[],I=[],L=[];for(let U=0;U<n;U++)T[U]=0,I[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:L,object:S,attributes:{},index:null}}function g(S,T,I,L){const U=s.attributes,k=T.attributes;let H=0;const B=I.getAttributes();for(const P in B)if(B[P].location>=0){const V=U[P];let q=k[P];if(q===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),V===void 0||V.attribute!==q||q&&V.data!==q.data)return!0;H++}return s.attributesNum!==H||s.index!==L}function x(S,T,I,L){const U={},k=T.attributes;let H=0;const B=I.getAttributes();for(const P in B)if(B[P].location>=0){let V=k[P];V===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(V=S.instanceColor));const q={};q.attribute=V,V&&V.data&&(q.data=V.data),U[P]=q,H++}s.attributes=U,s.attributesNum=H,s.index=L}function M(){const S=s.newAttributes;for(let T=0,I=S.length;T<I;T++)S[T]=0}function y(S){l(S,0)}function l(S,T){const I=s.newAttributes,L=s.enabledAttributes,U=s.attributeDivisors;I[S]=1,L[S]===0&&(t.enableVertexAttribArray(S),L[S]=1),U[S]!==T&&(t.vertexAttribDivisor(S,T),U[S]=T)}function p(){const S=s.newAttributes,T=s.enabledAttributes;for(let I=0,L=T.length;I<L;I++)T[I]!==S[I]&&(t.disableVertexAttribArray(I),T[I]=0)}function m(S,T,I,L,U,k,H){H===!0?t.vertexAttribIPointer(S,T,I,U,k):t.vertexAttribPointer(S,T,I,L,U,k)}function E(S,T,I,L){M();const U=L.attributes,k=I.getAttributes(),H=T.defaultAttributeValues;for(const B in k){const P=k[B];if(P.location>=0){let O=U[B];if(O===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(O=S.instanceColor)),O!==void 0){const V=O.normalized,q=O.itemSize,te=e.get(O);if(te===void 0)continue;const re=te.buffer,ue=te.type,xe=te.bytesPerElement,K=ue===t.INT||ue===t.UNSIGNED_INT||O.gpuType===Vm;if(O.isInterleavedBufferAttribute){const J=O.data,ge=J.stride,Ne=O.offset;if(J.isInstancedInterleavedBuffer){for(let Ae=0;Ae<P.locationSize;Ae++)l(P.location+Ae,J.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ae=0;Ae<P.locationSize;Ae++)y(P.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Ae=0;Ae<P.locationSize;Ae++)m(P.location+Ae,q/P.locationSize,ue,V,ge*xe,(Ne+q/P.locationSize*Ae)*xe,K)}else{if(O.isInstancedBufferAttribute){for(let J=0;J<P.locationSize;J++)l(P.location+J,O.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let J=0;J<P.locationSize;J++)y(P.location+J);t.bindBuffer(t.ARRAY_BUFFER,re);for(let J=0;J<P.locationSize;J++)m(P.location+J,q/P.locationSize,ue,V,q*xe,q/P.locationSize*J*xe,K)}}else if(H!==void 0){const V=H[B];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(P.location,V);break;case 3:t.vertexAttrib3fv(P.location,V);break;case 4:t.vertexAttrib4fv(P.location,V);break;default:t.vertexAttrib1fv(P.location,V)}}}}p()}function w(){v();for(const S in i){const T=i[S];for(const I in T){const L=T[I];for(const U in L)f(L[U].object),delete L[U];delete T[I]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const T=i[S.id];for(const I in T){const L=T[I];for(const U in L)f(L[U].object),delete L[U];delete T[I]}delete i[S.id]}function b(S){for(const T in i){const I=i[T];if(I[S.id]===void 0)continue;const L=I[S.id];for(const U in L)f(L[U].object),delete L[U];delete I[S.id]}}function v(){_(),o=!0,s!==r&&(s=r,c(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:v,resetDefaultState:_,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:y,disableUnusedAttributes:p}}function AL(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x];n.update(g,i,1)}function u(c,f,d,h){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)o(c[x],f[x],h[x]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let x=0;for(let M=0;M<d;M++)x+=f[M]*h[M];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function CL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ui&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const v=b===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Nn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Si&&!v)}function u(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=u(c);f!==c&&(ke("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),l=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),m=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:y,maxAttributes:l,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:E,maxSamples:w,samples:C}}function bL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Kr,a=new Be,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,g){const x=d.clippingPlanes,M=d.clipIntersection,y=d.clipShadows,l=t.get(d);if(!r||x===null||x.length===0||s&&!y)s?f(null):c();else{const p=s?0:i,m=p*4;let E=l.clippingState||null;u.value=E,E=f(x,h,m,g);for(let w=0;w!==m;++w)E[w]=n[w];l.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=p}};function c(){u.value!==n&&(u.value=n,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,g,x){const M=d!==null?d.length:0;let y=null;if(M!==0){if(y=u.value,x!==!0||y===null){const l=g+M*4,p=h.matrixWorldInverse;a.getNormalMatrix(p),(y===null||y.length<l)&&(y=new Float32Array(l));for(let m=0,E=g;m!==M;++m,E+=4)o.copy(d[m]).applyMatrix4(p,a),o.normal.toArray(y,E),y[E+3]=o.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function RL(t){let e=new WeakMap;function n(o,a){return a===Ah?o.mapping=ms:a===Ch&&(o.mapping=So),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ah||a===Ch)if(e.has(o)){const u=e.get(o).texture;return n(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new u1(u.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const yr=4,f_=[.125,.215,.35,.446,.526,.582],Jr=20,PL=256,$o=new Jm,d_=new Xe;let $f=null,Kf=0,Zf=0,Qf=!1;const DL=new Y;class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=DL}=s;$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,i,r,u,a),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Kf,Zf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:er,format:ui,colorSpace:Eo,depthBuffer:!1},r=p_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LL(s)),this._blurMaterial=NL(s,e,n),this._ggxMaterial=IL(s,e,n)}return r}_compileMaterial(e){const n=new Rt(new Vn,e);this._renderer.compile(n,$o)}_sceneToCubeUV(e,n,i,r,s){const u=new Xn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,g=d.toneMapping;d.getClearColor(d_),d.toneMapping=Ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new Lo,new Js({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let l=!1;const p=e.background;p?p.isColor&&(y.color.copy(p),e.background=null,l=!0):(y.color.copy(d_),l=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(u.up.set(0,c[m],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+f[m],s.y,s.z)):E===1?(u.up.set(0,0,c[m]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+f[m],s.z)):(u.up.set(0,c[m],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+f[m]));const w=this._cubeSize;Ns(r,E*w,m>2?w:0,w,w),d.setRenderTarget(r),l&&d.render(M,u),d.render(e,u)}d.toneMapping=g,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===So;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;Ns(n,0,0,3*u,2*u),i.setRenderTarget(n),i.render(o,$o)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const u=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),h=0+c*1.25,g=d*h,{_lodMax:x}=this,M=this._sizeLods[i],y=3*M*(i>x-yr?i-x+yr:0),l=4*(this._cubeSize-M);u.envMap.value=e.texture,u.roughness.value=g,u.mipInt.value=x-n,Ns(s,y,l,3*M,2*M),r.setRenderTarget(s),r.render(a,$o),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=x-i,Ns(e,y,l,3*M,2*M),r.setRenderTarget(e),r.render(a,$o)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Jr-1),M=s/x,y=isFinite(s)?1+Math.floor(f*M):Jr;y>Jr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Jr}`);const l=[];let p=0;for(let b=0;b<Jr;++b){const v=b/M,_=Math.exp(-v*v/2);l.push(_),b===0?p+=_:b<y&&(p+=2*_)}for(let b=0;b<l.length;b++)l[b]=l[b]/p;h.envMap.value=e.texture,h.samples.value=y,h.weights.value=l,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=x,h.mipInt.value=m-i;const E=this._sizeLods[r],w=3*E*(r>m-yr?r-m+yr:0),C=4*(this._cubeSize-E);Ns(n,w,C,3*E,2*E),u.setRenderTarget(n),u.render(d,$o)}}function LL(t){const e=[],n=[],i=[];let r=t;const s=t-yr+1+f_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let u=1/a;o>t-yr?u=f_[o-t+yr-1]:o===0&&(u=0),n.push(u);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,x=6,M=3,y=2,l=1,p=new Float32Array(M*x*g),m=new Float32Array(y*x*g),E=new Float32Array(l*x*g);for(let C=0;C<g;C++){const b=C%3*2/3-1,v=C>2?0:-1,_=[b,v,0,b+2/3,v,0,b+2/3,v+1,0,b,v,0,b+2/3,v+1,0,b,v+1,0];p.set(_,M*x*C),m.set(h,y*x*C);const S=[C,C,C,C,C,C];E.set(S,l*x*C)}const w=new Vn;w.setAttribute("position",new bi(p,M)),w.setAttribute("uv",new bi(m,y)),w.setAttribute("faceIndex",new bi(E,l)),i.push(new Rt(w,null)),r>yr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function p_(t,e,n){const i=new Ci(t,e,n);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function IL(t,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function NL(t,e,n){const i=new Float32Array(Jr),r=new Y(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function m_(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function g_(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const u=a.mapping,c=u===Ah||u===Ch,f=u===ms||u===So;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new h_(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const g=a.image;return c&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new h_(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let u=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&u++;return u===c}function s(a){const u=a.target;u.removeEventListener("dispose",s);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function FL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ha("WebGLRenderer: "+i+" extension not supported."),r}}}function OL(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function u(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER)}function c(d){const h=[],g=d.index,x=d.attributes.position;let M=0;if(g!==null){const p=g.array;M=g.version;for(let m=0,E=p.length;m<E;m+=3){const w=p[m+0],C=p[m+1],b=p[m+2];h.push(w,C,C,b,b,w)}}else if(x!==void 0){const p=x.array;M=x.version;for(let m=0,E=p.length/3-1;m<E;m+=3){const w=m+0,C=m+1,b=m+2;h.push(w,C,C,b,b,w)}}else return;const y=new(e1(h)?s1:r1)(h,1);y.version=M;const l=s.get(d);l&&e.remove(l),s.set(d,y)}function f(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:u,getWireframeAttribute:f}}function kL(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function u(h,g){t.drawElements(i,g,s,h*o),n.update(g,i,1)}function c(h,g,x){x!==0&&(t.drawElementsInstanced(i,g,s,h*o,x),n.update(g,i,x))}function f(h,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,x);let y=0;for(let l=0;l<x;l++)y+=g[l];n.update(y,i,1)}function d(h,g,x,M){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let l=0;l<h.length;l++)c(h[l]/o,g[l],M[l]);else{y.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,M,0,x);let l=0;for(let p=0;p<x;p++)l+=g[p]*M[p];n.update(l,i,1)}}this.setMode=r,this.setIndex=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function BL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function VL(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,u){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var g=S;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,l=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let E=0;x===!0&&(E=1),M===!0&&(E=2),y===!0&&(E=3);let w=a.attributes.position.count*E,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*C*4*d),v=new t1(b,w,C,d);v.type=Si,v.needsUpdate=!0;const _=E*4;for(let T=0;T<d;T++){const I=l[T],L=p[T],U=m[T],k=w*C*4*T;for(let H=0;H<I.count;H++){const B=H*_;x===!0&&(r.fromBufferAttribute(I,H),b[k+B+0]=r.x,b[k+B+1]=r.y,b[k+B+2]=r.z,b[k+B+3]=0),M===!0&&(r.fromBufferAttribute(L,H),b[k+B+4]=r.x,b[k+B+5]=r.y,b[k+B+6]=r.z,b[k+B+7]=0),y===!0&&(r.fromBufferAttribute(U,H),b[k+B+8]=r.x,b[k+B+9]=r.y,b[k+B+10]=r.z,b[k+B+11]=U.itemSize===4?r.w:1)}}h={count:d,texture:v,size:new Ke(w,C)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let y=0;y<c.length;y++)x+=c[y];const M=a.morphTargetsRelative?1:1-x;u.getUniforms().setValue(t,"morphTargetBaseInfluence",M),u.getUniforms().setValue(t,"morphTargetInfluences",c)}u.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function zL(t,e,n,i){let r=new WeakMap;function s(u){const c=i.render.frame,f=u.geometry,d=e.get(u,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const HL={[kM]:"LINEAR_TONE_MAPPING",[BM]:"REINHARD_TONE_MAPPING",[VM]:"CINEON_TONE_MAPPING",[zM]:"ACES_FILMIC_TONE_MAPPING",[GM]:"AGX_TONE_MAPPING",[WM]:"NEUTRAL_TONE_MAPPING",[HM]:"CUSTOM_TONE_MAPPING"};function GL(t,e,n,i,r){const s=new Ci(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new Ci(e,n,{type:er,depthBuffer:!1,stencilBuffer:!1}),a=new Vn;a.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Dt([0,2,0,0,2,0],2));const u=new NP({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Rt(a,u),f=new Jm(-1,1,1,-1,0,1);let d=null,h=null,g=!1,x,M=null,y=[],l=!1;this.setSize=function(p,m){s.setSize(p,m),o.setSize(p,m);for(let E=0;E<y.length;E++){const w=y[E];w.setSize&&w.setSize(p,m)}},this.setEffects=function(p){y=p,l=y.length>0&&y[0].isRenderPass===!0;const m=s.width,E=s.height;for(let w=0;w<y.length;w++){const C=y[w];C.setSize&&C.setSize(m,E)}},this.begin=function(p,m){if(g||p.toneMapping===Ai&&y.length===0)return!1;if(M=m,m!==null){const E=m.width,w=m.height;(s.width!==E||s.height!==w)&&this.setSize(E,w)}return l===!1&&p.setRenderTarget(s),x=p.toneMapping,p.toneMapping=Ai,!0},this.hasRenderPass=function(){return l},this.end=function(p,m){p.toneMapping=x,g=!0;let E=s,w=o;for(let C=0;C<y.length;C++){const b=y[C];if(b.enabled!==!1&&(b.render(p,w,E,m),b.needsSwap!==!1)){const v=E;E=w,w=v}}if(d!==p.outputColorSpace||h!==p.toneMapping){d=p.outputColorSpace,h=p.toneMapping,u.defines={},Ye.getTransfer(d)===st&&(u.defines.SRGB_TRANSFER="");const C=HL[h];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,p.setRenderTarget(M),p.render(c,f),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),u.dispose()}}const h1=new gn,up=new Ga(1,1),p1=new t1,m1=new uP,g1=new l1,v_=[],__=[],y_=new Float32Array(16),x_=new Float32Array(9),S_=new Float32Array(4);function Io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=v_[r];if(s===void 0&&(s=new Float32Array(r),v_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bc(t,e){let n=__[e];n===void 0&&(n=new Int32Array(e),__[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function WL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function jL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function XL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function qL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function YL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;S_.set(i),t.uniformMatrix2fv(this.addr,!1,S_),Ht(n,i)}}function $L(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;x_.set(i),t.uniformMatrix3fv(this.addr,!1,x_),Ht(n,i)}}function KL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;y_.set(i),t.uniformMatrix4fv(this.addr,!1,y_),Ht(n,i)}}function ZL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function QL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function JL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function eI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function tI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function iI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function rI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function sI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(up.compareFunction=n.isReversedDepthBuffer()?qm:Xm,s=up):s=h1,n.setTexture2D(e||s,r)}function oI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m1,r)}function aI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g1,r)}function lI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p1,r)}function uI(t){switch(t){case 5126:return WL;case 35664:return jL;case 35665:return XL;case 35666:return qL;case 35674:return YL;case 35675:return $L;case 35676:return KL;case 5124:case 35670:return ZL;case 35667:case 35671:return QL;case 35668:case 35672:return JL;case 35669:case 35673:return eI;case 5125:return tI;case 36294:return nI;case 36295:return iI;case 36296:return rI;case 35678:case 36198:case 36298:case 36306:case 35682:return sI;case 35679:case 36299:case 36307:return oI;case 35680:case 36300:case 36308:case 36293:return aI;case 36289:case 36303:case 36311:case 36292:return lI}}function cI(t,e){t.uniform1fv(this.addr,e)}function fI(t,e){const n=Io(e,this.size,2);t.uniform2fv(this.addr,n)}function dI(t,e){const n=Io(e,this.size,3);t.uniform3fv(this.addr,n)}function hI(t,e){const n=Io(e,this.size,4);t.uniform4fv(this.addr,n)}function pI(t,e){const n=Io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mI(t,e){const n=Io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gI(t,e){const n=Io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function vI(t,e){t.uniform1iv(this.addr,e)}function _I(t,e){t.uniform2iv(this.addr,e)}function yI(t,e){t.uniform3iv(this.addr,e)}function xI(t,e){t.uniform4iv(this.addr,e)}function SI(t,e){t.uniform1uiv(this.addr,e)}function MI(t,e){t.uniform2uiv(this.addr,e)}function EI(t,e){t.uniform3uiv(this.addr,e)}function TI(t,e){t.uniform4uiv(this.addr,e)}function wI(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=up:o=h1;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function AI(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||m1,s[o])}function CI(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||g1,s[o])}function bI(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||p1,s[o])}function RI(t){switch(t){case 5126:return cI;case 35664:return fI;case 35665:return dI;case 35666:return hI;case 35674:return pI;case 35675:return mI;case 35676:return gI;case 5124:case 35670:return vI;case 35667:case 35671:return _I;case 35668:case 35672:return yI;case 35669:case 35673:return xI;case 5125:return SI;case 36294:return MI;case 36295:return EI;case 36296:return TI;case 35678:case 36198:case 36298:case 36306:case 35682:return wI;case 35679:case 36299:case 36307:return AI;case 35680:case 36300:case 36308:case 36293:return CI;case 36289:case 36303:case 36311:case 36292:return bI}}class PI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uI(n.type)}}class DI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RI(n.type)}}class LI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Jf=/(\w+)(\])?(\[|\.)?/g;function M_(t,e){t.seq.push(e),t.map[e.id]=e}function II(t,e,n){const i=t.name,r=i.length;for(Jf.lastIndex=0;;){const s=Jf.exec(i),o=Jf.lastIndex;let a=s[1];const u=s[2]==="]",c=s[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===r){M_(n,c===void 0?new PI(a,t,e):new DI(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new LI(a),M_(n,d)),n=d}}}class Su{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),u=e.getUniformLocation(n,a.name);II(a,u,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],u=i[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function E_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const NI=37297;let UI=0;function FI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const T_=new Be;function OI(t){Ye._getMatrix(T_,Ye.workingColorSpace,t);const e=`mat3( ${T_.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case ec:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function w_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+FI(t.getShaderSource(e),a)}else return s}function kI(t,e){const n=OI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const BI={[kM]:"Linear",[BM]:"Reinhard",[VM]:"Cineon",[zM]:"ACESFilmic",[GM]:"AgX",[WM]:"Neutral",[HM]:"Custom"};function VI(t,e){const n=BI[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $l=new Y;function zI(){Ye.getLuminanceCoefficients($l);const t=$l.x.toFixed(4),e=$l.y.toFixed(4),n=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function GI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ia(t){return t!==""}function A_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jI=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(t){return t.replace(jI,qI)}const XI=new Map;function qI(t,e){let n=Ve[e];if(n===void 0){const i=XI.get(e);if(i!==void 0)n=Ve[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cp(n)}const YI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b_(t){return t.replace(YI,$I)}function $I(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function R_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const KI={[gu]:"SHADOWMAP_TYPE_PCF",[na]:"SHADOWMAP_TYPE_VSM"};function ZI(t){return KI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QI={[ms]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[Tc]:"ENVMAP_TYPE_CUBE_UV"};function JI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":QI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const eN={[So]:"ENVMAP_MODE_REFRACTION"};function tN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":eN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nN={[Bm]:"ENVMAP_BLENDING_MULTIPLY",[WR]:"ENVMAP_BLENDING_MIX",[jR]:"ENVMAP_BLENDING_ADD"};function iN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":nN[t.combine]||"ENVMAP_BLENDING_NONE"}function rN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const u=ZI(n),c=JI(n),f=tN(n),d=iN(n),h=rN(n),g=HI(n),x=GI(s),M=r.createProgram();let y,l,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ia).join(`
`),y.length>0&&(y+=`
`),l=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ia).join(`
`),l.length>0&&(l+=`
`)):(y=[R_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),l=[R_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ai?"#define TONE_MAPPING":"",n.toneMapping!==Ai?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Ai?VI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,kI("linearToOutputTexel",n.outputColorSpace),zI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),o=cp(o),o=A_(o,n),o=C_(o,n),a=cp(a),a=A_(a,n),a=C_(a,n),o=b_(o),a=b_(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,l=["#define varying in",n.glslVersion===Gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const m=p+y+o,E=p+l+a,w=E_(r,r.VERTEX_SHADER,m),C=E_(r,r.FRAGMENT_SHADER,E);r.attachShader(M,w),r.attachShader(M,C),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(T){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(M)||"",L=r.getShaderInfoLog(w)||"",U=r.getShaderInfoLog(C)||"",k=I.trim(),H=L.trim(),B=U.trim();let P=!0,O=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(P=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,w,C);else{const V=w_(r,w,"vertex"),q=w_(r,C,"fragment");Je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+V+`
`+q)}else k!==""?ke("WebGLProgram: Program Info Log:",k):(H===""||B==="")&&(O=!1);O&&(T.diagnostics={runnable:P,programLog:k,vertexShader:{log:H,prefix:y},fragmentShader:{log:B,prefix:l}})}r.deleteShader(w),r.deleteShader(C),v=new Su(r,M),_=WI(r,M)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,NI)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UI++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=C,this}let oN=0;class aN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lN(e),n.set(e,i)),i}}class lN{constructor(e){this.id=oN++,this.code=e,this.usedTimes=0}}function uN(t,e,n,i,r,s,o){const a=new n1,u=new aN,c=new Set,f=[],d=new Map,h=r.logarithmicDepthBuffer;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,S,T,I,L){const U=I.fog,k=L.geometry,H=_.isMeshStandardMaterial?I.environment:null,B=(_.isMeshStandardMaterial?n:e).get(_.envMap||H),P=B&&B.mapping===Tc?B.image.height:null,O=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const V=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,q=V!==void 0?V.length:0;let te=0;k.morphAttributes.position!==void 0&&(te=1),k.morphAttributes.normal!==void 0&&(te=2),k.morphAttributes.color!==void 0&&(te=3);let re,ue,xe,K;if(O){const it=yi[O];re=it.vertexShader,ue=it.fragmentShader}else re=_.vertexShader,ue=_.fragmentShader,u.update(_),xe=u.getVertexShaderID(_),K=u.getFragmentShaderID(_);const J=t.getRenderTarget(),ge=t.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,Ae=L.isBatchedMesh===!0,Ze=!!_.map,Gt=!!_.matcap,qe=!!B,nt=!!_.aoMap,lt=!!_.lightMap,ze=!!_.bumpMap,Lt=!!_.normalMap,z=!!_.displacementMap,It=!!_.emissiveMap,tt=!!_.metalnessMap,ct=!!_.roughnessMap,be=_.anisotropy>0,D=_.clearcoat>0,A=_.dispersion>0,W=_.iridescence>0,ee=_.sheen>0,ie=_.transmission>0,Q=be&&!!_.anisotropyMap,Pe=D&&!!_.clearcoatMap,fe=D&&!!_.clearcoatNormalMap,Ce=D&&!!_.clearcoatRoughnessMap,Fe=W&&!!_.iridescenceMap,ae=W&&!!_.iridescenceThicknessMap,he=ee&&!!_.sheenColorMap,we=ee&&!!_.sheenRoughnessMap,Re=!!_.specularMap,de=!!_.specularColorMap,He=!!_.specularIntensityMap,G=ie&&!!_.transmissionMap,_e=ie&&!!_.thicknessMap,le=!!_.gradientMap,ye=!!_.alphaMap,se=_.alphaTest>0,ne=!!_.alphaHash,ce=!!_.extensions;let Oe=Ai;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Oe=t.toneMapping);const ft={shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:re,fragmentShader:ue,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ae,batchingColor:Ae&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Eo,alphaToCoverage:!!_.alphaToCoverage,map:Ze,matcap:Gt,envMap:qe,envMapMode:qe&&B.mapping,envMapCubeUVHeight:P,aoMap:nt,lightMap:lt,bumpMap:ze,normalMap:Lt,displacementMap:z,emissiveMap:It,normalMapObjectSpace:Lt&&_.normalMapType===YR,normalMapTangentSpace:Lt&&_.normalMapType===JM,metalnessMap:tt,roughnessMap:ct,anisotropy:be,anisotropyMap:Q,clearcoat:D,clearcoatMap:Pe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ce,dispersion:A,iridescence:W,iridescenceMap:Fe,iridescenceThicknessMap:ae,sheen:ee,sheenColorMap:he,sheenRoughnessMap:we,specularMap:Re,specularColorMap:de,specularIntensityMap:He,transmission:ie,transmissionMap:G,thicknessMap:_e,gradientMap:le,opaque:_.transparent===!1&&_.blending===lo&&_.alphaToCoverage===!1,alphaMap:ye,alphaTest:se,alphaHash:ne,combine:_.combine,mapUv:Ze&&M(_.map.channel),aoMapUv:nt&&M(_.aoMap.channel),lightMapUv:lt&&M(_.lightMap.channel),bumpMapUv:ze&&M(_.bumpMap.channel),normalMapUv:Lt&&M(_.normalMap.channel),displacementMapUv:z&&M(_.displacementMap.channel),emissiveMapUv:It&&M(_.emissiveMap.channel),metalnessMapUv:tt&&M(_.metalnessMap.channel),roughnessMapUv:ct&&M(_.roughnessMap.channel),anisotropyMapUv:Q&&M(_.anisotropyMap.channel),clearcoatMapUv:Pe&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&M(_.sheenRoughnessMap.channel),specularMapUv:Re&&M(_.specularMap.channel),specularColorMapUv:de&&M(_.specularColorMap.channel),specularIntensityMapUv:He&&M(_.specularIntensityMap.channel),transmissionMapUv:G&&M(_.transmissionMap.channel),thicknessMapUv:_e&&M(_.thicknessMap.channel),alphaMapUv:ye&&M(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Lt||be),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Ze||ye),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ze&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:It&&_.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hi,flipSided:_.side===Cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function l(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)S.push(T),S.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(p(S,_),m(S,_),S.push(t.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),_.push(a.mask)}function E(_){const S=x[_.type];let T;if(S){const I=yi[S];T=EP.clone(I.uniforms)}else T=_.uniforms;return T}function w(_,S){let T=d.get(S);return T!==void 0?++T.usedTimes:(T=new sN(t,S,_,s),f.push(T),d.set(S,T)),T}function C(_){if(--_.usedTimes===0){const S=f.indexOf(_);f[S]=f[f.length-1],f.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){u.remove(_)}function v(){u.dispose()}return{getParameters:y,getProgramCacheKey:l,getUniforms:E,acquireProgram:w,releaseProgram:C,releaseShaderCache:b,programs:f,dispose:v}}function cN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,u){t.get(o)[a]=u}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function P_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function D_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,g,x,M,y){let l=t[e];return l===void 0?(l={id:d.id,object:d,geometry:h,material:g,groupOrder:x,renderOrder:d.renderOrder,z:M,group:y},t[e]=l):(l.id=d.id,l.object=d,l.geometry=h,l.material=g,l.groupOrder=x,l.renderOrder=d.renderOrder,l.z=M,l.group=y),e++,l}function a(d,h,g,x,M,y){const l=o(d,h,g,x,M,y);g.transmission>0?i.push(l):g.transparent===!0?r.push(l):n.push(l)}function u(d,h,g,x,M,y){const l=o(d,h,g,x,M,y);g.transmission>0?i.unshift(l):g.transparent===!0?r.unshift(l):n.unshift(l)}function c(d,h){n.length>1&&n.sort(d||fN),i.length>1&&i.sort(h||P_),r.length>1&&r.sort(h||P_)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:u,finish:f,sort:c}}function dN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new D_,t.set(i,[o])):r>=s.length?(o=new D_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Xe};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function pN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mN=0;function gN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vN(t){const e=new hN,n=pN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new bt,o=new bt;function a(c){let f=0,d=0,h=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let g=0,x=0,M=0,y=0,l=0,p=0,m=0,E=0,w=0,C=0,b=0;c.sort(gN);for(let _=0,S=c.length;_<S;_++){const T=c[_],I=T.color,L=T.intensity,U=T.distance;let k=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Mo?k=T.shadow.map.texture:k=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)f+=I.r*L,d+=I.g*L,h+=I.b*L;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],L);b++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const B=T.shadow,P=n.get(T);P.shadowIntensity=B.intensity,P.shadowBias=B.bias,P.shadowNormalBias=B.normalBias,P.shadowRadius=B.radius,P.shadowMapSize=B.mapSize,i.directionalShadow[g]=P,i.directionalShadowMap[g]=k,i.directionalShadowMatrix[g]=T.shadow.matrix,p++}i.directional[g]=H,g++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(I).multiplyScalar(L),H.distance=U,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[M]=H;const B=T.shadow;if(T.map&&(i.spotLightMap[w]=T.map,w++,B.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[M]=B.matrix,T.castShadow){const P=n.get(T);P.shadowIntensity=B.intensity,P.shadowBias=B.bias,P.shadowNormalBias=B.normalBias,P.shadowRadius=B.radius,P.shadowMapSize=B.mapSize,i.spotShadow[M]=P,i.spotShadowMap[M]=k,E++}M++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(I).multiplyScalar(L),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[y]=H,y++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const B=T.shadow,P=n.get(T);P.shadowIntensity=B.intensity,P.shadowBias=B.bias,P.shadowNormalBias=B.normalBias,P.shadowRadius=B.radius,P.shadowMapSize=B.mapSize,P.shadowCameraNear=B.camera.near,P.shadowCameraFar=B.camera.far,i.pointShadow[x]=P,i.pointShadowMap[x]=k,i.pointShadowMatrix[x]=T.shadow.matrix,m++}i.point[x]=H,x++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(L),H.groundColor.copy(T.groundColor).multiplyScalar(L),i.hemi[l]=H,l++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==g||v.pointLength!==x||v.spotLength!==M||v.rectAreaLength!==y||v.hemiLength!==l||v.numDirectionalShadows!==p||v.numPointShadows!==m||v.numSpotShadows!==E||v.numSpotMaps!==w||v.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=M,i.rectArea.length=y,i.point.length=x,i.hemi.length=l,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=E+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,v.directionalLength=g,v.pointLength=x,v.spotLength=M,v.rectAreaLength=y,v.hemiLength=l,v.numDirectionalShadows=p,v.numPointShadows=m,v.numSpotShadows=E,v.numSpotMaps=w,v.numLightProbes=b,i.version=mN++)}function u(c,f){let d=0,h=0,g=0,x=0,M=0;const y=f.matrixWorldInverse;for(let l=0,p=c.length;l<p;l++){const m=c[l];if(m.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(y),d++}else if(m.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(y),E.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(y),g++}else if(m.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(y),o.identity(),s.copy(m.matrixWorld),s.premultiply(y),o.extractRotation(s),E.halfWidth.set(m.width*.5,0,0),E.halfHeight.set(0,m.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(m.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(y),h++}else if(m.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(m.matrixWorld),E.direction.transformDirection(y),M++}}}return{setup:a,setupView:u,state:i}}function L_(t){const e=new vN(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function u(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:u,pushLight:s,pushShadow:o}}function _N(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new L_(t),e.set(r,[a])):s>=o.length?(a=new L_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const yN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SN=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],MN=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],I_=new bt,Ko=new Y,ed=new Y;function EN(t,e,n){let i=new Km;const r=new Ke,s=new Ke,o=new Ct,a=new UP,u=new FP,c={},f=n.maxTextureSize,d={[Lr]:Cn,[Cn]:Lr,[Hi]:Hi},h=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:yN,fragmentShader:xN}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new Vn;x.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Rt(x,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let l=this.type;this.render=function(C,b,v){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;C.type===wR&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=gu);const _=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),I=t.state;I.setBlending(qi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=l!==this.type;L&&b.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=C.length;U<k;U++){const H=C[U],B=H.shadow;if(B===void 0){ke("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const P=B.getFrameExtents();if(r.multiply(P),s.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/P.x),r.x=s.x*P.x,B.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/P.y),r.y=s.y*P.y,B.mapSize.y=s.y)),B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===na){if(H.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ci(r.x,r.y,{format:Mo,type:er,minFilter:on,magFilter:on,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new Ga(r.x,r.y,Si),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=tr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Kt,B.map.depthTexture.magFilter=Kt}else{H.isPointLight?(B.map=new u1(r.x),B.map.depthTexture=new IP(r.x,Pi)):(B.map=new Ci(r.x,r.y),B.map.depthTexture=new Ga(r.x,r.y,Pi)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=tr;const V=t.state.buffers.depth.getReversed();this.type===gu?(B.map.depthTexture.compareFunction=V?qm:Xm,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Kt,B.map.depthTexture.magFilter=Kt)}B.camera.updateProjectionMatrix()}const O=B.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<O;V++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,V),t.clear();else{V===0&&(t.setRenderTarget(B.map),t.clear());const q=B.getViewport(V);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),I.viewport(o)}if(H.isPointLight){const q=B.camera,te=B.matrix,re=H.distance||q.far;re!==q.far&&(q.far=re,q.updateProjectionMatrix()),Ko.setFromMatrixPosition(H.matrixWorld),q.position.copy(Ko),ed.copy(q.position),ed.add(SN[V]),q.up.copy(MN[V]),q.lookAt(ed),q.updateMatrixWorld(),te.makeTranslation(-Ko.x,-Ko.y,-Ko.z),I_.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(I_,q.coordinateSystem,q.reversedDepth)}else B.updateMatrices(H);i=B.getFrustum(),E(b,v,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===na&&p(B,v),B.needsUpdate=!1}l=this.type,y.needsUpdate=!1,t.setRenderTarget(_,S,T)};function p(C,b){const v=e.update(M);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ci(r.x,r.y,{format:Mo,type:er})),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,v,h,M,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,v,g,M,null)}function m(C,b,v,_){let S=null;const T=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)S=T;else if(S=v.isPointLight===!0?u:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=S.uuid,L=b.uuid;let U=c[I];U===void 0&&(U={},c[I]=U);let k=U[L];k===void 0&&(k=S.clone(),U[L]=k,b.addEventListener("dispose",w)),S=k}if(S.visible=b.visible,S.wireframe=b.wireframe,_===na?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,v.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=t.properties.get(S);I.light=v}return S}function E(C,b,v,_,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===na)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);const L=e.update(C),U=C.material;if(Array.isArray(U)){const k=L.groups;for(let H=0,B=k.length;H<B;H++){const P=k[H],O=U[P.materialIndex];if(O&&O.visible){const V=m(C,O,_,S);C.onBeforeShadow(t,C,b,v,L,V,P),t.renderBufferDirect(v,null,L,V,C,P),C.onAfterShadow(t,C,b,v,L,V,P)}}}else if(U.visible){const k=m(C,U,_,S);C.onBeforeShadow(t,C,b,v,L,k,null),t.renderBufferDirect(v,null,L,k,C,null),C.onAfterShadow(t,C,b,v,L,k,null)}}const I=C.children;for(let L=0,U=I.length;L<U;L++)E(I[L],b,v,_,S)}function w(C){C.target.removeEventListener("dispose",w);for(const v in c){const _=c[v],S=C.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const TN={[yh]:xh,[Sh]:Th,[Mh]:wh,[xo]:Eh,[xh]:yh,[Th]:Sh,[wh]:Mh,[Eh]:xo};function wN(t,e){function n(){let G=!1;const _e=new Ct;let le=null;const ye=new Ct(0,0,0,0);return{setMask:function(se){le!==se&&!G&&(t.colorMask(se,se,se,se),le=se)},setLocked:function(se){G=se},setClear:function(se,ne,ce,Oe,ft){ft===!0&&(se*=Oe,ne*=Oe,ce*=Oe),_e.set(se,ne,ce,Oe),ye.equals(_e)===!1&&(t.clearColor(se,ne,ce,Oe),ye.copy(_e))},reset:function(){G=!1,le=null,ye.set(-1,0,0,0)}}}function i(){let G=!1,_e=!1,le=null,ye=null,se=null;return{setReversed:function(ne){if(_e!==ne){const ce=e.get("EXT_clip_control");ne?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),_e=ne;const Oe=se;se=null,this.setClear(Oe)}},getReversed:function(){return _e},setTest:function(ne){ne?J(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(ne){le!==ne&&!G&&(t.depthMask(ne),le=ne)},setFunc:function(ne){if(_e&&(ne=TN[ne]),ye!==ne){switch(ne){case yh:t.depthFunc(t.NEVER);break;case xh:t.depthFunc(t.ALWAYS);break;case Sh:t.depthFunc(t.LESS);break;case xo:t.depthFunc(t.LEQUAL);break;case Mh:t.depthFunc(t.EQUAL);break;case Eh:t.depthFunc(t.GEQUAL);break;case Th:t.depthFunc(t.GREATER);break;case wh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=ne}},setLocked:function(ne){G=ne},setClear:function(ne){se!==ne&&(_e&&(ne=1-ne),t.clearDepth(ne),se=ne)},reset:function(){G=!1,le=null,ye=null,se=null,_e=!1}}}function r(){let G=!1,_e=null,le=null,ye=null,se=null,ne=null,ce=null,Oe=null,ft=null;return{setTest:function(it){G||(it?J(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(it){_e!==it&&!G&&(t.stencilMask(it),_e=it)},setFunc:function(it,pi,Ii){(le!==it||ye!==pi||se!==Ii)&&(t.stencilFunc(it,pi,Ii),le=it,ye=pi,se=Ii)},setOp:function(it,pi,Ii){(ne!==it||ce!==pi||Oe!==Ii)&&(t.stencilOp(it,pi,Ii),ne=it,ce=pi,Oe=Ii)},setLocked:function(it){G=it},setClear:function(it){ft!==it&&(t.clearStencil(it),ft=it)},reset:function(){G=!1,_e=null,le=null,ye=null,se=null,ne=null,ce=null,Oe=null,ft=null}}}const s=new n,o=new i,a=new r,u=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,g=[],x=null,M=!1,y=null,l=null,p=null,m=null,E=null,w=null,C=null,b=new Xe(0,0,0),v=0,_=!1,S=null,T=null,I=null,L=null,U=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(P)[1]),H=B>=1):P.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),H=B>=2);let O=null,V={};const q=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),re=new Ct().fromArray(q),ue=new Ct().fromArray(te);function xe(G,_e,le,ye){const se=new Uint8Array(4),ne=t.createTexture();t.bindTexture(G,ne),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ce=0;ce<le;ce++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(_e+ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return ne}const K={};K[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(t.DEPTH_TEST),o.setFunc(xo),ze(!1),Lt(Ov),J(t.CULL_FACE),nt(qi);function J(G){f[G]!==!0&&(t.enable(G),f[G]=!0)}function ge(G){f[G]!==!1&&(t.disable(G),f[G]=!1)}function Ne(G,_e){return d[G]!==_e?(t.bindFramebuffer(G,_e),d[G]=_e,G===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=_e),G===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ae(G,_e){let le=g,ye=!1;if(G){le=h.get(_e),le===void 0&&(le=[],h.set(_e,le));const se=G.textures;if(le.length!==se.length||le[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,ce=se.length;ne<ce;ne++)le[ne]=t.COLOR_ATTACHMENT0+ne;le.length=se.length,ye=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,ye=!0);ye&&t.drawBuffers(le)}function Ze(G){return x!==G?(t.useProgram(G),x=G,!0):!1}const Gt={[Zr]:t.FUNC_ADD,[CR]:t.FUNC_SUBTRACT,[bR]:t.FUNC_REVERSE_SUBTRACT};Gt[RR]=t.MIN,Gt[PR]=t.MAX;const qe={[DR]:t.ZERO,[LR]:t.ONE,[IR]:t.SRC_COLOR,[vh]:t.SRC_ALPHA,[BR]:t.SRC_ALPHA_SATURATE,[OR]:t.DST_COLOR,[UR]:t.DST_ALPHA,[NR]:t.ONE_MINUS_SRC_COLOR,[_h]:t.ONE_MINUS_SRC_ALPHA,[kR]:t.ONE_MINUS_DST_COLOR,[FR]:t.ONE_MINUS_DST_ALPHA,[VR]:t.CONSTANT_COLOR,[zR]:t.ONE_MINUS_CONSTANT_COLOR,[HR]:t.CONSTANT_ALPHA,[GR]:t.ONE_MINUS_CONSTANT_ALPHA};function nt(G,_e,le,ye,se,ne,ce,Oe,ft,it){if(G===qi){M===!0&&(ge(t.BLEND),M=!1);return}if(M===!1&&(J(t.BLEND),M=!0),G!==AR){if(G!==y||it!==_){if((l!==Zr||E!==Zr)&&(t.blendEquation(t.FUNC_ADD),l=Zr,E=Zr),it)switch(G){case lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kv:t.blendFunc(t.ONE,t.ONE);break;case Bv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",G);break}else switch(G){case lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bv:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vv:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",G);break}p=null,m=null,w=null,C=null,b.set(0,0,0),v=0,y=G,_=it}return}se=se||_e,ne=ne||le,ce=ce||ye,(_e!==l||se!==E)&&(t.blendEquationSeparate(Gt[_e],Gt[se]),l=_e,E=se),(le!==p||ye!==m||ne!==w||ce!==C)&&(t.blendFuncSeparate(qe[le],qe[ye],qe[ne],qe[ce]),p=le,m=ye,w=ne,C=ce),(Oe.equals(b)===!1||ft!==v)&&(t.blendColor(Oe.r,Oe.g,Oe.b,ft),b.copy(Oe),v=ft),y=G,_=!1}function lt(G,_e){G.side===Hi?ge(t.CULL_FACE):J(t.CULL_FACE);let le=G.side===Cn;_e&&(le=!le),ze(le),G.blending===lo&&G.transparent===!1?nt(qi):nt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const ye=G.stencilWrite;a.setTest(ye),ye&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),It(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(G){S!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),S=G)}function Lt(G){G!==ER?(J(t.CULL_FACE),G!==T&&(G===Ov?t.cullFace(t.BACK):G===TR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),T=G}function z(G){G!==I&&(H&&t.lineWidth(G),I=G)}function It(G,_e,le){G?(J(t.POLYGON_OFFSET_FILL),(L!==_e||U!==le)&&(t.polygonOffset(_e,le),L=_e,U=le)):ge(t.POLYGON_OFFSET_FILL)}function tt(G){G?J(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function ct(G){G===void 0&&(G=t.TEXTURE0+k-1),O!==G&&(t.activeTexture(G),O=G)}function be(G,_e,le){le===void 0&&(O===null?le=t.TEXTURE0+k-1:le=O);let ye=V[le];ye===void 0&&(ye={type:void 0,texture:void 0},V[le]=ye),(ye.type!==G||ye.texture!==_e)&&(O!==le&&(t.activeTexture(le),O=le),t.bindTexture(G,_e||K[G]),ye.type=G,ye.texture=_e)}function D(){const G=V[O];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function A(){try{t.compressedTexImage2D(...arguments)}catch(G){Je("WebGLState:",G)}}function W(){try{t.compressedTexImage3D(...arguments)}catch(G){Je("WebGLState:",G)}}function ee(){try{t.texSubImage2D(...arguments)}catch(G){Je("WebGLState:",G)}}function ie(){try{t.texSubImage3D(...arguments)}catch(G){Je("WebGLState:",G)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(G){Je("WebGLState:",G)}}function Pe(){try{t.compressedTexSubImage3D(...arguments)}catch(G){Je("WebGLState:",G)}}function fe(){try{t.texStorage2D(...arguments)}catch(G){Je("WebGLState:",G)}}function Ce(){try{t.texStorage3D(...arguments)}catch(G){Je("WebGLState:",G)}}function Fe(){try{t.texImage2D(...arguments)}catch(G){Je("WebGLState:",G)}}function ae(){try{t.texImage3D(...arguments)}catch(G){Je("WebGLState:",G)}}function he(G){re.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),re.copy(G))}function we(G){ue.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),ue.copy(G))}function Re(G,_e){let le=c.get(_e);le===void 0&&(le=new WeakMap,c.set(_e,le));let ye=le.get(G);ye===void 0&&(ye=t.getUniformBlockIndex(_e,G.name),le.set(G,ye))}function de(G,_e){const ye=c.get(_e).get(G);u.get(_e)!==ye&&(t.uniformBlockBinding(_e,ye,G.__bindingPointIndex),u.set(_e,ye))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},O=null,V={},d={},h=new WeakMap,g=[],x=null,M=!1,y=null,l=null,p=null,m=null,E=null,w=null,C=null,b=new Xe(0,0,0),v=0,_=!1,S=null,T=null,I=null,L=null,U=null,re.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ge,bindFramebuffer:Ne,drawBuffers:Ae,useProgram:Ze,setBlending:nt,setMaterial:lt,setFlipSided:ze,setCullFace:Lt,setLineWidth:z,setPolygonOffset:It,setScissorTest:tt,activeTexture:ct,bindTexture:be,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:W,texImage2D:Fe,texImage3D:ae,updateUBOMapping:Re,uniformBlockBinding:de,texStorage2D:fe,texStorage3D:Ce,texSubImage2D:ee,texSubImage3D:ie,compressedTexSubImage2D:Q,compressedTexSubImage3D:Pe,scissor:he,viewport:we,reset:He}}function AN(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,A){return g?new OffscreenCanvas(D,A):nc("canvas")}function M(D,A,W){let ee=1;const ie=be(D);if((ie.width>W||ie.height>W)&&(ee=W/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Q=Math.floor(ee*ie.width),Pe=Math.floor(ee*ie.height);d===void 0&&(d=x(Q,Pe));const fe=A?x(Q,Pe):d;return fe.width=Q,fe.height=Pe,fe.getContext("2d").drawImage(D,0,0,Q,Pe),ke("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Pe+")."),fe}else return"data"in D&&ke("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),D;return D}function y(D){return D.generateMipmaps}function l(D){t.generateMipmap(D)}function p(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function m(D,A,W,ee,ie=!1){if(D!==null){if(t[D]!==void 0)return t[D];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=A;if(A===t.RED&&(W===t.FLOAT&&(Q=t.R32F),W===t.HALF_FLOAT&&(Q=t.R16F),W===t.UNSIGNED_BYTE&&(Q=t.R8)),A===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.R8UI),W===t.UNSIGNED_SHORT&&(Q=t.R16UI),W===t.UNSIGNED_INT&&(Q=t.R32UI),W===t.BYTE&&(Q=t.R8I),W===t.SHORT&&(Q=t.R16I),W===t.INT&&(Q=t.R32I)),A===t.RG&&(W===t.FLOAT&&(Q=t.RG32F),W===t.HALF_FLOAT&&(Q=t.RG16F),W===t.UNSIGNED_BYTE&&(Q=t.RG8)),A===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RG8UI),W===t.UNSIGNED_SHORT&&(Q=t.RG16UI),W===t.UNSIGNED_INT&&(Q=t.RG32UI),W===t.BYTE&&(Q=t.RG8I),W===t.SHORT&&(Q=t.RG16I),W===t.INT&&(Q=t.RG32I)),A===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),W===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),W===t.UNSIGNED_INT&&(Q=t.RGB32UI),W===t.BYTE&&(Q=t.RGB8I),W===t.SHORT&&(Q=t.RGB16I),W===t.INT&&(Q=t.RGB32I)),A===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),W===t.UNSIGNED_INT&&(Q=t.RGBA32UI),W===t.BYTE&&(Q=t.RGBA8I),W===t.SHORT&&(Q=t.RGBA16I),W===t.INT&&(Q=t.RGBA32I)),A===t.RGB&&(W===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),A===t.RGBA){const Pe=ie?ec:Ye.getTransfer(ee);W===t.FLOAT&&(Q=t.RGBA32F),W===t.HALF_FLOAT&&(Q=t.RGBA16F),W===t.UNSIGNED_BYTE&&(Q=Pe===st?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(D,A){let W;return D?A===null||A===Pi||A===za?W=t.DEPTH24_STENCIL8:A===Si?W=t.DEPTH32F_STENCIL8:A===Va&&(W=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Pi||A===za?W=t.DEPTH_COMPONENT24:A===Si?W=t.DEPTH_COMPONENT32F:A===Va&&(W=t.DEPTH_COMPONENT16),W}function w(D,A){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Kt&&D.minFilter!==on?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function C(D){const A=D.target;A.removeEventListener("dispose",C),v(A),A.isVideoTexture&&f.delete(A)}function b(D){const A=D.target;A.removeEventListener("dispose",b),S(A)}function v(D){const A=i.get(D);if(A.__webglInit===void 0)return;const W=D.source,ee=h.get(W);if(ee){const ie=ee[A.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&_(D),Object.keys(ee).length===0&&h.delete(W)}i.remove(D)}function _(D){const A=i.get(D);t.deleteTexture(A.__webglTexture);const W=D.source,ee=h.get(W);delete ee[A.__cacheKey],o.memory.textures--}function S(D){const A=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(A.__webglFramebuffer[ee]))for(let ie=0;ie<A.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(A.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(A.__webglFramebuffer[ee]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[ee])}else{if(Array.isArray(A.__webglFramebuffer))for(let ee=0;ee<A.__webglFramebuffer.length;ee++)t.deleteFramebuffer(A.__webglFramebuffer[ee]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ee=0;ee<A.__webglColorRenderbuffer.length;ee++)A.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[ee]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const W=D.textures;for(let ee=0,ie=W.length;ee<ie;ee++){const Q=i.get(W[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(W[ee])}i.remove(D)}let T=0;function I(){T=0}function L(){const D=T;return D>=r.maxTextures&&ke("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),T+=1,D}function U(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function k(D,A){const W=i.get(D);if(D.isVideoTexture&&tt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const ee=D.image;if(ee===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,D,A);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+A)}function H(D,A){const W=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){K(W,D,A);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+A)}function B(D,A){const W=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){K(W,D,A);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+A)}function P(D,A){const W=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){J(W,D,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+A)}const O={[bh]:t.REPEAT,[ji]:t.CLAMP_TO_EDGE,[Rh]:t.MIRRORED_REPEAT},V={[Kt]:t.NEAREST,[XR]:t.NEAREST_MIPMAP_NEAREST,[Rl]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[Ef]:t.LINEAR_MIPMAP_NEAREST,[ss]:t.LINEAR_MIPMAP_LINEAR},q={[$R]:t.NEVER,[eP]:t.ALWAYS,[KR]:t.LESS,[Xm]:t.LEQUAL,[ZR]:t.EQUAL,[qm]:t.GEQUAL,[QR]:t.GREATER,[JR]:t.NOTEQUAL};function te(D,A){if(A.type===Si&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===on||A.magFilter===Ef||A.magFilter===Rl||A.magFilter===ss||A.minFilter===on||A.minFilter===Ef||A.minFilter===Rl||A.minFilter===ss)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,O[A.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,O[A.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,O[A.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,V[A.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,V[A.minFilter]),A.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Kt||A.minFilter!==Rl&&A.minFilter!==ss||A.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function re(D,A){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",C));const ee=A.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const Q=U(A);if(Q!==D.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[Q].usedTimes++;const Pe=ie[D.__cacheKey];Pe!==void 0&&(ie[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&_(A)),D.__cacheKey=Q,D.__webglTexture=ie[Q].texture}return W}function ue(D,A,W){return Math.floor(Math.floor(D/W)/A)}function xe(D,A,W,ee){const Q=D.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,A.width,A.height,W,ee,A.data);else{Q.sort((ae,he)=>ae.start-he.start);let Pe=0;for(let ae=1;ae<Q.length;ae++){const he=Q[Pe],we=Q[ae],Re=he.start+he.count,de=ue(we.start,A.width,4),He=ue(he.start,A.width,4);we.start<=Re+1&&de===He&&ue(we.start+we.count-1,A.width,4)===de?he.count=Math.max(he.count,we.start+we.count-he.start):(++Pe,Q[Pe]=we)}Q.length=Pe+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Ce=t.getParameter(t.UNPACK_SKIP_PIXELS),Fe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,A.width);for(let ae=0,he=Q.length;ae<he;ae++){const we=Q[ae],Re=Math.floor(we.start/4),de=Math.ceil(we.count/4),He=Re%A.width,G=Math.floor(Re/A.width),_e=de,le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,G),n.texSubImage2D(t.TEXTURE_2D,0,He,G,_e,le,W,ee,A.data)}D.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(t.UNPACK_SKIP_ROWS,Fe)}}function K(D,A,W){let ee=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=re(D,A),Q=A.source;n.bindTexture(ee,D.__webglTexture,t.TEXTURE0+W);const Pe=i.get(Q);if(Q.version!==Pe.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const fe=Ye.getPrimaries(Ye.workingColorSpace),Ce=A.colorSpace===mr?null:Ye.getPrimaries(A.colorSpace),Fe=A.colorSpace===mr||fe===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ae=M(A.image,!1,r.maxTextureSize);ae=ct(A,ae);const he=s.convert(A.format,A.colorSpace),we=s.convert(A.type);let Re=m(A.internalFormat,he,we,A.colorSpace,A.isVideoTexture);te(ee,A);let de;const He=A.mipmaps,G=A.isVideoTexture!==!0,_e=Pe.__version===void 0||ie===!0,le=Q.dataReady,ye=w(A,ae);if(A.isDepthTexture)Re=E(A.format===os,A.type),_e&&(G?n.texStorage2D(t.TEXTURE_2D,1,Re,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Re,ae.width,ae.height,0,he,we,null));else if(A.isDataTexture)if(He.length>0){G&&_e&&n.texStorage2D(t.TEXTURE_2D,ye,Re,He[0].width,He[0].height);for(let se=0,ne=He.length;se<ne;se++)de=He[se],G?le&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,de.width,de.height,he,we,de.data):n.texImage2D(t.TEXTURE_2D,se,Re,de.width,de.height,0,he,we,de.data);A.generateMipmaps=!1}else G?(_e&&n.texStorage2D(t.TEXTURE_2D,ye,Re,ae.width,ae.height),le&&xe(A,ae,he,we)):n.texImage2D(t.TEXTURE_2D,0,Re,ae.width,ae.height,0,he,we,ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){G&&_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,Re,He[0].width,He[0].height,ae.depth);for(let se=0,ne=He.length;se<ne;se++)if(de=He[se],A.format!==ui)if(he!==null)if(G){if(le)if(A.layerUpdates.size>0){const ce=c_(de.width,de.height,A.format,A.type);for(const Oe of A.layerUpdates){const ft=de.data.subarray(Oe*ce/de.data.BYTES_PER_ELEMENT,(Oe+1)*ce/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Oe,de.width,de.height,1,he,ft)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,ae.depth,he,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Re,de.width,de.height,ae.depth,0,de.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,ae.depth,he,we,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Re,de.width,de.height,ae.depth,0,he,we,de.data)}else{G&&_e&&n.texStorage2D(t.TEXTURE_2D,ye,Re,He[0].width,He[0].height);for(let se=0,ne=He.length;se<ne;se++)de=He[se],A.format!==ui?he!==null?G?le&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,de.width,de.height,he,de.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Re,de.width,de.height,0,de.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?le&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,de.width,de.height,he,we,de.data):n.texImage2D(t.TEXTURE_2D,se,Re,de.width,de.height,0,he,we,de.data)}else if(A.isDataArrayTexture)if(G){if(_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,Re,ae.width,ae.height,ae.depth),le)if(A.layerUpdates.size>0){const se=c_(ae.width,ae.height,A.format,A.type);for(const ne of A.layerUpdates){const ce=ae.data.subarray(ne*se/ae.data.BYTES_PER_ELEMENT,(ne+1)*se/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,he,we,ce)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,he,we,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ae.width,ae.height,ae.depth,0,he,we,ae.data);else if(A.isData3DTexture)G?(_e&&n.texStorage3D(t.TEXTURE_3D,ye,Re,ae.width,ae.height,ae.depth),le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,he,we,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ae.width,ae.height,ae.depth,0,he,we,ae.data);else if(A.isFramebufferTexture){if(_e)if(G)n.texStorage2D(t.TEXTURE_2D,ye,Re,ae.width,ae.height);else{let se=ae.width,ne=ae.height;for(let ce=0;ce<ye;ce++)n.texImage2D(t.TEXTURE_2D,ce,Re,se,ne,0,he,we,null),se>>=1,ne>>=1}}else if(He.length>0){if(G&&_e){const se=be(He[0]);n.texStorage2D(t.TEXTURE_2D,ye,Re,se.width,se.height)}for(let se=0,ne=He.length;se<ne;se++)de=He[se],G?le&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,he,we,de):n.texImage2D(t.TEXTURE_2D,se,Re,he,we,de);A.generateMipmaps=!1}else if(G){if(_e){const se=be(ae);n.texStorage2D(t.TEXTURE_2D,ye,Re,se.width,se.height)}le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,we,ae)}else n.texImage2D(t.TEXTURE_2D,0,Re,he,we,ae);y(A)&&l(ee),Pe.__version=Q.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function J(D,A,W){if(A.image.length!==6)return;const ee=re(D,A),ie=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+W);const Q=i.get(ie);if(ie.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+W);const Pe=Ye.getPrimaries(Ye.workingColorSpace),fe=A.colorSpace===mr?null:Ye.getPrimaries(A.colorSpace),Ce=A.colorSpace===mr||Pe===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Fe=A.isCompressedTexture||A.image[0].isCompressedTexture,ae=A.image[0]&&A.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!Fe&&!ae?he[ne]=M(A.image[ne],!0,r.maxCubemapSize):he[ne]=ae?A.image[ne].image:A.image[ne],he[ne]=ct(A,he[ne]);const we=he[0],Re=s.convert(A.format,A.colorSpace),de=s.convert(A.type),He=m(A.internalFormat,Re,de,A.colorSpace),G=A.isVideoTexture!==!0,_e=Q.__version===void 0||ee===!0,le=ie.dataReady;let ye=w(A,we);te(t.TEXTURE_CUBE_MAP,A);let se;if(Fe){G&&_e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,He,we.width,we.height);for(let ne=0;ne<6;ne++){se=he[ne].mipmaps;for(let ce=0;ce<se.length;ce++){const Oe=se[ce];A.format!==ui?Re!==null?G?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce,0,0,Oe.width,Oe.height,Re,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce,He,Oe.width,Oe.height,0,Oe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce,0,0,Oe.width,Oe.height,Re,de,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce,He,Oe.width,Oe.height,0,Re,de,Oe.data)}}}else{if(se=A.mipmaps,G&&_e){se.length>0&&ye++;const ne=be(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,He,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){G?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Re,de,he[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,he[ne].width,he[ne].height,0,Re,de,he[ne].data);for(let ce=0;ce<se.length;ce++){const ft=se[ce].image[ne].image;G?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce+1,0,0,ft.width,ft.height,Re,de,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce+1,He,ft.width,ft.height,0,Re,de,ft.data)}}else{G?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,de,he[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,Re,de,he[ne]);for(let ce=0;ce<se.length;ce++){const Oe=se[ce];G?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce+1,0,0,Re,de,Oe.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce+1,He,Re,de,Oe.image[ne])}}}y(A)&&l(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ge(D,A,W,ee,ie,Q){const Pe=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),Ce=m(W.internalFormat,Pe,fe,W.colorSpace),Fe=i.get(A),ae=i.get(W);if(ae.__renderTarget=A,!Fe.__hasExternalTextures){const he=Math.max(1,A.width>>Q),we=Math.max(1,A.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Q,Ce,he,we,A.depth,0,Pe,fe,null):n.texImage2D(ie,Q,Ce,he,we,0,Pe,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),It(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,ae.__webglTexture,0,z(A)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,ae.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(D,A,W){if(t.bindRenderbuffer(t.RENDERBUFFER,D),A.depthBuffer){const ee=A.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Q=E(A.stencilBuffer,ie),Pe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;It(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,z(A),Q,A.width,A.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,z(A),Q,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Q,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,D)}else{const ee=A.textures;for(let ie=0;ie<ee.length;ie++){const Q=ee[ie],Pe=s.convert(Q.format,Q.colorSpace),fe=s.convert(Q.type),Ce=m(Q.internalFormat,Pe,fe,Q.colorSpace);It(A)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,z(A),Ce,A.width,A.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,z(A),Ce,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(D,A,W){const ee=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(A.depthTexture);if(ie.__renderTarget=A,(!ie.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,A.depthTexture.addEventListener("dispose",C)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),te(t.TEXTURE_CUBE_MAP,A.depthTexture);const Fe=s.convert(A.depthTexture.format),ae=s.convert(A.depthTexture.type);let he;A.depthTexture.format===tr?he=t.DEPTH_COMPONENT24:A.depthTexture.format===os&&(he=t.DEPTH24_STENCIL8);for(let we=0;we<6;we++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,he,A.width,A.height,0,Fe,ae,null)}}else k(A.depthTexture,0);const Q=ie.__webglTexture,Pe=z(A),fe=ee?t.TEXTURE_CUBE_MAP_POSITIVE_X+W:t.TEXTURE_2D,Ce=A.depthTexture.format===os?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(A.depthTexture.format===tr)It(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,fe,Q,0,Pe):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,fe,Q,0);else if(A.depthTexture.format===os)It(A)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,fe,Q,0,Pe):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,fe,Q,0);else throw new Error("Unknown depthTexture format")}function Ze(D){const A=i.get(D),W=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ee){const ie=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),A.__depthDisposeCallback=ie}A.__boundDepthTexture=ee}if(D.depthTexture&&!A.__autoAllocateDepthBuffer)if(W)for(let ee=0;ee<6;ee++)Ae(A.__webglFramebuffer[ee],D,ee);else{const ee=D.texture.mipmaps;ee&&ee.length>0?Ae(A.__webglFramebuffer[0],D,0):Ae(A.__webglFramebuffer,D,0)}else if(W){A.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[ee]),A.__webglDepthbuffer[ee]===void 0)A.__webglDepthbuffer[ee]=t.createRenderbuffer(),Ne(A.__webglDepthbuffer[ee],D,!1);else{const ie=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else{const ee=D.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),Ne(A.__webglDepthbuffer,D,!1);else{const ie=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Gt(D,A,W){const ee=i.get(D);A!==void 0&&ge(ee.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ze(D)}function qe(D){const A=D.texture,W=i.get(D),ee=i.get(A);D.addEventListener("dispose",b);const ie=D.textures,Q=D.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=A.version,o.memory.textures++),Q){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)W.__webglFramebuffer[fe][Ce]=t.createFramebuffer()}else W.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)W.__webglFramebuffer[fe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let fe=0,Ce=ie.length;fe<Ce;fe++){const Fe=i.get(ie[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&It(D)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Ce=ie[fe];W.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const Fe=s.convert(Ce.format,Ce.colorSpace),ae=s.convert(Ce.type),he=m(Ce.internalFormat,Fe,ae,Ce.colorSpace,D.isXRRenderTarget===!0),we=z(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,he,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(W.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),te(t.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)ge(W.__webglFramebuffer[fe][Ce],D,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce);else ge(W.__webglFramebuffer[fe],D,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(A)&&l(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let fe=0,Ce=ie.length;fe<Ce;fe++){const Fe=ie[fe],ae=i.get(Fe);let he=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,ae.__webglTexture),te(he,Fe),ge(W.__webglFramebuffer,D,Fe,t.COLOR_ATTACHMENT0+fe,he,0),y(Fe)&&l(he)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),te(fe,A),A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)ge(W.__webglFramebuffer[Ce],D,A,t.COLOR_ATTACHMENT0,fe,Ce);else ge(W.__webglFramebuffer,D,A,t.COLOR_ATTACHMENT0,fe,0);y(A)&&l(fe),n.unbindTexture()}D.depthBuffer&&Ze(D)}function nt(D){const A=D.textures;for(let W=0,ee=A.length;W<ee;W++){const ie=A[W];if(y(ie)){const Q=p(D),Pe=i.get(ie).__webglTexture;n.bindTexture(Q,Pe),l(Q),n.unbindTexture()}}}const lt=[],ze=[];function Lt(D){if(D.samples>0){if(It(D)===!1){const A=D.textures,W=D.width,ee=D.height;let ie=t.COLOR_BUFFER_BIT;const Q=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(D),fe=A.length>1;if(fe)for(let Fe=0;Fe<A.length;Fe++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ce=D.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const ae=i.get(A[Fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,W,ee,0,0,W,ee,ie,t.NEAREST),u===!0&&(lt.length=0,ze.length=0,lt.push(t.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(lt.push(Q),ze.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Fe=0;Fe<A.length;Fe++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const ae=i.get(A[Fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&u){const A=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function z(D){return Math.min(r.maxSamples,D.samples)}function It(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function tt(D){const A=o.render.frame;f.get(D)!==A&&(f.set(D,A),D.update())}function ct(D,A){const W=D.colorSpace,ee=D.format,ie=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Eo&&W!==mr&&(Ye.getTransfer(W)===st?(ee!==ui||ie!==Nn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",W)),A}function be(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=P,this.rebindTextures=Gt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function CN(t,e){function n(i,r=mr){let s;const o=Ye.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===zm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===YM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$M)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===XM)return t.BYTE;if(i===qM)return t.SHORT;if(i===Va)return t.UNSIGNED_SHORT;if(i===Vm)return t.INT;if(i===Pi)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===er)return t.HALF_FLOAT;if(i===KM)return t.ALPHA;if(i===ZM)return t.RGB;if(i===ui)return t.RGBA;if(i===tr)return t.DEPTH_COMPONENT;if(i===os)return t.DEPTH_STENCIL;if(i===QM)return t.RED;if(i===Gm)return t.RED_INTEGER;if(i===Mo)return t.RG;if(i===Wm)return t.RG_INTEGER;if(i===jm)return t.RGBA_INTEGER;if(i===vu||i===_u||i===yu||i===xu)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ph||i===Dh||i===Lh||i===Ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nh||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nh||i===Uh)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oh)return s.COMPRESSED_R11_EAC;if(i===kh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bh)return s.COMPRESSED_RG11_EAC;if(i===Vh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zh||i===Hh||i===Gh||i===Wh||i===jh||i===Xh||i===qh||i===Yh||i===$h||i===Kh||i===Zh||i===Qh||i===Jh||i===ep)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$h)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ep)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tp||i===np||i===ip)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tp)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===np)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ip)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rp||i===sp||i===op||i===ap)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===op)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ap)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===za?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const bN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new c1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:bN,fragmentShader:RN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rt(new Ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DN extends Do{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",u=1,c=null,f=null,d=null,h=null,g=null,x=null;const M=typeof XRWebGLBinding<"u",y=new PN,l={},p=n.getContextAttributes();let m=null,E=null;const w=[],C=[],b=new Ke;let v=null;const _=new Xn;_.viewport=new Ct;const S=new Xn;S.viewport=new Ct;const T=[_,S],I=new zP;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=w[K];return J===void 0&&(J=new Xf,w[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=w[K];return J===void 0&&(J=new Xf,w[K]=J),J.getGripSpace()},this.getHand=function(K){let J=w[K];return J===void 0&&(J=new Xf,w[K]=J),J.getHandSpace()};function k(K){const J=C.indexOf(K.inputSource);if(J===-1)return;const ge=w[J];ge!==void 0&&(ge.update(K.inputSource,K.frame,c||o),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",B);for(let K=0;K<w.length;K++){const J=C[K];J!==null&&(C[K]=null,w[K].disconnect(J))}L=null,U=null,y.reset();for(const K in l)delete l[K];e.setRenderTarget(m),g=null,h=null,d=null,r=null,E=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",H),r.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ne=null,Ae=null;p.depth&&(Ae=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=p.stencil?os:tr,Ne=p.stencil?za:Pi);const Ze={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ze),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Ci(h.textureWidth,h.textureHeight,{format:ui,type:Nn,depthTexture:new Ga(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ge),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ci(g.framebufferWidth,g.framebufferHeight,{format:ui,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(K){for(let J=0;J<K.removed.length;J++){const ge=K.removed[J],Ne=C.indexOf(ge);Ne>=0&&(C[Ne]=null,w[Ne].disconnect(ge))}for(let J=0;J<K.added.length;J++){const ge=K.added[J];let Ne=C.indexOf(ge);if(Ne===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=C.length){C.push(ge),Ne=Ze;break}else if(C[Ze]===null){C[Ze]=ge,Ne=Ze;break}if(Ne===-1)break}const Ae=w[Ne];Ae&&Ae.connect(ge)}}const P=new Y,O=new Y;function V(K,J,ge){P.setFromMatrixPosition(J.matrixWorld),O.setFromMatrixPosition(ge.matrixWorld);const Ne=P.distanceTo(O),Ae=J.projectionMatrix.elements,Ze=ge.projectionMatrix.elements,Gt=Ae[14]/(Ae[10]-1),qe=Ae[14]/(Ae[10]+1),nt=(Ae[9]+1)/Ae[5],lt=(Ae[9]-1)/Ae[5],ze=(Ae[8]-1)/Ae[0],Lt=(Ze[8]+1)/Ze[0],z=Gt*ze,It=Gt*Lt,tt=Ne/(-ze+Lt),ct=tt*-ze;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ct),K.translateZ(tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const be=Gt+tt,D=qe+tt,A=z-ct,W=It+(Ne-ct),ee=nt*qe/D*be,ie=lt*qe/D*be;K.projectionMatrix.makePerspective(A,W,ee,ie,be,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let J=K.near,ge=K.far;y.texture!==null&&(y.depthNear>0&&(J=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),I.near=S.near=_.near=J,I.far=S.far=_.far=ge,(L!==I.near||U!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,U=I.far),I.layers.mask=K.layers.mask|6,_.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const Ne=K.parent,Ae=I.cameras;q(I,Ne);for(let Ze=0;Ze<Ae.length;Ze++)q(Ae[Ze],Ne);Ae.length===2?V(I,_,S):I.projectionMatrix.copy(_.projectionMatrix),te(K,I,Ne)};function te(K,J,ge){ge===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=lp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&g===null))return u},this.setFoveation=function(K){u=K,h!==null&&(h.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(I)},this.getCameraTexture=function(K){return l[K]};let re=null;function ue(K,J){if(f=J.getViewerPose(c||o),x=J,f!==null){const ge=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Ne=!1;ge.length!==I.cameras.length&&(I.cameras.length=0,Ne=!0);for(let qe=0;qe<ge.length;qe++){const nt=ge[qe];let lt=null;if(g!==null)lt=g.getViewport(nt);else{const Lt=d.getViewSubImage(h,nt);lt=Lt.viewport,qe===0&&(e.setRenderTargetTextures(E,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(E))}let ze=T[qe];ze===void 0&&(ze=new Xn,ze.layers.enable(qe),ze.viewport=new Ct,T[qe]=ze),ze.matrix.fromArray(nt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(nt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(lt.x,lt.y,lt.width,lt.height),qe===0&&(I.matrix.copy(ze.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ne===!0&&I.cameras.push(ze)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const qe=d.getDepthInformation(ge[0]);qe&&qe.isValid&&qe.texture&&y.init(qe,r.renderState)}if(Ae&&Ae.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let qe=0;qe<ge.length;qe++){const nt=ge[qe].camera;if(nt){let lt=l[nt];lt||(lt=new c1,l[nt]=lt);const ze=d.getCameraImage(nt);lt.sourceTexture=ze}}}}for(let ge=0;ge<w.length;ge++){const Ne=C[ge],Ae=w[ge];Ne!==null&&Ae!==void 0&&Ae.update(Ne,J,c||o)}re&&re(K,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const xe=new d1;xe.setAnimationLoop(ue),this.setAnimationLoop=function(K){re=K},this.dispose=function(){}}}const Xr=new Di,LN=new bt;function IN(t,e){function n(y,l){y.matrixAutoUpdate===!0&&y.updateMatrix(),l.value.copy(y.matrix)}function i(y,l){l.color.getRGB(y.fogColor.value,o1(t)),l.isFog?(y.fogNear.value=l.near,y.fogFar.value=l.far):l.isFogExp2&&(y.fogDensity.value=l.density)}function r(y,l,p,m,E){l.isMeshBasicMaterial||l.isMeshLambertMaterial?s(y,l):l.isMeshToonMaterial?(s(y,l),d(y,l)):l.isMeshPhongMaterial?(s(y,l),f(y,l)):l.isMeshStandardMaterial?(s(y,l),h(y,l),l.isMeshPhysicalMaterial&&g(y,l,E)):l.isMeshMatcapMaterial?(s(y,l),x(y,l)):l.isMeshDepthMaterial?s(y,l):l.isMeshDistanceMaterial?(s(y,l),M(y,l)):l.isMeshNormalMaterial?s(y,l):l.isLineBasicMaterial?(o(y,l),l.isLineDashedMaterial&&a(y,l)):l.isPointsMaterial?u(y,l,p,m):l.isSpriteMaterial?c(y,l):l.isShadowMaterial?(y.color.value.copy(l.color),y.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function s(y,l){y.opacity.value=l.opacity,l.color&&y.diffuse.value.copy(l.color),l.emissive&&y.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(y.map.value=l.map,n(l.map,y.mapTransform)),l.alphaMap&&(y.alphaMap.value=l.alphaMap,n(l.alphaMap,y.alphaMapTransform)),l.bumpMap&&(y.bumpMap.value=l.bumpMap,n(l.bumpMap,y.bumpMapTransform),y.bumpScale.value=l.bumpScale,l.side===Cn&&(y.bumpScale.value*=-1)),l.normalMap&&(y.normalMap.value=l.normalMap,n(l.normalMap,y.normalMapTransform),y.normalScale.value.copy(l.normalScale),l.side===Cn&&y.normalScale.value.negate()),l.displacementMap&&(y.displacementMap.value=l.displacementMap,n(l.displacementMap,y.displacementMapTransform),y.displacementScale.value=l.displacementScale,y.displacementBias.value=l.displacementBias),l.emissiveMap&&(y.emissiveMap.value=l.emissiveMap,n(l.emissiveMap,y.emissiveMapTransform)),l.specularMap&&(y.specularMap.value=l.specularMap,n(l.specularMap,y.specularMapTransform)),l.alphaTest>0&&(y.alphaTest.value=l.alphaTest);const p=e.get(l),m=p.envMap,E=p.envMapRotation;m&&(y.envMap.value=m,Xr.copy(E),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(LN.makeRotationFromEuler(Xr)),y.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=l.reflectivity,y.ior.value=l.ior,y.refractionRatio.value=l.refractionRatio),l.lightMap&&(y.lightMap.value=l.lightMap,y.lightMapIntensity.value=l.lightMapIntensity,n(l.lightMap,y.lightMapTransform)),l.aoMap&&(y.aoMap.value=l.aoMap,y.aoMapIntensity.value=l.aoMapIntensity,n(l.aoMap,y.aoMapTransform))}function o(y,l){y.diffuse.value.copy(l.color),y.opacity.value=l.opacity,l.map&&(y.map.value=l.map,n(l.map,y.mapTransform))}function a(y,l){y.dashSize.value=l.dashSize,y.totalSize.value=l.dashSize+l.gapSize,y.scale.value=l.scale}function u(y,l,p,m){y.diffuse.value.copy(l.color),y.opacity.value=l.opacity,y.size.value=l.size*p,y.scale.value=m*.5,l.map&&(y.map.value=l.map,n(l.map,y.uvTransform)),l.alphaMap&&(y.alphaMap.value=l.alphaMap,n(l.alphaMap,y.alphaMapTransform)),l.alphaTest>0&&(y.alphaTest.value=l.alphaTest)}function c(y,l){y.diffuse.value.copy(l.color),y.opacity.value=l.opacity,y.rotation.value=l.rotation,l.map&&(y.map.value=l.map,n(l.map,y.mapTransform)),l.alphaMap&&(y.alphaMap.value=l.alphaMap,n(l.alphaMap,y.alphaMapTransform)),l.alphaTest>0&&(y.alphaTest.value=l.alphaTest)}function f(y,l){y.specular.value.copy(l.specular),y.shininess.value=Math.max(l.shininess,1e-4)}function d(y,l){l.gradientMap&&(y.gradientMap.value=l.gradientMap)}function h(y,l){y.metalness.value=l.metalness,l.metalnessMap&&(y.metalnessMap.value=l.metalnessMap,n(l.metalnessMap,y.metalnessMapTransform)),y.roughness.value=l.roughness,l.roughnessMap&&(y.roughnessMap.value=l.roughnessMap,n(l.roughnessMap,y.roughnessMapTransform)),l.envMap&&(y.envMapIntensity.value=l.envMapIntensity)}function g(y,l,p){y.ior.value=l.ior,l.sheen>0&&(y.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),y.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(y.sheenColorMap.value=l.sheenColorMap,n(l.sheenColorMap,y.sheenColorMapTransform)),l.sheenRoughnessMap&&(y.sheenRoughnessMap.value=l.sheenRoughnessMap,n(l.sheenRoughnessMap,y.sheenRoughnessMapTransform))),l.clearcoat>0&&(y.clearcoat.value=l.clearcoat,y.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(y.clearcoatMap.value=l.clearcoatMap,n(l.clearcoatMap,y.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,n(l.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(y.clearcoatNormalMap.value=l.clearcoatNormalMap,n(l.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Cn&&y.clearcoatNormalScale.value.negate())),l.dispersion>0&&(y.dispersion.value=l.dispersion),l.iridescence>0&&(y.iridescence.value=l.iridescence,y.iridescenceIOR.value=l.iridescenceIOR,y.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(y.iridescenceMap.value=l.iridescenceMap,n(l.iridescenceMap,y.iridescenceMapTransform)),l.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=l.iridescenceThicknessMap,n(l.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),l.transmission>0&&(y.transmission.value=l.transmission,y.transmissionSamplerMap.value=p.texture,y.transmissionSamplerSize.value.set(p.width,p.height),l.transmissionMap&&(y.transmissionMap.value=l.transmissionMap,n(l.transmissionMap,y.transmissionMapTransform)),y.thickness.value=l.thickness,l.thicknessMap&&(y.thicknessMap.value=l.thicknessMap,n(l.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=l.attenuationDistance,y.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(y.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(y.anisotropyMap.value=l.anisotropyMap,n(l.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=l.specularIntensity,y.specularColor.value.copy(l.specularColor),l.specularColorMap&&(y.specularColorMap.value=l.specularColorMap,n(l.specularColorMap,y.specularColorMapTransform)),l.specularIntensityMap&&(y.specularIntensityMap.value=l.specularIntensityMap,n(l.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,l){l.matcap&&(y.matcap.value=l.matcap)}function M(y,l){const p=e.get(l).light;y.referencePosition.value.setFromMatrixPosition(p.matrixWorld),y.nearDistance.value=p.shadow.camera.near,y.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function u(p,m){const E=m.program;i.uniformBlockBinding(p,E)}function c(p,m){let E=r[p.id];E===void 0&&(x(p),E=f(p),r[p.id]=E,p.addEventListener("dispose",y));const w=m.program;i.updateUBOMapping(p,w);const C=e.render.frame;s[p.id]!==C&&(h(p),s[p.id]=C)}function f(p){const m=d();p.__bindingPointIndex=m;const E=t.createBuffer(),w=p.__size,C=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,E),E}function d(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(p){const m=r[p.id],E=p.uniforms,w=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let C=0,b=E.length;C<b;C++){const v=Array.isArray(E[C])?E[C]:[E[C]];for(let _=0,S=v.length;_<S;_++){const T=v[_];if(g(T,C,_,w)===!0){const I=T.__offset,L=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let k=0;k<L.length;k++){const H=L[k],B=M(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,I+U,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,U),U+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(p,m,E,w){const C=p.value,b=m+"_"+E;if(w[b]===void 0)return typeof C=="number"||typeof C=="boolean"?w[b]=C:w[b]=C.clone(),!0;{const v=w[b];if(typeof C=="number"||typeof C=="boolean"){if(v!==C)return w[b]=C,!0}else if(v.equals(C)===!1)return v.copy(C),!0}return!1}function x(p){const m=p.uniforms;let E=0;const w=16;for(let b=0,v=m.length;b<v;b++){const _=Array.isArray(m[b])?m[b]:[m[b]];for(let S=0,T=_.length;S<T;S++){const I=_[S],L=Array.isArray(I.value)?I.value:[I.value];for(let U=0,k=L.length;U<k;U++){const H=L[U],B=M(H),P=E%w,O=P%B.boundary,V=P+O;E+=O,V!==0&&w-V<B.storage&&(E+=w-V),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=B.storage}}}const C=E%w;return C>0&&(E+=w-C),p.__size=E,p.__cache={},this}function M(p){const m={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(m.boundary=4,m.storage=4):p.isVector2?(m.boundary=8,m.storage=8):p.isVector3||p.isColor?(m.boundary=16,m.storage=12):p.isVector4?(m.boundary=16,m.storage=16):p.isMatrix3?(m.boundary=48,m.storage=48):p.isMatrix4?(m.boundary=64,m.storage=64):p.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",p),m}function y(p){const m=p.target;m.removeEventListener("dispose",y);const E=o.indexOf(m.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function l(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:u,update:c,dispose:l}}const UN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function FN(){return gi===null&&(gi=new RP(UN,16,16,Mo,er),gi.name="DFG_LUT",gi.minFilter=on,gi.magFilter=on,gi.wrapS=ji,gi.wrapT=ji,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class ON{constructor(e={}){const{canvas:n=tP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:g=Nn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const M=g,y=new Set([jm,Wm,Gm]),l=new Set([Nn,Pi,Va,za,zm,Hm]),p=new Uint32Array(4),m=new Int32Array(4);let E=null,w=null;const C=[],b=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let S=!1;this._outputColorSpace=Gn;let T=0,I=0,L=null,U=-1,k=null;const H=new Ct,B=new Ct;let P=null;const O=new Xe(0);let V=0,q=n.width,te=n.height,re=1,ue=null,xe=null;const K=new Ct(0,0,q,te),J=new Ct(0,0,q,te);let ge=!1;const Ne=new Km;let Ae=!1,Ze=!1;const Gt=new bt,qe=new Y,nt=new Ct,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Lt(){return L===null?re:1}let z=i;function It(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${km}`),n.addEventListener("webglcontextlost",Oe,!1),n.addEventListener("webglcontextrestored",ft,!1),n.addEventListener("webglcontextcreationerror",it,!1),z===null){const j="webgl2";if(z=It(j,R),z===null)throw It(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Je("WebGLRenderer: "+R.message),R}let tt,ct,be,D,A,W,ee,ie,Q,Pe,fe,Ce,Fe,ae,he,we,Re,de,He,G,_e,le,ye,se;function ne(){tt=new FL(z),tt.init(),le=new CN(z,tt),ct=new CL(z,tt,e,le),be=new wN(z,tt),ct.reversedDepthBuffer&&h&&be.buffers.depth.setReversed(!0),D=new BL(z),A=new cN,W=new AN(z,tt,be,A,ct,le,D),ee=new RL(_),ie=new UL(_),Q=new GP(z),ye=new wL(z,Q),Pe=new OL(z,Q,D,ye),fe=new zL(z,Pe,Q,D),He=new VL(z,ct,W),we=new bL(A),Ce=new uN(_,ee,ie,tt,ct,ye,we),Fe=new IN(_,A),ae=new dN,he=new _N(tt),de=new TL(_,ee,ie,be,fe,x,u),Re=new EN(_,fe,ct),se=new NN(z,D,ct,be),G=new AL(z,tt,D),_e=new kL(z,tt,D),D.programs=Ce.programs,_.capabilities=ct,_.extensions=tt,_.properties=A,_.renderLists=ae,_.shadowMap=Re,_.state=be,_.info=D}ne(),M!==Nn&&(v=new GL(M,n.width,n.height,r,s));const ce=new DN(_,z);this.xr=ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(R){R!==void 0&&(re=R,this.setSize(q,te,!1))},this.getSize=function(R){return R.set(q,te)},this.setSize=function(R,j,Z=!0){if(ce.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,te=j,n.width=Math.floor(R*re),n.height=Math.floor(j*re),Z===!0&&(n.style.width=R+"px",n.style.height=j+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(q*re,te*re).floor()},this.setDrawingBufferSize=function(R,j,Z){q=R,te=j,re=Z,n.width=Math.floor(R*Z),n.height=Math.floor(j*Z),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(M===Nn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,j,Z,$){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,j,Z,$),be.viewport(H.copy(K).multiplyScalar(re).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,j,Z,$){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,j,Z,$),be.scissor(B.copy(J).multiplyScalar(re).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){be.setScissorTest(ge=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){xe=R},this.getClearColor=function(R){return R.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,Z=!0){let $=0;if(R){let X=!1;if(L!==null){const pe=L.texture.format;X=y.has(pe)}if(X){const pe=L.texture.type,Se=l.has(pe),ve=de.getClearColor(),Te=de.getClearAlpha(),De=ve.r,Ue=ve.g,Le=ve.b;Se?(p[0]=De,p[1]=Ue,p[2]=Le,p[3]=Te,z.clearBufferuiv(z.COLOR,0,p)):(m[0]=De,m[1]=Ue,m[2]=Le,m[3]=Te,z.clearBufferiv(z.COLOR,0,m))}else $|=z.COLOR_BUFFER_BIT}j&&($|=z.DEPTH_BUFFER_BIT),Z&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",ft,!1),n.removeEventListener("webglcontextcreationerror",it,!1),de.dispose(),ae.dispose(),he.dispose(),A.dispose(),ee.dispose(),ie.dispose(),fe.dispose(),ye.dispose(),se.dispose(),Ce.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",t0),ce.removeEventListener("sessionend",n0),Or.stop()};function Oe(R){R.preventDefault(),jv("WebGLRenderer: Context Lost."),S=!0}function ft(){jv("WebGLRenderer: Context Restored."),S=!1;const R=D.autoReset,j=Re.enabled,Z=Re.autoUpdate,$=Re.needsUpdate,X=Re.type;ne(),D.autoReset=R,Re.enabled=j,Re.autoUpdate=Z,Re.needsUpdate=$,Re.type=X}function it(R){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pi(R){const j=R.target;j.removeEventListener("dispose",pi),Ii(j)}function Ii(R){_1(R),A.remove(R)}function _1(R){const j=A.get(R).programs;j!==void 0&&(j.forEach(function(Z){Ce.releaseProgram(Z)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,Z,$,X,pe){j===null&&(j=lt);const Se=X.isMesh&&X.matrixWorld.determinant()<0,ve=x1(R,j,Z,$,X);be.setMaterial($,Se);let Te=Z.index,De=1;if($.wireframe===!0){if(Te=Pe.getWireframeAttribute(Z),Te===void 0)return;De=2}const Ue=Z.drawRange,Le=Z.attributes.position;let Ge=Ue.start*De,at=(Ue.start+Ue.count)*De;pe!==null&&(Ge=Math.max(Ge,pe.start*De),at=Math.min(at,(pe.start+pe.count)*De)),Te!==null?(Ge=Math.max(Ge,0),at=Math.min(at,Te.count)):Le!=null&&(Ge=Math.max(Ge,0),at=Math.min(at,Le.count));const Et=at-Ge;if(Et<0||Et===1/0)return;ye.setup(X,$,ve,Z,Te);let Tt,ut=G;if(Te!==null&&(Tt=Q.get(Te),ut=_e,ut.setIndex(Tt)),X.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*Lt()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(X.isLine){let Ie=$.linewidth;Ie===void 0&&(Ie=1),be.setLineWidth(Ie*Lt()),X.isLineSegments?ut.setMode(z.LINES):X.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else X.isPoints?ut.setMode(z.POINTS):X.isSprite&&ut.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ha("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ie=X._multiDrawStarts,rt=X._multiDrawCounts,Qe=X._multiDrawCount,bn=Te?Q.get(Te).bytesPerElement:1,_s=A.get($).currentProgram.getUniforms();for(let Rn=0;Rn<Qe;Rn++)_s.setValue(z,"_gl_DrawID",Rn),ut.render(Ie[Rn]/bn,rt[Rn])}else if(X.isInstancedMesh)ut.renderInstances(Ge,Et,X.count);else if(Z.isInstancedBufferGeometry){const Ie=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,rt=Math.min(Z.instanceCount,Ie);ut.renderInstances(Ge,Et,rt)}else ut.render(Ge,Et)};function e0(R,j,Z){R.transparent===!0&&R.side===Hi&&R.forceSinglePass===!1?(R.side=Cn,R.needsUpdate=!0,rl(R,j,Z),R.side=Lr,R.needsUpdate=!0,rl(R,j,Z),R.side=Hi):rl(R,j,Z)}this.compile=function(R,j,Z=null){Z===null&&(Z=R),w=he.get(Z),w.init(j),b.push(w),Z.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),R!==Z&&R.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights();const $=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pe=X.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const ve=pe[Se];e0(ve,Z,X),$.add(ve)}else e0(pe,Z,X),$.add(pe)}),w=b.pop(),$},this.compileAsync=function(R,j,Z=null){const $=this.compile(R,j,Z);return new Promise(X=>{function pe(){if($.forEach(function(Se){A.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){X(R);return}setTimeout(pe,10)}tt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Rc=null;function y1(R){Rc&&Rc(R)}function t0(){Or.stop()}function n0(){Or.start()}const Or=new d1;Or.setAnimationLoop(y1),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(R){Rc=R,ce.setAnimationLoop(R),R===null?Or.stop():Or.start()},ce.addEventListener("sessionstart",t0),ce.addEventListener("sessionend",n0),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const Z=ce.enabled===!0&&ce.isPresenting===!0,$=v!==null&&(L===null||Z)&&v.begin(_,L);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(j),j=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,j,L),w=he.get(R,b.length),w.init(j),b.push(w),Gt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ne.setFromProjectionMatrix(Gt,Mi,j.reversedDepth),Ze=this.localClippingEnabled,Ae=we.init(this.clippingPlanes,Ze),E=ae.get(R,C.length),E.init(),C.push(E),ce.enabled===!0&&ce.isPresenting===!0){const Se=_.xr.getDepthSensingMesh();Se!==null&&Pc(Se,j,-1/0,_.sortObjects)}Pc(R,j,0,_.sortObjects),E.finish(),_.sortObjects===!0&&E.sort(ue,xe),ze=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ze&&de.addToRenderList(E,R),this.info.render.frame++,Ae===!0&&we.beginShadows();const X=w.state.shadowsArray;if(Re.render(X,R,j),Ae===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&v.hasRenderPass())===!1){const Se=E.opaque,ve=E.transmissive;if(w.setupLights(),j.isArrayCamera){const Te=j.cameras;if(ve.length>0)for(let De=0,Ue=Te.length;De<Ue;De++){const Le=Te[De];r0(Se,ve,R,Le)}ze&&de.render(R);for(let De=0,Ue=Te.length;De<Ue;De++){const Le=Te[De];i0(E,R,Le,Le.viewport)}}else ve.length>0&&r0(Se,ve,R,j),ze&&de.render(R),i0(E,R,j)}L!==null&&I===0&&(W.updateMultisampleRenderTarget(L),W.updateRenderTargetMipmap(L)),$&&v.end(_),R.isScene===!0&&R.onAfterRender(_,R,j),ye.resetDefaultState(),U=-1,k=null,b.pop(),b.length>0?(w=b[b.length-1],Ae===!0&&we.setGlobalState(_.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null};function Pc(R,j,Z,$){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ne.intersectsSprite(R)){$&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Gt);const Se=fe.update(R),ve=R.material;ve.visible&&E.push(R,Se,ve,Z,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ne.intersectsObject(R))){const Se=fe.update(R),ve=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),nt.copy(Se.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Gt)),Array.isArray(ve)){const Te=Se.groups;for(let De=0,Ue=Te.length;De<Ue;De++){const Le=Te[De],Ge=ve[Le.materialIndex];Ge&&Ge.visible&&E.push(R,Se,Ge,Z,nt.z,Le)}}else ve.visible&&E.push(R,Se,ve,Z,nt.z,null)}}const pe=R.children;for(let Se=0,ve=pe.length;Se<ve;Se++)Pc(pe[Se],j,Z,$)}function i0(R,j,Z,$){const{opaque:X,transmissive:pe,transparent:Se}=R;w.setupLightsView(Z),Ae===!0&&we.setGlobalState(_.clippingPlanes,Z),$&&be.viewport(H.copy($)),X.length>0&&il(X,j,Z),pe.length>0&&il(pe,j,Z),Se.length>0&&il(Se,j,Z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function r0(R,j,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const Ge=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new Ci(1,1,{generateMipmaps:!0,type:Ge?er:Nn,minFilter:ss,samples:ct.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const pe=w.state.transmissionRenderTarget[$.id],Se=$.viewport||H;pe.setSize(Se.z*_.transmissionResolutionScale,Se.w*_.transmissionResolutionScale);const ve=_.getRenderTarget(),Te=_.getActiveCubeFace(),De=_.getActiveMipmapLevel();_.setRenderTarget(pe),_.getClearColor(O),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),ze&&de.render(Z);const Ue=_.toneMapping;_.toneMapping=Ai;const Le=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),Ae===!0&&we.setGlobalState(_.clippingPlanes,$),il(R,Z,$),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let at=0,Et=j.length;at<Et;at++){const Tt=j[at],{object:ut,geometry:Ie,material:rt,group:Qe}=Tt;if(rt.side===Hi&&ut.layers.test($.layers)){const bn=rt.side;rt.side=Cn,rt.needsUpdate=!0,s0(ut,Z,$,Ie,rt,Qe),rt.side=bn,rt.needsUpdate=!0,Ge=!0}}Ge===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}_.setRenderTarget(ve,Te,De),_.setClearColor(O,V),Le!==void 0&&($.viewport=Le),_.toneMapping=Ue}function il(R,j,Z){const $=j.isScene===!0?j.overrideMaterial:null;for(let X=0,pe=R.length;X<pe;X++){const Se=R[X],{object:ve,geometry:Te,group:De}=Se;let Ue=Se.material;Ue.allowOverride===!0&&$!==null&&(Ue=$),ve.layers.test(Z.layers)&&s0(ve,j,Z,Te,Ue,De)}}function s0(R,j,Z,$,X,pe){R.onBeforeRender(_,j,Z,$,X,pe),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(_,j,Z,$,R,pe),X.transparent===!0&&X.side===Hi&&X.forceSinglePass===!1?(X.side=Cn,X.needsUpdate=!0,_.renderBufferDirect(Z,j,$,X,R,pe),X.side=Lr,X.needsUpdate=!0,_.renderBufferDirect(Z,j,$,X,R,pe),X.side=Hi):_.renderBufferDirect(Z,j,$,X,R,pe),R.onAfterRender(_,j,Z,$,X,pe)}function rl(R,j,Z){j.isScene!==!0&&(j=lt);const $=A.get(R),X=w.state.lights,pe=w.state.shadowsArray,Se=X.state.version,ve=Ce.getParameters(R,X.state,pe,j,Z),Te=Ce.getProgramCacheKey(ve);let De=$.programs;$.environment=R.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(R.isMeshStandardMaterial?ie:ee).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,De===void 0&&(R.addEventListener("dispose",pi),De=new Map,$.programs=De);let Ue=De.get(Te);if(Ue!==void 0){if($.currentProgram===Ue&&$.lightsStateVersion===Se)return a0(R,ve),Ue}else ve.uniforms=Ce.getUniforms(R),R.onBeforeCompile(ve,_),Ue=Ce.acquireProgram(ve,Te),De.set(Te,Ue),$.uniforms=ve.uniforms;const Le=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Le.clippingPlanes=we.uniform),a0(R,ve),$.needsLights=M1(R),$.lightsStateVersion=Se,$.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMap.value=X.state.directionalShadowMap,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotShadowMap.value=X.state.spotShadowMap,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMap.value=X.state.pointShadowMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Ue,$.uniformsList=null,Ue}function o0(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Su.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function a0(R,j){const Z=A.get(R);Z.outputColorSpace=j.outputColorSpace,Z.batching=j.batching,Z.batchingColor=j.batchingColor,Z.instancing=j.instancing,Z.instancingColor=j.instancingColor,Z.instancingMorph=j.instancingMorph,Z.skinning=j.skinning,Z.morphTargets=j.morphTargets,Z.morphNormals=j.morphNormals,Z.morphColors=j.morphColors,Z.morphTargetsCount=j.morphTargetsCount,Z.numClippingPlanes=j.numClippingPlanes,Z.numIntersection=j.numClipIntersection,Z.vertexAlphas=j.vertexAlphas,Z.vertexTangents=j.vertexTangents,Z.toneMapping=j.toneMapping}function x1(R,j,Z,$,X){j.isScene!==!0&&(j=lt),W.resetTextureUnits();const pe=j.fog,Se=$.isMeshStandardMaterial?j.environment:null,ve=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Eo,Te=($.isMeshStandardMaterial?ie:ee).get($.envMap||Se),De=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ue=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!Z.morphAttributes.position,Ge=!!Z.morphAttributes.normal,at=!!Z.morphAttributes.color;let Et=Ai;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=_.toneMapping);const Tt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ut=Tt!==void 0?Tt.length:0,Ie=A.get($),rt=w.state.lights;if(Ae===!0&&(Ze===!0||R!==k)){const un=R===k&&$.id===U;we.setState($,R,un)}let Qe=!1;$.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==rt.state.version||Ie.outputColorSpace!==ve||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==Te||$.fog===!0&&Ie.fog!==pe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==we.numPlanes||Ie.numIntersection!==we.numIntersection)||Ie.vertexAlphas!==De||Ie.vertexTangents!==Ue||Ie.morphTargets!==Le||Ie.morphNormals!==Ge||Ie.morphColors!==at||Ie.toneMapping!==Et||Ie.morphTargetsCount!==ut)&&(Qe=!0):(Qe=!0,Ie.__version=$.version);let bn=Ie.currentProgram;Qe===!0&&(bn=rl($,j,X));let _s=!1,Rn=!1,No=!1;const dt=bn.getUniforms(),yn=Ie.uniforms;if(be.useProgram(bn.program)&&(_s=!0,Rn=!0,No=!0),$.id!==U&&(U=$.id,Rn=!0),_s||k!==R){be.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),dt.setValue(z,"projectionMatrix",R.projectionMatrix),dt.setValue(z,"viewMatrix",R.matrixWorldInverse);const xn=dt.map.cameraPosition;xn!==void 0&&xn.setValue(z,qe.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&dt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&dt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),k!==R&&(k=R,Rn=!0,No=!0)}if(Ie.needsLights&&(rt.state.directionalShadowMap.length>0&&dt.setValue(z,"directionalShadowMap",rt.state.directionalShadowMap,W),rt.state.spotShadowMap.length>0&&dt.setValue(z,"spotShadowMap",rt.state.spotShadowMap,W),rt.state.pointShadowMap.length>0&&dt.setValue(z,"pointShadowMap",rt.state.pointShadowMap,W)),X.isSkinnedMesh){dt.setOptional(z,X,"bindMatrix"),dt.setOptional(z,X,"bindMatrixInverse");const un=X.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),dt.setValue(z,"boneTexture",un.boneTexture,W))}X.isBatchedMesh&&(dt.setOptional(z,X,"batchingTexture"),dt.setValue(z,"batchingTexture",X._matricesTexture,W),dt.setOptional(z,X,"batchingIdTexture"),dt.setValue(z,"batchingIdTexture",X._indirectTexture,W),dt.setOptional(z,X,"batchingColorTexture"),X._colorsTexture!==null&&dt.setValue(z,"batchingColorTexture",X._colorsTexture,W));const zn=Z.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&He.update(X,Z,bn),(Rn||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,dt.setValue(z,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(yn.envMap.value=Te,yn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(yn.envMapIntensity.value=j.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=FN()),Rn&&(dt.setValue(z,"toneMappingExposure",_.toneMappingExposure),Ie.needsLights&&S1(yn,No),pe&&$.fog===!0&&Fe.refreshFogUniforms(yn,pe),Fe.refreshMaterialUniforms(yn,$,re,te,w.state.transmissionRenderTarget[R.id]),Su.upload(z,o0(Ie),yn,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Su.upload(z,o0(Ie),yn,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&dt.setValue(z,"center",X.center),dt.setValue(z,"modelViewMatrix",X.modelViewMatrix),dt.setValue(z,"normalMatrix",X.normalMatrix),dt.setValue(z,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const un=$.uniformsGroups;for(let xn=0,Dc=un.length;xn<Dc;xn++){const kr=un[xn];se.update(kr,bn),se.bind(kr,bn)}}return bn}function S1(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function M1(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,j,Z){const $=A.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),A.get(R.texture).__webglTexture=j,A.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const Z=A.get(R);Z.__webglFramebuffer=j,Z.__useDefaultFramebuffer=j===void 0};const E1=z.createFramebuffer();this.setRenderTarget=function(R,j=0,Z=0){L=R,T=j,I=Z;let $=null,X=!1,pe=!1;if(R){const ve=A.get(R);if(ve.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(z.FRAMEBUFFER,ve.__webglFramebuffer),H.copy(R.viewport),B.copy(R.scissor),P=R.scissorTest,be.viewport(H),be.scissor(B),be.setScissorTest(P),U=-1;return}else if(ve.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(ve.__hasExternalTextures)W.rebindTextures(R,A.get(R.texture).__webglTexture,A.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ue=R.depthTexture;if(ve.__boundDepthTexture!==Ue){if(Ue!==null&&A.has(Ue)&&(R.width!==Ue.image.width||R.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Te=R.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(pe=!0);const De=A.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(De[j])?$=De[j][Z]:$=De[j],X=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?$=A.get(R).__webglMultisampledFramebuffer:Array.isArray(De)?$=De[Z]:$=De,H.copy(R.viewport),B.copy(R.scissor),P=R.scissorTest}else H.copy(K).multiplyScalar(re).floor(),B.copy(J).multiplyScalar(re).floor(),P=ge;if(Z!==0&&($=E1),be.bindFramebuffer(z.FRAMEBUFFER,$)&&be.drawBuffers(R,$),be.viewport(H),be.scissor(B),be.setScissorTest(P),X){const ve=A.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve.__webglTexture,Z)}else if(pe){const ve=j;for(let Te=0;Te<R.textures.length;Te++){const De=A.get(R.textures[Te]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Te,De.__webglTexture,Z,ve)}}else if(R!==null&&Z!==0){const ve=A.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ve.__webglTexture,Z)}U=-1},this.readRenderTargetPixels=function(R,j,Z,$,X,pe,Se,ve=0){if(!(R&&R.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=A.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){be.bindFramebuffer(z.FRAMEBUFFER,Te);try{const De=R.textures[ve],Ue=De.format,Le=De.type;if(!ct.textureFormatReadable(Ue)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Le)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-$&&Z>=0&&Z<=R.height-X&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve),z.readPixels(j,Z,$,X,le.convert(Ue),le.convert(Le),pe))}finally{const De=L!==null?A.get(L).__webglFramebuffer:null;be.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(R,j,Z,$,X,pe,Se,ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=A.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(j>=0&&j<=R.width-$&&Z>=0&&Z<=R.height-X){be.bindFramebuffer(z.FRAMEBUFFER,Te);const De=R.textures[ve],Ue=De.format,Le=De.type;if(!ct.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ge),z.bufferData(z.PIXEL_PACK_BUFFER,pe.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve),z.readPixels(j,Z,$,X,le.convert(Ue),le.convert(Le),0);const at=L!==null?A.get(L).__webglFramebuffer:null;be.bindFramebuffer(z.FRAMEBUFFER,at);const Et=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await nP(z,Et,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ge),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,pe),z.deleteBuffer(Ge),z.deleteSync(Et),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,Z=0){const $=Math.pow(2,-Z),X=Math.floor(R.image.width*$),pe=Math.floor(R.image.height*$),Se=j!==null?j.x:0,ve=j!==null?j.y:0;W.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Se,ve,X,pe),be.unbindTexture()};const T1=z.createFramebuffer(),w1=z.createFramebuffer();this.copyTextureToTexture=function(R,j,Z=null,$=null,X=0,pe=null){pe===null&&(X!==0?(Ha("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=X,X=0):pe=0);let Se,ve,Te,De,Ue,Le,Ge,at,Et;const Tt=R.isCompressedTexture?R.mipmaps[pe]:R.image;if(Z!==null)Se=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,De=Z.min.x,Ue=Z.min.y,Le=Z.isBox3?Z.min.z:0;else{const zn=Math.pow(2,-X);Se=Math.floor(Tt.width*zn),ve=Math.floor(Tt.height*zn),R.isDataArrayTexture?Te=Tt.depth:R.isData3DTexture?Te=Math.floor(Tt.depth*zn):Te=1,De=0,Ue=0,Le=0}$!==null?(Ge=$.x,at=$.y,Et=$.z):(Ge=0,at=0,Et=0);const ut=le.convert(j.format),Ie=le.convert(j.type);let rt;j.isData3DTexture?(W.setTexture3D(j,0),rt=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),rt=z.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),rt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const Qe=z.getParameter(z.UNPACK_ROW_LENGTH),bn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),_s=z.getParameter(z.UNPACK_SKIP_PIXELS),Rn=z.getParameter(z.UNPACK_SKIP_ROWS),No=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Tt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,De),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ue),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Le);const dt=R.isDataArrayTexture||R.isData3DTexture,yn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const zn=A.get(R),un=A.get(j),xn=A.get(zn.__renderTarget),Dc=A.get(un.__renderTarget);be.bindFramebuffer(z.READ_FRAMEBUFFER,xn.__webglFramebuffer),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,Dc.__webglFramebuffer);for(let kr=0;kr<Te;kr++)dt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,A.get(R).__webglTexture,X,Le+kr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,A.get(j).__webglTexture,pe,Et+kr)),z.blitFramebuffer(De,Ue,Se,ve,Ge,at,Se,ve,z.DEPTH_BUFFER_BIT,z.NEAREST);be.bindFramebuffer(z.READ_FRAMEBUFFER,null),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||A.has(R)){const zn=A.get(R),un=A.get(j);be.bindFramebuffer(z.READ_FRAMEBUFFER,T1),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,w1);for(let xn=0;xn<Te;xn++)dt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zn.__webglTexture,X,Le+xn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,zn.__webglTexture,X),yn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,un.__webglTexture,pe,Et+xn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,un.__webglTexture,pe),X!==0?z.blitFramebuffer(De,Ue,Se,ve,Ge,at,Se,ve,z.COLOR_BUFFER_BIT,z.NEAREST):yn?z.copyTexSubImage3D(rt,pe,Ge,at,Et+xn,De,Ue,Se,ve):z.copyTexSubImage2D(rt,pe,Ge,at,De,Ue,Se,ve);be.bindFramebuffer(z.READ_FRAMEBUFFER,null),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(rt,pe,Ge,at,Et,Se,ve,Te,ut,Ie,Tt.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(rt,pe,Ge,at,Et,Se,ve,Te,ut,Tt.data):z.texSubImage3D(rt,pe,Ge,at,Et,Se,ve,Te,ut,Ie,Tt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,pe,Ge,at,Se,ve,ut,Ie,Tt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,pe,Ge,at,Tt.width,Tt.height,ut,Tt.data):z.texSubImage2D(z.TEXTURE_2D,pe,Ge,at,Se,ve,ut,Ie,Tt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Qe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_s),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,No),pe===0&&j.generateMipmaps&&z.generateMipmap(rt),be.unbindTexture()},this.initRenderTarget=function(R){A.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),be.unbindTexture()},this.resetState=function(){T=0,I=0,L=null,be.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}function kN({containerRef:t,isSpeaking:e}){const n=F.useRef(null),i=F.useRef(null),r=F.useRef(null),s=F.useRef(0),o=F.useRef(0),a=F.useRef(0),u=F.useRef(0),c=F.useRef(0),f=F.useRef(0),d=F.useRef(null),h=F.useRef(null),g=F.useRef(null),x=F.useRef(null),M=F.useCallback(()=>{const y=t.current;if(!y)return;const l=et.DISPLAY_SIZE,p=new bP;p.background=new Xe(1710638),n.current=p;const m=new Xn(40,1,.1,1e3);m.position.set(0,0,5),m.lookAt(0,0,0),i.current=m;const E=new ON({antialias:!0,alpha:!0});E.setSize(l,l),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.appendChild(E.domElement),E.domElement.style.borderRadius="1rem",r.current=E;const w=new eo;p.add(w),d.current=w;const C=new VP(16777215,.6);p.add(C);const b=new BP(16777215,.8);b.position.set(3,4,5),p.add(b);const v=new ql({color:16767916}),_=new Js({color:16777215}),S=new Js({color:4886692}),T=new Js({color:1710618}),I=new ql({color:16746649}),L=new ql({color:2955280}),U=new Rt(new Qr(1,32,32),v);U.scale.set(1,1.1,.9),w.add(U);const k=te=>{const re=new eo;re.position.set(te,.3,.85);const ue=new Rt(new Qr(.2,16,16),_);ue.scale.set(1,.8,.6),re.add(ue);const xe=new Rt(new va(.12,24),S);xe.position.z=.12,re.add(xe);const K=new Rt(new va(.06,16),T);K.position.z=.13,re.add(K);const J=new Rt(new va(.03,8),new Js({color:16777215}));return J.position.set(-.04,.04,.14),re.add(J),w.add(re),re};g.current=k(-.35),x.current=k(.35);const H=te=>{const re=new Rt(new Lo(.3,.06,.08),L);re.position.set(te,.6,.82),re.rotation.z=te<0?.15:-.15,w.add(re)};H(-.35),H(.35);const B=new Rt(new Zm(.08,.25,8),v);B.position.set(0,0,1),B.rotation.x=Math.PI/2,w.add(B);const P=new Rt(new Qm(.25,.08,8,16,Math.PI),I);P.position.set(0,-.3,.85),P.rotation.z=Math.PI,w.add(P),h.current=P;const O=new Rt(new Qr(1.15,32,16,0,Math.PI*2,0,Math.PI*.6),L);O.position.set(0,.15,0),O.scale.set(.95,1,.95),w.add(O),[-.9,.9].forEach(te=>{const re=new Rt(new Qr(.25,16,16),L);re.position.set(te,.1,.2),re.scale.set(.6,1.3,.8),w.add(re)});const V=new Rt(new wc(.3,.35,.6,16),v);V.position.set(0,-1.2,0),w.add(V);const q=new Rt(new Qr(1,16,8,0,Math.PI*2,0,Math.PI*.5),new ql({color:3820122}));q.position.set(0,-1.6,0),q.scale.set(1.5,.8,1),w.add(q),f.current=performance.now()},[t]);F.useEffect(()=>(M(),()=>{const y=t.current;r.current&&y&&r.current.domElement.parentNode===y&&(y.removeChild(r.current.domElement),r.current.dispose()),cancelAnimationFrame(s.current)}),[M,t]),F.useEffect(()=>{const y=r.current,l=n.current,p=i.current,m=d.current,E=h.current;if(!y||!l||!p||!m)return;let w=!0;const C=()=>{if(!w)return;const b=performance.now(),v=(b-f.current)/1e3;if(e){const _=Math.abs(Math.sin(v*7.3))*.35,S=Math.abs(Math.sin(v*11.7))*.25,T=Math.abs(Math.sin(v*4.8))*.2,I=Om(_+S+T,0,1);o.current=gt(o.current,I,.3)}else o.current=gt(o.current,0,dn.MOUTH_SMOOTH);if(E){const _=o.current;E.scale.set(1+_*.3,1+_*.5,1),E.position.y=-.3-_*.1}if(b>c.current&&u.current===0&&(u.current=1,setTimeout(()=>{u.current=0},dn.BLINK_DURATION_MS),c.current=b+dn.BLINK_MIN_MS+Math.random()*(dn.BLINK_MAX_MS-dn.BLINK_MIN_MS)),a.current=gt(a.current,u.current,.5),g.current&&x.current){const _=1-a.current*.9;g.current.scale.y=_,x.current.scale.y=_}if(m.rotation.y=Math.sin(v*.6)*.05,m.rotation.x=Math.sin(v*.4)*.02,m.position.y=Math.sin(v*.9)*.02,m.scale.set(1+Math.sin(v*.8)*.01,1+Math.sin(v*.8)*.015,1+Math.sin(v*.8)*.01),e){const _=.5+Math.sin(v*3)*.1;l.background=new Xe().setHSL(.58,.4,.08+_*.02)}else l.background=new Xe(1710638);y.render(l,p),s.current=requestAnimationFrame(C)};return s.current=requestAnimationFrame(C),()=>{w=!1,cancelAnimationFrame(s.current)}},[e])}function BN({isSpeaking:t}){const e=F.useRef(null);return kN({containerRef:e,isSpeaking:t}),N.jsx("div",{ref:e,className:"relative z-10 overflow-hidden rounded-2xl shadow-2xl",style:{width:et.DISPLAY_SIZE,height:et.DISPLAY_SIZE,borderRadius:"1rem"}})}const qt={base:"#C9A876",light:"#D9BC8E",mid:"#B89860",shadow:"#A08050"};function VN({canvasRef:t,isSpeaking:e}){const n=F.useRef(0),i=F.useRef(0),r=F.useRef(0),s=F.useRef(0),o=F.useRef({x:0,y:0}),a=F.useRef({x:0,y:0}),u=F.useRef(0),c=F.useRef(0),f=F.useRef(0),d=F.useRef(!1),h=F.useRef(0),g=F.useRef(null),x=F.useRef({width:1,roundness:0,jawDrop:0});F.useEffect(()=>{d.current=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h.current=performance.now()},[]);const M=F.useCallback(l=>{const p=et.SIZE,m=p/2,E=p/2-p*.02;l.clearRect(0,0,p,p);const w=l.createLinearGradient(0,0,0,p);w.addColorStop(0,"#E8EEF2"),w.addColorStop(1,"#D5DEE5"),l.fillStyle=w,l.fillRect(0,0,p,p),l.save(),l.globalAlpha=.02;for(let P=0;P<300;P++)l.fillStyle=Math.random()>.5?"#FFF":"#000",l.fillRect(Math.random()*p,Math.random()*p,1,1);l.restore();const C=p*.1,b=E+p*.2,v=p,_=l.createLinearGradient(m-C,b,m+C,b);_.addColorStop(0,qt.shadow),_.addColorStop(.3,qt.mid),_.addColorStop(.7,qt.mid),_.addColorStop(1,qt.shadow),l.fillStyle=_,l.beginPath(),l.moveTo(m-C*.9,b),l.lineTo(m-C*1.3,v),l.lineTo(m+C*1.3,v),l.lineTo(m+C*.9,b),l.closePath(),l.fill(),l.fillStyle="#1C1C28",l.beginPath(),l.moveTo(m-C*1.4,v-p*.05),l.quadraticCurveTo(m-p*.45,v-p*.03,0,v),l.lineTo(p,v),l.quadraticCurveTo(m+p*.45,v-p*.03,m+C*1.4,v-p*.05),l.closePath(),l.fill(),l.fillStyle="#F8F8F8",l.beginPath(),l.moveTo(m-C*.7,b+p*.02),l.lineTo(m-C*1.1,b+p*.08),l.lineTo(m-C*.85,b+p*.12),l.lineTo(m-C*.5,b+p*.06),l.closePath(),l.fill(),l.beginPath(),l.moveTo(m+C*.7,b+p*.02),l.lineTo(m+C*1.1,b+p*.08),l.lineTo(m+C*.85,b+p*.12),l.lineTo(m+C*.5,b+p*.06),l.closePath(),l.fill(),l.strokeStyle="rgba(0,0,0,0.15)",l.lineWidth=1.5,l.beginPath(),l.moveTo(m-C*.7,b+p*.02),l.lineTo(m-C*.5,b+p*.06),l.stroke(),l.beginPath(),l.moveTo(m+C*.7,b+p*.02),l.lineTo(m+C*.5,b+p*.06),l.stroke(),l.fillStyle="#0A0503",l.beginPath(),l.ellipse(m,E-p*.14,p*.4,p*.34,0,0,Math.PI*2),l.fill(),l.beginPath(),l.ellipse(m-p*.15,E-p*.22,p*.12,p*.15,-.3,0,Math.PI*2),l.fill(),l.beginPath(),l.ellipse(m+p*.15,E-p*.22,p*.12,p*.15,.3,0,Math.PI*2),l.fill(),l.beginPath(),l.ellipse(m-p*.32,E+p*.02,p*.08,p*.2,.15,0,Math.PI*2),l.fill(),l.beginPath(),l.ellipse(m+p*.32,E+p*.02,p*.08,p*.2,-.15,0,Math.PI*2),l.fill(),l.fillStyle=qt.shadow,l.beginPath(),l.ellipse(m-p*.3,E,p*.03,p*.055,-.1,0,Math.PI*2),l.fill(),l.beginPath(),l.ellipse(m+p*.3,E,p*.03,p*.055,.1,0,Math.PI*2),l.fill();const S=p*.27,T=p*.36;l.save(),l.shadowColor="rgba(0,0,0,0.12)",l.shadowBlur=8,l.shadowOffsetX=2,l.shadowOffsetY=3,l.fillStyle=qt.base,l.beginPath(),l.ellipse(m,E,S,T,0,0,Math.PI*2),l.fill(),l.restore();const I=l.createRadialGradient(m-S*.3,E-T*.2,S*.1,m,E,T*1.1);I.addColorStop(0,qt.light),I.addColorStop(.35,qt.base),I.addColorStop(.75,qt.mid),I.addColorStop(1,qt.shadow),l.fillStyle=I,l.beginPath(),l.moveTo(m-S*.75,E-T*.5),l.quadraticCurveTo(m-S*.82,E-T*.82,m,E-T*.88),l.quadraticCurveTo(m+S*.82,E-T*.82,m+S*.75,E-T*.5),l.quadraticCurveTo(m+S*.95,E-T*.05,m+S*.88,E+T*.12),l.lineTo(m+S*.4,E+T*.38),l.quadraticCurveTo(m,E+T*.48,m-S*.4,E+T*.38),l.lineTo(m-S*.88,E+T*.12),l.quadraticCurveTo(m-S*.95,E-T*.05,m-S*.75,E-T*.5),l.closePath(),l.fill(),l.strokeStyle="rgba(130,100,60,0.18)",l.lineWidth=2,l.beginPath(),l.moveTo(m-S*.88,E+T*.12),l.lineTo(m-S*.4,E+T*.38),l.stroke(),l.beginPath(),l.moveTo(m+S*.88,E+T*.12),l.lineTo(m+S*.4,E+T*.38),l.stroke(),l.fillStyle="rgba(180, 120, 90, 0.08)",l.beginPath(),l.ellipse(m-S*.48,E+T*.1,S*.18,T*.12,-.15,0,Math.PI*2),l.fill(),l.beginPath(),l.ellipse(m+S*.48,E+T*.1,S*.18,T*.12,.15,0,Math.PI*2),l.fill();const L=l.createRadialGradient(m,E-T*.35,2,m,E-T*.3,S*.5);L.addColorStop(0,"rgba(255,255,255,0.15)"),L.addColorStop(1,"transparent"),l.fillStyle=L,l.fillRect(m-S,E-T,S*2,T);const U=E+p*.02;l.fillStyle=qt.mid,l.beginPath(),l.moveTo(m-p*.008,U-p*.08),l.lineTo(m-p*.018,U+p*.015),l.lineTo(m-p*.025,U+p*.025),l.quadraticCurveTo(m-p*.015,U+p*.03,m,U+p*.032),l.quadraticCurveTo(m+p*.015,U+p*.03,m+p*.025,U+p*.025),l.lineTo(m+p*.018,U+p*.015),l.lineTo(m+p*.008,U-p*.08),l.closePath(),l.fill(),l.strokeStyle="rgba(255,255,255,0.15)",l.lineWidth=1.2,l.beginPath(),l.moveTo(m,U-p*.07),l.lineTo(m,U+p*.01),l.stroke(),l.strokeStyle="rgba(130,90,60,0.2)",l.lineWidth=1.8,l.beginPath(),l.moveTo(m-p*.018,U-p*.05),l.quadraticCurveTo(m-p*.022,U+p*.01,m-p*.025,U+p*.025),l.stroke();const k=l.createRadialGradient(m,U+p*.015,1,m,U+p*.015,p*.018);k.addColorStop(0,"rgba(255,255,255,0.12)"),k.addColorStop(1,qt.base),l.fillStyle=k,l.beginPath(),l.arc(m,U+p*.015,p*.018,0,Math.PI*2),l.fill(),l.fillStyle="rgba(100,60,40,0.35)",l.beginPath(),l.ellipse(m-p*.017,U+p*.028,p*.009,p*.006,-.3,0,Math.PI*2),l.fill(),l.beginPath(),l.ellipse(m+p*.017,U+p*.028,p*.009,p*.006,.3,0,Math.PI*2),l.fill(),l.fillStyle="rgba(80,50,30,0.25)",l.beginPath(),l.ellipse(m-p*.017,U+p*.027,p*.005,p*.003,-.3,0,Math.PI),l.fill(),l.beginPath(),l.ellipse(m+p*.017,U+p*.027,p*.005,p*.003,.3,0,Math.PI),l.fill(),l.strokeStyle="rgba(130,90,60,0.15)",l.lineWidth=1,l.beginPath(),l.moveTo(m-p*.025,U+p*.025),l.quadraticCurveTo(m,U+p*.032,m+p*.025,U+p*.025),l.stroke();const H=E-p*.095,B=p*.085;for(const P of[-1,1]){const O=m+P*B;l.save(),l.fillStyle="#1A0A05",l.beginPath(),l.moveTo(O-p*.055*P,H),l.quadraticCurveTo(O-p*.02*P,H-p*.01,O+p*.02*P,H-p*.008),l.quadraticCurveTo(O+p*.055*P,H-p*.003,O+p*.06*P,H+p*.002),l.lineTo(O+p*.055*P,H+p*.008),l.quadraticCurveTo(O+p*.02*P,H+p*.002,O-p*.02*P,H+p*.004),l.quadraticCurveTo(O-p*.055*P,H+p*.006,O-p*.055*P,H),l.closePath(),l.fill(),l.strokeStyle="#0A0503",l.lineWidth=.8,l.lineCap="round";const V=18;for(let q=0;q<V;q++){const te=q/V,re=O-p*.055*P+te*p*.115*P,ue=H-Math.sin(te*Math.PI)*p*.008,xe=-.4+te*.8,K=p*.008+Math.sin(te*Math.PI)*p*.004;l.globalAlpha=.3+Math.sin(te*Math.PI)*.5,l.beginPath(),l.moveTo(re,ue),l.lineTo(re+Math.cos(xe)*K*P*.4,ue+Math.sin(xe)*K),l.stroke()}l.restore()}l.fillStyle="#0A0503",l.beginPath(),l.moveTo(m-S*.8,E-T*.35),l.quadraticCurveTo(m-S*.9,E-T*.9,m-S*.25,E-T*.92),l.quadraticCurveTo(m-S*.05,E-T*1.05,m+S*.05,E-T*1.05),l.quadraticCurveTo(m+S*.25,E-T*.92,m+S*.9,E-T*.9),l.quadraticCurveTo(m+S*.8,E-T*.35,m+S*.65,E-T*.68),l.quadraticCurveTo(m,E-T*.75,m-S*.65,E-T*.68),l.closePath(),l.fill(),l.beginPath(),l.moveTo(m-S*.15,E-T*.85),l.quadraticCurveTo(m-S*.12,E-T*.75,m-S*.18,E-T*.65),l.lineTo(m-S*.14,E-T*.65),l.quadraticCurveTo(m-S*.08,E-T*.75,m-S*.1,E-T*.85),l.closePath(),l.fill(),l.beginPath(),l.moveTo(m+S*.15,E-T*.85),l.quadraticCurveTo(m+S*.12,E-T*.75,m+S*.18,E-T*.65),l.lineTo(m+S*.14,E-T*.65),l.quadraticCurveTo(m+S*.08,E-T*.75,m+S*.1,E-T*.85),l.closePath(),l.fill(),l.save(),l.strokeStyle="#2A1810",l.lineWidth=1.2,l.globalAlpha=.3;for(let P=0;P<12;P++){const O=m-S*.6+S*1.2*P/12,V=E-T*.85+Math.sin(P*.9)*T*.08;l.beginPath(),l.moveTo(O,V),l.quadraticCurveTo(O+Math.sin(P*.6)*S*.06,V+T*.12,O+Math.sin(P*.4)*S*.09,V+T*.25),l.stroke()}l.restore(),g.current=l.getImageData(0,0,p,p)},[]),y=F.useCallback(l=>{const p=et.SIZE,m=p/2,E=p/2-p*.03;g.current&&l.putImageData(g.current,0,0);const w=c.current*p*.002,C=E-p*.045+w,b=p*.08,v=i.current,_=o.current.x,S=o.current.y;for(const P of[-1,1]){const O=m+P*b,V=p*.048,q=p*.032,te=q*(1-v),re=l.createRadialGradient(O,C,0,O,C,V*1.5);if(re.addColorStop(0,qt.base),re.addColorStop(.7,qt.base),re.addColorStop(1,"transparent"),l.fillStyle=re,l.beginPath(),l.ellipse(O,C,V*1.4,q*1.8,0,0,Math.PI*2),l.fill(),l.fillStyle="rgba(120,80,60,0.1)",l.beginPath(),l.ellipse(O,C-q*.1,V*1.15,q*1.2,0,0,Math.PI*2),l.fill(),l.fillStyle="#F5F1ED",l.beginPath(),l.ellipse(O,C,V,Math.max(te,.5),0,0,Math.PI*2),l.fill(),te>1){const ue=l.createLinearGradient(O,C-te,O,C);ue.addColorStop(0,"rgba(200,190,180,0.4)"),ue.addColorStop(1,"transparent"),l.fillStyle=ue,l.beginPath(),l.ellipse(O,C,V,te,0,0,Math.PI*2),l.fill()}if(te>2){const ue=p*.018,xe=ue*.5,K=O+_*p*.006,J=C+S*p*.004,ge=l.createRadialGradient(K-.5,J-.5,xe*.3,K,J,ue);ge.addColorStop(0,"#6B4423"),ge.addColorStop(.4,"#3D2817"),ge.addColorStop(1,"#1F1508"),l.fillStyle=ge,l.beginPath(),l.arc(K,J,ue,0,Math.PI*2),l.fill(),l.save(),l.globalAlpha=.15,l.strokeStyle="#1F1508",l.lineWidth=.5;for(let Ne=0;Ne<Math.PI*2;Ne+=Math.PI/12)l.beginPath(),l.moveTo(K+Math.cos(Ne)*xe,J+Math.sin(Ne)*xe),l.lineTo(K+Math.cos(Ne)*ue*.9,J+Math.sin(Ne)*ue*.9),l.stroke();l.restore(),l.fillStyle="#1A1A1A",l.beginPath(),l.arc(K,J,xe,0,Math.PI*2),l.fill(),l.fillStyle="rgba(255,255,255,0.8)",l.beginPath(),l.arc(K-ue*.3,J-ue*.3,ue*.2,0,Math.PI*2),l.fill(),l.fillStyle="rgba(255,255,255,0.35)",l.beginPath(),l.arc(K+ue*.2,J+ue*.15,ue*.08,0,Math.PI*2),l.fill()}if(l.fillStyle=qt.base,l.beginPath(),l.ellipse(O,C-te*.3,V*1.05,q*1.05,0,Math.PI,Math.PI*2),l.ellipse(O,C,V*1.05,Math.max(te,.5),0,Math.PI*2,Math.PI),l.fill(),l.strokeStyle="rgba(120,80,60,0.15)",l.lineWidth=.8,l.beginPath(),l.ellipse(O,C-q*.7,V*1.05,q*.45,0,Math.PI*.85,Math.PI*.15,!0),l.stroke(),l.strokeStyle="rgba(26,16,8,0.7)",l.lineWidth=1.5,l.beginPath(),l.ellipse(O,C,V,Math.max(te,.5),0,Math.PI,Math.PI*2),l.stroke(),te>1.5){l.strokeStyle="rgba(26,16,8,0.5)",l.lineWidth=.8;for(let ue=0;ue<6;ue++){const xe=Math.PI+Math.PI*(ue+.5)/6,K=O+Math.cos(xe)*V,J=C+Math.sin(xe)*Math.max(te,.5),ge=p*.008*(1-Math.abs(ue-3)/6*.5);l.beginPath(),l.moveTo(K,J),l.lineTo(K+Math.cos(xe-.1*P)*ge,J+Math.sin(xe-.1*P)*ge),l.stroke()}}l.strokeStyle="rgba(26,16,8,0.2)",l.lineWidth=.6,l.beginPath(),l.ellipse(O,C,V*.9,Math.max(te*.9,.5),0,0,Math.PI),l.stroke()}const T=E+p*.1+w,I=n.current,L=x.current,U=p*.055*L.width,k=I*p*.045*(.5+L.jawDrop*.5),H=U*(1-L.roundness*.3),B=l.createRadialGradient(m,T,0,m,T,U*2);if(B.addColorStop(0,qt.base),B.addColorStop(.6,qt.base),B.addColorStop(1,"transparent"),l.fillStyle=B,l.beginPath(),l.ellipse(m,T,U*1.8,p*.04,0,0,Math.PI*2),l.fill(),k>1.5){l.fillStyle="#B86868",l.beginPath(),l.moveTo(m-H,T),l.quadraticCurveTo(m-H*.5,T-k*.15,m-H*.12,T-k*.08),l.quadraticCurveTo(m,T-k*.18,m+H*.12,T-k*.08),l.quadraticCurveTo(m+H*.5,T-k*.15,m+H,T),l.quadraticCurveTo(m+H*.6,T+k*.88,m,T+k),l.quadraticCurveTo(m-H*.6,T+k*.88,m-H,T),l.closePath(),l.fill(),l.strokeStyle="#905050",l.lineWidth=1.5,l.beginPath(),l.moveTo(m-H,T),l.quadraticCurveTo(m-H*.5,T-k*.15,m-H*.12,T-k*.08),l.quadraticCurveTo(m,T-k*.18,m+H*.12,T-k*.08),l.quadraticCurveTo(m+H*.5,T-k*.15,m+H,T),l.stroke();const P=H*.8,O=k*.7;if(l.fillStyle="#3A1818",l.beginPath(),l.ellipse(m,T+O*.3,P,O*.45,0,0,Math.PI*2),l.fill(),k>3){l.fillStyle="#F0EDE8";const V=P*.8,q=Math.min(k*.2,p*.01);l.beginPath(),l.moveTo(m-V,T+.5),l.lineTo(m+V,T+.5),l.lineTo(m+V,T+.5+q),l.lineTo(m-V,T+.5+q),l.closePath(),l.fill()}k>p*.02&&(l.fillStyle="#B06060",l.beginPath(),l.ellipse(m,T+k*.5,P*.45,k*.18,0,0,Math.PI),l.fill()),l.fillStyle="rgba(255,255,255,0.1)",l.beginPath(),l.ellipse(m,T-k*.05,H*.4,k*.08,0,Math.PI,Math.PI*2),l.fill(),k>3&&(l.fillStyle="rgba(130,90,60,0.12)",l.beginPath(),l.arc(m-H*1.15,T+k*.15,p*.012,0,Math.PI*2),l.fill(),l.beginPath(),l.arc(m+H*1.15,T+k*.15,p*.012,0,Math.PI*2),l.fill())}else l.strokeStyle="#885050",l.lineWidth=1.5,l.beginPath(),l.moveTo(m-U,T+.5),l.quadraticCurveTo(m-U*.4,T-.5,m-U*.1,T+.5),l.quadraticCurveTo(m,T-1,m+U*.1,T+.5),l.quadraticCurveTo(m+U*.4,T-.5,m+U,T+.5),l.stroke(),l.fillStyle="rgba(184,104,104,0.4)",l.beginPath(),l.moveTo(m-U,T+.5),l.quadraticCurveTo(m-U*.4,T-2.5,m,T-3),l.quadraticCurveTo(m+U*.4,T-2.5,m+U,T+.5),l.quadraticCurveTo(m+U*.4,T-.5,m,T-1),l.quadraticCurveTo(m-U*.4,T-.5,m-U,T+.5),l.fill(),l.fillStyle="rgba(200,120,120,0.35)",l.beginPath(),l.moveTo(m-U*.85,T+1),l.quadraticCurveTo(m,T+p*.018,m+U*.85,T+1),l.quadraticCurveTo(m,T+.5,m-U*.85,T+1),l.fill(),l.fillStyle="rgba(255,255,255,0.12)",l.beginPath(),l.ellipse(m,T+p*.007,U*.3,p*.004,0,0,Math.PI*2),l.fill(),l.fillStyle="rgba(130,90,60,0.06)",l.beginPath(),l.arc(m-U*1.25,T+p*.01,p*.01,0,Math.PI*2),l.fill(),l.beginPath(),l.arc(m+U*1.25,T+p*.01,p*.01,0,Math.PI*2),l.fill();e&&(l.save(),l.shadowColor="rgba(6,182,212,0.15)",l.shadowBlur=15,l.strokeStyle="rgba(6,182,212,0.08)",l.lineWidth=1.2,l.beginPath(),l.ellipse(m,E,p*.35,p*.42,0,0,Math.PI*2),l.stroke(),l.restore())},[e]);F.useEffect(()=>{const l=t.current;if(!l)return;const p=l.getContext("2d");if(!p)return;l.width=et.SIZE,l.height=et.SIZE,M(p);let m=!0;const E=()=>{if(!m)return;const w=performance.now(),C=(w-h.current)/1e3;if(e){const b=Math.abs(Math.sin(C*7.3))*.3,v=Math.abs(Math.sin(C*11.7))*.25,_=Math.abs(Math.sin(C*4.8))*.2,S=Math.abs(Math.sin(C*16.1))*.15,T=Math.max(0,Math.sin(C*2.3))*.1,I=Om(b+v+_+S+T,0,1);n.current=gt(n.current,I,.3);const L=C*3.7,U=Math.floor(L)%5,k=L-Math.floor(L),H=[{width:1,roundness:0,jawDrop:.8},{width:.7,roundness:.8,jawDrop:.6},{width:1.2,roundness:0,jawDrop:.4},{width:.8,roundness:.5,jawDrop:.9},{width:1,roundness:.2,jawDrop:.5}],B=H[U],P=H[(U+1)%H.length];x.current={width:gt(B.width,P.width,k),roundness:gt(B.roundness,P.roundness,k),jawDrop:gt(B.jawDrop,P.jawDrop,k)}}else n.current=gt(n.current,0,dn.MOUTH_SMOOTH),x.current={width:gt(x.current.width,1,.1),roundness:gt(x.current.roundness,0,.1),jawDrop:gt(x.current.jawDrop,0,.1)};w>s.current&&r.current===0&&(r.current=1,setTimeout(()=>{r.current=0},dn.BLINK_DURATION_MS),s.current=w+dn.BLINK_MIN_MS+Math.random()*(dn.BLINK_MAX_MS-dn.BLINK_MIN_MS)),i.current=gt(i.current,r.current,.45),w>u.current&&(a.current={x:(Math.random()-.5)*2,y:(Math.random()-.5)*1.5},u.current=w+1500+Math.random()*3e3),o.current={x:gt(o.current.x,a.current.x,.04),y:gt(o.current.y,a.current.y,.04)},c.current=Math.sin(C*.8)*.6,y(p),f.current=requestAnimationFrame(E)};return f.current=requestAnimationFrame(E),()=>{m=!1,cancelAnimationFrame(f.current)}},[t,e,M,y])}function zN({isSpeaking:t}){const e=F.useRef(null);return VN({canvasRef:e,isSpeaking:t}),N.jsx("canvas",{ref:e,width:et.SIZE,height:et.SIZE,className:"relative z-10 rounded-2xl shadow-2xl",style:{width:et.DISPLAY_SIZE,height:et.DISPLAY_SIZE,borderRadius:"1rem",imageRendering:"auto"}})}const Kl="/assets/avatar.gif",HN=5e3;function GN({isSpeaking:t}){const e=F.useRef(null),n=F.useRef(null),i=F.useRef(0),r=F.useRef(null),[s,o]=F.useState(!1);return F.useEffect(()=>{const a=e.current;if(!a)return;const u=a.getContext("2d");if(!u)return;const c=new Image;c.crossOrigin="anonymous",c.onload=()=>{a.width=et.SIZE,a.height=et.SIZE;const f=c.width/c.height,d=1;let h,g,x,M;f>d?(g=et.SIZE,h=et.SIZE*f,x=(et.SIZE-h)/2,M=0):(h=et.SIZE,g=et.SIZE/f,x=0,M=(et.SIZE-g)/2),u.drawImage(c,x,M,h,g)},c.src=Kl},[]),F.useEffect(()=>(t?(i.current=0,o(!0),n.current&&(n.current.src=`${Kl}?t=${Date.now()}`),console.log("[GifAvatar] 🎬 GIF started for speech"),r.current=window.setInterval(()=>{n.current&&(i.current++,n.current.src=`${Kl}?t=${Date.now()}`,console.log(`[GifAvatar] 🔄 GIF looped #${i.current}`))},HN)):(r.current&&(clearInterval(r.current),r.current=null),o(!1),i.current>0&&console.log(`[GifAvatar] 🛑 Speech stopped. GIF looped ${i.current} times`),i.current=0),()=>{r.current&&clearInterval(r.current)}),[t]),N.jsxs("div",{style:{width:`${et.DISPLAY_SIZE}px`,height:`${et.DISPLAY_SIZE}px`,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",overflow:"hidden",background:"linear-gradient(135deg, #1a1a2e 0%, #0f1419 100%)"},children:[N.jsx("canvas",{ref:e,width:et.SIZE,height:et.SIZE,style:{width:"100%",height:"100%",display:s?"none":"block"}}),N.jsx("img",{ref:n,src:Kl,alt:"Animated Avatar",style:{width:"100%",height:"100%",objectFit:"cover",display:s?"block":"none"}}),t&&N.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:"50%",border:"4px solid rgba(6,182,212,0.5)",boxShadow:"0 0 20px rgba(6,182,212,0.8)",pointerEvents:"none",animation:"pulse 2s ease-in-out infinite"}}),N.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
      `})]})}const WN=F.memo(function({isSpeaking:e}){const n=Ut(o=>o.avatarType),r=Ut(o=>o.status)==="listening",s=()=>e?{boxShadow:"0 0 30px 10px rgba(6, 182, 212, 0.6), 0 0 60px 20px rgba(6, 182, 212, 0.3)"}:r?{boxShadow:"0 0 25px 8px rgba(59, 130, 246, 0.5), 0 0 50px 15px rgba(59, 130, 246, 0.2)"}:{boxShadow:"0 0 20px 5px rgba(59, 130, 246, 0.2), 0 0 40px 10px rgba(6, 182, 212, 0.1)"};return N.jsx("figure",{className:"relative flex items-center justify-center",role:"img","aria-label":`Voice avatar – ${n} mode`,children:N.jsxs("div",{className:`
          relative overflow-hidden rounded-full
          transition-all duration-500 ease-out
          ${e?"animate-glow-pulse":""}
        `,style:{width:et.DISPLAY_SIZE,height:et.DISPLAY_SIZE,...s()},children:[n==="realistic"&&N.jsx(MR,{isSpeaking:e}),n==="cartoon3d"&&N.jsx(BN,{isSpeaking:e}),n==="photo"&&N.jsx(zN,{isSpeaking:e}),n==="gif"&&N.jsx(GN,{isSpeaking:e})]})})}),jN=F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}),N.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),N.jsx("line",{x1:"12",x2:"12",y1:"19",y2:"22"})]})});F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("line",{x1:"2",x2:"22",y1:"2",y2:"22"}),N.jsx("path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}),N.jsx("path",{d:"M5 10v2a7 7 0 0 0 12 5"}),N.jsx("path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}),N.jsx("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}),N.jsx("line",{x1:"12",x2:"12",y1:"19",y2:"22"})]})});const XN=F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),N.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),qN=F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("path",{d:"M18 6 6 18"}),N.jsx("path",{d:"m6 6 12 12"})]})});F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),N.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),N.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]})});F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("rect",{width:"4",height:"16",x:"6",y:"4"}),N.jsx("rect",{width:"4",height:"16",x:"14",y:"4"})]})});F.memo(function({className:e="",size:n=24}){return N.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:N.jsx("rect",{width:"14",height:"14",x:"5",y:"5",rx:"2"})})});F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}),N.jsx("path",{d:"M5 3v4"}),N.jsx("path",{d:"M19 17v4"}),N.jsx("path",{d:"M3 5h4"}),N.jsx("path",{d:"M17 19h4"})]})});F.memo(function({className:e="",size:n=24}){return N.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:`animate-spin ${e}`,children:N.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})})});F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),N.jsx("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),N.jsx("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})});F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("path",{d:"M5 12h14"}),N.jsx("path",{d:"M12 5v14"})]})});const YN=F.memo(function({className:e="",size:n=24}){return N.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[N.jsx("path",{d:"M3 6h18"}),N.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),N.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]})}),$N=F.memo(function({isListening:e,onClick:n,disabled:i}){return N.jsxs("div",{className:"relative flex items-center justify-center group",children:[e&&N.jsxs(N.Fragment,{children:[N.jsx("span",{className:"absolute h-16 w-16 animate-pulse-ring rounded-full bg-speak/40",style:{animationDelay:"0s"}}),N.jsx("span",{className:"absolute h-16 w-16 animate-pulse-ring rounded-full bg-speak/25",style:{animationDelay:"0.5s"}})]}),N.jsx("button",{type:"button",onClick:n,disabled:i,"aria-label":e?"Stop listening":"Start listening",className:`
          relative z-10 flex h-14 w-14 items-center justify-center
          rounded-full
          transition-all duration-300 ease-out
          focus-visible:outline-none focus-visible:ring-4
          focus-visible:ring-white/30 focus-visible:ring-offset-2
          focus-visible:ring-offset-transparent
          disabled:pointer-events-none disabled:opacity-40
          ${e?"bg-speak text-white shadow-glow-red scale-110":"bg-white/10 text-white hover:bg-white/20 hover:scale-110 active:scale-95"}
        `,style:{touchAction:"manipulation"},children:N.jsx(jN,{size:32,className:`
            transition-transform duration-300
            ${e?"animate-pulse":""}
          `})})]})}),v1="/avatar.jpg",KN=[{id:"default",name:"Default",url:v1},{id:"female1",name:"Female 1",url:"/avatars/female1.png"},{id:"male1",name:"Male 1",url:"/avatars/male1.png"},{id:"robot",name:"Robot",url:"/avatars/robot.png"}],ZN=({size:t=18})=>N.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),N.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),QN=F.memo(function({isSidebarOpen:e,onSidebarToggle:n,voices:i,selectedVoiceName:r,rate:s,onVoiceChange:o,onRateChange:a}){const[u,c]=F.useState(!1),[f,d]=F.useState("voice"),[h,g]=F.useState("default"),x=[{id:"voice",label:"Voice"},{id:"avatar",label:"Avatar"},{id:"general",label:"General"}];return N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:`
                fixed top-0 right-0 z-45
                flex items-center justify-between
                h-12 px-4
                bg-surface-950/80 backdrop-blur-md
                border-b border-white/5
                transition-all duration-300
                ${e?"left-64":"left-0"}
            `,children:[N.jsx("button",{type:"button",onClick:n,"aria-label":e?"Close sidebar":"Open sidebar",className:`\r
                        p-2 rounded-lg\r
                        text-white/60 hover:text-white hover:bg-white/5\r
                        transition-all duration-200\r
                    `,children:N.jsx(ZN,{size:20})}),N.jsx("button",{type:"button",onClick:()=>c(!0),"aria-label":"Open settings",className:`\r
                        p-2 rounded-lg\r
                        text-white/60 hover:text-white hover:bg-white/5\r
                        transition-all duration-200\r
                    `,children:N.jsx(XN,{size:20})})]}),u&&N.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[N.jsx("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in",onClick:()=>c(!1)}),N.jsxs("div",{className:`\r
                        relative z-10\r
                        w-full max-w-lg\r
                        max-h-[85vh]\r
                        bg-surface-900/95 backdrop-blur-xl\r
                        rounded-2xl\r
                        border border-white/10\r
                        shadow-2xl\r
                        overflow-hidden\r
                        animate-scale-in\r
                    `,children:[N.jsxs("div",{className:"flex items-center justify-between p-5 border-b border-white/10",children:[N.jsx("h2",{className:"text-xl font-semibold text-white",children:"Settings"}),N.jsx("button",{type:"button",onClick:()=>c(!1),"aria-label":"Close settings",className:`\r
                                    p-2 rounded-lg\r
                                    bg-white/5 hover:bg-white/10\r
                                    text-white/70 hover:text-white\r
                                    transition-colors\r
                                `,children:N.jsx(qN,{size:20})})]}),N.jsx("div",{className:"flex border-b border-white/10",children:x.map(M=>N.jsx("button",{type:"button",onClick:()=>d(M.id),className:`
                                        flex-1 py-3 px-4
                                        text-sm font-medium
                                        transition-all duration-200
                                        ${f===M.id?"text-accent border-b-2 border-accent bg-white/5":"text-white/60 hover:text-white hover:bg-white/5"}
                                    `,children:M.label},M.id))}),N.jsxs("div",{className:"p-5 overflow-y-auto max-h-[calc(85vh-140px)]",children:[f==="voice"&&N.jsxs("div",{className:"space-y-6 animate-fade-in",children:[N.jsxs("div",{children:[N.jsx("label",{className:"block text-sm font-medium text-white/70 mb-3",children:"Voice"}),N.jsx("select",{value:r,onChange:M=>{const y=i.find(l=>l.name===M.target.value);y&&o(y)},className:`\r
                                                w-full px-4 py-3 rounded-xl\r
                                                bg-white/5 border border-white/10\r
                                                text-white text-sm\r
                                                focus:outline-none focus:ring-2 focus:ring-accent/50\r
                                                cursor-pointer\r
                                            `,children:i.map(M=>N.jsx("option",{value:M.name,className:"bg-surface-900",children:M.name},M.name))})]}),N.jsxs("div",{children:[N.jsxs("label",{className:"block text-sm font-medium text-white/70 mb-3",children:["Speech Speed: ",s.toFixed(1),"x"]}),N.jsx("input",{type:"range",min:"0.5",max:"2",step:"0.1",value:s,onChange:M=>a(parseFloat(M.target.value)),className:`\r
                                                w-full h-2 rounded-full\r
                                                bg-white/10 \r
                                                accent-accent\r
                                                cursor-pointer\r
                                            `}),N.jsxs("div",{className:"flex justify-between text-xs text-white/50 mt-2",children:[N.jsx("span",{children:"0.5x"}),N.jsx("span",{children:"1.0x"}),N.jsx("span",{children:"2.0x"})]})]})]}),f==="avatar"&&N.jsxs("div",{className:"space-y-4 animate-fade-in",children:[N.jsx("label",{className:"block text-sm font-medium text-white/70 mb-3",children:"Choose Avatar"}),N.jsx("div",{className:"grid grid-cols-2 gap-4",children:KN.map(M=>N.jsxs("button",{type:"button",onClick:()=>g(M.id),className:`
                                                    p-4 rounded-xl
                                                    flex flex-col items-center gap-3
                                                    border-2 transition-all duration-200
                                                    ${h===M.id?"border-accent bg-accent/10":"border-white/10 bg-white/5 hover:border-white/20"}
                                                `,children:[N.jsx("div",{className:"w-16 h-16 rounded-full bg-surface-800 overflow-hidden",children:N.jsx("img",{src:M.url,alt:M.name,className:"w-full h-full object-cover",onError:y=>{y.target.src=v1}})}),N.jsx("span",{className:"text-sm text-white/80",children:M.name})]},M.id))}),N.jsx("p",{className:"text-xs text-white/40 mt-4",children:"More avatars coming soon!"})]}),f==="general"&&N.jsxs("div",{className:"space-y-6 animate-fade-in",children:[N.jsxs("div",{children:[N.jsx("label",{className:"block text-sm font-medium text-white/70 mb-3",children:"Theme"}),N.jsxs("div",{className:"flex gap-3",children:[N.jsx("button",{className:`\r
                                                flex-1 py-3 px-4 rounded-xl\r
                                                bg-surface-950 border-2 border-accent\r
                                                text-white text-sm font-medium\r
                                            `,children:"Dark"}),N.jsx("button",{className:`\r
                                                flex-1 py-3 px-4 rounded-xl\r
                                                bg-white/5 border border-white/10\r
                                                text-white/60 text-sm\r
                                                cursor-not-allowed opacity-50\r
                                            `,disabled:!0,children:"Light (Soon)"})]})]}),N.jsxs("div",{children:[N.jsx("label",{className:"block text-sm font-medium text-white/70 mb-3",children:"Language"}),N.jsxs("select",{className:`\r
                                            w-full px-4 py-3 rounded-xl\r
                                            bg-white/5 border border-white/10\r
                                            text-white text-sm\r
                                            focus:outline-none focus:ring-2 focus:ring-accent/50\r
                                            cursor-pointer\r
                                        `,children:[N.jsx("option",{value:"en",className:"bg-surface-900",children:"English"}),N.jsx("option",{value:"es",className:"bg-surface-900",children:"Spanish (Soon)"})]})]}),N.jsx("div",{className:"pt-4 border-t border-white/10",children:N.jsxs("p",{className:"text-xs text-white/40",children:["EchoAI v1.0.0",N.jsx("br",{}),"Built with React + TypeScript"]})})]})]})]})]}),N.jsx("style",{children:`
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scale-in { animation: scale-in 0.2s ease-out; }
            `})]})}),JN=({size:t=16})=>N.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:N.jsx("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})}),eU=({size:t=16})=>N.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N.jsx("circle",{cx:"11",cy:"11",r:"8"}),N.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),tU=({size:t=16})=>N.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",children:[N.jsx("circle",{cx:"12",cy:"5",r:"1.5"}),N.jsx("circle",{cx:"12",cy:"12",r:"1.5"}),N.jsx("circle",{cx:"12",cy:"19",r:"1.5"})]}),nU=({size:t=16})=>N.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:N.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),iU=F.memo(function({isOpen:e,onToggle:n,sessions:i,activeSessionId:r,showChatView:s,onSelectSession:o,onNewSession:a,onDeleteSession:u,onRenameSession:c,onToggleChatView:f}){const[d,h]=F.useState(null),[g,x]=F.useState(""),[M,y]=F.useState(null),[l,p]=F.useState(""),m=i.filter(b=>b.title.toLowerCase().includes(g.toLowerCase())),E=b=>{y(b.id),p(b.title),h(null)},w=()=>{M&&l.trim()&&c(M,l.trim()),y(null),p("")},C=()=>{y(null),p("")};return N.jsxs(N.Fragment,{children:[d&&N.jsx("div",{className:"fixed inset-0 z-30",onClick:()=>h(null)}),e&&N.jsx("div",{className:"fixed inset-0 z-35 bg-black/50",onClick:n}),N.jsxs("aside",{className:`
                    fixed top-0 left-0 z-40
                    h-full w-72 md:w-64
                    bg-surface-950
                    border-r border-white/5
                    flex flex-col
                    transform transition-transform duration-300 ease-out
                    ${e?"translate-x-0":"-translate-x-full"}
                `,children:[N.jsxs("div",{className:"flex items-center justify-between gap-2 px-4 py-4",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("img",{src:"/logo/favicon-96x96.png",alt:"EchoAI",className:"w-7 h-7"}),N.jsx("span",{className:"text-base font-semibold text-white",children:"EchoAI"})]}),N.jsx("button",{type:"button",onClick:n,className:"md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors","aria-label":"Close sidebar",children:N.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),N.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),N.jsx("div",{className:"px-3 mb-2",children:N.jsxs("button",{type:"button",onClick:a,className:`\r
                            w-full flex items-center gap-2 px-3 py-2.5\r
                            rounded-lg\r
                            border border-white/10\r
                            text-white/80 hover:text-white\r
                            hover:bg-white/5\r
                            transition-colors text-sm\r
                        `,children:[N.jsx("span",{className:"text-lg leading-none",children:"+"}),N.jsx("span",{children:"New chat"})]})}),N.jsx("div",{className:"px-3 mb-3",children:N.jsxs("div",{className:"relative",children:[N.jsx("input",{type:"text",placeholder:"Search conversations",value:g,onChange:b=>x(b.target.value),className:`\r
                                w-full pl-8 pr-3 py-2\r
                                bg-transparent\r
                                text-white/80 text-sm\r
                                placeholder:text-white/40\r
                                border-b border-white/10\r
                                focus:outline-none focus:border-white/20\r
                            `}),N.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 text-white/40",children:N.jsx(eU,{size:14})})]})}),N.jsx("div",{className:"px-4 py-2",children:N.jsx("span",{className:"text-xs text-white/40 uppercase tracking-wider",children:"Conversations"})}),N.jsx("div",{className:"flex-1 overflow-y-auto px-2 space-y-0.5",children:m.length===0?N.jsx("div",{className:"text-center py-8 px-4",children:N.jsx("p",{className:"text-xs text-white/30",children:g?"No matching conversations":"No conversations yet"})}):m.map(b=>N.jsxs("div",{className:`
                                    group relative
                                    flex items-center justify-between
                                    px-3 py-2.5 rounded-lg cursor-pointer
                                    transition-colors duration-150
                                    ${r===b.id?"bg-white/10":"hover:bg-white/5"}
                                `,onClick:()=>o(b.id),children:[N.jsx("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:M===b.id?N.jsx("input",{type:"text",value:l,onChange:v=>p(v.target.value),onKeyDown:v=>{v.key==="Enter"&&w(),v.key==="Escape"&&C()},onBlur:w,onClick:v=>v.stopPropagation(),autoFocus:!0,className:`\r
                                                w-full px-2 py-1 text-sm\r
                                                bg-white/10 border border-accent/50\r
                                                rounded text-white\r
                                                focus:outline-none focus:border-accent\r
                                            `}):N.jsx("span",{className:"text-sm text-white/80 truncate",children:b.title})}),M!==b.id&&N.jsxs("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:[N.jsx("button",{type:"button",onClick:v=>{v.stopPropagation(),f(b.id)},className:`\r
                                                p-1.5 rounded\r
                                                text-white/50 hover:text-accent hover:bg-white/10\r
                                                transition-all duration-150\r
                                            `,title:"View chat",children:N.jsx(nU,{size:14})}),N.jsx("button",{type:"button",onClick:v=>{v.stopPropagation(),h(d===b.id?null:b.id)},className:`\r
                                                p-1.5 rounded\r
                                                text-white/50 hover:text-white hover:bg-white/10\r
                                                transition-all duration-150\r
                                            `,children:N.jsx(tU,{size:14})})]}),d===b.id&&N.jsxs("div",{className:`\r
                                            absolute right-0 top-full z-[60] mt-1\r
                                            w-32 py-1\r
                                            bg-surface-900 border border-white/10\r
                                            rounded-lg shadow-xl\r
                                        `,children:[N.jsxs("button",{type:"button",onClick:v=>{v.stopPropagation(),E(b)},className:`\r
                                                w-full flex items-center gap-2 px-3 py-2\r
                                                text-sm text-white/80 hover:bg-white/5\r
                                                transition-colors\r
                                            `,children:[N.jsx(JN,{size:14}),"Rename"]}),N.jsxs("button",{type:"button",onClick:v=>{v.stopPropagation(),h(null),u(b.id)},className:`\r
                                                w-full flex items-center gap-2 px-3 py-2\r
                                                text-sm text-red-400 hover:bg-white/5\r
                                                transition-colors\r
                                            `,children:[N.jsx(YN,{size:14}),"Delete"]})]})]},b.id))})]})]})}),N_=F.memo(function({isActive:e,color:n="#06b6d4"}){const i=F.useRef(null),r=F.useRef(0),s=F.useRef([]);return F.useEffect(()=>{const o=i.current;if(!o)return;const a=o.getContext("2d");if(!a)return;const u=40,c=3,f=4;s.current.length===0&&(s.current=Array(u).fill(0).map(()=>Math.random()*.3+.1));const d=()=>{a.clearRect(0,0,o.width,o.height);const h=o.height/2,g=u*(c+f),x=(o.width-g)/2;s.current.forEach((M,y)=>{if(e){const E=Math.random()*.8+.2;s.current[y]=M+(E-M)*.15}else s.current[y]=M+(.1-M)*.1;const l=s.current[y]*o.height*.6,p=x+y*(c+f),m=a.createLinearGradient(0,h-l/2,0,h+l/2);m.addColorStop(0,`${n}40`),m.addColorStop(.5,n),m.addColorStop(1,`${n}40`),a.fillStyle=m,a.beginPath(),a.roundRect(p,h-l/2,c,l,1.5),a.fill()}),r.current=requestAnimationFrame(d)};return d(),()=>{cancelAnimationFrame(r.current)}},[e,n]),N.jsx("canvas",{ref:i,width:288,height:40,className:"opacity-80 block mx-auto"})}),rU=({size:t=18})=>N.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),N.jsx("polyline",{points:"12 19 5 12 12 5"})]}),sU=F.memo(function({messages:e,isVisible:n,onClose:i}){const r=F.useRef(null);return F.useEffect(()=>{r.current&&(r.current.scrollTop=r.current.scrollHeight)},[e]),n?N.jsxs("div",{className:"fixed top-12 left-0 right-0 bottom-0 z-35 flex flex-col bg-surface-950",children:[N.jsxs("div",{className:"flex items-center h-10 px-3 border-b border-white/10 bg-surface-900/60",children:[N.jsxs("button",{type:"button",onClick:i,className:`\r
                        flex items-center gap-1.5 px-3 py-1.5 rounded-md\r
                        text-white/80 hover:text-white hover:bg-white/10\r
                        transition-colors text-sm font-medium\r
                    `,children:[N.jsx(rU,{size:16}),N.jsx("span",{children:"Back"})]}),N.jsx("span",{className:"flex-1 text-center text-sm font-medium text-white/70",children:"Chat"}),N.jsx("div",{className:"w-16"})," "]}),N.jsx("div",{ref:r,className:"flex-1 overflow-y-auto px-4 py-4",children:N.jsx("div",{className:"max-w-3xl mx-auto space-y-3",children:e.length===0?N.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-center",children:[N.jsx("img",{src:"/logo/favicon-96x96.png",alt:"EchoAI",className:"w-16 h-16 mb-4"}),N.jsx("p",{className:"text-white/50 text-base",children:"No messages yet"}),N.jsx("p",{className:"text-white/30 text-sm mt-1",children:"Start a conversation with EchoAI"}),N.jsx("button",{type:"button",onClick:i,className:`\r
                                    mt-6 px-6 py-2 rounded-full\r
                                    bg-accent text-white font-medium text-sm\r
                                    hover:bg-accent/90\r
                                    transition-colors\r
                                `,children:"← Back to Voice"})]}):e.map((s,o)=>N.jsx("div",{className:`flex ${s.role==="user"?"justify-end":"justify-start"}`,children:N.jsxs("div",{className:`
                                        max-w-[80%] px-3 py-2 rounded-xl text-sm
                                        ${s.role==="user"?"bg-accent text-white rounded-br-sm":"bg-white/10 text-white/90 rounded-bl-sm"}
                                    `,children:[s.role==="assistant"&&N.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[N.jsx("div",{className:"w-4 h-4 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center",children:N.jsx("span",{className:"text-[8px] text-white font-bold",children:"VA"})}),N.jsx("span",{className:"text-xs text-white/40",children:"EchoAI"})]}),N.jsx("p",{className:"leading-relaxed whitespace-pre-wrap",children:s.content})]})},o))})})]}):null});function oU(t={}){const{onSilenceDetected:e,silenceMs:n=1500}=t,[i,r]=F.useState(!1),[s,o]=F.useState(""),[a,u]=F.useState(""),c=F.useRef(null),f=F.useRef(""),d=F.useRef(!1),h=F.useRef(null),g=F.useRef(!1),x=F.useRef(e);F.useEffect(()=>{x.current=e},[e]);const M=F.useCallback(()=>{h.current&&(clearTimeout(h.current),h.current=null)},[]),y=F.useCallback(()=>{M(),h.current=setTimeout(()=>{if(g.current&&f.current.trim()){d.current=!0,c.current?.stop(),r(!1);const w=f.current.trim();u(""),x.current?.(w)}},n)},[n,M]),l=F.useCallback(()=>{if(c.current)return c.current;const w=window.SpeechRecognition||window.webkitSpeechRecognition;if(!w)return null;const C=new w;return C.continuous=!0,C.interimResults=!0,C.lang="en-US",C.maxAlternatives=1,C.onresult=b=>{let v="",_="";for(let S=b.resultIndex;S<b.results.length;S++){const T=b.results[S][0].transcript;b.results[S].isFinal?_+=T:v+=T}_&&(f.current+=" "+_,o(f.current.trim()),g.current=!0),(_||v)&&(g.current=!0,y()),u((f.current+" "+v).trim())},C.onerror=b=>{b.error==="no-speech"||b.error==="aborted"||(console.error("[useVoiceInput] error:",b.error),d.current=!0,M(),r(!1))},C.onend=()=>{if(!d.current)try{C.start();return}catch{}M(),r(!1)},c.current=C,C},[y,M]),p=F.useCallback(()=>{const w=l();if(!w){alert("Speech Recognition not supported. Please use Chrome or Edge.");return}f.current="",d.current=!1,g.current=!1,o(""),u("");try{w.start(),r(!0)}catch{console.warn("[useVoiceInput] recognition already running")}},[l]),m=F.useCallback(()=>{d.current=!0,M();try{c.current?.abort()}catch{c.current?.stop()}r(!1);const w=f.current.trim();return u(""),f.current="",g.current=!1,w},[M]),E=F.useCallback(()=>{f.current="",g.current=!1,o(""),u("")},[]);return F.useEffect(()=>()=>{d.current=!0,M(),c.current?.abort()},[M]),{isListening:i,transcript:s,interimTranscript:a,startListening:p,stopListening:m,resetTranscript:E}}function aU(){const[t,e]=F.useState(!1),[n,i]=F.useState([]),[r,s]=F.useState({voice:null,rate:1,pitch:1}),o=F.useRef(window.speechSynthesis),a=F.useRef(null),u=F.useRef(null),c=F.useCallback(()=>{f(),u.current=setInterval(()=>{o.current.speaking&&!o.current.paused&&(o.current.pause(),o.current.resume())},1e4)},[]),f=F.useCallback(()=>{u.current&&(clearInterval(u.current),u.current=null)},[]);F.useEffect(()=>{const M=()=>{const l=o.current.getVoices().filter(p=>p.lang.startsWith("en"));if(i(l),!r.voice){const p=l.find(m=>m.name.includes("Female")||m.name.includes("Samantha")||m.name.includes("Google US English"))??l[0]??null;s(m=>({...m,voice:p}))}};M(),o.current.onvoiceschanged=M},[]);const d=F.useCallback(M=>s(y=>({...y,voice:M})),[]),h=F.useCallback(M=>s(y=>({...y,rate:M})),[]),g=F.useCallback(M=>new Promise((y,l)=>{o.current.cancel();const p=new SpeechSynthesisUtterance(M);p.voice=r.voice,p.rate=r.rate,p.pitch=r.pitch,p.onstart=()=>{e(!0),c()},p.onend=()=>{e(!1),f(),y()},p.onerror=m=>{if(e(!1),f(),m.error==="interrupted"||m.error==="canceled"){y();return}l(new Error(`SpeechSynthesis error: ${m.error}`))},a.current=p,o.current.speak(p)}),[r,c,f]),x=F.useCallback(()=>{o.current.cancel(),f(),e(!1)},[f]);return{isSpeaking:t,voices:n,voiceConfig:r,setVoice:d,setRate:h,speak:g,stop:x}}function lU(){const[t,e]=F.useState(!1),[n,i]=F.useState(null),r=F.useRef(null),s=F.useCallback(()=>{r.current?.abort(),r.current=null,e(!1)},[]),o=F.useCallback(async(u,c)=>{if(!u.trim())return"";s();const f=new AbortController;r.current=f,e(!0),i(null);try{const d=await fetch(Iv.CHAT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:u,history:c,max_tokens:bl.MAX_TOKENS,temperature:bl.TEMPERATURE}),signal:f.signal});if(!d.ok)throw new Error(`API ${d.status}`);return(await d.json()).response}catch(d){if(d.name==="AbortError")return"";const h=d.message??"Unknown error";throw i(h),d}finally{e(!1)}},[s]),a=F.useCallback(async(u,c,f)=>{if(!u.trim())return"";s();const d=new AbortController;r.current=d,e(!0),i(null);try{const h=await fetch(Iv.CHAT_STREAM,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:u,history:c,max_tokens:bl.MAX_TOKENS,temperature:bl.TEMPERATURE}),signal:d.signal});if(!h.ok)throw new Error(`API ${h.status}`);const g=h.body.getReader(),x=new TextDecoder;let M="";for(;;){const{done:y,value:l}=await g.read();if(y)break;const p=x.decode(l,{stream:!0});for(const m of p.split(`
`)){if(!m.startsWith("data: "))continue;const E=m.slice(6).trim();if(E!=="[DONE]"){if(E.startsWith("[ERROR]"))throw new Error(E.slice(8).trim()||"Server streaming error");M+=E,f(M)}}}return M||"I understand. Can you tell me more?"}catch(h){if(h.name==="AbortError")return"";const g=h.message??"Unknown error";throw i(g),h}finally{e(!1)}},[s]);return F.useEffect(()=>()=>{r.current?.abort()},[]),{isLoading:t,error:n,sendMessage:o,sendMessageStream:a,abort:s}}const uU=F.memo(WN);function cU(){const t=aU(),e=lU(),n=Ut(P=>P.status),i=Ut(P=>P.setStatus),r=Ut(P=>P.setInterimText),s=Ut(P=>P.addMessage),o=Ut(P=>P.interimText),a=Ut(P=>P.messages),u=F.useRef(!1),[c,f]=F.useState(!0),d=F.useRef(null),[h,g]=F.useState(!1),[x,M]=F.useState(!1),[y,l]=F.useState(()=>{const P=localStorage.getItem("voice-avatar-sessions");if(P)try{const q=JSON.parse(P).map(te=>({...te,timestamp:new Date(te.timestamp),messages:te.messages||[]}));if(q.length>0)return q}catch(V){console.error("Error parsing sessions:",V)}return[{id:Date.now().toString(),title:"New conversation",timestamp:new Date,preview:"",messages:[]}]}),[p,m]=F.useState(()=>{const P=localStorage.getItem("voice-avatar-sessions");if(P){const O=JSON.parse(P);if(O.length>0)return O[0].id}return null}),E=a.slice(-1)[0]?.content;F.useEffect(()=>(d.current&&clearTimeout(d.current),(n!=="ready"||o||E)&&f(!0),n==="ready"&&!o&&(d.current=setTimeout(()=>{f(!1)},5e3)),()=>{d.current&&clearTimeout(d.current)}),[n,o,E]);const w=F.useCallback(async P=>{if(!P||u.current)return;u.current=!0,r(""),s("user",P),i("thinking");const V=Ut.getState().messages.slice(-6).map(q=>({role:q.role,content:q.content}));try{const q=await e.sendMessage(P,V);if(!q){u.current=!1;return}s("assistant",q),i("speaking"),await t.speak(q),i("ready")}catch{Ut.getState().status!=="ready"&&(i("error"),s("assistant","Sorry, something went wrong. Please try again."),setTimeout(()=>i("ready"),2e3))}finally{u.current=!1}},[e,t,s,i,r]),C=oU({silenceMs:1500,onSilenceDetected:w});F.useEffect(()=>{r(C.isListening?C.interimTranscript:"")},[C.interimTranscript,C.isListening,r]);const b=F.useCallback(()=>{if(C.isListening){const P=C.stopListening();r(""),P?w(P):i("ready")}else t.stop(),e.abort(),C.startListening(),i("listening")},[C,t,e,i,r,w]),v=F.useCallback(()=>{e.abort(),t.stop(),C.stopListening(),u.current=!1,r(""),i("ready")},[e,t,C,i,r]),_=F.useCallback(P=>{localStorage.setItem("voice-avatar-sessions",JSON.stringify(P))},[]),S=F.useCallback(()=>{if(!p)return;const P=Ut.getState().messages,O=y.map(V=>V.id===p?{...V,messages:P,preview:P[P.length-1]?.content.slice(0,50)||"",title:V.title==="New conversation"&&P.length>0?P[0].content.slice(0,30):V.title}:V);l(O),_(O)},[p,y,_]);F.useEffect(()=>{if(p&&a.length>0){const P=setTimeout(()=>{S()},500);return()=>clearTimeout(P)}},[a,p,S]);const T=F.useCallback(()=>{if(Ut.getState().messages.length===0)return;S();const O={id:Date.now().toString(),title:"New conversation",timestamp:new Date,preview:"",messages:[]},V=[O,...y];l(V),_(V),Ut.getState().clearMessages(),m(O.id)},[y,_,S]),I=F.useCallback(P=>{S();const O=y.find(V=>V.id===P);O&&(Ut.getState().clearMessages(),O.messages.forEach(V=>{Ut.getState().addMessage(V.role,V.content)})),m(P)},[y,S]),L=F.useCallback(P=>{const O=y.filter(V=>V.id!==P);if(O.length===0){const V={id:Date.now().toString(),title:"New conversation",timestamp:new Date,preview:"",messages:[]};l([V]),_([V]),Ut.getState().clearMessages(),m(V.id)}else if(l(O),_(O),p===P){const V=O[0];Ut.getState().clearMessages(),V.messages.forEach(q=>{Ut.getState().addMessage(q.role,q.content)}),m(V.id)}},[y,p,_]),U=F.useCallback((P,O)=>{const V=y.map(q=>q.id===P?{...q,title:O}:q);l(V),_(V)},[y,_]),k=F.useCallback(P=>{if(h&&p===P)g(!1);else{if(p!==P){S();const O=y.find(V=>V.id===P);O&&(Ut.getState().clearMessages(),O.messages.forEach(V=>{Ut.getState().addMessage(V.role,V.content)}))}m(P),g(!0)}},[h,p,y,S]);F.useEffect(()=>{const P=O=>{if(!(O.target instanceof HTMLInputElement||O.target instanceof HTMLTextAreaElement||O.target instanceof HTMLSelectElement)){if(O.code==="Escape"){O.preventDefault(),v();return}O.code==="Space"&&n!=="thinking"&&n!=="speaking"&&(O.preventDefault(),b())}};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[n,b,v]);const H=()=>n==="listening"&&o?o:n==="listening"?"Listening...":n==="thinking"?"Thinking...":E||"I'm listening, how can I help?",B=n!=="ready";return N.jsxs("div",{className:"relative min-h-screen flex flex-col items-center justify-center px-5",children:[N.jsx(iU,{isOpen:x,onToggle:()=>M(!x),sessions:y,activeSessionId:p,showChatView:h,onSelectSession:I,onNewSession:T,onDeleteSession:L,onRenameSession:U,onToggleChatView:k}),N.jsx("a",{href:"#mic-button",className:"sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-surface-950",children:"Skip to mic"}),N.jsx(QN,{isSidebarOpen:x,onSidebarToggle:()=>M(!x),voices:t.voices,selectedVoiceName:t.voiceConfig.voice?.name??"",rate:t.voiceConfig.rate,onVoiceChange:t.setVoice,onRateChange:t.setRate}),N.jsxs("main",{className:"flex flex-col items-center gap-8",children:[N.jsx(uU,{isSpeaking:t.isSpeaking}),N.jsxs("button",{type:"button",id:"mic-button",onClick:n==="ready"?b:v,"aria-label":n==="ready"?"Start listening":"Stop",className:`\r
                        relative flex items-center justify-center\r
                        w-80 h-32 px-8\r
                        rounded-3xl\r
                        bg-white/5 backdrop-blur-md\r
                        border border-white/10\r
                        overflow-hidden\r
                        cursor-pointer\r
                        transition-all duration-300\r
                        hover:bg-white/10 hover:border-white/20\r
                        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20\r
                        group\r
                    `,children:[n!=="ready"&&N.jsx("div",{className:`\r
                            absolute inset-0 z-20\r
                            flex items-center justify-center\r
                            bg-black/50 rounded-3xl\r
                            opacity-0 group-hover:opacity-100\r
                            transition-opacity duration-200\r
                        `,children:N.jsxs("div",{className:"flex flex-col items-center gap-2",children:[N.jsx("div",{className:"w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center",children:N.jsx("svg",{className:"w-6 h-6 text-red-500",fill:"currentColor",viewBox:"0 0 24 24",children:N.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1"})})}),N.jsx("span",{className:"text-sm text-red-400 font-medium",children:"Tap to Stop"})]})}),N.jsxs(kb,{mode:"wait",children:[n==="ready"&&N.jsx(Al.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},className:"flex items-center justify-center",children:N.jsx($N,{isListening:!1,onClick:b,disabled:!1})},"idle"),n==="listening"&&N.jsxs(Al.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},className:"flex flex-col items-center gap-2 group-hover:opacity-30 transition-opacity",children:[N.jsx("span",{className:"text-sm text-white/70 font-medium",children:"Listening..."}),N.jsx("div",{className:"h-10 w-72 flex items-center justify-center",children:N.jsx(N_,{isActive:!0,color:"#ef4444"})})]},"listening"),n==="thinking"&&N.jsxs(Al.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"flex flex-col items-center gap-2 group-hover:opacity-30 transition-opacity",children:[N.jsx("span",{className:"text-sm text-white/70 font-medium",children:"Thinking..."}),N.jsxs("div",{className:"flex gap-1",children:[N.jsx("span",{className:"w-2 h-2 bg-accent rounded-full animate-bounce",style:{animationDelay:"0ms"}}),N.jsx("span",{className:"w-2 h-2 bg-accent rounded-full animate-bounce",style:{animationDelay:"150ms"}}),N.jsx("span",{className:"w-2 h-2 bg-accent rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})]},"thinking"),n==="speaking"&&N.jsxs(Al.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},className:"flex flex-col items-center gap-2 group-hover:opacity-30 transition-opacity",children:[N.jsx("span",{className:"text-sm text-white/70 font-medium",children:"Speaking..."}),N.jsx("div",{className:"h-10 w-72 flex items-center justify-center",children:N.jsx(N_,{isActive:!0,color:"#06b6d4"})})]},"speaking")]})]}),N.jsx("p",{className:`
                        max-w-2xl text-center text-xl font-medium text-white
                        drop-shadow-md
                        transition-opacity duration-1000 ease-out
                        ${c||B?"opacity-100":"opacity-0"}
                    `,children:H()})]}),N.jsx(sU,{messages:a,isVisible:h,isSidebarOpen:x,onClose:()=>g(!1)})]})}td.createRoot(document.getElementById("root")).render(N.jsx(X_.StrictMode,{children:N.jsx(cU,{})}));
