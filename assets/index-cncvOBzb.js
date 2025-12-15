(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var Ld={exports:{}},Rl={};var k_;function Nb(){if(k_)return Rl;k_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:u,ref:s!==void 0?s:null,props:l}}return Rl.Fragment=e,Rl.jsx=t,Rl.jsxs=t,Rl}var X_;function Lb(){return X_||(X_=1,Ld.exports=Nb()),Ld.exports}var ge=Lb(),Ud={exports:{}},St={};var W_;function Ub(){if(W_)return St;W_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function y(z,ie,_e){this.props=z,this.context=ie,this.refs=S,this.updater=_e||M}y.prototype.isReactComponent={},y.prototype.setState=function(z,ie){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ie,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function L(){}L.prototype=y.prototype;function R(z,ie,_e){this.props=z,this.context=ie,this.refs=S,this.updater=_e||M}var w=R.prototype=new L;w.constructor=R,E(w,y.prototype),w.isPureReactComponent=!0;var U=Array.isArray;function B(){}var I={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function A(z,ie,_e){var we=_e.ref;return{$$typeof:o,type:z,key:ie,ref:we!==void 0?we:null,props:_e}}function N(z,ie){return A(z.type,ie,z.props)}function k(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function J(z){var ie={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(_e){return ie[_e]})}var ee=/\/+/g;function le(z,ie){return typeof z=="object"&&z!==null&&z.key!=null?J(""+z.key):ie.toString(36)}function Y(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(B,B):(z.status="pending",z.then(function(ie){z.status==="pending"&&(z.status="fulfilled",z.value=ie)},function(ie){z.status==="pending"&&(z.status="rejected",z.reason=ie)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function O(z,ie,_e,we,Be){var oe=typeof z;(oe==="undefined"||oe==="boolean")&&(z=null);var ve=!1;if(z===null)ve=!0;else switch(oe){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(z.$$typeof){case o:case e:ve=!0;break;case g:return ve=z._init,O(ve(z._payload),ie,_e,we,Be)}}if(ve)return Be=Be(z),ve=we===""?"."+le(z,0):we,U(Be)?(_e="",ve!=null&&(_e=ve.replace(ee,"$&/")+"/"),O(Be,ie,_e,"",function(Ke){return Ke})):Be!=null&&(k(Be)&&(Be=N(Be,_e+(Be.key==null||z&&z.key===Be.key?"":(""+Be.key).replace(ee,"$&/")+"/")+ve)),ie.push(Be)),1;ve=0;var Ve=we===""?".":we+":";if(U(z))for(var ke=0;ke<z.length;ke++)we=z[ke],oe=Ve+le(we,ke),ve+=O(we,ie,_e,oe,Be);else if(ke=x(z),typeof ke=="function")for(z=ke.call(z),ke=0;!(we=z.next()).done;)we=we.value,oe=Ve+le(we,ke++),ve+=O(we,ie,_e,oe,Be);else if(oe==="object"){if(typeof z.then=="function")return O(Y(z),ie,_e,we,Be);throw ie=String(z),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ve}function G(z,ie,_e){if(z==null)return z;var we=[],Be=0;return O(z,we,"","",function(oe){return ie.call(_e,oe,Be++)}),we}function ne(z){if(z._status===-1){var ie=z._result;ie=ie(),ie.then(function(_e){(z._status===0||z._status===-1)&&(z._status=1,z._result=_e)},function(_e){(z._status===0||z._status===-1)&&(z._status=2,z._result=_e)}),z._status===-1&&(z._status=0,z._result=ie)}if(z._status===1)return z._result.default;throw z._result}var Te=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Me={map:G,forEach:function(z,ie,_e){G(z,function(){ie.apply(this,arguments)},_e)},count:function(z){var ie=0;return G(z,function(){ie++}),ie},toArray:function(z){return G(z,function(ie){return ie})||[]},only:function(z){if(!k(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return St.Activity=v,St.Children=Me,St.Component=y,St.Fragment=t,St.Profiler=s,St.PureComponent=R,St.StrictMode=a,St.Suspense=h,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,St.__COMPILER_RUNTIME={__proto__:null,c:function(z){return I.H.useMemoCache(z)}},St.cache=function(z){return function(){return z.apply(null,arguments)}},St.cacheSignal=function(){return null},St.cloneElement=function(z,ie,_e){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var we=E({},z.props),Be=z.key;if(ie!=null)for(oe in ie.key!==void 0&&(Be=""+ie.key),ie)!j.call(ie,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&ie.ref===void 0||(we[oe]=ie[oe]);var oe=arguments.length-2;if(oe===1)we.children=_e;else if(1<oe){for(var ve=Array(oe),Ve=0;Ve<oe;Ve++)ve[Ve]=arguments[Ve+2];we.children=ve}return A(z.type,Be,we)},St.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},St.createElement=function(z,ie,_e){var we,Be={},oe=null;if(ie!=null)for(we in ie.key!==void 0&&(oe=""+ie.key),ie)j.call(ie,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Be[we]=ie[we]);var ve=arguments.length-2;if(ve===1)Be.children=_e;else if(1<ve){for(var Ve=Array(ve),ke=0;ke<ve;ke++)Ve[ke]=arguments[ke+2];Be.children=Ve}if(z&&z.defaultProps)for(we in ve=z.defaultProps,ve)Be[we]===void 0&&(Be[we]=ve[we]);return A(z,oe,Be)},St.createRef=function(){return{current:null}},St.forwardRef=function(z){return{$$typeof:f,render:z}},St.isValidElement=k,St.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:ne}},St.memo=function(z,ie){return{$$typeof:d,type:z,compare:ie===void 0?null:ie}},St.startTransition=function(z){var ie=I.T,_e={};I.T=_e;try{var we=z(),Be=I.S;Be!==null&&Be(_e,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(B,Te)}catch(oe){Te(oe)}finally{ie!==null&&_e.types!==null&&(ie.types=_e.types),I.T=ie}},St.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},St.use=function(z){return I.H.use(z)},St.useActionState=function(z,ie,_e){return I.H.useActionState(z,ie,_e)},St.useCallback=function(z,ie){return I.H.useCallback(z,ie)},St.useContext=function(z){return I.H.useContext(z)},St.useDebugValue=function(){},St.useDeferredValue=function(z,ie){return I.H.useDeferredValue(z,ie)},St.useEffect=function(z,ie){return I.H.useEffect(z,ie)},St.useEffectEvent=function(z){return I.H.useEffectEvent(z)},St.useId=function(){return I.H.useId()},St.useImperativeHandle=function(z,ie,_e){return I.H.useImperativeHandle(z,ie,_e)},St.useInsertionEffect=function(z,ie){return I.H.useInsertionEffect(z,ie)},St.useLayoutEffect=function(z,ie){return I.H.useLayoutEffect(z,ie)},St.useMemo=function(z,ie){return I.H.useMemo(z,ie)},St.useOptimistic=function(z,ie){return I.H.useOptimistic(z,ie)},St.useReducer=function(z,ie,_e){return I.H.useReducer(z,ie,_e)},St.useRef=function(z){return I.H.useRef(z)},St.useState=function(z){return I.H.useState(z)},St.useSyncExternalStore=function(z,ie,_e){return I.H.useSyncExternalStore(z,ie,_e)},St.useTransition=function(){return I.H.useTransition()},St.version="19.2.3",St}var q_;function Cm(){return q_||(q_=1,Ud.exports=Ub()),Ud.exports}var Dt=Cm(),Pd={exports:{}},Cl={},Od={exports:{}},Id={};var j_;function Pb(){return j_||(j_=1,(function(o){function e(O,G){var ne=O.length;O.push(G);e:for(;0<ne;){var Te=ne-1>>>1,Me=O[Te];if(0<s(Me,G))O[Te]=G,O[ne]=Me,ne=Te;else break e}}function t(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var G=O[0],ne=O.pop();if(ne!==G){O[0]=ne;e:for(var Te=0,Me=O.length,z=Me>>>1;Te<z;){var ie=2*(Te+1)-1,_e=O[ie],we=ie+1,Be=O[we];if(0>s(_e,ne))we<Me&&0>s(Be,_e)?(O[Te]=Be,O[we]=ne,Te=we):(O[Te]=_e,O[ie]=ne,Te=ie);else if(we<Me&&0>s(Be,ne))O[Te]=Be,O[we]=ne,Te=we;else break e}}return G}function s(O,G){var ne=O.sortIndex-G.sortIndex;return ne!==0?ne:O.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var h=[],d=[],g=1,v=null,_=3,x=!1,M=!1,E=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var G=t(d);G!==null;){if(G.callback===null)a(d);else if(G.startTime<=O)a(d),G.sortIndex=G.expirationTime,e(h,G);else break;G=t(d)}}function U(O){if(E=!1,w(O),!M)if(t(h)!==null)M=!0,B||(B=!0,J());else{var G=t(d);G!==null&&Y(U,G.startTime-O)}}var B=!1,I=-1,j=5,A=-1;function N(){return S?!0:!(o.unstable_now()-A<j)}function k(){if(S=!1,B){var O=o.unstable_now();A=O;var G=!0;try{e:{M=!1,E&&(E=!1,L(I),I=-1),x=!0;var ne=_;try{t:{for(w(O),v=t(h);v!==null&&!(v.expirationTime>O&&N());){var Te=v.callback;if(typeof Te=="function"){v.callback=null,_=v.priorityLevel;var Me=Te(v.expirationTime<=O);if(O=o.unstable_now(),typeof Me=="function"){v.callback=Me,w(O),G=!0;break t}v===t(h)&&a(h),w(O)}else a(h);v=t(h)}if(v!==null)G=!0;else{var z=t(d);z!==null&&Y(U,z.startTime-O),G=!1}}break e}finally{v=null,_=ne,x=!1}G=void 0}}finally{G?J():B=!1}}}var J;if(typeof R=="function")J=function(){R(k)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,le=ee.port2;ee.port1.onmessage=k,J=function(){le.postMessage(null)}}else J=function(){y(k,0)};function Y(O,G){I=y(function(){O(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(O){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var ne=_;_=G;try{return O()}finally{_=ne}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ne=_;_=O;try{return G()}finally{_=ne}},o.unstable_scheduleCallback=function(O,G,ne){var Te=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Te+ne:Te):ne=Te,O){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=ne+Me,O={id:g++,callback:G,priorityLevel:O,startTime:ne,expirationTime:Me,sortIndex:-1},ne>Te?(O.sortIndex=ne,e(d,O),t(h)===null&&O===t(d)&&(E?(L(I),I=-1):E=!0,Y(U,ne-Te))):(O.sortIndex=Me,e(h,O),M||x||(M=!0,B||(B=!0,J()))),O},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(O){var G=_;return function(){var ne=_;_=G;try{return O.apply(this,arguments)}finally{_=ne}}}})(Id)),Id}var Y_;function Ob(){return Y_||(Y_=1,Od.exports=Pb()),Od.exports}var zd={exports:{}},ei={};var Z_;function Ib(){if(Z_)return ei;Z_=1;var o=Cm();function e(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:h,containerInfo:d,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ei.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ei.createPortal=function(h,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(h,d,null,g)},ei.flushSync=function(h){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=d,a.p=g,a.d.f()}},ei.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(h,d))},ei.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},ei.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(h,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ei.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(h)},ei.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin);a.d.L(h,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ei.preloadModule=function(h,d){if(typeof h=="string")if(d){var g=f(d.as,d.crossOrigin);a.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(h)},ei.requestFormReset=function(h){a.d.r(h)},ei.unstable_batchedUpdates=function(h,d){return h(d)},ei.useFormState=function(h,d,g){return u.H.useFormState(h,d,g)},ei.useFormStatus=function(){return u.H.useHostTransitionStatus()},ei.version="19.2.3",ei}var K_;function zb(){if(K_)return zd.exports;K_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zd.exports=Ib(),zd.exports}var J_;function Bb(){if(J_)return Cl;J_=1;var o=Ob(),e=Cm(),t=zb();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,r=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(r=i.return),n=i.return;while(n)}return i.tag===3?r:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(l(n)!==n)throw Error(a(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var r=n,c=i;;){var p=r.return;if(p===null)break;var m=p.alternate;if(m===null){if(c=p.return,c!==null){r=c;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===r)return h(p),n;if(m===c)return h(p),i;m=m.sibling}throw Error(a(188))}if(r.return!==c.return)r=p,c=m;else{for(var b=!1,C=p.child;C;){if(C===r){b=!0,r=p,c=m;break}if(C===c){b=!0,c=p,r=m;break}C=C.sibling}if(!b){for(C=m.child;C;){if(C===r){b=!0,r=m,c=p;break}if(C===c){b=!0,c=m,r=p;break}C=C.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==c)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),R=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Symbol.for("react.client.reference");function le(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ee?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case U:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case M:return"Portal";case R:return n.displayName||"Context";case L:return(n._context.displayName||"Context")+".Consumer";case w:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I:return i=n.displayName||null,i!==null?i:le(n.type)||"Memo";case j:i=n._payload,n=n._init;try{return le(n(i))}catch{}}return null}var Y=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Te=[],Me=-1;function z(n){return{current:n}}function ie(n){0>Me||(n.current=Te[Me],Te[Me]=null,Me--)}function _e(n,i){Me++,Te[Me]=n.current,n.current=i}var we=z(null),Be=z(null),oe=z(null),ve=z(null);function Ve(n,i){switch(_e(oe,i),_e(Be,n),_e(we,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?h_(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=h_(i),n=d_(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ie(we),_e(we,n)}function ke(){ie(we),ie(Be),ie(oe)}function Ke(n){n.memoizedState!==null&&_e(ve,n);var i=we.current,r=d_(i,n.type);i!==r&&(_e(Be,n),_e(we,r))}function vt(n){Be.current===n&&(ie(we),ie(Be)),ve.current===n&&(ie(ve),Tl._currentValue=ne)}var wt,pt;function Ee(n){if(wt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);wt=i&&i[1]||"",pt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wt+n+pt}var Pe=!1;function Re(n,i){if(!n||Pe)return"";Pe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(me){var fe=me}Reflect.construct(n,[],Ce)}else{try{Ce.call()}catch(me){fe=me}n.call(Ce.prototype)}}else{try{throw Error()}catch(me){fe=me}(Ce=n())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(me){if(me&&fe&&typeof me.stack=="string")return[me.stack,fe.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),b=m[0],C=m[1];if(b&&C){var X=b.split(`
`),re=C.split(`
`);for(p=c=0;c<X.length&&!X[c].includes("DetermineComponentFrameRoot");)c++;for(;p<re.length&&!re[p].includes("DetermineComponentFrameRoot");)p++;if(c===X.length||p===re.length)for(c=X.length-1,p=re.length-1;1<=c&&0<=p&&X[c]!==re[p];)p--;for(;1<=c&&0<=p;c--,p--)if(X[c]!==re[p]){if(c!==1||p!==1)do if(c--,p--,0>p||X[c]!==re[p]){var Se=`
`+X[c].replace(" at new "," at ");return n.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",n.displayName)),Se}while(1<=c&&0<=p);break}}}finally{Pe=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?Ee(r):""}function je(n,i){switch(n.tag){case 26:case 27:case 5:return Ee(n.type);case 16:return Ee("Lazy");case 13:return n.child!==i&&i!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Re(n.type,!1);case 11:return Re(n.type.render,!1);case 1:return Re(n.type,!0);case 31:return Ee("Activity");default:return""}}function F(n){try{var i="",r=null;do i+=je(n,r),r=n,n=n.return;while(n);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var at=Object.prototype.hasOwnProperty,Ye=o.unstable_scheduleCallback,lt=o.unstable_cancelCallback,He=o.unstable_shouldYield,P=o.unstable_requestPaint,T=o.unstable_now,Z=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,W=o.unstable_UserBlockingPriority,V=o.unstable_NormalPriority,ae=o.unstable_LowPriority,xe=o.unstable_IdlePriority,ye=o.log,ce=o.unstable_setDisableYieldValue,he=null,Le=null;function We(n){if(typeof ye=="function"&&ce(n),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(he,n)}catch{}}var qe=Math.clz32?Math.clz32:q,Fe=Math.log,Ge=Math.LN2;function q(n){return n>>>=0,n===0?32:31-(Fe(n)/Ge|0)|0}var Oe=256,De=262144,Xe=4194304;function Ne(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function be(n,i,r){var c=n.pendingLanes;if(c===0)return 0;var p=0,m=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var C=c&134217727;return C!==0?(c=C&~m,c!==0?p=Ne(c):(b&=C,b!==0?p=Ne(b):r||(r=C&~n,r!==0&&(p=Ne(r))))):(C=c&~m,C!==0?p=Ne(C):b!==0?p=Ne(b):r||(r=c&~n,r!==0&&(p=Ne(r)))),p===0?0:i!==0&&i!==p&&(i&m)===0&&(m=p&-p,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:p}function ze(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function _t(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var n=Xe;return Xe<<=1,(Xe&62914560)===0&&(Xe=4194304),n}function Ue(n){for(var i=[],r=0;31>r;r++)i.push(n);return i}function Je(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function it(n,i,r,c,p,m){var b=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var C=n.entanglements,X=n.expirationTimes,re=n.hiddenUpdates;for(r=b&~r;0<r;){var Se=31-qe(r),Ce=1<<Se;C[Se]=0,X[Se]=-1;var fe=re[Se];if(fe!==null)for(re[Se]=null,Se=0;Se<fe.length;Se++){var me=fe[Se];me!==null&&(me.lane&=-536870913)}r&=~Ce}c!==0&&Rt(n,c,0),m!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=m&~(b&~i))}function Rt(n,i,r){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-qe(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|r&261930}function Tt(n,i){var r=n.entangledLanes|=i;for(n=n.entanglements;r;){var c=31-qe(r),p=1<<c;p&i|n[c]&i&&(n[c]|=i),r&=~p}}function vn(n,i){var r=i&-i;return r=(r&42)!==0?1:Cn(r),(r&(n.suspendedLanes|i))!==0?0:r}function Cn(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function rn(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function $n(){var n=G.p;return n!==0?n:(n=window.event,n===void 0?32:I_(n.type))}function xn(n,i){var r=G.p;try{return G.p=n,i()}finally{G.p=r}}var Bn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Bn,en="__reactProps$"+Bn,ai="__reactContainer$"+Bn,Qa="__reactEvents$"+Bn,$a="__reactListeners$"+Bn,pc="__reactHandles$"+Bn,Fo="__reactResources$"+Bn,zs="__reactMarker$"+Bn;function Ho(n){delete n[ln],delete n[en],delete n[Qa],delete n[$a],delete n[pc]}function es(n){var i=n[ln];if(i)return i;for(var r=n.parentNode;r;){if(i=r[ai]||r[ln]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(n=y_(n);n!==null;){if(r=n[ln])return r;n=y_(n)}return i}n=r,r=n.parentNode}return null}function ts(n){if(n=n[ln]||n[ai]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function Bs(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function ns(n){var i=n[Fo];return i||(i=n[Fo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function D(n){n[zs]=!0}var Q=new Set,de={};function ue(n,i){te(n,i),te(n+"Capture",i)}function te(n,i){for(de[n]=i,n=0;n<i.length;n++)Q.add(i[n])}var Ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},Qe={};function tt(n){return at.call(Qe,n)?!0:at.call(et,n)?!1:Ze.test(n)?Qe[n]=!0:(et[n]=!0,!1)}function st(n,i,r){if(tt(i))if(r===null)n.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+r)}}function dt(n,i,r){if(r===null)n.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+r)}}function rt(n,i,r,c){if(c===null)n.removeAttribute(r);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttributeNS(i,r,""+c)}}function mt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xt(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pn(n,i,r){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,m=c.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){r=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:c.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function cn(n){if(!n._valueTracker){var i=Xt(n)?"checked":"value";n._valueTracker=pn(n,i,""+n[i])}}function jt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var r=i.getValue(),c="";return n&&(c=Xt(n)?n.checked?"true":"false":n.value),n=c,n!==r?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Wt=/[\n"\\]/g;function yt(n){return n.replace(Wt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function kn(n,i,r,c,p,m,b,C){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),i!=null?b==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+mt(i)):n.value!==""+mt(i)&&(n.value=""+mt(i)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),i!=null?Xn(n,b,mt(i)):r!=null?Xn(n,b,mt(r)):c!=null&&n.removeAttribute("value"),p==null&&m!=null&&(n.defaultChecked=!!m),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?n.name=""+mt(C):n.removeAttribute("name")}function Sa(n,i,r,c,p,m,b,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){cn(n);return}r=r!=null?""+mt(r):"",i=i!=null?""+mt(i):r,C||i===n.value||(n.value=i),n.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=C?n.checked:!!c,n.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),cn(n)}function Xn(n,i,r){i==="number"&&ut(n.ownerDocument)===n||n.defaultValue===""+r||(n.defaultValue=""+r)}function Li(n,i,r,c){if(n=n.options,i){i={};for(var p=0;p<r.length;p++)i["$"+r[p]]=!0;for(r=0;r<n.length;r++)p=i.hasOwnProperty("$"+n[r].value),n[r].selected!==p&&(n[r].selected=p),p&&c&&(n[r].defaultSelected=!0)}else{for(r=""+mt(r),i=null,p=0;p<n.length;p++){if(n[p].value===r){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function Zt(n,i,r){if(i!=null&&(i=""+mt(i),i!==n.value&&(n.value=i),r==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=r!=null?""+mt(r):""}function Wn(n,i,r,c){if(i==null){if(c!=null){if(r!=null)throw Error(a(92));if(Y(c)){if(1<c.length)throw Error(a(93));c=c[0]}r=c}r==null&&(r=""),i=r}r=mt(i),n.defaultValue=r,c=n.textContent,c===r&&c!==""&&c!==null&&(n.value=c),cn(n)}function Dn(n,i){if(i){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=i;return}}n.textContent=i}var qn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jn(n,i,r){var c=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,r):typeof r!="number"||r===0||qn.has(i)?i==="float"?n.cssFloat=r:n[i]=(""+r).trim():n[i]=r+"px"}function Sr(n,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,r!=null){for(var c in r)!r.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&r[p]!==c&&jn(n,p,c)}else for(var m in i)i.hasOwnProperty(m)&&jn(n,m,i[m])}function Yi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),RS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mc(n){return RS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Ma(){}var Cf=null;function Df(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Mr=null,br=null;function f0(n){var i=ts(n);if(i&&(n=i.stateNode)){var r=n[en]||null;e:switch(n=i.stateNode,i.type){case"input":if(kn(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+yt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var c=r[i];if(c!==n&&c.form===n.form){var p=c[en]||null;if(!p)throw Error(a(90));kn(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<r.length;i++)c=r[i],c.form===n.form&&jt(c)}break e;case"textarea":Zt(n,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Li(n,!!r.multiple,i,!1)}}}var Nf=!1;function h0(n,i,r){if(Nf)return n(i,r);Nf=!0;try{var c=n(i);return c}finally{if(Nf=!1,(Mr!==null||br!==null)&&(nu(),Mr&&(i=Mr,n=br,br=Mr=null,f0(i),n)))for(i=0;i<n.length;i++)f0(n[i])}}function Go(n,i){var r=n.stateNode;if(r===null)return null;var c=r[en]||null;if(c===null)return null;r=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=!1;if(ba)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Lf=!1}var is=null,Uf=null,gc=null;function d0(){if(gc)return gc;var n,i=Uf,r=i.length,c,p="value"in is?is.value:is.textContent,m=p.length;for(n=0;n<r&&i[n]===p[n];n++);var b=r-n;for(c=1;c<=b&&i[r-c]===p[m-c];c++);return gc=p.slice(n,1<c?1-c:void 0)}function vc(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function _c(){return!0}function p0(){return!1}function ui(n){function i(r,c,p,m,b){this._reactName=r,this._targetInst=p,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(r=n[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_c:p0,this.isPropagationStopped=p0,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_c)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_c)},persist:function(){},isPersistent:_c}),i}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=ui(Fs),ko=v({},Fs,{view:0,detail:0}),CS=ui(ko),Pf,Of,Xo,yc=v({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xo&&(Xo&&n.type==="mousemove"?(Pf=n.screenX-Xo.screenX,Of=n.screenY-Xo.screenY):Of=Pf=0,Xo=n),Pf)},movementY:function(n){return"movementY"in n?n.movementY:Of}}),m0=ui(yc),DS=v({},yc,{dataTransfer:0}),NS=ui(DS),LS=v({},ko,{relatedTarget:0}),If=ui(LS),US=v({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),PS=ui(US),OS=v({},Fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),IS=ui(OS),zS=v({},Fs,{data:0}),g0=ui(zS),BS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=HS[n])?!!i[n]:!1}function zf(){return GS}var VS=v({},ko,{key:function(n){if(n.key){var i=BS[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=vc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?FS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(n){return n.type==="keypress"?vc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kS=ui(VS),XS=v({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),v0=ui(XS),WS=v({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),qS=ui(WS),jS=v({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),YS=ui(jS),ZS=v({},yc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=ui(ZS),JS=v({},Fs,{newState:0,oldState:0}),QS=ui(JS),$S=[9,13,27,32],Bf=ba&&"CompositionEvent"in window,Wo=null;ba&&"documentMode"in document&&(Wo=document.documentMode);var eM=ba&&"TextEvent"in window&&!Wo,_0=ba&&(!Bf||Wo&&8<Wo&&11>=Wo),x0=" ",y0=!1;function S0(n,i){switch(n){case"keyup":return $S.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Tr=!1;function tM(n,i){switch(n){case"compositionend":return M0(i);case"keypress":return i.which!==32?null:(y0=!0,x0);case"textInput":return n=i.data,n===x0&&y0?null:n;default:return null}}function nM(n,i){if(Tr)return n==="compositionend"||!Bf&&S0(n,i)?(n=d0(),gc=Uf=is=null,Tr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _0&&i.locale!=="ko"?null:i.data;default:return null}}var iM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b0(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!iM[n.type]:i==="textarea"}function T0(n,i,r,c){Mr?br?br.push(c):br=[c]:Mr=c,i=cu(i,"onChange"),0<i.length&&(r=new xc("onChange","change",null,r,c),n.push({event:r,listeners:i}))}var qo=null,jo=null;function aM(n){r_(n,0)}function Sc(n){var i=Bs(n);if(jt(i))return n}function E0(n,i){if(n==="change")return i}var A0=!1;if(ba){var Ff;if(ba){var Hf="oninput"in document;if(!Hf){var w0=document.createElement("div");w0.setAttribute("oninput","return;"),Hf=typeof w0.oninput=="function"}Ff=Hf}else Ff=!1;A0=Ff&&(!document.documentMode||9<document.documentMode)}function R0(){qo&&(qo.detachEvent("onpropertychange",C0),jo=qo=null)}function C0(n){if(n.propertyName==="value"&&Sc(jo)){var i=[];T0(i,jo,n,Df(n)),h0(aM,i)}}function sM(n,i,r){n==="focusin"?(R0(),qo=i,jo=r,qo.attachEvent("onpropertychange",C0)):n==="focusout"&&R0()}function rM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sc(jo)}function oM(n,i){if(n==="click")return Sc(i)}function lM(n,i){if(n==="input"||n==="change")return Sc(i)}function cM(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var yi=typeof Object.is=="function"?Object.is:cM;function Yo(n,i){if(yi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var r=Object.keys(n),c=Object.keys(i);if(r.length!==c.length)return!1;for(c=0;c<r.length;c++){var p=r[c];if(!at.call(i,p)||!yi(n[p],i[p]))return!1}return!0}function D0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function N0(n,i){var r=D0(n);n=0;for(var c;r;){if(r.nodeType===3){if(c=n+r.textContent.length,n<=i&&c>=i)return{node:r,offset:i-n};n=c}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=D0(r)}}function L0(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?L0(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function U0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=ut(n.document);i instanceof n.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)n=i.contentWindow;else break;i=ut(n.document)}return i}function Gf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var uM=ba&&"documentMode"in document&&11>=document.documentMode,Er=null,Vf=null,Zo=null,kf=!1;function P0(n,i,r){var c=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;kf||Er==null||Er!==ut(c)||(c=Er,"selectionStart"in c&&Gf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Zo&&Yo(Zo,c)||(Zo=c,c=cu(Vf,"onSelect"),0<c.length&&(i=new xc("onSelect","select",null,i,r),n.push({event:i,listeners:c}),i.target=Er)))}function Hs(n,i){var r={};return r[n.toLowerCase()]=i.toLowerCase(),r["Webkit"+n]="webkit"+i,r["Moz"+n]="moz"+i,r}var Ar={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},Xf={},O0={};ba&&(O0=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Gs(n){if(Xf[n])return Xf[n];if(!Ar[n])return n;var i=Ar[n],r;for(r in i)if(i.hasOwnProperty(r)&&r in O0)return Xf[n]=i[r];return n}var I0=Gs("animationend"),z0=Gs("animationiteration"),B0=Gs("animationstart"),fM=Gs("transitionrun"),hM=Gs("transitionstart"),dM=Gs("transitioncancel"),F0=Gs("transitionend"),H0=new Map,Wf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wf.push("scrollEnd");function Zi(n,i){H0.set(n,i),ue(i,[n])}var Mc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Ui=[],wr=0,qf=0;function bc(){for(var n=wr,i=qf=wr=0;i<n;){var r=Ui[i];Ui[i++]=null;var c=Ui[i];Ui[i++]=null;var p=Ui[i];Ui[i++]=null;var m=Ui[i];if(Ui[i++]=null,c!==null&&p!==null){var b=c.pending;b===null?p.next=p:(p.next=b.next,b.next=p),c.pending=p}m!==0&&G0(r,p,m)}}function Tc(n,i,r,c){Ui[wr++]=n,Ui[wr++]=i,Ui[wr++]=r,Ui[wr++]=c,qf|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function jf(n,i,r,c){return Tc(n,i,r,c),Ec(n)}function Vs(n,i){return Tc(n,null,null,i),Ec(n)}function G0(n,i,r){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r);for(var p=!1,m=n.return;m!==null;)m.childLanes|=r,c=m.alternate,c!==null&&(c.childLanes|=r),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(p=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,p&&i!==null&&(p=31-qe(r),n=m.hiddenUpdates,c=n[p],c===null?n[p]=[i]:c.push(i),i.lane=r|536870912),m):null}function Ec(n){if(50<vl)throw vl=0,nd=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Rr={};function pM(n,i,r,c){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(n,i,r,c){return new pM(n,i,r,c)}function Yf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ta(n,i){var r=n.alternate;return r===null?(r=Si(n.tag,i,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=i,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&65011712,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,i=n.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function V0(n,i){n.flags&=65011714;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,i=r.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Ac(n,i,r,c,p,m){var b=0;if(c=n,typeof n=="function")Yf(n)&&(b=1);else if(typeof n=="string")b=xb(n,r,we.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case A:return n=Si(31,r,i,p),n.elementType=A,n.lanes=m,n;case E:return ks(r.children,p,m,i);case S:b=8,p|=24;break;case y:return n=Si(12,r,i,p|2),n.elementType=y,n.lanes=m,n;case U:return n=Si(13,r,i,p),n.elementType=U,n.lanes=m,n;case B:return n=Si(19,r,i,p),n.elementType=B,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:b=10;break e;case L:b=9;break e;case w:b=11;break e;case I:b=14;break e;case j:b=16,c=null;break e}b=29,r=Error(a(130,n===null?"null":typeof n,"")),c=null}return i=Si(b,r,i,p),i.elementType=n,i.type=c,i.lanes=m,i}function ks(n,i,r,c){return n=Si(7,n,c,i),n.lanes=r,n}function Zf(n,i,r){return n=Si(6,n,null,i),n.lanes=r,n}function k0(n){var i=Si(18,null,null,0);return i.stateNode=n,i}function Kf(n,i,r){return i=Si(4,n.children!==null?n.children:[],n.key,i),i.lanes=r,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var X0=new WeakMap;function Pi(n,i){if(typeof n=="object"&&n!==null){var r=X0.get(n);return r!==void 0?r:(i={value:n,source:i,stack:F(i)},X0.set(n,i),i)}return{value:n,source:i,stack:F(i)}}var Cr=[],Dr=0,wc=null,Ko=0,Oi=[],Ii=0,as=null,oa=1,la="";function Ea(n,i){Cr[Dr++]=Ko,Cr[Dr++]=wc,wc=n,Ko=i}function W0(n,i,r){Oi[Ii++]=oa,Oi[Ii++]=la,Oi[Ii++]=as,as=n;var c=oa;n=la;var p=32-qe(c)-1;c&=~(1<<p),r+=1;var m=32-qe(i)+p;if(30<m){var b=p-p%5;m=(c&(1<<b)-1).toString(32),c>>=b,p-=b,oa=1<<32-qe(i)+p|r<<p|c,la=m+n}else oa=1<<m|r<<p|c,la=n}function Jf(n){n.return!==null&&(Ea(n,1),W0(n,1,0))}function Qf(n){for(;n===wc;)wc=Cr[--Dr],Cr[Dr]=null,Ko=Cr[--Dr],Cr[Dr]=null;for(;n===as;)as=Oi[--Ii],Oi[Ii]=null,la=Oi[--Ii],Oi[Ii]=null,oa=Oi[--Ii],Oi[Ii]=null}function q0(n,i){Oi[Ii++]=oa,Oi[Ii++]=la,Oi[Ii++]=as,oa=i.id,la=i.overflow,as=n}var Yn=null,un=null,Ht=!1,ss=null,zi=!1,$f=Error(a(519));function rs(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jo(Pi(i,n)),$f}function j0(n){var i=n.stateNode,r=n.type,c=n.memoizedProps;switch(i[ln]=n,i[en]=c,r){case"dialog":Ut("cancel",i),Ut("close",i);break;case"iframe":case"object":case"embed":Ut("load",i);break;case"video":case"audio":for(r=0;r<xl.length;r++)Ut(xl[r],i);break;case"source":Ut("error",i);break;case"img":case"image":case"link":Ut("error",i),Ut("load",i);break;case"details":Ut("toggle",i);break;case"input":Ut("invalid",i),Sa(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ut("invalid",i);break;case"textarea":Ut("invalid",i),Wn(i,c.value,c.defaultValue,c.children)}r=c.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||c.suppressHydrationWarning===!0||u_(i.textContent,r)?(c.popover!=null&&(Ut("beforetoggle",i),Ut("toggle",i)),c.onScroll!=null&&Ut("scroll",i),c.onScrollEnd!=null&&Ut("scrollend",i),c.onClick!=null&&(i.onclick=Ma),i=!0):i=!1,i||rs(n,!0)}function Y0(n){for(Yn=n.return;Yn;)switch(Yn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Yn=Yn.return}}function Nr(n){if(n!==Yn)return!1;if(!Ht)return Y0(n),Ht=!0,!1;var i=n.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=n.type,r=!(r!=="form"&&r!=="button")||vd(n.type,n.memoizedProps)),r=!r),r&&un&&rs(n),Y0(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));un=x_(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));un=x_(n)}else i===27?(i=un,ys(n.type)?(n=Md,Md=null,un=n):un=i):un=Yn?Fi(n.stateNode.nextSibling):null;return!0}function Xs(){un=Yn=null,Ht=!1}function eh(){var n=ss;return n!==null&&(pi===null?pi=n:pi.push.apply(pi,n),ss=null),n}function Jo(n){ss===null?ss=[n]:ss.push(n)}var th=z(null),Ws=null,Aa=null;function os(n,i,r){_e(th,i._currentValue),i._currentValue=r}function wa(n){n._currentValue=th.current,ie(th)}function nh(n,i,r){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===r)break;n=n.return}}function ih(n,i,r,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var m=p.dependencies;if(m!==null){var b=p.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=p;for(var X=0;X<i.length;X++)if(C.context===i[X]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),nh(m.return,r,n),c||(b=null);break e}m=C.next}}else if(p.tag===18){if(b=p.return,b===null)throw Error(a(341));b.lanes|=r,m=b.alternate,m!==null&&(m.lanes|=r),nh(b,r,n),b=null}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===n){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}}function Lr(n,i,r,c){n=null;for(var p=i,m=!1;p!==null;){if(!m){if((p.flags&524288)!==0)m=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var b=p.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var C=p.type;yi(p.pendingProps.value,b.value)||(n!==null?n.push(C):n=[C])}}else if(p===ve.current){if(b=p.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(Tl):n=[Tl])}p=p.return}n!==null&&ih(i,n,r,c),i.flags|=262144}function Rc(n){for(n=n.firstContext;n!==null;){if(!yi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function qs(n){Ws=n,Aa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Zn(n){return Z0(Ws,n)}function Cc(n,i){return Ws===null&&qs(n),Z0(n,i)}function Z0(n,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Aa===null){if(n===null)throw Error(a(308));Aa=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Aa=Aa.next=i;return r}var mM=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(r,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(r){return r()})}},gM=o.unstable_scheduleCallback,vM=o.unstable_NormalPriority,Tn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ah(){return{controller:new mM,data:new Map,refCount:0}}function Qo(n){n.refCount--,n.refCount===0&&gM(vM,function(){n.controller.abort()})}var $o=null,sh=0,Ur=0,Pr=null;function _M(n,i){if($o===null){var r=$o=[];sh=0,Ur=ld(),Pr={status:"pending",value:void 0,then:function(c){r.push(c)}}}return sh++,i.then(K0,K0),i}function K0(){if(--sh===0&&$o!==null){Pr!==null&&(Pr.status="fulfilled");var n=$o;$o=null,Ur=0,Pr=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function xM(n,i){var r=[],c={status:"pending",value:null,reason:null,then:function(p){r.push(p)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<r.length;p++)(0,r[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<r.length;p++)(0,r[p])(void 0)}),c}var J0=O.S;O.S=function(n,i){Pv=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&_M(n,i),J0!==null&&J0(n,i)};var js=z(null);function rh(){var n=js.current;return n!==null?n:on.pooledCache}function Dc(n,i){i===null?_e(js,js.current):_e(js,i.pool)}function Q0(){var n=rh();return n===null?null:{parent:Tn._currentValue,pool:n}}var Or=Error(a(460)),oh=Error(a(474)),Nc=Error(a(542)),Lc={then:function(){}};function $0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function eg(n,i,r){switch(r=n[r],r===void 0?n.push(i):r!==i&&(i.then(Ma,Ma),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,ng(n),n;default:if(typeof i.status=="string")i.then(Ma,Ma);else{if(n=on,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,ng(n),n}throw Zs=i,Or}}function Ys(n){try{var i=n._init;return i(n._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Zs=r,Or):r}}var Zs=null;function tg(){if(Zs===null)throw Error(a(459));var n=Zs;return Zs=null,n}function ng(n){if(n===Or||n===Nc)throw Error(a(483))}var Ir=null,el=0;function Uc(n){var i=el;return el+=1,Ir===null&&(Ir=[]),eg(Ir,n,i)}function tl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Pc(n,i){throw i.$$typeof===_?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function ig(n){function i($,K){if(n){var se=$.deletions;se===null?($.deletions=[K],$.flags|=16):se.push(K)}}function r($,K){if(!n)return null;for(;K!==null;)i($,K),K=K.sibling;return null}function c($){for(var K=new Map;$!==null;)$.key!==null?K.set($.key,$):K.set($.index,$),$=$.sibling;return K}function p($,K){return $=Ta($,K),$.index=0,$.sibling=null,$}function m($,K,se){return $.index=se,n?(se=$.alternate,se!==null?(se=se.index,se<K?($.flags|=67108866,K):se):($.flags|=67108866,K)):($.flags|=1048576,K)}function b($){return n&&$.alternate===null&&($.flags|=67108866),$}function C($,K,se,Ae){return K===null||K.tag!==6?(K=Zf(se,$.mode,Ae),K.return=$,K):(K=p(K,se),K.return=$,K)}function X($,K,se,Ae){var ht=se.type;return ht===E?Se($,K,se.props.children,Ae,se.key):K!==null&&(K.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===j&&Ys(ht)===K.type)?(K=p(K,se.props),tl(K,se),K.return=$,K):(K=Ac(se.type,se.key,se.props,null,$.mode,Ae),tl(K,se),K.return=$,K)}function re($,K,se,Ae){return K===null||K.tag!==4||K.stateNode.containerInfo!==se.containerInfo||K.stateNode.implementation!==se.implementation?(K=Kf(se,$.mode,Ae),K.return=$,K):(K=p(K,se.children||[]),K.return=$,K)}function Se($,K,se,Ae,ht){return K===null||K.tag!==7?(K=ks(se,$.mode,Ae,ht),K.return=$,K):(K=p(K,se),K.return=$,K)}function Ce($,K,se){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Zf(""+K,$.mode,se),K.return=$,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return se=Ac(K.type,K.key,K.props,null,$.mode,se),tl(se,K),se.return=$,se;case M:return K=Kf(K,$.mode,se),K.return=$,K;case j:return K=Ys(K),Ce($,K,se)}if(Y(K)||J(K))return K=ks(K,$.mode,se,null),K.return=$,K;if(typeof K.then=="function")return Ce($,Uc(K),se);if(K.$$typeof===R)return Ce($,Cc($,K),se);Pc($,K)}return null}function fe($,K,se,Ae){var ht=K!==null?K.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return ht!==null?null:C($,K,""+se,Ae);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case x:return se.key===ht?X($,K,se,Ae):null;case M:return se.key===ht?re($,K,se,Ae):null;case j:return se=Ys(se),fe($,K,se,Ae)}if(Y(se)||J(se))return ht!==null?null:Se($,K,se,Ae,null);if(typeof se.then=="function")return fe($,K,Uc(se),Ae);if(se.$$typeof===R)return fe($,K,Cc($,se),Ae);Pc($,se)}return null}function me($,K,se,Ae,ht){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return $=$.get(se)||null,C(K,$,""+Ae,ht);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case x:return $=$.get(Ae.key===null?se:Ae.key)||null,X(K,$,Ae,ht);case M:return $=$.get(Ae.key===null?se:Ae.key)||null,re(K,$,Ae,ht);case j:return Ae=Ys(Ae),me($,K,se,Ae,ht)}if(Y(Ae)||J(Ae))return $=$.get(se)||null,Se(K,$,Ae,ht,null);if(typeof Ae.then=="function")return me($,K,se,Uc(Ae),ht);if(Ae.$$typeof===R)return me($,K,se,Cc(K,Ae),ht);Pc(K,Ae)}return null}function nt($,K,se,Ae){for(var ht=null,Gt=null,ot=K,Et=K=0,zt=null;ot!==null&&Et<se.length;Et++){ot.index>Et?(zt=ot,ot=null):zt=ot.sibling;var Vt=fe($,ot,se[Et],Ae);if(Vt===null){ot===null&&(ot=zt);break}n&&ot&&Vt.alternate===null&&i($,ot),K=m(Vt,K,Et),Gt===null?ht=Vt:Gt.sibling=Vt,Gt=Vt,ot=zt}if(Et===se.length)return r($,ot),Ht&&Ea($,Et),ht;if(ot===null){for(;Et<se.length;Et++)ot=Ce($,se[Et],Ae),ot!==null&&(K=m(ot,K,Et),Gt===null?ht=ot:Gt.sibling=ot,Gt=ot);return Ht&&Ea($,Et),ht}for(ot=c(ot);Et<se.length;Et++)zt=me(ot,$,Et,se[Et],Ae),zt!==null&&(n&&zt.alternate!==null&&ot.delete(zt.key===null?Et:zt.key),K=m(zt,K,Et),Gt===null?ht=zt:Gt.sibling=zt,Gt=zt);return n&&ot.forEach(function(Es){return i($,Es)}),Ht&&Ea($,Et),ht}function gt($,K,se,Ae){if(se==null)throw Error(a(151));for(var ht=null,Gt=null,ot=K,Et=K=0,zt=null,Vt=se.next();ot!==null&&!Vt.done;Et++,Vt=se.next()){ot.index>Et?(zt=ot,ot=null):zt=ot.sibling;var Es=fe($,ot,Vt.value,Ae);if(Es===null){ot===null&&(ot=zt);break}n&&ot&&Es.alternate===null&&i($,ot),K=m(Es,K,Et),Gt===null?ht=Es:Gt.sibling=Es,Gt=Es,ot=zt}if(Vt.done)return r($,ot),Ht&&Ea($,Et),ht;if(ot===null){for(;!Vt.done;Et++,Vt=se.next())Vt=Ce($,Vt.value,Ae),Vt!==null&&(K=m(Vt,K,Et),Gt===null?ht=Vt:Gt.sibling=Vt,Gt=Vt);return Ht&&Ea($,Et),ht}for(ot=c(ot);!Vt.done;Et++,Vt=se.next())Vt=me(ot,$,Et,Vt.value,Ae),Vt!==null&&(n&&Vt.alternate!==null&&ot.delete(Vt.key===null?Et:Vt.key),K=m(Vt,K,Et),Gt===null?ht=Vt:Gt.sibling=Vt,Gt=Vt);return n&&ot.forEach(function(Db){return i($,Db)}),Ht&&Ea($,Et),ht}function an($,K,se,Ae){if(typeof se=="object"&&se!==null&&se.type===E&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case x:e:{for(var ht=se.key;K!==null;){if(K.key===ht){if(ht=se.type,ht===E){if(K.tag===7){r($,K.sibling),Ae=p(K,se.props.children),Ae.return=$,$=Ae;break e}}else if(K.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===j&&Ys(ht)===K.type){r($,K.sibling),Ae=p(K,se.props),tl(Ae,se),Ae.return=$,$=Ae;break e}r($,K);break}else i($,K);K=K.sibling}se.type===E?(Ae=ks(se.props.children,$.mode,Ae,se.key),Ae.return=$,$=Ae):(Ae=Ac(se.type,se.key,se.props,null,$.mode,Ae),tl(Ae,se),Ae.return=$,$=Ae)}return b($);case M:e:{for(ht=se.key;K!==null;){if(K.key===ht)if(K.tag===4&&K.stateNode.containerInfo===se.containerInfo&&K.stateNode.implementation===se.implementation){r($,K.sibling),Ae=p(K,se.children||[]),Ae.return=$,$=Ae;break e}else{r($,K);break}else i($,K);K=K.sibling}Ae=Kf(se,$.mode,Ae),Ae.return=$,$=Ae}return b($);case j:return se=Ys(se),an($,K,se,Ae)}if(Y(se))return nt($,K,se,Ae);if(J(se)){if(ht=J(se),typeof ht!="function")throw Error(a(150));return se=ht.call(se),gt($,K,se,Ae)}if(typeof se.then=="function")return an($,K,Uc(se),Ae);if(se.$$typeof===R)return an($,K,Cc($,se),Ae);Pc($,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,K!==null&&K.tag===6?(r($,K.sibling),Ae=p(K,se),Ae.return=$,$=Ae):(r($,K),Ae=Zf(se,$.mode,Ae),Ae.return=$,$=Ae),b($)):r($,K)}return function($,K,se,Ae){try{el=0;var ht=an($,K,se,Ae);return Ir=null,ht}catch(ot){if(ot===Or||ot===Nc)throw ot;var Gt=Si(29,ot,null,$.mode);return Gt.lanes=Ae,Gt.return=$,Gt}finally{}}}var Ks=ig(!0),ag=ig(!1),ls=!1;function lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ch(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function cs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function us(n,i,r){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(qt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=Ec(n),G0(n,null,r),i}return Tc(n,c,i,r),Ec(n)}function nl(n,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,r|=c,i.lanes=r,Tt(n,r)}}function uh(n,i){var r=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,r===c)){var p=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?p=m=b:m=m.next=b,r=r.next}while(r!==null);m===null?p=m=i:m=m.next=i}else p=m=i;r={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=i:n.next=i,r.lastBaseUpdate=i}var fh=!1;function il(){if(fh){var n=Pr;if(n!==null)throw n}}function al(n,i,r,c){fh=!1;var p=n.updateQueue;ls=!1;var m=p.firstBaseUpdate,b=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var X=C,re=X.next;X.next=null,b===null?m=re:b.next=re,b=X;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,C=Se.lastBaseUpdate,C!==b&&(C===null?Se.firstBaseUpdate=re:C.next=re,Se.lastBaseUpdate=X))}if(m!==null){var Ce=p.baseState;b=0,Se=re=X=null,C=m;do{var fe=C.lane&-536870913,me=fe!==C.lane;if(me?(It&fe)===fe:(c&fe)===fe){fe!==0&&fe===Ur&&(fh=!0),Se!==null&&(Se=Se.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var nt=n,gt=C;fe=i;var an=r;switch(gt.tag){case 1:if(nt=gt.payload,typeof nt=="function"){Ce=nt.call(an,Ce,fe);break e}Ce=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=gt.payload,fe=typeof nt=="function"?nt.call(an,Ce,fe):nt,fe==null)break e;Ce=v({},Ce,fe);break e;case 2:ls=!0}}fe=C.callback,fe!==null&&(n.flags|=64,me&&(n.flags|=8192),me=p.callbacks,me===null?p.callbacks=[fe]:me.push(fe))}else me={lane:fe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Se===null?(re=Se=me,X=Ce):Se=Se.next=me,b|=fe;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;me=C,C=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);Se===null&&(X=Ce),p.baseState=X,p.firstBaseUpdate=re,p.lastBaseUpdate=Se,m===null&&(p.shared.lanes=0),ms|=b,n.lanes=b,n.memoizedState=Ce}}function sg(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function rg(n,i){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)sg(r[n],i)}var zr=z(null),Oc=z(0);function og(n,i){n=Ia,_e(Oc,n),_e(zr,i),Ia=n|i.baseLanes}function hh(){_e(Oc,Ia),_e(zr,zr.current)}function dh(){Ia=Oc.current,ie(zr),ie(Oc)}var Mi=z(null),Bi=null;function fs(n){var i=n.alternate;_e(Mn,Mn.current&1),_e(Mi,n),Bi===null&&(i===null||zr.current!==null||i.memoizedState!==null)&&(Bi=n)}function ph(n){_e(Mn,Mn.current),_e(Mi,n),Bi===null&&(Bi=n)}function lg(n){n.tag===22?(_e(Mn,Mn.current),_e(Mi,n),Bi===null&&(Bi=n)):hs()}function hs(){_e(Mn,Mn.current),_e(Mi,Mi.current)}function bi(n){ie(Mi),Bi===n&&(Bi=null),ie(Mn)}var Mn=z(0);function Ic(n){for(var i=n;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||yd(r)||Sd(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ra=0,Mt=null,tn=null,En=null,zc=!1,Br=!1,Js=!1,Bc=0,sl=0,Fr=null,yM=0;function yn(){throw Error(a(321))}function mh(n,i){if(i===null)return!1;for(var r=0;r<i.length&&r<n.length;r++)if(!yi(n[r],i[r]))return!1;return!0}function gh(n,i,r,c,p,m){return Ra=m,Mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=n===null||n.memoizedState===null?Wg:Nh,Js=!1,m=r(c,p),Js=!1,Br&&(m=ug(i,r,c,p)),cg(n),m}function cg(n){O.H=ll;var i=tn!==null&&tn.next!==null;if(Ra=0,En=tn=Mt=null,zc=!1,sl=0,Fr=null,i)throw Error(a(300));n===null||An||(n=n.dependencies,n!==null&&Rc(n)&&(An=!0))}function ug(n,i,r,c){Mt=n;var p=0;do{if(Br&&(Fr=null),sl=0,Br=!1,25<=p)throw Error(a(301));if(p+=1,En=tn=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=qg,m=i(r,c)}while(Br);return m}function SM(){var n=O.H,i=n.useState()[0];return i=typeof i.then=="function"?rl(i):i,n=n.useState()[0],(tn!==null?tn.memoizedState:null)!==n&&(Mt.flags|=1024),i}function vh(){var n=Bc!==0;return Bc=0,n}function _h(n,i,r){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~r}function xh(n){if(zc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}zc=!1}Ra=0,En=tn=Mt=null,Br=!1,sl=Bc=0,Fr=null}function si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?Mt.memoizedState=En=n:En=En.next=n,En}function bn(){if(tn===null){var n=Mt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=En===null?Mt.memoizedState:En.next;if(i!==null)En=i,tn=n;else{if(n===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},En===null?Mt.memoizedState=En=n:En=En.next=n}return En}function Fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rl(n){var i=sl;return sl+=1,Fr===null&&(Fr=[]),n=eg(Fr,n,i),i=Mt,(En===null?i.memoizedState:En.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?Wg:Nh),n}function Hc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return rl(n);if(n.$$typeof===R)return Zn(n)}throw Error(a(438,String(n)))}function yh(n){var i=null,r=Mt.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var c=Mt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Fc(),Mt.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(n),c=0;c<n;c++)r[c]=N;return i.index++,r}function Ca(n,i){return typeof i=="function"?i(n):i}function Gc(n){var i=bn();return Sh(i,tn,n)}function Sh(n,i,r){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=r;var p=n.baseQueue,m=c.pending;if(m!==null){if(p!==null){var b=p.next;p.next=m.next,m.next=b}i.baseQueue=p=m,c.pending=null}if(m=n.baseState,p===null)n.memoizedState=m;else{i=p.next;var C=b=null,X=null,re=i,Se=!1;do{var Ce=re.lane&-536870913;if(Ce!==re.lane?(It&Ce)===Ce:(Ra&Ce)===Ce){var fe=re.revertLane;if(fe===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Ce===Ur&&(Se=!0);else if((Ra&fe)===fe){re=re.next,fe===Ur&&(Se=!0);continue}else Ce={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},X===null?(C=X=Ce,b=m):X=X.next=Ce,Mt.lanes|=fe,ms|=fe;Ce=re.action,Js&&r(m,Ce),m=re.hasEagerState?re.eagerState:r(m,Ce)}else fe={lane:Ce,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},X===null?(C=X=fe,b=m):X=X.next=fe,Mt.lanes|=Ce,ms|=Ce;re=re.next}while(re!==null&&re!==i);if(X===null?b=m:X.next=C,!yi(m,n.memoizedState)&&(An=!0,Se&&(r=Pr,r!==null)))throw r;n.memoizedState=m,n.baseState=b,n.baseQueue=X,c.lastRenderedState=m}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Mh(n){var i=bn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var c=r.dispatch,p=r.pending,m=i.memoizedState;if(p!==null){r.pending=null;var b=p=p.next;do m=n(m,b.action),b=b.next;while(b!==p);yi(m,i.memoizedState)||(An=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,c]}function fg(n,i,r){var c=Mt,p=bn(),m=Ht;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!yi((tn||p).memoizedState,r);if(b&&(p.memoizedState=r,An=!0),p=p.queue,Eh(pg.bind(null,c,p,n),[n]),p.getSnapshot!==i||b||En!==null&&En.memoizedState.tag&1){if(c.flags|=2048,Hr(9,{destroy:void 0},dg.bind(null,c,p,r,i),null),on===null)throw Error(a(349));m||(Ra&127)!==0||hg(c,i,r)}return r}function hg(n,i,r){n.flags|=16384,n={getSnapshot:i,value:r},i=Mt.updateQueue,i===null?(i=Fc(),Mt.updateQueue=i,i.stores=[n]):(r=i.stores,r===null?i.stores=[n]:r.push(n))}function dg(n,i,r,c){i.value=r,i.getSnapshot=c,mg(i)&&gg(n)}function pg(n,i,r){return r(function(){mg(i)&&gg(n)})}function mg(n){var i=n.getSnapshot;n=n.value;try{var r=i();return!yi(n,r)}catch{return!0}}function gg(n){var i=Vs(n,2);i!==null&&mi(i,n,2)}function bh(n){var i=si();if(typeof n=="function"){var r=n;if(n=r(),Js){We(!0);try{r()}finally{We(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:n},i}function vg(n,i,r,c){return n.baseState=r,Sh(n,tn,typeof c=="function"?c:Ca)}function MM(n,i,r,c,p){if(Xc(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};O.T!==null?r(!0):m.isTransition=!1,c(m),r=i.pending,r===null?(m.next=i.pending=m,_g(i,m)):(m.next=r.next,i.pending=r.next=m)}}function _g(n,i){var r=i.action,c=i.payload,p=n.state;if(i.isTransition){var m=O.T,b={};O.T=b;try{var C=r(p,c),X=O.S;X!==null&&X(b,C),xg(n,i,C)}catch(re){Th(n,i,re)}finally{m!==null&&b.types!==null&&(m.types=b.types),O.T=m}}else try{m=r(p,c),xg(n,i,m)}catch(re){Th(n,i,re)}}function xg(n,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(c){yg(n,i,c)},function(c){return Th(n,i,c)}):yg(n,i,r)}function yg(n,i,r){i.status="fulfilled",i.value=r,Sg(i),n.state=r,i=n.pending,i!==null&&(r=i.next,r===i?n.pending=null:(r=r.next,i.next=r,_g(n,r)))}function Th(n,i,r){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=r,Sg(i),i=i.next;while(i!==c)}n.action=null}function Sg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Mg(n,i){return i}function bg(n,i){if(Ht){var r=on.formState;if(r!==null){e:{var c=Mt;if(Ht){if(un){t:{for(var p=un,m=zi;p.nodeType!==8;){if(!m){p=null;break t}if(p=Fi(p.nextSibling),p===null){p=null;break t}}m=p.data,p=m==="F!"||m==="F"?p:null}if(p){un=Fi(p.nextSibling),c=p.data==="F!";break e}}rs(c)}c=!1}c&&(i=r[0])}}return r=si(),r.memoizedState=r.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mg,lastRenderedState:i},r.queue=c,r=Vg.bind(null,Mt,c),c.dispatch=r,c=bh(!1),m=Dh.bind(null,Mt,!1,c.queue),c=si(),p={state:i,dispatch:null,action:n,pending:null},c.queue=p,r=MM.bind(null,Mt,p,m,r),p.dispatch=r,c.memoizedState=n,[i,r,!1]}function Tg(n){var i=bn();return Eg(i,tn,n)}function Eg(n,i,r){if(i=Sh(n,i,Mg)[0],n=Gc(Ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=rl(i)}catch(b){throw b===Or?Nc:b}else c=i;i=bn();var p=i.queue,m=p.dispatch;return r!==i.memoizedState&&(Mt.flags|=2048,Hr(9,{destroy:void 0},bM.bind(null,p,r),null)),[c,m,n]}function bM(n,i){n.action=i}function Ag(n){var i=bn(),r=tn;if(r!==null)return Eg(i,r,n);bn(),i=i.memoizedState,r=bn();var c=r.queue.dispatch;return r.memoizedState=n,[i,c,!1]}function Hr(n,i,r,c){return n={tag:n,create:r,deps:c,inst:i,next:null},i=Mt.updateQueue,i===null&&(i=Fc(),Mt.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=n.next=n:(c=r.next,r.next=n,n.next=c,i.lastEffect=n),n}function wg(){return bn().memoizedState}function Vc(n,i,r,c){var p=si();Mt.flags|=n,p.memoizedState=Hr(1|i,{destroy:void 0},r,c===void 0?null:c)}function kc(n,i,r,c){var p=bn();c=c===void 0?null:c;var m=p.memoizedState.inst;tn!==null&&c!==null&&mh(c,tn.memoizedState.deps)?p.memoizedState=Hr(i,m,r,c):(Mt.flags|=n,p.memoizedState=Hr(1|i,m,r,c))}function Rg(n,i){Vc(8390656,8,n,i)}function Eh(n,i){kc(2048,8,n,i)}function TM(n){Mt.flags|=4;var i=Mt.updateQueue;if(i===null)i=Fc(),Mt.updateQueue=i,i.events=[n];else{var r=i.events;r===null?i.events=[n]:r.push(n)}}function Cg(n){var i=bn().memoizedState;return TM({ref:i,nextImpl:n}),function(){if((qt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Dg(n,i){return kc(4,2,n,i)}function Ng(n,i){return kc(4,4,n,i)}function Lg(n,i){if(typeof i=="function"){n=n();var r=i(n);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ug(n,i,r){r=r!=null?r.concat([n]):null,kc(4,4,Lg.bind(null,i,n),r)}function Ah(){}function Pg(n,i){var r=bn();i=i===void 0?null:i;var c=r.memoizedState;return i!==null&&mh(i,c[1])?c[0]:(r.memoizedState=[n,i],n)}function Og(n,i){var r=bn();i=i===void 0?null:i;var c=r.memoizedState;if(i!==null&&mh(i,c[1]))return c[0];if(c=n(),Js){We(!0);try{n()}finally{We(!1)}}return r.memoizedState=[c,i],c}function wh(n,i,r){return r===void 0||(Ra&1073741824)!==0&&(It&261930)===0?n.memoizedState=i:(n.memoizedState=r,n=Iv(),Mt.lanes|=n,ms|=n,r)}function Ig(n,i,r,c){return yi(r,i)?r:zr.current!==null?(n=wh(n,r,c),yi(n,i)||(An=!0),n):(Ra&42)===0||(Ra&1073741824)!==0&&(It&261930)===0?(An=!0,n.memoizedState=r):(n=Iv(),Mt.lanes|=n,ms|=n,i)}function zg(n,i,r,c,p){var m=G.p;G.p=m!==0&&8>m?m:8;var b=O.T,C={};O.T=C,Dh(n,!1,i,r);try{var X=p(),re=O.S;if(re!==null&&re(C,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var Se=xM(X,c);ol(n,i,Se,Ai(n))}else ol(n,i,c,Ai(n))}catch(Ce){ol(n,i,{then:function(){},status:"rejected",reason:Ce},Ai())}finally{G.p=m,b!==null&&C.types!==null&&(b.types=C.types),O.T=b}}function EM(){}function Rh(n,i,r,c){if(n.tag!==5)throw Error(a(476));var p=Bg(n).queue;zg(n,p,i,ne,r===null?EM:function(){return Fg(n),r(c)})}function Bg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:ne},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:r},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Fg(n){var i=Bg(n);i.next===null&&(i=n.alternate.memoizedState),ol(n,i.next.queue,{},Ai())}function Ch(){return Zn(Tl)}function Hg(){return bn().memoizedState}function Gg(){return bn().memoizedState}function AM(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var r=Ai();n=cs(r);var c=us(i,n,r);c!==null&&(mi(c,i,r),nl(c,i,r)),i={cache:ah()},n.payload=i;return}i=i.return}}function wM(n,i,r){var c=Ai();r={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Xc(n)?kg(i,r):(r=jf(n,i,r,c),r!==null&&(mi(r,n,c),Xg(r,i,c)))}function Vg(n,i,r){var c=Ai();ol(n,i,r,c)}function ol(n,i,r,c){var p={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xc(n))kg(i,p);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,C=m(b,r);if(p.hasEagerState=!0,p.eagerState=C,yi(C,b))return Tc(n,i,p,0),on===null&&bc(),!1}catch{}finally{}if(r=jf(n,i,p,c),r!==null)return mi(r,n,c),Xg(r,i,c),!0}return!1}function Dh(n,i,r,c){if(c={lane:2,revertLane:ld(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Xc(n)){if(i)throw Error(a(479))}else i=jf(n,r,c,2),i!==null&&mi(i,n,2)}function Xc(n){var i=n.alternate;return n===Mt||i!==null&&i===Mt}function kg(n,i){Br=zc=!0;var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}function Xg(n,i,r){if((r&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,r|=c,i.lanes=r,Tt(n,r)}}var ll={readContext:Zn,use:Hc,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useLayoutEffect:yn,useInsertionEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useSyncExternalStore:yn,useId:yn,useHostTransitionStatus:yn,useFormState:yn,useActionState:yn,useOptimistic:yn,useMemoCache:yn,useCacheRefresh:yn};ll.useEffectEvent=yn;var Wg={readContext:Zn,use:Hc,useCallback:function(n,i){return si().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:Rg,useImperativeHandle:function(n,i,r){r=r!=null?r.concat([n]):null,Vc(4194308,4,Lg.bind(null,i,n),r)},useLayoutEffect:function(n,i){return Vc(4194308,4,n,i)},useInsertionEffect:function(n,i){Vc(4,2,n,i)},useMemo:function(n,i){var r=si();i=i===void 0?null:i;var c=n();if(Js){We(!0);try{n()}finally{We(!1)}}return r.memoizedState=[c,i],c},useReducer:function(n,i,r){var c=si();if(r!==void 0){var p=r(i);if(Js){We(!0);try{r(i)}finally{We(!1)}}}else p=i;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=wM.bind(null,Mt,n),[c.memoizedState,n]},useRef:function(n){var i=si();return n={current:n},i.memoizedState=n},useState:function(n){n=bh(n);var i=n.queue,r=Vg.bind(null,Mt,i);return i.dispatch=r,[n.memoizedState,r]},useDebugValue:Ah,useDeferredValue:function(n,i){var r=si();return wh(r,n,i)},useTransition:function(){var n=bh(!1);return n=zg.bind(null,Mt,n.queue,!0,!1),si().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,r){var c=Mt,p=si();if(Ht){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),on===null)throw Error(a(349));(It&127)!==0||hg(c,i,r)}p.memoizedState=r;var m={value:r,getSnapshot:i};return p.queue=m,Rg(pg.bind(null,c,m,n),[n]),c.flags|=2048,Hr(9,{destroy:void 0},dg.bind(null,c,m,r,i),null),r},useId:function(){var n=si(),i=on.identifierPrefix;if(Ht){var r=la,c=oa;r=(c&~(1<<32-qe(c)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Bc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=yM++,i="_"+i+"r_"+r.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:Ch,useFormState:bg,useActionState:bg,useOptimistic:function(n){var i=si();i.memoizedState=i.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Dh.bind(null,Mt,!0,r),r.dispatch=i,[n,i]},useMemoCache:yh,useCacheRefresh:function(){return si().memoizedState=AM.bind(null,Mt)},useEffectEvent:function(n){var i=si(),r={impl:n};return i.memoizedState=r,function(){if((qt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Nh={readContext:Zn,use:Hc,useCallback:Pg,useContext:Zn,useEffect:Eh,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:Og,useReducer:Gc,useRef:wg,useState:function(){return Gc(Ca)},useDebugValue:Ah,useDeferredValue:function(n,i){var r=bn();return Ig(r,tn.memoizedState,n,i)},useTransition:function(){var n=Gc(Ca)[0],i=bn().memoizedState;return[typeof n=="boolean"?n:rl(n),i]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:Ch,useFormState:Tg,useActionState:Tg,useOptimistic:function(n,i){var r=bn();return vg(r,tn,n,i)},useMemoCache:yh,useCacheRefresh:Gg};Nh.useEffectEvent=Cg;var qg={readContext:Zn,use:Hc,useCallback:Pg,useContext:Zn,useEffect:Eh,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:Og,useReducer:Mh,useRef:wg,useState:function(){return Mh(Ca)},useDebugValue:Ah,useDeferredValue:function(n,i){var r=bn();return tn===null?wh(r,n,i):Ig(r,tn.memoizedState,n,i)},useTransition:function(){var n=Mh(Ca)[0],i=bn().memoizedState;return[typeof n=="boolean"?n:rl(n),i]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:Ch,useFormState:Ag,useActionState:Ag,useOptimistic:function(n,i){var r=bn();return tn!==null?vg(r,tn,n,i):(r.baseState=n,[n,r.queue.dispatch])},useMemoCache:yh,useCacheRefresh:Gg};qg.useEffectEvent=Cg;function Lh(n,i,r,c){i=n.memoizedState,r=r(c,i),r=r==null?i:v({},i,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var Uh={enqueueSetState:function(n,i,r){n=n._reactInternals;var c=Ai(),p=cs(c);p.payload=i,r!=null&&(p.callback=r),i=us(n,p,c),i!==null&&(mi(i,n,c),nl(i,n,c))},enqueueReplaceState:function(n,i,r){n=n._reactInternals;var c=Ai(),p=cs(c);p.tag=1,p.payload=i,r!=null&&(p.callback=r),i=us(n,p,c),i!==null&&(mi(i,n,c),nl(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var r=Ai(),c=cs(r);c.tag=2,i!=null&&(c.callback=i),i=us(n,c,r),i!==null&&(mi(i,n,r),nl(i,n,r))}};function jg(n,i,r,c,p,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Yo(r,c)||!Yo(p,m):!0}function Yg(n,i,r,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,c),i.state!==n&&Uh.enqueueReplaceState(i,i.state,null)}function Qs(n,i){var r=i;if("ref"in i){r={};for(var c in i)c!=="ref"&&(r[c]=i[c])}if(n=n.defaultProps){r===i&&(r=v({},r));for(var p in n)r[p]===void 0&&(r[p]=n[p])}return r}function Zg(n){Mc(n)}function Kg(n){console.error(n)}function Jg(n){Mc(n)}function Wc(n,i){try{var r=n.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function Qg(n,i,r){try{var c=n.onCaughtError;c(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function Ph(n,i,r){return r=cs(r),r.tag=3,r.payload={element:null},r.callback=function(){Wc(n,i)},r}function $g(n){return n=cs(n),n.tag=3,n}function ev(n,i,r,c){var p=r.type.getDerivedStateFromError;if(typeof p=="function"){var m=c.value;n.payload=function(){return p(m)},n.callback=function(){Qg(i,r,c)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){Qg(i,r,c),typeof p!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var C=c.stack;this.componentDidCatch(c.value,{componentStack:C!==null?C:""})})}function RM(n,i,r,c,p){if(r.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=r.alternate,i!==null&&Lr(i,r,p,!0),r=Mi.current,r!==null){switch(r.tag){case 31:case 13:return Bi===null?iu():r.alternate===null&&Sn===0&&(Sn=3),r.flags&=-257,r.flags|=65536,r.lanes=p,c===Lc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([c]):i.add(c),sd(n,c,p)),!1;case 22:return r.flags|=65536,c===Lc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([c]):r.add(c)),sd(n,c,p)),!1}throw Error(a(435,r.tag))}return sd(n,c,p),iu(),!1}if(Ht)return i=Mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==$f&&(n=Error(a(422),{cause:c}),Jo(Pi(n,r)))):(c!==$f&&(i=Error(a(423),{cause:c}),Jo(Pi(i,r))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=Pi(c,r),p=Ph(n.stateNode,c,p),uh(n,p),Sn!==4&&(Sn=2)),!1;var m=Error(a(520),{cause:c});if(m=Pi(m,r),gl===null?gl=[m]:gl.push(m),Sn!==4&&(Sn=2),i===null)return!0;c=Pi(c,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,n=p&-p,r.lanes|=n,n=Ph(r.stateNode,c,n),uh(r,n),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gs===null||!gs.has(m))))return r.flags|=65536,p&=-p,r.lanes|=p,p=$g(p),ev(p,n,r,c),uh(r,p),!1}r=r.return}while(r!==null);return!1}var Oh=Error(a(461)),An=!1;function Kn(n,i,r,c){i.child=n===null?ag(i,null,r,c):Ks(i,n.child,r,c)}function tv(n,i,r,c,p){r=r.render;var m=i.ref;if("ref"in c){var b={};for(var C in c)C!=="ref"&&(b[C]=c[C])}else b=c;return qs(i),c=gh(n,i,r,b,m,p),C=vh(),n!==null&&!An?(_h(n,i,p),Da(n,i,p)):(Ht&&C&&Jf(i),i.flags|=1,Kn(n,i,c,p),i.child)}function nv(n,i,r,c,p){if(n===null){var m=r.type;return typeof m=="function"&&!Yf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,iv(n,i,m,c,p)):(n=Ac(r.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!kh(n,p)){var b=m.memoizedProps;if(r=r.compare,r=r!==null?r:Yo,r(b,c)&&n.ref===i.ref)return Da(n,i,p)}return i.flags|=1,n=Ta(m,c),n.ref=i.ref,n.return=i,i.child=n}function iv(n,i,r,c,p){if(n!==null){var m=n.memoizedProps;if(Yo(m,c)&&n.ref===i.ref)if(An=!1,i.pendingProps=c=m,kh(n,p))(n.flags&131072)!==0&&(An=!0);else return i.lanes=n.lanes,Da(n,i,p)}return Ih(n,i,r,c,p)}function av(n,i,r,c){var p=c.children,m=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,n!==null){for(c=i.child=n.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~m}else c=0,i.child=null;return sv(n,i,m,r,c)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Dc(i,m!==null?m.cachePool:null),m!==null?og(i,m):hh(),lg(i);else return c=i.lanes=536870912,sv(n,i,m!==null?m.baseLanes|r:r,r,c)}else m!==null?(Dc(i,m.cachePool),og(i,m),hs(),i.memoizedState=null):(n!==null&&Dc(i,null),hh(),hs());return Kn(n,i,p,r),i.child}function cl(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function sv(n,i,r,c,p){var m=rh();return m=m===null?null:{parent:Tn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},n!==null&&Dc(i,null),hh(),lg(i),n!==null&&Lr(n,i,c,!0),i.childLanes=p,null}function qc(n,i){return i=Yc({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function rv(n,i,r){return Ks(i,n.child,null,r),n=qc(i,i.pendingProps),n.flags|=2,bi(i),i.memoizedState=null,n}function CM(n,i,r){var c=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Ht){if(c.mode==="hidden")return n=qc(i,c),i.lanes=536870912,cl(null,n);if(ph(i),(n=un)?(n=__(n,zi),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:as!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},r=k0(n),r.return=i,i.child=r,Yn=i,un=null)):n=null,n===null)throw rs(i);return i.lanes=536870912,null}return qc(i,c)}var m=n.memoizedState;if(m!==null){var b=m.dehydrated;if(ph(i),p)if(i.flags&256)i.flags&=-257,i=rv(n,i,r);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(An||Lr(n,i,r,!1),p=(r&n.childLanes)!==0,An||p){if(c=on,c!==null&&(b=vn(c,r),b!==0&&b!==m.retryLane))throw m.retryLane=b,Vs(n,b),mi(c,n,b),Oh;iu(),i=rv(n,i,r)}else n=m.treeContext,un=Fi(b.nextSibling),Yn=i,Ht=!0,ss=null,zi=!1,n!==null&&q0(i,n),i=qc(i,c),i.flags|=4096;return i}return n=Ta(n.child,{mode:c.mode,children:c.children}),n.ref=i.ref,i.child=n,n.return=i,n}function jc(n,i){var r=i.ref;if(r===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(n===null||n.ref!==r)&&(i.flags|=4194816)}}function Ih(n,i,r,c,p){return qs(i),r=gh(n,i,r,c,void 0,p),c=vh(),n!==null&&!An?(_h(n,i,p),Da(n,i,p)):(Ht&&c&&Jf(i),i.flags|=1,Kn(n,i,r,p),i.child)}function ov(n,i,r,c,p,m){return qs(i),i.updateQueue=null,r=ug(i,c,r,p),cg(n),c=vh(),n!==null&&!An?(_h(n,i,m),Da(n,i,m)):(Ht&&c&&Jf(i),i.flags|=1,Kn(n,i,r,m),i.child)}function lv(n,i,r,c,p){if(qs(i),i.stateNode===null){var m=Rr,b=r.contextType;typeof b=="object"&&b!==null&&(m=Zn(b)),m=new r(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Uh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},lh(i),b=r.contextType,m.context=typeof b=="object"&&b!==null?Zn(b):Rr,m.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Lh(i,r,b,c),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Uh.enqueueReplaceState(m,m.state,null),al(i,c,m,p),il(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){m=i.stateNode;var C=i.memoizedProps,X=Qs(r,C);m.props=X;var re=m.context,Se=r.contextType;b=Rr,typeof Se=="object"&&Se!==null&&(b=Zn(Se));var Ce=r.getDerivedStateFromProps;Se=typeof Ce=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,Se||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||re!==b)&&Yg(i,m,c,b),ls=!1;var fe=i.memoizedState;m.state=fe,al(i,c,m,p),il(),re=i.memoizedState,C||fe!==re||ls?(typeof Ce=="function"&&(Lh(i,r,Ce,c),re=i.memoizedState),(X=ls||jg(i,r,X,c,fe,re,b))?(Se||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=re),m.props=c,m.state=re,m.context=b,c=X):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,ch(n,i),b=i.memoizedProps,Se=Qs(r,b),m.props=Se,Ce=i.pendingProps,fe=m.context,re=r.contextType,X=Rr,typeof re=="object"&&re!==null&&(X=Zn(re)),C=r.getDerivedStateFromProps,(re=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==Ce||fe!==X)&&Yg(i,m,c,X),ls=!1,fe=i.memoizedState,m.state=fe,al(i,c,m,p),il();var me=i.memoizedState;b!==Ce||fe!==me||ls||n!==null&&n.dependencies!==null&&Rc(n.dependencies)?(typeof C=="function"&&(Lh(i,r,C,c),me=i.memoizedState),(Se=ls||jg(i,r,Se,c,fe,me,X)||n!==null&&n.dependencies!==null&&Rc(n.dependencies))?(re||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,me,X),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,me,X)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&fe===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&fe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=me),m.props=c,m.state=me,m.context=X,c=Se):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&fe===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&fe===n.memoizedState||(i.flags|=1024),c=!1)}return m=c,jc(n,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,r=c&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&c?(i.child=Ks(i,n.child,null,p),i.child=Ks(i,null,r,p)):Kn(n,i,r,p),i.memoizedState=m.state,n=i.child):n=Da(n,i,p),n}function cv(n,i,r,c){return Xs(),i.flags|=256,Kn(n,i,r,c),i.child}var zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bh(n){return{baseLanes:n,cachePool:Q0()}}function Fh(n,i,r){return n=n!==null?n.childLanes&~r:0,i&&(n|=Ei),n}function uv(n,i,r){var c=i.pendingProps,p=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=n!==null&&n.memoizedState===null?!1:(Mn.current&2)!==0),b&&(p=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,n===null){if(Ht){if(p?fs(i):hs(),(n=un)?(n=__(n,zi),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:as!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},r=k0(n),r.return=i,i.child=r,Yn=i,un=null)):n=null,n===null)throw rs(i);return Sd(n)?i.lanes=32:i.lanes=536870912,null}var C=c.children;return c=c.fallback,p?(hs(),p=i.mode,C=Yc({mode:"hidden",children:C},p),c=ks(c,p,r,null),C.return=i,c.return=i,C.sibling=c,i.child=C,c=i.child,c.memoizedState=Bh(r),c.childLanes=Fh(n,b,r),i.memoizedState=zh,cl(null,c)):(fs(i),Hh(i,C))}var X=n.memoizedState;if(X!==null&&(C=X.dehydrated,C!==null)){if(m)i.flags&256?(fs(i),i.flags&=-257,i=Gh(n,i,r)):i.memoizedState!==null?(hs(),i.child=n.child,i.flags|=128,i=null):(hs(),C=c.fallback,p=i.mode,c=Yc({mode:"visible",children:c.children},p),C=ks(C,p,r,null),C.flags|=2,c.return=i,C.return=i,c.sibling=C,i.child=c,Ks(i,n.child,null,r),c=i.child,c.memoizedState=Bh(r),c.childLanes=Fh(n,b,r),i.memoizedState=zh,i=cl(null,c));else if(fs(i),Sd(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var re=b.dgst;b=re,c=Error(a(419)),c.stack="",c.digest=b,Jo({value:c,source:null,stack:null}),i=Gh(n,i,r)}else if(An||Lr(n,i,r,!1),b=(r&n.childLanes)!==0,An||b){if(b=on,b!==null&&(c=vn(b,r),c!==0&&c!==X.retryLane))throw X.retryLane=c,Vs(n,c),mi(b,n,c),Oh;yd(C)||iu(),i=Gh(n,i,r)}else yd(C)?(i.flags|=192,i.child=n.child,i=null):(n=X.treeContext,un=Fi(C.nextSibling),Yn=i,Ht=!0,ss=null,zi=!1,n!==null&&q0(i,n),i=Hh(i,c.children),i.flags|=4096);return i}return p?(hs(),C=c.fallback,p=i.mode,X=n.child,re=X.sibling,c=Ta(X,{mode:"hidden",children:c.children}),c.subtreeFlags=X.subtreeFlags&65011712,re!==null?C=Ta(re,C):(C=ks(C,p,r,null),C.flags|=2),C.return=i,c.return=i,c.sibling=C,i.child=c,cl(null,c),c=i.child,C=n.child.memoizedState,C===null?C=Bh(r):(p=C.cachePool,p!==null?(X=Tn._currentValue,p=p.parent!==X?{parent:X,pool:X}:p):p=Q0(),C={baseLanes:C.baseLanes|r,cachePool:p}),c.memoizedState=C,c.childLanes=Fh(n,b,r),i.memoizedState=zh,cl(n.child,c)):(fs(i),r=n.child,n=r.sibling,r=Ta(r,{mode:"visible",children:c.children}),r.return=i,r.sibling=null,n!==null&&(b=i.deletions,b===null?(i.deletions=[n],i.flags|=16):b.push(n)),i.child=r,i.memoizedState=null,r)}function Hh(n,i){return i=Yc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Yc(n,i){return n=Si(22,n,null,i),n.lanes=0,n}function Gh(n,i,r){return Ks(i,n.child,null,r),n=Hh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function fv(n,i,r){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),nh(n.return,i,r)}function Vh(n,i,r,c,p,m){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:r,tailMode:p,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=r,b.tailMode=p,b.treeForkCount=m)}function hv(n,i,r){var c=i.pendingProps,p=c.revealOrder,m=c.tail;c=c.children;var b=Mn.current,C=(b&2)!==0;if(C?(b=b&1|2,i.flags|=128):b&=1,_e(Mn,b),Kn(n,i,c,r),c=Ht?Ko:0,!C&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fv(n,r,i);else if(n.tag===19)fv(n,r,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(r=i.child,p=null;r!==null;)n=r.alternate,n!==null&&Ic(n)===null&&(p=r),r=r.sibling;r=p,r===null?(p=i.child,i.child=null):(p=r.sibling,r.sibling=null),Vh(i,!1,p,r,m,c);break;case"backwards":case"unstable_legacy-backwards":for(r=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Ic(n)===null){i.child=p;break}n=p.sibling,p.sibling=r,r=p,p=n}Vh(i,!0,r,null,m,c);break;case"together":Vh(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function Da(n,i,r){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(r&i.childLanes)===0)if(n!==null){if(Lr(n,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,r=Ta(n,n.pendingProps),i.child=r,r.return=i;n.sibling!==null;)n=n.sibling,r=r.sibling=Ta(n,n.pendingProps),r.return=i;r.sibling=null}return i.child}function kh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Rc(n)))}function DM(n,i,r){switch(i.tag){case 3:Ve(i,i.stateNode.containerInfo),os(i,Tn,n.memoizedState.cache),Xs();break;case 27:case 5:Ke(i);break;case 4:Ve(i,i.stateNode.containerInfo);break;case 10:os(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ph(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(fs(i),i.flags|=128,null):(r&i.child.childLanes)!==0?uv(n,i,r):(fs(i),n=Da(n,i,r),n!==null?n.sibling:null);fs(i);break;case 19:var p=(n.flags&128)!==0;if(c=(r&i.childLanes)!==0,c||(Lr(n,i,r,!1),c=(r&i.childLanes)!==0),p){if(c)return hv(n,i,r);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),_e(Mn,Mn.current),c)break;return null;case 22:return i.lanes=0,av(n,i,r,i.pendingProps);case 24:os(i,Tn,n.memoizedState.cache)}return Da(n,i,r)}function dv(n,i,r){if(n!==null)if(n.memoizedProps!==i.pendingProps)An=!0;else{if(!kh(n,r)&&(i.flags&128)===0)return An=!1,DM(n,i,r);An=(n.flags&131072)!==0}else An=!1,Ht&&(i.flags&1048576)!==0&&W0(i,Ko,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(n=Ys(i.elementType),i.type=n,typeof n=="function")Yf(n)?(c=Qs(n,c),i.tag=1,i=lv(null,i,n,c,r)):(i.tag=0,i=Ih(null,i,n,c,r));else{if(n!=null){var p=n.$$typeof;if(p===w){i.tag=11,i=tv(null,i,n,c,r);break e}else if(p===I){i.tag=14,i=nv(null,i,n,c,r);break e}}throw i=le(n)||n,Error(a(306,i,""))}}return i;case 0:return Ih(n,i,i.type,i.pendingProps,r);case 1:return c=i.type,p=Qs(c,i.pendingProps),lv(n,i,c,p,r);case 3:e:{if(Ve(i,i.stateNode.containerInfo),n===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;p=m.element,ch(n,i),al(i,c,null,r);var b=i.memoizedState;if(c=b.cache,os(i,Tn,c),c!==m.cache&&ih(i,[Tn],r,!0),il(),c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=cv(n,i,c,r);break e}else if(c!==p){p=Pi(Error(a(424)),i),Jo(p),i=cv(n,i,c,r);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(un=Fi(n.firstChild),Yn=i,Ht=!0,ss=null,zi=!0,r=ag(i,null,c,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Xs(),c===p){i=Da(n,i,r);break e}Kn(n,i,c,r)}i=i.child}return i;case 26:return jc(n,i),n===null?(r=T_(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ht||(r=i.type,n=i.pendingProps,c=uu(oe.current).createElement(r),c[ln]=i,c[en]=n,Jn(c,r,n),D(c),i.stateNode=c):i.memoizedState=T_(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Ke(i),n===null&&Ht&&(c=i.stateNode=S_(i.type,i.pendingProps,oe.current),Yn=i,zi=!0,p=un,ys(i.type)?(Md=p,un=Fi(c.firstChild)):un=p),Kn(n,i,i.pendingProps.children,r),jc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Ht&&((p=c=un)&&(c=rb(c,i.type,i.pendingProps,zi),c!==null?(i.stateNode=c,Yn=i,un=Fi(c.firstChild),zi=!1,p=!0):p=!1),p||rs(i)),Ke(i),p=i.type,m=i.pendingProps,b=n!==null?n.memoizedProps:null,c=m.children,vd(p,m)?c=null:b!==null&&vd(p,b)&&(i.flags|=32),i.memoizedState!==null&&(p=gh(n,i,SM,null,null,r),Tl._currentValue=p),jc(n,i),Kn(n,i,c,r),i.child;case 6:return n===null&&Ht&&((n=r=un)&&(r=ob(r,i.pendingProps,zi),r!==null?(i.stateNode=r,Yn=i,un=null,n=!0):n=!1),n||rs(i)),null;case 13:return uv(n,i,r);case 4:return Ve(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ks(i,null,c,r):Kn(n,i,c,r),i.child;case 11:return tv(n,i,i.type,i.pendingProps,r);case 7:return Kn(n,i,i.pendingProps,r),i.child;case 8:return Kn(n,i,i.pendingProps.children,r),i.child;case 12:return Kn(n,i,i.pendingProps.children,r),i.child;case 10:return c=i.pendingProps,os(i,i.type,c.value),Kn(n,i,c.children,r),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,qs(i),p=Zn(p),c=c(p),i.flags|=1,Kn(n,i,c,r),i.child;case 14:return nv(n,i,i.type,i.pendingProps,r);case 15:return iv(n,i,i.type,i.pendingProps,r);case 19:return hv(n,i,r);case 31:return CM(n,i,r);case 22:return av(n,i,r,i.pendingProps);case 24:return qs(i),c=Zn(Tn),n===null?(p=rh(),p===null&&(p=on,m=ah(),p.pooledCache=m,m.refCount++,m!==null&&(p.pooledCacheLanes|=r),p=m),i.memoizedState={parent:c,cache:p},lh(i),os(i,Tn,p)):((n.lanes&r)!==0&&(ch(n,i),al(i,null,null,r),il()),p=n.memoizedState,m=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),os(i,Tn,c)):(c=m.cache,os(i,Tn,c),c!==p.cache&&ih(i,[Tn],r,!0))),Kn(n,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Na(n){n.flags|=4}function Xh(n,i,r,c,p){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(Hv())n.flags|=8192;else throw Zs=Lc,oh}else n.flags&=-16777217}function pv(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!C_(i))if(Hv())n.flags|=8192;else throw Zs=Lc,oh}function Zc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ft():536870912,n.lanes|=i,Xr|=i)}function ul(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,r=0,c=0;if(i)for(var p=n.child;p!==null;)r|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)r|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=r,i}function NM(n,i,r){var c=i.pendingProps;switch(Qf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return fn(i),null;case 3:return r=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),wa(Tn),ke(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Nr(i)?Na(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,eh())),fn(i),null;case 26:var p=i.type,m=i.memoizedState;return n===null?(Na(i),m!==null?(fn(i),pv(i,m)):(fn(i),Xh(i,p,null,c,r))):m?m!==n.memoizedState?(Na(i),fn(i),pv(i,m)):(fn(i),i.flags&=-16777217):(n=n.memoizedProps,n!==c&&Na(i),fn(i),Xh(i,p,n,c,r)),null;case 27:if(vt(i),r=oe.current,p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Na(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return fn(i),null}n=we.current,Nr(i)?j0(i):(n=S_(p,c,r),i.stateNode=n,Na(i))}return fn(i),null;case 5:if(vt(i),p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Na(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return fn(i),null}if(m=we.current,Nr(i))j0(i);else{var b=uu(oe.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?b.createElement("select",{is:c.is}):b.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?b.createElement(p,{is:c.is}):b.createElement(p)}}m[ln]=i,m[en]=c;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;e:switch(Jn(m,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Na(i)}}return fn(i),Xh(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,r),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&Na(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(n=oe.current,Nr(i)){if(n=i.stateNode,r=i.memoizedProps,c=null,p=Yn,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[ln]=i,n=!!(n.nodeValue===r||c!==null&&c.suppressHydrationWarning===!0||u_(n.nodeValue,r)),n||rs(i,!0)}else n=uu(n).createTextNode(c),n[ln]=i,i.stateNode=n}return fn(i),null;case 31:if(r=i.memoizedState,n===null||n.memoizedState!==null){if(c=Nr(i),r!==null){if(n===null){if(!c)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[ln]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),n=!1}else r=eh(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),n=!0;if(!n)return i.flags&256?(bi(i),i):(bi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return fn(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=Nr(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[ln]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),p=!1}else p=eh(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(bi(i),i):(bi(i),null)}return bi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=c!==null,n=n!==null&&n.memoizedState!==null,r&&(c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==p&&(c.flags|=2048)),r!==n&&r&&(i.child.flags|=8192),Zc(i,i.updateQueue),fn(i),null);case 4:return ke(),n===null&&hd(i.stateNode.containerInfo),fn(i),null;case 10:return wa(i.type),fn(i),null;case 19:if(ie(Mn),c=i.memoizedState,c===null)return fn(i),null;if(p=(i.flags&128)!==0,m=c.rendering,m===null)if(p)ul(c,!1);else{if(Sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=Ic(n),m!==null){for(i.flags|=128,ul(c,!1),n=m.updateQueue,i.updateQueue=n,Zc(i,n),i.subtreeFlags=0,n=r,r=i.child;r!==null;)V0(r,n),r=r.sibling;return _e(Mn,Mn.current&1|2),Ht&&Ea(i,c.treeForkCount),i.child}n=n.sibling}c.tail!==null&&T()>eu&&(i.flags|=128,p=!0,ul(c,!1),i.lanes=4194304)}else{if(!p)if(n=Ic(m),n!==null){if(i.flags|=128,p=!0,n=n.updateQueue,i.updateQueue=n,Zc(i,n),ul(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Ht)return fn(i),null}else 2*T()-c.renderingStartTime>eu&&r!==536870912&&(i.flags|=128,p=!0,ul(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(n=c.last,n!==null?n.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=T(),n.sibling=null,r=Mn.current,_e(Mn,p?r&1|2:r&1),Ht&&Ea(i,c.treeForkCount),n):(fn(i),null);case 22:case 23:return bi(i),dh(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(r&536870912)!==0&&(i.flags&128)===0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),r=i.updateQueue,r!==null&&Zc(i,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048),n!==null&&ie(js),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),wa(Tn),fn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function LM(n,i){switch(Qf(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return wa(Tn),ke(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return vt(i),null;case 31:if(i.memoizedState!==null){if(bi(i),i.alternate===null)throw Error(a(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(bi(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ie(Mn),null;case 4:return ke(),null;case 10:return wa(i.type),null;case 22:case 23:return bi(i),dh(),n!==null&&ie(js),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return wa(Tn),null;case 25:return null;default:return null}}function mv(n,i){switch(Qf(i),i.tag){case 3:wa(Tn),ke();break;case 26:case 27:case 5:vt(i);break;case 4:ke();break;case 31:i.memoizedState!==null&&bi(i);break;case 13:bi(i);break;case 19:ie(Mn);break;case 10:wa(i.type);break;case 22:case 23:bi(i),dh(),n!==null&&ie(js);break;case 24:wa(Tn)}}function fl(n,i){try{var r=i.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var p=c.next;r=p;do{if((r.tag&n)===n){c=void 0;var m=r.create,b=r.inst;c=m(),b.destroy=c}r=r.next}while(r!==p)}}catch(C){Jt(i,i.return,C)}}function ds(n,i,r){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var m=p.next;c=m;do{if((c.tag&n)===n){var b=c.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,p=i;var X=r,re=C;try{re()}catch(Se){Jt(p,X,Se)}}}c=c.next}while(c!==m)}}catch(Se){Jt(i,i.return,Se)}}function gv(n){var i=n.updateQueue;if(i!==null){var r=n.stateNode;try{rg(i,r)}catch(c){Jt(n,n.return,c)}}}function vv(n,i,r){r.props=Qs(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(c){Jt(n,i,c)}}function hl(n,i){try{var r=n.ref;if(r!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof r=="function"?n.refCleanup=r(c):r.current=c}}catch(p){Jt(n,i,p)}}function ca(n,i){var r=n.ref,c=n.refCleanup;if(r!==null)if(typeof c=="function")try{c()}catch(p){Jt(n,i,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(p){Jt(n,i,p)}else r.current=null}function _v(n){var i=n.type,r=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&c.focus();break e;case"img":r.src?c.src=r.src:r.srcSet&&(c.srcset=r.srcSet)}}catch(p){Jt(n,n.return,p)}}function Wh(n,i,r){try{var c=n.stateNode;eb(c,n.type,r,i),c[en]=i}catch(p){Jt(n,n.return,p)}}function xv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ys(n.type)||n.tag===4}function qh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ys(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jh(n,i,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(n,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(n),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Ma));else if(c!==4&&(c===27&&ys(n.type)&&(r=n.stateNode,i=null),n=n.child,n!==null))for(jh(n,i,r),n=n.sibling;n!==null;)jh(n,i,r),n=n.sibling}function Kc(n,i,r){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?r.insertBefore(n,i):r.appendChild(n);else if(c!==4&&(c===27&&ys(n.type)&&(r=n.stateNode),n=n.child,n!==null))for(Kc(n,i,r),n=n.sibling;n!==null;)Kc(n,i,r),n=n.sibling}function yv(n){var i=n.stateNode,r=n.memoizedProps;try{for(var c=n.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);Jn(i,c,r),i[ln]=n,i[en]=r}catch(m){Jt(n,n.return,m)}}var La=!1,wn=!1,Yh=!1,Sv=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function UM(n,i){if(n=n.containerInfo,md=vu,n=U0(n),Gf(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else e:{r=(r=n.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var p=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var b=0,C=-1,X=-1,re=0,Se=0,Ce=n,fe=null;t:for(;;){for(var me;Ce!==r||p!==0&&Ce.nodeType!==3||(C=b+p),Ce!==m||c!==0&&Ce.nodeType!==3||(X=b+c),Ce.nodeType===3&&(b+=Ce.nodeValue.length),(me=Ce.firstChild)!==null;)fe=Ce,Ce=me;for(;;){if(Ce===n)break t;if(fe===r&&++re===p&&(C=b),fe===m&&++Se===c&&(X=b),(me=Ce.nextSibling)!==null)break;Ce=fe,fe=Ce.parentNode}Ce=me}r=C===-1||X===-1?null:{start:C,end:X}}else r=null}r=r||{start:0,end:0}}else r=null;for(gd={focusedElem:n,selectionRange:r},vu=!1,Fn=i;Fn!==null;)if(i=Fn,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fn=n;else for(;Fn!==null;){switch(i=Fn,m=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(r=0;r<n.length;r++)p=n[r],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,r=i,p=m.memoizedProps,m=m.memoizedState,c=r.stateNode;try{var nt=Qs(r.type,p);n=c.getSnapshotBeforeUpdate(nt,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(gt){Jt(r,r.return,gt)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,r=n.nodeType,r===9)xd(n);else if(r===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":xd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Fn=n;break}Fn=i.return}}function Mv(n,i,r){var c=r.flags;switch(r.tag){case 0:case 11:case 15:Pa(n,r),c&4&&fl(5,r);break;case 1:if(Pa(n,r),c&4)if(n=r.stateNode,i===null)try{n.componentDidMount()}catch(b){Jt(r,r.return,b)}else{var p=Qs(r.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(p,i,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Jt(r,r.return,b)}}c&64&&gv(r),c&512&&hl(r,r.return);break;case 3:if(Pa(n,r),c&64&&(n=r.updateQueue,n!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{rg(n,i)}catch(b){Jt(r,r.return,b)}}break;case 27:i===null&&c&4&&yv(r);case 26:case 5:Pa(n,r),i===null&&c&4&&_v(r),c&512&&hl(r,r.return);break;case 12:Pa(n,r);break;case 31:Pa(n,r),c&4&&Ev(n,r);break;case 13:Pa(n,r),c&4&&Av(n,r),c&64&&(n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(r=VM.bind(null,r),lb(n,r))));break;case 22:if(c=r.memoizedState!==null||La,!c){i=i!==null&&i.memoizedState!==null||wn,p=La;var m=wn;La=c,(wn=i)&&!m?Oa(n,r,(r.subtreeFlags&8772)!==0):Pa(n,r),La=p,wn=m}break;case 30:break;default:Pa(n,r)}}function bv(n){var i=n.alternate;i!==null&&(n.alternate=null,bv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ho(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var mn=null,fi=!1;function Ua(n,i,r){for(r=r.child;r!==null;)Tv(n,i,r),r=r.sibling}function Tv(n,i,r){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(he,r)}catch{}switch(r.tag){case 26:wn||ca(r,i),Ua(n,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:wn||ca(r,i);var c=mn,p=fi;ys(r.type)&&(mn=r.stateNode,fi=!1),Ua(n,i,r),Sl(r.stateNode),mn=c,fi=p;break;case 5:wn||ca(r,i);case 6:if(c=mn,p=fi,mn=null,Ua(n,i,r),mn=c,fi=p,mn!==null)if(fi)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(r.stateNode)}catch(m){Jt(r,i,m)}else try{mn.removeChild(r.stateNode)}catch(m){Jt(r,i,m)}break;case 18:mn!==null&&(fi?(n=mn,g_(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,r.stateNode),Qr(n)):g_(mn,r.stateNode));break;case 4:c=mn,p=fi,mn=r.stateNode.containerInfo,fi=!0,Ua(n,i,r),mn=c,fi=p;break;case 0:case 11:case 14:case 15:ds(2,r,i),wn||ds(4,r,i),Ua(n,i,r);break;case 1:wn||(ca(r,i),c=r.stateNode,typeof c.componentWillUnmount=="function"&&vv(r,i,c)),Ua(n,i,r);break;case 21:Ua(n,i,r);break;case 22:wn=(c=wn)||r.memoizedState!==null,Ua(n,i,r),wn=c;break;default:Ua(n,i,r)}}function Ev(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Qr(n)}catch(r){Jt(i,i.return,r)}}}function Av(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Qr(n)}catch(r){Jt(i,i.return,r)}}function PM(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Sv),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Sv),i;default:throw Error(a(435,n.tag))}}function Jc(n,i){var r=PM(n);i.forEach(function(c){if(!r.has(c)){r.add(c);var p=kM.bind(null,n,c);c.then(p,p)}})}function hi(n,i){var r=i.deletions;if(r!==null)for(var c=0;c<r.length;c++){var p=r[c],m=n,b=i,C=b;e:for(;C!==null;){switch(C.tag){case 27:if(ys(C.type)){mn=C.stateNode,fi=!1;break e}break;case 5:mn=C.stateNode,fi=!1;break e;case 3:case 4:mn=C.stateNode.containerInfo,fi=!0;break e}C=C.return}if(mn===null)throw Error(a(160));Tv(m,b,p),mn=null,fi=!1,m=p.alternate,m!==null&&(m.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)wv(i,n),i=i.sibling}var Ki=null;function wv(n,i){var r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:hi(i,n),di(n),c&4&&(ds(3,n,n.return),fl(3,n),ds(5,n,n.return));break;case 1:hi(i,n),di(n),c&512&&(wn||r===null||ca(r,r.return)),c&64&&La&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?c:r.concat(c))));break;case 26:var p=Ki;if(hi(i,n),di(n),c&512&&(wn||r===null||ca(r,r.return)),c&4){var m=r!==null?r.memoizedState:null;if(c=n.memoizedState,r===null)if(c===null)if(n.stateNode===null){e:{c=n.type,r=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":m=p.getElementsByTagName("title")[0],(!m||m[zs]||m[ln]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=p.createElement(c),p.head.insertBefore(m,p.querySelector("head > title"))),Jn(m,c,r),m[ln]=n,D(m),c=m;break e;case"link":var b=w_("link","href",p).get(c+(r.href||""));if(b){for(var C=0;C<b.length;C++)if(m=b[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(C,1);break t}}m=p.createElement(c),Jn(m,c,r),p.head.appendChild(m);break;case"meta":if(b=w_("meta","content",p).get(c+(r.content||""))){for(C=0;C<b.length;C++)if(m=b[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(C,1);break t}}m=p.createElement(c),Jn(m,c,r),p.head.appendChild(m);break;default:throw Error(a(468,c))}m[ln]=n,D(m),c=m}n.stateNode=c}else R_(p,n.type,n.stateNode);else n.stateNode=A_(p,c,n.memoizedProps);else m!==c?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,c===null?R_(p,n.type,n.stateNode):A_(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Wh(n,n.memoizedProps,r.memoizedProps)}break;case 27:hi(i,n),di(n),c&512&&(wn||r===null||ca(r,r.return)),r!==null&&c&4&&Wh(n,n.memoizedProps,r.memoizedProps);break;case 5:if(hi(i,n),di(n),c&512&&(wn||r===null||ca(r,r.return)),n.flags&32){p=n.stateNode;try{Dn(p,"")}catch(nt){Jt(n,n.return,nt)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,Wh(n,p,r!==null?r.memoizedProps:p)),c&1024&&(Yh=!0);break;case 6:if(hi(i,n),di(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,r=n.stateNode;try{r.nodeValue=c}catch(nt){Jt(n,n.return,nt)}}break;case 3:if(du=null,p=Ki,Ki=fu(i.containerInfo),hi(i,n),Ki=p,di(n),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(nt){Jt(n,n.return,nt)}Yh&&(Yh=!1,Rv(n));break;case 4:c=Ki,Ki=fu(n.stateNode.containerInfo),hi(i,n),di(n),Ki=c;break;case 12:hi(i,n),di(n);break;case 31:hi(i,n),di(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Jc(n,c)));break;case 13:hi(i,n),di(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&($c=T()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Jc(n,c)));break;case 22:p=n.memoizedState!==null;var X=r!==null&&r.memoizedState!==null,re=La,Se=wn;if(La=re||p,wn=Se||X,hi(i,n),wn=Se,La=re,di(n),c&8192)e:for(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(r===null||X||La||wn||$s(n)),r=null,i=n;;){if(i.tag===5||i.tag===26){if(r===null){X=r=i;try{if(m=X.stateNode,p)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=X.stateNode;var Ce=X.memoizedProps.style,fe=Ce!=null&&Ce.hasOwnProperty("display")?Ce.display:null;C.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(nt){Jt(X,X.return,nt)}}}else if(i.tag===6){if(r===null){X=i;try{X.stateNode.nodeValue=p?"":X.memoizedProps}catch(nt){Jt(X,X.return,nt)}}}else if(i.tag===18){if(r===null){X=i;try{var me=X.stateNode;p?v_(me,!0):v_(X.stateNode,!1)}catch(nt){Jt(X,X.return,nt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(r=c.retryQueue,r!==null&&(c.retryQueue=null,Jc(n,r))));break;case 19:hi(i,n),di(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Jc(n,c)));break;case 30:break;case 21:break;default:hi(i,n),di(n)}}function di(n){var i=n.flags;if(i&2){try{for(var r,c=n.return;c!==null;){if(xv(c)){r=c;break}c=c.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var p=r.stateNode,m=qh(n);Kc(n,m,p);break;case 5:var b=r.stateNode;r.flags&32&&(Dn(b,""),r.flags&=-33);var C=qh(n);Kc(n,C,b);break;case 3:case 4:var X=r.stateNode.containerInfo,re=qh(n);jh(n,re,X);break;default:throw Error(a(161))}}catch(Se){Jt(n,n.return,Se)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Rv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Rv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Pa(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Mv(n,i.alternate,i),i=i.sibling}function $s(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:ds(4,i,i.return),$s(i);break;case 1:ca(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&vv(i,i.return,r),$s(i);break;case 27:Sl(i.stateNode);case 26:case 5:ca(i,i.return),$s(i);break;case 22:i.memoizedState===null&&$s(i);break;case 30:$s(i);break;default:$s(i)}n=n.sibling}}function Oa(n,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=n,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Oa(p,m,r),fl(4,m);break;case 1:if(Oa(p,m,r),c=m,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(re){Jt(c,c.return,re)}if(c=m,p=c.updateQueue,p!==null){var C=c.stateNode;try{var X=p.shared.hiddenCallbacks;if(X!==null)for(p.shared.hiddenCallbacks=null,p=0;p<X.length;p++)sg(X[p],C)}catch(re){Jt(c,c.return,re)}}r&&b&64&&gv(m),hl(m,m.return);break;case 27:yv(m);case 26:case 5:Oa(p,m,r),r&&c===null&&b&4&&_v(m),hl(m,m.return);break;case 12:Oa(p,m,r);break;case 31:Oa(p,m,r),r&&b&4&&Ev(p,m);break;case 13:Oa(p,m,r),r&&b&4&&Av(p,m);break;case 22:m.memoizedState===null&&Oa(p,m,r),hl(m,m.return);break;case 30:break;default:Oa(p,m,r)}i=i.sibling}}function Zh(n,i){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&Qo(r))}function Kh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Qo(n))}function Ji(n,i,r,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Cv(n,i,r,c),i=i.sibling}function Cv(n,i,r,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:Ji(n,i,r,c),p&2048&&fl(9,i);break;case 1:Ji(n,i,r,c);break;case 3:Ji(n,i,r,c),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Qo(n)));break;case 12:if(p&2048){Ji(n,i,r,c),n=i.stateNode;try{var m=i.memoizedProps,b=m.id,C=m.onPostCommit;typeof C=="function"&&C(b,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(X){Jt(i,i.return,X)}}else Ji(n,i,r,c);break;case 31:Ji(n,i,r,c);break;case 13:Ji(n,i,r,c);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Ji(n,i,r,c):dl(n,i):m._visibility&2?Ji(n,i,r,c):(m._visibility|=2,Gr(n,i,r,c,(i.subtreeFlags&10256)!==0||!1)),p&2048&&Zh(b,i);break;case 24:Ji(n,i,r,c),p&2048&&Kh(i.alternate,i);break;default:Ji(n,i,r,c)}}function Gr(n,i,r,c,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=n,b=i,C=r,X=c,re=b.flags;switch(b.tag){case 0:case 11:case 15:Gr(m,b,C,X,p),fl(8,b);break;case 23:break;case 22:var Se=b.stateNode;b.memoizedState!==null?Se._visibility&2?Gr(m,b,C,X,p):dl(m,b):(Se._visibility|=2,Gr(m,b,C,X,p)),p&&re&2048&&Zh(b.alternate,b);break;case 24:Gr(m,b,C,X,p),p&&re&2048&&Kh(b.alternate,b);break;default:Gr(m,b,C,X,p)}i=i.sibling}}function dl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=n,c=i,p=c.flags;switch(c.tag){case 22:dl(r,c),p&2048&&Zh(c.alternate,c);break;case 24:dl(r,c),p&2048&&Kh(c.alternate,c);break;default:dl(r,c)}i=i.sibling}}var pl=8192;function Vr(n,i,r){if(n.subtreeFlags&pl)for(n=n.child;n!==null;)Dv(n,i,r),n=n.sibling}function Dv(n,i,r){switch(n.tag){case 26:Vr(n,i,r),n.flags&pl&&n.memoizedState!==null&&yb(r,Ki,n.memoizedState,n.memoizedProps);break;case 5:Vr(n,i,r);break;case 3:case 4:var c=Ki;Ki=fu(n.stateNode.containerInfo),Vr(n,i,r),Ki=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=pl,pl=16777216,Vr(n,i,r),pl=c):Vr(n,i,r));break;default:Vr(n,i,r)}}function Nv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function ml(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Fn=c,Uv(c,n)}Nv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lv(n),n=n.sibling}function Lv(n){switch(n.tag){case 0:case 11:case 15:ml(n),n.flags&2048&&ds(9,n,n.return);break;case 3:ml(n);break;case 12:ml(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Qc(n)):ml(n);break;default:ml(n)}}function Qc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Fn=c,Uv(c,n)}Nv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:ds(8,i,i.return),Qc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Qc(i));break;default:Qc(i)}n=n.sibling}}function Uv(n,i){for(;Fn!==null;){var r=Fn;switch(r.tag){case 0:case 11:case 15:ds(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var c=r.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Qo(r.memoizedState.cache)}if(c=r.child,c!==null)c.return=r,Fn=c;else e:for(r=n;Fn!==null;){c=Fn;var p=c.sibling,m=c.return;if(bv(c),c===r){Fn=null;break e}if(p!==null){p.return=m,Fn=p;break e}Fn=m}}}var OM={getCacheForType:function(n){var i=Zn(Tn),r=i.data.get(n);return r===void 0&&(r=n(),i.data.set(n,r)),r},cacheSignal:function(){return Zn(Tn).controller.signal}},IM=typeof WeakMap=="function"?WeakMap:Map,qt=0,on=null,Lt=null,It=0,Kt=0,Ti=null,ps=!1,kr=!1,Jh=!1,Ia=0,Sn=0,ms=0,er=0,Qh=0,Ei=0,Xr=0,gl=null,pi=null,$h=!1,$c=0,Pv=0,eu=1/0,tu=null,gs=null,Nn=0,vs=null,Wr=null,za=0,ed=0,td=null,Ov=null,vl=0,nd=null;function Ai(){return(qt&2)!==0&&It!==0?It&-It:O.T!==null?ld():$n()}function Iv(){if(Ei===0)if((It&536870912)===0||Ht){var n=De;De<<=1,(De&3932160)===0&&(De=262144),Ei=n}else Ei=536870912;return n=Mi.current,n!==null&&(n.flags|=32),Ei}function mi(n,i,r){(n===on&&(Kt===2||Kt===9)||n.cancelPendingCommit!==null)&&(qr(n,0),_s(n,It,Ei,!1)),Je(n,r),((qt&2)===0||n!==on)&&(n===on&&((qt&2)===0&&(er|=r),Sn===4&&_s(n,It,Ei,!1)),ua(n))}function zv(n,i,r){if((qt&6)!==0)throw Error(a(327));var c=!r&&(i&127)===0&&(i&n.expiredLanes)===0||ze(n,i),p=c?FM(n,i):ad(n,i,!0),m=c;do{if(p===0){kr&&!c&&_s(n,i,0,!1);break}else{if(r=n.current.alternate,m&&!zM(r)){p=ad(n,i,!1),m=!1;continue}if(p===2){if(m=i,n.errorRecoveryDisabledLanes&m)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var C=n;p=gl;var X=C.current.memoizedState.isDehydrated;if(X&&(qr(C,b).flags|=256),b=ad(C,b,!1),b!==2){if(Jh&&!X){C.errorRecoveryDisabledLanes|=m,er|=m,p=4;break e}m=pi,pi=p,m!==null&&(pi===null?pi=m:pi.push.apply(pi,m))}p=b}if(m=!1,p!==2)continue}}if(p===1){qr(n,0),_s(n,i,0,!0);break}e:{switch(c=n,m=p,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:_s(c,i,Ei,!ps);break e;case 2:pi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=$c+300-T(),10<p)){if(_s(c,i,Ei,!ps),be(c,0,!0)!==0)break e;za=i,c.timeoutHandle=p_(Bv.bind(null,c,r,pi,tu,$h,i,Ei,er,Xr,ps,m,"Throttled",-0,0),p);break e}Bv(c,r,pi,tu,$h,i,Ei,er,Xr,ps,m,null,-0,0)}}break}while(!0);ua(n)}function Bv(n,i,r,c,p,m,b,C,X,re,Se,Ce,fe,me){if(n.timeoutHandle=-1,Ce=i.subtreeFlags,Ce&8192||(Ce&16785408)===16785408){Ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ma},Dv(i,m,Ce);var nt=(m&62914560)===m?$c-T():(m&4194048)===m?Pv-T():0;if(nt=Sb(Ce,nt),nt!==null){za=m,n.cancelPendingCommit=nt(qv.bind(null,n,i,m,r,c,p,b,C,X,Se,Ce,null,fe,me)),_s(n,m,b,!re);return}}qv(n,i,m,r,c,p,b,C,X)}function zM(n){for(var i=n;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var c=0;c<r.length;c++){var p=r[c],m=p.getSnapshot;p=p.value;try{if(!yi(m(),p))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _s(n,i,r,c){i&=~Qh,i&=~er,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var p=i;0<p;){var m=31-qe(p),b=1<<m;c[m]=-1,p&=~b}r!==0&&Rt(n,r,i)}function nu(){return(qt&6)===0?(_l(0),!1):!0}function id(){if(Lt!==null){if(Kt===0)var n=Lt.return;else n=Lt,Aa=Ws=null,xh(n),Ir=null,el=0,n=Lt;for(;n!==null;)mv(n.alternate,n),n=n.return;Lt=null}}function qr(n,i){var r=n.timeoutHandle;r!==-1&&(n.timeoutHandle=-1,ib(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),za=0,id(),on=n,Lt=r=Ta(n.current,null),It=i,Kt=0,Ti=null,ps=!1,kr=ze(n,i),Jh=!1,Xr=Ei=Qh=er=ms=Sn=0,pi=gl=null,$h=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var p=31-qe(c),m=1<<p;i|=n[p],c&=~m}return Ia=i,bc(),r}function Fv(n,i){Mt=null,O.H=ll,i===Or||i===Nc?(i=tg(),Kt=3):i===oh?(i=tg(),Kt=4):Kt=i===Oh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ti=i,Lt===null&&(Sn=1,Wc(n,Pi(i,n.current)))}function Hv(){var n=Mi.current;return n===null?!0:(It&4194048)===It?Bi===null:(It&62914560)===It||(It&536870912)!==0?n===Bi:!1}function Gv(){var n=O.H;return O.H=ll,n===null?ll:n}function Vv(){var n=O.A;return O.A=OM,n}function iu(){Sn=4,ps||(It&4194048)!==It&&Mi.current!==null||(kr=!0),(ms&134217727)===0&&(er&134217727)===0||on===null||_s(on,It,Ei,!1)}function ad(n,i,r){var c=qt;qt|=2;var p=Gv(),m=Vv();(on!==n||It!==i)&&(tu=null,qr(n,i)),i=!1;var b=Sn;e:do try{if(Kt!==0&&Lt!==null){var C=Lt,X=Ti;switch(Kt){case 8:id(),b=6;break e;case 3:case 2:case 9:case 6:Mi.current===null&&(i=!0);var re=Kt;if(Kt=0,Ti=null,jr(n,C,X,re),r&&kr){b=0;break e}break;default:re=Kt,Kt=0,Ti=null,jr(n,C,X,re)}}BM(),b=Sn;break}catch(Se){Fv(n,Se)}while(!0);return i&&n.shellSuspendCounter++,Aa=Ws=null,qt=c,O.H=p,O.A=m,Lt===null&&(on=null,It=0,bc()),b}function BM(){for(;Lt!==null;)kv(Lt)}function FM(n,i){var r=qt;qt|=2;var c=Gv(),p=Vv();on!==n||It!==i?(tu=null,eu=T()+500,qr(n,i)):kr=ze(n,i);e:do try{if(Kt!==0&&Lt!==null){i=Lt;var m=Ti;t:switch(Kt){case 1:Kt=0,Ti=null,jr(n,i,m,1);break;case 2:case 9:if($0(m)){Kt=0,Ti=null,Xv(i);break}i=function(){Kt!==2&&Kt!==9||on!==n||(Kt=7),ua(n)},m.then(i,i);break e;case 3:Kt=7;break e;case 4:Kt=5;break e;case 7:$0(m)?(Kt=0,Ti=null,Xv(i)):(Kt=0,Ti=null,jr(n,i,m,7));break;case 5:var b=null;switch(Lt.tag){case 26:b=Lt.memoizedState;case 5:case 27:var C=Lt;if(b?C_(b):C.stateNode.complete){Kt=0,Ti=null;var X=C.sibling;if(X!==null)Lt=X;else{var re=C.return;re!==null?(Lt=re,au(re)):Lt=null}break t}}Kt=0,Ti=null,jr(n,i,m,5);break;case 6:Kt=0,Ti=null,jr(n,i,m,6);break;case 8:id(),Sn=6;break e;default:throw Error(a(462))}}HM();break}catch(Se){Fv(n,Se)}while(!0);return Aa=Ws=null,O.H=c,O.A=p,qt=r,Lt!==null?0:(on=null,It=0,bc(),Sn)}function HM(){for(;Lt!==null&&!He();)kv(Lt)}function kv(n){var i=dv(n.alternate,n,Ia);n.memoizedProps=n.pendingProps,i===null?au(n):Lt=i}function Xv(n){var i=n,r=i.alternate;switch(i.tag){case 15:case 0:i=ov(r,i,i.pendingProps,i.type,void 0,It);break;case 11:i=ov(r,i,i.pendingProps,i.type.render,i.ref,It);break;case 5:xh(i);default:mv(r,i),i=Lt=V0(i,Ia),i=dv(r,i,Ia)}n.memoizedProps=n.pendingProps,i===null?au(n):Lt=i}function jr(n,i,r,c){Aa=Ws=null,xh(i),Ir=null,el=0;var p=i.return;try{if(RM(n,p,i,r,It)){Sn=1,Wc(n,Pi(r,n.current)),Lt=null;return}}catch(m){if(p!==null)throw Lt=p,m;Sn=1,Wc(n,Pi(r,n.current)),Lt=null;return}i.flags&32768?(Ht||c===1?n=!0:kr||(It&536870912)!==0?n=!1:(ps=n=!0,(c===2||c===9||c===3||c===6)&&(c=Mi.current,c!==null&&c.tag===13&&(c.flags|=16384))),Wv(i,n)):au(i)}function au(n){var i=n;do{if((i.flags&32768)!==0){Wv(i,ps);return}n=i.return;var r=NM(i.alternate,i,Ia);if(r!==null){Lt=r;return}if(i=i.sibling,i!==null){Lt=i;return}Lt=i=n}while(i!==null);Sn===0&&(Sn=5)}function Wv(n,i){do{var r=LM(n.alternate,n);if(r!==null){r.flags&=32767,Lt=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(n=n.sibling,n!==null)){Lt=n;return}Lt=n=r}while(n!==null);Sn=6,Lt=null}function qv(n,i,r,c,p,m,b,C,X){n.cancelPendingCommit=null;do su();while(Nn!==0);if((qt&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=qf,it(n,r,m,b,C,X),n===on&&(Lt=on=null,It=0),Wr=i,vs=n,za=r,ed=m,td=p,Ov=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,XM(V,function(){return Jv(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=O.T,O.T=null,p=G.p,G.p=2,b=qt,qt|=4;try{UM(n,i,r)}finally{qt=b,G.p=p,O.T=c}}Nn=1,jv(),Yv(),Zv()}}function jv(){if(Nn===1){Nn=0;var n=vs,i=Wr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var c=G.p;G.p=2;var p=qt;qt|=4;try{wv(i,n);var m=gd,b=U0(n.containerInfo),C=m.focusedElem,X=m.selectionRange;if(b!==C&&C&&C.ownerDocument&&L0(C.ownerDocument.documentElement,C)){if(X!==null&&Gf(C)){var re=X.start,Se=X.end;if(Se===void 0&&(Se=re),"selectionStart"in C)C.selectionStart=re,C.selectionEnd=Math.min(Se,C.value.length);else{var Ce=C.ownerDocument||document,fe=Ce&&Ce.defaultView||window;if(fe.getSelection){var me=fe.getSelection(),nt=C.textContent.length,gt=Math.min(X.start,nt),an=X.end===void 0?gt:Math.min(X.end,nt);!me.extend&&gt>an&&(b=an,an=gt,gt=b);var $=N0(C,gt),K=N0(C,an);if($&&K&&(me.rangeCount!==1||me.anchorNode!==$.node||me.anchorOffset!==$.offset||me.focusNode!==K.node||me.focusOffset!==K.offset)){var se=Ce.createRange();se.setStart($.node,$.offset),me.removeAllRanges(),gt>an?(me.addRange(se),me.extend(K.node,K.offset)):(se.setEnd(K.node,K.offset),me.addRange(se))}}}}for(Ce=[],me=C;me=me.parentNode;)me.nodeType===1&&Ce.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ce.length;C++){var Ae=Ce[C];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}vu=!!md,gd=md=null}finally{qt=p,G.p=c,O.T=r}}n.current=i,Nn=2}}function Yv(){if(Nn===2){Nn=0;var n=vs,i=Wr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var c=G.p;G.p=2;var p=qt;qt|=4;try{Mv(n,i.alternate,i)}finally{qt=p,G.p=c,O.T=r}}Nn=3}}function Zv(){if(Nn===4||Nn===3){Nn=0,P();var n=vs,i=Wr,r=za,c=Ov;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Nn=5:(Nn=0,Wr=vs=null,Kv(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(gs=null),rn(r),i=i.stateNode,Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(he,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=O.T,p=G.p,G.p=2,O.T=null;try{for(var m=n.onRecoverableError,b=0;b<c.length;b++){var C=c[b];m(C.value,{componentStack:C.stack})}}finally{O.T=i,G.p=p}}(za&3)!==0&&su(),ua(n),p=n.pendingLanes,(r&261930)!==0&&(p&42)!==0?n===nd?vl++:(vl=0,nd=n):vl=0,_l(0)}}function Kv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Qo(i)))}function su(){return jv(),Yv(),Zv(),Jv()}function Jv(){if(Nn!==5)return!1;var n=vs,i=ed;ed=0;var r=rn(za),c=O.T,p=G.p;try{G.p=32>r?32:r,O.T=null,r=td,td=null;var m=vs,b=za;if(Nn=0,Wr=vs=null,za=0,(qt&6)!==0)throw Error(a(331));var C=qt;if(qt|=4,Lv(m.current),Cv(m,m.current,b,r),qt=C,_l(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(he,m)}catch{}return!0}finally{G.p=p,O.T=c,Kv(n,i)}}function Qv(n,i,r){i=Pi(r,i),i=Ph(n.stateNode,i,2),n=us(n,i,2),n!==null&&(Je(n,2),ua(n))}function Jt(n,i,r){if(n.tag===3)Qv(n,n,r);else for(;i!==null;){if(i.tag===3){Qv(i,n,r);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gs===null||!gs.has(c))){n=Pi(r,n),r=$g(2),c=us(i,r,2),c!==null&&(ev(r,c,i,n),Je(c,2),ua(c));break}}i=i.return}}function sd(n,i,r){var c=n.pingCache;if(c===null){c=n.pingCache=new IM;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(r)||(Jh=!0,p.add(r),n=GM.bind(null,n,i,r),i.then(n,n))}function GM(n,i,r){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,on===n&&(It&r)===r&&(Sn===4||Sn===3&&(It&62914560)===It&&300>T()-$c?(qt&2)===0&&qr(n,0):Qh|=r,Xr===It&&(Xr=0)),ua(n)}function $v(n,i){i===0&&(i=Ft()),n=Vs(n,i),n!==null&&(Je(n,i),ua(n))}function VM(n){var i=n.memoizedState,r=0;i!==null&&(r=i.retryLane),$v(n,r)}function kM(n,i){var r=0;switch(n.tag){case 31:case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(r=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),$v(n,r)}function XM(n,i){return Ye(n,i)}var ru=null,Yr=null,rd=!1,ou=!1,od=!1,xs=0;function ua(n){n!==Yr&&n.next===null&&(Yr===null?ru=Yr=n:Yr=Yr.next=n),ou=!0,rd||(rd=!0,qM())}function _l(n,i){if(!od&&ou){od=!0;do for(var r=!1,c=ru;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var m=0;else{var b=c.suspendedLanes,C=c.pingedLanes;m=(1<<31-qe(42|n)+1)-1,m&=p&~(b&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,i_(c,m))}else m=It,m=be(c,c===on?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||ze(c,m)||(r=!0,i_(c,m));c=c.next}while(r);od=!1}}function WM(){e_()}function e_(){ou=rd=!1;var n=0;xs!==0&&nb()&&(n=xs);for(var i=T(),r=null,c=ru;c!==null;){var p=c.next,m=t_(c,i);m===0?(c.next=null,r===null?ru=p:r.next=p,p===null&&(Yr=r)):(r=c,(n!==0||(m&3)!==0)&&(ou=!0)),c=p}Nn!==0&&Nn!==5||_l(n),xs!==0&&(xs=0)}function t_(n,i){for(var r=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var b=31-qe(m),C=1<<b,X=p[b];X===-1?((C&r)===0||(C&c)!==0)&&(p[b]=_t(C,i)):X<=i&&(n.expiredLanes|=C),m&=~C}if(i=on,r=It,r=be(n,n===i?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,r===0||n===i&&(Kt===2||Kt===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&lt(c),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||ze(n,r)){if(i=r&-r,i===n.callbackPriority)return i;switch(c!==null&&lt(c),rn(r)){case 2:case 8:r=W;break;case 32:r=V;break;case 268435456:r=xe;break;default:r=V}return c=n_.bind(null,n),r=Ye(r,c),n.callbackPriority=i,n.callbackNode=r,i}return c!==null&&c!==null&&lt(c),n.callbackPriority=2,n.callbackNode=null,2}function n_(n,i){if(Nn!==0&&Nn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var r=n.callbackNode;if(su()&&n.callbackNode!==r)return null;var c=It;return c=be(n,n===on?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(zv(n,c,i),t_(n,T()),n.callbackNode!=null&&n.callbackNode===r?n_.bind(null,n):null)}function i_(n,i){if(su())return null;zv(n,i,!0)}function qM(){ab(function(){(qt&6)!==0?Ye(pe,WM):e_()})}function ld(){if(xs===0){var n=Ur;n===0&&(n=Oe,Oe<<=1,(Oe&261888)===0&&(Oe=256)),xs=n}return xs}function a_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:mc(""+n)}function s_(n,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,n.id&&r.setAttribute("form",n.id),i.parentNode.insertBefore(r,i),n=new FormData(n),r.parentNode.removeChild(r),n}function jM(n,i,r,c,p){if(i==="submit"&&r&&r.stateNode===p){var m=a_((p[en]||null).action),b=c.submitter;b&&(i=(i=b[en]||null)?a_(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var C=new xc("action","action",null,c,p);n.push({event:C,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(xs!==0){var X=b?s_(p,b):new FormData(p);Rh(r,{pending:!0,data:X,method:p.method,action:m},null,X)}}else typeof m=="function"&&(C.preventDefault(),X=b?s_(p,b):new FormData(p),Rh(r,{pending:!0,data:X,method:p.method,action:m},m,X))},currentTarget:p}]})}}for(var cd=0;cd<Wf.length;cd++){var ud=Wf[cd],YM=ud.toLowerCase(),ZM=ud[0].toUpperCase()+ud.slice(1);Zi(YM,"on"+ZM)}Zi(I0,"onAnimationEnd"),Zi(z0,"onAnimationIteration"),Zi(B0,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(fM,"onTransitionRun"),Zi(hM,"onTransitionStart"),Zi(dM,"onTransitionCancel"),Zi(F0,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function r_(n,i){i=(i&4)!==0;for(var r=0;r<n.length;r++){var c=n[r],p=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var C=c[b],X=C.instance,re=C.currentTarget;if(C=C.listener,X!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=re;try{m(p)}catch(Se){Mc(Se)}p.currentTarget=null,m=X}else for(b=0;b<c.length;b++){if(C=c[b],X=C.instance,re=C.currentTarget,C=C.listener,X!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=re;try{m(p)}catch(Se){Mc(Se)}p.currentTarget=null,m=X}}}}function Ut(n,i){var r=i[Qa];r===void 0&&(r=i[Qa]=new Set);var c=n+"__bubble";r.has(c)||(o_(i,n,2,!1),r.add(c))}function fd(n,i,r){var c=0;i&&(c|=4),o_(r,n,c,i)}var lu="_reactListening"+Math.random().toString(36).slice(2);function hd(n){if(!n[lu]){n[lu]=!0,Q.forEach(function(r){r!=="selectionchange"&&(KM.has(r)||fd(r,!1,n),fd(r,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[lu]||(i[lu]=!0,fd("selectionchange",!1,i))}}function o_(n,i,r,c){switch(I_(i)){case 2:var p=Tb;break;case 8:p=Eb;break;default:p=wd}r=p.bind(null,i,r,n),p=void 0,!Lf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,r,{capture:!0,passive:p}):n.addEventListener(i,r,!0):p!==void 0?n.addEventListener(i,r,{passive:p}):n.addEventListener(i,r,!1)}function dd(n,i,r,c,p){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var C=c.stateNode.containerInfo;if(C===p)break;if(b===4)for(b=c.return;b!==null;){var X=b.tag;if((X===3||X===4)&&b.stateNode.containerInfo===p)return;b=b.return}for(;C!==null;){if(b=es(C),b===null)return;if(X=b.tag,X===5||X===6||X===26||X===27){c=m=b;continue e}C=C.parentNode}}c=c.return}h0(function(){var re=m,Se=Df(r),Ce=[];e:{var fe=H0.get(n);if(fe!==void 0){var me=xc,nt=n;switch(n){case"keypress":if(vc(r)===0)break e;case"keydown":case"keyup":me=kS;break;case"focusin":nt="focus",me=If;break;case"focusout":nt="blur",me=If;break;case"beforeblur":case"afterblur":me=If;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=m0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=NS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=qS;break;case I0:case z0:case B0:me=PS;break;case F0:me=YS;break;case"scroll":case"scrollend":me=CS;break;case"wheel":me=KS;break;case"copy":case"cut":case"paste":me=IS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=v0;break;case"toggle":case"beforetoggle":me=QS}var gt=(i&4)!==0,an=!gt&&(n==="scroll"||n==="scrollend"),$=gt?fe!==null?fe+"Capture":null:fe;gt=[];for(var K=re,se;K!==null;){var Ae=K;if(se=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||se===null||$===null||(Ae=Go(K,$),Ae!=null&&gt.push(yl(K,Ae,se))),an)break;K=K.return}0<gt.length&&(fe=new me(fe,nt,null,r,Se),Ce.push({event:fe,listeners:gt}))}}if((i&7)===0){e:{if(fe=n==="mouseover"||n==="pointerover",me=n==="mouseout"||n==="pointerout",fe&&r!==Cf&&(nt=r.relatedTarget||r.fromElement)&&(es(nt)||nt[ai]))break e;if((me||fe)&&(fe=Se.window===Se?Se:(fe=Se.ownerDocument)?fe.defaultView||fe.parentWindow:window,me?(nt=r.relatedTarget||r.toElement,me=re,nt=nt?es(nt):null,nt!==null&&(an=l(nt),gt=nt.tag,nt!==an||gt!==5&&gt!==27&&gt!==6)&&(nt=null)):(me=null,nt=re),me!==nt)){if(gt=m0,Ae="onMouseLeave",$="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(gt=v0,Ae="onPointerLeave",$="onPointerEnter",K="pointer"),an=me==null?fe:Bs(me),se=nt==null?fe:Bs(nt),fe=new gt(Ae,K+"leave",me,r,Se),fe.target=an,fe.relatedTarget=se,Ae=null,es(Se)===re&&(gt=new gt($,K+"enter",nt,r,Se),gt.target=se,gt.relatedTarget=an,Ae=gt),an=Ae,me&&nt)t:{for(gt=JM,$=me,K=nt,se=0,Ae=$;Ae;Ae=gt(Ae))se++;Ae=0;for(var ht=K;ht;ht=gt(ht))Ae++;for(;0<se-Ae;)$=gt($),se--;for(;0<Ae-se;)K=gt(K),Ae--;for(;se--;){if($===K||K!==null&&$===K.alternate){gt=$;break t}$=gt($),K=gt(K)}gt=null}else gt=null;me!==null&&l_(Ce,fe,me,gt,!1),nt!==null&&an!==null&&l_(Ce,an,nt,gt,!0)}}e:{if(fe=re?Bs(re):window,me=fe.nodeName&&fe.nodeName.toLowerCase(),me==="select"||me==="input"&&fe.type==="file")var Gt=E0;else if(b0(fe))if(A0)Gt=lM;else{Gt=rM;var ot=sM}else me=fe.nodeName,!me||me.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?re&&Yi(re.elementType)&&(Gt=E0):Gt=oM;if(Gt&&(Gt=Gt(n,re))){T0(Ce,Gt,r,Se);break e}ot&&ot(n,fe,re),n==="focusout"&&re&&fe.type==="number"&&re.memoizedProps.value!=null&&Xn(fe,"number",fe.value)}switch(ot=re?Bs(re):window,n){case"focusin":(b0(ot)||ot.contentEditable==="true")&&(Er=ot,Vf=re,Zo=null);break;case"focusout":Zo=Vf=Er=null;break;case"mousedown":kf=!0;break;case"contextmenu":case"mouseup":case"dragend":kf=!1,P0(Ce,r,Se);break;case"selectionchange":if(uM)break;case"keydown":case"keyup":P0(Ce,r,Se)}var Et;if(Bf)e:{switch(n){case"compositionstart":var zt="onCompositionStart";break e;case"compositionend":zt="onCompositionEnd";break e;case"compositionupdate":zt="onCompositionUpdate";break e}zt=void 0}else Tr?S0(n,r)&&(zt="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(zt="onCompositionStart");zt&&(_0&&r.locale!=="ko"&&(Tr||zt!=="onCompositionStart"?zt==="onCompositionEnd"&&Tr&&(Et=d0()):(is=Se,Uf="value"in is?is.value:is.textContent,Tr=!0)),ot=cu(re,zt),0<ot.length&&(zt=new g0(zt,n,null,r,Se),Ce.push({event:zt,listeners:ot}),Et?zt.data=Et:(Et=M0(r),Et!==null&&(zt.data=Et)))),(Et=eM?tM(n,r):nM(n,r))&&(zt=cu(re,"onBeforeInput"),0<zt.length&&(ot=new g0("onBeforeInput","beforeinput",null,r,Se),Ce.push({event:ot,listeners:zt}),ot.data=Et)),jM(Ce,n,re,r,Se)}r_(Ce,i)})}function yl(n,i,r){return{instance:n,listener:i,currentTarget:r}}function cu(n,i){for(var r=i+"Capture",c=[];n!==null;){var p=n,m=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||m===null||(p=Go(n,r),p!=null&&c.unshift(yl(n,p,m)),p=Go(n,i),p!=null&&c.push(yl(n,p,m))),n.tag===3)return c;n=n.return}return[]}function JM(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function l_(n,i,r,c,p){for(var m=i._reactName,b=[];r!==null&&r!==c;){var C=r,X=C.alternate,re=C.stateNode;if(C=C.tag,X!==null&&X===c)break;C!==5&&C!==26&&C!==27||re===null||(X=re,p?(re=Go(r,m),re!=null&&b.unshift(yl(r,re,X))):p||(re=Go(r,m),re!=null&&b.push(yl(r,re,X)))),r=r.return}b.length!==0&&n.push({event:i,listeners:b})}var QM=/\r\n?/g,$M=/\u0000|\uFFFD/g;function c_(n){return(typeof n=="string"?n:""+n).replace(QM,`
`).replace($M,"")}function u_(n,i){return i=c_(i),c_(n)===i}function nn(n,i,r,c,p,m){switch(r){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Dn(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Dn(n,""+c);break;case"className":dt(n,"class",c);break;case"tabIndex":dt(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":dt(n,r,c);break;case"style":Sr(n,c,m);break;case"data":if(i!=="object"){dt(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||r!=="href")){n.removeAttribute(r);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=mc(""+c),n.setAttribute(r,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&nn(n,i,"name",p.name,p,null),nn(n,i,"formEncType",p.formEncType,p,null),nn(n,i,"formMethod",p.formMethod,p,null),nn(n,i,"formTarget",p.formTarget,p,null)):(nn(n,i,"encType",p.encType,p,null),nn(n,i,"method",p.method,p,null),nn(n,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(r);break}c=mc(""+c),n.setAttribute(r,c);break;case"onClick":c!=null&&(n.onclick=Ma);break;case"onScroll":c!=null&&Ut("scroll",n);break;case"onScrollEnd":c!=null&&Ut("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=r}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}r=mc(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""+c):n.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,""):n.removeAttribute(r);break;case"capture":case"download":c===!0?n.setAttribute(r,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(r,c):n.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(r,c):n.removeAttribute(r);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(r):n.setAttribute(r,c);break;case"popover":Ut("beforetoggle",n),Ut("toggle",n),st(n,"popover",c);break;case"xlinkActuate":rt(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":rt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":rt(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":rt(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":rt(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":rt(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":rt(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":rt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":rt(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":st(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=wS.get(r)||r,st(n,r,c))}}function pd(n,i,r,c,p,m){switch(r){case"style":Sr(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=r}}break;case"children":typeof c=="string"?Dn(n,c):(typeof c=="number"||typeof c=="bigint")&&Dn(n,""+c);break;case"onScroll":c!=null&&Ut("scroll",n);break;case"onScrollEnd":c!=null&&Ut("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Ma);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!de.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(p=r.endsWith("Capture"),i=r.slice(2,p?r.length-7:void 0),m=n[en]||null,m=m!=null?m[r]:null,typeof m=="function"&&n.removeEventListener(i,m,p),typeof c=="function")){typeof m!="function"&&m!==null&&(r in n?n[r]=null:n.hasAttribute(r)&&n.removeAttribute(r)),n.addEventListener(i,c,p);break e}r in n?n[r]=c:c===!0?n.setAttribute(r,""):st(n,r,c)}}}function Jn(n,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ut("error",n),Ut("load",n);var c=!1,p=!1,m;for(m in r)if(r.hasOwnProperty(m)){var b=r[m];if(b!=null)switch(m){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:nn(n,i,m,b,r,null)}}p&&nn(n,i,"srcSet",r.srcSet,r,null),c&&nn(n,i,"src",r.src,r,null);return;case"input":Ut("invalid",n);var C=m=b=p=null,X=null,re=null;for(c in r)if(r.hasOwnProperty(c)){var Se=r[c];if(Se!=null)switch(c){case"name":p=Se;break;case"type":b=Se;break;case"checked":X=Se;break;case"defaultChecked":re=Se;break;case"value":m=Se;break;case"defaultValue":C=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,i));break;default:nn(n,i,c,Se,r,null)}}Sa(n,m,C,X,re,b,p,!1);return;case"select":Ut("invalid",n),c=b=m=null;for(p in r)if(r.hasOwnProperty(p)&&(C=r[p],C!=null))switch(p){case"value":m=C;break;case"defaultValue":b=C;break;case"multiple":c=C;default:nn(n,i,p,C,r,null)}i=m,r=b,n.multiple=!!c,i!=null?Li(n,!!c,i,!1):r!=null&&Li(n,!!c,r,!0);return;case"textarea":Ut("invalid",n),m=p=c=null;for(b in r)if(r.hasOwnProperty(b)&&(C=r[b],C!=null))switch(b){case"value":c=C;break;case"defaultValue":p=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:nn(n,i,b,C,r,null)}Wn(n,c,p,m);return;case"option":for(X in r)if(r.hasOwnProperty(X)&&(c=r[X],c!=null))switch(X){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:nn(n,i,X,c,r,null)}return;case"dialog":Ut("beforetoggle",n),Ut("toggle",n),Ut("cancel",n),Ut("close",n);break;case"iframe":case"object":Ut("load",n);break;case"video":case"audio":for(c=0;c<xl.length;c++)Ut(xl[c],n);break;case"image":Ut("error",n),Ut("load",n);break;case"details":Ut("toggle",n);break;case"embed":case"source":case"link":Ut("error",n),Ut("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in r)if(r.hasOwnProperty(re)&&(c=r[re],c!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:nn(n,i,re,c,r,null)}return;default:if(Yi(i)){for(Se in r)r.hasOwnProperty(Se)&&(c=r[Se],c!==void 0&&pd(n,i,Se,c,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(c=r[C],c!=null&&nn(n,i,C,c,r,null))}function eb(n,i,r,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,m=null,b=null,C=null,X=null,re=null,Se=null;for(me in r){var Ce=r[me];if(r.hasOwnProperty(me)&&Ce!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":X=Ce;default:c.hasOwnProperty(me)||nn(n,i,me,null,c,Ce)}}for(var fe in c){var me=c[fe];if(Ce=r[fe],c.hasOwnProperty(fe)&&(me!=null||Ce!=null))switch(fe){case"type":m=me;break;case"name":p=me;break;case"checked":re=me;break;case"defaultChecked":Se=me;break;case"value":b=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:me!==Ce&&nn(n,i,fe,me,c,Ce)}}kn(n,b,C,X,re,Se,m,p);return;case"select":me=b=C=fe=null;for(m in r)if(X=r[m],r.hasOwnProperty(m)&&X!=null)switch(m){case"value":break;case"multiple":me=X;default:c.hasOwnProperty(m)||nn(n,i,m,null,c,X)}for(p in c)if(m=c[p],X=r[p],c.hasOwnProperty(p)&&(m!=null||X!=null))switch(p){case"value":fe=m;break;case"defaultValue":C=m;break;case"multiple":b=m;default:m!==X&&nn(n,i,p,m,c,X)}i=C,r=b,c=me,fe!=null?Li(n,!!r,fe,!1):!!c!=!!r&&(i!=null?Li(n,!!r,i,!0):Li(n,!!r,r?[]:"",!1));return;case"textarea":me=fe=null;for(C in r)if(p=r[C],r.hasOwnProperty(C)&&p!=null&&!c.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:nn(n,i,C,null,c,p)}for(b in c)if(p=c[b],m=r[b],c.hasOwnProperty(b)&&(p!=null||m!=null))switch(b){case"value":fe=p;break;case"defaultValue":me=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==m&&nn(n,i,b,p,c,m)}Zt(n,fe,me);return;case"option":for(var nt in r)if(fe=r[nt],r.hasOwnProperty(nt)&&fe!=null&&!c.hasOwnProperty(nt))switch(nt){case"selected":n.selected=!1;break;default:nn(n,i,nt,null,c,fe)}for(X in c)if(fe=c[X],me=r[X],c.hasOwnProperty(X)&&fe!==me&&(fe!=null||me!=null))switch(X){case"selected":n.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:nn(n,i,X,fe,c,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in r)fe=r[gt],r.hasOwnProperty(gt)&&fe!=null&&!c.hasOwnProperty(gt)&&nn(n,i,gt,null,c,fe);for(re in c)if(fe=c[re],me=r[re],c.hasOwnProperty(re)&&fe!==me&&(fe!=null||me!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:nn(n,i,re,fe,c,me)}return;default:if(Yi(i)){for(var an in r)fe=r[an],r.hasOwnProperty(an)&&fe!==void 0&&!c.hasOwnProperty(an)&&pd(n,i,an,void 0,c,fe);for(Se in c)fe=c[Se],me=r[Se],!c.hasOwnProperty(Se)||fe===me||fe===void 0&&me===void 0||pd(n,i,Se,fe,c,me);return}}for(var $ in r)fe=r[$],r.hasOwnProperty($)&&fe!=null&&!c.hasOwnProperty($)&&nn(n,i,$,null,c,fe);for(Ce in c)fe=c[Ce],me=r[Ce],!c.hasOwnProperty(Ce)||fe===me||fe==null&&me==null||nn(n,i,Ce,fe,c,me)}function f_(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tb(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,r=performance.getEntriesByType("resource"),c=0;c<r.length;c++){var p=r[c],m=p.transferSize,b=p.initiatorType,C=p.duration;if(m&&C&&f_(b)){for(b=0,C=p.responseEnd,c+=1;c<r.length;c++){var X=r[c],re=X.startTime;if(re>C)break;var Se=X.transferSize,Ce=X.initiatorType;Se&&f_(Ce)&&(X=X.responseEnd,b+=Se*(X<C?1:(C-re)/(X-re)))}if(--c,i+=8*(m+b)/(p.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var md=null,gd=null;function uu(n){return n.nodeType===9?n:n.ownerDocument}function h_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d_(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function vd(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _d=null;function nb(){var n=window.event;return n&&n.type==="popstate"?n===_d?!1:(_d=n,!0):(_d=null,!1)}var p_=typeof setTimeout=="function"?setTimeout:void 0,ib=typeof clearTimeout=="function"?clearTimeout:void 0,m_=typeof Promise=="function"?Promise:void 0,ab=typeof queueMicrotask=="function"?queueMicrotask:typeof m_<"u"?function(n){return m_.resolve(null).then(n).catch(sb)}:p_;function sb(n){setTimeout(function(){throw n})}function ys(n){return n==="head"}function g_(n,i){var r=i,c=0;do{var p=r.nextSibling;if(n.removeChild(r),p&&p.nodeType===8)if(r=p.data,r==="/$"||r==="/&"){if(c===0){n.removeChild(p),Qr(i);return}c--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")c++;else if(r==="html")Sl(n.ownerDocument.documentElement);else if(r==="head"){r=n.ownerDocument.head,Sl(r);for(var m=r.firstChild;m;){var b=m.nextSibling,C=m.nodeName;m[zs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=b}}else r==="body"&&Sl(n.ownerDocument.body);r=p}while(r);Qr(i)}function v_(n,i){var r=n;n=0;do{var c=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(n===0)break;n--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||n++;r=c}while(r)}function xd(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":xd(r),Ho(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}n.removeChild(r)}}function rb(n,i,r,c){for(;n.nodeType===1;){var p=r;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[zs])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Fi(n.nextSibling),n===null)break}return null}function ob(n,i,r){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Fi(n.nextSibling),n===null))return null;return n}function __(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=Fi(n.nextSibling),n===null))return null;return n}function yd(n){return n.data==="$?"||n.data==="$~"}function Sd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function lb(n,i){var r=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||r.readyState!=="loading")i();else{var c=function(){i(),r.removeEventListener("DOMContentLoaded",c)};r.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Fi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var Md=null;function x_(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"||r==="/&"){if(i===0)return Fi(n.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}n=n.nextSibling}return null}function y_(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return n;i--}else r!=="/$"&&r!=="/&"||i++}n=n.previousSibling}return null}function S_(n,i,r){switch(i=uu(r),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Sl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Ho(n)}var Hi=new Map,M_=new Set;function fu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ba=G.d;G.d={f:cb,r:ub,D:fb,C:hb,L:db,m:pb,X:gb,S:mb,M:vb};function cb(){var n=Ba.f(),i=nu();return n||i}function ub(n){var i=ts(n);i!==null&&i.tag===5&&i.type==="form"?Fg(i):Ba.r(n)}var Zr=typeof document>"u"?null:document;function b_(n,i,r){var c=Zr;if(c&&typeof i=="string"&&i){var p=yt(i);p='link[rel="'+n+'"][href="'+p+'"]',typeof r=="string"&&(p+='[crossorigin="'+r+'"]'),M_.has(p)||(M_.add(p),n={rel:n,crossOrigin:r,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),Jn(i,"link",n),D(i),c.head.appendChild(i)))}}function fb(n){Ba.D(n),b_("dns-prefetch",n,null)}function hb(n,i){Ba.C(n,i),b_("preconnect",n,i)}function db(n,i,r){Ba.L(n,i,r);var c=Zr;if(c&&n&&i){var p='link[rel="preload"][as="'+yt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(p+='[imagesrcset="'+yt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(p+='[imagesizes="'+yt(r.imageSizes)+'"]')):p+='[href="'+yt(n)+'"]';var m=p;switch(i){case"style":m=Kr(n);break;case"script":m=Jr(n)}Hi.has(m)||(n=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:n,as:i},r),Hi.set(m,n),c.querySelector(p)!==null||i==="style"&&c.querySelector(Ml(m))||i==="script"&&c.querySelector(bl(m))||(i=c.createElement("link"),Jn(i,"link",n),D(i),c.head.appendChild(i)))}}function pb(n,i){Ba.m(n,i);var r=Zr;if(r&&n){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+yt(c)+'"][href="'+yt(n)+'"]',m=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Jr(n)}if(!Hi.has(m)&&(n=v({rel:"modulepreload",href:n},i),Hi.set(m,n),r.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(bl(m)))return}c=r.createElement("link"),Jn(c,"link",n),D(c),r.head.appendChild(c)}}}function mb(n,i,r){Ba.S(n,i,r);var c=Zr;if(c&&n){var p=ns(c).hoistableStyles,m=Kr(n);i=i||"default";var b=p.get(m);if(!b){var C={loading:0,preload:null};if(b=c.querySelector(Ml(m)))C.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},r),(r=Hi.get(m))&&bd(n,r);var X=b=c.createElement("link");D(X),Jn(X,"link",n),X._p=new Promise(function(re,Se){X.onload=re,X.onerror=Se}),X.addEventListener("load",function(){C.loading|=1}),X.addEventListener("error",function(){C.loading|=2}),C.loading|=4,hu(b,i,c)}b={type:"stylesheet",instance:b,count:1,state:C},p.set(m,b)}}}function gb(n,i){Ba.X(n,i);var r=Zr;if(r&&n){var c=ns(r).hoistableScripts,p=Jr(n),m=c.get(p);m||(m=r.querySelector(bl(p)),m||(n=v({src:n,async:!0},i),(i=Hi.get(p))&&Td(n,i),m=r.createElement("script"),D(m),Jn(m,"link",n),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function vb(n,i){Ba.M(n,i);var r=Zr;if(r&&n){var c=ns(r).hoistableScripts,p=Jr(n),m=c.get(p);m||(m=r.querySelector(bl(p)),m||(n=v({src:n,async:!0,type:"module"},i),(i=Hi.get(p))&&Td(n,i),m=r.createElement("script"),D(m),Jn(m,"link",n),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function T_(n,i,r,c){var p=(p=oe.current)?fu(p):null;if(!p)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Kr(r.href),r=ns(p).hoistableStyles,c=r.get(i),c||(c={type:"style",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){n=Kr(r.href);var m=ns(p).hoistableStyles,b=m.get(n);if(b||(p=p.ownerDocument||p,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,b),(m=p.querySelector(Ml(n)))&&!m._p&&(b.instance=m,b.state.loading=5),Hi.has(n)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Hi.set(n,r),m||_b(p,n,r,b.state))),i&&c===null)throw Error(a(528,""));return b}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Jr(r),r=ns(p).hoistableScripts,c=r.get(i),c||(c={type:"script",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function Kr(n){return'href="'+yt(n)+'"'}function Ml(n){return'link[rel="stylesheet"]['+n+"]"}function E_(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function _b(n,i,r,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Jn(i,"link",r),D(i),n.head.appendChild(i))}function Jr(n){return'[src="'+yt(n)+'"]'}function bl(n){return"script[async]"+n}function A_(n,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+yt(r.href)+'"]');if(c)return i.instance=c,D(c),c;var p=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),D(c),Jn(c,"style",p),hu(c,r.precedence,n),i.instance=c;case"stylesheet":p=Kr(r.href);var m=n.querySelector(Ml(p));if(m)return i.state.loading|=4,i.instance=m,D(m),m;c=E_(r),(p=Hi.get(p))&&bd(c,p),m=(n.ownerDocument||n).createElement("link"),D(m);var b=m;return b._p=new Promise(function(C,X){b.onload=C,b.onerror=X}),Jn(m,"link",c),i.state.loading|=4,hu(m,r.precedence,n),i.instance=m;case"script":return m=Jr(r.src),(p=n.querySelector(bl(m)))?(i.instance=p,D(p),p):(c=r,(p=Hi.get(m))&&(c=v({},r),Td(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),D(p),Jn(p,"link",c),n.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,hu(c,r.precedence,n));return i.instance}function hu(n,i,r){for(var c=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,m=p,b=0;b<c.length;b++){var C=c[b];if(C.dataset.precedence===i)m=C;else if(m!==p)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(n,i.firstChild))}function bd(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Td(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var du=null;function w_(n,i,r){if(du===null){var c=new Map,p=du=new Map;p.set(r,c)}else p=du,c=p.get(r),c||(c=new Map,p.set(r,c));if(c.has(n))return c;for(c.set(n,null),r=r.getElementsByTagName(n),p=0;p<r.length;p++){var m=r[p];if(!(m[zs]||m[ln]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=n+b;var C=c.get(b);C?C.push(m):c.set(b,[m])}}return c}function R_(n,i,r){n=n.ownerDocument||n,n.head.insertBefore(r,i==="title"?n.querySelector("head > title"):null)}function xb(n,i,r){if(r===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function C_(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function yb(n,i,r,c){if(r.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=Kr(c.href),m=i.querySelector(Ml(p));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=pu.bind(n),i.then(n,n)),r.state.loading|=4,r.instance=m,D(m);return}m=i.ownerDocument||i,c=E_(c),(p=Hi.get(p))&&bd(c,p),m=m.createElement("link"),D(m);var b=m;b._p=new Promise(function(C,X){b.onload=C,b.onerror=X}),Jn(m,"link",c),r.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(n.count++,r=pu.bind(n),i.addEventListener("load",r),i.addEventListener("error",r))}}var Ed=0;function Sb(n,i){return n.stylesheets&&n.count===0&&gu(n,n.stylesheets),0<n.count||0<n.imgCount?function(r){var c=setTimeout(function(){if(n.stylesheets&&gu(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+i);0<n.imgBytes&&Ed===0&&(Ed=62500*tb());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&gu(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Ed?50:800)+i);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function pu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gu(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var mu=null;function gu(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,mu=new Map,i.forEach(Mb,n),mu=null,pu.call(n))}function Mb(n,i){if(!(i.state.loading&4)){var r=mu.get(n);if(r)var c=r.get(null);else{r=new Map,mu.set(n,r);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<p.length;m++){var b=p[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),c=b)}c&&r.set(null,c)}p=i.instance,b=p.getAttribute("data-precedence"),m=r.get(b)||c,m===c&&r.set(null,p),r.set(b,p),this.count++,c=pu.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),m?m.parentNode.insertBefore(p,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),i.state.loading|=4}}var Tl={$$typeof:R,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function bb(n,i,r,c,p,m,b,C,X){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function D_(n,i,r,c,p,m,b,C,X,re,Se,Ce){return n=new bb(n,i,r,b,X,re,Se,Ce,C),i=1,m===!0&&(i|=24),m=Si(3,null,null,i),n.current=m,m.stateNode=n,i=ah(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:r,cache:i},lh(m),n}function N_(n){return n?(n=Rr,n):Rr}function L_(n,i,r,c,p,m){p=N_(p),c.context===null?c.context=p:c.pendingContext=p,c=cs(i),c.payload={element:r},m=m===void 0?null:m,m!==null&&(c.callback=m),r=us(n,c,i),r!==null&&(mi(r,n,i),nl(r,n,i))}function U_(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<i?r:i}}function Ad(n,i){U_(n,i),(n=n.alternate)&&U_(n,i)}function P_(n){if(n.tag===13||n.tag===31){var i=Vs(n,67108864);i!==null&&mi(i,n,67108864),Ad(n,67108864)}}function O_(n){if(n.tag===13||n.tag===31){var i=Ai();i=Cn(i);var r=Vs(n,i);r!==null&&mi(r,n,i),Ad(n,i)}}var vu=!0;function Tb(n,i,r,c){var p=O.T;O.T=null;var m=G.p;try{G.p=2,wd(n,i,r,c)}finally{G.p=m,O.T=p}}function Eb(n,i,r,c){var p=O.T;O.T=null;var m=G.p;try{G.p=8,wd(n,i,r,c)}finally{G.p=m,O.T=p}}function wd(n,i,r,c){if(vu){var p=Rd(c);if(p===null)dd(n,i,c,_u,r),z_(n,c);else if(wb(p,n,i,r,c))c.stopPropagation();else if(z_(n,c),i&4&&-1<Ab.indexOf(n)){for(;p!==null;){var m=ts(p);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Ne(m.pendingLanes);if(b!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var X=1<<31-qe(b);C.entanglements[1]|=X,b&=~X}ua(m),(qt&6)===0&&(eu=T()+500,_l(0))}}break;case 31:case 13:C=Vs(m,2),C!==null&&mi(C,m,2),nu(),Ad(m,2)}if(m=Rd(c),m===null&&dd(n,i,c,_u,r),m===p)break;p=m}p!==null&&c.stopPropagation()}else dd(n,i,c,null,r)}}function Rd(n){return n=Df(n),Cd(n)}var _u=null;function Cd(n){if(_u=null,n=es(n),n!==null){var i=l(n);if(i===null)n=null;else{var r=i.tag;if(r===13){if(n=u(i),n!==null)return n;n=null}else if(r===31){if(n=f(i),n!==null)return n;n=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return _u=n,null}function I_(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case pe:return 2;case W:return 8;case V:case ae:return 32;case xe:return 268435456;default:return 32}default:return 32}}var Dd=!1,Ss=null,Ms=null,bs=null,El=new Map,Al=new Map,Ts=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z_(n,i){switch(n){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":El.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(i.pointerId)}}function wl(n,i,r,c,p,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:r,eventSystemFlags:c,nativeEvent:m,targetContainers:[p]},i!==null&&(i=ts(i),i!==null&&P_(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function wb(n,i,r,c,p){switch(i){case"focusin":return Ss=wl(Ss,n,i,r,c,p),!0;case"dragenter":return Ms=wl(Ms,n,i,r,c,p),!0;case"mouseover":return bs=wl(bs,n,i,r,c,p),!0;case"pointerover":var m=p.pointerId;return El.set(m,wl(El.get(m)||null,n,i,r,c,p)),!0;case"gotpointercapture":return m=p.pointerId,Al.set(m,wl(Al.get(m)||null,n,i,r,c,p)),!0}return!1}function B_(n){var i=es(n.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){n.blockedOn=i,xn(n.priority,function(){O_(r)});return}}else if(i===31){if(i=f(r),i!==null){n.blockedOn=i,xn(n.priority,function(){O_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xu(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var r=Rd(n.nativeEvent);if(r===null){r=n.nativeEvent;var c=new r.constructor(r.type,r);Cf=c,r.target.dispatchEvent(c),Cf=null}else return i=ts(r),i!==null&&P_(i),n.blockedOn=r,!1;i.shift()}return!0}function F_(n,i,r){xu(n)&&r.delete(i)}function Rb(){Dd=!1,Ss!==null&&xu(Ss)&&(Ss=null),Ms!==null&&xu(Ms)&&(Ms=null),bs!==null&&xu(bs)&&(bs=null),El.forEach(F_),Al.forEach(F_)}function yu(n,i){n.blockedOn===i&&(n.blockedOn=null,Dd||(Dd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Rb)))}var Su=null;function H_(n){Su!==n&&(Su=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Su===n&&(Su=null);for(var i=0;i<n.length;i+=3){var r=n[i],c=n[i+1],p=n[i+2];if(typeof c!="function"){if(Cd(c||r)===null)continue;break}var m=ts(r);m!==null&&(n.splice(i,3),i-=3,Rh(m,{pending:!0,data:p,method:r.method,action:c},c,p))}}))}function Qr(n){function i(X){return yu(X,n)}Ss!==null&&yu(Ss,n),Ms!==null&&yu(Ms,n),bs!==null&&yu(bs,n),El.forEach(i),Al.forEach(i);for(var r=0;r<Ts.length;r++){var c=Ts[r];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Ts.length&&(r=Ts[0],r.blockedOn===null);)B_(r),r.blockedOn===null&&Ts.shift();if(r=(n.ownerDocument||n).$$reactFormReplay,r!=null)for(c=0;c<r.length;c+=3){var p=r[c],m=r[c+1],b=p[en]||null;if(typeof m=="function")b||H_(r);else if(b){var C=null;if(m&&m.hasAttribute("formAction")){if(p=m,b=m[en]||null)C=b.formAction;else if(Cd(p)!==null)continue}else C=b.action;typeof C=="function"?r[c+1]=C:(r.splice(c,3),c-=3),H_(r)}}}function G_(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return p=b})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),c||setTimeout(r,20)}function r(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function Nd(n){this._internalRoot=n}Mu.prototype.render=Nd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,c=Ai();L_(r,c,n,i,null,null)},Mu.prototype.unmount=Nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;L_(n.current,2,null,n,null,null),nu(),i[ai]=null}};function Mu(n){this._internalRoot=n}Mu.prototype.unstable_scheduleHydration=function(n){if(n){var i=$n();n={blockedOn:null,target:n,priority:i};for(var r=0;r<Ts.length&&i!==0&&i<Ts[r].priority;r++);Ts.splice(r,0,n),r===0&&B_(n)}};var V_=e.version;if(V_!=="19.2.3")throw Error(a(527,V_,"19.2.3"));G.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=d(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var Cb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{he=bu.inject(Cb),Le=bu}catch{}}return Cl.createRoot=function(n,i){if(!s(n))throw Error(a(299));var r=!1,c="",p=Zg,m=Kg,b=Jg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=D_(n,1,!1,null,null,r,c,null,p,m,b,G_),n[ai]=i.current,hd(n),new Nd(i)},Cl.hydrateRoot=function(n,i,r){if(!s(n))throw Error(a(299));var c=!1,p="",m=Zg,b=Kg,C=Jg,X=null;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(X=r.formState)),i=D_(n,1,!0,i,r??null,c,p,X,m,b,C,G_),i.context=N_(null),r=i.current,c=Ai(),c=Cn(c),p=cs(c),p.callback=null,us(r,p,c),r=c,i.current.lanes=r,Je(i,r),ua(i),n[ai]=i.current,hd(n),new Mu(i)},Cl.version="19.2.3",Cl}var Q_;function Fb(){if(Q_)return Pd.exports;Q_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Pd.exports=Bb(),Pd.exports}var Hb=Fb();const Dm="182",Gb=0,$_=1,Vb=2,rf=1,wy=2,kl=3,Ka=0,Qn=1,na=2,ga=0,Ya=1,vi=2,ex=3,tx=4,kb=5,ur=100,Xb=101,Wb=102,qb=103,jb=104,Yb=200,Zb=201,Kb=202,Jb=203,Ep=204,Ap=205,Qb=206,$b=207,eT=208,tT=209,nT=210,iT=211,aT=212,sT=213,rT=214,wp=0,Rp=1,Cp=2,To=3,Dp=4,Np=5,Lp=6,Up=7,Ry=0,oT=1,lT=2,va=0,Nm=1,Lm=2,Um=3,cc=4,Pm=5,Om=6,Im=7,nx="attached",cT="detached",Cy=300,pr=301,Eo=302,Pp=303,Op=304,Sf=306,Os=1e3,pa=1001,pf=1002,Un=1003,Dy=1004,Xl=1005,Pn=1006,of=1007,qa=1008,Ci=1009,Ny=1010,Ly=1011,Ql=1012,zm=1013,_a=1014,Xi=1015,Di=1016,Bm=1017,Fm=1018,$l=1020,Uy=35902,Py=35899,Oy=1021,Iy=1022,Wi=1023,Ja=1026,dr=1027,Hm=1028,Gm=1029,Ao=1030,Vm=1031,km=1033,lf=33776,cf=33777,uf=33778,ff=33779,Ip=35840,zp=35841,Bp=35842,Fp=35843,Hp=36196,Gp=37492,Vp=37496,kp=37488,Xp=37489,Wp=37490,qp=37491,jp=37808,Yp=37809,Zp=37810,Kp=37811,Jp=37812,Qp=37813,$p=37814,em=37815,tm=37816,nm=37817,im=37818,am=37819,sm=37820,rm=37821,om=36492,lm=36494,cm=36495,um=36283,fm=36284,hm=36285,dm=36286,ec=2300,tc=2301,Bd=2302,ix=2400,ax=2401,sx=2402,uT=2500,fT=0,zy=1,pm=2,hT=3200,Xm=0,dT=1,Us="",Ln="srgb",ci="srgb-linear",mf="linear",Yt="srgb",$r=7680,rx=519,pT=512,mT=513,gT=514,Wm=515,vT=516,_T=517,qm=518,xT=519,mm=35044,ox="300 es",ma=2e3,gf=2001;function By(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yT(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function nc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ST(){const o=nc("canvas");return o.style.display="block",o}const lx={};function vf(...o){const e="THREE."+o.shift();console.log(e,...o)}function ft(...o){const e="THREE."+o.shift();console.warn(e,...o)}function xt(...o){const e="THREE."+o.shift();console.error(e,...o)}function ic(...o){const e=o.join(" ");e in lx||(lx[e]=!0,ft(...o))}function MT(o,e,t){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}class Po{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cx=1234567;const jl=Math.PI/180,wo=180/Math.PI;function qi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(ti[o&255]+ti[o>>8&255]+ti[o>>16&255]+ti[o>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[a&255]+ti[a>>8&255]+ti[a>>16&255]+ti[a>>24&255]).toLowerCase()}function Nt(o,e,t){return Math.max(e,Math.min(t,o))}function jm(o,e){return(o%e+e)%e}function bT(o,e,t,a,s){return a+(o-e)*(s-a)/(t-e)}function TT(o,e,t){return o!==e?(t-o)/(e-o):0}function Yl(o,e,t){return(1-t)*o+t*e}function ET(o,e,t,a){return Yl(o,e,1-Math.exp(-t*a))}function AT(o,e=1){return e-Math.abs(jm(o,e*2)-e)}function wT(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function RT(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function CT(o,e){return o+Math.floor(Math.random()*(e-o+1))}function DT(o,e){return o+Math.random()*(e-o)}function NT(o){return o*(.5-Math.random())}function LT(o){o!==void 0&&(cx=o);let e=cx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function UT(o){return o*jl}function PT(o){return o*wo}function OT(o){return(o&o-1)===0&&o!==0}function IT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function BT(o,e,t,a,s){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),d=l((e+a)/2),g=u((e+a)/2),v=l((e-a)/2),_=u((e-a)/2),x=l((a-e)/2),M=u((a-e)/2);switch(s){case"XYX":o.set(f*g,h*v,h*_,f*d);break;case"YZY":o.set(h*_,f*g,h*v,f*d);break;case"ZXZ":o.set(h*v,h*_,f*g,f*d);break;case"XZX":o.set(f*g,h*M,h*x,f*d);break;case"YXY":o.set(h*x,f*g,h*M,f*d);break;case"ZYZ":o.set(h*M,h*x,f*g,f*d);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ia(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Qt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const gi={DEG2RAD:jl,RAD2DEG:wo,generateUUID:qi,clamp:Nt,euclideanModulo:jm,mapLinear:bT,inverseLerp:TT,lerp:Yl,damp:ET,pingpong:AT,smoothstep:wT,smootherstep:RT,randInt:CT,randFloat:DT,randFloatSpread:NT,seededRandom:LT,degToRad:UT,radToDeg:PT,isPowerOfTwo:OT,ceilPowerOfTwo:IT,floorPowerOfTwo:zT,setQuaternionFromProperEuler:BT,normalize:Qt,denormalize:ia};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6],this.y=s[1]*t+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Nt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Nt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*s+e.x,this.y=l*s+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(e=0,t=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=s}static slerpFlat(e,t,a,s,l,u,f){let h=a[s+0],d=a[s+1],g=a[s+2],v=a[s+3],_=l[u+0],x=l[u+1],M=l[u+2],E=l[u+3];if(f<=0){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f>=1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(v!==E||h!==_||d!==x||g!==M){let S=h*_+d*x+g*M+v*E;S<0&&(_=-_,x=-x,M=-M,E=-E,S=-S);let y=1-f;if(S<.9995){const L=Math.acos(S),R=Math.sin(L);y=Math.sin(y*L)/R,f=Math.sin(f*L)/R,h=h*y+_*f,d=d*y+x*f,g=g*y+M*f,v=v*y+E*f}else{h=h*y+_*f,d=d*y+x*f,g=g*y+M*f,v=v*y+E*f;const L=1/Math.sqrt(h*h+d*d+g*g+v*v);h*=L,d*=L,g*=L,v*=L}}e[t]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,a,s,l,u){const f=a[s],h=a[s+1],d=a[s+2],g=a[s+3],v=l[u],_=l[u+1],x=l[u+2],M=l[u+3];return e[t]=f*M+g*v+h*x-d*_,e[t+1]=h*M+g*_+d*v-f*x,e[t+2]=d*M+g*x+f*_-h*v,e[t+3]=g*M-f*v-h*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,s){return this._x=e,this._y=t,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,s=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,d=f(a/2),g=f(s/2),v=f(l/2),_=h(a/2),x=h(s/2),M=h(l/2);switch(u){case"XYZ":this._x=_*g*v+d*x*M,this._y=d*x*v-_*g*M,this._z=d*g*M+_*x*v,this._w=d*g*v-_*x*M;break;case"YXZ":this._x=_*g*v+d*x*M,this._y=d*x*v-_*g*M,this._z=d*g*M-_*x*v,this._w=d*g*v+_*x*M;break;case"ZXY":this._x=_*g*v-d*x*M,this._y=d*x*v+_*g*M,this._z=d*g*M+_*x*v,this._w=d*g*v-_*x*M;break;case"ZYX":this._x=_*g*v-d*x*M,this._y=d*x*v+_*g*M,this._z=d*g*M-_*x*v,this._w=d*g*v+_*x*M;break;case"YZX":this._x=_*g*v+d*x*M,this._y=d*x*v+_*g*M,this._z=d*g*M-_*x*v,this._w=d*g*v-_*x*M;break;case"XZY":this._x=_*g*v-d*x*M,this._y=d*x*v-_*g*M,this._z=d*g*M+_*x*v,this._w=d*g*v+_*x*M;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],s=t[4],l=t[8],u=t[1],f=t[5],h=t[9],d=t[2],g=t[6],v=t[10],_=a+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-h)*x,this._y=(l-d)*x,this._z=(u-s)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(g-h)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(l+d)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-d)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(u-s)/x,this._x=(l+d)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,t/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,s=e._y,l=e._z,u=e._w,f=t._x,h=t._y,d=t._z,g=t._w;return this._x=a*g+u*f+s*d-l*h,this._y=s*g+u*h+l*f-a*d,this._z=l*g+u*d+a*h-s*f,this._w=u*g-a*f-s*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let a=e._x,s=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(a=-a,s=-s,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);h=Math.sin(h*d)/g,t=Math.sin(t*d)/g,this._x=this._x*h+a*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+a*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,a=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ux.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ux.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*s,this.y=l[1]*t+l[4]*a+l[7]*s,this.z=l[2]*t+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,s=this.z,l=e.x,u=e.y,f=e.z,h=e.w,d=2*(u*s-f*a),g=2*(f*t-l*s),v=2*(l*a-u*t);return this.x=t+h*d+u*v-f*g,this.y=a+h*g+f*d-l*v,this.z=s+h*v+l*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*s,this.y=l[1]*t+l[5]*a+l[9]*s,this.z=l[2]*t+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Nt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,s=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=s*h-l*f,this.y=l*u-a*h,this.z=a*f-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Fd.copy(this).projectOnVector(e),this.sub(Fd)}reflect(e){return this.sub(Fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Nt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return t*t+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const s=Math.sin(t)*e;return this.x=s*Math.sin(a),this.y=Math.cos(t)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fd=new H,ux=new Is;class At{constructor(e,t,a,s,l,u,f,h,d){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,f,h,d)}set(e,t,a,s,l,u,f,h,d){const g=this.elements;return g[0]=e,g[1]=s,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],f=a[3],h=a[6],d=a[1],g=a[4],v=a[7],_=a[2],x=a[5],M=a[8],E=s[0],S=s[3],y=s[6],L=s[1],R=s[4],w=s[7],U=s[2],B=s[5],I=s[8];return l[0]=u*E+f*L+h*U,l[3]=u*S+f*R+h*B,l[6]=u*y+f*w+h*I,l[1]=d*E+g*L+v*U,l[4]=d*S+g*R+v*B,l[7]=d*y+g*w+v*I,l[2]=_*E+x*L+M*U,l[5]=_*S+x*R+M*B,l[8]=_*y+x*w+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8];return t*u*g-t*f*d-a*l*g+a*f*h+s*l*d-s*u*h}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8],v=g*u-f*d,_=f*h-g*l,x=d*l-u*h,M=t*v+a*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=v*E,e[1]=(s*d-g*a)*E,e[2]=(f*a-s*u)*E,e[3]=_*E,e[4]=(g*t-s*h)*E,e[5]=(s*l-f*t)*E,e[6]=x*E,e[7]=(a*h-d*t)*E,e[8]=(u*t-a*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,s,l,u,f){const h=Math.cos(l),d=Math.sin(l);return this.set(a*h,a*d,-a*(h*u+d*f)+u+e,-s*d,s*h,-s*(-d*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Hd.makeScale(e,t)),this}rotate(e){return this.premultiply(Hd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<9;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hd=new At,fx=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hx=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FT(){const o={enabled:!0,workingColorSpace:ci,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Yt&&(s.r=Za(s.r),s.g=Za(s.g),s.b=Za(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(s.r=Mo(s.r),s.g=Mo(s.g),s.b=Mo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Us?mf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return ic("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return ic("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[ci]:{primaries:e,whitePoint:a,transfer:mf,toXYZ:fx,fromXYZ:hx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:a,transfer:Yt,toXYZ:fx,fromXYZ:hx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),o}const Bt=FT();function Za(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let eo;class HT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{eo===void 0&&(eo=nc("canvas")),eo.width=e.width,eo.height=e.height;const s=eo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=eo}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nc("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=Za(l[u]/255)*255;return a.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Za(t[a]/255)*255):t[a]=Za(t[a]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GT=0;class Ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(Gd(s[u].image)):l.push(Gd(s[u]))}else l=Gd(s);a.url=l}return t||(e.images[this.uuid]=a),a}}function Gd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?HT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let VT=0;const Vd=new H;class On extends Po{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,a=pa,s=pa,l=Pn,u=qa,f=Wi,h=Ci,d=On.DEFAULT_ANISOTROPY,g=Us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=qi(),this.name="",this.source=new Ym(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vd).x}get height(){return this.source.getSize(Vd).y}get depth(){return this.source.getSize(Vd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Cy;On.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,a=0,s=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,s){return this.x=e,this.y=t,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,s,l;const h=e.elements,d=h[0],g=h[4],v=h[8],_=h[1],x=h[5],M=h[9],E=h[2],S=h[6],y=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,w=(x+1)/2,U=(y+1)/2,B=(g+_)/4,I=(v+E)/4,j=(M+S)/4;return R>w&&R>U?R<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(R),s=B/a,l=I/a):w>U?w<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(w),a=B/s,l=j/s):U<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(U),a=I/l,s=j/l),this.set(a,s,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(v-E)*(v-E)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(v-E)/L,this.z=(_-g)/L,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Nt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kT extends Po{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const s={width:e,height:t,depth:a.depth},l=new On(s);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ym(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends kT{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class Fy extends On{constructor(e=null,t=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XT extends On{constructor(e=null,t=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aa{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Qi):Qi.fromBufferAttribute(l,u),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Tu.copy(a.boundingBox)),Tu.applyMatrix4(e.matrixWorld),this.union(Tu)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dl),Eu.subVectors(this.max,Dl),to.subVectors(e.a,Dl),no.subVectors(e.b,Dl),io.subVectors(e.c,Dl),As.subVectors(no,to),ws.subVectors(io,no),tr.subVectors(to,io);let t=[0,-As.z,As.y,0,-ws.z,ws.y,0,-tr.z,tr.y,As.z,0,-As.x,ws.z,0,-ws.x,tr.z,0,-tr.x,-As.y,As.x,0,-ws.y,ws.x,0,-tr.y,tr.x,0];return!kd(t,to,no,io,Eu)||(t=[1,0,0,0,1,0,0,0,1],!kd(t,to,no,io,Eu))?!1:(Au.crossVectors(As,ws),t=[Au.x,Au.y,Au.z],kd(t,to,no,io,Eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fa=[new H,new H,new H,new H,new H,new H,new H,new H],Qi=new H,Tu=new aa,to=new H,no=new H,io=new H,As=new H,ws=new H,tr=new H,Dl=new H,Eu=new H,Au=new H,nr=new H;function kd(o,e,t,a,s){for(let l=0,u=o.length-3;l<=u;l+=3){nr.fromArray(o,l);const f=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),h=e.dot(nr),d=t.dot(nr),g=a.dot(nr);if(Math.max(-Math.max(h,d,g),Math.min(h,d,g))>f)return!1}return!0}const WT=new aa,Nl=new H,Xd=new H;class xa{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):WT.setFromPoints(e).getCenter(a);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nl.subVectors(e,this.center);const t=Nl.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),s=(a-this.radius)*.5;this.center.addScaledVector(Nl,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nl.copy(e.center).add(Xd)),this.expandByPoint(Nl.copy(e.center).sub(Xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ha=new H,Wd=new H,wu=new H,Rs=new H,qd=new H,Ru=new H,jd=new H;class Mf{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ha)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ha.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ha.copy(this.origin).addScaledVector(this.direction,t),Ha.distanceToSquared(e))}distanceSqToSegment(e,t,a,s){Wd.copy(e).add(t).multiplyScalar(.5),wu.copy(t).sub(e).normalize(),Rs.copy(this.origin).sub(Wd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(wu),f=Rs.dot(this.direction),h=-Rs.dot(wu),d=Rs.lengthSq(),g=Math.abs(1-u*u);let v,_,x,M;if(g>0)if(v=u*h-f,_=u*f-h,M=l*g,v>=0)if(_>=-M)if(_<=M){const E=1/g;v*=E,_*=E,x=v*(v+u*_+2*f)+_*(u*v+_+2*h)+d}else _=l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+d;else _=-l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+d;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+d):_<=M?(v=0,_=Math.min(Math.max(-l,-h),l),x=_*(_+2*h)+d):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+d);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Wd).addScaledVector(wu,_),x}intersectSphere(e,t){Ha.subVectors(e.center,this.origin);const a=Ha.dot(this.direction),s=Ha.dot(Ha)-a*a,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=a-u,h=a+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,s,l,u,f,h;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(a=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(a=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),v>=0?(f=(e.min.z-_.z)*v,h=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,h=(e.min.z-_.z)*v),a>h||f>s)||((f>a||a!==a)&&(a=f),(h<s||s!==s)&&(s=h),s<0)?null:this.at(a>=0?a:s,t)}intersectsBox(e){return this.intersectBox(e,Ha)!==null}intersectTriangle(e,t,a,s,l){qd.subVectors(t,e),Ru.subVectors(a,e),jd.crossVectors(qd,Ru);let u=this.direction.dot(jd),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Rs.subVectors(this.origin,e);const h=f*this.direction.dot(Ru.crossVectors(Rs,Ru));if(h<0)return null;const d=f*this.direction.dot(qd.cross(Rs));if(d<0||h+d>u)return null;const g=-f*Rs.dot(jd);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,a,s,l,u,f,h,d,g,v,_,x,M,E,S){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,f,h,d,g,v,_,x,M,E,S)}set(e,t,a,s,l,u,f,h,d,g,v,_,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=a,y[12]=s,y[1]=l,y[5]=u,y[9]=f,y[13]=h,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,a=e.elements,s=1/ao.setFromMatrixColumn(e,0).length(),l=1/ao.setFromMatrixColumn(e,1).length(),u=1/ao.setFromMatrixColumn(e,2).length();return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,s=e.y,l=e.z,u=Math.cos(a),f=Math.sin(a),h=Math.cos(s),d=Math.sin(s),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*g,x=u*v,M=f*g,E=f*v;t[0]=h*g,t[4]=-h*v,t[8]=d,t[1]=x+M*d,t[5]=_-E*d,t[9]=-f*h,t[2]=E-_*d,t[6]=M+x*d,t[10]=u*h}else if(e.order==="YXZ"){const _=h*g,x=h*v,M=d*g,E=d*v;t[0]=_+E*f,t[4]=M*f-x,t[8]=u*d,t[1]=u*v,t[5]=u*g,t[9]=-f,t[2]=x*f-M,t[6]=E+_*f,t[10]=u*h}else if(e.order==="ZXY"){const _=h*g,x=h*v,M=d*g,E=d*v;t[0]=_-E*f,t[4]=-u*v,t[8]=M+x*f,t[1]=x+M*f,t[5]=u*g,t[9]=E-_*f,t[2]=-u*d,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const _=u*g,x=u*v,M=f*g,E=f*v;t[0]=h*g,t[4]=M*d-x,t[8]=_*d+E,t[1]=h*v,t[5]=E*d+_,t[9]=x*d-M,t[2]=-d,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,x=u*d,M=f*h,E=f*d;t[0]=h*g,t[4]=E-_*v,t[8]=M*v+x,t[1]=v,t[5]=u*g,t[9]=-f*g,t[2]=-d*g,t[6]=x*v+M,t[10]=_-E*v}else if(e.order==="XZY"){const _=u*h,x=u*d,M=f*h,E=f*d;t[0]=h*g,t[4]=-v,t[8]=d*g,t[1]=_*v+E,t[5]=u*g,t[9]=x*v-M,t[2]=M*v-x,t[6]=f*g,t[10]=E*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qT,e,jT)}lookAt(e,t,a){const s=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Cs.crossVectors(a,wi),Cs.lengthSq()===0&&(Math.abs(a.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Cs.crossVectors(a,wi)),Cs.normalize(),Cu.crossVectors(wi,Cs),s[0]=Cs.x,s[4]=Cu.x,s[8]=wi.x,s[1]=Cs.y,s[5]=Cu.y,s[9]=wi.y,s[2]=Cs.z,s[6]=Cu.z,s[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],f=a[4],h=a[8],d=a[12],g=a[1],v=a[5],_=a[9],x=a[13],M=a[2],E=a[6],S=a[10],y=a[14],L=a[3],R=a[7],w=a[11],U=a[15],B=s[0],I=s[4],j=s[8],A=s[12],N=s[1],k=s[5],J=s[9],ee=s[13],le=s[2],Y=s[6],O=s[10],G=s[14],ne=s[3],Te=s[7],Me=s[11],z=s[15];return l[0]=u*B+f*N+h*le+d*ne,l[4]=u*I+f*k+h*Y+d*Te,l[8]=u*j+f*J+h*O+d*Me,l[12]=u*A+f*ee+h*G+d*z,l[1]=g*B+v*N+_*le+x*ne,l[5]=g*I+v*k+_*Y+x*Te,l[9]=g*j+v*J+_*O+x*Me,l[13]=g*A+v*ee+_*G+x*z,l[2]=M*B+E*N+S*le+y*ne,l[6]=M*I+E*k+S*Y+y*Te,l[10]=M*j+E*J+S*O+y*Me,l[14]=M*A+E*ee+S*G+y*z,l[3]=L*B+R*N+w*le+U*ne,l[7]=L*I+R*k+w*Y+U*Te,l[11]=L*j+R*J+w*O+U*Me,l[15]=L*A+R*ee+w*G+U*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[12],u=e[1],f=e[5],h=e[9],d=e[13],g=e[2],v=e[6],_=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15],L=h*x-d*_,R=f*x-d*v,w=f*_-h*v,U=u*x-d*g,B=u*_-h*g,I=u*v-f*g;return t*(E*L-S*R+y*w)-a*(M*L-S*U+y*B)+s*(M*R-E*U+y*I)-l*(M*w-E*B+S*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8],v=e[9],_=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],L=v*S*d-E*_*d+E*h*x-f*S*x-v*h*y+f*_*y,R=M*_*d-g*S*d-M*h*x+u*S*x+g*h*y-u*_*y,w=g*E*d-M*v*d+M*f*x-u*E*x-g*f*y+u*v*y,U=M*v*h-g*E*h-M*f*_+u*E*_+g*f*S-u*v*S,B=t*L+a*R+s*w+l*U;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=L*I,e[1]=(E*_*l-v*S*l-E*s*x+a*S*x+v*s*y-a*_*y)*I,e[2]=(f*S*l-E*h*l+E*s*d-a*S*d-f*s*y+a*h*y)*I,e[3]=(v*h*l-f*_*l-v*s*d+a*_*d+f*s*x-a*h*x)*I,e[4]=R*I,e[5]=(g*S*l-M*_*l+M*s*x-t*S*x-g*s*y+t*_*y)*I,e[6]=(M*h*l-u*S*l-M*s*d+t*S*d+u*s*y-t*h*y)*I,e[7]=(u*_*l-g*h*l+g*s*d-t*_*d-u*s*x+t*h*x)*I,e[8]=w*I,e[9]=(M*v*l-g*E*l-M*a*x+t*E*x+g*a*y-t*v*y)*I,e[10]=(u*E*l-M*f*l+M*a*d-t*E*d-u*a*y+t*f*y)*I,e[11]=(g*f*l-u*v*l-g*a*d+t*v*d+u*a*x-t*f*x)*I,e[12]=U*I,e[13]=(g*E*s-M*v*s+M*a*_-t*E*_-g*a*S+t*v*S)*I,e[14]=(M*f*s-u*E*s-M*a*h+t*E*h+u*a*S-t*f*S)*I,e[15]=(u*v*s-g*f*s+g*a*h-t*v*h-u*a*_+t*f*_)*I,this}scale(e){const t=this.elements,a=e.x,s=e.y,l=e.z;return t[0]*=a,t[4]*=s,t[8]*=l,t[1]*=a,t[5]*=s,t[9]*=l,t[2]*=a,t[6]*=s,t[10]*=l,t[3]*=a,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,s))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),l=1-a,u=e.x,f=e.y,h=e.z,d=l*u,g=l*f;return this.set(d*u+a,d*f-s*h,d*h+s*f,0,d*f+s*h,g*f+a,g*h-s*u,0,d*h-s*f,g*h+s*u,l*h*h+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,s,l,u){return this.set(1,a,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,a){const s=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,d=l+l,g=u+u,v=f+f,_=l*d,x=l*g,M=l*v,E=u*g,S=u*v,y=f*v,L=h*d,R=h*g,w=h*v,U=a.x,B=a.y,I=a.z;return s[0]=(1-(E+y))*U,s[1]=(x+w)*U,s[2]=(M-R)*U,s[3]=0,s[4]=(x-w)*B,s[5]=(1-(_+y))*B,s[6]=(S+L)*B,s[7]=0,s[8]=(M+R)*I,s[9]=(S-L)*I,s[10]=(1-(_+E))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,a){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return a.set(1,1,1),t.identity(),this;let l=ao.set(s[0],s[1],s[2]).length();const u=ao.set(s[4],s[5],s[6]).length(),f=ao.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),$i.copy(this);const d=1/l,g=1/u,v=1/f;return $i.elements[0]*=d,$i.elements[1]*=d,$i.elements[2]*=d,$i.elements[4]*=g,$i.elements[5]*=g,$i.elements[6]*=g,$i.elements[8]*=v,$i.elements[9]*=v,$i.elements[10]*=v,t.setFromRotationMatrix($i),a.x=l,a.y=u,a.z=f,this}makePerspective(e,t,a,s,l,u,f=ma,h=!1){const d=this.elements,g=2*l/(t-e),v=2*l/(a-s),_=(t+e)/(t-e),x=(a+s)/(a-s);let M,E;if(h)M=l/(u-l),E=u*l/(u-l);else if(f===ma)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===gf)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,a,s,l,u,f=ma,h=!1){const d=this.elements,g=2/(t-e),v=2/(a-s),_=-(t+e)/(t-e),x=-(a+s)/(a-s);let M,E;if(h)M=1/(u-l),E=u/(u-l);else if(f===ma)M=-2/(u-l),E=-(u+l)/(u-l);else if(f===gf)M=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<16;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const ao=new H,$i=new bt,qT=new H(0,0,0),jT=new H(1,1,1),Cs=new H,Cu=new H,wi=new H,dx=new bt,px=new Is;class Ni{constructor(e=0,t=0,a=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,s=this._order){return this._x=e,this._y=t,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const s=e.elements,l=s[0],u=s[4],f=s[8],h=s[1],d=s[5],g=s[9],v=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return dx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dx,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return px.setFromEuler(this),this.setFromQuaternion(px,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Hy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YT=0;const mx=new H,so=new Is,Ga=new bt,Du=new H,Ll=new H,ZT=new H,KT=new Is,gx=new H(1,0,0),vx=new H(0,1,0),_x=new H(0,0,1),xx={type:"added"},JT={type:"removed"},ro={type:"childadded",child:null},Yd={type:"childremoved",child:null};class dn extends Po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new H,t=new Ni,a=new Is,s=new H(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new At}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(gx,e)}rotateY(e){return this.rotateOnAxis(vx,e)}rotateZ(e){return this.rotateOnAxis(_x,e)}translateOnAxis(e,t){return mx.copy(e).applyQuaternion(this.quaternion),this.position.add(mx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gx,e)}translateY(e){return this.translateOnAxis(vx,e)}translateZ(e){return this.translateOnAxis(_x,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ga.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Du.copy(e):Du.set(e,t,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ga.lookAt(Ll,Du,this.up):Ga.lookAt(Du,Ll,this.up),this.quaternion.setFromRotationMatrix(Ga),s&&(Ga.extractRotation(s.matrixWorld),so.setFromRotationMatrix(Ga),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xx),ro.child=e,this.dispatchEvent(ro),ro.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(JT),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xx),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,ZT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,KT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,g=h.length;d<g;d++){const v=h[d];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(e.materials,this.material[h]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];s.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),d=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),x=u(e.animations),M=u(e.nodes);f.length>0&&(a.geometries=f),h.length>0&&(a.materials=h),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=s,a;function u(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}}dn.DEFAULT_UP=new H(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ea=new H,Va=new H,Zd=new H,ka=new H,oo=new H,lo=new H,yx=new H,Kd=new H,Jd=new H,Qd=new H,$d=new hn,ep=new hn,tp=new hn;class ki{constructor(e=new H,t=new H,a=new H){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,s){s.subVectors(a,t),ea.subVectors(e,t),s.cross(ea);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,a,s,l){ea.subVectors(s,t),Va.subVectors(a,t),Zd.subVectors(e,t);const u=ea.dot(ea),f=ea.dot(Va),h=ea.dot(Zd),d=Va.dot(Va),g=Va.dot(Zd),v=u*d-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(d*h-f*g)*_,M=(u*g-f*h)*_;return l.set(1-x-M,M,x)}static containsPoint(e,t,a,s){return this.getBarycoord(e,t,a,s,ka)===null?!1:ka.x>=0&&ka.y>=0&&ka.x+ka.y<=1}static getInterpolation(e,t,a,s,l,u,f,h){return this.getBarycoord(e,t,a,s,ka)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ka.x),h.addScaledVector(u,ka.y),h.addScaledVector(f,ka.z),h)}static getInterpolatedAttribute(e,t,a,s,l,u){return $d.setScalar(0),ep.setScalar(0),tp.setScalar(0),$d.fromBufferAttribute(e,t),ep.fromBufferAttribute(e,a),tp.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector($d,l.x),u.addScaledVector(ep,l.y),u.addScaledVector(tp,l.z),u}static isFrontFacing(e,t,a,s){return ea.subVectors(a,t),Va.subVectors(e,t),ea.cross(Va).dot(s)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,s){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,a,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ea.subVectors(this.c,this.b),Va.subVectors(this.a,this.b),ea.cross(Va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ki.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,s,l){return ki.getInterpolation(e,this.a,this.b,this.c,t,a,s,l)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,s=this.b,l=this.c;let u,f;oo.subVectors(s,a),lo.subVectors(l,a),Kd.subVectors(e,a);const h=oo.dot(Kd),d=lo.dot(Kd);if(h<=0&&d<=0)return t.copy(a);Jd.subVectors(e,s);const g=oo.dot(Jd),v=lo.dot(Jd);if(g>=0&&v<=g)return t.copy(s);const _=h*v-g*d;if(_<=0&&h>=0&&g<=0)return u=h/(h-g),t.copy(a).addScaledVector(oo,u);Qd.subVectors(e,l);const x=oo.dot(Qd),M=lo.dot(Qd);if(M>=0&&x<=M)return t.copy(l);const E=x*d-h*M;if(E<=0&&d>=0&&M<=0)return f=d/(d-M),t.copy(a).addScaledVector(lo,f);const S=g*M-x*v;if(S<=0&&v-g>=0&&x-M>=0)return yx.subVectors(l,s),f=(v-g)/(v-g+(x-M)),t.copy(s).addScaledVector(yx,f);const y=1/(S+E+_);return u=E*y,f=_*y,t.copy(a).addScaledVector(oo,u).addScaledVector(lo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Nu={h:0,s:0,l:0};function np(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ct{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,a,s=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=a,Bt.colorSpaceToWorking(this,s),this}setHSL(e,t,a,s=Bt.workingColorSpace){if(e=jm(e,1),t=Nt(t,0,1),a=Nt(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=np(u,l,e+1/3),this.g=np(u,l,e),this.b=np(u,l,e-1/3)}return Bt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ln){function a(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const a=Gy[e.toLowerCase()];return a!==void 0?this.setHex(a,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return Bt.workingToColorSpace(ni.copy(this),e),Math.round(Nt(ni.r*255,0,255))*65536+Math.round(Nt(ni.g*255,0,255))*256+Math.round(Nt(ni.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(ni.copy(this),t);const a=ni.r,s=ni.g,l=ni.b,u=Math.max(a,s,l),f=Math.min(a,s,l);let h,d;const g=(f+u)/2;if(f===u)h=0,d=0;else{const v=u-f;switch(d=g<=.5?v/(u+f):v/(2-u-f),u){case a:h=(s-l)/v+(s<l?6:0);break;case s:h=(l-a)/v+2;break;case l:h=(a-s)/v+4;break}h/=6}return e.h=h,e.s=d,e.l=g,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Ln){Bt.workingToColorSpace(ni.copy(this),e);const t=ni.r,a=ni.g,s=ni.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,t,a){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(Nu);const a=Yl(Ds.h,Nu.h,t),s=Yl(Ds.s,Nu.s,t),l=Yl(Ds.l,Nu.l,t);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*s,this.g=l[1]*t+l[4]*a+l[7]*s,this.b=l[2]*t+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new ct;ct.NAMES=Gy;let QT=0;class ji extends Po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Ya,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ep,this.blendDst=Ap,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ya&&(a.blending=this.blending),this.side!==Ka&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ep&&(a.blendSrc=this.blendSrc),this.blendDst!==Ap&&(a.blendDst=this.blendDst),this.blendEquation!==ur&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(a.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const s=t.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class li extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Ry,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rn=new H,Lu=new Ie;let $T=0;class Vn{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$T++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=mm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Lu.fromBufferAttribute(this,t),Lu.applyMatrix3(e),this.setXY(t,Lu.x,Lu.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix3(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=ia(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Qt(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),a=Qt(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),a=Qt(a,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),a=Qt(a,this.array),s=Qt(s,this.array),l=Qt(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mm&&(e.usage=this.usage),e}}class Vy extends Vn{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class ky extends Vn{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class kt extends Vn{constructor(e,t,a){super(new Float32Array(e),t,a)}}let e1=0;const Gi=new bt,ip=new dn,co=new H,Ri=new aa,Ul=new aa,Hn=new H;class gn extends Po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(By(e)?ky:Vy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new At().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,t,a){return Gi.makeTranslation(e,t,a),this.applyMatrix4(Gi),this}scale(e,t,a){return Gi.makeScale(e,t,a),this.applyMatrix4(Gi),this}lookAt(e){return ip.lookAt(e),ip.updateMatrix(),this.applyMatrix4(ip.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new kt(a,3))}else{const a=Math.min(e.length,t.count);for(let s=0;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];Ri.setFromBufferAttribute(l),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const a=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Ul.setFromBufferAttribute(f),this.morphTargetsRelative?(Hn.addVectors(Ri.min,Ul.min),Ri.expandByPoint(Hn),Hn.addVectors(Ri.max,Ul.max),Ri.expandByPoint(Hn)):(Ri.expandByPoint(Ul.min),Ri.expandByPoint(Ul.max))}Ri.getCenter(a);let s=0;for(let l=0,u=e.count;l<u;l++)Hn.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(Hn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)Hn.fromBufferAttribute(f,d),h&&(co.fromBufferAttribute(e,d),Hn.add(co)),s=Math.max(s,a.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let j=0;j<a.count;j++)f[j]=new H,h[j]=new H;const d=new H,g=new H,v=new H,_=new Ie,x=new Ie,M=new Ie,E=new H,S=new H;function y(j,A,N){d.fromBufferAttribute(a,j),g.fromBufferAttribute(a,A),v.fromBufferAttribute(a,N),_.fromBufferAttribute(l,j),x.fromBufferAttribute(l,A),M.fromBufferAttribute(l,N),g.sub(d),v.sub(d),x.sub(_),M.sub(_);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(k),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(k),f[j].add(E),f[A].add(E),f[N].add(E),h[j].add(S),h[A].add(S),h[N].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let j=0,A=L.length;j<A;++j){const N=L[j],k=N.start,J=N.count;for(let ee=k,le=k+J;ee<le;ee+=3)y(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const R=new H,w=new H,U=new H,B=new H;function I(j){U.fromBufferAttribute(s,j),B.copy(U);const A=f[j];R.copy(A),R.sub(U.multiplyScalar(U.dot(A))).normalize(),w.crossVectors(B,A);const k=w.dot(h[j])<0?-1:1;u.setXYZW(j,R.x,R.y,R.z,k)}for(let j=0,A=L.length;j<A;++j){const N=L[j],k=N.start,J=N.count;for(let ee=k,le=k+J;ee<le;ee+=3)I(e.getX(ee+0)),I(e.getX(ee+1)),I(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const s=new H,l=new H,u=new H,f=new H,h=new H,d=new H,g=new H,v=new H;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),g.subVectors(u,l),v.subVectors(s,l),g.cross(v),f.fromBufferAttribute(a,M),h.fromBufferAttribute(a,E),d.fromBufferAttribute(a,S),f.add(g),h.add(g),d.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),v.subVectors(s,l),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)Hn.fromBufferAttribute(e,t),Hn.normalize(),e.setXYZ(t,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(f,h){const d=f.array,g=f.itemSize,v=f.normalized,_=new d.constructor(h.length*g);let x=0,M=0;for(let E=0,S=h.length;E<S;E++){f.isInterleavedBufferAttribute?x=h[E]*f.data.stride+f.offset:x=h[E]*g;for(let y=0;y<g;y++)_[M++]=d[x++]}return new Vn(_,g,v)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,a=this.index.array,s=this.attributes;for(const f in s){const h=s[f],d=e(h,a);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=e(_,a);h.push(x)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const d=u[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const h in a){const d=a[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(e.data))}g.length>0&&(s[h]=g,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const d in s){const g=s[d];this.setAttribute(d,g.clone(t))}const l=e.morphAttributes;for(const d in l){const g=[],v=l[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sx=new bt,ir=new Mf,Uu=new xa,Mx=new H,Pu=new H,Ou=new H,Iu=new H,ap=new H,zu=new H,bx=new H,Bu=new H;class Pt extends dn{constructor(e=new gn,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){zu.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const g=f[h],v=l[h];g!==0&&(ap.fromBufferAttribute(v,e),u?zu.addScaledVector(ap,g):zu.addScaledVector(ap.sub(t),g))}t.add(zu)}return t}raycast(e,t){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Uu.copy(a.boundingSphere),Uu.applyMatrix4(l),ir.copy(e.ray).recast(e.near),!(Uu.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Uu,Mx)===null||ir.origin.distanceToSquared(Mx)>(e.far-e.near)**2))&&(Sx.copy(l).invert(),ir.copy(e.ray).applyMatrix4(Sx),!(a.boundingBox!==null&&ir.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,a){let s;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),R=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,U=R;w<U;w+=3){const B=f.getX(w),I=f.getX(w+1),j=f.getX(w+2);s=Fu(this,y,e,a,d,g,v,B,I,j),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=f.getX(S),R=f.getX(S+1),w=f.getX(S+2);s=Fu(this,u,e,a,d,g,v,L,R,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),R=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=L,U=R;w<U;w+=3){const B=w,I=w+1,j=w+2;s=Fu(this,y,e,a,d,g,v,B,I,j),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=S,R=S+1,w=S+2;s=Fu(this,u,e,a,d,g,v,L,R,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function t1(o,e,t,a,s,l,u,f){let h;if(e.side===Qn?h=a.intersectTriangle(u,l,s,!0,f):h=a.intersectTriangle(s,l,u,e.side===Ka,f),h===null)return null;Bu.copy(f),Bu.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Bu);return d<t.near||d>t.far?null:{distance:d,point:Bu.clone(),object:o}}function Fu(o,e,t,a,s,l,u,f,h,d){o.getVertexPosition(f,Pu),o.getVertexPosition(h,Ou),o.getVertexPosition(d,Iu);const g=t1(o,e,t,a,Pu,Ou,Iu,bx);if(g){const v=new H;ki.getBarycoord(bx,Pu,Ou,Iu,v),s&&(g.uv=ki.getInterpolatedAttribute(s,f,h,d,v,new Ie)),l&&(g.uv1=ki.getInterpolatedAttribute(l,f,h,d,v,new Ie)),u&&(g.normal=ki.getInterpolatedAttribute(u,f,h,d,v,new H),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:h,c:d,normal:new H,materialIndex:0};ki.getNormal(Pu,Ou,Iu,_.normal),g.face=_,g.barycoord=v}return g}class xr extends gn{constructor(e=1,t=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const h=[],d=[],g=[],v=[];let _=0,x=0;M("z","y","x",-1,-1,a,t,e,u,l,0),M("z","y","x",1,-1,a,t,-e,u,l,1),M("x","z","y",1,1,e,a,t,s,u,2),M("x","z","y",1,-1,e,a,-t,s,u,3),M("x","y","z",1,-1,e,t,a,s,l,4),M("x","y","z",-1,-1,e,t,-a,s,l,5),this.setIndex(h),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(v,2));function M(E,S,y,L,R,w,U,B,I,j,A){const N=w/I,k=U/j,J=w/2,ee=U/2,le=B/2,Y=I+1,O=j+1;let G=0,ne=0;const Te=new H;for(let Me=0;Me<O;Me++){const z=Me*k-ee;for(let ie=0;ie<Y;ie++){const _e=ie*N-J;Te[E]=_e*L,Te[S]=z*R,Te[y]=le,d.push(Te.x,Te.y,Te.z),Te[E]=0,Te[S]=0,Te[y]=B>0?1:-1,g.push(Te.x,Te.y,Te.z),v.push(ie/I),v.push(1-Me/j),G+=1}}for(let Me=0;Me<j;Me++)for(let z=0;z<I;z++){const ie=_+z+Y*Me,_e=_+z+Y*(Me+1),we=_+(z+1)+Y*(Me+1),Be=_+(z+1)+Y*Me;h.push(ie,_e,Be),h.push(_e,we,Be),ne+=6}f.addGroup(x,ne,A),x+=ne,_+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(o){const e={};for(const t in o){e[t]={};for(const a in o[t]){const s=o[t][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=s.clone():Array.isArray(s)?e[t][a]=s.slice():e[t][a]=s}}return e}function oi(o){const e={};for(let t=0;t<o.length;t++){const a=Ro(o[t]);for(const s in a)e[s]=a[s]}return e}function n1(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Xy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const Co={clone:Ro,merge:oi};var i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=n1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class Wy extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new H,Tx=new Ie,Ex=new Ie;class ii extends Wy{constructor(e=50,t=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,Tx,Ex),t.subVectors(Ex,Tx)}setViewOffset(e,t,a,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jl*.5*this.fov)/this.zoom,a=2*t,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;l+=u.offsetX*s/h,t-=u.offsetY*a/d,s*=u.width/h,a*=u.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const uo=-90,fo=1;class s1 extends dn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ii(uo,fo,e,t);s.layers=this.layers,this.add(s);const l=new ii(uo,fo,e,t);l.layers=this.layers,this.add(l);const u=new ii(uo,fo,e,t);u.layers=this.layers,this.add(u);const f=new ii(uo,fo,e,t);f.layers=this.layers,this.add(f);const h=new ii(uo,fo,e,t);h.layers=this.layers,this.add(h);const d=new ii(uo,fo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,s,l,u,f,h]=t;for(const d of t)this.remove(d);if(e===ma)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===gf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,d,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,s),e.render(t,l),e.setRenderTarget(a,1,s),e.render(t,u),e.setRenderTarget(a,2,s),e.render(t,f),e.setRenderTarget(a,3,s),e.render(t,h),e.setRenderTarget(a,4,s),e.render(t,d),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,s),e.render(t,g),e.setRenderTarget(v,_,x),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class qy extends On{constructor(e=[],t=pr,a,s,l,u,f,h,d,g){super(e,t,a,s,l,u,f,h,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jy extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new qy(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xr(5,5,5),l=new Gn({name:"CubemapFromEquirect",uniforms:Ro(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Qn,blending:ga});l.uniforms.tEquirect.value=t;const u=new Pt(s,l),f=t.minFilter;return t.minFilter===qa&&(t.minFilter=Pn),new s1(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,s);e.setRenderTarget(l)}}class _i extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let s=null,l=null,u=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,a),y=this._getHandJoint(d,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,M=.005;d.inputState.pinching&&_>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return f!==null&&(f.visible=s!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new _i;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class bf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(e),this.density=t}clone(){return new bf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yy extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mm,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[a+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ri=new H;class ac{constructor(e,t,a,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=ia(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Qt(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ia(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ia(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ia(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ia(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),a=Qt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),a=Qt(a,this.array),s=Qt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),a=Qt(a,this.array),s=Qt(s,this.array),l=Qt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){vf("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new Vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vf("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ky extends ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ho;const Pl=new H,po=new H,mo=new H,go=new Ie,Ol=new Ie,Jy=new bt,Hu=new H,Il=new H,Gu=new H,Ax=new Ie,rp=new Ie,wx=new Ie;class o1 extends dn{constructor(e=new Ky){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new gn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new Zy(t,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new ac(a,3,0,!1)),ho.setAttribute("uv",new ac(a,2,3,!1))}this.geometry=ho,this.material=e,this.center=new Ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),Jy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);const a=this.material.rotation;let s,l;a!==0&&(l=Math.cos(a),s=Math.sin(a));const u=this.center;Vu(Hu.set(-.5,-.5,0),mo,u,po,s,l),Vu(Il.set(.5,-.5,0),mo,u,po,s,l),Vu(Gu.set(.5,.5,0),mo,u,po,s,l),Ax.set(0,0),rp.set(1,0),wx.set(1,1);let f=e.ray.intersectTriangle(Hu,Il,Gu,!1,Pl);if(f===null&&(Vu(Il.set(-.5,.5,0),mo,u,po,s,l),rp.set(0,1),f=e.ray.intersectTriangle(Hu,Gu,Il,!1,Pl),f===null))return;const h=e.ray.origin.distanceTo(Pl);h<e.near||h>e.far||t.push({distance:h,point:Pl.clone(),uv:ki.getInterpolation(Pl,Hu,Il,Gu,Ax,rp,wx,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vu(o,e,t,a,s,l){go.subVectors(o,t).addScalar(.5).multiply(a),s!==void 0?(Ol.x=l*go.x-s*go.y,Ol.y=s*go.x+l*go.y):Ol.copy(go),o.copy(e),o.x+=Ol.x,o.y+=Ol.y,o.applyMatrix4(Jy)}const Rx=new H,Cx=new hn,Dx=new hn,l1=new H,Nx=new bt,ku=new H,op=new xa,Lx=new bt,lp=new Mf;class c1 extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nx,this.bindMatrix=new bt,this.bindMatrixInverse=new bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new aa),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,ku),this.boundingBox.expandByPoint(ku)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xa),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,ku),this.boundingSphere.expandByPoint(ku)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const a=this.material,s=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),op.copy(this.boundingSphere),op.applyMatrix4(s),e.ray.intersectsSphere(op)!==!1&&(Lx.copy(s).invert(),lp.copy(e.ray).applyMatrix4(Lx),!(this.boundingBox!==null&&lp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new hn,t=this.geometry.attributes.skinWeight;for(let a=0,s=t.count;a<s;a++){e.fromBufferAttribute(t,a);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nx?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cT?this.bindMatrixInverse.copy(this.bindMatrix).invert():ft("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const a=this.skeleton,s=this.geometry;Cx.fromBufferAttribute(s.attributes.skinIndex,e),Dx.fromBufferAttribute(s.attributes.skinWeight,e),Rx.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const u=Dx.getComponent(l);if(u!==0){const f=Cx.getComponent(l);Nx.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),t.addScaledVector(l1.copy(Rx).applyMatrix4(Nx),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Qy extends dn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zm extends On{constructor(e=null,t=1,a=1,s,l,u,f,h,d=Un,g=Un,v,_){super(null,u,f,h,d,g,s,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ux=new bt,u1=new bt;class Km{constructor(e=[],t=[]){this.uuid=qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ft("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,s=this.bones.length;a<s;a++)this.boneInverses.push(new bt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const a=new bt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,t=this.boneInverses,a=this.boneMatrices,s=this.boneTexture;for(let l=0,u=e.length;l<u;l++){const f=e[l]?e[l].matrixWorld:u1;Ux.multiplyMatrices(f,t[l]),Ux.toArray(a,l*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Km(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const a=new Zm(t,e,e,Wi,Xi);return a.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=a,this}getBoneByName(e){for(let t=0,a=this.bones.length;t<a;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let a=0,s=e.bones.length;a<s;a++){const l=e.bones[a];let u=t[l];u===void 0&&(ft("Skeleton: No bone found with UUID:",l),u=new Qy),this.bones.push(u),this.boneInverses.push(new bt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,a=this.boneInverses;for(let s=0,l=t.length;s<l;s++){const u=t[s];e.bones.push(u.uuid);const f=a[s];e.boneInverses.push(f.toArray())}return e}}class gm extends Vn{constructor(e,t,a,s=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vo=new bt,Px=new bt,Xu=[],Ox=new aa,f1=new bt,zl=new Pt,Bl=new xa;class h1 extends Pt{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gm(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<a;s++)this.setMatrixAt(s,f1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new aa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,vo),Ox.copy(e.boundingBox).applyMatrix4(vo),this.boundingBox.union(Ox)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,vo),Bl.copy(e.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(Bl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const a=t.morphTargetInfluences,s=this.morphTexture.source.data.data,l=a.length+1,u=e*l+1;for(let f=0;f<a.length;f++)a[f]=s[u+f]}raycast(e,t){const a=this.matrixWorld,s=this.count;if(zl.geometry=this.geometry,zl.material=this.material,zl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bl.copy(this.boundingSphere),Bl.applyMatrix4(a),e.ray.intersectsSphere(Bl)!==!1))for(let l=0;l<s;l++){this.getMatrixAt(l,vo),Px.multiplyMatrices(a,vo),zl.matrixWorld=Px,zl.raycast(e,Xu);for(let u=0,f=Xu.length;u<f;u++){const h=Xu[u];h.instanceId=l,h.object=this,t.push(h)}Xu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const a=t.morphTargetInfluences,s=a.length+1;this.morphTexture===null&&(this.morphTexture=new Zm(new Float32Array(s*this.count),s,this.count,Hm,Xi));const l=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const f=this.geometry.morphTargetsRelative?1:1-u,h=s*e;l[h]=f,l.set(a,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cp=new H,d1=new H,p1=new At;class cr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,s){return this.normal.set(e,t,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const s=cp.subVectors(a,t).cross(d1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(cp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||p1.getNormalMatrix(e),s=this.coplanarPoint(cp).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new xa,m1=new Ie(.5,.5),Wu=new H;class Jm{constructor(e=new cr,t=new cr,a=new cr,s=new cr,l=new cr,u=new cr){this.planes=[e,t,a,s,l,u]}set(e,t,a,s,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=ma,a=!1){const s=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],d=l[3],g=l[4],v=l[5],_=l[6],x=l[7],M=l[8],E=l[9],S=l[10],y=l[11],L=l[12],R=l[13],w=l[14],U=l[15];if(s[0].setComponents(d-u,x-g,y-M,U-L).normalize(),s[1].setComponents(d+u,x+g,y+M,U+L).normalize(),s[2].setComponents(d+f,x+v,y+E,U+R).normalize(),s[3].setComponents(d-f,x-v,y-E,U-R).normalize(),a)s[4].setComponents(h,_,S,w).normalize(),s[5].setComponents(d-h,x-_,y-S,U-w).normalize();else if(s[4].setComponents(d-h,x-_,y-S,U-w).normalize(),t===ma)s[5].setComponents(d+h,x+_,y+S,U+w).normalize();else if(t===gf)s[5].setComponents(h,_,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);const t=m1.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const s=t[a];if(Wu.x=s.normal.x>0?e.max.x:e.min.x,Wu.y=s.normal.y>0?e.max.y:e.min.y,Wu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uc extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _f=new H,xf=new H,Ix=new bt,Fl=new Mf,qu=new xa,up=new H,zx=new H;class Tf extends dn{constructor(e=new gn,t=new uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[0];for(let s=1,l=t.count;s<l;s++)_f.fromBufferAttribute(t,s-1),xf.fromBufferAttribute(t,s),a[s]=a[s-1],a[s]+=_f.distanceTo(xf);e.setAttribute("lineDistance",new kt(a,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const a=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qu.copy(a.boundingSphere),qu.applyMatrix4(s),qu.radius+=l,e.ray.intersectsSphere(qu)===!1)return;Ix.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(Ix);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=d){const y=g.getX(E),L=g.getX(E+1),R=ju(this,e,Fl,h,y,L,E);R&&t.push(R)}if(this.isLineLoop){const E=g.getX(M-1),S=g.getX(x),y=ju(this,e,Fl,h,E,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=d){const y=ju(this,e,Fl,h,E,E+1,E);y&&t.push(y)}if(this.isLineLoop){const E=ju(this,e,Fl,h,M-1,x,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function ju(o,e,t,a,s,l,u){const f=o.geometry.attributes.position;if(_f.fromBufferAttribute(f,s),xf.fromBufferAttribute(f,l),t.distanceSqToSegment(_f,xf,up,zx)>a)return;up.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(up);if(!(d<e.near||d>e.far))return{distance:d,point:zx.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Bx=new H,Fx=new H;class Qm extends Tf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[];for(let s=0,l=t.count;s<l;s+=2)Bx.fromBufferAttribute(t,s),Fx.fromBufferAttribute(t,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+Bx.distanceTo(Fx);e.setAttribute("lineDistance",new kt(a,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class g1 extends Tf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $m extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hx=new bt,vm=new Mf,Yu=new xa,Zu=new H;class $y extends dn{constructor(e=new gn,t=new $m){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const a=this.geometry,s=this.matrixWorld,l=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Yu.copy(a.boundingSphere),Yu.applyMatrix4(s),Yu.radius+=l,e.ray.intersectsSphere(Yu)===!1)return;Hx.copy(s).invert(),vm.copy(e.ray).applyMatrix4(Hx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=a.index,v=a.attributes.position;if(d!==null){const _=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let M=_,E=x;M<E;M++){const S=d.getX(M);Zu.fromBufferAttribute(v,S),Gx(Zu,S,h,s,e,t,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=_,E=x;M<E;M++)Zu.fromBufferAttribute(v,M),Gx(Zu,M,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Gx(o,e,t,a,s,l,u){const f=vm.distanceSqToPoint(o);if(f<t){const h=new H;vm.closestPointToPoint(o,h),h.applyMatrix4(a);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class _m extends On{constructor(e,t,a,s,l,u,f,h,d){super(e,t,a,s,l,u,f,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sc extends On{constructor(e,t,a=_a,s,l,u,f=Un,h=Un,d,g=Ja,v=1){if(g!==Ja&&g!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,s,l,u,f,h,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ym(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class v1 extends sc{constructor(e,t=_a,a=pr,s,l,u=Un,f=Un,h,d=Ja){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,a,s,l,u,f,h,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class eS extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class e0 extends gn{constructor(e=1,t=1,a=4,s=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:a,radialSegments:s,heightSegments:l},t=Math.max(0,t),a=Math.max(1,Math.floor(a)),s=Math.max(3,Math.floor(s)),l=Math.max(1,Math.floor(l));const u=[],f=[],h=[],d=[],g=t/2,v=Math.PI/2*e,_=t,x=2*v+_,M=a*2+l,E=s+1,S=new H,y=new H;for(let L=0;L<=M;L++){let R=0,w=0,U=0,B=0;if(L<=a){const A=L/a,N=A*Math.PI/2;w=-g-e*Math.cos(N),U=e*Math.sin(N),B=-e*Math.cos(N),R=A*v}else if(L<=a+l){const A=(L-a)/l;w=-g+A*t,U=e,B=0,R=v+A*_}else{const A=(L-a-l)/a,N=A*Math.PI/2;w=g+e*Math.sin(N),U=e*Math.cos(N),B=e*Math.sin(N),R=v+_+A*v}const I=Math.max(0,Math.min(1,R/x));let j=0;L===0?j=.5/s:L===M&&(j=-.5/s);for(let A=0;A<=s;A++){const N=A/s,k=N*Math.PI*2,J=Math.sin(k),ee=Math.cos(k);y.x=-U*ee,y.y=w,y.z=U*J,f.push(y.x,y.y,y.z),S.set(-U*ee,B,U*J),S.normalize(),h.push(S.x,S.y,S.z),d.push(N+j,I)}if(L>0){const A=(L-1)*E;for(let N=0;N<s;N++){const k=A+N,J=A+N+1,ee=L*E+N,le=L*E+N+1;u.push(k,J,ee),u.push(J,le,ee)}}}this.setIndex(u),this.setAttribute("position",new kt(f,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new e0(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class mr extends gn{constructor(e=1,t=1,a=1,s=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:a,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const d=this;s=Math.floor(s),l=Math.floor(l);const g=[],v=[],_=[],x=[];let M=0;const E=[],S=a/2;let y=0;L(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(g),this.setAttribute("position",new kt(v,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(x,2));function L(){const w=new H,U=new H;let B=0;const I=(t-e)/a;for(let j=0;j<=l;j++){const A=[],N=j/l,k=N*(t-e)+e;for(let J=0;J<=s;J++){const ee=J/s,le=ee*h+f,Y=Math.sin(le),O=Math.cos(le);U.x=k*Y,U.y=-N*a+S,U.z=k*O,v.push(U.x,U.y,U.z),w.set(Y,I,O).normalize(),_.push(w.x,w.y,w.z),x.push(ee,1-N),A.push(M++)}E.push(A)}for(let j=0;j<s;j++)for(let A=0;A<l;A++){const N=E[A][j],k=E[A+1][j],J=E[A+1][j+1],ee=E[A][j+1];(e>0||A!==0)&&(g.push(N,k,ee),B+=3),(t>0||A!==l-1)&&(g.push(k,J,ee),B+=3)}d.addGroup(y,B,0),y+=B}function R(w){const U=M,B=new Ie,I=new H;let j=0;const A=w===!0?e:t,N=w===!0?1:-1;for(let J=1;J<=s;J++)v.push(0,S*N,0),_.push(0,N,0),x.push(.5,.5),M++;const k=M;for(let J=0;J<=s;J++){const le=J/s*h+f,Y=Math.cos(le),O=Math.sin(le);I.x=A*O,I.y=S*N,I.z=A*Y,v.push(I.x,I.y,I.z),_.push(0,N,0),B.x=Y*.5+.5,B.y=O*.5*N+.5,x.push(B.x,B.y),M++}for(let J=0;J<s;J++){const ee=U+J,le=k+J;w===!0?g.push(le,le+1,ee):g.push(le+1,le,ee),j+=3}d.addGroup(y,j,w===!0?1:2),y+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class t0 extends mr{constructor(e=1,t=1,a=32,s=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,a,s,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:a,heightSegments:s,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new t0(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ya{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,t){const a=this.getUtoTmapping(e);return this.getPoint(a,t)}getPoints(e=5){const t=[];for(let a=0;a<=e;a++)t.push(this.getPoint(a/e));return t}getSpacedPoints(e=5){const t=[];for(let a=0;a<=e;a++)t.push(this.getPointAt(a/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let a,s=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)a=this.getPoint(u/e),l+=a.distanceTo(s),t.push(l),s=a;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const a=this.getLengths();let s=0;const l=a.length;let u;t?u=t:u=e*a[l-1];let f=0,h=l-1,d;for(;f<=h;)if(s=Math.floor(f+(h-f)/2),d=a[s]-u,d<0)f=s+1;else if(d>0)h=s-1;else{h=s;break}if(s=h,a[s]===u)return s/(l-1);const g=a[s],_=a[s+1]-g,x=(u-g)/_;return(s+x)/(l-1)}getTangent(e,t){let s=e-1e-4,l=e+1e-4;s<0&&(s=0),l>1&&(l=1);const u=this.getPoint(s),f=this.getPoint(l),h=t||(u.isVector2?new Ie:new H);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const a=this.getUtoTmapping(e);return this.getTangent(a,t)}computeFrenetFrames(e,t=!1){const a=new H,s=[],l=[],u=[],f=new H,h=new bt;for(let x=0;x<=e;x++){const M=x/e;s[x]=this.getTangentAt(M,new H)}l[0]=new H,u[0]=new H;let d=Number.MAX_VALUE;const g=Math.abs(s[0].x),v=Math.abs(s[0].y),_=Math.abs(s[0].z);g<=d&&(d=g,a.set(1,0,0)),v<=d&&(d=v,a.set(0,1,0)),_<=d&&a.set(0,0,1),f.crossVectors(s[0],a).normalize(),l[0].crossVectors(s[0],f),u[0].crossVectors(s[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(s[x-1],s[x]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Nt(s[x-1].dot(s[x]),-1,1));l[x].applyMatrix4(h.makeRotationAxis(f,M))}u[x].crossVectors(s[x],l[x])}if(t===!0){let x=Math.acos(Nt(l[0].dot(l[e]),-1,1));x/=e,s[0].dot(f.crossVectors(l[0],l[e]))>0&&(x=-x);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(s[M],x*M)),u[M].crossVectors(s[M],l[M])}return{tangents:s,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class n0 extends ya{constructor(e=0,t=0,a=1,s=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=a,this.yRadius=s,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ie){const a=t,s=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=s;for(;l>s;)l-=s;l<Number.EPSILON&&(u?l=0:l=s),this.aClockwise===!0&&!u&&(l===s?l=-s:l=l-s);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),d=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=h-this.aX,x=d-this.aY;h=_*g-x*v+this.aX,d=_*v+x*g+this.aY}return a.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _1 extends n0{constructor(e,t,a,s,l,u){super(e,t,a,a,s,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function i0(){let o=0,e=0,t=0,a=0;function s(l,u,f,h){o=l,e=f,t=-3*l+3*u-2*f-h,a=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,d){s(u,f,d*(f-l),d*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,d,g,v){let _=(u-l)/d-(f-l)/(d+g)+(f-u)/g,x=(f-u)/g-(h-u)/(g+v)+(h-f)/v;_*=g,x*=g,s(u,f,_,x)},calc:function(l){const u=l*l,f=u*l;return o+e*l+t*u+a*f}}}const Ku=new H,fp=new i0,hp=new i0,dp=new i0;class xm extends ya{constructor(e=[],t=!1,a="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=a,this.tension=s}getPoint(e,t=new H){const a=t,s=this.points,l=s.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let d,g;this.closed||f>0?d=s[(f-1)%l]:(Ku.subVectors(s[0],s[1]).add(s[0]),d=Ku);const v=s[f%l],_=s[(f+1)%l];if(this.closed||f+2<l?g=s[(f+2)%l]:(Ku.subVectors(s[l-1],s[l-2]).add(s[l-1]),g=Ku),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(v),x),E=Math.pow(v.distanceToSquared(_),x),S=Math.pow(_.distanceToSquared(g),x);E<1e-4&&(E=1),M<1e-4&&(M=E),S<1e-4&&(S=E),fp.initNonuniformCatmullRom(d.x,v.x,_.x,g.x,M,E,S),hp.initNonuniformCatmullRom(d.y,v.y,_.y,g.y,M,E,S),dp.initNonuniformCatmullRom(d.z,v.z,_.z,g.z,M,E,S)}else this.curveType==="catmullrom"&&(fp.initCatmullRom(d.x,v.x,_.x,g.x,this.tension),hp.initCatmullRom(d.y,v.y,_.y,g.y,this.tension),dp.initCatmullRom(d.z,v.z,_.z,g.z,this.tension));return a.set(fp.calc(h),hp.calc(h),dp.calc(h)),a}copy(e){super.copy(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,a=this.points.length;t<a;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vx(o,e,t,a,s){const l=(a-e)*.5,u=(s-t)*.5,f=o*o,h=o*f;return(2*t-2*a+l+u)*h+(-3*t+3*a-2*l-u)*f+l*o+t}function x1(o,e){const t=1-o;return t*t*e}function y1(o,e){return 2*(1-o)*o*e}function S1(o,e){return o*o*e}function Zl(o,e,t,a){return x1(o,e)+y1(o,t)+S1(o,a)}function M1(o,e){const t=1-o;return t*t*t*e}function b1(o,e){const t=1-o;return 3*t*t*o*e}function T1(o,e){return 3*(1-o)*o*o*e}function E1(o,e){return o*o*o*e}function Kl(o,e,t,a,s){return M1(o,e)+b1(o,t)+T1(o,a)+E1(o,s)}class tS extends ya{constructor(e=new Ie,t=new Ie,a=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=a,this.v3=s}getPoint(e,t=new Ie){const a=t,s=this.v0,l=this.v1,u=this.v2,f=this.v3;return a.set(Kl(e,s.x,l.x,u.x,f.x),Kl(e,s.y,l.y,u.y,f.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A1 extends ya{constructor(e=new H,t=new H,a=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=a,this.v3=s}getPoint(e,t=new H){const a=t,s=this.v0,l=this.v1,u=this.v2,f=this.v3;return a.set(Kl(e,s.x,l.x,u.x,f.x),Kl(e,s.y,l.y,u.y,f.y),Kl(e,s.z,l.z,u.z,f.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nS extends ya{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const a=t;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w1 extends ya{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const a=t;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iS extends ya{constructor(e=new Ie,t=new Ie,a=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=a}getPoint(e,t=new Ie){const a=t,s=this.v0,l=this.v1,u=this.v2;return a.set(Zl(e,s.x,l.x,u.x),Zl(e,s.y,l.y,u.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R1 extends ya{constructor(e=new H,t=new H,a=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=a}getPoint(e,t=new H){const a=t,s=this.v0,l=this.v1,u=this.v2;return a.set(Zl(e,s.x,l.x,u.x),Zl(e,s.y,l.y,u.y),Zl(e,s.z,l.z,u.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aS extends ya{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const a=t,s=this.points,l=(s.length-1)*e,u=Math.floor(l),f=l-u,h=s[u===0?u:u-1],d=s[u],g=s[u>s.length-2?s.length-1:u+1],v=s[u>s.length-3?s.length-1:u+2];return a.set(Vx(f,h.x,d.x,g.x,v.x),Vx(f,h.y,d.y,g.y,v.y)),a}copy(e){super.copy(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,a=this.points.length;t<a;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){const s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}}var ym=Object.freeze({__proto__:null,ArcCurve:_1,CatmullRomCurve3:xm,CubicBezierCurve:tS,CubicBezierCurve3:A1,EllipseCurve:n0,LineCurve:nS,LineCurve3:w1,QuadraticBezierCurve:iS,QuadraticBezierCurve3:R1,SplineCurve:aS});class C1 extends ya{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const a=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ym[a](t,e))}return this}getPoint(e,t){const a=e*this.getLength(),s=this.getCurveLengths();let l=0;for(;l<s.length;){if(s[l]>=a){const u=s[l]-a,f=this.curves[l],h=f.getLength(),d=h===0?0:1-u/h;return f.getPointAt(d,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let a=0,s=this.curves.length;a<s;a++)t+=this.curves[a].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let a=0;a<=e;a++)t.push(this.getPoint(a/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let a;for(let s=0,l=this.curves;s<l.length;s++){const u=l[s],f=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,h=u.getPoints(f);for(let d=0;d<h.length;d++){const g=h[d];a&&a.equals(g)||(t.push(g),a=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,a=e.curves.length;t<a;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,a=this.curves.length;t<a;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,a=e.curves.length;t<a;t++){const s=e.curves[t];this.curves.push(new ym[s.type]().fromJSON(s))}return this}}class kx extends C1{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,a=e.length;t<a;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const a=new nS(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(a),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,a,s){const l=new iS(this.currentPoint.clone(),new Ie(e,t),new Ie(a,s));return this.curves.push(l),this.currentPoint.set(a,s),this}bezierCurveTo(e,t,a,s,l,u){const f=new tS(this.currentPoint.clone(),new Ie(e,t),new Ie(a,s),new Ie(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),a=new aS(t);return this.curves.push(a),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,a,s,l,u){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,a,s,l,u),this}absarc(e,t,a,s,l,u){return this.absellipse(e,t,a,a,s,l,u),this}ellipse(e,t,a,s,l,u,f,h){const d=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+d,t+g,a,s,l,u,f,h),this}absellipse(e,t,a,s,l,u,f,h){const d=new n0(e,t,a,s,l,u,f,h);if(this.curves.length>0){const v=d.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(d);const g=d.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class sS extends kx{constructor(e){super(e),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let a=0,s=this.holes.length;a<s;a++)t[a]=this.holes[a].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,a=e.holes.length;t<a;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,a=this.holes.length;t<a;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,a=e.holes.length;t<a;t++){const s=e.holes[t];this.holes.push(new kx().fromJSON(s))}return this}}function D1(o,e,t=2){const a=e&&e.length,s=a?e[0]*t:o.length;let l=rS(o,0,s,t,!0);const u=[];if(!l||l.next===l.prev)return u;let f,h,d;if(a&&(l=O1(o,e,l,t)),o.length>80*t){f=o[0],h=o[1];let g=f,v=h;for(let _=t;_<s;_+=t){const x=o[_],M=o[_+1];x<f&&(f=x),M<h&&(h=M),x>g&&(g=x),M>v&&(v=M)}d=Math.max(g-f,v-h),d=d!==0?32767/d:0}return rc(l,u,t,f,h,d,0),u}function rS(o,e,t,a,s){let l;if(s===q1(o,e,t,a)>0)for(let u=e;u<t;u+=a)l=Xx(u/a|0,o[u],o[u+1],l);else for(let u=t-a;u>=e;u-=a)l=Xx(u/a|0,o[u],o[u+1],l);return l&&Do(l,l.next)&&(lc(l),l=l.next),l}function gr(o,e){if(!o)return o;e||(e=o);let t=o,a;do if(a=!1,!t.steiner&&(Do(t,t.next)||_n(t.prev,t,t.next)===0)){if(lc(t),t=e=t.prev,t===t.next)break;a=!0}else t=t.next;while(a||t!==e);return e}function rc(o,e,t,a,s,l,u){if(!o)return;!u&&l&&H1(o,a,s,l);let f=o;for(;o.prev!==o.next;){const h=o.prev,d=o.next;if(l?L1(o,a,s,l):N1(o)){e.push(h.i,o.i,d.i),lc(o),o=d.next,f=d.next;continue}if(o=d,o===f){u?u===1?(o=U1(gr(o),e),rc(o,e,t,a,s,l,2)):u===2&&P1(o,e,t,a,s,l):rc(gr(o),e,t,a,s,l,1);break}}}function N1(o){const e=o.prev,t=o,a=o.next;if(_n(e,t,a)>=0)return!1;const s=e.x,l=t.x,u=a.x,f=e.y,h=t.y,d=a.y,g=Math.min(s,l,u),v=Math.min(f,h,d),_=Math.max(s,l,u),x=Math.max(f,h,d);let M=a.next;for(;M!==e;){if(M.x>=g&&M.x<=_&&M.y>=v&&M.y<=x&&Wl(s,f,l,h,u,d,M.x,M.y)&&_n(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function L1(o,e,t,a){const s=o.prev,l=o,u=o.next;if(_n(s,l,u)>=0)return!1;const f=s.x,h=l.x,d=u.x,g=s.y,v=l.y,_=u.y,x=Math.min(f,h,d),M=Math.min(g,v,_),E=Math.max(f,h,d),S=Math.max(g,v,_),y=Sm(x,M,e,t,a),L=Sm(E,S,e,t,a);let R=o.prevZ,w=o.nextZ;for(;R&&R.z>=y&&w&&w.z<=L;){if(R.x>=x&&R.x<=E&&R.y>=M&&R.y<=S&&R!==s&&R!==u&&Wl(f,g,h,v,d,_,R.x,R.y)&&_n(R.prev,R,R.next)>=0||(R=R.prevZ,w.x>=x&&w.x<=E&&w.y>=M&&w.y<=S&&w!==s&&w!==u&&Wl(f,g,h,v,d,_,w.x,w.y)&&_n(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;R&&R.z>=y;){if(R.x>=x&&R.x<=E&&R.y>=M&&R.y<=S&&R!==s&&R!==u&&Wl(f,g,h,v,d,_,R.x,R.y)&&_n(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;w&&w.z<=L;){if(w.x>=x&&w.x<=E&&w.y>=M&&w.y<=S&&w!==s&&w!==u&&Wl(f,g,h,v,d,_,w.x,w.y)&&_n(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function U1(o,e){let t=o;do{const a=t.prev,s=t.next.next;!Do(a,s)&&lS(a,t,t.next,s)&&oc(a,s)&&oc(s,a)&&(e.push(a.i,t.i,s.i),lc(t),lc(t.next),t=o=s),t=t.next}while(t!==o);return gr(t)}function P1(o,e,t,a,s,l){let u=o;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&k1(u,f)){let h=cS(u,f);u=gr(u,u.next),h=gr(h,h.next),rc(u,e,t,a,s,l,0),rc(h,e,t,a,s,l,0);return}f=f.next}u=u.next}while(u!==o)}function O1(o,e,t,a){const s=[];for(let l=0,u=e.length;l<u;l++){const f=e[l]*a,h=l<u-1?e[l+1]*a:o.length,d=rS(o,f,h,a,!1);d===d.next&&(d.steiner=!0),s.push(V1(d))}s.sort(I1);for(let l=0;l<s.length;l++)t=z1(s[l],t);return t}function I1(o,e){let t=o.x-e.x;if(t===0&&(t=o.y-e.y,t===0)){const a=(o.next.y-o.y)/(o.next.x-o.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=a-s}return t}function z1(o,e){const t=B1(o,e);if(!t)return e;const a=cS(t,o);return gr(a,a.next),gr(t,t.next)}function B1(o,e){let t=e;const a=o.x,s=o.y;let l=-1/0,u;if(Do(o,t))return t;do{if(Do(o,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const v=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>l&&(l=v,u=t.x<t.next.x?t:t.next,v===a))return u}t=t.next}while(t!==e);if(!u)return null;const f=u,h=u.x,d=u.y;let g=1/0;t=u;do{if(a>=t.x&&t.x>=h&&a!==t.x&&oS(s<d?a:l,s,h,d,s<d?l:a,s,t.x,t.y)){const v=Math.abs(s-t.y)/(a-t.x);oc(t,o)&&(v<g||v===g&&(t.x>u.x||t.x===u.x&&F1(u,t)))&&(u=t,g=v)}t=t.next}while(t!==f);return u}function F1(o,e){return _n(o.prev,o,e.prev)<0&&_n(e.next,o,o.next)<0}function H1(o,e,t,a){let s=o;do s.z===0&&(s.z=Sm(s.x,s.y,e,t,a)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==o);s.prevZ.nextZ=null,s.prevZ=null,G1(s)}function G1(o){let e,t=1;do{let a=o,s;o=null;let l=null;for(e=0;a;){e++;let u=a,f=0;for(let d=0;d<t&&(f++,u=u.nextZ,!!u);d++);let h=t;for(;f>0||h>0&&u;)f!==0&&(h===0||!u||a.z<=u.z)?(s=a,a=a.nextZ,f--):(s=u,u=u.nextZ,h--),l?l.nextZ=s:o=s,s.prevZ=l,l=s;a=u}l.nextZ=null,t*=2}while(e>1);return o}function Sm(o,e,t,a,s){return o=(o-t)*s|0,e=(e-a)*s|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function V1(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function oS(o,e,t,a,s,l,u,f){return(s-u)*(e-f)>=(o-u)*(l-f)&&(o-u)*(a-f)>=(t-u)*(e-f)&&(t-u)*(l-f)>=(s-u)*(a-f)}function Wl(o,e,t,a,s,l,u,f){return!(o===u&&e===f)&&oS(o,e,t,a,s,l,u,f)}function k1(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!X1(o,e)&&(oc(o,e)&&oc(e,o)&&W1(o,e)&&(_n(o.prev,o,e.prev)||_n(o,e.prev,e))||Do(o,e)&&_n(o.prev,o,o.next)>0&&_n(e.prev,e,e.next)>0)}function _n(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function Do(o,e){return o.x===e.x&&o.y===e.y}function lS(o,e,t,a){const s=Qu(_n(o,e,t)),l=Qu(_n(o,e,a)),u=Qu(_n(t,a,o)),f=Qu(_n(t,a,e));return!!(s!==l&&u!==f||s===0&&Ju(o,t,e)||l===0&&Ju(o,a,e)||u===0&&Ju(t,o,a)||f===0&&Ju(t,e,a))}function Ju(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function Qu(o){return o>0?1:o<0?-1:0}function X1(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&lS(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function oc(o,e){return _n(o.prev,o,o.next)<0?_n(o,e,o.next)>=0&&_n(o,o.prev,e)>=0:_n(o,e,o.prev)<0||_n(o,o.next,e)<0}function W1(o,e){let t=o,a=!1;const s=(o.x+e.x)/2,l=(o.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&s<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(a=!a),t=t.next;while(t!==o);return a}function cS(o,e){const t=Mm(o.i,o.x,o.y),a=Mm(e.i,e.x,e.y),s=o.next,l=e.prev;return o.next=e,e.prev=o,t.next=s,s.prev=t,a.next=t,t.prev=a,l.next=a,a.prev=l,a}function Xx(o,e,t,a){const s=Mm(o,e,t);return a?(s.next=a.next,s.prev=a,a.next.prev=s,a.next=s):(s.prev=s,s.next=s),s}function lc(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Mm(o,e,t){return{i:o,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function q1(o,e,t,a){let s=0;for(let l=e,u=t-a;l<t;l+=a)s+=(o[u]-o[l])*(o[l+1]+o[u+1]),u=l;return s}class j1{static triangulate(e,t,a=2){return D1(e,t,a)}}class yo{static area(e){const t=e.length;let a=0;for(let s=t-1,l=0;l<t;s=l++)a+=e[s].x*e[l].y-e[l].x*e[s].y;return a*.5}static isClockWise(e){return yo.area(e)<0}static triangulateShape(e,t){const a=[],s=[],l=[];Wx(e),qx(a,e);let u=e.length;t.forEach(Wx);for(let h=0;h<t.length;h++)s.push(u),u+=t[h].length,qx(a,t[h]);const f=j1.triangulate(a,s);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function Wx(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function qx(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class a0 extends gn{constructor(e=new sS([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const a=this,s=[],l=[];for(let f=0,h=e.length;f<h;f++){const d=e[f];u(d)}this.setAttribute("position",new kt(s,3)),this.setAttribute("uv",new kt(l,2)),this.computeVertexNormals();function u(f){const h=[],d=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,v=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:x-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,L=t.UVGenerator!==void 0?t.UVGenerator:Y1;let R,w=!1,U,B,I,j;if(y){R=y.getSpacedPoints(g),w=!0,_=!1;const Ee=y.isCatmullRomCurve3?y.closed:!1;U=y.computeFrenetFrames(g,Ee),B=new H,I=new H,j=new H}_||(S=0,x=0,M=0,E=0);const A=f.extractPoints(d);let N=A.shape;const k=A.holes;if(!yo.isClockWise(N)){N=N.reverse();for(let Ee=0,Pe=k.length;Ee<Pe;Ee++){const Re=k[Ee];yo.isClockWise(Re)&&(k[Ee]=Re.reverse())}}function ee(Ee){const Re=10000000000000001e-36;let je=Ee[0];for(let F=1;F<=Ee.length;F++){const at=F%Ee.length,Ye=Ee[at],lt=Ye.x-je.x,He=Ye.y-je.y,P=lt*lt+He*He,T=Math.max(Math.abs(Ye.x),Math.abs(Ye.y),Math.abs(je.x),Math.abs(je.y)),Z=Re*T*T;if(P<=Z){Ee.splice(at,1),F--;continue}je=Ye}}ee(N),k.forEach(ee);const le=k.length,Y=N;for(let Ee=0;Ee<le;Ee++){const Pe=k[Ee];N=N.concat(Pe)}function O(Ee,Pe,Re){return Pe||xt("ExtrudeGeometry: vec does not exist"),Ee.clone().addScaledVector(Pe,Re)}const G=N.length;function ne(Ee,Pe,Re){let je,F,at;const Ye=Ee.x-Pe.x,lt=Ee.y-Pe.y,He=Re.x-Ee.x,P=Re.y-Ee.y,T=Ye*Ye+lt*lt,Z=Ye*P-lt*He;if(Math.abs(Z)>Number.EPSILON){const pe=Math.sqrt(T),W=Math.sqrt(He*He+P*P),V=Pe.x-lt/pe,ae=Pe.y+Ye/pe,xe=Re.x-P/W,ye=Re.y+He/W,ce=((xe-V)*P-(ye-ae)*He)/(Ye*P-lt*He);je=V+Ye*ce-Ee.x,F=ae+lt*ce-Ee.y;const he=je*je+F*F;if(he<=2)return new Ie(je,F);at=Math.sqrt(he/2)}else{let pe=!1;Ye>Number.EPSILON?He>Number.EPSILON&&(pe=!0):Ye<-Number.EPSILON?He<-Number.EPSILON&&(pe=!0):Math.sign(lt)===Math.sign(P)&&(pe=!0),pe?(je=-lt,F=Ye,at=Math.sqrt(T)):(je=Ye,F=lt,at=Math.sqrt(T/2))}return new Ie(je/at,F/at)}const Te=[];for(let Ee=0,Pe=Y.length,Re=Pe-1,je=Ee+1;Ee<Pe;Ee++,Re++,je++)Re===Pe&&(Re=0),je===Pe&&(je=0),Te[Ee]=ne(Y[Ee],Y[Re],Y[je]);const Me=[];let z,ie=Te.concat();for(let Ee=0,Pe=le;Ee<Pe;Ee++){const Re=k[Ee];z=[];for(let je=0,F=Re.length,at=F-1,Ye=je+1;je<F;je++,at++,Ye++)at===F&&(at=0),Ye===F&&(Ye=0),z[je]=ne(Re[je],Re[at],Re[Ye]);Me.push(z),ie=ie.concat(z)}let _e;if(S===0)_e=yo.triangulateShape(Y,k);else{const Ee=[],Pe=[];for(let Re=0;Re<S;Re++){const je=Re/S,F=x*Math.cos(je*Math.PI/2),at=M*Math.sin(je*Math.PI/2)+E;for(let Ye=0,lt=Y.length;Ye<lt;Ye++){const He=O(Y[Ye],Te[Ye],at);ke(He.x,He.y,-F),je===0&&Ee.push(He)}for(let Ye=0,lt=le;Ye<lt;Ye++){const He=k[Ye];z=Me[Ye];const P=[];for(let T=0,Z=He.length;T<Z;T++){const pe=O(He[T],z[T],at);ke(pe.x,pe.y,-F),je===0&&P.push(pe)}je===0&&Pe.push(P)}}_e=yo.triangulateShape(Ee,Pe)}const we=_e.length,Be=M+E;for(let Ee=0;Ee<G;Ee++){const Pe=_?O(N[Ee],ie[Ee],Be):N[Ee];w?(I.copy(U.normals[0]).multiplyScalar(Pe.x),B.copy(U.binormals[0]).multiplyScalar(Pe.y),j.copy(R[0]).add(I).add(B),ke(j.x,j.y,j.z)):ke(Pe.x,Pe.y,0)}for(let Ee=1;Ee<=g;Ee++)for(let Pe=0;Pe<G;Pe++){const Re=_?O(N[Pe],ie[Pe],Be):N[Pe];w?(I.copy(U.normals[Ee]).multiplyScalar(Re.x),B.copy(U.binormals[Ee]).multiplyScalar(Re.y),j.copy(R[Ee]).add(I).add(B),ke(j.x,j.y,j.z)):ke(Re.x,Re.y,v/g*Ee)}for(let Ee=S-1;Ee>=0;Ee--){const Pe=Ee/S,Re=x*Math.cos(Pe*Math.PI/2),je=M*Math.sin(Pe*Math.PI/2)+E;for(let F=0,at=Y.length;F<at;F++){const Ye=O(Y[F],Te[F],je);ke(Ye.x,Ye.y,v+Re)}for(let F=0,at=k.length;F<at;F++){const Ye=k[F];z=Me[F];for(let lt=0,He=Ye.length;lt<He;lt++){const P=O(Ye[lt],z[lt],je);w?ke(P.x,P.y+R[g-1].y,R[g-1].x+Re):ke(P.x,P.y,v+Re)}}}oe(),ve();function oe(){const Ee=s.length/3;if(_){let Pe=0,Re=G*Pe;for(let je=0;je<we;je++){const F=_e[je];Ke(F[2]+Re,F[1]+Re,F[0]+Re)}Pe=g+S*2,Re=G*Pe;for(let je=0;je<we;je++){const F=_e[je];Ke(F[0]+Re,F[1]+Re,F[2]+Re)}}else{for(let Pe=0;Pe<we;Pe++){const Re=_e[Pe];Ke(Re[2],Re[1],Re[0])}for(let Pe=0;Pe<we;Pe++){const Re=_e[Pe];Ke(Re[0]+G*g,Re[1]+G*g,Re[2]+G*g)}}a.addGroup(Ee,s.length/3-Ee,0)}function ve(){const Ee=s.length/3;let Pe=0;Ve(Y,Pe),Pe+=Y.length;for(let Re=0,je=k.length;Re<je;Re++){const F=k[Re];Ve(F,Pe),Pe+=F.length}a.addGroup(Ee,s.length/3-Ee,1)}function Ve(Ee,Pe){let Re=Ee.length;for(;--Re>=0;){const je=Re;let F=Re-1;F<0&&(F=Ee.length-1);for(let at=0,Ye=g+S*2;at<Ye;at++){const lt=G*at,He=G*(at+1),P=Pe+je+lt,T=Pe+F+lt,Z=Pe+F+He,pe=Pe+je+He;vt(P,T,Z,pe)}}}function ke(Ee,Pe,Re){h.push(Ee),h.push(Pe),h.push(Re)}function Ke(Ee,Pe,Re){wt(Ee),wt(Pe),wt(Re);const je=s.length/3,F=L.generateTopUV(a,s,je-3,je-2,je-1);pt(F[0]),pt(F[1]),pt(F[2])}function vt(Ee,Pe,Re,je){wt(Ee),wt(Pe),wt(je),wt(Pe),wt(Re),wt(je);const F=s.length/3,at=L.generateSideWallUV(a,s,F-6,F-3,F-2,F-1);pt(at[0]),pt(at[1]),pt(at[3]),pt(at[1]),pt(at[2]),pt(at[3])}function wt(Ee){s.push(h[Ee*3+0]),s.push(h[Ee*3+1]),s.push(h[Ee*3+2])}function pt(Ee){l.push(Ee.x),l.push(Ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,a=this.parameters.options;return Z1(t,a,e)}static fromJSON(e,t){const a=[];for(let l=0,u=e.shapes.length;l<u;l++){const f=t[e.shapes[l]];a.push(f)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ym[s.type]().fromJSON(s)),new a0(a,e.options)}}const Y1={generateTopUV:function(o,e,t,a,s){const l=e[t*3],u=e[t*3+1],f=e[a*3],h=e[a*3+1],d=e[s*3],g=e[s*3+1];return[new Ie(l,u),new Ie(f,h),new Ie(d,g)]},generateSideWallUV:function(o,e,t,a,s,l){const u=e[t*3],f=e[t*3+1],h=e[t*3+2],d=e[a*3],g=e[a*3+1],v=e[a*3+2],_=e[s*3],x=e[s*3+1],M=e[s*3+2],E=e[l*3],S=e[l*3+1],y=e[l*3+2];return Math.abs(f-g)<Math.abs(u-d)?[new Ie(u,1-h),new Ie(d,1-v),new Ie(_,1-M),new Ie(E,1-y)]:[new Ie(f,1-h),new Ie(g,1-v),new Ie(x,1-M),new Ie(S,1-y)]}};function Z1(o,e,t){if(t.shapes=[],Array.isArray(o))for(let a=0,s=o.length;a<s;a++){const l=o[a];t.shapes.push(l.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fc extends gn{constructor(e=1,t=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:s};const l=e/2,u=t/2,f=Math.floor(a),h=Math.floor(s),d=f+1,g=h+1,v=e/f,_=t/h,x=[],M=[],E=[],S=[];for(let y=0;y<g;y++){const L=y*_-u;for(let R=0;R<d;R++){const w=R*v-l;M.push(w,-L,0),E.push(0,0,1),S.push(R/f),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let L=0;L<f;L++){const R=L+d*y,w=L+d*(y+1),U=L+1+d*(y+1),B=L+1+d*y;x.push(R,w,B),x.push(w,U,B)}this.setIndex(x),this.setAttribute("position",new kt(M,3)),this.setAttribute("normal",new kt(E,3)),this.setAttribute("uv",new kt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class s0 extends gn{constructor(e=.5,t=1,a=32,s=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:a,phiSegments:s,thetaStart:l,thetaLength:u},a=Math.max(3,a),s=Math.max(1,s);const f=[],h=[],d=[],g=[];let v=e;const _=(t-e)/s,x=new H,M=new Ie;for(let E=0;E<=s;E++){for(let S=0;S<=a;S++){const y=l+S/a*u;x.x=v*Math.cos(y),x.y=v*Math.sin(y),h.push(x.x,x.y,x.z),d.push(0,0,1),M.x=(x.x/t+1)/2,M.y=(x.y/t+1)/2,g.push(M.x,M.y)}v+=_}for(let E=0;E<s;E++){const S=E*(a+1);for(let y=0;y<a;y++){const L=y+S,R=L,w=L+a+1,U=L+a+2,B=L+1;f.push(R,w,B),f.push(w,U,B)}}this.setIndex(f),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ta extends gn{constructor(e=1,t=32,a=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const h=Math.min(u+f,Math.PI);let d=0;const g=[],v=new H,_=new H,x=[],M=[],E=[],S=[];for(let y=0;y<=a;y++){const L=[],R=y/a;let w=0;y===0&&u===0?w=.5/t:y===a&&h===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){const B=U/t;v.x=-e*Math.cos(s+B*l)*Math.sin(u+R*f),v.y=e*Math.cos(u+R*f),v.z=e*Math.sin(s+B*l)*Math.sin(u+R*f),M.push(v.x,v.y,v.z),_.copy(v).normalize(),E.push(_.x,_.y,_.z),S.push(B+w,1-R),L.push(d++)}g.push(L)}for(let y=0;y<a;y++)for(let L=0;L<t;L++){const R=g[y][L+1],w=g[y][L],U=g[y+1][L],B=g[y+1][L+1];(y!==0||u>0)&&x.push(R,w,B),(y!==a-1||h<Math.PI)&&x.push(w,U,B)}this.setIndex(x),this.setAttribute("position",new kt(M,3)),this.setAttribute("normal",new kt(E,3)),this.setAttribute("uv",new kt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class So extends gn{constructor(e=1,t=.4,a=12,s=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:s,arc:l},a=Math.floor(a),s=Math.floor(s);const u=[],f=[],h=[],d=[],g=new H,v=new H,_=new H;for(let x=0;x<=a;x++)for(let M=0;M<=s;M++){const E=M/s*l,S=x/a*Math.PI*2;v.x=(e+t*Math.cos(S))*Math.cos(E),v.y=(e+t*Math.cos(S))*Math.sin(E),v.z=t*Math.sin(S),f.push(v.x,v.y,v.z),g.x=e*Math.cos(E),g.y=e*Math.sin(E),_.subVectors(v,g).normalize(),h.push(_.x,_.y,_.z),d.push(M/s),d.push(x/a)}for(let x=1;x<=a;x++)for(let M=1;M<=s;M++){const E=(s+1)*x+M-1,S=(s+1)*(x-1)+M-1,y=(s+1)*(x-1)+M,L=(s+1)*x+M;u.push(E,S,L),u.push(S,y,L)}this.setIndex(u),this.setAttribute("position",new kt(f,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class uS extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vr extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xm,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sa extends vr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bm extends ji{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xm,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class K1 extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J1 extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function $u(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Q1(o){function e(s,l){return o[s]-o[l]}const t=o.length,a=new Array(t);for(let s=0;s!==t;++s)a[s]=s;return a.sort(e),a}function jx(o,e,t){const a=o.length,s=new o.constructor(a);for(let l=0,u=0;u!==a;++l){const f=t[l]*e;for(let h=0;h!==e;++h)s[u++]=o[f+h]}return s}function fS(o,e,t,a){let s=1,l=o[0];for(;l!==void 0&&l[a]===void 0;)l=o[s++];if(l===void 0)return;let u=l[a];if(u!==void 0)if(Array.isArray(u))do u=l[a],u!==void 0&&(e.push(l.time),t.push(...u)),l=o[s++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[a],u!==void 0&&(e.push(l.time),u.toArray(t,t.length)),l=o[s++];while(l!==void 0);else do u=l[a],u!==void 0&&(e.push(l.time),t.push(u)),l=o[s++];while(l!==void 0)}class hc{constructor(e,t,a,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let a=this._cachedIndex,s=t[a],l=t[a-1];e:{t:{let u;n:{i:if(!(e<s)){for(let f=a+2;;){if(s===void 0){if(e<l)break i;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(l=s,s=t[++a],e<s)break t}u=t.length;break n}if(!(e>=l)){const f=t[1];e<f&&(a=2,l=f);for(let h=a-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===h)break;if(s=l,l=t[--a-1],e>=l)break t}u=a,a=0;break n}break e}for(;a<u;){const f=a+u>>>1;e<t[f]?u=f:a=f+1}if(s=t[a],l=t[a-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,l,s)}return this.interpolate_(a,l,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s;for(let u=0;u!==s;++u)t[u]=a[l+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $1 extends hc{constructor(e,t,a,s){super(e,t,a,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ix,endingEnd:ix}}intervalChanged_(e,t,a){const s=this.parameterPositions;let l=e-2,u=e+1,f=s[l],h=s[u];if(f===void 0)switch(this.getSettings_().endingStart){case ax:l=e,f=2*t-a;break;case sx:l=s.length-2,f=t+s[l]-s[l+1];break;default:l=e,f=a}if(h===void 0)switch(this.getSettings_().endingEnd){case ax:u=e,h=2*a-t;break;case sx:u=1,h=a+s[1]-s[0];break;default:u=e-1,h=t}const d=(a-t)*.5,g=this.valueSize;this._weightPrev=d/(t-f),this._weightNext=d/(h-a),this._offsetPrev=l*g,this._offsetNext=u*g}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,g=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(a-t)/(s-t),E=M*M,S=E*M,y=-_*S+2*_*E-_*M,L=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,R=(-1-x)*S+(1.5+x)*E+.5*M,w=x*S-x*E;for(let U=0;U!==f;++U)l[U]=y*u[g+U]+L*u[d+U]+R*u[h+U]+w*u[v+U];return l}}class eE extends hc{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,g=(a-t)/(s-t),v=1-g;for(let _=0;_!==f;++_)l[_]=u[d+_]*v+u[h+_]*g;return l}}class tE extends hc{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ra{constructor(e,t,a,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$u(t,this.TimeBufferType),this.values=$u(a,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:$u(e.times,Array),values:$u(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(a.interpolation=s)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new tE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ec:t=this.InterpolantFactoryMethodDiscrete;break;case tc:t=this.InterpolantFactoryMethodLinear;break;case Bd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return ft("KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ec;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return Bd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let a=0,s=t.length;a!==s;++a)t[a]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let a=0,s=t.length;a!==s;++a)t[a]*=e}return this}trim(e,t){const a=this.times,s=a.length;let l=0,u=s-1;for(;l!==s&&a[l]<e;)++l;for(;u!==-1&&a[u]>t;)--u;if(++u,l!==0||u!==s){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=a.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(xt("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,s=this.values,l=a.length;l===0&&(xt("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==l;f++){const h=a[f];if(typeof h=="number"&&isNaN(h)){xt("KeyframeTrack: Time is not a valid number.",this,f,h),e=!1;break}if(u!==null&&u>h){xt("KeyframeTrack: Out of order keys.",this,f,h,u),e=!1;break}u=h}if(s!==void 0&&yT(s))for(let f=0,h=s.length;f!==h;++f){const d=s[f];if(isNaN(d)){xt("KeyframeTrack: Value is not a valid number.",this,f,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),s=this.getInterpolation()===Bd,l=e.length-1;let u=1;for(let f=1;f<l;++f){let h=!1;const d=e[f],g=e[f+1];if(d!==g&&(f!==1||d!==e[0]))if(s)h=!0;else{const v=f*a,_=v-a,x=v+a;for(let M=0;M!==a;++M){const E=t[v+M];if(E!==t[_+M]||E!==t[x+M]){h=!0;break}}}if(h){if(f!==u){e[u]=e[f];const v=f*a,_=u*a;for(let x=0;x!==a;++x)t[_+x]=t[v+x]}++u}}if(l>0){e[u]=e[l];for(let f=l*a,h=u*a,d=0;d!==a;++d)t[h+d]=t[f+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*a)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),a=this.constructor,s=new a(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ra.prototype.ValueTypeName="";ra.prototype.TimeBufferType=Float32Array;ra.prototype.ValueBufferType=Float32Array;ra.prototype.DefaultInterpolation=tc;class Oo extends ra{constructor(e,t,a){super(e,t,a)}}Oo.prototype.ValueTypeName="bool";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=ec;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class hS extends ra{constructor(e,t,a,s){super(e,t,a,s)}}hS.prototype.ValueTypeName="color";class No extends ra{constructor(e,t,a,s){super(e,t,a,s)}}No.prototype.ValueTypeName="number";class nE extends hc{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=(a-t)/(s-t);let d=e*f;for(let g=d+f;d!==g;d+=4)Is.slerpFlat(l,0,u,d-f,u,d,h);return l}}class Lo extends ra{constructor(e,t,a,s){super(e,t,a,s)}InterpolantFactoryMethodLinear(e){return new nE(this.times,this.values,this.getValueSize(),e)}}Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends ra{constructor(e,t,a){super(e,t,a)}}Io.prototype.ValueTypeName="string";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=ec;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends ra{constructor(e,t,a,s){super(e,t,a,s)}}Uo.prototype.ValueTypeName="vector";class iE{constructor(e="",t=-1,a=[],s=uT){this.name=e,this.tracks=a,this.duration=t,this.blendMode=s,this.uuid=qi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],a=e.tracks,s=1/(e.fps||1);for(let u=0,f=a.length;u!==f;++u)t.push(sE(a[u]).scale(s));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l.userData=JSON.parse(e.userData||"{}"),l}static toJSON(e){const t=[],a=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let l=0,u=a.length;l!==u;++l)t.push(ra.toJSON(a[l]));return s}static CreateFromMorphTargetSequence(e,t,a,s){const l=t.length,u=[];for(let f=0;f<l;f++){let h=[],d=[];h.push((f+l-1)%l,f,(f+1)%l),d.push(0,1,0);const g=Q1(h);h=jx(h,1,g),d=jx(d,1,g),!s&&h[0]===0&&(h.push(l),d.push(d[0])),u.push(new No(".morphTargetInfluences["+t[f].name+"]",h,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,t){let a=e;if(!Array.isArray(e)){const s=e;a=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<a.length;s++)if(a[s].name===t)return a[s];return null}static CreateClipsFromMorphTargetSequences(e,t,a){const s={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,h=e.length;f<h;f++){const d=e[f],g=d.name.match(l);if(g&&g.length>1){const v=g[1];let _=s[v];_||(s[v]=_=[]),_.push(d)}}const u=[];for(const f in s)u.push(this.CreateFromMorphTargetSequence(f,s[f],t,a));return u}static parseAnimation(e,t){if(ft("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return xt("AnimationClip: No animation in JSONLoader data."),null;const a=function(v,_,x,M,E){if(x.length!==0){const S=[],y=[];fS(x,S,y,M),S.length!==0&&E.push(new v(_,S,y))}},s=[],l=e.name||"default",u=e.fps||30,f=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let v=0;v<d.length;v++){const _=d[v].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)x[_[M].morphTargets[E]]=-1;for(const E in x){const S=[],y=[];for(let L=0;L!==_[M].morphTargets.length;++L){const R=_[M];S.push(R.time),y.push(R.morphTarget===E?1:0)}s.push(new No(".morphTargetInfluence["+E+"]",S,y))}h=x.length*u}else{const x=".bones["+t[v].name+"]";a(Uo,x+".position",_,"pos",s),a(Lo,x+".quaternion",_,"rot",s),a(Uo,x+".scale",_,"scl",s)}}return s.length===0?null:new this(l,h,s,f)}resetDuration(){const e=this.tracks;let t=0;for(let a=0,s=e.length;a!==s;++a){const l=this.tracks[a];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function aE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return No;case"vector":case"vector2":case"vector3":case"vector4":return Uo;case"color":return hS;case"quaternion":return Lo;case"bool":case"boolean":return Oo;case"string":return Io}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function sE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=aE(o.type);if(o.times===void 0){const t=[],a=[];fS(o.keys,t,a,"value"),o.times=t,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ja={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class rE{constructor(e,t,a){const s=this;let l=!1,u=0,f=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(g){f++,l===!1&&s.onStart!==void 0&&s.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,s.onProgress!==void 0&&s.onProgress(g,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){const v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){const x=d[v],M=d[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const oE=new rE;class zo{constructor(e){this.manager=e!==void 0?e:oE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const a=this;return new Promise(function(s,l){a.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}zo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xa={};class lE extends Error{constructor(e,t){super(e),this.response=t}}class dS extends zo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=ja.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Xa[e]!==void 0){Xa[e].push({onLoad:t,onProgress:a,onError:s});return}Xa[e]=[],Xa[e].push({onLoad:t,onProgress:a,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,h=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Xa[e],v=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let E=0;const S=new ReadableStream({start(y){L();function L(){v.read().then(({done:R,value:w})=>{if(R)y.close();else{E+=w.byteLength;const U=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let B=0,I=g.length;B<I;B++){const j=g[B];j.onProgress&&j.onProgress(U)}y.enqueue(w),L()}},R=>{y.error(R)})}}});return new Response(S)}else throw new lE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return d.json();default:if(f==="")return d.text();{const v=/charset="?([^;"\s]*)"?/i.exec(f),_=v&&v[1]?v[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{ja.add(`file:${e}`,d);const g=Xa[e];delete Xa[e];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=Xa[e];if(g===void 0)throw this.manager.itemError(e),d;delete Xa[e];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _o=new WeakMap;class cE extends zo{constructor(e){super(e)}load(e,t,a,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=ja.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let v=_o.get(u);v===void 0&&(v=[],_o.set(u,v)),v.push({onLoad:t,onError:s})}return u}const f=nc("img");function h(){g(),t&&t(this);const v=_o.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onLoad&&x.onLoad(this)}_o.delete(this),l.manager.itemEnd(e)}function d(v){g(),s&&s(v),ja.remove(`image:${e}`);const _=_o.get(this)||[];for(let x=0;x<_.length;x++){const M=_[x];M.onError&&M.onError(v)}_o.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),ja.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class uE extends zo{constructor(e){super(e)}load(e,t,a,s){const l=new On,u=new cE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},a,s),l}}class Ef extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class pS extends Ef{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const pp=new bt,Yx=new H,Zx=new H;class r0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jm,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,a=this.matrix;Yx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yx),Zx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zx),t.updateMatrixWorld(),pp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pp,t.coordinateSystem,t.reversedDepth),t.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(pp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fE extends r0{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,a=wo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(a!==t.fov||s!==t.aspect||l!==t.far)&&(t.fov=a,t.aspect=s,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mS extends Ef{constructor(e,t,a=0,s=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=a,this.angle=s,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new fE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class hE extends r0{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class o0 extends Ef{constructor(e,t,a=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=s,this.shadow=new hE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class dc extends Wy{constructor(e=-1,t=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,u=a+e,f=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dE extends r0{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yf extends Ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new dE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Jl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const mp=new WeakMap;class pE extends zo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ft("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ft("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=ja.get(`image-bitmap:${e}`);if(u!==void 0){if(l.manager.itemStart(e),u.then){u.then(d=>{if(mp.has(u)===!0)s&&s(mp.get(u)),l.manager.itemError(e),l.manager.itemEnd(e);else return t&&t(d),l.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,f).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(d){return ja.add(`image-bitmap:${e}`,d),t&&t(d),l.manager.itemEnd(e),d}).catch(function(d){s&&s(d),mp.set(h,d),ja.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});ja.add(`image-bitmap:${e}`,h),l.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class mE extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class l0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const c0="\\[\\]\\.:\\/",gE=new RegExp("["+c0+"]","g"),u0="[^"+c0+"]",vE="[^"+c0.replace("\\.","")+"]",_E=/((?:WC+[\/:])*)/.source.replace("WC",u0),xE=/(WCOD+)?/.source.replace("WCOD",vE),yE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",u0),SE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",u0),ME=new RegExp("^"+_E+xE+yE+SE+"$"),bE=["material","materials","bones","map"];class TE{constructor(e,t,a){const s=a||$t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const a=this._targetGroup.nCachedObjects_,s=this._bindings[a];s!==void 0&&s.getValue(e,t)}setValue(e,t){const a=this._bindings;for(let s=this._targetGroup.nCachedObjects_,l=a.length;s!==l;++s)a[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}}class $t{constructor(e,t,a){this.path=t,this.parsedPath=a||$t.parseTrackName(t),this.node=$t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new $t.Composite(e,t,a):new $t(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gE,"")}static parseTrackName(e){const t=ME.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=a.nodeName&&a.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const l=a.nodeName.substring(s+1);bE.indexOf(l)!==-1&&(a.nodeName=a.nodeName.substring(0,s),a.objectName=l)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){const a=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===t||f.uuid===t)return f;const h=a(f.children);if(h)return h}return null},s=a(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)e[t++]=a[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,a=t.objectName,s=t.propertyName;let l=t.propertyIndex;if(e||(e=$t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=t.objectIndex;switch(a){case"materials":if(!e.material){xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[s];if(u===void 0){const d=t.nodeName;xt("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(l!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}h=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(h=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$t.Composite=TE;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class EE extends Qm{constructor(e=10,t=10,a=4473924,s=8947848){a=new ct(a),s=new ct(s);const l=t/2,u=e/t,f=e/2,h=[],d=[];for(let _=0,x=0,M=-f;_<=t;_++,M+=u){h.push(-f,0,M,f,0,M),h.push(M,0,-f,M,0,f);const E=_===l?a:s;E.toArray(d,x),x+=3,E.toArray(d,x),x+=3,E.toArray(d,x),x+=3,E.toArray(d,x),x+=3}const g=new gn;g.setAttribute("position",new kt(h,3)),g.setAttribute("color",new kt(d,3));const v=new uc({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Kx(o,e,t,a){const s=AE(a);switch(t){case Oy:return o*e;case Hm:return o*e/s.components*s.byteLength;case Gm:return o*e/s.components*s.byteLength;case Ao:return o*e*2/s.components*s.byteLength;case Vm:return o*e*2/s.components*s.byteLength;case Iy:return o*e*3/s.components*s.byteLength;case Wi:return o*e*4/s.components*s.byteLength;case km:return o*e*4/s.components*s.byteLength;case lf:case cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case uf:case ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zp:case Fp:return Math.max(o,16)*Math.max(e,8)/4;case Ip:case Bp:return Math.max(o,8)*Math.max(e,8)/2;case Hp:case Gp:case kp:case Xp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vp:case Wp:case qp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case $p:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case em:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case tm:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case nm:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case im:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case am:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case sm:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case rm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case om:case lm:case cm:return Math.ceil(o/4)*Math.ceil(e/4)*16;case um:case fm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case hm:case dm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function AE(o){switch(o){case Ci:case Ny:return{byteLength:1,components:1};case Ql:case Ly:case Di:return{byteLength:2,components:1};case Bm:case Fm:return{byteLength:2,components:4};case _a:case zm:case Xi:return{byteLength:4,components:1};case Uy:case Py:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dm}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dm);function gS(){let o=null,e=!1,t=null,a=null;function s(l,u){t(l,u),a=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(a=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){o=l}}}function wE(o){const e=new WeakMap;function t(f,h){const d=f.array,g=f.usage,v=d.byteLength,_=o.createBuffer();o.bindBuffer(h,_),o.bufferData(h,d,g),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,h,d){const g=h.array,v=h.updateRanges;if(o.bindBuffer(d,f),v.length===0)o.bufferSubData(d,0,g);else{v.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<v.length;x++){const M=v[_],E=v[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,v[_]=E)}v.length=_+1;for(let x=0,M=v.length;x<M;x++){const E=v[x];o.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(o.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,h),d.version=f.version}}return{get:s,remove:l,update:u}}var RE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CE=`#ifdef USE_ALPHAHASH
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
#endif`,DE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PE=`#ifdef USE_AOMAP
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
#endif`,OE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IE=`#ifdef USE_BATCHING
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
#endif`,zE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GE=`#ifdef USE_IRIDESCENCE
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
#endif`,VE=`#ifdef USE_BUMPMAP
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
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,JE=`#define PI 3.141592653589793
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
} // validated`,QE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$E=`vec3 transformedNormal = objectNormal;
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
#endif`,eA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aA="gl_FragColor = linearToOutputTexel( gl_FragColor );",sA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rA=`#ifdef USE_ENVMAP
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
#endif`,oA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lA=`#ifdef USE_ENVMAP
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
#endif`,cA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
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
#endif`,fA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mA=`#ifdef USE_GRADIENTMAP
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
}`,gA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_A=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xA=`uniform bool receiveShadow;
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
#endif`,yA=`#ifdef USE_ENVMAP
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
#endif`,SA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EA=`PhysicalMaterial material;
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
#endif`,AA=`uniform sampler2D dfgLUT;
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
}`,wA=`
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
#endif`,RA=`#if defined( RE_IndirectDiffuse )
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
#endif`,CA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zA=`#if defined( USE_POINTS_UV )
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
#endif`,BA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kA=`#ifdef USE_MORPHTARGETS
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
#endif`,XA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KA=`#ifdef USE_NORMALMAP
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
#endif`,JA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$A=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ow=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hw=`float getShadowMask() {
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
}`,dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pw=`#ifdef USE_SKINNING
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
#endif`,mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gw=`#ifdef USE_SKINNING
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
#endif`,vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_w=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sw=`#ifdef USE_TRANSMISSION
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
#endif`,Mw=`#ifdef USE_TRANSMISSION
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
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rw=`uniform sampler2D t2D;
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`#include <common>
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
}`,Pw=`#if DEPTH_PACKING == 3200
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
}`,Ow=`#define DISTANCE
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
}`,Iw=`#define DISTANCE
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`uniform float scale;
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Gw=`#include <common>
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
}`,Vw=`uniform vec3 diffuse;
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
}`,kw=`#define LAMBERT
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
}`,Xw=`#define LAMBERT
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
}`,Ww=`#define MATCAP
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
}`,qw=`#define MATCAP
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
}`,jw=`#define NORMAL
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
}`,Yw=`#define NORMAL
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
}`,Zw=`#define PHONG
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
}`,Kw=`#define PHONG
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
}`,Jw=`#define STANDARD
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
}`,Qw=`#define STANDARD
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
}`,$w=`#define TOON
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
}`,e2=`#define TOON
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
}`,t2=`uniform float size;
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
}`,n2=`uniform vec3 diffuse;
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
}`,i2=`#include <common>
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
}`,a2=`uniform vec3 color;
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
}`,s2=`uniform float rotation;
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
}`,r2=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:RE,alphahash_pars_fragment:CE,alphamap_fragment:DE,alphamap_pars_fragment:NE,alphatest_fragment:LE,alphatest_pars_fragment:UE,aomap_fragment:PE,aomap_pars_fragment:OE,batching_pars_vertex:IE,batching_vertex:zE,begin_vertex:BE,beginnormal_vertex:FE,bsdfs:HE,iridescence_fragment:GE,bumpmap_pars_fragment:VE,clipping_planes_fragment:kE,clipping_planes_pars_fragment:XE,clipping_planes_pars_vertex:WE,clipping_planes_vertex:qE,color_fragment:jE,color_pars_fragment:YE,color_pars_vertex:ZE,color_vertex:KE,common:JE,cube_uv_reflection_fragment:QE,defaultnormal_vertex:$E,displacementmap_pars_vertex:eA,displacementmap_vertex:tA,emissivemap_fragment:nA,emissivemap_pars_fragment:iA,colorspace_fragment:aA,colorspace_pars_fragment:sA,envmap_fragment:rA,envmap_common_pars_fragment:oA,envmap_pars_fragment:lA,envmap_pars_vertex:cA,envmap_physical_pars_fragment:yA,envmap_vertex:uA,fog_vertex:fA,fog_pars_vertex:hA,fog_fragment:dA,fog_pars_fragment:pA,gradientmap_pars_fragment:mA,lightmap_pars_fragment:gA,lights_lambert_fragment:vA,lights_lambert_pars_fragment:_A,lights_pars_begin:xA,lights_toon_fragment:SA,lights_toon_pars_fragment:MA,lights_phong_fragment:bA,lights_phong_pars_fragment:TA,lights_physical_fragment:EA,lights_physical_pars_fragment:AA,lights_fragment_begin:wA,lights_fragment_maps:RA,lights_fragment_end:CA,logdepthbuf_fragment:DA,logdepthbuf_pars_fragment:NA,logdepthbuf_pars_vertex:LA,logdepthbuf_vertex:UA,map_fragment:PA,map_pars_fragment:OA,map_particle_fragment:IA,map_particle_pars_fragment:zA,metalnessmap_fragment:BA,metalnessmap_pars_fragment:FA,morphinstance_vertex:HA,morphcolor_vertex:GA,morphnormal_vertex:VA,morphtarget_pars_vertex:kA,morphtarget_vertex:XA,normal_fragment_begin:WA,normal_fragment_maps:qA,normal_pars_fragment:jA,normal_pars_vertex:YA,normal_vertex:ZA,normalmap_pars_fragment:KA,clearcoat_normal_fragment_begin:JA,clearcoat_normal_fragment_maps:QA,clearcoat_pars_fragment:$A,iridescence_pars_fragment:ew,opaque_fragment:tw,packing:nw,premultiplied_alpha_fragment:iw,project_vertex:aw,dithering_fragment:sw,dithering_pars_fragment:rw,roughnessmap_fragment:ow,roughnessmap_pars_fragment:lw,shadowmap_pars_fragment:cw,shadowmap_pars_vertex:uw,shadowmap_vertex:fw,shadowmask_pars_fragment:hw,skinbase_vertex:dw,skinning_pars_vertex:pw,skinning_vertex:mw,skinnormal_vertex:gw,specularmap_fragment:vw,specularmap_pars_fragment:_w,tonemapping_fragment:xw,tonemapping_pars_fragment:yw,transmission_fragment:Sw,transmission_pars_fragment:Mw,uv_pars_fragment:bw,uv_pars_vertex:Tw,uv_vertex:Ew,worldpos_vertex:Aw,background_vert:ww,background_frag:Rw,backgroundCube_vert:Cw,backgroundCube_frag:Dw,cube_vert:Nw,cube_frag:Lw,depth_vert:Uw,depth_frag:Pw,distance_vert:Ow,distance_frag:Iw,equirect_vert:zw,equirect_frag:Bw,linedashed_vert:Fw,linedashed_frag:Hw,meshbasic_vert:Gw,meshbasic_frag:Vw,meshlambert_vert:kw,meshlambert_frag:Xw,meshmatcap_vert:Ww,meshmatcap_frag:qw,meshnormal_vert:jw,meshnormal_frag:Yw,meshphong_vert:Zw,meshphong_frag:Kw,meshphysical_vert:Jw,meshphysical_frag:Qw,meshtoon_vert:$w,meshtoon_frag:e2,points_vert:t2,points_frag:n2,shadow_vert:i2,shadow_frag:a2,sprite_vert:s2,sprite_frag:r2},$e={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},da={basic:{uniforms:oi([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:oi([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:oi([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:oi([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:oi([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:oi([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:oi([$e.points,$e.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:oi([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:oi([$e.common,$e.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:oi([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:oi([$e.sprite,$e.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:oi([$e.common,$e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:oi([$e.lights,$e.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};da.physical={uniforms:oi([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const ef={r:0,b:0,g:0},sr=new Ni,o2=new bt;function l2(o,e,t,a,s,l,u){const f=new ct(0);let h=l===!0?0:1,d,g,v=null,_=0,x=null;function M(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?t:e).get(w)),w}function E(R){let w=!1;const U=M(R);U===null?y(f,h):U&&U.isColor&&(y(U,1),w=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(R,w){const U=M(w);U&&(U.isCubeTexture||U.mapping===Sf)?(g===void 0&&(g=new Pt(new xr(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Ro(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),sr.copy(w.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(o2.makeRotationFromEuler(sr)),g.material.toneMapped=Bt.getTransfer(U.colorSpace)!==Yt,(v!==U||_!==U.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,v=U,_=U.version,x=o.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(d===void 0&&(d=new Pt(new fc(2,2),new Gn({name:"BackgroundMaterial",uniforms:Ro(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=U,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Bt.getTransfer(U.colorSpace)!==Yt,U.matrixAutoUpdate===!0&&U.updateMatrix(),d.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||_!==U.version||x!==o.toneMapping)&&(d.material.needsUpdate=!0,v=U,_=U.version,x=o.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,w){R.getRGB(ef,Xy(o)),a.buffers.color.setClear(ef.r,ef.g,ef.b,w,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,w=1){f.set(R),h=w,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,y(f,h)},render:E,addToRenderList:S,dispose:L}}function c2(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=_(null);let l=s,u=!1;function f(N,k,J,ee,le){let Y=!1;const O=v(ee,J,k);l!==O&&(l=O,d(l.object)),Y=x(N,ee,J,le),Y&&M(N,ee,J,le),le!==null&&e.update(le,o.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,w(N,k,J,ee),le!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return o.createVertexArray()}function d(N){return o.bindVertexArray(N)}function g(N){return o.deleteVertexArray(N)}function v(N,k,J){const ee=J.wireframe===!0;let le=a[N.id];le===void 0&&(le={},a[N.id]=le);let Y=le[k.id];Y===void 0&&(Y={},le[k.id]=Y);let O=Y[ee];return O===void 0&&(O=_(h()),Y[ee]=O),O}function _(N){const k=[],J=[],ee=[];for(let le=0;le<t;le++)k[le]=0,J[le]=0,ee[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:ee,object:N,attributes:{},index:null}}function x(N,k,J,ee){const le=l.attributes,Y=k.attributes;let O=0;const G=J.getAttributes();for(const ne in G)if(G[ne].location>=0){const Me=le[ne];let z=Y[ne];if(z===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),Me===void 0||Me.attribute!==z||z&&Me.data!==z.data)return!0;O++}return l.attributesNum!==O||l.index!==ee}function M(N,k,J,ee){const le={},Y=k.attributes;let O=0;const G=J.getAttributes();for(const ne in G)if(G[ne].location>=0){let Me=Y[ne];Me===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor));const z={};z.attribute=Me,Me&&Me.data&&(z.data=Me.data),le[ne]=z,O++}l.attributes=le,l.attributesNum=O,l.index=ee}function E(){const N=l.newAttributes;for(let k=0,J=N.length;k<J;k++)N[k]=0}function S(N){y(N,0)}function y(N,k){const J=l.newAttributes,ee=l.enabledAttributes,le=l.attributeDivisors;J[N]=1,ee[N]===0&&(o.enableVertexAttribArray(N),ee[N]=1),le[N]!==k&&(o.vertexAttribDivisor(N,k),le[N]=k)}function L(){const N=l.newAttributes,k=l.enabledAttributes;for(let J=0,ee=k.length;J<ee;J++)k[J]!==N[J]&&(o.disableVertexAttribArray(J),k[J]=0)}function R(N,k,J,ee,le,Y,O){O===!0?o.vertexAttribIPointer(N,k,J,le,Y):o.vertexAttribPointer(N,k,J,ee,le,Y)}function w(N,k,J,ee){E();const le=ee.attributes,Y=J.getAttributes(),O=k.defaultAttributeValues;for(const G in Y){const ne=Y[G];if(ne.location>=0){let Te=le[G];if(Te===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Te=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Te=N.instanceColor)),Te!==void 0){const Me=Te.normalized,z=Te.itemSize,ie=e.get(Te);if(ie===void 0)continue;const _e=ie.buffer,we=ie.type,Be=ie.bytesPerElement,oe=we===o.INT||we===o.UNSIGNED_INT||Te.gpuType===zm;if(Te.isInterleavedBufferAttribute){const ve=Te.data,Ve=ve.stride,ke=Te.offset;if(ve.isInstancedInterleavedBuffer){for(let Ke=0;Ke<ne.locationSize;Ke++)y(ne.location+Ke,ve.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ke=0;Ke<ne.locationSize;Ke++)S(ne.location+Ke);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Ke=0;Ke<ne.locationSize;Ke++)R(ne.location+Ke,z/ne.locationSize,we,Me,Ve*Be,(ke+z/ne.locationSize*Ke)*Be,oe)}else{if(Te.isInstancedBufferAttribute){for(let ve=0;ve<ne.locationSize;ve++)y(ne.location+ve,Te.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ve=0;ve<ne.locationSize;ve++)S(ne.location+ve);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ve=0;ve<ne.locationSize;ve++)R(ne.location+ve,z/ne.locationSize,we,Me,z*Be,z/ne.locationSize*ve*Be,oe)}}else if(O!==void 0){const Me=O[G];if(Me!==void 0)switch(Me.length){case 2:o.vertexAttrib2fv(ne.location,Me);break;case 3:o.vertexAttrib3fv(ne.location,Me);break;case 4:o.vertexAttrib4fv(ne.location,Me);break;default:o.vertexAttrib1fv(ne.location,Me)}}}}L()}function U(){j();for(const N in a){const k=a[N];for(const J in k){const ee=k[J];for(const le in ee)g(ee[le].object),delete ee[le];delete k[J]}delete a[N]}}function B(N){if(a[N.id]===void 0)return;const k=a[N.id];for(const J in k){const ee=k[J];for(const le in ee)g(ee[le].object),delete ee[le];delete k[J]}delete a[N.id]}function I(N){for(const k in a){const J=a[k];if(J[N.id]===void 0)continue;const ee=J[N.id];for(const le in ee)g(ee[le].object),delete ee[le];delete J[N.id]}}function j(){A(),u=!0,l!==s&&(l=s,d(l.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:j,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function u2(o,e,t){let a;function s(d){a=d}function l(d,g){o.drawArrays(a,d,g),t.update(g,a,1)}function u(d,g,v){v!==0&&(o.drawArraysInstanced(a,d,g,v),t.update(g,a,v))}function f(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,v);let x=0;for(let M=0;M<v;M++)x+=g[M];t.update(x,a,1)}function h(d,g,v,_){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)u(d[M],g[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,g,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E]*_[E];t.update(M,a,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function f2(o,e,t,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==Wi&&a.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const j=I===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ci&&a.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xi&&!j)}function h(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=h(d);g!==d&&(ft("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:w,maxSamples:U,samples:B}}function h2(o){const e=this;let t=null,a=0,s=!1,l=!1;const u=new cr,f=new At,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||s;return s=_,a=v.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,x){const M=v.clippingPlanes,E=v.clipIntersection,S=v.clipShadows,y=o.get(v);if(!s||M===null||M.length===0||l&&!S)l?g(null):d();else{const L=l?0:a,R=L*4;let w=y.clippingState||null;h.value=w,w=g(M,_,R,x);for(let U=0;U!==R;++U)w[U]=t[U];y.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,_,x,M){const E=v!==null?v.length:0;let S=null;if(E!==0){if(S=h.value,M!==!0||S===null){const y=x+E*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let R=0,w=x;R!==E;++R,w+=4)u.copy(v[R]).applyMatrix4(L,f),u.normal.toArray(S,w),S[w+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function d2(o){let e=new WeakMap;function t(u,f){return f===Pp?u.mapping=pr:f===Op&&(u.mapping=Eo),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Pp||f===Op)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new jy(h.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",s),t(d.texture,u.mapping)}else return null}}return u}function s(u){const f=u.target;f.removeEventListener("dispose",s);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const Ps=4,Jx=[.125,.215,.35,.446,.526,.582],fr=20,p2=256,Hl=new dc,Qx=new ct;let gp=null,vp=0,_p=0,xp=!1;const m2=new H;class $x{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,s=100,l={}){const{size:u=256,position:f=m2}=l;gp=this._renderer.getRenderTarget(),vp=this._renderer.getActiveCubeFace(),_p=this._renderer.getActiveMipmapLevel(),xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,a,s,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ny(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ty(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gp,vp,_p),this._renderer.xr.enabled=xp,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gp=this._renderer.getRenderTarget(),vp=this._renderer.getActiveCubeFace(),_p=this._renderer.getActiveMipmapLevel(),xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Di,format:Wi,colorSpace:ci,depthBuffer:!1},s=ey(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ey(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g2(l)),this._blurMaterial=_2(l,e,t),this._ggxMaterial=v2(l,e,t)}return s}_compileMaterial(e){const t=new Pt(new gn,e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,a,s,l){const h=new ii(90,1,t,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Qx),v.toneMapping=va,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new xr,new li({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let y=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,y=!0):(S.color.copy(Qx),y=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(h.up.set(0,d[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[R],l.y,l.z)):w===1?(h.up.set(0,0,d[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[R],l.z)):(h.up.set(0,d[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[R]));const U=this._cubeSize;xo(s,w*U,R>2?U:0,U,U),v.setRenderTarget(s),y&&v.render(E,h),v.render(e,h)}v.toneMapping=x,v.autoClear=_,e.background=L}_textureToCubeUV(e,t){const a=this._renderer,s=e.mapping===pr||e.mapping===Eo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ny()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ty());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;xo(t,0,0,3*h,2*h),a.setRenderTarget(t),a.render(u,Hl)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const h=u.uniforms,d=a/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,x=v*_,{_lodMax:M}=this,E=this._sizeLods[a],S=3*E*(a>M-Ps?a-M+Ps:0),y=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=M-t,xo(l,S,y,3*E,2*E),s.setRenderTarget(l),s.render(f,Hl),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-a,xo(e,S,y,3*E,2*E),s.setRenderTarget(e),s.render(f,Hl)}_blur(e,t,a,s,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,a,s,"latitudinal",l),this._halfBlur(u,e,a,a,s,"longitudinal",l)}_halfBlur(e,t,a,s,l,u,f){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[s];v.material=d;const _=d.uniforms,x=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*fr-1),E=l/M,S=isFinite(l)?1+Math.floor(g*E):fr;S>fr&&ft(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${fr}`);const y=[];let L=0;for(let I=0;I<fr;++I){const j=I/E,A=Math.exp(-j*j/2);y.push(A),I===0?L+=A:I<S&&(L+=2*A)}for(let I=0;I<y.length;I++)y[I]=y[I]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:R}=this;_.dTheta.value=M,_.mipInt.value=R-a;const w=this._sizeLods[s],U=3*w*(s>R-Ps?s-R+Ps:0),B=4*(this._cubeSize-w);xo(t,U,B,3*w,2*w),h.setRenderTarget(t),h.render(v,Hl)}}function g2(o){const e=[],t=[],a=[];let s=o;const l=o-Ps+1+Jx.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);e.push(f);let h=1/f;u>o-Ps?h=Jx[u-o+Ps-1]:u===0&&(h=0),t.push(h);const d=1/(f-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,M=6,E=3,S=2,y=1,L=new Float32Array(E*M*x),R=new Float32Array(S*M*x),w=new Float32Array(y*M*x);for(let B=0;B<x;B++){const I=B%3*2/3-1,j=B>2?0:-1,A=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];L.set(A,E*M*B),R.set(_,S*M*B);const N=[B,B,B,B,B,B];w.set(N,y*M*B)}const U=new gn;U.setAttribute("position",new Vn(L,E)),U.setAttribute("uv",new Vn(R,S)),U.setAttribute("faceIndex",new Vn(w,y)),a.push(new Pt(U,null)),s>Ps&&s--}return{lodMeshes:a,sizeLods:e,sigmas:t}}function ey(o,e,t){const a=new xi(o,e,t);return a.texture.mapping=Sf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function xo(o,e,t,a,s){o.viewport.set(e,t,a,s),o.scissor.set(e,t,a,s)}function v2(o,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Af(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function _2(o,e,t){const a=new Float32Array(fr),s=new H(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Af(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function ty(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function ny(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Af(){return`

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
	`}function x2(o){let e=new WeakMap,t=null;function a(f){if(f&&f.isTexture){const h=f.mapping,d=h===Pp||h===Op,g=h===pr||h===Eo;if(d||g){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new $x(o)),v=d?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const x=f.image;return d&&x&&x.height>0||g&&x&&s(x)?(t===null&&(t=new $x(o)),v=d?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function s(f){let h=0;const d=6;for(let g=0;g<d;g++)f[g]!==void 0&&h++;return h===d}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:u}}function y2(o){const e={};function t(a){if(e[a]!==void 0)return e[a];const s=o.getExtension(a);return e[a]=s,s}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const s=t(a);return s===null&&ic("WebGLRenderer: "+a+" extension not supported."),s}}}function S2(o,e,t,a){const s={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const x=l.get(_);x&&(e.remove(x),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function h(v){const _=v.attributes;for(const x in _)e.update(_[x],o.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,M=v.attributes.position;let E=0;if(x!==null){const L=x.array;E=x.version;for(let R=0,w=L.length;R<w;R+=3){const U=L[R+0],B=L[R+1],I=L[R+2];_.push(U,B,B,I,I,U)}}else if(M!==void 0){const L=M.array;E=M.version;for(let R=0,w=L.length/3-1;R<w;R+=3){const U=R+0,B=R+1,I=R+2;_.push(U,B,B,I,I,U)}}else return;const S=new(By(_)?ky:Vy)(_,1);S.version=E;const y=l.get(v);y&&e.remove(y),l.set(v,S)}function g(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function M2(o,e,t){let a;function s(_){a=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,x){o.drawElements(a,x,l,_*u),t.update(x,a,1)}function d(_,x,M){M!==0&&(o.drawElementsInstanced(a,x,l,_*u,M),t.update(x,a,M))}function g(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,a,1)}function v(_,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/u,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,_,0,E,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*E[L];t.update(y,a,1)}}this.setMode=s,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function b2(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=f*(l/3);break;case o.LINES:t.lines+=f*(l/2);break;case o.LINE_STRIP:t.lines+=f*(l-1);break;case o.LINE_LOOP:t.lines+=f*l;break;case o.POINTS:t.points+=f*l;break;default:xt("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:a}}function T2(o,e,t){const a=new WeakMap,s=new hn;function l(u,f,h){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let N=function(){j.dispose(),a.delete(f),f.removeEventListener("dispose",N)};var x=N;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let w=0;M===!0&&(w=1),E===!0&&(w=2),S===!0&&(w=3);let U=f.attributes.position.count*w,B=1;U>e.maxTextureSize&&(B=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*B*4*v),j=new Fy(I,U,B,v);j.type=Xi,j.needsUpdate=!0;const A=w*4;for(let k=0;k<v;k++){const J=y[k],ee=L[k],le=R[k],Y=U*B*4*k;for(let O=0;O<J.count;O++){const G=O*A;M===!0&&(s.fromBufferAttribute(J,O),I[Y+G+0]=s.x,I[Y+G+1]=s.y,I[Y+G+2]=s.z,I[Y+G+3]=0),E===!0&&(s.fromBufferAttribute(ee,O),I[Y+G+4]=s.x,I[Y+G+5]=s.y,I[Y+G+6]=s.z,I[Y+G+7]=0),S===!0&&(s.fromBufferAttribute(le,O),I[Y+G+8]=s.x,I[Y+G+9]=s.y,I[Y+G+10]=s.z,I[Y+G+11]=le.itemSize===4?s.w:1)}}_={count:v,texture:j,size:new Ie(U,B)},a.set(f,_),f.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",E),h.getUniforms().setValue(o,"morphTargetInfluences",d)}h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:l}}function E2(o,e,t,a){let s=new WeakMap;function l(h){const d=a.render.frame,g=h.geometry,v=e.get(h,g);if(s.get(v)!==d&&(e.update(v),s.set(v,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),s.get(h)!==d&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return v}function u(){s=new WeakMap}function f(h){const d=h.target;d.removeEventListener("dispose",f),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:u}}const A2={[Nm]:"LINEAR_TONE_MAPPING",[Lm]:"REINHARD_TONE_MAPPING",[Um]:"CINEON_TONE_MAPPING",[cc]:"ACES_FILMIC_TONE_MAPPING",[Om]:"AGX_TONE_MAPPING",[Im]:"NEUTRAL_TONE_MAPPING",[Pm]:"CUSTOM_TONE_MAPPING"};function w2(o,e,t,a,s){const l=new xi(e,t,{type:o,depthBuffer:a,stencilBuffer:s}),u=new xi(e,t,{type:Di,depthBuffer:!1,stencilBuffer:!1}),f=new gn;f.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new kt([0,2,0,0,2,0],2));const h=new uS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pt(f,h),g=new dc(-1,1,1,-1,0,1);let v=null,_=null,x=!1,M,E=null,S=[],y=!1;this.setSize=function(L,R){l.setSize(L,R),u.setSize(L,R);for(let w=0;w<S.length;w++){const U=S[w];U.setSize&&U.setSize(L,R)}},this.setEffects=function(L){S=L,y=S.length>0&&S[0].isRenderPass===!0;const R=l.width,w=l.height;for(let U=0;U<S.length;U++){const B=S[U];B.setSize&&B.setSize(R,w)}},this.begin=function(L,R){if(x||L.toneMapping===va&&S.length===0)return!1;if(E=R,R!==null){const w=R.width,U=R.height;(l.width!==w||l.height!==U)&&this.setSize(w,U)}return y===!1&&L.setRenderTarget(l),M=L.toneMapping,L.toneMapping=va,!0},this.hasRenderPass=function(){return y},this.end=function(L,R){L.toneMapping=M,x=!0;let w=l,U=u;for(let B=0;B<S.length;B++){const I=S[B];if(I.enabled!==!1&&(I.render(L,U,w,R),I.needsSwap!==!1)){const j=w;w=U,U=j}}if(v!==L.outputColorSpace||_!==L.toneMapping){v=L.outputColorSpace,_=L.toneMapping,h.defines={},Bt.getTransfer(v)===Yt&&(h.defines.SRGB_TRANSFER="");const B=A2[_];B&&(h.defines[B]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,L.setRenderTarget(E),L.render(d,g),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const vS=new On,Tm=new sc(1,1),_S=new Fy,xS=new XT,yS=new qy,iy=[],ay=[],sy=new Float32Array(16),ry=new Float32Array(9),oy=new Float32Array(4);function Bo(o,e,t){const a=o[0];if(a<=0||a>0)return o;const s=e*t;let l=iy[s];if(l===void 0&&(l=new Float32Array(s),iy[s]=l),e!==0){a.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,o[u].toArray(l,f)}return l}function In(o,e){if(o.length!==e.length)return!1;for(let t=0,a=o.length;t<a;t++)if(o[t]!==e[t])return!1;return!0}function zn(o,e){for(let t=0,a=e.length;t<a;t++)o[t]=e[t]}function wf(o,e){let t=ay[e];t===void 0&&(t=new Int32Array(e),ay[e]=t);for(let a=0;a!==e;++a)t[a]=o.allocateTextureUnit();return t}function R2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function C2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;o.uniform2fv(this.addr,e),zn(t,e)}}function D2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;o.uniform3fv(this.addr,e),zn(t,e)}}function N2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;o.uniform4fv(this.addr,e),zn(t,e)}}function L2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(In(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),zn(t,e)}else{if(In(t,a))return;oy.set(a),o.uniformMatrix2fv(this.addr,!1,oy),zn(t,a)}}function U2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(In(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),zn(t,e)}else{if(In(t,a))return;ry.set(a),o.uniformMatrix3fv(this.addr,!1,ry),zn(t,a)}}function P2(o,e){const t=this.cache,a=e.elements;if(a===void 0){if(In(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),zn(t,e)}else{if(In(t,a))return;sy.set(a),o.uniformMatrix4fv(this.addr,!1,sy),zn(t,a)}}function O2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function I2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;o.uniform2iv(this.addr,e),zn(t,e)}}function z2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;o.uniform3iv(this.addr,e),zn(t,e)}}function B2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;o.uniform4iv(this.addr,e),zn(t,e)}}function F2(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function H2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;o.uniform2uiv(this.addr,e),zn(t,e)}}function G2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;o.uniform3uiv(this.addr,e),zn(t,e)}}function V2(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;o.uniform4uiv(this.addr,e),zn(t,e)}}function k2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Tm.compareFunction=t.isReversedDepthBuffer()?qm:Wm,l=Tm):l=vS,t.setTexture2D(e||l,s)}function X2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),t.setTexture3D(e||xS,s)}function W2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),t.setTextureCube(e||yS,s)}function q2(o,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),t.setTexture2DArray(e||_S,s)}function j2(o){switch(o){case 5126:return R2;case 35664:return C2;case 35665:return D2;case 35666:return N2;case 35674:return L2;case 35675:return U2;case 35676:return P2;case 5124:case 35670:return O2;case 35667:case 35671:return I2;case 35668:case 35672:return z2;case 35669:case 35673:return B2;case 5125:return F2;case 36294:return H2;case 36295:return G2;case 36296:return V2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return X2;case 35680:case 36300:case 36308:case 36293:return W2;case 36289:case 36303:case 36311:case 36292:return q2}}function Y2(o,e){o.uniform1fv(this.addr,e)}function Z2(o,e){const t=Bo(e,this.size,2);o.uniform2fv(this.addr,t)}function K2(o,e){const t=Bo(e,this.size,3);o.uniform3fv(this.addr,t)}function J2(o,e){const t=Bo(e,this.size,4);o.uniform4fv(this.addr,t)}function Q2(o,e){const t=Bo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function $2(o,e){const t=Bo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function eR(o,e){const t=Bo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function tR(o,e){o.uniform1iv(this.addr,e)}function nR(o,e){o.uniform2iv(this.addr,e)}function iR(o,e){o.uniform3iv(this.addr,e)}function aR(o,e){o.uniform4iv(this.addr,e)}function sR(o,e){o.uniform1uiv(this.addr,e)}function rR(o,e){o.uniform2uiv(this.addr,e)}function oR(o,e){o.uniform3uiv(this.addr,e)}function lR(o,e){o.uniform4uiv(this.addr,e)}function cR(o,e,t){const a=this.cache,s=e.length,l=wf(t,s);In(a,l)||(o.uniform1iv(this.addr,l),zn(a,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=Tm:u=vS;for(let f=0;f!==s;++f)t.setTexture2D(e[f]||u,l[f])}function uR(o,e,t){const a=this.cache,s=e.length,l=wf(t,s);In(a,l)||(o.uniform1iv(this.addr,l),zn(a,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||xS,l[u])}function fR(o,e,t){const a=this.cache,s=e.length,l=wf(t,s);In(a,l)||(o.uniform1iv(this.addr,l),zn(a,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||yS,l[u])}function hR(o,e,t){const a=this.cache,s=e.length,l=wf(t,s);In(a,l)||(o.uniform1iv(this.addr,l),zn(a,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||_S,l[u])}function dR(o){switch(o){case 5126:return Y2;case 35664:return Z2;case 35665:return K2;case 35666:return J2;case 35674:return Q2;case 35675:return $2;case 35676:return eR;case 5124:case 35670:return tR;case 35667:case 35671:return nR;case 35668:case 35672:return iR;case 35669:case 35673:return aR;case 5125:return sR;case 36294:return rR;case 36295:return oR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return uR;case 35680:case 36300:case 36308:case 36293:return fR;case 36289:case 36303:case 36311:case 36292:return hR}}class pR{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=j2(t.type)}}class mR{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dR(t.type)}}class gR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(e,t[f.id],a)}}}const yp=/(\w+)(\])?(\[|\.)?/g;function ly(o,e){o.seq.push(e),o.map[e.id]=e}function vR(o,e,t){const a=o.name,s=a.length;for(yp.lastIndex=0;;){const l=yp.exec(a),u=yp.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&u+2===s){ly(t,d===void 0?new pR(f,o,e):new mR(f,o,e));break}else{let v=t.map[f];v===void 0&&(v=new gR(f),ly(t,v)),t=v}}}class hf{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);vR(f,h,this)}const s=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,a,s){const l=this.map[t];l!==void 0&&l.setValue(e,a,s)}setOptional(e,t,a){const s=t[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,t,a,s){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=a[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,s)}}static seqWithValue(e,t){const a=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&a.push(u)}return a}}function cy(o,e,t){const a=o.createShader(e);return o.shaderSource(a,t),o.compileShader(a),a}const _R=37297;let xR=0;function yR(o,e){const t=o.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return a.join(`
`)}const uy=new At;function SR(o){Bt._getMatrix(uy,Bt.workingColorSpace,o);const e=`mat3( ${uy.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(o)){case mf:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function fy(o,e,t){const a=o.getShaderParameter(e,o.COMPILE_STATUS),l=(o.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+yR(o.getShaderSource(e),f)}else return l}function MR(o,e){const t=SR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const bR={[Nm]:"Linear",[Lm]:"Reinhard",[Um]:"Cineon",[cc]:"ACESFilmic",[Om]:"AgX",[Im]:"Neutral",[Pm]:"Custom"};function TR(o,e){const t=bR[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tf=new H;function ER(){Bt.getLuminanceCoefficients(tf);const o=tf.x.toFixed(4),e=tf.y.toFixed(4),t=tf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function wR(o){const e=[];for(const t in o){const a=o[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function RR(o,e){const t={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(e,s),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:o.getAttribLocation(e,u),locationSize:f}}return t}function ql(o){return o!==""}function hy(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dy(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Em(o){return o.replace(CR,NR)}const DR=new Map;function NR(o,e){let t=Ct[e];if(t===void 0){const a=DR.get(e);if(a!==void 0)t=Ct[a],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Em(t)}const LR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function py(o){return o.replace(LR,UR)}function UR(o,e,t,a){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function my(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const PR={[rf]:"SHADOWMAP_TYPE_PCF",[kl]:"SHADOWMAP_TYPE_VSM"};function OR(o){return PR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IR={[pr]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE",[Sf]:"ENVMAP_TYPE_CUBE_UV"};function zR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":IR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const BR={[Eo]:"ENVMAP_MODE_REFRACTION"};function FR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":BR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HR={[Ry]:"ENVMAP_BLENDING_MULTIPLY",[oT]:"ENVMAP_BLENDING_MIX",[lT]:"ENVMAP_BLENDING_ADD"};function GR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":HR[o.combine]||"ENVMAP_BLENDING_NONE"}function VR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function kR(o,e,t,a){const s=o.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=OR(t),d=zR(t),g=FR(t),v=GR(t),_=VR(t),x=AR(t),M=wR(l),E=s.createProgram();let S,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ql).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ql).join(`
`),y.length>0&&(y+=`
`)):(S=[my(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),y=[my(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==va?"#define TONE_MAPPING":"",t.toneMapping!==va?Ct.tonemapping_pars_fragment:"",t.toneMapping!==va?TR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,MR("linearToOutputTexel",t.outputColorSpace),ER(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ql).join(`
`)),u=Em(u),u=hy(u,t),u=dy(u,t),f=Em(f),f=hy(f,t),f=dy(f,t),u=py(u),f=py(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=L+S+u,w=L+y+f,U=cy(s,s.VERTEX_SHADER,R),B=cy(s,s.FRAGMENT_SHADER,w);s.attachShader(E,U),s.attachShader(E,B),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(k){if(o.debug.checkShaderErrors){const J=s.getProgramInfoLog(E)||"",ee=s.getShaderInfoLog(U)||"",le=s.getShaderInfoLog(B)||"",Y=J.trim(),O=ee.trim(),G=le.trim();let ne=!0,Te=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ne=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,U,B);else{const Me=fy(s,U,"vertex"),z=fy(s,B,"fragment");xt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Y+`
`+Me+`
`+z)}else Y!==""?ft("WebGLProgram: Program Info Log:",Y):(O===""||G==="")&&(Te=!1);Te&&(k.diagnostics={runnable:ne,programLog:Y,vertexShader:{log:O,prefix:S},fragmentShader:{log:G,prefix:y}})}s.deleteShader(U),s.deleteShader(B),j=new hf(s,E),A=RR(s,E)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(E,_R)),N},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=B,this}let XR=0;class WR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new qR(e),t.set(e,a)),a}}class qR{constructor(e){this.id=XR++,this.code=e,this.usedTimes=0}}function jR(o,e,t,a,s,l,u){const f=new Hy,h=new WR,d=new Set,g=[],v=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return d.add(A),A===0?"uv":`uv${A}`}function S(A,N,k,J,ee){const le=J.fog,Y=ee.geometry,O=A.isMeshStandardMaterial?J.environment:null,G=(A.isMeshStandardMaterial?t:e).get(A.envMap||O),ne=G&&G.mapping===Sf?G.image.height:null,Te=M[A.type];A.precision!==null&&(x=s.getMaxPrecision(A.precision),x!==A.precision&&ft("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const Me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,z=Me!==void 0?Me.length:0;let ie=0;Y.morphAttributes.position!==void 0&&(ie=1),Y.morphAttributes.normal!==void 0&&(ie=2),Y.morphAttributes.color!==void 0&&(ie=3);let _e,we,Be,oe;if(Te){const Ue=da[Te];_e=Ue.vertexShader,we=Ue.fragmentShader}else _e=A.vertexShader,we=A.fragmentShader,h.update(A),Be=h.getVertexShaderID(A),oe=h.getFragmentShaderID(A);const ve=o.getRenderTarget(),Ve=o.state.buffers.depth.getReversed(),ke=ee.isInstancedMesh===!0,Ke=ee.isBatchedMesh===!0,vt=!!A.map,wt=!!A.matcap,pt=!!G,Ee=!!A.aoMap,Pe=!!A.lightMap,Re=!!A.bumpMap,je=!!A.normalMap,F=!!A.displacementMap,at=!!A.emissiveMap,Ye=!!A.metalnessMap,lt=!!A.roughnessMap,He=A.anisotropy>0,P=A.clearcoat>0,T=A.dispersion>0,Z=A.iridescence>0,pe=A.sheen>0,W=A.transmission>0,V=He&&!!A.anisotropyMap,ae=P&&!!A.clearcoatMap,xe=P&&!!A.clearcoatNormalMap,ye=P&&!!A.clearcoatRoughnessMap,ce=Z&&!!A.iridescenceMap,he=Z&&!!A.iridescenceThicknessMap,Le=pe&&!!A.sheenColorMap,We=pe&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Fe=!!A.specularColorMap,Ge=!!A.specularIntensityMap,q=W&&!!A.transmissionMap,Oe=W&&!!A.thicknessMap,De=!!A.gradientMap,Xe=!!A.alphaMap,Ne=A.alphaTest>0,be=!!A.alphaHash,ze=!!A.extensions;let _t=va;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(_t=o.toneMapping);const Ft={shaderID:Te,shaderType:A.type,shaderName:A.name,vertexShader:_e,fragmentShader:we,defines:A.defines,customVertexShaderID:Be,customFragmentShaderID:oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Ke,batchingColor:Ke&&ee._colorsTexture!==null,instancing:ke,instancingColor:ke&&ee.instanceColor!==null,instancingMorph:ke&&ee.morphTexture!==null,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ci,alphaToCoverage:!!A.alphaToCoverage,map:vt,matcap:wt,envMap:pt,envMapMode:pt&&G.mapping,envMapCubeUVHeight:ne,aoMap:Ee,lightMap:Pe,bumpMap:Re,normalMap:je,displacementMap:F,emissiveMap:at,normalMapObjectSpace:je&&A.normalMapType===dT,normalMapTangentSpace:je&&A.normalMapType===Xm,metalnessMap:Ye,roughnessMap:lt,anisotropy:He,anisotropyMap:V,clearcoat:P,clearcoatMap:ae,clearcoatNormalMap:xe,clearcoatRoughnessMap:ye,dispersion:T,iridescence:Z,iridescenceMap:ce,iridescenceThicknessMap:he,sheen:pe,sheenColorMap:Le,sheenRoughnessMap:We,specularMap:qe,specularColorMap:Fe,specularIntensityMap:Ge,transmission:W,transmissionMap:q,thicknessMap:Oe,gradientMap:De,opaque:A.transparent===!1&&A.blending===Ya&&A.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Ne,alphaHash:be,combine:A.combine,mapUv:vt&&E(A.map.channel),aoMapUv:Ee&&E(A.aoMap.channel),lightMapUv:Pe&&E(A.lightMap.channel),bumpMapUv:Re&&E(A.bumpMap.channel),normalMapUv:je&&E(A.normalMap.channel),displacementMapUv:F&&E(A.displacementMap.channel),emissiveMapUv:at&&E(A.emissiveMap.channel),metalnessMapUv:Ye&&E(A.metalnessMap.channel),roughnessMapUv:lt&&E(A.roughnessMap.channel),anisotropyMapUv:V&&E(A.anisotropyMap.channel),clearcoatMapUv:ae&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:xe&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:he&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:We&&E(A.sheenRoughnessMap.channel),specularMapUv:qe&&E(A.specularMap.channel),specularColorMapUv:Fe&&E(A.specularColorMap.channel),specularIntensityMapUv:Ge&&E(A.specularIntensityMap.channel),transmissionMapUv:q&&E(A.transmissionMap.channel),thicknessMapUv:Oe&&E(A.thicknessMap.channel),alphaMapUv:Xe&&E(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(je||He),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!Y.attributes.uv&&(vt||Xe),fog:!!le,useFog:A.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ve,skinning:ee.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ie,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:_t,decodeVideoTexture:vt&&A.map.isVideoTexture===!0&&Bt.getTransfer(A.map.colorSpace)===Yt,decodeVideoTextureEmissive:at&&A.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(A.emissiveMap.colorSpace)===Yt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===na,flipSided:A.side===Qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ze&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&A.extensions.multiDraw===!0||Ke)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ft.vertexUv1s=d.has(1),Ft.vertexUv2s=d.has(2),Ft.vertexUv3s=d.has(3),d.clear(),Ft}function y(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)N.push(k),N.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(L(N,A),R(N,A),N.push(o.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function L(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function R(A,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),A.push(f.mask)}function w(A){const N=M[A.type];let k;if(N){const J=da[N];k=Co.clone(J.uniforms)}else k=A.uniforms;return k}function U(A,N){let k=v.get(N);return k!==void 0?++k.usedTimes:(k=new kR(o,N,A,l),g.push(k),v.set(N,k)),k}function B(A){if(--A.usedTimes===0){const N=g.indexOf(A);g[N]=g[g.length-1],g.pop(),v.delete(A.cacheKey),A.destroy()}}function I(A){h.remove(A)}function j(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:U,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:j}}function YR(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function s(u,f,h){o.get(u)[f]=h}function l(){o=new WeakMap}return{has:e,get:t,remove:a,update:s,dispose:l}}function ZR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function gy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function vy(){const o=[];let e=0;const t=[],a=[],s=[];function l(){e=0,t.length=0,a.length=0,s.length=0}function u(v,_,x,M,E,S){let y=o[e];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:M,renderOrder:v.renderOrder,z:E,group:S},o[e]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=v.renderOrder,y.z=E,y.group=S),e++,y}function f(v,_,x,M,E,S){const y=u(v,_,x,M,E,S);x.transmission>0?a.push(y):x.transparent===!0?s.push(y):t.push(y)}function h(v,_,x,M,E,S){const y=u(v,_,x,M,E,S);x.transmission>0?a.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function d(v,_){t.length>1&&t.sort(v||ZR),a.length>1&&a.sort(_||gy),s.length>1&&s.sort(_||gy)}function g(){for(let v=e,_=o.length;v<_;v++){const x=o[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:a,transparent:s,init:l,push:f,unshift:h,finish:g,sort:d}}function KR(){let o=new WeakMap;function e(a,s){const l=o.get(a);let u;return l===void 0?(u=new vy,o.set(a,[u])):s>=l.length?(u=new vy,l.push(u)):u=l[s],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function JR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ct};break;case"SpotLight":t={position:new H,direction:new H,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new H,halfWidth:new H,halfHeight:new H};break}return o[e.id]=t,t}}}function QR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let $R=0;function eC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function tC(o){const e=new JR,t=QR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new H);const s=new H,l=new bt,u=new bt;function f(d){let g=0,v=0,_=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,L=0,R=0,w=0,U=0,B=0,I=0;d.sort(eC);for(let A=0,N=d.length;A<N;A++){const k=d[A],J=k.color,ee=k.intensity,le=k.distance;let Y=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ao?Y=k.shadow.map.texture:Y=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=J.r*ee,v+=J.g*ee,_+=J.b*ee;else if(k.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(k.sh.coefficients[O],ee);I++}else if(k.isDirectionalLight){const O=e.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,ne=t.get(k);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,a.directionalShadow[x]=ne,a.directionalShadowMap[x]=Y,a.directionalShadowMatrix[x]=k.shadow.matrix,L++}a.directional[x]=O,x++}else if(k.isSpotLight){const O=e.get(k);O.position.setFromMatrixPosition(k.matrixWorld),O.color.copy(J).multiplyScalar(ee),O.distance=le,O.coneCos=Math.cos(k.angle),O.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),O.decay=k.decay,a.spot[E]=O;const G=k.shadow;if(k.map&&(a.spotLightMap[U]=k.map,U++,G.updateMatrices(k),k.castShadow&&B++),a.spotLightMatrix[E]=G.matrix,k.castShadow){const ne=t.get(k);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,a.spotShadow[E]=ne,a.spotShadowMap[E]=Y,w++}E++}else if(k.isRectAreaLight){const O=e.get(k);O.color.copy(J).multiplyScalar(ee),O.halfWidth.set(k.width*.5,0,0),O.halfHeight.set(0,k.height*.5,0),a.rectArea[S]=O,S++}else if(k.isPointLight){const O=e.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),O.distance=k.distance,O.decay=k.decay,k.castShadow){const G=k.shadow,ne=t.get(k);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,a.pointShadow[M]=ne,a.pointShadowMap[M]=Y,a.pointShadowMatrix[M]=k.shadow.matrix,R++}a.point[M]=O,M++}else if(k.isHemisphereLight){const O=e.get(k);O.skyColor.copy(k.color).multiplyScalar(ee),O.groundColor.copy(k.groundColor).multiplyScalar(ee),a.hemi[y]=O,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=$e.LTC_FLOAT_1,a.rectAreaLTC2=$e.LTC_FLOAT_2):(a.rectAreaLTC1=$e.LTC_HALF_1,a.rectAreaLTC2=$e.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const j=a.hash;(j.directionalLength!==x||j.pointLength!==M||j.spotLength!==E||j.rectAreaLength!==S||j.hemiLength!==y||j.numDirectionalShadows!==L||j.numPointShadows!==R||j.numSpotShadows!==w||j.numSpotMaps!==U||j.numLightProbes!==I)&&(a.directional.length=x,a.spot.length=E,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=R,a.pointShadowMap.length=R,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=R,a.spotLightMatrix.length=w+U-B,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=I,j.directionalLength=x,j.pointLength=M,j.spotLength=E,j.rectAreaLength=S,j.hemiLength=y,j.numDirectionalShadows=L,j.numPointShadows=R,j.numSpotShadows=w,j.numSpotMaps=U,j.numLightProbes=I,a.version=$R++)}function h(d,g){let v=0,_=0,x=0,M=0,E=0;const S=g.matrixWorldInverse;for(let y=0,L=d.length;y<L;y++){const R=d[y];if(R.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),v++}else if(R.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),x++}else if(R.isRectAreaLight){const w=a.rectArea[M];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(S),_++}else if(R.isHemisphereLight){const w=a.hemi[E];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(S),E++}}}return{setup:f,setupView:h,state:a}}function _y(o){const e=new tC(o),t=[],a=[];function s(g){d.camera=g,t.length=0,a.length=0}function l(g){t.push(g)}function u(g){a.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function nC(o){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let f;return u===void 0?(f=new _y(o),e.set(s,[f])):l>=u.length?(f=new _y(o),u.push(f)):f=u[l],f}function a(){e=new WeakMap}return{get:t,dispose:a}}const iC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aC=`uniform sampler2D shadow_pass;
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
}`,sC=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],rC=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],xy=new bt,Gl=new H,Sp=new H;function oC(o,e,t){let a=new Jm;const s=new Ie,l=new Ie,u=new hn,f=new K1,h=new J1,d={},g=t.maxTextureSize,v={[Ka]:Qn,[Qn]:Ka,[na]:na},_=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:iC,fragmentShader:aC}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new gn;M.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Pt(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let y=this.type;this.render=function(B,I,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;B.type===wy&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=rf);const A=o.getRenderTarget(),N=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),J=o.state;J.setBlending(ga),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ee=y!==this.type;ee&&I.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(Y=>Y.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,Y=B.length;le<Y;le++){const O=B[le],G=O.shadow;if(G===void 0){ft("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ne=G.getFrameExtents();if(s.multiply(ne),l.copy(G.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(l.x=Math.floor(g/ne.x),s.x=l.x*ne.x,G.mapSize.x=l.x),s.y>g&&(l.y=Math.floor(g/ne.y),s.y=l.y*ne.y,G.mapSize.y=l.y)),G.map===null||ee===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===kl){if(O.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new xi(s.x,s.y,{format:Ao,type:Di,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new sc(s.x,s.y,Xi),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=Ja,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un}else{O.isPointLight?(G.map=new jy(s.x),G.map.depthTexture=new v1(s.x,_a)):(G.map=new xi(s.x,s.y),G.map.depthTexture=new sc(s.x,s.y,_a)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=Ja;const Me=o.state.buffers.depth.getReversed();this.type===rf?(G.map.depthTexture.compareFunction=Me?qm:Wm,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un)}G.camera.updateProjectionMatrix()}const Te=G.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<Te;Me++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,Me),o.clear();else{Me===0&&(o.setRenderTarget(G.map),o.clear());const z=G.getViewport(Me);u.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),J.viewport(u)}if(O.isPointLight){const z=G.camera,ie=G.matrix,_e=O.distance||z.far;_e!==z.far&&(z.far=_e,z.updateProjectionMatrix()),Gl.setFromMatrixPosition(O.matrixWorld),z.position.copy(Gl),Sp.copy(z.position),Sp.add(sC[Me]),z.up.copy(rC[Me]),z.lookAt(Sp),z.updateMatrixWorld(),ie.makeTranslation(-Gl.x,-Gl.y,-Gl.z),xy.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xy,z.coordinateSystem,z.reversedDepth)}else G.updateMatrices(O);a=G.getFrustum(),w(I,j,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===kl&&L(G,j),G.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(A,N,k)};function L(B,I){const j=e.update(E);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new xi(s.x,s.y,{format:Ao,type:Di})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(I,null,j,_,E,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(I,null,j,x,E,null)}function R(B,I,j,A){let N=null;const k=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)N=k;else if(N=j.isPointLight===!0?h:f,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=N.uuid,ee=I.uuid;let le=d[J];le===void 0&&(le={},d[J]=le);let Y=le[ee];Y===void 0&&(Y=N.clone(),le[ee]=Y,I.addEventListener("dispose",U)),N=Y}if(N.visible=I.visible,N.wireframe=I.wireframe,A===kl?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:v[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,j.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const J=o.properties.get(N);J.light=j}return N}function w(B,I,j,A,N){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&N===kl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const ee=e.update(B),le=B.material;if(Array.isArray(le)){const Y=ee.groups;for(let O=0,G=Y.length;O<G;O++){const ne=Y[O],Te=le[ne.materialIndex];if(Te&&Te.visible){const Me=R(B,Te,A,N);B.onBeforeShadow(o,B,I,j,ee,Me,ne),o.renderBufferDirect(j,null,ee,Me,B,ne),B.onAfterShadow(o,B,I,j,ee,Me,ne)}}}else if(le.visible){const Y=R(B,le,A,N);B.onBeforeShadow(o,B,I,j,ee,Y,null),o.renderBufferDirect(j,null,ee,Y,B,null),B.onAfterShadow(o,B,I,j,ee,Y,null)}}const J=B.children;for(let ee=0,le=J.length;ee<le;ee++)w(J[ee],I,j,A,N)}function U(B){B.target.removeEventListener("dispose",U);for(const j in d){const A=d[j],N=B.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}const lC={[wp]:Rp,[Cp]:Lp,[Dp]:Up,[To]:Np,[Rp]:wp,[Lp]:Cp,[Up]:Dp,[Np]:To};function cC(o,e){function t(){let q=!1;const Oe=new hn;let De=null;const Xe=new hn(0,0,0,0);return{setMask:function(Ne){De!==Ne&&!q&&(o.colorMask(Ne,Ne,Ne,Ne),De=Ne)},setLocked:function(Ne){q=Ne},setClear:function(Ne,be,ze,_t,Ft){Ft===!0&&(Ne*=_t,be*=_t,ze*=_t),Oe.set(Ne,be,ze,_t),Xe.equals(Oe)===!1&&(o.clearColor(Ne,be,ze,_t),Xe.copy(Oe))},reset:function(){q=!1,De=null,Xe.set(-1,0,0,0)}}}function a(){let q=!1,Oe=!1,De=null,Xe=null,Ne=null;return{setReversed:function(be){if(Oe!==be){const ze=e.get("EXT_clip_control");be?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Oe=be;const _t=Ne;Ne=null,this.setClear(_t)}},getReversed:function(){return Oe},setTest:function(be){be?ve(o.DEPTH_TEST):Ve(o.DEPTH_TEST)},setMask:function(be){De!==be&&!q&&(o.depthMask(be),De=be)},setFunc:function(be){if(Oe&&(be=lC[be]),Xe!==be){switch(be){case wp:o.depthFunc(o.NEVER);break;case Rp:o.depthFunc(o.ALWAYS);break;case Cp:o.depthFunc(o.LESS);break;case To:o.depthFunc(o.LEQUAL);break;case Dp:o.depthFunc(o.EQUAL);break;case Np:o.depthFunc(o.GEQUAL);break;case Lp:o.depthFunc(o.GREATER);break;case Up:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xe=be}},setLocked:function(be){q=be},setClear:function(be){Ne!==be&&(Oe&&(be=1-be),o.clearDepth(be),Ne=be)},reset:function(){q=!1,De=null,Xe=null,Ne=null,Oe=!1}}}function s(){let q=!1,Oe=null,De=null,Xe=null,Ne=null,be=null,ze=null,_t=null,Ft=null;return{setTest:function(Ue){q||(Ue?ve(o.STENCIL_TEST):Ve(o.STENCIL_TEST))},setMask:function(Ue){Oe!==Ue&&!q&&(o.stencilMask(Ue),Oe=Ue)},setFunc:function(Ue,Je,it){(De!==Ue||Xe!==Je||Ne!==it)&&(o.stencilFunc(Ue,Je,it),De=Ue,Xe=Je,Ne=it)},setOp:function(Ue,Je,it){(be!==Ue||ze!==Je||_t!==it)&&(o.stencilOp(Ue,Je,it),be=Ue,ze=Je,_t=it)},setLocked:function(Ue){q=Ue},setClear:function(Ue){Ft!==Ue&&(o.clearStencil(Ue),Ft=Ue)},reset:function(){q=!1,Oe=null,De=null,Xe=null,Ne=null,be=null,ze=null,_t=null,Ft=null}}}const l=new t,u=new a,f=new s,h=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,R=null,w=null,U=null,B=null,I=new ct(0,0,0),j=0,A=!1,N=null,k=null,J=null,ee=null,le=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const ne=o.getParameter(o.VERSION);ne.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ne)[1]),O=G>=1):ne.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),O=G>=2);let Te=null,Me={};const z=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),_e=new hn().fromArray(z),we=new hn().fromArray(ie);function Be(q,Oe,De,Xe){const Ne=new Uint8Array(4),be=o.createTexture();o.bindTexture(q,be),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ze=0;ze<De;ze++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Oe,0,o.RGBA,1,1,Xe,0,o.RGBA,o.UNSIGNED_BYTE,Ne):o.texImage2D(Oe+ze,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ne);return be}const oe={};oe[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),oe[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),oe[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(o.DEPTH_TEST),u.setFunc(To),Re(!1),je($_),ve(o.CULL_FACE),Ee(ga);function ve(q){g[q]!==!0&&(o.enable(q),g[q]=!0)}function Ve(q){g[q]!==!1&&(o.disable(q),g[q]=!1)}function ke(q,Oe){return v[q]!==Oe?(o.bindFramebuffer(q,Oe),v[q]=Oe,q===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Oe),q===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ke(q,Oe){let De=x,Xe=!1;if(q){De=_.get(Oe),De===void 0&&(De=[],_.set(Oe,De));const Ne=q.textures;if(De.length!==Ne.length||De[0]!==o.COLOR_ATTACHMENT0){for(let be=0,ze=Ne.length;be<ze;be++)De[be]=o.COLOR_ATTACHMENT0+be;De.length=Ne.length,Xe=!0}}else De[0]!==o.BACK&&(De[0]=o.BACK,Xe=!0);Xe&&o.drawBuffers(De)}function vt(q){return M!==q?(o.useProgram(q),M=q,!0):!1}const wt={[ur]:o.FUNC_ADD,[Xb]:o.FUNC_SUBTRACT,[Wb]:o.FUNC_REVERSE_SUBTRACT};wt[qb]=o.MIN,wt[jb]=o.MAX;const pt={[Yb]:o.ZERO,[Zb]:o.ONE,[Kb]:o.SRC_COLOR,[Ep]:o.SRC_ALPHA,[nT]:o.SRC_ALPHA_SATURATE,[eT]:o.DST_COLOR,[Qb]:o.DST_ALPHA,[Jb]:o.ONE_MINUS_SRC_COLOR,[Ap]:o.ONE_MINUS_SRC_ALPHA,[tT]:o.ONE_MINUS_DST_COLOR,[$b]:o.ONE_MINUS_DST_ALPHA,[iT]:o.CONSTANT_COLOR,[aT]:o.ONE_MINUS_CONSTANT_COLOR,[sT]:o.CONSTANT_ALPHA,[rT]:o.ONE_MINUS_CONSTANT_ALPHA};function Ee(q,Oe,De,Xe,Ne,be,ze,_t,Ft,Ue){if(q===ga){E===!0&&(Ve(o.BLEND),E=!1);return}if(E===!1&&(ve(o.BLEND),E=!0),q!==kb){if(q!==S||Ue!==A){if((y!==ur||w!==ur)&&(o.blendEquation(o.FUNC_ADD),y=ur,w=ur),Ue)switch(q){case Ya:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vi:o.blendFunc(o.ONE,o.ONE);break;case ex:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:xt("WebGLState: Invalid blending: ",q);break}else switch(q){case Ya:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vi:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ex:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tx:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",q);break}L=null,R=null,U=null,B=null,I.set(0,0,0),j=0,S=q,A=Ue}return}Ne=Ne||Oe,be=be||De,ze=ze||Xe,(Oe!==y||Ne!==w)&&(o.blendEquationSeparate(wt[Oe],wt[Ne]),y=Oe,w=Ne),(De!==L||Xe!==R||be!==U||ze!==B)&&(o.blendFuncSeparate(pt[De],pt[Xe],pt[be],pt[ze]),L=De,R=Xe,U=be,B=ze),(_t.equals(I)===!1||Ft!==j)&&(o.blendColor(_t.r,_t.g,_t.b,Ft),I.copy(_t),j=Ft),S=q,A=!1}function Pe(q,Oe){q.side===na?Ve(o.CULL_FACE):ve(o.CULL_FACE);let De=q.side===Qn;Oe&&(De=!De),Re(De),q.blending===Ya&&q.transparent===!1?Ee(ga):Ee(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const Xe=q.stencilWrite;f.setTest(Xe),Xe&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),at(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Ve(o.SAMPLE_ALPHA_TO_COVERAGE)}function Re(q){N!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),N=q)}function je(q){q!==Gb?(ve(o.CULL_FACE),q!==k&&(q===$_?o.cullFace(o.BACK):q===Vb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ve(o.CULL_FACE),k=q}function F(q){q!==J&&(O&&o.lineWidth(q),J=q)}function at(q,Oe,De){q?(ve(o.POLYGON_OFFSET_FILL),(ee!==Oe||le!==De)&&(o.polygonOffset(Oe,De),ee=Oe,le=De)):Ve(o.POLYGON_OFFSET_FILL)}function Ye(q){q?ve(o.SCISSOR_TEST):Ve(o.SCISSOR_TEST)}function lt(q){q===void 0&&(q=o.TEXTURE0+Y-1),Te!==q&&(o.activeTexture(q),Te=q)}function He(q,Oe,De){De===void 0&&(Te===null?De=o.TEXTURE0+Y-1:De=Te);let Xe=Me[De];Xe===void 0&&(Xe={type:void 0,texture:void 0},Me[De]=Xe),(Xe.type!==q||Xe.texture!==Oe)&&(Te!==De&&(o.activeTexture(De),Te=De),o.bindTexture(q,Oe||oe[q]),Xe.type=q,Xe.texture=Oe)}function P(){const q=Me[Te];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(q){xt("WebGLState:",q)}}function Z(){try{o.compressedTexImage3D(...arguments)}catch(q){xt("WebGLState:",q)}}function pe(){try{o.texSubImage2D(...arguments)}catch(q){xt("WebGLState:",q)}}function W(){try{o.texSubImage3D(...arguments)}catch(q){xt("WebGLState:",q)}}function V(){try{o.compressedTexSubImage2D(...arguments)}catch(q){xt("WebGLState:",q)}}function ae(){try{o.compressedTexSubImage3D(...arguments)}catch(q){xt("WebGLState:",q)}}function xe(){try{o.texStorage2D(...arguments)}catch(q){xt("WebGLState:",q)}}function ye(){try{o.texStorage3D(...arguments)}catch(q){xt("WebGLState:",q)}}function ce(){try{o.texImage2D(...arguments)}catch(q){xt("WebGLState:",q)}}function he(){try{o.texImage3D(...arguments)}catch(q){xt("WebGLState:",q)}}function Le(q){_e.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),_e.copy(q))}function We(q){we.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),we.copy(q))}function qe(q,Oe){let De=d.get(Oe);De===void 0&&(De=new WeakMap,d.set(Oe,De));let Xe=De.get(q);Xe===void 0&&(Xe=o.getUniformBlockIndex(Oe,q.name),De.set(q,Xe))}function Fe(q,Oe){const Xe=d.get(Oe).get(q);h.get(Oe)!==Xe&&(o.uniformBlockBinding(Oe,Xe,q.__bindingPointIndex),h.set(Oe,Xe))}function Ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Te=null,Me={},v={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,R=null,w=null,U=null,B=null,I=new ct(0,0,0),j=0,A=!1,N=null,k=null,J=null,ee=null,le=null,_e.set(0,0,o.canvas.width,o.canvas.height),we.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:Ve,bindFramebuffer:ke,drawBuffers:Ke,useProgram:vt,setBlending:Ee,setMaterial:Pe,setFlipSided:Re,setCullFace:je,setLineWidth:F,setPolygonOffset:at,setScissorTest:Ye,activeTexture:lt,bindTexture:He,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:Z,texImage2D:ce,texImage3D:he,updateUBOMapping:qe,uniformBlockBinding:Fe,texStorage2D:xe,texStorage3D:ye,texSubImage2D:pe,texSubImage3D:W,compressedTexSubImage2D:V,compressedTexSubImage3D:ae,scissor:Le,viewport:We,reset:Ge}}function uC(o,e,t,a,s,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ie,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,T){return x?new OffscreenCanvas(P,T):nc("canvas")}function E(P,T,Z){let pe=1;const W=He(P);if((W.width>Z||W.height>Z)&&(pe=Z/Math.max(W.width,W.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const V=Math.floor(pe*W.width),ae=Math.floor(pe*W.height);v===void 0&&(v=M(V,ae));const xe=T?M(V,ae):v;return xe.width=V,xe.height=ae,xe.getContext("2d").drawImage(P,0,0,V,ae),ft("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+V+"x"+ae+")."),xe}else return"data"in P&&ft("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),P;return P}function S(P){return P.generateMipmaps}function y(P){o.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(P,T,Z,pe,W=!1){if(P!==null){if(o[P]!==void 0)return o[P];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let V=T;if(T===o.RED&&(Z===o.FLOAT&&(V=o.R32F),Z===o.HALF_FLOAT&&(V=o.R16F),Z===o.UNSIGNED_BYTE&&(V=o.R8)),T===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(V=o.R8UI),Z===o.UNSIGNED_SHORT&&(V=o.R16UI),Z===o.UNSIGNED_INT&&(V=o.R32UI),Z===o.BYTE&&(V=o.R8I),Z===o.SHORT&&(V=o.R16I),Z===o.INT&&(V=o.R32I)),T===o.RG&&(Z===o.FLOAT&&(V=o.RG32F),Z===o.HALF_FLOAT&&(V=o.RG16F),Z===o.UNSIGNED_BYTE&&(V=o.RG8)),T===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(V=o.RG8UI),Z===o.UNSIGNED_SHORT&&(V=o.RG16UI),Z===o.UNSIGNED_INT&&(V=o.RG32UI),Z===o.BYTE&&(V=o.RG8I),Z===o.SHORT&&(V=o.RG16I),Z===o.INT&&(V=o.RG32I)),T===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(V=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(V=o.RGB16UI),Z===o.UNSIGNED_INT&&(V=o.RGB32UI),Z===o.BYTE&&(V=o.RGB8I),Z===o.SHORT&&(V=o.RGB16I),Z===o.INT&&(V=o.RGB32I)),T===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(V=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(V=o.RGBA16UI),Z===o.UNSIGNED_INT&&(V=o.RGBA32UI),Z===o.BYTE&&(V=o.RGBA8I),Z===o.SHORT&&(V=o.RGBA16I),Z===o.INT&&(V=o.RGBA32I)),T===o.RGB&&(Z===o.UNSIGNED_INT_5_9_9_9_REV&&(V=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(V=o.R11F_G11F_B10F)),T===o.RGBA){const ae=W?mf:Bt.getTransfer(pe);Z===o.FLOAT&&(V=o.RGBA32F),Z===o.HALF_FLOAT&&(V=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(V=ae===Yt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(V=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(V=o.RGB5_A1)}return(V===o.R16F||V===o.R32F||V===o.RG16F||V===o.RG32F||V===o.RGBA16F||V===o.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function w(P,T){let Z;return P?T===null||T===_a||T===$l?Z=o.DEPTH24_STENCIL8:T===Xi?Z=o.DEPTH32F_STENCIL8:T===Ql&&(Z=o.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===_a||T===$l?Z=o.DEPTH_COMPONENT24:T===Xi?Z=o.DEPTH_COMPONENT32F:T===Ql&&(Z=o.DEPTH_COMPONENT16),Z}function U(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==Pn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function B(P){const T=P.target;T.removeEventListener("dispose",B),j(T),T.isVideoTexture&&g.delete(T)}function I(P){const T=P.target;T.removeEventListener("dispose",I),N(T)}function j(P){const T=a.get(P);if(T.__webglInit===void 0)return;const Z=P.source,pe=_.get(Z);if(pe){const W=pe[T.__cacheKey];W.usedTimes--,W.usedTimes===0&&A(P),Object.keys(pe).length===0&&_.delete(Z)}a.remove(P)}function A(P){const T=a.get(P);o.deleteTexture(T.__webglTexture);const Z=P.source,pe=_.get(Z);delete pe[T.__cacheKey],u.memory.textures--}function N(P){const T=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let W=0;W<T.__webglFramebuffer[pe].length;W++)o.deleteFramebuffer(T.__webglFramebuffer[pe][W]);else o.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)o.deleteFramebuffer(T.__webglFramebuffer[pe]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=P.textures;for(let pe=0,W=Z.length;pe<W;pe++){const V=a.get(Z[pe]);V.__webglTexture&&(o.deleteTexture(V.__webglTexture),u.memory.textures--),a.remove(Z[pe])}a.remove(P)}let k=0;function J(){k=0}function ee(){const P=k;return P>=s.maxTextures&&ft("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),k+=1,P}function le(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Y(P,T){const Z=a.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){const pe=P.image;if(pe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(Z,P,T);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+T)}function O(P,T){const Z=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){oe(Z,P,T);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+T)}function G(P,T){const Z=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){oe(Z,P,T);return}t.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+T)}function ne(P,T){const Z=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Z.__version!==P.version){ve(Z,P,T);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+T)}const Te={[Os]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[pf]:o.MIRRORED_REPEAT},Me={[Un]:o.NEAREST,[Dy]:o.NEAREST_MIPMAP_NEAREST,[Xl]:o.NEAREST_MIPMAP_LINEAR,[Pn]:o.LINEAR,[of]:o.LINEAR_MIPMAP_NEAREST,[qa]:o.LINEAR_MIPMAP_LINEAR},z={[pT]:o.NEVER,[xT]:o.ALWAYS,[mT]:o.LESS,[Wm]:o.LEQUAL,[gT]:o.EQUAL,[qm]:o.GEQUAL,[vT]:o.GREATER,[_T]:o.NOTEQUAL};function ie(P,T){if(T.type===Xi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Pn||T.magFilter===of||T.magFilter===Xl||T.magFilter===qa||T.minFilter===Pn||T.minFilter===of||T.minFilter===Xl||T.minFilter===qa)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Te[T.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Te[T.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Te[T.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,Me[T.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Un||T.minFilter!==Xl&&T.minFilter!==qa||T.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function _e(P,T){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B));const pe=T.source;let W=_.get(pe);W===void 0&&(W={},_.set(pe,W));const V=le(T);if(V!==P.__cacheKey){W[V]===void 0&&(W[V]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),W[V].usedTimes++;const ae=W[P.__cacheKey];ae!==void 0&&(W[P.__cacheKey].usedTimes--,ae.usedTimes===0&&A(T)),P.__cacheKey=V,P.__webglTexture=W[V].texture}return Z}function we(P,T,Z){return Math.floor(Math.floor(P/Z)/T)}function Be(P,T,Z,pe){const V=P.updateRanges;if(V.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,Z,pe,T.data);else{V.sort((he,Le)=>he.start-Le.start);let ae=0;for(let he=1;he<V.length;he++){const Le=V[ae],We=V[he],qe=Le.start+Le.count,Fe=we(We.start,T.width,4),Ge=we(Le.start,T.width,4);We.start<=qe+1&&Fe===Ge&&we(We.start+We.count-1,T.width,4)===Fe?Le.count=Math.max(Le.count,We.start+We.count-Le.start):(++ae,V[ae]=We)}V.length=ae+1;const xe=o.getParameter(o.UNPACK_ROW_LENGTH),ye=o.getParameter(o.UNPACK_SKIP_PIXELS),ce=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let he=0,Le=V.length;he<Le;he++){const We=V[he],qe=Math.floor(We.start/4),Fe=Math.ceil(We.count/4),Ge=qe%T.width,q=Math.floor(qe/T.width),Oe=Fe,De=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),t.texSubImage2D(o.TEXTURE_2D,0,Ge,q,Oe,De,Z,pe,T.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,xe),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ye),o.pixelStorei(o.UNPACK_SKIP_ROWS,ce)}}function oe(P,T,Z){let pe=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=o.TEXTURE_3D);const W=_e(P,T),V=T.source;t.bindTexture(pe,P.__webglTexture,o.TEXTURE0+Z);const ae=a.get(V);if(V.version!==ae.__version||W===!0){t.activeTexture(o.TEXTURE0+Z);const xe=Bt.getPrimaries(Bt.workingColorSpace),ye=T.colorSpace===Us?null:Bt.getPrimaries(T.colorSpace),ce=T.colorSpace===Us||xe===ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let he=E(T.image,!1,s.maxTextureSize);he=lt(T,he);const Le=l.convert(T.format,T.colorSpace),We=l.convert(T.type);let qe=R(T.internalFormat,Le,We,T.colorSpace,T.isVideoTexture);ie(pe,T);let Fe;const Ge=T.mipmaps,q=T.isVideoTexture!==!0,Oe=ae.__version===void 0||W===!0,De=V.dataReady,Xe=U(T,he);if(T.isDepthTexture)qe=w(T.format===dr,T.type),Oe&&(q?t.texStorage2D(o.TEXTURE_2D,1,qe,he.width,he.height):t.texImage2D(o.TEXTURE_2D,0,qe,he.width,he.height,0,Le,We,null));else if(T.isDataTexture)if(Ge.length>0){q&&Oe&&t.texStorage2D(o.TEXTURE_2D,Xe,qe,Ge[0].width,Ge[0].height);for(let Ne=0,be=Ge.length;Ne<be;Ne++)Fe=Ge[Ne],q?De&&t.texSubImage2D(o.TEXTURE_2D,Ne,0,0,Fe.width,Fe.height,Le,We,Fe.data):t.texImage2D(o.TEXTURE_2D,Ne,qe,Fe.width,Fe.height,0,Le,We,Fe.data);T.generateMipmaps=!1}else q?(Oe&&t.texStorage2D(o.TEXTURE_2D,Xe,qe,he.width,he.height),De&&Be(T,he,Le,We)):t.texImage2D(o.TEXTURE_2D,0,qe,he.width,he.height,0,Le,We,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&Oe&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Xe,qe,Ge[0].width,Ge[0].height,he.depth);for(let Ne=0,be=Ge.length;Ne<be;Ne++)if(Fe=Ge[Ne],T.format!==Wi)if(Le!==null)if(q){if(De)if(T.layerUpdates.size>0){const ze=Kx(Fe.width,Fe.height,T.format,T.type);for(const _t of T.layerUpdates){const Ft=Fe.data.subarray(_t*ze/Fe.data.BYTES_PER_ELEMENT,(_t+1)*ze/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ne,0,0,_t,Fe.width,Fe.height,1,Le,Ft)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ne,0,0,0,Fe.width,Fe.height,he.depth,Le,Fe.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ne,qe,Fe.width,Fe.height,he.depth,0,Fe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?De&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,Ne,0,0,0,Fe.width,Fe.height,he.depth,Le,We,Fe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Ne,qe,Fe.width,Fe.height,he.depth,0,Le,We,Fe.data)}else{q&&Oe&&t.texStorage2D(o.TEXTURE_2D,Xe,qe,Ge[0].width,Ge[0].height);for(let Ne=0,be=Ge.length;Ne<be;Ne++)Fe=Ge[Ne],T.format!==Wi?Le!==null?q?De&&t.compressedTexSubImage2D(o.TEXTURE_2D,Ne,0,0,Fe.width,Fe.height,Le,Fe.data):t.compressedTexImage2D(o.TEXTURE_2D,Ne,qe,Fe.width,Fe.height,0,Fe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?De&&t.texSubImage2D(o.TEXTURE_2D,Ne,0,0,Fe.width,Fe.height,Le,We,Fe.data):t.texImage2D(o.TEXTURE_2D,Ne,qe,Fe.width,Fe.height,0,Le,We,Fe.data)}else if(T.isDataArrayTexture)if(q){if(Oe&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Xe,qe,he.width,he.height,he.depth),De)if(T.layerUpdates.size>0){const Ne=Kx(he.width,he.height,T.format,T.type);for(const be of T.layerUpdates){const ze=he.data.subarray(be*Ne/he.data.BYTES_PER_ELEMENT,(be+1)*Ne/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,be,he.width,he.height,1,Le,We,ze)}T.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Le,We,he.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,qe,he.width,he.height,he.depth,0,Le,We,he.data);else if(T.isData3DTexture)q?(Oe&&t.texStorage3D(o.TEXTURE_3D,Xe,qe,he.width,he.height,he.depth),De&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Le,We,he.data)):t.texImage3D(o.TEXTURE_3D,0,qe,he.width,he.height,he.depth,0,Le,We,he.data);else if(T.isFramebufferTexture){if(Oe)if(q)t.texStorage2D(o.TEXTURE_2D,Xe,qe,he.width,he.height);else{let Ne=he.width,be=he.height;for(let ze=0;ze<Xe;ze++)t.texImage2D(o.TEXTURE_2D,ze,qe,Ne,be,0,Le,We,null),Ne>>=1,be>>=1}}else if(Ge.length>0){if(q&&Oe){const Ne=He(Ge[0]);t.texStorage2D(o.TEXTURE_2D,Xe,qe,Ne.width,Ne.height)}for(let Ne=0,be=Ge.length;Ne<be;Ne++)Fe=Ge[Ne],q?De&&t.texSubImage2D(o.TEXTURE_2D,Ne,0,0,Le,We,Fe):t.texImage2D(o.TEXTURE_2D,Ne,qe,Le,We,Fe);T.generateMipmaps=!1}else if(q){if(Oe){const Ne=He(he);t.texStorage2D(o.TEXTURE_2D,Xe,qe,Ne.width,Ne.height)}De&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Le,We,he)}else t.texImage2D(o.TEXTURE_2D,0,qe,Le,We,he);S(T)&&y(pe),ae.__version=V.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ve(P,T,Z){if(T.image.length!==6)return;const pe=_e(P,T),W=T.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+Z);const V=a.get(W);if(W.version!==V.__version||pe===!0){t.activeTexture(o.TEXTURE0+Z);const ae=Bt.getPrimaries(Bt.workingColorSpace),xe=T.colorSpace===Us?null:Bt.getPrimaries(T.colorSpace),ye=T.colorSpace===Us||ae===xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ce=T.isCompressedTexture||T.image[0].isCompressedTexture,he=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let be=0;be<6;be++)!ce&&!he?Le[be]=E(T.image[be],!0,s.maxCubemapSize):Le[be]=he?T.image[be].image:T.image[be],Le[be]=lt(T,Le[be]);const We=Le[0],qe=l.convert(T.format,T.colorSpace),Fe=l.convert(T.type),Ge=R(T.internalFormat,qe,Fe,T.colorSpace),q=T.isVideoTexture!==!0,Oe=V.__version===void 0||pe===!0,De=W.dataReady;let Xe=U(T,We);ie(o.TEXTURE_CUBE_MAP,T);let Ne;if(ce){q&&Oe&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,Ge,We.width,We.height);for(let be=0;be<6;be++){Ne=Le[be].mipmaps;for(let ze=0;ze<Ne.length;ze++){const _t=Ne[ze];T.format!==Wi?qe!==null?q?De&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze,0,0,_t.width,_t.height,qe,_t.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze,Ge,_t.width,_t.height,0,_t.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze,0,0,_t.width,_t.height,qe,Fe,_t.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze,Ge,_t.width,_t.height,0,qe,Fe,_t.data)}}}else{if(Ne=T.mipmaps,q&&Oe){Ne.length>0&&Xe++;const be=He(Le[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,Ge,be.width,be.height)}for(let be=0;be<6;be++)if(he){q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Le[be].width,Le[be].height,qe,Fe,Le[be].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ge,Le[be].width,Le[be].height,0,qe,Fe,Le[be].data);for(let ze=0;ze<Ne.length;ze++){const Ft=Ne[ze].image[be].image;q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze+1,0,0,Ft.width,Ft.height,qe,Fe,Ft.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze+1,Ge,Ft.width,Ft.height,0,qe,Fe,Ft.data)}}else{q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,qe,Fe,Le[be]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ge,qe,Fe,Le[be]);for(let ze=0;ze<Ne.length;ze++){const _t=Ne[ze];q?De&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze+1,0,0,qe,Fe,_t.image[be]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze+1,Ge,qe,Fe,_t.image[be])}}}S(T)&&y(o.TEXTURE_CUBE_MAP),V.__version=W.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ve(P,T,Z,pe,W,V){const ae=l.convert(Z.format,Z.colorSpace),xe=l.convert(Z.type),ye=R(Z.internalFormat,ae,xe,Z.colorSpace),ce=a.get(T),he=a.get(Z);if(he.__renderTarget=T,!ce.__hasExternalTextures){const Le=Math.max(1,T.width>>V),We=Math.max(1,T.height>>V);W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?t.texImage3D(W,V,ye,Le,We,T.depth,0,ae,xe,null):t.texImage2D(W,V,ye,Le,We,0,ae,xe,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),at(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,W,he.__webglTexture,0,F(T)):(W===o.TEXTURE_2D||W>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,W,he.__webglTexture,V),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(P,T,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,P),T.depthBuffer){const pe=T.depthTexture,W=pe&&pe.isDepthTexture?pe.type:null,V=w(T.stencilBuffer,W),ae=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;at(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,F(T),V,T.width,T.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,F(T),V,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,V,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ae,o.RENDERBUFFER,P)}else{const pe=T.textures;for(let W=0;W<pe.length;W++){const V=pe[W],ae=l.convert(V.format,V.colorSpace),xe=l.convert(V.type),ye=R(V.internalFormat,ae,xe,V.colorSpace);at(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,F(T),ye,T.width,T.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,F(T),ye,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ye,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ke(P,T,Z){const pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=a.get(T.depthTexture);if(W.__renderTarget=T,(!W.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe){if(W.__webglInit===void 0&&(W.__webglInit=!0,T.depthTexture.addEventListener("dispose",B)),W.__webglTexture===void 0){W.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture),ie(o.TEXTURE_CUBE_MAP,T.depthTexture);const ce=l.convert(T.depthTexture.format),he=l.convert(T.depthTexture.type);let Le;T.depthTexture.format===Ja?Le=o.DEPTH_COMPONENT24:T.depthTexture.format===dr&&(Le=o.DEPTH24_STENCIL8);for(let We=0;We<6;We++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Le,T.width,T.height,0,ce,he,null)}}else Y(T.depthTexture,0);const V=W.__webglTexture,ae=F(T),xe=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+Z:o.TEXTURE_2D,ye=T.depthTexture.format===dr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ja)at(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,xe,V,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,ye,xe,V,0);else if(T.depthTexture.format===dr)at(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,xe,V,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,ye,xe,V,0);else throw new Error("Unknown depthTexture format")}function vt(P){const T=a.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const W=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",W)};pe.addEventListener("dispose",W),T.__depthDisposeCallback=W}T.__boundDepthTexture=pe}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let pe=0;pe<6;pe++)Ke(T.__webglFramebuffer[pe],P,pe);else{const pe=P.texture.mipmaps;pe&&pe.length>0?Ke(T.__webglFramebuffer[0],P,0):Ke(T.__webglFramebuffer,P,0)}else if(Z){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=o.createRenderbuffer(),ke(T.__webglDepthbuffer[pe],P,!1);else{const W=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,V=T.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,V),o.framebufferRenderbuffer(o.FRAMEBUFFER,W,o.RENDERBUFFER,V)}}else{const pe=P.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ke(T.__webglDepthbuffer,P,!1);else{const W=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,V=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,V),o.framebufferRenderbuffer(o.FRAMEBUFFER,W,o.RENDERBUFFER,V)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(P,T,Z){const pe=a.get(P);T!==void 0&&Ve(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&vt(P)}function pt(P){const T=P.texture,Z=a.get(P),pe=a.get(T);P.addEventListener("dispose",I);const W=P.textures,V=P.isWebGLCubeRenderTarget===!0,ae=W.length>1;if(ae||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=T.version,u.memory.textures++),V){Z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[xe]=[];for(let ye=0;ye<T.mipmaps.length;ye++)Z.__webglFramebuffer[xe][ye]=o.createFramebuffer()}else Z.__webglFramebuffer[xe]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xe=0;xe<T.mipmaps.length;xe++)Z.__webglFramebuffer[xe]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(ae)for(let xe=0,ye=W.length;xe<ye;xe++){const ce=a.get(W[xe]);ce.__webglTexture===void 0&&(ce.__webglTexture=o.createTexture(),u.memory.textures++)}if(P.samples>0&&at(P)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let xe=0;xe<W.length;xe++){const ye=W[xe];Z.__webglColorRenderbuffer[xe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[xe]);const ce=l.convert(ye.format,ye.colorSpace),he=l.convert(ye.type),Le=R(ye.internalFormat,ce,he,ye.colorSpace,P.isXRRenderTarget===!0),We=F(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Le,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,Z.__webglColorRenderbuffer[xe])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(V){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(o.TEXTURE_CUBE_MAP,T);for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Ve(Z.__webglFramebuffer[xe][ye],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ye);else Ve(Z.__webglFramebuffer[xe],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);S(T)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let xe=0,ye=W.length;xe<ye;xe++){const ce=W[xe],he=a.get(ce);let Le=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Le,he.__webglTexture),ie(Le,ce),Ve(Z.__webglFramebuffer,P,ce,o.COLOR_ATTACHMENT0+xe,Le,0),S(ce)&&y(Le)}t.unbindTexture()}else{let xe=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(xe,pe.__webglTexture),ie(xe,T),T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Ve(Z.__webglFramebuffer[ye],P,T,o.COLOR_ATTACHMENT0,xe,ye);else Ve(Z.__webglFramebuffer,P,T,o.COLOR_ATTACHMENT0,xe,0);S(T)&&y(xe),t.unbindTexture()}P.depthBuffer&&vt(P)}function Ee(P){const T=P.textures;for(let Z=0,pe=T.length;Z<pe;Z++){const W=T[Z];if(S(W)){const V=L(P),ae=a.get(W).__webglTexture;t.bindTexture(V,ae),y(V),t.unbindTexture()}}}const Pe=[],Re=[];function je(P){if(P.samples>0){if(at(P)===!1){const T=P.textures,Z=P.width,pe=P.height;let W=o.COLOR_BUFFER_BIT;const V=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ae=a.get(P),xe=T.length>1;if(xe)for(let ce=0;ce<T.length;ce++)t.bindFramebuffer(o.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ae.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ye=P.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ce=0;ce<T.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(W|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(W|=o.STENCIL_BUFFER_BIT)),xe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);const he=a.get(T[ce]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,he,0)}o.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,W,o.NEAREST),h===!0&&(Pe.length=0,Re.length=0,Pe.push(o.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pe.push(V),Re.push(V),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xe)for(let ce=0;ce<T.length;ce++){t.bindFramebuffer(o.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);const he=a.get(T[ce]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ae.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.TEXTURE_2D,he,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const T=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function F(P){return Math.min(s.maxSamples,P.samples)}function at(P){const T=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(P){const T=u.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function lt(P,T){const Z=P.colorSpace,pe=P.format,W=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==ci&&Z!==Us&&(Bt.getTransfer(Z)===Yt?(pe!==Wi||W!==Ci)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",Z)),T}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=ee,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=ne,this.rebindTextures=wt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fC(o,e){function t(a,s=Us){let l;const u=Bt.getTransfer(s);if(a===Ci)return o.UNSIGNED_BYTE;if(a===Bm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Fm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Uy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Py)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Ny)return o.BYTE;if(a===Ly)return o.SHORT;if(a===Ql)return o.UNSIGNED_SHORT;if(a===zm)return o.INT;if(a===_a)return o.UNSIGNED_INT;if(a===Xi)return o.FLOAT;if(a===Di)return o.HALF_FLOAT;if(a===Oy)return o.ALPHA;if(a===Iy)return o.RGB;if(a===Wi)return o.RGBA;if(a===Ja)return o.DEPTH_COMPONENT;if(a===dr)return o.DEPTH_STENCIL;if(a===Hm)return o.RED;if(a===Gm)return o.RED_INTEGER;if(a===Ao)return o.RG;if(a===Vm)return o.RG_INTEGER;if(a===km)return o.RGBA_INTEGER;if(a===lf||a===cf||a===uf||a===ff)if(u===Yt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===lf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===uf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ff)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===lf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===uf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ff)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ip||a===zp||a===Bp||a===Fp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Ip)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===zp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Bp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Fp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Hp||a===Gp||a===Vp||a===kp||a===Xp||a===Wp||a===qp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Hp||a===Gp)return u===Yt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Vp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===kp)return l.COMPRESSED_R11_EAC;if(a===Xp)return l.COMPRESSED_SIGNED_R11_EAC;if(a===Wp)return l.COMPRESSED_RG11_EAC;if(a===qp)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===jp||a===Yp||a===Zp||a===Kp||a===Jp||a===Qp||a===$p||a===em||a===tm||a===nm||a===im||a===am||a===sm||a===rm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===jp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Yp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Zp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Kp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Jp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Qp)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===$p)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===em)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===tm)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===nm)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===im)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===am)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===sm)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===rm)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===om||a===lm||a===cm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===om)return u===Yt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===lm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===cm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===um||a===fm||a===hm||a===dm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===um)return l.COMPRESSED_RED_RGTC1_EXT;if(a===fm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===hm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===dm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===$l?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:t}}const hC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dC=`
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

}`;class pC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new eS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new Gn({vertexShader:hC,fragmentShader:dC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new fc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mC extends Po{constructor(e,t){super();const a=this;let s=null,l=1,u=null,f="local-floor",h=1,d=null,g=null,v=null,_=null,x=null,M=null;const E=typeof XRWebGLBinding<"u",S=new pC,y={},L=t.getContextAttributes();let R=null,w=null;const U=[],B=[],I=new Ie;let j=null;const A=new ii;A.viewport=new hn;const N=new ii;N.viewport=new hn;const k=[A,N],J=new mE;let ee=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=U[oe];return ve===void 0&&(ve=new sp,U[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=U[oe];return ve===void 0&&(ve=new sp,U[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=U[oe];return ve===void 0&&(ve=new sp,U[oe]=ve),ve.getHandSpace()};function Y(oe){const ve=B.indexOf(oe.inputSource);if(ve===-1)return;const Ve=U[ve];Ve!==void 0&&(Ve.update(oe.inputSource,oe.frame,d||u),Ve.dispatchEvent({type:oe.type,data:oe.inputSource}))}function O(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let oe=0;oe<U.length;oe++){const ve=B[oe];ve!==null&&(B[oe]=null,U[oe].disconnect(ve))}ee=null,le=null,S.reset();for(const oe in y)delete y[oe];e.setRenderTarget(R),x=null,_=null,v=null,s=null,w=null,Be.stop(),a.isPresenting=!1,e.setPixelRatio(j),e.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,a.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,a.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(oe){d=oe},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(s,t)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),L.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ve=null,ke=null,Ke=null;L.depth&&(Ke=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ve=L.stencil?dr:Ja,ke=L.stencil?$l:_a);const vt={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(vt),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new xi(_.textureWidth,_.textureHeight,{format:Wi,type:Ci,depthTexture:new sc(_.textureWidth,_.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ve),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ve={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,t,Ve),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new xi(x.framebufferWidth,x.framebufferHeight,{format:Wi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await s.requestReferenceSpace(f),Be.setContext(s),Be.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(oe){for(let ve=0;ve<oe.removed.length;ve++){const Ve=oe.removed[ve],ke=B.indexOf(Ve);ke>=0&&(B[ke]=null,U[ke].disconnect(Ve))}for(let ve=0;ve<oe.added.length;ve++){const Ve=oe.added[ve];let ke=B.indexOf(Ve);if(ke===-1){for(let vt=0;vt<U.length;vt++)if(vt>=B.length){B.push(Ve),ke=vt;break}else if(B[vt]===null){B[vt]=Ve,ke=vt;break}if(ke===-1)break}const Ke=U[ke];Ke&&Ke.connect(Ve)}}const ne=new H,Te=new H;function Me(oe,ve,Ve){ne.setFromMatrixPosition(ve.matrixWorld),Te.setFromMatrixPosition(Ve.matrixWorld);const ke=ne.distanceTo(Te),Ke=ve.projectionMatrix.elements,vt=Ve.projectionMatrix.elements,wt=Ke[14]/(Ke[10]-1),pt=Ke[14]/(Ke[10]+1),Ee=(Ke[9]+1)/Ke[5],Pe=(Ke[9]-1)/Ke[5],Re=(Ke[8]-1)/Ke[0],je=(vt[8]+1)/vt[0],F=wt*Re,at=wt*je,Ye=ke/(-Re+je),lt=Ye*-Re;if(ve.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(lt),oe.translateZ(Ye),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ke[10]===-1)oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const He=wt+Ye,P=pt+Ye,T=F-lt,Z=at+(ke-lt),pe=Ee*pt/P*He,W=Pe*pt/P*He;oe.projectionMatrix.makePerspective(T,Z,pe,W,He,P),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function z(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let ve=oe.near,Ve=oe.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(Ve=S.depthFar)),J.near=N.near=A.near=ve,J.far=N.far=A.far=Ve,(ee!==J.near||le!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),ee=J.near,le=J.far),J.layers.mask=oe.layers.mask|6,A.layers.mask=J.layers.mask&3,N.layers.mask=J.layers.mask&5;const ke=oe.parent,Ke=J.cameras;z(J,ke);for(let vt=0;vt<Ke.length;vt++)z(Ke[vt],ke);Ke.length===2?Me(J,A,N):J.projectionMatrix.copy(A.projectionMatrix),ie(oe,J,ke)};function ie(oe,ve,Ve){Ve===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(Ve.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=wo*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(oe){h=oe,_!==null&&(_.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(oe){return y[oe]};let _e=null;function we(oe,ve){if(g=ve.getViewerPose(d||u),M=ve,g!==null){const Ve=g.views;x!==null&&(e.setRenderTargetFramebuffer(w,x.framebuffer),e.setRenderTarget(w));let ke=!1;Ve.length!==J.cameras.length&&(J.cameras.length=0,ke=!0);for(let pt=0;pt<Ve.length;pt++){const Ee=Ve[pt];let Pe=null;if(x!==null)Pe=x.getViewport(Ee);else{const je=v.getViewSubImage(_,Ee);Pe=je.viewport,pt===0&&(e.setRenderTargetTextures(w,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(w))}let Re=k[pt];Re===void 0&&(Re=new ii,Re.layers.enable(pt),Re.viewport=new hn,k[pt]=Re),Re.matrix.fromArray(Ee.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ee.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),pt===0&&(J.matrix.copy(Re.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ke===!0&&J.cameras.push(Re)}const Ke=s.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){v=a.getBinding();const pt=v.getDepthInformation(Ve[0]);pt&&pt.isValid&&pt.texture&&S.init(pt,s.renderState)}if(Ke&&Ke.includes("camera-access")&&E){e.state.unbindTexture(),v=a.getBinding();for(let pt=0;pt<Ve.length;pt++){const Ee=Ve[pt].camera;if(Ee){let Pe=y[Ee];Pe||(Pe=new eS,y[Ee]=Pe);const Re=v.getCameraImage(Ee);Pe.sourceTexture=Re}}}}for(let Ve=0;Ve<U.length;Ve++){const ke=B[Ve],Ke=U[Ve];ke!==null&&Ke!==void 0&&Ke.update(ke,ve,d||u)}_e&&_e(oe,ve),ve.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Be=new gS;Be.setAnimationLoop(we),this.setAnimationLoop=function(oe){_e=oe},this.dispose=function(){}}}const rr=new Ni,gC=new bt;function vC(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,Xy(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,L,R,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),v(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y)):y.isMeshStandardMaterial?(l(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?h(S,y,L,R):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Qn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Qn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),R=L.envMap,w=L.envMapRotation;R&&(S.envMap.value=R,rr.copy(w),rr.x*=-1,rr.y*=-1,rr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),S.envMapRotation.value.setFromMatrix4(gC.makeRotationFromEuler(rr)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,L,R){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=R*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function _C(o,e,t,a){let s={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,R){const w=R.program;a.uniformBlockBinding(L,w)}function d(L,R){let w=s[L.id];w===void 0&&(M(L),w=g(L),s[L.id]=w,L.addEventListener("dispose",S));const U=R.program;a.updateUBOMapping(L,U);const B=e.render.frame;l[L.id]!==B&&(_(L),l[L.id]=B)}function g(L){const R=v();L.__bindingPointIndex=R;const w=o.createBuffer(),U=L.__size,B=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,U,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,w),w}function v(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const R=s[L.id],w=L.uniforms,U=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let B=0,I=w.length;B<I;B++){const j=Array.isArray(w[B])?w[B]:[w[B]];for(let A=0,N=j.length;A<N;A++){const k=j[A];if(x(k,B,A,U)===!0){const J=k.__offset,ee=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let Y=0;Y<ee.length;Y++){const O=ee[Y],G=E(O);typeof O=="number"||typeof O=="boolean"?(k.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,J+le,k.__data)):O.isMatrix3?(k.__data[0]=O.elements[0],k.__data[1]=O.elements[1],k.__data[2]=O.elements[2],k.__data[3]=0,k.__data[4]=O.elements[3],k.__data[5]=O.elements[4],k.__data[6]=O.elements[5],k.__data[7]=0,k.__data[8]=O.elements[6],k.__data[9]=O.elements[7],k.__data[10]=O.elements[8],k.__data[11]=0):(O.toArray(k.__data,le),le+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(L,R,w,U){const B=L.value,I=R+"_"+w;if(U[I]===void 0)return typeof B=="number"||typeof B=="boolean"?U[I]=B:U[I]=B.clone(),!0;{const j=U[I];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return U[I]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function M(L){const R=L.uniforms;let w=0;const U=16;for(let I=0,j=R.length;I<j;I++){const A=Array.isArray(R[I])?R[I]:[R[I]];for(let N=0,k=A.length;N<k;N++){const J=A[N],ee=Array.isArray(J.value)?J.value:[J.value];for(let le=0,Y=ee.length;le<Y;le++){const O=ee[le],G=E(O),ne=w%U,Te=ne%G.boundary,Me=ne+Te;w+=Te,Me!==0&&U-Me<G.storage&&(w+=U-Me),J.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=G.storage}}}const B=w%U;return B>0&&(w+=U-B),L.__size=w,L.__cache={},this}function E(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",L),R}function S(L){const R=L.target;R.removeEventListener("dispose",S);const w=u.indexOf(R.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(s[R.id]),delete s[R.id],delete l[R.id]}function y(){for(const L in s)o.deleteBuffer(s[L]);u=[],s={},l={}}return{bind:h,update:d,dispose:y}}const xC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fa=null;function yC(){return fa===null&&(fa=new Zm(xC,16,16,Ao,Di),fa.name="DFG_LUT",fa.minFilter=Pn,fa.magFilter=Pn,fa.wrapS=pa,fa.wrapT=pa,fa.generateMipmaps=!1,fa.needsUpdate=!0),fa}class SS{constructor(e={}){const{canvas:t=ST(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Ci}=e;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const E=x,S=new Set([km,Vm,Gm]),y=new Set([Ci,_a,Ql,$l,Bm,Fm]),L=new Uint32Array(4),R=new Int32Array(4);let w=null,U=null;const B=[],I=[];let j=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=Ln;let k=0,J=0,ee=null,le=-1,Y=null;const O=new hn,G=new hn;let ne=null;const Te=new ct(0);let Me=0,z=t.width,ie=t.height,_e=1,we=null,Be=null;const oe=new hn(0,0,z,ie),ve=new hn(0,0,z,ie);let Ve=!1;const ke=new Jm;let Ke=!1,vt=!1;const wt=new bt,pt=new H,Ee=new hn,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function je(){return ee===null?_e:1}let F=a;function at(D,Q){return t.getContext(D,Q)}try{const D={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dm}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),F===null){const Q="webgl2";if(F=at(Q,D),F===null)throw at(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw xt("WebGLRenderer: "+D.message),D}let Ye,lt,He,P,T,Z,pe,W,V,ae,xe,ye,ce,he,Le,We,qe,Fe,Ge,q,Oe,De,Xe,Ne;function be(){Ye=new y2(F),Ye.init(),De=new fC(F,Ye),lt=new f2(F,Ye,e,De),He=new cC(F,Ye),lt.reversedDepthBuffer&&_&&He.buffers.depth.setReversed(!0),P=new b2(F),T=new YR,Z=new uC(F,Ye,He,T,lt,De,P),pe=new d2(A),W=new x2(A),V=new wE(F),Xe=new c2(F,V),ae=new S2(F,V,P,Xe),xe=new E2(F,ae,V,P),Ge=new T2(F,lt,Z),We=new h2(T),ye=new jR(A,pe,W,Ye,lt,Xe,We),ce=new vC(A,T),he=new KR,Le=new nC(Ye),Fe=new l2(A,pe,W,He,xe,M,h),qe=new oC(A,xe,lt),Ne=new _C(F,P,lt,He),q=new u2(F,Ye,P),Oe=new M2(F,Ye,P),P.programs=ye.programs,A.capabilities=lt,A.extensions=Ye,A.properties=T,A.renderLists=he,A.shadowMap=qe,A.state=He,A.info=P}be(),E!==Ci&&(j=new w2(E,t.width,t.height,s,l));const ze=new mC(A,F);this.xr=ze,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=Ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(D){D!==void 0&&(_e=D,this.setSize(z,ie,!1))},this.getSize=function(D){return D.set(z,ie)},this.setSize=function(D,Q,de=!0){if(ze.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}z=D,ie=Q,t.width=Math.floor(D*_e),t.height=Math.floor(Q*_e),de===!0&&(t.style.width=D+"px",t.style.height=Q+"px"),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(z*_e,ie*_e).floor()},this.setDrawingBufferSize=function(D,Q,de){z=D,ie=Q,_e=de,t.width=Math.floor(D*de),t.height=Math.floor(Q*de),this.setViewport(0,0,D,Q)},this.setEffects=function(D){if(E===Ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Q=0;Q<D.length;Q++)if(D[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(O)},this.getViewport=function(D){return D.copy(oe)},this.setViewport=function(D,Q,de,ue){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,Q,de,ue),He.viewport(O.copy(oe).multiplyScalar(_e).round())},this.getScissor=function(D){return D.copy(ve)},this.setScissor=function(D,Q,de,ue){D.isVector4?ve.set(D.x,D.y,D.z,D.w):ve.set(D,Q,de,ue),He.scissor(G.copy(ve).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(D){He.setScissorTest(Ve=D)},this.setOpaqueSort=function(D){we=D},this.setTransparentSort=function(D){Be=D},this.getClearColor=function(D){return D.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,de=!0){let ue=0;if(D){let te=!1;if(ee!==null){const Ze=ee.texture.format;te=S.has(Ze)}if(te){const Ze=ee.texture.type,et=y.has(Ze),Qe=Fe.getClearColor(),tt=Fe.getClearAlpha(),st=Qe.r,dt=Qe.g,rt=Qe.b;et?(L[0]=st,L[1]=dt,L[2]=rt,L[3]=tt,F.clearBufferuiv(F.COLOR,0,L)):(R[0]=st,R[1]=dt,R[2]=rt,R[3]=tt,F.clearBufferiv(F.COLOR,0,R))}else ue|=F.COLOR_BUFFER_BIT}Q&&(ue|=F.DEPTH_BUFFER_BIT),de&&(ue|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Fe.dispose(),he.dispose(),Le.dispose(),T.dispose(),pe.dispose(),W.dispose(),xe.dispose(),Xe.dispose(),Ne.dispose(),ye.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",rn),ze.removeEventListener("sessionend",$n),xn.stop()};function _t(D){D.preventDefault(),vf("WebGLRenderer: Context Lost."),N=!0}function Ft(){vf("WebGLRenderer: Context Restored."),N=!1;const D=P.autoReset,Q=qe.enabled,de=qe.autoUpdate,ue=qe.needsUpdate,te=qe.type;be(),P.autoReset=D,qe.enabled=Q,qe.autoUpdate=de,qe.needsUpdate=ue,qe.type=te}function Ue(D){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Je(D){const Q=D.target;Q.removeEventListener("dispose",Je),it(Q)}function it(D){Rt(D),T.remove(D)}function Rt(D){const Q=T.get(D).programs;Q!==void 0&&(Q.forEach(function(de){ye.releaseProgram(de)}),D.isShaderMaterial&&ye.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,de,ue,te,Ze){Q===null&&(Q=Pe);const et=te.isMesh&&te.matrixWorld.determinant()<0,Qe=zs(D,Q,de,ue,te);He.setMaterial(ue,et);let tt=de.index,st=1;if(ue.wireframe===!0){if(tt=ae.getWireframeAttribute(de),tt===void 0)return;st=2}const dt=de.drawRange,rt=de.attributes.position;let mt=dt.start*st,Xt=(dt.start+dt.count)*st;Ze!==null&&(mt=Math.max(mt,Ze.start*st),Xt=Math.min(Xt,(Ze.start+Ze.count)*st)),tt!==null?(mt=Math.max(mt,0),Xt=Math.min(Xt,tt.count)):rt!=null&&(mt=Math.max(mt,0),Xt=Math.min(Xt,rt.count));const pn=Xt-mt;if(pn<0||pn===1/0)return;Xe.setup(te,ue,Qe,de,tt);let cn,jt=q;if(tt!==null&&(cn=V.get(tt),jt=Oe,jt.setIndex(cn)),te.isMesh)ue.wireframe===!0?(He.setLineWidth(ue.wireframeLinewidth*je()),jt.setMode(F.LINES)):jt.setMode(F.TRIANGLES);else if(te.isLine){let ut=ue.linewidth;ut===void 0&&(ut=1),He.setLineWidth(ut*je()),te.isLineSegments?jt.setMode(F.LINES):te.isLineLoop?jt.setMode(F.LINE_LOOP):jt.setMode(F.LINE_STRIP)}else te.isPoints?jt.setMode(F.POINTS):te.isSprite&&jt.setMode(F.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)ic("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))jt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const ut=te._multiDrawStarts,Wt=te._multiDrawCounts,yt=te._multiDrawCount,kn=tt?V.get(tt).bytesPerElement:1,Sa=T.get(ue).currentProgram.getUniforms();for(let Xn=0;Xn<yt;Xn++)Sa.setValue(F,"_gl_DrawID",Xn),jt.render(ut[Xn]/kn,Wt[Xn])}else if(te.isInstancedMesh)jt.renderInstances(mt,pn,te.count);else if(de.isInstancedBufferGeometry){const ut=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Wt=Math.min(de.instanceCount,ut);jt.renderInstances(mt,pn,Wt)}else jt.render(mt,pn)};function Tt(D,Q,de){D.transparent===!0&&D.side===na&&D.forceSinglePass===!1?(D.side=Qn,D.needsUpdate=!0,$a(D,Q,de),D.side=Ka,D.needsUpdate=!0,$a(D,Q,de),D.side=na):$a(D,Q,de)}this.compile=function(D,Q,de=null){de===null&&(de=D),U=Le.get(de),U.init(Q),I.push(U),de.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),D!==de&&D.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),U.setupLights();const ue=new Set;return D.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ze=te.material;if(Ze)if(Array.isArray(Ze))for(let et=0;et<Ze.length;et++){const Qe=Ze[et];Tt(Qe,de,te),ue.add(Qe)}else Tt(Ze,de,te),ue.add(Ze)}),U=I.pop(),ue},this.compileAsync=function(D,Q,de=null){const ue=this.compile(D,Q,de);return new Promise(te=>{function Ze(){if(ue.forEach(function(et){T.get(et).currentProgram.isReady()&&ue.delete(et)}),ue.size===0){te(D);return}setTimeout(Ze,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ze():setTimeout(Ze,10)})};let vn=null;function Cn(D){vn&&vn(D)}function rn(){xn.stop()}function $n(){xn.start()}const xn=new gS;xn.setAnimationLoop(Cn),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(D){vn=D,ze.setAnimationLoop(D),D===null?xn.stop():xn.start()},ze.addEventListener("sessionstart",rn),ze.addEventListener("sessionend",$n),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const de=ze.enabled===!0&&ze.isPresenting===!0,ue=j!==null&&(ee===null||de)&&j.begin(A,ee);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(Q),Q=ze.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,Q,ee),U=Le.get(D,I.length),U.init(Q),I.push(U),wt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ke.setFromProjectionMatrix(wt,ma,Q.reversedDepth),vt=this.localClippingEnabled,Ke=We.init(this.clippingPlanes,vt),w=he.get(D,B.length),w.init(),B.push(w),ze.enabled===!0&&ze.isPresenting===!0){const et=A.xr.getDepthSensingMesh();et!==null&&Bn(et,Q,-1/0,A.sortObjects)}Bn(D,Q,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(we,Be),Re=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,Re&&Fe.addToRenderList(w,D),this.info.render.frame++,Ke===!0&&We.beginShadows();const te=U.state.shadowsArray;if(qe.render(te,D,Q),Ke===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ue&&j.hasRenderPass())===!1){const et=w.opaque,Qe=w.transmissive;if(U.setupLights(),Q.isArrayCamera){const tt=Q.cameras;if(Qe.length>0)for(let st=0,dt=tt.length;st<dt;st++){const rt=tt[st];en(et,Qe,D,rt)}Re&&Fe.render(D);for(let st=0,dt=tt.length;st<dt;st++){const rt=tt[st];ln(w,D,rt,rt.viewport)}}else Qe.length>0&&en(et,Qe,D,Q),Re&&Fe.render(D),ln(w,D,Q)}ee!==null&&J===0&&(Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee)),ue&&j.end(A),D.isScene===!0&&D.onAfterRender(A,D,Q),Xe.resetDefaultState(),le=-1,Y=null,I.pop(),I.length>0?(U=I[I.length-1],Ke===!0&&We.setGlobalState(A.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?w=B[B.length-1]:w=null};function Bn(D,Q,de,ue){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)de=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)U.pushLight(D),D.castShadow&&U.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ke.intersectsSprite(D)){ue&&Ee.setFromMatrixPosition(D.matrixWorld).applyMatrix4(wt);const et=xe.update(D),Qe=D.material;Qe.visible&&w.push(D,et,Qe,de,Ee.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ke.intersectsObject(D))){const et=xe.update(D),Qe=D.material;if(ue&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ee.copy(D.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),Ee.copy(et.boundingSphere.center)),Ee.applyMatrix4(D.matrixWorld).applyMatrix4(wt)),Array.isArray(Qe)){const tt=et.groups;for(let st=0,dt=tt.length;st<dt;st++){const rt=tt[st],mt=Qe[rt.materialIndex];mt&&mt.visible&&w.push(D,et,mt,de,Ee.z,rt)}}else Qe.visible&&w.push(D,et,Qe,de,Ee.z,null)}}const Ze=D.children;for(let et=0,Qe=Ze.length;et<Qe;et++)Bn(Ze[et],Q,de,ue)}function ln(D,Q,de,ue){const{opaque:te,transmissive:Ze,transparent:et}=D;U.setupLightsView(de),Ke===!0&&We.setGlobalState(A.clippingPlanes,de),ue&&He.viewport(O.copy(ue)),te.length>0&&ai(te,Q,de),Ze.length>0&&ai(Ze,Q,de),et.length>0&&ai(et,Q,de),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function en(D,Q,de,ue){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ue.id]===void 0){const mt=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ue.id]=new xi(1,1,{generateMipmaps:!0,type:mt?Di:Ci,minFilter:qa,samples:lt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}const Ze=U.state.transmissionRenderTarget[ue.id],et=ue.viewport||O;Ze.setSize(et.z*A.transmissionResolutionScale,et.w*A.transmissionResolutionScale);const Qe=A.getRenderTarget(),tt=A.getActiveCubeFace(),st=A.getActiveMipmapLevel();A.setRenderTarget(Ze),A.getClearColor(Te),Me=A.getClearAlpha(),Me<1&&A.setClearColor(16777215,.5),A.clear(),Re&&Fe.render(de);const dt=A.toneMapping;A.toneMapping=va;const rt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),U.setupLightsView(ue),Ke===!0&&We.setGlobalState(A.clippingPlanes,ue),ai(D,de,ue),Z.updateMultisampleRenderTarget(Ze),Z.updateRenderTargetMipmap(Ze),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Xt=0,pn=Q.length;Xt<pn;Xt++){const cn=Q[Xt],{object:jt,geometry:ut,material:Wt,group:yt}=cn;if(Wt.side===na&&jt.layers.test(ue.layers)){const kn=Wt.side;Wt.side=Qn,Wt.needsUpdate=!0,Qa(jt,de,ue,ut,Wt,yt),Wt.side=kn,Wt.needsUpdate=!0,mt=!0}}mt===!0&&(Z.updateMultisampleRenderTarget(Ze),Z.updateRenderTargetMipmap(Ze))}A.setRenderTarget(Qe,tt,st),A.setClearColor(Te,Me),rt!==void 0&&(ue.viewport=rt),A.toneMapping=dt}function ai(D,Q,de){const ue=Q.isScene===!0?Q.overrideMaterial:null;for(let te=0,Ze=D.length;te<Ze;te++){const et=D[te],{object:Qe,geometry:tt,group:st}=et;let dt=et.material;dt.allowOverride===!0&&ue!==null&&(dt=ue),Qe.layers.test(de.layers)&&Qa(Qe,Q,de,tt,dt,st)}}function Qa(D,Q,de,ue,te,Ze){D.onBeforeRender(A,Q,de,ue,te,Ze),D.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(A,Q,de,ue,D,Ze),te.transparent===!0&&te.side===na&&te.forceSinglePass===!1?(te.side=Qn,te.needsUpdate=!0,A.renderBufferDirect(de,Q,ue,te,D,Ze),te.side=Ka,te.needsUpdate=!0,A.renderBufferDirect(de,Q,ue,te,D,Ze),te.side=na):A.renderBufferDirect(de,Q,ue,te,D,Ze),D.onAfterRender(A,Q,de,ue,te,Ze)}function $a(D,Q,de){Q.isScene!==!0&&(Q=Pe);const ue=T.get(D),te=U.state.lights,Ze=U.state.shadowsArray,et=te.state.version,Qe=ye.getParameters(D,te.state,Ze,Q,de),tt=ye.getProgramCacheKey(Qe);let st=ue.programs;ue.environment=D.isMeshStandardMaterial?Q.environment:null,ue.fog=Q.fog,ue.envMap=(D.isMeshStandardMaterial?W:pe).get(D.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,st===void 0&&(D.addEventListener("dispose",Je),st=new Map,ue.programs=st);let dt=st.get(tt);if(dt!==void 0){if(ue.currentProgram===dt&&ue.lightsStateVersion===et)return Fo(D,Qe),dt}else Qe.uniforms=ye.getUniforms(D),D.onBeforeCompile(Qe,A),dt=ye.acquireProgram(Qe,tt),st.set(tt,dt),ue.uniforms=Qe.uniforms;const rt=ue.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(rt.clippingPlanes=We.uniform),Fo(D,Qe),ue.needsLights=es(D),ue.lightsStateVersion=et,ue.needsLights&&(rt.ambientLightColor.value=te.state.ambient,rt.lightProbe.value=te.state.probe,rt.directionalLights.value=te.state.directional,rt.directionalLightShadows.value=te.state.directionalShadow,rt.spotLights.value=te.state.spot,rt.spotLightShadows.value=te.state.spotShadow,rt.rectAreaLights.value=te.state.rectArea,rt.ltc_1.value=te.state.rectAreaLTC1,rt.ltc_2.value=te.state.rectAreaLTC2,rt.pointLights.value=te.state.point,rt.pointLightShadows.value=te.state.pointShadow,rt.hemisphereLights.value=te.state.hemi,rt.directionalShadowMap.value=te.state.directionalShadowMap,rt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,rt.spotShadowMap.value=te.state.spotShadowMap,rt.spotLightMatrix.value=te.state.spotLightMatrix,rt.spotLightMap.value=te.state.spotLightMap,rt.pointShadowMap.value=te.state.pointShadowMap,rt.pointShadowMatrix.value=te.state.pointShadowMatrix),ue.currentProgram=dt,ue.uniformsList=null,dt}function pc(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=hf.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function Fo(D,Q){const de=T.get(D);de.outputColorSpace=Q.outputColorSpace,de.batching=Q.batching,de.batchingColor=Q.batchingColor,de.instancing=Q.instancing,de.instancingColor=Q.instancingColor,de.instancingMorph=Q.instancingMorph,de.skinning=Q.skinning,de.morphTargets=Q.morphTargets,de.morphNormals=Q.morphNormals,de.morphColors=Q.morphColors,de.morphTargetsCount=Q.morphTargetsCount,de.numClippingPlanes=Q.numClippingPlanes,de.numIntersection=Q.numClipIntersection,de.vertexAlphas=Q.vertexAlphas,de.vertexTangents=Q.vertexTangents,de.toneMapping=Q.toneMapping}function zs(D,Q,de,ue,te){Q.isScene!==!0&&(Q=Pe),Z.resetTextureUnits();const Ze=Q.fog,et=ue.isMeshStandardMaterial?Q.environment:null,Qe=ee===null?A.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ci,tt=(ue.isMeshStandardMaterial?W:pe).get(ue.envMap||et),st=ue.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,dt=!!de.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),rt=!!de.morphAttributes.position,mt=!!de.morphAttributes.normal,Xt=!!de.morphAttributes.color;let pn=va;ue.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(pn=A.toneMapping);const cn=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,jt=cn!==void 0?cn.length:0,ut=T.get(ue),Wt=U.state.lights;if(Ke===!0&&(vt===!0||D!==Y)){const qn=D===Y&&ue.id===le;We.setState(ue,D,qn)}let yt=!1;ue.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Wt.state.version||ut.outputColorSpace!==Qe||te.isBatchedMesh&&ut.batching===!1||!te.isBatchedMesh&&ut.batching===!0||te.isBatchedMesh&&ut.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ut.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ut.instancing===!1||!te.isInstancedMesh&&ut.instancing===!0||te.isSkinnedMesh&&ut.skinning===!1||!te.isSkinnedMesh&&ut.skinning===!0||te.isInstancedMesh&&ut.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ut.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ut.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ut.instancingMorph===!1&&te.morphTexture!==null||ut.envMap!==tt||ue.fog===!0&&ut.fog!==Ze||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==We.numPlanes||ut.numIntersection!==We.numIntersection)||ut.vertexAlphas!==st||ut.vertexTangents!==dt||ut.morphTargets!==rt||ut.morphNormals!==mt||ut.morphColors!==Xt||ut.toneMapping!==pn||ut.morphTargetsCount!==jt)&&(yt=!0):(yt=!0,ut.__version=ue.version);let kn=ut.currentProgram;yt===!0&&(kn=$a(ue,Q,te));let Sa=!1,Xn=!1,Li=!1;const Zt=kn.getUniforms(),Wn=ut.uniforms;if(He.useProgram(kn.program)&&(Sa=!0,Xn=!0,Li=!0),ue.id!==le&&(le=ue.id,Xn=!0),Sa||Y!==D){He.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Zt.setValue(F,"projectionMatrix",D.projectionMatrix),Zt.setValue(F,"viewMatrix",D.matrixWorldInverse);const jn=Zt.map.cameraPosition;jn!==void 0&&jn.setValue(F,pt.setFromMatrixPosition(D.matrixWorld)),lt.logarithmicDepthBuffer&&Zt.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Zt.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),Y!==D&&(Y=D,Xn=!0,Li=!0)}if(ut.needsLights&&(Wt.state.directionalShadowMap.length>0&&Zt.setValue(F,"directionalShadowMap",Wt.state.directionalShadowMap,Z),Wt.state.spotShadowMap.length>0&&Zt.setValue(F,"spotShadowMap",Wt.state.spotShadowMap,Z),Wt.state.pointShadowMap.length>0&&Zt.setValue(F,"pointShadowMap",Wt.state.pointShadowMap,Z)),te.isSkinnedMesh){Zt.setOptional(F,te,"bindMatrix"),Zt.setOptional(F,te,"bindMatrixInverse");const qn=te.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),Zt.setValue(F,"boneTexture",qn.boneTexture,Z))}te.isBatchedMesh&&(Zt.setOptional(F,te,"batchingTexture"),Zt.setValue(F,"batchingTexture",te._matricesTexture,Z),Zt.setOptional(F,te,"batchingIdTexture"),Zt.setValue(F,"batchingIdTexture",te._indirectTexture,Z),Zt.setOptional(F,te,"batchingColorTexture"),te._colorsTexture!==null&&Zt.setValue(F,"batchingColorTexture",te._colorsTexture,Z));const Dn=de.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ge.update(te,de,kn),(Xn||ut.receiveShadow!==te.receiveShadow)&&(ut.receiveShadow=te.receiveShadow,Zt.setValue(F,"receiveShadow",te.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Wn.envMap.value=tt,Wn.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Q.environment!==null&&(Wn.envMapIntensity.value=Q.environmentIntensity),Wn.dfgLUT!==void 0&&(Wn.dfgLUT.value=yC()),Xn&&(Zt.setValue(F,"toneMappingExposure",A.toneMappingExposure),ut.needsLights&&Ho(Wn,Li),Ze&&ue.fog===!0&&ce.refreshFogUniforms(Wn,Ze),ce.refreshMaterialUniforms(Wn,ue,_e,ie,U.state.transmissionRenderTarget[D.id]),hf.upload(F,pc(ut),Wn,Z)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(hf.upload(F,pc(ut),Wn,Z),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Zt.setValue(F,"center",te.center),Zt.setValue(F,"modelViewMatrix",te.modelViewMatrix),Zt.setValue(F,"normalMatrix",te.normalMatrix),Zt.setValue(F,"modelMatrix",te.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const qn=ue.uniformsGroups;for(let jn=0,Sr=qn.length;jn<Sr;jn++){const Yi=qn[jn];Ne.update(Yi,kn),Ne.bind(Yi,kn)}}return kn}function Ho(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function es(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(D,Q,de){const ue=T.get(D);ue.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),T.get(D.texture).__webglTexture=Q,T.get(D.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:de,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Q){const de=T.get(D);de.__webglFramebuffer=Q,de.__useDefaultFramebuffer=Q===void 0};const ts=F.createFramebuffer();this.setRenderTarget=function(D,Q=0,de=0){ee=D,k=Q,J=de;let ue=null,te=!1,Ze=!1;if(D){const Qe=T.get(D);if(Qe.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(F.FRAMEBUFFER,Qe.__webglFramebuffer),O.copy(D.viewport),G.copy(D.scissor),ne=D.scissorTest,He.viewport(O),He.scissor(G),He.setScissorTest(ne),le=-1;return}else if(Qe.__webglFramebuffer===void 0)Z.setupRenderTarget(D);else if(Qe.__hasExternalTextures)Z.rebindTextures(D,T.get(D.texture).__webglTexture,T.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const dt=D.depthTexture;if(Qe.__boundDepthTexture!==dt){if(dt!==null&&T.has(dt)&&(D.width!==dt.image.width||D.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(D)}}const tt=D.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ze=!0);const st=T.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(st[Q])?ue=st[Q][de]:ue=st[Q],te=!0):D.samples>0&&Z.useMultisampledRTT(D)===!1?ue=T.get(D).__webglMultisampledFramebuffer:Array.isArray(st)?ue=st[de]:ue=st,O.copy(D.viewport),G.copy(D.scissor),ne=D.scissorTest}else O.copy(oe).multiplyScalar(_e).floor(),G.copy(ve).multiplyScalar(_e).floor(),ne=Ve;if(de!==0&&(ue=ts),He.bindFramebuffer(F.FRAMEBUFFER,ue)&&He.drawBuffers(D,ue),He.viewport(O),He.scissor(G),He.setScissorTest(ne),te){const Qe=T.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Qe.__webglTexture,de)}else if(Ze){const Qe=Q;for(let tt=0;tt<D.textures.length;tt++){const st=T.get(D.textures[tt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+tt,st.__webglTexture,de,Qe)}}else if(D!==null&&de!==0){const Qe=T.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe.__webglTexture,de)}le=-1},this.readRenderTargetPixels=function(D,Q,de,ue,te,Ze,et,Qe=0){if(!(D&&D.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&et!==void 0&&(tt=tt[et]),tt){He.bindFramebuffer(F.FRAMEBUFFER,tt);try{const st=D.textures[Qe],dt=st.format,rt=st.type;if(!lt.textureFormatReadable(dt)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(rt)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-ue&&de>=0&&de<=D.height-te&&(D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Qe),F.readPixels(Q,de,ue,te,De.convert(dt),De.convert(rt),Ze))}finally{const st=ee!==null?T.get(ee).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(D,Q,de,ue,te,Ze,et,Qe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&et!==void 0&&(tt=tt[et]),tt)if(Q>=0&&Q<=D.width-ue&&de>=0&&de<=D.height-te){He.bindFramebuffer(F.FRAMEBUFFER,tt);const st=D.textures[Qe],dt=st.format,rt=st.type;if(!lt.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.bufferData(F.PIXEL_PACK_BUFFER,Ze.byteLength,F.STREAM_READ),D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Qe),F.readPixels(Q,de,ue,te,De.convert(dt),De.convert(rt),0);const Xt=ee!==null?T.get(ee).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,Xt);const pn=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await MT(F,pn,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ze),F.deleteBuffer(mt),F.deleteSync(pn),Ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Q=null,de=0){const ue=Math.pow(2,-de),te=Math.floor(D.image.width*ue),Ze=Math.floor(D.image.height*ue),et=Q!==null?Q.x:0,Qe=Q!==null?Q.y:0;Z.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,de,0,0,et,Qe,te,Ze),He.unbindTexture()};const Bs=F.createFramebuffer(),ns=F.createFramebuffer();this.copyTextureToTexture=function(D,Q,de=null,ue=null,te=0,Ze=null){Ze===null&&(te!==0?(ic("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ze=te,te=0):Ze=0);let et,Qe,tt,st,dt,rt,mt,Xt,pn;const cn=D.isCompressedTexture?D.mipmaps[Ze]:D.image;if(de!==null)et=de.max.x-de.min.x,Qe=de.max.y-de.min.y,tt=de.isBox3?de.max.z-de.min.z:1,st=de.min.x,dt=de.min.y,rt=de.isBox3?de.min.z:0;else{const Dn=Math.pow(2,-te);et=Math.floor(cn.width*Dn),Qe=Math.floor(cn.height*Dn),D.isDataArrayTexture?tt=cn.depth:D.isData3DTexture?tt=Math.floor(cn.depth*Dn):tt=1,st=0,dt=0,rt=0}ue!==null?(mt=ue.x,Xt=ue.y,pn=ue.z):(mt=0,Xt=0,pn=0);const jt=De.convert(Q.format),ut=De.convert(Q.type);let Wt;Q.isData3DTexture?(Z.setTexture3D(Q,0),Wt=F.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Z.setTexture2DArray(Q,0),Wt=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(Q,0),Wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Q.unpackAlignment);const yt=F.getParameter(F.UNPACK_ROW_LENGTH),kn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Sa=F.getParameter(F.UNPACK_SKIP_PIXELS),Xn=F.getParameter(F.UNPACK_SKIP_ROWS),Li=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,cn.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,cn.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,st),F.pixelStorei(F.UNPACK_SKIP_ROWS,dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,rt);const Zt=D.isDataArrayTexture||D.isData3DTexture,Wn=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const Dn=T.get(D),qn=T.get(Q),jn=T.get(Dn.__renderTarget),Sr=T.get(qn.__renderTarget);He.bindFramebuffer(F.READ_FRAMEBUFFER,jn.__webglFramebuffer),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Yi=0;Yi<tt;Yi++)Zt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,T.get(D).__webglTexture,te,rt+Yi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,T.get(Q).__webglTexture,Ze,pn+Yi)),F.blitFramebuffer(st,dt,et,Qe,mt,Xt,et,Qe,F.DEPTH_BUFFER_BIT,F.NEAREST);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(te!==0||D.isRenderTargetTexture||T.has(D)){const Dn=T.get(D),qn=T.get(Q);He.bindFramebuffer(F.READ_FRAMEBUFFER,Bs),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,ns);for(let jn=0;jn<tt;jn++)Zt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dn.__webglTexture,te,rt+jn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dn.__webglTexture,te),Wn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qn.__webglTexture,Ze,pn+jn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qn.__webglTexture,Ze),te!==0?F.blitFramebuffer(st,dt,et,Qe,mt,Xt,et,Qe,F.COLOR_BUFFER_BIT,F.NEAREST):Wn?F.copyTexSubImage3D(Wt,Ze,mt,Xt,pn+jn,st,dt,et,Qe):F.copyTexSubImage2D(Wt,Ze,mt,Xt,st,dt,et,Qe);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Wn?D.isDataTexture||D.isData3DTexture?F.texSubImage3D(Wt,Ze,mt,Xt,pn,et,Qe,tt,jt,ut,cn.data):Q.isCompressedArrayTexture?F.compressedTexSubImage3D(Wt,Ze,mt,Xt,pn,et,Qe,tt,jt,cn.data):F.texSubImage3D(Wt,Ze,mt,Xt,pn,et,Qe,tt,jt,ut,cn):D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ze,mt,Xt,et,Qe,jt,ut,cn.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ze,mt,Xt,cn.width,cn.height,jt,cn.data):F.texSubImage2D(F.TEXTURE_2D,Ze,mt,Xt,et,Qe,jt,ut,cn);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,kn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Sa),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Li),Ze===0&&Q.generateMipmaps&&F.generateMipmap(Wt),He.unbindTexture()},this.initRenderTarget=function(D){T.get(D).__webglFramebuffer===void 0&&Z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Z.setTextureCube(D,0):D.isData3DTexture?Z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Z.setTexture2DArray(D,0):Z.setTexture2D(D,0),He.unbindTexture()},this.resetState=function(){k=0,J=0,ee=null,He.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}const df={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class yr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const SC=new dc(-1,1,1,-1,0,1);class MC extends gn{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}}const bC=new MC;class Rf{constructor(e){this._mesh=new Pt(bC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,SC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Am extends yr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Co.clone(e.uniforms),this.material=new Gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Rf(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class yy extends yr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){const s=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),l.buffers.stencil.setFunc(s.ALWAYS,u,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(s.EQUAL,1,4294967295),l.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),l.buffers.stencil.setLocked(!0)}}class TC extends yr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class MS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const a=e.getSize(new Ie);this._width=a.width,this._height=a.height,t=new xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Am(df),this.copyPass.material.blending=ga,this.clock=new l0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let a=!1;for(let s=0,l=this.passes.length;s<l;s++){const u=this.passes[s];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),u.needsSwap){if(a){const f=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}yy!==void 0&&(u instanceof yy?a=!0:u instanceof TC&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const a=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(a,s),this.renderTarget2.setSize(a,s);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(a,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bS extends yr{constructor(e,t,a=null,s=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=s,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ct}render(e,t,a){const s=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=s}}const EC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _r extends yr{constructor(e,t=1,a,s){super(),this.strength=t,this.radius=a,this.threshold=s,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new xi(l,u,{type:Di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new xi(l,u,{type:Di});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new xi(l,u,{type:Di});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),l=Math.round(l/2),u=Math.round(u/2)}const f=EC;this.highPassUniforms=Co.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Ie(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Co.clone(df.uniforms),this.blendMaterial=new Gn({uniforms:this.copyUniforms,vertexShader:df.vertexShader,fragmentShader:df.fragmentShader,premultipliedAlpha:!0,blending:vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ct,this._oldClearAlpha=1,this._basic=new li,this._fsQuad=new Rf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let a=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(a,s);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(a,s),this.renderTargetsVertical[l].setSize(a,s),this.separableBlurMaterials[l].uniforms.invSize.value=new Ie(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2)}render(e,t,a,s,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let f=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[h].uniforms.direction.value=_r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=_r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),f=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],a=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(a*a))/a);return new Gn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}_r.BlurDirectionX=new Ie(1,0);_r.BlurDirectionY=new Ie(0,1);function Sy(o,e){if(e===fT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===pm||e===zy){let t=o.getIndex();if(t===null){const u=[],f=o.getAttribute("position");if(f!==void 0){for(let h=0;h<f.count;h++)u.push(h);o.setIndex(u),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=t.count-2,s=[];if(e===pm)for(let u=1;u<=a;u++)s.push(t.getX(0)),s.push(t.getX(u)),s.push(t.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(s.push(t.getX(u)),s.push(t.getX(u+1)),s.push(t.getX(u+2))):(s.push(t.getX(u+2)),s.push(t.getX(u+1)),s.push(t.getX(u)));s.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=o.clone();return l.setIndex(s),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class TS extends zo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DC(t)}),this.register(function(t){return new NC(t)}),this.register(function(t){return new HC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new VC(t)}),this.register(function(t){return new UC(t)}),this.register(function(t){return new PC(t)}),this.register(function(t){return new OC(t)}),this.register(function(t){return new IC(t)}),this.register(function(t){return new CC(t)}),this.register(function(t){return new zC(t)}),this.register(function(t){return new LC(t)}),this.register(function(t){return new FC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new wC(t)}),this.register(function(t){return new kC(t)}),this.register(function(t){return new XC(t)})}load(e,t,a,s){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=Jl.extractUrlBase(e);u=Jl.resolveURL(d,this.path)}else u=Jl.extractUrlBase(e);this.manager.itemStart(e);const f=function(d){s?s(d):console.error(d),l.manager.itemError(e),l.manager.itemEnd(e)},h=new dS(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{l.parse(d,u,function(g){t(g),l.manager.itemEnd(e)},f)}catch(g){f(g)}},a,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,a,s){let l;const u={},f={},h=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===ES){try{u[Ot.KHR_BINARY_GLTF]=new WC(e)}catch(v){s&&s(v);return}l=JSON.parse(u[Ot.KHR_BINARY_GLTF].content)}else l=JSON.parse(h.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new a3(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const v=this.pluginCallbacks[g](d);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[v.name]=v,u[v.name]=!0}if(l.extensionsUsed)for(let g=0;g<l.extensionsUsed.length;++g){const v=l.extensionsUsed[g],_=l.extensionsRequired||[];switch(v){case Ot.KHR_MATERIALS_UNLIT:u[v]=new RC;break;case Ot.KHR_DRACO_MESH_COMPRESSION:u[v]=new qC(l,this.dracoLoader);break;case Ot.KHR_TEXTURE_TRANSFORM:u[v]=new jC;break;case Ot.KHR_MESH_QUANTIZATION:u[v]=new YC;break;default:_.indexOf(v)>=0&&f[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}d.setExtensions(u),d.setPlugins(f),d.parse(a,s)}parseAsync(e,t){const a=this;return new Promise(function(s,l){a.parse(e,t,s,l)})}}function AC(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wC{constructor(e){this.parser=e,this.name=Ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let a=0,s=t.length;a<s;a++){const l=t[a];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,a="light:"+e;let s=t.cache.get(a);if(s)return s;const l=t.json,h=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let d;const g=new ct(16777215);h.color!==void 0&&g.setRGB(h.color[0],h.color[1],h.color[2],ci);const v=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new yf(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new o0(g),d.distance=v;break;case"spot":d=new mS(g),d.distance=v,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),ha(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=t.createUniqueName(h.name||"light_"+e),s=Promise.resolve(d),t.cache.add(a,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,a=this.parser,l=a.json.nodes[e],f=(l.extensions&&l.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(h){return a._getNodeRef(t.cache,f,h)})}}class RC{constructor(){this.name=Ot.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,a){const s=[];e.color=new ct(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],ci),e.opacity=u[3]}l.baseColorTexture!==void 0&&s.push(a.assignTexture(e,"map",l.baseColorTexture,Ln))}return Promise.all(s)}}class CC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class DC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(a.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(f,f)}return Promise.all(l)}}class NC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class LC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class UC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=s.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;t.sheenColor.setRGB(f[0],f[1],f[2],ci)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(a.assignTexture(t,"sheenColorMap",u.sheenColorTexture,Ln)),u.sheenRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class PC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(a.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class OC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(a.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(f[0],f[1],f[2],ci),Promise.all(l)}}class IC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class zC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(a.assignTexture(t,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(f[0],f[1],f[2],ci),u.specularColorTexture!==void 0&&l.push(a.assignTexture(t,"specularColorMap",u.specularColorTexture,Ln)),Promise.all(l)}}class BC{constructor(e){this.parser=e,this.name=Ot.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(a.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(l)}}class FC{constructor(e){this.parser=e,this.name=Ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:sa}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(a.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class HC{constructor(e){this.parser=e,this.name=Ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,a=t.json,s=a.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const l=s.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,u)}}class GC{constructor(e){this.parser=e,this.name=Ot.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,a=this.parser,s=a.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let h=a.textureLoader;if(f.uri){const d=a.options.manager.getHandler(f.uri);d!==null&&(h=d)}return a.loadTextureImage(e,u.source,h)}}class VC{constructor(e){this.parser=e,this.name=Ot.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,a=this.parser,s=a.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let h=a.textureLoader;if(f.uri){const d=a.options.manager.getHandler(f.uri);d!==null&&(h=d)}return a.loadTextureImage(e,u.source,h)}}class kC{constructor(e){this.name=Ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,a=t.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const s=a.extensions[this.name],l=this.parser.getDependency("buffer",s.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(f){const h=s.byteOffset||0,d=s.byteLength||0,g=s.count,v=s.byteStride,_=new Uint8Array(f,h,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,v,_,s.mode,s.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*v);return u.decodeGltfBuffer(new Uint8Array(x),g,v,_,s.mode,s.filter),x})})}else return null}}class XC{constructor(e){this.name=Ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,a=t.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const s=t.meshes[a.mesh];for(const d of s.primitives)if(d.mode!==Vi.TRIANGLES&&d.mode!==Vi.TRIANGLE_STRIP&&d.mode!==Vi.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,f=[],h={};for(const d in u)f.push(this.parser.getDependency("accessor",u[d]).then(g=>(h[d]=g,h[d])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(d=>{const g=d.pop(),v=g.isGroup?g.children:[g],_=d[0].count,x=[];for(const M of v){const E=new bt,S=new H,y=new Is,L=new H(1,1,1),R=new h1(M.geometry,M.material,_);for(let w=0;w<_;w++)h.TRANSLATION&&S.fromBufferAttribute(h.TRANSLATION,w),h.ROTATION&&y.fromBufferAttribute(h.ROTATION,w),h.SCALE&&L.fromBufferAttribute(h.SCALE,w),R.setMatrixAt(w,E.compose(S,y,L));for(const w in h)if(w==="_COLOR_0"){const U=h[w];R.instanceColor=new gm(U.array,U.itemSize,U.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,h[w]);dn.prototype.copy.call(R,M),this.parser.assignFinalMaterial(R),x.push(R)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const ES="glTF",Vl=12,My={JSON:1313821514,BIN:5130562};class WC{constructor(e){this.name=Ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ES)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Vl,l=new DataView(e,Vl);let u=0;for(;u<s;){const f=l.getUint32(u,!0);u+=4;const h=l.getUint32(u,!0);if(u+=4,h===My.JSON){const d=new Uint8Array(e,Vl+u,f);this.content=a.decode(d)}else if(h===My.BIN){const d=Vl+u;this.body=e.slice(d,d+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const a=this.json,s=this.dracoLoader,l=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},h={},d={};for(const g in u){const v=wm[g]||g.toLowerCase();f[v]=u[g]}for(const g in e.attributes){const v=wm[g]||g.toLowerCase();if(u[g]!==void 0){const _=a.accessors[e.attributes[g]],x=bo[_.componentType];d[v]=x.name,h[v]=_.normalized===!0}}return t.getDependency("bufferView",l).then(function(g){return new Promise(function(v,_){s.decodeDracoFile(g,function(x){for(const M in x.attributes){const E=x.attributes[M],S=h[M];S!==void 0&&(E.normalized=S)}v(x)},f,d,ci,_)})})}}class jC{constructor(){this.name=Ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class YC{constructor(){this.name=Ot.KHR_MESH_QUANTIZATION}}class AS extends hc{constructor(e,t,a,s){super(e,t,a,s)}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s*3+s;for(let u=0;u!==s;u++)t[u]=a[l+u];return t}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,h=f*2,d=f*3,g=s-t,v=(a-t)/g,_=v*v,x=_*v,M=e*d,E=M-d,S=-2*x+3*_,y=x-_,L=1-S,R=y-_+v;for(let w=0;w!==f;w++){const U=u[E+w+f],B=u[E+w+h]*g,I=u[M+w+f],j=u[M+w]*g;l[w]=L*U+R*B+S*I+y*j}return l}}const ZC=new Is;class KC extends AS{interpolate_(e,t,a,s){const l=super.interpolate_(e,t,a,s);return ZC.fromArray(l).normalize().toArray(l),l}}const Vi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},by={9728:Un,9729:Pn,9984:Dy,9985:of,9986:Xl,9987:qa},Ty={33071:pa,33648:pf,10497:Os},Mp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JC={CUBICSPLINE:void 0,LINEAR:tc,STEP:ec},bp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function QC(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new vr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ka})),o.DefaultMaterial}function or(o,e,t){for(const a in t.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=t.extensions[a])}function ha(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $C(o,e,t){let a=!1,s=!1,l=!1;for(let d=0,g=e.length;d<g;d++){const v=e[d];if(v.POSITION!==void 0&&(a=!0),v.NORMAL!==void 0&&(s=!0),v.COLOR_0!==void 0&&(l=!0),a&&s&&l)break}if(!a&&!s&&!l)return Promise.resolve(o);const u=[],f=[],h=[];for(let d=0,g=e.length;d<g;d++){const v=e[d];if(a){const _=v.POSITION!==void 0?t.getDependency("accessor",v.POSITION):o.attributes.position;u.push(_)}if(s){const _=v.NORMAL!==void 0?t.getDependency("accessor",v.NORMAL):o.attributes.normal;f.push(_)}if(l){const _=v.COLOR_0!==void 0?t.getDependency("accessor",v.COLOR_0):o.attributes.color;h.push(_)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(h)]).then(function(d){const g=d[0],v=d[1],_=d[2];return a&&(o.morphAttributes.position=g),s&&(o.morphAttributes.normal=v),l&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function e3(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,a=e.weights.length;t<a;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let a=0,s=t.length;a<s;a++)o.morphTargetDictionary[t[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function t3(o){let e;const t=o.extensions&&o.extensions[Ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tp(t.attributes):e=o.indices+":"+Tp(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,s=o.targets.length;a<s;a++)e+=":"+Tp(o.targets[a]);return e}function Tp(o){let e="";const t=Object.keys(o).sort();for(let a=0,s=t.length;a<s;a++)e+=t[a]+":"+o[t[a]]+";";return e}function Rm(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function n3(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const i3=new bt;class a3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,s=-1,l=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(f)===!0;const h=f.match(/Version\/(\d+)/);s=a&&h?parseInt(h[1],10):-1,l=f.indexOf("Firefox")>-1,u=l?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&s<17||l&&u<98?this.textureLoader=new uE(this.options.manager):this.textureLoader=new pE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dS(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const a=this,s=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const f={scene:u[0][s.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:s.asset,parser:a,userData:{}};return or(l,f,s),ha(f,s),Promise.all(a._invokeAll(function(h){return h.afterRoot&&h.afterRoot(f)})).then(function(){for(const h of f.scenes)h.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],a=this.json.meshes||[];for(let s=0,l=t.length;s<l;s++){const u=t[s].joints;for(let f=0,h=u.length;f<h;f++)e[u[f]].isBone=!0}for(let s=0,l=e.length;s<l;s++){const u=e[s];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,a){if(e.refs[t]<=1)return a;const s=a.clone(),l=(u,f)=>{const h=this.associations.get(u);h!=null&&this.associations.set(f,h);for(const[d,g]of u.children.entries())l(g,f.children[d])};return l(a,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let a=0;a<t.length;a++){const s=e(t[a]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const a=[];for(let s=0;s<t.length;s++){const l=e(t[s]);l&&a.push(l)}return a}getDependency(e,t){const a=e+":"+t;let s=this.cache.get(a);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":s=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(a,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const a=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(l,u){return a.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],a=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ot.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(l,u){a.load(Jl.resolveURL(t.uri,s.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(a){const s=t.byteLength||0,l=t.byteOffset||0;return a.slice(l,l+s)})}loadAccessor(e){const t=this,a=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const u=Mp[s.type],f=bo[s.componentType],h=s.normalized===!0,d=new f(s.count*u);return Promise.resolve(new Vn(d,u,h))}const l=[];return s.bufferView!==void 0?l.push(this.getDependency("bufferView",s.bufferView)):l.push(null),s.sparse!==void 0&&(l.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(l).then(function(u){const f=u[0],h=Mp[s.type],d=bo[s.componentType],g=d.BYTES_PER_ELEMENT,v=g*h,_=s.byteOffset||0,x=s.bufferView!==void 0?a.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(x&&x!==v){const y=Math.floor(_/x),L="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let R=t.cache.get(L);R||(E=new d(f,y*x,s.count*x/g),R=new Zy(E,x/g),t.cache.add(L,R)),S=new ac(R,h,_%x/g,M)}else f===null?E=new d(s.count*h):E=new d(f,_,s.count*h),S=new Vn(E,h,M);if(s.sparse!==void 0){const y=Mp.SCALAR,L=bo[s.sparse.indices.componentType],R=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,U=new L(u[1],R,s.sparse.count*y),B=new d(u[2],w,s.sparse.count*h);f!==null&&(S=new Vn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let I=0,j=U.length;I<j;I++){const A=U[I];if(S.setX(A,B[I*h]),h>=2&&S.setY(A,B[I*h+1]),h>=3&&S.setZ(A,B[I*h+2]),h>=4&&S.setW(A,B[I*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,a=this.options,l=t.textures[e].source,u=t.images[l];let f=this.textureLoader;if(u.uri){const h=a.manager.getHandler(u.uri);h!==null&&(f=h)}return this.loadTextureImage(e,l,f)}loadTextureImage(e,t,a){const s=this,l=this.json,u=l.textures[e],f=l.images[t],h=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[h])return this.textureCache[h];const d=this.loadImageSource(t,a).then(function(g){g.flipY=!1,g.name=u.name||f.name||"",g.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(g.name=f.uri);const _=(l.samplers||{})[u.sampler]||{};return g.magFilter=by[_.magFilter]||Pn,g.minFilter=by[_.minFilter]||qa,g.wrapS=Ty[_.wrapS]||Os,g.wrapT=Ty[_.wrapT]||Os,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Un&&g.minFilter!==Pn,s.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(e,t){const a=this,s=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(v=>v.clone());const u=s.images[e],f=self.URL||self.webkitURL;let h=u.uri||"",d=!1;if(u.bufferView!==void 0)h=a.getDependency("bufferView",u.bufferView).then(function(v){d=!0;const _=new Blob([v],{type:u.mimeType});return h=f.createObjectURL(_),h});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(h).then(function(v){return new Promise(function(_,x){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new On(E);S.needsUpdate=!0,_(S)}),t.load(Jl.resolveURL(v,l.path),M,void 0,x)})}).then(function(v){return d===!0&&f.revokeObjectURL(h),ha(v,u),v.userData.mimeType=u.mimeType||n3(u.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),v});return this.sourceCache[e]=g,g}assignTexture(e,t,a,s){const l=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),l.extensions[Ot.KHR_TEXTURE_TRANSFORM]){const f=a.extensions!==void 0?a.extensions[Ot.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const h=l.associations.get(u);u=l.extensions[Ot.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),l.associations.set(u,h)}}return s!==void 0&&(u.colorSpace=s),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let a=e.material;const s=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+a.uuid;let h=this.cache.get(f);h||(h=new $m,ji.prototype.copy.call(h,a),h.color.copy(a.color),h.map=a.map,h.sizeAttenuation=!1,this.cache.add(f,h)),a=h}else if(e.isLine){const f="LineBasicMaterial:"+a.uuid;let h=this.cache.get(f);h||(h=new uc,ji.prototype.copy.call(h,a),h.color.copy(a.color),h.map=a.map,this.cache.add(f,h)),a=h}if(s||l||u){let f="ClonedMaterial:"+a.uuid+":";s&&(f+="derivative-tangents:"),l&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let h=this.cache.get(f);h||(h=a.clone(),l&&(h.vertexColors=!0),u&&(h.flatShading=!0),s&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(f,h),this.associations.set(h,this.associations.get(a))),a=h}e.material=a}getMaterialType(){return vr}loadMaterial(e){const t=this,a=this.json,s=this.extensions,l=a.materials[e];let u;const f={},h=l.extensions||{},d=[];if(h[Ot.KHR_MATERIALS_UNLIT]){const v=s[Ot.KHR_MATERIALS_UNLIT];u=v.getMaterialType(),d.push(v.extendParams(f,l,t))}else{const v=l.pbrMetallicRoughness||{};if(f.color=new ct(1,1,1),f.opacity=1,Array.isArray(v.baseColorFactor)){const _=v.baseColorFactor;f.color.setRGB(_[0],_[1],_[2],ci),f.opacity=_[3]}v.baseColorTexture!==void 0&&d.push(t.assignTexture(f,"map",v.baseColorTexture,Ln)),f.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,f.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(f,"metalnessMap",v.metallicRoughnessTexture)),d.push(t.assignTexture(f,"roughnessMap",v.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,f)})))}l.doubleSided===!0&&(f.side=na);const g=l.alphaMode||bp.OPAQUE;if(g===bp.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,g===bp.MASK&&(f.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==li&&(d.push(t.assignTexture(f,"normalMap",l.normalTexture)),f.normalScale=new Ie(1,1),l.normalTexture.scale!==void 0)){const v=l.normalTexture.scale;f.normalScale.set(v,v)}if(l.occlusionTexture!==void 0&&u!==li&&(d.push(t.assignTexture(f,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==li){const v=l.emissiveFactor;f.emissive=new ct().setRGB(v[0],v[1],v[2],ci)}return l.emissiveTexture!==void 0&&u!==li&&d.push(t.assignTexture(f,"emissiveMap",l.emissiveTexture,Ln)),Promise.all(d).then(function(){const v=new u(f);return l.name&&(v.name=l.name),ha(v,l),t.associations.set(v,{materials:e}),l.extensions&&or(s,v,l),v})}createUniqueName(e){const t=$t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,a=this.extensions,s=this.primitiveCache;function l(f){return a[Ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(h){return Ey(h,f,t)})}const u=[];for(let f=0,h=e.length;f<h;f++){const d=e[f],g=t3(d),v=s[g];if(v)u.push(v.promise);else{let _;d.extensions&&d.extensions[Ot.KHR_DRACO_MESH_COMPRESSION]?_=l(d):_=Ey(new gn,d,t),s[g]={primitive:d,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,a=this.json,s=this.extensions,l=a.meshes[e],u=l.primitives,f=[];for(let h=0,d=u.length;h<d;h++){const g=u[h].material===void 0?QC(this.cache):this.getDependency("material",u[h].material);f.push(g)}return f.push(t.loadGeometries(u)),Promise.all(f).then(function(h){const d=h.slice(0,h.length-1),g=h[h.length-1],v=[];for(let x=0,M=g.length;x<M;x++){const E=g[x],S=u[x];let y;const L=d[x];if(S.mode===Vi.TRIANGLES||S.mode===Vi.TRIANGLE_STRIP||S.mode===Vi.TRIANGLE_FAN||S.mode===void 0)y=l.isSkinnedMesh===!0?new c1(E,L):new Pt(E,L),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===Vi.TRIANGLE_STRIP?y.geometry=Sy(y.geometry,zy):S.mode===Vi.TRIANGLE_FAN&&(y.geometry=Sy(y.geometry,pm));else if(S.mode===Vi.LINES)y=new Qm(E,L);else if(S.mode===Vi.LINE_STRIP)y=new Tf(E,L);else if(S.mode===Vi.LINE_LOOP)y=new g1(E,L);else if(S.mode===Vi.POINTS)y=new $y(E,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&e3(y,l),y.name=t.createUniqueName(l.name||"mesh_"+e),ha(y,l),S.extensions&&or(s,y,S),t.assignFinalMaterial(y),v.push(y)}for(let x=0,M=v.length;x<M;x++)t.associations.set(v[x],{meshes:e,primitives:x});if(v.length===1)return l.extensions&&or(s,v[0],l),v[0];const _=new _i;l.extensions&&or(s,_,l),t.associations.set(_,{meshes:e});for(let x=0,M=v.length;x<M;x++)_.add(v[x]);return _})}loadCamera(e){let t;const a=this.json.cameras[e],s=a[a.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?t=new ii(gi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):a.type==="orthographic"&&(t=new dc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),a.name&&(t.name=this.createUniqueName(a.name)),ha(t,a),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],a=[];for(let s=0,l=t.joints.length;s<l;s++)a.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",t.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(s){const l=s.pop(),u=s,f=[],h=[];for(let d=0,g=u.length;d<g;d++){const v=u[d];if(v){f.push(v);const _=new bt;l!==null&&_.fromArray(l.array,d*16),h.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Km(f,h)})}loadAnimation(e){const t=this.json,a=this,s=t.animations[e],l=s.name?s.name:"animation_"+e,u=[],f=[],h=[],d=[],g=[];for(let v=0,_=s.channels.length;v<_;v++){const x=s.channels[v],M=s.samplers[x.sampler],E=x.target,S=E.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,L=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(u.push(this.getDependency("node",S)),f.push(this.getDependency("accessor",y)),h.push(this.getDependency("accessor",L)),d.push(M),g.push(E))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(d),Promise.all(g)]).then(function(v){const _=v[0],x=v[1],M=v[2],E=v[3],S=v[4],y=[];for(let R=0,w=_.length;R<w;R++){const U=_[R],B=x[R],I=M[R],j=E[R],A=S[R];if(U===void 0)continue;U.updateMatrix&&U.updateMatrix();const N=a._createAnimationTracks(U,B,I,j,A);if(N)for(let k=0;k<N.length;k++)y.push(N[k])}const L=new iE(l,void 0,y);return ha(L,s),L})}createNodeMesh(e){const t=this.json,a=this,s=t.nodes[e];return s.mesh===void 0?null:a.getDependency("mesh",s.mesh).then(function(l){const u=a._getNodeRef(a.meshCache,s.mesh,l);return s.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let h=0,d=s.weights.length;h<d;h++)f.morphTargetInfluences[h]=s.weights[h]}),u})}loadNode(e){const t=this.json,a=this,s=t.nodes[e],l=a._loadNodeShallow(e),u=[],f=s.children||[];for(let d=0,g=f.length;d<g;d++)u.push(a.getDependency("node",f[d]));const h=s.skin===void 0?Promise.resolve(null):a.getDependency("skin",s.skin);return Promise.all([l,Promise.all(u),h]).then(function(d){const g=d[0],v=d[1],_=d[2];_!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(_,i3)});for(let x=0,M=v.length;x<M;x++)g.add(v[x]);return g})}_loadNodeShallow(e){const t=this.json,a=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],u=l.name?s.createUniqueName(l.name):"",f=[],h=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return h&&f.push(h),l.camera!==void 0&&f.push(s.getDependency("camera",l.camera).then(function(d){return s._getNodeRef(s.cameraCache,l.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){f.push(d)}),this.nodeCache[e]=Promise.all(f).then(function(d){let g;if(l.isBone===!0?g=new Qy:d.length>1?g=new _i:d.length===1?g=d[0]:g=new dn,g!==d[0])for(let v=0,_=d.length;v<_;v++)g.add(d[v]);if(l.name&&(g.userData.name=l.name,g.name=u),ha(g,l),l.extensions&&or(a,g,l),l.matrix!==void 0){const v=new bt;v.fromArray(l.matrix),g.applyMatrix4(v)}else l.translation!==void 0&&g.position.fromArray(l.translation),l.rotation!==void 0&&g.quaternion.fromArray(l.rotation),l.scale!==void 0&&g.scale.fromArray(l.scale);if(!s.associations.has(g))s.associations.set(g,{});else if(l.mesh!==void 0&&s.meshCache.refs[l.mesh]>1){const v=s.associations.get(g);s.associations.set(g,{...v})}return s.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,a=this.json.scenes[e],s=this,l=new _i;a.name&&(l.name=s.createUniqueName(a.name)),ha(l,a),a.extensions&&or(t,l,a);const u=a.nodes||[],f=[];for(let h=0,d=u.length;h<d;h++)f.push(s.getDependency("node",u[h]));return Promise.all(f).then(function(h){for(let g=0,v=h.length;g<v;g++)l.add(h[g]);const d=g=>{const v=new Map;for(const[_,x]of s.associations)(_ instanceof ji||_ instanceof On)&&v.set(_,x);return g.traverse(_=>{const x=s.associations.get(_);x!=null&&v.set(_,x)}),v};return s.associations=d(l),l})}_createAnimationTracks(e,t,a,s,l){const u=[],f=e.name?e.name:e.uuid,h=[];Ls[l.path]===Ls.weights?e.traverse(function(_){_.morphTargetInfluences&&h.push(_.name?_.name:_.uuid)}):h.push(f);let d;switch(Ls[l.path]){case Ls.weights:d=No;break;case Ls.rotation:d=Lo;break;case Ls.translation:case Ls.scale:d=Uo;break;default:switch(a.itemSize){case 1:d=No;break;case 2:case 3:default:d=Uo;break}break}const g=s.interpolation!==void 0?JC[s.interpolation]:tc,v=this._getArrayFromAccessor(a);for(let _=0,x=h.length;_<x;_++){const M=new d(h[_]+"."+Ls[l.path],t.array,v,g);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const a=Rm(t.constructor),s=new Float32Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=t[l]*a;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const s=this instanceof Lo?KC:AS;return new s(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function s3(o,e,t){const a=e.attributes,s=new aa;if(a.POSITION!==void 0){const f=t.json.accessors[a.POSITION],h=f.min,d=f.max;if(h!==void 0&&d!==void 0){if(s.set(new H(h[0],h[1],h[2]),new H(d[0],d[1],d[2])),f.normalized){const g=Rm(bo[f.componentType]);s.min.multiplyScalar(g),s.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const f=new H,h=new H;for(let d=0,g=l.length;d<g;d++){const v=l[d];if(v.POSITION!==void 0){const _=t.json.accessors[v.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(h.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),h.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),h.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const E=Rm(bo[_.componentType]);h.multiplyScalar(E)}f.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(f)}o.boundingBox=s;const u=new xa;s.getCenter(u.center),u.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=u}function Ey(o,e,t){const a=e.attributes,s=[];function l(u,f){return t.getDependency("accessor",u).then(function(h){o.setAttribute(f,h)})}for(const u in a){const f=wm[u]||u.toLowerCase();f in o.attributes||s.push(l(a[u],f))}if(e.indices!==void 0&&!o.index){const u=t.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});s.push(u)}return Bt.workingColorSpace!==ci&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Bt.workingColorSpace}" not supported.`),ha(o,e),s3(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?$C(o,e.targets,t):o})}const hr=[{id:0,name:"Sistema Solar",cost:0,rarityMultiplier:1,style:{planetColor1:"#1e3c72",planetColor2:"#2a5298",atmosphereColor:4491519,ringColor:8965375,hasRings:!0}},{id:1,name:"Nebulosa Roja",cost:1e4,rarityMultiplier:1.5,style:{planetColor1:"#7a1f1f",planetColor2:"#a83232",atmosphereColor:16729156,ringColor:16737894,hasRings:!1}},{id:2,name:"Cúmulo Estelar",cost:3e4,rarityMultiplier:2,style:{planetColor1:"#4a1e7a",planetColor2:"#6b2d9f",atmosphereColor:11158783,ringColor:13395711,hasRings:!0}},{id:3,name:"Galaxia Remota",cost:5e4,rarityMultiplier:2.5,style:{planetColor1:"#1e4a3c",planetColor2:"#2d6b5a",atmosphereColor:4521864,ringColor:6750122,hasRings:!0}},{id:4,name:"Agujero Negro",cost:1e5,rarityMultiplier:3.5,style:{planetColor1:"#0a0a0a",planetColor2:"#1a1a1a",atmosphereColor:4456703,ringColor:6684927,hasRings:!0}}],nf=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,r3=o=>o*o*(3-2*o),sn=(o,e,t,a)=>gi.lerp(o,e,1-Math.exp(-t*a)),o3=({missionState:o,level:e,totalDuration:t,timeLeft:a,planet:s})=>{const l=Dt.useRef(null),u=Dt.useRef(null),f=Dt.useRef(null),h=Dt.useRef(null),d=Dt.useRef(null),g=Dt.useRef([]),v=Dt.useRef(null),_=Dt.useRef(null),x=Dt.useRef(null),M=Dt.useRef({shipPos:new H(0,0,0),shipRot:new Ni(0,Math.PI/2,0),shipVelocity:new H(0,0,0),cameraPos:new H(0,3,12),cameraTarget:new H(0,0,0),engineIntensity:0,prevProgress:0,missionStartTime:0,isMissionActive:!1,smoothProgress:0}),E=Dt.useRef([]),S=(y,L)=>{const w=document.createElement("canvas");w.width=512,w.height=512;const U=w.getContext("2d");U.fillStyle=y,U.fillRect(0,0,512,512);for(let B=0;B<300;B++){const I=Math.random()*512,j=Math.random()*512,A=Math.random()*40+5;U.beginPath(),U.arc(I,j,A,0,Math.PI*2),U.fillStyle=L,U.globalAlpha=.2,U.fill()}return new _m(w)};return Dt.useEffect(()=>{const y=new Yy;y.fog=new bf(657952,.005);const L=new ii(50,window.innerWidth/window.innerHeight,.1,1e3);_.current=L;const R=new SS({alpha:!1,antialias:!0,powerPreference:"high-performance"});R.setSize(window.innerWidth,window.innerHeight),R.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),R.toneMapping=cc,R.toneMappingExposure=1.2,l.current&&(l.current.innerHTML="",l.current.appendChild(R.domElement));const w=new bS(y,L),U=new _r(new Ie(window.innerWidth,window.innerHeight),1.5,.4,.85);U.threshold=.2,U.strength=1.2,U.radius=.5;const B=new MS(R);B.addPass(w),B.addPass(U);const I=new pS(4210784,0,3);y.add(I);const j=new yf(16777215,2);j.position.set(10,10,10),y.add(j);const A=new mS(10309341,10);A.position.set(-5,5,-5),y.add(A);const N=new _i;y.add(N),u.current=N;const k=()=>{const W=new _i,V=new bm({color:9055202}),ae=new bm({color:1118481}),xe=new sa({color:8965375,roughness:.2,metalness:.9,transmission:.9,transparent:!0}),ye=new vr({color:12632256,metalness:.8,roughness:.3}),ce=new ta(1,32,32),he=new Pt(ce,V);he.scale.set(1.8,1,1),W.add(he);const Le=new Pt(new So(.98,.06,16,64),ae);Le.rotation.y=Math.PI/2,W.add(Le);const We=new Pt(new So(.8,.06,16,64),ae);We.rotation.y=Math.PI/2,We.position.x=.8,W.add(We);const qe=new Pt(new So(.8,.06,16,64),ae);qe.rotation.y=Math.PI/2,qe.position.x=-.8,W.add(qe);const Fe=new Pt(new So(1,.06,16,64),ae);Fe.rotation.x=Math.PI/2,Fe.scale.set(1.8,1,1),W.add(Fe);const Ge=new Pt(new e0(.15,.4,4,8),xe);Ge.rotation.z=Math.PI/2,Ge.rotation.x=Math.PI/6,Ge.position.set(1,.4,.25),W.add(Ge);const q=Ge.clone();q.position.set(1,.4,-.25),W.add(q);const Oe=new sS;Oe.moveTo(0,0),Oe.quadraticCurveTo(.5,.5,.5,1),Oe.lineTo(-.8,.8),Oe.quadraticCurveTo(-.5,.4,-.8,0);const De=new Pt(new a0(Oe,{depth:.1,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05}),V);De.position.set(-.5,.85,-.05),W.add(De);const Xe=new xr(1,.1,.8),Ne=new Pt(Xe,V);Ne.position.set(-.5,-.5,.8),Ne.rotation.set(.5,0,.2),W.add(Ne);const be=new Pt(Xe,V);be.position.set(-.5,-.5,-.8),be.rotation.set(-.5,0,.2),W.add(be);const ze=new Pt(new mr(.5,.7,.6,32),ye);return ze.rotation.z=Math.PI/2,ze.position.set(-1.8,0,0),W.add(ze),W},J=new TS,ee="/orbital-scavengers/nave.glb";console.log(`Intentando cargar modelo desde: ${ee}`),J.load(ee,W=>{console.log("nave.glb cargado con éxito!",W);const V=W.scene,xe=new aa().setFromObject(V).getSize(new H);console.log("Tamaño de nave.glb:",xe),V.rotation.y=0;const ye=Math.max(xe.x,xe.y,xe.z),ce=3.45;if(ye>0){const he=ce/ye;V.scale.set(he,he,he),console.log("Escalando nave.glb por factor:",he)}else V.scale.set(.5,.5,.5);N.clear(),N.add(V)},W=>{console.log(W.loaded/W.total*100+"% cargado")},W=>{console.error("Error al cargar nave.glb:",W),console.log("Usando nave por defecto (fallback).");const V=k();N.clear(),N.add(V)}),N.rotation.y=Math.PI/2;const le=new o0(16755200,0,10);le.position.set(-2.5,0,0),y.add(le),v.current=le;const Y=new _i,O=s?.id??0,G=hr[O]||hr[0],ne=S(G.style.planetColor1,G.style.planetColor2),Te=new vr({map:ne,roughness:.8}),Me=new Pt(new ta(60,64,64),Te);Y.add(Me);const z=new li({color:G.style.atmosphereColor,transparent:!0,opacity:.2,blending:vi,side:Qn}),ie=new Pt(new ta(64,64,64),z);if(Y.add(ie),G.style.hasRings){const W=new s0(80,110,64),V=new li({color:G.style.ringColor,side:na,transparent:!0,opacity:.4}),ae=new Pt(W,V);ae.rotation.x=Math.PI/2.5,Y.add(ae)}Y.position.set(0,10,-300),y.add(Y),f.current=Y;const _e=new _i,we=(W,V,ae,xe=16777215)=>{const ye=new gn,ce=new Float32Array(W*3);for(let We=0;We<W*3;We++)ce[We]=(Math.random()-.5)*1500;ye.setAttribute("position",new Vn(ce,3));const he=new $m({color:xe,size:V,transparent:!0,opacity:.8,sizeAttenuation:!0}),Le=new $y(ye,he);return Le.userData={speedFactor:ae},Le},Be=we(2e3,.6,.2),oe=we(1500,1,.5),ve=we(500,2,1);_e.add(Be,oe,ve),y.add(_e),h.current=_e;const Ve=new _i,ke=200,Ke=new gn,vt=new Float32Array(ke*6);for(let W=0;W<ke;W++){let V=(Math.random()-.5)*500,ae=(Math.random()-.5)*500;Math.abs(V)<50&&Math.abs(ae)<50&&(V+=V>0?50:-50,ae+=ae>0?50:-50);const xe=(Math.random()-.5)*1e3,ye=100+Math.random()*200;vt[W*6]=V,vt[W*6+1]=ae,vt[W*6+2]=xe,vt[W*6+3]=V,vt[W*6+4]=ae,vt[W*6+5]=xe+ye}Ke.setAttribute("position",new Vn(vt,3));const wt=new uc({color:8965375,transparent:!0,opacity:0,blending:vi}),pt=new Qm(Ke,wt);Ve.add(pt);const Ee=new mr(40,40,1e3,16,1,!0),Pe=new li({color:4456703,transparent:!0,opacity:0,side:Qn,blending:vi,wireframe:!0}),Re=new Pt(Ee,Pe);Re.rotation.x=Math.PI/2,Ve.add(Re),y.add(Ve),d.current={group:Ve,lines:pt,tunnel:Re,speed:0};const je=[],F=new t0(.2,80,8);F.rotateX(Math.PI/2);const at=new li({color:16777215,transparent:!0,opacity:1});for(let W=0;W<5;W++){const V=new Pt(F,at.clone());V.visible=!1,y.add(V),je.push({mesh:V,active:!1,life:0,velocity:new H})}g.current=je;const Ye=new ta(.15,6,6),lt=new ta(.25,4,4),He=new ta(.08,4,4),P=(W,V=.9)=>new li({color:W,transparent:!0,opacity:V,blending:vi,depthWrite:!1});E.current=[];for(let W=0;W<150;W++){const V=W<50?"core":W<100?"outer":"spark",ae=V==="core"?Ye:V==="outer"?lt:He,xe=V==="core"?16777215:V==="outer"?16755200:16733440,ye=new Pt(ae,P(xe,V==="core"?1:.8));ye.visible=!1,y.add(ye),E.current.push({mesh:ye,life:0,maxLife:1,velocity:new H,type:V,baseScale:V==="core"?.8:V==="outer"?1.2:.5})}L.position.set(0,3,12),L.lookAt(0,0,0),x.current=new l0,M.current.shipPos.set(0,0,0),M.current.cameraPos.copy(L.position);let T;const Z=()=>{T=requestAnimationFrame(Z);const W=Math.min(x.current.getDelta(),.1),V=W*60,ae=window.missionActive,xe=window.totalTime||1,ye=Date.now()*.001,ce=M.current;let he=0;if(ae){ce.isMissionActive||(ce.isMissionActive=!0,ce.missionStartTime=performance.now(),ce.smoothProgress=0);const Je=(performance.now()-ce.missionStartTime)/1e3,it=Math.min(Je/xe,.999);ce.smoothProgress=sn(ce.smoothProgress,it,6,W),he=ce.smoothProgress}else ce.isMissionActive&&(ce.isMissionActive=!1,ce.smoothProgress=sn(ce.smoothProgress,0,3,W)),he=ce.smoothProgress;if(u.current){let Ue=0,Je=0,it=0,Rt=0,Tt=0,vn=0;const Cn=4,rn=3;if(ae){if(u.current.visible=!0,he<.35){const en=nf(he/.35);Ue=-200*en;const ai=Math.sin(en*Math.PI)*12;Je=15*en+ai,Rt=Math.PI/2,vn=Math.cos(en*Math.PI)*.12,Tt=Math.sin(ye*1.2)*.06}else if(he<.7)u.current.visible=!1,Ue=-200,Je=15;else{u.current.visible=!0;const en=nf((he-.7)/.3),ai=-200,Qa=15;Ue=ai*(1-en);const $a=Math.sin(en*Math.PI)*8;Je=Qa*(1-en)+$a,Rt=-Math.PI/2,vn=Math.cos(en*Math.PI)*.08,Tt=Math.sin(ye*1)*.04*(1-en)}ce.shipPos.x=sn(ce.shipPos.x,it,Cn,W),ce.shipPos.y=sn(ce.shipPos.y,Je,Cn,W),ce.shipPos.z=sn(ce.shipPos.z,Ue,Cn,W),u.current.position.copy(ce.shipPos);let Bn=ce.shipRot.y,ln=Rt-Bn;for(;ln>Math.PI;)ln-=Math.PI*2;for(;ln<-Math.PI;)ln+=Math.PI*2;ce.shipRot.y=sn(Bn,Bn+ln,rn,W),ce.shipRot.z=sn(ce.shipRot.z,Tt,rn,W),ce.shipRot.x=sn(ce.shipRot.x,vn,rn,W),u.current.rotation.y=ce.shipRot.y,u.current.rotation.z=ce.shipRot.z,u.current.rotation.x=ce.shipRot.x}else{ce.shipRot.y+=.008*V;const $n=Math.sin(ye*1.5)*.4+Math.sin(ye*2.3)*.15,xn=Math.sin(ye*1.1)*.1;ce.shipPos.y=sn(ce.shipPos.y,$n,3,W),ce.shipPos.z=sn(ce.shipPos.z,0,2,W),ce.shipPos.x=sn(ce.shipPos.x,xn,3,W),ce.shipRot.z=sn(ce.shipRot.z,Math.sin(ye*.8)*.05,2,W),ce.shipRot.x=sn(ce.shipRot.x,Math.sin(ye*1.2)*.03,2,W),u.current.position.copy(ce.shipPos),u.current.rotation.y=ce.shipRot.y,u.current.rotation.z=ce.shipRot.z,u.current.rotation.x=ce.shipRot.x}}if(_.current)if(ae){let Je,it;if(he<.35){const Rt=ce.shipPos.z,Tt=35;Je=new H(20+Math.sin(ye*.3)*2,12+Math.sin(ye*.5)*1.5,Rt+Tt),it=new H(0,ce.shipPos.y,Rt-20)}else if(he<.55)Je=new H(30+Math.sin(ye*.4)*2,20+Math.sin(ye*.6)*1.5,-170),it=new H(0,8,-220);else if(he<.7){const Rt=(he-.55)/.15;Je=new H(35-Rt*10,25+Rt*5,-150+Rt*50),it=new H(0,ce.shipPos.y,ce.shipPos.z)}else{const Rt=ce.shipPos.z,Tt=(he-.7)/.3;Je=new H(-20-Math.sin(ye*.3)*2,12+Math.sin(ye*.5)*1.5-Tt*5,Rt-35),it=new H(0,ce.shipPos.y,Rt+20)}ce.cameraPos.x=sn(ce.cameraPos.x,Je.x,2.5,W),ce.cameraPos.y=sn(ce.cameraPos.y,Je.y,2.5,W),ce.cameraPos.z=sn(ce.cameraPos.z,Je.z,2.5,W),_.current.position.copy(ce.cameraPos),ce.cameraTarget.x=sn(ce.cameraTarget.x,it.x,2.5*1.5,W),ce.cameraTarget.y=sn(ce.cameraTarget.y,it.y,2.5*1.5,W),ce.cameraTarget.z=sn(ce.cameraTarget.z,it.z,2.5*1.5,W),_.current.lookAt(ce.cameraTarget)}else{const Je=new H(Math.sin(ye*.2)*2,3+Math.sin(ye*.3)*.5,12+Math.sin(ye*.25)*1);if(ce.cameraPos.x=sn(ce.cameraPos.x,Je.x,2.5,W),ce.cameraPos.y=sn(ce.cameraPos.y,Je.y,2.5,W),ce.cameraPos.z=sn(ce.cameraPos.z,Je.z,2.5,W),_.current.position.copy(ce.cameraPos),u.current){const it=new H(ce.shipPos.x,ce.shipPos.y*.5,ce.shipPos.z-5);ce.cameraTarget.x=sn(ce.cameraTarget.x,it.x,3,W),ce.cameraTarget.y=sn(ce.cameraTarget.y,it.y,3,W),ce.cameraTarget.z=sn(ce.cameraTarget.z,it.z,3,W),_.current.lookAt(ce.cameraTarget)}}f.current&&(f.current.rotation.y+=8e-4*V,f.current.rotation.x=Math.sin(ye*.1)*.02);let Le=.5;const We=he>.42&&he<.58,qe=he>.55&&he<.72;if(ae)if(We)Le=.1;else if(qe)Le=.5;else if(he<.35)Le=8*nf(he/.35);else if(he>.7){const Ue=(he-.7)/.3;Le=8*(1-nf(Ue)*.5)}else Le=2;h.current.userData.speed||(h.current.userData.speed=.1);const Fe=gi.lerp(h.current.userData.speed,Le,.03);if(h.current.userData.speed=Fe,h.current&&h.current.children.forEach(Ue=>{const Je=Ue.userData.speedFactor*Fe,it=Ue.geometry.attributes.position.array,Rt=it.length/3;for(let Tt=0;Tt<Rt;Tt++)it[Tt*3+2]+=Je*V*10,it[Tt*3+2]>200&&(it[Tt*3+2]-=1500);Ue.geometry.attributes.position.needsUpdate=!0}),d.current){const{lines:Ue,tunnel:Je}=d.current,it=Fe>3&&he<.5,Rt=it?Math.min((Fe-3)*.2,.8):0;if(Ue.material.opacity=sn(Ue.material.opacity,Rt,5,W),Ue.material.opacity>.01){const Tt=Ue.geometry.attributes.position.array,vn=Tt.length/6,Cn=Fe*20;for(let rn=0;rn<vn;rn++)if(Tt[rn*6+2]+=Cn*V,Tt[rn*6+5]+=Cn*V,Tt[rn*6+2]>200){const $n=Tt[rn*6+5]-Tt[rn*6+2],xn=-800-Math.random()*200;Tt[rn*6+2]=xn,Tt[rn*6+5]=xn+$n}Ue.geometry.attributes.position.needsUpdate=!0}Je.material.opacity=sn(Je.material.opacity,it?.3:0,2,W),Je.rotation.z+=Fe*.005*V}const Ge=g.current;if(Math.random()<.02*(ae?2:1)){const Ue=Ge.find(Je=>!Je.active);if(Ue){Ue.active=!0,Ue.life=1;const Je=(Math.random()-.5)*400,it=(Math.random()-.5)*200+50;Ue.mesh.position.set(Je,it,-400),Ue.velocity=new H((Math.random()-.5)*20,(Math.random()-.5)*10,200+Math.random()*100),Ue.mesh.visible=!0,Ue.mesh.material.opacity=1,Ue.mesh.lookAt(Ue.mesh.position.x+Ue.velocity.x,Ue.mesh.position.y+Ue.velocity.y,Ue.mesh.position.z+Ue.velocity.z)}}Ge.forEach(Ue=>{Ue.active&&(Ue.mesh.position.add(Ue.velocity.clone().multiplyScalar(W*2)),Ue.life-=W*1.5,Ue.mesh.material.opacity=Ue.life,(Ue.life<=0||Ue.mesh.position.z>100)&&(Ue.active=!1,Ue.mesh.visible=!1))});const q=E.current,Oe=he>.43&&he<.57,Xe=Oe?.3:ae?.95:.6,Ne=ae?2.5:1,be=ae?16777215:16777130,ze=ae?52479:16755200,_t=ae?26367:16733440,Ft=Math.random()<Xe?ae?3:2:0;for(let Ue=0;Ue<Ft;Ue++){const Je=q.find(it=>it.life<=0);if(Je&&u.current){Je.maxLife=.8+Math.random()*.4,Je.life=Je.maxLife,Je.mesh.visible=!0;const it=-1.8-Math.random()*.3,Rt=Je.type==="core"?.1:Je.type==="outer"?.25:.15,Tt=new H(it,(Math.random()-.5)*Rt,(Math.random()-.5)*Rt);Tt.applyEuler(u.current.rotation),Je.mesh.position.copy(u.current.position).add(Tt);const vn=(ae?.6:.15)*(Je.type==="core"?1.2:1),Cn=Je.type==="spark"?.15:.08,rn=new H(-vn-Math.random()*.15,(Math.random()-.5)*Cn,(Math.random()-.5)*Cn);rn.applyEuler(u.current.rotation),Je.velocity.copy(rn);const $n=Je.type==="core"?be:Je.type==="outer"?ze:_t;Je.mesh.material.color.setHex($n),Je.mesh.material.opacity=1}}if(q.forEach(Ue=>{if(Ue.life>0){const Je=Ue.life/Ue.maxLife,it=.025*V*(Ue.type==="spark"?1.5:1);Ue.life-=it,Ue.velocity.multiplyScalar(.98),Ue.velocity.y-=.002*V,Ue.velocity.x+=(Math.random()-.5)*.01,Ue.velocity.y+=(Math.random()-.5)*.008,Ue.velocity.z+=(Math.random()-.5)*.008,Ue.mesh.position.add(Ue.velocity.clone().multiplyScalar(V));const Rt=r3(Je)*Ne*Ue.baseScale;Ue.mesh.scale.setScalar(Rt);const Tt=Je*Je;Ue.mesh.material.opacity=Tt,Ue.life<=0&&(Ue.mesh.visible=!1)}}),v.current&&u.current){const Ue=Math.sin(ye*8)*.3+Math.sin(ye*13)*.15;let Je=Oe?1.5:ae?10+Ue*3:3+Ue;ce.engineIntensity=sn(ce.engineIntensity,Je,4,W),v.current.intensity=ce.engineIntensity;const it=ae?43775:16755200,Rt=new ct(v.current.color),Tt=new ct(it);Rt.lerp(Tt,.05),v.current.color.copy(Rt);const vn=new H(-2.5,0,0);vn.applyEuler(u.current.rotation),v.current.position.copy(u.current.position).add(vn)}B.render()};Z();const pe=()=>{!_.current||!l.current||(_.current.aspect=window.innerWidth/window.innerHeight,_.current.updateProjectionMatrix(),R.setSize(window.innerWidth,window.innerHeight),B.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",pe),()=>{window.removeEventListener("resize",pe),cancelAnimationFrame(T),l.current&&(l.current.innerHTML=""),R.dispose()}},[e,s]),Dt.useEffect(()=>{window.missionActive=o==="mining",window.totalTime=t,window.currentTime=a},[o,t,a]),ge.jsx("div",{ref:l,id:"canvas-container",className:"absolute top-0 left-0 w-full h-full z-0 bg-black"})},l3={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`};class c3 extends yr{constructor(e=.5,t=!1){super();const a=l3;this.uniforms=Co.clone(a.uniforms),this.material=new Gn({name:a.name,uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms.intensity.value=e,this.uniforms.grayscale.value=t,this._fsQuad=new Rf(this.material)}render(e,t,a,s){this.uniforms.tDiffuse.value=a.texture,this.uniforms.time.value+=s,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const af={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class u3 extends yr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Co.clone(af.uniforms),this.material=new uS({name:af.name,uniforms:this.uniforms,vertexShader:af.vertexShader,fragmentShader:af.fragmentShader}),this._fsQuad=new Rf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lm?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Um?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Om?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Im?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pm&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const f3={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ie(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},h3={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`},d3=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,p3=o=>1-Math.pow(1-o,4),sf=o=>o*o*(3-2*o),lr=(o,e,t,a)=>gi.lerp(o,e,1-Math.exp(-t*a)),m3=({missionState:o,timeLeft:e,totalDuration:t,planet:a})=>{const s=Dt.useRef(null),l=Dt.useRef(null),u=Dt.useRef(null),f=Dt.useRef(null),h=Dt.useRef([]),d=Dt.useRef(null),g=Dt.useRef(null);Dt.useRef(null);const v=Dt.useRef(null),_=Dt.useRef(null),x=Dt.useRef({shipPos:new H(0,50,0),shipRot:new Ni(0,0,0),cameraPos:new H(0,5,20),cameraTarget:new H(0,5,0),cameraFov:60,engineIntensity:0,shakeIntensity:0,missionStartTime:0,isMissionActive:!1,smoothProgress:0,opacity:0,shockwaveTime:-1}),M=(S,y)=>{const R=document.createElement("canvas");R.width=512,R.height=512;const w=R.getContext("2d");w.fillStyle=S,w.fillRect(0,0,512,512);for(let U=0;U<400;U++){const B=Math.random()*512,I=Math.random()*512,j=Math.random()*20+2;w.beginPath(),w.arc(B,I,j,0,Math.PI*2),w.fillStyle=y,w.globalAlpha=.3,w.fill()}return new _m(R)},E=S=>{const L=document.createElement("canvas");L.width=256,L.height=256;const R=L.getContext("2d"),w=R.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2),U=new ct(S),B=j=>`rgba(${Math.floor(U.r*255)}, ${Math.floor(U.g*255)}, ${Math.floor(U.b*255)}, ${j})`;w.addColorStop(0,B(1)),w.addColorStop(.2,B(.8)),w.addColorStop(.5,B(.25)),w.addColorStop(1,B(0)),R.fillStyle=w,R.fillRect(0,0,256,256);const I=new _m(L);return I.colorSpace=Ln,I};return Dt.useEffect(()=>{const S=new Yy,y=new ct(a?.style?.atmosphereColor||4491519),L=a?.style?.planetColor1||"#1e3c72",R=a?.style?.planetColor2||"#2a5298";S.fog=new bf(y,.018),S.background=y;const w=new ii(60,window.innerWidth/window.innerHeight,.1,1e3);u.current=w;const U=new SS({alpha:!0,antialias:!0,powerPreference:"high-performance"});U.setSize(window.innerWidth,window.innerHeight),U.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),U.toneMapping=cc,U.toneMappingExposure=1.1,U.outputColorSpace=Ln,U.useLegacyLights=!1,U.shadowMap.enabled=!0,U.shadowMap.type=wy,s.current&&(s.current.innerHTML="",s.current.appendChild(U.domElement));const B=new bS(S,w),I=new _r(new Ie(window.innerWidth,window.innerHeight),.9,.45,.85);I.threshold=.55,I.strength=.7,I.radius=.55;const j=new c3(.28,.18,648,!1),A=new Am(h3);A.uniforms.offset.value=.88,A.uniforms.darkness.value=1.15;const N=new Am(f3);N.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight);const k=new u3,J=new MS(U);J.addPass(B),J.addPass(I),J.addPass(j),J.addPass(A),J.addPass(N),J.addPass(k);const ee=new pS(y,657936,.9);S.add(ee);const le=new yf(16777215,2.2);le.position.set(70,120,35),le.castShadow=!0,le.shadow.mapSize.set(1024,1024),le.shadow.camera.near=10,le.shadow.camera.far=300,le.shadow.camera.left=-80,le.shadow.camera.right=80,le.shadow.camera.top=80,le.shadow.camera.bottom=-80,S.add(le);const Y=new yf(y.clone().lerp(new ct(16777215),.25),1.35);Y.position.set(-60,45,-80),S.add(Y);const O=new ta(800,48,48),G=new Gn({uniforms:{topColor:{value:y.clone().multiplyScalar(1.1)},bottomColor:{value:new ct(329226)},sunDir:{value:le.position.clone().normalize()},time:{value:0}},vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform vec3 sunDir;
        uniform float time;
        varying vec3 vWorldPos;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 345.45));
          p += dot(p, p + 34.345);
          return fract(p.x * p.y);
        }

        void main() {
          vec3 dir = normalize(vWorldPos);
          float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
          vec3 col = mix(bottomColor, topColor, pow(h, 1.35));

          // soft horizon haze
          float horizon = pow(1.0 - abs(dir.y), 5.0);
          col += topColor * horizon * 0.25;

          // sun bloom-ish lobe
          float s = max(dot(dir, normalize(sunDir)), 0.0);
          col += vec3(1.0, 0.95, 0.85) * pow(s, 110.0) * 1.2;
          col += vec3(1.0, 0.7, 0.35) * pow(s, 18.0) * 0.2;

          // subtle film noise in sky only
          float n = hash(gl_FragCoord.xy + time * 60.0);
          col += (n - 0.5) * 0.015;
          gl_FragColor = vec4(col, 1.0);
        }
      `,side:Qn,depthWrite:!1}),ne=new Pt(O,G);ne.renderOrder=-10,S.add(ne),g.current=ne;const Te=new fc(200,200,64,64),Me=Te.attributes.position;for(let W=0;W<Me.count;W++){const V=Me.getX(W),ae=Me.getY(W),xe=Math.sin(V*.08)*Math.cos(ae*.08),ye=Math.sin(V*.22+1.2)*Math.cos(ae*.18-.7)*.45,ce=Math.sin(V*.5+2)*Math.cos(ae*.45-1.1)*.12,he=xe*2.2+ye*1.6+ce*1.1+(Math.random()-.5)*.25;Me.setZ(W,he)}Te.computeVertexNormals();const z=M(L,R);z.wrapS=Os,z.wrapT=Os,z.repeat.set(10,10),z.anisotropy=U.capabilities.getMaxAnisotropy?.()??1;const ie=new vr({map:z,roughness:.95,metalness:.05,color:16777215}),_e=new Pt(Te,ie);_e.rotation.x=-Math.PI/2,_e.receiveShadow=!0,S.add(_e);const we=new EE(200,50,16777215,16777215);we.position.y=.1,we.material.transparent=!0,we.material.opacity=.05,S.add(we);const Be=new _i;S.add(Be),l.current=Be;const oe=()=>{const W=new _i,V=new bm({color:9055202}),ae=new vr({color:12632256,metalness:.8,roughness:.3}),xe=new Pt(new ta(1,32,32),V);xe.scale.set(1.8,1,1),W.add(xe);const ye=new Pt(new mr(.5,.7,.6,32),ae);ye.rotation.z=Math.PI/2,ye.position.set(-1.8,0,0),W.add(ye);const ce=new xr(1,.1,1.5),he=new Pt(ce,V);return he.position.set(-.5,0,0),W.add(he),W};new TS().load("/orbital-scavengers/nave.glb",W=>{const V=W.scene;V.rotation.y=0;const xe=new aa().setFromObject(V).getSize(new H),ye=Math.max(xe.x,xe.y,xe.z),ce=3.45;if(ye>0){const he=ce/ye;V.scale.set(he,he,he)}Be.add(V)},void 0,()=>{Be.add(oe())});const ke=new o0(16755200,0,15);S.add(ke);const Ke=E(16738816),vt=new Ky({map:Ke,color:16777215,transparent:!0,opacity:0,blending:vi,depthWrite:!1}),wt=new o1(vt);wt.scale.set(10,10,1),wt.position.set(2.2,.1,0),wt.visible=!0,Be.add(wt),_.current=wt;const pt=80,Ee=new Float32Array(pt*3),Pe=new gn;Pe.setAttribute("position",new Vn(Ee,3));const Re=new uc({color:16742912,transparent:!0,opacity:0,blending:vi,depthWrite:!1}),je=new Tf(Pe,Re);je.frustumCulled=!1,je.visible=!0,S.add(je),v.current={line:je,max:pt,positions:Ee};const F=new mr(.1,.1,1,8);F.translate(0,.5,0);const at=new li({color:65280,transparent:!0,opacity:.8,blending:vi}),Ye=new Pt(F,at);Ye.rotation.x=Math.PI,Ye.visible=!1,Be.add(Ye),d.current=Ye,h.current=[];const lt=new ta(.12,6,6),He=new li({color:16777215,transparent:!0,opacity:.8,blending:vi,depthWrite:!1});for(let W=0;W<260;W++){const V=new Pt(lt,He.clone());V.visible=!1,S.add(V),h.current.push({mesh:V,life:0,maxLife:1,velocity:new H,type:"thrust",baseScale:1})}f.current=new l0,x.current.shipPos.set(0,100,0);let P;const T=()=>{P=requestAnimationFrame(T);const W=Math.min(f.current.getDelta(),.1),V=x.current,ae=window.totalTime||15,xe=performance.now()*.001;if(o==="mining"){V.isMissionActive||(V.isMissionActive=!0,V.missionStartTime=performance.now(),V.smoothProgress=0,V.shockwaveTime=-1);const q=(performance.now()-V.missionStartTime)/1e3,Oe=Math.min(q/ae,1);V.smoothProgress=lr(V.smoothProgress,Oe,6,W)}else V.isMissionActive=!1,V.smoothProgress=0,V.shockwaveTime=-1;const ye=V.smoothProgress,ce=.22,he=.86,Le=ce+.05,We=he-.07;let qe=0;if(o==="mining"&&(ye<ce||ye>he?qe=0:ye<Le?qe=sf((ye-ce)/(Le-ce)):ye>We?qe=1-sf((ye-We)/(he-We)):qe=1),V.opacity=lr(V.opacity,qe,4.5,W),U.domElement.style.opacity=V.opacity,g.current&&(g.current.material.uniforms.time.value=xe,g.current.position.copy(u.current.position)),l.current){let Ge=new H(0,0,0),q=new Ni(0,0,0),Oe=new H(0,6,24),De=0,Xe=60;const Ne=.22,be=.42,ze=.62,_t=.84,Ft=Math.PI/2;if(ye<be){const Je=gi.clamp((ye-Ne)/(be-Ne),0,1),it=d3(Je),Rt=new xm([new H(2,130,-15),new H(1,80,-8),new H(.3,30,-2),new H(0,3,0)]),Tt=Rt.getPoint(it),vn=Rt.getTangent(it).normalize();Ge.copy(Tt);const Cn=Math.atan2(vn.x,vn.z),rn=Math.sin(xe*1.2)*.03;q.set(0,Cn,Ft+rn),Xe=gi.lerp(70,58,it);const $n=new H(18,8,22);Oe.copy($n),Oe.lerp(new H(12,5,16),it),De=(1-it)*.06;const xn=sf(1-Math.abs(it-.35)/.35);if(_.current&&(_.current.material.opacity=gi.lerp(_.current.material.opacity,xn*.85,.12),_.current.scale.setScalar(2+xn*24),_.current.position.set(2.2,.1,0)),it>.75){const Bn=(it-.75)/.25;Math.random()<.3*Bn&&Z(new H(0,0,0),"dust")}Math.random()<.65&&Z(l.current.position,"heat"),Math.random()<.3&&Z(l.current.position,"thrust"),d.current&&(d.current.visible=!1)}else if(ye<ze){Ge.set(Math.sin(xe*2.3)*.06,1.85+Math.sin(xe*1.7)*.03,Math.cos(xe*1.9)*.06),q.set(Math.sin(xe*2.1)*.015,Math.sin(xe*.7)*.05,Ft+Math.sin(xe*1.3)*.02);const Je=(ye-be)/(ze-be),it=Je*Math.PI*1.1+xe*.25,Rt=11.5+Math.sin(Je*Math.PI)*2;if(Oe.set(Math.sin(it)*Rt,4.5,Math.cos(it)*Rt),De=.018,Xe=56,d.current&&(d.current.visible=!0,d.current.scale.set(1,4.5,1),d.current.material.opacity=.6),Math.random()<.15){const Tt=new H((Math.random()-.5)*.3,.02,(Math.random()-.5)*.3);Z(Tt,"spark")}Math.random()<.06&&Z(new H(0,0,0),"debris"),Math.random()<.08&&Z(new H(0,0,0),"microdust"),ke&&(ke.intensity=1+Math.random()*.5,ke.color.setHex(3538820)),_.current&&(_.current.material.opacity=gi.lerp(_.current.material.opacity,0,.1),_.current.scale.setScalar(1))}else{d.current&&(d.current.visible=!1);const Je=gi.clamp((ye-ze)/(_t-ze),0,1),it=p3(Je),Rt=new xm([new H(0,1.9,0),new H(.5,18,2),new H(1.5,55,6),new H(3,140,12)]),Tt=Rt.getPoint(it),vn=Rt.getTangent(it).normalize();Ge.copy(Tt);const Cn=Math.atan2(vn.x,vn.z),rn=Math.sin(xe*1)*.02;q.set(0,Cn,Ft+rn),Xe=gi.lerp(56,62,sf(Je)),Oe.set(12,2+it*6,14),De=.04*it;const $n=Math.floor(2+it*5);for(let xn=0;xn<$n;xn++)Z(l.current.position,"thrust");Je<.16&&Math.random()<.85&&Z(new H(0,0,0),"dust"),ke&&(ke.intensity=6+Math.random()*8,ke.color.setHex(16755200)),_.current&&(_.current.material.opacity=gi.lerp(_.current.material.opacity,.05,.08))}V.shipPos.lerp(Ge,.12),l.current.position.copy(V.shipPos),V.shipRot.x=lr(V.shipRot.x,q.x,5,W),V.shipRot.y=lr(V.shipRot.y,q.y,5,W),V.shipRot.z=lr(V.shipRot.z,q.z,5,W),l.current.rotation.copy(V.shipRot),V.shakeIntensity=lr(V.shakeIntensity,De,5,W);const Ue=new H((Math.random()-.5)*V.shakeIntensity,(Math.random()-.5)*V.shakeIntensity,(Math.random()-.5)*V.shakeIntensity);V.cameraPos.lerp(Oe,.05),u.current.position.copy(V.cameraPos).add(Ue),u.current.lookAt(V.shipPos),V.cameraFov=lr(V.cameraFov,Xe,3,W),u.current.fov=V.cameraFov,u.current.updateProjectionMatrix(),ke&&(ke.position.copy(V.shipPos),ke.position.y-=1,o==="mining"&&ye>.22&&ye<.84||(ke.intensity=0))}if(v.current?.line&&l.current){const{positions:Ge,max:q}=v.current;Ge.copyWithin(3,0,(q-1)*3);const Oe=new H(-2.15,0,0);Oe.applyEuler(l.current.rotation);const De=l.current.position.clone().add(Oe);Ge[0]=De.x,Ge[1]=De.y,Ge[2]=De.z,v.current.line.geometry.attributes.position.needsUpdate=!0;const Xe=o==="mining"&&(ye<.45||ye>.62)?1:0;v.current.line.material.opacity=gi.lerp(v.current.line.material.opacity,Xe?.25+Math.sin(xe*8)*.05:0,.08)}h.current.forEach(Ge=>{if(Ge.life>0){Ge.life-=W;const q=gi.clamp(Ge.life/Ge.maxLife,0,1),Oe=Ge.type==="dust"?.9:Ge.type==="debris"?.94:.92;Ge.velocity.multiplyScalar(Oe),Ge.type==="debris"&&(Ge.velocity.y-=.18*W),Ge.type==="dust"&&(Ge.velocity.y-=.08*W),Ge.mesh.position.addScaledVector(Ge.velocity,W*7.5);let De=1;Ge.type==="spark"?De=Ge.baseScale*(.35+q*.9):Ge.type==="heat"?De=Ge.baseScale*(.55+(1-q)*1.2):Ge.type==="dust"?De=Ge.baseScale*(.85+(1-q)*1.4):Ge.type==="debris"?De=Ge.baseScale*(.65+q*.4):De=Ge.baseScale*(.5+(1-q)*1.1),Ge.mesh.scale.setScalar(De);const Xe=Ge.type==="dust"?q*.55:q*q;Ge.mesh.material.opacity=Xe,Ge.life<=0&&(Ge.mesh.visible=!1)}});const Fe=o==="mining"&&ye<.45?1.15:o==="mining"&&ye<.62?.65:.9;I.strength=gi.lerp(I.strength,Fe,.06),J.render()};T();function Z(W,V="thrust"){const ae=h.current.find(xe=>xe.life<=0);if(ae)if(ae.mesh.visible=!0,ae.type=V,V==="thrust")ae.maxLife=.75+Math.random()*.35,ae.life=ae.maxLife,ae.baseScale=1,ae.mesh.position.copy(W).add(new H(-.4,-.7,0)),ae.mesh.material.blending=vi,ae.mesh.material.color.setHex(16755285),ae.velocity.set((Math.random()-.5)*.8,-2.2-Math.random()*.8,(Math.random()-.5)*.8);else if(V==="heat")ae.maxLife=.55+Math.random()*.35,ae.life=ae.maxLife,ae.baseScale=.9+Math.random()*.9,ae.mesh.position.copy(W).add(new H((Math.random()-.5)*.6,(Math.random()-.5)*.4,(Math.random()-.5)*.6)),ae.mesh.material.blending=vi,ae.mesh.material.color.setHex(16726784),ae.velocity.set((Math.random()-.5)*.5,.6+Math.random()*1.4,(Math.random()-.5)*.5);else if(V==="spark")ae.maxLife=.5+Math.random()*.3,ae.life=ae.maxLife,ae.baseScale=.18,ae.mesh.position.copy(W),ae.mesh.material.blending=vi,ae.mesh.material.color.setHex(5111697),ae.velocity.set((Math.random()-.5)*1.2,Math.random()*2.5+.8,(Math.random()-.5)*1.2);else if(V==="debris")ae.maxLife=1.8+Math.random()*.6,ae.life=ae.maxLife,ae.baseScale=.25+Math.random()*.25,ae.mesh.position.copy(W).add(new H((Math.random()-.5)*.3,.05,(Math.random()-.5)*.3)),ae.mesh.material.blending=Ya,ae.mesh.material.color.setHex(5921370),ae.velocity.set((Math.random()-.5)*.8,Math.random()*1.5+.5,(Math.random()-.5)*.8);else if(V==="microdust"){const xe=Math.random()*Math.PI*2,ye=.15+Math.random()*.2;ae.mesh.position.set(Math.cos(xe)*ye,.05,Math.sin(xe)*ye),ae.maxLife=1.2+Math.random()*.5,ae.life=ae.maxLife,ae.baseScale=.08+Math.random()*.06,ae.mesh.material.blending=Ya,ae.mesh.material.color.setHex(9079434),ae.mesh.material.opacity=.35,ae.velocity.set(Math.cos(xe)*.2,.3+Math.random()*.25,Math.sin(xe)*.2)}else{const xe=Math.random()*Math.PI*2,ye=.3+Math.random()*.3;ae.mesh.position.set(Math.cos(xe)*ye,.08,Math.sin(xe)*ye),ae.maxLife=1+Math.random()*.5,ae.life=ae.maxLife,ae.baseScale=.15+Math.random()*.15,ae.mesh.material.blending=Ya,ae.mesh.material.color.setHex(10132122),ae.mesh.material.opacity=.3,ae.velocity.set(Math.cos(xe)*.6,.2+Math.random()*.15,Math.sin(xe)*.6)}}const pe=()=>{!u.current||!s.current||(u.current.aspect=window.innerWidth/window.innerHeight,u.current.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight),J.setSize(window.innerWidth,window.innerHeight),N.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight))};return window.addEventListener("resize",pe),()=>{window.removeEventListener("resize",pe),cancelAnimationFrame(P),s.current&&(s.current.innerHTML="");try{h.current.forEach(W=>{W?.mesh?.material?.dispose&&W.mesh.material.dispose()})}catch{}lt.dispose(),He.dispose(),Te.dispose(),ie.dispose(),z.dispose(),F.dispose(),at.dispose(),Ke.dispose(),vt.dispose(),Pe.dispose(),Re.dispose(),O.dispose(),G.dispose(),U.dispose()}},[a,o]),Dt.useEffect(()=>{window.missionActive=o==="mining",window.totalTime=t,window.currentTime=e},[o,t,e]),ge.jsx("div",{ref:s,className:"absolute top-0 left-0 w-full h-full z-1",style:{pointerEvents:"none",transition:"opacity 0.5s"}})},g3=({item:o,onClose:e})=>ge.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-[pop_0.4s_ease-out] p-4",onClick:e,children:ge.jsxs("div",{className:`relative bg-gray-900/90 border-2 ${o.border} rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.8)]`,onClick:t=>t.stopPropagation(),children:[ge.jsx("div",{className:`absolute inset-0 rounded-3xl opacity-20 bg-gradient-to-tr from-transparent via-${o.style.split("-")[1]}-500 to-transparent animate-pulse pointer-events-none`}),ge.jsx("h2",{className:"text-2xl font-bold text-white mb-8 font-orbitron tracking-[0.2em] border-b border-white/10 pb-4",children:"RECOMPENSA"}),ge.jsx("div",{className:"text-9xl mb-6 animate-bounce drop-shadow-2xl",children:o.icon}),ge.jsxs("div",{className:"space-y-2 mb-8",children:[ge.jsx("h3",{className:`text-3xl font-bold font-orbitron ${o.style} drop-shadow-md`,children:o.name}),ge.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border ${o.border} ${o.style}`,children:o.rarity})]}),ge.jsxs("div",{className:"bg-black/50 rounded-2xl p-4 mb-8 border border-white/5",children:[ge.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-widest mb-1",children:"Valor Estimado"}),ge.jsxs("p",{className:"text-4xl font-mono font-bold text-yellow-400 drop-shadow-lg",children:["+",o.val.toLocaleString()," ₡"]})]}),ge.jsx("button",{onClick:e,className:"w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-bold text-lg tracking-widest font-orbitron shadow-xl active:scale-95 transition-all",children:"ACEPTAR"})]})}),Wa={Bolt:({size:o=24,className:e})=>ge.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:ge.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),Home:({size:o=24,className:e})=>ge.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ge.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),ge.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),Bag:({size:o=24,className:e})=>ge.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ge.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),ge.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),ge.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),Trash:({size:o=16,className:e})=>ge.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ge.jsx("polyline",{points:"3 6 5 6 21 6"}),ge.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Coins:({size:o=16,className:e})=>ge.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ge.jsx("circle",{cx:"8",cy:"8",r:"6"}),ge.jsx("path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"})]}),Lock:({size:o=16,className:e})=>ge.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:[ge.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),ge.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),ArrowLeft:({size:o=24,className:e})=>ge.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:ge.jsx("polyline",{points:"15 18 9 12 15 6"})}),ArrowRight:({size:o=24,className:e})=>ge.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:e,children:ge.jsx("polyline",{points:"9 18 15 12 9 6"})})},Ay=[{name:"Tuerca Oxidada",val:5,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔩",chance:.2},{name:"Cable Pelado",val:8,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔌",chance:.18},{name:"Lata Espacial",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🥫",chance:.18},{name:"Fragmento Metálico",val:4,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"⚙️",chance:.16},{name:"Residuo Plástico",val:2,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🧩",chance:.15},{name:"Cristal Roto",val:6,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"💎",chance:.14},{name:"Tornillo Suelto",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔧",chance:.13},{name:"Chapa Abollada",val:7,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"📦",chance:.12},{name:"Restos de Comida",val:1,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🦴",chance:.15},{name:"Papel Aluminio",val:2,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🗞️",chance:.14},{name:"Vidrio Opaco",val:4,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🥃",chance:.13},{name:"Muelle Viejo",val:5,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"➰",chance:.12},{name:"Tubo de Cobre",val:7,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🎺",chance:.11},{name:"Placa de Acero",val:25,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🛡️",chance:.12},{name:"Batería de Iones",val:40,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔋",chance:.1},{name:"Sensor Óptico",val:35,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"👁️",chance:.09},{name:"Conductor de Energía",val:50,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚡",chance:.08},{name:"Aleación Refinada",val:60,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔬",chance:.07},{name:"Núcleo de Plasma",val:80,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚛️",chance:.06},{name:"Circuito Impreso",val:30,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"📟",chance:.08},{name:"Lente de Cámara",val:45,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"📷",chance:.07},{name:"Bobina Tesla",val:55,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🌀",chance:.07},{name:"Engranaje Titanio",val:65,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚙️",chance:.06},{name:"Fibra Óptica",val:70,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🧵",chance:.06},{name:"Chip Cuántico",val:150,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💾",chance:.07},{name:"Motor de Iones",val:200,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🛸",chance:.06},{name:"Cristal de Energía",val:300,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💠",chance:.05},{name:"Dispositivo Holográfico",val:400,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"📡",chance:.04},{name:"Procesador Cuántico",val:180,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💻",chance:.05},{name:"Celda de Combustible",val:250,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"⛽",chance:.05},{name:"Mapa Estelar",val:320,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🗺️",chance:.04},{name:"Dron Espía",val:350,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🚁",chance:.04},{name:"Armadura Nanotech",val:380,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🥋",chance:.04},{name:"Motor WARP",val:750,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🚀",chance:.04},{name:"Núcleo Estelar",val:1200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"⭐",chance:.03},{name:"Artefacto Antiguo",val:2e3,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🏺",chance:.025},{name:"Generador de Campo",val:3500,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🌀",chance:.02},{name:"Generador de Escudos",val:900,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🛡️",chance:.03},{name:"Motor de Curvatura",val:1500,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🌌",chance:.025},{name:"Inteligencia Artificial",val:2200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🧠",chance:.02},{name:"Cañón de Plasma",val:2800,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🔫",chance:.02},{name:"Cristal Kyber",val:3200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🔮",chance:.02},{name:"Antimateria",val:5e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"⚛️",chance:.015},{name:"Huevo Dragón",val:8e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🥚",chance:.01},{name:"Fragmento de Agujero Negro",val:15e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🕳️",chance:.008},{name:"Esencia Cósmica",val:25e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"✨",chance:.005},{name:"Corona Galáctica",val:6e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"👑",chance:.01},{name:"Llave Maestra Alienígena",val:9e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🗝️",chance:.009},{name:"Semilla de Vida",val:12e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🌱",chance:.008},{name:"Esfera de Dyson (Plano)",val:18e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"☀️",chance:.007},{name:"Materia Oscura Concentrada",val:22e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"⚫",chance:.006},{name:"Partícula Dios",val:5e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🌌",chance:.002},{name:"Corazón de Estrella",val:1e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"❤️",chance:.001},{name:"Fragmento del Big Bang",val:25e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"💥",chance:5e-4},{name:"Huevo de Fénix Cósmico",val:6e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🔥",chance:.0015},{name:"Tridente de Poseidón Espacial",val:8e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🔱",chance:.0012},{name:"Gema del Infinito",val:15e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"💎",chance:8e-4},{name:"Orbe de la Creación",val:2e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🌐",chance:6e-4},{name:"Reloj del Tiempo Absoluto",val:3e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"⏳",chance:4e-4}];function v3(){const[o,e]=Dt.useState("home"),[t,a]=Dt.useState(()=>parseInt(localStorage.getItem("os_ultra_credits"))||500),[s,l]=Dt.useState(()=>parseInt(localStorage.getItem("os_ultra_level"))||1),[u,f]=Dt.useState(()=>JSON.parse(localStorage.getItem("os_ultra_inv"))||[]),[h,d]=Dt.useState("idle"),[g,v]=Dt.useState(0),[_,x]=Dt.useState(0),[M,E]=Dt.useState(null),[S,y]=Dt.useState(()=>{const Y=localStorage.getItem("os_ultra_planet");return Y?parseInt(Y):0}),[L,R]=Dt.useState(()=>{const Y=localStorage.getItem("os_ultra_unlocked_planets");return Y?JSON.parse(Y):[0]});Dt.useEffect(()=>{localStorage.setItem("os_ultra_credits",t),localStorage.setItem("os_ultra_level",s),localStorage.setItem("os_ultra_inv",JSON.stringify(u)),localStorage.setItem("os_ultra_planet",S),localStorage.setItem("os_ultra_unlocked_planets",JSON.stringify(L))},[t,s,u,S,L]),Dt.useEffect(()=>{let Y;return h==="mining"&&g>0?Y=setInterval(()=>v(O=>O-1),1e3):h==="mining"&&g===0&&(d("ready"),navigator.vibrate&&navigator.vibrate(200)),()=>clearInterval(Y)},[h,g]);const w=()=>{const Y=Math.max(10,15-Math.floor(s/10));x(Y),v(Y),d("mining")},U=()=>{const Y=Math.random();let O=Ay[0];const G=s*.1,Te=hr[S]?.rarityMultiplier||1,Me=Ay.map(we=>{let Be=we.chance;return we.rarity==="Común"&&(Be/=1+G,Be/=Te),we.rarity==="Poco Común"&&(Be*=1+G*.3,Be*=Te*.5),(we.rarity==="Raro"||we.rarity==="Épico")&&(Be*=1+G*.5,Be*=Te),we.rarity==="Legendario"&&(Be*=1+G,Be*=Te*1.5),we.rarity==="Mítico"&&(Be*=1+G*1.5,Be*=Te*2),{...we,weight:Be}});let z=Me.reduce((we,Be)=>we+Be.weight,0),ie=Y*z;for(let we of Me)if(ie-=we.weight,ie<=0){O=we;break}const _e={...O,id:Date.now()};f(we=>[...we,_e]),E(_e),d("idle")},B=Y=>{const O=hr[Y];!O||L.includes(Y)||t>=O.cost&&(a(G=>G-O.cost),R(G=>[...G,Y]),y(Y))},I=Y=>{h!=="mining"&&y(O=>{const G=O+Y;return G<0?hr.length-1:G>=hr.length?0:G})},j=()=>{if(u.length===0)return;const Y=u.reduce((O,G)=>O+G.val,0);a(O=>O+Y),f([])},A=(Y,O=!1)=>{if(O){const G=u.filter(Me=>Me.name===Y.name),ne=u.filter(Me=>Me.name!==Y.name),Te=G.reduce((Me,z)=>Me+z.val,0);a(Me=>Me+Te),f(ne)}else{const G=u.findIndex(ne=>ne.name===Y.name);if(G>-1){const ne=[...u];ne.splice(G,1),a(Te=>Te+Y.val),f(ne)}}},N=()=>{const Y=s*250;t>=Y&&(a(O=>O-Y),l(O=>O+1))},k=Dt.useMemo(()=>{const Y={};return u.forEach(O=>{Y[O.name]||(Y[O.name]={...O,count:0,total:0}),Y[O.name].count++,Y[O.name].total+=O.val}),Object.values(Y).sort((O,G)=>G.val-O.val)},[u]),J=hr[S],ee=L.includes(J.id),le=t>=J.cost;return ge.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black text-white font-rajdhani select-none",children:[ge.jsx(o3,{missionState:h,level:s,totalDuration:_,timeLeft:g,planet:J}),ge.jsx(m3,{missionState:h,level:s,totalDuration:_,timeLeft:g,planet:J}),ge.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between z-10 pointer-events-none",children:[o==="home"&&ge.jsxs("div",{className:"h-full flex flex-col justify-between p-4 pb-28 pointer-events-none",children:[ge.jsxs("div",{className:"flex gap-3 justify-end pointer-events-auto",children:[ge.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl border-l-4 border-blue-500/80 bg-black/70 backdrop-blur-xl shadow-lg animate-[slideUp_0.5s_ease-out]",children:[ge.jsx("span",{className:"text-gray-400 text-[10px] uppercase block tracking-wider font-bold mb-0.5",children:"CRÉDITOS"}),ge.jsxs("span",{className:"text-xl font-bold font-mono text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]",children:[t.toLocaleString()," ₡"]})]}),ge.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl text-xs font-bold text-gray-300 border border-white/10 bg-black/70 backdrop-blur-xl shadow-lg font-orbitron flex items-center animate-[slideUp_0.5s_ease-out]",children:["MK-",s]})]}),ge.jsxs("div",{className:"w-full max-w-md mx-auto glass-panel p-5 rounded-3xl border border-blue-500/30 pointer-events-auto shadow-2xl bg-black/80 backdrop-blur-xl animate-[slideUp_0.6s_ease-out]",children:[ge.jsx("div",{className:"mb-4 text-center min-h-[60px] flex flex-col justify-center items-center",children:ee?ge.jsxs(ge.Fragment,{children:[ge.jsx("p",{className:`text-xs font-mono tracking-[0.3em] uppercase font-bold mb-1 ${h==="mining"?"text-yellow-400 animate-pulse":"text-cyan-400"}`,children:h==="idle"?"• SISTEMAS ONLINE •":h==="mining"?">>> VELOCIDAD LUZ <<<":"• DESTINO ALCANZADO •"}),ge.jsx("h3",{className:"text-2xl font-orbitron font-bold text-white tracking-widest drop-shadow-md",children:J.name}),ge.jsxs("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider",children:["Multiplicador: ",J.rarityMultiplier.toFixed(1),"x"]})]}):ge.jsxs("button",{onClick:()=>B(J.id),disabled:!le,className:`w-full py-3 rounded-xl border font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${le?"bg-yellow-600 hover:bg-yellow-500 border-yellow-400 text-white animate-pulse":"bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed"}`,children:[ge.jsx(Wa.Lock,{size:14}),ge.jsxs("div",{className:"flex flex-col items-start leading-none",children:[ge.jsxs("span",{className:"text-[10px]",children:["COMPRAR ",J.name]}),ge.jsxs("span",{className:"text-sm font-mono",children:[J.cost.toLocaleString()," ₡"]})]})]})}),ge.jsxs("div",{className:"flex items-center gap-3",children:[ge.jsx("button",{onClick:()=>I(-1),disabled:h==="mining",className:`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${h==="mining"?"opacity-30 border-gray-800 cursor-not-allowed":"border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95"}`,children:ge.jsx(Wa.ArrowLeft,{size:20})}),ge.jsxs("div",{className:"flex-1",children:[h==="idle"&&ge.jsx("button",{onClick:w,disabled:!ee,className:`w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base transition-all ${ee?"bg-gradient-to-br from-blue-600 to-blue-700 hover:to-blue-600 text-white border-blue-800 active:border-b-0 active:translate-y-1 hover:shadow-blue-500/50":"bg-gray-800 text-gray-500 border-gray-900 cursor-not-allowed"}`,children:ee?"INICIAR MISIÓN":"BLOQUEADO"}),h==="mining"&&ge.jsxs("div",{className:"w-full bg-gray-900/80 h-14 rounded-2xl overflow-hidden relative border border-gray-700/50 shadow-inner backdrop-blur-sm",children:[ge.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 animate-pulse transition-all duration-1000",style:{width:`${(1-g/_)*100}%`}}),ge.jsxs("span",{className:"absolute inset-0 flex items-center justify-center font-bold text-gray-900 font-mono tracking-wider text-lg drop-shadow-lg",children:["T-",g,"s"]})]}),h==="ready"&&ge.jsx("button",{onClick:U,className:"w-full bg-gradient-to-r from-green-500 via-green-400 to-green-500 hover:from-green-400 hover:to-green-300 py-4 rounded-2xl font-bold text-gray-900 tracking-widest shadow-[0_0_25px_rgba(74,222,128,0.6)] animate-pulse active:scale-95 transition-all border-b-4 border-green-700 font-orbitron text-base",children:"RECUPERAR CARGA"})]}),ge.jsx("button",{onClick:()=>I(1),disabled:h==="mining",className:`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${h==="mining"?"opacity-30 border-gray-800 cursor-not-allowed":"border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95"}`,children:ge.jsx(Wa.ArrowRight,{size:20})})]})]})]}),o==="inventory"&&ge.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-4 pt-12 pb-32 overflow-y-auto pointer-events-auto animate-[slideUp_0.4s_ease-out]",children:[ge.jsxs("div",{className:"flex justify-between items-end mb-8 border-b border-white/10 pb-4",children:[ge.jsxs("div",{children:[ge.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron tracking-wider",children:"BODEGA"}),ge.jsxs("p",{className:"text-xs text-gray-500 mt-1 uppercase tracking-widest",children:["Capacidad: ",u.length," items"]})]}),u.length>0&&ge.jsxs("button",{onClick:j,className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold px-4 py-2 rounded-lg border border-red-500/30 active:scale-95 transition-all flex items-center gap-2",children:[ge.jsx(Wa.Trash,{size:14,className:"inline"})," VENDER TODO"]})]}),k.length===0?ge.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-gray-600",children:[ge.jsx("div",{className:"text-6xl mb-4 opacity-20",children:"📦"}),ge.jsx("p",{className:"font-bold uppercase tracking-widest",children:"Bodega Vacía"})]}):ge.jsx("div",{className:"grid gap-3",children:k.map(Y=>ge.jsxs("div",{className:`bg-gray-900/40 border-l-4 ${Y.border} p-4 rounded-r-xl flex flex-col gap-3 relative overflow-hidden group`,children:[ge.jsxs("div",{className:"flex justify-between items-start relative z-10",children:[ge.jsxs("div",{className:"flex gap-4 items-center",children:[ge.jsx("div",{className:"text-4xl bg-black/50 w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 shadow-inner",children:Y.icon}),ge.jsxs("div",{children:[ge.jsx("h3",{className:`font-bold text-lg leading-tight ${Y.style}`,children:Y.name}),ge.jsx("span",{className:"text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-0.5 rounded mt-1 inline-block text-gray-400",children:Y.rarity})]})]}),ge.jsxs("div",{className:"text-right",children:[ge.jsxs("div",{className:"text-xl font-mono text-white font-bold tracking-tight",children:["+",Y.val.toLocaleString(),"₡"]}),ge.jsxs("div",{className:"text-xs text-gray-500 mt-1 font-mono",children:["x",Y.count]})]})]}),ge.jsxs("div",{className:"flex gap-2 mt-2",children:[ge.jsxs("button",{onClick:()=>A(Y),className:"flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors",children:[ge.jsx(Wa.Coins,{size:14,className:"text-yellow-500"})," Vender 1"]}),ge.jsxs("button",{onClick:()=>A(Y,!0),className:"flex-1 bg-blue-500/10 hover:bg-blue-500/20 py-2 rounded-lg text-xs font-bold text-blue-300 flex items-center justify-center gap-2 border border-blue-500/20 transition-colors",children:[ge.jsx(Wa.Trash,{size:14})," Vender Todo"]})]})]},Y.name))})]}),o==="shop"&&ge.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-6 pt-12 pb-32 pointer-events-auto animate-[slideUp_0.4s_ease-out] flex flex-col",children:[ge.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron mb-2 text-center tracking-widest",children:"INGENIERÍA"}),ge.jsx("p",{className:"text-center text-gray-500 text-xs uppercase tracking-widest mb-8",children:"Mejoras de Dron & Sistemas"}),ge.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center",children:[ge.jsxs("div",{className:"relative w-full max-w-xs aspect-square mb-8",children:[ge.jsx("div",{className:"absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse"}),ge.jsx("div",{className:"w-full h-full bg-gray-900/50 rounded-full border border-blue-500/30 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.15)]",children:ge.jsx("div",{className:"text-8xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]",children:"🛸"})})]}),ge.jsxs("div",{className:"w-full max-w-sm bg-gray-900/80 rounded-2xl p-6 border border-white/10",children:[ge.jsxs("div",{className:"flex justify-between items-end mb-4",children:[ge.jsxs("div",{children:[ge.jsxs("h3",{className:"text-lg font-bold text-white font-orbitron",children:["Interceptor MK-",s+1]}),ge.jsx("p",{className:"text-xs text-blue-400 uppercase tracking-widest",children:"Próxima Generación"})]}),ge.jsxs("div",{className:"text-right",children:[ge.jsx("span",{className:"block text-[10px] text-gray-500 uppercase",children:"Costo"}),ge.jsxs("span",{className:`font-mono font-bold text-lg ${t>=s*250?"text-green-400":"text-red-400"}`,children:[(s*250).toLocaleString()," ₡"]})]})]}),ge.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[ge.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[ge.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Velocidad"}),ge.jsx("span",{className:"text-green-400 font-bold text-xl",children:"+5%"})]}),ge.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[ge.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Suerte"}),ge.jsx("span",{className:"text-yellow-400 font-bold text-xl",children:"+2%"})]})]}),ge.jsx("button",{onClick:N,disabled:t<s*250,className:`w-full py-4 rounded-xl font-bold font-orbitron text-lg shadow-lg active:scale-95 transition-all ${t>=s*250?"bg-gradient-to-r from-blue-600 to-blue-500 text-white":"bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-700"}`,children:t>=s*250?"INSTALAR MEJORA":"CRÉDITOS INSUFICIENTES"})]})]})]})]}),ge.jsx("div",{className:"absolute bottom-6 w-full px-6 z-50 pointer-events-auto",children:ge.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-2xl rounded-full p-2 flex justify-between items-center h-20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 relative",children:[ge.jsxs("button",{onClick:()=>e("shop"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${o==="shop"?"text-blue-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[ge.jsx(Wa.Bolt,{className:"w-6 h-6"}),ge.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"NAVE"})]}),ge.jsx("div",{className:"relative -top-8",children:ge.jsx("button",{onClick:()=>e("home"),className:`w-20 h-20 rounded-full flex items-center justify-center border-[6px] border-black shadow-2xl transition-all duration-300 ${o==="home"?"bg-blue-600 scale-110 shadow-blue-500/50":"bg-gray-800 hover:bg-gray-700"}`,children:ge.jsx(Wa.Home,{className:"w-8 h-8 text-white"})})}),ge.jsxs("button",{onClick:()=>e("inventory"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${o==="inventory"?"text-yellow-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[ge.jsxs("div",{className:"relative",children:[ge.jsx(Wa.Bag,{className:"w-6 h-6"}),u.length>0&&ge.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping border border-black"})]}),ge.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"CARGA"})]})]})}),M&&ge.jsx(g3,{item:M,onClose:()=>E(null)})]})}Hb.createRoot(document.getElementById("root")).render(ge.jsx(Dt.StrictMode,{children:ge.jsx(v3,{})}));
