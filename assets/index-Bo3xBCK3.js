(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Mh={exports:{}},Vo={};var sv;function dy(){if(sv)return Vo;sv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=i,Vo.jsxs=i,Vo}var rv;function py(){return rv||(rv=1,Mh.exports=dy()),Mh.exports}var Et=py(),bh={exports:{}},pe={};var ov;function my(){if(ov)return pe;ov=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function _(O,tt,dt){this.props=O,this.context=tt,this.refs=b,this.updater=dt||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,tt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,tt,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=_.prototype;function U(O,tt,dt){this.props=O,this.context=tt,this.refs=b,this.updater=dt||E}var D=U.prototype=new P;D.constructor=U,T(D,_.prototype),D.isPureReactComponent=!0;var B=Array.isArray;function H(){}var I={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function C(O,tt,dt){var Mt=dt.ref;return{$$typeof:r,type:O,key:tt,ref:Mt!==void 0?Mt:null,props:dt}}function w(O,tt){return C(O.type,tt,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function J(O){var tt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(dt){return tt[dt]})}var $=/\/+/g;function ct(O,tt){return typeof O=="object"&&O!==null&&O.key!=null?J(""+O.key):tt.toString(36)}function at(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(H,H):(O.status="pending",O.then(function(tt){O.status==="pending"&&(O.status="fulfilled",O.value=tt)},function(tt){O.status==="pending"&&(O.status="rejected",O.reason=tt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,tt,dt,Mt,Ut){var et=typeof O;(et==="undefined"||et==="boolean")&&(O=null);var ht=!1;if(O===null)ht=!0;else switch(et){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(O.$$typeof){case r:case t:ht=!0;break;case g:return ht=O._init,L(ht(O._payload),tt,dt,Mt,Ut)}}if(ht)return Ut=Ut(O),ht=Mt===""?"."+ct(O,0):Mt,B(Ut)?(dt="",ht!=null&&(dt=ht.replace($,"$&/")+"/"),L(Ut,tt,dt,"",function(kt){return kt})):Ut!=null&&(V(Ut)&&(Ut=w(Ut,dt+(Ut.key==null||O&&O.key===Ut.key?"":(""+Ut.key).replace($,"$&/")+"/")+ht)),tt.push(Ut)),1;ht=0;var Ot=Mt===""?".":Mt+":";if(B(O))for(var Vt=0;Vt<O.length;Vt++)Mt=O[Vt],et=Ot+ct(Mt,Vt),ht+=L(Mt,tt,dt,et,Ut);else if(Vt=y(O),typeof Vt=="function")for(O=Vt.call(O),Vt=0;!(Mt=O.next()).done;)Mt=Mt.value,et=Ot+ct(Mt,Vt++),ht+=L(Mt,tt,dt,et,Ut);else if(et==="object"){if(typeof O.then=="function")return L(at(O),tt,dt,Mt,Ut);throw tt=String(O),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ht}function F(O,tt,dt){if(O==null)return O;var Mt=[],Ut=0;return L(O,Mt,"","",function(et){return tt.call(dt,et,Ut++)}),Mt}function j(O){if(O._status===-1){var tt=O._result;tt=tt(),tt.then(function(dt){(O._status===0||O._status===-1)&&(O._status=1,O._result=dt)},function(dt){(O._status===0||O._status===-1)&&(O._status=2,O._result=dt)}),O._status===-1&&(O._status=0,O._result=tt)}if(O._status===1)return O._result.default;throw O._result}var St=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},gt={map:F,forEach:function(O,tt,dt){F(O,function(){tt.apply(this,arguments)},dt)},count:function(O){var tt=0;return F(O,function(){tt++}),tt},toArray:function(O){return F(O,function(tt){return tt})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return pe.Activity=v,pe.Children=gt,pe.Component=_,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=U,pe.StrictMode=s,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,pe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},pe.cache=function(O){return function(){return O.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(O,tt,dt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Mt=T({},O.props),Ut=O.key;if(tt!=null)for(et in tt.key!==void 0&&(Ut=""+tt.key),tt)!q.call(tt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&tt.ref===void 0||(Mt[et]=tt[et]);var et=arguments.length-2;if(et===1)Mt.children=dt;else if(1<et){for(var ht=Array(et),Ot=0;Ot<et;Ot++)ht[Ot]=arguments[Ot+2];Mt.children=ht}return C(O.type,Ut,Mt)},pe.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},pe.createElement=function(O,tt,dt){var Mt,Ut={},et=null;if(tt!=null)for(Mt in tt.key!==void 0&&(et=""+tt.key),tt)q.call(tt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Ut[Mt]=tt[Mt]);var ht=arguments.length-2;if(ht===1)Ut.children=dt;else if(1<ht){for(var Ot=Array(ht),Vt=0;Vt<ht;Vt++)Ot[Vt]=arguments[Vt+2];Ut.children=Ot}if(O&&O.defaultProps)for(Mt in ht=O.defaultProps,ht)Ut[Mt]===void 0&&(Ut[Mt]=ht[Mt]);return C(O,et,Ut)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(O){return{$$typeof:h,render:O}},pe.isValidElement=V,pe.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:j}},pe.memo=function(O,tt){return{$$typeof:p,type:O,compare:tt===void 0?null:tt}},pe.startTransition=function(O){var tt=I.T,dt={};I.T=dt;try{var Mt=O(),Ut=I.S;Ut!==null&&Ut(dt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(H,St)}catch(et){St(et)}finally{tt!==null&&dt.types!==null&&(tt.types=dt.types),I.T=tt}},pe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},pe.use=function(O){return I.H.use(O)},pe.useActionState=function(O,tt,dt){return I.H.useActionState(O,tt,dt)},pe.useCallback=function(O,tt){return I.H.useCallback(O,tt)},pe.useContext=function(O){return I.H.useContext(O)},pe.useDebugValue=function(){},pe.useDeferredValue=function(O,tt){return I.H.useDeferredValue(O,tt)},pe.useEffect=function(O,tt){return I.H.useEffect(O,tt)},pe.useEffectEvent=function(O){return I.H.useEffectEvent(O)},pe.useId=function(){return I.H.useId()},pe.useImperativeHandle=function(O,tt,dt){return I.H.useImperativeHandle(O,tt,dt)},pe.useInsertionEffect=function(O,tt){return I.H.useInsertionEffect(O,tt)},pe.useLayoutEffect=function(O,tt){return I.H.useLayoutEffect(O,tt)},pe.useMemo=function(O,tt){return I.H.useMemo(O,tt)},pe.useOptimistic=function(O,tt){return I.H.useOptimistic(O,tt)},pe.useReducer=function(O,tt,dt){return I.H.useReducer(O,tt,dt)},pe.useRef=function(O){return I.H.useRef(O)},pe.useState=function(O){return I.H.useState(O)},pe.useSyncExternalStore=function(O,tt,dt){return I.H.useSyncExternalStore(O,tt,dt)},pe.useTransition=function(){return I.H.useTransition()},pe.version="19.2.3",pe}var lv;function rp(){return lv||(lv=1,bh.exports=my()),bh.exports}var nn=rp(),Eh={exports:{}},ko={},Th={exports:{}},Ah={};var cv;function gy(){return cv||(cv=1,(function(r){function t(L,F){var j=L.length;L.push(F);t:for(;0<j;){var St=j-1>>>1,gt=L[St];if(0<l(gt,F))L[St]=F,L[j]=gt,j=St;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var F=L[0],j=L.pop();if(j!==F){L[0]=j;t:for(var St=0,gt=L.length,O=gt>>>1;St<O;){var tt=2*(St+1)-1,dt=L[tt],Mt=tt+1,Ut=L[Mt];if(0>l(dt,j))Mt<gt&&0>l(Ut,dt)?(L[St]=Ut,L[Mt]=j,St=Mt):(L[St]=dt,L[tt]=j,St=tt);else if(Mt<gt&&0>l(Ut,j))L[St]=Ut,L[Mt]=j,St=Mt;else break t}}return F}function l(L,F){var j=L.sortIndex-F.sortIndex;return j!==0?j:L.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,x=3,y=!1,E=!1,T=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=L)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function B(L){if(T=!1,D(L),!E)if(i(m)!==null)E=!0,H||(H=!0,J());else{var F=i(p);F!==null&&at(B,F.startTime-L)}}var H=!1,I=-1,q=5,C=-1;function w(){return b?!0:!(r.unstable_now()-C<q)}function V(){if(b=!1,H){var L=r.unstable_now();C=L;var F=!0;try{t:{E=!1,T&&(T=!1,P(I),I=-1),y=!0;var j=x;try{e:{for(D(L),v=i(m);v!==null&&!(v.expirationTime>L&&w());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var gt=St(v.expirationTime<=L);if(L=r.unstable_now(),typeof gt=="function"){v.callback=gt,D(L),F=!0;break e}v===i(m)&&s(m),D(L)}else s(m);v=i(m)}if(v!==null)F=!0;else{var O=i(p);O!==null&&at(B,O.startTime-L),F=!1}}break t}finally{v=null,x=j,y=!1}F=void 0}}finally{F?J():H=!1}}}var J;if(typeof U=="function")J=function(){U(V)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ct=$.port2;$.port1.onmessage=V,J=function(){ct.postMessage(null)}}else J=function(){_(V,0)};function at(L,F){I=_(function(){L(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(L){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var j=x;x=F;try{return L()}finally{x=j}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var j=x;x=L;try{return F()}finally{x=j}},r.unstable_scheduleCallback=function(L,F,j){var St=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?St+j:St):j=St,L){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=j+gt,L={id:g++,callback:F,priorityLevel:L,startTime:j,expirationTime:gt,sortIndex:-1},j>St?(L.sortIndex=j,t(p,L),i(m)===null&&L===i(p)&&(T?(P(I),I=-1):T=!0,at(B,j-St))):(L.sortIndex=gt,t(m,L),E||y||(E=!0,H||(H=!0,J()))),L},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(L){var F=x;return function(){var j=x;x=F;try{return L.apply(this,arguments)}finally{x=j}}}})(Ah)),Ah}var uv;function vy(){return uv||(uv=1,Th.exports=gy()),Th.exports}var Ch={exports:{}},On={};var fv;function _y(){if(fv)return On;fv=1;var r=rp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},On.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.3",On}var hv;function xy(){if(hv)return Ch.exports;hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ch.exports=_y(),Ch.exports}var dv;function Sy(){if(dv)return ko;dv=1;var r=vy(),t=rp(),i=xy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=d;break}if(A===o){S=!0,o=u,a=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===a){S=!0,a=d,o=u;break}if(A===o){S=!0,o=d,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case _:return"Profiler";case b:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var at=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},St=[],gt=-1;function O(e){return{current:e}}function tt(e){0>gt||(e.current=St[gt],St[gt]=null,gt--)}function dt(e,n){gt++,St[gt]=e.current,e.current=n}var Mt=O(null),Ut=O(null),et=O(null),ht=O(null);function Ot(e,n){switch(dt(et,n),dt(Ut,e),dt(Mt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rg(n),e=wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Mt),dt(Mt,e)}function Vt(){tt(Mt),tt(Ut),tt(et)}function kt(e){e.memoizedState!==null&&dt(ht,e);var n=Mt.current,a=wg(n,e.type);n!==a&&(dt(Ut,e),dt(Mt,a))}function ge(e){Ut.current===e&&(tt(Mt),tt(Ut)),ht.current===e&&(tt(ht),Io._currentValue=j)}var Re,ue;function _t(e){if(Re===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Re=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Re+e+ue}var Tt=!1;function bt(e,n){if(!e||Tt)return"";Tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ft){var rt=ft}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ft){rt=ft}e.call(xt.prototype)}}else{try{throw Error()}catch(ft){rt=ft}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ft){if(ft&&rt&&typeof ft.stack=="string")return[ft.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var G=S.split(`
`),it=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===it.length)for(o=G.length-1,u=it.length-1;1<=o&&0<=u&&G[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==it[u]){var mt=`
`+G[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Tt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_t(a):""}function Bt(e,n){switch(e.tag){case 26:case 27:case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return e.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return bt(e.type,!1);case 11:return bt(e.type.render,!1);case 1:return bt(e.type,!0);case 31:return _t("Activity");default:return""}}function z(e){try{var n="",a=null;do n+=Bt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ne=Object.prototype.hasOwnProperty,Ft=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,Rt=r.unstable_shouldYield,N=r.unstable_requestPaint,M=r.unstable_now,k=r.unstable_getCurrentPriorityLevel,ot=r.unstable_ImmediatePriority,pt=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,Kt=r.unstable_LowPriority,Pt=r.unstable_IdlePriority,Jt=r.log,oe=r.unstable_setDisableYieldValue,At=null,wt=null;function Yt(e){if(typeof Jt=="function"&&oe(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(At,e)}catch{}}var Wt=Math.clz32?Math.clz32:W,zt=Math.log,ve=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(zt(e)/ve|0)|0}var Ht=256,Dt=262144,qt=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Ct(o):(S&=A,S!==0?u=Ct(S):a||(a=A&~e,a!==0&&(u=Ct(a))))):(A=o&~d,A!==0?u=Ct(A):S!==0?u=Ct(S):a||(a=o&~e,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=qt;return qt<<=1,(qt&62914560)===0&&(qt=4194304),e}function we(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bi(e,n,a,o,u,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(a=S&~a;0<a;){var mt=31-Wt(a),xt=1<<mt;A[mt]=0,G[mt]=-1;var rt=it[mt];if(rt!==null)for(it[mt]=null,mt=0;mt<rt.length;mt++){var ft=rt[mt];ft!==null&&(ft.lane&=-536870913)}a&=~xt}o!==0&&gl(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function gl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Zr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Wt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Bs(e,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jr(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Kg(e.type))}function Pi(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var fi=Math.random().toString(36).slice(2),ln="__reactFiber$"+fi,Mn="__reactProps$"+fi,Ei="__reactContainer$"+fi,Fs="__reactEvents$"+fi,Hs="__reactListeners$"+fi,vl="__reactHandles$"+fi,Kr="__reactResources$"+fi,as="__reactMarker$"+fi;function $r(e){delete e[ln],delete e[Mn],delete e[Fs],delete e[Hs],delete e[vl]}function Ma(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zg(e);e!==null;){if(a=e[ln])return a;e=zg(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[ln]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ss(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ea(e){var n=e[Kr];return n||(n=e[Kr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[as]=!0}var Z=new Set,lt={};function st(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(lt[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},Gt={};function Zt(e){return ne.call(Gt,e)?!0:ne.call(jt,e)?!1:It.test(e)?Gt[e]=!0:(jt[e]=!0,!1)}function $t(e,n,a){if(Zt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function re(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function te(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=Oe(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function Be(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function de(e){return e.replace(Pe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(e,n,a,o,u,d,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+le(n)):e.value!==""+le(n)&&(e.value=""+le(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?En(e,S,le(n)):a!=null?En(e,S,le(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+le(A):e.removeAttribute("name")}function Qi(e,n,a,o,u,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+le(a):"",n=n!=null?""+le(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ye(e)}function En(e,n,a){n==="number"&&ae(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+le(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+le(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+le(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(at(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=le(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ye(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Cn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Cn(e,d,n[d])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ux=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(e){return ux.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var _u=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,ks=null;function Cp(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Be(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hi(e,!!a.multiple,n,!1)}}}var Su=!1;function Rp(e,n,a){if(Su)return e(n,a);Su=!0;try{var o=e(n);return o}finally{if(Su=!1,(Vs!==null||ks!==null)&&(sc(),Vs&&(n=Vs,e=ks,ks=Vs=null,Cp(n),e)))for(n=0;n<e.length;n++)Cp(e[n])}}function to(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(Ki)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){yu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{yu=!1}var Ta=null,Mu=null,xl=null;function wp(){if(xl)return xl;var e,n=Mu,a=n.length,o,u="value"in Ta?Ta.value:Ta.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return xl=u.slice(e,1<o?1-o:void 0)}function Sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Dp(){return!1}function qn(e){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Dp,this.isPropagationStopped=Dp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=qn(rs),no=v({},rs,{view:0,detail:0}),fx=qn(no),bu,Eu,io,bl=v({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(bu=e.screenX-io.screenX,Eu=e.screenY-io.screenY):Eu=bu=0,io=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),Up=qn(bl),hx=v({},bl,{dataTransfer:0}),dx=qn(hx),px=v({},no,{relatedTarget:0}),Tu=qn(px),mx=v({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),gx=qn(mx),vx=v({},rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_x=qn(vx),xx=v({},rs,{data:0}),Np=qn(xx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Mx[e])?!!n[e]:!1}function Au(){return bx}var Ex=v({},no,{key:function(e){if(e.key){var n=Sx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tx=qn(Ex),Ax=v({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=qn(Ax),Cx=v({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Rx=qn(Cx),wx=v({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=qn(wx),Ux=v({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=qn(Ux),Lx=v({},rs,{newState:0,oldState:0}),Ox=qn(Lx),Px=[9,13,27,32],Cu=Ki&&"CompositionEvent"in window,ao=null;Ki&&"documentMode"in document&&(ao=document.documentMode);var zx=Ki&&"TextEvent"in window&&!ao,Op=Ki&&(!Cu||ao&&8<ao&&11>=ao),Pp=" ",zp=!1;function Bp(e,n){switch(e){case"keyup":return Px.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function Bx(e,n){switch(e){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(zp=!0,Pp);case"textInput":return e=n.data,e===Pp&&zp?null:e;default:return null}}function Ix(e,n){if(Xs)return e==="compositionend"||!Cu&&Bp(e,n)?(e=wp(),xl=Mu=Ta=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var Fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fx[e.type]:n==="textarea"}function Hp(e,n,a,o){Vs?ks?ks.push(o):ks=[o]:Vs=o,n=hc(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var so=null,ro=null;function Hx(e){Mg(e,0)}function El(e){var n=ss(e);if(Be(n))return e}function Gp(e,n){if(e==="change")return n}var Vp=!1;if(Ki){var Ru;if(Ki){var wu="oninput"in document;if(!wu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),wu=typeof kp.oninput=="function"}Ru=wu}else Ru=!1;Vp=Ru&&(!document.documentMode||9<document.documentMode)}function Xp(){so&&(so.detachEvent("onpropertychange",Wp),ro=so=null)}function Wp(e){if(e.propertyName==="value"&&El(ro)){var n=[];Hp(n,ro,e,xu(e)),Rp(Hx,n)}}function Gx(e,n,a){e==="focusin"?(Xp(),so=n,ro=a,so.attachEvent("onpropertychange",Wp)):e==="focusout"&&Xp()}function Vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(ro)}function kx(e,n){if(e==="click")return El(n)}function Xx(e,n){if(e==="input"||e==="change")return El(n)}function Wx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ti=typeof Object.is=="function"?Object.is:Wx;function oo(e,n){if(ti(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ne.call(n,u)||!ti(e[u],n[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,n){var a=qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qp(a)}}function jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ae(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ae(e.document)}return n}function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var qx=Ki&&"documentMode"in document&&11>=document.documentMode,Ws=null,Uu=null,lo=null,Nu=!1;function Qp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||Ws==null||Ws!==ae(o)||(o=Ws,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=hc(Uu,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ws)))}function os(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},Lu={},Jp={};Ki&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function ls(e){if(Lu[e])return Lu[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jp)return Lu[e]=n[a];return e}var Kp=ls("animationend"),$p=ls("animationiteration"),tm=ls("animationstart"),Yx=ls("transitionrun"),jx=ls("transitionstart"),Zx=ls("transitioncancel"),em=ls("transitionend"),nm=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Ai(e,n){nm.set(e,n),st(n,[e])}var Tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],Ys=0,Pu=0;function Al(){for(var e=Ys,n=Pu=Ys=0;n<e;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var d=di[n];if(di[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&im(a,u,d)}}function Cl(e,n,a,o){di[Ys++]=e,di[Ys++]=n,di[Ys++]=a,di[Ys++]=o,Pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zu(e,n,a,o){return Cl(e,n,a,o),Rl(e)}function cs(e,n){return Cl(e,null,null,n),Rl(e)}function im(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Wt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Rl(e){if(50<Uo)throw Uo=0,qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var js={};function Qx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,o){return new Qx(e,n,a,o)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function am(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function wl(e,n,a,o,u,d){var S=0;if(o=e,typeof e=="function")Bu(e)&&(S=1);else if(typeof e=="string")S=ey(e,a,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=ei(31,a,n,u),e.elementType=C,e.lanes=d,e;case T:return us(a.children,u,d,n);case b:S=8,u|=24;break;case _:return e=ei(12,a,n,u|2),e.elementType=_,e.lanes=d,e;case B:return e=ei(13,a,n,u),e.elementType=B,e.lanes=d,e;case H:return e=ei(19,a,n,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case P:S=9;break t;case D:S=11;break t;case I:S=14;break t;case q:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ei(S,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function us(e,n,a,o){return e=ei(7,e,o,n),e.lanes=a,e}function Iu(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function sm(e){var n=ei(18,null,null,0);return n.stateNode=e,n}function Fu(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rm=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=rm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:z(n)},rm.set(e,n),n)}return{value:e,source:n,stack:z(n)}}var Zs=[],Qs=0,Dl=null,co=0,mi=[],gi=0,Aa=null,zi=1,Bi="";function ta(e,n){Zs[Qs++]=co,Zs[Qs++]=Dl,Dl=e,co=n}function om(e,n,a){mi[gi++]=zi,mi[gi++]=Bi,mi[gi++]=Aa,Aa=e;var o=zi;e=Bi;var u=32-Wt(o)-1;o&=~(1<<u),a+=1;var d=32-Wt(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,zi=1<<32-Wt(n)+u|a<<u|o,Bi=d+e}else zi=1<<d|a<<u|o,Bi=e}function Hu(e){e.return!==null&&(ta(e,1),om(e,1,0))}function Gu(e){for(;e===Dl;)Dl=Zs[--Qs],Zs[Qs]=null,co=Zs[--Qs],Zs[Qs]=null;for(;e===Aa;)Aa=mi[--gi],mi[gi]=null,Bi=mi[--gi],mi[gi]=null,zi=mi[--gi],mi[gi]=null}function lm(e,n){mi[gi++]=zi,mi[gi++]=Bi,mi[gi++]=Aa,zi=n.id,Bi=n.overflow,Aa=e}var Rn=null,je=null,Ce=!1,Ca=null,vi=!1,Vu=Error(s(519));function Ra(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(pi(n,e)),Vu}function cm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Mn]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)Ee(Lo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ag(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Ra(e,!0)}function um(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Rn=Rn.return}}function Js(e){if(e!==Rn)return!1;if(!Ce)return um(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||oh(e.type,e.memoizedProps)),a=!a),a&&je&&Ra(e),um(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=Pg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=Pg(e)}else n===27?(n=je,Va(e.type)?(e=hh,hh=null,je=e):je=n):je=Rn?xi(e.stateNode.nextSibling):null;return!0}function fs(){je=Rn=null,Ce=!1}function ku(){var e=Ca;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Ca=null),e}function uo(e){Ca===null?Ca=[e]:Ca.push(e)}var Xu=O(null),hs=null,ea=null;function wa(e,n,a){dt(Xu,n._currentValue),n._currentValue=a}function na(e){e._currentValue=Xu.current,tt(Xu)}function Wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Wu(d.return,a,e),o||(S=null);break t}d=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Wu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Ks(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;ti(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===ht.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&qu(n,e,a,o),n.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ds(e){hs=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return fm(hs,e)}function Nl(e,n){return hs===null&&ds(e),fm(e,n)}function fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(s(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var Jx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Kx=r.unstable_scheduleCallback,$x=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new Jx,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&Kx($x,function(){e.controller.abort()})}var ho=null,ju=0,$s=0,tr=null;function tS(e,n){if(ho===null){var a=ho=[];ju=0,$s=Kf(),tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ju++,n.then(hm,hm),n}function hm(){if(--ju===0&&ho!==null){tr!==null&&(tr.status="fulfilled");var e=ho;ho=null,$s=0,tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function eS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=L.S;L.S=function(e,n){Q0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&tS(e,n),dm!==null&&dm(e,n)};var ps=O(null);function Zu(){var e=ps.current;return e!==null?e:qe.pooledCache}function Ll(e,n){n===null?dt(ps,ps.current):dt(ps,n.pool)}function pm(){var e=Zu();return e===null?null:{parent:cn._currentValue,pool:e}}var er=Error(s(460)),Qu=Error(s(474)),Ol=Error(s(542)),Pl={then:function(){}};function mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e}throw gs=n,er}}function ms(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gs=a,er):a}}var gs=null;function vm(){if(gs===null)throw Error(s(459));var e=gs;return gs=null,e}function _m(e){if(e===er||e===Ol)throw Error(s(483))}var nr=null,po=0;function zl(e){var n=po;return po+=1,nr===null&&(nr=[]),gm(nr,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Bl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function xm(e){function n(Q,X){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[X],Q.flags|=16):nt.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=$i(Q,X),Q.index=0,Q.sibling=null,Q}function d(Q,X,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<X?(Q.flags|=67108866,X):nt):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,X,nt,vt){return X===null||X.tag!==6?(X=Iu(nt,Q.mode,vt),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function G(Q,X,nt,vt){var se=nt.type;return se===T?mt(Q,X,nt.props.children,vt,nt.key):X!==null&&(X.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&ms(se)===X.type)?(X=u(X,nt.props),mo(X,nt),X.return=Q,X):(X=wl(nt.type,nt.key,nt.props,null,Q.mode,vt),mo(X,nt),X.return=Q,X)}function it(Q,X,nt,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=Fu(nt,Q.mode,vt),X.return=Q,X):(X=u(X,nt.children||[]),X.return=Q,X)}function mt(Q,X,nt,vt,se){return X===null||X.tag!==7?(X=us(nt,Q.mode,vt,se),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function xt(Q,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Iu(""+X,Q.mode,nt),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return nt=wl(X.type,X.key,X.props,null,Q.mode,nt),mo(nt,X),nt.return=Q,nt;case E:return X=Fu(X,Q.mode,nt),X.return=Q,X;case q:return X=ms(X),xt(Q,X,nt)}if(at(X)||J(X))return X=us(X,Q.mode,nt,null),X.return=Q,X;if(typeof X.then=="function")return xt(Q,zl(X),nt);if(X.$$typeof===U)return xt(Q,Nl(Q,X),nt);Bl(Q,X)}return null}function rt(Q,X,nt,vt){var se=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return se!==null?null:A(Q,X,""+nt,vt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return nt.key===se?G(Q,X,nt,vt):null;case E:return nt.key===se?it(Q,X,nt,vt):null;case q:return nt=ms(nt),rt(Q,X,nt,vt)}if(at(nt)||J(nt))return se!==null?null:mt(Q,X,nt,vt,null);if(typeof nt.then=="function")return rt(Q,X,zl(nt),vt);if(nt.$$typeof===U)return rt(Q,X,Nl(Q,nt),vt);Bl(Q,nt)}return null}function ft(Q,X,nt,vt,se){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Q=Q.get(nt)||null,A(X,Q,""+vt,se);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return Q=Q.get(vt.key===null?nt:vt.key)||null,G(X,Q,vt,se);case E:return Q=Q.get(vt.key===null?nt:vt.key)||null,it(X,Q,vt,se);case q:return vt=ms(vt),ft(Q,X,nt,vt,se)}if(at(vt)||J(vt))return Q=Q.get(nt)||null,mt(X,Q,vt,se,null);if(typeof vt.then=="function")return ft(Q,X,nt,zl(vt),se);if(vt.$$typeof===U)return ft(Q,X,nt,Nl(X,vt),se);Bl(X,vt)}return null}function Qt(Q,X,nt,vt){for(var se=null,Ne=null,ee=X,_e=X=0,Ae=null;ee!==null&&_e<nt.length;_e++){ee.index>_e?(Ae=ee,ee=null):Ae=ee.sibling;var Le=rt(Q,ee,nt[_e],vt);if(Le===null){ee===null&&(ee=Ae);break}e&&ee&&Le.alternate===null&&n(Q,ee),X=d(Le,X,_e),Ne===null?se=Le:Ne.sibling=Le,Ne=Le,ee=Ae}if(_e===nt.length)return a(Q,ee),Ce&&ta(Q,_e),se;if(ee===null){for(;_e<nt.length;_e++)ee=xt(Q,nt[_e],vt),ee!==null&&(X=d(ee,X,_e),Ne===null?se=ee:Ne.sibling=ee,Ne=ee);return Ce&&ta(Q,_e),se}for(ee=o(ee);_e<nt.length;_e++)Ae=ft(ee,Q,_e,nt[_e],vt),Ae!==null&&(e&&Ae.alternate!==null&&ee.delete(Ae.key===null?_e:Ae.key),X=d(Ae,X,_e),Ne===null?se=Ae:Ne.sibling=Ae,Ne=Ae);return e&&ee.forEach(function(Ya){return n(Q,Ya)}),Ce&&ta(Q,_e),se}function ce(Q,X,nt,vt){if(nt==null)throw Error(s(151));for(var se=null,Ne=null,ee=X,_e=X=0,Ae=null,Le=nt.next();ee!==null&&!Le.done;_e++,Le=nt.next()){ee.index>_e?(Ae=ee,ee=null):Ae=ee.sibling;var Ya=rt(Q,ee,Le.value,vt);if(Ya===null){ee===null&&(ee=Ae);break}e&&ee&&Ya.alternate===null&&n(Q,ee),X=d(Ya,X,_e),Ne===null?se=Ya:Ne.sibling=Ya,Ne=Ya,ee=Ae}if(Le.done)return a(Q,ee),Ce&&ta(Q,_e),se;if(ee===null){for(;!Le.done;_e++,Le=nt.next())Le=xt(Q,Le.value,vt),Le!==null&&(X=d(Le,X,_e),Ne===null?se=Le:Ne.sibling=Le,Ne=Le);return Ce&&ta(Q,_e),se}for(ee=o(ee);!Le.done;_e++,Le=nt.next())Le=ft(ee,Q,_e,Le.value,vt),Le!==null&&(e&&Le.alternate!==null&&ee.delete(Le.key===null?_e:Le.key),X=d(Le,X,_e),Ne===null?se=Le:Ne.sibling=Le,Ne=Le);return e&&ee.forEach(function(hy){return n(Q,hy)}),Ce&&ta(Q,_e),se}function We(Q,X,nt,vt){if(typeof nt=="object"&&nt!==null&&nt.type===T&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:t:{for(var se=nt.key;X!==null;){if(X.key===se){if(se=nt.type,se===T){if(X.tag===7){a(Q,X.sibling),vt=u(X,nt.props.children),vt.return=Q,Q=vt;break t}}else if(X.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&ms(se)===X.type){a(Q,X.sibling),vt=u(X,nt.props),mo(vt,nt),vt.return=Q,Q=vt;break t}a(Q,X);break}else n(Q,X);X=X.sibling}nt.type===T?(vt=us(nt.props.children,Q.mode,vt,nt.key),vt.return=Q,Q=vt):(vt=wl(nt.type,nt.key,nt.props,null,Q.mode,vt),mo(vt,nt),vt.return=Q,Q=vt)}return S(Q);case E:t:{for(se=nt.key;X!==null;){if(X.key===se)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(Q,X.sibling),vt=u(X,nt.children||[]),vt.return=Q,Q=vt;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}vt=Fu(nt,Q.mode,vt),vt.return=Q,Q=vt}return S(Q);case q:return nt=ms(nt),We(Q,X,nt,vt)}if(at(nt))return Qt(Q,X,nt,vt);if(J(nt)){if(se=J(nt),typeof se!="function")throw Error(s(150));return nt=se.call(nt),ce(Q,X,nt,vt)}if(typeof nt.then=="function")return We(Q,X,zl(nt),vt);if(nt.$$typeof===U)return We(Q,X,Nl(Q,nt),vt);Bl(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(Q,X.sibling),vt=u(X,nt),vt.return=Q,Q=vt):(a(Q,X),vt=Iu(nt,Q.mode,vt),vt.return=Q,Q=vt),S(Q)):a(Q,X)}return function(Q,X,nt,vt){try{po=0;var se=We(Q,X,nt,vt);return nr=null,se}catch(ee){if(ee===er||ee===Ol)throw ee;var Ne=ei(29,ee,null,Q.mode);return Ne.lanes=vt,Ne.return=Q,Ne}finally{}}}var vs=xm(!0),Sm=xm(!1),Da=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(e),im(e,null,a),n}return Cl(e,o,n,a),Rl(e)}function go(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Zr(e,a)}}function $u(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var tf=!1;function vo(){if(tf){var e=tr;if(e!==null)throw e}}function _o(e,n,a,o){tf=!1;var u=e.updateQueue;Da=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,it=G.next;G.next=null,S===null?d=it:S.next=it,S=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==S&&(A===null?mt.firstBaseUpdate=it:A.next=it,mt.lastBaseUpdate=G))}if(d!==null){var xt=u.baseState;S=0,mt=it=G=null,A=d;do{var rt=A.lane&-536870913,ft=rt!==A.lane;if(ft?(Te&rt)===rt:(o&rt)===rt){rt!==0&&rt===$s&&(tf=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Qt=e,ce=A;rt=n;var We=a;switch(ce.tag){case 1:if(Qt=ce.payload,typeof Qt=="function"){xt=Qt.call(We,xt,rt);break t}xt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=ce.payload,rt=typeof Qt=="function"?Qt.call(We,xt,rt):Qt,rt==null)break t;xt=v({},xt,rt);break t;case 2:Da=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[rt]:ft.push(rt))}else ft={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(it=mt=ft,G=xt):mt=mt.next=ft,S|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ft=A,A=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);mt===null&&(G=xt),u.baseState=G,u.firstBaseUpdate=it,u.lastBaseUpdate=mt,d===null&&(u.shared.lanes=0),Ba|=S,e.lanes=S,e.memoizedState=xt}}function ym(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Mm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ym(a[e],n)}var ir=O(null),Il=O(0);function bm(e,n){e=fa,dt(Il,e),dt(ir,n),fa=e|n.baseLanes}function ef(){dt(Il,fa),dt(ir,ir.current)}function nf(){fa=Il.current,tt(ir),tt(Il)}var ni=O(null),_i=null;function La(e){var n=e.alternate;dt(rn,rn.current&1),dt(ni,e),_i===null&&(n===null||ir.current!==null||n.memoizedState!==null)&&(_i=e)}function af(e){dt(rn,rn.current),dt(ni,e),_i===null&&(_i=e)}function Em(e){e.tag===22?(dt(rn,rn.current),dt(ni,e),_i===null&&(_i=e)):Oa()}function Oa(){dt(rn,rn.current),dt(ni,ni.current)}function ii(e){tt(ni),_i===e&&(_i=null),tt(rn)}var rn=O(0);function Fl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uh(a)||fh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,me=null,ke=null,un=null,Hl=!1,ar=!1,_s=!1,Gl=0,xo=0,sr=null,nS=0;function tn(){throw Error(s(321))}function sf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ti(e[a],n[a]))return!1;return!0}function rf(e,n,a,o,u,d){return ia=d,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?o0:yf,_s=!1,d=a(o,u),_s=!1,ar&&(d=Am(n,a,o,u)),Tm(e),d}function Tm(e){L.H=Mo;var n=ke!==null&&ke.next!==null;if(ia=0,un=ke=me=null,Hl=!1,xo=0,sr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Ul(e)&&(fn=!0))}function Am(e,n,a,o){me=e;var u=0;do{if(ar&&(sr=null),xo=0,ar=!1,25<=u)throw Error(s(301));if(u+=1,un=ke=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=l0,d=n(a,o)}while(ar);return d}function iS(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?So(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(me.flags|=1024),n}function of(){var e=Gl!==0;return Gl=0,e}function lf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cf(e){if(Hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Hl=!1}ia=0,un=ke=me=null,ar=!1,xo=Gl=0,sr=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?me.memoizedState=un=e:un=un.next=e,un}function on(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=un===null?me.memoizedState:un.next;if(n!==null)un=n,ke=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?me.memoizedState=un=e:un=un.next=e}return un}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var n=xo;return xo+=1,sr===null&&(sr=[]),e=gm(sr,e,n),n=me,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?o0:yf),e}function kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return So(e);if(e.$$typeof===U)return wn(e)}throw Error(s(438,String(e)))}function uf(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vl(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function aa(e,n){return typeof n=="function"?n(e):n}function Xl(e){var n=on();return ff(n,ke,e)}function ff(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=S=null,G=null,it=n,mt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(Te&xt)===xt:(ia&xt)===xt){var rt=it.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===$s&&(mt=!0);else if((ia&rt)===rt){it=it.next,rt===$s&&(mt=!0);continue}else xt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(A=G=xt,S=d):G=G.next=xt,me.lanes|=rt,Ba|=rt;xt=it.action,_s&&a(d,xt),d=it.hasEagerState?it.eagerState:a(d,xt)}else rt={lane:xt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(A=G=rt,S=d):G=G.next=rt,me.lanes|=xt,Ba|=xt;it=it.next}while(it!==null&&it!==n);if(G===null?S=d:G.next=A,!ti(d,e.memoizedState)&&(fn=!0,mt&&(a=tr,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);ti(d,n.memoizedState)||(fn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Cm(e,n,a){var o=me,u=on(),d=Ce;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ti((ke||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,mf(Dm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,rr(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));d||(ia&127)!==0||Rm(o,n,a)}return a}function Rm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Vl(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wm(e,n,a,o){n.value=a,n.getSnapshot=o,Um(n)&&Nm(e)}function Dm(e,n,a){return a(function(){Um(n)&&Nm(e)})}function Um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ti(e,a)}catch{return!0}}function Nm(e){var n=cs(e,2);n!==null&&Jn(n,e,2)}function df(e){var n=Vn();if(typeof e=="function"){var a=e;if(e=a(),_s){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},n}function Lm(e,n,a,o){return e.baseState=a,ff(e,ke,typeof o=="function"?o:aa)}function aS(e,n,a,o,u){if(Yl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};L.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Om(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=L.T,S={};L.T=S;try{var A=a(u,o),G=L.S;G!==null&&G(S,A),Pm(e,n,A)}catch(it){pf(e,n,it)}finally{d!==null&&S.types!==null&&(d.types=S.types),L.T=d}}else try{d=a(u,o),Pm(e,n,d)}catch(it){pf(e,n,it)}}function Pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(e,n,o)},function(o){return pf(e,n,o)}):zm(e,n,a)}function zm(e,n,a){n.status="fulfilled",n.value=a,Bm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Om(e,a)))}function pf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}e.action=null}function Bm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Im(e,n){return n}function Fm(e,n){if(Ce){var a=qe.formState;if(a!==null){t:{var o=me;if(Ce){if(je){e:{for(var u=je,d=vi;u.nodeType!==8;){if(!d){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){je=xi(u.nextSibling),o=u.data==="F!";break t}}Ra(o)}o=!1}o&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=a0.bind(null,me,o),o.dispatch=a,o=df(!1),d=Sf.bind(null,me,!1,o.queue),o=Vn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=aS.bind(null,me,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Hm(e){var n=on();return Gm(n,ke,e)}function Gm(e,n,a){if(n=ff(e,n,Im)[0],e=Xl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=So(n)}catch(S){throw S===er?Ol:S}else o=n;n=on();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,rr(9,{destroy:void 0},sS.bind(null,u,a),null)),[o,d,e]}function sS(e,n){e.action=n}function Vm(e){var n=on(),a=ke;if(a!==null)return Gm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function rr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=me.updateQueue,n===null&&(n=Vl(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function km(){return on().memoizedState}function Wl(e,n,a,o){var u=Vn();me.flags|=e,u.memoizedState=rr(1|n,{destroy:void 0},a,o===void 0?null:o)}function ql(e,n,a,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;ke!==null&&o!==null&&sf(o,ke.memoizedState.deps)?u.memoizedState=rr(n,d,a,o):(me.flags|=e,u.memoizedState=rr(1|n,d,a,o))}function Xm(e,n){Wl(8390656,8,e,n)}function mf(e,n){ql(2048,8,e,n)}function rS(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=Vl(),me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Wm(e){var n=on().memoizedState;return rS({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qm(e,n){return ql(4,2,e,n)}function Ym(e,n){return ql(4,4,e,n)}function jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zm(e,n,a){a=a!=null?a.concat([e]):null,ql(4,4,jm.bind(null,n,e),a)}function gf(){}function Qm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Jm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=e(),_s){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,n],o}function vf(e,n,a){return a===void 0||(ia&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=K0(),me.lanes|=e,Ba|=e,a)}function Km(e,n,a,o){return ti(a,n)?a:ir.current!==null?(e=vf(e,a,o),ti(e,n)||(fn=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(Te&261930)===0?(fn=!0,e.memoizedState=a):(e=K0(),me.lanes|=e,Ba|=e,n)}function $m(e,n,a,o,u){var d=F.p;F.p=d!==0&&8>d?d:8;var S=L.T,A={};L.T=A,Sf(e,!1,n,a);try{var G=u(),it=L.S;if(it!==null&&it(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=eS(G,o);yo(e,n,mt,ri(e))}else yo(e,n,o,ri(e))}catch(xt){yo(e,n,{then:function(){},status:"rejected",reason:xt},ri())}finally{F.p=d,S!==null&&A.types!==null&&(S.types=A.types),L.T=S}}function oS(){}function _f(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=t0(e).queue;$m(e,u,n,j,a===null?oS:function(){return e0(e),a(o)})}function t0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function e0(e){var n=t0(e);n.next===null&&(n=e.alternate.memoizedState),yo(e,n.next.queue,{},ri())}function xf(){return wn(Io)}function n0(){return on().memoizedState}function i0(){return on().memoizedState}function lS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Ua(a);var o=Na(n,e,a);o!==null&&(Jn(o,n,a),go(o,n,a)),n={cache:Yu()},e.payload=n;return}n=n.return}}function cS(e,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(e)?s0(n,a):(a=zu(e,n,a,o),a!==null&&(Jn(a,e,o),r0(a,n,o)))}function a0(e,n,a){var o=ri();yo(e,n,a,o)}function yo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(e))s0(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,A=d(S,a);if(u.hasEagerState=!0,u.eagerState=A,ti(A,S))return Cl(e,n,u,0),qe===null&&Al(),!1}catch{}finally{}if(a=zu(e,n,u,o),a!==null)return Jn(a,e,o),r0(a,n,o),!0}return!1}function Sf(e,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yl(e)){if(n)throw Error(s(479))}else n=zu(e,a,o,2),n!==null&&Jn(n,e,2)}function Yl(e){var n=e.alternate;return e===me||n!==null&&n===me}function s0(e,n){ar=Hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function r0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Zr(e,a)}}var Mo={readContext:wn,use:kl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Mo.useEffectEvent=tn;var o0={readContext:wn,use:kl,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Xm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Wl(4194308,4,jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Wl(4194308,4,e,n)},useInsertionEffect:function(e,n){Wl(4,2,e,n)},useMemo:function(e,n){var a=Vn();n=n===void 0?null:n;var o=e();if(_s){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Vn();if(a!==void 0){var u=a(n);if(_s){Yt(!0);try{a(n)}finally{Yt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=cS.bind(null,me,e),[o.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=df(e);var n=e.queue,a=a0.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,n){var a=Vn();return vf(a,e,n)},useTransition:function(){var e=df(!1);return e=$m.bind(null,me,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=me,u=Vn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Te&127)!==0||Rm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Xm(Dm.bind(null,o,d,e),[e]),o.flags|=2048,rr(9,{destroy:void 0},wm.bind(null,o,d,a,n),null),a},useId:function(){var e=Vn(),n=qe.identifierPrefix;if(Ce){var a=Bi,o=zi;a=(o&~(1<<32-Wt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=nS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:xf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var n=Vn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sf.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:uf,useCacheRefresh:function(){return Vn().memoizedState=lS.bind(null,me)},useEffectEvent:function(e){var n=Vn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},yf={readContext:wn,use:kl,useCallback:Qm,useContext:wn,useEffect:mf,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:Xl,useRef:km,useState:function(){return Xl(aa)},useDebugValue:gf,useDeferredValue:function(e,n){var a=on();return Km(a,ke.memoizedState,e,n)},useTransition:function(){var e=Xl(aa)[0],n=on().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:Cm,useId:n0,useHostTransitionStatus:xf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=on();return Lm(a,ke,e,n)},useMemoCache:uf,useCacheRefresh:i0};yf.useEffectEvent=Wm;var l0={readContext:wn,use:kl,useCallback:Qm,useContext:wn,useEffect:mf,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:hf,useRef:km,useState:function(){return hf(aa)},useDebugValue:gf,useDeferredValue:function(e,n){var a=on();return ke===null?vf(a,e,n):Km(a,ke.memoizedState,e,n)},useTransition:function(){var e=hf(aa)[0],n=on().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:Cm,useId:n0,useHostTransitionStatus:xf,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var a=on();return ke!==null?Lm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:i0};l0.useEffectEvent=Wm;function Mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,o),n!==null&&(Jn(n,e,o),go(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,o),n!==null&&(Jn(n,e,o),go(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=Na(e,o,a),n!==null&&(Jn(n,e,a),go(n,e,a))}};function c0(e,n,a,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,d):!0}function u0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&bf.enqueueReplaceState(n,n.state,null)}function xs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function f0(e){Tl(e)}function h0(e){console.error(e)}function d0(e){Tl(e)}function jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function p0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(e,n)},a}function m0(e){return e=Ua(e),e.tag=3,e}function g0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){p0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){p0(n,a,o),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function uS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?rc():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zf(e,o,u)),!1;case 22:return a.flags|=65536,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zf(e,o,u)),!1}throw Error(s(435,a.tag))}return Zf(e,o,u),rc(),!1}if(Ce)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Vu&&(e=Error(s(422),{cause:o}),uo(pi(e,a)))):(o!==Vu&&(n=Error(s(423),{cause:o}),uo(pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=pi(o,a),u=Ef(e.stateNode,o,u),$u(e,u),en!==4&&(en=2)),!1;var d=Error(s(520),{cause:o});if(d=pi(d,a),Do===null?Do=[d]:Do.push(d),en!==4&&(en=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ef(a.stateNode,o,e),$u(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ia===null||!Ia.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=m0(u),g0(u,e,a,o),$u(a,u),!1}a=a.return}while(a!==null);return!1}var Tf=Error(s(461)),fn=!1;function Dn(e,n,a,o){n.child=e===null?Sm(n,null,a,o):vs(n,e.child,a,o)}function v0(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return ds(n),o=rf(e,n,a,S,d,u),A=of(),e!==null&&!fn?(lf(e,n,u),sa(e,n,u)):(Ce&&A&&Hu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function _0(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Bu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,x0(e,n,d,o,u)):(e=wl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Lf(e,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(S,o)&&e.ref===n.ref)return sa(e,n,u)}return n.flags|=1,e=$i(d,o),e.ref=n.ref,e.return=n,n.child=e}function x0(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(oo(d,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=d,Lf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,sa(e,n,u)}return Af(e,n,a,o,u)}function S0(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return y0(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(n,d!==null?d.cachePool:null),d!==null?bm(n,d):ef(),Em(n);else return o=n.lanes=536870912,y0(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ll(n,d.cachePool),bm(n,d),Oa(),n.memoizedState=null):(e!==null&&Ll(n,null),ef(),Oa());return Dn(e,n,u,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function y0(e,n,a,o,u){var d=Zu();return d=d===null?null:{parent:cn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Ll(n,null),ef(),Em(n),e!==null&&Ks(e,n,o,!0),n.childLanes=u,null}function Zl(e,n){return n=Jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function M0(e,n,a){return vs(n,e.child,null,a),e=Zl(n,n.pendingProps),e.flags|=2,ii(n),n.memoizedState=null,e}function fS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=Zl(n,o),n.lanes=536870912,bo(null,e);if(af(n),(e=je)?(e=Og(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return Zl(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(af(n),u)if(n.flags&256)n.flags&=-257,n=M0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Ks(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=qe,o!==null&&(S=Bs(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,cs(e,S),Jn(o,e,S),Tf;rc(),n=M0(e,n,a)}else e=d.treeContext,je=xi(S.nextSibling),Rn=n,Ce=!0,Ca=null,vi=!1,e!==null&&lm(n,e),n=Zl(n,o),n.flags|=4096;return n}return e=$i(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Af(e,n,a,o,u){return ds(n),a=rf(e,n,a,o,void 0,u),o=of(),e!==null&&!fn?(lf(e,n,u),sa(e,n,u)):(Ce&&o&&Hu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function b0(e,n,a,o,u,d){return ds(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(e),o=of(),e!==null&&!fn?(lf(e,n,d),sa(e,n,d)):(Ce&&o&&Hu(n),n.flags|=1,Dn(e,n,a,d),n.child)}function E0(e,n,a,o,u){if(ds(n),n.stateNode===null){var d=js,S=a.contextType;typeof S=="object"&&S!==null&&(d=wn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=bf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ju(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?wn(S):js,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Mf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&bf.enqueueReplaceState(d,d.state,null),_o(n,o,d,u),vo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,G=xs(a,A);d.props=G;var it=d.context,mt=a.contextType;S=js,typeof mt=="object"&&mt!==null&&(S=wn(mt));var xt=a.getDerivedStateFromProps;mt=typeof xt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||it!==S)&&u0(n,d,o,S),Da=!1;var rt=n.memoizedState;d.state=rt,_o(n,o,d,u),vo(),it=n.memoizedState,A||rt!==it||Da?(typeof xt=="function"&&(Mf(n,a,xt,o),it=n.memoizedState),(G=Da||c0(n,a,G,o,rt,it,S))?(mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),d.props=o,d.state=it,d.context=S,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ku(e,n),S=n.memoizedProps,mt=xs(a,S),d.props=mt,xt=n.pendingProps,rt=d.context,it=a.contextType,G=js,typeof it=="object"&&it!==null&&(G=wn(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==xt||rt!==G)&&u0(n,d,o,G),Da=!1,rt=n.memoizedState,d.state=rt,_o(n,o,d,u),vo();var ft=n.memoizedState;S!==xt||rt!==ft||Da||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof A=="function"&&(Mf(n,a,A,o),ft=n.memoizedState),(mt=Da||c0(n,a,mt,o,rt,ft,G)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ft,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ft,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),d.props=o,d.state=ft,d.context=G,o=mt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ql(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=vs(n,e.child,null,u),n.child=vs(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=sa(e,n,u),e}function T0(e,n,a,o){return fs(),n.flags|=256,Dn(e,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(e){return{baseLanes:e,cachePool:pm()}}function wf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function A0(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?La(n):Oa(),(e=je)?(e=Og(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Ra(n);return fh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Oa(),u=n.mode,A=Jl({mode:"hidden",children:A},u),o=us(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Rf(a),o.childLanes=wf(e,S,a),n.memoizedState=Cf,bo(null,o)):(La(n),Df(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(d)n.flags&256?(La(n),n.flags&=-257,n=Uf(e,n,a)):n.memoizedState!==null?(Oa(),n.child=e.child,n.flags|=128,n=null):(Oa(),A=o.fallback,u=n.mode,o=Jl({mode:"visible",children:o.children},u),A=us(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,vs(n,e.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=wf(e,S,a),n.memoizedState=Cf,n=bo(null,o));else if(La(n),fh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var it=S.dgst;S=it,o=Error(s(419)),o.stack="",o.digest=S,uo({value:o,source:null,stack:null}),n=Uf(e,n,a)}else if(fn||Ks(e,n,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=qe,S!==null&&(o=Bs(S,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,cs(e,o),Jn(S,e,o),Tf;uh(A)||rc(),n=Uf(e,n,a)}else uh(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,je=xi(A.nextSibling),Rn=n,Ce=!0,Ca=null,vi=!1,e!==null&&lm(n,e),n=Df(n,o.children),n.flags|=4096);return n}return u?(Oa(),A=o.fallback,u=n.mode,G=e.child,it=G.sibling,o=$i(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,it!==null?A=$i(it,A):(A=us(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,bo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Rf(a):(u=A.cachePool,u!==null?(G=cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=pm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=wf(e,S,a),n.memoizedState=Cf,bo(e.child,o)):(La(n),a=e.child,e=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Df(e,n){return n=Jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Jl(e,n){return e=ei(22,e,null,n),e.lanes=0,e}function Uf(e,n,a){return vs(n,e.child,null,a),e=Df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function C0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Wu(e.return,n,a)}function Nf(e,n,a,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function R0(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=rn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,dt(rn,S),Dn(e,n,o,a),o=Ce?co:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&C0(e,a,n);else if(e.tag===19)C0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Fl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Fl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nf(n,!0,a,null,d,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=$i(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$i(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function hS(e,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),wa(n,cn,e.memoizedState.cache),fs();break;case 27:case 5:kt(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,af(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?A0(e,n,a):(La(n),e=sa(e,n,a),e!==null?e.sibling:null);La(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ks(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return R0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),dt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,S0(e,n,a,n.pendingProps);case 24:wa(n,cn,e.memoizedState.cache)}return sa(e,n,a)}function w0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Lf(e,a)&&(n.flags&128)===0)return fn=!1,hS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Ce&&(n.flags&1048576)!==0&&om(n,co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ms(n.elementType),n.type=e,typeof e=="function")Bu(e)?(o=xs(e,o),n.tag=1,n=E0(null,n,e,o,a)):(n.tag=0,n=Af(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=v0(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=_0(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return Af(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=xs(o,n.pendingProps),E0(e,n,o,u,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Ku(e,n),_o(n,o,null,a);var S=n.memoizedState;if(o=S.cache,wa(n,cn,o),o!==d.cache&&qu(n,[cn],a,!0),vo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=T0(e,n,o,a);break t}else if(o!==u){u=pi(Error(s(424)),n),uo(u),n=T0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=xi(e.firstChild),Rn=n,Ce=!0,Ca=null,vi=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fs(),o===u){n=sa(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return Ql(e,n),e===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=dc(et.current).createElement(a),o[ln]=n,o[Mn]=e,Un(o,a,e),R(o),n.stateNode=o):n.memoizedState=Hg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&Ce&&(o=n.stateNode=Bg(n.type,n.pendingProps,et.current),Rn=n,vi=!0,u=je,Va(n.type)?(hh=u,je=xi(o.firstChild)):je=u),Dn(e,n,n.pendingProps.children,a),Ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=je)&&(o=VS(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Rn=n,je=xi(o.firstChild),vi=!1,u=!0):u=!1),u||Ra(n)),kt(n),u=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,oh(u,d)?o=null:S!==null&&oh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(e,n,iS,null,null,a),Io._currentValue=u),Ql(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=je)&&(a=kS(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Rn=n,je=null,e=!0):e=!1),e||Ra(n)),null;case 13:return A0(e,n,a);case 4:return Ot(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=vs(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return v0(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,wa(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ds(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return _0(e,n,n.type,n.pendingProps,a);case 15:return x0(e,n,n.type,n.pendingProps,a);case 19:return R0(e,n,a);case 31:return fS(e,n,a);case 22:return S0(e,n,a,n.pendingProps);case 24:return ds(n),o=wn(cn),e===null?(u=Zu(),u===null&&(u=qe,d=Yu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ju(n),wa(n,cn,u)):((e.lanes&a)!==0&&(Ku(e,n),_o(n,null,null,a),vo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,cn,o)):(o=d.cache,wa(n,cn,o),o!==u.cache&&qu(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(e){e.flags|=4}function Of(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ng())e.flags|=8192;else throw gs=Pl,Qu}else e.flags&=-16777217}function D0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wg(n))if(ng())e.flags|=8192;else throw gs=Pl,Qu}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,ur|=n)}function Eo(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function dS(e,n,a){var o=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(cn),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ku())),Ze(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(ra(n),d!==null?(Ze(n),D0(n,d)):(Ze(n),Of(n,u,null,o,a))):d?d!==e.memoizedState?(ra(n),Ze(n),D0(n,d)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ra(n),Ze(n),Of(n,u,e,o,a)),null;case 27:if(ge(n),a=et.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Mt.current,Js(n)?cm(n):(e=Bg(u,o,a),n.stateNode=e,ra(n))}return Ze(n),null;case 5:if(ge(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(d=Mt.current,Js(n))cm(n);else{var S=dc(et.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[ln]=n,d[Mn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(Un(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ra(n)}}return Ze(n),Of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ag(e.nodeValue,a)),e||Ra(n,!0)}else e=dc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Js(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),Ze(n),null);case 4:return Vt(),e===null&&nh(n.stateNode.containerInfo),Ze(n),null;case 10:return na(n.type),Ze(n),null;case 19:if(tt(rn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Eo(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Fl(e),d!==null){for(n.flags|=128,Eo(o,!1),e=d.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)am(a,e),a=a.sibling;return dt(rn,rn.current&1|2),Ce&&ta(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&M()>ic&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Fl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ce)return Ze(n),null}else 2*M()-o.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,a=rn.current,dt(rn,u?a&1|2:a&1),Ce&&ta(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ii(n),nf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&tt(ps),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function pS(e,n){switch(Gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(cn),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ge(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return tt(rn),null;case 4:return Vt(),null;case 10:return na(n.type),null;case 22:case 23:return ii(n),nf(),e!==null&&tt(ps),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return na(cn),null;case 25:return null;default:return null}}function U0(e,n){switch(Gu(n),n.tag){case 3:na(cn),Vt();break;case 26:case 27:case 5:ge(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:tt(rn);break;case 10:na(n.type);break;case 22:case 23:ii(n),nf(),e!==null&&tt(ps);break;case 24:na(cn)}}function To(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Pa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var G=a,it=A;try{it()}catch(mt){Ge(u,G,mt)}}}o=o.next}while(o!==d)}}catch(mt){Ge(n,n.return,mt)}}function N0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Mm(n,a)}catch(o){Ge(e,e.return,o)}}}function L0(e,n,a){a.props=xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function O0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Pf(e,n,a){try{var o=e.stateNode;zS(o,e.type,a,n),o[Mn]=n}catch(u){Ge(e,e.return,u)}}function P0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||P0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Va(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Bf(e,n,a),e=e.sibling;e!==null;)Bf(e,n,a),e=e.sibling}function $l(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($l(e,n,a),e=e.sibling;e!==null;)$l(e,n,a),e=e.sibling}function z0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[ln]=e,n[Mn]=a}catch(d){Ge(e,e.return,d)}}var oa=!1,hn=!1,If=!1,B0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function mS(e,n){if(e=e.containerInfo,sh=Sc,e=Zp(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,A=-1,G=-1,it=0,mt=0,xt=e,rt=null;e:for(;;){for(var ft;xt!==a||u!==0&&xt.nodeType!==3||(A=S+u),xt!==d||o!==0&&xt.nodeType!==3||(G=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(ft=xt.firstChild)!==null;)rt=xt,xt=ft;for(;;){if(xt===e)break e;if(rt===a&&++it===u&&(A=S),rt===d&&++mt===o&&(G=S),(ft=xt.nextSibling)!==null)break;xt=rt,rt=xt.parentNode}xt=ft}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(rh={focusedElem:e,selectionRange:a},Sc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Qt=xs(a.type,u);e=o.getSnapshotBeforeUpdate(Qt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ge(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function I0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),o&4&&To(5,a);break;case 1:if(ca(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&N0(a),o&512&&Ao(a,a.return);break;case 3:if(ca(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&z0(a);case 26:case 5:ca(e,a),n===null&&o&4&&O0(a),o&512&&Ao(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),o&4&&G0(e,a);break;case 13:ca(e,a),o&4&&V0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ES.bind(null,a),XS(e,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||hn,u=oa;var d=hn;oa=o,(hn=n)&&!d?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),oa=u,hn=d}break;case 30:break;default:ca(e,a)}}function F0(e){var n=e.alternate;n!==null&&(e.alternate=null,F0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&$r(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Yn=!1;function la(e,n,a){for(a=a.child;a!==null;)H0(e,n,a),a=a.sibling}function H0(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:hn||Ii(a,n),la(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ii(a,n);var o=Je,u=Yn;Va(a.type)&&(Je=a.stateNode,Yn=!1),la(e,n,a),Po(a.stateNode),Je=o,Yn=u;break;case 5:hn||Ii(a,n);case 6:if(o=Je,u=Yn,Je=null,la(e,n,a),Je=o,Yn=u,Je!==null)if(Yn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(d){Ge(a,n,d)}else try{Je.removeChild(a.stateNode)}catch(d){Ge(a,n,d)}break;case 18:Je!==null&&(Yn?(e=Je,Ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):Ng(Je,a.stateNode));break;case 4:o=Je,u=Yn,Je=a.stateNode.containerInfo,Yn=!0,la(e,n,a),Je=o,Yn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),hn||Pa(4,a,n),la(e,n,a);break;case 1:hn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&L0(a,n,o)),la(e,n,a);break;case 21:la(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,la(e,n,a),hn=o;break;default:la(e,n,a)}}function G0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Ge(n,n.return,a)}}}function V0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Ge(n,n.return,a)}}function gS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new B0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new B0),n;default:throw Error(s(435,e.tag))}}function tc(e,n){var a=gS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=TS.bind(null,e,o);o.then(u,u)}})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Va(A.type)){Je=A.stateNode,Yn=!1;break t}break;case 5:Je=A.stateNode,Yn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if(Je===null)throw Error(s(160));H0(d,S,u),Je=null,Yn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,e),n=n.sibling}var Ci=null;function k0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Pa(3,e,e.return),To(3,e),Pa(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(hn||a===null||Ii(a,a.return)),o&64&&oa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(jn(n,e),Zn(e),o&512&&(hn||a===null||Ii(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[as]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Un(d,o,a),d[ln]=e,R(d),o=d;break t;case"link":var S=kg("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;case"meta":if(S=kg("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}d=u.createElement(o),Un(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[ln]=e,R(d),o=d}e.stateNode=o}else Xg(u,e.type,e.stateNode);else e.stateNode=Vg(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Xg(u,e.type,e.stateNode):Vg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(hn||a===null||Ii(a,a.return)),a!==null&&o&4&&Pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(hn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{mn(u,"")}catch(Qt){Ge(e,e.return,Qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Qt){Ge(e,e.return,Qt)}}break;case 3:if(gc=null,u=Ci,Ci=pc(n.containerInfo),jn(n,e),Ci=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(Qt){Ge(e,e.return,Qt)}If&&(If=!1,X0(e));break;case 4:o=Ci,Ci=pc(e.stateNode.containerInfo),jn(n,e),Zn(e),Ci=o;break;case 12:jn(n,e),Zn(e);break;case 31:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,tc(e,o)));break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,tc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,it=oa,mt=hn;if(oa=it||u,hn=mt||G,jn(n,e),hn=mt,oa=it,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||oa||hn||Ss(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=G.stateNode;var xt=G.memoizedProps.style,rt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Qt){Ge(G,G.return,Qt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Qt){Ge(G,G.return,Qt)}}}else if(n.tag===18){if(a===null){G=n;try{var ft=G.stateNode;u?Lg(ft,!0):Lg(G.stateNode,!1)}catch(Qt){Ge(G,G.return,Qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,tc(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,tc(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(P0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=zf(e);$l(e,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(mn(S,""),a.flags&=-33);var A=zf(e);$l(e,A,S);break;case 3:case 4:var G=a.stateNode.containerInfo,it=zf(e);Bf(e,it,G);break;default:throw Error(s(161))}}catch(mt){Ge(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function X0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(e,n.alternate,n),n=n.sibling}function Ss(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),Ss(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&L0(n,n.return,a),Ss(n);break;case 27:Po(n.stateNode);case 26:case 5:Ii(n,n.return),Ss(n);break;case 22:n.memoizedState===null&&Ss(n);break;case 30:Ss(n);break;default:Ss(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:ua(u,d,a),To(4,d);break;case 1:if(ua(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ge(o,o.return,it)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)ym(G[u],A)}catch(it){Ge(o,o.return,it)}}a&&S&64&&N0(d),Ao(d,d.return);break;case 27:z0(d);case 26:case 5:ua(u,d,a),a&&o===null&&S&4&&O0(d),Ao(d,d.return);break;case 12:ua(u,d,a);break;case 31:ua(u,d,a),a&&S&4&&G0(u,d);break;case 13:ua(u,d,a),a&&S&4&&V0(u,d);break;case 22:d.memoizedState===null&&ua(u,d,a),Ao(d,d.return);break;case 30:break;default:ua(u,d,a)}n=n.sibling}}function Ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fo(a))}function Hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(e,n,a,o),n=n.sibling}function W0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&To(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(n,n.return,G)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ri(e,n,a,o):Co(e,n):d._visibility&2?Ri(e,n,a,o):(d._visibility|=2,or(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(S,n);break;case 24:Ri(e,n,a,o),u&2048&&Hf(n.alternate,n);break;default:Ri(e,n,a,o)}}function or(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,A=a,G=o,it=S.flags;switch(S.tag){case 0:case 11:case 15:or(d,S,A,G,u),To(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&2?or(d,S,A,G,u):Co(d,S):(mt._visibility|=2,or(d,S,A,G,u)),u&&it&2048&&Ff(S.alternate,S);break;case 24:or(d,S,A,G,u),u&&it&2048&&Hf(S.alternate,S);break;default:or(d,S,A,G,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Co(a,o),u&2048&&Hf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var Ro=8192;function lr(e,n,a){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)q0(e,n,a),e=e.sibling}function q0(e,n,a){switch(e.tag){case 26:lr(e,n,a),e.flags&Ro&&e.memoizedState!==null&&ny(a,Ci,e.memoizedState,e.memoizedProps);break;case 5:lr(e,n,a);break;case 3:case 4:var o=Ci;Ci=pc(e.stateNode.containerInfo),lr(e,n,a),Ci=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,lr(e,n,a),Ro=o):lr(e,n,a));break;default:lr(e,n,a)}}function Y0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function wo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Z0(o,e)}Y0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)j0(e),e=e.sibling}function j0(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ec(e)):wo(e);break;default:wo(e)}}function ec(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Z0(o,e)}Y0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}e=e.sibling}}function Z0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(F0(o),o===a){xn=null;break t}if(u!==null){u.return=d,xn=u;break t}xn=d}}}var vS={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},_S=typeof WeakMap=="function"?WeakMap:Map,ze=0,qe=null,be=null,Te=0,He=0,ai=null,za=!1,cr=!1,Gf=!1,fa=0,en=0,Ba=0,ys=0,Vf=0,si=0,ur=0,Do=null,Qn=null,kf=!1,nc=0,Q0=0,ic=1/0,ac=null,Ia=null,gn=0,Fa=null,fr=null,ha=0,Xf=0,Wf=null,J0=null,Uo=0,qf=null;function ri(){return(ze&2)!==0&&Te!==0?Te&-Te:L.T!==null?Kf():Jr()}function K0(){if(si===0)if((Te&536870912)===0||Ce){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),si=e}else si=536870912;return e=ni.current,e!==null&&(e.flags|=32),si}function Jn(e,n,a){(e===qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(hr(e,0),Ha(e,Te,si,!1)),Ln(e,a),((ze&2)===0||e!==qe)&&(e===qe&&((ze&2)===0&&(ys|=a),en===4&&Ha(e,Te,si,!1)),Fi(e))}function $0(e,n,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?yS(e,n):jf(e,n,!0),d=o;do{if(u===0){cr&&!o&&Ha(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!xS(a)){u=jf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=Do;var G=A.current.memoizedState.isDehydrated;if(G&&(hr(A,S).flags|=256),S=jf(A,S,!1),S!==2){if(Gf&&!G){A.errorRecoveryDisabledLanes|=d,ys|=d,u=4;break t}d=Qn,Qn=u,d!==null&&(Qn===null?Qn=d:Qn.push.apply(Qn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){hr(e,0),Ha(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(o,n,si,!za);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=nc+300-M(),10<u)){if(Ha(o,n,si,!za),yt(o,0,!0)!==0)break t;ha=n,o.timeoutHandle=Dg(tg.bind(null,o,a,Qn,ac,kf,n,si,ys,ur,za,d,"Throttled",-0,0),u);break t}tg(o,a,Qn,ac,kf,n,si,ys,ur,za,d,null,-0,0)}}break}while(!0);Fi(e)}function tg(e,n,a,o,u,d,S,A,G,it,mt,xt,rt,ft){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},q0(n,d,xt);var Qt=(d&62914560)===d?nc-M():(d&4194048)===d?Q0-M():0;if(Qt=iy(xt,Qt),Qt!==null){ha=d,e.cancelPendingCommit=Qt(lg.bind(null,e,n,d,a,o,u,S,A,G,mt,xt,null,rt,ft)),Ha(e,d,S,!it);return}}lg(e,n,d,a,o,u,S,A,G)}function xS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ti(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(e,n,a,o){n&=~Vf,n&=~ys,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Wt(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&gl(e,a,n)}function sc(){return(ze&6)===0?(No(0),!1):!0}function Yf(){if(be!==null){if(He===0)var e=be.return;else e=be,ea=hs=null,cf(e),nr=null,po=0,e=be;for(;e!==null;)U0(e.alternate,e),e=e.return;be=null}}function hr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,FS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,Yf(),qe=e,be=a=$i(e.current,null),Te=n,He=0,ai=null,za=!1,cr=Lt(e,n),Gf=!1,ur=si=Vf=ys=Ba=en=0,Qn=Do=null,kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Wt(o),d=1<<u;n|=e[u],o&=~d}return fa=n,Al(),a}function eg(e,n){me=null,L.H=Mo,n===er||n===Ol?(n=vm(),He=3):n===Qu?(n=vm(),He=4):He=n===Tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,be===null&&(en=1,jl(e,pi(n,e.current)))}function ng(){var e=ni.current;return e===null?!0:(Te&4194048)===Te?_i===null:(Te&62914560)===Te||(Te&536870912)!==0?e===_i:!1}function ig(){var e=L.H;return L.H=Mo,e===null?Mo:e}function ag(){var e=L.A;return L.A=vS,e}function rc(){en=4,za||(Te&4194048)!==Te&&ni.current!==null||(cr=!0),(Ba&134217727)===0&&(ys&134217727)===0||qe===null||Ha(qe,Te,si,!1)}function jf(e,n,a){var o=ze;ze|=2;var u=ig(),d=ag();(qe!==e||Te!==n)&&(ac=null,hr(e,n)),n=!1;var S=en;t:do try{if(He!==0&&be!==null){var A=be,G=ai;switch(He){case 8:Yf(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var it=He;if(He=0,ai=null,dr(e,A,G,it),a&&cr){S=0;break t}break;default:it=He,He=0,ai=null,dr(e,A,G,it)}}SS(),S=en;break}catch(mt){eg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,ea=hs=null,ze=o,L.H=u,L.A=d,be===null&&(qe=null,Te=0,Al()),S}function SS(){for(;be!==null;)sg(be)}function yS(e,n){var a=ze;ze|=2;var o=ig(),u=ag();qe!==e||Te!==n?(ac=null,ic=M()+500,hr(e,n)):cr=Lt(e,n);t:do try{if(He!==0&&be!==null){n=be;var d=ai;e:switch(He){case 1:He=0,ai=null,dr(e,n,d,1);break;case 2:case 9:if(mm(d)){He=0,ai=null,rg(n);break}n=function(){He!==2&&He!==9||qe!==e||(He=7),Fi(e)},d.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:mm(d)?(He=0,ai=null,rg(n)):(He=0,ai=null,dr(e,n,d,7));break;case 5:var S=null;switch(be.tag){case 26:S=be.memoizedState;case 5:case 27:var A=be;if(S?Wg(S):A.stateNode.complete){He=0,ai=null;var G=A.sibling;if(G!==null)be=G;else{var it=A.return;it!==null?(be=it,oc(it)):be=null}break e}}He=0,ai=null,dr(e,n,d,5);break;case 6:He=0,ai=null,dr(e,n,d,6);break;case 8:Yf(),en=6;break t;default:throw Error(s(462))}}MS();break}catch(mt){eg(e,mt)}while(!0);return ea=hs=null,L.H=o,L.A=u,ze=a,be!==null?0:(qe=null,Te=0,Al(),en)}function MS(){for(;be!==null&&!Rt();)sg(be)}function sg(e){var n=w0(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?oc(e):be=n}function rg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=b0(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=b0(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:cf(n);default:U0(a,n),n=be=am(n,fa),n=w0(a,n,fa)}e.memoizedProps=e.pendingProps,n===null?oc(e):be=n}function dr(e,n,a,o){ea=hs=null,cf(n),nr=null,po=0;var u=n.return;try{if(uS(e,u,n,a,Te)){en=1,jl(e,pi(a,e.current)),be=null;return}}catch(d){if(u!==null)throw be=u,d;en=1,jl(e,pi(a,e.current)),be=null;return}n.flags&32768?(Ce||o===1?e=!0:cr||(Te&536870912)!==0?e=!1:(za=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(n,e)):oc(n)}function oc(e){var n=e;do{if((n.flags&32768)!==0){og(n,za);return}e=n.return;var a=dS(n.alternate,n,fa);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);en===0&&(en=5)}function og(e,n){do{var a=pS(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);en=6,be=null}function lg(e,n,a,o,u,d,S,A,G){e.cancelPendingCommit=null;do lc();while(gn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Pu,bi(e,a,d,S,A,G),e===qe&&(be=qe=null,Te=0),fr=n,Fa=e,ha=a,Xf=d,Wf=u,J0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,AS(ut,function(){return dg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=F.p,F.p=2,S=ze,ze|=4;try{mS(e,n,a)}finally{ze=S,F.p=u,L.T=o}}gn=1,cg(),ug(),fg()}}function cg(){if(gn===1){gn=0;var e=Fa,n=fr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=F.p;F.p=2;var u=ze;ze|=4;try{k0(n,e);var d=rh,S=Zp(e.containerInfo),A=d.focusedElem,G=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&jp(A.ownerDocument.documentElement,A)){if(G!==null&&Du(A)){var it=G.start,mt=G.end;if(mt===void 0&&(mt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(mt,A.value.length);else{var xt=A.ownerDocument||document,rt=xt&&xt.defaultView||window;if(rt.getSelection){var ft=rt.getSelection(),Qt=A.textContent.length,ce=Math.min(G.start,Qt),We=G.end===void 0?ce:Math.min(G.end,Qt);!ft.extend&&ce>We&&(S=We,We=ce,ce=S);var Q=Yp(A,ce),X=Yp(A,We);if(Q&&X&&(ft.rangeCount!==1||ft.anchorNode!==Q.node||ft.anchorOffset!==Q.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var nt=xt.createRange();nt.setStart(Q.node,Q.offset),ft.removeAllRanges(),ce>We?(ft.addRange(nt),ft.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),ft.addRange(nt))}}}}for(xt=[],ft=A;ft=ft.parentNode;)ft.nodeType===1&&xt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var vt=xt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Sc=!!sh,rh=sh=null}finally{ze=u,F.p=o,L.T=a}}e.current=n,gn=2}}function ug(){if(gn===2){gn=0;var e=Fa,n=fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=F.p;F.p=2;var u=ze;ze|=4;try{I0(e,n.alternate,n)}finally{ze=u,F.p=o,L.T=a}}gn=3}}function fg(){if(gn===4||gn===3){gn=0,N();var e=Fa,n=fr,a=ha,o=J0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,fr=Fa=null,hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),Is(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=F.p,F.p=2,L.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{L.T=n,F.p=u}}(ha&3)!==0&&lc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qf?Uo++:(Uo=0,qf=e):Uo=0,No(0)}}function hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fo(n)))}function lc(){return cg(),ug(),fg(),dg()}function dg(){if(gn!==5)return!1;var e=Fa,n=Xf;Xf=0;var a=Is(ha),o=L.T,u=F.p;try{F.p=32>a?32:a,L.T=null,a=Wf,Wf=null;var d=Fa,S=ha;if(gn=0,fr=Fa=null,ha=0,(ze&6)!==0)throw Error(s(331));var A=ze;if(ze|=4,j0(d.current),W0(d,d.current,S,a),ze=A,No(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(At,d)}catch{}return!0}finally{F.p=u,L.T=o,hg(e,n)}}function pg(e,n,a){n=pi(a,n),n=Ef(e.stateNode,n,2),e=Na(e,n,2),e!==null&&(Ln(e,2),Fi(e))}function Ge(e,n,a){if(e.tag===3)pg(e,e,a);else for(;n!==null;){if(n.tag===3){pg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){e=pi(a,e),a=m0(2),o=Na(n,a,2),o!==null&&(g0(a,o,n,e),Ln(o,2),Fi(o));break}}n=n.return}}function Zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new _S;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Gf=!0,u.add(a),e=bS.bind(null,e,n,a),n.then(e,e))}function bS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Te&a)===a&&(en===4||en===3&&(Te&62914560)===Te&&300>M()-nc?(ze&2)===0&&hr(e,0):Vf|=a,ur===Te&&(ur=0)),Fi(e)}function mg(e,n){n===0&&(n=Ie()),e=cs(e,n),e!==null&&(Ln(e,n),Fi(e))}function ES(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(e,a)}function TS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),mg(e,a)}function AS(e,n){return Ft(e,n)}var cc=null,pr=null,Qf=!1,uc=!1,Jf=!1,Ga=0;function Fi(e){e!==pr&&e.next===null&&(pr===null?cc=pr=e:pr=pr.next=e),uc=!0,Qf||(Qf=!0,RS())}function No(e,n){if(!Jf&&uc){Jf=!0;do for(var a=!1,o=cc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Wt(42|e)+1)-1,d&=u&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,xg(o,d))}else d=Te,d=yt(o,o===qe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Lt(o,d)||(a=!0,xg(o,d));o=o.next}while(a);Jf=!1}}function CS(){gg()}function gg(){uc=Qf=!1;var e=0;Ga!==0&&IS()&&(e=Ga);for(var n=M(),a=null,o=cc;o!==null;){var u=o.next,d=vg(o,n);d===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(pr=a)):(a=o,(e!==0||(d&3)!==0)&&(uc=!0)),o=u}gn!==0&&gn!==5||No(e),Ga!==0&&(Ga=0)}function vg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Wt(d),A=1<<S,G=u[S];G===-1?((A&a)===0||(A&o)!==0)&&(u[S]=fe(A,n)):G<=n&&(e.expiredLanes|=A),d&=~A}if(n=qe,a=Te,a=yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ie(o),Is(a)){case 2:case 8:a=pt;break;case 32:a=ut;break;case 268435456:a=Pt;break;default:a=ut}return o=_g.bind(null,e),a=Ft(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lc()&&e.callbackNode!==a)return null;var o=Te;return o=yt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($0(e,o,n),vg(e,M()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function xg(e,n){if(lc())return null;$0(e,n,!0)}function RS(){HS(function(){(ze&6)!==0?Ft(ot,CS):gg()})}function Kf(){if(Ga===0){var e=$s;e===0&&(e=Ht,Ht<<=1,(Ht&261888)===0&&(Ht=256)),Ga=e}return Ga}function Sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_l(""+e)}function yg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function wS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Sg((u[Mn]||null).action),S=o.submitter;S&&(n=(n=S[Mn]||null)?Sg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var A=new Ml("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ga!==0){var G=S?yg(u,S):new FormData(u);_f(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(A.preventDefault(),G=S?yg(u,S):new FormData(u),_f(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var $f=0;$f<Ou.length;$f++){var th=Ou[$f],DS=th.toLowerCase(),US=th[0].toUpperCase()+th.slice(1);Ai(DS,"on"+US)}Ai(Kp,"onAnimationEnd"),Ai($p,"onAnimationIteration"),Ai(tm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Yx,"onTransitionRun"),Ai(jx,"onTransitionStart"),Ai(Zx,"onTransitionCancel"),Ai(em,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function Mg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],G=A.instance,it=A.currentTarget;if(A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(mt){Tl(mt)}u.currentTarget=null,d=G}else for(S=0;S<o.length;S++){if(A=o[S],G=A.instance,it=A.currentTarget,A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(mt){Tl(mt)}u.currentTarget=null,d=G}}}}function Ee(e,n){var a=n[Fs];a===void 0&&(a=n[Fs]=new Set);var o=e+"__bubble";a.has(o)||(bg(n,e,2,!1),a.add(o))}function eh(e,n,a){var o=0;n&&(o|=4),bg(a,e,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[fc]){e[fc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(NS.has(a)||eh(a,!1,e),eh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fc]||(n[fc]=!0,eh("selectionchange",!1,n))}}function bg(e,n,a,o){switch(Kg(n)){case 2:var u=ry;break;case 8:u=oy;break;default:u=vh}a=u.bind(null,n,a,e),u=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ih(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Ma(A),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=d=S;continue t}A=A.parentNode}}o=o.return}Rp(function(){var it=d,mt=xu(a),xt=[];t:{var rt=nm.get(e);if(rt!==void 0){var ft=Ml,Qt=e;switch(e){case"keypress":if(Sl(a)===0)break t;case"keydown":case"keyup":ft=Tx;break;case"focusin":Qt="focus",ft=Tu;break;case"focusout":Qt="blur",ft=Tu;break;case"beforeblur":case"afterblur":ft=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Rx;break;case Kp:case $p:case tm:ft=gx;break;case em:ft=Dx;break;case"scroll":case"scrollend":ft=fx;break;case"wheel":ft=Nx;break;case"copy":case"cut":case"paste":ft=_x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Lp;break;case"toggle":case"beforetoggle":ft=Ox}var ce=(n&4)!==0,We=!ce&&(e==="scroll"||e==="scrollend"),Q=ce?rt!==null?rt+"Capture":null:rt;ce=[];for(var X=it,nt;X!==null;){var vt=X;if(nt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||nt===null||Q===null||(vt=to(X,Q),vt!=null&&ce.push(Oo(X,vt,nt))),We)break;X=X.return}0<ce.length&&(rt=new ft(rt,Qt,null,a,mt),xt.push({event:rt,listeners:ce}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",rt&&a!==_u&&(Qt=a.relatedTarget||a.fromElement)&&(Ma(Qt)||Qt[Ei]))break t;if((ft||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ft?(Qt=a.relatedTarget||a.toElement,ft=it,Qt=Qt?Ma(Qt):null,Qt!==null&&(We=c(Qt),ce=Qt.tag,Qt!==We||ce!==5&&ce!==27&&ce!==6)&&(Qt=null)):(ft=null,Qt=it),ft!==Qt)){if(ce=Up,vt="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Lp,vt="onPointerLeave",Q="onPointerEnter",X="pointer"),We=ft==null?rt:ss(ft),nt=Qt==null?rt:ss(Qt),rt=new ce(vt,X+"leave",ft,a,mt),rt.target=We,rt.relatedTarget=nt,vt=null,Ma(mt)===it&&(ce=new ce(Q,X+"enter",Qt,a,mt),ce.target=nt,ce.relatedTarget=We,vt=ce),We=vt,ft&&Qt)e:{for(ce=LS,Q=ft,X=Qt,nt=0,vt=Q;vt;vt=ce(vt))nt++;vt=0;for(var se=X;se;se=ce(se))vt++;for(;0<nt-vt;)Q=ce(Q),nt--;for(;0<vt-nt;)X=ce(X),vt--;for(;nt--;){if(Q===X||X!==null&&Q===X.alternate){ce=Q;break e}Q=ce(Q),X=ce(X)}ce=null}else ce=null;ft!==null&&Eg(xt,rt,ft,ce,!1),Qt!==null&&We!==null&&Eg(xt,We,Qt,ce,!0)}}t:{if(rt=it?ss(it):window,ft=rt.nodeName&&rt.nodeName.toLowerCase(),ft==="select"||ft==="input"&&rt.type==="file")var Ne=Gp;else if(Fp(rt))if(Vp)Ne=Xx;else{Ne=Vx;var ee=Gx}else ft=rt.nodeName,!ft||ft.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Ti(it.elementType)&&(Ne=Gp):Ne=kx;if(Ne&&(Ne=Ne(e,it))){Hp(xt,Ne,a,mt);break t}ee&&ee(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&En(rt,"number",rt.value)}switch(ee=it?ss(it):window,e){case"focusin":(Fp(ee)||ee.contentEditable==="true")&&(Ws=ee,Uu=it,lo=null);break;case"focusout":lo=Uu=Ws=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Qp(xt,a,mt);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":Qp(xt,a,mt)}var _e;if(Cu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Xs?Bp(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Op&&a.locale!=="ko"&&(Xs||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Xs&&(_e=wp()):(Ta=mt,Mu="value"in Ta?Ta.value:Ta.textContent,Xs=!0)),ee=hc(it,Ae),0<ee.length&&(Ae=new Np(Ae,e,null,a,mt),xt.push({event:Ae,listeners:ee}),_e?Ae.data=_e:(_e=Ip(a),_e!==null&&(Ae.data=_e)))),(_e=zx?Bx(e,a):Ix(e,a))&&(Ae=hc(it,"onBeforeInput"),0<Ae.length&&(ee=new Np("onBeforeInput","beforeinput",null,a,mt),xt.push({event:ee,listeners:Ae}),ee.data=_e)),wS(xt,e,it,a,mt)}Mg(xt,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function hc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=to(e,a),u!=null&&o.unshift(Oo(e,u,d)),u=to(e,n),u!=null&&o.push(Oo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function LS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Eg(e,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var A=a,G=A.alternate,it=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||it===null||(G=it,u?(it=to(a,d),it!=null&&S.unshift(Oo(a,it,G))):u||(it=to(a,d),it!=null&&S.push(Oo(a,it,G)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var OS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(PS,"")}function Ag(e,n){return n=Tg(n),Tg(e)===n}function Xe(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(e,""+o);break;case"className":re(e,"class",o);break;case"tabIndex":re(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":re(e,a,o);break;case"style":Gs(e,o,d);break;case"data":if(n!=="object"){re(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_l(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_l(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=_l(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),$t(e,"popover",o);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$t(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cx.get(a)||a,$t(e,a,o))}}function ah(e,n,a,o,u,d){switch(a){case"style":Gs(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[Mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):$t(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,d,S,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var A=d=S=u=null,G=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":S=mt;break;case"checked":G=mt;break;case"defaultChecked":it=mt;break;case"value":d=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,mt,a,null)}}Qi(e,d,A,G,it,S,u,!1);return;case"select":Ee("invalid",e),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Xe(e,n,u,A,a,null)}n=d,a=S,e.multiple=!!o,n!=null?hi(e,!!o,n,!1):a!=null&&hi(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,n,S,A,a,null)}Tn(e,o,u,d);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,G,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)Ee(Lo[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,it,o,a,null)}return;default:if(Ti(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&ah(e,n,mt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Xe(e,n,A,o,a,null))}function zS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,A=null,G=null,it=null,mt=null;for(ft in a){var xt=a[ft];if(a.hasOwnProperty(ft)&&xt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=xt;default:o.hasOwnProperty(ft)||Xe(e,n,ft,null,o,xt)}}for(var rt in o){var ft=o[rt];if(xt=a[rt],o.hasOwnProperty(rt)&&(ft!=null||xt!=null))switch(rt){case"type":d=ft;break;case"name":u=ft;break;case"checked":it=ft;break;case"defaultChecked":mt=ft;break;case"value":S=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==xt&&Xe(e,n,rt,ft,o,xt)}}bn(e,S,A,G,it,mt,d,u);return;case"select":ft=S=A=rt=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ft=G;default:o.hasOwnProperty(d)||Xe(e,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":rt=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==G&&Xe(e,n,u,d,o,G)}n=A,a=S,o=ft,rt!=null?hi(e,!!a,rt,!1):!!o!=!!a&&(n!=null?hi(e,!!a,n,!0):hi(e,!!a,a?[]:"",!1));return;case"textarea":ft=rt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":rt=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Xe(e,n,S,u,o,d)}Fe(e,rt,ft);return;case"option":for(var Qt in a)if(rt=a[Qt],a.hasOwnProperty(Qt)&&rt!=null&&!o.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:Xe(e,n,Qt,null,o,rt)}for(G in o)if(rt=o[G],ft=a[G],o.hasOwnProperty(G)&&rt!==ft&&(rt!=null||ft!=null))switch(G){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Xe(e,n,G,rt,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)rt=a[ce],a.hasOwnProperty(ce)&&rt!=null&&!o.hasOwnProperty(ce)&&Xe(e,n,ce,null,o,rt);for(it in o)if(rt=o[it],ft=a[it],o.hasOwnProperty(it)&&rt!==ft&&(rt!=null||ft!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Xe(e,n,it,rt,o,ft)}return;default:if(Ti(n)){for(var We in a)rt=a[We],a.hasOwnProperty(We)&&rt!==void 0&&!o.hasOwnProperty(We)&&ah(e,n,We,void 0,o,rt);for(mt in o)rt=o[mt],ft=a[mt],!o.hasOwnProperty(mt)||rt===ft||rt===void 0&&ft===void 0||ah(e,n,mt,rt,o,ft);return}}for(var Q in a)rt=a[Q],a.hasOwnProperty(Q)&&rt!=null&&!o.hasOwnProperty(Q)&&Xe(e,n,Q,null,o,rt);for(xt in o)rt=o[xt],ft=a[xt],!o.hasOwnProperty(xt)||rt===ft||rt==null&&ft==null||Xe(e,n,xt,rt,o,ft)}function Cg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,A=u.duration;if(d&&A&&Cg(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],it=G.startTime;if(it>A)break;var mt=G.transferSize,xt=G.initiatorType;mt&&Cg(xt)&&(G=G.responseEnd,S+=mt*(G<A?1:(A-it)/(G-it)))}if(--o,n+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sh=null,rh=null;function dc(e){return e.nodeType===9?e:e.ownerDocument}function Rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function oh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lh=null;function IS(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(GS)}:Dg;function GS(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Ng(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),_r(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Po(a);for(var d=a.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[as]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Po(e.ownerDocument.body);a=u}while(a);_r(n)}function Lg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ch(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),$r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function VS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[as])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function kS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function Og(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function XS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hh=null;function Pg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function zg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Bg(e,n,a){switch(n=dc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$r(e)}var Si=new Map,Ig=new Set;function pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=F.d;F.d={f:WS,r:qS,D:YS,C:jS,L:ZS,m:QS,X:KS,S:JS,M:$S};function WS(){var e=da.f(),n=sc();return e||n}function qS(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?e0(n):da.r(e)}var mr=typeof document>"u"?null:document;function Fg(e,n,a){var o=mr;if(o&&typeof n=="string"&&n){var u=de(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ig.has(u)||(Ig.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),R(n),o.head.appendChild(n)))}}function YS(e){da.D(e),Fg("dns-prefetch",e,null)}function jS(e,n){da.C(e,n),Fg("preconnect",e,n)}function ZS(e,n,a){da.L(e,n,a);var o=mr;if(o&&e&&n){var u='link[rel="preload"][as="'+de(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+de(a.imageSizes)+'"]')):u+='[href="'+de(e)+'"]';var d=u;switch(n){case"style":d=gr(e);break;case"script":d=vr(e)}Si.has(d)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(d))||n==="script"&&o.querySelector(Bo(d))||(n=o.createElement("link"),Un(n,"link",e),R(n),o.head.appendChild(n)))}}function QS(e,n){da.m(e,n);var a=mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vr(e)}if(!Si.has(d)&&(e=v({rel:"modulepreload",href:e},n),Si.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(d)))return}o=a.createElement("link"),Un(o,"link",e),R(o),a.head.appendChild(o)}}}function JS(e,n,a){da.S(e,n,a);var o=mr;if(o&&e){var u=Ea(o).hoistableStyles,d=gr(e);n=n||"default";var S=u.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(zo(d)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(d))&&dh(e,a);var G=S=o.createElement("link");R(G),Un(G,"link",e),G._p=new Promise(function(it,mt){G.onload=it,G.onerror=mt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,mc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(d,S)}}}function KS(e,n){da.X(e,n);var a=mr;if(a&&e){var o=Ea(a).hoistableScripts,u=vr(e),d=o.get(u);d||(d=a.querySelector(Bo(u)),d||(e=v({src:e,async:!0},n),(n=Si.get(u))&&ph(e,n),d=a.createElement("script"),R(d),Un(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function $S(e,n){da.M(e,n);var a=mr;if(a&&e){var o=Ea(a).hoistableScripts,u=vr(e),d=o.get(u);d||(d=a.querySelector(Bo(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=Si.get(u))&&ph(e,n),d=a.createElement("script"),R(d),Un(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Hg(e,n,a,o){var u=(u=et.current)?pc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gr(a.href),a=Ea(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gr(a.href);var d=Ea(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(zo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),d||ty(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=Ea(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function gr(e){return'href="'+de(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function Gg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function ty(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),R(n),e.head.appendChild(n))}function vr(e){return'[src="'+de(e)+'"]'}function Bo(e){return"script[async]"+e}function Vg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Un(o,"style",u),mc(o,a.precedence,e),n.instance=o;case"stylesheet":u=gr(a.href);var d=e.querySelector(zo(u));if(d)return n.state.loading|=4,n.instance=d,R(d),d;o=Gg(a),(u=Si.get(u))&&dh(o,u),d=(e.ownerDocument||e).createElement("link"),R(d);var S=d;return S._p=new Promise(function(A,G){S.onload=A,S.onerror=G}),Un(d,"link",o),n.state.loading|=4,mc(d,a.precedence,e),n.instance=d;case"script":return d=vr(a.src),(u=e.querySelector(Bo(d)))?(n.instance=u,R(u),u):(o=a,(u=Si.get(d))&&(o=v({},a),ph(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mc(o,a.precedence,e));return n.instance}function mc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var gc=null;function kg(e,n,a){if(gc===null){var o=new Map,u=gc=new Map;u.set(a,o)}else u=gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[as]||d[ln]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function Xg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ey(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ny(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=gr(o.href),d=n.querySelector(zo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=vc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,R(d);return}d=n.ownerDocument||n,o=Gg(o),(u=Si.get(u))&&dh(o,u),d=d.createElement("link"),R(d);var S=d;S._p=new Promise(function(A,G){S.onload=A,S.onerror=G}),Un(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=vc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var mh=0;function iy(e,n){return e.stylesheets&&e.count===0&&xc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&mh===0&&(mh=62500*BS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>mh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _c=null;function xc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_c=new Map,n.forEach(ay,e),_c=null,vc.call(e))}function ay(e,n){if(!(n.state.loading&4)){var a=_c.get(e);if(a)var o=a.get(null);else{a=new Map,_c.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=vc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Io={$$typeof:U,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function sy(e,n,a,o,u,d,S,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function qg(e,n,a,o,u,d,S,A,G,it,mt,xt){return e=new sy(e,n,a,S,G,it,mt,xt,A),n=1,d===!0&&(n|=24),d=ei(3,null,null,n),e.current=d,d.stateNode=e,n=Yu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ju(d),e}function Yg(e){return e?(e=js,e):js}function jg(e,n,a,o,u,d){u=Yg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Na(e,o,n),a!==null&&(Jn(a,e,n),go(a,e,n))}function Zg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gh(e,n){Zg(e,n),(e=e.alternate)&&Zg(e,n)}function Qg(e){if(e.tag===13||e.tag===31){var n=cs(e,67108864);n!==null&&Jn(n,e,67108864),gh(e,67108864)}}function Jg(e){if(e.tag===13||e.tag===31){var n=ri();n=Qr(n);var a=cs(e,n);a!==null&&Jn(a,e,n),gh(e,n)}}var Sc=!0;function ry(e,n,a,o){var u=L.T;L.T=null;var d=F.p;try{F.p=2,vh(e,n,a,o)}finally{F.p=d,L.T=u}}function oy(e,n,a,o){var u=L.T;L.T=null;var d=F.p;try{F.p=8,vh(e,n,a,o)}finally{F.p=d,L.T=u}}function vh(e,n,a,o){if(Sc){var u=_h(o);if(u===null)ih(e,n,o,yc,a),$g(e,o);else if(cy(u,e,n,a,o))o.stopPropagation();else if($g(e,o),n&4&&-1<ly.indexOf(e)){for(;u!==null;){var d=ba(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ct(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var G=1<<31-Wt(S);A.entanglements[1]|=G,S&=~G}Fi(d),(ze&6)===0&&(ic=M()+500,No(0))}}break;case 31:case 13:A=cs(d,2),A!==null&&Jn(A,d,2),sc(),gh(d,2)}if(d=_h(o),d===null&&ih(e,n,o,yc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ih(e,n,o,null,a)}}function _h(e){return e=xu(e),xh(e)}var yc=null;function xh(e){if(yc=null,e=Ma(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return yc=e,null}function Kg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case ot:return 2;case pt:return 8;case ut:case Kt:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var Sh=!1,ka=null,Xa=null,Wa=null,Fo=new Map,Ho=new Map,qa=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,n){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&Qg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function cy(e,n,a,o,u){switch(n){case"focusin":return ka=Go(ka,e,n,a,o,u),!0;case"dragenter":return Xa=Go(Xa,e,n,a,o,u),!0;case"mouseover":return Wa=Go(Wa,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Fo.set(d,Go(Fo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ho.set(d,Go(Ho.get(d)||null,e,n,a,o,u)),!0}return!1}function tv(e){var n=Ma(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){Jg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){Jg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=_h(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=ba(a),n!==null&&Qg(n),e.blockedOn=a,!1;n.shift()}return!0}function ev(e,n,a){Mc(e)&&a.delete(n)}function uy(){Sh=!1,ka!==null&&Mc(ka)&&(ka=null),Xa!==null&&Mc(Xa)&&(Xa=null),Wa!==null&&Mc(Wa)&&(Wa=null),Fo.forEach(ev),Ho.forEach(ev)}function bc(e,n){e.blockedOn===n&&(e.blockedOn=null,Sh||(Sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uy)))}var Ec=null;function nv(e){Ec!==e&&(Ec=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===e&&(Ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(xh(o||a)===null)continue;break}var d=ba(a);d!==null&&(e.splice(n,3),n-=3,_f(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _r(e){function n(G){return bc(G,e)}ka!==null&&bc(ka,e),Xa!==null&&bc(Xa,e),Wa!==null&&bc(Wa,e),Fo.forEach(n),Ho.forEach(n);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)tv(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[Mn]||null;if(typeof d=="function")S||nv(a);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[Mn]||null)A=S.formAction;else if(xh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),nv(a)}}}function iv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function yh(e){this._internalRoot=e}Tc.prototype.render=yh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();jg(a,o,e,n,null,null)},Tc.prototype.unmount=yh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jg(e.current,2,null,e,null,null),sc(),n[Ei]=null}};function Tc(e){this._internalRoot=e}Tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,e),a===0&&tv(e)}};var av=t.version;if(av!=="19.2.3")throw Error(s(527,av,"19.2.3"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var fy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{At=Ac.inject(fy),wt=Ac}catch{}}return ko.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=f0,d=h0,S=d0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=qg(e,1,!1,null,null,a,o,null,u,d,S,iv),e[Ei]=n.current,nh(e),new yh(n)},ko.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=f0,S=h0,A=d0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=qg(e,1,!0,n,a??null,o,u,G,d,S,A,iv),n.context=Yg(null),a=n.current,o=ri(),o=Qr(o),u=Ua(o),u.callback=null,Na(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Fi(n),e[Ei]=n.current,nh(e),new Tc(n)},ko.version="19.2.3",ko}var pv;function yy(){if(pv)return Eh.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Eh.exports=Sy(),Eh.exports}var My=yy();const op="182",by=0,mv=1,Ey=2,Kc=1,Ty=2,Qo=3,is=0,Wn=1,Vi=2,Wi=0,Pr=1,su=2,gv=3,vv=4,Ay=5,ws=100,Cy=101,Ry=102,wy=103,Dy=104,Uy=200,Ny=201,Ly=202,Oy=203,ld=204,cd=205,Py=206,zy=207,By=208,Iy=209,Fy=210,Hy=211,Gy=212,Vy=213,ky=214,ud=0,fd=1,hd=2,Ir=3,dd=4,pd=5,md=6,gd=7,y_=0,Xy=1,Wy=2,qi=0,M_=1,b_=2,E_=3,lp=4,T_=5,A_=6,C_=7,R_=300,Ls=301,Fr=302,vd=303,_d=304,fu=306,xd=1e3,xa=1001,Sd=1002,Nn=1003,qy=1004,Cc=1005,In=1006,Rh=1007,Us=1008,ci=1009,w_=1010,D_=1011,rl=1012,cp=1013,Yi=1014,ki=1015,ui=1016,up=1017,fp=1018,ol=1020,U_=35902,N_=35899,L_=1021,O_=1022,Li=1023,ya=1026,Ns=1027,P_=1028,hp=1029,Hr=1030,dp=1031,pp=1033,$c=33776,tu=33777,eu=33778,nu=33779,yd=35840,Md=35841,bd=35842,Ed=35843,Td=36196,Ad=37492,Cd=37496,Rd=37488,wd=37489,Dd=37490,Ud=37491,Nd=37808,Ld=37809,Od=37810,Pd=37811,zd=37812,Bd=37813,Id=37814,Fd=37815,Hd=37816,Gd=37817,Vd=37818,kd=37819,Xd=37820,Wd=37821,qd=36492,Yd=36494,jd=36495,Zd=36283,Qd=36284,Jd=36285,Kd=36286,Yy=3200,mp=0,jy=1,es="",Mi="srgb",Gr="srgb-linear",ru="linear",Ve="srgb",xr=7680,_v=519,Zy=512,Qy=513,Jy=514,gp=515,Ky=516,$y=517,vp=518,tM=519,xv=35044,Sv="300 es",Xi=2e3,ou=2001;function z_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function eM(){const r=lu("canvas");return r.style.display="block",r}const yv={};function Mv(...r){const t="THREE."+r.shift();console.log(t,...r)}function he(...r){const t="THREE."+r.shift();console.warn(t,...r)}function De(...r){const t="THREE."+r.shift();console.error(t,...r)}function ll(...r){const t=r.join(" ");t in yv||(yv[t]=!0,he(...r))}function nM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class qr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bv=1234567;const el=Math.PI/180,Vr=180/Math.PI;function Ps(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Me(r,t,i){return Math.max(t,Math.min(i,r))}function _p(r,t){return(r%t+t)%t}function iM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function aM(r,t,i){return r!==t?(i-r)/(t-r):0}function nl(r,t,i){return(1-i)*r+i*t}function sM(r,t,i,s){return nl(r,t,1-Math.exp(-i*s))}function rM(r,t=1){return t-Math.abs(_p(r,t*2)-t)}function oM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function lM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function cM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function uM(r,t){return r+Math.random()*(t-r)}function fM(r){return r*(.5-Math.random())}function hM(r){r!==void 0&&(bv=r);let t=bv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dM(r){return r*el}function pM(r){return r*Vr}function mM(r){return(r&r-1)===0&&r!==0}function gM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _M(r,t,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((t+s)/2),g=f((t+s)/2),v=c((t-s)/2),x=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(h*g,m*v,m*x,h*p);break;case"YZY":r.set(m*x,h*g,m*v,h*p);break;case"ZXZ":r.set(m*v,m*x,h*g,h*p);break;case"XZX":r.set(h*g,m*E,m*y,h*p);break;case"YXY":r.set(m*y,h*g,m*E,h*p);break;case"ZYZ":r.set(m*E,m*y,h*g,h*p);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Lr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zn={DEG2RAD:el,RAD2DEG:Vr,generateUUID:Ps,clamp:Me,euclideanModulo:_p,mapLinear:iM,inverseLerp:aM,lerp:nl,damp:sM,pingpong:rM,smoothstep:oM,smootherstep:lM,randInt:cM,randFloat:uM,randFloatSpread:fM,seededRandom:hM,degToRad:dM,radToDeg:pM,isPowerOfTwo:mM,ceilPowerOfTwo:gM,floorPowerOfTwo:vM,setQuaternionFromProperEuler:_M,normalize:kn,denormalize:Lr};class Nt{constructor(t=0,i=0){Nt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dl{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3],x=c[f+0],y=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(h>=1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=T;return}if(v!==T||m!==x||p!==y||g!==E){let b=m*x+p*y+g*E+v*T;b<0&&(x=-x,y=-y,E=-E,T=-T,b=-b);let _=1-h;if(b<.9995){const P=Math.acos(b),U=Math.sin(P);_=Math.sin(_*P)/U,h=Math.sin(h*P)/U,m=m*_+x*h,p=p*_+y*h,g=g*_+E*h,v=v*_+T*h}else{m=m*_+x*h,p=p*_+y*h,g=g*_+E*h,v=v*_+T*h;const P=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=P,p*=P,g*=P,v*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[f],x=c[f+1],y=c[f+2],E=c[f+3];return t[i]=h*E+g*v+m*y-p*x,t[i+1]=m*E+g*x+p*v-h*y,t[i+2]=p*E+g*y+h*x-m*v,t[i+3]=g*E-h*v-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),v=h(c/2),x=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"YXZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"ZXY":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"ZYX":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"YZX":this._x=x*g*v+p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v-x*y*E;break;case"XZY":this._x=x*g*v-p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v+x*y*E;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+h+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>v){const y=2*Math.sqrt(1+s-h-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,s=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ev.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ev.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-h*g,this.y=s+m*g+h*p-c*v,this.z=l+m*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return wh.copy(this).projectOnVector(t),this.sub(wh)}reflect(t){return this.sub(wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new Y,Ev=new dl;class xe{constructor(t,i,s,l,c,f,h,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],y=s[5],E=s[8],T=l[0],b=l[3],_=l[6],P=l[1],U=l[4],D=l[7],B=l[2],H=l[5],I=l[8];return c[0]=f*T+h*P+m*B,c[3]=f*b+h*U+m*H,c[6]=f*_+h*D+m*I,c[1]=p*T+g*P+v*B,c[4]=p*b+g*U+v*H,c[7]=p*_+g*D+v*I,c[2]=x*T+y*P+E*B,c[5]=x*b+y*U+E*H,c[8]=x*_+y*D+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*f-h*p,x=h*m-g*c,y=p*c-f*m,E=i*v+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(l*p-g*s)*T,t[2]=(h*s-l*f)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Dh.makeScale(t,i)),this}rotate(t){return this.premultiply(Dh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Dh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new xe,Tv=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Av=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){const r={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=zr(l.r),l.g=zr(l.g),l.b=zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===es?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ll("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ll("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Gr]:{primaries:t,whitePoint:s,transfer:ru,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const Ue=xM();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Sr;class SM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Sr===void 0&&(Sr=lu("canvas")),Sr.width=t.width,Sr.height=t.height;const l=Sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=lu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yM=0;class xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Uh(l[f].image)):c.push(Uh(l[f]))}else c=Uh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Uh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?SM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let MM=0;const Nh=new Y;class Hn extends qr{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=xa,l=xa,c=In,f=Us,h=Li,m=ci,p=Hn.DEFAULT_ANISOTROPY,g=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Ps(),this.name="",this.source=new xp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){he(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==R_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xd:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xd:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=R_;Hn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],E=m[9],T=m[2],b=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-b)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+b)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(y+1)/2,B=(_+1)/2,H=(g+x)/4,I=(v+T)/4,q=(E+b)/4;return U>D&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=H/s,c=I/s):D>B?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=H/l,c=q/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=I/c,l=q/c),this.set(s,l,c,i),this}let P=Math.sqrt((b-E)*(b-E)+(v-T)*(v-T)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(b-E)/P,this.y=(v-T)/P,this.z=(x-g)/P,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bM extends qr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Hn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new xp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends bM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class B_ extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pl{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,wi):wi.fromBufferAttribute(c,f),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xo),wc.subVectors(this.max,Xo),yr.subVectors(t.a,Xo),Mr.subVectors(t.b,Xo),br.subVectors(t.c,Xo),ja.subVectors(Mr,yr),Za.subVectors(br,Mr),Ms.subVectors(yr,br);let i=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-Ms.z,Ms.y,ja.z,0,-ja.x,Za.z,0,-Za.x,Ms.z,0,-Ms.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-Ms.y,Ms.x,0];return!Lh(i,yr,Mr,br,wc)||(i=[1,0,0,0,1,0,0,0,1],!Lh(i,yr,Mr,br,wc))?!1:(Dc.crossVectors(ja,Za),i=[Dc.x,Dc.y,Dc.z],Lh(i,yr,Mr,br,wc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],wi=new Y,Rc=new pl,yr=new Y,Mr=new Y,br=new Y,ja=new Y,Za=new Y,Ms=new Y,Xo=new Y,wc=new Y,Dc=new Y,bs=new Y;function Lh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){bs.fromArray(r,c);const h=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=t.dot(bs),p=i.dot(bs),g=s.dot(bs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const TM=new pl,Wo=new Y,Oh=new Y;class hu{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):TM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wo.subVectors(t,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wo.copy(t.center).add(Oh)),this.expandByPoint(Wo.copy(t.center).sub(Oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new Y,Ph=new Y,Uc=new Y,Qa=new Y,zh=new Y,Nc=new Y,Bh=new Y;class I_{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ph.copy(t).add(i).multiplyScalar(.5),Uc.copy(i).sub(t).normalize(),Qa.copy(this.origin).sub(Ph);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Uc),h=Qa.dot(this.direction),m=-Qa.dot(Uc),p=Qa.lengthSq(),g=Math.abs(1-f*f);let v,x,y,E;if(g>0)if(v=f*m-h,x=f*h-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const T=1/g;v*=T,x*=T,y=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=c,v=Math.max(0,-(f*x+h)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(f*x+h)),y=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(f*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=f>0?-c:c,v=Math.max(0,-(f*x+h)),y=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ph).addScaledVector(Uc,x),y}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,s,l,c){zh.subVectors(i,t),Nc.subVectors(s,t),Bh.crossVectors(zh,Nc);let f=this.direction.dot(Bh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Qa.subVectors(this.origin,t);const m=h*this.direction.dot(Nc.crossVectors(Qa,Nc));if(m<0)return null;const p=h*this.direction.dot(zh.cross(Qa));if(p<0||m+p>f)return null;const g=-h*Qa.dot(Bh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,s,l,c,f,h,m,p,g,v,x,y,E,T,b){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,g,v,x,y,E,T,b)}set(t,i,s,l,c,f,h,m,p,g,v,x,y,E,T,b){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=E,_[11]=T,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Er.setFromMatrixColumn(t,0).length(),c=1/Er.setFromMatrixColumn(t,1).length(),f=1/Er.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=f*g,y=f*v,E=h*g,T=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=x-T*p,i[9]=-h*m,i[2]=T-x*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,y=m*v,E=p*g,T=p*v;i[0]=x+T*h,i[4]=E*h-y,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=y*h-E,i[6]=T+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,y=m*v,E=p*g,T=p*v;i[0]=x-T*h,i[4]=-f*v,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*g,i[9]=T-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,y=f*v,E=h*g,T=h*v;i[0]=m*g,i[4]=E*p-y,i[8]=x*p+T,i[1]=m*v,i[5]=T*p+x,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=T-x*v,i[8]=E*v+y,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*v+E,i[10]=x-T*v}else if(t.order==="XZY"){const x=f*m,y=f*p,E=h*m,T=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+T,i[5]=f*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=h*g,i[10]=T*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AM,t,CM)}lookAt(t,i,s){const l=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ja.crossVectors(s,oi),Ja.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ja.crossVectors(s,oi)),Ja.normalize(),Lc.crossVectors(oi,Ja),l[0]=Ja.x,l[4]=Lc.x,l[8]=oi.x,l[1]=Ja.y,l[5]=Lc.y,l[9]=oi.y,l[2]=Ja.z,l[6]=Lc.z,l[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],y=s[13],E=s[2],T=s[6],b=s[10],_=s[14],P=s[3],U=s[7],D=s[11],B=s[15],H=l[0],I=l[4],q=l[8],C=l[12],w=l[1],V=l[5],J=l[9],$=l[13],ct=l[2],at=l[6],L=l[10],F=l[14],j=l[3],St=l[7],gt=l[11],O=l[15];return c[0]=f*H+h*w+m*ct+p*j,c[4]=f*I+h*V+m*at+p*St,c[8]=f*q+h*J+m*L+p*gt,c[12]=f*C+h*$+m*F+p*O,c[1]=g*H+v*w+x*ct+y*j,c[5]=g*I+v*V+x*at+y*St,c[9]=g*q+v*J+x*L+y*gt,c[13]=g*C+v*$+x*F+y*O,c[2]=E*H+T*w+b*ct+_*j,c[6]=E*I+T*V+b*at+_*St,c[10]=E*q+T*J+b*L+_*gt,c[14]=E*C+T*$+b*F+_*O,c[3]=P*H+U*w+D*ct+B*j,c[7]=P*I+U*V+D*at+B*St,c[11]=P*q+U*J+D*L+B*gt,c[15]=P*C+U*$+D*F+B*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],y=t[14],E=t[3],T=t[7],b=t[11],_=t[15],P=m*y-p*x,U=h*y-p*v,D=h*x-m*v,B=f*y-p*g,H=f*x-m*g,I=f*v-h*g;return i*(T*P-b*U+_*D)-s*(E*P-b*B+_*H)+l*(E*U-T*B+_*I)-c*(E*D-T*H+b*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],y=t[11],E=t[12],T=t[13],b=t[14],_=t[15],P=v*b*p-T*x*p+T*m*y-h*b*y-v*m*_+h*x*_,U=E*x*p-g*b*p-E*m*y+f*b*y+g*m*_-f*x*_,D=g*T*p-E*v*p+E*h*y-f*T*y-g*h*_+f*v*_,B=E*v*m-g*T*m-E*h*x+f*T*x+g*h*b-f*v*b,H=i*P+s*U+l*D+c*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return t[0]=P*I,t[1]=(T*x*c-v*b*c-T*l*y+s*b*y+v*l*_-s*x*_)*I,t[2]=(h*b*c-T*m*c+T*l*p-s*b*p-h*l*_+s*m*_)*I,t[3]=(v*m*c-h*x*c-v*l*p+s*x*p+h*l*y-s*m*y)*I,t[4]=U*I,t[5]=(g*b*c-E*x*c+E*l*y-i*b*y-g*l*_+i*x*_)*I,t[6]=(E*m*c-f*b*c-E*l*p+i*b*p+f*l*_-i*m*_)*I,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*y+i*m*y)*I,t[8]=D*I,t[9]=(E*v*c-g*T*c-E*s*y+i*T*y+g*s*_-i*v*_)*I,t[10]=(f*T*c-E*h*c+E*s*p-i*T*p-f*s*_+i*h*_)*I,t[11]=(g*h*c-f*v*c-g*s*p+i*v*p+f*s*y-i*h*y)*I,t[12]=B*I,t[13]=(g*T*l-E*v*l+E*s*x-i*T*x-g*s*b+i*v*b)*I,t[14]=(E*h*l-f*T*l-E*s*m+i*T*m+f*s*b-i*h*b)*I,t[15]=(f*v*l-g*h*l+g*s*m-i*v*m-f*s*x+i*h*x)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,v=h+h,x=c*p,y=c*g,E=c*v,T=f*g,b=f*v,_=h*v,P=m*p,U=m*g,D=m*v,B=s.x,H=s.y,I=s.z;return l[0]=(1-(T+_))*B,l[1]=(y+D)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(x+_))*H,l[6]=(b+P)*H,l[7]=0,l[8]=(E+U)*I,l[9]=(b-P)*I,l[10]=(1-(x+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Er.set(l[0],l[1],l[2]).length();const f=Er.set(l[4],l[5],l[6]).length(),h=Er.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Di.copy(this);const p=1/c,g=1/f,v=1/h;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=g,Di.elements[5]*=g,Di.elements[6]*=g,Di.elements[8]*=v,Di.elements[9]*=v,Di.elements[10]*=v,i.setFromRotationMatrix(Di),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Xi,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Xi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===ou)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Xi,m=!1){const p=this.elements,g=2/(i-t),v=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Xi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===ou)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Er=new Y,Di=new Ke,AM=new Y(0,0,0),CM=new Y(1,1,1),Ja=new Y,Lc=new Y,oi=new Y,Cv=new Ke,Rv=new dl;class ji{constructor(t=0,i=0,s=0,l=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Cv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Rv.setFromEuler(this),this.setFromQuaternion(Rv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class F_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let RM=0;const wv=new Y,Tr=new dl,ga=new Ke,Oc=new Y,qo=new Y,wM=new Y,DM=new dl,Dv=new Y(1,0,0),Uv=new Y(0,1,0),Nv=new Y(0,0,1),Lv={type:"added"},UM={type:"removed"},Ar={type:"childadded",child:null},Ih={type:"childremoved",child:null};class pn extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new Y,i=new ji,s=new dl,l=new Y(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new xe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(Dv,t)}rotateY(t){return this.rotateOnAxis(Uv,t)}rotateZ(t){return this.rotateOnAxis(Nv,t)}translateOnAxis(t,i){return wv.copy(t).applyQuaternion(this.quaternion),this.position.add(wv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Dv,t)}translateY(t){return this.translateOnAxis(Uv,t)}translateZ(t){return this.translateOnAxis(Nv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Oc.copy(t):Oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(qo,Oc,this.up):ga.lookAt(Oc,qo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Tr.setFromRotationMatrix(ga),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lv),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(UM),Ih.child=t,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lv),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,wM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,DM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),x=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}pn.DEFAULT_UP=new Y(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new Y,va=new Y,Fh=new Y,_a=new Y,Cr=new Y,Rr=new Y,Ov=new Y,Hh=new Y,Gh=new Y,Vh=new Y,kh=new an,Xh=new an,Wh=new an;class Ni{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),va.subVectors(s,i),Fh.subVectors(t,i);const f=Ui.dot(Ui),h=Ui.dot(va),m=Ui.dot(Fh),p=va.dot(va),g=va.dot(Fh),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-h*g)*x,E=(f*g-h*m)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(h,_a.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return kh.setScalar(0),Xh.setScalar(0),Wh.setScalar(0),kh.fromBufferAttribute(t,i),Xh.fromBufferAttribute(t,s),Wh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(kh,c.x),f.addScaledVector(Xh,c.y),f.addScaledVector(Wh,c.z),f}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),va.subVectors(t,i),Ui.cross(va).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ui.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ni.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ni.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Cr.subVectors(l,s),Rr.subVectors(c,s),Hh.subVectors(t,s);const m=Cr.dot(Hh),p=Rr.dot(Hh);if(m<=0&&p<=0)return i.copy(s);Gh.subVectors(t,l);const g=Cr.dot(Gh),v=Rr.dot(Gh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Cr,f);Vh.subVectors(t,c);const y=Cr.dot(Vh),E=Rr.dot(Vh);if(E>=0&&y<=E)return i.copy(c);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Rr,h);const b=g*E-y*v;if(b<=0&&v-g>=0&&y-E>=0)return Ov.subVectors(c,l),h=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(Ov,h);const _=1/(b+T+x);return f=T*_,h=x*_,i.copy(s).addScaledVector(Cr,f).addScaledVector(Rr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function qh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=_p(t,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=qh(f,c,t+1/3),this.g=qh(f,c,t),this.b=qh(f,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=H_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Ue.workingToColorSpace(Bn.copy(this),t),Math.round(Me(Bn.r*255,0,255))*65536+Math.round(Me(Bn.g*255,0,255))*256+Math.round(Me(Bn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,c=Bn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Bn.copy(this),i),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Mi){Ue.workingToColorSpace(Bn.copy(this),t);const i=Bn.r,s=Bn.g,l=Bn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(Pc);const s=nl(Ka.h,Pc.h,i),l=nl(Ka.s,Pc.s,i),c=nl(Ka.l,Pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new ye;ye.NAMES=H_;let NM=0;class zs extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Pr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){he(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(s.blending=this.blending),this.side!==is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ld&&(s.blendSrc=this.blendSrc),this.blendDst!==cd&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Br extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new Y,zc=new Nt;let LM=0;class Oi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=xv,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)zc.fromBufferAttribute(this,i),zc.applyMatrix3(t),this.setXY(i,zc.x,zc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Lr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lr(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lr(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lr(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xv&&(t.usage=this.usage),t}}class G_ extends Oi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class V_ extends Oi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class sn extends Oi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let OM=0;const yi=new Ke,Yh=new pn,wr=new Y,li=new pl,Yo=new pl,Sn=new Y;class Gn extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(z_(t)?V_:G_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new sn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Yo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(li.min,Yo.min),li.expandByPoint(Sn),Sn.addVectors(li.max,Yo.max),li.expandByPoint(Sn)):(li.expandByPoint(Yo.min),li.expandByPoint(Yo.max))}li.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Sn.fromBufferAttribute(h,p),m&&(wr.fromBufferAttribute(t,p),Sn.add(wr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<s.count;q++)h[q]=new Y,m[q]=new Y;const p=new Y,g=new Y,v=new Y,x=new Nt,y=new Nt,E=new Nt,T=new Y,b=new Y;function _(q,C,w){p.fromBufferAttribute(s,q),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,w),x.fromBufferAttribute(c,q),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),g.sub(p),v.sub(p),y.sub(x),E.sub(x);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(V),b.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),h[q].add(T),h[C].add(T),h[w].add(T),m[q].add(b),m[C].add(b),m[w].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,C=P.length;q<C;++q){const w=P[q],V=w.start,J=w.count;for(let $=V,ct=V+J;$<ct;$+=3)_(t.getX($+0),t.getX($+1),t.getX($+2))}const U=new Y,D=new Y,B=new Y,H=new Y;function I(q){B.fromBufferAttribute(l,q),H.copy(B);const C=h[q];U.copy(C),U.sub(B.multiplyScalar(B.dot(C))).normalize(),D.crossVectors(H,C);const V=D.dot(m[q])<0?-1:1;f.setXYZW(q,U.x,U.y,U.z,V)}for(let q=0,C=P.length;q<C;++q){const w=P[q],V=w.start,J=w.count;for(let $=V,ct=V+J;$<ct;$+=3)I(t.getX($+0)),I(t.getX($+1)),I(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new Y,c=new Y,f=new Y,h=new Y,m=new Y,p=new Y,g=new Y,v=new Y;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),T=t.getX(x+1),b=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,b),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let T=0,b=m.length;T<b;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*g;for(let _=0;_<g;_++)x[E++]=p[y++]}return new Oi(x,g,v)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=t(x,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pv=new Ke,Es=new I_,Bc=new hu,zv=new Y,Ic=new Y,Fc=new Y,Hc=new Y,jh=new Y,Gc=new Y,Bv=new Y,Vc=new Y;class yn extends pn{constructor(t=new Gn,i=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Gc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(jh.fromBufferAttribute(v,t),f?Gc.addScaledVector(jh,g):Gc.addScaledVector(jh.sub(i),g))}i.add(Gc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),Es.copy(t.ray).recast(t.near),!(Bc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Bc,zv)===null||Es.origin.distanceToSquared(zv)>(t.far-t.near)**2))&&(Pv.copy(c).invert(),Es.copy(t.ray).applyMatrix4(Pv),!(s.boundingBox!==null&&Es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Es)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const b=x[E],_=f[b.materialIndex],P=Math.max(b.start,y.start),U=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let D=P,B=U;D<B;D+=3){const H=h.getX(D),I=h.getX(D+1),q=h.getX(D+2);l=kc(this,_,t,s,p,g,v,H,I,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let b=E,_=T;b<_;b+=3){const P=h.getX(b),U=h.getX(b+1),D=h.getX(b+2);l=kc(this,f,t,s,p,g,v,P,U,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const b=x[E],_=f[b.materialIndex],P=Math.max(b.start,y.start),U=Math.min(m.count,Math.min(b.start+b.count,y.start+y.count));for(let D=P,B=U;D<B;D+=3){const H=D,I=D+1,q=D+2;l=kc(this,_,t,s,p,g,v,H,I,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let b=E,_=T;b<_;b+=3){const P=b,U=b+1,D=b+2;l=kc(this,f,t,s,p,g,v,P,U,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function PM(r,t,i,s,l,c,f,h){let m;if(t.side===Wn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===is,h),m===null)return null;Vc.copy(h),Vc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Vc);return p<i.near||p>i.far?null:{distance:p,point:Vc.clone(),object:r}}function kc(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Ic),r.getVertexPosition(m,Fc),r.getVertexPosition(p,Hc);const g=PM(r,t,i,s,Ic,Fc,Hc,Bv);if(g){const v=new Y;Ni.getBarycoord(Bv,Ic,Fc,Hc,v),l&&(g.uv=Ni.getInterpolatedAttribute(l,h,m,p,v,new Nt)),c&&(g.uv1=Ni.getInterpolatedAttribute(c,h,m,p,v,new Nt)),f&&(g.normal=Ni.getInterpolatedAttribute(f,h,m,p,v,new Y),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new Y,materialIndex:0};Ni.getNormal(Ic,Fc,Hc,x.normal),g.face=x,g.barycoord=v}return g}class Yr extends Gn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(v,2));function E(T,b,_,P,U,D,B,H,I,q,C){const w=D/I,V=B/q,J=D/2,$=B/2,ct=H/2,at=I+1,L=q+1;let F=0,j=0;const St=new Y;for(let gt=0;gt<L;gt++){const O=gt*V-$;for(let tt=0;tt<at;tt++){const dt=tt*w-J;St[T]=dt*P,St[b]=O*U,St[_]=ct,p.push(St.x,St.y,St.z),St[T]=0,St[b]=0,St[_]=H>0?1:-1,g.push(St.x,St.y,St.z),v.push(tt/I),v.push(1-gt/q),F+=1}}for(let gt=0;gt<q;gt++)for(let O=0;O<I;O++){const tt=x+O+at*gt,dt=x+O+at*(gt+1),Mt=x+(O+1)+at*(gt+1),Ut=x+(O+1)+at*gt;m.push(tt,dt,Ut),m.push(dt,Mt,Ut),j+=6}h.addGroup(y,j,C),y+=j,x+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Xn(r){const t={};for(let i=0;i<r.length;i++){const s=kr(r[i]);for(const l in s)t[l]=s[l]}return t}function zM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function k_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const cu={clone:kr,merge:Xn};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=IM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=zM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class X_ extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new Y,Iv=new Nt,Fv=new Nt;class Kn extends X_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-t/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-t/$a.z)}getViewSize(t,i){return this.getViewBounds(t,Iv,Fv),i.subVectors(Fv,Iv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(el*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Dr=-90,Ur=1;class FM extends pn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Kn(Dr,Ur,t,i);l.layers=this.layers,this.add(l);const c=new Kn(Dr,Ur,t,i);c.layers=this.layers,this.add(c);const f=new Kn(Dr,Ur,t,i);f.layers=this.layers,this.add(f);const h=new Kn(Dr,Ur,t,i);h.layers=this.layers,this.add(h);const m=new Kn(Dr,Ur,t,i);m.layers=this.layers,this.add(m);const p=new Kn(Dr,Ur,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ou)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,x,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class W_ extends Hn{constructor(t=[],i=Ls,s,l,c,f,h,m,p,g){super(t,i,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class q_ extends $n{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new W_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yr(5,5,5),c=new Fn({name:"CubemapFromEquirect",uniforms:kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Wi});c.uniforms.tEquirect.value=i;const f=new yn(l,c),h=i.minFilter;return i.minFilter===Us&&(i.minFilter=In),new FM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Jo extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const b=i.getJointPose(T,s),_=this._getHandJoint(p,T);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Jo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Sp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Sp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class GM extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class VM extends Hn{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Nn,g=Nn,v,x){super(null,f,h,m,p,g,l,c,v,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new Y,kM=new Y,XM=new xe;class Rs{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Qh.subVectors(s,i).cross(kM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Qh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||XM.getNormalMatrix(t),l=this.coplanarPoint(Qh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new hu,WM=new Nt(.5,.5),Xc=new Y;class yp{constructor(t=new Rs,i=new Rs,s=new Rs,l=new Rs,c=new Rs,f=new Rs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Xi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],y=c[7],E=c[8],T=c[9],b=c[10],_=c[11],P=c[12],U=c[13],D=c[14],B=c[15];if(l[0].setComponents(p-f,y-g,_-E,B-P).normalize(),l[1].setComponents(p+f,y+g,_+E,B+P).normalize(),l[2].setComponents(p+h,y+v,_+T,B+U).normalize(),l[3].setComponents(p-h,y-v,_-T,B-U).normalize(),s)l[4].setComponents(m,x,b,D).normalize(),l[5].setComponents(p-m,y-x,_-b,B-D).normalize();else if(l[4].setComponents(p-m,y-x,_-b,B-D).normalize(),i===Xi)l[5].setComponents(p+m,y+x,_+b,B+D).normalize();else if(i===ou)l[5].setComponents(m,x,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);const i=WM.distanceTo(t.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Xc.x=l.normal.x>0?t.max.x:t.min.x,Xc.y=l.normal.y>0?t.max.y:t.min.y,Xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y_ extends zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hv=new Ke,$d=new I_,Wc=new hu,qc=new Y;class qM extends pn{constructor(t=new Gn,i=new Y_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wc.copy(s.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,t.ray.intersectsSphere(Wc)===!1)return;Hv.copy(l).invert(),$d.copy(t.ray).applyMatrix4(Hv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const x=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let E=x,T=y;E<T;E++){const b=p.getX(E);qc.fromBufferAttribute(v,b),Gv(qc,b,m,l,t,i,this)}}else{const x=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let E=x,T=y;E<T;E++)qc.fromBufferAttribute(v,E),Gv(qc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Gv(r,t,i,s,l,c,f){const h=$d.distanceSqToPoint(r);if(h<i){const m=new Y;$d.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class YM extends Hn{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cl extends Hn{constructor(t,i,s=Yi,l,c,f,h=Nn,m=Nn,p,g=ya,v=1){if(g!==ya&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jM extends cl{constructor(t,i=Yi,s=Ls,l,c,f=Nn,h=Nn,m,p=ya){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class j_ extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mp extends Gn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],x=[],y=[];let E=0;const T=[],b=s/2;let _=0;P(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(y,2));function P(){const D=new Y,B=new Y;let H=0;const I=(i-t)/s;for(let q=0;q<=c;q++){const C=[],w=q/c,V=w*(i-t)+t;for(let J=0;J<=l;J++){const $=J/l,ct=$*m+h,at=Math.sin(ct),L=Math.cos(ct);B.x=V*at,B.y=-w*s+b,B.z=V*L,v.push(B.x,B.y,B.z),D.set(at,I,L).normalize(),x.push(D.x,D.y,D.z),y.push($,1-w),C.push(E++)}T.push(C)}for(let q=0;q<l;q++)for(let C=0;C<c;C++){const w=T[C][q],V=T[C+1][q],J=T[C+1][q+1],$=T[C][q+1];(t>0||C!==0)&&(g.push(w,V,$),H+=3),(i>0||C!==c-1)&&(g.push(V,J,$),H+=3)}p.addGroup(_,H,0),_+=H}function U(D){const B=E,H=new Nt,I=new Y;let q=0;const C=D===!0?t:i,w=D===!0?1:-1;for(let J=1;J<=l;J++)v.push(0,b*w,0),x.push(0,w,0),y.push(.5,.5),E++;const V=E;for(let J=0;J<=l;J++){const ct=J/l*m+h,at=Math.cos(ct),L=Math.sin(ct);I.x=C*L,I.y=b*w,I.z=C*at,v.push(I.x,I.y,I.z),x.push(0,w,0),H.x=at*.5+.5,H.y=L*.5*w+.5,y.push(H.x,H.y),E++}for(let J=0;J<l;J++){const $=B+J,ct=V+J;D===!0?g.push(ct,ct+1,$):g.push(ct+1,ct,$),q+=3}p.addGroup(_,q,D===!0?1:2),_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const g=s[l],x=s[l+1]-g,y=(f-g)/x;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new Nt:new Y);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Y,l=[],c=[],f=[],h=new Y,m=new Ke;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new Y)}c[0]=new Y,f[0]=new Y;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),x<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Me(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,E))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Me(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bp extends Zi{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,i=new Nt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=m-this.aX,y=p-this.aY;m=x*g-y*v+this.aX,p=x*v+y*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ZM extends bp{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Ep(){let r=0,t=0,i=0,s=0;function l(c,f,h,m){r=c,t=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,g,v){let x=(f-c)/p-(h-c)/(p+g)+(h-f)/g,y=(h-f)/g-(m-f)/(g+v)+(m-h)/v;x*=g,y*=g,l(f,h,x,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const Yc=new Y,Jh=new Ep,Kh=new Ep,$h=new Ep;class QM extends Zi{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new Y){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=l[(h-1)%c]:(Yc.subVectors(l[0],l[1]).add(l[0]),p=Yc);const v=l[h%c],x=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Yc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Yc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),y),T=Math.pow(v.distanceToSquared(x),y),b=Math.pow(x.distanceToSquared(g),y);T<1e-4&&(T=1),E<1e-4&&(E=T),b<1e-4&&(b=T),Jh.initNonuniformCatmullRom(p.x,v.x,x.x,g.x,E,T,b),Kh.initNonuniformCatmullRom(p.y,v.y,x.y,g.y,E,T,b),$h.initNonuniformCatmullRom(p.z,v.z,x.z,g.z,E,T,b)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(p.x,v.x,x.x,g.x,this.tension),Kh.initCatmullRom(p.y,v.y,x.y,g.y,this.tension),$h.initCatmullRom(p.z,v.z,x.z,g.z,this.tension));return s.set(Jh.calc(m),Kh.calc(m),$h.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Y().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vv(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,h=r*r,m=r*h;return(2*i-2*s+c+f)*m+(-3*i+3*s-2*c-f)*h+c*r+i}function JM(r,t){const i=1-r;return i*i*t}function KM(r,t){return 2*(1-r)*r*t}function $M(r,t){return r*r*t}function il(r,t,i,s){return JM(r,t)+KM(r,i)+$M(r,s)}function tb(r,t){const i=1-r;return i*i*i*t}function eb(r,t){const i=1-r;return 3*i*i*r*t}function nb(r,t){return 3*(1-r)*r*r*t}function ib(r,t){return r*r*r*t}function al(r,t,i,s,l){return tb(r,t)+eb(r,i)+nb(r,s)+ib(r,l)}class Z_ extends Zi{constructor(t=new Nt,i=new Nt,s=new Nt,l=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Nt){const s=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(al(t,l.x,c.x,f.x,h.x),al(t,l.y,c.y,f.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ab extends Zi{constructor(t=new Y,i=new Y,s=new Y,l=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Y){const s=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(al(t,l.x,c.x,f.x,h.x),al(t,l.y,c.y,f.y,h.y),al(t,l.z,c.z,f.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q_ extends Zi{constructor(t=new Nt,i=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Nt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Nt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sb extends Zi{constructor(t=new Y,i=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Y){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Y){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J_ extends Zi{constructor(t=new Nt,i=new Nt,s=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Nt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(il(t,l.x,c.x,f.x),il(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rb extends Zi{constructor(t=new Y,i=new Y,s=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Y){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(il(t,l.x,c.x,f.x),il(t,l.y,c.y,f.y),il(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends Zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Nt){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(Vv(h,m.x,p.x,g.x,v.x),Vv(h,m.y,p.y,g.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Nt().fromArray(l))}return this}}var tp=Object.freeze({__proto__:null,ArcCurve:ZM,CatmullRomCurve3:QM,CubicBezierCurve:Z_,CubicBezierCurve3:ab,EllipseCurve:bp,LineCurve:Q_,LineCurve3:sb,QuadraticBezierCurve:J_,QuadraticBezierCurve3:rb,SplineCurve:K_});class ob extends Zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tp[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,h=this.curves[c],m=h.getLength(),p=m===0?0:1-f/m;return h.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];s&&s.equals(g)||(i.push(g),s=g)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new tp[l.type]().fromJSON(l))}return this}}class kv extends ob{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new Q_(this.currentPoint.clone(),new Nt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new J_(this.currentPoint.clone(),new Nt(t,i),new Nt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,f){const h=new Z_(this.currentPoint.clone(),new Nt(t,i),new Nt(s,l),new Nt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new K_(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,i+m,s,l,c,f),this}absarc(t,i,s,l,c,f){return this.absellipse(t,i,s,s,l,c,f),this}ellipse(t,i,s,l,c,f,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,i+g,s,l,c,f,h,m),this}absellipse(t,i,s,l,c,f,h,m){const p=new bp(t,i,s,l,c,f,h,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ep extends kv{constructor(t){super(t),this.uuid=Ps(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new kv().fromJSON(l))}return this}}function lb(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=$_(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let h,m,p;if(s&&(c=db(r,t,c,i)),r.length>80*i){h=r[0],m=r[1];let g=h,v=m;for(let x=i;x<l;x+=i){const y=r[x],E=r[x+1];y<h&&(h=y),E<m&&(m=E),y>g&&(g=y),E>v&&(v=E)}p=Math.max(g-h,v-m),p=p!==0?32767/p:0}return ul(c,f,i,h,m,p,0),f}function $_(r,t,i,s,l){let c;if(l===Eb(r,t,i,s)>0)for(let f=t;f<i;f+=s)c=Xv(f/s|0,r[f],r[f+1],c);else for(let f=i-s;f>=t;f-=s)c=Xv(f/s|0,r[f],r[f+1],c);return c&&Xr(c,c.next)&&(hl(c),c=c.next),c}function Os(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Xr(i,i.next)||$e(i.prev,i,i.next)===0)){if(hl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function ul(r,t,i,s,l,c,f){if(!r)return;!f&&c&&_b(r,s,l,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?ub(r,s,l,c):cb(r)){t.push(m.i,r.i,p.i),hl(r),r=p.next,h=p.next;continue}if(r=p,r===h){f?f===1?(r=fb(Os(r),t),ul(r,t,i,s,l,c,2)):f===2&&hb(r,t,i,s,l,c):ul(Os(r),t,i,s,l,c,1);break}}}function cb(r){const t=r.prev,i=r,s=r.next;if($e(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,h=t.y,m=i.y,p=s.y,g=Math.min(l,c,f),v=Math.min(h,m,p),x=Math.max(l,c,f),y=Math.max(h,m,p);let E=s.next;for(;E!==t;){if(E.x>=g&&E.x<=x&&E.y>=v&&E.y<=y&&Ko(l,h,c,m,f,p,E.x,E.y)&&$e(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function ub(r,t,i,s){const l=r.prev,c=r,f=r.next;if($e(l,c,f)>=0)return!1;const h=l.x,m=c.x,p=f.x,g=l.y,v=c.y,x=f.y,y=Math.min(h,m,p),E=Math.min(g,v,x),T=Math.max(h,m,p),b=Math.max(g,v,x),_=np(y,E,t,i,s),P=np(T,b,t,i,s);let U=r.prevZ,D=r.nextZ;for(;U&&U.z>=_&&D&&D.z<=P;){if(U.x>=y&&U.x<=T&&U.y>=E&&U.y<=b&&U!==l&&U!==f&&Ko(h,g,m,v,p,x,U.x,U.y)&&$e(U.prev,U,U.next)>=0||(U=U.prevZ,D.x>=y&&D.x<=T&&D.y>=E&&D.y<=b&&D!==l&&D!==f&&Ko(h,g,m,v,p,x,D.x,D.y)&&$e(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;U&&U.z>=_;){if(U.x>=y&&U.x<=T&&U.y>=E&&U.y<=b&&U!==l&&U!==f&&Ko(h,g,m,v,p,x,U.x,U.y)&&$e(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;D&&D.z<=P;){if(D.x>=y&&D.x<=T&&D.y>=E&&D.y<=b&&D!==l&&D!==f&&Ko(h,g,m,v,p,x,D.x,D.y)&&$e(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function fb(r,t){let i=r;do{const s=i.prev,l=i.next.next;!Xr(s,l)&&ex(s,i,i.next,l)&&fl(s,l)&&fl(l,s)&&(t.push(s.i,i.i,l.i),hl(i),hl(i.next),i=r=l),i=i.next}while(i!==r);return Os(i)}function hb(r,t,i,s,l,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&yb(f,h)){let m=nx(f,h);f=Os(f,f.next),m=Os(m,m.next),ul(f,t,i,s,l,c,0),ul(m,t,i,s,l,c,0);return}h=h.next}f=f.next}while(f!==r)}function db(r,t,i,s){const l=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=$_(r,h,m,s,!1);p===p.next&&(p.steiner=!0),l.push(Sb(p))}l.sort(pb);for(let c=0;c<l.length;c++)i=mb(l[c],i);return i}function pb(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function mb(r,t){const i=gb(r,t);if(!i)return t;const s=nx(i,r);return Os(s,s.next),Os(i,i.next)}function gb(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,f;if(Xr(r,i))return i;do{if(Xr(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const v=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(v<=s&&v>c&&(c=v,f=i.x<i.next.x?i:i.next,v===s))return f}i=i.next}while(i!==t);if(!f)return null;const h=f,m=f.x,p=f.y;let g=1/0;i=f;do{if(s>=i.x&&i.x>=m&&s!==i.x&&tx(l<p?s:c,l,m,p,l<p?c:s,l,i.x,i.y)){const v=Math.abs(l-i.y)/(s-i.x);fl(i,r)&&(v<g||v===g&&(i.x>f.x||i.x===f.x&&vb(f,i)))&&(f=i,g=v)}i=i.next}while(i!==h);return f}function vb(r,t){return $e(r.prev,r,t.prev)<0&&$e(t.next,r,r.next)<0}function _b(r,t,i,s){let l=r;do l.z===0&&(l.z=np(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,xb(l)}function xb(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,h=0;for(let p=0;p<i&&(h++,f=f.nextZ,!!f);p++);let m=i;for(;h>0||m>0&&f;)h!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,h--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,i*=2}while(t>1);return r}function np(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Sb(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function tx(r,t,i,s,l,c,f,h){return(l-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(s-h)>=(i-f)*(t-h)&&(i-f)*(c-h)>=(l-f)*(s-h)}function Ko(r,t,i,s,l,c,f,h){return!(r===f&&t===h)&&tx(r,t,i,s,l,c,f,h)}function yb(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Mb(r,t)&&(fl(r,t)&&fl(t,r)&&bb(r,t)&&($e(r.prev,r,t.prev)||$e(r,t.prev,t))||Xr(r,t)&&$e(r.prev,r,r.next)>0&&$e(t.prev,t,t.next)>0)}function $e(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Xr(r,t){return r.x===t.x&&r.y===t.y}function ex(r,t,i,s){const l=Zc($e(r,t,i)),c=Zc($e(r,t,s)),f=Zc($e(i,s,r)),h=Zc($e(i,s,t));return!!(l!==c&&f!==h||l===0&&jc(r,i,t)||c===0&&jc(r,s,t)||f===0&&jc(i,r,s)||h===0&&jc(i,t,s))}function jc(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Zc(r){return r>0?1:r<0?-1:0}function Mb(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&ex(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function fl(r,t){return $e(r.prev,r,r.next)<0?$e(r,t,r.next)>=0&&$e(r,r.prev,t)>=0:$e(r,t,r.prev)<0||$e(r,r.next,t)<0}function bb(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function nx(r,t){const i=ip(r.i,r.x,r.y),s=ip(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function Xv(r,t,i,s){const l=ip(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function hl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ip(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Eb(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class Tb{static triangulate(t,i,s=2){return lb(t,i,s)}}class Or{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Or.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];Wv(t),qv(s,t);let f=t.length;i.forEach(Wv);for(let m=0;m<i.length;m++)l.push(f),f+=i[m].length,qv(s,i[m]);const h=Tb.triangulate(s,l);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function Wv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function qv(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class uu extends Gn{constructor(t=new ep([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];f(p)}this.setAttribute("position",new sn(l,3)),this.setAttribute("uv",new sn(c,2)),this.computeVertexNormals();function f(h){const m=[],p=i.curveSegments!==void 0?i.curveSegments:12,g=i.steps!==void 0?i.steps:1,v=i.depth!==void 0?i.depth:1;let x=i.bevelEnabled!==void 0?i.bevelEnabled:!0,y=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:y-.1,T=i.bevelOffset!==void 0?i.bevelOffset:0,b=i.bevelSegments!==void 0?i.bevelSegments:3;const _=i.extrudePath,P=i.UVGenerator!==void 0?i.UVGenerator:Ab;let U,D=!1,B,H,I,q;if(_){U=_.getSpacedPoints(g),D=!0,x=!1;const _t=_.isCatmullRomCurve3?_.closed:!1;B=_.computeFrenetFrames(g,_t),H=new Y,I=new Y,q=new Y}x||(b=0,y=0,E=0,T=0);const C=h.extractPoints(p);let w=C.shape;const V=C.holes;if(!Or.isClockWise(w)){w=w.reverse();for(let _t=0,Tt=V.length;_t<Tt;_t++){const bt=V[_t];Or.isClockWise(bt)&&(V[_t]=bt.reverse())}}function $(_t){const bt=10000000000000001e-36;let Bt=_t[0];for(let z=1;z<=_t.length;z++){const ne=z%_t.length,Ft=_t[ne],ie=Ft.x-Bt.x,Rt=Ft.y-Bt.y,N=ie*ie+Rt*Rt,M=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(Bt.x),Math.abs(Bt.y)),k=bt*M*M;if(N<=k){_t.splice(ne,1),z--;continue}Bt=Ft}}$(w),V.forEach($);const ct=V.length,at=w;for(let _t=0;_t<ct;_t++){const Tt=V[_t];w=w.concat(Tt)}function L(_t,Tt,bt){return Tt||De("ExtrudeGeometry: vec does not exist"),_t.clone().addScaledVector(Tt,bt)}const F=w.length;function j(_t,Tt,bt){let Bt,z,ne;const Ft=_t.x-Tt.x,ie=_t.y-Tt.y,Rt=bt.x-_t.x,N=bt.y-_t.y,M=Ft*Ft+ie*ie,k=Ft*N-ie*Rt;if(Math.abs(k)>Number.EPSILON){const ot=Math.sqrt(M),pt=Math.sqrt(Rt*Rt+N*N),ut=Tt.x-ie/ot,Kt=Tt.y+Ft/ot,Pt=bt.x-N/pt,Jt=bt.y+Rt/pt,oe=((Pt-ut)*N-(Jt-Kt)*Rt)/(Ft*N-ie*Rt);Bt=ut+Ft*oe-_t.x,z=Kt+ie*oe-_t.y;const At=Bt*Bt+z*z;if(At<=2)return new Nt(Bt,z);ne=Math.sqrt(At/2)}else{let ot=!1;Ft>Number.EPSILON?Rt>Number.EPSILON&&(ot=!0):Ft<-Number.EPSILON?Rt<-Number.EPSILON&&(ot=!0):Math.sign(ie)===Math.sign(N)&&(ot=!0),ot?(Bt=-ie,z=Ft,ne=Math.sqrt(M)):(Bt=Ft,z=ie,ne=Math.sqrt(M/2))}return new Nt(Bt/ne,z/ne)}const St=[];for(let _t=0,Tt=at.length,bt=Tt-1,Bt=_t+1;_t<Tt;_t++,bt++,Bt++)bt===Tt&&(bt=0),Bt===Tt&&(Bt=0),St[_t]=j(at[_t],at[bt],at[Bt]);const gt=[];let O,tt=St.concat();for(let _t=0,Tt=ct;_t<Tt;_t++){const bt=V[_t];O=[];for(let Bt=0,z=bt.length,ne=z-1,Ft=Bt+1;Bt<z;Bt++,ne++,Ft++)ne===z&&(ne=0),Ft===z&&(Ft=0),O[Bt]=j(bt[Bt],bt[ne],bt[Ft]);gt.push(O),tt=tt.concat(O)}let dt;if(b===0)dt=Or.triangulateShape(at,V);else{const _t=[],Tt=[];for(let bt=0;bt<b;bt++){const Bt=bt/b,z=y*Math.cos(Bt*Math.PI/2),ne=E*Math.sin(Bt*Math.PI/2)+T;for(let Ft=0,ie=at.length;Ft<ie;Ft++){const Rt=L(at[Ft],St[Ft],ne);Vt(Rt.x,Rt.y,-z),Bt===0&&_t.push(Rt)}for(let Ft=0,ie=ct;Ft<ie;Ft++){const Rt=V[Ft];O=gt[Ft];const N=[];for(let M=0,k=Rt.length;M<k;M++){const ot=L(Rt[M],O[M],ne);Vt(ot.x,ot.y,-z),Bt===0&&N.push(ot)}Bt===0&&Tt.push(N)}}dt=Or.triangulateShape(_t,Tt)}const Mt=dt.length,Ut=E+T;for(let _t=0;_t<F;_t++){const Tt=x?L(w[_t],tt[_t],Ut):w[_t];D?(I.copy(B.normals[0]).multiplyScalar(Tt.x),H.copy(B.binormals[0]).multiplyScalar(Tt.y),q.copy(U[0]).add(I).add(H),Vt(q.x,q.y,q.z)):Vt(Tt.x,Tt.y,0)}for(let _t=1;_t<=g;_t++)for(let Tt=0;Tt<F;Tt++){const bt=x?L(w[Tt],tt[Tt],Ut):w[Tt];D?(I.copy(B.normals[_t]).multiplyScalar(bt.x),H.copy(B.binormals[_t]).multiplyScalar(bt.y),q.copy(U[_t]).add(I).add(H),Vt(q.x,q.y,q.z)):Vt(bt.x,bt.y,v/g*_t)}for(let _t=b-1;_t>=0;_t--){const Tt=_t/b,bt=y*Math.cos(Tt*Math.PI/2),Bt=E*Math.sin(Tt*Math.PI/2)+T;for(let z=0,ne=at.length;z<ne;z++){const Ft=L(at[z],St[z],Bt);Vt(Ft.x,Ft.y,v+bt)}for(let z=0,ne=V.length;z<ne;z++){const Ft=V[z];O=gt[z];for(let ie=0,Rt=Ft.length;ie<Rt;ie++){const N=L(Ft[ie],O[ie],Bt);D?Vt(N.x,N.y+U[g-1].y,U[g-1].x+bt):Vt(N.x,N.y,v+bt)}}}et(),ht();function et(){const _t=l.length/3;if(x){let Tt=0,bt=F*Tt;for(let Bt=0;Bt<Mt;Bt++){const z=dt[Bt];kt(z[2]+bt,z[1]+bt,z[0]+bt)}Tt=g+b*2,bt=F*Tt;for(let Bt=0;Bt<Mt;Bt++){const z=dt[Bt];kt(z[0]+bt,z[1]+bt,z[2]+bt)}}else{for(let Tt=0;Tt<Mt;Tt++){const bt=dt[Tt];kt(bt[2],bt[1],bt[0])}for(let Tt=0;Tt<Mt;Tt++){const bt=dt[Tt];kt(bt[0]+F*g,bt[1]+F*g,bt[2]+F*g)}}s.addGroup(_t,l.length/3-_t,0)}function ht(){const _t=l.length/3;let Tt=0;Ot(at,Tt),Tt+=at.length;for(let bt=0,Bt=V.length;bt<Bt;bt++){const z=V[bt];Ot(z,Tt),Tt+=z.length}s.addGroup(_t,l.length/3-_t,1)}function Ot(_t,Tt){let bt=_t.length;for(;--bt>=0;){const Bt=bt;let z=bt-1;z<0&&(z=_t.length-1);for(let ne=0,Ft=g+b*2;ne<Ft;ne++){const ie=F*ne,Rt=F*(ne+1),N=Tt+Bt+ie,M=Tt+z+ie,k=Tt+z+Rt,ot=Tt+Bt+Rt;ge(N,M,k,ot)}}}function Vt(_t,Tt,bt){m.push(_t),m.push(Tt),m.push(bt)}function kt(_t,Tt,bt){Re(_t),Re(Tt),Re(bt);const Bt=l.length/3,z=P.generateTopUV(s,l,Bt-3,Bt-2,Bt-1);ue(z[0]),ue(z[1]),ue(z[2])}function ge(_t,Tt,bt,Bt){Re(_t),Re(Tt),Re(Bt),Re(Tt),Re(bt),Re(Bt);const z=l.length/3,ne=P.generateSideWallUV(s,l,z-6,z-3,z-2,z-1);ue(ne[0]),ue(ne[1]),ue(ne[3]),ue(ne[1]),ue(ne[2]),ue(ne[3])}function Re(_t){l.push(m[_t*3+0]),l.push(m[_t*3+1]),l.push(m[_t*3+2])}function ue(_t){c.push(_t.x),c.push(_t.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return Cb(i,s,t)}static fromJSON(t,i){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=i[t.shapes[c]];s.push(h)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new tp[l.type]().fromJSON(l)),new uu(s,t.options)}}const Ab={generateTopUV:function(r,t,i,s,l){const c=t[i*3],f=t[i*3+1],h=t[s*3],m=t[s*3+1],p=t[l*3],g=t[l*3+1];return[new Nt(c,f),new Nt(h,m),new Nt(p,g)]},generateSideWallUV:function(r,t,i,s,l,c){const f=t[i*3],h=t[i*3+1],m=t[i*3+2],p=t[s*3],g=t[s*3+1],v=t[s*3+2],x=t[l*3],y=t[l*3+1],E=t[l*3+2],T=t[c*3],b=t[c*3+1],_=t[c*3+2];return Math.abs(h-g)<Math.abs(f-p)?[new Nt(f,1-m),new Nt(p,1-v),new Nt(x,1-E),new Nt(T,1-_)]:[new Nt(h,1-m),new Nt(g,1-v),new Nt(y,1-E),new Nt(b,1-_)]}};function Cb(r,t,i){if(i.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];i.shapes.push(c.uuid)}else i.shapes.push(r.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class du extends Gn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,v=t/h,x=i/m,y=[],E=[],T=[],b=[];for(let _=0;_<g;_++){const P=_*x-f;for(let U=0;U<p;U++){const D=U*v-c;E.push(D,-P,0),T.push(0,0,1),b.push(U/h),b.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<h;P++){const U=P+p*_,D=P+p*(_+1),B=P+1+p*(_+1),H=P+1+p*_;y.push(U,D,H),y.push(D,B,H)}this.setIndex(y),this.setAttribute("position",new sn(E,3)),this.setAttribute("normal",new sn(T,3)),this.setAttribute("uv",new sn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tp extends Gn{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let v=t;const x=(i-t)/l,y=new Y,E=new Nt;for(let T=0;T<=l;T++){for(let b=0;b<=s;b++){const _=c+b/s*f;y.x=v*Math.cos(_),y.y=v*Math.sin(_),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,g.push(E.x,E.y)}v+=x}for(let T=0;T<l;T++){const b=T*(s+1);for(let _=0;_<s;_++){const P=_+b,U=P,D=P+s+1,B=P+s+2,H=P+1;h.push(U,D,H),h.push(D,B,H)}}this.setIndex(h),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sl extends Gn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],v=new Y,x=new Y,y=[],E=[],T=[],b=[];for(let _=0;_<=s;_++){const P=[],U=_/s;let D=0;_===0&&f===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let B=0;B<=i;B++){const H=B/i;v.x=-t*Math.cos(l+H*c)*Math.sin(f+U*h),v.y=t*Math.cos(f+U*h),v.z=t*Math.sin(l+H*c)*Math.sin(f+U*h),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),b.push(H+D,1-U),P.push(p++)}g.push(P)}for(let _=0;_<s;_++)for(let P=0;P<i;P++){const U=g[_][P+1],D=g[_][P],B=g[_+1][P],H=g[_+1][P+1];(_!==0||f>0)&&y.push(U,D,H),(_!==s-1||m<Math.PI)&&y.push(D,B,H)}this.setIndex(y),this.setAttribute("position",new sn(E,3)),this.setAttribute("normal",new sn(T,3)),this.setAttribute("uv",new sn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rb extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wb extends zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class td extends zs{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Db extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ub extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pu extends pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class Nb extends pu{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const ed=new Ke,Yv=new Y,jv=new Y;class Ap{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Yv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Yv),jv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(jv),i.updateMatrixWorld(),ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lb extends Ap{constructor(){super(new Kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Vr*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ob extends pu{constructor(t,i,s=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new Lb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class Pb extends Ap{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0}}class zb extends pu{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Pb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class mu extends X_{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Bb extends Ap{constructor(){super(new mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ib extends pu{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Bb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class Fb extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Hb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Zv(r,t,i,s){const l=Gb(s);switch(i){case L_:return r*t;case P_:return r*t/l.components*l.byteLength;case hp:return r*t/l.components*l.byteLength;case Hr:return r*t*2/l.components*l.byteLength;case dp:return r*t*2/l.components*l.byteLength;case O_:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case pp:return r*t*4/l.components*l.byteLength;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eu:case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Md:case Ed:return Math.max(r,16)*Math.max(t,8)/4;case yd:case bd:return Math.max(r,8)*Math.max(t,8)/2;case Td:case Ad:case Rd:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Cd:case Dd:case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case qd:case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Zd:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Jd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Gb(r){switch(r){case ci:case w_:return{byteLength:1,components:1};case rl:case D_:case ui:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case Yi:case cp:case ki:return{byteLength:4,components:1};case U_:case N_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);function ix(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Vb(r){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,g);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],T=v[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const T=v[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xb=`#ifdef USE_ALPHAHASH
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
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zb=`#ifdef USE_AOMAP
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
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jb=`#ifdef USE_BATCHING
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
#endif`,Kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nE=`#ifdef USE_IRIDESCENCE
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
#endif`,iE=`#ifdef USE_BUMPMAP
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
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hE=`#define PI 3.141592653589793
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
} // validated`,dE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pE=`vec3 transformedNormal = objectNormal;
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
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
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
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DE=`#ifdef USE_GRADIENTMAP
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
}`,UE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
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
#endif`,PE=`#ifdef USE_ENVMAP
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
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
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
#endif`,GE=`uniform sampler2D dfgLUT;
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
}`,VE=`
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KE=`#if defined( USE_POINTS_UV )
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
#endif`,$E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
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
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C1=`float getShadowMask() {
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
}`,R1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,D1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`#include <common>
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
}`,Z1=`#if DEPTH_PACKING == 3200
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
}`,Q1=`#define DISTANCE
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
}`,J1=`#define DISTANCE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
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
}`,eT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 diffuse;
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
}`,aT=`#define LAMBERT
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
}`,sT=`#define LAMBERT
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
}`,rT=`#define MATCAP
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
}`,oT=`#define MATCAP
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
}`,lT=`#define NORMAL
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
}`,cT=`#define NORMAL
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
}`,uT=`#define PHONG
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
}`,fT=`#define PHONG
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
}`,hT=`#define STANDARD
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
}`,dT=`#define STANDARD
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
}`,pT=`#define TOON
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
}`,mT=`#define TOON
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
}`,gT=`uniform float size;
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
}`,vT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,xT=`uniform vec3 color;
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
}`,ST=`uniform float rotation;
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
}`,yT=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:kb,alphahash_pars_fragment:Xb,alphamap_fragment:Wb,alphamap_pars_fragment:qb,alphatest_fragment:Yb,alphatest_pars_fragment:jb,aomap_fragment:Zb,aomap_pars_fragment:Qb,batching_pars_vertex:Jb,batching_vertex:Kb,begin_vertex:$b,beginnormal_vertex:tE,bsdfs:eE,iridescence_fragment:nE,bumpmap_pars_fragment:iE,clipping_planes_fragment:aE,clipping_planes_pars_fragment:sE,clipping_planes_pars_vertex:rE,clipping_planes_vertex:oE,color_fragment:lE,color_pars_fragment:cE,color_pars_vertex:uE,color_vertex:fE,common:hE,cube_uv_reflection_fragment:dE,defaultnormal_vertex:pE,displacementmap_pars_vertex:mE,displacementmap_vertex:gE,emissivemap_fragment:vE,emissivemap_pars_fragment:_E,colorspace_fragment:xE,colorspace_pars_fragment:SE,envmap_fragment:yE,envmap_common_pars_fragment:ME,envmap_pars_fragment:bE,envmap_pars_vertex:EE,envmap_physical_pars_fragment:PE,envmap_vertex:TE,fog_vertex:AE,fog_pars_vertex:CE,fog_fragment:RE,fog_pars_fragment:wE,gradientmap_pars_fragment:DE,lightmap_pars_fragment:UE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:LE,lights_pars_begin:OE,lights_toon_fragment:zE,lights_toon_pars_fragment:BE,lights_phong_fragment:IE,lights_phong_pars_fragment:FE,lights_physical_fragment:HE,lights_physical_pars_fragment:GE,lights_fragment_begin:VE,lights_fragment_maps:kE,lights_fragment_end:XE,logdepthbuf_fragment:WE,logdepthbuf_pars_fragment:qE,logdepthbuf_pars_vertex:YE,logdepthbuf_vertex:jE,map_fragment:ZE,map_pars_fragment:QE,map_particle_fragment:JE,map_particle_pars_fragment:KE,metalnessmap_fragment:$E,metalnessmap_pars_fragment:t1,morphinstance_vertex:e1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:a1,morphtarget_vertex:s1,normal_fragment_begin:r1,normal_fragment_maps:o1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:u1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:p1,iridescence_pars_fragment:m1,opaque_fragment:g1,packing:v1,premultiplied_alpha_fragment:_1,project_vertex:x1,dithering_fragment:S1,dithering_pars_fragment:y1,roughnessmap_fragment:M1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:E1,shadowmap_pars_vertex:T1,shadowmap_vertex:A1,shadowmask_pars_fragment:C1,skinbase_vertex:R1,skinning_pars_vertex:w1,skinning_vertex:D1,skinnormal_vertex:U1,specularmap_fragment:N1,specularmap_pars_fragment:L1,tonemapping_fragment:O1,tonemapping_pars_fragment:P1,transmission_fragment:z1,transmission_pars_fragment:B1,uv_pars_fragment:I1,uv_pars_vertex:F1,uv_vertex:H1,worldpos_vertex:G1,background_vert:V1,background_frag:k1,backgroundCube_vert:X1,backgroundCube_frag:W1,cube_vert:q1,cube_frag:Y1,depth_vert:j1,depth_frag:Z1,distance_vert:Q1,distance_frag:J1,equirect_vert:K1,equirect_frag:$1,linedashed_vert:tT,linedashed_frag:eT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:aT,meshlambert_frag:sT,meshmatcap_vert:rT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:uT,meshphong_frag:fT,meshphysical_vert:hT,meshphysical_frag:dT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:vT,shadow_vert:_T,shadow_frag:xT,sprite_vert:ST,sprite_frag:yT},Xt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Gi={basic:{uniforms:Xn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Xn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Xn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Xn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Xn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Xn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Xn([Xt.points,Xt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Xn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Xn([Xt.common,Xt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Xn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Xn([Xt.sprite,Xt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Xn([Xt.common,Xt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Xn([Xt.lights,Xt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Gi.physical={uniforms:Xn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Qc={r:0,b:0,g:0},As=new ji,MT=new Ke;function bT(r,t,i,s,l,c,f){const h=new ye(0);let m=c===!0?0:1,p,g,v=null,x=0,y=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function T(U){let D=!1;const B=E(U);B===null?_(h,m):B&&B.isColor&&(_(B,1),D=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(U,D){const B=E(D);B&&(B.isCubeTexture||B.mapping===fu)?(g===void 0&&(g=new yn(new Yr(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:kr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),As.copy(D.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(As)),g.material.toneMapped=Ue.getTransfer(B.colorSpace)!==Ve,(v!==B||x!==B.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,v=B,x=B.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new yn(new du(2,2),new Fn({name:"BackgroundMaterial",uniforms:kr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(B.colorSpace)!==Ve,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||x!==B.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,v=B,x=B.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,D){U.getRGB(Qc,k_(r)),s.buffers.color.setClear(Qc.r,Qc.g,Qc.b,D,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:T,addToRenderList:b,dispose:P}}function ET(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(w,V,J,$,ct){let at=!1;const L=v($,J,V);c!==L&&(c=L,p(c.object)),at=y(w,$,J,ct),at&&E(w,$,J,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(at||f)&&(f=!1,D(w,V,J,$),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function v(w,V,J){const $=J.wireframe===!0;let ct=s[w.id];ct===void 0&&(ct={},s[w.id]=ct);let at=ct[V.id];at===void 0&&(at={},ct[V.id]=at);let L=at[$];return L===void 0&&(L=x(m()),at[$]=L),L}function x(w){const V=[],J=[],$=[];for(let ct=0;ct<i;ct++)V[ct]=0,J[ct]=0,$[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:$,object:w,attributes:{},index:null}}function y(w,V,J,$){const ct=c.attributes,at=V.attributes;let L=0;const F=J.getAttributes();for(const j in F)if(F[j].location>=0){const gt=ct[j];let O=at[j];if(O===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),gt===void 0||gt.attribute!==O||O&&gt.data!==O.data)return!0;L++}return c.attributesNum!==L||c.index!==$}function E(w,V,J,$){const ct={},at=V.attributes;let L=0;const F=J.getAttributes();for(const j in F)if(F[j].location>=0){let gt=at[j];gt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(gt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(gt=w.instanceColor));const O={};O.attribute=gt,gt&&gt.data&&(O.data=gt.data),ct[j]=O,L++}c.attributes=ct,c.attributesNum=L,c.index=$}function T(){const w=c.newAttributes;for(let V=0,J=w.length;V<J;V++)w[V]=0}function b(w){_(w,0)}function _(w,V){const J=c.newAttributes,$=c.enabledAttributes,ct=c.attributeDivisors;J[w]=1,$[w]===0&&(r.enableVertexAttribArray(w),$[w]=1),ct[w]!==V&&(r.vertexAttribDivisor(w,V),ct[w]=V)}function P(){const w=c.newAttributes,V=c.enabledAttributes;for(let J=0,$=V.length;J<$;J++)V[J]!==w[J]&&(r.disableVertexAttribArray(J),V[J]=0)}function U(w,V,J,$,ct,at,L){L===!0?r.vertexAttribIPointer(w,V,J,ct,at):r.vertexAttribPointer(w,V,J,$,ct,at)}function D(w,V,J,$){T();const ct=$.attributes,at=J.getAttributes(),L=V.defaultAttributeValues;for(const F in at){const j=at[F];if(j.location>=0){let St=ct[F];if(St===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const gt=St.normalized,O=St.itemSize,tt=t.get(St);if(tt===void 0)continue;const dt=tt.buffer,Mt=tt.type,Ut=tt.bytesPerElement,et=Mt===r.INT||Mt===r.UNSIGNED_INT||St.gpuType===cp;if(St.isInterleavedBufferAttribute){const ht=St.data,Ot=ht.stride,Vt=St.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<j.locationSize;kt++)_(j.location+kt,ht.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<j.locationSize;kt++)b(j.location+kt);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let kt=0;kt<j.locationSize;kt++)U(j.location+kt,O/j.locationSize,Mt,gt,Ot*Ut,(Vt+O/j.locationSize*kt)*Ut,et)}else{if(St.isInstancedBufferAttribute){for(let ht=0;ht<j.locationSize;ht++)_(j.location+ht,St.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ht=0;ht<j.locationSize;ht++)b(j.location+ht);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let ht=0;ht<j.locationSize;ht++)U(j.location+ht,O/j.locationSize,Mt,gt,O*Ut,O/j.locationSize*ht*Ut,et)}}else if(L!==void 0){const gt=L[F];if(gt!==void 0)switch(gt.length){case 2:r.vertexAttrib2fv(j.location,gt);break;case 3:r.vertexAttrib3fv(j.location,gt);break;case 4:r.vertexAttrib4fv(j.location,gt);break;default:r.vertexAttrib1fv(j.location,gt)}}}}P()}function B(){q();for(const w in s){const V=s[w];for(const J in V){const $=V[J];for(const ct in $)g($[ct].object),delete $[ct];delete V[J]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const V=s[w.id];for(const J in V){const $=V[J];for(const ct in $)g($[ct].object),delete $[ct];delete V[J]}delete s[w.id]}function I(w){for(const V in s){const J=s[V];if(J[w.id]===void 0)continue;const $=J[w.id];for(const ct in $)g($[ct].object),delete $[ct];delete J[w.id]}}function q(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:b,disableUnusedAttributes:P}}function TT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,s,1)}function m(p,g,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*x[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function AT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Li&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const q=I===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ci&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ki&&!q)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(he("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:D,maxSamples:B,samples:H}}function CT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Rs,h=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||s!==0||l;return l=x,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,T=v.clipIntersection,b=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||c&&!b)c?g(null):p();else{const P=c?0:s,U=P*4;let D=_.clippingState||null;m.value=D,D=g(E,x,U,y);for(let B=0;B!==U;++B)D[B]=i[B];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,y,E){const T=v!==null?v.length:0;let b=null;if(T!==0){if(b=m.value,E!==!0||b===null){const _=y+T*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(b===null||b.length<_)&&(b=new Float32Array(_));for(let U=0,D=y;U!==T;++U,D+=4)f.copy(v[U]).applyMatrix4(P,h),f.normal.toArray(b,D),b[D+3]=f.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,b}}function RT(r){let t=new WeakMap;function i(f,h){return h===vd?f.mapping=Ls:h===_d&&(f.mapping=Fr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===vd||h===_d)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new q_(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ns=4,Qv=[.125,.215,.35,.446,.526,.582],Ds=20,wT=256,jo=new mu,Jv=new ye;let nd=null,id=0,ad=0,sd=!1;const DT=new Y;class Kv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=DT}=c;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nd,id,ad),this._renderer.xr.enabled=sd,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ls||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ui,format:Li,colorSpace:Gr,depthBuffer:!1},l=$v(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$v(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UT(c)),this._blurMaterial=LT(c,t,i),this._ggxMaterial=NT(c,t,i)}return l}_compileMaterial(t){const i=new yn(new Gn,t);this._renderer.compile(i,jo)}_sceneToCubeUV(t,i,s,l,c){const m=new Kn(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(Jv),v.toneMapping=qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new Yr,new Br({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,b=T.material;let _=!1;const P=t.background;P?P.isColor&&(b.color.copy(P),t.background=null,_=!0):(b.color.copy(Jv),_=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const B=this._cubeSize;Nr(l,D*B,U>2?B:0,B,B),v.setRenderTarget(l),_&&v.render(T,m),v.render(t,m)}v.toneMapping=y,v.autoClear=x,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ls||t.mapping===Fr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),x=0+p*1.25,y=v*x,{_lodMax:E}=this,T=this._sizeLods[s],b=3*T*(s>E-ns?s-E+ns:0),_=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,Nr(c,b,_,3*T,2*T),l.setRenderTarget(c),l.render(h,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Nr(t,b,_,3*T,2*T),l.setRenderTarget(t),l.render(h,jo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=p;const x=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ds-1),T=c/E,b=isFinite(c)?1+Math.floor(g*T):Ds;b>Ds&&he(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ds}`);const _=[];let P=0;for(let I=0;I<Ds;++I){const q=I/T,C=Math.exp(-q*q/2);_.push(C),I===0?P+=C:I<b&&(P+=2*C)}for(let I=0;I<_.length;I++)_[I]=_[I]/P;x.envMap.value=t.texture,x.samples.value=b,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const D=this._sizeLods[l],B=3*D*(l>U-ns?l-U+ns:0),H=4*(this._cubeSize-D);Nr(i,B,H,3*D,2*D),m.setRenderTarget(i),m.render(v,jo)}}function UT(r){const t=[],i=[],s=[];let l=r;const c=r-ns+1+Qv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-ns?m=Qv[f-r+ns-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,T=3,b=2,_=1,P=new Float32Array(T*E*y),U=new Float32Array(b*E*y),D=new Float32Array(_*E*y);for(let H=0;H<y;H++){const I=H%3*2/3-1,q=H>2?0:-1,C=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];P.set(C,T*E*H),U.set(x,b*E*H);const w=[H,H,H,H,H,H];D.set(w,_*E*H)}const B=new Gn;B.setAttribute("position",new Oi(P,T)),B.setAttribute("uv",new Oi(U,b)),B.setAttribute("faceIndex",new Oi(D,_)),s.push(new yn(B,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function $v(r,t,i){const s=new $n(r,t,i);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function NT(r,t,i){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function LT(r,t,i){const s=new Float32Array(Ds),l=new Y(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function t_(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function e_(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function OT(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===vd||m===_d,g=m===Ls||m===Fr;if(p||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Kv(r)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Kv(r)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function PT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ll("WebGLRenderer: "+s+" extension not supported."),l}}}function zT(r,t,i,s){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,E=v.attributes.position;let T=0;if(y!==null){const P=y.array;T=y.version;for(let U=0,D=P.length;U<D;U+=3){const B=P[U+0],H=P[U+1],I=P[U+2];x.push(B,H,H,I,I,B)}}else if(E!==void 0){const P=E.array;T=E.version;for(let U=0,D=P.length/3-1;U<D;U+=3){const B=U+0,H=U+1,I=U+2;x.push(B,H,H,I,I,B)}}else return;const b=new(z_(x)?V_:G_)(x,1);b.version=T;const _=c.get(v);_&&t.remove(_),c.set(v,b)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function BT(r,t,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(s,y,c,x*f),i.update(y,s,1)}function p(x,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,x*f,E),i.update(y,s,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,E);let b=0;for(let _=0;_<E;_++)b+=y[_];i.update(b,s,1)}function v(x,y,E,T){if(E===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let _=0;_<x.length;_++)p(x[_]/f,y[_],T[_]);else{b.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,T,0,E);let _=0;for(let P=0;P<E;P++)_+=y[P]*T[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function IT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:De("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function FT(r,t,i){const s=new WeakMap,l=new an;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==v){let w=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),b===!0&&(D=3);let B=h.attributes.position.count*D,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const I=new Float32Array(B*H*4*v),q=new B_(I,B,H,v);q.type=ki,q.needsUpdate=!0;const C=D*4;for(let V=0;V<v;V++){const J=_[V],$=P[V],ct=U[V],at=B*H*4*V;for(let L=0;L<J.count;L++){const F=L*C;E===!0&&(l.fromBufferAttribute(J,L),I[at+F+0]=l.x,I[at+F+1]=l.y,I[at+F+2]=l.z,I[at+F+3]=0),T===!0&&(l.fromBufferAttribute($,L),I[at+F+4]=l.x,I[at+F+5]=l.y,I[at+F+6]=l.z,I[at+F+7]=0),b===!0&&(l.fromBufferAttribute(ct,L),I[at+F+8]=l.x,I[at+F+9]=l.y,I[at+F+10]=l.z,I[at+F+11]=ct.itemSize===4?l.w:1)}}x={count:v,texture:q,size:new Nt(B,H)},s.set(h,x),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let b=0;b<p.length;b++)E+=p[b];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function HT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const GT={[M_]:"LINEAR_TONE_MAPPING",[b_]:"REINHARD_TONE_MAPPING",[E_]:"CINEON_TONE_MAPPING",[lp]:"ACES_FILMIC_TONE_MAPPING",[A_]:"AGX_TONE_MAPPING",[C_]:"NEUTRAL_TONE_MAPPING",[T_]:"CUSTOM_TONE_MAPPING"};function VT(r,t,i,s,l){const c=new $n(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new $n(t,i,{type:ui,depthBuffer:!1,stencilBuffer:!1}),h=new Gn;h.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new sn([0,2,0,0,2,0],2));const m=new Rb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new yn(h,m),g=new mu(-1,1,1,-1,0,1);let v=null,x=null,y=!1,E,T=null,b=[],_=!1;this.setSize=function(P,U){c.setSize(P,U),f.setSize(P,U);for(let D=0;D<b.length;D++){const B=b[D];B.setSize&&B.setSize(P,U)}},this.setEffects=function(P){b=P,_=b.length>0&&b[0].isRenderPass===!0;const U=c.width,D=c.height;for(let B=0;B<b.length;B++){const H=b[B];H.setSize&&H.setSize(U,D)}},this.begin=function(P,U){if(y||P.toneMapping===qi&&b.length===0)return!1;if(T=U,U!==null){const D=U.width,B=U.height;(c.width!==D||c.height!==B)&&this.setSize(D,B)}return _===!1&&P.setRenderTarget(c),E=P.toneMapping,P.toneMapping=qi,!0},this.hasRenderPass=function(){return _},this.end=function(P,U){P.toneMapping=E,y=!0;let D=c,B=f;for(let H=0;H<b.length;H++){const I=b[H];if(I.enabled!==!1&&(I.render(P,B,D,U),I.needsSwap!==!1)){const q=D;D=B,B=q}}if(v!==P.outputColorSpace||x!==P.toneMapping){v=P.outputColorSpace,x=P.toneMapping,m.defines={},Ue.getTransfer(v)===Ve&&(m.defines.SRGB_TRANSFER="");const H=GT[x];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,P.setRenderTarget(T),P.render(p,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const ax=new Hn,ap=new cl(1,1),sx=new B_,rx=new EM,ox=new W_,n_=[],i_=[],a_=new Float32Array(16),s_=new Float32Array(9),r_=new Float32Array(4);function jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=n_[l];if(c===void 0&&(c=new Float32Array(l),n_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function _n(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function vu(r,t){let i=i_[t];i===void 0&&(i=new Int32Array(t),i_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function kT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function XT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),_n(i,t)}}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),_n(i,t)}}function qT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),_n(i,t)}}function YT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(vn(i,s))return;r_.set(s),r.uniformMatrix2fv(this.addr,!1,r_),_n(i,s)}}function jT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(vn(i,s))return;s_.set(s),r.uniformMatrix3fv(this.addr,!1,s_),_n(i,s)}}function ZT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(vn(i,s))return;a_.set(s),r.uniformMatrix4fv(this.addr,!1,a_),_n(i,s)}}function QT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),_n(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),_n(i,t)}}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),_n(i,t)}}function tA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function eA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),_n(i,t)}}function nA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),_n(i,t)}}function iA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),_n(i,t)}}function aA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ap.compareFunction=i.isReversedDepthBuffer()?vp:gp,c=ap):c=ax,i.setTexture2D(t||c,l)}function sA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||rx,l)}function rA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ox,l)}function oA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||sx,l)}function lA(r){switch(r){case 5126:return kT;case 35664:return XT;case 35665:return WT;case 35666:return qT;case 35674:return YT;case 35675:return jT;case 35676:return ZT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return KT;case 35669:case 35673:return $T;case 5125:return tA;case 36294:return eA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return oA}}function cA(r,t){r.uniform1fv(this.addr,t)}function uA(r,t){const i=jr(t,this.size,2);r.uniform2fv(this.addr,i)}function fA(r,t){const i=jr(t,this.size,3);r.uniform3fv(this.addr,i)}function hA(r,t){const i=jr(t,this.size,4);r.uniform4fv(this.addr,i)}function dA(r,t){const i=jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function pA(r,t){const i=jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function mA(r,t){const i=jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function gA(r,t){r.uniform1iv(this.addr,t)}function vA(r,t){r.uniform2iv(this.addr,t)}function _A(r,t){r.uniform3iv(this.addr,t)}function xA(r,t){r.uniform4iv(this.addr,t)}function SA(r,t){r.uniform1uiv(this.addr,t)}function yA(r,t){r.uniform2uiv(this.addr,t)}function MA(r,t){r.uniform3uiv(this.addr,t)}function bA(r,t){r.uniform4uiv(this.addr,t)}function EA(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ap:f=ax;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function TA(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||rx,c[f])}function AA(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||ox,c[f])}function CA(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||sx,c[f])}function RA(r){switch(r){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return hA;case 35674:return dA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return vA;case 35668:case 35672:return _A;case 35669:case 35673:return xA;case 5125:return SA;case 36294:return yA;case 36295:return MA;case 36296:return bA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return CA}}class wA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=lA(i.type)}}class DA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=RA(i.type)}}class UA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function o_(r,t){r.seq.push(t),r.map[t.id]=t}function NA(r,t,i){const s=r.name,l=s.length;for(rd.lastIndex=0;;){const c=rd.exec(s),f=rd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){o_(i,p===void 0?new wA(h,r,t):new DA(h,r,t));break}else{let v=i.map[h];v===void 0&&(v=new UA(h),o_(i,v)),i=v}}}class iu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);NA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function l_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const LA=37297;let OA=0;function PA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const c_=new xe;function zA(r){Ue._getMatrix(c_,Ue.workingColorSpace,r);const t=`mat3( ${c_.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(r)){case ru:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function u_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+PA(r.getShaderSource(t),h)}else return c}function BA(r,t){const i=zA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const IA={[M_]:"Linear",[b_]:"Reinhard",[E_]:"Cineon",[lp]:"ACESFilmic",[A_]:"AgX",[C_]:"Neutral",[T_]:"Custom"};function FA(r,t){const i=IA[t];return i===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new Y;function HA(){Ue.getLuminanceCoefficients(Jc);const r=Jc.x.toFixed(4),t=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function VA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function kA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function $o(r){return r!==""}function f_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(XA,qA)}const WA=new Map;function qA(r,t){let i=Se[t];if(i===void 0){const s=WA.get(t);if(s!==void 0)i=Se[s],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return sp(i)}const YA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d_(r){return r.replace(YA,jA)}function jA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function p_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const ZA={[Kc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function QA(r){return ZA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JA={[Ls]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function KA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":JA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const $A={[Fr]:"ENVMAP_MODE_REFRACTION"};function t2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":$A[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e2={[y_]:"ENVMAP_BLENDING_MULTIPLY",[Xy]:"ENVMAP_BLENDING_MIX",[Wy]:"ENVMAP_BLENDING_ADD"};function n2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":e2[r.combine]||"ENVMAP_BLENDING_NONE"}function i2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function a2(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=QA(i),p=KA(i),g=t2(i),v=n2(i),x=i2(i),y=GA(i),E=VA(c),T=l.createProgram();let b,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),_.length>0&&(_+=`
`)):(b=[p_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),_=[p_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?Se.tonemapping_pars_fragment:"",i.toneMapping!==qi?FA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,BA("linearToOutputTexel",i.outputColorSpace),HA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=sp(f),f=f_(f,i),f=h_(f,i),h=sp(h),h=f_(h,i),h=h_(h,i),f=d_(f),h=d_(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",i.glslVersion===Sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=P+b+f,D=P+_+h,B=l_(l,l.VERTEX_SHADER,U),H=l_(l,l.FRAGMENT_SHADER,D);l.attachShader(T,B),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(V){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(T)||"",$=l.getShaderInfoLog(B)||"",ct=l.getShaderInfoLog(H)||"",at=J.trim(),L=$.trim(),F=ct.trim();let j=!0,St=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,B,H);else{const gt=u_(l,B,"vertex"),O=u_(l,H,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+at+`
`+gt+`
`+O)}else at!==""?he("WebGLProgram: Program Info Log:",at):(L===""||F==="")&&(St=!1);St&&(V.diagnostics={runnable:j,programLog:at,vertexShader:{log:L,prefix:b},fragmentShader:{log:F,prefix:_}})}l.deleteShader(B),l.deleteShader(H),q=new iu(l,T),C=kA(l,T)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,LA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=OA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=H,this}let s2=0;class r2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new o2(t),i.set(t,s)),s}}class o2{constructor(t){this.id=s2++,this.code=t,this.usedTimes=0}}function l2(r,t,i,s,l,c,f){const h=new F_,m=new r2,p=new Set,g=[],v=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function b(C,w,V,J,$){const ct=J.fog,at=$.geometry,L=C.isMeshStandardMaterial?J.environment:null,F=(C.isMeshStandardMaterial?i:t).get(C.envMap||L),j=F&&F.mapping===fu?F.image.height:null,St=E[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&he("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const gt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,O=gt!==void 0?gt.length:0;let tt=0;at.morphAttributes.position!==void 0&&(tt=1),at.morphAttributes.normal!==void 0&&(tt=2),at.morphAttributes.color!==void 0&&(tt=3);let dt,Mt,Ut,et;if(St){const we=Gi[St];dt=we.vertexShader,Mt=we.fragmentShader}else dt=C.vertexShader,Mt=C.fragmentShader,m.update(C),Ut=m.getVertexShaderID(C),et=m.getFragmentShaderID(C);const ht=r.getRenderTarget(),Ot=r.state.buffers.depth.getReversed(),Vt=$.isInstancedMesh===!0,kt=$.isBatchedMesh===!0,ge=!!C.map,Re=!!C.matcap,ue=!!F,_t=!!C.aoMap,Tt=!!C.lightMap,bt=!!C.bumpMap,Bt=!!C.normalMap,z=!!C.displacementMap,ne=!!C.emissiveMap,Ft=!!C.metalnessMap,ie=!!C.roughnessMap,Rt=C.anisotropy>0,N=C.clearcoat>0,M=C.dispersion>0,k=C.iridescence>0,ot=C.sheen>0,pt=C.transmission>0,ut=Rt&&!!C.anisotropyMap,Kt=N&&!!C.clearcoatMap,Pt=N&&!!C.clearcoatNormalMap,Jt=N&&!!C.clearcoatRoughnessMap,oe=k&&!!C.iridescenceMap,At=k&&!!C.iridescenceThicknessMap,wt=ot&&!!C.sheenColorMap,Yt=ot&&!!C.sheenRoughnessMap,Wt=!!C.specularMap,zt=!!C.specularColorMap,ve=!!C.specularIntensityMap,W=pt&&!!C.transmissionMap,Ht=pt&&!!C.thicknessMap,Dt=!!C.gradientMap,qt=!!C.alphaMap,Ct=C.alphaTest>0,yt=!!C.alphaHash,Lt=!!C.extensions;let fe=qi;C.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Ie={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:dt,fragmentShader:Mt,defines:C.defines,customVertexShaderID:Ut,customFragmentShaderID:et,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:kt,batchingColor:kt&&$._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&$.instanceColor!==null,instancingMorph:Vt&&$.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Gr,alphaToCoverage:!!C.alphaToCoverage,map:ge,matcap:Re,envMap:ue,envMapMode:ue&&F.mapping,envMapCubeUVHeight:j,aoMap:_t,lightMap:Tt,bumpMap:bt,normalMap:Bt,displacementMap:z,emissiveMap:ne,normalMapObjectSpace:Bt&&C.normalMapType===jy,normalMapTangentSpace:Bt&&C.normalMapType===mp,metalnessMap:Ft,roughnessMap:ie,anisotropy:Rt,anisotropyMap:ut,clearcoat:N,clearcoatMap:Kt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Jt,dispersion:M,iridescence:k,iridescenceMap:oe,iridescenceThicknessMap:At,sheen:ot,sheenColorMap:wt,sheenRoughnessMap:Yt,specularMap:Wt,specularColorMap:zt,specularIntensityMap:ve,transmission:pt,transmissionMap:W,thicknessMap:Ht,gradientMap:Dt,opaque:C.transparent===!1&&C.blending===Pr&&C.alphaToCoverage===!1,alphaMap:qt,alphaTest:Ct,alphaHash:yt,combine:C.combine,mapUv:ge&&T(C.map.channel),aoMapUv:_t&&T(C.aoMap.channel),lightMapUv:Tt&&T(C.lightMap.channel),bumpMapUv:bt&&T(C.bumpMap.channel),normalMapUv:Bt&&T(C.normalMap.channel),displacementMapUv:z&&T(C.displacementMap.channel),emissiveMapUv:ne&&T(C.emissiveMap.channel),metalnessMapUv:Ft&&T(C.metalnessMap.channel),roughnessMapUv:ie&&T(C.roughnessMap.channel),anisotropyMapUv:ut&&T(C.anisotropyMap.channel),clearcoatMapUv:Kt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:At&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&T(C.sheenRoughnessMap.channel),specularMapUv:Wt&&T(C.specularMap.channel),specularColorMapUv:zt&&T(C.specularColorMap.channel),specularIntensityMapUv:ve&&T(C.specularIntensityMap.channel),transmissionMapUv:W&&T(C.transmissionMap.channel),thicknessMapUv:Ht&&T(C.thicknessMap.channel),alphaMapUv:qt&&T(C.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Bt||Rt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!at.attributes.uv&&(ge||qt),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ot,skinning:$.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:ge&&C.map.isVideoTexture===!0&&Ue.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:ne&&C.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Vi,flipSided:C.side===Wn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Lt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&C.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)w.push(V),w.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(P(w,C),U(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function P(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function U(C,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),C.push(h.mask)}function D(C){const w=E[C.type];let V;if(w){const J=Gi[w];V=cu.clone(J.uniforms)}else V=C.uniforms;return V}function B(C,w){let V=v.get(w);return V!==void 0?++V.usedTimes:(V=new a2(r,w,C,c),g.push(V),v.set(w,V)),V}function H(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),v.delete(C.cacheKey),C.destroy()}}function I(C){m.remove(C)}function q(){m.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:D,acquireProgram:B,releaseProgram:H,releaseShaderCache:I,programs:g,dispose:q}}function c2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function u2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function m_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function g_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v,x,y,E,T,b){let _=r[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:E,renderOrder:v.renderOrder,z:T,group:b},r[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=T,_.group=b),t++,_}function h(v,x,y,E,T,b){const _=f(v,x,y,E,T,b);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,E,T,b){const _=f(v,x,y,E,T,b);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||u2),s.length>1&&s.sort(x||m_),l.length>1&&l.sort(x||m_)}function g(){for(let v=t,x=r.length;v<x;v++){const y=r[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function f2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new g_,r.set(s,[f])):l>=c.length?(f=new g_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function h2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new ye};break;case"SpotLight":i={position:new Y,direction:new Y,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=i,i}}}function d2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let p2=0;function m2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function g2(r){const t=new h2,i=d2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new Ke,f=new Ke;function h(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,E=0,T=0,b=0,_=0,P=0,U=0,D=0,B=0,H=0,I=0;p.sort(m2);for(let C=0,w=p.length;C<w;C++){const V=p[C],J=V.color,$=V.intensity,ct=V.distance;let at=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Hr?at=V.shadow.map.texture:at=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=J.r*$,v+=J.g*$,x+=J.b*$;else if(V.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(V.sh.coefficients[L],$);I++}else if(V.isDirectionalLight){const L=t.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const F=V.shadow,j=i.get(V);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,s.directionalShadow[y]=j,s.directionalShadowMap[y]=at,s.directionalShadowMatrix[y]=V.shadow.matrix,P++}s.directional[y]=L,y++}else if(V.isSpotLight){const L=t.get(V);L.position.setFromMatrixPosition(V.matrixWorld),L.color.copy(J).multiplyScalar($),L.distance=ct,L.coneCos=Math.cos(V.angle),L.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),L.decay=V.decay,s.spot[T]=L;const F=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,F.updateMatrices(V),V.castShadow&&H++),s.spotLightMatrix[T]=F.matrix,V.castShadow){const j=i.get(V);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,s.spotShadow[T]=j,s.spotShadowMap[T]=at,D++}T++}else if(V.isRectAreaLight){const L=t.get(V);L.color.copy(J).multiplyScalar($),L.halfWidth.set(V.width*.5,0,0),L.halfHeight.set(0,V.height*.5,0),s.rectArea[b]=L,b++}else if(V.isPointLight){const L=t.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),L.distance=V.distance,L.decay=V.decay,V.castShadow){const F=V.shadow,j=i.get(V);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,j.shadowCameraNear=F.camera.near,j.shadowCameraFar=F.camera.far,s.pointShadow[E]=j,s.pointShadowMap[E]=at,s.pointShadowMatrix[E]=V.shadow.matrix,U++}s.point[E]=L,E++}else if(V.isHemisphereLight){const L=t.get(V);L.skyColor.copy(V.color).multiplyScalar($),L.groundColor.copy(V.groundColor).multiplyScalar($),s.hemi[_]=L,_++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xt.LTC_FLOAT_1,s.rectAreaLTC2=Xt.LTC_FLOAT_2):(s.rectAreaLTC1=Xt.LTC_HALF_1,s.rectAreaLTC2=Xt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const q=s.hash;(q.directionalLength!==y||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==b||q.hemiLength!==_||q.numDirectionalShadows!==P||q.numPointShadows!==U||q.numSpotShadows!==D||q.numSpotMaps!==B||q.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=b,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+B-H,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=I,q.directionalLength=y,q.pointLength=E,q.spotLength=T,q.rectAreaLength=b,q.hemiLength=_,q.numDirectionalShadows=P,q.numPointShadows=U,q.numSpotShadows=D,q.numSpotMaps=B,q.numLightProbes=I,s.version=p2++)}function m(p,g){let v=0,x=0,y=0,E=0,T=0;const b=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const U=p[_];if(U.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),v++}else if(U.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(b),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),y++}else if(U.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(b),f.identity(),c.copy(U.matrixWorld),c.premultiply(b),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(b),x++}else if(U.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(b),T++}}}return{setup:h,setupView:m,state:s}}function v_(r){const t=new g2(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function v2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new v_(r),t.set(l,[h])):c>=f.length?(h=new v_(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const _2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x2=`uniform sampler2D shadow_pass;
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
}`,S2=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],y2=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],__=new Ke,Zo=new Y,od=new Y;function M2(r,t,i){let s=new yp;const l=new Nt,c=new Nt,f=new an,h=new Db,m=new Ub,p={},g=i.maxTextureSize,v={[is]:Wn,[Wn]:is,[Vi]:Vi},x=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:_2,fragmentShader:x2}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Gn;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new yn(E,x),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let _=this.type;this.render=function(H,I,q){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||H.length===0)return;H.type===Ty&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Kc);const C=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Wi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const $=_!==this.type;$&&I.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(at=>at.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,at=H.length;ct<at;ct++){const L=H[ct],F=L.shadow;if(F===void 0){he("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const j=F.getFrameExtents();if(l.multiply(j),c.copy(F.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/j.x),l.x=c.x*j.x,F.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/j.y),l.y=c.y*j.y,F.mapSize.y=c.y)),F.map===null||$===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Qo){if(L.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new $n(l.x,l.y,{format:Hr,type:ui,minFilter:In,magFilter:In,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new cl(l.x,l.y,ki),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=ya,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn}else{L.isPointLight?(F.map=new q_(l.x),F.map.depthTexture=new jM(l.x,Yi)):(F.map=new $n(l.x,l.y),F.map.depthTexture=new cl(l.x,l.y,Yi)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=ya;const gt=r.state.buffers.depth.getReversed();this.type===Kc?(F.map.depthTexture.compareFunction=gt?vp:gp,F.map.depthTexture.minFilter=In,F.map.depthTexture.magFilter=In):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn)}F.camera.updateProjectionMatrix()}const St=F.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<St;gt++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,gt),r.clear();else{gt===0&&(r.setRenderTarget(F.map),r.clear());const O=F.getViewport(gt);f.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),J.viewport(f)}if(L.isPointLight){const O=F.camera,tt=F.matrix,dt=L.distance||O.far;dt!==O.far&&(O.far=dt,O.updateProjectionMatrix()),Zo.setFromMatrixPosition(L.matrixWorld),O.position.copy(Zo),od.copy(O.position),od.add(S2[gt]),O.up.copy(y2[gt]),O.lookAt(od),O.updateMatrixWorld(),tt.makeTranslation(-Zo.x,-Zo.y,-Zo.z),__.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),F._frustum.setFromProjectionMatrix(__,O.coordinateSystem,O.reversedDepth)}else F.updateMatrices(L);s=F.getFrustum(),D(I,q,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===Qo&&P(F,q),F.needsUpdate=!1}_=this.type,b.needsUpdate=!1,r.setRenderTarget(C,w,V)};function P(H,I){const q=t.update(T);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new $n(l.x,l.y,{format:Hr,type:ui})),x.uniforms.shadow_pass.value=H.map.depthTexture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(I,null,q,x,T,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(I,null,q,y,T,null)}function U(H,I,q,C){let w=null;const V=q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)w=V;else if(w=q.isPointLight===!0?m:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=w.uuid,$=I.uuid;let ct=p[J];ct===void 0&&(ct={},p[J]=ct);let at=ct[$];at===void 0&&(at=w.clone(),ct[$]=at,I.addEventListener("dispose",B)),w=at}if(w.visible=I.visible,w.wireframe=I.wireframe,C===Qo?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:v[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const J=r.properties.get(w);J.light=q}return w}function D(H,I,q,C,w){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Qo)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,H.matrixWorld);const $=t.update(H),ct=H.material;if(Array.isArray(ct)){const at=$.groups;for(let L=0,F=at.length;L<F;L++){const j=at[L],St=ct[j.materialIndex];if(St&&St.visible){const gt=U(H,St,C,w);H.onBeforeShadow(r,H,I,q,$,gt,j),r.renderBufferDirect(q,null,$,gt,H,j),H.onAfterShadow(r,H,I,q,$,gt,j)}}}else if(ct.visible){const at=U(H,ct,C,w);H.onBeforeShadow(r,H,I,q,$,at,null),r.renderBufferDirect(q,null,$,at,H,null),H.onAfterShadow(r,H,I,q,$,at,null)}}const J=H.children;for(let $=0,ct=J.length;$<ct;$++)D(J[$],I,q,C,w)}function B(H){H.target.removeEventListener("dispose",B);for(const q in p){const C=p[q],w=H.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const b2={[ud]:fd,[hd]:md,[dd]:gd,[Ir]:pd,[fd]:ud,[md]:hd,[gd]:dd,[pd]:Ir};function E2(r,t){function i(){let W=!1;const Ht=new an;let Dt=null;const qt=new an(0,0,0,0);return{setMask:function(Ct){Dt!==Ct&&!W&&(r.colorMask(Ct,Ct,Ct,Ct),Dt=Ct)},setLocked:function(Ct){W=Ct},setClear:function(Ct,yt,Lt,fe,Ie){Ie===!0&&(Ct*=fe,yt*=fe,Lt*=fe),Ht.set(Ct,yt,Lt,fe),qt.equals(Ht)===!1&&(r.clearColor(Ct,yt,Lt,fe),qt.copy(Ht))},reset:function(){W=!1,Dt=null,qt.set(-1,0,0,0)}}}function s(){let W=!1,Ht=!1,Dt=null,qt=null,Ct=null;return{setReversed:function(yt){if(Ht!==yt){const Lt=t.get("EXT_clip_control");yt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),Ht=yt;const fe=Ct;Ct=null,this.setClear(fe)}},getReversed:function(){return Ht},setTest:function(yt){yt?ht(r.DEPTH_TEST):Ot(r.DEPTH_TEST)},setMask:function(yt){Dt!==yt&&!W&&(r.depthMask(yt),Dt=yt)},setFunc:function(yt){if(Ht&&(yt=b2[yt]),qt!==yt){switch(yt){case ud:r.depthFunc(r.NEVER);break;case fd:r.depthFunc(r.ALWAYS);break;case hd:r.depthFunc(r.LESS);break;case Ir:r.depthFunc(r.LEQUAL);break;case dd:r.depthFunc(r.EQUAL);break;case pd:r.depthFunc(r.GEQUAL);break;case md:r.depthFunc(r.GREATER);break;case gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}qt=yt}},setLocked:function(yt){W=yt},setClear:function(yt){Ct!==yt&&(Ht&&(yt=1-yt),r.clearDepth(yt),Ct=yt)},reset:function(){W=!1,Dt=null,qt=null,Ct=null,Ht=!1}}}function l(){let W=!1,Ht=null,Dt=null,qt=null,Ct=null,yt=null,Lt=null,fe=null,Ie=null;return{setTest:function(we){W||(we?ht(r.STENCIL_TEST):Ot(r.STENCIL_TEST))},setMask:function(we){Ht!==we&&!W&&(r.stencilMask(we),Ht=we)},setFunc:function(we,Ln,bi){(Dt!==we||qt!==Ln||Ct!==bi)&&(r.stencilFunc(we,Ln,bi),Dt=we,qt=Ln,Ct=bi)},setOp:function(we,Ln,bi){(yt!==we||Lt!==Ln||fe!==bi)&&(r.stencilOp(we,Ln,bi),yt=we,Lt=Ln,fe=bi)},setLocked:function(we){W=we},setClear:function(we){Ie!==we&&(r.clearStencil(we),Ie=we)},reset:function(){W=!1,Ht=null,Dt=null,qt=null,Ct=null,yt=null,Lt=null,fe=null,Ie=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],E=null,T=!1,b=null,_=null,P=null,U=null,D=null,B=null,H=null,I=new ye(0,0,0),q=0,C=!1,w=null,V=null,J=null,$=null,ct=null;const at=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(j)[1]),L=F>=1):j.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),L=F>=2);let St=null,gt={};const O=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),dt=new an().fromArray(O),Mt=new an().fromArray(tt);function Ut(W,Ht,Dt,qt){const Ct=new Uint8Array(4),yt=r.createTexture();r.bindTexture(W,yt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<Dt;Lt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ht,0,r.RGBA,1,1,qt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Ht+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return yt}const et={};et[r.TEXTURE_2D]=Ut(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=Ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ht(r.DEPTH_TEST),f.setFunc(Ir),bt(!1),Bt(mv),ht(r.CULL_FACE),_t(Wi);function ht(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Ot(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Vt(W,Ht){return v[W]!==Ht?(r.bindFramebuffer(W,Ht),v[W]=Ht,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ht),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ht),!0):!1}function kt(W,Ht){let Dt=y,qt=!1;if(W){Dt=x.get(Ht),Dt===void 0&&(Dt=[],x.set(Ht,Dt));const Ct=W.textures;if(Dt.length!==Ct.length||Dt[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,Lt=Ct.length;yt<Lt;yt++)Dt[yt]=r.COLOR_ATTACHMENT0+yt;Dt.length=Ct.length,qt=!0}}else Dt[0]!==r.BACK&&(Dt[0]=r.BACK,qt=!0);qt&&r.drawBuffers(Dt)}function ge(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const Re={[ws]:r.FUNC_ADD,[Cy]:r.FUNC_SUBTRACT,[Ry]:r.FUNC_REVERSE_SUBTRACT};Re[wy]=r.MIN,Re[Dy]=r.MAX;const ue={[Uy]:r.ZERO,[Ny]:r.ONE,[Ly]:r.SRC_COLOR,[ld]:r.SRC_ALPHA,[Fy]:r.SRC_ALPHA_SATURATE,[By]:r.DST_COLOR,[Py]:r.DST_ALPHA,[Oy]:r.ONE_MINUS_SRC_COLOR,[cd]:r.ONE_MINUS_SRC_ALPHA,[Iy]:r.ONE_MINUS_DST_COLOR,[zy]:r.ONE_MINUS_DST_ALPHA,[Hy]:r.CONSTANT_COLOR,[Gy]:r.ONE_MINUS_CONSTANT_COLOR,[Vy]:r.CONSTANT_ALPHA,[ky]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Ht,Dt,qt,Ct,yt,Lt,fe,Ie,we){if(W===Wi){T===!0&&(Ot(r.BLEND),T=!1);return}if(T===!1&&(ht(r.BLEND),T=!0),W!==Ay){if(W!==b||we!==C){if((_!==ws||D!==ws)&&(r.blendEquation(r.FUNC_ADD),_=ws,D=ws),we)switch(W){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case su:r.blendFunc(r.ONE,r.ONE);break;case gv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",W);break}else switch(W){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case su:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gv:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vv:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",W);break}P=null,U=null,B=null,H=null,I.set(0,0,0),q=0,b=W,C=we}return}Ct=Ct||Ht,yt=yt||Dt,Lt=Lt||qt,(Ht!==_||Ct!==D)&&(r.blendEquationSeparate(Re[Ht],Re[Ct]),_=Ht,D=Ct),(Dt!==P||qt!==U||yt!==B||Lt!==H)&&(r.blendFuncSeparate(ue[Dt],ue[qt],ue[yt],ue[Lt]),P=Dt,U=qt,B=yt,H=Lt),(fe.equals(I)===!1||Ie!==q)&&(r.blendColor(fe.r,fe.g,fe.b,Ie),I.copy(fe),q=Ie),b=W,C=!1}function Tt(W,Ht){W.side===Vi?Ot(r.CULL_FACE):ht(r.CULL_FACE);let Dt=W.side===Wn;Ht&&(Dt=!Dt),bt(Dt),W.blending===Pr&&W.transparent===!1?_t(Wi):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const qt=W.stencilWrite;h.setTest(qt),qt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ne(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function bt(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function Bt(W){W!==by?(ht(r.CULL_FACE),W!==V&&(W===mv?r.cullFace(r.BACK):W===Ey?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ot(r.CULL_FACE),V=W}function z(W){W!==J&&(L&&r.lineWidth(W),J=W)}function ne(W,Ht,Dt){W?(ht(r.POLYGON_OFFSET_FILL),($!==Ht||ct!==Dt)&&(r.polygonOffset(Ht,Dt),$=Ht,ct=Dt)):Ot(r.POLYGON_OFFSET_FILL)}function Ft(W){W?ht(r.SCISSOR_TEST):Ot(r.SCISSOR_TEST)}function ie(W){W===void 0&&(W=r.TEXTURE0+at-1),St!==W&&(r.activeTexture(W),St=W)}function Rt(W,Ht,Dt){Dt===void 0&&(St===null?Dt=r.TEXTURE0+at-1:Dt=St);let qt=gt[Dt];qt===void 0&&(qt={type:void 0,texture:void 0},gt[Dt]=qt),(qt.type!==W||qt.texture!==Ht)&&(St!==Dt&&(r.activeTexture(Dt),St=Dt),r.bindTexture(W,Ht||et[W]),qt.type=W,qt.texture=Ht)}function N(){const W=gt[St];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ot(){try{r.texSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function pt(){try{r.texSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Kt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Pt(){try{r.texStorage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Jt(){try{r.texStorage3D(...arguments)}catch(W){De("WebGLState:",W)}}function oe(){try{r.texImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function At(){try{r.texImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function wt(W){dt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),dt.copy(W))}function Yt(W){Mt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Mt.copy(W))}function Wt(W,Ht){let Dt=p.get(Ht);Dt===void 0&&(Dt=new WeakMap,p.set(Ht,Dt));let qt=Dt.get(W);qt===void 0&&(qt=r.getUniformBlockIndex(Ht,W.name),Dt.set(W,qt))}function zt(W,Ht){const qt=p.get(Ht).get(W);m.get(Ht)!==qt&&(r.uniformBlockBinding(Ht,qt,W.__bindingPointIndex),m.set(Ht,qt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,gt={},v={},x=new WeakMap,y=[],E=null,T=!1,b=null,_=null,P=null,U=null,D=null,B=null,H=null,I=new ye(0,0,0),q=0,C=!1,w=null,V=null,J=null,$=null,ct=null,dt.set(0,0,r.canvas.width,r.canvas.height),Mt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ht,disable:Ot,bindFramebuffer:Vt,drawBuffers:kt,useProgram:ge,setBlending:_t,setMaterial:Tt,setFlipSided:bt,setCullFace:Bt,setLineWidth:z,setPolygonOffset:ne,setScissorTest:Ft,activeTexture:ie,bindTexture:Rt,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:oe,texImage3D:At,updateUBOMapping:Wt,uniformBlockBinding:zt,texStorage2D:Pt,texStorage3D:Jt,texSubImage2D:ot,texSubImage3D:pt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Kt,scissor:wt,viewport:Yt,reset:ve}}function T2(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,M){return y?new OffscreenCanvas(N,M):lu("canvas")}function T(N,M,k){let ot=1;const pt=Rt(N);if((pt.width>k||pt.height>k)&&(ot=k/Math.max(pt.width,pt.height)),ot<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ot*pt.width),Kt=Math.floor(ot*pt.height);v===void 0&&(v=E(ut,Kt));const Pt=M?E(ut,Kt):v;return Pt.width=ut,Pt.height=Kt,Pt.getContext("2d").drawImage(N,0,0,ut,Kt),he("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ut+"x"+Kt+")."),Pt}else return"data"in N&&he("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),N;return N}function b(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,M,k,ot,pt=!1){if(N!==null){if(r[N]!==void 0)return r[N];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=M;if(M===r.RED&&(k===r.FLOAT&&(ut=r.R32F),k===r.HALF_FLOAT&&(ut=r.R16F),k===r.UNSIGNED_BYTE&&(ut=r.R8)),M===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(ut=r.R8UI),k===r.UNSIGNED_SHORT&&(ut=r.R16UI),k===r.UNSIGNED_INT&&(ut=r.R32UI),k===r.BYTE&&(ut=r.R8I),k===r.SHORT&&(ut=r.R16I),k===r.INT&&(ut=r.R32I)),M===r.RG&&(k===r.FLOAT&&(ut=r.RG32F),k===r.HALF_FLOAT&&(ut=r.RG16F),k===r.UNSIGNED_BYTE&&(ut=r.RG8)),M===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(ut=r.RG8UI),k===r.UNSIGNED_SHORT&&(ut=r.RG16UI),k===r.UNSIGNED_INT&&(ut=r.RG32UI),k===r.BYTE&&(ut=r.RG8I),k===r.SHORT&&(ut=r.RG16I),k===r.INT&&(ut=r.RG32I)),M===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),k===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),k===r.UNSIGNED_INT&&(ut=r.RGB32UI),k===r.BYTE&&(ut=r.RGB8I),k===r.SHORT&&(ut=r.RGB16I),k===r.INT&&(ut=r.RGB32I)),M===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),k===r.UNSIGNED_INT&&(ut=r.RGBA32UI),k===r.BYTE&&(ut=r.RGBA8I),k===r.SHORT&&(ut=r.RGBA16I),k===r.INT&&(ut=r.RGBA32I)),M===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),M===r.RGBA){const Kt=pt?ru:Ue.getTransfer(ot);k===r.FLOAT&&(ut=r.RGBA32F),k===r.HALF_FLOAT&&(ut=r.RGBA16F),k===r.UNSIGNED_BYTE&&(ut=Kt===Ve?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(N,M){let k;return N?M===null||M===Yi||M===ol?k=r.DEPTH24_STENCIL8:M===ki?k=r.DEPTH32F_STENCIL8:M===rl&&(k=r.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===ol?k=r.DEPTH_COMPONENT24:M===ki?k=r.DEPTH_COMPONENT32F:M===rl&&(k=r.DEPTH_COMPONENT16),k}function B(N,M){return b(N)===!0||N.isFramebufferTexture&&N.minFilter!==Nn&&N.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function H(N){const M=N.target;M.removeEventListener("dispose",H),q(M),M.isVideoTexture&&g.delete(M)}function I(N){const M=N.target;M.removeEventListener("dispose",I),w(M)}function q(N){const M=s.get(N);if(M.__webglInit===void 0)return;const k=N.source,ot=x.get(k);if(ot){const pt=ot[M.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&C(N),Object.keys(ot).length===0&&x.delete(k)}s.remove(N)}function C(N){const M=s.get(N);r.deleteTexture(M.__webglTexture);const k=N.source,ot=x.get(k);delete ot[M.__cacheKey],f.memory.textures--}function w(N){const M=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(M.__webglFramebuffer[ot]))for(let pt=0;pt<M.__webglFramebuffer[ot].length;pt++)r.deleteFramebuffer(M.__webglFramebuffer[ot][pt]);else r.deleteFramebuffer(M.__webglFramebuffer[ot]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ot])}else{if(Array.isArray(M.__webglFramebuffer))for(let ot=0;ot<M.__webglFramebuffer.length;ot++)r.deleteFramebuffer(M.__webglFramebuffer[ot]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ot=0;ot<M.__webglColorRenderbuffer.length;ot++)M.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ot]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=N.textures;for(let ot=0,pt=k.length;ot<pt;ot++){const ut=s.get(k[ot]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(k[ot])}s.remove(N)}let V=0;function J(){V=0}function $(){const N=V;return N>=l.maxTextures&&he("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function ct(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function at(N,M){const k=s.get(N);if(N.isVideoTexture&&Ft(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&k.__version!==N.version){const ot=N.image;if(ot===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{et(k,N,M);return}}else N.isExternalTexture&&(k.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+M)}function L(N,M){const k=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&k.__version!==N.version){et(k,N,M);return}else N.isExternalTexture&&(k.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+M)}function F(N,M){const k=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&k.__version!==N.version){et(k,N,M);return}i.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+M)}function j(N,M){const k=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&k.__version!==N.version){ht(k,N,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+M)}const St={[xd]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[Sd]:r.MIRRORED_REPEAT},gt={[Nn]:r.NEAREST,[qy]:r.NEAREST_MIPMAP_NEAREST,[Cc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Rh]:r.LINEAR_MIPMAP_NEAREST,[Us]:r.LINEAR_MIPMAP_LINEAR},O={[Zy]:r.NEVER,[tM]:r.ALWAYS,[Qy]:r.LESS,[gp]:r.LEQUAL,[Jy]:r.EQUAL,[vp]:r.GEQUAL,[Ky]:r.GREATER,[$y]:r.NOTEQUAL};function tt(N,M){if(M.type===ki&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===Rh||M.magFilter===Cc||M.magFilter===Us||M.minFilter===In||M.minFilter===Rh||M.minFilter===Cc||M.minFilter===Us)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,St[M.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,St[M.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,St[M.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,gt[M.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,gt[M.minFilter]),M.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==Cc&&M.minFilter!==Us||M.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function dt(N,M){let k=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",H));const ot=M.source;let pt=x.get(ot);pt===void 0&&(pt={},x.set(ot,pt));const ut=ct(M);if(ut!==N.__cacheKey){pt[ut]===void 0&&(pt[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,k=!0),pt[ut].usedTimes++;const Kt=pt[N.__cacheKey];Kt!==void 0&&(pt[N.__cacheKey].usedTimes--,Kt.usedTimes===0&&C(M)),N.__cacheKey=ut,N.__webglTexture=pt[ut].texture}return k}function Mt(N,M,k){return Math.floor(Math.floor(N/k)/M)}function Ut(N,M,k,ot){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,k,ot,M.data);else{ut.sort((At,wt)=>At.start-wt.start);let Kt=0;for(let At=1;At<ut.length;At++){const wt=ut[Kt],Yt=ut[At],Wt=wt.start+wt.count,zt=Mt(Yt.start,M.width,4),ve=Mt(wt.start,M.width,4);Yt.start<=Wt+1&&zt===ve&&Mt(Yt.start+Yt.count-1,M.width,4)===zt?wt.count=Math.max(wt.count,Yt.start+Yt.count-wt.start):(++Kt,ut[Kt]=Yt)}ut.length=Kt+1;const Pt=r.getParameter(r.UNPACK_ROW_LENGTH),Jt=r.getParameter(r.UNPACK_SKIP_PIXELS),oe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let At=0,wt=ut.length;At<wt;At++){const Yt=ut[At],Wt=Math.floor(Yt.start/4),zt=Math.ceil(Yt.count/4),ve=Wt%M.width,W=Math.floor(Wt/M.width),Ht=zt,Dt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ve,W,Ht,Dt,k,ot,M.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Pt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function et(N,M,k){let ot=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=r.TEXTURE_3D);const pt=dt(N,M),ut=M.source;i.bindTexture(ot,N.__webglTexture,r.TEXTURE0+k);const Kt=s.get(ut);if(ut.version!==Kt.__version||pt===!0){i.activeTexture(r.TEXTURE0+k);const Pt=Ue.getPrimaries(Ue.workingColorSpace),Jt=M.colorSpace===es?null:Ue.getPrimaries(M.colorSpace),oe=M.colorSpace===es||Pt===Jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let At=T(M.image,!1,l.maxTextureSize);At=ie(M,At);const wt=c.convert(M.format,M.colorSpace),Yt=c.convert(M.type);let Wt=U(M.internalFormat,wt,Yt,M.colorSpace,M.isVideoTexture);tt(ot,M);let zt;const ve=M.mipmaps,W=M.isVideoTexture!==!0,Ht=Kt.__version===void 0||pt===!0,Dt=ut.dataReady,qt=B(M,At);if(M.isDepthTexture)Wt=D(M.format===Ns,M.type),Ht&&(W?i.texStorage2D(r.TEXTURE_2D,1,Wt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Wt,At.width,At.height,0,wt,Yt,null));else if(M.isDataTexture)if(ve.length>0){W&&Ht&&i.texStorage2D(r.TEXTURE_2D,qt,Wt,ve[0].width,ve[0].height);for(let Ct=0,yt=ve.length;Ct<yt;Ct++)zt=ve[Ct],W?Dt&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,zt.width,zt.height,wt,Yt,zt.data):i.texImage2D(r.TEXTURE_2D,Ct,Wt,zt.width,zt.height,0,wt,Yt,zt.data);M.generateMipmaps=!1}else W?(Ht&&i.texStorage2D(r.TEXTURE_2D,qt,Wt,At.width,At.height),Dt&&Ut(M,At,wt,Yt)):i.texImage2D(r.TEXTURE_2D,0,Wt,At.width,At.height,0,wt,Yt,At.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Ht&&i.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Wt,ve[0].width,ve[0].height,At.depth);for(let Ct=0,yt=ve.length;Ct<yt;Ct++)if(zt=ve[Ct],M.format!==Li)if(wt!==null)if(W){if(Dt)if(M.layerUpdates.size>0){const Lt=Zv(zt.width,zt.height,M.format,M.type);for(const fe of M.layerUpdates){const Ie=zt.data.subarray(fe*Lt/zt.data.BYTES_PER_ELEMENT,(fe+1)*Lt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,fe,zt.width,zt.height,1,wt,Ie)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,zt.width,zt.height,At.depth,wt,zt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ct,Wt,zt.width,zt.height,At.depth,0,zt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Dt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,zt.width,zt.height,At.depth,wt,Yt,zt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ct,Wt,zt.width,zt.height,At.depth,0,wt,Yt,zt.data)}else{W&&Ht&&i.texStorage2D(r.TEXTURE_2D,qt,Wt,ve[0].width,ve[0].height);for(let Ct=0,yt=ve.length;Ct<yt;Ct++)zt=ve[Ct],M.format!==Li?wt!==null?W?Dt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ct,0,0,zt.width,zt.height,wt,zt.data):i.compressedTexImage2D(r.TEXTURE_2D,Ct,Wt,zt.width,zt.height,0,zt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Dt&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,zt.width,zt.height,wt,Yt,zt.data):i.texImage2D(r.TEXTURE_2D,Ct,Wt,zt.width,zt.height,0,wt,Yt,zt.data)}else if(M.isDataArrayTexture)if(W){if(Ht&&i.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Wt,At.width,At.height,At.depth),Dt)if(M.layerUpdates.size>0){const Ct=Zv(At.width,At.height,M.format,M.type);for(const yt of M.layerUpdates){const Lt=At.data.subarray(yt*Ct/At.data.BYTES_PER_ELEMENT,(yt+1)*Ct/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,At.width,At.height,1,wt,Yt,Lt)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,wt,Yt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,At.width,At.height,At.depth,0,wt,Yt,At.data);else if(M.isData3DTexture)W?(Ht&&i.texStorage3D(r.TEXTURE_3D,qt,Wt,At.width,At.height,At.depth),Dt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,wt,Yt,At.data)):i.texImage3D(r.TEXTURE_3D,0,Wt,At.width,At.height,At.depth,0,wt,Yt,At.data);else if(M.isFramebufferTexture){if(Ht)if(W)i.texStorage2D(r.TEXTURE_2D,qt,Wt,At.width,At.height);else{let Ct=At.width,yt=At.height;for(let Lt=0;Lt<qt;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,Wt,Ct,yt,0,wt,Yt,null),Ct>>=1,yt>>=1}}else if(ve.length>0){if(W&&Ht){const Ct=Rt(ve[0]);i.texStorage2D(r.TEXTURE_2D,qt,Wt,Ct.width,Ct.height)}for(let Ct=0,yt=ve.length;Ct<yt;Ct++)zt=ve[Ct],W?Dt&&i.texSubImage2D(r.TEXTURE_2D,Ct,0,0,wt,Yt,zt):i.texImage2D(r.TEXTURE_2D,Ct,Wt,wt,Yt,zt);M.generateMipmaps=!1}else if(W){if(Ht){const Ct=Rt(At);i.texStorage2D(r.TEXTURE_2D,qt,Wt,Ct.width,Ct.height)}Dt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Yt,At)}else i.texImage2D(r.TEXTURE_2D,0,Wt,wt,Yt,At);b(M)&&_(ot),Kt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ht(N,M,k){if(M.image.length!==6)return;const ot=dt(N,M),pt=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+k);const ut=s.get(pt);if(pt.version!==ut.__version||ot===!0){i.activeTexture(r.TEXTURE0+k);const Kt=Ue.getPrimaries(Ue.workingColorSpace),Pt=M.colorSpace===es?null:Ue.getPrimaries(M.colorSpace),Jt=M.colorSpace===es||Kt===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const oe=M.isCompressedTexture||M.image[0].isCompressedTexture,At=M.image[0]&&M.image[0].isDataTexture,wt=[];for(let yt=0;yt<6;yt++)!oe&&!At?wt[yt]=T(M.image[yt],!0,l.maxCubemapSize):wt[yt]=At?M.image[yt].image:M.image[yt],wt[yt]=ie(M,wt[yt]);const Yt=wt[0],Wt=c.convert(M.format,M.colorSpace),zt=c.convert(M.type),ve=U(M.internalFormat,Wt,zt,M.colorSpace),W=M.isVideoTexture!==!0,Ht=ut.__version===void 0||ot===!0,Dt=pt.dataReady;let qt=B(M,Yt);tt(r.TEXTURE_CUBE_MAP,M);let Ct;if(oe){W&&Ht&&i.texStorage2D(r.TEXTURE_CUBE_MAP,qt,ve,Yt.width,Yt.height);for(let yt=0;yt<6;yt++){Ct=wt[yt].mipmaps;for(let Lt=0;Lt<Ct.length;Lt++){const fe=Ct[Lt];M.format!==Li?Wt!==null?W?Dt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt,0,0,fe.width,fe.height,Wt,fe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt,ve,fe.width,fe.height,0,fe.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt,0,0,fe.width,fe.height,Wt,zt,fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt,ve,fe.width,fe.height,0,Wt,zt,fe.data)}}}else{if(Ct=M.mipmaps,W&&Ht){Ct.length>0&&qt++;const yt=Rt(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,qt,ve,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(At){W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,wt[yt].width,wt[yt].height,Wt,zt,wt[yt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ve,wt[yt].width,wt[yt].height,0,Wt,zt,wt[yt].data);for(let Lt=0;Lt<Ct.length;Lt++){const Ie=Ct[Lt].image[yt].image;W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt+1,0,0,Ie.width,Ie.height,Wt,zt,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt+1,ve,Ie.width,Ie.height,0,Wt,zt,Ie.data)}}else{W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Wt,zt,wt[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ve,Wt,zt,wt[yt]);for(let Lt=0;Lt<Ct.length;Lt++){const fe=Ct[Lt];W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt+1,0,0,Wt,zt,fe.image[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt+1,ve,Wt,zt,fe.image[yt])}}}b(M)&&_(r.TEXTURE_CUBE_MAP),ut.__version=pt.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Ot(N,M,k,ot,pt,ut){const Kt=c.convert(k.format,k.colorSpace),Pt=c.convert(k.type),Jt=U(k.internalFormat,Kt,Pt,k.colorSpace),oe=s.get(M),At=s.get(k);if(At.__renderTarget=M,!oe.__hasExternalTextures){const wt=Math.max(1,M.width>>ut),Yt=Math.max(1,M.height>>ut);pt===r.TEXTURE_3D||pt===r.TEXTURE_2D_ARRAY?i.texImage3D(pt,ut,Jt,wt,Yt,M.depth,0,Kt,Pt,null):i.texImage2D(pt,ut,Jt,wt,Yt,0,Kt,Pt,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),ne(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,pt,At.__webglTexture,0,z(M)):(pt===r.TEXTURE_2D||pt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,pt,At.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(N,M,k){if(r.bindRenderbuffer(r.RENDERBUFFER,N),M.depthBuffer){const ot=M.depthTexture,pt=ot&&ot.isDepthTexture?ot.type:null,ut=D(M.stencilBuffer,pt),Kt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ne(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(M),ut,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(M),ut,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ut,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Kt,r.RENDERBUFFER,N)}else{const ot=M.textures;for(let pt=0;pt<ot.length;pt++){const ut=ot[pt],Kt=c.convert(ut.format,ut.colorSpace),Pt=c.convert(ut.type),Jt=U(ut.internalFormat,Kt,Pt,ut.colorSpace);ne(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(M),Jt,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(M),Jt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Jt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(N,M,k){const ot=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(M.depthTexture);if(pt.__renderTarget=M,(!pt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ot){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),pt.__webglTexture===void 0){pt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),tt(r.TEXTURE_CUBE_MAP,M.depthTexture);const oe=c.convert(M.depthTexture.format),At=c.convert(M.depthTexture.type);let wt;M.depthTexture.format===ya?wt=r.DEPTH_COMPONENT24:M.depthTexture.format===Ns&&(wt=r.DEPTH24_STENCIL8);for(let Yt=0;Yt<6;Yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,wt,M.width,M.height,0,oe,At,null)}}else at(M.depthTexture,0);const ut=pt.__webglTexture,Kt=z(M),Pt=ot?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,Jt=M.depthTexture.format===Ns?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ya)ne(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Pt,ut,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Pt,ut,0);else if(M.depthTexture.format===Ns)ne(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Pt,ut,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Pt,ut,0);else throw new Error("Unknown depthTexture format")}function ge(N){const M=s.get(N),k=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const ot=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ot){const pt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ot.removeEventListener("dispose",pt)};ot.addEventListener("dispose",pt),M.__depthDisposeCallback=pt}M.__boundDepthTexture=ot}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let ot=0;ot<6;ot++)kt(M.__webglFramebuffer[ot],N,ot);else{const ot=N.texture.mipmaps;ot&&ot.length>0?kt(M.__webglFramebuffer[0],N,0):kt(M.__webglFramebuffer,N,0)}else if(k){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]===void 0)M.__webglDepthbuffer[ot]=r.createRenderbuffer(),Vt(M.__webglDepthbuffer[ot],N,!1);else{const pt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[ot];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,ut)}}else{const ot=N.texture.mipmaps;if(ot&&ot.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Vt(M.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(N,M,k){const ot=s.get(N);M!==void 0&&Ot(ot.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ge(N)}function ue(N){const M=N.texture,k=s.get(N),ot=s.get(M);N.addEventListener("dispose",I);const pt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,Kt=pt.length>1;if(Kt||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=M.version,f.memory.textures++),ut){k.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[Pt]=[];for(let Jt=0;Jt<M.mipmaps.length;Jt++)k.__webglFramebuffer[Pt][Jt]=r.createFramebuffer()}else k.__webglFramebuffer[Pt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Pt=0;Pt<M.mipmaps.length;Pt++)k.__webglFramebuffer[Pt]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Kt)for(let Pt=0,Jt=pt.length;Pt<Jt;Pt++){const oe=s.get(pt[Pt]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&ne(N)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Pt=0;Pt<pt.length;Pt++){const Jt=pt[Pt];k.__webglColorRenderbuffer[Pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[Pt]);const oe=c.convert(Jt.format,Jt.colorSpace),At=c.convert(Jt.type),wt=U(Jt.internalFormat,oe,At,Jt.colorSpace,N.isXRRenderTarget===!0),Yt=z(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,wt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,k.__webglColorRenderbuffer[Pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(k.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),tt(r.TEXTURE_CUBE_MAP,M);for(let Pt=0;Pt<6;Pt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Jt=0;Jt<M.mipmaps.length;Jt++)Ot(k.__webglFramebuffer[Pt][Jt],N,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Jt);else Ot(k.__webglFramebuffer[Pt],N,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);b(M)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Pt=0,Jt=pt.length;Pt<Jt;Pt++){const oe=pt[Pt],At=s.get(oe);let wt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,At.__webglTexture),tt(wt,oe),Ot(k.__webglFramebuffer,N,oe,r.COLOR_ATTACHMENT0+Pt,wt,0),b(oe)&&_(wt)}i.unbindTexture()}else{let Pt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pt,ot.__webglTexture),tt(Pt,M),M.mipmaps&&M.mipmaps.length>0)for(let Jt=0;Jt<M.mipmaps.length;Jt++)Ot(k.__webglFramebuffer[Jt],N,M,r.COLOR_ATTACHMENT0,Pt,Jt);else Ot(k.__webglFramebuffer,N,M,r.COLOR_ATTACHMENT0,Pt,0);b(M)&&_(Pt),i.unbindTexture()}N.depthBuffer&&ge(N)}function _t(N){const M=N.textures;for(let k=0,ot=M.length;k<ot;k++){const pt=M[k];if(b(pt)){const ut=P(N),Kt=s.get(pt).__webglTexture;i.bindTexture(ut,Kt),_(ut),i.unbindTexture()}}}const Tt=[],bt=[];function Bt(N){if(N.samples>0){if(ne(N)===!1){const M=N.textures,k=N.width,ot=N.height;let pt=r.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Kt=s.get(N),Pt=M.length>1;if(Pt)for(let oe=0;oe<M.length;oe++)i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Jt=N.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pt|=r.STENCIL_BUFFER_BIT)),Pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[oe]);const At=s.get(M[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,k,ot,0,0,k,ot,pt,r.NEAREST),m===!0&&(Tt.length=0,bt.length=0,Tt.push(r.COLOR_ATTACHMENT0+oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Tt.push(ut),bt.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Tt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pt)for(let oe=0;oe<M.length;oe++){i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[oe]);const At=s.get(M[oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const M=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function z(N){return Math.min(l.maxSamples,N.samples)}function ne(N){const M=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ft(N){const M=f.render.frame;g.get(N)!==M&&(g.set(N,M),N.update())}function ie(N,M){const k=N.colorSpace,ot=N.format,pt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||k!==Gr&&k!==es&&(Ue.getTransfer(k)===Ve?(ot!==Li||pt!==ci)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",k)),M}function Rt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.setTexture2D=at,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=j,this.rebindTextures=Re,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function A2(r,t){function i(s,l=es){let c;const f=Ue.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===up)return r.UNSIGNED_SHORT_4_4_4_4;if(s===fp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===U_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===N_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===w_)return r.BYTE;if(s===D_)return r.SHORT;if(s===rl)return r.UNSIGNED_SHORT;if(s===cp)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===ui)return r.HALF_FLOAT;if(s===L_)return r.ALPHA;if(s===O_)return r.RGB;if(s===Li)return r.RGBA;if(s===ya)return r.DEPTH_COMPONENT;if(s===Ns)return r.DEPTH_STENCIL;if(s===P_)return r.RED;if(s===hp)return r.RED_INTEGER;if(s===Hr)return r.RG;if(s===dp)return r.RG_INTEGER;if(s===pp)return r.RGBA_INTEGER;if(s===$c||s===tu||s===eu||s===nu)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yd||s===Md||s===bd||s===Ed)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Td||s===Ad||s===Cd||s===Rd||s===wd||s===Dd||s===Ud)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Td||s===Ad)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Cd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rd)return c.COMPRESSED_R11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Dd)return c.COMPRESSED_RG11_EAC;if(s===Ud)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Nd||s===Ld||s===Od||s===Pd||s===zd||s===Bd||s===Id||s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Nd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ld)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Od)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Id)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qd||s===Yd||s===jd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===qd)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===Qd||s===Jd||s===Kd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const C2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R2=`
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

}`;class w2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new j_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Fn({vertexShader:C2,fragmentShader:R2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yn(new du(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D2 extends qr{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",b=new w2,_={},P=i.getContextAttributes();let U=null,D=null;const B=[],H=[],I=new Nt;let q=null;const C=new Kn;C.viewport=new an;const w=new Kn;w.viewport=new an;const V=[C,w],J=new Fb;let $=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ht=B[et];return ht===void 0&&(ht=new Zh,B[et]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(et){let ht=B[et];return ht===void 0&&(ht=new Zh,B[et]=ht),ht.getGripSpace()},this.getHand=function(et){let ht=B[et];return ht===void 0&&(ht=new Zh,B[et]=ht),ht.getHandSpace()};function at(et){const ht=H.indexOf(et.inputSource);if(ht===-1)return;const Ot=B[ht];Ot!==void 0&&(Ot.update(et.inputSource,et.frame,p||f),Ot.dispatchEvent({type:et.type,data:et.inputSource}))}function L(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",F);for(let et=0;et<B.length;et++){const ht=H[et];ht!==null&&(H[et]=null,B[et].disconnect(ht))}$=null,ct=null,b.reset();for(const et in _)delete _[et];t.setRenderTarget(U),y=null,x=null,v=null,l=null,D=null,Ut.stop(),s.isPresenting=!1,t.setPixelRatio(q),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",L),l.addEventListener("inputsourceschange",F),P.xrCompatible!==!0&&await i.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,Vt=null,kt=null;P.depth&&(kt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ot=P.stencil?Ns:ya,Vt=P.stencil?ol:Yi);const ge={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(ge),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new $n(x.textureWidth,x.textureHeight,{format:Li,type:ci,depthTexture:new cl(x.textureWidth,x.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ot={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ot),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new $n(y.framebufferWidth,y.framebufferHeight,{format:Li,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ut.setContext(l),Ut.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function F(et){for(let ht=0;ht<et.removed.length;ht++){const Ot=et.removed[ht],Vt=H.indexOf(Ot);Vt>=0&&(H[Vt]=null,B[Vt].disconnect(Ot))}for(let ht=0;ht<et.added.length;ht++){const Ot=et.added[ht];let Vt=H.indexOf(Ot);if(Vt===-1){for(let ge=0;ge<B.length;ge++)if(ge>=H.length){H.push(Ot),Vt=ge;break}else if(H[ge]===null){H[ge]=Ot,Vt=ge;break}if(Vt===-1)break}const kt=B[Vt];kt&&kt.connect(Ot)}}const j=new Y,St=new Y;function gt(et,ht,Ot){j.setFromMatrixPosition(ht.matrixWorld),St.setFromMatrixPosition(Ot.matrixWorld);const Vt=j.distanceTo(St),kt=ht.projectionMatrix.elements,ge=Ot.projectionMatrix.elements,Re=kt[14]/(kt[10]-1),ue=kt[14]/(kt[10]+1),_t=(kt[9]+1)/kt[5],Tt=(kt[9]-1)/kt[5],bt=(kt[8]-1)/kt[0],Bt=(ge[8]+1)/ge[0],z=Re*bt,ne=Re*Bt,Ft=Vt/(-bt+Bt),ie=Ft*-bt;if(ht.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ie),et.translateZ(Ft),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),kt[10]===-1)et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Rt=Re+Ft,N=ue+Ft,M=z-ie,k=ne+(Vt-ie),ot=_t*ue/N*Rt,pt=Tt*ue/N*Rt;et.projectionMatrix.makePerspective(M,k,ot,pt,Rt,N),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function O(et,ht){ht===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ht.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ht=et.near,Ot=et.far;b.texture!==null&&(b.depthNear>0&&(ht=b.depthNear),b.depthFar>0&&(Ot=b.depthFar)),J.near=w.near=C.near=ht,J.far=w.far=C.far=Ot,($!==J.near||ct!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),$=J.near,ct=J.far),J.layers.mask=et.layers.mask|6,C.layers.mask=J.layers.mask&3,w.layers.mask=J.layers.mask&5;const Vt=et.parent,kt=J.cameras;O(J,Vt);for(let ge=0;ge<kt.length;ge++)O(kt[ge],Vt);kt.length===2?gt(J,C,w):J.projectionMatrix.copy(C.projectionMatrix),tt(et,J,Vt)};function tt(et,ht,Ot){Ot===null?et.matrix.copy(ht.matrixWorld):(et.matrix.copy(Ot.matrixWorld),et.matrix.invert(),et.matrix.multiply(ht.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Vr*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(J)},this.getCameraTexture=function(et){return _[et]};let dt=null;function Mt(et,ht){if(g=ht.getViewerPose(p||f),E=ht,g!==null){const Ot=g.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let Vt=!1;Ot.length!==J.cameras.length&&(J.cameras.length=0,Vt=!0);for(let ue=0;ue<Ot.length;ue++){const _t=Ot[ue];let Tt=null;if(y!==null)Tt=y.getViewport(_t);else{const Bt=v.getViewSubImage(x,_t);Tt=Bt.viewport,ue===0&&(t.setRenderTargetTextures(D,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(D))}let bt=V[ue];bt===void 0&&(bt=new Kn,bt.layers.enable(ue),bt.viewport=new an,V[ue]=bt),bt.matrix.fromArray(_t.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(_t.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ue===0&&(J.matrix.copy(bt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Vt===!0&&J.cameras.push(bt)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=s.getBinding();const ue=v.getDepthInformation(Ot[0]);ue&&ue.isValid&&ue.texture&&b.init(ue,l.renderState)}if(kt&&kt.includes("camera-access")&&T){t.state.unbindTexture(),v=s.getBinding();for(let ue=0;ue<Ot.length;ue++){const _t=Ot[ue].camera;if(_t){let Tt=_[_t];Tt||(Tt=new j_,_[_t]=Tt);const bt=v.getCameraImage(_t);Tt.sourceTexture=bt}}}}for(let Ot=0;Ot<B.length;Ot++){const Vt=H[Ot],kt=B[Ot];Vt!==null&&kt!==void 0&&kt.update(Vt,ht,p||f)}dt&&dt(et,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),E=null}const Ut=new ix;Ut.setAnimationLoop(Mt),this.setAnimationLoop=function(et){dt=et},this.dispose=function(){}}}const Cs=new ji,U2=new Ke;function N2(r,t){function i(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function s(b,_){_.color.getRGB(b.fogColor.value,k_(r)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function l(b,_,P,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(b,_):_.isMeshToonMaterial?(c(b,_),v(b,_)):_.isMeshPhongMaterial?(c(b,_),g(b,_)):_.isMeshStandardMaterial?(c(b,_),x(b,_),_.isMeshPhysicalMaterial&&y(b,_,D)):_.isMeshMatcapMaterial?(c(b,_),E(b,_)):_.isMeshDepthMaterial?c(b,_):_.isMeshDistanceMaterial?(c(b,_),T(b,_)):_.isMeshNormalMaterial?c(b,_):_.isLineBasicMaterial?(f(b,_),_.isLineDashedMaterial&&h(b,_)):_.isPointsMaterial?m(b,_,P,U):_.isSpriteMaterial?p(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,i(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===Wn&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,i(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===Wn&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,i(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,i(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const P=t.get(_),U=P.envMap,D=P.envMapRotation;U&&(b.envMap.value=U,Cs.copy(D),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),b.envMapRotation.value.setFromMatrix4(U2.makeRotationFromEuler(Cs)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,b.aoMapTransform))}function f(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform))}function h(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function m(b,_,P,U){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*P,b.scale.value=U*.5,_.map&&(b.map.value=_.map,i(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function p(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function g(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function v(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function x(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function y(b,_,P){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,_){_.matcap&&(b.matcap.value=_.matcap)}function T(b,_){const P=t.get(_).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function L2(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const D=U.program;s.uniformBlockBinding(P,D)}function p(P,U){let D=l[P.id];D===void 0&&(E(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",b));const B=U.program;s.updateUBOMapping(P,B);const H=t.render.frame;c[P.id]!==H&&(x(P),c[P.id]=H)}function g(P){const U=v();P.__bindingPointIndex=U;const D=r.createBuffer(),B=P.__size,H=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function v(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const U=l[P.id],D=P.uniforms,B=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let H=0,I=D.length;H<I;H++){const q=Array.isArray(D[H])?D[H]:[D[H]];for(let C=0,w=q.length;C<w;C++){const V=q[C];if(y(V,H,C,B)===!0){const J=V.__offset,$=Array.isArray(V.value)?V.value:[V.value];let ct=0;for(let at=0;at<$.length;at++){const L=$[at],F=T(L);typeof L=="number"||typeof L=="boolean"?(V.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,J+ct,V.__data)):L.isMatrix3?(V.__data[0]=L.elements[0],V.__data[1]=L.elements[1],V.__data[2]=L.elements[2],V.__data[3]=0,V.__data[4]=L.elements[3],V.__data[5]=L.elements[4],V.__data[6]=L.elements[5],V.__data[7]=0,V.__data[8]=L.elements[6],V.__data[9]=L.elements[7],V.__data[10]=L.elements[8],V.__data[11]=0):(L.toArray(V.__data,ct),ct+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,U,D,B){const H=P.value,I=U+"_"+D;if(B[I]===void 0)return typeof H=="number"||typeof H=="boolean"?B[I]=H:B[I]=H.clone(),!0;{const q=B[I];if(typeof H=="number"||typeof H=="boolean"){if(q!==H)return B[I]=H,!0}else if(q.equals(H)===!1)return q.copy(H),!0}return!1}function E(P){const U=P.uniforms;let D=0;const B=16;for(let I=0,q=U.length;I<q;I++){const C=Array.isArray(U[I])?U[I]:[U[I]];for(let w=0,V=C.length;w<V;w++){const J=C[w],$=Array.isArray(J.value)?J.value:[J.value];for(let ct=0,at=$.length;ct<at;ct++){const L=$[ct],F=T(L),j=D%B,St=j%F.boundary,gt=j+St;D+=St,gt!==0&&B-gt<F.storage&&(D+=B-gt),J.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=F.storage}}}const H=D%B;return H>0&&(D+=B-H),P.__size=D,P.__cache={},this}function T(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",P),U}function b(P){const U=P.target;U.removeEventListener("dispose",b);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const P in l)r.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const O2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function P2(){return Hi===null&&(Hi=new VM(O2,16,16,Hr,ui),Hi.name="DFG_LUT",Hi.minFilter=In,Hi.magFilter=In,Hi.wrapS=xa,Hi.wrapT=xa,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class z2{constructor(t={}){const{canvas:i=eM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:y=ci}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=y,b=new Set([pp,dp,hp]),_=new Set([ci,Yi,rl,ol,up,fp]),P=new Uint32Array(4),U=new Int32Array(4);let D=null,B=null;const H=[],I=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=Mi;let V=0,J=0,$=null,ct=-1,at=null;const L=new an,F=new an;let j=null;const St=new ye(0);let gt=0,O=i.width,tt=i.height,dt=1,Mt=null,Ut=null;const et=new an(0,0,O,tt),ht=new an(0,0,O,tt);let Ot=!1;const Vt=new yp;let kt=!1,ge=!1;const Re=new Ke,ue=new Y,_t=new an,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Bt(){return $===null?dt:1}let z=s;function ne(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${op}`),i.addEventListener("webglcontextlost",fe,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",we,!1),z===null){const Z="webgl2";if(z=ne(Z,R),z===null)throw ne(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let Ft,ie,Rt,N,M,k,ot,pt,ut,Kt,Pt,Jt,oe,At,wt,Yt,Wt,zt,ve,W,Ht,Dt,qt,Ct;function yt(){Ft=new PT(z),Ft.init(),Dt=new A2(z,Ft),ie=new AT(z,Ft,t,Dt),Rt=new E2(z,Ft),ie.reversedDepthBuffer&&x&&Rt.buffers.depth.setReversed(!0),N=new IT(z),M=new c2,k=new T2(z,Ft,Rt,M,ie,Dt,N),ot=new RT(C),pt=new OT(C),ut=new Vb(z),qt=new ET(z,ut),Kt=new zT(z,ut,N,qt),Pt=new HT(z,Kt,ut,N),ve=new FT(z,ie,k),Yt=new CT(M),Jt=new l2(C,ot,pt,Ft,ie,qt,Yt),oe=new N2(C,M),At=new f2,wt=new v2(Ft),zt=new bT(C,ot,pt,Rt,Pt,E,m),Wt=new M2(C,Pt,ie),Ct=new L2(z,N,ie,Rt),W=new TT(z,Ft,N),Ht=new BT(z,Ft,N),N.programs=Jt.programs,C.capabilities=ie,C.extensions=Ft,C.properties=M,C.renderLists=At,C.shadowMap=Wt,C.state=Rt,C.info=N}yt(),T!==ci&&(q=new VT(T,i.width,i.height,l,c));const Lt=new D2(C,z);this.xr=Lt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Ft.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ft.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(R){R!==void 0&&(dt=R,this.setSize(O,tt,!1))},this.getSize=function(R){return R.set(O,tt)},this.setSize=function(R,Z,lt=!0){if(Lt.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,tt=Z,i.width=Math.floor(R*dt),i.height=Math.floor(Z*dt),lt===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(O*dt,tt*dt).floor()},this.setDrawingBufferSize=function(R,Z,lt){O=R,tt=Z,dt=lt,i.width=Math.floor(R*lt),i.height=Math.floor(Z*lt),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(T===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,Z,lt,st){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,Z,lt,st),Rt.viewport(L.copy(et).multiplyScalar(dt).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,Z,lt,st){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,Z,lt,st),Rt.scissor(F.copy(ht).multiplyScalar(dt).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(R){Rt.setScissorTest(Ot=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){Ut=R},this.getClearColor=function(R){return R.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,lt=!0){let st=0;if(R){let K=!1;if($!==null){const It=$.texture.format;K=b.has(It)}if(K){const It=$.texture.type,jt=_.has(It),Gt=zt.getClearColor(),Zt=zt.getClearAlpha(),$t=Gt.r,re=Gt.g,te=Gt.b;jt?(P[0]=$t,P[1]=re,P[2]=te,P[3]=Zt,z.clearBufferuiv(z.COLOR,0,P)):(U[0]=$t,U[1]=re,U[2]=te,U[3]=Zt,z.clearBufferiv(z.COLOR,0,U))}else st|=z.COLOR_BUFFER_BIT}Z&&(st|=z.DEPTH_BUFFER_BIT),lt&&(st|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",fe,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",we,!1),zt.dispose(),At.dispose(),wt.dispose(),M.dispose(),ot.dispose(),pt.dispose(),Pt.dispose(),qt.dispose(),Ct.dispose(),Jt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Is),Lt.removeEventListener("sessionend",Jr),Pi.stop()};function fe(R){R.preventDefault(),Mv("WebGLRenderer: Context Lost."),w=!0}function Ie(){Mv("WebGLRenderer: Context Restored."),w=!1;const R=N.autoReset,Z=Wt.enabled,lt=Wt.autoUpdate,st=Wt.needsUpdate,K=Wt.type;yt(),N.autoReset=R,Wt.enabled=Z,Wt.autoUpdate=lt,Wt.needsUpdate=st,Wt.type=K}function we(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ln(R){const Z=R.target;Z.removeEventListener("dispose",Ln),bi(Z)}function bi(R){gl(R),M.remove(R)}function gl(R){const Z=M.get(R).programs;Z!==void 0&&(Z.forEach(function(lt){Jt.releaseProgram(lt)}),R.isShaderMaterial&&Jt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,lt,st,K,It){Z===null&&(Z=Tt);const jt=K.isMesh&&K.matrixWorld.determinant()<0,Gt=as(R,Z,lt,st,K);Rt.setMaterial(st,jt);let Zt=lt.index,$t=1;if(st.wireframe===!0){if(Zt=Kt.getWireframeAttribute(lt),Zt===void 0)return;$t=2}const re=lt.drawRange,te=lt.attributes.position;let le=re.start*$t,Oe=(re.start+re.count)*$t;It!==null&&(le=Math.max(le,It.start*$t),Oe=Math.min(Oe,(It.start+It.count)*$t)),Zt!==null?(le=Math.max(le,0),Oe=Math.min(Oe,Zt.count)):te!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,te.count));const Qe=Oe-le;if(Qe<0||Qe===1/0)return;qt.setup(K,st,Gt,lt,Zt);let Ye,Be=W;if(Zt!==null&&(Ye=ut.get(Zt),Be=Ht,Be.setIndex(Ye)),K.isMesh)st.wireframe===!0?(Rt.setLineWidth(st.wireframeLinewidth*Bt()),Be.setMode(z.LINES)):Be.setMode(z.TRIANGLES);else if(K.isLine){let ae=st.linewidth;ae===void 0&&(ae=1),Rt.setLineWidth(ae*Bt()),K.isLineSegments?Be.setMode(z.LINES):K.isLineLoop?Be.setMode(z.LINE_LOOP):Be.setMode(z.LINE_STRIP)}else K.isPoints?Be.setMode(z.POINTS):K.isSprite&&Be.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ll("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Be.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Be.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ae=K._multiDrawStarts,Pe=K._multiDrawCounts,de=K._multiDrawCount,bn=Zt?ut.get(Zt).bytesPerElement:1,Qi=M.get(st).currentProgram.getUniforms();for(let En=0;En<de;En++)Qi.setValue(z,"_gl_DrawID",En),Be.render(ae[En]/bn,Pe[En])}else if(K.isInstancedMesh)Be.renderInstances(le,Qe,K.count);else if(lt.isInstancedBufferGeometry){const ae=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Pe=Math.min(lt.instanceCount,ae);Be.renderInstances(le,Qe,Pe)}else Be.render(le,Qe)};function Zr(R,Z,lt){R.transparent===!0&&R.side===Vi&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,Hs(R,Z,lt),R.side=is,R.needsUpdate=!0,Hs(R,Z,lt),R.side=Vi):Hs(R,Z,lt)}this.compile=function(R,Z,lt=null){lt===null&&(lt=R),B=wt.get(lt),B.init(Z),I.push(B),lt.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),R!==lt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),B.setupLights();const st=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const It=K.material;if(It)if(Array.isArray(It))for(let jt=0;jt<It.length;jt++){const Gt=It[jt];Zr(Gt,lt,K),st.add(Gt)}else Zr(It,lt,K),st.add(It)}),B=I.pop(),st},this.compileAsync=function(R,Z,lt=null){const st=this.compile(R,Z,lt);return new Promise(K=>{function It(){if(st.forEach(function(jt){M.get(jt).currentProgram.isReady()&&st.delete(jt)}),st.size===0){K(R);return}setTimeout(It,10)}Ft.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Bs=null;function Qr(R){Bs&&Bs(R)}function Is(){Pi.stop()}function Jr(){Pi.start()}const Pi=new ix;Pi.setAnimationLoop(Qr),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){Bs=R,Lt.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},Lt.addEventListener("sessionstart",Is),Lt.addEventListener("sessionend",Jr),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const lt=Lt.enabled===!0&&Lt.isPresenting===!0,st=q!==null&&($===null||lt)&&q.begin(C,$);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Z),Z=Lt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Z,$),B=wt.get(R,I.length),B.init(Z),I.push(B),Re.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Vt.setFromProjectionMatrix(Re,Xi,Z.reversedDepth),ge=this.localClippingEnabled,kt=Yt.init(this.clippingPlanes,ge),D=At.get(R,H.length),D.init(),H.push(D),Lt.enabled===!0&&Lt.isPresenting===!0){const jt=C.xr.getDepthSensingMesh();jt!==null&&fi(jt,Z,-1/0,C.sortObjects)}fi(R,Z,0,C.sortObjects),D.finish(),C.sortObjects===!0&&D.sort(Mt,Ut),bt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,bt&&zt.addToRenderList(D,R),this.info.render.frame++,kt===!0&&Yt.beginShadows();const K=B.state.shadowsArray;if(Wt.render(K,R,Z),kt===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&q.hasRenderPass())===!1){const jt=D.opaque,Gt=D.transmissive;if(B.setupLights(),Z.isArrayCamera){const Zt=Z.cameras;if(Gt.length>0)for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t];Mn(jt,Gt,R,te)}bt&&zt.render(R);for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t];ln(D,R,te,te.viewport)}}else Gt.length>0&&Mn(jt,Gt,R,Z),bt&&zt.render(R),ln(D,R,Z)}$!==null&&J===0&&(k.updateMultisampleRenderTarget($),k.updateRenderTargetMipmap($)),st&&q.end(C),R.isScene===!0&&R.onAfterRender(C,R,Z),qt.resetDefaultState(),ct=-1,at=null,I.pop(),I.length>0?(B=I[I.length-1],kt===!0&&Yt.setGlobalState(C.clippingPlanes,B.state.camera)):B=null,H.pop(),H.length>0?D=H[H.length-1]:D=null};function fi(R,Z,lt,st){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){st&&_t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const jt=Pt.update(R),Gt=R.material;Gt.visible&&D.push(R,jt,Gt,lt,_t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const jt=Pt.update(R),Gt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_t.copy(R.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),_t.copy(jt.boundingSphere.center)),_t.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Gt)){const Zt=jt.groups;for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t],le=Gt[te.materialIndex];le&&le.visible&&D.push(R,jt,le,lt,_t.z,te)}}else Gt.visible&&D.push(R,jt,Gt,lt,_t.z,null)}}const It=R.children;for(let jt=0,Gt=It.length;jt<Gt;jt++)fi(It[jt],Z,lt,st)}function ln(R,Z,lt,st){const{opaque:K,transmissive:It,transparent:jt}=R;B.setupLightsView(lt),kt===!0&&Yt.setGlobalState(C.clippingPlanes,lt),st&&Rt.viewport(L.copy(st)),K.length>0&&Ei(K,Z,lt),It.length>0&&Ei(It,Z,lt),jt.length>0&&Ei(jt,Z,lt),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Mn(R,Z,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[st.id]===void 0){const le=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[st.id]=new $n(1,1,{generateMipmaps:!0,type:le?ui:ci,minFilter:Us,samples:ie.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const It=B.state.transmissionRenderTarget[st.id],jt=st.viewport||L;It.setSize(jt.z*C.transmissionResolutionScale,jt.w*C.transmissionResolutionScale);const Gt=C.getRenderTarget(),Zt=C.getActiveCubeFace(),$t=C.getActiveMipmapLevel();C.setRenderTarget(It),C.getClearColor(St),gt=C.getClearAlpha(),gt<1&&C.setClearColor(16777215,.5),C.clear(),bt&&zt.render(lt);const re=C.toneMapping;C.toneMapping=qi;const te=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),B.setupLightsView(st),kt===!0&&Yt.setGlobalState(C.clippingPlanes,st),Ei(R,lt,st),k.updateMultisampleRenderTarget(It),k.updateRenderTargetMipmap(It),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Oe=0,Qe=Z.length;Oe<Qe;Oe++){const Ye=Z[Oe],{object:Be,geometry:ae,material:Pe,group:de}=Ye;if(Pe.side===Vi&&Be.layers.test(st.layers)){const bn=Pe.side;Pe.side=Wn,Pe.needsUpdate=!0,Fs(Be,lt,st,ae,Pe,de),Pe.side=bn,Pe.needsUpdate=!0,le=!0}}le===!0&&(k.updateMultisampleRenderTarget(It),k.updateRenderTargetMipmap(It))}C.setRenderTarget(Gt,Zt,$t),C.setClearColor(St,gt),te!==void 0&&(st.viewport=te),C.toneMapping=re}function Ei(R,Z,lt){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,It=R.length;K<It;K++){const jt=R[K],{object:Gt,geometry:Zt,group:$t}=jt;let re=jt.material;re.allowOverride===!0&&st!==null&&(re=st),Gt.layers.test(lt.layers)&&Fs(Gt,Z,lt,Zt,re,$t)}}function Fs(R,Z,lt,st,K,It){R.onBeforeRender(C,Z,lt,st,K,It),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,Z,lt,st,R,It),K.transparent===!0&&K.side===Vi&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,C.renderBufferDirect(lt,Z,st,K,R,It),K.side=is,K.needsUpdate=!0,C.renderBufferDirect(lt,Z,st,K,R,It),K.side=Vi):C.renderBufferDirect(lt,Z,st,K,R,It),R.onAfterRender(C,Z,lt,st,K,It)}function Hs(R,Z,lt){Z.isScene!==!0&&(Z=Tt);const st=M.get(R),K=B.state.lights,It=B.state.shadowsArray,jt=K.state.version,Gt=Jt.getParameters(R,K.state,It,Z,lt),Zt=Jt.getProgramCacheKey(Gt);let $t=st.programs;st.environment=R.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(R.isMeshStandardMaterial?pt:ot).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",Ln),$t=new Map,st.programs=$t);let re=$t.get(Zt);if(re!==void 0){if(st.currentProgram===re&&st.lightsStateVersion===jt)return Kr(R,Gt),re}else Gt.uniforms=Jt.getUniforms(R),R.onBeforeCompile(Gt,C),re=Jt.acquireProgram(Gt,Zt),$t.set(Zt,re),st.uniforms=Gt.uniforms;const te=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Yt.uniform),Kr(R,Gt),st.needsLights=Ma(R),st.lightsStateVersion=jt,st.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=re,st.uniformsList=null,re}function vl(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=iu.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Kr(R,Z){const lt=M.get(R);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function as(R,Z,lt,st,K){Z.isScene!==!0&&(Z=Tt),k.resetTextureUnits();const It=Z.fog,jt=st.isMeshStandardMaterial?Z.environment:null,Gt=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Gr,Zt=(st.isMeshStandardMaterial?pt:ot).get(st.envMap||jt),$t=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,re=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),te=!!lt.morphAttributes.position,le=!!lt.morphAttributes.normal,Oe=!!lt.morphAttributes.color;let Qe=qi;st.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qe=C.toneMapping);const Ye=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Be=Ye!==void 0?Ye.length:0,ae=M.get(st),Pe=B.state.lights;if(kt===!0&&(ge===!0||R!==at)){const An=R===at&&st.id===ct;Yt.setState(st,R,An)}let de=!1;st.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Pe.state.version||ae.outputColorSpace!==Gt||K.isBatchedMesh&&ae.batching===!1||!K.isBatchedMesh&&ae.batching===!0||K.isBatchedMesh&&ae.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ae.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ae.instancing===!1||!K.isInstancedMesh&&ae.instancing===!0||K.isSkinnedMesh&&ae.skinning===!1||!K.isSkinnedMesh&&ae.skinning===!0||K.isInstancedMesh&&ae.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ae.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ae.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ae.instancingMorph===!1&&K.morphTexture!==null||ae.envMap!==Zt||st.fog===!0&&ae.fog!==It||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Yt.numPlanes||ae.numIntersection!==Yt.numIntersection)||ae.vertexAlphas!==$t||ae.vertexTangents!==re||ae.morphTargets!==te||ae.morphNormals!==le||ae.morphColors!==Oe||ae.toneMapping!==Qe||ae.morphTargetsCount!==Be)&&(de=!0):(de=!0,ae.__version=st.version);let bn=ae.currentProgram;de===!0&&(bn=Hs(st,Z,K));let Qi=!1,En=!1,hi=!1;const Fe=bn.getUniforms(),Tn=ae.uniforms;if(Rt.useProgram(bn.program)&&(Qi=!0,En=!0,hi=!0),st.id!==ct&&(ct=st.id,En=!0),Qi||at!==R){Rt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(z,"projectionMatrix",R.projectionMatrix),Fe.setValue(z,"viewMatrix",R.matrixWorldInverse);const Cn=Fe.map.cameraPosition;Cn!==void 0&&Cn.setValue(z,ue.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&Fe.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),at!==R&&(at=R,En=!0,hi=!0)}if(ae.needsLights&&(Pe.state.directionalShadowMap.length>0&&Fe.setValue(z,"directionalShadowMap",Pe.state.directionalShadowMap,k),Pe.state.spotShadowMap.length>0&&Fe.setValue(z,"spotShadowMap",Pe.state.spotShadowMap,k),Pe.state.pointShadowMap.length>0&&Fe.setValue(z,"pointShadowMap",Pe.state.pointShadowMap,k)),K.isSkinnedMesh){Fe.setOptional(z,K,"bindMatrix"),Fe.setOptional(z,K,"bindMatrixInverse");const An=K.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Fe.setValue(z,"boneTexture",An.boneTexture,k))}K.isBatchedMesh&&(Fe.setOptional(z,K,"batchingTexture"),Fe.setValue(z,"batchingTexture",K._matricesTexture,k),Fe.setOptional(z,K,"batchingIdTexture"),Fe.setValue(z,"batchingIdTexture",K._indirectTexture,k),Fe.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Fe.setValue(z,"batchingColorTexture",K._colorsTexture,k));const mn=lt.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ve.update(K,lt,bn),(En||ae.receiveShadow!==K.receiveShadow)&&(ae.receiveShadow=K.receiveShadow,Fe.setValue(z,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Tn.envMap.value=Zt,Tn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(Tn.envMapIntensity.value=Z.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=P2()),En&&(Fe.setValue(z,"toneMappingExposure",C.toneMappingExposure),ae.needsLights&&$r(Tn,hi),It&&st.fog===!0&&oe.refreshFogUniforms(Tn,It),oe.refreshMaterialUniforms(Tn,st,dt,tt,B.state.transmissionRenderTarget[R.id]),iu.upload(z,vl(ae),Tn,k)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(iu.upload(z,vl(ae),Tn,k),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(z,"center",K.center),Fe.setValue(z,"modelViewMatrix",K.modelViewMatrix),Fe.setValue(z,"normalMatrix",K.normalMatrix),Fe.setValue(z,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const An=st.uniformsGroups;for(let Cn=0,Gs=An.length;Cn<Gs;Cn++){const Ti=An[Cn];Ct.update(Ti,bn),Ct.bind(Ti,bn)}}return bn}function $r(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Ma(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(R,Z,lt){const st=M.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=Z,M.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const lt=M.get(R);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0};const ba=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,lt=0){$=R,V=Z,J=lt;let st=null,K=!1,It=!1;if(R){const Gt=M.get(R);if(Gt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(z.FRAMEBUFFER,Gt.__webglFramebuffer),L.copy(R.viewport),F.copy(R.scissor),j=R.scissorTest,Rt.viewport(L),Rt.scissor(F),Rt.setScissorTest(j),ct=-1;return}else if(Gt.__webglFramebuffer===void 0)k.setupRenderTarget(R);else if(Gt.__hasExternalTextures)k.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const re=R.depthTexture;if(Gt.__boundDepthTexture!==re){if(re!==null&&M.has(re)&&(R.width!==re.image.width||R.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(R)}}const Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);const $t=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[Z])?st=$t[Z][lt]:st=$t[Z],K=!0):R.samples>0&&k.useMultisampledRTT(R)===!1?st=M.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?st=$t[lt]:st=$t,L.copy(R.viewport),F.copy(R.scissor),j=R.scissorTest}else L.copy(et).multiplyScalar(dt).floor(),F.copy(ht).multiplyScalar(dt).floor(),j=Ot;if(lt!==0&&(st=ba),Rt.bindFramebuffer(z.FRAMEBUFFER,st)&&Rt.drawBuffers(R,st),Rt.viewport(L),Rt.scissor(F),Rt.setScissorTest(j),K){const Gt=M.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Gt.__webglTexture,lt)}else if(It){const Gt=Z;for(let Zt=0;Zt<R.textures.length;Zt++){const $t=M.get(R.textures[Zt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Zt,$t.__webglTexture,lt,Gt)}}else if(R!==null&&lt!==0){const Gt=M.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Gt.__webglTexture,lt)}ct=-1},this.readRenderTargetPixels=function(R,Z,lt,st,K,It,jt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&jt!==void 0&&(Zt=Zt[jt]),Zt){Rt.bindFramebuffer(z.FRAMEBUFFER,Zt);try{const $t=R.textures[Gt],re=$t.format,te=$t.type;if(!ie.textureFormatReadable(re)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(te)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-st&&lt>=0&&lt<=R.height-K&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Gt),z.readPixels(Z,lt,st,K,Dt.convert(re),Dt.convert(te),It))}finally{const $t=$!==null?M.get($).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,Z,lt,st,K,It,jt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&jt!==void 0&&(Zt=Zt[jt]),Zt)if(Z>=0&&Z<=R.width-st&&lt>=0&&lt<=R.height-K){Rt.bindFramebuffer(z.FRAMEBUFFER,Zt);const $t=R.textures[Gt],re=$t.format,te=$t.type;if(!ie.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.bufferData(z.PIXEL_PACK_BUFFER,It.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Gt),z.readPixels(Z,lt,st,K,Dt.convert(re),Dt.convert(te),0);const Oe=$!==null?M.get($).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,Oe);const Qe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await nM(z,Qe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,It),z.deleteBuffer(le),z.deleteSync(Qe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,lt=0){const st=Math.pow(2,-lt),K=Math.floor(R.image.width*st),It=Math.floor(R.image.height*st),jt=Z!==null?Z.x:0,Gt=Z!==null?Z.y:0;k.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,lt,0,0,jt,Gt,K,It),Rt.unbindTexture()};const ss=z.createFramebuffer(),Ea=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,lt=null,st=null,K=0,It=null){It===null&&(K!==0?(ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=K,K=0):It=0);let jt,Gt,Zt,$t,re,te,le,Oe,Qe;const Ye=R.isCompressedTexture?R.mipmaps[It]:R.image;if(lt!==null)jt=lt.max.x-lt.min.x,Gt=lt.max.y-lt.min.y,Zt=lt.isBox3?lt.max.z-lt.min.z:1,$t=lt.min.x,re=lt.min.y,te=lt.isBox3?lt.min.z:0;else{const mn=Math.pow(2,-K);jt=Math.floor(Ye.width*mn),Gt=Math.floor(Ye.height*mn),R.isDataArrayTexture?Zt=Ye.depth:R.isData3DTexture?Zt=Math.floor(Ye.depth*mn):Zt=1,$t=0,re=0,te=0}st!==null?(le=st.x,Oe=st.y,Qe=st.z):(le=0,Oe=0,Qe=0);const Be=Dt.convert(Z.format),ae=Dt.convert(Z.type);let Pe;Z.isData3DTexture?(k.setTexture3D(Z,0),Pe=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(k.setTexture2DArray(Z,0),Pe=z.TEXTURE_2D_ARRAY):(k.setTexture2D(Z,0),Pe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const de=z.getParameter(z.UNPACK_ROW_LENGTH),bn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qi=z.getParameter(z.UNPACK_SKIP_PIXELS),En=z.getParameter(z.UNPACK_SKIP_ROWS),hi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ye.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ye.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,re),z.pixelStorei(z.UNPACK_SKIP_IMAGES,te);const Fe=R.isDataArrayTexture||R.isData3DTexture,Tn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const mn=M.get(R),An=M.get(Z),Cn=M.get(mn.__renderTarget),Gs=M.get(An.__renderTarget);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Gs.__webglFramebuffer);for(let Ti=0;Ti<Zt;Ti++)Fe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(R).__webglTexture,K,te+Ti),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(Z).__webglTexture,It,Qe+Ti)),z.blitFramebuffer($t,re,jt,Gt,le,Oe,jt,Gt,z.DEPTH_BUFFER_BIT,z.NEAREST);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||M.has(R)){const mn=M.get(R),An=M.get(Z);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,ss),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ea);for(let Cn=0;Cn<Zt;Cn++)Fe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,mn.__webglTexture,K,te+Cn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,mn.__webglTexture,K),Tn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,An.__webglTexture,It,Qe+Cn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,An.__webglTexture,It),K!==0?z.blitFramebuffer($t,re,jt,Gt,le,Oe,jt,Gt,z.COLOR_BUFFER_BIT,z.NEAREST):Tn?z.copyTexSubImage3D(Pe,It,le,Oe,Qe+Cn,$t,re,jt,Gt):z.copyTexSubImage2D(Pe,It,le,Oe,$t,re,jt,Gt);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Pe,It,le,Oe,Qe,jt,Gt,Zt,Be,ae,Ye.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Pe,It,le,Oe,Qe,jt,Gt,Zt,Be,Ye.data):z.texSubImage3D(Pe,It,le,Oe,Qe,jt,Gt,Zt,Be,ae,Ye):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,It,le,Oe,jt,Gt,Be,ae,Ye.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,It,le,Oe,Ye.width,Ye.height,Be,Ye.data):z.texSubImage2D(z.TEXTURE_2D,It,le,Oe,jt,Gt,Be,ae,Ye);z.pixelStorei(z.UNPACK_ROW_LENGTH,de),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qi),z.pixelStorei(z.UNPACK_SKIP_ROWS,En),z.pixelStorei(z.UNPACK_SKIP_IMAGES,hi),It===0&&Z.generateMipmaps&&z.generateMipmap(Pe),Rt.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&k.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?k.setTextureCube(R,0):R.isData3DTexture?k.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?k.setTexture2DArray(R,0):k.setTexture2D(R,0),Rt.unbindTexture()},this.resetState=function(){V=0,J=0,$=null,Rt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const au={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ml{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const B2=new mu(-1,1,1,-1,0,1);class I2 extends Gn{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}}const F2=new I2;class lx{constructor(t){this._mesh=new yn(F2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,B2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class H2 extends ml{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Fn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=cu.clone(t.uniforms),this.material=new Fn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new lx(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class x_ extends ml{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,h;this.inverse?(f=0,h=1):(f=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class G2 extends ml{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class V2{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new Nt);this._width=s.width,this._height=s.height,i=new $n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new H2(au),this.copyPass.material.blending=Wi,this.clock=new Hb}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}x_!==void 0&&(f instanceof x_?s=!0:f instanceof G2&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class k2 extends ml{constructor(t,i,s=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ye}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const X2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Wr extends ml{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Nt(t.x,t.y):new Nt(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new $n(c,f,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new $n(c,f,{type:ui});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const x=new $n(c,f,{type:ui});x.texture.name="UnrealBloomPass.v"+g,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),c=Math.round(c/2),f=Math.round(f/2)}const h=X2;this.highPassUniforms=cu.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Nt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cu.clone(au.uniforms),this.blendMaterial=new Fn({uniforms:this.copyUniforms,vertexShader:au.vertexShader,fragmentShader:au.fragmentShader,premultipliedAlpha:!0,blending:su,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new Br,this._fsQuad=new lx(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new Nt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=Wr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Wr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[],s=t/3;for(let l=0;l<t;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Fn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Nt(.5,.5)},direction:{value:new Nt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Fn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Wr.BlurDirectionX=new Nt(1,0);Wr.BlurDirectionY=new Nt(0,1);const ts={Bolt:({size:r=24,className:t})=>Et.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:Et.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),Home:({size:r=24,className:t})=>Et.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[Et.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),Et.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),Bag:({size:r=24,className:t})=>Et.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[Et.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),Et.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Et.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),Trash:({size:r=16,className:t})=>Et.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[Et.jsx("polyline",{points:"3 6 5 6 21 6"}),Et.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Coins:({size:r=16,className:t})=>Et.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[Et.jsx("circle",{cx:"8",cy:"8",r:"6"}),Et.jsx("path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"})]}),Lock:({size:r=16,className:t})=>Et.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:[Et.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),Et.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),ArrowLeft:({size:r=24,className:t})=>Et.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:Et.jsx("polyline",{points:"15 18 9 12 15 6"})}),ArrowRight:({size:r=24,className:t})=>Et.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:t,children:Et.jsx("polyline",{points:"9 18 15 12 9 6"})})},S_=[{name:"Tuerca Oxidada",val:5,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔩",chance:.2},{name:"Cable Pelado",val:8,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔌",chance:.18},{name:"Lata Espacial",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🥫",chance:.18},{name:"Fragmento Metálico",val:4,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"⚙️",chance:.16},{name:"Residuo Plástico",val:2,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🧩",chance:.15},{name:"Cristal Roto",val:6,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"💎",chance:.14},{name:"Tornillo Suelto",val:3,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"🔧",chance:.13},{name:"Chapa Abollada",val:7,rarity:"Común",style:"text-gray-400",border:"border-gray-600",icon:"📦",chance:.12},{name:"Placa de Acero",val:25,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🛡️",chance:.12},{name:"Batería de Iones",val:40,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔋",chance:.1},{name:"Sensor Óptico",val:35,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"👁️",chance:.09},{name:"Conductor de Energía",val:50,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚡",chance:.08},{name:"Aleación Refinada",val:60,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"🔬",chance:.07},{name:"Núcleo de Plasma",val:80,rarity:"Poco Común",style:"text-emerald-400",border:"border-emerald-500",icon:"⚛️",chance:.06},{name:"Chip Cuántico",val:150,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💾",chance:.07},{name:"Motor de Iones",val:200,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"🛸",chance:.06},{name:"Cristal de Energía",val:300,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"💠",chance:.05},{name:"Dispositivo Holográfico",val:400,rarity:"Raro",style:"text-blue-400",border:"border-blue-500",icon:"📡",chance:.04},{name:"Motor WARP",val:750,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🚀",chance:.04},{name:"Núcleo Estelar",val:1200,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"⭐",chance:.03},{name:"Artefacto Antiguo",val:2e3,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🏺",chance:.025},{name:"Generador de Campo",val:3500,rarity:"Épico",style:"text-purple-400",border:"border-purple-500",icon:"🌀",chance:.02},{name:"Antimateria",val:5e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"⚛️",chance:.015},{name:"Huevo Dragón",val:8e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🥚",chance:.01},{name:"Fragmento de Agujero Negro",val:15e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"🕳️",chance:.008},{name:"Esencia Cósmica",val:25e3,rarity:"Legendario",style:"text-yellow-400",border:"border-yellow-500",icon:"✨",chance:.005},{name:"Partícula Dios",val:5e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"🌌",chance:.002},{name:"Corazón de Estrella",val:1e5,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"❤️",chance:.001},{name:"Fragmento del Big Bang",val:25e4,rarity:"Mítico",style:"text-rose-500",border:"border-rose-600",icon:"💥",chance:5e-4}],tl=[{id:0,name:"Sistema Solar",cost:0,rarityMultiplier:1,style:{planetColor1:"#1e3c72",planetColor2:"#2a5298",atmosphereColor:4491519,ringColor:8965375,hasRings:!0}},{id:1,name:"Nebulosa Roja",cost:1e4,rarityMultiplier:1.5,style:{planetColor1:"#7a1f1f",planetColor2:"#a83232",atmosphereColor:16729156,ringColor:16737894,hasRings:!1}},{id:2,name:"Cúmulo Estelar",cost:3e4,rarityMultiplier:2,style:{planetColor1:"#4a1e7a",planetColor2:"#6b2d9f",atmosphereColor:11158783,ringColor:13395711,hasRings:!0}},{id:3,name:"Galaxia Remota",cost:5e4,rarityMultiplier:2.5,style:{planetColor1:"#1e4a3c",planetColor2:"#2d6b5a",atmosphereColor:4521864,ringColor:6750122,hasRings:!0}},{id:4,name:"Agujero Negro",cost:1e5,rarityMultiplier:3.5,style:{planetColor1:"#0a0a0a",planetColor2:"#1a1a1a",atmosphereColor:4456703,ringColor:6684927,hasRings:!0}}],W2=({missionState:r,level:t,totalDuration:i,timeLeft:s,planet:l})=>{const c=nn.useRef(null),f=nn.useRef(null),h=nn.useRef(null),m=nn.useRef(null),p=nn.useRef(null),g=nn.useRef(null),v=nn.useRef([]),x=(y,E)=>{const b=document.createElement("canvas");b.width=512,b.height=512;const _=b.getContext("2d");_.fillStyle=y,_.fillRect(0,0,512,512);for(let P=0;P<300;P++){const U=Math.random()*512,D=Math.random()*512,B=Math.random()*40+5;_.beginPath(),_.arc(U,D,B,0,Math.PI*2),_.fillStyle=E,_.globalAlpha=.2,_.fill()}return new YM(b)};return nn.useEffect(()=>{let y=0,E=0,T=0;const b=.025,_=new GM;_.fog=new Sp(657952,.005);const P=new Kn(50,window.innerWidth/window.innerHeight,.1,1e3);g.current=P;const U=new z2({alpha:!1,antialias:!0,powerPreference:"high-performance"});U.setSize(window.innerWidth,window.innerHeight),U.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),U.toneMapping=lp,U.toneMappingExposure=1.2,c.current&&(c.current.innerHTML="",c.current.appendChild(U.domElement));const D=new k2(_,P),B=new Wr(new Nt(window.innerWidth,window.innerHeight),1.5,.4,.85);B.threshold=.2,B.strength=1.2,B.radius=.5;const H=new V2(U);H.addPass(D),H.addPass(B);const I=new Nb(4210784,0,3);_.add(I);const q=new Ib(16777215,2);q.position.set(10,10,10),_.add(q);const C=new Ob(10309341,10);C.position.set(-5,5,-5),_.add(C);const w=new Jo;f.current=w;const V=new td({color:9055202}),J=new td({color:1118481}),$=new td({color:8965375,transparent:!0,opacity:.7}),ct=new Yr(3,1.5,1),at=new yn(ct,V);w.add(at);const L=new Mp(.5,.5,1.2,8),F=new yn(L,$);F.rotation.x=Math.PI/2,F.position.set(1.5,.4,0),w.add(F);const j=new ep;j.moveTo(0,0),j.lineTo(-1.5,0),j.lineTo(-1.5,.5),j.lineTo(0,.2);const St={depth:.1,bevelEnabled:!1},gt=new uu(j,St),O=new yn(gt,J);O.rotation.z=Math.PI/2,O.rotation.x=Math.PI/6,O.position.set(1,.4,.25),w.add(O);const tt=O.clone();tt.rotation.x=-Math.PI/6,tt.position.set(1,.4,-.25),w.add(tt);const dt=new ep;dt.moveTo(0,0),dt.quadraticCurveTo(.5,.5,.5,1),dt.lineTo(-.8,.8),dt.quadraticCurveTo(-.5,.4,-.8,0);const Mt=new yn(new uu(dt,{depth:.1,bevelEnabled:!1}),V);Mt.rotation.y=Math.PI/2,Mt.position.set(-1,1.25,0),w.add(Mt);const Ut=new zb(16755200,5,50);Ut.position.set(-1.5,0,0),w.add(Ut),p.current=Ut,w.rotation.y=Math.PI*.5,_.add(w);const et=tl[l],ht=x(et.style.planetColor1,et.style.planetColor2),Ot=new sl(6,64,64),Vt=new wb({map:ht,roughness:.8,metalness:.1}),kt=new yn(Ot,Vt);h.current=kt,kt.position.set(0,0,0),_.add(kt);const ge=new Br({color:et.style.atmosphereColor,transparent:!0,opacity:.5,side:Wn}),Re=new yn(new sl(6.3,64,64),ge);if(_.add(Re),et.style.hasRings){const Rt=new Tp(8,10,64),N=new Br({color:et.style.ringColor,side:Vi,transparent:!0,opacity:.4}),M=new yn(Rt,N);M.rotation.x=Math.PI/2,_.add(M)}const ue=new Gn,_t=5e3,Tt=new Float32Array(_t*3);for(let Rt=0;Rt<_t*3;Rt+=3)Tt[Rt]=(Math.random()-.5)*1e3,Tt[Rt+1]=(Math.random()-.5)*1e3,Tt[Rt+2]=(Math.random()-.5)*1e3;ue.setAttribute("position",new Oi(Tt,3));const bt=new Y_({color:16777215,size:.5,sizeAttenuation:!0});m.current=new qM(ue,bt),_.add(m.current);const Bt=new sl(.2,4,4),z=new Br({color:16755200,transparent:!0,opacity:.8,blending:su,depthWrite:!1});v.current=[];for(let Rt=0;Rt<80;Rt++){const N=new yn(Bt,z.clone());N.visible=!1,_.add(N),v.current.push({mesh:N,life:0,velocity:new Y})}P.position.set(0,3,12),P.lookAt(0,0,0);let ne;const Ft=()=>{ne=requestAnimationFrame(Ft);const Rt=performance.now()*.001,N=window.missionActive;if(T=zn.lerp(T,N?1:0,.02),f.current&&p.current){let M=0;if(N){f.current.position.x=zn.lerp(f.current.position.x,0,.1),f.current.position.z=zn.lerp(f.current.position.z,0,.1),f.current.position.y=zn.lerp(f.current.position.y,0,.1);const k=f.current.rotation.y;let ot=k+.05*Math.sin(Rt*5e-4);Math.abs(ot-k)>Math.PI&&(ot>k?ot-=2*Math.PI:ot+=2*Math.PI),f.current.rotation.y=zn.lerp(k,ot,.04);let pt=f.current.rotation.y-y;pt>Math.PI&&(pt-=2*Math.PI),pt<-Math.PI&&(pt+=2*Math.PI),M=zn.clamp(-pt*30,-.7,.7);const ut=-.1*T;f.current.rotation.x=zn.lerp(f.current.rotation.x,ut,.05),p.current.intensity=zn.lerp(p.current.intensity,25*T+5,.05)}else{f.current.position.x=zn.lerp(f.current.position.x,0,.08),f.current.position.z=zn.lerp(f.current.position.z,0,.08),E+=.005;const pt=15/(1+.5*Math.cos(E));f.current.position.x=pt*Math.cos(E),f.current.position.z=pt*Math.sin(E),f.current.position.y=1.5+Math.sin(Rt*.5)*.2,f.current.lookAt(0,0,0),f.current.rotation.x=zn.lerp(f.current.rotation.x,0,.05),M=0,p.current.intensity=zn.lerp(p.current.intensity,5,.1)}y=f.current.rotation.y,f.current.rotation.z=zn.lerp(f.current.rotation.z,M,.08)}if(v.current.forEach(M=>{if(N){if(M.life<=0){M.mesh.visible=!0,M.life=Math.random()*50+20;const ot=(Math.random()-.5)*Math.PI*.2,pt=Math.random()*.5;M.mesh.position.set(-1.5+Math.cos(ot)*pt,Math.sin(ot)*pt,(Math.random()-.5)*.5),M.mesh.position.applyQuaternion(f.current.quaternion),M.mesh.position.add(f.current.position),M.velocity.set(0,0,-20),M.velocity.applyQuaternion(f.current.quaternion),M.velocity.x+=(Math.random()-.5)*2,M.velocity.y+=(Math.random()-.5)*2,M.velocity.z+=(Math.random()-.5)*2}const k=1+T*2;M.mesh.position.addScaledVector(M.velocity,.01*k),M.mesh.material.opacity=M.life/70,M.life--}else M.life=0,M.mesh.visible=!1}),g.current&&f.current){const M=f.current.position;if(N){const k=M.z+12+15*T,ot=4+1*T,pt=M.x+Math.sin(Rt*.5)*.5;g.current.position.z=zn.lerp(g.current.position.z,k,b),g.current.position.y=zn.lerp(g.current.position.y,ot,b),g.current.position.x=zn.lerp(g.current.position.x,pt,b),g.current.lookAt(M.x,M.y,M.z)}else{const pt=M.clone().sub(new Y(0,0,0)).normalize().multiplyScalar(15),ut=M.clone().add(pt.multiplyScalar(-1));ut.y=3,g.current.position.lerp(ut,b),g.current.lookAt(M.x,M.y,M.z)}}h.current&&(h.current.rotation.y+=.001),H.render()};Ft();const ie=()=>{g.current.aspect=window.innerWidth/window.innerHeight,g.current.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight),H.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ie),()=>{window.removeEventListener("resize",ie),cancelAnimationFrame(ne),c.current&&(c.current.innerHTML=""),U.dispose()}},[t,l]),nn.useEffect(()=>{window.missionActive=r==="mining",window.totalTime=i,window.currentTime=s},[r,i,s]),Et.jsx("div",{ref:c,id:"canvas-container",className:"absolute top-0 left-0 w-full h-full z-0 bg-black"})},q2=({item:r,onClose:t})=>Et.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm",children:Et.jsxs("div",{className:"bg-gray-900 p-6 rounded-2xl shadow-2xl border-2 border-green-500/50 max-w-sm w-full text-white text-center font-orbitron transform scale-100 transition-all duration-300",children:[Et.jsx("div",{className:"text-3xl mb-4 font-extrabold text-green-400",children:"¡Misión Exitosa!"}),Et.jsx("p",{className:"text-sm mb-6 text-gray-400",children:"Has minado un nuevo recurso:"}),Et.jsxs("div",{className:"flex items-center justify-center gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700 mb-6",children:[Et.jsx("div",{className:"text-4xl w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 shadow-inner",children:r.icon}),Et.jsxs("div",{children:[Et.jsx("h3",{className:`font-bold text-lg leading-tight ${r.style}`,children:r.name}),Et.jsx("span",{className:"text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-0.5 rounded mt-1 inline-block text-gray-400",children:r.rarity})]}),Et.jsxs("div",{className:"text-right",children:[Et.jsxs("div",{className:"text-xl font-mono text-white font-bold tracking-tight",children:["+",r.val.toLocaleString(),"₡"]}),Et.jsx("div",{className:"text-xs text-gray-500 mt-1 font-mono",children:"Valor"})]})]}),Et.jsx("button",{onClick:t,className:"w-full py-3 rounded-xl font-bold tracking-widest bg-green-600 hover:bg-green-500 transition-all active:scale-95 shadow-lg shadow-green-500/30",children:"RECLAMAR"})]})});function Y2(){const[r,t]=nn.useState(500),[i,s]=nn.useState(1),[l,c]=nn.useState([]),[f,h]=nn.useState("idle"),[m,p]=nn.useState(0),[g,v]=nn.useState(10),[x,y]=nn.useState(null),[E,T]=nn.useState("home"),[b,_]=nn.useState(0),[P,U]=nn.useState([0]);nn.useEffect(()=>{let L=null;return f==="mining"&&m>0?L=setInterval(()=>{p(F=>F-1)},1e3):m===0&&f==="mining"&&(clearInterval(L),B(),h("reward")),()=>clearInterval(L)},[f,m]);const D=()=>{const L=Math.max(5,10-Math.floor(i/5));v(L),p(L),h("mining")},B=()=>{const L=Math.random();let F=S_[0];const j=i*.1,gt=tl[b]?.rarityMultiplier||1,O=S_.map(Mt=>{let Ut=Mt.chance;return Mt.rarity==="Común"&&(Ut/=1+j,Ut/=gt),Mt.rarity==="Poco Común"&&(Ut*=1+j*.5,Ut*=gt*.5),Mt.rarity==="Raro"&&(Ut*=1+j*1,Ut*=gt*1),Mt.rarity==="Épico"&&(Ut*=1+j*1.5,Ut*=gt*1.5),(Mt.rarity==="Legendario"||Mt.rarity==="Mítico")&&(Ut*=1+j*2,Ut*=gt*2),{...Mt,adjustedChance:Math.max(1e-5,Ut)}}),tt=O.reduce((Mt,Ut)=>Mt+Ut.adjustedChance,0);let dt=0;for(let Mt of O)if(dt+=Mt.adjustedChance/tt,L<=dt){F=Mt;break}y(F),c(Mt=>[...Mt,F])},H=()=>{y(null),h("idle")},I=(L,F=!1)=>{if(F){const j=l.filter(O=>O.name===L.name),St=l.filter(O=>O.name!==L.name),gt=j.reduce((O,tt)=>O+tt.val,0);t(O=>O+gt),c(St)}else{const j=l.findIndex(St=>St.name===L.name);if(j>-1){const St=[...l];St.splice(j,1),t(gt=>gt+L.val),c(St)}}},q=()=>{const L=i*250;r>=L&&(t(F=>F-L),s(F=>F+1))},C=(L,F)=>{r>=F&&(t(j=>j-F),U(j=>[...j,L]))},w=L=>{_(F=>{let j=F+L;return j<0&&(j=tl.length-1),j>=tl.length&&(j=0),j})},V=nn.useMemo(()=>{const L={};return l.forEach(F=>{L[F.name]||(L[F.name]={...F,count:0,total:0}),L[F.name].count++,L[F.name].total+=F.val}),Object.values(L).sort((F,j)=>j.val-F.val)},[l]),J=tl[b],$=P.includes(J.id),ct=r>=i*250,at=f==="mining";return Et.jsxs("div",{className:"min-h-screen bg-black text-white font-sans relative overflow-hidden",children:[Et.jsx(W2,{missionState:f,level:i,totalDuration:g,timeLeft:m,planet:b}),x&&Et.jsx(q2,{item:x,onClose:H}),Et.jsxs("div",{className:"absolute inset-0 z-10 flex flex-col p-4 pointer-events-none",children:[Et.jsxs("div",{className:"flex justify-between items-start pointer-events-auto",children:[Et.jsxs("div",{className:"flex flex-col bg-black/50 backdrop-blur-sm p-3 rounded-xl border border-white/10 shadow-lg",children:[Et.jsxs("div",{className:"flex items-center gap-2 text-xl font-bold font-mono text-yellow-400",children:[Et.jsx(ts.Coins,{size:16,className:"text-yellow-400"}),r.toLocaleString()," ₡"]}),Et.jsx("div",{className:"mt-1 text-sm font-orbitron text-gray-400 leading-none",children:"CRÉDITOS"})]}),Et.jsxs("div",{className:"flex flex-col items-end bg-black/50 backdrop-blur-sm p-3 rounded-xl border border-white/10 shadow-lg",children:[Et.jsx("div",{className:"text-lg font-bold font-orbitron text-blue-400 leading-none",children:"NIVEL DRON"}),Et.jsx("div",{className:"text-3xl font-bold font-mono text-blue-400",children:i})]})]}),Et.jsxs("div",{className:"flex-1 flex flex-col justify-center items-center",children:[f==="mining"&&Et.jsxs("div",{className:"bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-blue-500/50 shadow-2xl shadow-blue-500/30 text-center font-orbitron animate-pulse",children:[Et.jsx("div",{className:"text-4xl font-extrabold text-blue-400 mb-2",children:"VIAJANDO"}),Et.jsxs("div",{className:"text-xl font-mono text-white tracking-widest",children:[m," / ",g,"s"]})]}),f==="reward"&&Et.jsxs("div",{className:"bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-green-500/50 shadow-2xl shadow-green-500/30 text-center font-orbitron",children:[Et.jsx("div",{className:"text-4xl font-extrabold text-green-400 mb-2",children:"RECOMPENSA"}),Et.jsx("div",{className:"text-xl font-mono text-white tracking-widest",children:"Reclamando..."})]})]}),Et.jsxs("div",{className:"flex-0 pointer-events-auto",children:[E==="home"&&Et.jsxs("div",{className:"bg-black/70 backdrop-blur-xl p-4 rounded-t-3xl border-t border-white/10 shadow-2xl max-w-md mx-auto",children:[Et.jsxs("h2",{className:"text-center text-xl font-orbitron font-bold text-white mb-4 leading-none",children:["DESTINO: ",Et.jsx("span",{className:"text-purple-400",children:J.name})]}),Et.jsxs("div",{className:"flex items-center justify-between gap-3 mb-4",children:[Et.jsxs("button",{onClick:q,disabled:!ct||at,className:`flex-1 py-3 px-2 rounded-xl border font-bold text-sm leading-tight font-orbitron transition-all ${ct&&!at?"bg-blue-600 hover:bg-blue-500 border-b-4 border-blue-800 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/30":"bg-gray-700/50 border-gray-700 text-gray-400 cursor-not-allowed"}`,children:["MEJORAR DRON ",Et.jsx("br",{}),Et.jsx("span",{className:"font-mono text-xs block mt-1",children:ct?(i*250).toLocaleString()+" ₡":"MAX/SIN FONDOS"})]}),!$&&Et.jsxs("button",{onClick:()=>C(J.id,J.cost),disabled:r<J.cost||at,className:`flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-xl border font-bold text-sm leading-tight font-orbitron transition-all ${r>=J.cost&&!at?"bg-purple-600 hover:bg-purple-500 border-b-4 border-purple-800 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/30":"bg-gray-700/50 border-gray-700 text-gray-500 cursor-not-allowed"}`,children:[Et.jsx(ts.Lock,{size:14}),Et.jsxs("div",{className:"flex flex-col items-start leading-none",children:[Et.jsxs("span",{className:"text-[10px]",children:["COMPRAR ",J.name]}),Et.jsxs("span",{className:"text-sm font-mono",children:[J.cost.toLocaleString()," ₡"]})]})]})]}),Et.jsxs("div",{className:"flex items-center gap-3",children:[Et.jsx("button",{onClick:()=>w(-1),disabled:f==="mining",className:`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${f==="mining"?"opacity-30 border-gray-800 cursor-not-allowed":"border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95"}`,children:Et.jsx(ts.ArrowLeft,{size:20})}),Et.jsxs("div",{className:"flex-1",children:[f==="idle"&&Et.jsxs("button",{onClick:D,disabled:!$,className:`w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base transition-all ${$?"bg-green-600 text-white border-green-800 hover:bg-green-500 hover:scale-[1.02] active:scale-[0.98] shadow-green-500/50":"bg-gray-700/50 text-gray-400 border-gray-800 cursor-not-allowed"}`,children:["INICIAR MISIÓN (",Math.max(5,10-Math.floor(i/5)),"s)"]}),f==="mining"&&Et.jsx("button",{disabled:!0,className:"w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base bg-yellow-600/50 text-white border-yellow-800 cursor-not-allowed animate-pulse",children:"VIAJANDO..."}),f==="reward"&&Et.jsx("button",{onClick:H,className:"w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base bg-green-600 text-white border-green-800 hover:bg-green-500 hover:scale-[1.02] active:scale-[0.98] shadow-green-500/50",children:"RECLAMAR"})]}),Et.jsx("button",{onClick:()=>w(1),disabled:f==="mining",className:`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${f==="mining"?"opacity-30 border-gray-800 cursor-not-allowed":"border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95"}`,children:Et.jsx(ts.ArrowRight,{size:20})})]})]}),E==="inventory"&&Et.jsxs("div",{className:"bg-black/70 backdrop-blur-xl p-4 rounded-t-3xl border-t border-white/10 shadow-2xl max-w-md mx-auto h-[250px] overflow-y-auto",children:[Et.jsx("h2",{className:"text-center text-xl font-orbitron font-bold text-white mb-4 leading-none",children:"INVENTARIO"}),V.length===0&&Et.jsx("div",{className:"text-center text-gray-500 mt-8 font-orbitron",children:"Inventario vacío. ¡A minar!"}),Et.jsx("div",{className:"space-y-3",children:V.map(L=>Et.jsxs("div",{className:`flex items-center gap-3 bg-gray-800 p-3 rounded-xl border ${L.border} border-l-4`,children:[Et.jsx("div",{className:"text-2xl w-10 h-10 flex items-center justify-center rounded border border-white/5",children:L.icon}),Et.jsxs("div",{className:"flex-1",children:[Et.jsx("h3",{className:`font-bold text-base leading-tight ${L.style}`,children:L.name}),Et.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["x",L.count]})]}),Et.jsxs("div",{className:"text-right",children:[Et.jsxs("div",{className:"text-sm font-mono text-white tracking-tight",children:[L.total.toLocaleString(),"₡"]}),Et.jsx("div",{className:"text-xs text-gray-500 mt-0.5",children:"Valor total"})]}),Et.jsx("button",{onClick:()=>I(L,!0),className:"text-red-400 hover:text-red-300 transition-colors p-1 rounded-full hover:bg-gray-700/50",children:Et.jsx(ts.Trash,{size:16})})]},L.name))})]}),Et.jsxs("nav",{className:"flex justify-around bg-gray-900/90 backdrop-blur-md border-t border-gray-700/50 py-2 max-w-lg mx-auto rounded-t-lg",children:[Et.jsxs("button",{onClick:()=>T("shop"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${E==="shop"?"text-blue-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,disabled:!0,children:[Et.jsx(ts.Bolt,{className:"w-6 h-6"}),Et.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"NAVE"})]}),Et.jsx("div",{className:"relative -top-8",children:Et.jsx("button",{onClick:()=>T("home"),className:`w-20 h-20 rounded-full flex items-center justify-center border-[6px] border-black shadow-2xl transition-all duration-300 ${E==="home"?"bg-blue-600 scale-110 shadow-blue-500/50":"bg-gray-800 hover:bg-gray-700"}`,children:Et.jsx(ts.Home,{className:"w-8 h-8 text-white"})})}),Et.jsxs("button",{onClick:()=>T("inventory"),className:`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${E==="inventory"?"text-yellow-400 -translate-y-1":"text-gray-600 hover:text-gray-400"}`,children:[Et.jsxs("div",{className:"relative",children:[Et.jsx(ts.Bag,{className:"w-6 h-6"}),l.length>0&&Et.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full shadow-lg border border-gray-900"})]}),Et.jsx("span",{className:"text-[9px] font-bold tracking-widest font-orbitron",children:"INVENTARIO"})]})]})]})]})]})}My.createRoot(document.getElementById("root")).render(Et.jsx(nn.StrictMode,{children:Et.jsx(Y2,{})}));
