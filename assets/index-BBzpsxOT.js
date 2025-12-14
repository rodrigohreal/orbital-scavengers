(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Mh={exports:{}},qo={};var rv;function gS(){if(rv)return qo;rv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return qo.Fragment=t,qo.jsx=n,qo.jsxs=n,qo}var ov;function vS(){return ov||(ov=1,Mh.exports=gS()),Mh.exports}var pt=vS(),bh={exports:{}},pe={};var lv;function _S(){if(lv)return pe;lv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function _(L,K,gt){this.props=L,this.context=K,this.refs=M,this.updater=gt||E}_.prototype.isReactComponent={},_.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=_.prototype;function U(L,K,gt){this.props=L,this.context=K,this.refs=M,this.updater=gt||E}var D=U.prototype=new O;D.constructor=U,T(D,_.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function F(){}var B={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function A(L,K,gt){var Rt=gt.ref;return{$$typeof:r,type:L,key:K,ref:Rt!==void 0?Rt:null,props:gt}}function w(L,K){return A(L.type,K,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function V(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(gt){return K[gt]})}var W=/\/+/g;function tt(L,K){return typeof L=="object"&&L!==null&&L.key!=null?V(""+L.key):K.toString(36)}function et(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(F,F):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,K,gt,Rt,kt){var nt=typeof L;(nt==="undefined"||nt==="boolean")&&(L=null);var ht=!1;if(L===null)ht=!0;else switch(nt){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(L.$$typeof){case r:case t:ht=!0;break;case g:return ht=L._init,P(ht(L._payload),K,gt,Rt,kt)}}if(ht)return kt=kt(L),ht=Rt===""?"."+tt(L,0):Rt,I(kt)?(gt="",ht!=null&&(gt=ht.replace(W,"$&/")+"/"),P(kt,K,gt,"",function(qt){return qt})):kt!=null&&(G(kt)&&(kt=w(kt,gt+(kt.key==null||L&&L.key===kt.key?"":(""+kt.key).replace(W,"$&/")+"/")+ht)),K.push(kt)),1;ht=0;var Dt=Rt===""?".":Rt+":";if(I(L))for(var Xt=0;Xt<L.length;Xt++)Rt=L[Xt],nt=Dt+tt(Rt,Xt),ht+=P(Rt,K,gt,nt,kt);else if(Xt=S(L),typeof Xt=="function")for(L=Xt.call(L),Xt=0;!(Rt=L.next()).done;)Rt=Rt.value,nt=Dt+tt(Rt,Xt++),ht+=P(Rt,K,gt,nt,kt);else if(nt==="object"){if(typeof L.then=="function")return P(et(L),K,gt,Rt,kt);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ht}function H(L,K,gt){if(L==null)return L;var Rt=[],kt=0;return P(L,Rt,"","",function(nt){return K.call(gt,nt,kt++)}),Rt}function it(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(gt){(L._status===0||L._status===-1)&&(L._status=1,L._result=gt)},function(gt){(L._status===0||L._status===-1)&&(L._status=2,L._result=gt)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var St=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Mt={map:H,forEach:function(L,K,gt){H(L,function(){K.apply(this,arguments)},gt)},count:function(L){var K=0;return H(L,function(){K++}),K},toArray:function(L){return H(L,function(K){return K})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return pe.Activity=v,pe.Children=Mt,pe.Component=_,pe.Fragment=n,pe.Profiler=l,pe.PureComponent=U,pe.StrictMode=s,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,pe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},pe.cache=function(L){return function(){return L.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(L,K,gt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Rt=T({},L.props),kt=L.key;if(K!=null)for(nt in K.key!==void 0&&(kt=""+K.key),K)!Y.call(K,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&K.ref===void 0||(Rt[nt]=K[nt]);var nt=arguments.length-2;if(nt===1)Rt.children=gt;else if(1<nt){for(var ht=Array(nt),Dt=0;Dt<nt;Dt++)ht[Dt]=arguments[Dt+2];Rt.children=ht}return A(L.type,kt,Rt)},pe.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},pe.createElement=function(L,K,gt){var Rt,kt={},nt=null;if(K!=null)for(Rt in K.key!==void 0&&(nt=""+K.key),K)Y.call(K,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(kt[Rt]=K[Rt]);var ht=arguments.length-2;if(ht===1)kt.children=gt;else if(1<ht){for(var Dt=Array(ht),Xt=0;Xt<ht;Xt++)Dt[Xt]=arguments[Xt+2];kt.children=Dt}if(L&&L.defaultProps)for(Rt in ht=L.defaultProps,ht)kt[Rt]===void 0&&(kt[Rt]=ht[Rt]);return A(L,nt,kt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(L){return{$$typeof:h,render:L}},pe.isValidElement=G,pe.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:it}},pe.memo=function(L,K){return{$$typeof:p,type:L,compare:K===void 0?null:K}},pe.startTransition=function(L){var K=B.T,gt={};B.T=gt;try{var Rt=L(),kt=B.S;kt!==null&&kt(gt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(F,St)}catch(nt){St(nt)}finally{K!==null&&gt.types!==null&&(K.types=gt.types),B.T=K}},pe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},pe.use=function(L){return B.H.use(L)},pe.useActionState=function(L,K,gt){return B.H.useActionState(L,K,gt)},pe.useCallback=function(L,K){return B.H.useCallback(L,K)},pe.useContext=function(L){return B.H.useContext(L)},pe.useDebugValue=function(){},pe.useDeferredValue=function(L,K){return B.H.useDeferredValue(L,K)},pe.useEffect=function(L,K){return B.H.useEffect(L,K)},pe.useEffectEvent=function(L){return B.H.useEffectEvent(L)},pe.useId=function(){return B.H.useId()},pe.useImperativeHandle=function(L,K,gt){return B.H.useImperativeHandle(L,K,gt)},pe.useInsertionEffect=function(L,K){return B.H.useInsertionEffect(L,K)},pe.useLayoutEffect=function(L,K){return B.H.useLayoutEffect(L,K)},pe.useMemo=function(L,K){return B.H.useMemo(L,K)},pe.useOptimistic=function(L,K){return B.H.useOptimistic(L,K)},pe.useReducer=function(L,K,gt){return B.H.useReducer(L,K,gt)},pe.useRef=function(L){return B.H.useRef(L)},pe.useState=function(L){return B.H.useState(L)},pe.useSyncExternalStore=function(L,K,gt){return B.H.useSyncExternalStore(L,K,gt)},pe.useTransition=function(){return B.H.useTransition()},pe.version="19.2.3",pe}var cv;function sp(){return cv||(cv=1,bh.exports=_S()),bh.exports}var en=sp(),Eh={exports:{}},Yo={},Th={exports:{}},Ah={};var uv;function xS(){return uv||(uv=1,(function(r){function t(P,H){var it=P.length;P.push(H);t:for(;0<it;){var St=it-1>>>1,Mt=P[St];if(0<l(Mt,H))P[St]=H,P[it]=Mt,it=St;else break t}}function n(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var H=P[0],it=P.pop();if(it!==H){P[0]=it;t:for(var St=0,Mt=P.length,L=Mt>>>1;St<L;){var K=2*(St+1)-1,gt=P[K],Rt=K+1,kt=P[Rt];if(0>l(gt,it))Rt<Mt&&0>l(kt,gt)?(P[St]=kt,P[Rt]=it,St=Rt):(P[St]=gt,P[K]=it,St=K);else if(Rt<Mt&&0>l(kt,it))P[St]=kt,P[Rt]=it,St=Rt;else break t}}return H}function l(P,H){var it=P.sortIndex-H.sortIndex;return it!==0?it:P.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,x=3,S=!1,E=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var H=n(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=P)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=n(p)}}function I(P){if(T=!1,D(P),!E)if(n(m)!==null)E=!0,F||(F=!0,V());else{var H=n(p);H!==null&&et(I,H.startTime-P)}}var F=!1,B=-1,Y=5,A=-1;function w(){return M?!0:!(r.unstable_now()-A<Y)}function G(){if(M=!1,F){var P=r.unstable_now();A=P;var H=!0;try{t:{E=!1,T&&(T=!1,O(B),B=-1),S=!0;var it=x;try{e:{for(D(P),v=n(m);v!==null&&!(v.expirationTime>P&&w());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var Mt=St(v.expirationTime<=P);if(P=r.unstable_now(),typeof Mt=="function"){v.callback=Mt,D(P),H=!0;break e}v===n(m)&&s(m),D(P)}else s(m);v=n(m)}if(v!==null)H=!0;else{var L=n(p);L!==null&&et(I,L.startTime-P),H=!1}}break t}finally{v=null,x=it,S=!1}H=void 0}}finally{H?V():F=!1}}}var V;if(typeof U=="function")V=function(){U(G)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,tt=W.port2;W.port1.onmessage=G,V=function(){tt.postMessage(null)}}else V=function(){_(G,0)};function et(P,H){B=_(function(){P(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var it=x;x=H;try{return P()}finally{x=it}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var it=x;x=P;try{return H()}finally{x=it}},r.unstable_scheduleCallback=function(P,H,it){var St=r.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?St+it:St):it=St,P){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=it+Mt,P={id:g++,callback:H,priorityLevel:P,startTime:it,expirationTime:Mt,sortIndex:-1},it>St?(P.sortIndex=it,t(p,P),n(m)===null&&P===n(p)&&(T?(O(B),B=-1):T=!0,et(I,it-St))):(P.sortIndex=Mt,t(m,P),E||S||(E=!0,F||(F=!0,V()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var H=x;return function(){var it=x;x=H;try{return P.apply(this,arguments)}finally{x=it}}}})(Ah)),Ah}var fv;function yS(){return fv||(fv=1,Th.exports=xS()),Th.exports}var Ch={exports:{}},Pn={};var hv;function SS(){if(hv)return Pn;hv=1;var r=sp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Pn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.3",Pn}var dv;function MS(){if(dv)return Ch.exports;dv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ch.exports=SS(),Ch.exports}var pv;function bS(){if(pv)return Yo;pv=1;var r=yS(),t=sp(),n=MS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,C=u.child;C;){if(C===a){y=!0,a=u,o=d;break}if(C===o){y=!0,o=u,a=d;break}C=C.sibling}if(!y){for(C=d.child;C;){if(C===a){y=!0,a=d,o=u;break}if(C===o){y=!0,o=d,a=u;break}C=C.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return i=e.displayName||null,i!==null?i:tt(e.type)||"Memo";case Y:i=e._payload,e=e._init;try{return tt(e(i))}catch{}}return null}var et=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},St=[],Mt=-1;function L(e){return{current:e}}function K(e){0>Mt||(e.current=St[Mt],St[Mt]=null,Mt--)}function gt(e,i){Mt++,St[Mt]=e.current,e.current=i}var Rt=L(null),kt=L(null),nt=L(null),ht=L(null);function Dt(e,i){switch(gt(nt,i),gt(kt,e),gt(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?wg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=wg(i),e=Dg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Rt),gt(Rt,e)}function Xt(){K(Rt),K(kt),K(nt)}function qt(e){e.memoizedState!==null&&gt(ht,e);var i=Rt.current,a=Dg(i,e.type);i!==a&&(gt(kt,e),gt(Rt,a))}function ve(e){kt.current===e&&(K(Rt),K(kt)),ht.current===e&&(K(ht),Vo._currentValue=it)}var Re,ue;function _t(e){if(Re===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Re=i&&i[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Re+e+ue}var Ct=!1;function Et(e,i){if(!e||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var ot=ut}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ut){ot=ut}e.call(yt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],C=d[1];if(y&&C){var k=y.split(`
`),st=C.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===st.length)for(o=k.length-1,u=st.length-1;1<=o&&0<=u&&k[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==st[u]){var mt=`
`+k[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_t(a):""}function It(e,i){switch(e.tag){case 26:case 27:case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return e.child!==i&&i!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return Et(e.type,!1);case 11:return Et(e.type.render,!1);case 1:return Et(e.type,!0);case 31:return _t("Activity");default:return""}}function z(e){try{var i="",a=null;do i+=It(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ne=Object.prototype.hasOwnProperty,Gt=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,Ut=r.unstable_shouldYield,N=r.unstable_requestPaint,b=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,ct=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Ot=r.unstable_IdlePriority,Qt=r.log,se=r.unstable_setDisableYieldValue,dt=null,Tt=null;function zt(e){if(typeof Qt=="function"&&se(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(dt,e)}catch{}}var Ft=Math.clz32?Math.clz32:j,Nt=Math.log,_e=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(Nt(e)/_e|0)|0}var Ht=256,wt=262144,Yt=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bt(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=At(o):(y&=C,y!==0?u=At(y):a||(a=C&~e,a!==0&&(u=At(a))))):(C=o&~d,C!==0?u=At(C):y!==0?u=At(y):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:u}function Pt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Yt;return Yt<<=1,(Yt&62914560)===0&&(Yt=4194304),e}function we(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function On(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,i,a,o,u,d){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,k=e.expirationTimes,st=e.hiddenUpdates;for(a=y&~a;0<a;){var mt=31-Ft(a),yt=1<<mt;C[mt]=0,k[mt]=-1;var ot=st[mt];if(ot!==null)for(st[mt]=null,mt=0;mt<ot.length;mt++){var ut=ot[mt];ut!==null&&(ut.lane&=-536870913)}a&=~yt}o!==0&&_l(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~i))}function _l(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ft(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function $r(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function Is(e,i){var a=i&-i;return a=(a&42)!==0?1:to(a),(a&(e.suspendedLanes|i))!==0?0:a}function to(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function eo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:$g(e.type))}function Oi(e,i){var a=H.p;try{return H.p=e,i()}finally{H.p=a}}var ui=Math.random().toString(36).slice(2),cn="__reactFiber$"+ui,bn="__reactProps$"+ui,bi="__reactContainer$"+ui,Bs="__reactEvents$"+ui,Hs="__reactListeners$"+ui,xl="__reactHandles$"+ui,no="__reactResources$"+ui,is="__reactMarker$"+ui;function io(e){delete e[cn],delete e[bn],delete e[Bs],delete e[Hs],delete e[xl]}function Ma(e){var i=e[cn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[bi]||a[cn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Ig(e);e!==null;){if(a=e[cn])return a;e=Ig(e)}return i}e=a,a=e.parentNode}return null}function ba(e){if(e=e[cn]||e[bi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function as(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ea(e){var i=e[no];return i||(i=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function R(e){e[is]=!0}var Q=new Set,lt={};function rt(e,i){$(e,i),$(e+"Capture",i)}function $(e,i){for(lt[e]=i,e=0;e<i.length;e++)Q.add(i[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},Vt={};function Jt(e){return ne.call(Vt,e)?!0:ne.call(jt,e)?!1:Bt.test(e)?Vt[e]=!0:(jt[e]=!0,!1)}function $t(e,i,a){if(Jt(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function oe(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function te(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function je(e){if(!e._valueTracker){var i=Oe(e)?"checked":"value";e._valueTracker=Je(e,i,""+e[i])}}function Ie(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function de(e){return e.replace(Pe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function En(e,i,a,o,u,d,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+le(i)):e.value!==""+le(i)&&(e.value=""+le(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?Tn(e,y,le(i)):a!=null?Tn(e,y,le(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+le(C):e.removeAttribute("name")}function Zi(e,i,a,o,u,d,y,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){je(e);return}a=a!=null?""+le(a):"",i=i!=null?""+le(i):a,C||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),je(e)}function Tn(e,i,a){i==="number"&&ae(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fi(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+le(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Be(e,i,a){if(i!=null&&(i=""+le(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+le(a):""}function An(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(et(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=le(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),je(e)}function gn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||Cn.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Gs(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&Rn(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&Rn(e,d,i[d])}function Ei(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(e){return dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var _u=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,ks=null;function Rp(e){var i=ba(e);if(i&&(e=i.stateNode)){var a=e[bn]||null;t:switch(e=i.stateNode,i.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Ie(o)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&fi(e,!!a.multiple,i,!1)}}}var yu=!1;function wp(e,i,a){if(yu)return e(i,a);yu=!0;try{var o=e(i);return o}finally{if(yu=!1,(Vs!==null||ks!==null)&&(oc(),Vs&&(i=Vs,e=ks,ks=Vs=null,Rp(i),e)))for(i=0;i<e.length;i++)Rp(e[i])}}function ao(e,i){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Ji)try{var so={};Object.defineProperty(so,"passive",{get:function(){Su=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Su=!1}var Ta=null,Mu=null,Sl=null;function Dp(){if(Sl)return Sl;var e,i=Mu,a=i.length,o,u="value"in Ta?Ta.value:Ta.textContent,d=u.length;for(e=0;e<a&&i[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&i[a-o]===u[d-o];o++);return Sl=u.slice(e,1<o?1-o:void 0)}function Ml(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function Up(){return!1}function Wn(e){function i(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?bl:Up,this.isPropagationStopped=Up,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Wn(ss),ro=v({},ss,{view:0,detail:0}),px=Wn(ro),bu,Eu,oo,Tl=v({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(bu=e.screenX-oo.screenX,Eu=e.screenY-oo.screenY):Eu=bu=0,oo=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),Np=Wn(Tl),mx=v({},Tl,{dataTransfer:0}),gx=Wn(mx),vx=v({},ro,{relatedTarget:0}),Tu=Wn(vx),_x=v({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),xx=Wn(_x),yx=v({},ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sx=Wn(yx),Mx=v({},ss,{data:0}),Lp=Wn(Mx),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ax(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Tx[e])?!!i[e]:!1}function Au(){return Ax}var Cx=v({},ro,{key:function(e){if(e.key){var i=bx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?Ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rx=Wn(Cx),wx=v({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Wn(wx),Dx=v({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Ux=Wn(Dx),Nx=v({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lx=Wn(Nx),Ox=v({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=Wn(Ox),zx=v({},ss,{newState:0,oldState:0}),Ix=Wn(zx),Fx=[9,13,27,32],Cu=Ji&&"CompositionEvent"in window,lo=null;Ji&&"documentMode"in document&&(lo=document.documentMode);var Bx=Ji&&"TextEvent"in window&&!lo,Pp=Ji&&(!Cu||lo&&8<lo&&11>=lo),zp=" ",Ip=!1;function Fp(e,i){switch(e){case"keyup":return Fx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function Hx(e,i){switch(e){case"compositionend":return Bp(i);case"keypress":return i.which!==32?null:(Ip=!0,zp);case"textInput":return e=i.data,e===zp&&Ip?null:e;default:return null}}function Gx(e,i){if(Xs)return e==="compositionend"||!Cu&&Fp(e,i)?(e=Dp(),Sl=Mu=Ta=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pp&&i.locale!=="ko"?null:i.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Vx[e.type]:i==="textarea"}function Gp(e,i,a,o){Vs?ks?ks.push(o):ks=[o]:Vs=o,i=pc(i,"onChange"),0<i.length&&(a=new El("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var co=null,uo=null;function kx(e){bg(e,0)}function Al(e){var i=as(e);if(Ie(i))return e}function Vp(e,i){if(e==="change")return i}var kp=!1;if(Ji){var Ru;if(Ji){var wu="oninput"in document;if(!wu){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),wu=typeof Xp.oninput=="function"}Ru=wu}else Ru=!1;kp=Ru&&(!document.documentMode||9<document.documentMode)}function Wp(){co&&(co.detachEvent("onpropertychange",qp),uo=co=null)}function qp(e){if(e.propertyName==="value"&&Al(uo)){var i=[];Gp(i,uo,e,xu(e)),wp(kx,i)}}function Xx(e,i,a){e==="focusin"?(Wp(),co=i,uo=a,co.attachEvent("onpropertychange",qp)):e==="focusout"&&Wp()}function Wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al(uo)}function qx(e,i){if(e==="click")return Al(i)}function Yx(e,i){if(e==="input"||e==="change")return Al(i)}function jx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var $n=typeof Object.is=="function"?Object.is:jx;function fo(e,i){if($n(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ne.call(i,u)||!$n(e[u],i[u]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jp(e,i){var a=Yp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yp(a)}}function Zp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Zp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ae(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ae(e.document)}return i}function Du(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Zx=Ji&&"documentMode"in document&&11>=document.documentMode,Ws=null,Uu=null,ho=null,Nu=!1;function Jp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||Ws==null||Ws!==ae(o)||(o=Ws,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=pc(Uu,"onSelect"),0<o.length&&(i=new El("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=Ws)))}function rs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var qs={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},Lu={},Kp={};Ji&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function os(e){if(Lu[e])return Lu[e];if(!qs[e])return e;var i=qs[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Kp)return Lu[e]=i[a];return e}var $p=os("animationend"),tm=os("animationiteration"),em=os("animationstart"),Qx=os("transitionrun"),Jx=os("transitionstart"),Kx=os("transitioncancel"),nm=os("transitionend"),im=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Ti(e,i){im.set(e,i),rt(i,[e])}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],Ys=0,Pu=0;function Rl(){for(var e=Ys,i=Pu=Ys=0;i<e;){var a=hi[i];hi[i++]=null;var o=hi[i];hi[i++]=null;var u=hi[i];hi[i++]=null;var d=hi[i];if(hi[i++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&am(a,u,d)}}function wl(e,i,a,o){hi[Ys++]=e,hi[Ys++]=i,hi[Ys++]=a,hi[Ys++]=o,Pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zu(e,i,a,o){return wl(e,i,a,o),Dl(e)}function ls(e,i){return wl(e,null,null,i),Dl(e)}function am(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Ft(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=a|536870912),d):null}function Dl(e){if(50<Po)throw Po=0,qf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var js={};function $x(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,i,a,o){return new $x(e,i,a,o)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,i){var a=e.alternate;return a===null?(a=ti(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sm(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ul(e,i,a,o,u,d){var y=0;if(o=e,typeof e=="function")Iu(e)&&(y=1);else if(typeof e=="string")y=aS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ti(31,a,i,u),e.elementType=A,e.lanes=d,e;case T:return cs(a.children,u,d,i);case M:y=8,u|=24;break;case _:return e=ti(12,a,i,u|2),e.elementType=_,e.lanes=d,e;case I:return e=ti(13,a,i,u),e.elementType=I,e.lanes=d,e;case F:return e=ti(19,a,i,u),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case O:y=9;break t;case D:y=11;break t;case B:y=14;break t;case Y:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=ti(y,a,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function cs(e,i,a,o){return e=ti(7,e,o,i),e.lanes=a,e}function Fu(e,i,a){return e=ti(6,e,null,i),e.lanes=a,e}function rm(e){var i=ti(18,null,null,0);return i.stateNode=e,i}function Bu(e,i,a){return i=ti(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var om=new WeakMap;function di(e,i){if(typeof e=="object"&&e!==null){var a=om.get(e);return a!==void 0?a:(i={value:e,source:i,stack:z(i)},om.set(e,i),i)}return{value:e,source:i,stack:z(i)}}var Zs=[],Qs=0,Nl=null,po=0,pi=[],mi=0,Aa=null,Pi=1,zi="";function $i(e,i){Zs[Qs++]=po,Zs[Qs++]=Nl,Nl=e,po=i}function lm(e,i,a){pi[mi++]=Pi,pi[mi++]=zi,pi[mi++]=Aa,Aa=e;var o=Pi;e=zi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var d=32-Ft(i)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Pi=1<<32-Ft(i)+u|a<<u|o,zi=d+e}else Pi=1<<d|a<<u|o,zi=e}function Hu(e){e.return!==null&&($i(e,1),lm(e,1,0))}function Gu(e){for(;e===Nl;)Nl=Zs[--Qs],Zs[Qs]=null,po=Zs[--Qs],Zs[Qs]=null;for(;e===Aa;)Aa=pi[--mi],pi[mi]=null,zi=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null}function cm(e,i){pi[mi++]=Pi,pi[mi++]=zi,pi[mi++]=Aa,Pi=i.id,zi=i.overflow,Aa=e}var wn=null,Ze=null,Ce=!1,Ca=null,gi=!1,Vu=Error(s(519));function Ra(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(di(i,e)),Vu}function um(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[cn]=e,i[bn]=o,a){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(a=0;a<Io.length;a++)Ee(Io[a],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),Zi(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),An(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||Cg(i.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),o.onScroll!=null&&Ee("scroll",i),o.onScrollEnd!=null&&Ee("scrollend",i),o.onClick!=null&&(i.onclick=Qi),i=!0):i=!1,i||Ra(e,!0)}function fm(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:wn=wn.return}}function Js(e){if(e!==wn)return!1;if(!Ce)return fm(e),Ce=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||oh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ra(e),fm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=zg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=zg(e)}else i===27?(i=Ze,Va(e.type)?(e=hh,hh=null,Ze=e):Ze=i):Ze=wn?_i(e.stateNode.nextSibling):null;return!0}function us(){Ze=wn=null,Ce=!1}function ku(){var e=Ca;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Ca=null),e}function mo(e){Ca===null?Ca=[e]:Ca.push(e)}var Xu=L(null),fs=null,ta=null;function wa(e,i,a){gt(Xu,i._currentValue),i._currentValue=a}function ea(e){e._currentValue=Xu.current,K(Xu)}function Wu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function qu(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;t:for(;d!==null;){var C=d;d=u;for(var k=0;k<i.length;k++)if(C.context===i[k]){d.lanes|=a,C=d.alternate,C!==null&&(C.lanes|=a),Wu(d.return,a,e),o||(y=null);break t}d=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Wu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Ks(e,i,a,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var C=u.type;$n(u.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(u===ht.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}u=u.return}e!==null&&qu(i,e,a,o),i.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hs(e){fs=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return hm(fs,e)}function Ol(e,i){return fs===null&&hs(e),hm(e,i)}function hm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(s(308));ta=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ta=ta.next=i;return a}var ty=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},ey=r.unstable_scheduleCallback,ny=r.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new ty,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&ey(ny,function(){e.controller.abort()})}var vo=null,ju=0,$s=0,tr=null;function iy(e,i){if(vo===null){var a=vo=[];ju=0,$s=Kf(),tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ju++,i.then(dm,dm),i}function dm(){if(--ju===0&&vo!==null){tr!==null&&(tr.status="fulfilled");var e=vo;vo=null,$s=0,tr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ay(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var pm=P.S;P.S=function(e,i){J0=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&iy(e,i),pm!==null&&pm(e,i)};var ds=L(null);function Zu(){var e=ds.current;return e!==null?e:Ye.pooledCache}function Pl(e,i){i===null?gt(ds,ds.current):gt(ds,i.pool)}function mm(){var e=Zu();return e===null?null:{parent:un._currentValue,pool:e}}var er=Error(s(460)),Qu=Error(s(474)),zl=Error(s(542)),Il={then:function(){}};function gm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vm(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Qi,Qi),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,xm(e),e;default:if(typeof i.status=="string")i.then(Qi,Qi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,xm(e),e}throw ms=i,er}}function ps(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,er):a}}var ms=null;function _m(){if(ms===null)throw Error(s(459));var e=ms;return ms=null,e}function xm(e){if(e===er||e===zl)throw Error(s(483))}var nr=null,_o=0;function Fl(e){var i=_o;return _o+=1,nr===null&&(nr=[]),vm(nr,e,i)}function xo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Bl(e,i){throw i.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ym(e){function i(J,X){if(e){var at=J.deletions;at===null?(J.deletions=[X],J.flags|=16):at.push(X)}}function a(J,X){if(!e)return null;for(;X!==null;)i(J,X),X=X.sibling;return null}function o(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function u(J,X){return J=Ki(J,X),J.index=0,J.sibling=null,J}function d(J,X,at){return J.index=at,e?(at=J.alternate,at!==null?(at=at.index,at<X?(J.flags|=67108866,X):at):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function y(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function C(J,X,at,vt){return X===null||X.tag!==6?(X=Fu(at,J.mode,vt),X.return=J,X):(X=u(X,at),X.return=J,X)}function k(J,X,at,vt){var re=at.type;return re===T?mt(J,X,at.props.children,vt,at.key):X!==null&&(X.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Y&&ps(re)===X.type)?(X=u(X,at.props),xo(X,at),X.return=J,X):(X=Ul(at.type,at.key,at.props,null,J.mode,vt),xo(X,at),X.return=J,X)}function st(J,X,at,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==at.containerInfo||X.stateNode.implementation!==at.implementation?(X=Bu(at,J.mode,vt),X.return=J,X):(X=u(X,at.children||[]),X.return=J,X)}function mt(J,X,at,vt,re){return X===null||X.tag!==7?(X=cs(at,J.mode,vt,re),X.return=J,X):(X=u(X,at),X.return=J,X)}function yt(J,X,at){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Fu(""+X,J.mode,at),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return at=Ul(X.type,X.key,X.props,null,J.mode,at),xo(at,X),at.return=J,at;case E:return X=Bu(X,J.mode,at),X.return=J,X;case Y:return X=ps(X),yt(J,X,at)}if(et(X)||V(X))return X=cs(X,J.mode,at,null),X.return=J,X;if(typeof X.then=="function")return yt(J,Fl(X),at);if(X.$$typeof===U)return yt(J,Ol(J,X),at);Bl(J,X)}return null}function ot(J,X,at,vt){var re=X!==null?X.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return re!==null?null:C(J,X,""+at,vt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case S:return at.key===re?k(J,X,at,vt):null;case E:return at.key===re?st(J,X,at,vt):null;case Y:return at=ps(at),ot(J,X,at,vt)}if(et(at)||V(at))return re!==null?null:mt(J,X,at,vt,null);if(typeof at.then=="function")return ot(J,X,Fl(at),vt);if(at.$$typeof===U)return ot(J,X,Ol(J,at),vt);Bl(J,at)}return null}function ut(J,X,at,vt,re){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(at)||null,C(X,J,""+vt,re);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return J=J.get(vt.key===null?at:vt.key)||null,k(X,J,vt,re);case E:return J=J.get(vt.key===null?at:vt.key)||null,st(X,J,vt,re);case Y:return vt=ps(vt),ut(J,X,at,vt,re)}if(et(vt)||V(vt))return J=J.get(at)||null,mt(X,J,vt,re,null);if(typeof vt.then=="function")return ut(J,X,at,Fl(vt),re);if(vt.$$typeof===U)return ut(J,X,at,Ol(X,vt),re);Bl(X,vt)}return null}function Kt(J,X,at,vt){for(var re=null,Ne=null,ee=X,xe=X=0,Ae=null;ee!==null&&xe<at.length;xe++){ee.index>xe?(Ae=ee,ee=null):Ae=ee.sibling;var Le=ot(J,ee,at[xe],vt);if(Le===null){ee===null&&(ee=Ae);break}e&&ee&&Le.alternate===null&&i(J,ee),X=d(Le,X,xe),Ne===null?re=Le:Ne.sibling=Le,Ne=Le,ee=Ae}if(xe===at.length)return a(J,ee),Ce&&$i(J,xe),re;if(ee===null){for(;xe<at.length;xe++)ee=yt(J,at[xe],vt),ee!==null&&(X=d(ee,X,xe),Ne===null?re=ee:Ne.sibling=ee,Ne=ee);return Ce&&$i(J,xe),re}for(ee=o(ee);xe<at.length;xe++)Ae=ut(ee,J,xe,at[xe],vt),Ae!==null&&(e&&Ae.alternate!==null&&ee.delete(Ae.key===null?xe:Ae.key),X=d(Ae,X,xe),Ne===null?re=Ae:Ne.sibling=Ae,Ne=Ae);return e&&ee.forEach(function(Ya){return i(J,Ya)}),Ce&&$i(J,xe),re}function ce(J,X,at,vt){if(at==null)throw Error(s(151));for(var re=null,Ne=null,ee=X,xe=X=0,Ae=null,Le=at.next();ee!==null&&!Le.done;xe++,Le=at.next()){ee.index>xe?(Ae=ee,ee=null):Ae=ee.sibling;var Ya=ot(J,ee,Le.value,vt);if(Ya===null){ee===null&&(ee=Ae);break}e&&ee&&Ya.alternate===null&&i(J,ee),X=d(Ya,X,xe),Ne===null?re=Ya:Ne.sibling=Ya,Ne=Ya,ee=Ae}if(Le.done)return a(J,ee),Ce&&$i(J,xe),re;if(ee===null){for(;!Le.done;xe++,Le=at.next())Le=yt(J,Le.value,vt),Le!==null&&(X=d(Le,X,xe),Ne===null?re=Le:Ne.sibling=Le,Ne=Le);return Ce&&$i(J,xe),re}for(ee=o(ee);!Le.done;xe++,Le=at.next())Le=ut(ee,J,xe,Le.value,vt),Le!==null&&(e&&Le.alternate!==null&&ee.delete(Le.key===null?xe:Le.key),X=d(Le,X,xe),Ne===null?re=Le:Ne.sibling=Le,Ne=Le);return e&&ee.forEach(function(mS){return i(J,mS)}),Ce&&$i(J,xe),re}function We(J,X,at,vt){if(typeof at=="object"&&at!==null&&at.type===T&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case S:t:{for(var re=at.key;X!==null;){if(X.key===re){if(re=at.type,re===T){if(X.tag===7){a(J,X.sibling),vt=u(X,at.props.children),vt.return=J,J=vt;break t}}else if(X.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Y&&ps(re)===X.type){a(J,X.sibling),vt=u(X,at.props),xo(vt,at),vt.return=J,J=vt;break t}a(J,X);break}else i(J,X);X=X.sibling}at.type===T?(vt=cs(at.props.children,J.mode,vt,at.key),vt.return=J,J=vt):(vt=Ul(at.type,at.key,at.props,null,J.mode,vt),xo(vt,at),vt.return=J,J=vt)}return y(J);case E:t:{for(re=at.key;X!==null;){if(X.key===re)if(X.tag===4&&X.stateNode.containerInfo===at.containerInfo&&X.stateNode.implementation===at.implementation){a(J,X.sibling),vt=u(X,at.children||[]),vt.return=J,J=vt;break t}else{a(J,X);break}else i(J,X);X=X.sibling}vt=Bu(at,J.mode,vt),vt.return=J,J=vt}return y(J);case Y:return at=ps(at),We(J,X,at,vt)}if(et(at))return Kt(J,X,at,vt);if(V(at)){if(re=V(at),typeof re!="function")throw Error(s(150));return at=re.call(at),ce(J,X,at,vt)}if(typeof at.then=="function")return We(J,X,Fl(at),vt);if(at.$$typeof===U)return We(J,X,Ol(J,at),vt);Bl(J,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,X!==null&&X.tag===6?(a(J,X.sibling),vt=u(X,at),vt.return=J,J=vt):(a(J,X),vt=Fu(at,J.mode,vt),vt.return=J,J=vt),y(J)):a(J,X)}return function(J,X,at,vt){try{_o=0;var re=We(J,X,at,vt);return nr=null,re}catch(ee){if(ee===er||ee===zl)throw ee;var Ne=ti(29,ee,null,J.mode);return Ne.lanes=vt,Ne.return=J,Ne}finally{}}}var gs=ym(!0),Sm=ym(!1),Da=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Dl(e),am(e,null,a),i}return wl(e,o,i,a),Dl(e)}function yo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,$r(e,a)}}function $u(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=i:d=d.next=i}else u=d=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var tf=!1;function So(){if(tf){var e=tr;if(e!==null)throw e}}function Mo(e,i,a,o){tf=!1;var u=e.updateQueue;Da=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var k=C,st=k.next;k.next=null,y===null?d=st:y.next=st,y=k;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==y&&(C===null?mt.firstBaseUpdate=st:C.next=st,mt.lastBaseUpdate=k))}if(d!==null){var yt=u.baseState;y=0,mt=st=k=null,C=d;do{var ot=C.lane&-536870913,ut=ot!==C.lane;if(ut?(Te&ot)===ot:(o&ot)===ot){ot!==0&&ot===$s&&(tf=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Kt=e,ce=C;ot=i;var We=a;switch(ce.tag){case 1:if(Kt=ce.payload,typeof Kt=="function"){yt=Kt.call(We,yt,ot);break t}yt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=ce.payload,ot=typeof Kt=="function"?Kt.call(We,yt,ot):Kt,ot==null)break t;yt=v({},yt,ot);break t;case 2:Da=!0}}ot=C.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(st=mt=ut,k=yt):mt=mt.next=ut,y|=ot;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ut=C,C=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);mt===null&&(k=yt),u.baseState=k,u.firstBaseUpdate=st,u.lastBaseUpdate=mt,d===null&&(u.shared.lanes=0),Ia|=y,e.lanes=y,e.memoizedState=yt}}function Mm(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function bm(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Mm(a[e],i)}var ir=L(null),Hl=L(0);function Em(e,i){e=ua,gt(Hl,e),gt(ir,i),ua=e|i.baseLanes}function ef(){gt(Hl,ua),gt(ir,ir.current)}function nf(){ua=Hl.current,K(ir),K(Hl)}var ei=L(null),vi=null;function La(e){var i=e.alternate;gt(on,on.current&1),gt(ei,e),vi===null&&(i===null||ir.current!==null||i.memoizedState!==null)&&(vi=e)}function af(e){gt(on,on.current),gt(ei,e),vi===null&&(vi=e)}function Tm(e){e.tag===22?(gt(on,on.current),gt(ei,e),vi===null&&(vi=e)):Oa()}function Oa(){gt(on,on.current),gt(ei,ei.current)}function ni(e){K(ei),vi===e&&(vi=null),K(on)}var on=L(0);function Gl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uh(a)||fh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var na=0,ge=null,ke=null,fn=null,Vl=!1,ar=!1,vs=!1,kl=0,bo=0,sr=null,sy=0;function an(){throw Error(s(321))}function sf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!$n(e[a],i[a]))return!1;return!0}function rf(e,i,a,o,u,d){return na=d,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=e===null||e.memoizedState===null?l0:Sf,vs=!1,d=a(o,u),vs=!1,ar&&(d=Cm(i,a,o,u)),Am(e),d}function Am(e){P.H=Ao;var i=ke!==null&&ke.next!==null;if(na=0,fn=ke=ge=null,Vl=!1,bo=0,sr=null,i)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&Ll(e)&&(hn=!0))}function Cm(e,i,a,o){ge=e;var u=0;do{if(ar&&(sr=null),bo=0,ar=!1,25<=u)throw Error(s(301));if(u+=1,fn=ke=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=c0,d=i(a,o)}while(ar);return d}function ry(){var e=P.H,i=e.useState()[0];return i=typeof i.then=="function"?Eo(i):i,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(ge.flags|=1024),i}function of(){var e=kl!==0;return kl=0,e}function lf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function cf(e){if(Vl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Vl=!1}na=0,fn=ke=ge=null,ar=!1,bo=kl=0,sr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ge.memoizedState=fn=e:fn=fn.next=e,fn}function ln(){if(ke===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var i=fn===null?ge.memoizedState:fn.next;if(i!==null)fn=i,ke=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},fn===null?ge.memoizedState=fn=e:fn=fn.next=e}return fn}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var i=bo;return bo+=1,sr===null&&(sr=[]),e=vm(sr,e,i),i=ge,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?l0:Sf),e}function Wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===U)return Dn(e)}throw Error(s(438,String(e)))}function uf(e){var i=null,a=ge.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Xl(),ge.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=w;return i.index++,a}function ia(e,i){return typeof i=="function"?i(e):i}function ql(e){var i=ln();return ff(i,ke,e)}function ff(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var C=y=null,k=null,st=i,mt=!1;do{var yt=st.lane&-536870913;if(yt!==st.lane?(Te&yt)===yt:(na&yt)===yt){var ot=st.revertLane;if(ot===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),yt===$s&&(mt=!0);else if((na&ot)===ot){st=st.next,ot===$s&&(mt=!0);continue}else yt={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(C=k=yt,y=d):k=k.next=yt,ge.lanes|=ot,Ia|=ot;yt=st.action,vs&&a(d,yt),d=st.hasEagerState?st.eagerState:a(d,yt)}else ot={lane:yt,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(C=k=ot,y=d):k=k.next=ot,ge.lanes|=yt,Ia|=yt;st=st.next}while(st!==null&&st!==i);if(k===null?y=d:k.next=C,!$n(d,e.memoizedState)&&(hn=!0,mt&&(a=tr,a!==null)))throw a;e.memoizedState=d,e.baseState=y,e.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hf(e){var i=ln(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=i.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);$n(d,i.memoizedState)||(hn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function Rm(e,i,a){var o=ge,u=ln(),d=Ce;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var y=!$n((ke||u).memoizedState,a);if(y&&(u.memoizedState=a,hn=!0),u=u.queue,mf(Um.bind(null,o,u,e),[e]),u.getSnapshot!==i||y||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,rr(9,{destroy:void 0},Dm.bind(null,o,u,a,i),null),Ye===null)throw Error(s(349));d||(na&127)!==0||wm(o,i,a)}return a}function wm(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=ge.updateQueue,i===null?(i=Xl(),ge.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Dm(e,i,a,o){i.value=a,i.getSnapshot=o,Nm(i)&&Lm(e)}function Um(e,i,a){return a(function(){Nm(i)&&Lm(e)})}function Nm(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!$n(e,a)}catch{return!0}}function Lm(e){var i=ls(e,2);i!==null&&Qn(i,e,2)}function df(e){var i=Gn();if(typeof e=="function"){var a=e;if(e=a(),vs){zt(!0);try{a()}finally{zt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},i}function Om(e,i,a,o){return e.baseState=a,ff(e,ke,typeof o=="function"?o:ia)}function oy(e,i,a,o,u){if(Zl(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,Pm(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Pm(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=P.T,y={};P.T=y;try{var C=a(u,o),k=P.S;k!==null&&k(y,C),zm(e,i,C)}catch(st){pf(e,i,st)}finally{d!==null&&y.types!==null&&(d.types=y.types),P.T=d}}else try{d=a(u,o),zm(e,i,d)}catch(st){pf(e,i,st)}}function zm(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Im(e,i,o)},function(o){return pf(e,i,o)}):Im(e,i,a)}function Im(e,i,a){i.status="fulfilled",i.value=a,Fm(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Pm(e,a)))}function pf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Fm(i),i=i.next;while(i!==o)}e.action=null}function Fm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Bm(e,i){return i}function Hm(e,i){if(Ce){var a=Ye.formState;if(a!==null){t:{var o=ge;if(Ce){if(Ze){e:{for(var u=Ze,d=gi;u.nodeType!==8;){if(!d){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}Ra(o)}o=!1}o&&(i=a[0])}}return a=Gn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:i},a.queue=o,a=s0.bind(null,ge,o),o.dispatch=a,o=df(!1),d=yf.bind(null,ge,!1,o.queue),o=Gn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=oy.bind(null,ge,u,d,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function Gm(e){var i=ln();return Vm(i,ke,e)}function Vm(e,i,a){if(i=ff(e,i,Bm)[0],e=ql(ia)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Eo(i)}catch(y){throw y===er?zl:y}else o=i;i=ln();var u=i.queue,d=u.dispatch;return a!==i.memoizedState&&(ge.flags|=2048,rr(9,{destroy:void 0},ly.bind(null,u,a),null)),[o,d,e]}function ly(e,i){e.action=i}function km(e){var i=ln(),a=ke;if(a!==null)return Vm(i,a,e);ln(),i=i.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function rr(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=ge.updateQueue,i===null&&(i=Xl(),ge.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Xm(){return ln().memoizedState}function Yl(e,i,a,o){var u=Gn();ge.flags|=e,u.memoizedState=rr(1|i,{destroy:void 0},a,o===void 0?null:o)}function jl(e,i,a,o){var u=ln();o=o===void 0?null:o;var d=u.memoizedState.inst;ke!==null&&o!==null&&sf(o,ke.memoizedState.deps)?u.memoizedState=rr(i,d,a,o):(ge.flags|=e,u.memoizedState=rr(1|i,d,a,o))}function Wm(e,i){Yl(8390656,8,e,i)}function mf(e,i){jl(2048,8,e,i)}function cy(e){ge.flags|=4;var i=ge.updateQueue;if(i===null)i=Xl(),ge.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function qm(e){var i=ln().memoizedState;return cy({ref:i,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Ym(e,i){return jl(4,2,e,i)}function jm(e,i){return jl(4,4,e,i)}function Zm(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Qm(e,i,a){a=a!=null?a.concat([e]):null,jl(4,4,Zm.bind(null,i,e),a)}function gf(){}function Jm(e,i){var a=ln();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&sf(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function Km(e,i){var a=ln();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&sf(i,o[1]))return o[0];if(o=e(),vs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,i],o}function vf(e,i,a){return a===void 0||(na&1073741824)!==0&&(Te&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=$0(),ge.lanes|=e,Ia|=e,a)}function $m(e,i,a,o){return $n(a,i)?a:ir.current!==null?(e=vf(e,a,o),$n(e,i)||(hn=!0),e):(na&42)===0||(na&1073741824)!==0&&(Te&261930)===0?(hn=!0,e.memoizedState=a):(e=$0(),ge.lanes|=e,Ia|=e,i)}function t0(e,i,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var y=P.T,C={};P.T=C,yf(e,!1,i,a);try{var k=u(),st=P.S;if(st!==null&&st(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var mt=ay(k,o);To(e,i,mt,si(e))}else To(e,i,o,si(e))}catch(yt){To(e,i,{then:function(){},status:"rejected",reason:yt},si())}finally{H.p=d,y!==null&&C.types!==null&&(y.types=C.types),P.T=y}}function uy(){}function _f(e,i,a,o){if(e.tag!==5)throw Error(s(476));var u=e0(e).queue;t0(e,u,i,it,a===null?uy:function(){return n0(e),a(o)})}function e0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:it},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function n0(e){var i=e0(e);i.next===null&&(i=e.alternate.memoizedState),To(e,i.next.queue,{},si())}function xf(){return Dn(Vo)}function i0(){return ln().memoizedState}function a0(){return ln().memoizedState}function fy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=si();e=Ua(a);var o=Na(i,e,a);o!==null&&(Qn(o,i,a),yo(o,i,a)),i={cache:Yu()},e.payload=i;return}i=i.return}}function hy(e,i,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zl(e)?r0(i,a):(a=zu(e,i,a,o),a!==null&&(Qn(a,e,o),o0(a,i,o)))}function s0(e,i,a){var o=si();To(e,i,a,o)}function To(e,i,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zl(e))r0(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,C=d(y,a);if(u.hasEagerState=!0,u.eagerState=C,$n(C,y))return wl(e,i,u,0),Ye===null&&Rl(),!1}catch{}finally{}if(a=zu(e,i,u,o),a!==null)return Qn(a,e,o),o0(a,i,o),!0}return!1}function yf(e,i,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Zl(e)){if(i)throw Error(s(479))}else i=zu(e,a,o,2),i!==null&&Qn(i,e,2)}function Zl(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function r0(e,i){ar=Vl=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function o0(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,$r(e,a)}}var Ao={readContext:Dn,use:Wl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Ao.useEffectEvent=an;var l0={readContext:Dn,use:Wl,useCallback:function(e,i){return Gn().memoizedState=[e,i===void 0?null:i],e},useContext:Dn,useEffect:Wm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Yl(4194308,4,Zm.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Yl(4194308,4,e,i)},useInsertionEffect:function(e,i){Yl(4,2,e,i)},useMemo:function(e,i){var a=Gn();i=i===void 0?null:i;var o=e();if(vs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Gn();if(a!==void 0){var u=a(i);if(vs){zt(!0);try{a(i)}finally{zt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=hy.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var i=Gn();return e={current:e},i.memoizedState=e},useState:function(e){e=df(e);var i=e.queue,a=s0.bind(null,ge,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,i){var a=Gn();return vf(a,e,i)},useTransition:function(){var e=df(!1);return e=t0.bind(null,ge,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=ge,u=Gn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Ye===null)throw Error(s(349));(Te&127)!==0||wm(o,i,a)}u.memoizedState=a;var d={value:a,getSnapshot:i};return u.queue=d,Wm(Um.bind(null,o,d,e),[e]),o.flags|=2048,rr(9,{destroy:void 0},Dm.bind(null,o,d,a,i),null),a},useId:function(){var e=Gn(),i=Ye.identifierPrefix;if(Ce){var a=zi,o=Pi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=kl++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=sy++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:xf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e){var i=Gn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=yf.bind(null,ge,!0,a),a.dispatch=i,[e,i]},useMemoCache:uf,useCacheRefresh:function(){return Gn().memoizedState=fy.bind(null,ge)},useEffectEvent:function(e){var i=Gn(),a={impl:e};return i.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Dn,use:Wl,useCallback:Jm,useContext:Dn,useEffect:mf,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:jm,useMemo:Km,useReducer:ql,useRef:Xm,useState:function(){return ql(ia)},useDebugValue:gf,useDeferredValue:function(e,i){var a=ln();return $m(a,ke.memoizedState,e,i)},useTransition:function(){var e=ql(ia)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:Eo(e),i]},useSyncExternalStore:Rm,useId:i0,useHostTransitionStatus:xf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,i){var a=ln();return Om(a,ke,e,i)},useMemoCache:uf,useCacheRefresh:a0};Sf.useEffectEvent=qm;var c0={readContext:Dn,use:Wl,useCallback:Jm,useContext:Dn,useEffect:mf,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:jm,useMemo:Km,useReducer:hf,useRef:Xm,useState:function(){return hf(ia)},useDebugValue:gf,useDeferredValue:function(e,i){var a=ln();return ke===null?vf(a,e,i):$m(a,ke.memoizedState,e,i)},useTransition:function(){var e=hf(ia)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:Eo(e),i]},useSyncExternalStore:Rm,useId:i0,useHostTransitionStatus:xf,useFormState:km,useActionState:km,useOptimistic:function(e,i){var a=ln();return ke!==null?Om(a,ke,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:a0};c0.useEffectEvent=qm;function Mf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:v({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=si(),u=Ua(o);u.payload=i,a!=null&&(u.callback=a),i=Na(e,u,o),i!==null&&(Qn(i,e,o),yo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=si(),u=Ua(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=Na(e,u,o),i!==null&&(Qn(i,e,o),yo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=si(),o=Ua(a);o.tag=2,i!=null&&(o.callback=i),i=Na(e,o,a),i!==null&&(Qn(i,e,a),yo(i,e,a))}};function u0(e,i,a,o,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,y):i.prototype&&i.prototype.isPureReactComponent?!fo(a,o)||!fo(u,d):!0}function f0(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&bf.enqueueReplaceState(i,i.state,null)}function _s(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function h0(e){Cl(e)}function d0(e){console.error(e)}function p0(e){Cl(e)}function Ql(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function m0(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(e,i,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Ql(e,i)},a}function g0(e){return e=Ua(e),e.tag=3,e}function v0(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){m0(i,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){m0(i,a,o),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function dy(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Ks(i,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?lc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Il?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Zf(e,o,u)),!1;case 22:return a.flags|=65536,o===Il?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Zf(e,o,u)),!1}throw Error(s(435,a.tag))}return Zf(e,o,u),lc(),!1}if(Ce)return i=ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Vu&&(e=Error(s(422),{cause:o}),mo(di(e,a)))):(o!==Vu&&(i=Error(s(423),{cause:o}),mo(di(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Ef(e.stateNode,o,u),$u(e,u),sn!==4&&(sn=2)),!1;var d=Error(s(520),{cause:o});if(d=di(d,a),Oo===null?Oo=[d]:Oo.push(d),sn!==4&&(sn=2),i===null)return!0;o=di(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ef(a.stateNode,o,e),$u(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Fa===null||!Fa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=g0(u),v0(u,e,a,o),$u(a,u),!1}a=a.return}while(a!==null);return!1}var Tf=Error(s(461)),hn=!1;function Un(e,i,a,o){i.child=e===null?Sm(i,null,a,o):gs(i,e.child,a,o)}function _0(e,i,a,o,u){a=a.render;var d=i.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return hs(i),o=rf(e,i,a,y,d,u),C=of(),e!==null&&!hn?(lf(e,i,u),aa(e,i,u)):(Ce&&C&&Hu(i),i.flags|=1,Un(e,i,o,u),i.child)}function x0(e,i,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Iu(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,y0(e,i,d,o,u)):(e=Ul(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Lf(e,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(y,o)&&e.ref===i.ref)return aa(e,i,u)}return i.flags|=1,e=Ki(d,o),e.ref=i.ref,e.return=i,i.child=e}function y0(e,i,a,o,u){if(e!==null){var d=e.memoizedProps;if(fo(d,o)&&e.ref===i.ref)if(hn=!1,i.pendingProps=o=d,Lf(e,u))(e.flags&131072)!==0&&(hn=!0);else return i.lanes=e.lanes,aa(e,i,u)}return Af(e,i,a,o,u)}function S0(e,i,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return M0(e,i,d,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(i,d!==null?d.cachePool:null),d!==null?Em(i,d):ef(),Tm(i);else return o=i.lanes=536870912,M0(e,i,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Pl(i,d.cachePool),Em(i,d),Oa(),i.memoizedState=null):(e!==null&&Pl(i,null),ef(),Oa());return Un(e,i,u,a),i.child}function Co(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function M0(e,i,a,o,u){var d=Zu();return d=d===null?null:{parent:un._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Pl(i,null),ef(),Tm(i),e!==null&&Ks(e,i,o,!0),i.childLanes=u,null}function Jl(e,i){return i=$l({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function b0(e,i,a){return gs(i,e.child,null,a),e=Jl(i,i.pendingProps),e.flags|=2,ni(i),i.memoizedState=null,e}function py(e,i,a){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=Jl(i,o),i.lanes=536870912,Co(null,e);if(af(i),(e=Ze)?(e=Pg(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=i,i.child=a,wn=i,Ze=null)):e=null,e===null)throw Ra(i);return i.lanes=536870912,null}return Jl(i,o)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(af(i),u)if(i.flags&256)i.flags&=-257,i=b0(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(hn||Ks(e,i,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=Ye,o!==null&&(y=Is(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,ls(e,y),Qn(o,e,y),Tf;lc(),i=b0(e,i,a)}else e=d.treeContext,Ze=_i(y.nextSibling),wn=i,Ce=!0,Ca=null,gi=!1,e!==null&&cm(i,e),i=Jl(i,o),i.flags|=4096;return i}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Kl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Af(e,i,a,o,u){return hs(i),a=rf(e,i,a,o,void 0,u),o=of(),e!==null&&!hn?(lf(e,i,u),aa(e,i,u)):(Ce&&o&&Hu(i),i.flags|=1,Un(e,i,a,u),i.child)}function E0(e,i,a,o,u,d){return hs(i),i.updateQueue=null,a=Cm(i,o,a,u),Am(e),o=of(),e!==null&&!hn?(lf(e,i,d),aa(e,i,d)):(Ce&&o&&Hu(i),i.flags|=1,Un(e,i,a,d),i.child)}function T0(e,i,a,o,u){if(hs(i),i.stateNode===null){var d=js,y=a.contextType;typeof y=="object"&&y!==null&&(d=Dn(y)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=bf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Ju(i),y=a.contextType,d.context=typeof y=="object"&&y!==null?Dn(y):js,d.state=i.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Mf(i,a,y,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&bf.enqueueReplaceState(d,d.state,null),Mo(i,o,d,u),So(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var C=i.memoizedProps,k=_s(a,C);d.props=k;var st=d.context,mt=a.contextType;y=js,typeof mt=="object"&&mt!==null&&(y=Dn(mt));var yt=a.getDerivedStateFromProps;mt=typeof yt=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||st!==y)&&f0(i,d,o,y),Da=!1;var ot=i.memoizedState;d.state=ot,Mo(i,o,d,u),So(),st=i.memoizedState,C||ot!==st||Da?(typeof yt=="function"&&(Mf(i,a,yt,o),st=i.memoizedState),(k=Da||u0(i,a,k,o,ot,st,y))?(mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=st),d.props=o,d.state=st,d.context=y,o=k):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Ku(e,i),y=i.memoizedProps,mt=_s(a,y),d.props=mt,yt=i.pendingProps,ot=d.context,st=a.contextType,k=js,typeof st=="object"&&st!==null&&(k=Dn(st)),C=a.getDerivedStateFromProps,(st=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==yt||ot!==k)&&f0(i,d,o,k),Da=!1,ot=i.memoizedState,d.state=ot,Mo(i,o,d,u),So();var ut=i.memoizedState;y!==yt||ot!==ut||Da||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof C=="function"&&(Mf(i,a,C,o),ut=i.memoizedState),(mt=Da||u0(i,a,mt,o,ot,ut,k)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?(st||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ut,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ut,k)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ut),d.props=o,d.state=ut,d.context=k,o=mt):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Kl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=gs(i,e.child,null,u),i.child=gs(i,null,a,u)):Un(e,i,a,u),i.memoizedState=d.state,e=i.child):e=aa(e,i,u),e}function A0(e,i,a,o){return us(),i.flags|=256,Un(e,i,a,o),i.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(e){return{baseLanes:e,cachePool:mm()}}function wf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=ai),e}function C0(e,i,a){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),y&&(u=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ce){if(u?La(i):Oa(),(e=Ze)?(e=Pg(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=i,i.child=a,wn=i,Ze=null)):e=null,e===null)throw Ra(i);return fh(e)?i.lanes=32:i.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Oa(),u=i.mode,C=$l({mode:"hidden",children:C},u),o=cs(o,u,a,null),C.return=i,o.return=i,C.sibling=o,i.child=C,o=i.child,o.memoizedState=Rf(a),o.childLanes=wf(e,y,a),i.memoizedState=Cf,Co(null,o)):(La(i),Df(i,C))}var k=e.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(d)i.flags&256?(La(i),i.flags&=-257,i=Uf(e,i,a)):i.memoizedState!==null?(Oa(),i.child=e.child,i.flags|=128,i=null):(Oa(),C=o.fallback,u=i.mode,o=$l({mode:"visible",children:o.children},u),C=cs(C,u,a,null),C.flags|=2,o.return=i,C.return=i,o.sibling=C,i.child=o,gs(i,e.child,null,a),o=i.child,o.memoizedState=Rf(a),o.childLanes=wf(e,y,a),i.memoizedState=Cf,i=Co(null,o));else if(La(i),fh(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var st=y.dgst;y=st,o=Error(s(419)),o.stack="",o.digest=y,mo({value:o,source:null,stack:null}),i=Uf(e,i,a)}else if(hn||Ks(e,i,a,!1),y=(a&e.childLanes)!==0,hn||y){if(y=Ye,y!==null&&(o=Is(y,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,ls(e,o),Qn(y,e,o),Tf;uh(C)||lc(),i=Uf(e,i,a)}else uh(C)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,Ze=_i(C.nextSibling),wn=i,Ce=!0,Ca=null,gi=!1,e!==null&&cm(i,e),i=Df(i,o.children),i.flags|=4096);return i}return u?(Oa(),C=o.fallback,u=i.mode,k=e.child,st=k.sibling,o=Ki(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,st!==null?C=Ki(st,C):(C=cs(C,u,a,null),C.flags|=2),C.return=i,o.return=i,o.sibling=C,i.child=o,Co(null,o),o=i.child,C=e.child.memoizedState,C===null?C=Rf(a):(u=C.cachePool,u!==null?(k=un._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=mm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=wf(e,y,a),i.memoizedState=Cf,Co(e.child,o)):(La(i),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=a,i.memoizedState=null,a)}function Df(e,i){return i=$l({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function $l(e,i){return e=ti(22,e,null,i),e.lanes=0,e}function Uf(e,i,a){return gs(i,e.child,null,a),e=Df(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function R0(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Wu(e.return,i,a)}function Nf(e,i,a,o,u,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function w0(e,i,a){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=on.current,C=(y&2)!==0;if(C?(y=y&1|2,i.flags|=128):y&=1,gt(on,y),Un(e,i,o,a),o=Ce?po:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R0(e,a,i);else if(e.tag===19)R0(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&Gl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Nf(i,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Gl(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nf(i,!0,a,null,d,o);break;case"together":Nf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function aa(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ia|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Ks(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ki(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Lf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function my(e,i,a){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),wa(i,un,e.memoizedState.cache),us();break;case 27:case 5:qt(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:wa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,af(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(La(i),i.flags|=128,null):(a&i.child.childLanes)!==0?C0(e,i,a):(La(i),e=aa(e,i,a),e!==null?e.sibling:null);La(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Ks(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return w0(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(on,on.current),o)break;return null;case 22:return i.lanes=0,S0(e,i,a,i.pendingProps);case 24:wa(i,un,e.memoizedState.cache)}return aa(e,i,a)}function D0(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)hn=!0;else{if(!Lf(e,a)&&(i.flags&128)===0)return hn=!1,my(e,i,a);hn=(e.flags&131072)!==0}else hn=!1,Ce&&(i.flags&1048576)!==0&&lm(i,po,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=ps(i.elementType),i.type=e,typeof e=="function")Iu(e)?(o=_s(e,o),i.tag=1,i=T0(null,i,e,o,a)):(i.tag=0,i=Af(null,i,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){i.tag=11,i=_0(null,i,e,o,a);break t}else if(u===B){i.tag=14,i=x0(null,i,e,o,a);break t}}throw i=tt(e)||e,Error(s(306,i,""))}}return i;case 0:return Af(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=_s(o,i.pendingProps),T0(e,i,o,u,a);case 3:t:{if(Dt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,Ku(e,i),Mo(i,o,null,a);var y=i.memoizedState;if(o=y.cache,wa(i,un,o),o!==d.cache&&qu(i,[un],a,!0),So(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=A0(e,i,o,a);break t}else if(o!==u){u=di(Error(s(424)),i),mo(u),i=A0(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=_i(e.firstChild),wn=i,Ce=!0,Ca=null,gi=!0,a=Sm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(us(),o===u){i=aa(e,i,a);break t}Un(e,i,o,a)}i=i.child}return i;case 26:return Kl(e,i),e===null?(a=Gg(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ce||(a=i.type,e=i.pendingProps,o=mc(nt.current).createElement(a),o[cn]=i,o[bn]=e,Nn(o,a,e),R(o),i.stateNode=o):i.memoizedState=Gg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return qt(i),e===null&&Ce&&(o=i.stateNode=Fg(i.type,i.pendingProps,nt.current),wn=i,gi=!0,u=Ze,Va(i.type)?(hh=u,Ze=_i(o.firstChild)):Ze=u),Un(e,i,i.pendingProps.children,a),Kl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ce&&((u=o=Ze)&&(o=Wy(o,i.type,i.pendingProps,gi),o!==null?(i.stateNode=o,wn=i,Ze=_i(o.firstChild),gi=!1,u=!0):u=!1),u||Ra(i)),qt(i),u=i.type,d=i.pendingProps,y=e!==null?e.memoizedProps:null,o=d.children,oh(u,d)?o=null:y!==null&&oh(u,y)&&(i.flags|=32),i.memoizedState!==null&&(u=rf(e,i,ry,null,null,a),Vo._currentValue=u),Kl(e,i),Un(e,i,o,a),i.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=qy(a,i.pendingProps,gi),a!==null?(i.stateNode=a,wn=i,Ze=null,e=!0):e=!1),e||Ra(i)),null;case 13:return C0(e,i,a);case 4:return Dt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=gs(i,null,o,a):Un(e,i,o,a),i.child;case 11:return _0(e,i,i.type,i.pendingProps,a);case 7:return Un(e,i,i.pendingProps,a),i.child;case 8:return Un(e,i,i.pendingProps.children,a),i.child;case 12:return Un(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,wa(i,i.type,o.value),Un(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,hs(i),u=Dn(u),o=o(u),i.flags|=1,Un(e,i,o,a),i.child;case 14:return x0(e,i,i.type,i.pendingProps,a);case 15:return y0(e,i,i.type,i.pendingProps,a);case 19:return w0(e,i,a);case 31:return py(e,i,a);case 22:return S0(e,i,a,i.pendingProps);case 24:return hs(i),o=Dn(un),e===null?(u=Zu(),u===null&&(u=Ye,d=Yu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),i.memoizedState={parent:o,cache:u},Ju(i),wa(i,un,u)):((e.lanes&a)!==0&&(Ku(e,i),Mo(i,null,null,a),So()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),wa(i,un,o)):(o=d.cache,wa(i,un,o),o!==u.cache&&qu(i,[un],a,!0))),Un(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function sa(e){e.flags|=4}function Of(e,i,a,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ig())e.flags|=8192;else throw ms=Il,Qu}else e.flags&=-16777217}function U0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qg(i))if(ig())e.flags|=8192;else throw ms=Il,Qu}function tc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Fe():536870912,e.lanes|=i,ur|=i)}function Ro(e,i){if(!Ce)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function gy(e,i,a){var o=i.pendingProps;switch(Gu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ea(un),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(i)?sa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ku())),Qe(i),null;case 26:var u=i.type,d=i.memoizedState;return e===null?(sa(i),d!==null?(Qe(i),U0(i,d)):(Qe(i),Of(i,u,null,o,a))):d?d!==e.memoizedState?(sa(i),Qe(i),U0(i,d)):(Qe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&sa(i),Qe(i),Of(i,u,e,o,a)),null;case 27:if(ve(i),a=nt.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&sa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Qe(i),null}e=Rt.current,Js(i)?um(i):(e=Fg(u,o,a),i.stateNode=e,sa(i))}return Qe(i),null;case 5:if(ve(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&sa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Qe(i),null}if(d=Rt.current,Js(i))um(i);else{var y=mc(nt.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[cn]=i,d[bn]=o;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;t:switch(Nn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&sa(i)}}return Qe(i),Of(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&sa(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=nt.current,Js(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=wn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Cg(e.nodeValue,a)),e||Ra(i,!0)}else e=mc(e).createTextNode(o),e[cn]=i,i.stateNode=e}return Qe(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=Js(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),e=!1}else a=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(ni(i),i):(ni(i),null);if((i.flags&128)!==0)throw Error(s(558))}return Qe(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ni(i),i):(ni(i),null)}return ni(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),tc(i,i.updateQueue),Qe(i),null);case 4:return Xt(),e===null&&nh(i.stateNode.containerInfo),Qe(i),null;case 10:return ea(i.type),Qe(i),null;case 19:if(K(on),o=i.memoizedState,o===null)return Qe(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)Ro(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Gl(e),d!==null){for(i.flags|=128,Ro(o,!1),e=d.updateQueue,i.updateQueue=e,tc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)sm(a,e),a=a.sibling;return gt(on,on.current&1|2),Ce&&$i(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&b()>sc&&(i.flags|=128,u=!0,Ro(o,!1),i.lanes=4194304)}else{if(!u)if(e=Gl(d),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,tc(i,e),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ce)return Qe(i),null}else 2*b()-o.renderingStartTime>sc&&a!==536870912&&(i.flags|=128,u=!0,Ro(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=on.current,gt(on,u?a&1|2:a&1),Ce&&$i(i,o.treeForkCount),e):(Qe(i),null);case 22:case 23:return ni(i),nf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),a=i.updateQueue,a!==null&&tc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&K(ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ea(un),Qe(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function vy(e,i){switch(Gu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ea(un),Xt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ve(i),null;case 31:if(i.memoizedState!==null){if(ni(i),i.alternate===null)throw Error(s(340));us()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ni(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));us()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return K(on),null;case 4:return Xt(),null;case 10:return ea(i.type),null;case 22:case 23:return ni(i),nf(),e!==null&&K(ds),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ea(un),null;case 25:return null;default:return null}}function N0(e,i){switch(Gu(i),i.tag){case 3:ea(un),Xt();break;case 26:case 27:case 5:ve(i);break;case 4:Xt();break;case 31:i.memoizedState!==null&&ni(i);break;case 13:ni(i);break;case 19:K(on);break;case 10:ea(i.type);break;case 22:case 23:ni(i),nf(),e!==null&&K(ds);break;case 24:ea(un)}}function wo(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(C){Ge(i,i.return,C)}}function Pa(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=i;var k=a,st=C;try{st()}catch(mt){Ge(u,k,mt)}}}o=o.next}while(o!==d)}}catch(mt){Ge(i,i.return,mt)}}function L0(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{bm(i,a)}catch(o){Ge(e,e.return,o)}}}function O0(e,i,a){a.props=_s(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,i,o)}}function Do(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,i,u)}}function Ii(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,i,u)}else a.current=null}function P0(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Pf(e,i,a){try{var o=e.stateNode;By(o,e.type,a,i),o[bn]=i}catch(u){Ge(e,e.return,u)}}function z0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function If(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Qi));else if(o!==4&&(o===27&&Va(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(If(e,i,a),e=e.sibling;e!==null;)If(e,i,a),e=e.sibling}function ec(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ec(e,i,a),e=e.sibling;e!==null;)ec(e,i,a),e=e.sibling}function I0(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Nn(i,o,a),i[cn]=e,i[bn]=a}catch(d){Ge(e,e.return,d)}}var ra=!1,dn=!1,Ff=!1,F0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function _y(e,i){if(e=e.containerInfo,sh=Mc,e=Qp(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var y=0,C=-1,k=-1,st=0,mt=0,yt=e,ot=null;e:for(;;){for(var ut;yt!==a||u!==0&&yt.nodeType!==3||(C=y+u),yt!==d||o!==0&&yt.nodeType!==3||(k=y+o),yt.nodeType===3&&(y+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)ot=yt,yt=ut;for(;;){if(yt===e)break e;if(ot===a&&++st===u&&(C=y),ot===d&&++mt===o&&(k=y),(ut=yt.nextSibling)!==null)break;yt=ot,ot=yt.parentNode}yt=ut}a=C===-1||k===-1?null:{start:C,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(rh={focusedElem:e,selectionRange:a},Mc=!1,yn=i;yn!==null;)if(i=yn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,yn=e;else for(;yn!==null;){switch(i=yn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Kt=_s(a.type,u);e=o.getSnapshotBeforeUpdate(Kt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ge(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,yn=e;break}yn=i.return}}function B0(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),o&4&&wo(5,a);break;case 1:if(la(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var u=_s(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}o&64&&L0(a),o&512&&Do(a,a.return);break;case 3:if(la(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{bm(e,i)}catch(y){Ge(a,a.return,y)}}break;case 27:i===null&&o&4&&I0(a);case 26:case 5:la(e,a),i===null&&o&4&&P0(a),o&512&&Do(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),o&4&&V0(e,a);break;case 13:la(e,a),o&4&&k0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Cy.bind(null,a),Yy(e,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){i=i!==null&&i.memoizedState!==null||dn,u=ra;var d=dn;ra=o,(dn=i)&&!d?ca(e,a,(a.subtreeFlags&8772)!==0):la(e,a),ra=u,dn=d}break;case 30:break;default:la(e,a)}}function H0(e){var i=e.alternate;i!==null&&(e.alternate=null,H0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&io(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,qn=!1;function oa(e,i,a){for(a=a.child;a!==null;)G0(e,i,a),a=a.sibling}function G0(e,i,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:dn||Ii(a,i),oa(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Ii(a,i);var o=Ke,u=qn;Va(a.type)&&(Ke=a.stateNode,qn=!1),oa(e,i,a),Bo(a.stateNode),Ke=o,qn=u;break;case 5:dn||Ii(a,i);case 6:if(o=Ke,u=qn,Ke=null,oa(e,i,a),Ke=o,qn=u,Ke!==null)if(qn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(d){Ge(a,i,d)}else try{Ke.removeChild(a.stateNode)}catch(d){Ge(a,i,d)}break;case 18:Ke!==null&&(qn?(e=Ke,Lg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):Lg(Ke,a.stateNode));break;case 4:o=Ke,u=qn,Ke=a.stateNode.containerInfo,qn=!0,oa(e,i,a),Ke=o,qn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,i),dn||Pa(4,a,i),oa(e,i,a);break;case 1:dn||(Ii(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&O0(a,i,o)),oa(e,i,a);break;case 21:oa(e,i,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,oa(e,i,a),dn=o;break;default:oa(e,i,a)}}function V0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Ge(i,i.return,a)}}}function k0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Ge(i,i.return,a)}}function xy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new F0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new F0),i;default:throw Error(s(435,e.tag))}}function nc(e,i){var a=xy(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ry.bind(null,e,o);o.then(u,u)}})}function Yn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,y=i,C=y;t:for(;C!==null;){switch(C.tag){case 27:if(Va(C.type)){Ke=C.stateNode,qn=!1;break t}break;case 5:Ke=C.stateNode,qn=!1;break t;case 3:case 4:Ke=C.stateNode.containerInfo,qn=!0;break t}C=C.return}if(Ke===null)throw Error(s(160));G0(d,y,u),Ke=null,qn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)X0(i,e),i=i.sibling}var Ai=null;function X0(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(i,e),jn(e),o&4&&(Pa(3,e,e.return),wo(3,e),Pa(5,e,e.return));break;case 1:Yn(i,e),jn(e),o&512&&(dn||a===null||Ii(a,a.return)),o&64&&ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Yn(i,e),jn(e),o&512&&(dn||a===null||Ii(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[is]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Nn(d,o,a),d[cn]=e,R(d),o=d;break t;case"link":var y=Xg("link","href",u).get(o+(a.href||""));if(y){for(var C=0;C<y.length;C++)if(d=y[C],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(C,1);break e}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=Xg("meta","content",u).get(o+(a.content||""))){for(C=0;C<y.length;C++)if(d=y[C],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(C,1);break e}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=e,R(d),o=d}e.stateNode=o}else Wg(u,e.type,e.stateNode);else e.stateNode=kg(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Wg(u,e.type,e.stateNode):kg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(i,e),jn(e),o&512&&(dn||a===null||Ii(a,a.return)),a!==null&&o&4&&Pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(i,e),jn(e),o&512&&(dn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{gn(u,"")}catch(Kt){Ge(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Yn(i,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){Ge(e,e.return,Kt)}}break;case 3:if(_c=null,u=Ai,Ai=gc(i.containerInfo),Yn(i,e),Ai=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(i.containerInfo)}catch(Kt){Ge(e,e.return,Kt)}Ff&&(Ff=!1,W0(e));break;case 4:o=Ai,Ai=gc(e.stateNode.containerInfo),Yn(i,e),jn(e),Ai=o;break;case 12:Yn(i,e),jn(e);break;case 31:Yn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 13:Yn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ac=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,st=ra,mt=dn;if(ra=st||u,dn=mt||k,Yn(i,e),dn=mt,ra=st,jn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||k||ra||dn||xs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){k=a=i;try{if(d=k.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=k.stateNode;var yt=k.memoizedProps.style,ot=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;C.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Kt){Ge(k,k.return,Kt)}}}else if(i.tag===6){if(a===null){k=i;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(Kt){Ge(k,k.return,Kt)}}}else if(i.tag===18){if(a===null){k=i;try{var ut=k.stateNode;u?Og(ut,!0):Og(k.stateNode,!1)}catch(Kt){Ge(k,k.return,Kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,nc(e,a))));break;case 19:Yn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 30:break;case 21:break;default:Yn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(z0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=zf(e);ec(e,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(gn(y,""),a.flags&=-33);var C=zf(e);ec(e,C,y);break;case 3:case 4:var k=a.stateNode.containerInfo,st=zf(e);If(e,st,k);break;default:throw Error(s(161))}}catch(mt){Ge(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function W0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;W0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function la(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)B0(e,i.alternate,i),i=i.sibling}function xs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Pa(4,i,i.return),xs(i);break;case 1:Ii(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&O0(i,i.return,a),xs(i);break;case 27:Bo(i.stateNode);case 26:case 5:Ii(i,i.return),xs(i);break;case 22:i.memoizedState===null&&xs(i);break;case 30:xs(i);break;default:xs(i)}e=e.sibling}}function ca(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:ca(u,d,a),wo(4,d);break;case 1:if(ca(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Ge(o,o.return,st)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)Mm(k[u],C)}catch(st){Ge(o,o.return,st)}}a&&y&64&&L0(d),Do(d,d.return);break;case 27:I0(d);case 26:case 5:ca(u,d,a),a&&o===null&&y&4&&P0(d),Do(d,d.return);break;case 12:ca(u,d,a);break;case 31:ca(u,d,a),a&&y&4&&V0(u,d);break;case 13:ca(u,d,a),a&&y&4&&k0(u,d);break;case 22:d.memoizedState===null&&ca(u,d,a),Do(d,d.return);break;case 30:break;default:ca(u,d,a)}i=i.sibling}}function Bf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&go(a))}function Hf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e))}function Ci(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)q0(e,i,a,o),i=i.sibling}function q0(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ci(e,i,a,o),u&2048&&wo(9,i);break;case 1:Ci(e,i,a,o);break;case 3:Ci(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e)));break;case 12:if(u&2048){Ci(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,y=d.id,C=d.onPostCommit;typeof C=="function"&&C(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Ge(i,i.return,k)}}else Ci(e,i,a,o);break;case 31:Ci(e,i,a,o);break;case 13:Ci(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Ci(e,i,a,o):Uo(e,i):d._visibility&2?Ci(e,i,a,o):(d._visibility|=2,or(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&Bf(y,i);break;case 24:Ci(e,i,a,o),u&2048&&Hf(i.alternate,i);break;default:Ci(e,i,a,o)}}function or(e,i,a,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,y=i,C=a,k=o,st=y.flags;switch(y.tag){case 0:case 11:case 15:or(d,y,C,k,u),wo(8,y);break;case 23:break;case 22:var mt=y.stateNode;y.memoizedState!==null?mt._visibility&2?or(d,y,C,k,u):Uo(d,y):(mt._visibility|=2,or(d,y,C,k,u)),u&&st&2048&&Bf(y.alternate,y);break;case 24:or(d,y,C,k,u),u&&st&2048&&Hf(y.alternate,y);break;default:or(d,y,C,k,u)}i=i.sibling}}function Uo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:Uo(a,o),u&2048&&Bf(o.alternate,o);break;case 24:Uo(a,o),u&2048&&Hf(o.alternate,o);break;default:Uo(a,o)}i=i.sibling}}var No=8192;function lr(e,i,a){if(e.subtreeFlags&No)for(e=e.child;e!==null;)Y0(e,i,a),e=e.sibling}function Y0(e,i,a){switch(e.tag){case 26:lr(e,i,a),e.flags&No&&e.memoizedState!==null&&sS(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:lr(e,i,a);break;case 3:case 4:var o=Ai;Ai=gc(e.stateNode.containerInfo),lr(e,i,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=No,No=16777216,lr(e,i,a),No=o):lr(e,i,a));break;default:lr(e,i,a)}}function j0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Lo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,Q0(o,e)}j0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Z0(e),e=e.sibling}function Z0(e){switch(e.tag){case 0:case 11:case 15:Lo(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:Lo(e);break;case 12:Lo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ic(e)):Lo(e);break;default:Lo(e)}}function ic(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,Q0(o,e)}j0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Pa(8,i,i.return),ic(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ic(i));break;default:ic(i)}e=e.sibling}}function Q0(e,i){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(H0(o),o===a){yn=null;break t}if(u!==null){u.return=d,yn=u;break t}yn=d}}}var yy={getCacheForType:function(e){var i=Dn(un),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return Dn(un).controller.signal}},Sy=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,be=null,Te=0,He=0,ii=null,za=!1,cr=!1,Gf=!1,ua=0,sn=0,Ia=0,ys=0,Vf=0,ai=0,ur=0,Oo=null,Zn=null,kf=!1,ac=0,J0=0,sc=1/0,rc=null,Fa=null,vn=0,Ba=null,fr=null,fa=0,Xf=0,Wf=null,K0=null,Po=0,qf=null;function si(){return(ze&2)!==0&&Te!==0?Te&-Te:P.T!==null?Kf():eo()}function $0(){if(ai===0)if((Te&536870912)===0||Ce){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Qn(e,i,a){(e===Ye&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(hr(e,0),Ha(e,Te,ai,!1)),On(e,a),((ze&2)===0||e!==Ye)&&(e===Ye&&((ze&2)===0&&(ys|=a),sn===4&&Ha(e,Te,ai,!1)),Fi(e))}function tg(e,i,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Pt(e,i),u=o?Ey(e,i):jf(e,i,!0),d=o;do{if(u===0){cr&&!o&&Ha(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!My(a)){u=jf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var C=e;u=Oo;var k=C.current.memoizedState.isDehydrated;if(k&&(hr(C,y).flags|=256),y=jf(C,y,!1),y!==2){if(Gf&&!k){C.errorRecoveryDisabledLanes|=d,ys|=d,u=4;break t}d=Zn,Zn=u,d!==null&&(Zn===null?Zn=d:Zn.push.apply(Zn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){hr(e,0),Ha(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ha(o,i,ai,!za);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=ac+300-b(),10<u)){if(Ha(o,i,ai,!za),bt(o,0,!0)!==0)break t;fa=i,o.timeoutHandle=Ug(eg.bind(null,o,a,Zn,rc,kf,i,ai,ys,ur,za,d,"Throttled",-0,0),u);break t}eg(o,a,Zn,rc,kf,i,ai,ys,ur,za,d,null,-0,0)}}break}while(!0);Fi(e)}function eg(e,i,a,o,u,d,y,C,k,st,mt,yt,ot,ut){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},Y0(i,d,yt);var Kt=(d&62914560)===d?ac-b():(d&4194048)===d?J0-b():0;if(Kt=rS(yt,Kt),Kt!==null){fa=d,e.cancelPendingCommit=Kt(cg.bind(null,e,i,d,a,o,u,y,C,k,mt,yt,null,ot,ut)),Ha(e,d,y,!st);return}}cg(e,i,d,a,o,u,y,C,k)}function My(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ha(e,i,a,o){i&=~Vf,i&=~ys,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-Ft(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&_l(e,a,i)}function oc(){return(ze&6)===0?(zo(0),!1):!0}function Yf(){if(be!==null){if(He===0)var e=be.return;else e=be,ta=fs=null,cf(e),nr=null,_o=0,e=be;for(;e!==null;)N0(e.alternate,e),e=e.return;be=null}}function hr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,Yf(),Ye=e,be=a=Ki(e.current,null),Te=i,He=0,ii=null,za=!1,cr=Pt(e,i),Gf=!1,ur=ai=Vf=ys=Ia=sn=0,Zn=Oo=null,kf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Ft(o),d=1<<u;i|=e[u],o&=~d}return ua=i,Rl(),a}function ng(e,i){ge=null,P.H=Ao,i===er||i===zl?(i=_m(),He=3):i===Qu?(i=_m(),He=4):He=i===Tf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ii=i,be===null&&(sn=1,Ql(e,di(i,e.current)))}function ig(){var e=ei.current;return e===null?!0:(Te&4194048)===Te?vi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===vi:!1}function ag(){var e=P.H;return P.H=Ao,e===null?Ao:e}function sg(){var e=P.A;return P.A=yy,e}function lc(){sn=4,za||(Te&4194048)!==Te&&ei.current!==null||(cr=!0),(Ia&134217727)===0&&(ys&134217727)===0||Ye===null||Ha(Ye,Te,ai,!1)}function jf(e,i,a){var o=ze;ze|=2;var u=ag(),d=sg();(Ye!==e||Te!==i)&&(rc=null,hr(e,i)),i=!1;var y=sn;t:do try{if(He!==0&&be!==null){var C=be,k=ii;switch(He){case 8:Yf(),y=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(i=!0);var st=He;if(He=0,ii=null,dr(e,C,k,st),a&&cr){y=0;break t}break;default:st=He,He=0,ii=null,dr(e,C,k,st)}}by(),y=sn;break}catch(mt){ng(e,mt)}while(!0);return i&&e.shellSuspendCounter++,ta=fs=null,ze=o,P.H=u,P.A=d,be===null&&(Ye=null,Te=0,Rl()),y}function by(){for(;be!==null;)rg(be)}function Ey(e,i){var a=ze;ze|=2;var o=ag(),u=sg();Ye!==e||Te!==i?(rc=null,sc=b()+500,hr(e,i)):cr=Pt(e,i);t:do try{if(He!==0&&be!==null){i=be;var d=ii;e:switch(He){case 1:He=0,ii=null,dr(e,i,d,1);break;case 2:case 9:if(gm(d)){He=0,ii=null,og(i);break}i=function(){He!==2&&He!==9||Ye!==e||(He=7),Fi(e)},d.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:gm(d)?(He=0,ii=null,og(i)):(He=0,ii=null,dr(e,i,d,7));break;case 5:var y=null;switch(be.tag){case 26:y=be.memoizedState;case 5:case 27:var C=be;if(y?qg(y):C.stateNode.complete){He=0,ii=null;var k=C.sibling;if(k!==null)be=k;else{var st=C.return;st!==null?(be=st,cc(st)):be=null}break e}}He=0,ii=null,dr(e,i,d,5);break;case 6:He=0,ii=null,dr(e,i,d,6);break;case 8:Yf(),sn=6;break t;default:throw Error(s(462))}}Ty();break}catch(mt){ng(e,mt)}while(!0);return ta=fs=null,P.H=o,P.A=u,ze=a,be!==null?0:(Ye=null,Te=0,Rl(),sn)}function Ty(){for(;be!==null&&!Ut();)rg(be)}function rg(e){var i=D0(e.alternate,e,ua);e.memoizedProps=e.pendingProps,i===null?cc(e):be=i}function og(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=E0(a,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=E0(a,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:cf(i);default:N0(a,i),i=be=sm(i,ua),i=D0(a,i,ua)}e.memoizedProps=e.pendingProps,i===null?cc(e):be=i}function dr(e,i,a,o){ta=fs=null,cf(i),nr=null,_o=0;var u=i.return;try{if(dy(e,u,i,a,Te)){sn=1,Ql(e,di(a,e.current)),be=null;return}}catch(d){if(u!==null)throw be=u,d;sn=1,Ql(e,di(a,e.current)),be=null;return}i.flags&32768?(Ce||o===1?e=!0:cr||(Te&536870912)!==0?e=!1:(za=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),lg(i,e)):cc(i)}function cc(e){var i=e;do{if((i.flags&32768)!==0){lg(i,za);return}e=i.return;var a=gy(i.alternate,i,ua);if(a!==null){be=a;return}if(i=i.sibling,i!==null){be=i;return}be=i=e}while(i!==null);sn===0&&(sn=5)}function lg(e,i){do{var a=vy(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);sn=6,be=null}function cg(e,i,a,o,u,d,y,C,k){e.cancelPendingCommit=null;do uc();while(vn!==0);if((ze&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Pu,Mi(e,a,d,y,C,k),e===Ye&&(be=Ye=null,Te=0),fr=i,Ba=e,fa=a,Xf=d,Wf=u,K0=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wy(ft,function(){return pg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=H.p,H.p=2,y=ze,ze|=4;try{_y(e,i,a)}finally{ze=y,H.p=u,P.T=o}}vn=1,ug(),fg(),hg()}}function ug(){if(vn===1){vn=0;var e=Ba,i=fr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=ze;ze|=4;try{X0(i,e);var d=rh,y=Qp(e.containerInfo),C=d.focusedElem,k=d.selectionRange;if(y!==C&&C&&C.ownerDocument&&Zp(C.ownerDocument.documentElement,C)){if(k!==null&&Du(C)){var st=k.start,mt=k.end;if(mt===void 0&&(mt=st),"selectionStart"in C)C.selectionStart=st,C.selectionEnd=Math.min(mt,C.value.length);else{var yt=C.ownerDocument||document,ot=yt&&yt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),Kt=C.textContent.length,ce=Math.min(k.start,Kt),We=k.end===void 0?ce:Math.min(k.end,Kt);!ut.extend&&ce>We&&(y=We,We=ce,ce=y);var J=jp(C,ce),X=jp(C,We);if(J&&X&&(ut.rangeCount!==1||ut.anchorNode!==J.node||ut.anchorOffset!==J.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var at=yt.createRange();at.setStart(J.node,J.offset),ut.removeAllRanges(),ce>We?(ut.addRange(at),ut.extend(X.node,X.offset)):(at.setEnd(X.node,X.offset),ut.addRange(at))}}}}for(yt=[],ut=C;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<yt.length;C++){var vt=yt[C];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Mc=!!sh,rh=sh=null}finally{ze=u,H.p=o,P.T=a}}e.current=i,vn=2}}function fg(){if(vn===2){vn=0;var e=Ba,i=fr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=ze;ze|=4;try{B0(e,i.alternate,i)}finally{ze=u,H.p=o,P.T=a}}vn=3}}function hg(){if(vn===4||vn===3){vn=0,N();var e=Ba,i=fr,a=fa,o=K0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?vn=5:(vn=0,fr=Ba=null,dg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Fa=null),Fs(a),i=i.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=P.T,u=H.p,H.p=2,P.T=null;try{for(var d=e.onRecoverableError,y=0;y<o.length;y++){var C=o[y];d(C.value,{componentStack:C.stack})}}finally{P.T=i,H.p=u}}(fa&3)!==0&&uc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qf?Po++:(Po=0,qf=e):Po=0,zo(0)}}function dg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,go(i)))}function uc(){return ug(),fg(),hg(),pg()}function pg(){if(vn!==5)return!1;var e=Ba,i=Xf;Xf=0;var a=Fs(fa),o=P.T,u=H.p;try{H.p=32>a?32:a,P.T=null,a=Wf,Wf=null;var d=Ba,y=fa;if(vn=0,fr=Ba=null,fa=0,(ze&6)!==0)throw Error(s(331));var C=ze;if(ze|=4,Z0(d.current),q0(d,d.current,y,a),ze=C,zo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{H.p=u,P.T=o,dg(e,i)}}function mg(e,i,a){i=di(a,i),i=Ef(e.stateNode,i,2),e=Na(e,i,2),e!==null&&(On(e,2),Fi(e))}function Ge(e,i,a){if(e.tag===3)mg(e,e,a);else for(;i!==null;){if(i.tag===3){mg(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fa===null||!Fa.has(o))){e=di(a,e),a=g0(2),o=Na(i,a,2),o!==null&&(v0(a,o,i,e),On(o,2),Fi(o));break}}i=i.return}}function Zf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Sy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(Gf=!0,u.add(a),e=Ay.bind(null,e,i,a),i.then(e,e))}function Ay(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Te&a)===a&&(sn===4||sn===3&&(Te&62914560)===Te&&300>b()-ac?(ze&2)===0&&hr(e,0):Vf|=a,ur===Te&&(ur=0)),Fi(e)}function gg(e,i){i===0&&(i=Fe()),e=ls(e,i),e!==null&&(On(e,i),Fi(e))}function Cy(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),gg(e,a)}function Ry(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),gg(e,a)}function wy(e,i){return Gt(e,i)}var fc=null,pr=null,Qf=!1,hc=!1,Jf=!1,Ga=0;function Fi(e){e!==pr&&e.next===null&&(pr===null?fc=pr=e:pr=pr.next=e),hc=!0,Qf||(Qf=!0,Uy())}function zo(e,i){if(!Jf&&hc){Jf=!0;do for(var a=!1,o=fc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-Ft(42|e)+1)-1,d&=u&~(y&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,yg(o,d))}else d=Te,d=bt(o,o===Ye?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Pt(o,d)||(a=!0,yg(o,d));o=o.next}while(a);Jf=!1}}function Dy(){vg()}function vg(){hc=Qf=!1;var e=0;Ga!==0&&Gy()&&(e=Ga);for(var i=b(),a=null,o=fc;o!==null;){var u=o.next,d=_g(o,i);d===0?(o.next=null,a===null?fc=u:a.next=u,u===null&&(pr=a)):(a=o,(e!==0||(d&3)!==0)&&(hc=!0)),o=u}vn!==0&&vn!==5||zo(e),Ga!==0&&(Ga=0)}function _g(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-Ft(d),C=1<<y,k=u[y];k===-1?((C&a)===0||(C&o)!==0)&&(u[y]=fe(C,i)):k<=i&&(e.expiredLanes|=C),d&=~C}if(i=Ye,a=Te,a=bt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pt(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&ie(o),Fs(a)){case 2:case 8:a=xt;break;case 32:a=ft;break;case 268435456:a=Ot;break;default:a=ft}return o=xg.bind(null,e),a=Gt(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function xg(e,i){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(uc()&&e.callbackNode!==a)return null;var o=Te;return o=bt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(tg(e,o,i),_g(e,b()),e.callbackNode!=null&&e.callbackNode===a?xg.bind(null,e):null)}function yg(e,i){if(uc())return null;tg(e,i,!0)}function Uy(){ky(function(){(ze&6)!==0?Gt(ct,Dy):vg()})}function Kf(){if(Ga===0){var e=$s;e===0&&(e=Ht,Ht<<=1,(Ht&261888)===0&&(Ht=256)),Ga=e}return Ga}function Sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yl(""+e)}function Mg(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function Ny(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var d=Sg((u[bn]||null).action),y=o.submitter;y&&(i=(i=y[bn]||null)?Sg(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var C=new El("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ga!==0){var k=y?Mg(u,y):new FormData(u);_f(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(C.preventDefault(),k=y?Mg(u,y):new FormData(u),_f(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var $f=0;$f<Ou.length;$f++){var th=Ou[$f],Ly=th.toLowerCase(),Oy=th[0].toUpperCase()+th.slice(1);Ti(Ly,"on"+Oy)}Ti($p,"onAnimationEnd"),Ti(tm,"onAnimationIteration"),Ti(em,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Qx,"onTransitionRun"),Ti(Jx,"onTransitionStart"),Ti(Kx,"onTransitionCancel"),Ti(nm,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function bg(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var y=o.length-1;0<=y;y--){var C=o[y],k=C.instance,st=C.currentTarget;if(C=C.listener,k!==d&&u.isPropagationStopped())break t;d=C,u.currentTarget=st;try{d(u)}catch(mt){Cl(mt)}u.currentTarget=null,d=k}else for(y=0;y<o.length;y++){if(C=o[y],k=C.instance,st=C.currentTarget,C=C.listener,k!==d&&u.isPropagationStopped())break t;d=C,u.currentTarget=st;try{d(u)}catch(mt){Cl(mt)}u.currentTarget=null,d=k}}}}function Ee(e,i){var a=i[Bs];a===void 0&&(a=i[Bs]=new Set);var o=e+"__bubble";a.has(o)||(Eg(i,e,2,!1),a.add(o))}function eh(e,i,a){var o=0;i&&(o|=4),Eg(a,e,o,i)}var dc="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[dc]){e[dc]=!0,Q.forEach(function(a){a!=="selectionchange"&&(Py.has(a)||eh(a,!1,e),eh(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[dc]||(i[dc]=!0,eh("selectionchange",!1,i))}}function Eg(e,i,a,o){switch($g(i)){case 2:var u=cS;break;case 8:u=uS;break;default:u=vh}a=u.bind(null,i,a,e),u=void 0,!Su||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function ih(e,i,a,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=Ma(C),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){o=d=y;continue t}C=C.parentNode}}o=o.return}wp(function(){var st=d,mt=xu(a),yt=[];t:{var ot=im.get(e);if(ot!==void 0){var ut=El,Kt=e;switch(e){case"keypress":if(Ml(a)===0)break t;case"keydown":case"keyup":ut=Rx;break;case"focusin":Kt="focus",ut=Tu;break;case"focusout":Kt="blur",ut=Tu;break;case"beforeblur":case"afterblur":ut=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Ux;break;case $p:case tm:case em:ut=xx;break;case nm:ut=Lx;break;case"scroll":case"scrollend":ut=px;break;case"wheel":ut=Px;break;case"copy":case"cut":case"paste":ut=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Op;break;case"toggle":case"beforetoggle":ut=Ix}var ce=(i&4)!==0,We=!ce&&(e==="scroll"||e==="scrollend"),J=ce?ot!==null?ot+"Capture":null:ot;ce=[];for(var X=st,at;X!==null;){var vt=X;if(at=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||at===null||J===null||(vt=ao(X,J),vt!=null&&ce.push(Fo(X,vt,at))),We)break;X=X.return}0<ce.length&&(ot=new ut(ot,Kt,null,a,mt),yt.push({event:ot,listeners:ce}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&a!==_u&&(Kt=a.relatedTarget||a.fromElement)&&(Ma(Kt)||Kt[bi]))break t;if((ut||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(Kt=a.relatedTarget||a.toElement,ut=st,Kt=Kt?Ma(Kt):null,Kt!==null&&(We=c(Kt),ce=Kt.tag,Kt!==We||ce!==5&&ce!==27&&ce!==6)&&(Kt=null)):(ut=null,Kt=st),ut!==Kt)){if(ce=Np,vt="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Op,vt="onPointerLeave",J="onPointerEnter",X="pointer"),We=ut==null?ot:as(ut),at=Kt==null?ot:as(Kt),ot=new ce(vt,X+"leave",ut,a,mt),ot.target=We,ot.relatedTarget=at,vt=null,Ma(mt)===st&&(ce=new ce(J,X+"enter",Kt,a,mt),ce.target=at,ce.relatedTarget=We,vt=ce),We=vt,ut&&Kt)e:{for(ce=zy,J=ut,X=Kt,at=0,vt=J;vt;vt=ce(vt))at++;vt=0;for(var re=X;re;re=ce(re))vt++;for(;0<at-vt;)J=ce(J),at--;for(;0<vt-at;)X=ce(X),vt--;for(;at--;){if(J===X||X!==null&&J===X.alternate){ce=J;break e}J=ce(J),X=ce(X)}ce=null}else ce=null;ut!==null&&Tg(yt,ot,ut,ce,!1),Kt!==null&&We!==null&&Tg(yt,We,Kt,ce,!0)}}t:{if(ot=st?as(st):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Ne=Vp;else if(Hp(ot))if(kp)Ne=Yx;else{Ne=Wx;var ee=Xx}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?st&&Ei(st.elementType)&&(Ne=Vp):Ne=qx;if(Ne&&(Ne=Ne(e,st))){Gp(yt,Ne,a,mt);break t}ee&&ee(e,ot,st),e==="focusout"&&st&&ot.type==="number"&&st.memoizedProps.value!=null&&Tn(ot,"number",ot.value)}switch(ee=st?as(st):window,e){case"focusin":(Hp(ee)||ee.contentEditable==="true")&&(Ws=ee,Uu=st,ho=null);break;case"focusout":ho=Uu=Ws=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Jp(yt,a,mt);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":Jp(yt,a,mt)}var xe;if(Cu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Xs?Fp(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Pp&&a.locale!=="ko"&&(Xs||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Xs&&(xe=Dp()):(Ta=mt,Mu="value"in Ta?Ta.value:Ta.textContent,Xs=!0)),ee=pc(st,Ae),0<ee.length&&(Ae=new Lp(Ae,e,null,a,mt),yt.push({event:Ae,listeners:ee}),xe?Ae.data=xe:(xe=Bp(a),xe!==null&&(Ae.data=xe)))),(xe=Bx?Hx(e,a):Gx(e,a))&&(Ae=pc(st,"onBeforeInput"),0<Ae.length&&(ee=new Lp("onBeforeInput","beforeinput",null,a,mt),yt.push({event:ee,listeners:Ae}),ee.data=xe)),Ny(yt,e,st,a,mt)}bg(yt,i)})}function Fo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function pc(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ao(e,a),u!=null&&o.unshift(Fo(e,u,d)),u=ao(e,i),u!=null&&o.push(Fo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function zy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tg(e,i,a,o,u){for(var d=i._reactName,y=[];a!==null&&a!==o;){var C=a,k=C.alternate,st=C.stateNode;if(C=C.tag,k!==null&&k===o)break;C!==5&&C!==26&&C!==27||st===null||(k=st,u?(st=ao(a,d),st!=null&&y.unshift(Fo(a,st,k))):u||(st=ao(a,d),st!=null&&y.push(Fo(a,st,k)))),a=a.return}y.length!==0&&e.push({event:i,listeners:y})}var Iy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function Ag(e){return(typeof e=="string"?e:""+e).replace(Iy,`
`).replace(Fy,"")}function Cg(e,i){return i=Ag(i),Ag(e)===i}function Xe(e,i,a,o,u,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||gn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&gn(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,a,o);break;case"style":Gs(e,o,d);break;case"data":if(i!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=yl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xe(e,i,"name",u.name,u,null),Xe(e,i,"formEncType",u.formEncType,u,null),Xe(e,i,"formMethod",u.formMethod,u,null),Xe(e,i,"formTarget",u.formTarget,u,null)):(Xe(e,i,"encType",u.encType,u,null),Xe(e,i,"method",u.method,u,null),Xe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=yl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=yl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),$t(e,"popover",o);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$t(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hx.get(a)||a,$t(e,a,o))}}function ah(e,i,a,o,u,d){switch(a){case"style":Gs(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?gn(e,o):(typeof o=="number"||typeof o=="bigint")&&gn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),d=e[bn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):$t(e,a,o)}}}function Nn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(e,i,d,y,a,null)}}u&&Xe(e,i,"srcSet",a.srcSet,a,null),o&&Xe(e,i,"src",a.src,a,null);return;case"input":Ee("invalid",e);var C=d=y=u=null,k=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":y=mt;break;case"checked":k=mt;break;case"defaultChecked":st=mt;break;case"value":d=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,i));break;default:Xe(e,i,o,mt,a,null)}}Zi(e,d,C,k,st,y,u,!1);return;case"select":Ee("invalid",e),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:Xe(e,i,u,C,a,null)}i=d,a=y,e.multiple=!!o,i!=null?fi(e,!!o,i,!1):a!=null&&fi(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Xe(e,i,y,C,a,null)}An(e,o,u,d);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,i,k,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)Ee(Io[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(e,i,st,o,a,null)}return;default:if(Ei(i)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&ah(e,i,mt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Xe(e,i,C,o,a,null))}function By(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,C=null,k=null,st=null,mt=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":k=yt;default:o.hasOwnProperty(ut)||Xe(e,i,ut,null,o,yt)}}for(var ot in o){var ut=o[ot];if(yt=a[ot],o.hasOwnProperty(ot)&&(ut!=null||yt!=null))switch(ot){case"type":d=ut;break;case"name":u=ut;break;case"checked":st=ut;break;case"defaultChecked":mt=ut;break;case"value":y=ut;break;case"defaultValue":C=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,i));break;default:ut!==yt&&Xe(e,i,ot,ut,o,yt)}}En(e,y,C,k,st,mt,d,u);return;case"select":ut=y=C=ot=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":ut=k;default:o.hasOwnProperty(d)||Xe(e,i,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":ot=d;break;case"defaultValue":C=d;break;case"multiple":y=d;default:d!==k&&Xe(e,i,u,d,o,k)}i=C,a=y,o=ut,ot!=null?fi(e,!!a,ot,!1):!!o!=!!a&&(i!=null?fi(e,!!a,i,!0):fi(e,!!a,a?[]:"",!1));return;case"textarea":ut=ot=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xe(e,i,C,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ot=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Xe(e,i,y,u,o,d)}Be(e,ot,ut);return;case"option":for(var Kt in a)if(ot=a[Kt],a.hasOwnProperty(Kt)&&ot!=null&&!o.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:Xe(e,i,Kt,null,o,ot)}for(k in o)if(ot=o[k],ut=a[k],o.hasOwnProperty(k)&&ot!==ut&&(ot!=null||ut!=null))switch(k){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Xe(e,i,k,ot,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)ot=a[ce],a.hasOwnProperty(ce)&&ot!=null&&!o.hasOwnProperty(ce)&&Xe(e,i,ce,null,o,ot);for(st in o)if(ot=o[st],ut=a[st],o.hasOwnProperty(st)&&ot!==ut&&(ot!=null||ut!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,i));break;default:Xe(e,i,st,ot,o,ut)}return;default:if(Ei(i)){for(var We in a)ot=a[We],a.hasOwnProperty(We)&&ot!==void 0&&!o.hasOwnProperty(We)&&ah(e,i,We,void 0,o,ot);for(mt in o)ot=o[mt],ut=a[mt],!o.hasOwnProperty(mt)||ot===ut||ot===void 0&&ut===void 0||ah(e,i,mt,ot,o,ut);return}}for(var J in a)ot=a[J],a.hasOwnProperty(J)&&ot!=null&&!o.hasOwnProperty(J)&&Xe(e,i,J,null,o,ot);for(yt in o)ot=o[yt],ut=a[yt],!o.hasOwnProperty(yt)||ot===ut||ot==null&&ut==null||Xe(e,i,yt,ot,o,ut)}function Rg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,C=u.duration;if(d&&C&&Rg(y)){for(y=0,C=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],st=k.startTime;if(st>C)break;var mt=k.transferSize,yt=k.initiatorType;mt&&Rg(yt)&&(k=k.responseEnd,y+=mt*(k<C?1:(C-st)/(k-st)))}if(--o,i+=8*(d+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sh=null,rh=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function oh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function Gy(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(e){return Ng.resolve(null).then(e).catch(Xy)}:Ug;function Xy(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Lg(e,i){var a=i,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),_r(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var d=a.firstChild;d;){var y=d.nextSibling,C=d.nodeName;d[is]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Bo(e.ownerDocument.body);a=u}while(a);_r(i)}function Og(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ch(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Wy(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[is])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function qy(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Pg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=_i(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yy(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var hh=null;function zg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return _i(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function Ig(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function Fg(e,i,a){switch(i=mc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);io(e)}var xi=new Map,Bg=new Set;function gc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=H.d;H.d={f:jy,r:Zy,D:Qy,C:Jy,L:Ky,m:$y,X:eS,S:tS,M:nS};function jy(){var e=ha.f(),i=oc();return e||i}function Zy(e){var i=ba(e);i!==null&&i.tag===5&&i.type==="form"?n0(i):ha.r(e)}var mr=typeof document>"u"?null:document;function Hg(e,i,a){var o=mr;if(o&&typeof i=="string"&&i){var u=de(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Bg.has(u)||(Bg.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Nn(i,"link",e),R(i),o.head.appendChild(i)))}}function Qy(e){ha.D(e),Hg("dns-prefetch",e,null)}function Jy(e,i){ha.C(e,i),Hg("preconnect",e,i)}function Ky(e,i,a){ha.L(e,i,a);var o=mr;if(o&&e&&i){var u='link[rel="preload"][as="'+de(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+de(a.imageSizes)+'"]')):u+='[href="'+de(e)+'"]';var d=u;switch(i){case"style":d=gr(e);break;case"script":d=vr(e)}xi.has(d)||(e=v({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),xi.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Ho(d))||i==="script"&&o.querySelector(Go(d))||(i=o.createElement("link"),Nn(i,"link",e),R(i),o.head.appendChild(i)))}}function $y(e,i){ha.m(e,i);var a=mr;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vr(e)}if(!xi.has(d)&&(e=v({rel:"modulepreload",href:e},i),xi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(d)))return}o=a.createElement("link"),Nn(o,"link",e),R(o),a.head.appendChild(o)}}}function tS(e,i,a){ha.S(e,i,a);var o=mr;if(o&&e){var u=Ea(o).hoistableStyles,d=gr(e);i=i||"default";var y=u.get(d);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(Ho(d)))C.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},a),(a=xi.get(d))&&dh(e,a);var k=y=o.createElement("link");R(k),Nn(k,"link",e),k._p=new Promise(function(st,mt){k.onload=st,k.onerror=mt}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,vc(y,i,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(d,y)}}}function eS(e,i){ha.X(e,i);var a=mr;if(a&&e){var o=Ea(a).hoistableScripts,u=vr(e),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(e=v({src:e,async:!0},i),(i=xi.get(u))&&ph(e,i),d=a.createElement("script"),R(d),Nn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function nS(e,i){ha.M(e,i);var a=mr;if(a&&e){var o=Ea(a).hoistableScripts,u=vr(e),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(e=v({src:e,async:!0,type:"module"},i),(i=xi.get(u))&&ph(e,i),d=a.createElement("script"),R(d),Nn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Gg(e,i,a,o){var u=(u=nt.current)?gc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=gr(a.href),a=Ea(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gr(a.href);var d=Ea(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(Ho(e)))&&!d._p&&(y.instance=d,y.state.loading=5),xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(e,a),d||iS(u,e,a,y.state))),i&&o===null)throw Error(s(528,""));return y}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=vr(a),a=Ea(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function gr(e){return'href="'+de(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function Vg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function iS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Nn(i,"link",a),R(i),e.head.appendChild(i))}function vr(e){return'[src="'+de(e)+'"]'}function Go(e){return"script[async]"+e}function kg(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(o)return i.instance=o,R(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Nn(o,"style",u),vc(o,a.precedence,e),i.instance=o;case"stylesheet":u=gr(a.href);var d=e.querySelector(Ho(u));if(d)return i.state.loading|=4,i.instance=d,R(d),d;o=Vg(a),(u=xi.get(u))&&dh(o,u),d=(e.ownerDocument||e).createElement("link"),R(d);var y=d;return y._p=new Promise(function(C,k){y.onload=C,y.onerror=k}),Nn(d,"link",o),i.state.loading|=4,vc(d,a.precedence,e),i.instance=d;case"script":return d=vr(a.src),(u=e.querySelector(Go(d)))?(i.instance=u,R(u),u):(o=a,(u=xi.get(d))&&(o=v({},a),ph(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),Nn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,vc(o,a.precedence,e));return i.instance}function vc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===i)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function dh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ph(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var _c=null;function Xg(e,i,a){if(_c===null){var o=new Map,u=_c=new Map;u.set(a,o)}else u=_c,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[is]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=e+y;var C=o.get(y);C?C.push(d):o.set(y,[d])}}return o}function Wg(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function aS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function qg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sS(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=gr(o.href),d=i.querySelector(Ho(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=xc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,R(d);return}d=i.ownerDocument||i,o=Vg(o),(u=xi.get(u))&&dh(o,u),d=d.createElement("link"),R(d);var y=d;y._p=new Promise(function(C,k){y.onload=C,y.onerror=k}),Nn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=xc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var mh=0;function rS(e,i){return e.stylesheets&&e.count===0&&Sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&mh===0&&(mh=62500*Hy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>mh?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function Sc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,i.forEach(oS,e),yc=null,xc.call(e))}function oS(e,i){if(!(i.state.loading&4)){var a=yc.get(e);if(a)var o=a.get(null);else{a=new Map,yc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=i.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=xc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Vo={$$typeof:U,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function lS(e,i,a,o,u,d,y,C,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Yg(e,i,a,o,u,d,y,C,k,st,mt,yt){return e=new lS(e,i,a,y,k,st,mt,yt,C),i=1,d===!0&&(i|=24),d=ti(3,null,null,i),e.current=d,d.stateNode=e,i=Yu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},Ju(d),e}function jg(e){return e?(e=js,e):js}function Zg(e,i,a,o,u,d){u=jg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Na(e,o,i),a!==null&&(Qn(a,e,i),yo(a,e,i))}function Qg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function gh(e,i){Qg(e,i),(e=e.alternate)&&Qg(e,i)}function Jg(e){if(e.tag===13||e.tag===31){var i=ls(e,67108864);i!==null&&Qn(i,e,67108864),gh(e,67108864)}}function Kg(e){if(e.tag===13||e.tag===31){var i=si();i=to(i);var a=ls(e,i);a!==null&&Qn(a,e,i),gh(e,i)}}var Mc=!0;function cS(e,i,a,o){var u=P.T;P.T=null;var d=H.p;try{H.p=2,vh(e,i,a,o)}finally{H.p=d,P.T=u}}function uS(e,i,a,o){var u=P.T;P.T=null;var d=H.p;try{H.p=8,vh(e,i,a,o)}finally{H.p=d,P.T=u}}function vh(e,i,a,o){if(Mc){var u=_h(o);if(u===null)ih(e,i,o,bc,a),tv(e,o);else if(hS(u,e,i,a,o))o.stopPropagation();else if(tv(e,o),i&4&&-1<fS.indexOf(e)){for(;u!==null;){var d=ba(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=At(d.pendingLanes);if(y!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var k=1<<31-Ft(y);C.entanglements[1]|=k,y&=~k}Fi(d),(ze&6)===0&&(sc=b()+500,zo(0))}}break;case 31:case 13:C=ls(d,2),C!==null&&Qn(C,d,2),oc(),gh(d,2)}if(d=_h(o),d===null&&ih(e,i,o,bc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ih(e,i,o,null,a)}}function _h(e){return e=xu(e),xh(e)}var bc=null;function xh(e){if(bc=null,e=Ma(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=h(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return bc=e,null}function $g(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ct:return 2;case xt:return 8;case ft:case Zt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var yh=!1,ka=null,Xa=null,Wa=null,ko=new Map,Xo=new Map,qa=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tv(e,i){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":ko.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(i.pointerId)}}function Wo(e,i,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=ba(i),i!==null&&Jg(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function hS(e,i,a,o,u){switch(i){case"focusin":return ka=Wo(ka,e,i,a,o,u),!0;case"dragenter":return Xa=Wo(Xa,e,i,a,o,u),!0;case"mouseover":return Wa=Wo(Wa,e,i,a,o,u),!0;case"pointerover":var d=u.pointerId;return ko.set(d,Wo(ko.get(d)||null,e,i,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Xo.set(d,Wo(Xo.get(d)||null,e,i,a,o,u)),!0}return!1}function ev(e){var i=Ma(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Oi(e.priority,function(){Kg(a)});return}}else if(i===31){if(i=h(a),i!==null){e.blockedOn=i,Oi(e.priority,function(){Kg(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ec(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=_h(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return i=ba(a),i!==null&&Jg(i),e.blockedOn=a,!1;i.shift()}return!0}function nv(e,i,a){Ec(e)&&a.delete(i)}function dS(){yh=!1,ka!==null&&Ec(ka)&&(ka=null),Xa!==null&&Ec(Xa)&&(Xa=null),Wa!==null&&Ec(Wa)&&(Wa=null),ko.forEach(nv),Xo.forEach(nv)}function Tc(e,i){e.blockedOn===i&&(e.blockedOn=null,yh||(yh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dS)))}var Ac=null;function iv(e){Ac!==e&&(Ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ac===e&&(Ac=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(xh(o||a)===null)continue;break}var d=ba(a);d!==null&&(e.splice(i,3),i-=3,_f(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _r(e){function i(k){return Tc(k,e)}ka!==null&&Tc(ka,e),Xa!==null&&Tc(Xa,e),Wa!==null&&Tc(Wa,e),ko.forEach(i),Xo.forEach(i);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)ev(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[bn]||null;if(typeof d=="function")y||iv(a);else if(y){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[bn]||null)C=y.formAction;else if(xh(u)!==null)continue}else C=y.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),iv(a)}}}function av(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Sh(e){this._internalRoot=e}Cc.prototype.render=Sh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=si();Zg(a,o,e,i,null,null)},Cc.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Zg(e.current,2,null,e,null,null),oc(),i[bi]=null}};function Cc(e){this._internalRoot=e}Cc.prototype.unstable_scheduleHydration=function(e){if(e){var i=eo();e={blockedOn:null,target:e,priority:i};for(var a=0;a<qa.length&&i!==0&&i<qa[a].priority;a++);qa.splice(a,0,e),a===0&&ev(e)}};var sv=t.version;if(sv!=="19.2.3")throw Error(s(527,sv,"19.2.3"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var pS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{dt=Rc.inject(pS),Tt=Rc}catch{}}return Yo.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",u=h0,d=d0,y=p0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Yg(e,1,!1,null,null,a,o,null,u,d,y,av),e[bi]=i.current,nh(e),new Sh(i)},Yo.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=h0,y=d0,C=p0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),i=Yg(e,1,!0,i,a??null,o,u,k,d,y,C,av),i.context=jg(null),a=i.current,o=si(),o=to(o),u=Ua(o),u.callback=null,Na(a,u,o),a=o,i.current.lanes=a,On(i,a),Fi(i),e[bi]=i.current,nh(e),new Cc(i)},Yo.version="19.2.3",Yo}var mv;function ES(){if(mv)return Eh.exports;mv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Eh.exports=bS(),Eh.exports}var TS=ES();const rp="182",AS=0,gv=1,CS=2,tu=1,RS=2,tl=3,ns=0,Xn=1,Gi=2,Xi=0,Br=1,ol=2,vv=3,_v=4,wS=5,ws=100,DS=101,US=102,NS=103,LS=104,OS=200,PS=201,zS=202,IS=203,od=204,ld=205,FS=206,BS=207,HS=208,GS=209,VS=210,kS=211,XS=212,WS=213,qS=214,cd=0,ud=1,fd=2,Vr=3,hd=4,dd=5,pd=6,md=7,b_=0,YS=1,jS=2,Wi=0,E_=1,T_=2,A_=3,op=4,C_=5,R_=6,w_=7,D_=300,Ls=301,kr=302,gd=303,vd=304,fu=306,_d=1e3,xa=1001,xd=1002,Ln=1003,ZS=1004,wc=1005,Fn=1006,Rh=1007,Us=1008,li=1009,U_=1010,N_=1011,ll=1012,lp=1013,qi=1014,Vi=1015,ci=1016,cp=1017,up=1018,cl=1020,L_=35902,O_=35899,P_=1021,z_=1022,Ni=1023,Sa=1026,Ns=1027,I_=1028,fp=1029,Xr=1030,hp=1031,dp=1033,eu=33776,nu=33777,iu=33778,au=33779,yd=35840,Sd=35841,Md=35842,bd=35843,Ed=36196,Td=37492,Ad=37496,Cd=37488,Rd=37489,wd=37490,Dd=37491,Ud=37808,Nd=37809,Ld=37810,Od=37811,Pd=37812,zd=37813,Id=37814,Fd=37815,Bd=37816,Hd=37817,Gd=37818,Vd=37819,kd=37820,Xd=37821,Wd=36492,qd=36494,Yd=36495,jd=36283,Zd=36284,Qd=36285,Jd=36286,QS=3200,pp=0,JS=1,ts="",Si="srgb",Wr="srgb-linear",ou="linear",Ve="srgb",xr=7680,xv=519,KS=512,$S=513,tM=514,mp=515,eM=516,nM=517,gp=518,iM=519,yv=35044,Sv="300 es",ki=2e3,lu=2001;function F_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function aM(){const r=cu("canvas");return r.style.display="block",r}const Mv={};function bv(...r){const t="THREE."+r.shift();console.log(t,...r)}function he(...r){const t="THREE."+r.shift();console.warn(t,...r)}function De(...r){const t="THREE."+r.shift();console.error(t,...r)}function ul(...r){const t=r.join(" ");t in Mv||(Mv[t]=!0,he(...r))}function sM(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class Qr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ev=1234567;const il=Math.PI/180,qr=180/Math.PI;function Ps(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Me(r,t,n){return Math.max(t,Math.min(n,r))}function vp(r,t){return(r%t+t)%t}function rM(r,t,n,s,l){return s+(r-t)*(l-s)/(n-t)}function oM(r,t,n){return r!==t?(n-r)/(t-r):0}function al(r,t,n){return(1-n)*r+n*t}function lM(r,t,n,s){return al(r,t,1-Math.exp(-n*s))}function cM(r,t=1){return t-Math.abs(vp(r,t*2)-t)}function uM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function fM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function hM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function dM(r,t){return r+Math.random()*(t-r)}function pM(r){return r*(.5-Math.random())}function mM(r){r!==void 0&&(Ev=r);let t=Ev+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gM(r){return r*il}function vM(r){return r*qr}function _M(r){return(r&r-1)===0&&r!==0}function xM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function SM(r,t,n,s,l){const c=Math.cos,f=Math.sin,h=c(n/2),m=f(n/2),p=c((t+s)/2),g=f((t+s)/2),v=c((t-s)/2),x=f((t-s)/2),S=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(h*g,m*v,m*x,h*p);break;case"YZY":r.set(m*x,h*g,m*v,h*p);break;case"ZXZ":r.set(m*v,m*x,h*g,h*p);break;case"XZX":r.set(h*g,m*E,m*S,h*p);break;case"YXY":r.set(m*S,h*g,m*E,h*p);break;case"ZYZ":r.set(m*E,m*S,h*g,h*p);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Lr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const da={DEG2RAD:il,RAD2DEG:qr,generateUUID:Ps,clamp:Me,euclideanModulo:vp,mapLinear:rM,inverseLerp:oM,lerp:al,damp:lM,pingpong:cM,smoothstep:uM,smootherstep:fM,randInt:hM,randFloat:dM,randFloatSpread:pM,seededRandom:mM,degToRad:gM,radToDeg:vM,isPowerOfTwo:_M,ceilPowerOfTwo:xM,floorPowerOfTwo:yM,setQuaternionFromProperEuler:SM,normalize:Vn,denormalize:Lr};class Lt{constructor(t=0,n=0){Lt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ml{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3],x=c[f+0],S=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(h>=1){t[n+0]=x,t[n+1]=S,t[n+2]=E,t[n+3]=T;return}if(v!==T||m!==x||p!==S||g!==E){let M=m*x+p*S+g*E+v*T;M<0&&(x=-x,S=-S,E=-E,T=-T,M=-M);let _=1-h;if(M<.9995){const O=Math.acos(M),U=Math.sin(O);_=Math.sin(_*O)/U,h=Math.sin(h*O)/U,m=m*_+x*h,p=p*_+S*h,g=g*_+E*h,v=v*_+T*h}else{m=m*_+x*h,p=p*_+S*h,g=g*_+E*h,v=v*_+T*h;const O=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=O,p*=O,g*=O,v*=O}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[f],x=c[f+1],S=c[f+2],E=c[f+3];return t[n]=h*E+g*v+m*S-p*x,t[n+1]=m*E+g*x+p*v-h*S,t[n+2]=p*E+g*S+h*x-m*v,t[n+3]=g*E-h*v-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),v=h(c/2),x=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"YXZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"ZXY":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"ZYX":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"YZX":this._x=x*g*v+p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v-x*S*E;break;case"XZY":this._x=x*g*v-p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v+x*S*E;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],v=n[10],x=s+h+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>h&&s>v){const S=2*Math.sqrt(1+s-h-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-s-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,n=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Tv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Tv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*n-c*l),v=2*(c*s-f*n);return this.x=n+m*p+f*v-h*g,this.y=s+m*g+h*p-c*v,this.z=l+m*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return wh.copy(this).projectOnVector(t),this.sub(wh)}reflect(t){return this.sub(wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new Z,Tv=new ml;class ye{constructor(t,n,s,l,c,f,h,m,p){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,m,p)}set(t,n,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],S=s[5],E=s[8],T=l[0],M=l[3],_=l[6],O=l[1],U=l[4],D=l[7],I=l[2],F=l[5],B=l[8];return c[0]=f*T+h*O+m*I,c[3]=f*M+h*U+m*F,c[6]=f*_+h*D+m*B,c[1]=p*T+g*O+v*I,c[4]=p*M+g*U+v*F,c[7]=p*_+g*D+v*B,c[2]=x*T+S*O+E*I,c[5]=x*M+S*U+E*F,c[8]=x*_+S*D+E*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*f-h*p,x=h*m-g*c,S=p*c-f*m,E=n*v+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(l*p-g*s)*T,t[2]=(h*s-l*f)*T,t[3]=x*T,t[4]=(g*n-l*m)*T,t[5]=(l*c-h*n)*T,t[6]=S*T,t[7]=(s*m-p*n)*T,t[8]=(f*n-s*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Dh.makeScale(t,n)),this}rotate(t){return this.premultiply(Dh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Dh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new ye,Av=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cv=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MM(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ul("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ul("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:t,whitePoint:s,transfer:ou,toXYZ:Av,fromXYZ:Cv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:Av,fromXYZ:Cv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Ue=MM();function ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yr;class bM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{yr===void 0&&(yr=cu("canvas")),yr.width=t.width,yr.height=t.height;const l=yr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=yr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=cu("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ya(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(ya(n[s]/255)*255):n[s]=ya(n[s]);return{data:n,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let EM=0;class _p{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Uh(l[f].image)):c.push(Uh(l[f]))}else c=Uh(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function Uh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let TM=0;const Nh=new Z;class Hn extends Qr{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,s=xa,l=xa,c=Fn,f=Us,h=Ni,m=li,p=Hn.DEFAULT_ANISOTROPY,g=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Ps(),this.name="",this.source=new _p(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){he(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){he(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _d:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _d:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=D_;Hn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,n=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],S=m[5],E=m[9],T=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,D=(S+1)/2,I=(_+1)/2,F=(g+x)/4,B=(v+T)/4,Y=(E+M)/4;return U>D&&U>I?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=F/s,c=B/s):D>I?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=Y/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=B/c,l=Y/c),this.set(s,l,c,n),this}let O=Math.sqrt((M-E)*(M-E)+(v-T)*(v-T)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(v-T)/O,this.z=(x-g)/O,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AM extends Qr{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new rn(0,0,t,n),this.scissorTest=!1,this.viewport=new rn(0,0,t,n);const l={width:t,height:n,depth:s.depth},c=new Hn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new _p(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends AM{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class B_ extends Hn{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class CM extends Hn{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Ri.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Ri.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Ri.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ri):Ri.fromBufferAttribute(c,f),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Dc.copy(s.boundingBox)),Dc.applyMatrix4(t.matrixWorld),this.union(Dc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Uc.subVectors(this.max,jo),Sr.subVectors(t.a,jo),Mr.subVectors(t.b,jo),br.subVectors(t.c,jo),ja.subVectors(Mr,Sr),Za.subVectors(br,Mr),Ss.subVectors(Sr,br);let n=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-Ss.z,Ss.y,ja.z,0,-ja.x,Za.z,0,-Za.x,Ss.z,0,-Ss.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-Ss.y,Ss.x,0];return!Lh(n,Sr,Mr,br,Uc)||(n=[1,0,0,0,1,0,0,0,1],!Lh(n,Sr,Mr,br,Uc))?!1:(Nc.crossVectors(ja,Za),n=[Nc.x,Nc.y,Nc.z],Lh(n,Sr,Mr,br,Uc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ri=new Z,Dc=new gl,Sr=new Z,Mr=new Z,br=new Z,ja=new Z,Za=new Z,Ss=new Z,jo=new Z,Uc=new Z,Nc=new Z,Ms=new Z;function Lh(r,t,n,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ms.fromArray(r,c);const h=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),m=t.dot(Ms),p=n.dot(Ms),g=s.dot(Ms);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const RM=new gl,Zo=new Z,Oh=new Z;class hu{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):RM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Oh)),this.expandByPoint(Zo.copy(t.center).sub(Oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new Z,Ph=new Z,Lc=new Z,Qa=new Z,zh=new Z,Oc=new Z,Ih=new Z;class H_{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ma.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,n),ma.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){Ph.copy(t).add(n).multiplyScalar(.5),Lc.copy(n).sub(t).normalize(),Qa.copy(this.origin).sub(Ph);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Lc),h=Qa.dot(this.direction),m=-Qa.dot(Lc),p=Qa.lengthSq(),g=Math.abs(1-f*f);let v,x,S,E;if(g>0)if(v=f*m-h,x=f*h-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const T=1/g;v*=T,x*=T,S=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=c,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(v=Math.max(0,-(f*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p);else x=f>0?-c:c,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ph).addScaledVector(Lc,x),S}intersectSphere(t,n){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,n,s,l,c){zh.subVectors(n,t),Oc.subVectors(s,t),Ih.crossVectors(zh,Oc);let f=this.direction.dot(Ih),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Qa.subVectors(this.origin,t);const m=h*this.direction.dot(Oc.crossVectors(Qa,Oc));if(m<0)return null;const p=h*this.direction.dot(zh.cross(Qa));if(p<0||m+p>f)return null;const g=-h*Qa.dot(Ih);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,n,s,l,c,f,h,m,p,g,v,x,S,E,T,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,m,p,g,v,x,S,E,T,M)}set(t,n,s,l,c,f,h,m,p,g,v,x,S,E,T,M){const _=this.elements;return _[0]=t,_[4]=n,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=E,_[11]=T,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,l=1/Er.setFromMatrixColumn(t,0).length(),c=1/Er.setFromMatrixColumn(t,1).length(),f=1/Er.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=f*g,S=f*v,E=h*g,T=h*v;n[0]=m*g,n[4]=-m*v,n[8]=p,n[1]=S+E*p,n[5]=x-T*p,n[9]=-h*m,n[2]=T-x*p,n[6]=E+S*p,n[10]=f*m}else if(t.order==="YXZ"){const x=m*g,S=m*v,E=p*g,T=p*v;n[0]=x+T*h,n[4]=E*h-S,n[8]=f*p,n[1]=f*v,n[5]=f*g,n[9]=-h,n[2]=S*h-E,n[6]=T+x*h,n[10]=f*m}else if(t.order==="ZXY"){const x=m*g,S=m*v,E=p*g,T=p*v;n[0]=x-T*h,n[4]=-f*v,n[8]=E+S*h,n[1]=S+E*h,n[5]=f*g,n[9]=T-x*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const x=f*g,S=f*v,E=h*g,T=h*v;n[0]=m*g,n[4]=E*p-S,n[8]=x*p+T,n[1]=m*v,n[5]=T*p+x,n[9]=S*p-E,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const x=f*m,S=f*p,E=h*m,T=h*p;n[0]=m*g,n[4]=T-x*v,n[8]=E*v+S,n[1]=v,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=S*v+E,n[10]=x-T*v}else if(t.order==="XZY"){const x=f*m,S=f*p,E=h*m,T=h*p;n[0]=m*g,n[4]=-v,n[8]=p*g,n[1]=x*v+T,n[5]=f*g,n[9]=S*v-E,n[2]=E*v-S,n[6]=h*g,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wM,t,DM)}lookAt(t,n,s){const l=this.elements;return ri.subVectors(t,n),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ja.crossVectors(s,ri),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ja.crossVectors(s,ri)),Ja.normalize(),Pc.crossVectors(ri,Ja),l[0]=Ja.x,l[4]=Pc.x,l[8]=ri.x,l[1]=Ja.y,l[5]=Pc.y,l[9]=ri.y,l[2]=Ja.z,l[6]=Pc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],S=s[13],E=s[2],T=s[6],M=s[10],_=s[14],O=s[3],U=s[7],D=s[11],I=s[15],F=l[0],B=l[4],Y=l[8],A=l[12],w=l[1],G=l[5],V=l[9],W=l[13],tt=l[2],et=l[6],P=l[10],H=l[14],it=l[3],St=l[7],Mt=l[11],L=l[15];return c[0]=f*F+h*w+m*tt+p*it,c[4]=f*B+h*G+m*et+p*St,c[8]=f*Y+h*V+m*P+p*Mt,c[12]=f*A+h*W+m*H+p*L,c[1]=g*F+v*w+x*tt+S*it,c[5]=g*B+v*G+x*et+S*St,c[9]=g*Y+v*V+x*P+S*Mt,c[13]=g*A+v*W+x*H+S*L,c[2]=E*F+T*w+M*tt+_*it,c[6]=E*B+T*G+M*et+_*St,c[10]=E*Y+T*V+M*P+_*Mt,c[14]=E*A+T*W+M*H+_*L,c[3]=O*F+U*w+D*tt+I*it,c[7]=O*B+U*G+D*et+I*St,c[11]=O*Y+U*V+D*P+I*Mt,c[15]=O*A+U*W+D*H+I*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],S=t[14],E=t[3],T=t[7],M=t[11],_=t[15],O=m*S-p*x,U=h*S-p*v,D=h*x-m*v,I=f*S-p*g,F=f*x-m*g,B=f*v-h*g;return n*(T*O-M*U+_*D)-s*(E*O-M*I+_*F)+l*(E*U-T*I+_*B)-c*(E*D-T*F+M*B)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],S=t[11],E=t[12],T=t[13],M=t[14],_=t[15],O=v*M*p-T*x*p+T*m*S-h*M*S-v*m*_+h*x*_,U=E*x*p-g*M*p-E*m*S+f*M*S+g*m*_-f*x*_,D=g*T*p-E*v*p+E*h*S-f*T*S-g*h*_+f*v*_,I=E*v*m-g*T*m-E*h*x+f*T*x+g*h*M-f*v*M,F=n*O+s*U+l*D+c*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return t[0]=O*B,t[1]=(T*x*c-v*M*c-T*l*S+s*M*S+v*l*_-s*x*_)*B,t[2]=(h*M*c-T*m*c+T*l*p-s*M*p-h*l*_+s*m*_)*B,t[3]=(v*m*c-h*x*c-v*l*p+s*x*p+h*l*S-s*m*S)*B,t[4]=U*B,t[5]=(g*M*c-E*x*c+E*l*S-n*M*S-g*l*_+n*x*_)*B,t[6]=(E*m*c-f*M*c-E*l*p+n*M*p+f*l*_-n*m*_)*B,t[7]=(f*x*c-g*m*c+g*l*p-n*x*p-f*l*S+n*m*S)*B,t[8]=D*B,t[9]=(E*v*c-g*T*c-E*s*S+n*T*S+g*s*_-n*v*_)*B,t[10]=(f*T*c-E*h*c+E*s*p-n*T*p-f*s*_+n*h*_)*B,t[11]=(g*h*c-f*v*c-g*s*p+n*v*p+f*s*S-n*h*S)*B,t[12]=I*B,t[13]=(g*T*l-E*v*l+E*s*x-n*T*x-g*s*M+n*v*M)*B,t[14]=(E*h*l-f*T*l-E*s*m+n*T*m+f*s*M-n*h*M)*B,t[15]=(f*v*l-g*h*l+g*s*m-n*v*m-f*s*x+n*h*x)*B,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,g=f+f,v=h+h,x=c*p,S=c*g,E=c*v,T=f*g,M=f*v,_=h*v,O=m*p,U=m*g,D=m*v,I=s.x,F=s.y,B=s.z;return l[0]=(1-(T+_))*I,l[1]=(S+D)*I,l[2]=(E-U)*I,l[3]=0,l[4]=(S-D)*F,l[5]=(1-(x+_))*F,l[6]=(M+O)*F,l[7]=0,l[8]=(E+U)*B,l[9]=(M-O)*B,l[10]=(1-(x+T))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=Er.set(l[0],l[1],l[2]).length();const f=Er.set(l[4],l[5],l[6]).length(),h=Er.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const p=1/c,g=1/f,v=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,n.setFromRotationMatrix(wi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,n,s,l,c,f,h=ki,m=!1){const p=this.elements,g=2*c/(n-t),v=2*c/(s-l),x=(n+t)/(n-t),S=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===ki)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===lu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,l,c,f,h=ki,m=!1){const p=this.elements,g=2/(n-t),v=2/(s-l),x=-(n+t)/(n-t),S=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===ki)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===lu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Er=new Z,wi=new tn,wM=new Z(0,0,0),DM=new Z(1,1,1),Ja=new Z,Pc=new Z,ri=new Z,Rv=new tn,wv=new ml;class Yi{constructor(t=0,n=0,s=0,l=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return Rv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rv,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return wv.setFromEuler(this),this.setFromQuaternion(wv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class G_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let UM=0;const Dv=new Z,Tr=new ml,ga=new tn,zc=new Z,Qo=new Z,NM=new Z,LM=new ml,Uv=new Z(1,0,0),Nv=new Z(0,1,0),Lv=new Z(0,0,1),Ov={type:"added"},OM={type:"removed"},Ar={type:"childadded",child:null},Fh={type:"childremoved",child:null};class mn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new Z,n=new Yi,s=new ml,l=new Z(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ye}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(Uv,t)}rotateY(t){return this.rotateOnAxis(Nv,t)}rotateZ(t){return this.rotateOnAxis(Lv,t)}translateOnAxis(t,n){return Dv.copy(t).applyQuaternion(this.quaternion),this.position.add(Dv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Uv,t)}translateY(t){return this.translateOnAxis(Nv,t)}translateZ(t){return this.translateOnAxis(Lv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?zc.copy(t):zc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Qo,zc,this.up):ga.lookAt(zc,Qo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Tr.setFromRotationMatrix(ga),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ov),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(OM),Fh.child=t,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ov),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,NM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,LM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),x=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}mn.DEFAULT_UP=new Z(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new Z,va=new Z,Bh=new Z,_a=new Z,Cr=new Z,Rr=new Z,Pv=new Z,Hh=new Z,Gh=new Z,Vh=new Z,kh=new rn,Xh=new rn,Wh=new rn;class Ui{constructor(t=new Z,n=new Z,s=new Z){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),Di.subVectors(t,n),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){Di.subVectors(l,n),va.subVectors(s,n),Bh.subVectors(t,n);const f=Di.dot(Di),h=Di.dot(va),m=Di.dot(Bh),p=va.dot(va),g=va.dot(Bh),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(p*m-h*g)*x,E=(f*g-h*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,n,s,l,c,f,h,m){return this.getBarycoord(t,n,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(h,_a.z),m)}static getInterpolatedAttribute(t,n,s,l,c,f){return kh.setScalar(0),Xh.setScalar(0),Wh.setScalar(0),kh.fromBufferAttribute(t,n),Xh.fromBufferAttribute(t,s),Wh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(kh,c.x),f.addScaledVector(Xh,c.y),f.addScaledVector(Wh,c.z),f}static isFrontFacing(t,n,s,l){return Di.subVectors(s,n),va.subVectors(t,n),Di.cross(va).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ui.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let f,h;Cr.subVectors(l,s),Rr.subVectors(c,s),Hh.subVectors(t,s);const m=Cr.dot(Hh),p=Rr.dot(Hh);if(m<=0&&p<=0)return n.copy(s);Gh.subVectors(t,l);const g=Cr.dot(Gh),v=Rr.dot(Gh);if(g>=0&&v<=g)return n.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(s).addScaledVector(Cr,f);Vh.subVectors(t,c);const S=Cr.dot(Vh),E=Rr.dot(Vh);if(E>=0&&S<=E)return n.copy(c);const T=S*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(s).addScaledVector(Rr,h);const M=g*E-S*v;if(M<=0&&v-g>=0&&S-E>=0)return Pv.subVectors(c,l),h=(v-g)/(v-g+(S-E)),n.copy(l).addScaledVector(Pv,h);const _=1/(M+T+x);return f=T*_,h=x*_,n.copy(s).addScaledVector(Cr,f).addScaledVector(Rr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const V_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function qh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class me{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=Ue.workingColorSpace){if(t=vp(t,1),n=Me(n,0,1),s=Me(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=qh(f,c,t+1/3),this.g=qh(f,c,t),this.b=qh(f,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,n=Si){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Si){const s=V_[t.toLowerCase()];return s!==void 0?this.setHex(s,n):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Ue.workingToColorSpace(In.copy(this),t),Math.round(Me(In.r*255,0,255))*65536+Math.round(Me(In.g*255,0,255))*256+Math.round(Me(In.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.workingToColorSpace(In.copy(this),n);const s=In.r,l=In.g,c=In.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Ue.workingColorSpace){return Ue.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Si){Ue.workingToColorSpace(In.copy(this),t);const n=In.r,s=In.g,l=In.b;return t!==Si?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+n,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(Ka),t.getHSL(Ic);const s=al(Ka.h,Ic.h,n),l=al(Ka.s,Ic.s,n),c=al(Ka.l,Ic.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new me;me.NAMES=V_;let PM=0;class zs extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Br,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){he(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){he(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==od&&(s.blendSrc=this.blendSrc),this.blendDst!==ld&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Gr extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=b_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new Z,Fc=new Lt;let zM=0;class Li{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=yv,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Fc.fromBufferAttribute(this,n),Fc.applyMatrix3(t),this.setXY(n,Fc.x,Fc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Lr(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Vn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Lr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Lr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Lr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Lr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),s=Vn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yv&&(t.usage=this.usage),t}}class k_ extends Li{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class X_ extends Li{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class qe extends Li{constructor(t,n,s){super(new Float32Array(t),n,s)}}let IM=0;const yi=new tn,Yh=new mn,wr=new Z,oi=new gl,Jo=new gl,Sn=new Z;class Mn extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(F_(t)?X_:k_)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ye().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,s){return yi.makeTranslation(t,n,s),this.applyMatrix4(yi),this}scale(t,n,s){return yi.makeScale(t,n,s),this.applyMatrix4(yi),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new qe(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Jo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(oi.min,Jo.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,Jo.max),oi.expandByPoint(Sn)):(oi.expandByPoint(Jo.min),oi.expandByPoint(Jo.max))}oi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Sn.fromBufferAttribute(h,p),m&&(wr.fromBufferAttribute(t,p),Sn.add(wr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Y=0;Y<s.count;Y++)h[Y]=new Z,m[Y]=new Z;const p=new Z,g=new Z,v=new Z,x=new Lt,S=new Lt,E=new Lt,T=new Z,M=new Z;function _(Y,A,w){p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,A),v.fromBufferAttribute(s,w),x.fromBufferAttribute(c,Y),S.fromBufferAttribute(c,A),E.fromBufferAttribute(c,w),g.sub(p),v.sub(p),S.sub(x),E.sub(x);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(G),M.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),h[Y].add(T),h[A].add(T),h[w].add(T),m[Y].add(M),m[A].add(M),m[w].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Y=0,A=O.length;Y<A;++Y){const w=O[Y],G=w.start,V=w.count;for(let W=G,tt=G+V;W<tt;W+=3)_(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const U=new Z,D=new Z,I=new Z,F=new Z;function B(Y){I.fromBufferAttribute(l,Y),F.copy(I);const A=h[Y];U.copy(A),U.sub(I.multiplyScalar(I.dot(A))).normalize(),D.crossVectors(F,A);const G=D.dot(m[Y])<0?-1:1;f.setXYZW(Y,U.x,U.y,U.z,G)}for(let Y=0,A=O.length;Y<A;++Y){const w=O[Y],G=w.start,V=w.count;for(let W=G,tt=G+V;W<tt;W+=3)B(t.getX(W+0)),B(t.getX(W+1)),B(t.getX(W+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new Z,c=new Z,f=new Z,h=new Z,m=new Z,p=new Z,g=new Z,v=new Z;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,M),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=n.count;x<S;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)Sn.fromBufferAttribute(t,n),Sn.normalize(),t.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let S=0,E=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?S=m[T]*h.data.stride+h.offset:S=m[T]*g;for(let _=0;_<g;_++)x[E++]=p[S++]}return new Li(x,g,v)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=t(x,s);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zv=new tn,bs=new H_,Bc=new hu,Iv=new Z,Hc=new Z,Gc=new Z,Vc=new Z,jh=new Z,kc=new Z,Fv=new Z,Xc=new Z;class $e extends mn{constructor(t=new Mn,n=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){kc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(jh.fromBufferAttribute(v,t),f?kc.addScaledVector(jh,g):kc.addScaledVector(jh.sub(n),g))}n.add(kc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),bs.copy(t.ray).recast(t.near),!(Bc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Bc,Iv)===null||bs.origin.distanceToSquared(Iv)>(t.far-t.near)**2))&&(zv.copy(c).invert(),bs.copy(t.ray).applyMatrix4(zv),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,bs)))}_computeIntersections(t,n,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],_=f[M.materialIndex],O=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let D=O,I=U;D<I;D+=3){const F=h.getX(D),B=h.getX(D+1),Y=h.getX(D+2);l=Wc(this,_,t,s,p,g,v,F,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let M=E,_=T;M<_;M+=3){const O=h.getX(M),U=h.getX(M+1),D=h.getX(M+2);l=Wc(this,f,t,s,p,g,v,O,U,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],_=f[M.materialIndex],O=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=O,I=U;D<I;D+=3){const F=D,B=D+1,Y=D+2;l=Wc(this,_,t,s,p,g,v,F,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let M=E,_=T;M<_;M+=3){const O=M,U=M+1,D=M+2;l=Wc(this,f,t,s,p,g,v,O,U,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function FM(r,t,n,s,l,c,f,h){let m;if(t.side===Xn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===ns,h),m===null)return null;Xc.copy(h),Xc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Xc);return p<n.near||p>n.far?null:{distance:p,point:Xc.clone(),object:r}}function Wc(r,t,n,s,l,c,f,h,m,p){r.getVertexPosition(h,Hc),r.getVertexPosition(m,Gc),r.getVertexPosition(p,Vc);const g=FM(r,t,n,s,Hc,Gc,Vc,Fv);if(g){const v=new Z;Ui.getBarycoord(Fv,Hc,Gc,Vc,v),l&&(g.uv=Ui.getInterpolatedAttribute(l,h,m,p,v,new Lt)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,h,m,p,v,new Lt)),f&&(g.normal=Ui.getInterpolatedAttribute(f,h,m,p,v,new Z),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new Z,materialIndex:0};Ui.getNormal(Hc,Gc,Vc,x.normal),g.face=x,g.barycoord=v}return g}class Jr extends Mn{constructor(t=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,s,n,t,f,c,0),E("z","y","x",1,-1,s,n,-t,f,c,1),E("x","z","y",1,1,t,s,n,l,f,2),E("x","z","y",1,-1,t,s,-n,l,f,3),E("x","y","z",1,-1,t,n,s,l,c,4),E("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(v,2));function E(T,M,_,O,U,D,I,F,B,Y,A){const w=D/B,G=I/Y,V=D/2,W=I/2,tt=F/2,et=B+1,P=Y+1;let H=0,it=0;const St=new Z;for(let Mt=0;Mt<P;Mt++){const L=Mt*G-W;for(let K=0;K<et;K++){const gt=K*w-V;St[T]=gt*O,St[M]=L*U,St[_]=tt,p.push(St.x,St.y,St.z),St[T]=0,St[M]=0,St[_]=F>0?1:-1,g.push(St.x,St.y,St.z),v.push(K/B),v.push(1-Mt/Y),H+=1}}for(let Mt=0;Mt<Y;Mt++)for(let L=0;L<B;L++){const K=x+L+et*Mt,gt=x+L+et*(Mt+1),Rt=x+(L+1)+et*(Mt+1),kt=x+(L+1)+et*Mt;m.push(K,gt,kt),m.push(gt,Rt,kt),it+=6}h.addGroup(S,it,A),S+=it,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yr(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function kn(r){const t={};for(let n=0;n<r.length;n++){const s=Yr(r[n]);for(const l in s)t[l]=s[l]}return t}function BM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function W_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const uu={clone:Yr,merge:kn};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=BM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class q_ extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new Z,Bv=new Lt,Hv=new Lt;class Jn extends q_{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($a.x,$a.y).multiplyScalar(-t/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-t/$a.z)}getViewSize(t,n){return this.getViewBounds(t,Bv,Hv),n.subVectors(Hv,Bv)}setViewOffset(t,n,s,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(il*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Dr=-90,Ur=1;class VM extends mn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(Dr,Ur,t,n);l.layers=this.layers,this.add(l);const c=new Jn(Dr,Ur,t,n);c.layers=this.layers,this.add(c);const f=new Jn(Dr,Ur,t,n);f.layers=this.layers,this.add(f);const h=new Jn(Dr,Ur,t,n);h.layers=this.layers,this.add(h);const m=new Jn(Dr,Ur,t,n);m.layers=this.layers,this.add(m);const p=new Jn(Dr,Ur,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(n,c),t.setRenderTarget(s,1,l),t.render(n,f),t.setRenderTarget(s,2,l),t.render(n,h),t.setRenderTarget(s,3,l),t.render(n,m),t.setRenderTarget(s,4,l),t.render(n,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(n,g),t.setRenderTarget(v,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Y_ extends Hn{constructor(t=[],n=Ls,s,l,c,f,h,m,p,g){super(t,n,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class j_ extends Kn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Y_(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jr(5,5,5),c=new Bn({name:"CubemapFromEquirect",uniforms:Yr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Xi});c.uniforms.tEquirect.value=n;const f=new $e(l,c),h=n.minFilter;return n.minFilter===Us&&(n.minFilter=Fn),new VM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,l);t.setRenderTarget(c)}}class Or extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,s),_=this._getHandJoint(p,T);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Or;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class xp{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(t),this.density=n}clone(){return new xp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class XM extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class WM extends Hn{constructor(t=null,n=1,s=1,l,c,f,h,m,p=Ln,g=Ln,v,x){super(null,f,h,m,p,g,l,c,v,x),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new Z,qM=new Z,YM=new ye;class Rs{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=Qh.subVectors(s,n).cross(qM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Qh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||YM.getNormalMatrix(t),l=this.coplanarPoint(Qh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new hu,jM=new Lt(.5,.5),qc=new Z;class yp{constructor(t=new Rs,n=new Rs,s=new Rs,l=new Rs,c=new Rs,f=new Rs){this.planes=[t,n,s,l,c,f]}set(t,n,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=ki,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],S=c[7],E=c[8],T=c[9],M=c[10],_=c[11],O=c[12],U=c[13],D=c[14],I=c[15];if(l[0].setComponents(p-f,S-g,_-E,I-O).normalize(),l[1].setComponents(p+f,S+g,_+E,I+O).normalize(),l[2].setComponents(p+h,S+v,_+T,I+U).normalize(),l[3].setComponents(p-h,S-v,_-T,I-U).normalize(),s)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,S-x,_-M,I-D).normalize();else if(l[4].setComponents(p-m,S-x,_-M,I-D).normalize(),n===ki)l[5].setComponents(p+m,S+x,_+M,I+D).normalize();else if(n===lu)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);const n=jM.distanceTo(t.center);return Es.radius=.7071067811865476+n,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(qc.x=l.normal.x>0?t.max.x:t.min.x,qc.y=l.normal.y>0?t.max.y:t.min.y,qc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(qc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z_ extends zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gv=new tn,Kd=new H_,Yc=new hu,jc=new Z;class ZM extends mn{constructor(t=new Mn,n=new Z_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,t.ray.intersectsSphere(Yc)===!1)return;Gv.copy(l).invert(),Kd.copy(t.ray).applyMatrix4(Gv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const x=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=x,T=S;E<T;E++){const M=p.getX(E);jc.fromBufferAttribute(v,M),Vv(jc,M,m,l,t,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=x,T=S;E<T;E++)jc.fromBufferAttribute(v,E),Vv(jc,E,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Vv(r,t,n,s,l,c,f){const h=Kd.distanceSqToPoint(r);if(h<n){const m=new Z;Kd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class QM extends Hn{constructor(t,n,s,l,c,f,h,m,p){super(t,n,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fl extends Hn{constructor(t,n,s=qi,l,c,f,h=Ln,m=Ln,p,g=Sa,v=1){if(g!==Sa&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:v};super(x,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _p(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class JM extends fl{constructor(t,n=qi,s=Ls,l,c,f=Ln,h=Ln,m,p=Sa){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Q_ extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sp extends Mn{constructor(t=1,n=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:s,radialSegments:l,heightSegments:c},n=Math.max(0,n),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const f=[],h=[],m=[],p=[],g=n/2,v=Math.PI/2*t,x=n,S=2*v+x,E=s*2+c,T=l+1,M=new Z,_=new Z;for(let O=0;O<=E;O++){let U=0,D=0,I=0,F=0;if(O<=s){const A=O/s,w=A*Math.PI/2;D=-g-t*Math.cos(w),I=t*Math.sin(w),F=-t*Math.cos(w),U=A*v}else if(O<=s+c){const A=(O-s)/c;D=-g+A*n,I=t,F=0,U=v+A*x}else{const A=(O-s-c)/s,w=A*Math.PI/2;D=g+t*Math.sin(w),I=t*Math.cos(w),F=t*Math.sin(w),U=v+x+A*v}const B=Math.max(0,Math.min(1,U/S));let Y=0;O===0?Y=.5/l:O===E&&(Y=-.5/l);for(let A=0;A<=l;A++){const w=A/l,G=w*Math.PI*2,V=Math.sin(G),W=Math.cos(G);_.x=-I*W,_.y=D,_.z=I*V,h.push(_.x,_.y,_.z),M.set(-I*W,F,I*V),M.normalize(),m.push(M.x,M.y,M.z),p.push(w+Y,B)}if(O>0){const A=(O-1)*T;for(let w=0;w<l;w++){const G=A+w,V=A+w+1,W=O*T+w,tt=O*T+w+1;f.push(G,V,W),f.push(V,tt,W)}}}this.setIndex(f),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sp(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Mp extends Mn{constructor(t=1,n=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],x=[],S=[];let E=0;const T=[],M=s/2;let _=0;O(),f===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(S,2));function O(){const D=new Z,I=new Z;let F=0;const B=(n-t)/s;for(let Y=0;Y<=c;Y++){const A=[],w=Y/c,G=w*(n-t)+t;for(let V=0;V<=l;V++){const W=V/l,tt=W*m+h,et=Math.sin(tt),P=Math.cos(tt);I.x=G*et,I.y=-w*s+M,I.z=G*P,v.push(I.x,I.y,I.z),D.set(et,B,P).normalize(),x.push(D.x,D.y,D.z),S.push(W,1-w),A.push(E++)}T.push(A)}for(let Y=0;Y<l;Y++)for(let A=0;A<c;A++){const w=T[A][Y],G=T[A+1][Y],V=T[A+1][Y+1],W=T[A][Y+1];(t>0||A!==0)&&(g.push(w,G,W),F+=3),(n>0||A!==c-1)&&(g.push(G,V,W),F+=3)}p.addGroup(_,F,0),_+=F}function U(D){const I=E,F=new Lt,B=new Z;let Y=0;const A=D===!0?t:n,w=D===!0?1:-1;for(let V=1;V<=l;V++)v.push(0,M*w,0),x.push(0,w,0),S.push(.5,.5),E++;const G=E;for(let V=0;V<=l;V++){const tt=V/l*m+h,et=Math.cos(tt),P=Math.sin(tt);B.x=A*P,B.y=M*w,B.z=A*et,v.push(B.x,B.y,B.z),x.push(0,w,0),F.x=et*.5+.5,F.y=P*.5*w+.5,S.push(F.x,F.y),E++}for(let V=0;V<l;V++){const W=I+V,tt=G+V;D===!0?g.push(tt,tt+1,W):g.push(tt+1,tt,W),Y+=3}p.addGroup(_,Y,D===!0?1:2),_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,n){const s=this.getUtoTmapping(t);return this.getPoint(s,n)}getPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return n}getSpacedPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPointAt(s/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let s,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),n.push(c),l=s;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const s=this.getLengths();let l=0;const c=s.length;let f;n?f=n:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const g=s[l],x=s[l+1]-g,S=(f-g)/x;return(l+S)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=n||(f.isVector2?new Lt:new Z);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const s=this.getUtoTmapping(t);return this.getTangent(s,n)}computeFrenetFrames(t,n=!1){const s=new Z,l=[],c=[],f=[],h=new Z,m=new tn;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new Z)}c[0]=new Z,f[0]=new Z;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),x<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Me(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,E))}f[S].crossVectors(l[S],c[S])}if(n===!0){let S=Math.acos(Me(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bp extends ji{constructor(t=0,n=0,s=1,l=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new Lt){const s=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=m-this.aX,S=p-this.aY;m=x*g-S*v+this.aX,p=x*v+S*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class KM extends bp{constructor(t,n,s,l,c,f){super(t,n,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Ep(){let r=0,t=0,n=0,s=0;function l(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,g,v){let x=(f-c)/p-(h-c)/(p+g)+(h-f)/g,S=(h-f)/g-(m-f)/(g+v)+(m-h)/v;x*=g,S*=g,l(f,h,x,S)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+s*h}}}const Zc=new Z,Jh=new Ep,Kh=new Ep,$h=new Ep;class $M extends ji{constructor(t=[],n=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=s,this.tension=l}getPoint(t,n=new Z){const s=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=l[(h-1)%c]:(Zc.subVectors(l[0],l[1]).add(l[0]),p=Zc);const v=l[h%c],x=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Zc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Zc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),S),T=Math.pow(v.distanceToSquared(x),S),M=Math.pow(x.distanceToSquared(g),S);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),Jh.initNonuniformCatmullRom(p.x,v.x,x.x,g.x,E,T,M),Kh.initNonuniformCatmullRom(p.y,v.y,x.y,g.y,E,T,M),$h.initNonuniformCatmullRom(p.z,v.z,x.z,g.z,E,T,M)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(p.x,v.x,x.x,g.x,this.tension),Kh.initCatmullRom(p.y,v.y,x.y,g.y,this.tension),$h.initCatmullRom(p.z,v.z,x.z,g.z,this.tension));return s.set(Jh.calc(m),Kh.calc(m),$h.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Z().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kv(r,t,n,s,l){const c=(s-t)*.5,f=(l-n)*.5,h=r*r,m=r*h;return(2*n-2*s+c+f)*m+(-3*n+3*s-2*c-f)*h+c*r+n}function tb(r,t){const n=1-r;return n*n*t}function eb(r,t){return 2*(1-r)*r*t}function nb(r,t){return r*r*t}function sl(r,t,n,s){return tb(r,t)+eb(r,n)+nb(r,s)}function ib(r,t){const n=1-r;return n*n*n*t}function ab(r,t){const n=1-r;return 3*n*n*r*t}function sb(r,t){return 3*(1-r)*r*r*t}function rb(r,t){return r*r*r*t}function rl(r,t,n,s,l){return ib(r,t)+ab(r,n)+sb(r,s)+rb(r,l)}class J_ extends ji{constructor(t=new Lt,n=new Lt,s=new Lt,l=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Lt){const s=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(rl(t,l.x,c.x,f.x,h.x),rl(t,l.y,c.y,f.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ob extends ji{constructor(t=new Z,n=new Z,s=new Z,l=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Z){const s=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(rl(t,l.x,c.x,f.x,h.x),rl(t,l.y,c.y,f.y,h.y),rl(t,l.z,c.z,f.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class K_ extends ji{constructor(t=new Lt,n=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Lt){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Lt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lb extends ji{constructor(t=new Z,n=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new Z){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $_ extends ji{constructor(t=new Lt,n=new Lt,s=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Lt){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(sl(t,l.x,c.x,f.x),sl(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cb extends ji{constructor(t=new Z,n=new Z,s=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Z){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(sl(t,l.x,c.x,f.x),sl(t,l.y,c.y,f.y),sl(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tx extends ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Lt){const s=n,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(kv(h,m.x,p.x,g.x,v.x),kv(h,m.y,p.y,g.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Lt().fromArray(l))}return this}}var $d=Object.freeze({__proto__:null,ArcCurve:KM,CatmullRomCurve3:$M,CubicBezierCurve:J_,CubicBezierCurve3:ob,EllipseCurve:bp,LineCurve:K_,LineCurve3:lb,QuadraticBezierCurve:$_,QuadraticBezierCurve3:cb,SplineCurve:tx});class ub extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $d[s](n,t))}return this}getPoint(t,n){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,h=this.curves[c],m=h.getLength(),p=m===0?0:1-f/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let s=0,l=this.curves.length;s<l;s++)n+=this.curves[s].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];s&&s.equals(g)||(n.push(g),s=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,s=this.curves.length;n<s;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(new $d[l.type]().fromJSON(l))}return this}}class Xv extends ub{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,s=t.length;n<s;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const s=new K_(this.currentPoint.clone(),new Lt(t,n));return this.curves.push(s),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,s,l){const c=new $_(this.currentPoint.clone(),new Lt(t,n),new Lt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,n,s,l,c,f){const h=new J_(this.currentPoint.clone(),new Lt(t,n),new Lt(s,l),new Lt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),s=new tx(n);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,s,l,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,s,l,c,f),this}absarc(t,n,s,l,c,f){return this.absellipse(t,n,s,s,l,c,f),this}ellipse(t,n,s,l,c,f,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,s,l,c,f,h,m),this}absellipse(t,n,s,l,c,f,h,m){const p=new bp(t,n,s,l,c,f,h,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ex extends Xv{constructor(t){super(t),this.uuid=Ps(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let s=0,l=this.holes.length;s<l;s++)n[s]=this.holes[s].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,s=this.holes.length;n<s;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(new Xv().fromJSON(l))}return this}}function fb(r,t,n=2){const s=t&&t.length,l=s?t[0]*n:r.length;let c=nx(r,0,l,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,m,p;if(s&&(c=gb(r,t,c,n)),r.length>80*n){h=r[0],m=r[1];let g=h,v=m;for(let x=n;x<l;x+=n){const S=r[x],E=r[x+1];S<h&&(h=S),E<m&&(m=E),S>g&&(g=S),E>v&&(v=E)}p=Math.max(g-h,v-m),p=p!==0?32767/p:0}return hl(c,f,n,h,m,p,0),f}function nx(r,t,n,s,l){let c;if(l===Cb(r,t,n,s)>0)for(let f=t;f<n;f+=s)c=Wv(f/s|0,r[f],r[f+1],c);else for(let f=n-s;f>=t;f-=s)c=Wv(f/s|0,r[f],r[f+1],c);return c&&jr(c,c.next)&&(pl(c),c=c.next),c}function Os(r,t){if(!r)return r;t||(t=r);let n=r,s;do if(s=!1,!n.steiner&&(jr(n,n.next)||nn(n.prev,n,n.next)===0)){if(pl(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function hl(r,t,n,s,l,c,f){if(!r)return;!f&&c&&Sb(r,s,l,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?db(r,s,l,c):hb(r)){t.push(m.i,r.i,p.i),pl(r),r=p.next,h=p.next;continue}if(r=p,r===h){f?f===1?(r=pb(Os(r),t),hl(r,t,n,s,l,c,2)):f===2&&mb(r,t,n,s,l,c):hl(Os(r),t,n,s,l,c,1);break}}}function hb(r){const t=r.prev,n=r,s=r.next;if(nn(t,n,s)>=0)return!1;const l=t.x,c=n.x,f=s.x,h=t.y,m=n.y,p=s.y,g=Math.min(l,c,f),v=Math.min(h,m,p),x=Math.max(l,c,f),S=Math.max(h,m,p);let E=s.next;for(;E!==t;){if(E.x>=g&&E.x<=x&&E.y>=v&&E.y<=S&&el(l,h,c,m,f,p,E.x,E.y)&&nn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function db(r,t,n,s){const l=r.prev,c=r,f=r.next;if(nn(l,c,f)>=0)return!1;const h=l.x,m=c.x,p=f.x,g=l.y,v=c.y,x=f.y,S=Math.min(h,m,p),E=Math.min(g,v,x),T=Math.max(h,m,p),M=Math.max(g,v,x),_=tp(S,E,t,n,s),O=tp(T,M,t,n,s);let U=r.prevZ,D=r.nextZ;for(;U&&U.z>=_&&D&&D.z<=O;){if(U.x>=S&&U.x<=T&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&el(h,g,m,v,p,x,U.x,U.y)&&nn(U.prev,U,U.next)>=0||(U=U.prevZ,D.x>=S&&D.x<=T&&D.y>=E&&D.y<=M&&D!==l&&D!==f&&el(h,g,m,v,p,x,D.x,D.y)&&nn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;U&&U.z>=_;){if(U.x>=S&&U.x<=T&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&el(h,g,m,v,p,x,U.x,U.y)&&nn(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;D&&D.z<=O;){if(D.x>=S&&D.x<=T&&D.y>=E&&D.y<=M&&D!==l&&D!==f&&el(h,g,m,v,p,x,D.x,D.y)&&nn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function pb(r,t){let n=r;do{const s=n.prev,l=n.next.next;!jr(s,l)&&ax(s,n,n.next,l)&&dl(s,l)&&dl(l,s)&&(t.push(s.i,n.i,l.i),pl(n),pl(n.next),n=r=l),n=n.next}while(n!==r);return Os(n)}function mb(r,t,n,s,l,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&Eb(f,h)){let m=sx(f,h);f=Os(f,f.next),m=Os(m,m.next),hl(f,t,n,s,l,c,0),hl(m,t,n,s,l,c,0);return}h=h.next}f=f.next}while(f!==r)}function gb(r,t,n,s){const l=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=nx(r,h,m,s,!1);p===p.next&&(p.steiner=!0),l.push(bb(p))}l.sort(vb);for(let c=0;c<l.length;c++)n=_b(l[c],n);return n}function vb(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);n=s-l}return n}function _b(r,t){const n=xb(r,t);if(!n)return t;const s=sx(n,r);return Os(s,s.next),Os(n,n.next)}function xb(r,t){let n=t;const s=r.x,l=r.y;let c=-1/0,f;if(jr(r,n))return n;do{if(jr(r,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const v=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(v<=s&&v>c&&(c=v,f=n.x<n.next.x?n:n.next,v===s))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,m=f.x,p=f.y;let g=1/0;n=f;do{if(s>=n.x&&n.x>=m&&s!==n.x&&ix(l<p?s:c,l,m,p,l<p?c:s,l,n.x,n.y)){const v=Math.abs(l-n.y)/(s-n.x);dl(n,r)&&(v<g||v===g&&(n.x>f.x||n.x===f.x&&yb(f,n)))&&(f=n,g=v)}n=n.next}while(n!==h);return f}function yb(r,t){return nn(r.prev,r,t.prev)<0&&nn(t.next,r,r.next)<0}function Sb(r,t,n,s){let l=r;do l.z===0&&(l.z=tp(l.x,l.y,t,n,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,Mb(l)}function Mb(r){let t,n=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,h=0;for(let p=0;p<n&&(h++,f=f.nextZ,!!f);p++);let m=n;for(;h>0||m>0&&f;)h!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,h--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,n*=2}while(t>1);return r}function tp(r,t,n,s,l){return r=(r-n)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function bb(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function ix(r,t,n,s,l,c,f,h){return(l-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(s-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(l-f)*(s-h)}function el(r,t,n,s,l,c,f,h){return!(r===f&&t===h)&&ix(r,t,n,s,l,c,f,h)}function Eb(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Tb(r,t)&&(dl(r,t)&&dl(t,r)&&Ab(r,t)&&(nn(r.prev,r,t.prev)||nn(r,t.prev,t))||jr(r,t)&&nn(r.prev,r,r.next)>0&&nn(t.prev,t,t.next)>0)}function nn(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function jr(r,t){return r.x===t.x&&r.y===t.y}function ax(r,t,n,s){const l=Jc(nn(r,t,n)),c=Jc(nn(r,t,s)),f=Jc(nn(n,s,r)),h=Jc(nn(n,s,t));return!!(l!==c&&f!==h||l===0&&Qc(r,n,t)||c===0&&Qc(r,s,t)||f===0&&Qc(n,r,s)||h===0&&Qc(n,t,s))}function Qc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Jc(r){return r>0?1:r<0?-1:0}function Tb(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&ax(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function dl(r,t){return nn(r.prev,r,r.next)<0?nn(r,t,r.next)>=0&&nn(r,r.prev,t)>=0:nn(r,t,r.prev)<0||nn(r,r.next,t)<0}function Ab(r,t){let n=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==r);return s}function sx(r,t){const n=ep(r.i,r.x,r.y),s=ep(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,s.next=n,n.prev=s,c.next=s,s.prev=c,s}function Wv(r,t,n,s){const l=ep(r,t,n);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function pl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ep(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cb(r,t,n,s){let l=0;for(let c=t,f=n-s;c<n;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class Rb{static triangulate(t,n,s=2){return fb(t,n,s)}}class Pr{static area(t){const n=t.length;let s=0;for(let l=n-1,c=0;c<n;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Pr.area(t)<0}static triangulateShape(t,n){const s=[],l=[],c=[];qv(t),Yv(s,t);let f=t.length;n.forEach(qv);for(let m=0;m<n.length;m++)l.push(f),f+=n[m].length,Yv(s,n[m]);const h=Rb.triangulate(s,l);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function qv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Yv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Tp extends Mn{constructor(t=new ex([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];f(p)}this.setAttribute("position",new qe(l,3)),this.setAttribute("uv",new qe(c,2)),this.computeVertexNormals();function f(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,v=n.depth!==void 0?n.depth:1;let x=n.bevelEnabled!==void 0?n.bevelEnabled:!0,S=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:S-.1,T=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const _=n.extrudePath,O=n.UVGenerator!==void 0?n.UVGenerator:wb;let U,D=!1,I,F,B,Y;if(_){U=_.getSpacedPoints(g),D=!0,x=!1;const _t=_.isCatmullRomCurve3?_.closed:!1;I=_.computeFrenetFrames(g,_t),F=new Z,B=new Z,Y=new Z}x||(M=0,S=0,E=0,T=0);const A=h.extractPoints(p);let w=A.shape;const G=A.holes;if(!Pr.isClockWise(w)){w=w.reverse();for(let _t=0,Ct=G.length;_t<Ct;_t++){const Et=G[_t];Pr.isClockWise(Et)&&(G[_t]=Et.reverse())}}function W(_t){const Et=10000000000000001e-36;let It=_t[0];for(let z=1;z<=_t.length;z++){const ne=z%_t.length,Gt=_t[ne],ie=Gt.x-It.x,Ut=Gt.y-It.y,N=ie*ie+Ut*Ut,b=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(It.x),Math.abs(It.y)),q=Et*b*b;if(N<=q){_t.splice(ne,1),z--;continue}It=Gt}}W(w),G.forEach(W);const tt=G.length,et=w;for(let _t=0;_t<tt;_t++){const Ct=G[_t];w=w.concat(Ct)}function P(_t,Ct,Et){return Ct||De("ExtrudeGeometry: vec does not exist"),_t.clone().addScaledVector(Ct,Et)}const H=w.length;function it(_t,Ct,Et){let It,z,ne;const Gt=_t.x-Ct.x,ie=_t.y-Ct.y,Ut=Et.x-_t.x,N=Et.y-_t.y,b=Gt*Gt+ie*ie,q=Gt*N-ie*Ut;if(Math.abs(q)>Number.EPSILON){const ct=Math.sqrt(b),xt=Math.sqrt(Ut*Ut+N*N),ft=Ct.x-ie/ct,Zt=Ct.y+Gt/ct,Ot=Et.x-N/xt,Qt=Et.y+Ut/xt,se=((Ot-ft)*N-(Qt-Zt)*Ut)/(Gt*N-ie*Ut);It=ft+Gt*se-_t.x,z=Zt+ie*se-_t.y;const dt=It*It+z*z;if(dt<=2)return new Lt(It,z);ne=Math.sqrt(dt/2)}else{let ct=!1;Gt>Number.EPSILON?Ut>Number.EPSILON&&(ct=!0):Gt<-Number.EPSILON?Ut<-Number.EPSILON&&(ct=!0):Math.sign(ie)===Math.sign(N)&&(ct=!0),ct?(It=-ie,z=Gt,ne=Math.sqrt(b)):(It=Gt,z=ie,ne=Math.sqrt(b/2))}return new Lt(It/ne,z/ne)}const St=[];for(let _t=0,Ct=et.length,Et=Ct-1,It=_t+1;_t<Ct;_t++,Et++,It++)Et===Ct&&(Et=0),It===Ct&&(It=0),St[_t]=it(et[_t],et[Et],et[It]);const Mt=[];let L,K=St.concat();for(let _t=0,Ct=tt;_t<Ct;_t++){const Et=G[_t];L=[];for(let It=0,z=Et.length,ne=z-1,Gt=It+1;It<z;It++,ne++,Gt++)ne===z&&(ne=0),Gt===z&&(Gt=0),L[It]=it(Et[It],Et[ne],Et[Gt]);Mt.push(L),K=K.concat(L)}let gt;if(M===0)gt=Pr.triangulateShape(et,G);else{const _t=[],Ct=[];for(let Et=0;Et<M;Et++){const It=Et/M,z=S*Math.cos(It*Math.PI/2),ne=E*Math.sin(It*Math.PI/2)+T;for(let Gt=0,ie=et.length;Gt<ie;Gt++){const Ut=P(et[Gt],St[Gt],ne);Xt(Ut.x,Ut.y,-z),It===0&&_t.push(Ut)}for(let Gt=0,ie=tt;Gt<ie;Gt++){const Ut=G[Gt];L=Mt[Gt];const N=[];for(let b=0,q=Ut.length;b<q;b++){const ct=P(Ut[b],L[b],ne);Xt(ct.x,ct.y,-z),It===0&&N.push(ct)}It===0&&Ct.push(N)}}gt=Pr.triangulateShape(_t,Ct)}const Rt=gt.length,kt=E+T;for(let _t=0;_t<H;_t++){const Ct=x?P(w[_t],K[_t],kt):w[_t];D?(B.copy(I.normals[0]).multiplyScalar(Ct.x),F.copy(I.binormals[0]).multiplyScalar(Ct.y),Y.copy(U[0]).add(B).add(F),Xt(Y.x,Y.y,Y.z)):Xt(Ct.x,Ct.y,0)}for(let _t=1;_t<=g;_t++)for(let Ct=0;Ct<H;Ct++){const Et=x?P(w[Ct],K[Ct],kt):w[Ct];D?(B.copy(I.normals[_t]).multiplyScalar(Et.x),F.copy(I.binormals[_t]).multiplyScalar(Et.y),Y.copy(U[_t]).add(B).add(F),Xt(Y.x,Y.y,Y.z)):Xt(Et.x,Et.y,v/g*_t)}for(let _t=M-1;_t>=0;_t--){const Ct=_t/M,Et=S*Math.cos(Ct*Math.PI/2),It=E*Math.sin(Ct*Math.PI/2)+T;for(let z=0,ne=et.length;z<ne;z++){const Gt=P(et[z],St[z],It);Xt(Gt.x,Gt.y,v+Et)}for(let z=0,ne=G.length;z<ne;z++){const Gt=G[z];L=Mt[z];for(let ie=0,Ut=Gt.length;ie<Ut;ie++){const N=P(Gt[ie],L[ie],It);D?Xt(N.x,N.y+U[g-1].y,U[g-1].x+Et):Xt(N.x,N.y,v+Et)}}}nt(),ht();function nt(){const _t=l.length/3;if(x){let Ct=0,Et=H*Ct;for(let It=0;It<Rt;It++){const z=gt[It];qt(z[2]+Et,z[1]+Et,z[0]+Et)}Ct=g+M*2,Et=H*Ct;for(let It=0;It<Rt;It++){const z=gt[It];qt(z[0]+Et,z[1]+Et,z[2]+Et)}}else{for(let Ct=0;Ct<Rt;Ct++){const Et=gt[Ct];qt(Et[2],Et[1],Et[0])}for(let Ct=0;Ct<Rt;Ct++){const Et=gt[Ct];qt(Et[0]+H*g,Et[1]+H*g,Et[2]+H*g)}}s.addGroup(_t,l.length/3-_t,0)}function ht(){const _t=l.length/3;let Ct=0;Dt(et,Ct),Ct+=et.length;for(let Et=0,It=G.length;Et<It;Et++){const z=G[Et];Dt(z,Ct),Ct+=z.length}s.addGroup(_t,l.length/3-_t,1)}function Dt(_t,Ct){let Et=_t.length;for(;--Et>=0;){const It=Et;let z=Et-1;z<0&&(z=_t.length-1);for(let ne=0,Gt=g+M*2;ne<Gt;ne++){const ie=H*ne,Ut=H*(ne+1),N=Ct+It+ie,b=Ct+z+ie,q=Ct+z+Ut,ct=Ct+It+Ut;ve(N,b,q,ct)}}}function Xt(_t,Ct,Et){m.push(_t),m.push(Ct),m.push(Et)}function qt(_t,Ct,Et){Re(_t),Re(Ct),Re(Et);const It=l.length/3,z=O.generateTopUV(s,l,It-3,It-2,It-1);ue(z[0]),ue(z[1]),ue(z[2])}function ve(_t,Ct,Et,It){Re(_t),Re(Ct),Re(It),Re(Ct),Re(Et),Re(It);const z=l.length/3,ne=O.generateSideWallUV(s,l,z-6,z-3,z-2,z-1);ue(ne[0]),ue(ne[1]),ue(ne[3]),ue(ne[1]),ue(ne[2]),ue(ne[3])}function Re(_t){l.push(m[_t*3+0]),l.push(m[_t*3+1]),l.push(m[_t*3+2])}function ue(_t){c.push(_t.x),c.push(_t.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,s=this.parameters.options;return Db(n,s,t)}static fromJSON(t,n){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=n[t.shapes[c]];s.push(h)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new $d[l.type]().fromJSON(l)),new Tp(s,t.options)}}const wb={generateTopUV:function(r,t,n,s,l){const c=t[n*3],f=t[n*3+1],h=t[s*3],m=t[s*3+1],p=t[l*3],g=t[l*3+1];return[new Lt(c,f),new Lt(h,m),new Lt(p,g)]},generateSideWallUV:function(r,t,n,s,l,c){const f=t[n*3],h=t[n*3+1],m=t[n*3+2],p=t[s*3],g=t[s*3+1],v=t[s*3+2],x=t[l*3],S=t[l*3+1],E=t[l*3+2],T=t[c*3],M=t[c*3+1],_=t[c*3+2];return Math.abs(h-g)<Math.abs(f-p)?[new Lt(f,1-m),new Lt(p,1-v),new Lt(x,1-E),new Lt(T,1-_)]:[new Lt(h,1-m),new Lt(g,1-v),new Lt(S,1-E),new Lt(M,1-_)]}};function Db(r,t,n){if(n.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class du extends Mn{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,v=t/h,x=n/m,S=[],E=[],T=[],M=[];for(let _=0;_<g;_++){const O=_*x-f;for(let U=0;U<p;U++){const D=U*v-c;E.push(D,-O,0),T.push(0,0,1),M.push(U/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<h;O++){const U=O+p*_,D=O+p*(_+1),I=O+1+p*(_+1),F=O+1+p*_;S.push(U,D,F),S.push(D,I,F)}this.setIndex(S),this.setAttribute("position",new qe(E,3)),this.setAttribute("normal",new qe(T,3)),this.setAttribute("uv",new qe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ap extends Mn{constructor(t=.5,n=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let v=t;const x=(n-t)/l,S=new Z,E=new Lt;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const _=c+M/s*f;S.x=v*Math.cos(_),S.y=v*Math.sin(_),m.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/n+1)/2,E.y=(S.y/n+1)/2,g.push(E.x,E.y)}v+=x}for(let T=0;T<l;T++){const M=T*(s+1);for(let _=0;_<s;_++){const O=_+M,U=O,D=O+s+1,I=O+s+2,F=O+1;h.push(U,D,F),h.push(D,I,F)}}this.setIndex(h),this.setAttribute("position",new qe(m,3)),this.setAttribute("normal",new qe(p,3)),this.setAttribute("uv",new qe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ap(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zr extends Mn{constructor(t=1,n=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],v=new Z,x=new Z,S=[],E=[],T=[],M=[];for(let _=0;_<=s;_++){const O=[],U=_/s;let D=0;_===0&&f===0?D=.5/n:_===s&&m===Math.PI&&(D=-.5/n);for(let I=0;I<=n;I++){const F=I/n;v.x=-t*Math.cos(l+F*c)*Math.sin(f+U*h),v.y=t*Math.cos(f+U*h),v.z=t*Math.sin(l+F*c)*Math.sin(f+U*h),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),M.push(F+D,1-U),O.push(p++)}g.push(O)}for(let _=0;_<s;_++)for(let O=0;O<n;O++){const U=g[_][O+1],D=g[_][O],I=g[_+1][O],F=g[_+1][O+1];(_!==0||f>0)&&S.push(U,D,F),(_!==s-1||m<Math.PI)&&S.push(D,I,F)}this.setIndex(S),this.setAttribute("position",new qe(E,3)),this.setAttribute("normal",new qe(T,3)),this.setAttribute("uv",new qe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ir extends Mn{constructor(t=1,n=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],p=[],g=new Z,v=new Z,x=new Z;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const T=E/l*c,M=S/s*Math.PI*2;v.x=(t+n*Math.cos(M))*Math.cos(T),v.y=(t+n*Math.cos(M))*Math.sin(T),v.z=n*Math.sin(M),h.push(v.x,v.y,v.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),x.subVectors(v,g).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const T=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,_=(l+1)*(S-1)+E,O=(l+1)*S+E;f.push(T,M,O),f.push(M,_,O)}this.setIndex(f),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ub extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class np extends zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pp,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nb extends np{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class jv extends zs{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pp,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Lb extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ob extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pu extends mn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Pb extends pu{constructor(t,n,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const td=new tn,Zv=new Z,Qv=new Z;class Cp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;Zv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zv),Qv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Qv),n.updateMatrixWorld(),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td,n.coordinateSystem,n.reversedDepth),n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zb extends Cp{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,s=qr*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(s!==n.fov||l!==n.aspect||c!==n.far)&&(n.fov=s,n.aspect=l,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ib extends pu{constructor(t,n,s=0,l=Math.PI/3,c=0,f=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new zb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}}class Fb extends Cp{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class Bb extends pu{constructor(t,n,s=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Fb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class mu extends q_{constructor(t=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Hb extends Cp{constructor(){super(new mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gb extends pu{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Hb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Vb extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class kb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Jv(r,t,n,s){const l=Xb(s);switch(n){case P_:return r*t;case I_:return r*t/l.components*l.byteLength;case fp:return r*t/l.components*l.byteLength;case Xr:return r*t*2/l.components*l.byteLength;case hp:return r*t*2/l.components*l.byteLength;case z_:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case dp:return r*t*4/l.components*l.byteLength;case eu:case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case iu:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:case bd:return Math.max(r,16)*Math.max(t,8)/4;case yd:case Md:return Math.max(r,8)*Math.max(t,8)/2;case Ed:case Td:case Cd:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ad:case wd:case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wd:case qd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case jd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Qd:case Jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Xb(r){switch(r){case li:case U_:return{byteLength:1,components:1};case ll:case N_:case ci:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case qi:case lp:case Vi:return{byteLength:4,components:1};case L_:case O_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);function rx(){let r=null,t=!1,n=null,s=null;function l(c,f){n(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function Wb(r){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,g);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],T=v[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const T=v[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
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
#endif`,jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
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
#endif`,$b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tE=`#ifdef USE_BATCHING
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
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sE=`#ifdef USE_IRIDESCENCE
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
#endif`,rE=`#ifdef USE_BUMPMAP
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mE=`#define PI 3.141592653589793
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
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vE=`vec3 transformedNormal = objectNormal;
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
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ME="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
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
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IE=`uniform bool receiveShadow;
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
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kE=`PhysicalMaterial material;
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
#endif`,XE=`uniform sampler2D dfgLUT;
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
}`,WE=`
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
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
#endif`,YE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e1=`#if defined( USE_POINTS_UV )
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
#endif`,n1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`#ifdef USE_MORPHTARGETS
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
#endif`,l1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p1=`#ifdef USE_NORMALMAP
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
#endif`,m1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D1=`float getShadowMask() {
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
}`,U1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
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
#endif`,L1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O1=`#ifdef USE_SKINNING
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
#endif`,P1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q1=`uniform sampler2D t2D;
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`#include <common>
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
}`,K1=`#if DEPTH_PACKING == 3200
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
}`,$1=`#define DISTANCE
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
}`,tT=`#define DISTANCE
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`uniform float scale;
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
}`,aT=`uniform vec3 diffuse;
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
}`,sT=`#include <common>
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
}`,rT=`uniform vec3 diffuse;
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
}`,oT=`#define LAMBERT
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
}`,lT=`#define LAMBERT
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
}`,cT=`#define MATCAP
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
}`,uT=`#define MATCAP
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
}`,fT=`#define NORMAL
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
}`,hT=`#define NORMAL
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
}`,dT=`#define PHONG
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
}`,pT=`#define PHONG
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
}`,mT=`#define STANDARD
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
}`,gT=`#define STANDARD
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
}`,vT=`#define TOON
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
}`,_T=`#define TOON
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
}`,xT=`uniform float size;
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
}`,yT=`uniform vec3 diffuse;
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
}`,ST=`#include <common>
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
}`,MT=`uniform vec3 color;
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
}`,bT=`uniform float rotation;
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
}`,ET=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:qb,alphahash_pars_fragment:Yb,alphamap_fragment:jb,alphamap_pars_fragment:Zb,alphatest_fragment:Qb,alphatest_pars_fragment:Jb,aomap_fragment:Kb,aomap_pars_fragment:$b,batching_pars_vertex:tE,batching_vertex:eE,begin_vertex:nE,beginnormal_vertex:iE,bsdfs:aE,iridescence_fragment:sE,bumpmap_pars_fragment:rE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:lE,clipping_planes_pars_vertex:cE,clipping_planes_vertex:uE,color_fragment:fE,color_pars_fragment:hE,color_pars_vertex:dE,color_vertex:pE,common:mE,cube_uv_reflection_fragment:gE,defaultnormal_vertex:vE,displacementmap_pars_vertex:_E,displacementmap_vertex:xE,emissivemap_fragment:yE,emissivemap_pars_fragment:SE,colorspace_fragment:ME,colorspace_pars_fragment:bE,envmap_fragment:EE,envmap_common_pars_fragment:TE,envmap_pars_fragment:AE,envmap_pars_vertex:CE,envmap_physical_pars_fragment:FE,envmap_vertex:RE,fog_vertex:wE,fog_pars_vertex:DE,fog_fragment:UE,fog_pars_fragment:NE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:OE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:zE,lights_pars_begin:IE,lights_toon_fragment:BE,lights_toon_pars_fragment:HE,lights_phong_fragment:GE,lights_phong_pars_fragment:VE,lights_physical_fragment:kE,lights_physical_pars_fragment:XE,lights_fragment_begin:WE,lights_fragment_maps:qE,lights_fragment_end:YE,logdepthbuf_fragment:jE,logdepthbuf_pars_fragment:ZE,logdepthbuf_pars_vertex:QE,logdepthbuf_vertex:JE,map_fragment:KE,map_pars_fragment:$E,map_particle_fragment:t1,map_particle_pars_fragment:e1,metalnessmap_fragment:n1,metalnessmap_pars_fragment:i1,morphinstance_vertex:a1,morphcolor_vertex:s1,morphnormal_vertex:r1,morphtarget_pars_vertex:o1,morphtarget_vertex:l1,normal_fragment_begin:c1,normal_fragment_maps:u1,normal_pars_fragment:f1,normal_pars_vertex:h1,normal_vertex:d1,normalmap_pars_fragment:p1,clearcoat_normal_fragment_begin:m1,clearcoat_normal_fragment_maps:g1,clearcoat_pars_fragment:v1,iridescence_pars_fragment:_1,opaque_fragment:x1,packing:y1,premultiplied_alpha_fragment:S1,project_vertex:M1,dithering_fragment:b1,dithering_pars_fragment:E1,roughnessmap_fragment:T1,roughnessmap_pars_fragment:A1,shadowmap_pars_fragment:C1,shadowmap_pars_vertex:R1,shadowmap_vertex:w1,shadowmask_pars_fragment:D1,skinbase_vertex:U1,skinning_pars_vertex:N1,skinning_vertex:L1,skinnormal_vertex:O1,specularmap_fragment:P1,specularmap_pars_fragment:z1,tonemapping_fragment:I1,tonemapping_pars_fragment:F1,transmission_fragment:B1,transmission_pars_fragment:H1,uv_pars_fragment:G1,uv_pars_vertex:V1,uv_vertex:k1,worldpos_vertex:X1,background_vert:W1,background_frag:q1,backgroundCube_vert:Y1,backgroundCube_frag:j1,cube_vert:Z1,cube_frag:Q1,depth_vert:J1,depth_frag:K1,distance_vert:$1,distance_frag:tT,equirect_vert:eT,equirect_frag:nT,linedashed_vert:iT,linedashed_frag:aT,meshbasic_vert:sT,meshbasic_frag:rT,meshlambert_vert:oT,meshlambert_frag:lT,meshmatcap_vert:cT,meshmatcap_frag:uT,meshnormal_vert:fT,meshnormal_frag:hT,meshphong_vert:dT,meshphong_frag:pT,meshphysical_vert:mT,meshphysical_frag:gT,meshtoon_vert:vT,meshtoon_frag:_T,points_vert:xT,points_frag:yT,shadow_vert:ST,shadow_frag:MT,sprite_vert:bT,sprite_frag:ET},Wt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},Hi={basic:{uniforms:kn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:kn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:kn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:kn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:kn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new me(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:kn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:kn([Wt.points,Wt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:kn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:kn([Wt.common,Wt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:kn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:kn([Wt.sprite,Wt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:kn([Wt.common,Wt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:kn([Wt.lights,Wt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Hi.physical={uniforms:kn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Kc={r:0,b:0,g:0},Ts=new Yi,TT=new tn;function AT(r,t,n,s,l,c,f){const h=new me(0);let m=c===!0?0:1,p,g,v=null,x=0,S=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:t).get(D)),D}function T(U){let D=!1;const I=E(U);I===null?_(h,m):I&&I.isColor&&(_(I,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,D){const I=E(D);I&&(I.isCubeTexture||I.mapping===fu)?(g===void 0&&(g=new $e(new Jr(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Yr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ts.copy(D.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(Ts)),g.material.toneMapped=Ue.getTransfer(I.colorSpace)!==Ve,(v!==I||x!==I.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=I,x=I.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new $e(new du(2,2),new Bn({name:"BackgroundMaterial",uniforms:Yr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(I.colorSpace)!==Ve,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||x!==I.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=I,x=I.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,D){U.getRGB(Kc,W_(r)),s.buffers.color.setClear(Kc.r,Kc.g,Kc.b,D,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:T,addToRenderList:M,dispose:O}}function CT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(w,G,V,W,tt){let et=!1;const P=v(W,V,G);c!==P&&(c=P,p(c.object)),et=S(w,W,V,tt),et&&E(w,W,V,tt),tt!==null&&t.update(tt,r.ELEMENT_ARRAY_BUFFER),(et||f)&&(f=!1,D(w,G,V,W),tt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function v(w,G,V){const W=V.wireframe===!0;let tt=s[w.id];tt===void 0&&(tt={},s[w.id]=tt);let et=tt[G.id];et===void 0&&(et={},tt[G.id]=et);let P=et[W];return P===void 0&&(P=x(m()),et[W]=P),P}function x(w){const G=[],V=[],W=[];for(let tt=0;tt<n;tt++)G[tt]=0,V[tt]=0,W[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:V,attributeDivisors:W,object:w,attributes:{},index:null}}function S(w,G,V,W){const tt=c.attributes,et=G.attributes;let P=0;const H=V.getAttributes();for(const it in H)if(H[it].location>=0){const Mt=tt[it];let L=et[it];if(L===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),Mt===void 0||Mt.attribute!==L||L&&Mt.data!==L.data)return!0;P++}return c.attributesNum!==P||c.index!==W}function E(w,G,V,W){const tt={},et=G.attributes;let P=0;const H=V.getAttributes();for(const it in H)if(H[it].location>=0){let Mt=et[it];Mt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor));const L={};L.attribute=Mt,Mt&&Mt.data&&(L.data=Mt.data),tt[it]=L,P++}c.attributes=tt,c.attributesNum=P,c.index=W}function T(){const w=c.newAttributes;for(let G=0,V=w.length;G<V;G++)w[G]=0}function M(w){_(w,0)}function _(w,G){const V=c.newAttributes,W=c.enabledAttributes,tt=c.attributeDivisors;V[w]=1,W[w]===0&&(r.enableVertexAttribArray(w),W[w]=1),tt[w]!==G&&(r.vertexAttribDivisor(w,G),tt[w]=G)}function O(){const w=c.newAttributes,G=c.enabledAttributes;for(let V=0,W=G.length;V<W;V++)G[V]!==w[V]&&(r.disableVertexAttribArray(V),G[V]=0)}function U(w,G,V,W,tt,et,P){P===!0?r.vertexAttribIPointer(w,G,V,tt,et):r.vertexAttribPointer(w,G,V,W,tt,et)}function D(w,G,V,W){T();const tt=W.attributes,et=V.getAttributes(),P=G.defaultAttributeValues;for(const H in et){const it=et[H];if(it.location>=0){let St=tt[H];if(St===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const Mt=St.normalized,L=St.itemSize,K=t.get(St);if(K===void 0)continue;const gt=K.buffer,Rt=K.type,kt=K.bytesPerElement,nt=Rt===r.INT||Rt===r.UNSIGNED_INT||St.gpuType===lp;if(St.isInterleavedBufferAttribute){const ht=St.data,Dt=ht.stride,Xt=St.offset;if(ht.isInstancedInterleavedBuffer){for(let qt=0;qt<it.locationSize;qt++)_(it.location+qt,ht.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let qt=0;qt<it.locationSize;qt++)M(it.location+qt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let qt=0;qt<it.locationSize;qt++)U(it.location+qt,L/it.locationSize,Rt,Mt,Dt*kt,(Xt+L/it.locationSize*qt)*kt,nt)}else{if(St.isInstancedBufferAttribute){for(let ht=0;ht<it.locationSize;ht++)_(it.location+ht,St.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ht=0;ht<it.locationSize;ht++)M(it.location+ht);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let ht=0;ht<it.locationSize;ht++)U(it.location+ht,L/it.locationSize,Rt,Mt,L*kt,L/it.locationSize*ht*kt,nt)}}else if(P!==void 0){const Mt=P[H];if(Mt!==void 0)switch(Mt.length){case 2:r.vertexAttrib2fv(it.location,Mt);break;case 3:r.vertexAttrib3fv(it.location,Mt);break;case 4:r.vertexAttrib4fv(it.location,Mt);break;default:r.vertexAttrib1fv(it.location,Mt)}}}}O()}function I(){Y();for(const w in s){const G=s[w];for(const V in G){const W=G[V];for(const tt in W)g(W[tt].object),delete W[tt];delete G[V]}delete s[w]}}function F(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const V in G){const W=G[V];for(const tt in W)g(W[tt].object),delete W[tt];delete G[V]}delete s[w.id]}function B(w){for(const G in s){const V=s[G];if(V[w.id]===void 0)continue;const W=V[w.id];for(const tt in W)g(W[tt].object),delete W[tt];delete V[w.id]}}function Y(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function RT(r,t,n){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),n.update(g,s,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),n.update(g,s,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];n.update(S,s,1)}function m(p,g,v,x){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*x[T];n.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function wT(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Ni&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const Y=B===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==li&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Vi&&!Y)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(he("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:D,maxSamples:I,samples:F}}function DT(r){const t=this;let n=null,s=0,l=!1,c=!1;const f=new Rs,h=new ye,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||s!==0||l;return l=x,s=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const O=c?0:s,U=O*4;let D=_.clippingState||null;m.value=D,D=g(E,x,U,S);for(let I=0;I!==U;++I)D[I]=n[I];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,S,E){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const _=S+T*4,O=x.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<_)&&(M=new Float32Array(_));for(let U=0,D=S;U!==T;++U,D+=4)f.copy(v[U]).applyMatrix4(O,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function UT(r){let t=new WeakMap;function n(f,h){return h===gd?f.mapping=Ls:h===vd&&(f.mapping=kr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===gd||h===vd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new j_(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const es=4,Kv=[.125,.215,.35,.446,.526,.582],Ds=20,NT=256,Ko=new mu,$v=new me;let ed=null,nd=0,id=0,ad=!1;const LT=new Z;class t_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,l=100,c={}){const{size:f=256,position:h=LT}=c;ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ed,nd,id),this._renderer.xr.enabled=ad,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ls||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ci,format:Ni,colorSpace:Wr,depthBuffer:!1},l=e_(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=OT(c)),this._blurMaterial=zT(c,t,n),this._ggxMaterial=PT(c,t,n)}return l}_compileMaterial(t){const n=new $e(new Mn,t);this._renderer.compile(n,Ko)}_sceneToCubeUV(t,n,s,l,c){const m=new Jn(90,1,n,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor($v),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new Jr,new Gr({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let _=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,_=!0):(M.color.copy($v),_=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const I=this._cubeSize;Nr(l,D*I,U>2?I:0,I,I),v.setRenderTarget(l),_&&v.render(T,m),v.render(t,m)}v.toneMapping=S,v.autoClear=x,t.background=O}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Ls||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Nr(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(f,Ko)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),x=0+p*1.25,S=v*x,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-es?s-E+es:0),_=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-n,Nr(c,M,_,3*T,2*T),l.setRenderTarget(c),l.render(h,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Nr(t,M,_,3*T,2*T),l.setRenderTarget(t),l.render(h,Ko)}_blur(t,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=p;const x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ds-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Ds;M>Ds&&he(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ds}`);const _=[];let O=0;for(let B=0;B<Ds;++B){const Y=B/T,A=Math.exp(-Y*Y/2);_.push(A),B===0?O+=A:B<M&&(O+=2*A)}for(let B=0;B<_.length;B++)_[B]=_[B]/O;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const D=this._sizeLods[l],I=3*D*(l>U-es?l-U+es:0),F=4*(this._cubeSize-D);Nr(n,I,F,3*D,2*D),m.setRenderTarget(n),m.render(v,Ko)}}function OT(r){const t=[],n=[],s=[];let l=r;const c=r-es+1+Kv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-es?m=Kv[f-r+es-1]:f===0&&(m=0),n.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,T=3,M=2,_=1,O=new Float32Array(T*E*S),U=new Float32Array(M*E*S),D=new Float32Array(_*E*S);for(let F=0;F<S;F++){const B=F%3*2/3-1,Y=F>2?0:-1,A=[B,Y,0,B+2/3,Y,0,B+2/3,Y+1,0,B,Y,0,B+2/3,Y+1,0,B,Y+1,0];O.set(A,T*E*F),U.set(x,M*E*F);const w=[F,F,F,F,F,F];D.set(w,_*E*F)}const I=new Mn;I.setAttribute("position",new Li(O,T)),I.setAttribute("uv",new Li(U,M)),I.setAttribute("faceIndex",new Li(D,_)),s.push(new $e(I,null)),l>es&&l--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function e_(r,t,n){const s=new Kn(r,t,n);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function PT(r,t,n){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function zT(r,t,n){const s=new Float32Array(Ds),l=new Z(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function n_(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function i_(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function IT(r){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===gd||m===vd,g=m===Ls||m===kr;if(p||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new t_(r)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new t_(r)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function FT(r){const t={};function n(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&ul("WebGLRenderer: "+s+" extension not supported."),l}}}function BT(r,t,n,s){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function m(v){const x=v.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,E=v.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let U=0,D=O.length;U<D;U+=3){const I=O[U+0],F=O[U+1],B=O[U+2];x.push(I,F,F,B,B,I)}}else if(E!==void 0){const O=E.array;T=E.version;for(let U=0,D=O.length/3-1;U<D;U+=3){const I=U+0,F=U+1,B=U+2;x.push(I,F,F,B,B,I)}}else return;const M=new(F_(x)?X_:k_)(x,1);M.version=T;const _=c.get(v);_&&t.remove(_),c.set(v,M)}function g(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function HT(r,t,n){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*f),n.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,x*f,E),n.update(S,s,E))}function g(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let M=0;for(let _=0;_<E;_++)M+=S[_];n.update(M,s,1)}function v(x,S,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/f,S[_],T[_]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,T,0,E);let _=0;for(let O=0;O<E;O++)_+=S[O]*T[O];n.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function GT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:De("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function VT(r,t,n){const s=new WeakMap,l=new rn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==v){let w=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),M===!0&&(D=3);let I=h.attributes.position.count*D,F=1;I>t.maxTextureSize&&(F=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const B=new Float32Array(I*F*4*v),Y=new B_(B,I,F,v);Y.type=Vi,Y.needsUpdate=!0;const A=D*4;for(let G=0;G<v;G++){const V=_[G],W=O[G],tt=U[G],et=I*F*4*G;for(let P=0;P<V.count;P++){const H=P*A;E===!0&&(l.fromBufferAttribute(V,P),B[et+H+0]=l.x,B[et+H+1]=l.y,B[et+H+2]=l.z,B[et+H+3]=0),T===!0&&(l.fromBufferAttribute(W,P),B[et+H+4]=l.x,B[et+H+5]=l.y,B[et+H+6]=l.z,B[et+H+7]=0),M===!0&&(l.fromBufferAttribute(tt,P),B[et+H+8]=l.x,B[et+H+9]=l.y,B[et+H+10]=l.z,B[et+H+11]=tt.itemSize===4?l.w:1)}}x={count:v,texture:Y,size:new Lt(I,F)},s.set(h,x),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function kT(r,t,n,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const XT={[E_]:"LINEAR_TONE_MAPPING",[T_]:"REINHARD_TONE_MAPPING",[A_]:"CINEON_TONE_MAPPING",[op]:"ACES_FILMIC_TONE_MAPPING",[R_]:"AGX_TONE_MAPPING",[w_]:"NEUTRAL_TONE_MAPPING",[C_]:"CUSTOM_TONE_MAPPING"};function WT(r,t,n,s,l){const c=new Kn(t,n,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Kn(t,n,{type:ci,depthBuffer:!1,stencilBuffer:!1}),h=new Mn;h.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qe([0,2,0,0,2,0],2));const m=new Ub({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new $e(h,m),g=new mu(-1,1,1,-1,0,1);let v=null,x=null,S=!1,E,T=null,M=[],_=!1;this.setSize=function(O,U){c.setSize(O,U),f.setSize(O,U);for(let D=0;D<M.length;D++){const I=M[D];I.setSize&&I.setSize(O,U)}},this.setEffects=function(O){M=O,_=M.length>0&&M[0].isRenderPass===!0;const U=c.width,D=c.height;for(let I=0;I<M.length;I++){const F=M[I];F.setSize&&F.setSize(U,D)}},this.begin=function(O,U){if(S||O.toneMapping===Wi&&M.length===0)return!1;if(T=U,U!==null){const D=U.width,I=U.height;(c.width!==D||c.height!==I)&&this.setSize(D,I)}return _===!1&&O.setRenderTarget(c),E=O.toneMapping,O.toneMapping=Wi,!0},this.hasRenderPass=function(){return _},this.end=function(O,U){O.toneMapping=E,S=!0;let D=c,I=f;for(let F=0;F<M.length;F++){const B=M[F];if(B.enabled!==!1&&(B.render(O,I,D,U),B.needsSwap!==!1)){const Y=D;D=I,I=Y}}if(v!==O.outputColorSpace||x!==O.toneMapping){v=O.outputColorSpace,x=O.toneMapping,m.defines={},Ue.getTransfer(v)===Ve&&(m.defines.SRGB_TRANSFER="");const F=XT[x];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,O.setRenderTarget(T),O.render(p,g),T=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const ox=new Hn,ip=new fl(1,1),lx=new B_,cx=new CM,ux=new Y_,a_=[],s_=[],r_=new Float32Array(16),o_=new Float32Array(9),l_=new Float32Array(4);function Kr(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=a_[l];if(c===void 0&&(c=new Float32Array(l),a_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function xn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function vu(r,t){let n=s_[t];n===void 0&&(n=new Int32Array(t),s_[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function qT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function YT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;r.uniform2fv(this.addr,t),xn(n,t)}}function jT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;r.uniform3fv(this.addr,t),xn(n,t)}}function ZT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;r.uniform4fv(this.addr,t),xn(n,t)}}function QT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,s))return;l_.set(s),r.uniformMatrix2fv(this.addr,!1,l_),xn(n,s)}}function JT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,s))return;o_.set(s),r.uniformMatrix3fv(this.addr,!1,o_),xn(n,s)}}function KT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,s))return;r_.set(s),r.uniformMatrix4fv(this.addr,!1,r_),xn(n,s)}}function $T(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function tA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;r.uniform2iv(this.addr,t),xn(n,t)}}function eA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;r.uniform3iv(this.addr,t),xn(n,t)}}function nA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;r.uniform4iv(this.addr,t),xn(n,t)}}function iA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function aA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;r.uniform2uiv(this.addr,t),xn(n,t)}}function sA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;r.uniform3uiv(this.addr,t),xn(n,t)}}function rA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;r.uniform4uiv(this.addr,t),xn(n,t)}}function oA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ip.compareFunction=n.isReversedDepthBuffer()?gp:mp,c=ip):c=ox,n.setTexture2D(t||c,l)}function lA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||cx,l)}function cA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||ux,l)}function uA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||lx,l)}function fA(r){switch(r){case 5126:return qT;case 35664:return YT;case 35665:return jT;case 35666:return ZT;case 35674:return QT;case 35675:return JT;case 35676:return KT;case 5124:case 35670:return $T;case 35667:case 35671:return tA;case 35668:case 35672:return eA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return aA;case 36295:return sA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}function hA(r,t){r.uniform1fv(this.addr,t)}function dA(r,t){const n=Kr(t,this.size,2);r.uniform2fv(this.addr,n)}function pA(r,t){const n=Kr(t,this.size,3);r.uniform3fv(this.addr,n)}function mA(r,t){const n=Kr(t,this.size,4);r.uniform4fv(this.addr,n)}function gA(r,t){const n=Kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function vA(r,t){const n=Kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function _A(r,t){const n=Kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function xA(r,t){r.uniform1iv(this.addr,t)}function yA(r,t){r.uniform2iv(this.addr,t)}function SA(r,t){r.uniform3iv(this.addr,t)}function MA(r,t){r.uniform4iv(this.addr,t)}function bA(r,t){r.uniform1uiv(this.addr,t)}function EA(r,t){r.uniform2uiv(this.addr,t)}function TA(r,t){r.uniform3uiv(this.addr,t)}function AA(r,t){r.uniform4uiv(this.addr,t)}function CA(r,t,n){const s=this.cache,l=t.length,c=vu(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ip:f=ox;for(let h=0;h!==l;++h)n.setTexture2D(t[h]||f,c[h])}function RA(r,t,n){const s=this.cache,l=t.length,c=vu(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||cx,c[f])}function wA(r,t,n){const s=this.cache,l=t.length,c=vu(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||ux,c[f])}function DA(r,t,n){const s=this.cache,l=t.length,c=vu(n,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||lx,c[f])}function UA(r){switch(r){case 5126:return hA;case 35664:return dA;case 35665:return pA;case 35666:return mA;case 35674:return gA;case 35675:return vA;case 35676:return _A;case 5124:case 35670:return xA;case 35667:case 35671:return yA;case 35668:case 35672:return SA;case 35669:case 35673:return MA;case 5125:return bA;case 36294:return EA;case 36295:return TA;case 36296:return AA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return wA;case 36289:case 36303:case 36311:case 36292:return DA}}class NA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=fA(n.type)}}class LA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UA(n.type)}}class OA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],s)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function c_(r,t){r.seq.push(t),r.map[t.id]=t}function PA(r,t,n){const s=r.name,l=s.length;for(sd.lastIndex=0;;){const c=sd.exec(s),f=sd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){c_(n,p===void 0?new NA(h,r,t):new LA(h,r,t));break}else{let v=n.map[h];v===void 0&&(v=new OA(h),c_(n,v)),n=v}}}class su{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(n,f),m=t.getUniformLocation(n,h.name);PA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&s.push(f)}return s}}function u_(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const zA=37297;let IA=0;function FA(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return s.join(`
`)}const f_=new ye;function BA(r){Ue._getMatrix(f_,Ue.workingColorSpace,r);const t=`mat3( ${f_.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(r)){case ou:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function h_(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+FA(r.getShaderSource(t),h)}else return c}function HA(r,t){const n=BA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const GA={[E_]:"Linear",[T_]:"Reinhard",[A_]:"Cineon",[op]:"ACESFilmic",[R_]:"AgX",[w_]:"Neutral",[C_]:"Custom"};function VA(r,t){const n=GA[t];return n===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $c=new Z;function kA(){Ue.getLuminanceCoefficients($c);const r=$c.x.toFixed(4),t=$c.y.toFixed(4),n=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function WA(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function qA(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function nl(r){return r!==""}function d_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(r){return r.replace(YA,ZA)}const jA=new Map;function ZA(r,t){let n=Se[t];if(n===void 0){const s=jA.get(t);if(s!==void 0)n=Se[s],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ap(n)}const QA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(r){return r.replace(QA,JA)}function JA(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function g_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const KA={[tu]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function $A(r){return KA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t2={[Ls]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function e2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":t2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const n2={[kr]:"ENVMAP_MODE_REFRACTION"};function i2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":n2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const a2={[b_]:"ENVMAP_BLENDING_MULTIPLY",[YS]:"ENVMAP_BLENDING_MIX",[jS]:"ENVMAP_BLENDING_ADD"};function s2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":a2[r.combine]||"ENVMAP_BLENDING_NONE"}function r2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function o2(r,t,n,s){const l=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=$A(n),p=e2(n),g=i2(n),v=s2(n),x=r2(n),S=XA(n),E=WA(c),T=l.createProgram();let M,_,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nl).join(`
`),_.length>0&&(_+=`
`)):(M=[g_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),_=[g_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Se.tonemapping_pars_fragment:"",n.toneMapping!==Wi?VA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,HA("linearToOutputTexel",n.outputColorSpace),kA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nl).join(`
`)),f=ap(f),f=d_(f,n),f=p_(f,n),h=ap(h),h=d_(h,n),h=p_(h,n),f=m_(f),h=m_(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===Sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+M+f,D=O+_+h,I=u_(l,l.VERTEX_SHADER,U),F=u_(l,l.FRAGMENT_SHADER,D);l.attachShader(T,I),l.attachShader(T,F),n.index0AttributeName!==void 0?l.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(G){if(r.debug.checkShaderErrors){const V=l.getProgramInfoLog(T)||"",W=l.getShaderInfoLog(I)||"",tt=l.getShaderInfoLog(F)||"",et=V.trim(),P=W.trim(),H=tt.trim();let it=!0,St=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(it=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,I,F);else{const Mt=h_(l,I,"vertex"),L=h_(l,F,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+et+`
`+Mt+`
`+L)}else et!==""?he("WebGLProgram: Program Info Log:",et):(P===""||H==="")&&(St=!1);St&&(G.diagnostics={runnable:it,programLog:et,vertexShader:{log:P,prefix:M},fragmentShader:{log:H,prefix:_}})}l.deleteShader(I),l.deleteShader(F),Y=new su(l,T),A=qA(l,T)}let Y;this.getUniforms=function(){return Y===void 0&&B(this),Y};let A;this.getAttributes=function(){return A===void 0&&B(this),A};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,zA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=F,this}let l2=0;class c2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new u2(t),n.set(t,s)),s}}class u2{constructor(t){this.id=l2++,this.code=t,this.usedTimes=0}}function f2(r,t,n,s,l,c,f){const h=new G_,m=new c2,p=new Set,g=[],v=new Map,x=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,w,G,V,W){const tt=V.fog,et=W.geometry,P=A.isMeshStandardMaterial?V.environment:null,H=(A.isMeshStandardMaterial?n:t).get(A.envMap||P),it=H&&H.mapping===fu?H.image.height:null,St=E[A.type];A.precision!==null&&(S=l.getMaxPrecision(A.precision),S!==A.precision&&he("WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const Mt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,L=Mt!==void 0?Mt.length:0;let K=0;et.morphAttributes.position!==void 0&&(K=1),et.morphAttributes.normal!==void 0&&(K=2),et.morphAttributes.color!==void 0&&(K=3);let gt,Rt,kt,nt;if(St){const we=Hi[St];gt=we.vertexShader,Rt=we.fragmentShader}else gt=A.vertexShader,Rt=A.fragmentShader,m.update(A),kt=m.getVertexShaderID(A),nt=m.getFragmentShaderID(A);const ht=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Xt=W.isInstancedMesh===!0,qt=W.isBatchedMesh===!0,ve=!!A.map,Re=!!A.matcap,ue=!!H,_t=!!A.aoMap,Ct=!!A.lightMap,Et=!!A.bumpMap,It=!!A.normalMap,z=!!A.displacementMap,ne=!!A.emissiveMap,Gt=!!A.metalnessMap,ie=!!A.roughnessMap,Ut=A.anisotropy>0,N=A.clearcoat>0,b=A.dispersion>0,q=A.iridescence>0,ct=A.sheen>0,xt=A.transmission>0,ft=Ut&&!!A.anisotropyMap,Zt=N&&!!A.clearcoatMap,Ot=N&&!!A.clearcoatNormalMap,Qt=N&&!!A.clearcoatRoughnessMap,se=q&&!!A.iridescenceMap,dt=q&&!!A.iridescenceThicknessMap,Tt=ct&&!!A.sheenColorMap,zt=ct&&!!A.sheenRoughnessMap,Ft=!!A.specularMap,Nt=!!A.specularColorMap,_e=!!A.specularIntensityMap,j=xt&&!!A.transmissionMap,Ht=xt&&!!A.thicknessMap,wt=!!A.gradientMap,Yt=!!A.alphaMap,At=A.alphaTest>0,bt=!!A.alphaHash,Pt=!!A.extensions;let fe=Wi;A.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Fe={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:Rt,defines:A.defines,customVertexShaderID:kt,customFragmentShaderID:nt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:qt,batchingColor:qt&&W._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&W.instanceColor!==null,instancingMorph:Xt&&W.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Wr,alphaToCoverage:!!A.alphaToCoverage,map:ve,matcap:Re,envMap:ue,envMapMode:ue&&H.mapping,envMapCubeUVHeight:it,aoMap:_t,lightMap:Ct,bumpMap:Et,normalMap:It,displacementMap:z,emissiveMap:ne,normalMapObjectSpace:It&&A.normalMapType===JS,normalMapTangentSpace:It&&A.normalMapType===pp,metalnessMap:Gt,roughnessMap:ie,anisotropy:Ut,anisotropyMap:ft,clearcoat:N,clearcoatMap:Zt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Qt,dispersion:b,iridescence:q,iridescenceMap:se,iridescenceThicknessMap:dt,sheen:ct,sheenColorMap:Tt,sheenRoughnessMap:zt,specularMap:Ft,specularColorMap:Nt,specularIntensityMap:_e,transmission:xt,transmissionMap:j,thicknessMap:Ht,gradientMap:wt,opaque:A.transparent===!1&&A.blending===Br&&A.alphaToCoverage===!1,alphaMap:Yt,alphaTest:At,alphaHash:bt,combine:A.combine,mapUv:ve&&T(A.map.channel),aoMapUv:_t&&T(A.aoMap.channel),lightMapUv:Ct&&T(A.lightMap.channel),bumpMapUv:Et&&T(A.bumpMap.channel),normalMapUv:It&&T(A.normalMap.channel),displacementMapUv:z&&T(A.displacementMap.channel),emissiveMapUv:ne&&T(A.emissiveMap.channel),metalnessMapUv:Gt&&T(A.metalnessMap.channel),roughnessMapUv:ie&&T(A.roughnessMap.channel),anisotropyMapUv:ft&&T(A.anisotropyMap.channel),clearcoatMapUv:Zt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(A.sheenRoughnessMap.channel),specularMapUv:Ft&&T(A.specularMap.channel),specularColorMapUv:Nt&&T(A.specularColorMap.channel),specularIntensityMapUv:_e&&T(A.specularIntensityMap.channel),transmissionMapUv:j&&T(A.transmissionMap.channel),thicknessMapUv:Ht&&T(A.thicknessMap.channel),alphaMapUv:Yt&&T(A.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(It||Ut),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!et.attributes.uv&&(ve||Yt),fog:!!tt,useFog:A.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Dt,skinning:W.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:ve&&A.map.isVideoTexture===!0&&Ue.getTransfer(A.map.colorSpace)===Ve,decodeVideoTextureEmissive:ne&&A.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(A.emissiveMap.colorSpace)===Ve,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Gi,flipSided:A.side===Xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&A.extensions.multiDraw===!0||qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function _(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)w.push(G),w.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(O(w,A),U(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function O(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function U(A,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),A.push(h.mask)}function D(A){const w=E[A.type];let G;if(w){const V=Hi[w];G=uu.clone(V.uniforms)}else G=A.uniforms;return G}function I(A,w){let G=v.get(w);return G!==void 0?++G.usedTimes:(G=new o2(r,w,A,c),g.push(G),v.set(w,G)),G}function F(A){if(--A.usedTimes===0){const w=g.indexOf(A);g[w]=g[g.length-1],g.pop(),v.delete(A.cacheKey),A.destroy()}}function B(A){m.remove(A)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:I,releaseProgram:F,releaseShaderCache:B,programs:g,dispose:Y}}function h2(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function d2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function v_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function __(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function f(v,x,S,E,T,M){let _=r[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:T,group:M},r[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=T,_.group=M),t++,_}function h(v,x,S,E,T,M){const _=f(v,x,S,E,T,M);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):n.push(_)}function m(v,x,S,E,T,M){const _=f(v,x,S,E,T,M);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):n.unshift(_)}function p(v,x){n.length>1&&n.sort(v||d2),s.length>1&&s.sort(x||v_),l.length>1&&l.sort(x||v_)}function g(){for(let v=t,x=r.length;v<x;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function p2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new __,r.set(s,[f])):l>=c.length?(f=new __,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function m2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Z,color:new me};break;case"SpotLight":n={position:new Z,direction:new Z,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new me,groundColor:new me};break;case"RectAreaLight":n={color:new me,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=n,n}}}function g2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let v2=0;function _2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function x2(r){const t=new m2,n=g2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new tn,f=new tn;function h(p){let g=0,v=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let S=0,E=0,T=0,M=0,_=0,O=0,U=0,D=0,I=0,F=0,B=0;p.sort(_2);for(let A=0,w=p.length;A<w;A++){const G=p[A],V=G.color,W=G.intensity,tt=G.distance;let et=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Xr?et=G.shadow.map.texture:et=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=V.r*W,v+=V.g*W,x+=V.b*W;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],W);B++}else if(G.isDirectionalLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,it=n.get(G);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.directionalShadow[S]=it,s.directionalShadowMap[S]=et,s.directionalShadowMatrix[S]=G.shadow.matrix,O++}s.directional[S]=P,S++}else if(G.isSpotLight){const P=t.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(V).multiplyScalar(W),P.distance=tt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[T]=P;const H=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,H.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[T]=H.matrix,G.castShadow){const it=n.get(G);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.spotShadow[T]=it,s.spotShadowMap[T]=et,D++}T++}else if(G.isRectAreaLight){const P=t.get(G);P.color.copy(V).multiplyScalar(W),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=P,M++}else if(G.isPointLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const H=G.shadow,it=n.get(G);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,it.shadowCameraNear=H.camera.near,it.shadowCameraFar=H.camera.far,s.pointShadow[E]=it,s.pointShadowMap[E]=et,s.pointShadowMatrix[E]=G.shadow.matrix,U++}s.point[E]=P,E++}else if(G.isHemisphereLight){const P=t.get(G);P.skyColor.copy(G.color).multiplyScalar(W),P.groundColor.copy(G.groundColor).multiplyScalar(W),s.hemi[_]=P,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const Y=s.hash;(Y.directionalLength!==S||Y.pointLength!==E||Y.spotLength!==T||Y.rectAreaLength!==M||Y.hemiLength!==_||Y.numDirectionalShadows!==O||Y.numPointShadows!==U||Y.numSpotShadows!==D||Y.numSpotMaps!==I||Y.numLightProbes!==B)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+I-F,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=B,Y.directionalLength=S,Y.pointLength=E,Y.spotLength=T,Y.rectAreaLength=M,Y.hemiLength=_,Y.numDirectionalShadows=O,Y.numPointShadows=U,Y.numSpotShadows=D,Y.numSpotMaps=I,Y.numLightProbes=B,s.version=v2++)}function m(p,g){let v=0,x=0,S=0,E=0,T=0;const M=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const U=p[_];if(U.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(U.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:s}}function x_(r){const t=new x2(r),n=[],s=[];function l(g){p.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function y2(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new x_(r),t.set(l,[h])):c>=f.length?(h=new x_(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const S2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M2=`uniform sampler2D shadow_pass;
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
}`,b2=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],E2=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],y_=new tn,$o=new Z,rd=new Z;function T2(r,t,n){let s=new yp;const l=new Lt,c=new Lt,f=new rn,h=new Lb,m=new Ob,p={},g=n.maxTextureSize,v={[ns]:Xn,[Xn]:ns,[Gi]:Gi},x=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:S2,fragmentShader:M2}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Mn;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new $e(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let _=this.type;this.render=function(F,B,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===RS&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=tu);const A=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Xi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=_!==this.type;W&&B.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(et=>et.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,et=F.length;tt<et;tt++){const P=F[tt],H=P.shadow;if(H===void 0){he("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const it=H.getFrameExtents();if(l.multiply(it),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/it.x),l.x=c.x*it.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/it.y),l.y=c.y*it.y,H.mapSize.y=c.y)),H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===tl){if(P.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Kn(l.x,l.y,{format:Xr,type:ci,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new fl(l.x,l.y,Vi),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Sa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln}else{P.isPointLight?(H.map=new j_(l.x),H.map.depthTexture=new JM(l.x,qi)):(H.map=new Kn(l.x,l.y),H.map.depthTexture=new fl(l.x,l.y,qi)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Sa;const Mt=r.state.buffers.depth.getReversed();this.type===tu?(H.map.depthTexture.compareFunction=Mt?gp:mp,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln)}H.camera.updateProjectionMatrix()}const St=H.map.isWebGLCubeRenderTarget?6:1;for(let Mt=0;Mt<St;Mt++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,Mt),r.clear();else{Mt===0&&(r.setRenderTarget(H.map),r.clear());const L=H.getViewport(Mt);f.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),V.viewport(f)}if(P.isPointLight){const L=H.camera,K=H.matrix,gt=P.distance||L.far;gt!==L.far&&(L.far=gt,L.updateProjectionMatrix()),$o.setFromMatrixPosition(P.matrixWorld),L.position.copy($o),rd.copy(L.position),rd.add(b2[Mt]),L.up.copy(E2[Mt]),L.lookAt(rd),L.updateMatrixWorld(),K.makeTranslation(-$o.x,-$o.y,-$o.z),y_.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),H._frustum.setFromProjectionMatrix(y_,L.coordinateSystem,L.reversedDepth)}else H.updateMatrices(P);s=H.getFrustum(),D(B,Y,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===tl&&O(H,Y),H.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(A,w,G)};function O(F,B){const Y=t.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Kn(l.x,l.y,{format:Xr,type:ci})),x.uniforms.shadow_pass.value=F.map.depthTexture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(B,null,Y,x,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(B,null,Y,S,T,null)}function U(F,B,Y,A){let w=null;const G=Y.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)w=G;else if(w=Y.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const V=w.uuid,W=B.uuid;let tt=p[V];tt===void 0&&(tt={},p[V]=tt);let et=tt[W];et===void 0&&(et=w.clone(),tt[W]=et,B.addEventListener("dispose",I)),w=et}if(w.visible=B.visible,w.wireframe=B.wireframe,A===tl?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:v[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=r.properties.get(w);V.light=Y}return w}function D(F,B,Y,A,w){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===tl)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,F.matrixWorld);const W=t.update(F),tt=F.material;if(Array.isArray(tt)){const et=W.groups;for(let P=0,H=et.length;P<H;P++){const it=et[P],St=tt[it.materialIndex];if(St&&St.visible){const Mt=U(F,St,A,w);F.onBeforeShadow(r,F,B,Y,W,Mt,it),r.renderBufferDirect(Y,null,W,Mt,F,it),F.onAfterShadow(r,F,B,Y,W,Mt,it)}}}else if(tt.visible){const et=U(F,tt,A,w);F.onBeforeShadow(r,F,B,Y,W,et,null),r.renderBufferDirect(Y,null,W,et,F,null),F.onAfterShadow(r,F,B,Y,W,et,null)}}const V=F.children;for(let W=0,tt=V.length;W<tt;W++)D(V[W],B,Y,A,w)}function I(F){F.target.removeEventListener("dispose",I);for(const Y in p){const A=p[Y],w=F.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const A2={[cd]:ud,[fd]:pd,[hd]:md,[Vr]:dd,[ud]:cd,[pd]:fd,[md]:hd,[dd]:Vr};function C2(r,t){function n(){let j=!1;const Ht=new rn;let wt=null;const Yt=new rn(0,0,0,0);return{setMask:function(At){wt!==At&&!j&&(r.colorMask(At,At,At,At),wt=At)},setLocked:function(At){j=At},setClear:function(At,bt,Pt,fe,Fe){Fe===!0&&(At*=fe,bt*=fe,Pt*=fe),Ht.set(At,bt,Pt,fe),Yt.equals(Ht)===!1&&(r.clearColor(At,bt,Pt,fe),Yt.copy(Ht))},reset:function(){j=!1,wt=null,Yt.set(-1,0,0,0)}}}function s(){let j=!1,Ht=!1,wt=null,Yt=null,At=null;return{setReversed:function(bt){if(Ht!==bt){const Pt=t.get("EXT_clip_control");bt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),Ht=bt;const fe=At;At=null,this.setClear(fe)}},getReversed:function(){return Ht},setTest:function(bt){bt?ht(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(bt){wt!==bt&&!j&&(r.depthMask(bt),wt=bt)},setFunc:function(bt){if(Ht&&(bt=A2[bt]),Yt!==bt){switch(bt){case cd:r.depthFunc(r.NEVER);break;case ud:r.depthFunc(r.ALWAYS);break;case fd:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case hd:r.depthFunc(r.EQUAL);break;case dd:r.depthFunc(r.GEQUAL);break;case pd:r.depthFunc(r.GREATER);break;case md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Yt=bt}},setLocked:function(bt){j=bt},setClear:function(bt){At!==bt&&(Ht&&(bt=1-bt),r.clearDepth(bt),At=bt)},reset:function(){j=!1,wt=null,Yt=null,At=null,Ht=!1}}}function l(){let j=!1,Ht=null,wt=null,Yt=null,At=null,bt=null,Pt=null,fe=null,Fe=null;return{setTest:function(we){j||(we?ht(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(we){Ht!==we&&!j&&(r.stencilMask(we),Ht=we)},setFunc:function(we,On,Mi){(wt!==we||Yt!==On||At!==Mi)&&(r.stencilFunc(we,On,Mi),wt=we,Yt=On,At=Mi)},setOp:function(we,On,Mi){(bt!==we||Pt!==On||fe!==Mi)&&(r.stencilOp(we,On,Mi),bt=we,Pt=On,fe=Mi)},setLocked:function(we){j=we},setClear:function(we){Fe!==we&&(r.clearStencil(we),Fe=we)},reset:function(){j=!1,Ht=null,wt=null,Yt=null,At=null,bt=null,Pt=null,fe=null,Fe=null}}}const c=new n,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],E=null,T=!1,M=null,_=null,O=null,U=null,D=null,I=null,F=null,B=new me(0,0,0),Y=0,A=!1,w=null,G=null,V=null,W=null,tt=null;const et=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const it=r.getParameter(r.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),P=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),P=H>=2);let St=null,Mt={};const L=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),gt=new rn().fromArray(L),Rt=new rn().fromArray(K);function kt(j,Ht,wt,Yt){const At=new Uint8Array(4),bt=r.createTexture();r.bindTexture(j,bt),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pt=0;Pt<wt;Pt++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Ht,0,r.RGBA,1,1,Yt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Ht+Pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return bt}const nt={};nt[r.TEXTURE_2D]=kt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=kt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=kt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=kt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ht(r.DEPTH_TEST),f.setFunc(Vr),Et(!1),It(gv),ht(r.CULL_FACE),_t(Xi);function ht(j){g[j]!==!0&&(r.enable(j),g[j]=!0)}function Dt(j){g[j]!==!1&&(r.disable(j),g[j]=!1)}function Xt(j,Ht){return v[j]!==Ht?(r.bindFramebuffer(j,Ht),v[j]=Ht,j===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ht),j===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ht),!0):!1}function qt(j,Ht){let wt=S,Yt=!1;if(j){wt=x.get(Ht),wt===void 0&&(wt=[],x.set(Ht,wt));const At=j.textures;if(wt.length!==At.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let bt=0,Pt=At.length;bt<Pt;bt++)wt[bt]=r.COLOR_ATTACHMENT0+bt;wt.length=At.length,Yt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Yt=!0);Yt&&r.drawBuffers(wt)}function ve(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const Re={[ws]:r.FUNC_ADD,[DS]:r.FUNC_SUBTRACT,[US]:r.FUNC_REVERSE_SUBTRACT};Re[NS]=r.MIN,Re[LS]=r.MAX;const ue={[OS]:r.ZERO,[PS]:r.ONE,[zS]:r.SRC_COLOR,[od]:r.SRC_ALPHA,[VS]:r.SRC_ALPHA_SATURATE,[HS]:r.DST_COLOR,[FS]:r.DST_ALPHA,[IS]:r.ONE_MINUS_SRC_COLOR,[ld]:r.ONE_MINUS_SRC_ALPHA,[GS]:r.ONE_MINUS_DST_COLOR,[BS]:r.ONE_MINUS_DST_ALPHA,[kS]:r.CONSTANT_COLOR,[XS]:r.ONE_MINUS_CONSTANT_COLOR,[WS]:r.CONSTANT_ALPHA,[qS]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(j,Ht,wt,Yt,At,bt,Pt,fe,Fe,we){if(j===Xi){T===!0&&(Dt(r.BLEND),T=!1);return}if(T===!1&&(ht(r.BLEND),T=!0),j!==wS){if(j!==M||we!==A){if((_!==ws||D!==ws)&&(r.blendEquation(r.FUNC_ADD),_=ws,D=ws),we)switch(j){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFunc(r.ONE,r.ONE);break;case vv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _v:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",j);break}else switch(j){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vv:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _v:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",j);break}O=null,U=null,I=null,F=null,B.set(0,0,0),Y=0,M=j,A=we}return}At=At||Ht,bt=bt||wt,Pt=Pt||Yt,(Ht!==_||At!==D)&&(r.blendEquationSeparate(Re[Ht],Re[At]),_=Ht,D=At),(wt!==O||Yt!==U||bt!==I||Pt!==F)&&(r.blendFuncSeparate(ue[wt],ue[Yt],ue[bt],ue[Pt]),O=wt,U=Yt,I=bt,F=Pt),(fe.equals(B)===!1||Fe!==Y)&&(r.blendColor(fe.r,fe.g,fe.b,Fe),B.copy(fe),Y=Fe),M=j,A=!1}function Ct(j,Ht){j.side===Gi?Dt(r.CULL_FACE):ht(r.CULL_FACE);let wt=j.side===Xn;Ht&&(wt=!wt),Et(wt),j.blending===Br&&j.transparent===!1?_t(Xi):_t(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const Yt=j.stencilWrite;h.setTest(Yt),Yt&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ne(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Et(j){w!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),w=j)}function It(j){j!==AS?(ht(r.CULL_FACE),j!==G&&(j===gv?r.cullFace(r.BACK):j===CS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),G=j}function z(j){j!==V&&(P&&r.lineWidth(j),V=j)}function ne(j,Ht,wt){j?(ht(r.POLYGON_OFFSET_FILL),(W!==Ht||tt!==wt)&&(r.polygonOffset(Ht,wt),W=Ht,tt=wt)):Dt(r.POLYGON_OFFSET_FILL)}function Gt(j){j?ht(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function ie(j){j===void 0&&(j=r.TEXTURE0+et-1),St!==j&&(r.activeTexture(j),St=j)}function Ut(j,Ht,wt){wt===void 0&&(St===null?wt=r.TEXTURE0+et-1:wt=St);let Yt=Mt[wt];Yt===void 0&&(Yt={type:void 0,texture:void 0},Mt[wt]=Yt),(Yt.type!==j||Yt.texture!==Ht)&&(St!==wt&&(r.activeTexture(wt),St=wt),r.bindTexture(j,Ht||nt[j]),Yt.type=j,Yt.texture=Ht)}function N(){const j=Mt[St];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(j){De("WebGLState:",j)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(j){De("WebGLState:",j)}}function ct(){try{r.texSubImage2D(...arguments)}catch(j){De("WebGLState:",j)}}function xt(){try{r.texSubImage3D(...arguments)}catch(j){De("WebGLState:",j)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(j){De("WebGLState:",j)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(j){De("WebGLState:",j)}}function Ot(){try{r.texStorage2D(...arguments)}catch(j){De("WebGLState:",j)}}function Qt(){try{r.texStorage3D(...arguments)}catch(j){De("WebGLState:",j)}}function se(){try{r.texImage2D(...arguments)}catch(j){De("WebGLState:",j)}}function dt(){try{r.texImage3D(...arguments)}catch(j){De("WebGLState:",j)}}function Tt(j){gt.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),gt.copy(j))}function zt(j){Rt.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Rt.copy(j))}function Ft(j,Ht){let wt=p.get(Ht);wt===void 0&&(wt=new WeakMap,p.set(Ht,wt));let Yt=wt.get(j);Yt===void 0&&(Yt=r.getUniformBlockIndex(Ht,j.name),wt.set(j,Yt))}function Nt(j,Ht){const Yt=p.get(Ht).get(j);m.get(Ht)!==Yt&&(r.uniformBlockBinding(Ht,Yt,j.__bindingPointIndex),m.set(Ht,Yt))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,Mt={},v={},x=new WeakMap,S=[],E=null,T=!1,M=null,_=null,O=null,U=null,D=null,I=null,F=null,B=new me(0,0,0),Y=0,A=!1,w=null,G=null,V=null,W=null,tt=null,gt.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ht,disable:Dt,bindFramebuffer:Xt,drawBuffers:qt,useProgram:ve,setBlending:_t,setMaterial:Ct,setFlipSided:Et,setCullFace:It,setLineWidth:z,setPolygonOffset:ne,setScissorTest:Gt,activeTexture:ie,bindTexture:Ut,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:se,texImage3D:dt,updateUBOMapping:Ft,uniformBlockBinding:Nt,texStorage2D:Ot,texStorage3D:Qt,texSubImage2D:ct,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Zt,scissor:Tt,viewport:zt,reset:_e}}function R2(r,t,n,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return S?new OffscreenCanvas(N,b):cu("canvas")}function T(N,b,q){let ct=1;const xt=Ut(N);if((xt.width>q||xt.height>q)&&(ct=q/Math.max(xt.width,xt.height)),ct<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(ct*xt.width),Zt=Math.floor(ct*xt.height);v===void 0&&(v=E(ft,Zt));const Ot=b?E(ft,Zt):v;return Ot.width=ft,Ot.height=Zt,Ot.getContext("2d").drawImage(N,0,0,ft,Zt),he("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ft+"x"+Zt+")."),Ot}else return"data"in N&&he("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,b,q,ct,xt=!1){if(N!==null){if(r[N]!==void 0)return r[N];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=b;if(b===r.RED&&(q===r.FLOAT&&(ft=r.R32F),q===r.HALF_FLOAT&&(ft=r.R16F),q===r.UNSIGNED_BYTE&&(ft=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.R8UI),q===r.UNSIGNED_SHORT&&(ft=r.R16UI),q===r.UNSIGNED_INT&&(ft=r.R32UI),q===r.BYTE&&(ft=r.R8I),q===r.SHORT&&(ft=r.R16I),q===r.INT&&(ft=r.R32I)),b===r.RG&&(q===r.FLOAT&&(ft=r.RG32F),q===r.HALF_FLOAT&&(ft=r.RG16F),q===r.UNSIGNED_BYTE&&(ft=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RG8UI),q===r.UNSIGNED_SHORT&&(ft=r.RG16UI),q===r.UNSIGNED_INT&&(ft=r.RG32UI),q===r.BYTE&&(ft=r.RG8I),q===r.SHORT&&(ft=r.RG16I),q===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),q===r.UNSIGNED_INT&&(ft=r.RGB32UI),q===r.BYTE&&(ft=r.RGB8I),q===r.SHORT&&(ft=r.RGB16I),q===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),q===r.UNSIGNED_INT&&(ft=r.RGBA32UI),q===r.BYTE&&(ft=r.RGBA8I),q===r.SHORT&&(ft=r.RGBA16I),q===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const Zt=xt?ou:Ue.getTransfer(ct);q===r.FLOAT&&(ft=r.RGBA32F),q===r.HALF_FLOAT&&(ft=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ft=Zt===Ve?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(N,b){let q;return N?b===null||b===qi||b===cl?q=r.DEPTH24_STENCIL8:b===Vi?q=r.DEPTH32F_STENCIL8:b===ll&&(q=r.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===cl?q=r.DEPTH_COMPONENT24:b===Vi?q=r.DEPTH_COMPONENT32F:b===ll&&(q=r.DEPTH_COMPONENT16),q}function I(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function F(N){const b=N.target;b.removeEventListener("dispose",F),Y(b),b.isVideoTexture&&g.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),w(b)}function Y(N){const b=s.get(N);if(b.__webglInit===void 0)return;const q=N.source,ct=x.get(q);if(ct){const xt=ct[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&A(N),Object.keys(ct).length===0&&x.delete(q)}s.remove(N)}function A(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const q=N.source,ct=x.get(q);delete ct[b.__cacheKey],f.memory.textures--}function w(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(b.__webglFramebuffer[ct]))for(let xt=0;xt<b.__webglFramebuffer[ct].length;xt++)r.deleteFramebuffer(b.__webglFramebuffer[ct][xt]);else r.deleteFramebuffer(b.__webglFramebuffer[ct]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ct])}else{if(Array.isArray(b.__webglFramebuffer))for(let ct=0;ct<b.__webglFramebuffer.length;ct++)r.deleteFramebuffer(b.__webglFramebuffer[ct]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ct=0;ct<b.__webglColorRenderbuffer.length;ct++)b.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ct]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=N.textures;for(let ct=0,xt=q.length;ct<xt;ct++){const ft=s.get(q[ct]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),f.memory.textures--),s.remove(q[ct])}s.remove(N)}let G=0;function V(){G=0}function W(){const N=G;return N>=l.maxTextures&&he("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function tt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function et(N,b){const q=s.get(N);if(N.isVideoTexture&&Gt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const ct=N.image;if(ct===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,N,b);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function P(N,b){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,b);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function H(N,b){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,b);return}n.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function it(N,b){const q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){ht(q,N,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const St={[_d]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[xd]:r.MIRRORED_REPEAT},Mt={[Ln]:r.NEAREST,[ZS]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Rh]:r.LINEAR_MIPMAP_NEAREST,[Us]:r.LINEAR_MIPMAP_LINEAR},L={[KS]:r.NEVER,[iM]:r.ALWAYS,[$S]:r.LESS,[mp]:r.LEQUAL,[tM]:r.EQUAL,[gp]:r.GEQUAL,[eM]:r.GREATER,[nM]:r.NOTEQUAL};function K(N,b){if(b.type===Vi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Rh||b.magFilter===wc||b.magFilter===Us||b.minFilter===Fn||b.minFilter===Rh||b.minFilter===wc||b.minFilter===Us)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,St[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,St[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,St[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Mt[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==wc&&b.minFilter!==Us||b.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function gt(N,b){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",F));const ct=b.source;let xt=x.get(ct);xt===void 0&&(xt={},x.set(ct,xt));const ft=tt(b);if(ft!==N.__cacheKey){xt[ft]===void 0&&(xt[ft]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,q=!0),xt[ft].usedTimes++;const Zt=xt[N.__cacheKey];Zt!==void 0&&(xt[N.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(b)),N.__cacheKey=ft,N.__webglTexture=xt[ft].texture}return q}function Rt(N,b,q){return Math.floor(Math.floor(N/q)/b)}function kt(N,b,q,ct){const ft=N.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,q,ct,b.data);else{ft.sort((dt,Tt)=>dt.start-Tt.start);let Zt=0;for(let dt=1;dt<ft.length;dt++){const Tt=ft[Zt],zt=ft[dt],Ft=Tt.start+Tt.count,Nt=Rt(zt.start,b.width,4),_e=Rt(Tt.start,b.width,4);zt.start<=Ft+1&&Nt===_e&&Rt(zt.start+zt.count-1,b.width,4)===Nt?Tt.count=Math.max(Tt.count,zt.start+zt.count-Tt.start):(++Zt,ft[Zt]=zt)}ft.length=Zt+1;const Ot=r.getParameter(r.UNPACK_ROW_LENGTH),Qt=r.getParameter(r.UNPACK_SKIP_PIXELS),se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let dt=0,Tt=ft.length;dt<Tt;dt++){const zt=ft[dt],Ft=Math.floor(zt.start/4),Nt=Math.ceil(zt.count/4),_e=Ft%b.width,j=Math.floor(Ft/b.width),Ht=Nt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),n.texSubImage2D(r.TEXTURE_2D,0,_e,j,Ht,wt,q,ct,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function nt(N,b,q){let ct=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=r.TEXTURE_3D);const xt=gt(N,b),ft=b.source;n.bindTexture(ct,N.__webglTexture,r.TEXTURE0+q);const Zt=s.get(ft);if(ft.version!==Zt.__version||xt===!0){n.activeTexture(r.TEXTURE0+q);const Ot=Ue.getPrimaries(Ue.workingColorSpace),Qt=b.colorSpace===ts?null:Ue.getPrimaries(b.colorSpace),se=b.colorSpace===ts||Ot===Qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let dt=T(b.image,!1,l.maxTextureSize);dt=ie(b,dt);const Tt=c.convert(b.format,b.colorSpace),zt=c.convert(b.type);let Ft=U(b.internalFormat,Tt,zt,b.colorSpace,b.isVideoTexture);K(ct,b);let Nt;const _e=b.mipmaps,j=b.isVideoTexture!==!0,Ht=Zt.__version===void 0||xt===!0,wt=ft.dataReady,Yt=I(b,dt);if(b.isDepthTexture)Ft=D(b.format===Ns,b.type),Ht&&(j?n.texStorage2D(r.TEXTURE_2D,1,Ft,dt.width,dt.height):n.texImage2D(r.TEXTURE_2D,0,Ft,dt.width,dt.height,0,Tt,zt,null));else if(b.isDataTexture)if(_e.length>0){j&&Ht&&n.texStorage2D(r.TEXTURE_2D,Yt,Ft,_e[0].width,_e[0].height);for(let At=0,bt=_e.length;At<bt;At++)Nt=_e[At],j?wt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Nt.width,Nt.height,Tt,zt,Nt.data):n.texImage2D(r.TEXTURE_2D,At,Ft,Nt.width,Nt.height,0,Tt,zt,Nt.data);b.generateMipmaps=!1}else j?(Ht&&n.texStorage2D(r.TEXTURE_2D,Yt,Ft,dt.width,dt.height),wt&&kt(b,dt,Tt,zt)):n.texImage2D(r.TEXTURE_2D,0,Ft,dt.width,dt.height,0,Tt,zt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Ht&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Yt,Ft,_e[0].width,_e[0].height,dt.depth);for(let At=0,bt=_e.length;At<bt;At++)if(Nt=_e[At],b.format!==Ni)if(Tt!==null)if(j){if(wt)if(b.layerUpdates.size>0){const Pt=Jv(Nt.width,Nt.height,b.format,b.type);for(const fe of b.layerUpdates){const Fe=Nt.data.subarray(fe*Pt/Nt.data.BYTES_PER_ELEMENT,(fe+1)*Pt/Nt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,fe,Nt.width,Nt.height,1,Tt,Fe)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Nt.width,Nt.height,dt.depth,Tt,Nt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Ft,Nt.width,Nt.height,dt.depth,0,Nt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?wt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Nt.width,Nt.height,dt.depth,Tt,zt,Nt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,At,Ft,Nt.width,Nt.height,dt.depth,0,Tt,zt,Nt.data)}else{j&&Ht&&n.texStorage2D(r.TEXTURE_2D,Yt,Ft,_e[0].width,_e[0].height);for(let At=0,bt=_e.length;At<bt;At++)Nt=_e[At],b.format!==Ni?Tt!==null?j?wt&&n.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Nt.width,Nt.height,Tt,Nt.data):n.compressedTexImage2D(r.TEXTURE_2D,At,Ft,Nt.width,Nt.height,0,Nt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?wt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Nt.width,Nt.height,Tt,zt,Nt.data):n.texImage2D(r.TEXTURE_2D,At,Ft,Nt.width,Nt.height,0,Tt,zt,Nt.data)}else if(b.isDataArrayTexture)if(j){if(Ht&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Yt,Ft,dt.width,dt.height,dt.depth),wt)if(b.layerUpdates.size>0){const At=Jv(dt.width,dt.height,b.format,b.type);for(const bt of b.layerUpdates){const Pt=dt.data.subarray(bt*At/dt.data.BYTES_PER_ELEMENT,(bt+1)*At/dt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,bt,dt.width,dt.height,1,Tt,zt,Pt)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Tt,zt,dt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,dt.width,dt.height,dt.depth,0,Tt,zt,dt.data);else if(b.isData3DTexture)j?(Ht&&n.texStorage3D(r.TEXTURE_3D,Yt,Ft,dt.width,dt.height,dt.depth),wt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Tt,zt,dt.data)):n.texImage3D(r.TEXTURE_3D,0,Ft,dt.width,dt.height,dt.depth,0,Tt,zt,dt.data);else if(b.isFramebufferTexture){if(Ht)if(j)n.texStorage2D(r.TEXTURE_2D,Yt,Ft,dt.width,dt.height);else{let At=dt.width,bt=dt.height;for(let Pt=0;Pt<Yt;Pt++)n.texImage2D(r.TEXTURE_2D,Pt,Ft,At,bt,0,Tt,zt,null),At>>=1,bt>>=1}}else if(_e.length>0){if(j&&Ht){const At=Ut(_e[0]);n.texStorage2D(r.TEXTURE_2D,Yt,Ft,At.width,At.height)}for(let At=0,bt=_e.length;At<bt;At++)Nt=_e[At],j?wt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Tt,zt,Nt):n.texImage2D(r.TEXTURE_2D,At,Ft,Tt,zt,Nt);b.generateMipmaps=!1}else if(j){if(Ht){const At=Ut(dt);n.texStorage2D(r.TEXTURE_2D,Yt,Ft,At.width,At.height)}wt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,zt,dt)}else n.texImage2D(r.TEXTURE_2D,0,Ft,Tt,zt,dt);M(b)&&_(ct),Zt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ht(N,b,q){if(b.image.length!==6)return;const ct=gt(N,b),xt=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+q);const ft=s.get(xt);if(xt.version!==ft.__version||ct===!0){n.activeTexture(r.TEXTURE0+q);const Zt=Ue.getPrimaries(Ue.workingColorSpace),Ot=b.colorSpace===ts?null:Ue.getPrimaries(b.colorSpace),Qt=b.colorSpace===ts||Zt===Ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const se=b.isCompressedTexture||b.image[0].isCompressedTexture,dt=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let bt=0;bt<6;bt++)!se&&!dt?Tt[bt]=T(b.image[bt],!0,l.maxCubemapSize):Tt[bt]=dt?b.image[bt].image:b.image[bt],Tt[bt]=ie(b,Tt[bt]);const zt=Tt[0],Ft=c.convert(b.format,b.colorSpace),Nt=c.convert(b.type),_e=U(b.internalFormat,Ft,Nt,b.colorSpace),j=b.isVideoTexture!==!0,Ht=ft.__version===void 0||ct===!0,wt=xt.dataReady;let Yt=I(b,zt);K(r.TEXTURE_CUBE_MAP,b);let At;if(se){j&&Ht&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Yt,_e,zt.width,zt.height);for(let bt=0;bt<6;bt++){At=Tt[bt].mipmaps;for(let Pt=0;Pt<At.length;Pt++){const fe=At[Pt];b.format!==Ni?Ft!==null?j?wt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt,0,0,fe.width,fe.height,Ft,fe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt,_e,fe.width,fe.height,0,fe.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt,0,0,fe.width,fe.height,Ft,Nt,fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt,_e,fe.width,fe.height,0,Ft,Nt,fe.data)}}}else{if(At=b.mipmaps,j&&Ht){At.length>0&&Yt++;const bt=Ut(Tt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Yt,_e,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(dt){j?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Tt[bt].width,Tt[bt].height,Ft,Nt,Tt[bt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,_e,Tt[bt].width,Tt[bt].height,0,Ft,Nt,Tt[bt].data);for(let Pt=0;Pt<At.length;Pt++){const Fe=At[Pt].image[bt].image;j?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt+1,0,0,Fe.width,Fe.height,Ft,Nt,Fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt+1,_e,Fe.width,Fe.height,0,Ft,Nt,Fe.data)}}else{j?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ft,Nt,Tt[bt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,_e,Ft,Nt,Tt[bt]);for(let Pt=0;Pt<At.length;Pt++){const fe=At[Pt];j?wt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt+1,0,0,Ft,Nt,fe.image[bt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt+1,_e,Ft,Nt,fe.image[bt])}}}M(b)&&_(r.TEXTURE_CUBE_MAP),ft.__version=xt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Dt(N,b,q,ct,xt,ft){const Zt=c.convert(q.format,q.colorSpace),Ot=c.convert(q.type),Qt=U(q.internalFormat,Zt,Ot,q.colorSpace),se=s.get(b),dt=s.get(q);if(dt.__renderTarget=b,!se.__hasExternalTextures){const Tt=Math.max(1,b.width>>ft),zt=Math.max(1,b.height>>ft);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?n.texImage3D(xt,ft,Qt,Tt,zt,b.depth,0,Zt,Ot,null):n.texImage2D(xt,ft,Qt,Tt,zt,0,Zt,Ot,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),ne(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,xt,dt.__webglTexture,0,z(b)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,xt,dt.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(N,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const ct=b.depthTexture,xt=ct&&ct.isDepthTexture?ct.type:null,ft=D(b.stencilBuffer,xt),Zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ne(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(b),ft,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(b),ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,N)}else{const ct=b.textures;for(let xt=0;xt<ct.length;xt++){const ft=ct[xt],Zt=c.convert(ft.format,ft.colorSpace),Ot=c.convert(ft.type),Qt=U(ft.internalFormat,Zt,Ot,ft.colorSpace);ne(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(b),Qt,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(b),Qt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Qt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qt(N,b,q){const ct=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(b.depthTexture);if(xt.__renderTarget=b,(!xt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),xt.__webglTexture===void 0){xt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),K(r.TEXTURE_CUBE_MAP,b.depthTexture);const se=c.convert(b.depthTexture.format),dt=c.convert(b.depthTexture.type);let Tt;b.depthTexture.format===Sa?Tt=r.DEPTH_COMPONENT24:b.depthTexture.format===Ns&&(Tt=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Tt,b.width,b.height,0,se,dt,null)}}else et(b.depthTexture,0);const ft=xt.__webglTexture,Zt=z(b),Ot=ct?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Qt=b.depthTexture.format===Ns?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Sa)ne(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Qt,Ot,ft,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Qt,Ot,ft,0);else if(b.depthTexture.format===Ns)ne(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Qt,Ot,ft,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Qt,Ot,ft,0);else throw new Error("Unknown depthTexture format")}function ve(N){const b=s.get(N),q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ct=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ct){const xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ct.removeEventListener("dispose",xt)};ct.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=ct}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let ct=0;ct<6;ct++)qt(b.__webglFramebuffer[ct],N,ct);else{const ct=N.texture.mipmaps;ct&&ct.length>0?qt(b.__webglFramebuffer[0],N,0):qt(b.__webglFramebuffer,N,0)}else if(q){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]===void 0)b.__webglDepthbuffer[ct]=r.createRenderbuffer(),Xt(b.__webglDepthbuffer[ct],N,!1);else{const xt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ft)}}else{const ct=N.texture.mipmaps;if(ct&&ct.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xt(b.__webglDepthbuffer,N,!1);else{const xt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(N,b,q){const ct=s.get(N);b!==void 0&&Dt(ct.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&ve(N)}function ue(N){const b=N.texture,q=s.get(N),ct=s.get(b);N.addEventListener("dispose",B);const xt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,Zt=xt.length>1;if(Zt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=b.version,f.memory.textures++),ft){q.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Ot]=[];for(let Qt=0;Qt<b.mipmaps.length;Qt++)q.__webglFramebuffer[Ot][Qt]=r.createFramebuffer()}else q.__webglFramebuffer[Ot]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ot=0;Ot<b.mipmaps.length;Ot++)q.__webglFramebuffer[Ot]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Ot=0,Qt=xt.length;Ot<Qt;Ot++){const se=s.get(xt[Ot]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&ne(N)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ot=0;Ot<xt.length;Ot++){const Qt=xt[Ot];q.__webglColorRenderbuffer[Ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Ot]);const se=c.convert(Qt.format,Qt.colorSpace),dt=c.convert(Qt.type),Tt=U(Qt.internalFormat,se,dt,Qt.colorSpace,N.isXRRenderTarget===!0),zt=z(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Tt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,q.__webglColorRenderbuffer[Ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),K(r.TEXTURE_CUBE_MAP,b);for(let Ot=0;Ot<6;Ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Dt(q.__webglFramebuffer[Ot][Qt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Qt);else Dt(q.__webglFramebuffer[Ot],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);M(b)&&_(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Ot=0,Qt=xt.length;Ot<Qt;Ot++){const se=xt[Ot],dt=s.get(se);let Tt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Tt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Tt,dt.__webglTexture),K(Tt,se),Dt(q.__webglFramebuffer,N,se,r.COLOR_ATTACHMENT0+Ot,Tt,0),M(se)&&_(Tt)}n.unbindTexture()}else{let Ot=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ot=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ot,ct.__webglTexture),K(Ot,b),b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Dt(q.__webglFramebuffer[Qt],N,b,r.COLOR_ATTACHMENT0,Ot,Qt);else Dt(q.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Ot,0);M(b)&&_(Ot),n.unbindTexture()}N.depthBuffer&&ve(N)}function _t(N){const b=N.textures;for(let q=0,ct=b.length;q<ct;q++){const xt=b[q];if(M(xt)){const ft=O(N),Zt=s.get(xt).__webglTexture;n.bindTexture(ft,Zt),_(ft),n.unbindTexture()}}}const Ct=[],Et=[];function It(N){if(N.samples>0){if(ne(N)===!1){const b=N.textures,q=N.width,ct=N.height;let xt=r.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(N),Ot=b.length>1;if(Ot)for(let se=0;se<b.length;se++)n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Qt=N.texture.mipmaps;Qt&&Qt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let se=0;se<b.length;se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[se]);const dt=s.get(b[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,dt,0)}r.blitFramebuffer(0,0,q,ct,0,0,q,ct,xt,r.NEAREST),m===!0&&(Ct.length=0,Et.length=0,Ct.push(r.COLOR_ATTACHMENT0+se),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ct.push(ft),Et.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Et)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ot)for(let se=0;se<b.length;se++){n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[se]);const dt=s.get(b[se]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,dt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function z(N){return Math.min(l.maxSamples,N.samples)}function ne(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Gt(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function ie(N,b){const q=N.colorSpace,ct=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Wr&&q!==ts&&(Ue.getTransfer(q)===Ve?(ct!==Ni||xt!==li)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",q)),b}function Ut(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=et,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=Re,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function w2(r,t){function n(s,l=ts){let c;const f=Ue.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===cp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===up)return r.UNSIGNED_SHORT_5_5_5_1;if(s===L_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===O_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===U_)return r.BYTE;if(s===N_)return r.SHORT;if(s===ll)return r.UNSIGNED_SHORT;if(s===lp)return r.INT;if(s===qi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===ci)return r.HALF_FLOAT;if(s===P_)return r.ALPHA;if(s===z_)return r.RGB;if(s===Ni)return r.RGBA;if(s===Sa)return r.DEPTH_COMPONENT;if(s===Ns)return r.DEPTH_STENCIL;if(s===I_)return r.RED;if(s===fp)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===hp)return r.RG_INTEGER;if(s===dp)return r.RGBA_INTEGER;if(s===eu||s===nu||s===iu||s===au)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yd||s===Sd||s===Md||s===bd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ed||s===Td||s===Ad||s===Cd||s===Rd||s===wd||s===Dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ed||s===Td)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ad)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Cd)return c.COMPRESSED_R11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===wd)return c.COMPRESSED_RG11_EAC;if(s===Dd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ud)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ld)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Od)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Id)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wd||s===qd||s===Yd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Wd)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jd||s===Zd||s===Qd||s===Jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===jd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const D2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U2=`
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

}`;class N2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new Q_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Bn({vertexShader:D2,fragmentShader:U2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $e(new du(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L2 extends Qr{constructor(t,n){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",M=new N2,_={},O=n.getContextAttributes();let U=null,D=null;const I=[],F=[],B=new Lt;let Y=null;const A=new Jn;A.viewport=new rn;const w=new Jn;w.viewport=new rn;const G=[A,w],V=new Vb;let W=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=I[nt];return ht===void 0&&(ht=new Zh,I[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=I[nt];return ht===void 0&&(ht=new Zh,I[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=I[nt];return ht===void 0&&(ht=new Zh,I[nt]=ht),ht.getHandSpace()};function et(nt){const ht=F.indexOf(nt.inputSource);if(ht===-1)return;const Dt=I[ht];Dt!==void 0&&(Dt.update(nt.inputSource,nt.frame,p||f),Dt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function P(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let nt=0;nt<I.length;nt++){const ht=F[nt];ht!==null&&(F[nt]=null,I[nt].disconnect(ht))}W=null,tt=null,M.reset();for(const nt in _)delete _[nt];t.setRenderTarget(U),S=null,x=null,v=null,l=null,D=null,kt.stop(),s.isPresenting=!1,t.setPixelRatio(Y),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await n.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Xt=null,qt=null;O.depth&&(qt=O.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Dt=O.stencil?Ns:Sa,Xt=O.stencil?cl:qi);const ve={colorFormat:n.RGBA8,depthFormat:qt,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(ve),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Kn(x.textureWidth,x.textureHeight,{format:Ni,type:li,depthTexture:new fl(x.textureWidth,x.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,Dt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Kn(S.framebufferWidth,S.framebufferHeight,{format:Ni,type:li,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),kt.setContext(l),kt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(nt){for(let ht=0;ht<nt.removed.length;ht++){const Dt=nt.removed[ht],Xt=F.indexOf(Dt);Xt>=0&&(F[Xt]=null,I[Xt].disconnect(Dt))}for(let ht=0;ht<nt.added.length;ht++){const Dt=nt.added[ht];let Xt=F.indexOf(Dt);if(Xt===-1){for(let ve=0;ve<I.length;ve++)if(ve>=F.length){F.push(Dt),Xt=ve;break}else if(F[ve]===null){F[ve]=Dt,Xt=ve;break}if(Xt===-1)break}const qt=I[Xt];qt&&qt.connect(Dt)}}const it=new Z,St=new Z;function Mt(nt,ht,Dt){it.setFromMatrixPosition(ht.matrixWorld),St.setFromMatrixPosition(Dt.matrixWorld);const Xt=it.distanceTo(St),qt=ht.projectionMatrix.elements,ve=Dt.projectionMatrix.elements,Re=qt[14]/(qt[10]-1),ue=qt[14]/(qt[10]+1),_t=(qt[9]+1)/qt[5],Ct=(qt[9]-1)/qt[5],Et=(qt[8]-1)/qt[0],It=(ve[8]+1)/ve[0],z=Re*Et,ne=Re*It,Gt=Xt/(-Et+It),ie=Gt*-Et;if(ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ie),nt.translateZ(Gt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),qt[10]===-1)nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Ut=Re+Gt,N=ue+Gt,b=z-ie,q=ne+(Xt-ie),ct=_t*ue/N*Ut,xt=Ct*ue/N*Ut;nt.projectionMatrix.makePerspective(b,q,ct,xt,Ut,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function L(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ht=nt.near,Dt=nt.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),V.near=w.near=A.near=ht,V.far=w.far=A.far=Dt,(W!==V.near||tt!==V.far)&&(l.updateRenderState({depthNear:V.near,depthFar:V.far}),W=V.near,tt=V.far),V.layers.mask=nt.layers.mask|6,A.layers.mask=V.layers.mask&3,w.layers.mask=V.layers.mask&5;const Xt=nt.parent,qt=V.cameras;L(V,Xt);for(let ve=0;ve<qt.length;ve++)L(qt[ve],Xt);qt.length===2?Mt(V,A,w):V.projectionMatrix.copy(A.projectionMatrix),K(nt,V,Xt)};function K(nt,ht,Dt){Dt===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(Dt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=qr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(V)},this.getCameraTexture=function(nt){return _[nt]};let gt=null;function Rt(nt,ht){if(g=ht.getViewerPose(p||f),E=ht,g!==null){const Dt=g.views;S!==null&&(t.setRenderTargetFramebuffer(D,S.framebuffer),t.setRenderTarget(D));let Xt=!1;Dt.length!==V.cameras.length&&(V.cameras.length=0,Xt=!0);for(let ue=0;ue<Dt.length;ue++){const _t=Dt[ue];let Ct=null;if(S!==null)Ct=S.getViewport(_t);else{const It=v.getViewSubImage(x,_t);Ct=It.viewport,ue===0&&(t.setRenderTargetTextures(D,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(D))}let Et=G[ue];Et===void 0&&(Et=new Jn,Et.layers.enable(ue),Et.viewport=new rn,G[ue]=Et),Et.matrix.fromArray(_t.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(_t.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ue===0&&(V.matrix.copy(Et.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Xt===!0&&V.cameras.push(Et)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=s.getBinding();const ue=v.getDepthInformation(Dt[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,l.renderState)}if(qt&&qt.includes("camera-access")&&T){t.state.unbindTexture(),v=s.getBinding();for(let ue=0;ue<Dt.length;ue++){const _t=Dt[ue].camera;if(_t){let Ct=_[_t];Ct||(Ct=new Q_,_[_t]=Ct);const Et=v.getCameraImage(_t);Ct.sourceTexture=Et}}}}for(let Dt=0;Dt<I.length;Dt++){const Xt=F[Dt],qt=I[Dt];Xt!==null&&qt!==void 0&&qt.update(Xt,ht,p||f)}gt&&gt(nt,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),E=null}const kt=new rx;kt.setAnimationLoop(Rt),this.setAnimationLoop=function(nt){gt=nt},this.dispose=function(){}}}const As=new Yi,O2=new tn;function P2(r,t){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,W_(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,O,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&S(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),T(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,O,U):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Xn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Xn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const O=t.get(_),U=O.envMap,D=O.envMapRotation;U&&(M.envMap.value=U,As.copy(D),As.x*=-1,As.y*=-1,As.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),M.envMapRotation.value.setFromMatrix4(O2.makeRotationFromEuler(As)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,O,U){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*O,M.scale.value=U*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,O){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function T(M,_){const O=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function z2(r,t,n,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const D=U.program;s.uniformBlockBinding(O,D)}function p(O,U){let D=l[O.id];D===void 0&&(E(O),D=g(O),l[O.id]=D,O.addEventListener("dispose",M));const I=U.program;s.updateUBOMapping(O,I);const F=t.render.frame;c[O.id]!==F&&(x(O),c[O.id]=F)}function g(O){const U=v();O.__bindingPointIndex=U;const D=r.createBuffer(),I=O.__size,F=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,I,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function v(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const U=l[O.id],D=O.uniforms,I=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let F=0,B=D.length;F<B;F++){const Y=Array.isArray(D[F])?D[F]:[D[F]];for(let A=0,w=Y.length;A<w;A++){const G=Y[A];if(S(G,F,A,I)===!0){const V=G.__offset,W=Array.isArray(G.value)?G.value:[G.value];let tt=0;for(let et=0;et<W.length;et++){const P=W[et],H=T(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,V+tt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,tt),tt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(O,U,D,I){const F=O.value,B=U+"_"+D;if(I[B]===void 0)return typeof F=="number"||typeof F=="boolean"?I[B]=F:I[B]=F.clone(),!0;{const Y=I[B];if(typeof F=="number"||typeof F=="boolean"){if(Y!==F)return I[B]=F,!0}else if(Y.equals(F)===!1)return Y.copy(F),!0}return!1}function E(O){const U=O.uniforms;let D=0;const I=16;for(let B=0,Y=U.length;B<Y;B++){const A=Array.isArray(U[B])?U[B]:[U[B]];for(let w=0,G=A.length;w<G;w++){const V=A[w],W=Array.isArray(V.value)?V.value:[V.value];for(let tt=0,et=W.length;tt<et;tt++){const P=W[tt],H=T(P),it=D%I,St=it%H.boundary,Mt=it+St;D+=St,Mt!==0&&I-Mt<H.storage&&(D+=I-Mt),V.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=D,D+=H.storage}}}const F=D%I;return F>0&&(D+=I-F),O.__size=D,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",O),U}function M(O){const U=O.target;U.removeEventListener("dispose",M);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const O in l)r.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const I2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function F2(){return Bi===null&&(Bi=new WM(I2,16,16,Xr,ci),Bi.name="DFG_LUT",Bi.minFilter=Fn,Bi.magFilter=Fn,Bi.wrapS=xa,Bi.wrapT=xa,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class B2{constructor(t={}){const{canvas:n=aM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:S=li}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=S,M=new Set([dp,hp,fp]),_=new Set([li,qi,ll,cl,cp,up]),O=new Uint32Array(4),U=new Int32Array(4);let D=null,I=null;const F=[],B=[];let Y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=Si;let G=0,V=0,W=null,tt=-1,et=null;const P=new rn,H=new rn;let it=null;const St=new me(0);let Mt=0,L=n.width,K=n.height,gt=1,Rt=null,kt=null;const nt=new rn(0,0,L,K),ht=new rn(0,0,L,K);let Dt=!1;const Xt=new yp;let qt=!1,ve=!1;const Re=new tn,ue=new Z,_t=new rn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function It(){return W===null?gt:1}let z=s;function ne(R,Q){return n.getContext(R,Q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rp}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",we,!1),z===null){const Q="webgl2";if(z=ne(Q,R),z===null)throw ne(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let Gt,ie,Ut,N,b,q,ct,xt,ft,Zt,Ot,Qt,se,dt,Tt,zt,Ft,Nt,_e,j,Ht,wt,Yt,At;function bt(){Gt=new FT(z),Gt.init(),wt=new w2(z,Gt),ie=new wT(z,Gt,t,wt),Ut=new C2(z,Gt),ie.reversedDepthBuffer&&x&&Ut.buffers.depth.setReversed(!0),N=new GT(z),b=new h2,q=new R2(z,Gt,Ut,b,ie,wt,N),ct=new UT(A),xt=new IT(A),ft=new Wb(z),Yt=new CT(z,ft),Zt=new BT(z,ft,N,Yt),Ot=new kT(z,Zt,ft,N),_e=new VT(z,ie,q),zt=new DT(b),Qt=new f2(A,ct,xt,Gt,ie,Yt,zt),se=new P2(A,b),dt=new p2,Tt=new y2(Gt),Nt=new AT(A,ct,xt,Ut,Ot,E,m),Ft=new T2(A,Ot,ie),At=new z2(z,N,ie,Ut),j=new RT(z,Gt,N),Ht=new HT(z,Gt,N),N.programs=Qt.programs,A.capabilities=ie,A.extensions=Gt,A.properties=b,A.renderLists=dt,A.shadowMap=Ft,A.state=Ut,A.info=N}bt(),T!==li&&(Y=new WT(T,n.width,n.height,l,c));const Pt=new L2(A,z);this.xr=Pt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(L,K,!1))},this.getSize=function(R){return R.set(L,K)},this.setSize=function(R,Q,lt=!0){if(Pt.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,K=Q,n.width=Math.floor(R*gt),n.height=Math.floor(Q*gt),lt===!0&&(n.style.width=R+"px",n.style.height=Q+"px"),Y!==null&&Y.setSize(n.width,n.height),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(L*gt,K*gt).floor()},this.setDrawingBufferSize=function(R,Q,lt){L=R,K=Q,gt=lt,n.width=Math.floor(R*lt),n.height=Math.floor(Q*lt),this.setViewport(0,0,R,Q)},this.setEffects=function(R){if(T===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Q=0;Q<R.length;Q++)if(R[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,Q,lt,rt){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,Q,lt,rt),Ut.viewport(P.copy(nt).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,Q,lt,rt){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,Q,lt,rt),Ut.scissor(H.copy(ht).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){Ut.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){kt=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,Q=!0,lt=!0){let rt=0;if(R){let $=!1;if(W!==null){const Bt=W.texture.format;$=M.has(Bt)}if($){const Bt=W.texture.type,jt=_.has(Bt),Vt=Nt.getClearColor(),Jt=Nt.getClearAlpha(),$t=Vt.r,oe=Vt.g,te=Vt.b;jt?(O[0]=$t,O[1]=oe,O[2]=te,O[3]=Jt,z.clearBufferuiv(z.COLOR,0,O)):(U[0]=$t,U[1]=oe,U[2]=te,U[3]=Jt,z.clearBufferiv(z.COLOR,0,U))}else rt|=z.COLOR_BUFFER_BIT}Q&&(rt|=z.DEPTH_BUFFER_BIT),lt&&(rt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Nt.dispose(),dt.dispose(),Tt.dispose(),b.dispose(),ct.dispose(),xt.dispose(),Ot.dispose(),Yt.dispose(),At.dispose(),Qt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Fs),Pt.removeEventListener("sessionend",eo),Oi.stop()};function fe(R){R.preventDefault(),bv("WebGLRenderer: Context Lost."),w=!0}function Fe(){bv("WebGLRenderer: Context Restored."),w=!1;const R=N.autoReset,Q=Ft.enabled,lt=Ft.autoUpdate,rt=Ft.needsUpdate,$=Ft.type;bt(),N.autoReset=R,Ft.enabled=Q,Ft.autoUpdate=lt,Ft.needsUpdate=rt,Ft.type=$}function we(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function On(R){const Q=R.target;Q.removeEventListener("dispose",On),Mi(Q)}function Mi(R){_l(R),b.remove(R)}function _l(R){const Q=b.get(R).programs;Q!==void 0&&(Q.forEach(function(lt){Qt.releaseProgram(lt)}),R.isShaderMaterial&&Qt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,lt,rt,$,Bt){Q===null&&(Q=Ct);const jt=$.isMesh&&$.matrixWorld.determinant()<0,Vt=is(R,Q,lt,rt,$);Ut.setMaterial(rt,jt);let Jt=lt.index,$t=1;if(rt.wireframe===!0){if(Jt=Zt.getWireframeAttribute(lt),Jt===void 0)return;$t=2}const oe=lt.drawRange,te=lt.attributes.position;let le=oe.start*$t,Oe=(oe.start+oe.count)*$t;Bt!==null&&(le=Math.max(le,Bt.start*$t),Oe=Math.min(Oe,(Bt.start+Bt.count)*$t)),Jt!==null?(le=Math.max(le,0),Oe=Math.min(Oe,Jt.count)):te!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,te.count));const Je=Oe-le;if(Je<0||Je===1/0)return;Yt.setup($,rt,Vt,lt,Jt);let je,Ie=j;if(Jt!==null&&(je=ft.get(Jt),Ie=Ht,Ie.setIndex(je)),$.isMesh)rt.wireframe===!0?(Ut.setLineWidth(rt.wireframeLinewidth*It()),Ie.setMode(z.LINES)):Ie.setMode(z.TRIANGLES);else if($.isLine){let ae=rt.linewidth;ae===void 0&&(ae=1),Ut.setLineWidth(ae*It()),$.isLineSegments?Ie.setMode(z.LINES):$.isLineLoop?Ie.setMode(z.LINE_LOOP):Ie.setMode(z.LINE_STRIP)}else $.isPoints?Ie.setMode(z.POINTS):$.isSprite&&Ie.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ul("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Ie.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ae=$._multiDrawStarts,Pe=$._multiDrawCounts,de=$._multiDrawCount,En=Jt?ft.get(Jt).bytesPerElement:1,Zi=b.get(rt).currentProgram.getUniforms();for(let Tn=0;Tn<de;Tn++)Zi.setValue(z,"_gl_DrawID",Tn),Ie.render(ae[Tn]/En,Pe[Tn])}else if($.isInstancedMesh)Ie.renderInstances(le,Je,$.count);else if(lt.isInstancedBufferGeometry){const ae=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Pe=Math.min(lt.instanceCount,ae);Ie.renderInstances(le,Je,Pe)}else Ie.render(le,Je)};function $r(R,Q,lt){R.transparent===!0&&R.side===Gi&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Hs(R,Q,lt),R.side=ns,R.needsUpdate=!0,Hs(R,Q,lt),R.side=Gi):Hs(R,Q,lt)}this.compile=function(R,Q,lt=null){lt===null&&(lt=R),I=Tt.get(lt),I.init(Q),B.push(I),lt.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),R!==lt&&R.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),I.setupLights();const rt=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Bt=$.material;if(Bt)if(Array.isArray(Bt))for(let jt=0;jt<Bt.length;jt++){const Vt=Bt[jt];$r(Vt,lt,$),rt.add(Vt)}else $r(Bt,lt,$),rt.add(Bt)}),I=B.pop(),rt},this.compileAsync=function(R,Q,lt=null){const rt=this.compile(R,Q,lt);return new Promise($=>{function Bt(){if(rt.forEach(function(jt){b.get(jt).currentProgram.isReady()&&rt.delete(jt)}),rt.size===0){$(R);return}setTimeout(Bt,10)}Gt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Is=null;function to(R){Is&&Is(R)}function Fs(){Oi.stop()}function eo(){Oi.start()}const Oi=new rx;Oi.setAnimationLoop(to),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(R){Is=R,Pt.setAnimationLoop(R),R===null?Oi.stop():Oi.start()},Pt.addEventListener("sessionstart",Fs),Pt.addEventListener("sessionend",eo),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const lt=Pt.enabled===!0&&Pt.isPresenting===!0,rt=Y!==null&&(W===null||lt)&&Y.begin(A,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(Q),Q=Pt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,Q,W),I=Tt.get(R,B.length),I.init(Q),B.push(I),Re.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Xt.setFromProjectionMatrix(Re,ki,Q.reversedDepth),ve=this.localClippingEnabled,qt=zt.init(this.clippingPlanes,ve),D=dt.get(R,F.length),D.init(),F.push(D),Pt.enabled===!0&&Pt.isPresenting===!0){const jt=A.xr.getDepthSensingMesh();jt!==null&&ui(jt,Q,-1/0,A.sortObjects)}ui(R,Q,0,A.sortObjects),D.finish(),A.sortObjects===!0&&D.sort(Rt,kt),Et=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Et&&Nt.addToRenderList(D,R),this.info.render.frame++,qt===!0&&zt.beginShadows();const $=I.state.shadowsArray;if(Ft.render($,R,Q),qt===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&Y.hasRenderPass())===!1){const jt=D.opaque,Vt=D.transmissive;if(I.setupLights(),Q.isArrayCamera){const Jt=Q.cameras;if(Vt.length>0)for(let $t=0,oe=Jt.length;$t<oe;$t++){const te=Jt[$t];bn(jt,Vt,R,te)}Et&&Nt.render(R);for(let $t=0,oe=Jt.length;$t<oe;$t++){const te=Jt[$t];cn(D,R,te,te.viewport)}}else Vt.length>0&&bn(jt,Vt,R,Q),Et&&Nt.render(R),cn(D,R,Q)}W!==null&&V===0&&(q.updateMultisampleRenderTarget(W),q.updateRenderTargetMipmap(W)),rt&&Y.end(A),R.isScene===!0&&R.onAfterRender(A,R,Q),Yt.resetDefaultState(),tt=-1,et=null,B.pop(),B.length>0?(I=B[B.length-1],qt===!0&&zt.setGlobalState(A.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function ui(R,Q,lt,rt){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){rt&&_t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const jt=Ot.update(R),Vt=R.material;Vt.visible&&D.push(R,jt,Vt,lt,_t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const jt=Ot.update(R),Vt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_t.copy(R.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),_t.copy(jt.boundingSphere.center)),_t.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Vt)){const Jt=jt.groups;for(let $t=0,oe=Jt.length;$t<oe;$t++){const te=Jt[$t],le=Vt[te.materialIndex];le&&le.visible&&D.push(R,jt,le,lt,_t.z,te)}}else Vt.visible&&D.push(R,jt,Vt,lt,_t.z,null)}}const Bt=R.children;for(let jt=0,Vt=Bt.length;jt<Vt;jt++)ui(Bt[jt],Q,lt,rt)}function cn(R,Q,lt,rt){const{opaque:$,transmissive:Bt,transparent:jt}=R;I.setupLightsView(lt),qt===!0&&zt.setGlobalState(A.clippingPlanes,lt),rt&&Ut.viewport(P.copy(rt)),$.length>0&&bi($,Q,lt),Bt.length>0&&bi(Bt,Q,lt),jt.length>0&&bi(jt,Q,lt),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function bn(R,Q,lt,rt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[rt.id]===void 0){const le=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[rt.id]=new Kn(1,1,{generateMipmaps:!0,type:le?ci:li,minFilter:Us,samples:ie.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Bt=I.state.transmissionRenderTarget[rt.id],jt=rt.viewport||P;Bt.setSize(jt.z*A.transmissionResolutionScale,jt.w*A.transmissionResolutionScale);const Vt=A.getRenderTarget(),Jt=A.getActiveCubeFace(),$t=A.getActiveMipmapLevel();A.setRenderTarget(Bt),A.getClearColor(St),Mt=A.getClearAlpha(),Mt<1&&A.setClearColor(16777215,.5),A.clear(),Et&&Nt.render(lt);const oe=A.toneMapping;A.toneMapping=Wi;const te=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),I.setupLightsView(rt),qt===!0&&zt.setGlobalState(A.clippingPlanes,rt),bi(R,lt,rt),q.updateMultisampleRenderTarget(Bt),q.updateRenderTargetMipmap(Bt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Oe=0,Je=Q.length;Oe<Je;Oe++){const je=Q[Oe],{object:Ie,geometry:ae,material:Pe,group:de}=je;if(Pe.side===Gi&&Ie.layers.test(rt.layers)){const En=Pe.side;Pe.side=Xn,Pe.needsUpdate=!0,Bs(Ie,lt,rt,ae,Pe,de),Pe.side=En,Pe.needsUpdate=!0,le=!0}}le===!0&&(q.updateMultisampleRenderTarget(Bt),q.updateRenderTargetMipmap(Bt))}A.setRenderTarget(Vt,Jt,$t),A.setClearColor(St,Mt),te!==void 0&&(rt.viewport=te),A.toneMapping=oe}function bi(R,Q,lt){const rt=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Bt=R.length;$<Bt;$++){const jt=R[$],{object:Vt,geometry:Jt,group:$t}=jt;let oe=jt.material;oe.allowOverride===!0&&rt!==null&&(oe=rt),Vt.layers.test(lt.layers)&&Bs(Vt,Q,lt,Jt,oe,$t)}}function Bs(R,Q,lt,rt,$,Bt){R.onBeforeRender(A,Q,lt,rt,$,Bt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(A,Q,lt,rt,R,Bt),$.transparent===!0&&$.side===Gi&&$.forceSinglePass===!1?($.side=Xn,$.needsUpdate=!0,A.renderBufferDirect(lt,Q,rt,$,R,Bt),$.side=ns,$.needsUpdate=!0,A.renderBufferDirect(lt,Q,rt,$,R,Bt),$.side=Gi):A.renderBufferDirect(lt,Q,rt,$,R,Bt),R.onAfterRender(A,Q,lt,rt,$,Bt)}function Hs(R,Q,lt){Q.isScene!==!0&&(Q=Ct);const rt=b.get(R),$=I.state.lights,Bt=I.state.shadowsArray,jt=$.state.version,Vt=Qt.getParameters(R,$.state,Bt,Q,lt),Jt=Qt.getProgramCacheKey(Vt);let $t=rt.programs;rt.environment=R.isMeshStandardMaterial?Q.environment:null,rt.fog=Q.fog,rt.envMap=(R.isMeshStandardMaterial?xt:ct).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",On),$t=new Map,rt.programs=$t);let oe=$t.get(Jt);if(oe!==void 0){if(rt.currentProgram===oe&&rt.lightsStateVersion===jt)return no(R,Vt),oe}else Vt.uniforms=Qt.getUniforms(R),R.onBeforeCompile(Vt,A),oe=Qt.acquireProgram(Vt,Jt),$t.set(Jt,oe),rt.uniforms=Vt.uniforms;const te=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=zt.uniform),no(R,Vt),rt.needsLights=Ma(R),rt.lightsStateVersion=jt,rt.needsLights&&(te.ambientLightColor.value=$.state.ambient,te.lightProbe.value=$.state.probe,te.directionalLights.value=$.state.directional,te.directionalLightShadows.value=$.state.directionalShadow,te.spotLights.value=$.state.spot,te.spotLightShadows.value=$.state.spotShadow,te.rectAreaLights.value=$.state.rectArea,te.ltc_1.value=$.state.rectAreaLTC1,te.ltc_2.value=$.state.rectAreaLTC2,te.pointLights.value=$.state.point,te.pointLightShadows.value=$.state.pointShadow,te.hemisphereLights.value=$.state.hemi,te.directionalShadowMap.value=$.state.directionalShadowMap,te.directionalShadowMatrix.value=$.state.directionalShadowMatrix,te.spotShadowMap.value=$.state.spotShadowMap,te.spotLightMatrix.value=$.state.spotLightMatrix,te.spotLightMap.value=$.state.spotLightMap,te.pointShadowMap.value=$.state.pointShadowMap,te.pointShadowMatrix.value=$.state.pointShadowMatrix),rt.currentProgram=oe,rt.uniformsList=null,oe}function xl(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=su.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function no(R,Q){const lt=b.get(R);lt.outputColorSpace=Q.outputColorSpace,lt.batching=Q.batching,lt.batchingColor=Q.batchingColor,lt.instancing=Q.instancing,lt.instancingColor=Q.instancingColor,lt.instancingMorph=Q.instancingMorph,lt.skinning=Q.skinning,lt.morphTargets=Q.morphTargets,lt.morphNormals=Q.morphNormals,lt.morphColors=Q.morphColors,lt.morphTargetsCount=Q.morphTargetsCount,lt.numClippingPlanes=Q.numClippingPlanes,lt.numIntersection=Q.numClipIntersection,lt.vertexAlphas=Q.vertexAlphas,lt.vertexTangents=Q.vertexTangents,lt.toneMapping=Q.toneMapping}function is(R,Q,lt,rt,$){Q.isScene!==!0&&(Q=Ct),q.resetTextureUnits();const Bt=Q.fog,jt=rt.isMeshStandardMaterial?Q.environment:null,Vt=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Wr,Jt=(rt.isMeshStandardMaterial?xt:ct).get(rt.envMap||jt),$t=rt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),te=!!lt.morphAttributes.position,le=!!lt.morphAttributes.normal,Oe=!!lt.morphAttributes.color;let Je=Wi;rt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Je=A.toneMapping);const je=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ie=je!==void 0?je.length:0,ae=b.get(rt),Pe=I.state.lights;if(qt===!0&&(ve===!0||R!==et)){const Cn=R===et&&rt.id===tt;zt.setState(rt,R,Cn)}let de=!1;rt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Pe.state.version||ae.outputColorSpace!==Vt||$.isBatchedMesh&&ae.batching===!1||!$.isBatchedMesh&&ae.batching===!0||$.isBatchedMesh&&ae.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ae.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ae.instancing===!1||!$.isInstancedMesh&&ae.instancing===!0||$.isSkinnedMesh&&ae.skinning===!1||!$.isSkinnedMesh&&ae.skinning===!0||$.isInstancedMesh&&ae.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ae.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ae.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ae.instancingMorph===!1&&$.morphTexture!==null||ae.envMap!==Jt||rt.fog===!0&&ae.fog!==Bt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==zt.numPlanes||ae.numIntersection!==zt.numIntersection)||ae.vertexAlphas!==$t||ae.vertexTangents!==oe||ae.morphTargets!==te||ae.morphNormals!==le||ae.morphColors!==Oe||ae.toneMapping!==Je||ae.morphTargetsCount!==Ie)&&(de=!0):(de=!0,ae.__version=rt.version);let En=ae.currentProgram;de===!0&&(En=Hs(rt,Q,$));let Zi=!1,Tn=!1,fi=!1;const Be=En.getUniforms(),An=ae.uniforms;if(Ut.useProgram(En.program)&&(Zi=!0,Tn=!0,fi=!0),rt.id!==tt&&(tt=rt.id,Tn=!0),Zi||et!==R){Ut.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Be.setValue(z,"projectionMatrix",R.projectionMatrix),Be.setValue(z,"viewMatrix",R.matrixWorldInverse);const Rn=Be.map.cameraPosition;Rn!==void 0&&Rn.setValue(z,ue.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&Be.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Be.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),et!==R&&(et=R,Tn=!0,fi=!0)}if(ae.needsLights&&(Pe.state.directionalShadowMap.length>0&&Be.setValue(z,"directionalShadowMap",Pe.state.directionalShadowMap,q),Pe.state.spotShadowMap.length>0&&Be.setValue(z,"spotShadowMap",Pe.state.spotShadowMap,q),Pe.state.pointShadowMap.length>0&&Be.setValue(z,"pointShadowMap",Pe.state.pointShadowMap,q)),$.isSkinnedMesh){Be.setOptional(z,$,"bindMatrix"),Be.setOptional(z,$,"bindMatrixInverse");const Cn=$.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Be.setValue(z,"boneTexture",Cn.boneTexture,q))}$.isBatchedMesh&&(Be.setOptional(z,$,"batchingTexture"),Be.setValue(z,"batchingTexture",$._matricesTexture,q),Be.setOptional(z,$,"batchingIdTexture"),Be.setValue(z,"batchingIdTexture",$._indirectTexture,q),Be.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Be.setValue(z,"batchingColorTexture",$._colorsTexture,q));const gn=lt.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&_e.update($,lt,En),(Tn||ae.receiveShadow!==$.receiveShadow)&&(ae.receiveShadow=$.receiveShadow,Be.setValue(z,"receiveShadow",$.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(An.envMap.value=Jt,An.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Q.environment!==null&&(An.envMapIntensity.value=Q.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=F2()),Tn&&(Be.setValue(z,"toneMappingExposure",A.toneMappingExposure),ae.needsLights&&io(An,fi),Bt&&rt.fog===!0&&se.refreshFogUniforms(An,Bt),se.refreshMaterialUniforms(An,rt,gt,K,I.state.transmissionRenderTarget[R.id]),su.upload(z,xl(ae),An,q)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(su.upload(z,xl(ae),An,q),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Be.setValue(z,"center",$.center),Be.setValue(z,"modelViewMatrix",$.modelViewMatrix),Be.setValue(z,"normalMatrix",$.normalMatrix),Be.setValue(z,"modelMatrix",$.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Cn=rt.uniformsGroups;for(let Rn=0,Gs=Cn.length;Rn<Gs;Rn++){const Ei=Cn[Rn];At.update(Ei,En),At.bind(Ei,En)}}return En}function io(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function Ma(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,Q,lt){const rt=b.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Q,b.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:lt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Q){const lt=b.get(R);lt.__webglFramebuffer=Q,lt.__useDefaultFramebuffer=Q===void 0};const ba=z.createFramebuffer();this.setRenderTarget=function(R,Q=0,lt=0){W=R,G=Q,V=lt;let rt=null,$=!1,Bt=!1;if(R){const Vt=b.get(R);if(Vt.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(z.FRAMEBUFFER,Vt.__webglFramebuffer),P.copy(R.viewport),H.copy(R.scissor),it=R.scissorTest,Ut.viewport(P),Ut.scissor(H),Ut.setScissorTest(it),tt=-1;return}else if(Vt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Vt.__hasExternalTextures)q.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const oe=R.depthTexture;if(Vt.__boundDepthTexture!==oe){if(oe!==null&&b.has(oe)&&(R.width!==oe.image.width||R.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Bt=!0);const $t=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[Q])?rt=$t[Q][lt]:rt=$t[Q],$=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?rt=b.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?rt=$t[lt]:rt=$t,P.copy(R.viewport),H.copy(R.scissor),it=R.scissorTest}else P.copy(nt).multiplyScalar(gt).floor(),H.copy(ht).multiplyScalar(gt).floor(),it=Dt;if(lt!==0&&(rt=ba),Ut.bindFramebuffer(z.FRAMEBUFFER,rt)&&Ut.drawBuffers(R,rt),Ut.viewport(P),Ut.scissor(H),Ut.setScissorTest(it),$){const Vt=b.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Vt.__webglTexture,lt)}else if(Bt){const Vt=Q;for(let Jt=0;Jt<R.textures.length;Jt++){const $t=b.get(R.textures[Jt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Jt,$t.__webglTexture,lt,Vt)}}else if(R!==null&&lt!==0){const Vt=b.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Vt.__webglTexture,lt)}tt=-1},this.readRenderTargetPixels=function(R,Q,lt,rt,$,Bt,jt,Vt=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt){Ut.bindFramebuffer(z.FRAMEBUFFER,Jt);try{const $t=R.textures[Vt],oe=$t.format,te=$t.type;if(!ie.textureFormatReadable(oe)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(te)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-rt&&lt>=0&&lt<=R.height-$&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Vt),z.readPixels(Q,lt,rt,$,wt.convert(oe),wt.convert(te),Bt))}finally{const $t=W!==null?b.get(W).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,Q,lt,rt,$,Bt,jt,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt)if(Q>=0&&Q<=R.width-rt&&lt>=0&&lt<=R.height-$){Ut.bindFramebuffer(z.FRAMEBUFFER,Jt);const $t=R.textures[Vt],oe=$t.format,te=$t.type;if(!ie.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.bufferData(z.PIXEL_PACK_BUFFER,Bt.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Vt),z.readPixels(Q,lt,rt,$,wt.convert(oe),wt.convert(te),0);const Oe=W!==null?b.get(W).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,Oe);const Je=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await sM(z,Je,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Bt),z.deleteBuffer(le),z.deleteSync(Je),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Q=null,lt=0){const rt=Math.pow(2,-lt),$=Math.floor(R.image.width*rt),Bt=Math.floor(R.image.height*rt),jt=Q!==null?Q.x:0,Vt=Q!==null?Q.y:0;q.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,lt,0,0,jt,Vt,$,Bt),Ut.unbindTexture()};const as=z.createFramebuffer(),Ea=z.createFramebuffer();this.copyTextureToTexture=function(R,Q,lt=null,rt=null,$=0,Bt=null){Bt===null&&($!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Bt=$,$=0):Bt=0);let jt,Vt,Jt,$t,oe,te,le,Oe,Je;const je=R.isCompressedTexture?R.mipmaps[Bt]:R.image;if(lt!==null)jt=lt.max.x-lt.min.x,Vt=lt.max.y-lt.min.y,Jt=lt.isBox3?lt.max.z-lt.min.z:1,$t=lt.min.x,oe=lt.min.y,te=lt.isBox3?lt.min.z:0;else{const gn=Math.pow(2,-$);jt=Math.floor(je.width*gn),Vt=Math.floor(je.height*gn),R.isDataArrayTexture?Jt=je.depth:R.isData3DTexture?Jt=Math.floor(je.depth*gn):Jt=1,$t=0,oe=0,te=0}rt!==null?(le=rt.x,Oe=rt.y,Je=rt.z):(le=0,Oe=0,Je=0);const Ie=wt.convert(Q.format),ae=wt.convert(Q.type);let Pe;Q.isData3DTexture?(q.setTexture3D(Q,0),Pe=z.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(q.setTexture2DArray(Q,0),Pe=z.TEXTURE_2D_ARRAY):(q.setTexture2D(Q,0),Pe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Q.unpackAlignment);const de=z.getParameter(z.UNPACK_ROW_LENGTH),En=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Zi=z.getParameter(z.UNPACK_SKIP_PIXELS),Tn=z.getParameter(z.UNPACK_SKIP_ROWS),fi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,je.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,je.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,oe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,te);const Be=R.isDataArrayTexture||R.isData3DTexture,An=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isDepthTexture){const gn=b.get(R),Cn=b.get(Q),Rn=b.get(gn.__renderTarget),Gs=b.get(Cn.__renderTarget);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,Gs.__webglFramebuffer);for(let Ei=0;Ei<Jt;Ei++)Be&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,b.get(R).__webglTexture,$,te+Ei),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,b.get(Q).__webglTexture,Bt,Je+Ei)),z.blitFramebuffer($t,oe,jt,Vt,le,Oe,jt,Vt,z.DEPTH_BUFFER_BIT,z.NEAREST);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||b.has(R)){const gn=b.get(R),Cn=b.get(Q);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,as),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ea);for(let Rn=0;Rn<Jt;Rn++)Be?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gn.__webglTexture,$,te+Rn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gn.__webglTexture,$),An?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Cn.__webglTexture,Bt,Je+Rn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Cn.__webglTexture,Bt),$!==0?z.blitFramebuffer($t,oe,jt,Vt,le,Oe,jt,Vt,z.COLOR_BUFFER_BIT,z.NEAREST):An?z.copyTexSubImage3D(Pe,Bt,le,Oe,Je+Rn,$t,oe,jt,Vt):z.copyTexSubImage2D(Pe,Bt,le,Oe,$t,oe,jt,Vt);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Pe,Bt,le,Oe,Je,jt,Vt,Jt,Ie,ae,je.data):Q.isCompressedArrayTexture?z.compressedTexSubImage3D(Pe,Bt,le,Oe,Je,jt,Vt,Jt,Ie,je.data):z.texSubImage3D(Pe,Bt,le,Oe,Je,jt,Vt,Jt,Ie,ae,je):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Bt,le,Oe,jt,Vt,Ie,ae,je.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Bt,le,Oe,je.width,je.height,Ie,je.data):z.texSubImage2D(z.TEXTURE_2D,Bt,le,Oe,jt,Vt,Ie,ae,je);z.pixelStorei(z.UNPACK_ROW_LENGTH,de),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,En),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Zi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Tn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,fi),Bt===0&&Q.generateMipmaps&&z.generateMipmap(Pe),Ut.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Ut.unbindTexture()},this.resetState=function(){G=0,V=0,W=null,Ut.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}const ru={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class vl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const H2=new mu(-1,1,1,-1,0,1);class G2 extends Mn{constructor(){super(),this.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qe([0,2,0,0,2,0],2))}}const V2=new G2;class fx{constructor(t){this._mesh=new $e(V2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,H2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class k2 extends vl{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Bn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=uu.clone(t.uniforms),this.material=new Bn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new fx(this.material)}render(t,n,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class S_ extends vl{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,h;this.inverse?(f=0,h=1):(f=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class X2 extends vl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class W2{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const s=t.getSize(new Lt);this._width=s.width,this._height=s.height,n=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new k2(ru),this.copyPass.material.blending=Xi,this.clock=new kb}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}S_!==void 0&&(f instanceof S_?s=!0:f instanceof X2&&(s=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class q2 extends vl{constructor(t,n,s=null,l=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new me}render(t,n,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const Y2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Zr extends vl{constructor(t,n=1,s,l){super(),this.strength=n,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Lt(t.x,t.y):new Lt(256,256),this.clearColor=new me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(c,f,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new Kn(c,f,{type:ci});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const x=new Kn(c,f,{type:ci});x.texture.name="UnrealBloomPass.v"+g,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),c=Math.round(c/2),f=Math.round(f/2)}const h=Y2;this.highPassUniforms=uu.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Lt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=uu.clone(ru.uniforms),this.blendMaterial=new Bn({uniforms:this.copyUniforms,vertexShader:ru.vertexShader,fragmentShader:ru.fragmentShader,premultipliedAlpha:!0,blending:ol,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new me,this._oldClearAlpha=1,this._basic=new Gr,this._fsQuad=new fx(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let s=Math.round(t/2),l=Math.round(n/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new Lt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,n,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=Zr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Zr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const n=[],s=t/3;for(let l=0;l<t;l++)n.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Bn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Lt(.5,.5)},direction:{value:new Lt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Bn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Zr.BlurDirectionX=new Lt(1,0);Zr.BlurDirectionY=new Lt(0,1);const Cs={Bolt:({size:r=24,className:t})=>pt.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:pt.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),Home:({size:r=24,className:t})=>pt.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[pt.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),pt.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),Bag:({size:r=24,className:t})=>pt.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[pt.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),pt.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),pt.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),Trash:({size:r=16,className:t})=>pt.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[pt.jsx("polyline",{points:"3 6 5 6 21 6"}),pt.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Coins:({size:r=16,className:t})=>pt.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[pt.jsx("circle",{cx:"8",cy:"8",r:"6"}),pt.jsx("path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"})]}),Lock:({size:r=16,className:t})=>pt.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[pt.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),pt.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})},M_=[{name:"Tuerca Oxidada",val:5,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔩",chance:.2},{name:"Cable Pelado",val:8,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔌",chance:.18},{name:"Lata Espacial",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🥫",chance:.18},{name:"Fragmento Metálico",val:4,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"⚙️",chance:.16},{name:"Residuo Plástico",val:2,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🧩",chance:.15},{name:"Cristal Roto",val:6,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"💎",chance:.14},{name:"Tornillo Suelto",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔧",chance:.13},{name:"Chapa Abollada",val:7,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"📦",chance:.12},{name:"Placa de Acero",val:25,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🛡️",chance:.12},{name:"Batería de Iones",val:40,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔋",chance:.1},{name:"Sensor Óptico",val:35,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"👁️",chance:.09},{name:"Conductor de Energía",val:50,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚡",chance:.08},{name:"Aleación Refinada",val:60,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔬",chance:.07},{name:"Núcleo de Plasma",val:80,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚛️",chance:.06},{name:"Chip Cuántico",val:150,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💾",chance:.07},{name:"Motor de Iones",val:200,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🛸",chance:.06},{name:"Cristal de Energía",val:300,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💠",chance:.05},{name:"Dispositivo Holográfico",val:400,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"📡",chance:.04},{name:"Motor WARP",val:750,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🚀",chance:.04},{name:"Núcleo Estelar",val:1200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"⭐",chance:.03},{name:"Artefacto Antiguo",val:2e3,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🏺",chance:.025},{name:"Generador de Campo",val:3500,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🌀",chance:.02},{name:"Antimateria",val:5e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"⚛️",chance:.015},{name:"Huevo Dragón",val:8e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🥚",chance:.01},{name:"Fragmento de Agujero Negro",val:15e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🕳️",chance:.008},{name:"Esencia Cósmica",val:25e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"✨",chance:.005},{name:"Partícula Dios",val:5e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🌌",chance:.002},{name:"Corazón de Estrella",val:1e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"❤️",chance:.001},{name:"Fragmento del Big Bang",val:25e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"💥",chance:5e-4}],Fr=[{id:0,name:"Sistema Solar",cost:0,rarityMultiplier:1,style:{planetColor1:"#1e3c72",planetColor2:"#2a5298",atmosphereColor:4491519,ringColor:8965375,hasRings:!0}},{id:1,name:"Nebulosa Roja",cost:1e4,rarityMultiplier:1.5,style:{planetColor1:"#7a1f1f",planetColor2:"#a83232",atmosphereColor:16729156,ringColor:16737894,hasRings:!1}},{id:2,name:"Cúmulo Estelar",cost:3e4,rarityMultiplier:2,style:{planetColor1:"#4a1e7a",planetColor2:"#6b2d9f",atmosphereColor:11158783,ringColor:13395711,hasRings:!0}},{id:3,name:"Galaxia Remota",cost:5e4,rarityMultiplier:2.5,style:{planetColor1:"#1e4a3c",planetColor2:"#2d6b5a",atmosphereColor:4521864,ringColor:6750122,hasRings:!0}},{id:4,name:"Agujero Negro",cost:1e5,rarityMultiplier:3.5,style:{planetColor1:"#0a0a0a",planetColor2:"#1a1a1a",atmosphereColor:4456703,ringColor:6684927,hasRings:!0}}],j2=({missionState:r,level:t,totalDuration:n,timeLeft:s,planet:l})=>{const c=en.useRef(null),f=en.useRef(null),h=en.useRef(null),m=en.useRef(null),p=en.useRef(null),g=en.useRef(null),v=en.useRef([]),x=(S,E)=>{const M=document.createElement("canvas");M.width=512,M.height=512;const _=M.getContext("2d");_.fillStyle=S,_.fillRect(0,0,512,512);for(let O=0;O<300;O++){const U=Math.random()*512,D=Math.random()*512,I=Math.random()*40+5;_.beginPath(),_.arc(U,D,I,0,Math.PI*2),_.fillStyle=E,_.globalAlpha=.2,_.fill()}return new QM(M)};return en.useEffect(()=>{const S=new XM;S.fog=new xp(657952,.005);const E=new Jn(50,window.innerWidth/window.innerHeight,.1,1e3);g.current=E;const T=new B2({alpha:!1,antialias:!0,powerPreference:"high-performance"});T.setSize(window.innerWidth,window.innerHeight),T.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),T.toneMapping=op,T.toneMappingExposure=1.2,c.current&&(c.current.innerHTML="",c.current.appendChild(T.domElement));const M=new q2(S,E),_=new Zr(new Lt(window.innerWidth,window.innerHeight),1.5,.4,.85);_.threshold=.2,_.strength=1.2,_.radius=.5;const O=new W2(T);O.addPass(M),O.addPass(_);const U=new Pb(4210784,0,3);S.add(U);const D=new Gb(16777215,2);D.position.set(10,10,10),S.add(D);const I=new Ib(10309341,10);I.position.set(-5,5,-5),S.add(I);const F=new Or,B=new jv({color:9055202}),Y=new jv({color:1118481}),A=new Nb({color:8965375,roughness:.2,metalness:.9,transmission:.9,transparent:!0}),w=new np({color:12632256,metalness:.8,roughness:.3}),G=new zr(1,32,32),V=new $e(G,B);V.scale.set(1.8,1,1),F.add(V);const W=new $e(new Ir(.98,.06,16,64),Y);W.rotation.y=Math.PI/2,F.add(W);const tt=new $e(new Ir(.8,.06,16,64),Y);tt.rotation.y=Math.PI/2,tt.position.x=.8,F.add(tt);const et=new $e(new Ir(.8,.06,16,64),Y);et.rotation.y=Math.PI/2,et.position.x=-.8,F.add(et);const P=new $e(new Ir(1,.06,16,64),Y);P.rotation.x=Math.PI/2,P.scale.set(1.8,1,1),F.add(P);const H=new $e(new Sp(.15,.4,4,8),A);H.rotation.z=Math.PI/2,H.rotation.x=Math.PI/6,H.position.set(1,.4,.25),F.add(H);const it=H.clone();it.position.set(1,.4,-.25),F.add(it);const St=new ex;St.moveTo(0,0),St.quadraticCurveTo(.5,.5,.5,1),St.lineTo(-.8,.8),St.quadraticCurveTo(-.5,.4,-.8,0);const Mt=new $e(new Tp(St,{depth:.1,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05}),B);Mt.position.set(-.5,.85,-.05),F.add(Mt);const L=new Jr(1,.1,.8),K=new $e(L,B);K.position.set(-.5,-.5,.8),K.rotation.set(.5,0,.2),F.add(K);const gt=new $e(L,B);gt.position.set(-.5,-.5,-.8),gt.rotation.set(-.5,0,.2),F.add(gt);const Rt=new $e(new Mp(.5,.7,.6,32),w);Rt.rotation.z=Math.PI/2,Rt.position.set(-1.8,0,0),F.add(Rt);const kt=new Bb(16755200,0,10);kt.position.set(-2.5,0,0),S.add(kt),p.current=kt,F.rotation.y=Math.PI/2,S.add(F),f.current=F;const nt=new Or,ht=l?.id??0,Dt=Fr[ht]||Fr[0],Xt=x(Dt.style.planetColor1,Dt.style.planetColor2),qt=new np({map:Xt,roughness:.8}),ve=new $e(new zr(60,64,64),qt);nt.add(ve);const Re=new Gr({color:Dt.style.atmosphereColor,transparent:!0,opacity:.2,blending:ol,side:Xn}),ue=new $e(new zr(64,64,64),Re);if(nt.add(ue),Dt.style.hasRings){const b=new Ap(80,110,64),q=new Gr({color:Dt.style.ringColor,side:Gi,transparent:!0,opacity:.4}),ct=new $e(b,q);ct.rotation.x=Math.PI/2.5,nt.add(ct)}nt.position.set(0,10,-300),S.add(nt),h.current=nt;const _t=new Mn,Ct=3e3,Et=new Float32Array(Ct*3);for(let b=0;b<Ct*3;b++)Et[b]=(Math.random()-.5)*1e3;_t.setAttribute("position",new Li(Et,3));const It=new Z_({color:16777215,size:.8,transparent:!0,opacity:1}),z=new ZM(_t,It);S.add(z),m.current=z;const ne=new zr(.2,4,4),Gt=new Gr({color:16755200,transparent:!0,opacity:.8,blending:ol,depthWrite:!1});v.current=[];for(let b=0;b<80;b++){const q=new $e(ne,Gt.clone());q.visible=!1,S.add(q),v.current.push({mesh:q,life:0,velocity:new Z})}E.position.set(0,3,12),E.lookAt(0,0,0);let ie;const Ut=()=>{ie=requestAnimationFrame(Ut);const b=window.missionActive,q=window.totalTime||1,xt=1-(window.currentTime||0)/q,ft=Date.now()*.001;if(f.current){let dt=0,Tt=0,zt=0;if(b?(xt<.4?(dt=-200*(xt/.4),Tt=Math.PI/2,zt=.2):xt<.7?(dt=-200,Tt=Math.PI/2,f.current.position.y=Math.sin(ft*3)*1.5):(dt=-200*(1-(xt-.7)/.3),Tt=Math.PI/2+Math.PI,zt=-.2),f.current.position.y+=(Math.random()-.5)*.05):(dt=0,f.current.rotation.y+=.005,f.current.position.y=Math.sin(ft*2)*.5,zt=0),f.current.position.z=da.lerp(f.current.position.z,dt,.05),b){let Nt=f.current.rotation.y;Math.abs(Tt-Nt)>Math.PI&&(Tt>Nt?Nt+=2*Math.PI:Nt-=2*Math.PI),f.current.rotation.y=da.lerp(Nt,Tt,.04)}f.current.rotation.z=da.lerp(f.current.rotation.z,zt,.05);const Ft=b?-.1:0;f.current.rotation.x=da.lerp(f.current.rotation.x,Ft,.05)}if(g.current&&f.current){if(b){const dt=f.current.position.z+15,Tt=4;g.current.position.z=da.lerp(g.current.position.z,dt,.05),g.current.position.y=da.lerp(g.current.position.y,Tt,.05)}else g.current.position.z=da.lerp(g.current.position.z,12,.05),g.current.position.y=da.lerp(g.current.position.y,3,.05);g.current.lookAt(f.current.position.x,0,f.current.position.z-10)}if(h.current&&(h.current.rotation.y+=5e-4),m.current){const dt=b?3:.1,Tt=m.current.geometry.attributes.position.array;for(let zt=0;zt<3e3;zt++)Tt[zt*3]-=dt,Tt[zt*3]<-500&&(Tt[zt*3]=500);m.current.geometry.attributes.position.needsUpdate=!0}const Zt=v.current,Ot=b?.8:.3,Qt=b?2:.8,se=b?65535:16733440;if(Math.random()<Ot){const dt=Zt.find(Tt=>Tt.life<=0);if(dt&&f.current){dt.life=1,dt.mesh.visible=!0;const Tt=new Z(-1.8,0,0);Tt.applyEuler(f.current.rotation),dt.mesh.position.copy(f.current.position).add(Tt);const zt=b?.8:.2,Ft=new Z(-zt-Math.random()*.2,(Math.random()-.5)*.1,(Math.random()-.5)*.1);Ft.applyEuler(f.current.rotation),dt.velocity.copy(Ft),dt.mesh.material.color.setHex(se),dt.mesh.material.opacity=1}}if(Zt.forEach(dt=>{dt.life>0&&(dt.life-=.03,dt.mesh.position.add(dt.velocity),dt.mesh.scale.setScalar(dt.life*Qt),dt.mesh.material.opacity=dt.life,dt.life<=0&&(dt.mesh.visible=!1))}),p.current){const dt=b?8:2+Math.sin(ft*5);p.current.intensity=da.lerp(p.current.intensity,dt,.1),p.current.color.setHex(se)}O.render()};Ut();const N=()=>{!g.current||!c.current||(g.current.aspect=window.innerWidth/window.innerHeight,g.current.updateProjectionMatrix(),T.setSize(window.innerWidth,window.innerHeight),O.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N),cancelAnimationFrame(ie),c.current&&(c.current.innerHTML=""),T.dispose()}},[t,l]),en.useEffect(()=>{window.missionActive=r==="mining",window.totalTime=n,window.currentTime=s},[r,n,s]),pt.jsx("div",{ref:c,id:"canvas-container",className:"absolute top-0 left-0 w-full h-full z-0 bg-black"})},Z2=({item:r,onClose:t})=>pt.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-[pop_0.4s_ease-out] p-4",onClick:t,children:pt.jsxs("div",{className:`relative bg-gray-900/90 border-2 ${r.border} rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.8)]`,onClick:n=>n.stopPropagation(),children:[pt.jsx("div",{className:`absolute inset-0 rounded-3xl opacity-20 bg-gradient-to-tr from-transparent via-${r.style.split("-")[1]}-500 to-transparent animate-pulse pointer-events-none`}),pt.jsx("h2",{className:"text-2xl font-bold text-white mb-8 font-orbitron tracking-[0.2em] border-b border-white/10 pb-4",children:"RECOMPENSA"}),pt.jsx("div",{className:"text-9xl mb-6 animate-bounce drop-shadow-2xl",children:r.icon}),pt.jsxs("div",{className:"space-y-2 mb-8",children:[pt.jsx("h3",{className:`text-3xl font-bold font-orbitron ${r.style} drop-shadow-md`,children:r.name}),pt.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border ${r.border} ${r.style}`,children:r.rarity})]}),pt.jsxs("div",{className:"bg-black/50 rounded-2xl p-4 mb-8 border border-white/5",children:[pt.jsx("p",{className:"text-xs text-gray-500 uppercase tracking-widest mb-1",children:"Valor Estimado"}),pt.jsxs("p",{className:"text-4xl font-mono font-bold text-yellow-400 drop-shadow-lg",children:["+",r.val.toLocaleString()," ₡"]})]}),pt.jsx("button",{onClick:t,className:"w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-bold text-lg tracking-widest font-orbitron shadow-xl active:scale-95 transition-all",children:"ACEPTAR"})]})});function Q2(){const[r,t]=en.useState("home"),[n,s]=en.useState(()=>parseInt(localStorage.getItem("os_ultra_credits"))||500),[l,c]=en.useState(()=>parseInt(localStorage.getItem("os_ultra_level"))||1),[f,h]=en.useState(()=>JSON.parse(localStorage.getItem("os_ultra_inv"))||[]),[m,p]=en.useState("idle"),[g,v]=en.useState(0),[x,S]=en.useState(0),[E,T]=en.useState(null),[M,_]=en.useState(()=>{const V=localStorage.getItem("os_ultra_planet");return V?parseInt(V):0}),[O,U]=en.useState(()=>{const V=localStorage.getItem("os_ultra_unlocked_planets");return V?JSON.parse(V):[0]});en.useEffect(()=>{localStorage.setItem("os_ultra_credits",n),localStorage.setItem("os_ultra_level",l),localStorage.setItem("os_ultra_inv",JSON.stringify(f)),localStorage.setItem("os_ultra_planet",M),localStorage.setItem("os_ultra_unlocked_planets",JSON.stringify(O))},[n,l,f,M,O]),en.useEffect(()=>{let V;return m==="mining"&&g>0?V=setInterval(()=>v(W=>W-1),1e3):m==="mining"&&g===0&&(p("ready"),navigator.vibrate&&navigator.vibrate(200)),()=>clearInterval(V)},[m,g]);const D=()=>{const V=Math.max(5,10-Math.floor(l/5));S(V),v(V),p("mining")},I=()=>{const V=Math.random();let W=M_[0];const tt=l*.1,P=Fr[M]?.rarityMultiplier||1,H=M_.map(L=>{let K=L.chance;return L.rarity==="Común"&&(K/=1+tt,K/=P),L.rarity==="Poco Común"&&(K*=1+tt*.3,K*=P*.5),(L.rarity==="Raro"||L.rarity==="Épico")&&(K*=1+tt*.5,K*=P),L.rarity==="Legendario"&&(K*=1+tt,K*=P*1.5),L.rarity==="Mítico"&&(K*=1+tt*1.5,K*=P*2),{...L,weight:K}});let it=H.reduce((L,K)=>L+K.weight,0),St=V*it;for(let L of H)if(St-=L.weight,St<=0){W=L;break}const Mt={...W,id:Date.now()};h(L=>[...L,Mt]),T(Mt),p("idle")},F=V=>{const W=Fr[V];!W||O.includes(V)||n>=W.cost&&(s(tt=>tt-W.cost),U(tt=>[...tt,V]),_(V))},B=()=>{if(f.length===0)return;const V=f.reduce((W,tt)=>W+tt.val,0);s(W=>W+V),h([])},Y=(V,W=!1)=>{if(W){const tt=f.filter(H=>H.name===V.name),et=f.filter(H=>H.name!==V.name),P=tt.reduce((H,it)=>H+it.val,0);s(H=>H+P),h(et)}else{const tt=f.findIndex(et=>et.name===V.name);if(tt>-1){const et=[...f];et.splice(tt,1),s(P=>P+V.val),h(et)}}},A=()=>{const V=l*250;n>=V&&(s(W=>W-V),c(W=>W+1))},w=en.useMemo(()=>{const V={};return f.forEach(W=>{V[W.name]||(V[W.name]={...W,count:0,total:0}),V[W.name].count++,V[W.name].total+=W.val}),Object.values(V).sort((W,tt)=>tt.val-W.val)},[f]),G=Fr[M];return pt.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black text-white font-rajdhani select-none",children:[pt.jsx(j2,{missionState:m,level:l,totalDuration:x,timeLeft:g,planet:G}),pt.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between z-10 pointer-events-none",children:[r==="home"&&pt.jsxs("div",{className:"h-full flex flex-col justify-between p-4 pb-28 pointer-events-none",children:[pt.jsxs("div",{className:"flex gap-3 justify-end pointer-events-auto",children:[pt.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl border-l-4 border-blue-500/80 bg-black/70 backdrop-blur-xl shadow-lg animate-[slideUp_0.5s_ease-out]",children:[pt.jsx("span",{className:"text-gray-400 text-[10px] uppercase block tracking-wider font-bold mb-0.5",children:"CRÉDITOS"}),pt.jsxs("span",{className:"text-xl font-bold font-mono text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]",children:[n.toLocaleString()," ₡"]})]}),pt.jsxs("div",{className:"glass-panel px-4 py-2.5 rounded-2xl text-xs font-bold text-gray-300 border border-white/10 bg-black/70 backdrop-blur-xl shadow-lg font-orbitron flex items-center animate-[slideUp_0.5s_ease-out]",children:["MK-",l]})]}),pt.jsx("div",{className:"w-full max-w-md mx-auto mb-3 pointer-events-auto",children:pt.jsxs("div",{className:"glass-panel p-4 rounded-2xl border border-purple-500/30 bg-black/80 backdrop-blur-xl shadow-xl",children:[pt.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3 text-center",children:"SELECCIONAR PLANETA"}),pt.jsx("div",{className:"space-y-2",children:Fr.map(V=>{const W=O.includes(V.id),tt=M===V.id,et=n>=V.cost;return pt.jsxs("div",{className:"flex gap-2 items-center",children:[pt.jsxs("button",{onClick:()=>{W&&_(V.id)},disabled:m==="mining"||!W,className:`flex-1 px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${tt?"bg-purple-600 text-white border-2 border-purple-400":W?"bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700/50":"bg-gray-900/50 text-gray-600 border border-gray-800 cursor-default"} ${m==="mining"?"opacity-50 cursor-not-allowed":""}`,children:[pt.jsxs("div",{className:"flex items-center gap-1.5",children:[pt.jsx("span",{children:V.name}),tt&&pt.jsx("span",{className:"text-[9px]",children:"✓"})]}),W&&pt.jsxs("div",{className:"text-[9px] text-gray-500 mt-0.5",children:["Multiplicador: ",V.rarityMultiplier.toFixed(1),"x"]})]}),!W&&pt.jsxs("button",{onClick:()=>F(V.id),disabled:m==="mining"||!et,className:`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${et?"bg-yellow-600 hover:bg-yellow-500 text-white border border-yellow-400":"bg-gray-800 text-gray-500 border border-gray-700 cursor-not-allowed"} ${m==="mining"?"opacity-50 cursor-not-allowed":""}`,children:[pt.jsx(Cs.Lock,{size:12}),pt.jsx("span",{children:"Comprar Planeta"}),pt.jsxs("span",{className:"text-[9px] ml-1",children:["(",V.cost.toLocaleString()," ₡)"]})]})]},V.id)})})]})}),pt.jsxs("div",{className:"w-full max-w-md mx-auto glass-panel p-5 rounded-3xl border border-blue-500/30 pointer-events-auto shadow-2xl bg-black/80 backdrop-blur-xl animate-[slideUp_0.6s_ease-out]",children:[pt.jsxs("div",{className:"mb-4 text-center",children:[pt.jsx("p",{className:`text-xs font-mono tracking-[0.3em] uppercase font-bold ${m==="mining"?"text-yellow-400 animate-pulse":"text-cyan-400"}`,children:m==="idle"?"• SISTEMAS ONLINE •":m==="mining"?">>> VELOCIDAD LUZ <<<":"• DESTINO ALCANZADO •"}),pt.jsxs("p",{className:"text-[10px] text-gray-500 mt-1 uppercase tracking-wider",children:[G?.name," • Multiplicador: ",G?.rarityMultiplier.toFixed(1),"x"]})]}),m==="idle"&&pt.jsx("button",{onClick:D,className:"w-full bg-gradient-to-br from-blue-600 to-blue-700 hover:to-blue-600 py-4 rounded-2xl font-bold tracking-widest shadow-lg text-white border-b-4 border-blue-800 active:border-b-0 active:translate-y-1 transition-all font-orbitron text-base hover:shadow-blue-500/50",children:"INICIAR MISIÓN"}),m==="mining"&&pt.jsxs("div",{className:"w-full bg-gray-900/80 h-14 rounded-2xl overflow-hidden relative border border-gray-700/50 shadow-inner backdrop-blur-sm",children:[pt.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 animate-pulse transition-all duration-1000",style:{width:`${(1-g/x)*100}%`}}),pt.jsxs("span",{className:"absolute inset-0 flex items-center justify-center font-bold text-gray-900 font-mono tracking-wider text-lg drop-shadow-lg",children:["T-",g,"s"]})]}),m==="ready"&&pt.jsx("button",{onClick:I,className:"w-full bg-gradient-to-r from-green-500 via-green-400 to-green-500 hover:from-green-400 hover:to-green-300 py-4 rounded-2xl font-bold text-gray-900 tracking-widest shadow-[0_0_25px_rgba(74,222,128,0.6)] animate-pulse active:scale-95 transition-all border-b-4 border-green-700 font-orbitron text-base",children:"RECUPERAR CARGA"})]})]}),r==="inventory"&&pt.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-4 pt-12 pb-32 overflow-y-auto pointer-events-auto animate-[slideUp_0.4s_ease-out]",children:[pt.jsxs("div",{className:"flex justify-between items-end mb-8 border-b border-white/10 pb-4",children:[pt.jsxs("div",{children:[pt.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron tracking-wider",children:"BODEGA"}),pt.jsxs("p",{className:"text-xs text-gray-500 mt-1 uppercase tracking-widest",children:["Capacidad: ",f.length," items"]})]}),f.length>0&&pt.jsxs("button",{onClick:B,className:"bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold px-4 py-2 rounded-lg border border-red-500/30 active:scale-95 transition-all flex items-center gap-2",children:[pt.jsx(Cs.Trash,{size:14,className:"inline"})," VENDER TODO"]})]}),w.length===0?pt.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-gray-600",children:[pt.jsx("div",{className:"text-6xl mb-4 opacity-20",children:"📦"}),pt.jsx("p",{className:"font-bold uppercase tracking-widest",children:"Bodega Vacía"})]}):pt.jsx("div",{className:"grid gap-3",children:w.map(V=>pt.jsxs("div",{className:`bg-gray-900/40 border-l-4 ${V.border} p-4 rounded-r-xl flex flex-col gap-3 relative overflow-hidden group`,children:[pt.jsxs("div",{className:"flex justify-between items-start relative z-10",children:[pt.jsxs("div",{className:"flex gap-4 items-center",children:[pt.jsx("div",{className:"text-4xl bg-black/50 w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 shadow-inner",children:V.icon}),pt.jsxs("div",{children:[pt.jsx("h3",{className:`font-bold text-lg leading-tight ${V.style}`,children:V.name}),pt.jsx("span",{className:"text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-0.5 rounded mt-1 inline-block text-gray-400",children:V.rarity})]})]}),pt.jsxs("div",{className:"text-right",children:[pt.jsxs("div",{className:"text-xl font-mono text-white font-bold tracking-tight",children:["+",V.val.toLocaleString(),"₡"]}),pt.jsxs("div",{className:"text-xs text-gray-500 mt-1 font-mono",children:["x",V.count]})]})]}),pt.jsxs("div",{className:"flex gap-2 mt-2",children:[pt.jsxs("button",{onClick:()=>Y(V),className:"flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors",children:[pt.jsx(Cs.Coins,{size:14,className:"text-yellow-500"})," Vender 1"]}),pt.jsxs("button",{onClick:()=>Y(V,!0),className:"flex-1 bg-blue-500/10 hover:bg-blue-500/20 py-2 rounded-lg text-xs font-bold text-blue-300 flex items-center justify-center gap-2 border border-blue-500/20 transition-colors",children:[pt.jsx(Cs.Trash,{size:14})," Vender Todo"]})]})]},V.name))})]}),r==="shop"&&pt.jsxs("div",{className:"h-full bg-black/90 backdrop-blur-xl p-6 pt-12 pb-32 pointer-events-auto animate-[slideUp_0.4s_ease-out] flex flex-col",children:[pt.jsx("h2",{className:"text-3xl font-bold text-white font-orbitron mb-2 text-center tracking-widest",children:"INGENIERÍA"}),pt.jsx("p",{className:"text-center text-gray-500 text-xs uppercase tracking-widest mb-8",children:"Mejoras de Dron & Sistemas"}),pt.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center",children:[pt.jsxs("div",{className:"relative w-full max-w-xs aspect-square mb-8",children:[pt.jsx("div",{className:"absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse"}),pt.jsx("div",{className:"w-full h-full bg-gray-900/50 rounded-full border border-blue-500/30 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.15)]",children:pt.jsx("div",{className:"text-8xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]",children:"🛸"})})]}),pt.jsxs("div",{className:"w-full max-w-sm bg-gray-900/80 rounded-2xl p-6 border border-white/10",children:[pt.jsxs("div",{className:"flex justify-between items-end mb-4",children:[pt.jsxs("div",{children:[pt.jsxs("h3",{className:"text-lg font-bold text-white font-orbitron",children:["Interceptor MK-",l+1]}),pt.jsx("p",{className:"text-xs text-blue-400 uppercase tracking-widest",children:"Próxima Generación"})]}),pt.jsxs("div",{className:"text-right",children:[pt.jsx("span",{className:"block text-[10px] text-gray-500 uppercase",children:"Costo"}),pt.jsxs("span",{className:`font-mono font-bold text-lg ${n>=l*250?"text-green-400":"text-red-400"}`,children:[(l*250).toLocaleString()," ₡"]})]})]}),pt.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[pt.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[pt.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Velocidad"}),pt.jsx("span",{className:"text-green-400 font-bold text-xl",children:"+5%"})]}),pt.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center",children:[pt.jsx("span",{className:"text-gray-500 text-[10px] uppercase font-bold mb-1",children:"Suerte"}),pt.jsx("span",{className:"text-yellow-400 font-bold text-xl",children:"+2%"})]})]}),pt.jsx("button",{onClick:A,disabled:n<l*250,className:`w-full py-4 rounded-xl font-bold font-orbitron text-lg shadow-lg active:scale-95 transition-all ${n>=l*250?"bg-gradient-to-r from-blue-600 to-blue-500 text-white":"bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-700"}`,children:n>=l*250?"INSTALAR MEJORA":"CRÉDITOS INSUFICIENTES"})]})]})]})]}),pt.jsx("div",{className:"absolute bottom-6 w-full px-6 z-50 pointer-events-auto",children:pt.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-2xl rounded-full p-2 flex justify-between items-center h-20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 relative",children:[pt.jsxs("button",{onClick:()=>t("shop"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${r==="shop"?"text-blue-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[pt.jsx(Cs.Bolt,{className:"w-6 h-6"}),pt.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"NAVE"})]}),pt.jsx("div",{className:"relative -top-8",children:pt.jsx("button",{onClick:()=>t("home"),className:`w-20 h-20 rounded-full flex items-center justify-center border-[6px] border-black shadow-2xl transition-all duration-300 ${r==="home"?"bg-blue-600 scale-110 shadow-blue-500/50":"bg-gray-800 hover:bg-gray-700"}`,children:pt.jsx(Cs.Home,{className:"w-8 h-8 text-white"})})}),pt.jsxs("button",{onClick:()=>t("inventory"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${r==="inventory"?"text-yellow-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[pt.jsxs("div",{className:"relative",children:[pt.jsx(Cs.Bag,{className:"w-6 h-6"}),f.length>0&&pt.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping border border-black"})]}),pt.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"CARGA"})]})]})}),E&&pt.jsx(Z2,{item:E,onClose:()=>T(null)})]})}TS.createRoot(document.getElementById("root")).render(pt.jsx(en.StrictMode,{children:pt.jsx(Q2,{})}));
